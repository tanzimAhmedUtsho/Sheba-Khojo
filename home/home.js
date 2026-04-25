/**
 * Sheba Khojo - Main JS File
 * Developed by Tanzim Ahmed Utsho
 */

// ✅ ১. ডার্ক মোড লজিক (Tailwind Class Based)
function toggleDark() {
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");

  // 'dark' ক্লাস টগল করা
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
document.addEventListener("DOMContentLoaded", () => {
  // থিম চেক
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("theme-toggle");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    if (themeBtn) themeBtn.innerHTML = "☀️";
  }

  // লগইন চেক
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginBtnContainer = document.querySelector("nav div.space-x-3");

  if (isLoggedIn === "true" && loginBtnContainer) {
    const userName = localStorage.getItem("userName");
    // লগইন বাটন সরিয়ে ইউজার প্রোফাইল ও লগআউট বাটন যোগ করা
    const loginLink = loginBtnContainer.querySelector(
      'a[href="/logIn/login.html"]',
    );
    if (loginLink) {
      loginLink.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-gray-600 dark:text-pink-400">👋 ${userName}</span>
          <button onclick="logout()" class="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-white px-4 py-2 rounded-full text-sm hover:bg-red-100 dark:hover:bg-red-900/30 transition">Logout</button>
        </div>
      `;
    }
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  window.location.reload();
}

// ✅ ৩. মডাল কন্ট্রোল (Quick Book Logic)
function openModal(service) {
  const modal = document.getElementById("modal");
  const serviceName = document.getElementById("serviceName");

  if (modal && serviceName) {
    modal.classList.remove("hidden");
    modal.classList.add("flex"); // স্ক্রিনের মাঝখানে রাখার জন্য
    serviceName.innerText = service;
    // মডাল ওপেন হলে বডি স্ক্রল বন্ধ করা (UX Upgrade)
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    // বডি স্ক্রল পুনরায় চালু করা
    document.body.style.overflow = "auto";
  }
}

// ✅ ৩.৫ বুকিং কনফার্ম করা
function confirmBooking() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("বুকিং করতে হলে আপনাকে প্রথমে লগইন করতে হবে।");
    window.location.href = "../logIn/login.html";
    return;
  }

  const name = document.getElementById("userName").value.trim();
  const phone = document.getElementById("userPhone").value.trim();
  const service = document.getElementById("serviceName").innerText;

  if (name === "" || phone === "") {
    alert("অনুগ্রহ করে আপনার নাম এবং ফোন নম্বর প্রদান করুন।");
    return;
  }

  // এখানে সাধারণত ডাটাবেজে ডাটা পাঠানো হয়।
  // আমরা সার্ভিসের নাম দিয়ে সাকসেস পেজে রিডাইরেক্ট করছি।
  const url = `booking-success.html?service=${encodeURIComponent(service)}`;
  window.location.href = url;
}

// মডালের বাইরে ক্লিক করলে বন্ধ হবে
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    closeModal();
  }
});

// ✅ ৪. সার্চ ফাংশন (উন্নত ভার্সন)
function searchService() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();
  const services = document.querySelectorAll(".service-card");
  let found = false;

  services.forEach((card) => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block"; // কার্ড দেখাবে
      found = true;
    } else {
      card.style.display = "none"; // কার্ড লুকাবে
    }
  });

  // সার্চ রেজাল্ট না পাওয়া গেলে ফিডব্যাক (অপশনাল)
  if (!found && input !== "") {
    console.log("কোনো সার্ভিস পাওয়া যায়নি");
  }
}

// এন্টার প্রেস করলে সার্চ হবে
document
  .getElementById("searchInput")
  ?.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      searchService();
    }
  });

// ✅ ৫. কুইক সার্ভিস অপশন ক্লিক (Redirect/Search Logic)
// এই পার্টটি আপনার উপরের আইকনগুলোর জন্য
document.querySelectorAll(".service-option").forEach((item) => {
  item.addEventListener("click", () => {
    const serviceText = item.querySelector("p").innerText.trim();

    // যদি ইউজার 'Cleaning' এ ক্লিক করে তবে সরাসরি ওই পেজে নিয়ে যাবে
    if (serviceText.toLowerCase().includes("cleaning")) {
      window.location.href = "cleaning.html";
    }
    // অন্য অপশনগুলোর জন্য সার্চ ফিল্ডে নাম বসিয়ে সার্চ করবে
    else {
      document.getElementById("searchInput").value = serviceText;
      searchService();
      // স্ক্রল করে সার্ভিস সেকশনে নিয়ে যাবে
      document.querySelector(".grid").scrollIntoView({ behavior: "smooth" });
    }
  });
});
