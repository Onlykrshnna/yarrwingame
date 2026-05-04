'use client';

import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item" style={{ borderBottom: '1px solid #eee' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          fontWeight: 600,
          fontSize: '1.1rem',
          color: 'var(--black)'
        }}
      >
        <span>{title}</span>
        <span style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
          transition: 'transform 0.3s' 
        }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default function FAQSection({ faqs }: { faqs: Array<{ question: string, answer: string }> }) {
  return (
    <div className="faq-accordion" style={{ background: 'var(--white)', borderRadius: '16px', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} title={faq.question}>
          <p>{faq.answer}</p>
        </AccordionItem>
      ))}
    </div>
  );
}
