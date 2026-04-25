// ✅ ১. ডার্ক মোড লজিক (Tailwind Class Based)
function toggleDark() {
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");

  // পুরো ডকুমেন্টে 'dark' ক্লাস টগল করা
  html.classList.toggle("dark");

  // ইউজারের পছন্দ সেভ করা এবং বাটন আইকন পরিবর্তন
  if (html.classList.contains("dark")) {
    themeBtn.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.innerHTML = "🌙";
    localStorage.setItem("theme", "light");
  }
}

// ✅ ২. পেজ লোড হওয়ার সময় থিম চেক করা
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("theme-toggle");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    if (themeBtn) themeBtn.innerHTML = "☀️";
  }
});

// ✅ ৩. মডাল কন্ট্রোল (Open/Close)
function openModal(service) {
  const modal = document.getElementById("modal");
  const serviceName = document.getElementById("serviceName");

  if (modal && serviceName) {
    modal.classList.remove("hidden");
    modal.classList.add("flex"); // ফ্লেক্স দিলে মাঝখানে থাকবে
    serviceName.innerText = service;
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// বাইরে ক্লিক করলে মডাল বন্ধ হওয়া
window.onclick = function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
};

// ✅ ৪. সার্চ ফাংশন (উন্নত ভার্সন)
function searchService() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const services = document.querySelectorAll(".service-card");

  services.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    // যদি সার্চ ইনপুট কার্ডের টাইটেলের সাথে মিলে যায়
    if (title.includes(input)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// এন্টার প্রেস করলে সার্চ হবে
document
  .getElementById("searchInput")
  ?.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      searchService();
    }
  });

// ✅ ৫. সার্ভিস অপশন ক্লিক (UX Upgrade)
document.querySelectorAll(".service-option").forEach((item) => {
  item.addEventListener("click", () => {
    const serviceText = item.querySelector("p").innerText;
    // সরাসরি সার্চ ফিল্ডে নাম বসিয়ে সার্চ করে দিবে
    document.getElementById("searchInput").value = serviceText;
    searchService();
  });
});
