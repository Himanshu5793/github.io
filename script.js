/* ==============================
   MOBILE MENU
============================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* ==============================
   CLOSE MENU AFTER CLICK
============================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* ==============================
   CONTACT FORM
============================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill all fields.");

        return;

    }


    alert(
        "Thank you " +
        name +
        "! Your message has been received."
    );


    contactForm.reset();

});


/* ==============================
   SCROLL ANIMATION
============================== */

const animatedElements =
    document.querySelectorAll(
        ".section-title, .about-container, .service-card, .project-card, .price-card, .contact-container, .location-container"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(element => {

    observer.observe(element);

});


/* ==============================
   CONSOLE
============================== */

console.log(
    "Himanshu Portfolio Loaded Successfully!"
);