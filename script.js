const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const box = item.querySelector(".faqbox");

  box.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});