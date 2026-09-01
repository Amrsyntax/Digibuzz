import { AppLink, BrandMark, Button, Icon } from '../ui';
import { useTheme } from '../../context';
import { navLinks } from '../../data';

export function Navbar({ landing = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar" aria-label="Main navigation">
      <AppLink to="/" className="navbar__brand">
        <BrandMark compact />
      </AppLink>
      <nav className="navbar__nav" aria-label="Primary navigation">
        {landing ? (
          <>
            {navLinks.map((link) => (
              <AppLink key={link.to} to={link.to}>{link.label}</AppLink>
            ))}
            <AppLink to="/login" className="btn btn--outline btn--sm">
              <Icon name="login" size={14} />
              Sign in
            </AppLink>
            <AppLink to="/register" className="btn btn--primary btn--sm">
              <Icon name="user-plus" size={14} />
              Sign up
            </AppLink>
          </>
        ) : null}
        {!landing ? <>
        {navLinks.map((link) => (
          <AppLink key={link.to} to={link.to}>
            {link.label}
          </AppLink>
        ))}
        <AppLink to="/login" className="btn btn--outline btn--sm">
          <Icon name="login" size={14} />
          Sign in
        </AppLink>
        <AppLink to="/register" className="btn btn--primary btn--sm">
          <Icon name="user-plus" size={14} />
          Sign up
        </AppLink>
        <Button variant="ghost" className="btn--icon" onClick={toggleTheme} aria-label="Toggle theme">
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
        </Button>
        </> : null}
      </nav>
    </header>
  );
}
