import heroOneImage from '../../assets/images/hero-one.webp';
import heroTwoImage from '../../assets/images/hero-two.webp';

export function PhoneMockups() {
  return (
    <div className="phones" aria-hidden="true">
      <article className="phone phone--back">
        <img src={heroOneImage} alt="" />
      </article>
      <article className="phone phone--front">
        <img src={heroTwoImage} alt="" />
      </article>
    </div>
  );
}
