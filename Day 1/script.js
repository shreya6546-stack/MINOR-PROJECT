const startBtn = document.getElementById("startBtn");
const loginBtn = document.getElementById("loginBtn");

startBtn.addEventListener("click", () => {
  alert("Redirecting to signup page...");
  // window.location.href = "/signup";
});

loginBtn.addEventListener("click", () => {
  alert("Redirecting to login page...");
  // window.location.href = "/login";
});
// Example dynamic update
// const strongCount = document.getElementById("strongCount");
// const attentionCount = document.getElementById("attentionCount");
// const weakCount = document.getElementById("weakCount");

// Example data (could come from API later)
// const data = {
//   strong: 12,
//   attention: 5,
//   weak: 3
// };

// strongCount.textContent = data.strong;
// attentionCount.textContent = data.attention;
// weakCount.textContent = data.weak;



document.querySelector(".btn-primary").addEventListener("click", () => {
  alert("Get Started clicked!");
});

// Highlight active nav link
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


// CTA button interaction
document.querySelector(".cta-btn").addEventListener("click", () => {
  alert("Redirecting to signup...");
});
function goToLogin() {
  window.location.href = "login.html";
}
submitLogin.onclick = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@test.com" && password === "1234") {
    loginPage.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    alert("Invalid credentials");
  }
};