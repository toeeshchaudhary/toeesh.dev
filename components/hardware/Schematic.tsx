'use client';

import { useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { revealContainer, revealItem, tapPress } from '@/components/motion/variants';

// Navigator's block diagram. Specs are the real ones from the design doc —
// this is the only place on the site that shows the machine rather than
// describing it, so it stays accurate or it comes down.
type Node = {
  id: string;
  name: string;
  role: string;
  color: string;
  blurb: string;
  specs: [string, string][];
};

const NODES: Node[] = [
  {
    id: 'host',
    name: 'compute host',
    role: 'Raspberry Pi · application processor',
    color: 'var(--red)',
    blurb:
      'Runs Linux and everything you actually see — the desktop, the terminal, the heavy work. Sleeps hard when it is not needed.',
    specs: [
      ['os', 'Arch / custom Linux'],
      ['role', 'main compute & UI'],
      ['power', 'dynamic scaling / deep sleep'],
      ['link', 'UART + SPI to the butler'],
    ],
  },
  {
    id: 'butler',
    name: 'hardware butler',
    role: 'microcontroller · co-processor',
    color: 'var(--chip-yellow)',
    blurb:
      'The always-on chip. Watches the battery and thermals, scans the key matrix, drives the status LEDs, and gates power to everything else.',
    specs: [
      ['draw', 'low-power mode, under 1 mA'],
      ['tasks', 'battery · key matrix · power gating'],
      ['status', 'always-on watchdog'],
      ['bus', 'CommLink controller'],
    ],
  },
  {
    id: 'commlink',
    name: 'CommLink',
    role: 'unified expansion bus',
    color: 'var(--chip-blue)',
    blurb:
      'One connector and one shared protocol that every accessory speaks. Snap something on and it enumerates itself — no per-device special casing.',
    specs: [
      ['protocols', 'I²C / SPI / high-speed serial'],
      ['modules', 'camera · GPS · LoRa · e-reader'],
      ['hot-plug', 'auto-enumeration'],
      ['rails', 'isolated 3.3 V / 5 V'],
    ],
  },
  {
    id: 'ereader',
    name: 'companion e-reader',
    role: 'CommLink module · e-ink',
    color: 'var(--chip-green)',
    blurb:
      'The first thing built for the port: a separate, ultra-low-power reader with a paper-like screen that syncs over CommLink.',
    specs: [
      ['screen', 'electrophoretic e-paper'],
      ['battery', 'weeks per charge'],
      ['sync', 'over the CommLink bus'],
      ['readable', 'in direct sunlight'],
    ],
  },
  {
    id: 'power',
    name: 'power & battery',
    role: 'swappable cell · USB-C PD',
    color: 'var(--chip-orange)',
    blurb:
      'Openable and repairable, not glued shut. A standard swappable cell, USB-C charging, and three calm status lights instead of notifications.',
    specs: [
      ['cell', 'swappable standard LiPo'],
      ['charge', 'USB-C power delivery'],
      ['indicators', '3-LED calm status strip'],
      ['service', 'user-openable, no adhesive'],
    ],
  },
];

export default function Schematic() {
  const [active, setActive] = useState(NODES[0]);

  return (
    <motion.section
      className="schema"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={revealContainer}
    >
      <motion.div className="section-kicker" variants={revealItem}>
        <span className="label" style={{ color: 'var(--bone)' }}>
          navigator — block diagram
        </span>
        <span className="label">rev 1.0 · pick a block</span>
      </motion.div>

      <div className="schema__grid">
        <motion.div className="schema__board" variants={revealItem}>
          <div className="schema__rank">
            {NODES.slice(0, 2).map((n) => (
              <motion.button
                key={n.id}
                type="button"
                className="schema__node"
                data-active={active.id === n.id}
                style={{ '--project-accent': n.color } as CSSProperties}
                onClick={() => setActive(n)}
                whileTap={tapPress}
              >
                <span className="schema__node-name">{n.name}</span>
                <span className="label schema__node-role">{n.role}</span>
              </motion.button>
            ))}
          </div>

          <span className="schema__bus-label label">two brains, one bus</span>

          <motion.button
            type="button"
            className="schema__node schema__node--bus"
            data-active={active.id === 'commlink'}
            style={{ '--project-accent': NODES[2].color } as CSSProperties}
            onClick={() => setActive(NODES[2])}
            whileTap={tapPress}
          >
            <span className="schema__node-name">{NODES[2].name}</span>
            <span className="label schema__node-role">{NODES[2].role}</span>
          </motion.button>

          <div className="schema__rank">
            {NODES.slice(3).map((n) => (
              <motion.button
                key={n.id}
                type="button"
                className="schema__node"
                data-active={active.id === n.id}
                style={{ '--project-accent': n.color } as CSSProperties}
                onClick={() => setActive(n)}
                whileTap={tapPress}
              >
                <span className="schema__node-name">{n.name}</span>
                <span className="label schema__node-role">{n.role}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="schema__panel"
          variants={revealItem}
          style={{ '--project-accent': active.color } as CSSProperties}
        >
          <span className="label schema__panel-kicker">{active.role}</span>
          <h3 className="schema__panel-name">{active.name}</h3>
          <p className="schema__panel-blurb">{active.blurb}</p>
          <dl className="schema__specs">
            {active.specs.map(([k, v]) => (
              <div key={k}>
                <dt className="label">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </motion.section>
  );
}
