import { motion } from 'framer-motion';
import { AppLink, Button, Icon, Input, PasswordInput } from '../components/ui';
import { site } from '../data';

export function RegisterPage() {
  return (
    <section className="auth auth--login">
      <motion.div className="auth__brand" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <AppLink to="/">{site.name}</AppLink>
      </motion.div>
      <motion.div
        className="auth__card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
      <h1>Sign up</h1>
      <form
        className="auth__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input id="name" label="Name" autoComplete="name" required />
        <Input id="email" label="Email" type="email" autoComplete="email" required />
        <PasswordInput id="password" autoComplete="new-password" required />
        <Button type="submit" variant="primary">
          Register
        </Button>
      </form>
      <div className="auth__divider" />
      <Button variant="social"><Icon name="facebook" size={18} />Sign up with Facebook</Button>
      <Button variant="social"><Icon name="google" size={18} />Sign up with Google</Button>
      <p className="muted">
        Already have an account? <AppLink to="/login">Sign in</AppLink>
      </p>
      </motion.div>
    </section>
  );
}
