const menu = document.querySelector('.menu');
const buttonSection = document.querySelector('.button-section');

menu.addEventListener('click', ()=>{
    buttonSection.classList.toggle('show');
});
