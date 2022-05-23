// FAQ Accordion //

const faq = document.getElementsByClassName("faqQuestion");
let i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}

// End of FAQ Accordion //

// Hamburger Menu //

const menu = document.querySelector("#navigationLinks");
const menuItems = document.querySelectorAll(".navItem");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector("#hamburgerMenu")

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
    }
}

hamburger.addEventListener("click", toggleMenu);

// End of Hamburger Menu //