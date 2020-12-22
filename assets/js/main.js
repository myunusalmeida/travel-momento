// MENU SHOW HIDDEN
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

// REMOVE MENU ON MOBILE

function linkAction() {
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll section active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

// IMAGE GALLERY
// bromo
function changeBromo(image) {
    document.getElementById("gallery-bromo").src = image;
}

// bali
function changeBali(image) {
    document.getElementById("gallery-bali").src = image;
}

// central java
function changeCentralJava(image) {
    document.getElementById("gallery-central-java").src = image;
}

// paris
function changeParis(image) {
    document.getElementById("gallery-paris").src = image;
}

// turkey
function changeTurkey(image) {
    document.getElementById("gallery-turkey").src = image;
}

// greece
function changeGreece(image) {
    document.getElementById("gallery-greece").src = image;
}