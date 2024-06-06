// Required Core Stylesheet
import "@glidejs/glide/dist/css/glide.core.min.css";

// Optional Theme Stylesheet
import "@glidejs/glide/dist/css/glide.theme.min.css";

import Glide from '@glidejs/glide';

var glide = new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 3,
  breakpoints: {
    1200: {
      perView: 3
    },
    1024: {
      perView: 2
    },
    768: {
      perView: 1
    }
  }
});
glide.mount();


var glidePublications = new Glide(".glide-publications", {
  type: "carousel",
  focusAt: "center",
  perView: 3,
  breakpoints: {
    1200: {
      perView: 3
    },
    1024: {
      perView: 2
    },
    768: {
      perView: 1
    }
  }
});
glidePublications.mount();