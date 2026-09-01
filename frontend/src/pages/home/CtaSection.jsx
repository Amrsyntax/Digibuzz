import { AppLink, Icon } from '../../components/ui';

export function CtaSection() {
  return (
    <section className="cta">
      <h2>Get started</h2>
      <p className="muted">Start using the swiss army knife for the marketers.</p>
      <AppLink to="/register" className="btn btn--gradient">
        Sign up
        <Icon name="arrow-right" size={16} />
      </AppLink>
    </section>
  );
}
