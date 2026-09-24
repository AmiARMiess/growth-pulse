document.addEventListener('DOMContentLoaded', () => {
    
    // === Navbar Scroll Effect ===
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // === Mobile Menu Toggle ===
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinks.style.display === 'flex';
            
            if (!isOpen) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'var(--white)';
                navLinks.style.padding = '24px';
                navLinks.style.boxShadow = 'var(--shadow-lg)';
                navLinks.style.borderTop = '1px solid var(--gray-100)';
                navLinks.style.zIndex = '999';
                
                if (navActions) {
                    navActions.style.display = 'flex';
                    navActions.style.flexDirection = 'column';
                    navActions.style.marginTop = '16px';
                }
            } else {
                navLinks.style.display = '';
                navLinks.style.flexDirection = '';
                navLinks.style.position = '';
                navLinks.style.top = '';
                navLinks.style.left = '';
                navLinks.style.right = '';
                navLinks.style.background = '';
                navLinks.style.padding = '';
                navLinks.style.boxShadow = '';
                navLinks.style.borderTop = '';
                navLinks.style.zIndex = '';
                
                if (navActions) {
                    navActions.style.display = '';
                    navActions.style.flexDirection = '';
                    navActions.style.marginTop = '';
                }
            }
        });
    }
    
    // === Smooth Scroll for Anchor Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                
                // Close mobile menu if open
                if (navLinks && navLinks.style.display === 'flex') {
                    mobileToggle.click();
                }
            }
        });
    });
    
    // === Scroll Animation Observer ===
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
    // === ROI Calculator Logic ===
    const adSpendSlider = document.getElementById('adSpend');
    const convRateSlider = document.getElementById('convRate');
    const aovSlider = document.getElementById('aov');
    
    const adSpendVal = document.getElementById('adSpendVal');
    const convRateVal = document.getElementById('convRateVal');
    const aovVal = document.getElementById('aovVal');
    
    const currentRevEl = document.getElementById('currentRev');
    const projectedRevEl = document.getElementById('projectedRev');
    const annualGainEl = document.getElementById('annualGain');
    
    function formatCurrency(num) {
        return '$' + num.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }
    
    function calculateROI() {
        const adSpend = parseInt(adSpendSlider.value);
        const convRate = parseFloat(convRateSlider.value);
        const aov = parseInt(aovSlider.value);
        
        // Update display values
        adSpendVal.textContent = adSpend.toLocaleString();
        convRateVal.textContent = convRate.toFixed(1);
        aovVal.textContent = aov;
        
        // Calculate current revenue: (adSpend / avg CPC approx $2) * convRate * aov
        // Simplified model for demo purposes
        const estimatedClicks = Math.round(adSpend / 2.5);
        const conversions = Math.round(estimatedClicks * (convRate / 100));
        const currentRevenue = conversions * aov;
        
        // Projected: assume 70% improvement with optimization
        const projectedRevenue = Math.round(currentRevenue * 1.7);
        const monthlyGain = projectedRevenue - currentRevenue;
        const annualGain = monthlyGain * 12;
        
        // Animate numbers
        animateValue(currentRevEl, currentRevenue);
        animateValue(projectedRevEl, projectedRevenue);
        animateValue(annualGainEl, annualGain);
    }
    
    function animateValue(element, target) {
        const current = parseInt(element.textContent.replace(/[^0-9]/g, '')) || 0;
        const duration = 400;
        const startTime = performance.now();
        
        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.round(current + (target - current) * eased);
            
            element.textContent = formatCurrency(value);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }
        
        requestAnimationFrame(update);
    }
    
    if (adSpendSlider && convRateSlider && aovSlider) {
        adSpendSlider.addEventListener('input', calculateROI);
        convRateSlider.addEventListener('input', calculateROI);
        aovSlider.addEventListener('input', calculateROI);
        
        // Initial calculation
        calculateROI();
    }
    
    // === Email Form Submission (Demo) ===
    const heroForm = document.querySelector('.hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = heroForm.querySelector('input');
            const btn = heroForm.querySelector('button');
            
            if (input.value) {
                btn.innerHTML = '<i class="ph-bold ph-check"></i> Check your email!';
                btn.style.background = 'var(--success)';
                input.value = '';
                
                setTimeout(() => {
                    btn.innerHTML = 'Get Started Free <i class="ph-bold ph-arrow-right"></i>';
                    btn.style.background = '';
                }, 3000);
            }
        });
    }
});