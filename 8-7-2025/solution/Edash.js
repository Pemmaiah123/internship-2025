let employees = JSON.parse(localStorage.getItem("users")) || [];
let loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
let perPage = 5;
let currentPage = 1;

document.addEventListener("DOMContentLoaded", () => {
  if (!loggedIn || loggedIn.role !== "employee") {
    alert("Unauthorized access.");
    return window.location.href = "login.html";
  }

  document.getElementById("empName").textContent = loggedIn.name;
  document.getElementById("empEmail").textContent = loggedIn.email;
  document.getElementById("welcomeText").textContent = `Welcome, ${loggedIn.name}`;

  const idSpan = document.getElementById("empID");
  if (loggedIn.employeeId) {
    idSpan.textContent = loggedIn.employeeId;
    document.getElementById("idActions").style.display = "none";
  } else {
    idSpan.textContent = "Not Set";
  }

  renderTable();
  renderPagination();
});

function generateID() {
  const allIds = employees.map(emp => emp.employeeId).filter(Boolean);
  let next = 1;
  let newId;
  do {
    newId = `EMP${String(next).padStart(3, "0")}`;
    next++;
  } while (allIds.includes(newId));

  saveEmployeeID(newId);
}

function setManualID() {
  const input = document.getElementById("manualID").value.trim().toUpperCase();
  const idPattern = /^EMP\d{3}$/;

  if (!idPattern.test(input)) {
    return alert("ID must be in format EMP001, EMP123 etc.");
  }

  const allIds = employees.map(emp => emp.employeeId);
  if (allIds.includes(input)) {
    return alert("ID already in use.");
  }

  saveEmployeeID(input);
}

function saveEmployeeID(id) {
  employees = employees.map(emp => {
    if (emp.email === loggedIn.email) {
      emp.employeeId = id;
      loggedIn.employeeId = id;
    }
    return emp;
  });

  localStorage.setItem("users", JSON.stringify(employees));
  localStorage.setItem("loggedInUser", JSON.stringify(loggedIn));

  document.getElementById("empID").textContent = id;
  document.getElementById("idActions").style.display = "none";
  alert("Employee ID set successfully.");
  renderTable();
}

function renderTable() {
  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  let filtered = filterData(employees);
  let start = (currentPage - 1) * perPage;
  let pageData = filtered.slice(start, start + perPage);

  pageData.forEach(emp => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.name}</td>
      <td>${emp.email}</td>
      <td>${emp.employeeId || "Not Set"}</td>
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
  return data.filter(emp =>
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
