// Make My Fantasy - Main JavaScript

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

// Initialize the application
function initializeApp() {
  console.log("Initializing Make My Fantasy app...");
  initStickySignupBar();
  initMobileMenu();
  initSmoothScrolling();
  initCreatorFilters();
  initScrollAnimations();
  initNavbarScroll();
  console.log("App initialization complete!");
}

// -----------
// Sticky Signup Bar functionality
function initStickySignupBar() {
  // Sticky bar is always visible now, no need for scroll-based showing
  console.log("Sticky signup bar initialized - always visible");
}

function showStickyBar() {
  // Sticky bar is always visible, this function is kept for compatibility
  console.log("Sticky bar is always visible");
}

function closeStickyBar() {
  const stickyBar = document.getElementById("sticky-signup-bar");
  if (stickyBar) {
    stickyBar.style.display = "none";
    // Adjust body padding when sticky bar is hidden
    document.body.style.paddingTop = "80px"; // Just navbar height
  }
}

function showStickyBarAgain() {
  const stickyBar = document.getElementById("sticky-signup-bar");
  if (stickyBar) {
    stickyBar.style.display = "block";
    // Restore body padding when sticky bar is shown
    document.body.style.paddingTop = "140px"; // Sticky bar + navbar height
  }
}

// ----------
// Mobile menu functionality
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
      document.body.style.overflow = navMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking on nav links
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight =
          document.querySelector(".main-header").offsetHeight;
        const stickyBar = document.querySelector(".sticky-signup-bar");
        const stickyBarHeight =
          stickyBar && stickyBar.style.display !== "none"
            ? stickyBar.offsetHeight
            : 0;
        const totalOffset = headerHeight + stickyBarHeight + 20;
        const targetPosition = targetElement.offsetTop - totalOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Creator filters functionality
function initCreatorFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Filter creators based on selected filter
      const filter = button.getAttribute("data-filter");
      filterCreators(filter);
    });
  });
}

function filterCreators(filter) {
  const creatorCards = document.querySelectorAll(".creator-card");

  creatorCards.forEach((card) => {
    const cardCategories = card.getAttribute("data-categories") || "";

    if (filter === "all" || cardCategories.includes(filter)) {
      card.style.display = "block";
      // Add animation
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      setTimeout(() => {
        card.style.transition = "all 0.3s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100);
    } else {
      card.style.display = "none";
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".creator-card, .trust-item, .proof-item"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector(".main-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollY = currentScrollY;
  });
}

// Modal functions (will be expanded in modals.js)
function openSignupModal(userType = "fan") {
  console.log(`Opening signup modal for ${userType}`);
  // This will be implemented in modals.js
  createSignupModal(userType);
}

function openLoginModal() {
  console.log("Opening login modal");
  // This will be implemented in modals.js
  createLoginModal();
}

// Load more creators functionality
function loadMoreCreators() {
  const creatorsGrid = document.getElementById("creators-grid");
  const loadMoreBtn = document.querySelector(".section-cta .btn");

  // Show loading state
  loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
  loadMoreBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // This would normally fetch data from an API
    const newCreators = generateCreatorCards(6); // Generate 6 more cards
    creatorsGrid.innerHTML += newCreators;

    // Reset button
    loadMoreBtn.innerHTML = "Load More Creators";
    loadMoreBtn.disabled = false;

    // Re-initialize animations for new cards
    const newCards = creatorsGrid.querySelectorAll(
      ".creator-card:not(.animate-in)"
    );
    newCards.forEach((card) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(card);
    });
  }, 1500);
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Add CSS for animations
const animationStyles = `
    .creator-card,
    .trust-item,
    .proof-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }

    .creator-card.animate-in,
    .trust-item.animate-in,
    .proof-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    /* Fallback: Show cards after 2 seconds if animate-in class is missing */
    .creators-grid .creator-card {
        animation: fadeInFallback 0.5s ease forwards 2s;
    }

    @keyframes fadeInFallback {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .main-header {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .main-header.scrolled {
        background-color: rgba(30, 30, 30, 0.95);
        backdrop-filter: blur(20px);
    }
`;

// Inject animation styles
const styleSheet = document.createElement("style");
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error);
});

// Performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        "Page load time:",
        perfData.loadEventEnd - perfData.loadEventStart,
        "ms"
      );
    }, 0);
  });
}
