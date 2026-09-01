import analyticsImage from '../../assets/images/analytics.webp';
import bioLinkImage from '../../assets/images/bio-link.webp';
import qrCodeImage from '../../assets/images/qr-code.webp';
import shortLinkImage from '../../assets/images/short-link.webp';
import staticLinkImage from '../../assets/images/static-link.webp';

const visualImages = {
  bio: bioLinkImage,
  short: shortLinkImage,
  static: staticLinkImage,
  qr: qrCodeImage,
  analytics: analyticsImage,
};

export function FeatureVisual({ type }) {
  const image = visualImages[type];

  if (image) {
    return (
      <div className={`visual visual--image visual--${type}`}>
        <img src={image} alt="" />
      </div>
    );
  }

  if (type === 'qr') {
    return (
      <div className="visual visual--qr">
        <div className="qr-block" />
        <p>Scan to open</p>
      </div>
    );
  }

  if (type === 'analytics') {
    return (
      <div className="visual visual--chart">
        <div className="bars">
          <span style={{ height: '42%' }} />
          <span style={{ height: '68%' }} />
          <span style={{ height: '54%' }} />
          <span style={{ height: '88%' }} />
          <span style={{ height: '61%' }} />
        </div>
        <p>Pageviews by country</p>
      </div>
    );
  }

  return (
    <div className={`visual visual--${type}`}>
      <div className="visual__row" />
      <div className="visual__row visual__row--short" />
      <div className="visual__row" />
      <div className="visual__panel" />
    </div>
  );
}
