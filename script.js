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
    if (href.startsWith('#')) {
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

// Star rating system logic
const starContainer = document.getElementById("star-rating");
const stars = document.querySelectorAll(".star");
const avgRatingEl = document.getElementById("avg-rating");
const voteCountEl = document.getElementById("vote-count");
const ratingMessage = document.getElementById("rating-message");

// Initial state
let totalVotes = parseInt(voteCountEl.innerText.replace(/,/g, '')) || 126786;
let currentAvg = parseFloat(avgRatingEl.innerText) || 4.8;
let userHasVoted = localStorage.getItem("yaarwin_voted") === "true";

// Load dynamic state if exists
const savedVotes = localStorage.getItem("yaarwin_total_votes");
const savedAvg = localStorage.getItem("yaarwin_avg_rating");
if (savedVotes) totalVotes = parseInt(savedVotes);
if (savedAvg) currentAvg = parseFloat(savedAvg);

// Update UI initially
updateStatUI();

if (userHasVoted) {
  starContainer.classList.add("has-voted");
  ratingMessage.style.display = "block";
  highlightStars(Math.round(currentAvg));
}

stars.forEach(star => {
  star.addEventListener("mouseover", function() {
    if (!userHasVoted) {
      const val = parseInt(this.getAttribute("data-value"));
      highlightStars(val);
    }
  });

  star.addEventListener("click", function() {
    if (!userHasVoted) {
      const val = parseInt(this.getAttribute("data-value"));
      submitVote(val);
    }
  });
});

starContainer.addEventListener("mouseleave", function() {
  if (!userHasVoted) {
    highlightStars(0);
  }
});

function highlightStars(val) {
  stars.forEach(s => {
    const starVal = parseInt(s.getAttribute("data-value"));
    if (starVal <= val) {
      s.classList.add("active");
    } else {
      s.classList.remove("active");
    }
  });
}

function updateStatUI() {
  avgRatingEl.innerText = currentAvg.toFixed(1);
  voteCountEl.innerText = totalVotes.toLocaleString();
}

function submitVote(val) {
  // Update local state
  totalVotes += 1;
  currentAvg = ((currentAvg * (totalVotes - 1)) + val) / totalVotes;
  
  // Update UI
  updateStatUI();
  
  // Save state
  userHasVoted = true;
  localStorage.setItem("yaarwin_voted", "true");
  localStorage.setItem("yaarwin_total_votes", totalVotes);
  localStorage.setItem("yaarwin_avg_rating", currentAvg);
  
  starContainer.classList.add("has-voted");
  highlightStars(val);
  
  // Show success message
  ratingMessage.style.display = "block";
}

// Simulated Live Count
setInterval(() => {
  if (Math.random() > 0.7) { // 30% chance to increase count every few seconds
    totalVotes += Math.floor(Math.random() * 3) + 1;
    updateStatUI();
    localStorage.setItem("yaarwin_total_votes", totalVotes);
  }
}, 5000);

// Simple reveal animation on scroll
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  observer.observe(section);
});
