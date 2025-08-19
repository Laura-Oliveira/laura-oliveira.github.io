// // Toggle Menu
// const menuToggle = document.getElementById("menuToggle");
// const navLinks = document.getElementById("navLinks");

// menuToggle.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

// // About Me Section
// document.addEventListener("DOMContentLoaded", () => {
//     const targets = document.querySelectorAll(
//         "#about_me_section .about-text, #about_me_section .about-photo"
//     );

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

//     targets.forEach(el => observer.observe(el));
// });

// // Skills Section
// document.addEventListener("DOMContentLoaded", function () {
//     const skillsSection = document.querySelector("#skills_section");

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 skillsSection.classList.add("visible");
//                 observer.unobserve(skillsSection);
//             }
//         });
//     }, { threshold: 0.2 });

//     observer.observe(skillsSection);
// });

// // Projects Section
// document.addEventListener("DOMContentLoaded", () => {
//     const projectsSection = document.querySelector("#projects_section");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 projectsSection.classList.add("visible");
//             }
//         });
//     }, { threshold: 0.2 });

//     observer.observe(projectsSection);
// });

// document.querySelectorAll('.feedback-btn').forEach(btn => {
//     btn.addEventListener('click', () => {
//         const card = btn.closest('.project-card');
//         if (!card.classList.contains('expanded')) return;
//         card.querySelector('.feedback-content').classList.toggle('show');
//     });
// });

// // Clients Section
// document.addEventListener("DOMContentLoaded", () => {
//     const clientsSection = document.querySelector("#clients_section");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 clientsSection.classList.add("visible");
//             }
//         });
//     }, { threshold: 0.2 });

//     observer.observe(clientsSection);
// });

// // Feedbacks Section
// document.addEventListener("DOMContentLoaded", () => {
//     const feedbacksSection = document.querySelector("#feedbacks_section");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 feedbacksSection.classList.add("visible");
//             }
//         });
//     }, { threshold: 0.2 });

//     observer.observe(feedbacksSection);
// });

// // Services Section
// document.addEventListener("DOMContentLoaded", () => {
//     const servicesSection = document.querySelector("#services_section");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 servicesSection.classList.add("visible");
//             }
//         });
//     }, { threshold: 0.2 });

//     observer.observe(servicesSection);
// });

// // Toggle Feedback Services
// document.querySelectorAll(".feedback-toggle").forEach(button => {
//     button.addEventListener("click", () => {
//         const content = button.nextElementSibling;
//         content.style.display = content.style.display === "block" ? "none" : "block";
//         button.textContent = content.style.display === "block" ? "Ocultar Feedbacks" : "Ver Feedbacks";
//     });
// });

// // EmailJS Script
// // (function () {
// //     emailjs.init("YxvxIpoEvVfEVUcpi"); // ⚠️ use seu próprio USER_ID
// // })();

// // document.getElementById("contact-form").addEventListener("submit", function (event) {
// //     event.preventDefault();
// //     emailjs.sendForm('Sservice_78nb0lp', 'template_78yejp7', this)
// //         .then(() => alert("Mensagem enviada com sucesso!"),
// //             () => alert("Erro ao enviar a mensagem, tente novamente."));
// // });

// // document.addEventListener("DOMContentLoaded", function () {
// //     emailjs.init("YxvxIpoEvVfEVUcpi"); // Seu User ID

// //     const form = document.getElementById("contact-form");
// //     if (form) {
// //         form.addEventListener("submit", function (event) {
// //             event.preventDefault();

// //             emailjs.sendForm("service_78nb0lp", "template_78yejp7", this)
// //                 .then(() => alert("Mensagem enviada com sucesso!"))
// //                 .catch(() => alert("Erro ao enviar a mensagem, tente novamente."));
// //         });
// //     }
// // });

// emailjs.sendForm("service_78nb0lp", "template_78yejp7", this)
//     .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Mensagem enviada com sucesso!");
//     })
//     .catch((error) => {
//         console.error("FAILED Email...", error);
//         alert("Erro ao enviar a mensagem, tente novamente.");
//     });