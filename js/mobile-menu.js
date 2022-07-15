(() => {
  const refs = {
    openModalBtn: document.querySelector(".mobile-menu__open"),
    closeModalBtn: document.querySelector(".mobile-menu__close"),
    modal: document.querySelector(".mobile-menu"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
