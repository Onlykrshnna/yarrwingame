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

// Review System Logic
const reviewForm = document.getElementById("review-form");
const reviewsList = document.getElementById("reviews-list");
const starInput = document.querySelectorAll("#star-rating .star");
const avgRatingEl = document.getElementById("avg-rating");
const voteCountEl = document.getElementById("vote-count");
const ratingMessage = document.getElementById("rating-message");

let selectedRating = 5;
let reviews = JSON.parse(localStorage.getItem("yaarwin_reviews")) || [];

let totalVotes = parseInt(localStorage.getItem("yaarwin_total_votes")) || 0;
let currentAvg = parseFloat(localStorage.getItem("yaarwin_avg_rating")) || 0;

// Initial Render
renderReviews();
updateStats();

// Star Input Logic
starInput.forEach(star => {
  star.addEventListener("mouseover", function() {
    highlightInputStars(this.getAttribute("data-value"));
  });
  star.addEventListener("click", function() {
    selectedRating = parseInt(this.getAttribute("data-value"));
    highlightInputStars(selectedRating);
  });
});

document.getElementById("star-rating").addEventListener("mouseleave", () => {
  highlightInputStars(selectedRating);
});

function highlightInputStars(val) {
  starInput.forEach(s => {
    s.classList.toggle("active", s.getAttribute("data-value") <= val);
  });
}

// Form Submission
if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("review-name").value;
    const text = document.getElementById("review-text").value;

    const newReview = {
      name,
      rating: selectedRating,
      text,
      date: "Just now"
    };

    reviews.unshift(newReview);
    if (reviews.length > 6) reviews.pop(); // Keep only recent reviews

    // Update Stats
    totalVotes++;
    currentAvg = ((currentAvg * (totalVotes - 1)) + selectedRating) / totalVotes;

    // Save & Update UI
    saveState();
    renderReviews();
    updateStats();

    reviewForm.reset();
    selectedRating = 5;
    highlightInputStars(5);
    
    ratingMessage.style.display = "block";
    setTimeout(() => { ratingMessage.style.display = "none"; }, 5000);
  });
}

function renderReviews() {
  if (!reviewsList) return;
  if (reviews.length === 0) {
    reviewsList.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: rgba(255,255,255,0.02); border-radius: 20px; border: 1px dashed rgba(255,255,255,0.1);">
        <p style="color: #666; margin: 0;">No reviews yet. Be the first to share your experience!</p>
      </div>
    `;
    return;
  }
  reviewsList.innerHTML = reviews.map(r => `
    <div class="glass-card" style="padding: 1.5rem; border-radius: 15px; background: rgba(255,255,255,0.03);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <div>
          <h4 style="color: white; margin-bottom: 0.2rem; border: none; padding: 0;">${r.name}</h4>
          <div style="color: #fbbf24; font-size: 0.8rem;">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        </div>
        <span style="font-size: 0.75rem; color: #666;">${r.date}</span>
      </div>
      <p style="font-size: 0.9rem; color: #aaa; margin: 0;">"${r.text}"</p>
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
  localStorage.setItem("yaarwin_reviews", JSON.stringify(reviews));
  localStorage.setItem("yaarwin_total_votes", totalVotes);
  localStorage.setItem("yaarwin_avg_rating", currentAvg);
}

// Simulated Live Updates
setInterval(() => {
  if (totalVotes > 0 && Math.random() > 0.8) {
    totalVotes += Math.floor(Math.random() * 5) + 1;
    updateStats();
    localStorage.setItem("yaarwin_total_votes", totalVotes);
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

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(section);
});
