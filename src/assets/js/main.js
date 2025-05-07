// Gaming website main JavaScript

// Add animate-in class to elements as they scroll into view
document.addEventListener('DOMContentLoaded', function() {
  // Animation on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Initialize tooltips
  const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltips.length > 0) {
    tooltips.forEach(tooltip => {
      new bootstrap.Tooltip(tooltip);
    });
  }
  
  // Game filtering functionality (if on reviews page)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const gameCards = document.querySelectorAll('.game-card');
  
  if (filterButtons.length > 0 && gameCards.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide cards based on filter
        gameCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else {
            if (card.getAttribute('data-category') === filterValue) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
});