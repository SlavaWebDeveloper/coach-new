/**
 * Applies a blur effect to the header based on scroll position.
 * @module BlurHeader
 */

/**
 * Adds or removes a CSS class to the header element to apply a blur effect based on scroll position.
 */
export const blurHeader = () => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        // Add a class if the bottom offset is greater than 50 of the viewport
        window.scrollY >= 50 ? header.classList.add('bg-body-tertiary')
            : header.classList.remove('bg-body-tertiary');
    });
}

blurHeader();