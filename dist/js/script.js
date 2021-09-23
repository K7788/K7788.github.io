


const swiperIMG = new Swiper('.slider-img', {

    loop: false,
    speed:2400,
    // parallax: true,
   
    autoplay: {
        delay: 2000,
      },

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
   
  });



  const Swiper_service = new Swiper ('.services__background',{

  loop:false,
    speed:2000,
    autoplay: {
      delay: 2000,
    },

  })



  const swiperText = new Swiper ('.slider-text', {
    loop: false,
    speed:2400,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        prevEl:'.prev_one',
        nextEl: '.prev_two'
    }





  // mousewheel: {
    //     invert: false,
    // }
   

    

  })


  

  swiperIMG.controller.control = swiperText
  swiperText.controller.control = swiperIMG








// $(document).ready(function() {
//     $('.header__burger').click(function(event){
//         $('.header__burger,.header__menu, .shadow').toggleClass('active');
//         
//     });
// });



let hamburger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menu1 = document.querySelector('.shadow');

const toggleMenu = () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
  menu1.classList.toggle('active');
  
}

hamburger.addEventListener('click', e => {
 
  e.stopPropagation();

  toggleMenu();
  
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('active');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
})



$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

document.onclick = function() {
  document.getElementsByClassName('.header__burger').style.display = 'none'
}










const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if(popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName  = popupLink.getAttribute('href').replace('#','');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();

    });
  }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
  for (let index=0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];     
    el.addEventListener('click', function(e) {
    popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}


function popupOpen(curentPopup) {

  if(curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if(popupActive) {
      popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
        if(!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }   
  }



function popupClose (popupActive, doUnlock = true) {

  if(unlock) {
    popupActive.classList.remove('open');
    if(doUnlock) {
      bodyUnLock();
    }
  }
}


function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  for(let index = 0 ; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRight = lockPaddingValue;
  }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');


    unlock = false;
    setTimeout(function() {
      unlock = true;  
      }, timeout);
    }



function bodyUnlock() {
  setTimeout(function() {
    if(lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
  }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function() {
      unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function(e) {
    if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
});
















const swiperIMGG = new Swiper('.services__background', {

  loop: false,
  speed:2400,
  parallax: true,
 
  // autoplay: {
  //     delay: 2000,
  //   },


  navigation: {
    prevEl:'.next_one',
    nextEl: '.next_two'
}
  
 
});



