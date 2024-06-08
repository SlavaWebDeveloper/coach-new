/**
 * Scrolls the page to the top when triggered by a button click.
 * @module ScrollUp
 */

/**
 * Scrolls the page to the top when triggered by a button click.
 */
export const scrollUp = () => {

    let mybutton = document.getElementById("btn-back-to-top");

    // Display or hide the button based on the scroll position
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    mybutton.addEventListener("click", backToTop);

    /**
    * Scrolls the page to the top.
    */
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

// Listen for scroll events to trigger the scrollUp function
window.addEventListener('scroll', scrollUp);