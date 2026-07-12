const header = document.querySelector(".site-header");
const year = document.querySelector("#year");
const revealTargets = document.querySelectorAll("[data-reveal]");
const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

revealTargets.forEach((target) => {
  const rect = target.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    target.classList.add("is-visible");
  }
});

document.documentElement.classList.add("reveal-ready");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

const updateHeader = () => {
  if (header) {
    header.dataset.elevated = String(window.scrollY > 8);
  }
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 }
  );

  revealTargets.forEach((target) => {
    if (!target.classList.contains("is-visible")) {
      revealObserver.observe(target);
    }
  });
}

const sectionLinks = navLinks
  .map((link) => {
    const id = link.getAttribute("href")?.slice(1);
    const section = id ? document.getElementById(id) : null;
    return section ? { link, section } : null;
  })
  .filter(Boolean);

if ("IntersectionObserver" in window && sectionLinks.length > 0) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      navLinks.forEach((link) => link.removeAttribute("aria-current"));
      const current = sectionLinks.find(({ section }) => section === visibleEntry.target);
      current?.link.setAttribute("aria-current", "location");
    },
    { rootMargin: "-28% 0px -58%", threshold: [0, 0.05, 0.2] }
  );

  sectionLinks.forEach(({ section }) => sectionObserver.observe(section));
}
