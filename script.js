const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
    });
});

if (contactForm) {
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#f87171';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });

        if (!isValid) return;

        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Message envoyé ! ✓</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
            }, 2600);
        }

        contactForm.reset();
    });
}

const revealElements = document.querySelectorAll('.reveal-up, .project-card, .skill-item, .hobby-card, .education-item, .info-card, .social-link, .quality-badge');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.14,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

const hoverElements = document.querySelectorAll('.project-card, .skill-item, .hobby-card, .info-card, .social-link');
hoverElements.forEach(el => {
    el.addEventListener('mousemove', (event) => {
        const rect = el.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        el.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12), rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.02) 70%)`;
    });

    if (!prefersReducedMotion) {
        const cursorGlow = document.querySelector('.cursor-glow');
        const interactiveCards = document.querySelectorAll('.project-card, .hobby-card, .skill-item');

        window.addEventListener('pointermove', (event) => {
            if (cursorGlow) {
                cursorGlow.style.left = `${event.clientX}px`;
                cursorGlow.style.top = `${event.clientY}px`;
                cursorGlow.style.opacity = '1';
            }
        }, { passive: true });

        interactiveCards.forEach(card => {
            card.addEventListener('pointermove', (event) => {
                const rect = card.getBoundingClientRect();
                const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
                const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener('pointerleave', () => {
                card.style.transform = '';
            });
        });
    }

    const particlesCanvas = document.getElementById('particlesCanvas');
    if (particlesCanvas && !prefersReducedMotion) {
        const context = particlesCanvas.getContext('2d');
        const particles = [];
        const particleCount = Math.min(75, Math.floor(window.innerWidth / 18));
        let animationFrame;

        const resizeCanvas = () => {
            const ratio = Math.min(window.devicePixelRatio || 1, 2);
            particlesCanvas.width = window.innerWidth * ratio;
            particlesCanvas.height = window.innerHeight * ratio;
            context.setTransform(ratio, 0, 0, ratio, 0, 0);
        };

        const createParticle = () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 1.7 + 0.5,
            speedX: (Math.random() - 0.5) * 0.22,
            speedY: (Math.random() - 0.5) * 0.22,
            alpha: Math.random() * 0.45 + 0.15
        });

        const drawParticles = () => {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            particles.forEach(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < -10 || particle.x > window.innerWidth + 10) particle.speedX *= -1;
                if (particle.y < -10 || particle.y > window.innerHeight + 10) particle.speedY *= -1;

                context.beginPath();
                context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                context.fillStyle = `rgba(191, 219, 254, ${particle.alpha})`;
                context.fill();
            });
            animationFrame = window.requestAnimationFrame(drawParticles);
        };

        resizeCanvas();
        for (let i = 0; i < particleCount; i += 1) particles.push(createParticle());
        drawParticles();
        window.addEventListener('resize', resizeCanvas, { passive: true });
        window.addEventListener('pagehide', () => window.cancelAnimationFrame(animationFrame), { once: true });
    }

    el.addEventListener('mouseleave', () => {
        el.style.background = '';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const sections = document.querySelectorAll('section');
const updateActiveNav = () => {
    let currentId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 180) {
            currentId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === '#' + currentId);
    });
};

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.style.boxShadow = window.scrollY > 30 ? '0 8px 25px rgba(15, 23, 42, 0.25)' : 'none';
});

console.log('Portfolio chargé avec succès.');
