const menu = document.getElementById("navbar");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

function toggleMenu() {
    menu.classList.toggle("active");
}

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message! We'll get back to you soon.";
        formMessage.style.color = "lightgreen";
        contactForm.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});