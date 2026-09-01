import { extraProducts, stats } from '../../data';

export function DeepLinksSection() {
  return (
    <section className="band" id="deep-links">
      <div>
        <h2>URLs that open apps automatically</h2>
        <p className="muted">
          Short links that automatically detect the used app and open it on mobile.
        </p>
        <div className="chips">
          {extraProducts.map((item) => (
            <span key={item.label} className="chip">
              {item.emoji} {item.label}
            </span>
          ))}
        </div>
      </div>
      <div className="stats">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <small>{item.label}</small>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
