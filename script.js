let requests = [];

function showLogin() {
  document.getElementById("loginBox").style.display = "flex";
}

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if (user === "atharv" && pass === "12345") {
    msg.textContent = "Login successful!";
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("requestsBox").style.display = "block";
    showRequests();
  } else {
    msg.textContent = "Invalid username or password!";
  }
}

document.getElementById("requestForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const work = document.getElementById("work").value;
  const contact = document.getElementById("contactInfo").value;

  requests.push({ work, contact });
  alert("✅ Your request has been sent!");
  document.getElementById("work").value = "";
  document.getElementById("contactInfo").value = "";
});

function showRequests() {
  const list = document.getElementById("requestsList");
  list.innerHTML = "";
  requests.forEach((r, i) => {
    const li = document.createElement("li");
    li.textContent = `User${i + 1}: ${r.work} | ${r.contact}`;
    list.appendChild(li);
  });
}
