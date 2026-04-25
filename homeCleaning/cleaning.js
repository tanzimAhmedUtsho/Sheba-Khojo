const serviceData = {
  title: "Premium Home Cleaning",
  rating: "4.9 (১২০+ রিভিউ)",
  price: "৳ ৪৯৯ থেকে শুরু",
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=1000&auto=format&fit=crop",
  description:
    "আপনার ঘরকে করুন একদম নতুনের মতো ঝকঝকে। আমাদের দক্ষ কর্মীরা আধুনিক মেশিন এবং উন্নত কেমিক্যাল ব্যবহার করে গভীর পরিষ্কার নিশ্চিত করে।",
  features: [
    {
      icon: "fa-broom",
      title: "ডিপ ক্লিনিং",
      desc: "প্রতিটি কোণা নিখুঁতভাবে পরিষ্কার করা হয়।",
    },
    {
      icon: "fa-shield-virus",
      title: "জীবাণুনাশ",
      desc: "পরিষ্কারের পর ঘরকে করা হয় ১০০% জীবাণুমুক্ত।",
    },
    {
      icon: "fa-user-check",
      title: "দক্ষ কর্মী",
      desc: "আমাদের সকল কর্মী ভেরিফাইড এবং অভিজ্ঞ।",
    },
  ],
  includes: [
    "মেঝে মোছা ও পলিশ",
    "জানালার কাঁচ পরিষ্কার",
    "রান্নাঘর ও বাথরুম ক্লিনিং",
    "আসবাবপত্র ঝাড়া",
  ],
};

const renderPage = () => {
  const root = document.getElementById("service-detail");
  root.innerHTML = `
        <main class="max-w-6xl mx-auto p-6 md:py-12">
            <div class="grid md:grid-cols-2 gap-12 items-start">
                
                <div class="relative group">
                    <img src="${serviceData.image}" class="rounded-3xl shadow-2xl w-full object-cover h-[400px] group-hover:scale-[1.02] transition duration-500" alt="Cleaning">
                    <div class="absolute top-4 left-4 bg-white/90 dark:bg-slate-800 px-4 py-2 rounded-full font-bold text-pink-600 shadow-lg">
                        ⭐ ${serviceData.rating}
                    </div>
                </div>

                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
                        ${serviceData.title}
                    </h1>
                    <p class="text-2xl font-bold text-pink-600">${serviceData.price}</p>
                    <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        ${serviceData.description}
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        ${serviceData.features
                          .map(
                            (f) => `
                            <div class="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-pink-50 dark:border-slate-700 text-center">
                                <i class="fas ${f.icon} text-pink-500 text-2xl mb-2"></i>
                                <h3 class="font-bold dark:text-white text-sm">${f.title}</h3>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>

                    <div class="pt-6">
                        <button onclick="bookNow()" class="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white text-xl font-bold px-12 py-4 rounded-2xl shadow-xl shadow-pink-200 dark:shadow-none transform transition active:scale-95">
                            এখনই বুক করুন
                        </button>
                    </div>
                </div>
            </div>

            <section class="mt-16 p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">
                <h2 class="text-2xl font-bold mb-6 dark:text-white border-l-4 border-pink-500 pl-4">সার্ভিসের অন্তর্ভুক্ত বিষয়গুলো:</h2>
                <div class="grid md:grid-cols-2 gap-4">
                    ${serviceData.includes
                      .map(
                        (item) => `
                        <div class="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                            <i class="fas fa-check-circle text-green-500"></i>
                            <span>${item}</span>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </section>
        </main>
    `;
};

// Functions
const bookNow = () => {
  const url = `../booking button/booking-success.html?service=${encodeURIComponent(serviceData.title)}`;
  window.location.href = url;
};

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

// Initial Load
window.onload = () => {
  if (localStorage.getItem("theme") === "dark")
    document.documentElement.classList.add("dark");
  renderPage();
};
