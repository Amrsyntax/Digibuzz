import { motion } from 'framer-motion';
import { AppLink, Button, Icon, Input, PasswordInput } from '../components/ui';
import { site } from '../data';

export function LoginPage() {
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
      <h1>Sign in</h1>
      <form
        className="auth__form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <Input id="email" label="Email" type="email" autoComplete="email" required />
        <PasswordInput id="password" autoComplete="current-password" required />
        <div className="auth__options">
          <label className="remember">
            <input type="checkbox" defaultChecked />
            Remember me
          </label>
          <a href="#forgot">Lost password</a>
        </div>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
      <div className="auth__divider" />
      <Button variant="social"><Icon name="facebook" size={18} />Sign in with Facebook</Button>
      <Button variant="social"><Icon name="google" size={18} />Sign in with Google</Button>
      <p className="muted">
        Don&apos;t have an account? <AppLink to="/register">Register</AppLink>
      </p>
      </motion.div>
    </section>
  );
}
