import ScrollReveal from 'scrollreveal';

export const scrollRevealAnimation = () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2500,
        delay: 100
    });

    sr.reveal(`
            .reviews-title,
            .prices-title,
            .consultation-title,
            .publications-title
        `);
    sr.reveal(`
            .reviews-body,
            .prices-body,
            .publications-body
        `,
        { origin: 'bottom' });

    sr.reveal(`
        .hero-image-content,
        .about-image-content
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
        .consultation-col,
        .footer-col
        `,
        { origin: 'bottom', delay: 300, interval: 100 });


    sr.reveal(`
        .timeline-six
        `,
        {
            origin: 'top', delay: 300, interval: 100, distance: '0px',
        });
}

scrollRevealAnimation();