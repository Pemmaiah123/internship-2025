document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("msg");

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password: min 6 chars, 1 uppercase, 1 lowercase, 1 special char
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  // Validate email
  if (!emailRegex.test(email)) {
    msg.textContent = "Please enter a valid email.";
    msg.className = "message error";
    return;
  }

  // Validate password
  if (!passwordRegex.test(password)) {
    msg.textContent =
      "Password must be at least 6 characters, include uppercase, lowercase, and a special character.";
    msg.className = "message error";
    return;
  }

  // Check password match
  if (password !== confirm) {
    msg.textContent = "Passwords do not match.";
    msg.className = "message error";
    return;
  }

  // Get existing employees from localStorage
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  // Check for duplicate email
  if (employees.some(emp => emp.email === email)) {
    msg.textContent = "This email is already registered.";
    msg.className = "message error";
    return;
  }

  // Save new employee
  employees.push({ name, email, password });
  localStorage.setItem("employees", JSON.stringify(employees));

  // Success message
  msg.textContent = "Registration successful!";
  msg.className = "message success";

  // Clear form
  document.getElementById("registrationForm").reset();
});
