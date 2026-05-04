'use client';

import dynamic from 'next/dynamic';

const ReviewsSection = dynamic(
  () => import('./ReviewsSection'),
  { 
    ssr: false,
    loading: () => <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading reviews...</div>
  }
);

export default function ReviewsWrapper() {
  return <ReviewsSection />;
}
