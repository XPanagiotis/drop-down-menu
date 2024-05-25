const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const links = document.querySelectorAll(".dropdown a");
const navLinks = document.querySelectorAll(".nav-link a");
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".menu");

function toggleHamburger() {
  navMenu.classList.toggle("show");
}

function closeDropdown() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);

    dropdownElement.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset.dropdown) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
  });
});

//close dropdown menu when a link is clicked
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    closeDropdown();
    e.preventDefault();
  });
});

//close dropdown when nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    closeDropdown();
    e.preventDefault();
  });
});

//close dropdown when document is clicked
document.documentElement.addEventListener("click", () => {
  closeDropdown();
});

//close dropdown when the escape key is pressed
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDropdown();
  }
});

hamburger.addEventListener("click", toggleHamburger);
