import { useState } from 'react';
import { Icon } from '../../components/ui';

const socialPixels = [
  { name: 'Facebook', icon: 'facebook', color: '#1877f2' },
  { name: 'Instagram', icon: 'instagram', color: '#e1306c' },
  { name: 'WhatsApp', icon: 'whatsapp', color: '#25d366' },
  { name: 'X', icon: 'x', color: '#111827' },
  { name: 'YouTube', icon: 'youtube', color: '#ff0000' },
  { name: 'TikTok', icon: 'tiktok', color: '#111827' },
  { name: 'Snapchat', icon: 'snapchat', color: '#facc15' },
  { name: 'Pinterest', icon: 'pinterest', color: '#e60023' },
  { name: 'Telegram', icon: 'telegram', color: '#229ed9' },
  { name: 'Reddit', icon: 'reddit', color: '#ff4500' },
  { name: 'Discord', icon: 'discord', color: '#5865f2' },
  { name: 'Twitch', icon: 'twitch', color: '#9146ff' },
  { name: 'Threads', icon: 'threads', color: '#111827' },
];

export function PixelsSection() {
  const [activePixel, setActivePixel] = useState(null);

  return (
    <section className="band pixels-section" id="pixels">
      <div className="pixels__heading">
        <h2>Tracking pixels</h2>
        <p className="muted">Connect your links with the social platforms your audience uses every day.</p>
      </div>
      <div className="pixels">
        {socialPixels.map((pixel) => (
          <button
            key={pixel.name}
            type="button"
            className={`pixel ${activePixel === pixel.name ? 'pixel--active' : ''}`}
            onClick={() => setActivePixel((current) => (current === pixel.name ? null : pixel.name))}
            title={pixel.name}
            aria-label={pixel.name}
          >
            <span className="pixel__icon" style={{ color: pixel.color }}>
              <Icon name={pixel.icon} size={28} />
            </span>
            {activePixel === pixel.name ? <strong>{pixel.name}</strong> : null}
          </button>
        ))}
      </div>
    </section>
  );
}
