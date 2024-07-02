document.getElementById("switch").addEventListener("change", function(){
    document.getElementById("html").classList.toggle("daylight");
});

// Scroll to
const navLinks = document.querySelectorAll('nav ul li a');
const navbar = document.querySelector('nav');

const navbarHeight = navbar.offsetHeight;

for(let navLink of navLinks) {
    navLink.addEventListener('click', function (event) {
        event.preventDefault();

        console.log(navLink);

        const position = document.getElementById(navLink.dataset.target).getBoundingClientRect();
        const adjustedPosition = position.y - navbarHeight - 20;

        window.scrollTo({
            top: adjustedPosition + window.pageYOffset,
            behavior: 'smooth'
        });
    });
}