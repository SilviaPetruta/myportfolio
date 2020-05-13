const btnMenu = document.getElementById('menuBtn');
const menuBtnIcon = document.getElementById('menuBtn__icon');
const flexNav = document.getElementById('flex-nav');
const menuItems = document.getElementsByClassName('flex-nav__item');
const mainSection = document.getElementsByClassName('main__section');
let currentMainSectionHeight = window.innerHeight; 
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

document.addEventListener('DOMContentLoaded',function(event){
    const textMe = 'Silvia Petruta';

    typeWriter = (text, index, fncCallBack) => {
        if (index < text.length) {            
            document.getElementById("typewriter").innerHTML = text.substring(0, index + 1);

            setTimeout(function() {
                typeWriter(text, index + 1, fncCallBack)}, 100);
        } else if (typeof fncCallBack == 'function') {    
            setTimeout(fncCallBack, 1000);
        }
    }

    headingLoaded = () => {
        document.getElementById('heading').setAttribute('class', 'loaded');
        document.getElementsByClassName('smooth')[0].classList.add('loaded');
    }

    typeWriter(textMe, 0, headingLoaded);

    btnMenu.addEventListener('click', () => {
        toggleMenuBtn();
        toggleMenu();
    });

    for ( let  i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', () => {
            toggleMenuBtn();
            toggleMenu();
        });
    }

    toggleMenuBtn = () => {
        let newClassName;

        if (menuBtnIcon.className.includes('fa-bars')) {
            newClassName = menuBtnIcon.className.replace("fa-bars", "fa-times");
        } else {
            newClassName = menuBtnIcon.className.replace("fa-times", "fa-bars");
        }

        menuBtnIcon.setAttribute('class', newClassName);
    }

    toggleMenu = () => {
        if (flexNav.style.display == 'flex') {
            flexNav.style.display = 'none';
        } else {
            flexNav.style.display = 'flex';
        }
    }

});



