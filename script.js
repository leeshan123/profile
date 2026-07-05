const header = document.querySelector(".site-header");
const year = document.querySelector("#year");

const updateHeader = () => {
  header.dataset.elevated = String(window.scrollY > 8);
};

year.textContent = new Date().getFullYear();
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
