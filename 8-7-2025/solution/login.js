document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const selectedRole = document.getElementById("roleSelect").value.toLowerCase();
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Predefined admin
  if (email === "admin@gmail.com" && password === "123456" && selectedRole === "admin") {
    const admin = { name: "Admin", email, role: "admin" };
    localStorage.setItem("loggedInUser", JSON.stringify(admin));
    return window.location.href = "admin.html";
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return alert("Invalid credentials.");
  }

  if ((user.role || "").toLowerCase() !== selectedRole) {
    return alert("You selected the wrong login type.");
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  if (selectedRole === "admin") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "Edash.html";
  }
});
