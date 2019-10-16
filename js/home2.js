new WOW().init();

const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 18, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      //if (distance < 0) {
      //  clearInterval(x);
      //  'IT'S MY BIRTHDAY!;
      //}

    }, second);

$(function () {   
    
  $('[data-toggle="popover"]').popover({
      html:true
      
  });

    $("#sliderCards").owlCarousel({ 
      loop:true,
      margin:10,
      stagePadding:5,
      responsiveClass:true,
      navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],  
      pullDrag:true,
      mouseDrag:true,
      responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:6,
            margin:5,
            pullDrag:false,
            mouseDrag:false,
            nav:false,
            loop:false
        }
      }
  });
    
        $("#SliderViajes").owlCarousel( {
      loop:true,
      margin:10,
      stagePadding:0,
      responsiveClass:true,
      navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],  
      pullDrag:true,
      mouseDrag:true,
            items:1,
            stagePadding:0

    });
       
    $('#SliderBene').owlCarousel({
        items:1,
        responsiveClass:true,
        responsive:{
        0:{
            
            nav:true,
            stagePadding:18
        },
        600:{            
            nav:true
        },
        1000:{           
            margin:5,
            pullDrag:false,
            mouseDrag:false,
            nav:false,
            loop:false
        }
        }
    });
 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 72 || document.documentElement.scrollTop > 72) {
   $('#navbar').addClass('fixed-top fijo');   
  } else {
   $('#navbar').removeClass('fixed-top fijo');
  }
}
    
    
    
});