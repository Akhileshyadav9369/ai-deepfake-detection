// ==========================================
// AI DEEPFAKE DETECTION SYSTEM
// PROFESSIONAL FRONTEND JAVASCRIPT
// ==========================================


// ==========================================
// FILE UPLOAD FUNCTIONALITY
// ==========================================

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("file-name");


// SHOW SELECTED FILE NAME

if (fileInput) {

    fileInput.addEventListener("change", function () {

        if (this.files.length > 0) {

            fileName.innerHTML =
                this.files[0].name;

        }

        else {

            fileName.innerHTML =
                "No file chosen";

        }

    });

}


// ==========================================
// LOADING ANIMATION
// ==========================================

function startLoading() {

    const message =
        document.getElementById("message");

    if (message) {

        message.innerHTML =
            "🔍 AI is analyzing the uploaded file...";

        setTimeout(function () {

            message.innerHTML =
                "🧠 Detecting AI Manipulation...";

        }, 2000);

        setTimeout(function () {

            message.innerHTML =
                "📊 Generating Detection Report...";

        }, 4000);

    }

}


// ==========================================
// CONTACT FORM ALERT
// ==========================================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",

        function (event) {

            event.preventDefault();

            alert(
                "Message Sent Successfully!"
            );

            contactForm.reset();

        });

}


// ==========================================
// SCROLL ANIMATION
// ==========================================

const cards =
    document.querySelectorAll(
        ".feature-card"
    );

window.addEventListener(
    "scroll",

    function () {

        cards.forEach(function (card) {

            const cardTop =
                card.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;

            if (cardTop < windowHeight - 100) {

                card.style.opacity = "1";

                card.style.transform =
                    "translateY(0px)";

            }

        });

    });


// INITIAL CARD STYLE

cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "all 0.8s ease";

});


// ==========================================
// NAVBAR SHADOW ON SCROLL
// ==========================================

window.addEventListener(
    "scroll",

    function () {

        const header =
            document.querySelector("header");

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 0 20px rgba(0,247,255,0.15)";

        }

        else {

            header.style.boxShadow =
                "none";

        }

    });


// ==========================================
// BUTTON GLOW EFFECT
// ==========================================

const buttons =
    document.querySelectorAll(
        ".btn, .analyze-btn"
    );

buttons.forEach(function (button) {

    button.addEventListener(
        "mouseenter",

        function () {

            button.style.transform =
                "translateY(-5px) scale(1.03)";

        });

    button.addEventListener(
        "mouseleave",

        function () {

            button.style.transform =
                "translateY(0px) scale(1)";

        });

});


// ==========================================
// TYPING EFFECT FOR HERO TEXT
// ==========================================

const heroTitle =
    document.querySelector(
        ".hero-content h1"
    );

if (heroTitle) {

    heroTitle.style.opacity = "0";

    setTimeout(function () {

        heroTitle.style.transition =
            "all 1.2s ease";

        heroTitle.style.opacity = "1";

        heroTitle.style.transform =
            "translateY(0px)";

    }, 300);

}


// ==========================================
// SMOOTH PAGE LOAD
// ==========================================

window.onload = function () {

    document.body.style.opacity = "1";

};

document.body.style.opacity = "0";

document.body.style.transition =
    "opacity 0.8s ease";


// ==========================================
// FAKE AI RESULT DISPLAY
// ==========================================

function showFakeResult() {

    const result = document.querySelector(
        ".result-status"
    );

    if (result) {

        result.innerHTML =
            "Deepfake Detected";

    }

}