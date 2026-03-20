document.getElementById("loginBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // Demo validation
  if (email === "admin@test.com" && password === "1234") {
    alert("Login successful!");
    
    //Redirect to dashboard (you can change this)
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});