const allServices = {
  "ac repair": {
    title: "Premium AC Servicing & Repair",
    rating: "4.8 (২৫০+ রিভিউ)",
    price: "৳ ৭৯৯ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1599939575322-792a426f461d?q=80&w=1000",
    description:
      "তীব্র গরমে আপনার এসি থাকুক একদম নতুনের মতো। আমাদের এক্সপার্ট টেকনিশিয়ানরা উন্নত টুলস ব্যবহার করে আপনার এসির কুলিং পারফরম্যান্স বাড়িয়ে দিবে।",
    features: [
      {
        icon: "fa-snowflake",
        title: "মাস্টার ক্লিন",
        desc: "ইনডোর ও আউটডোর ইউনিটের গভীর পরিষ্কার।",
      },
      {
        icon: "fa-gas-pump",
        title: "গ্যাস রিফিল",
        desc: "প্রয়োজনীয় প্রেসার অনুযায়ী গ্যাস টপ-আপ।",
      },
      {
        icon: "fa-tools",
        title: "৭ দিনের ওয়ারেন্টি",
        desc: "সার্ভিস পরবর্তী যেকোনো সমস্যায় ফ্রি সাপোর্ট।",
      },
    ],
    includes: [
      "ফিল্টার পরিষ্কার",
      "ইভাপোরেটর কয়েল ক্লিনিং",
      "ড্রেন লাইন চেক",
      "ইলেক্ট্রিক্যাল কানেকশন টেস্টিং",
    ],
  },
  appliance: {
    title: "Expert Appliance Repair",
    rating: "4.7 (১৮০+ রিভিউ)",
    price: "৳ ৫৫০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf45?q=80&w=1000",
    description:
      "টিভি, ফ্রিজ বা ওভেন - যেকোনো ইলেকট্রনিক ডিভাইসের নির্ভরযোগ্য সমাধান। অরিজিনাল পার্টস এবং দক্ষ ইঞ্জিনিয়ার নিশ্চিত করে দীর্ঘস্থায়ী সার্ভিস।",
    features: [
      {
        icon: "fa-plug",
        title: "দ্রুত মেরামত",
        desc: "একই দিনে হোম ভিজিট ও সমাধান।",
      },
      {
        icon: "fa-microchip",
        title: "অরিজিনাল পার্টস",
        desc: "সর্বদা জেনুইন স্পেয়ার পার্টস ব্যবহার।",
      },
      {
        icon: "fa-check-double",
        title: "ফুল ডায়াগনোসিস",
        desc: "ভবিষ্যৎ সমস্যা এড়াতে পূর্ণাঙ্গ পরীক্ষা।",
      },
    ],
    includes: [
      "সার্কিট বোর্ড রিপেয়ার",
      "মোটর টিউনিং",
      "গ্যাস রিফিল (ফ্রিজ)",
      "ইলেক্ট্রিক্যাল সেফটি চেক",
    ],
  },
  cleaning: {
    title: "Premium Home Cleaning",
    rating: "4.9 (১২০+ রিভিউ)",
    price: "৳ ৪৯৯ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=1000",
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
  },
  beauty: {
    title: "Premium Home Salon & Beauty",
    rating: "4.9 (৩০০+ রিভিউ)",
    price: "৳ ৯৯৯ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1000",
    description:
      "পার্লারের ভিড় এড়িয়ে ঘরে বসেই নিন প্রিমিয়াম বিউটি সার্ভিস। আমাদের সার্টিফাইড বিউটিশিয়ানরা ব্যবহার করেন হাই-এন্ড ব্র্যান্ডের কসমেটিকস।",
    features: [
      {
        icon: "fa-magic",
        title: "ব্র্যান্ডেড প্রোডাক্ট",
        desc: "ত্বকের যত্নে সেরা মানের পন্য।",
      },
      {
        icon: "fa-heart",
        title: "হাইজেনিক সার্ভিস",
        desc: "সম্পূর্ণ ডিসপোজেবল কিট ব্যবহার।",
      },
      {
        icon: "fa-clock",
        title: "সময় বাঁচান",
        desc: "আপনার পছন্দমতো সময়ে ঘরেই সার্ভিস।",
      },
    ],
    includes: [
      "ফেসিয়াল ও স্ক্রাবিং",
      "মেনিকিউর ও পেডিকিউর",
      "হেয়ার কাট ও স্টাইলিং",
      "ব্রাইডাল ও পার্টি মেকআপ",
    ],
  },
  shifting: {
    title: "Secure Home & Office Shifting",
    rating: "4.6 (৯০+ রিভিউ)",
    price: "৳ ৪০০০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1000",
    description:
      "আপনার মূল্যবান মালামাল নিরাপদে স্থানান্তর করার দায়িত্ব আমাদের। বাবল র‍্যাপ এবং উন্নত প্যাকিংয়ের মাধ্যমে আমরা নিশ্চিত করি জিরো-ড্যামেজ শিপিং।",
    features: [
      {
        icon: "fa-box-open",
        title: "নিরাপদ প্যাকিং",
        desc: "মাল্টি-লেয়ার প্রটেকশন প্যাকিং।",
      },
      {
        icon: "fa-truck-loading",
        title: "দক্ষ লোডার",
        desc: "ভারী আসবাবপত্র বহনে দক্ষ টিম।",
      },
      {
        icon: "fa-shield-alt",
        title: "বীমা সুবিধা",
        desc: "ক্ষয়ক্ষতির ক্ষেত্রে ক্ষতিপূরণ ব্যবস্থা।",
      },
    ],
    includes: [
      "প্যাকিং ও আনপ্যাকিং",
      "আসবাবপত্র ফিটিং",
      "লোডিং ও আনলোডিং",
      "ট্রাক ও পরিবহন ব্যবস্থা",
    ],
  },
  health: {
    title: "Premium Health & Nursing Support",
    rating: "4.9 (১৫০+ রিভিউ)",
    price: "৳ ৮০০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000",
    description:
      "শারীরিক অসুস্থতায় বিশেষজ্ঞ ডাক্তার এবং নার্সিং সাপোর্ট এখন আপনার ঘরেই। আমরা দিই ২৪/৭ জরুরি স্বাস্থ্যসেবা এবং কেয়ারগিভার সুবিধা।",
    features: [
      {
        icon: "fa-user-nurse",
        title: "সার্টিফাইড নার্স",
        desc: "অভিজ্ঞ ও মানবিক কেয়ারগিভার।",
      },
      {
        icon: "fa-stethoscope",
        title: "ডাক্তার ভিজিট",
        desc: "অন-কল ডাক্তার কনসালটেন্সি।",
      },
      {
        icon: "fa-vial",
        title: "হোম ল্যাব টেস্ট",
        desc: "বাসায় রক্ত পরীক্ষা ও রিপোর্ট প্রদান।",
      },
    ],
    includes: [
      "ব্লাড প্রেসার ও সুগার চেক",
      "ফিজিওথেরাপি",
      "পোস্ট-অপারেটিভ কেয়ার",
      "মেডিসিন হোম ডেলিভারি",
    ],
  },
  fridge: {
    title: "Expert Fridge & Refrigerator Repair",
    rating: "4.8 (১৬০+ রিভিউ)",
    price: "৳ ৬০০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1571175432270-48225e9e3c77?q=80&w=1000",
    description:
      "আপনার ফ্রিজের কুলিং সমস্যা বা যেকোনো যান্ত্রিক ত্রুটির দ্রুত সমাধান। আমরা অরিজিনাল থার্মোস্ট্যাট এবং গ্যাস ব্যবহার নিশ্চিত করি।",
    features: [
      {
        icon: "fa-ice-cream",
        title: "দ্রুত কুলিং",
        desc: "কুলিং পারফরম্যান্স পুনরুদ্ধার।",
      },
      {
        icon: "fa-bolt",
        title: "বিদ্যুৎ সাশ্রয়",
        desc: "অপ্রয়োজনীয় লোড কমানো।",
      },
      {
        icon: "fa-shield-alt",
        title: "সার্ভিস ওয়ারেন্টি",
        desc: "পার্টস রিপ্লেসমেন্টে গ্যারান্টি।",
      },
    ],
    includes: [
      "গ্যাস চার্জিং",
      "কম্প্রেসর রিপেয়ার",
      "থার্মোস্ট্যাট চেঞ্জ",
      "ডোর সিল ফিক্সিং",
    ],
  },
  "pest control": {
    title: "Eco-Friendly Pest Control",
    rating: "4.7 (১১০+ রিভিউ)",
    price: "৳ ১২০০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000",
    description:
      "তেলাপোকা, ছারপোকা বা উইপোকা থেকে মুক্তি পান চিরতরে। আমরা ব্যবহার করি উন্নত মানের এবং পরিবেশবান্ধব নিরাপদ কেমিক্যাল।",
    features: [
      {
        icon: "fa-bug",
        title: "সম্পূর্ণ মুক্তি",
        desc: "পোকামাকড় থেকে ১০০% সুরক্ষা।",
      },
      {
        icon: "fa-leaf",
        title: "নিরাপদ স্প্রে",
        desc: "শিশু ও পোষা প্রাণীর জন্য নিরাপদ।",
      },
      {
        icon: "fa-calendar-check",
        title: "ফল-আপ সার্ভিস",
        desc: "প্রয়োজনে পুনরায় সার্ভিস প্রদান।",
      },
    ],
    includes: [
      "বেড বাগ ট্রিটমেন্ট",
      "ককরোচ কন্ট্রোল",
      "অ্যান্টি-টারমাইট সলিউশন",
      "মাছি ও মশা নিধন",
    ],
  },
  plumbing: {
    title: "Emergency Plumbing Solutions",
    rating: "4.8 (১৪০+ রিভিউ)",
    price: "৳ ৩০০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=1000",
    description:
      "পানির লাইন লিক বা ট্যাপ নষ্ট? আমাদের এক্সপার্ট প্লাম্বাররা যেকোনো সেনিটারি সমস্যার সমাধান দিবে নিমিষেই।",
    features: [
      {
        icon: "fa-faucet",
        title: "তৎক্ষণাৎ সমাধান",
        desc: "কল করার ৬০ মিনিটের মধ্যে টেকনিশিয়ান।",
      },
      {
        icon: "fa-tint-slash",
        title: "লিক ডিটেকশন",
        desc: "অদৃশ্য পানির লিক খুঁজে বের করা।",
      },
      {
        icon: "fa-wrench",
        title: "আধুনিক টুলস",
        desc: "নিখুঁত কাজের জন্য উন্নত যন্ত্রপাতি।",
      },
    ],
    includes: [
      "ট্যাপ ও বেসিন রিপেয়ার",
      "কমোড ও ফ্লাশ ফিটিং",
      "পাইপলাইন জ্যাম পরিষ্কার",
      "পানির পাম্প সার্ভিসিং",
    ],
  },
  electrical: {
    title: "Safe Electrical Work",
    rating: "4.9 (১৯০+ রিভিউ)",
    price: "৳ ৩৫০ থেকে শুরু",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1000",
    description:
      "বাড়ির ইলেকট্রিক ওয়্যারিং থেকে শুরু করে লাইট-ফ্যান ফিটিং - সব ধরনের ইলেক্ট্রিক্যাল কাজের নির্ভরযোগ্য সমাধান।",
    features: [
      {
        icon: "fa-bolt",
        title: "সুরক্ষিত ওয়্যারিং",
        desc: "শর্ট সার্কিট ঝুঁকি থেকে মুক্তি।",
      },
      {
        icon: "fa-lightbulb",
        title: "ইনস্টলেশন",
        desc: "ফ্যান, লাইট ও এসি কানেকশন।",
      },
      {
        icon: "fa-user-shield",
        title: "ভেরিফাইড ইলেক্ট্রিশিয়ান",
        desc: "নিরাপদ ও দক্ষ কাজের নিশ্চয়তা।",
      },
    ],
    includes: [
      "সার্কিট ব্রেকার মেরামত",
      "সুইচ ও সকেট চেঞ্জ",
      "আইপিএস সার্ভিসিং",
      "নতুন ওয়্যারিং চেকআপ",
    ],
  },
};

// বর্তমান সার্ভিসের ডাটা লোড করা
let currentService = "cleaning"; // Default
const params = new URLSearchParams(window.location.search);
const serviceParam = params.get("service")?.toLowerCase() || "";

// ম্যাপিং চেক করা
if (serviceParam.includes("ac")) currentService = "ac repair";
else if (serviceParam.includes("appliance")) currentService = "appliance";
else if (serviceParam.includes("cleaning")) currentService = "cleaning";
else if (serviceParam.includes("beauty")) currentService = "beauty";
else if (serviceParam.includes("shifting")) currentService = "shifting";
else if (serviceParam.includes("health")) currentService = "health";
else if (serviceParam.includes("fridge")) currentService = "fridge";
else if (serviceParam.includes("pest")) currentService = "pest control";
else if (serviceParam.includes("plumbing")) currentService = "plumbing";
else if (serviceParam.includes("electrical")) currentService = "electrical";

const serviceData = allServices[currentService];

const renderPage = () => {
  const root = document.getElementById("service-detail");
  if (!serviceData) {
    root.innerHTML = "<p class='text-center py-20'>Service not found!</p>";
    return;
  }

  root.innerHTML = `
        <main class="max-w-6xl mx-auto p-6 md:py-12 animate-in fade-in duration-700">
            <div class="grid md:grid-cols-2 gap-12 items-start">

                <div class="relative group">
                    <img src="${serviceData.image}" class="rounded-3xl shadow-2xl w-full object-cover h-[400px] group-hover:scale-[1.02] transition duration-500" alt="Cleaning">
                    <div class="absolute top-4 left-4 bg-white/90 dark:bg-slate-800 px-4 py-2 rounded-full font-bold text-pink-600 shadow-lg flex items-center gap-2">
                        <span class="animate-pulse w-2 h-2 bg-pink-500 rounded-full"></span>
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
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    alert("বুকিং করতে হলে আপনাকে প্রথমে লগইন করতে হবে।");
    window.location.href = "../logIn/login.html";
    return;
  }

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
