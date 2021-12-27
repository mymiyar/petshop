const modal = document.querySelector('.modal-container'),
      btnForm = document.querySelector('.btn-form'),
      modalExit = document.querySelector('.modal-exit');


function modalToggle() { // not scroll in modal
  modal.classList.toggle('open');
  if (modal.classList.contains('open')) {
    disableScroll();
  } else {
    enableScroll();
  }
}

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('open')) {
    modalToggle();
  }
});

btnForm.addEventListener('click', modalToggle);
modalExit.addEventListener('click', modalToggle);