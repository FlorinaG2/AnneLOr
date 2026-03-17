// Ghid de mărimi – deschidere/închidere modal
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("open-size-guide");
  const modal = document.getElementById("size-guide-modal");
  const closeBtn = document.getElementById("close-size-guide");

  if (!openBtn || !modal || !closeBtn) return;

  function openModal() {
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // blocăm scroll-ul paginii în spate
  }

  function closeModal() {
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = ""; // revenim la comportamentul normal
  }

  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && modal.classList.contains("is-visible")) {
      closeModal();
    }
  });
});

