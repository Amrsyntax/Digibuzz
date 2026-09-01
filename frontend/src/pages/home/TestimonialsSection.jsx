import { Card, Icon } from '../../components/ui';
import { testimonials } from '../../data';

export function TestimonialsSection() {
  return (
    <section className="band" id="love">
      <h2>Why people love us</h2>
      <div className="testimonials">
        {testimonials.map((item) => (
          <Card key={item.name} className="testimonial-card">
            <div className="testimonial-card__rating" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Icon key={index} name="star" size={14} />
              ))}
            </div>
            <p className="quote">“{item.quote}”</p>
            <div className="person">
              <span className="avatar" style={{ background: item.tone }}>
                {item.initials}
              </span>
              <div>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
