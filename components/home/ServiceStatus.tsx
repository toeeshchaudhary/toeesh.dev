// Compact status strip for current portfolio priorities. Static, no ticker.
import * as motion from 'motion/react-client';
import { revealItem } from '@/components/motion/variants';

export default function ServiceStatus() {
  return (
    <motion.section
      className="container"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.45 }}
      variants={revealItem}
      style={{ marginTop: 'clamp(3.5rem, 7vh, 5rem)' }}
    >
      <motion.div
        whileHover={{ borderColor: '#ffd21f', boxShadow: '0 0 0 1px rgba(255, 210, 31, 0.08)' }}
        className="service-board"
      >
        <span className="label" style={{ color: 'var(--bone-3)', flex: 'none' }}>
          current focus
        </span>
        <span className="label service-board__status">
          ● current focus — SAT prep until Aug 22 · Navigator: block diagram, KiCad, power budget ·
          university applications open Nov
        </span>
        <span className="service-board__signal" aria-hidden />
      </motion.div>
    </motion.section>
  );
}
