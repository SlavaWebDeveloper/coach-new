/**
 * Initiates a scroll timeline effect by adding or removing a CSS class based on scroll position.
 * @module ScrollTimeline
 */

/**
 * Scrolls through timeline elements and applies CSS class based on scroll position.
 */
export const scrollTimeline = () => {
    const timelineSixElements = document.querySelectorAll('.timeline-six');

    for (let i = 1; i < timelineSixElements.length; i++) {
        const timelineSix = timelineSixElements[i];
        const rect = timelineSix.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight * 0.5) {
            const rowElement = timelineSix.querySelector('.row');
            rowElement.classList.add('timeline-text-open');
        } else {
            const rowElement = timelineSix.querySelector('.row');
            rowElement.classList.remove('timeline-text-open');
        }
    }
}

// Listen for scroll events to trigger the scroll timeline effect
window.addEventListener('scroll', scrollTimeline);