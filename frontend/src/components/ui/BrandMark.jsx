import logo from '../../assets/images/54754.webp';
import { site } from '../../data';

export function BrandMark({ compact = false }) {
  return (
    <span className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-label={site.name}>
      <img src={logo} alt={site.name} className="brand-mark__image" />
    </span>
  );
}