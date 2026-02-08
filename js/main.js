(() => {
  const refs = {

    openModalBtn: document.querySelector('.hero-btn'),

    closeModalBtn: document.querySelector('.popup-close'),

    modal: document.querySelector('.popup-wrapper'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {

    refs.modal.classList.toggle('hidden-popup');

    document.body.classList.toggle('no-scroll');
  }
})();