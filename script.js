// JavaScript for Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

/* Updated JavaScript for Smooth Transition Testimonials */
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-item");
    let index = 0;
    
    function showTestimonial() {
        testimonials.forEach((item, i) => {
            if (i === index) {
                item.style.opacity = "1";
                item.style.filter = "blur(0px)";
                item.style.transform = "scale(1)";
                item.style.zIndex = "1";
                item.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out, filter 1s ease-in-out";
            } else {
                item.style.opacity = "0.5";
                item.style.filter = "blur(3px)";
                item.style.transform = "scale(0.9)";
                item.style.zIndex = "0";
                item.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out, filter 1s ease-in-out";
            }
        });
    }
    
    function nextTestimonial() {
        index = (index + 1) % testimonials.length;
        showTestimonial();
    }
    
    showTestimonial();
    setInterval(nextTestimonial, 7000);
});


// Enhancing Smooth Scroll Feature
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");
    
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});

// Preloader Animation
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.createElement("div");
    preloader.classList.add("preloader");
    preloader.innerHTML = `<div class="loader"></div>`;
    document.body.appendChild(preloader);

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }, 1000); // Keep preloader visible for 1 second
    });
});

// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});

// Active Page Indicator in Navbar
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateLink() {
        let index = sections.length;
        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
        navLinks.forEach(link => link.classList.remove("active"));
        navLinks[index].classList.add("active");
    }

    activateLink();
    window.addEventListener("scroll", activateLink);
});

// Back to Top Button
document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.createElement("button");
    backToTop.classList.add("back-to-top");
    backToTop.innerHTML = "&#8679;";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

// FAQ Toggle Functionality
document.addEventListener("DOMContentLoaded", function () {
    const faqs = document.querySelectorAll(".faq-item");

    faqs.forEach((faq) => {
        const question = faq.querySelector(".faq-question");
        const icon = faq.querySelector(".toggle-icon");

        question.addEventListener("click", function () {
            faq.classList.toggle("active");
            let answer = faq.querySelector(".faq-answer");

            if (faq.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "-";
            } else {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            }
        });
    });
});


// JavaScript for Portfolio Modal - Fixed Auto Popup Issue
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModalBtn = document.querySelector(".close");
    
    function openModal(src) {
        if (src) {
            modal.style.display = "flex";
            modalImg.src = src;
        }
    }

    function closeModal() {
        modal.style.display = "none";
    }
    
    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", function () {
            openModal(this.getAttribute('src'));
        });
    });
    
    closeModalBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Ensure modal is hidden on load
    modal.style.display = "none";
});

// Smooth Scroll for Footer Links
document.addEventListener("DOMContentLoaded", () => {
    const footerLinks = document.querySelectorAll(".footer-links a,.hero-content a, .about-content a");
    
    footerLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});


// Contact-Form Submission On Whatsapp
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // 🔹 Prevent form submission and page reload

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        let phoneNumber = "9319931142"; // 🔹 Replace with your actual WhatsApp number

        if (name === "" || email === "" || message === "") {
            alert("⚠ Please fill in all fields before submitting.");
            return;
        }

        let whatsappMessage = `Hello! I am *${name}*.
📩 Email: ${email}
📝 Message: ${message}`;

        let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        window.open(whatsappURL, "_blank"); // 🔹 Open WhatsApp Chat in a New Tab
    });
});