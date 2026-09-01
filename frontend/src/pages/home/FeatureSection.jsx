import { motion } from 'framer-motion';
import { Card, CheckList, Icon } from '../../components/ui';
import { FeatureVisual } from './FeatureVisual';

export function FeatureSection({ feature }) {
  return (
    <motion.section
      className="feature"
      id={feature.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <div className={`feature__grid ${feature.reverse ? 'feature__grid--reverse' : ''}`}>
        <div>
          <div className="feature__icon">
            <Icon name={feature.icon} size={22} />
          </div>
          <h2>{feature.title}</h2>
          <p className="muted">{feature.description}</p>
          <CheckList items={feature.points} />
        </div>
        <div className="feature__visual">
          <FeatureVisual type={feature.visual} />
        </div>
      </div>
    </motion.section>
  );
}
