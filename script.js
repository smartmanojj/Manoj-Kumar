const roles = [
    "Data Analyst",
    "Python Developer",
    "SQL Developer",
    "Power BI Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const element = document.getElementById("element");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        element.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        element.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}

typeEffect();

const feedbackForm =
    document.getElementById("feedbackForm");

const formMessage =
    document.getElementById("formMessage");

feedbackForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been received.";

        feedbackForm.reset();
    }
);