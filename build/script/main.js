const burgerBtn = document.querySelector('.burger-menu__btn');
let menuOpen = false;
burgerBtn.addEventListener('click',()=>{
    if(!menuOpen){
        burgerBtn.classList.add('open');
        menuOpen = true;
    }else{
        burgerBtn.classList.remove('open');
        menuOpen = false;
    }
});
const mobMenu = document.querySelector('.mobMenu-conteiner');
let mobMenuOpen = false;
burgerBtn.addEventListener('click',()=>{
    if(!mobMenuOpen){
        mobMenu.classList.add('open');
        mobMenuOpen = true;
    }else{
        mobMenu.classList.remove('open');
        mobMenuOpen = false;
    }
});
const hypers = document.querySelector('.ul-mob-hypers');
hypers.addEventListener('click',()=>{
    if(mobMenuOpen){
        mobMenu.classList.remove('open');
        burgerBtn.classList.remove('open');
        mobMenuOpen = true;
    }else{
        mobMenu.classList.remove('open');
        burgerBtn.classList.remove('open');
        mobMenuOpen = false;
    }
});