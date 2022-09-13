
// === REVEAL ANIMATIONS ==== //

ScrollReveal({
  reset:false,
  distance:'60px',
  duration:1500,
  delay:100
});
ScrollReveal().reveal('.section__title',{delay:0,origin:'top'});
ScrollReveal().reveal('.right-content, .col-md-4',{delay:200,origin:'bottom'});                                                              
ScrollReveal().reveal('.contact-left',{delay:100,origin:'left'});

// === CONTACT FORM DATA PROCESS ==== //

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHwFCCg9y1Qv1nh7j4kvtVsOgtYlkKLe9pBnRPXJlC-OOJ_UMGTWOhBLJSuwNPWDoY/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");
  form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message sent succesfully"
          setTimeout(function(){
                  msg.innerHTML= "" 
              },5000)
              form.reset() })
      .catch(error => console.error('Error!', error.message))
  })


// === SWIPER PORTFOLIO ==== //
let swiper = new Swiper ( '.portfolio__container' , {
    cssMode : true ,
    navigation : {
      nextEl : '.swiper-button-next',
      prevEl : '.swiper-button-prev',
   } ,
    pagination : {
      el : ' .swiper-pagination ',
      clickable : true,
    },
  });


// === DARK THEME ADJUSTMENTS && COLORS==== //
var nav = document.querySelector('nav');
var a = document.getElementsByClassName('nav-link');
var el = document.getElementsByClassName('navbar-toggler');
var logo = document.getElementsByClassName('logo');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-dark', 'shadow');
        el[0].classList.add('text-white');
        let i = 0;
        while(i < a.length){
        a[i].classList.remove('text-black');
        a[i].classList.add('text-white');
        i++;
        }
        logo[0].classList.add('w-logo');
    } else {
        let i = 0;
        el[0].classList.remove('text-white');
        while(i < a.length){
        nav.classList.remove('bg-dark', 'shadow');
        a[i].classList.remove('text-white');
        a[i].classList.add('text-black');
        i++;
        }
        logo[0].classList.remove('w-logo');
    }
});