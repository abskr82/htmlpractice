/*

My Custom JS
============

Author:  Abhishek Kumar
Updated: February 2016
Notes:	 Hand coded for stackroute Assignment on bootstrap
*/
/* affix the navbar after scroll below header */

$('#affix_nav').affix({
      offset: {
        top: $('#main_header').height()
      }
});

/* highlight the tabs of  navbar as scrolling occurs */
$('body').scrollspy({ target: 'nav' })

// scroll up to the home
$('#go-to-top').click(function () {
    $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: 0
    }, 1000); // scroll takes 1 second
});


// scroll down to the corousel div
$("#go-to-crsl").click(function() {
    $('html, body').animate({
        scrollTop: $("#carouselDiv").offset().top-128
    }, 500);
});

// fade effect for scroll-down caret gliph

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.scroll-down').fadeOut();
        $('nav').removeClass('navbar-default');
        $('nav').addClass('navbar-inverse');
        $('.navbar-brand').removeClass('hide_brand')
     }
    else
     {
      $('.scroll-down').fadeIn();
      $('nav').removeClass('navbar-inverse');
      $('nav').addClass('navbar-default');
      $('.navbar-brand').addClass('hide_brand')

     }
 });

//function for tooltip and popover
 $(document).ready(function(){
     $('a.pop').click(function(e){
         e.preventDefault();
     });
     $('[data-toggle="tooltip"]').tooltip();
     $('[data-toggle="popover"]').popover();
     //below code starts auto carousel movement
     $('#myCarousel').carousel({
       interval: 3000,
       cycle: true
     });

 })
