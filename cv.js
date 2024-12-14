// Refactored Theme Toggle Logic
function toggleTheme() {
  const body = document.body;
  const themeToggleButton = document.querySelector(".theme-toggle");
  const currentIcon = themeToggleButton.querySelector("svg");

  // Define the theme and the SVG for both light and dark modes
  const themes = {
    light: {
      themeClass: "light-theme",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="moon-icon">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>`,
    },
    dark: {
      themeClass: "dark-theme",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f0efea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sun-icon">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>`,
    },
  };

  // Check current theme and toggle
  const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? themes.light : themes.dark;

  // Update the theme and icon
  body.classList.replace(currentTheme + "-theme", newTheme.themeClass);
  currentIcon.outerHTML = newTheme.icon;

  // Save theme to local storage
  localStorage.setItem("theme", newTheme.themeClass);
}

// Load Theme from Local Storage on Page Load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(savedTheme);
};

// Scroll Event to Highlight Active Section
function handleScroll() {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav__item");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop - sectionHeight / 3 &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.id;
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${currentSection}` && currentSection) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleScroll);

// Menu Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const myInfo = document.querySelector(".myinfo");

  menuToggle.addEventListener("click", () => {
    myInfo.classList.toggle("open");
  });
});
