const showOption = document.querySelector('#hiddenItemOptionContainer');

showOption.addEventListener('click', function(){
    this.classList.toggle('d-none');
    console.log(this);
});
