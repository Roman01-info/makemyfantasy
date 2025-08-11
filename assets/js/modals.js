// Make My Fantasy - Modals JavaScript

// Modal container
const modalContainer = document.getElementById('modal-container');

// Create signup modal
function createSignupModal(userType = 'fan') {
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Join Make My Fantasy</h2>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="modal-body">
                    <div class="user-type-selector">
                        <button class="user-type-btn ${userType === 'fan' ? 'active' : ''}" 
                                onclick="switchUserType('fan')" data-type="fan">
                            <i class="fas fa-heart"></i>
                            <span>Join as Fan</span>
                            <small>Discover amazing creators</small>
                        </button>
                        <button class="user-type-btn ${userType === 'creator' ? 'active' : ''}" 
                                onclick="switchUserType('creator')" data-type="creator">
                            <i class="fas fa-star"></i>
                            <span>Become a Creator</span>
                            <small>Start earning money</small>
                        </button>
                    </div>
                    
                    <form class="signup-form" id="signup-form">
                        <div class="form-group">
                            <label for="signup-email">Email Address</label>
                            <input type="email" id="signup-email" name="email" required 
                                   placeholder="Enter your email address">
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-username">Username</label>
                            <input type="text" id="signup-username" name="username" required 
                                   placeholder="Choose a unique username">
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-password">Password</label>
                            <input type="password" id="signup-password" name="password" required 
                                   placeholder="Create a strong password">
                            <div class="password-strength" id="password-strength"></div>
                        </div>
                        
                        <div class="form-group">
                            <label for="signup-confirm-password">Confirm Password</label>
                            <input type="password" id="signup-confirm-password" name="confirmPassword" required 
                                   placeholder="Confirm your password">
                        </div>
                        
                        <div class="form-group creator-fields" style="display: ${userType === 'creator' ? 'block' : 'none'}">
                            <label for="signup-display-name">Display Name</label>
                            <input type="text" id="signup-display-name" name="displayName" 
                                   placeholder="Your public display name">
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="signup-terms" name="terms" required>
                                <span class="checkmark"></span>
                                I agree to the <a href="#" target="_blank">Terms of Service</a> and 
                                <a href="#" target="_blank">Privacy Policy</a>
                            </label>
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="signup-age" name="ageConfirm" required>
                                <span class="checkmark"></span>
                                I confirm that I am 18 years or older
                            </label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-large signup-submit">
                            <i class="fas fa-user-plus"></i>
                            Create Account
                        </button>
                    </form>
                    
                    <div class="modal-footer">
                        <p>Already have an account? <a href="#" onclick="closeModal(); openLoginModal();">Sign In</a></p>
                        
                        <div class="social-signup">
                            <p>Or sign up with:</p>
                            <div class="social-buttons">
                                <button class="btn btn-social google" onclick="signupWithGoogle()">
                                    <i class="fab fa-google"></i> Google
                                </button>
                                <button class="btn btn-social twitter" onclick="signupWithTwitter()">
                                    <i class="fab fa-twitter"></i> Twitter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modalContainer.innerHTML = modalHTML;
    modalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Initialize form validation
    initSignupFormValidation();
    
    // Add animation
    setTimeout(() => {
        modalContainer.querySelector('.modal-content').classList.add('modal-show');
    }, 10);
}

// Create login modal
function createLoginModal() {
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Welcome Back</h2>
                    <button class="modal-close" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="modal-body">
                    <form class="login-form" id="login-form">
                        <div class="form-group">
                            <label for="login-email">Email or Username</label>
                            <input type="text" id="login-email" name="email" required 
                                   placeholder="Enter your email or username">
                        </div>
                        
                        <div class="form-group">
                            <label for="login-password">Password</label>
                            <input type="password" id="login-password" name="password" required 
                                   placeholder="Enter your password">
                        </div>
                        
                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="login-remember" name="remember">
                                <span class="checkmark"></span>
                                Remember me
                            </label>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn-large">
                            <i class="fas fa-sign-in-alt"></i>
                            Sign In
                        </button>
                    </form>
                    
                    <div class="modal-footer">
                        <p><a href="#" onclick="openForgotPasswordModal()">Forgot your password?</a></p>
                        <p>Don't have an account? <a href="#" onclick="closeModal(); openSignupModal();">Sign Up</a></p>
                        
                        <div class="social-signup">
                            <p>Or sign in with:</p>
                            <div class="social-buttons">
                                <button class="btn btn-social google" onclick="loginWithGoogle()">
                                    <i class="fab fa-google"></i> Google
                                </button>
                                <button class="btn btn-social twitter" onclick="loginWithTwitter()">
                                    <i class="fab fa-twitter"></i> Twitter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modalContainer.innerHTML = modalHTML;
    modalContainer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Initialize form validation
    initLoginFormValidation();
    
    // Add animation
    setTimeout(() => {
        modalContainer.querySelector('.modal-content').classList.add('modal-show');
    }, 10);
}

// Close modal
function closeModal() {
    const modalContent = modalContainer.querySelector('.modal-content');
    if (modalContent) {
        modalContent.classList.remove('modal-show');
        setTimeout(() => {
            modalContainer.style.display = 'none';
            modalContainer.innerHTML = '';
            document.body.style.overflow = '';
        }, 300);
    }
}

// Switch user type in signup modal
function switchUserType(type) {
    const buttons = document.querySelectorAll('.user-type-btn');
    const creatorFields = document.querySelector('.creator-fields');
    
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
    
    if (creatorFields) {
        creatorFields.style.display = type === 'creator' ? 'block' : 'none';
    }
}

// Form validation for signup
function initSignupFormValidation() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('signup-password');
    const confirmPasswordInput = document.getElementById('signup-confirm-password');
    const strengthIndicator = document.getElementById('password-strength');
    
    // Password strength checker
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strength = checkPasswordStrength(password);
        updatePasswordStrength(strengthIndicator, strength);
    });
    
    // Confirm password validation
    confirmPasswordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const confirmPassword = this.value;
        
        if (confirmPassword && password !== confirmPassword) {
            this.setCustomValidity('Passwords do not match');
        } else {
            this.setCustomValidity('');
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSignupSubmission(this);
    });
}

// Form validation for login
function initLoginFormValidation() {
    const form = document.getElementById('login-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLoginSubmission(this);
    });
}

// Password strength checker
function checkPasswordStrength(password) {
    let score = 0;
    const checks = {
        length: password.length >= 8,
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        numbers: /\d/.test(password),
        symbols: /[^A-Za-z0-9]/.test(password)
    };
    
    Object.values(checks).forEach(check => {
        if (check) score++;
    });
    
    return { score, checks };
}

// Update password strength indicator
function updatePasswordStrength(indicator, strength) {
    const { score, checks } = strength;
    const levels = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
    const colors = ['#f44336', '#ff9800', '#ffc107', '#4caf50', '#2e7d32'];
    
    indicator.innerHTML = `
        <div class="strength-bar">
            <div class="strength-fill" style="width: ${(score / 5) * 100}%; background-color: ${colors[score - 1] || colors[0]}"></div>
        </div>
        <span class="strength-text">${levels[score - 1] || levels[0]}</span>
    `;
}

// Handle signup form submission
function handleSignupSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('.signup-submit');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // This would normally send data to your backend
        console.log('Signup data:', Object.fromEntries(formData));
        
        // Show success message
        showSuccessMessage('Account created successfully! Please check your email to verify your account.');
        closeModal();
        
        // Reset button
        submitBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
        submitBtn.disabled = false;
    }, 2000);
}

// Handle login form submission
function handleLoginSubmission(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // This would normally authenticate with your backend
        console.log('Login data:', Object.fromEntries(formData));
        
        // Show success message
        showSuccessMessage('Welcome back! You have been successfully logged in.');
        closeModal();
        
        // Reset button
        submitBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
        submitBtn.disabled = false;
    }, 1500);
}

// Social login functions
function signupWithGoogle() {
    console.log('Signup with Google');
    showInfoMessage('Google signup integration would be implemented here.');
}

function signupWithTwitter() {
    console.log('Signup with Twitter');
    showInfoMessage('Twitter signup integration would be implemented here.');
}

function loginWithGoogle() {
    console.log('Login with Google');
    showInfoMessage('Google login integration would be implemented here.');
}

function loginWithTwitter() {
    console.log('Login with Twitter');
    showInfoMessage('Twitter login integration would be implemented here.');
}

// Utility functions for notifications
function showSuccessMessage(message) {
    showNotification(message, 'success');
}

function showInfoMessage(message) {
    showNotification(message, 'info');
}

function showErrorMessage(message) {
    showNotification(message, 'error');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer.style.display === 'flex') {
        closeModal();
    }
});
