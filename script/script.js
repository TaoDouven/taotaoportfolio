console.log("Hallo vanaf script.js!");


  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-on-scroll");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // slechts één keer afspelen
          }
        });
      },
      {
        threshold: 0.1, // 10% zichtbaar
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });
  });


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("visible");
  } else {
    header.classList.remove("visible");
  }
});



