// !!! СЛАЙДЕР

// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');
// const slides = Array.from(slider.querySelectorAll('img'));
// const slideCount = slides.length;
// let slideIndex = 0

// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);

// function showPreviousSlide() {
//     slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//     updateSlider();
// }

// function showNextSlide() {
//     slideIndex = (slideIndex + 1) % slideCount;
//     updateSlider();
// }

// function updateSlider() {
//     slides.forEach((slide, index) => {
//         if (index === slideIndex) {
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }
//     });
// }

// updateSlider();

// !!! АККОРДИОН

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;

//         if (panel.style.maxHeight){
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }

// !!! БУРГЕР
// let burger = document.querySelector('.menu-burger__header'),
//     menu = document.querySelector('.menu');

// burger.addEventListener('click', function(e) {
//     menu.classList.toggle('active');
// });

// <!-- !!! ДИНО -->

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event){
    jump();
})

function jump(){
    if (dino.classList != 'jump'){
        dino.classList.add('jump');
    }
    setTimeout(function() {
        dino.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150){
        alert('ПОТРАЧЕНО')
        console.log('over')
    }
}, 10)