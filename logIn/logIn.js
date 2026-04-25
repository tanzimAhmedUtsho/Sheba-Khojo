// Sheba Khojo Login Page Builder
const app = document.getElementById("login-app");

const renderLoginPage = () => {
  app.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100">
            <div class="p-8">
                <div class="text-center mb-10">
                    <h1 class="text-4xl font-extrabold text-pink-main tracking-tight">Sheba Khojo</h1>
                    <p class="text-gray-400 mt-2 font-medium">আপনার প্রোফাইলে লগইন করুন</p>
                </div>

                <form id="loginForm" class="space-y-5">
                    <div id="input-container"></div>
                    
                    <div class="flex items-center justify-between text-sm px-1">
                        <label class="flex items-center text-gray-500 cursor-pointer">
                            <input type="checkbox" class="h-4 w-4 text-pink-600 rounded border-gray-300 focus:ring-pink-500">
                            <span class="ml-2">মনে রাখুন</span>
                        </label>
                        <a href="#" class="text-pink-600 hover:text-pink-800 font-semibold transition">পাসওয়ার্ড ভুলে গেছেন?</a>
                    </div>

                    <button type="submit" 
                        class="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all transform active:scale-95">
                        লগইন করুন
                    </button>
                </form>

                <div class="mt-8 text-center">
                    <p class="text-gray-500">নতুন ইউজার? 
                        <a href="#" class="text-pink-600 font-bold hover:underline">অ্যাকাউন্ট খুলুন</a>
                    </p>
                </div>
            </div>
        </div>
    `;

  renderInputs();
};

// Function to generate inputs dynamically
const renderInputs = () => {
  const container = document.getElementById("input-container");
  const fields = [
    {
      id: "email",
      type: "email",
      label: "ইমেইল",
      icon: "fa-envelope",
      placeholder: "example@mail.com",
    },
    {
      id: "password",
      type: "password",
      label: "পাসওয়ার্ড",
      icon: "fa-lock",
      placeholder: "••••••••",
    },
  ];

  container.innerHTML = fields
    .map(
      (field) => `
        <div class="relative group">
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 ml-1">${field.label}</label>
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 group-focus-within:text-pink-500 transition">
                    <i class="fas ${field.icon}"></i>
                </span>
                <input type="${field.type}" id="${field.id}" required
                    class="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:bg-white outline-none transition-all text-sm"
                    placeholder="${field.placeholder}">
            </div>
        </div>
    `,
    )
    .join("");
};

// Form Submission Handling
app.addEventListener("submit", (e) => {
  if (e.target.id === "loginForm") {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validation & Action
    if (email && password) {
      console.log("Logging in with:", email);
      alert("Sheba Khojo-তে স্বাগতম!");
    }
  }
});

// Initial Render
renderLoginPage();
