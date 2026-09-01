import { useState } from 'react';

export function Accordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.question ?? null);

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.question;
        return (
          <div className="accordion__item" key={item.question}>
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.question)}
            >
              {item.question}
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <p className="accordion__panel">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
