// Burger menu
const burger = document.getElementById("burger");
const navList = document.getElementById("navList");
burger.addEventListener("click", () => {
  navList.classList.toggle("open");
  burger.classList.toggle("active");
});
// Close on link click
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    burger.classList.remove("active");
  });
});
// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
document
  .querySelectorAll(".cards__item, .about__stat, .about__box")
  .forEach((el) => observer.observe(el));
