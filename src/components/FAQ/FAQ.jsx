import FAQItem from './FAQItem';
import { CONTENT } from '../../constants/content';

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="section-title">Common Questions</h2>
        <div className="space-y-6">
          {CONTENT.faq.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}