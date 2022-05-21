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