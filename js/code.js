// burger
const burger = document.querySelector(".burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const panel = document.querySelector(".menu");
const player = document.querySelector(".player");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    panel.classList.toggle("show");
    player.classList.toggle("show");
})

const panel2 = document.querySelector(".menu, .player");
const player2 = document.querySelector(".player");

panel2.addEventListener("click",function () {
    panel2.classList.toggle("show");
    player2.classList.toggle("show");
})

const song = new Audio;
song.src = 'https://www.bensound.com/bensound-music/bensound-summer.mp3';

function playpause() {
    
    if (!song.paused) {
        song.pause();
    } else {
        song.play();
    }
}

$(document).on('scroll', function () {

    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop();
    const $aboutme = $('.aboutme');
    const aboutmeFromTop = $aboutme.offset().top
    const aboutmeHeight = $aboutme.outerHeight()
    
    const $aboutTitle = $('.aboutTitle');
    const aboutTitleFromTop = $aboutTitle.offset().top
    const aboutTitleHeight = $aboutTitle.outerHeight()

    const $heading = $('.heading');
    const headingFromTop = $heading.offset().top
    const headingHeight = $heading.outerHeight()
    
    const $all = $('.all');
    const allFromTop = $all.offset().top
    const allHeight = $all.outerHeight()


    if(scrollValue> aboutmeFromTop + aboutmeHeight - windowHeight) {
        $aboutme.addClass('active');
    }
        if(scrollValue> aboutTitleFromTop + aboutTitleHeight - windowHeight) {
            $aboutTitle.addClass('active');
    }

    if(scrollValue> headingFromTop + headingHeight - windowHeight) {
        $heading.addClass('active');
    }

    if(scrollValue> headingFromTop + headingHeight - windowHeight) {
        $all.addClass('active');
    }
        
    if(scrollValue < 100) {
        $('.aboutme').removeClass('active');
    }

    if(scrollValue < 100) {
        $('.aboutTitle').removeClass('active');
    }

    if(scrollValue < 100) {
        $('.heading').removeClass('active');
    }

    if(scrollValue < 100) {
        $('.all').removeClass('active');
    }

})

$('nav li').on('click',function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})

  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [10,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 3000,
  })

anime({
    targets: '.php, .git',
    translateX: [0,100,300],
    direction: 'alternate',
})

const spnText = document.querySelector('.text');
const txt = 'Zajmuję się kodowaniem wysokiej jakości stron internetowych w oparciu o technologie HTML, CSS, JavaScript. Strony są responsywne i działają na wszystkich urządzenia. Zajmuję się również administracją,  wdrążaniem stron WWW, bazą danych MYSQL oraz szybkim wprowadzaniem zmian i poprawek.'

// Paramerty
let indexText = 0;
const time = 1;

// Implementacja
const addLetter = () => {
 spnText.textContent += txt[indexText];
 indexText++;
 if (indexText === txt.length) clearInterval(indexTyping);
}
const indexTyping = setInterval(addLetter, time);


