document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!email.includes("@") || !email.includes(".")) {
    return alert("Invalid email format.");
  }

  if (users.some(u => u.email === email)) {
    return alert("Email already registered.");
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  if (!passwordRegex.test(password)) {
    return alert("Password must be at least 6 characters and include uppercase, lowercase, and special character.");
  }

  if (password !== confirm) {
    return alert("Passwords do not match.");
  }

  const newUser = {
    name,
    email,
    password,
    role: "employee", // ✅ force lowercase role
    employeeId: null
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful. Please login.");
  window.location.href = "login.html";
});
