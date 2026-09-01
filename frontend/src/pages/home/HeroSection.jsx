import { motion } from 'framer-motion';
import { useState } from 'react';
import { AppLink, Icon } from '../../components/ui';
import { PhoneMockups } from './PhoneMockups';

const heroTools = [
  ['layout', 'Bio pages'],
  ['link', 'Short links'],
  ['file', 'Transfer files'],
  ['id-card', 'Share cards'],
  ['calendar', 'Event links'],
  ['qr', 'QR codes'],
  ['chart', 'Analytics'],
];

export function HeroSection() {
  const [creatorCount, setCreatorCount] = useState(25);

  return (
    <section className="hero">
      <motion.div
        className="hero__copy"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.button
          className="badge"
          type="button"
          onClick={() => setCreatorCount(25)}
          whileTap={{ scale: 0.96 }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <span className="badge__stars" aria-hidden="true">
            <Icon name="star" size={12} />
            <Icon name="star" size={12} />
            <Icon name="star" size={12} />
            <Icon name="star" size={12} />
            <Icon name="star" size={12} />
          </span>
          Loved by {creatorCount === 0 ? '0' : '25+'} creators
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          A marketing wizard, all-in-one.
        </motion.h1>

        <motion.div
          className="hero__tools"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.28, staggerChildren: 0.06 } },
          }}
        >
          {heroTools.map(([icon, label]) => (
            <AppLink
              to="/login"
              className="hero__tool"
              key={label}
              title={`${label} - Sign in to continue`}
              aria-label={`${label}. Sign in to continue`}
            >
              <Icon name={icon} size={15} />
              {label}
            </AppLink>
          ))}
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <AppLink to="/register" className="btn btn--gradient" whileHover={{ scale: 1.03 }}>
            Get Started
            <Icon name="arrow-right" size={16} />
          </AppLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <PhoneMockups />
      </motion.div>
    </section>
  );
}
