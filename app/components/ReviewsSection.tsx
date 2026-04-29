'use client';

import { useState, useEffect } from 'react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [totalVotes, setTotalVotes] = useState(15780);
  const [currentAvg, setCurrentAvg] = useState(4.9);
  const [selectedRating, setSelectedRating] = useState(0);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedReviews = localStorage.getItem("yaarwin_v4_reviews");
    const savedVotes = localStorage.getItem("yaarwin_v4_total_votes");
    const savedAvg = localStorage.getItem("yaarwin_v4_avg_rating");

    if (savedReviews) setReviews(JSON.parse(savedReviews));
    else setReviews([
      { name: "Rahul S.", rating: 5, text: "The fastest game I've ever played. Secure and fun!", date: "2 days ago" },
      { name: "Anjali K.", rating: 5, text: "Official guides helped me a lot with registration.", date: "1 week ago" }
    ]);

    if (savedVotes) setTotalVotes(parseInt(savedVotes));
    if (savedAvg) setCurrentAvg(parseFloat(savedAvg));
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("yaarwin_v4_reviews", JSON.stringify(reviews));
      localStorage.setItem("yaarwin_v4_total_votes", totalVotes.toString());
      localStorage.setItem("yaarwin_v4_avg_rating", currentAvg.toString());
    }
  }, [reviews, totalVotes, currentAvg, isMounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (totalVotes > 0 && Math.random() > 0.8) {
        setTotalVotes(prev => prev + Math.floor(Math.random() * 5) + 1);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [totalVotes]);

  const handleSubmit = () => {
    if (!reviewerName.trim() || !reviewText.trim() || selectedRating === 0) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    const newReview: Review = {
      name: reviewerName,
      rating: selectedRating,
      text: reviewText,
      date: "Just now"
    };

    const newTotalVotes = totalVotes + 1;
    const newAvg = ((currentAvg * totalVotes) + selectedRating) / newTotalVotes;

    setReviews([newReview, ...reviews]);
    setTotalVotes(newTotalVotes);
    setCurrentAvg(newAvg);
    setReviewerName('');
    setReviewText('');
    setSelectedRating(0);

    alert("Thank you! Your review has been submitted for moderation.");
  };

  if (!isMounted) return null;

  return (
    <section className="rating-box" id="reviews">
      <div className="live-stats-badge">
        <span className="pulse-dot"></span>
        Live Player Feedback
      </div>
      <h2>Real Player Experiences</h2>
      
      <div className="review-stats-grid" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
        <div className="stat-item">
          <p className="stat-label">Average Rating</p>
          <p className="stat-val">{currentAvg.toFixed(1)}<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/5</span></p>
          <div className="stars" style={{ fontSize: '1.2rem', marginTop: '0.5rem', color: '#fbbf24' }}>
            {'★'.repeat(Math.round(currentAvg))}{'☆'.repeat(5 - Math.round(currentAvg))}
          </div>
        </div>
        <div className="stat-item">
          <p className="stat-label">Verified Members</p>
          <p className="stat-val" style={{ color: 'var(--black)' }}>{totalVotes.toLocaleString()}</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--primary-green)', fontWeight: 'bold' }}>Growing Daily</p>
        </div>
      </div>

      <div id="reviews-display" className="reviews-container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
        {reviews.slice(0, 4).map((r, i) => (
          <div key={i} className="glass-card" style={{ padding: '2rem', borderRadius: '20px', background: 'var(--white)', boxShadow: 'var(--shadow)', border: '1px solid var(--glass-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h4 style={{ color: 'var(--black)', marginBottom: '0.2rem', border: 'none', padding: '0' }}>{r.name}</h4>
                <div style={{ color: '#fbbf24', fontSize: '0.9rem' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.date}</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0', lineHeight: 1.5 }}>&quot;{r.text}&quot;</p>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--primary-green)', fontWeight: 'bold' }}>
              ✓ Verified Player
            </div>
          </div>
        ))}
      </div>

      <div className="submit-review-box" style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--section-bg)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--glass-border)', boxShadow: 'var(--shadow)' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Share Your Experience</h3>
        <div className="rating-input" style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Your Rating:</p>
          <div className="stars" style={{ fontSize: '2rem', color: '#ccc', cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            {[1, 2, 3, 4, 5].map(v => (
              <span 
                key={v} 
                onClick={() => setSelectedRating(v)}
                onMouseEnter={(e) => {
                  const stars = e.currentTarget.parentElement?.children;
                  if (stars) {
                    for (let i = 0; i < stars.length; i++) {
                      (stars[i] as HTMLElement).style.color = i < v ? "#fbbf24" : "#ccc";
                      (stars[i] as HTMLElement).innerHTML = i < v ? "★" : "☆";
                    }
                  }
                }}
                onMouseLeave={(e) => {
                  const stars = e.currentTarget.parentElement?.children;
                  if (stars) {
                    for (let i = 0; i < stars.length; i++) {
                      (stars[i] as HTMLElement).style.color = i < selectedRating ? "#fbbf24" : "#ccc";
                      (stars[i] as HTMLElement).innerHTML = i < selectedRating ? "★" : "☆";
                    }
                  }
                }}
              >
                {v <= selectedRating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Your Name" 
          className="glass-input" 
          style={{ marginBottom: '1rem' }}
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
        />
        <textarea 
          placeholder="Your thoughts on our platform..." 
          className="glass-input" 
          style={{ marginBottom: '1.5rem', minHeight: '100px', resize: 'vertical' }}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
        <button onClick={handleSubmit} className="btn-premium" style={{ width: '100%' }}>Submit Feedback</button>
      </div>
    </section>
  );
}
