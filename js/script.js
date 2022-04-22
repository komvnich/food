const overlay = document.getElementById('header__overlay');
const closeMenu = document.getElementById('close-menu');


document.getElementById('open-menu') .addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

closeMenu.addEventListener('click', function(){
    overlay.classList.remove('show-menu')
})
