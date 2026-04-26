// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinksContainer) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .btn-nav').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    
    // Only handle internal links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href;
      const targetElement = document.querySelector(targetId);
      
      // Close mobile menu if open
      if (mobileMenuToggle && navLinksContainer) {
        mobileMenuToggle.classList.remove('active');
        navLinksContainer.classList.remove('active');
      }

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for sticky header
          behavior: 'smooth'
        });
      }
    }
  });
});

// Stats System Update
const avgRatingEl = document.getElementById("avg-rating");
const voteCountEl = document.getElementById("vote-count");
const reviewsDisplay = document.getElementById("reviews-display");

let reviews = JSON.parse(localStorage.getItem("yaarwin_v4_reviews")) || [
  { name: "Rahul S.", rating: 5, text: "The fastest game I've ever played. Secure and fun!", date: "2 days ago" },
  { name: "Anjali K.", rating: 5, text: "Official guides helped me a lot with registration.", date: "1 week ago" }
];

let totalVotes = parseInt(localStorage.getItem("yaarwin_v4_total_votes")) || 15780;
let currentAvg = parseFloat(localStorage.getItem("yaarwin_v4_avg_rating")) || 4.9;

let selectedRating = 0;

// Star Input Logic
const starInput = document.getElementById("star-input");
if (starInput) {
  const stars = starInput.querySelectorAll("span");
  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.getAttribute("data-value"));
      updateStarInput();
    });
    star.addEventListener("mouseover", () => {
      const hoverValue = parseInt(star.getAttribute("data-value"));
      stars.forEach((s, index) => {
        s.innerHTML = (index < hoverValue) ? "★" : "☆";
        s.style.color = (index < hoverValue) ? "#fbbf24" : "#ccc";
      });
    });
    star.addEventListener("mouseout", () => {
      updateStarInput();
    });
  });
}

function updateStarInput() {
  if (!starInput) return;
  const stars = starInput.querySelectorAll("span");
  stars.forEach((s, index) => {
    s.innerHTML = (index < selectedRating) ? "★" : "☆";
    s.style.color = (index < selectedRating) ? "#fbbf24" : "#ccc";
  });
}

// Review Submission
const submitBtn = document.getElementById("submit-review-btn");
if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const name = document.getElementById("reviewer-name").value.trim();
    const text = document.getElementById("review-text").value.trim();

    if (!name || !text || selectedRating === 0) {
      alert("Please fill in all fields and select a rating.");
      return;
    }

    const newReview = {
      name: name,
      rating: selectedRating,
      text: text,
      date: "Just now"
    };

    reviews.unshift(newReview);
    totalVotes++;
    
    // Simple average update
    currentAvg = ((currentAvg * (totalVotes - 1)) + selectedRating) / totalVotes;

    saveState();
    renderReviews();
    updateStats();

    // Clear form
    document.getElementById("reviewer-name").value = "";
    document.getElementById("review-text").value = "";
    selectedRating = 0;
    updateStarInput();

    alert("Thank you! Your review has been submitted for moderation.");
  });
}

function renderReviews() {
  if (!reviewsDisplay) return;
  reviewsDisplay.innerHTML = reviews.slice(0, 4).map(r => `
    <div class="glass-card" style="padding: 2rem; border-radius: 20px; background: var(--white); box-shadow: var(--shadow); border: 1px solid var(--glass-border);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
        <div>
          <h4 style="color: var(--black); margin-bottom: 0.2rem; border: none; padding: 0;">${r.name}</h4>
          <div style="color: #fbbf24; font-size: 0.9rem;">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${r.date}</span>
      </div>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin: 0; line-height: 1.5;">"${r.text}"</p>
      <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--primary-green); font-weight: bold;">
        ✓ Verified Player
      </div>
    </div>
  `).join('');
}

function updateStats() {
  if (avgRatingEl) avgRatingEl.innerText = currentAvg.toFixed(1);
  if (voteCountEl) voteCountEl.innerText = totalVotes.toLocaleString();
  
  const statStars = document.getElementById("stat-stars");
  if (statStars) {
    const rounded = Math.round(currentAvg);
    statStars.innerHTML = '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
  }
}

function saveState() {
  localStorage.setItem("yaarwin_v4_reviews", JSON.stringify(reviews));
  localStorage.setItem("yaarwin_v4_total_votes", totalVotes);
  localStorage.setItem("yaarwin_v4_avg_rating", currentAvg);
}

// Initial render
renderReviews();
updateStats();

// Simulated Live Updates
setInterval(() => {
  if (totalVotes > 0 && Math.random() > 0.8) {
    totalVotes += Math.floor(Math.random() * 5) + 1;
    updateStats();
    localStorage.setItem("yaarwin_v4_total_votes", totalVotes);
  }
}, 8000);

// Reveal Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section:not(.hero-section)').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(15px)';
  section.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
  observer.observe(section);
});
