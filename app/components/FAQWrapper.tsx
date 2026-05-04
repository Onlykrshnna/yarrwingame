'use client';

import dynamic from 'next/dynamic';

const FAQSection = dynamic(
  () => import('./FAQSection'),
  { ssr: false }
);

export default function FAQWrapper({ faqs }: { faqs: Array<{ question: string, answer: string }> }) {
  return <FAQSection faqs={faqs} />;
}
