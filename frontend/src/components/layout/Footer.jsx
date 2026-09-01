import { AppLink, BrandMark, Button, Icon } from '../ui';
import { useLanguage, useTheme } from '../../context';
import { site } from '../../data';

export function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__identity">
        <AppLink to="/" className="footer__brand"><BrandMark /></AppLink>
        <p>Copyright © {new Date().getFullYear()} {site.name}.</p>
        <div className="footer__socials" aria-label="Social links">
          <a href="https://facebook.com" aria-label="Facebook" className="footer__social footer__social--facebook">
            <Icon name="facebook" size={13} />
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="footer__social footer__social--instagram">
            <Icon name="instagram" size={13} />
          </a>
          <a href="https://whatsapp.com" aria-label="WhatsApp" className="footer__social footer__social--whatsapp">
            <Icon name="whatsapp" size={13} />
          </a>
          <a href="https://x.com" aria-label="X" className="footer__social footer__social--x">
            <Icon name="x" size={13} />
          </a>
        </div>
      </div>
      <div className="footer__controls">
        <Button variant="ghost" className="footer__control" onClick={toggleTheme} aria-label="Toggle theme">
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={13} />
        </Button>
        <label className="footer__language">
          <span className="sr-only">Select language</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label="Select language">
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </label>
      </div>
    </footer>
  );
}
