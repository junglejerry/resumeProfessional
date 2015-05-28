$(document).ready(function() {


    //Contact Me Button//
    // $("#button1").click(function() {
    //     document.getElementById("button1").innerHTML = ("Thank you for contacting me.");
    //     console.log("Contact me button was clicked. Check your email.");
    // });


    //CV Download Button//
    $("#button2").click(function() {
        document.getElementById("button2").innerHTML = ("");
        console.log("CV pdf was downloaded.");
    });


    //countTo//
    $('.timer').countTo({
        speed: 12000 // How many milliseconds until the next statement shows.
    });


    //Smooth Scroll//
    smoothScroll.init();


    //Owl Carousel//
    $("#owl-example").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
        });


    //Wow//
    new WOW().init();


    //Simple Text Rotator//
    $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 4000 // How many milliseconds until the next statement shows.
    });


    //Skillbar//
    jQuery(document).ready(function() {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 9000);
        });
    });



});
