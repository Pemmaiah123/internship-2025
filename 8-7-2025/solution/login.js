document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  if (!role) {
    msg.textContent = "Please select a login role.";
    return;
  }

  // Admin Login
  if (role === "admin") {
    if (email === "admin@gmail.com" && password === "123456") {
      msg.style.color = "green";
      msg.textContent = "Admin login successful!";
      setTimeout(() => {
        window.location.href = "admin-dashboard.html"; // Admin Dashboard
      }, 1000);
    } else {
      msg.textContent = "Invalid admin credentials.";
    }
  }

  // Employee Login
  else if (role === "employee") {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      msg.style.color = "green";
      msg.textContent = "Employee login successful!";
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      setTimeout(() => {
        window.location.href = "Edash.html"; // ✅ Employee Dashboard
      }, 1000);
    } else {
      msg.textContent = "Invalid employee credentials.";
    }
  }

  // Clear fields after attempt
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
