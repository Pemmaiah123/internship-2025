document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  const msg = document.getElementById("msg");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (!emailRegex.test(email)) {
    msg.textContent = "Invalid email format.";
    return;
  }

  if (!passRegex.test(password)) {
    msg.textContent = "Password must have 1 uppercase, 1 lowercase, 1 special character, and be at least 6 characters.";
    return;
  }

  if (password !== confirm) {
    msg.textContent = "Passwords do not match.";
    return;
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    msg.textContent = "Email already registered.";
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  msg.style.color = "green";
  msg.textContent = "Registered successfully! You can now login.";
  this.reset();
});
