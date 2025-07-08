document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (role === "admin") {
    if (email === "admin@gmail.com" && password === "123456") {
      msg.style.color = "green";
      msg.textContent = "Admin login successful!";
      // redirect to admin dashboard
      setTimeout(() => window.location.href = "admin-dashboard.html", 1000);
    } else {
      msg.textContent = "Invalid admin credentials.";
    }
  } else {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      msg.style.color = "green";
      msg.textContent = "Employee login successful!";
      // redirect to employee dashboard
      setTimeout(() => window.location.href = "employee-dashboard.html", 1000);
    } else {
      msg.textContent = "Invalid employee credentials.";
    }
  }

  // clear fields after login attempt
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
