const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const form = document.getElementById("waitlist");
const message = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) return;
  message.textContent = "You're on the list. We'll let you know when we launch.";
  message.style.color = "#c8ff54";
  form.querySelector("button").textContent = "You're in ✓";
  form.querySelector("input").disabled = true;
});
