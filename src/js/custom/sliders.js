/**
 * Initializes and configures Glide carousels for displaying content.
 * @module GlideCarousel
 */

// Required Core Stylesheet
import "@glidejs/glide/dist/css/glide.core.min.css";

// Optional Theme Stylesheet
import "@glidejs/glide/dist/css/glide.theme.min.css";

import Glide from '@glidejs/glide';

/**
 * Initializes a Glide carousel with specified options.
 * @param {string} selector - The CSS selector for the HTML element to initialize Glide on.
 * @param {Object} [options] - Options for configuring the Glide carousel.
 * @param {string} [options.type="carousel"] - Type of the Glide carousel.
 * @param {string} [options.focusAt="center"] - Determines where the carousel's focus will be.
 * @param {number} [options.perView=3] - Number of slides visible per view.
 * @param {Object} [options.breakpoints] - Breakpoints for responsive configuration.
 */
function initializeGlide(selector, options = {}) {
  var glide = new Glide(selector, {
    type: options.type || "carousel",
    focusAt: options.focusAt || "center",
    perView: options.perView || 3,
    breakpoints: options.breakpoints || {
      1200: { perView: 3 },
      1024: { perView: 2 },
      768: { perView: 1 }
    }
  });
  glide.mount();
}

// Initialize Glide carousel for ".glide" selector
initializeGlide(".glide");

// Initialize Glide carousel for ".glide-publications" selector
initializeGlide(".glide-publications");