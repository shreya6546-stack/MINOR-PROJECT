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