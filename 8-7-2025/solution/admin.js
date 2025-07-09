let employees = JSON.parse(localStorage.getItem("users")) || [];
let perPage = 5;
let currentPage = 1;

document.addEventListener("DOMContentLoaded", () => {
  const admin = JSON.parse(localStorage.getItem("loggedInUser"));
  if (admin) {
    document.getElementById("adminEmail").textContent = admin.email;
    document.getElementById("adminName").textContent = admin.name;
  }

  renderTable();
  renderPagination();
});

function renderTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  let filtered = filterData(employees);
  let start = (currentPage - 1) * perPage;
  let pageData = filtered.slice(start, start + perPage);

  pageData.forEach((emp) => {
    const tr = document.createElement("tr");
    const isAlreadyAdmin = emp.role === "admin";
    tr.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.email}</td>
      <td>${emp.employeeId || "Not Set"}</td>
      <td>
        ${isAlreadyAdmin
          ? "<span class='text-success'>Admin</span>"
          : `<button class="btn btn-sm btn-primary" onclick="makeAdmin('${emp.email}')">Make Admin</button>`}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function renderPagination() {
  const totalItems = filterData(employees).length;
  const totalPages = Math.ceil(totalItems / perPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.className = "page-item" + (i === currentPage ? " active" : "");
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.onclick = (e) => {
      e.preventDefault();
      currentPage = i;
      renderTable();
      renderPagination();
    };
    pagination.appendChild(li);
  }
}

function filterData(data) {
  const search = document.getElementById("searchInput").value.toLowerCase();
  return data.filter((emp) =>
    emp.name.toLowerCase().includes(search) ||
    emp.email.toLowerCase().includes(search) ||
    (emp.employeeId && emp.employeeId.toLowerCase().includes(search))
  );
}

function filterTable() {
  currentPage = 1;
  renderTable();
  renderPagination();
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

function goBack() {
  window.location.href = "login.html";
}

function makeAdmin(email) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(user => {
    if (user.email === email && user.role !== "admin") {
      user.role = "admin";
    }
    return user;
  });

  localStorage.setItem("users", JSON.stringify(updatedUsers));
  employees = updatedUsers;
  renderTable();
  renderPagination();
}
