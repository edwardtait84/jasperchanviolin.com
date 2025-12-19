const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(button.dataset.tab).classList.add('active');
  });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('main-nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');

});
