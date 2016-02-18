/*

My Custom JS
============

Author:  Abhishek Kumar
Updated: February 2016
Notes:	 Hand coded for stackroute Assignment on bootstrap
*/
/* affix the navbar after scroll below header */

$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

// scroll up to the home
$('#go-to-top').click(function () {
    $(window.opera ? 'html' : 'html, body').animate({
        scrollTop: 0
    }, 1000); // scroll takes 1 second
});



$("#go-to-crsl").click(function() {
    $('html, body').animate({
        scrollTop: $("#carouselDiv").offset().top-130
    }, 500);
});

// fade effect for scroll-down button

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.scroll-down').fadeOut();
     }
    else
     {
      $('.scroll-down').fadeIn();
     }
 });
