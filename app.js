const btnMenu = document.getElementById('menuBtn');
const menuBtnIcon = document.getElementById('menuBtn__icon');
const flexNav = document.getElementById('flex-nav');
const menuItems = document.getElementsByClassName('flex-nav__item');
const mainSection = document.getElementsByClassName('main__section');
const smoothDiv = document.getElementById('smoothDiv');
const homeAnchor = document.getElementById('homeAnchor');
const iconsDiv = document.getElementById('iconsDiv');
const menuWrap = document.getElementById('menuWrap');

let currentMainSectionHeight = window.innerHeight; 
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

document.addEventListener('DOMContentLoaded', (event) => {
    const textMe = 'Silvia Petruta';
    typeWriter(textMe, 0, headingLoaded);
});

typeWriter = (text, index, fncCallBack) => {
    if (index < text.length) {            
        document.getElementById("typewriter").innerHTML = text.substring(0, index + 1);

        setTimeout(() => {
            typeWriter(text, index + 1, fncCallBack)}, 100);
    } else if (typeof fncCallBack == 'function') {    
        setTimeout(fncCallBack, 1000);
    }
}

headingLoaded = () => {
    document.getElementById('heading').setAttribute('class', 'loaded');
    document.getElementsByClassName('smooth')[0].classList.add('loaded');
}

document.addEventListener('click', (event) => {
    if (event.target.id == 'menuBtn__icon'
        || event.target.classList.contains('flex-nav__a')) {
        toggleMenu();
    } 
});

toggleMenu = () => {
    toggleMenuBtn();
    toggleMenuNav();
    toggleScroll();
    toggleHeader();
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

toggleMenuNav = () => {
    if (flexNav.style.display == 'flex') {
        flexNav.style.display = 'none';
    } else {
        flexNav.style.display = 'flex';
    }
};

toggleScroll = () => {
    if (smoothDiv.style.overflowY == 'hidden') {
        smoothDiv.style.overflowY = 'scroll';
    } else {
        smoothDiv.style.overflowY = 'hidden';
    }
};

toggleHeader = () => {
    if (homeAnchor.style.display == 'none') {
        homeAnchor.style.display = 'inline-block';
    } else {
        homeAnchor.style.display = 'none';
    }

    if (iconsDiv.style.display == 'none') {
        iconsDiv.style.display = 'block';
    } else {
        iconsDiv.style.display = 'none';
    } 
    
    if (menuWrap.style.marginRight == 22 + 'px') {
        menuWrap.style.marginRight = 40 + 'px';
    } else {
        menuWrap.style.marginRight = 22 + 'px';
    }
};
