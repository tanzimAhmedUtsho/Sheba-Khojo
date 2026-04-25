// ✅ ডার্ক মোড লজিক
function toggleDark() {
  document.documentElement.classList.toggle("dark");
  const btn = document.getElementById("theme-toggle");
  if (document.documentElement.classList.contains("dark")) {
    btn.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// পেজ লোড হওয়ার সময় থিম চেক
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.innerHTML = "☀️";
  }
});

// কন্টাক্ট ফর্ম সাবমিশন
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    alert(
      `ধন্যবাদ ${name}! আপনার ${subject} সংক্রান্ত বার্তাটি আমরা পেয়েছি। শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।`,
    );
    this.reset();
  });
