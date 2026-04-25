// OPEN MODAL
function openModal(service) {
  const modal = document.getElementById("modal");
  const serviceName = document.getElementById("serviceName");

  modal.classList.remove("hidden");
  serviceName.innerText = service;
}

// CLOSE MODAL
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// CLOSE MODAL WHEN CLICK OUTSIDE
window.onclick = function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};

// DARK MODE TOGGLE (IMPROVED)
function toggleDark() {
  const body = document.getElementById("body");

  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-white");

  // navbar adjust
  document.querySelector("nav").classList.toggle("bg-black");
  document.querySelector("nav").classList.toggle("bg-white/80");
}

// SEARCH FUNCTION (NEW 🔍)
function searchService() {
  const input = document.querySelector("input").value.toLowerCase();
  const services = document.querySelectorAll(".service-card");

  services.forEach((card) => {
    const text = card.innerText.toLowerCase();
    if (text.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ENTER PRESS SEARCH
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchService();
  }
});

// SIMPLE CLICK ALERT FOR SERVICE OPTIONS (UX UPGRADE)
const serviceOptions = document.querySelectorAll(".min-w-[120px]");

serviceOptions.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Service selected: " + item.innerText);
  });
});
