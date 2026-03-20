document.addEventListener("DOMContentLoaded", function () {
  /* ------------------------------
     GHID DE MĂRIMI – MODAL
     ------------------------------ */
  const openBtn = document.getElementById("open-size-guide");
  const modal = document.getElementById("size-guide-modal");
  const closeBtn = document.getElementById("close-size-guide");

  function openModal() {
    if (!modal) return;
    modal.classList.add("is-visible");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-visible");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (openBtn && modal && closeBtn) {
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
  }

  /* ------------------------------
     MENIU HAMBURGER
     ------------------------------ */
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu-links a");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (event) {
      const clickedInsideMenu = mobileMenu.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        mobileMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------
     POPUP INFORMARE FOTOGRAFII
     ------------------------------ */
     const consentModal = document.getElementById("photo-consent-modal");
     const closeConsentBtn = document.getElementById("close-consent-modal");
     const acceptConsentBtn = document.getElementById("accept-consent-modal");
   
     function openConsentModal() {
       if (!consentModal) return;
       consentModal.classList.add("active");
       consentModal.setAttribute("aria-hidden", "false");
       document.body.style.overflow = "hidden";
     }
   
     function closeConsentModal() {
       if (!consentModal) return;
       consentModal.classList.remove("active");
       consentModal.setAttribute("aria-hidden", "true");
       localStorage.setItem("annelor_photo_consent_seen", "true");
       document.body.style.overflow = "";
     }
   
     if (consentModal) {
       const alreadySeen = localStorage.getItem("annelor_photo_consent_seen");
   
       if (!alreadySeen) {
         openConsentModal();
       }
   
       if (closeConsentBtn) {
         closeConsentBtn.addEventListener("click", closeConsentModal);
       }
   
       if (acceptConsentBtn) {
         acceptConsentBtn.addEventListener("click", closeConsentModal);
       }
   
       consentModal.addEventListener("click", function (event) {
         if (event.target === consentModal) {
           closeConsentModal();
         }
       });
   
       document.addEventListener("keydown", function (event) {
         if (event.key === "Escape" && consentModal.classList.contains("active")) {
           closeConsentModal();
         }
       });
     }
});