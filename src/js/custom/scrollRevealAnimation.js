/**
 * Applies scroll reveal animations to specified elements.
 * @module ScrollRevealAnimation
 */

import ScrollReveal from 'scrollreveal';

/**
 * Initializes ScrollReveal with custom animation options and reveals specified elements.
 */
export const scrollRevealAnimation = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2500,
        delay: 100,
        afterReveal: (el) => {
            el.style.transition = '';
            el.style.opacity = '';
            el.style.transform = '';
            el.classList.remove('sr');
        }
    });

    // Reveal elements with specified animation options
    sr.reveal(`
            .reviews-title,
            .prices-title,
            .consultation-title,
            .publications-title
        `);
    sr.reveal(`
            .reviews-body,
            .prices-body,
            .prices-body-2,
            .publications-body
        `,
        { origin: 'bottom' });

    sr.reveal(`
        .hero-image-content,
        .about-image-content,
        .image__wrapper

        `,
        { origin: 'rigth', delay: 100 });

    sr.reveal(`
        .hero-text-content-title,
        .hero-text-content-subtitle,
        .hero-text-content-description,
        .hero-text-content-button, 
        .hero-text-content-social,

        .about-text-content-title,
        .about-text-content-description,
        .about-text-content-button
        `,
        { origin: 'left', distance: '180px', delay: 300, interval: 100 });

    sr.reveal(`
        .hero-text-content,
        .timeline-title,
        .timeline-subtitle,
        .timeline-description
        `,
        { origin: 'top', delay: 300, interval: 100 });

    sr.reveal(`
        .hero-text-content-social-link,
        .footer-col
        `,
        { origin: 'bottom', delay: 300, interval: 100 });


    sr.reveal(`
        .timeline-six
        `,
        {
            origin: 'top', delay: 300, interval: 100, distance: '0px',
        });

    sr.reveal(`.img-layer_image2`, {
        origin: 'left', delay: 1200, distance: '0px',
    });

    sr.reveal(`.img-layer_image3`, {
        origin: 'rigth', delay: 1800, distance: '0px',
    });

    sr.reveal(`.img-layer_image4`, {
        origin: 'top', delay: 2400, distance: '0px',
    });

    sr.reveal(`.img-layer_image5`, {
        origin: 'left', delay: 2800, distance: '0px',
    });

    sr.reveal(`.img-layer_image6`, {
        origin: 'rigth', delay: 3200, distance: '0px',
    });
    
}

// Trigger the scroll reveal animation
scrollRevealAnimation();