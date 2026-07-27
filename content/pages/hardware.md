---
title: hardware
line: H
tag: flagship build
accent: var(--red)
dek: I build small computers and the circuit boards that bring them to life. My main project is Navigator — a handheld computer I'm designing from scratch.
description: Navigator — a calm, repairable, modular Linux handheld I'm designing from scratch, from circuit board to firmware to power.
---

I like building the actual thing — the circuit board, the chips on it, the code that runs on those chips, and the unglamorous parts like power and battery life. It sits right between electronics and software, which is exactly where I want to be. It's also the work I lead elsewhere: I'm **Hardware Lead at ARKANOX**, an early-stage electrical & computer engineering startup. But everything I'm learning on my own funnels into one project: **Navigator**.

## Navigator, my flagship

Navigator is a small, calm computer you can hold in one hand. Think of it less like a phone and more like an honest little device you can open up, repair, and add to. It runs Linux — the same kind of operating system that powers most of the internet — but in a body I'm designing myself, part by part.

The goal isn't to cram in features. It's to build something quiet, repairable, and genuinely mine.

## Two brains, one clean split

Navigator uses two chips instead of one, and that's the key idea.

A **Raspberry Pi** (a tiny full computer, about the size of a stick of gum) handles the software side and runs Linux. Next to it sits a much simpler chip called a **microcontroller**, which acts like a butler for the hardware: it watches the battery, reads the keyboard, drives the status lights, and manages sleep.

Splitting the jobs this way keeps the software clean and makes the battery last far longer — the little chip can keep essential things alive even while the main computer is asleep.

## CommLink: one port, many add-ons

I'm designing a single connector I call **CommLink**. It's both a physical plug and a shared "language" that every accessory speaks, so anything can talk to Navigator the same way.

Snap on a camera, a GPS, a long-range radio, or a second device, and it just works. That's what makes Navigator expandable instead of finished the day it's built. The first CommLink device is a companion e-reader — a separate, ultra-low-power gadget with a paper-like e-ink screen (the same kind a Kindle uses) that lasts weeks on a charge and syncs your reading over the port.

## The rules I'm building to

A few principles keep the whole thing honest:

- **No noisy notifications.** Three small status lights tell you what matters — battery, messages, system — and nothing blinks just to look cool.
- **A battery you can swap yourself.** Openable and fixable, not glued shut.
- **Works fully offline.** It shouldn't need the internet to be useful.
- **Built to last, not to replace.** Modular, repairable, and made to be kept.

## What's next

The big design decisions are settled — the two-chip layout, how CommLink works, and roughly what the device should do day to day. From here the plan is to draw the real circuit board, add up how much battery every part needs, and wire up the keyboard on a breadboard to test it. After that comes the first prototype: a thin case, a swappable battery, and the companion e-reader as the first thing to plug in.

If you want to follow along or talk hardware, [email me](mailto:toeesh239@gmail.com). You can also read about [the lab](/lab) where the smaller experiments live, or a bit [about me](/about).
