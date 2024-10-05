let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {

        navbar.classList.add("-translate-y-full");
        navbar.classList.remove("translate-y-0");
    } else {

        navbar.classList.remove("-translate-y-full");
        navbar.classList.add("translate-y-0");
    }
    lastScrollY = window.scrollY; 
});