document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Update scroll offset calculation
    const navHeight = document.querySelector('.navbar').offsetHeight;

    // Update smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Update active navigation highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');
    const learnMoreButton = document.querySelector('.btn-primary');
    const contactUsButton = document.querySelector('.btn-outline-secondary');

    // Handle navbar toggle
    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
        this.classList.toggle('active');
    });

    // Close navbar when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
            navbarToggler.classList.remove('active');
        }
    });

    // Close navbar when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
            navbarToggler.classList.remove('active');
        }
    });

    learnMoreButton.addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('#services').offsetTop,
            behavior: 'smooth'
        });
    });

    contactUsButton.addEventListener('click', function() {
        window.scrollTo({
            top: document.querySelector('#contact').offsetTop,
            behavior: 'smooth'
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message!');
            this.reset();
        });
    }

    // Simplified Particle System
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width ||
                    this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.fill();
            }
        }

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance/100)})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', resizeCanvas);
        animate();
    }
});
