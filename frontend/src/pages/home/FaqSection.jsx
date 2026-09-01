import { Accordion } from '../../components/ui';
import { faqs } from '../../data';

export function FaqSection() {
  return (
    <section className="band" id="faq">
      <h2>Answer for your common question</h2>
      <Accordion items={faqs} />
    </section>
  );
}
