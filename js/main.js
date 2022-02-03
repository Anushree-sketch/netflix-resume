const accitemhead = document.querySelectorAll('.acc-item-head');
accitemhead.forEach((accitemhead) => {
  accitemhead.addEventListener('click', (event) => {
    accitemhead.classList.toggle('active');
  });
});
