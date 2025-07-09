document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const confirm = document.getElementById("confirm").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // ✅ Strict Gmail validation
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailRegex.test(email)) {
    return alert("Please enter a valid Gmail address ending with @gmail.com");
  }

  // ✅ Check for unique email
  if (users.some(u => u.email === email)) {
    return alert("Email already registered.");
  }

  // ✅ Password strength
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
  if (!passwordRegex.test(password)) {
    return alert("Password must be at least 6 characters and include uppercase, lowercase, and special character.");
  }

  if (password !== confirm) {
    return alert("Passwords do not match.");
  }

  // ✅ Store user with default role
  const newUser = {
    name,
    email,
    password,
    role: "employee",
    employeeId: null
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful. Please login.");
  window.location.href = "login.html";
});
