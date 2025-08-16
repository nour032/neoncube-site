// Animation d'apparition au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialiser les animations au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Préparer les éléments pour l'animation
    const animatedElements = document.querySelectorAll('.model-card, .gallery-content, .spec-category, .testimonial-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animation des cartes de modèles avec délai
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Gestion des FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            
            // Fermer tous les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
            
            // Toggle l'item actuel
            item.classList.toggle('open', !isOpen);
        });
    });

    // Gestion du modal de pré-commande
    const modal = document.getElementById('preorderModal');
    const modelBtns = document.querySelectorAll('.model-btn');
    const closeBtn = document.querySelector('.modal-close');
    const selectedModelInput = document.getElementById('selectedModel');

    modelBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const modelCard = btn.closest('.model-card');
            const model = modelCard.dataset.model;
            selectedModelInput.value = model;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Gestion du formulaire de pré-commande
    const preorderForm = document.querySelector('.preorder-form');
    preorderForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(preorderForm);
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        try {
            // Simuler l'envoi du formulaire (remplacer par l'endpoint Formspree réel)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            alert('Merci ! Nous vous contacterons dans les 24 heures.');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            preorderForm.reset();
        } catch (error) {
            alert('Échec de l\'envoi. Veuillez nous envoyer un email à la place.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Smooth scroll pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Compensation pour la nav fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect pour les orbes de lumière
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.glow-orb');
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Animation du cube produit au hover
    const productCube = document.querySelector('.product-cube');
    if (productCube) {
        productCube.addEventListener('mouseenter', () => {
            productCube.style.animationPlayState = 'paused';
        });
        
        productCube.addEventListener('mouseleave', () => {
            productCube.style.animationPlayState = 'running';
        });
    }

    // Effet de typing pour le titre principal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Animation des spécifications au hover
    const modelCards2 = document.querySelectorAll('.model-card');
    modelCards2.forEach(card => {
        const specs = card.querySelectorAll('.spec');
        
        card.addEventListener('mouseenter', () => {
            specs.forEach((spec, index) => {
                setTimeout(() => {
                    spec.style.transform = 'translateX(5px)';
                    spec.style.color = '#3b82f6';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            specs.forEach(spec => {
                spec.style.transform = 'translateX(0)';
                spec.style.color = 'rgba(255, 255, 255, 0.8)';
            });
        });
    });

    // Effet de particules pour le background (optionnel)
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'rgba(59, 130, 246, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = window.innerHeight + 'px';
        
        document.body.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translateY(0px)', opacity: 0 },
            { transform: 'translateY(-100px)', opacity: 1 },
            { transform: 'translateY(-' + (window.innerHeight + 100) + 'px)', opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'linear'
        });
        
        animation.onfinish = () => {
            particle.remove();
        };
    }

    // Créer des particules périodiquement
    setInterval(createParticle, 2000);

    // Gestion du scroll pour la navigation
    let lastScrollTop = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll vers le bas
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    nav.style.transition = 'transform 0.3s ease';
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    // Recalculer les positions si nécessaire
    const heroContent = document.querySelector('.hero-content');
    if (window.innerWidth <= 768) {
        heroContent.style.gridTemplateColumns = '1fr';
    } else {
        heroContent.style.gridTemplateColumns = '1fr 1fr';
    }
});

// Préchargement des images (si nécessaire)
function preloadImages() {
    const imageUrls = [
        // Ajouter les URLs des images si nécessaire
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Appeler le préchargement
preloadImages();


// Gestion de la section témoignages
class TestimonialsCarousel {
    constructor() {
        this.currentIndex = 0;
        this.testimonials = document.querySelectorAll('.testimonial-card');
        this.avatars = document.querySelectorAll('.avatar-item');
        this.indicators = document.querySelectorAll('.indicator');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 secondes
        this.isUserInteracting = false;
        
        this.init();
    }
    
    init() {
        if (this.testimonials.length === 0) return;
        
        // Initialiser le premier témoignage
        this.showTestimonial(0);
        
        // Ajouter les événements pour les avatars
        this.avatars.forEach((avatar, index) => {
            avatar.addEventListener('click', () => {
                this.handleUserInteraction();
                this.showTestimonial(index);
            });
            
            avatar.addEventListener('mouseenter', () => {
                this.pauseAutoPlay();
            });
            
            avatar.addEventListener('mouseleave', () => {
                if (!this.isUserInteracting) {
                    this.startAutoPlay();
                }
            });
        });
        
        // Ajouter les événements pour les indicateurs
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.handleUserInteraction();
                this.showTestimonial(index);
            });
        });
        
        // Démarrer le carrousel automatique
        this.startAutoPlay();
        
        // Pause au survol de la section
        const section = document.querySelector('.testimonials-section');
        if (section) {
            section.addEventListener('mouseenter', () => {
                this.pauseAutoPlay();
            });
            
            section.addEventListener('mouseleave', () => {
                if (!this.isUserInteracting) {
                    this.startAutoPlay();
                }
            });
        }
        
        // Support tactile pour mobile
        this.addTouchSupport();
        
        // Gestion du focus pour l'accessibilité
        this.addKeyboardSupport();
    }
    
    showTestimonial(index, direction = 'next') {
        if (index === this.currentIndex) return;
        
        const prevIndex = this.currentIndex;
        this.currentIndex = index;
        
        // Mettre à jour les témoignages
        this.testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active', 'prev', 'slide-in-left', 'slide-in-right');
            
            if (i === index) {
                testimonial.classList.add('active');
                // Ajouter l'animation en fonction de la direction
                if (direction === 'next' || index > prevIndex) {
                    testimonial.classList.add('slide-in-right');
                } else {
                    testimonial.classList.add('slide-in-left');
                }
            } else if (i === prevIndex) {
                testimonial.classList.add('prev');
            }
        });
        
        // Mettre à jour les avatars
        this.avatars.forEach((avatar, i) => {
            avatar.classList.toggle('active', i === index);
        });
        
        // Mettre à jour les indicateurs
        this.indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        
        // Animation des avatars
        this.animateAvatars(index);
    }
    
    animateAvatars(activeIndex) {
        this.avatars.forEach((avatar, index) => {
            const delay = Math.abs(index - activeIndex) * 100;
            
            setTimeout(() => {
                if (index === activeIndex) {
                    avatar.style.transform = 'translateY(-5px) scale(1.15)';
                } else {
                    avatar.style.transform = 'translateY(0) scale(1)';
                }
            }, delay);
        });
    }
    
    nextTestimonial() {
        const nextIndex = (this.currentIndex + 1) % this.testimonials.length;
        this.showTestimonial(nextIndex, 'next');
    }
    
    prevTestimonial() {
        const prevIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
        this.showTestimonial(prevIndex, 'prev');
    }
    
    startAutoPlay() {
        this.pauseAutoPlay(); // S'assurer qu'il n'y a pas de conflit
        this.autoPlayInterval = setInterval(() => {
            this.nextTestimonial();
        }, this.autoPlayDelay);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    handleUserInteraction() {
        this.isUserInteracting = true;
        this.pauseAutoPlay();
        
        // Reprendre l'autoplay après 8 secondes d'inactivité
        setTimeout(() => {
            this.isUserInteracting = false;
            this.startAutoPlay();
        }, 8000);
    }
    
    addTouchSupport() {
        const carousel = document.querySelector('.testimonials-carousel');
        if (!carousel) return;
        
        let startX = 0;
        let startY = 0;
        let isDragging = false;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            this.pauseAutoPlay();
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });
        
        carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            
            // Vérifier si c'est un swipe horizontal
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                this.handleUserInteraction();
                
                if (diffX > 0) {
                    // Swipe vers la gauche - témoignage suivant
                    this.nextTestimonial();
                } else {
                    // Swipe vers la droite - témoignage précédent
                    this.prevTestimonial();
                }
            }
        });
    }
    
    addKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            const section = document.querySelector('.testimonials-section');
            if (!section || !this.isInViewport(section)) return;
            
            switch (e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    this.handleUserInteraction();
                    this.prevTestimonial();
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    this.handleUserInteraction();
                    this.nextTestimonial();
                    break;
                case ' ':
                case 'Enter':
                    e.preventDefault();
                    if (this.autoPlayInterval) {
                        this.pauseAutoPlay();
                    } else {
                        this.startAutoPlay();
                    }
                    break;
            }
        });
        
        // Rendre les avatars focusables
        this.avatars.forEach((avatar, index) => {
            avatar.setAttribute('tabindex', '0');
            avatar.setAttribute('role', 'button');
            avatar.setAttribute('aria-label', `Voir le témoignage ${index + 1}`);
            
            avatar.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleUserInteraction();
                    this.showTestimonial(index);
                }
            });
        });
    }
    
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Méthode pour détruire l'instance (utile pour le nettoyage)
    destroy() {
        this.pauseAutoPlay();
        
        // Supprimer tous les événements
        this.avatars.forEach(avatar => {
            avatar.replaceWith(avatar.cloneNode(true));
        });
        
        this.indicators.forEach(indicator => {
            indicator.replaceWith(indicator.cloneNode(true));
        });
    }
}

// Animation d'apparition au scroll pour la section témoignages
function initTestimonialsScrollAnimation() {
    const section = document.querySelector('.testimonials-section');
    if (!section) return;
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animer les avatars avec un délai
                const avatars = entry.target.querySelectorAll('.avatar-item');
                avatars.forEach((avatar, index) => {
                    setTimeout(() => {
                        avatar.style.opacity = '1';
                        avatar.style.transform = 'translateY(0) scale(1)';
                    }, index * 100);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Préparer l'animation
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    const avatars = section.querySelectorAll('.avatar-item');
    avatars.forEach(avatar => {
        avatar.style.opacity = '0';
        avatar.style.transform = 'translateY(20px) scale(0.8)';
        avatar.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    observer.observe(section);
    
    // Style pour l'animation d'entrée
    const style = document.createElement('style');
    style.textContent = `
        .testimonials-section.animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Modification de l'initialisation existante
document.addEventListener('DOMContentLoaded', () => {
    // Code existant...
    
    // Initialiser le carrousel de témoignages
    const carousel = new TestimonialsCarousel();
    
    // Initialiser l'animation au scroll
    initTestimonialsScrollAnimation();
    
    // Exposer l'instance globalement pour le débogage
    window.testimonialsCarousel = carousel;
    
    // Reste du code existant...
});

// Modification de la gestion du redimensionnement
window.addEventListener('resize', () => {
    // Code existant...
    
    // Recalculer les positions si nécessaire
    const carousel = window.testimonialsCarousel;
    if (carousel) {
        // Réinitialiser l'affichage du témoignage actuel
        carousel.showTestimonial(carousel.currentIndex);
    }
});

// Nettoyage avant le déchargement de la page
window.addEventListener('beforeunload', () => {
    if (window.testimonialsCarousel) {
        window.testimonialsCarousel.destroy();
    }
});

