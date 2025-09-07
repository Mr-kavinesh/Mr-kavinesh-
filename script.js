// Scroll animation effect for About section
function revealAboutOnScroll() {
  const about = document.querySelector(".about");
  if (!about) return;

  const trigger = window.innerHeight / 1.2;
  const top = about.getBoundingClientRect().top;

  if (top < trigger) {
    about.classList.add("show");
    // optional: remove listener once shown
    window.removeEventListener("scroll", revealAboutOnScroll);
  }
}

window.addEventListener("scroll", revealAboutOnScroll);
window.addEventListener("DOMContentLoaded", () => {
  // run once in case it's already in view
  revealAboutOnScroll();

  // Say Hello button
  const helloBtn = document.getElementById("helloBtn");
  if (helloBtn) {
    helloBtn.addEventListener("click", () => {
      alert("Thanks for contacting!");
    });
  }
});