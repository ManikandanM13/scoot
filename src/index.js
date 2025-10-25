const menubtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const closebtn = document.getElementById("closebtn");

menubtn.addEventListener("click", () => {
  navbar.classList.remove("-translate-x-full"); // Slide in
});

closebtn.addEventListener("click", () => {
  navbar.classList.add("-translate-x-full"); // Slide out
});


  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const paragraph = item.querySelector("p");
      const arrow = item.querySelector("img");

      // Toggle visibility
      paragraph.classList.toggle("hidden");

      // Rotate arrow up/down
      arrow.classList.toggle("rotate-180");
    });
  });