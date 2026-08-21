let role = "student";

// PRESET ACCOUNTS
const students = [
  {
    name: "Juan Dela Cruz",
    username: "2026-001",
    password: "juan123"
  },
  {
    name: "Maria Santos",
    username: "2026-002",
    password: "maria123"
  }
];

const admin = {
  username: "admin",
  password: "admin2026"
};

// Toggle
studentBtn.onclick = () => {
  role = "student";
  studentBtn.classList.add("active");
  adminBtn.classList.remove("active");
};

adminBtn.onclick = () => {
  role = "admin";
  adminBtn.classList.add("active");
  studentBtn.classList.remove("active");
};

function login() {
  const name = fullname.value.trim();
  const user = username.value.trim();
  const pass = password.value.trim();

  if (role === "student") {
    const found = students.find(s =>
      s.name === name &&
      s.username === user &&
      s.password === pass
    );

    if (found) {
      msg.style.color = "green";
      msg.innerHTML = "✅ Welcome " + found.name;
      // window.location.href = "student.html";
    } else {
      msg.style.color = "red";
      msg.innerHTML = "❌ Invalid student credentials.";
    }
  }

  if (role === "admin") {
    if (user === admin.username && pass === admin.password) {
      msg.style.color = "green";
      msg.innerHTML = "✅ Welcome Admin!";
      // window.location.href = "admin.html";
    } else {
      msg.style.color = "red";
      msg.innerHTML = "❌ Invalid admin credentials.";
    }
  }
}
