// Make My Fantasy - Creators JavaScript

// Sample creator data (in a real app, this would come from an API)
const sampleCreators = [
  {
    id: 1,
    name: "Sophia Rose",
    displayName: "SophiaRose",
    image: "./assets/images/29.jpg",
    subscribers: "12.5K",
    posts: "245",
    rating: "4.9",
    tags: ["Fashion", "Lifestyle", "Beauty"],
    categories: ["new", "trending"],
    preview: "Exclusive fashion content and lifestyle tips",
  },
  {
    id: 2,
    name: "Luna Star",
    displayName: "LunaStar",
    image: "./assets/images/11.jpg",
    subscribers: "8.3K",
    posts: "189",
    rating: "4.8",
    tags: ["Fitness", "Wellness", "Yoga"],
    categories: ["trending", "top"],
    preview: "Fitness motivation and wellness journey",
  },
  {
    id: 3,
    name: "Aria Moon",
    displayName: "AriaMoon",
    image: "./assets/images/2.jpg",
    subscribers: "15.7K",
    posts: "312",
    rating: "4.9",
    tags: ["Art", "Creative", "Photography"],
    categories: ["top", "trending"],
    preview: "Artistic photography and creative content",
  },
  {
    id: 4,
    name: "Zara Night",
    displayName: "ZaraNight",
    image: "./assets/images/5.webp",
    subscribers: "9.1K",
    posts: "156",
    rating: "4.7",
    tags: ["Music", "Dance", "Performance"],
    categories: ["new", "trending"],
    preview: "Music and dance performances",
  },
  {
    id: 5,
    name: "Maya Divine",
    displayName: "MayaDivine",
    image: "./assets/images/6.webp",
    subscribers: "11.2K",
    posts: "278",
    rating: "4.8",
    tags: ["Travel", "Adventure", "Lifestyle"],
    categories: ["top", "new"],
    preview: "Travel adventures and lifestyle content",
  },
  {
    id: 6,
    name: "Raven Black",
    displayName: "RavenBlack",
    image: "./assets/images/7.jpg",
    subscribers: "13.8K",
    posts: "203",
    rating: "4.9",
    tags: ["Fashion", "Gothic", "Alternative"],
    categories: ["trending", "top"],
    preview: "Gothic fashion and alternative style",
  },
  {
    id: 7,
    name: "Scarlett Rose",
    displayName: "ScarlettRose",
    image: "./assets/images/14-c.jpg",
    subscribers: "16.2K",
    posts: "287",
    rating: "4.8",
    tags: ["Glamour", "Fashion", "Luxury"],
    categories: ["top", "trending"],
    preview: "Luxury lifestyle and glamour content",
  },
  {
    id: 8,
    name: "Violet Storm",
    displayName: "VioletStorm",
    image: "./assets/images/30-c.jpg",
    subscribers: "7.9K",
    posts: "134",
    rating: "4.7",
    tags: ["Artistic", "Creative", "Unique"],
    categories: ["new", "trending"],
    preview: "Artistic and creative expressions",
  },
  {
    id: 9,
    name: "Amber Gold",
    displayName: "AmberGold",
    image: "./assets/images/10.jpg",
    subscribers: "14.5K",
    posts: "256",
    rating: "4.9",
    tags: ["Luxury", "Elegance", "Premium"],
    categories: ["top", "trending"],
    preview: "Premium luxury content and elegance",
  },
  {
    id: 10,
    name: "Ruby Fire",
    displayName: "RubyFire",
    image: "./assets/images/15-cc.jpg",
    subscribers: "10.3K",
    posts: "198",
    rating: "4.8",
    tags: ["Passionate", "Bold", "Confident"],
    categories: ["new", "top"],
    preview: "Bold and passionate content",
  },
  {
    id: 11,
    name: "Crystal Blue",
    displayName: "CrystalBlue",
    image: "./assets/images/12.jpg",
    subscribers: "12.7K",
    posts: "223",
    rating: "4.8",
    tags: ["Serene", "Natural", "Peaceful"],
    categories: ["trending", "new"],
    preview: "Serene and natural beauty content",
  },
  {
    id: 12,
    name: "Evelyn White",
    displayName: "EvelynWhite",
    image: "./assets/images/28.jpg",
    subscribers: "9.6K",
    posts: "178",
    rating: "4.7",
    tags: ["Wholesome", "Natural", "Authentic"],
    categories: ["new", "trending"],
    preview: "Wholesome and authentic content",
  },
  {
    id: 13,
    name: "Lily Rose",
    displayName: "LilyRose",
    image: "./assets/images/14.jpg",
    subscribers: "11.2K",
    posts: "205",
    rating: "4.8",
    tags: ["Glamorous", "Fashion", "Luxury"],
    categories: ["top", "trending"],
    preview: "Glamorous and luxurious content",
  },
  {
    id: 14,
    name: "Aurora Night",
    displayName: "AuroraNight",
    image: "./assets/images/15.jpg",
    subscribers: "10.1K",
    posts: "187",
    rating: "4.7",
    tags: ["Mystical", "Enchanting", "Magical"],
    categories: ["new", "trending"],
    preview: "Mystical and enchanting content",
  },
];

// Initialize creators immediately when script loads
(function () {
  console.log("Creators script loaded, initializing...");

  function tryLoadCreators() {
    const creatorsGrid = document.getElementById("creators-grid");
    if (creatorsGrid) {
      if (creatorsGrid.children.length === 0) {
        console.log("Loading initial creators...");
        creatorsGrid.innerHTML = generateCreatorCards(12);
        console.log("Creators loaded:", creatorsGrid.children.length);

        // Add animate-in class to make cards visible
        setTimeout(() => {
          const cards = creatorsGrid.querySelectorAll(".creator-card");
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-in");
            }, index * 100); // Stagger the animations
          });
        }, 100);
      }
    } else {
      console.log("Creators grid not found, retrying...");
      setTimeout(tryLoadCreators, 50);
    }
  }

  // Try immediately
  tryLoadCreators();

  // Also try on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tryLoadCreators);
  } else {
    setTimeout(tryLoadCreators, 10);
  }

  // Final fallback
  setTimeout(tryLoadCreators, 1000);

  // Also try on window load
  window.addEventListener("load", tryLoadCreators);
})();

// Load initial creators (public function for external calls)
function loadInitialCreators() {
  const creatorsGrid = document.getElementById("creators-grid");
  if (creatorsGrid) {
    if (creatorsGrid.children.length === 0) {
      creatorsGrid.innerHTML = generateCreatorCards(12);
      console.log(
        "Initial creators loaded via function:",
        creatorsGrid.children.length
      );

      // Add animate-in class to make cards visible
      setTimeout(() => {
        const cards = creatorsGrid.querySelectorAll(".creator-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("animate-in");
          }, index * 100); // Stagger the animations
        });
      }, 100);
    } else {
      console.log("Creators already loaded, skipping...");
    }
  } else {
    console.error("Creators grid not found!");
    // Try again after a short delay
    setTimeout(loadInitialCreators, 100);
  }
}

// Generate creator cards HTML
function generateCreatorCards(count = 6) {
  let html = "";

  for (let i = 0; i < count; i++) {
    const creator = sampleCreators[i % sampleCreators.length];

    html += `
            <div class="creator-card" data-categories="${creator.categories.join(
              " "
            )}" data-creator-id="${creator.id}">
                <div class="creator-image">
                    <img src="${creator.image}" alt="${
      creator.name
    }" loading="lazy">
                    <div class="creator-overlay">
                        <div class="creator-preview-text">${
                          creator.preview
                        }</div>
                    </div>
                </div>
                
                <div class="creator-info">
                    <h3 class="creator-name">${creator.name}</h3>
                    
                    <div class="creator-stats">
                        <div class="creator-stat">
                            <span class="creator-stat-number">${
                              creator.subscribers
                            }</span>
                            <span class="creator-stat-label">Fans</span>
                        </div>
                        <div class="creator-stat">
                            <span class="creator-stat-number">${
                              creator.posts
                            }</span>
                            <span class="creator-stat-label">Posts</span>
                        </div>
                        <div class="creator-stat">
                            <span class="creator-stat-number">${
                              creator.rating
                            }</span>
                            <span class="creator-stat-label">Rating</span>
                        </div>
                    </div>
                    
                    <div class="creator-tags">
                        ${creator.tags
                          .map(
                            (tag) => `<span class="creator-tag">${tag}</span>`
                          )
                          .join("")}
                    </div>
                    
                    <div class="creator-actions">
                        <button class="btn btn-primary" onclick="subscribeToCreator(${
                          creator.id
                        })">
                            <i class="fas fa-heart"></i> Subscribe
                        </button>
                        <button class="btn btn-secondary" onclick="viewCreatorProfile(${
                          creator.id
                        })">
                            <i class="fas fa-user"></i> View Profile
                        </button>
                    </div>
                </div>
            </div>
        `;
  }

  return html;
}

// Subscribe to creator
function subscribeToCreator(creatorId) {
  const creator = sampleCreators.find((c) => c.id === creatorId);
  if (!creator) return;

  // Check if user is logged in (this would be a real check in production)
  const isLoggedIn = false; // This would come from your auth system

  if (!isLoggedIn) {
    showNotification("Please sign in to subscribe to creators", "info");
    openSignupModal("fan");
    return;
  }

  // Show subscription modal or process subscription
  showSubscriptionModal(creator);
}

// View creator profile
function viewCreatorProfile(creatorId) {
  const creator = sampleCreators.find((c) => c.id === creatorId);
  if (!creator) return;

  showCreatorProfileModal(creator);
}

// Show subscription modal
function showSubscriptionModal(creator) {
  const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content subscription-modal" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Subscribe to ${creator.name}</h2>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="modal-body">
                    <div class="creator-preview">
                        <img src="${creator.image}" alt="${creator.name}" class="creator-avatar">
                        <div class="creator-details">
                            <h3>${creator.name}</h3>
                            <p>@${creator.displayName}</p>
                            <div class="creator-stats-inline">
                                <span><i class="fas fa-users"></i> ${creator.subscribers} fans</span>
                                <span><i class="fas fa-star"></i> ${creator.rating} rating</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="subscription-plans">
                        <h4>Choose Your Plan</h4>
                        <div class="plans-grid">
                            <div class="plan-card">
                                <h5>Monthly</h5>
                                <div class="plan-price">$9.99<span>/month</span></div>
                                <ul class="plan-features">
                                    <li><i class="fas fa-check"></i> All content access</li>
                                    <li><i class="fas fa-check"></i> Direct messaging</li>
                                    <li><i class="fas fa-check"></i> Live streams</li>
                                </ul>
                                <button class="btn btn-primary" onclick="processSubscription('monthly', 9.99, this)">
                                    Subscribe Monthly
                                </button>
                            </div>

                            <div class="plan-card featured">
                                <div class="plan-badge">Most Popular</div>
                                <h5>Annual</h5>
                                <div class="plan-price">$99.99<span>/year</span></div>
                                <div class="plan-savings">Save 17%</div>
                                <ul class="plan-features">
                                    <li><i class="fas fa-check"></i> All content access</li>
                                    <li><i class="fas fa-check"></i> Direct messaging</li>
                                    <li><i class="fas fa-check"></i> Live streams</li>
                                    <li><i class="fas fa-check"></i> Exclusive content</li>
                                    <li><i class="fas fa-check"></i> Priority support</li>
                                </ul>
                                <button class="btn btn-primary" onclick="processSubscription('annual', 99.99, this)">
                                    Subscribe Annually
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="payment-security">
                        <div class="security-badges">
                            <i class="fas fa-shield-alt"></i>
                            <span>Secure payment processing</span>
                        </div>
                        <div class="payment-methods">
                            <i class="fab fa-cc-visa"></i>
                            <i class="fab fa-cc-mastercard"></i>
                            <i class="fab fa-cc-paypal"></i>
                            <i class="fab fa-bitcoin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = modalHTML;
  modalContainer.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    modalContainer.querySelector(".modal-content").classList.add("modal-show");
  }, 10);
}

// Show creator profile modal
function showCreatorProfileModal(creator) {
  const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content profile-modal" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${creator.name}'s Profile</h2>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="modal-body">
                    <div class="profile-header">
                        <img src="${creator.image}" alt="${
    creator.name
  }" class="profile-avatar">
                        <div class="profile-info">
                            <h3>${creator.name}</h3>
                            <p class="profile-username">@${
                              creator.displayName
                            }</p>
                            <p class="profile-bio">${creator.preview}</p>
                            
                            <div class="profile-stats">
                                <div class="stat">
                                    <span class="stat-number">${
                                      creator.subscribers
                                    }</span>
                                    <span class="stat-label">Fans</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">${
                                      creator.posts
                                    }</span>
                                    <span class="stat-label">Posts</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">${
                                      creator.rating
                                    }</span>
                                    <span class="stat-label">Rating</span>
                                </div>
                            </div>
                            
                            <div class="profile-tags">
                                ${creator.tags
                                  .map(
                                    (tag) => `<span class="tag">${tag}</span>`
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                    
                    <div class="profile-content">
                        <h4>Recent Posts</h4>
                        <div class="content-preview">
                            <div class="preview-item">
                                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop" alt="Preview">
                                <div class="preview-overlay">
                                    <i class="fas fa-lock"></i>
                                    <span>Subscribe to view</span>
                                </div>
                            </div>
                            <div class="preview-item">
                                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" alt="Preview">
                                <div class="preview-overlay">
                                    <i class="fas fa-lock"></i>
                                    <span>Subscribe to view</span>
                                </div>
                            </div>
                            <div class="preview-item">
                                <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=300&h=200&fit=crop" alt="Preview">
                                <div class="preview-overlay">
                                    <i class="fas fa-lock"></i>
                                    <span>Subscribe to view</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="profile-actions">
                        <button class="btn btn-primary btn-large" onclick="subscribeToCreator(${
                          creator.id
                        })">
                            <i class="fas fa-heart"></i> Subscribe Now
                        </button>
                        <button class="btn btn-secondary" onclick="sendMessage(${
                          creator.id
                        })">
                            <i class="fas fa-envelope"></i> Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = modalHTML;
  modalContainer.style.display = "flex";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    modalContainer.querySelector(".modal-content").classList.add("modal-show");
  }, 10);
}

// Process subscription
function processSubscription(plan, price, buttonElement) {
  console.log(`Processing ${plan} subscription for $${price}`);

  // Show loading state
  const button = buttonElement || document.activeElement;
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
  button.disabled = true;

  // Simulate payment processing
  setTimeout(() => {
    showNotification(
      "Subscription successful! Welcome to the community!",
      "success"
    );
    closeModal();

    // Reset button
    button.innerHTML = originalText;
    button.disabled = false;
  }, 2000);
}

// Send message to creator
function sendMessage(creatorId) {
  console.log(`Sending message to creator ${creatorId}`);
  showNotification("Messaging feature coming soon!", "info");
}

// Search creators
function searchCreators(query) {
  const creatorsGrid = document.getElementById("creators-grid");
  const filteredCreators = sampleCreators.filter(
    (creator) =>
      creator.name.toLowerCase().includes(query.toLowerCase()) ||
      creator.tags.some((tag) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
  );

  if (filteredCreators.length > 0) {
    creatorsGrid.innerHTML = filteredCreators
      .map((creator) => generateCreatorCard(creator))
      .join("");
  } else {
    creatorsGrid.innerHTML =
      '<div class="no-results">No creators found matching your search.</div>';
  }
}

// Generate single creator card
function generateCreatorCard(creator) {
  return `
        <div class="creator-card" data-categories="${creator.categories.join(
          " "
        )}" data-creator-id="${creator.id}">
            <div class="creator-image">
                <img src="${creator.image}" alt="${
    creator.name
  }" loading="lazy">
                <div class="creator-overlay">
                    <div class="creator-preview-text">${creator.preview}</div>
                </div>
            </div>
            
            <div class="creator-info">
                <h3 class="creator-name">${creator.name}</h3>
                
                <div class="creator-stats">
                    <div class="creator-stat">
                        <span class="creator-stat-number">${
                          creator.subscribers
                        }</span>
                        <span class="creator-stat-label">Fans</span>
                    </div>
                    <div class="creator-stat">
                        <span class="creator-stat-number">${
                          creator.posts
                        }</span>
                        <span class="creator-stat-label">Posts</span>
                    </div>
                    <div class="creator-stat">
                        <span class="creator-stat-number">${
                          creator.rating
                        }</span>
                        <span class="creator-stat-label">Rating</span>
                    </div>
                </div>
                
                <div class="creator-tags">
                    ${creator.tags
                      .map((tag) => `<span class="creator-tag">${tag}</span>`)
                      .join("")}
                </div>
                
                <div class="creator-actions">
                    <button class="btn btn-primary" onclick="subscribeToCreator(${
                      creator.id
                    })">
                        <i class="fas fa-heart"></i> Subscribe
                    </button>
                    <button class="btn btn-secondary" onclick="viewCreatorProfile(${
                      creator.id
                    })">
                        <i class="fas fa-user"></i> View Profile
                    </button>
                </div>
            </div>
        </div>
    `;
}
