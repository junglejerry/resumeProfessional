$(document).ready(function() {

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0],
            p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = p + '://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }(document, 'script', 'twitter-wjs'));


    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));




    $("#button1").click(function() {
        document.getElementById("button1 ").innerHTML = ("Thank you for contacting me.");
        console.log("Contact me button was clicked. Check your email.");
    });

    $("#button2").click(function() {
        document.getElementById("button2 ").innerHTML = ("");
        console.log("CV pdf was downloaded.");
    });


    $("#owl-example").owlCarousel();

    // jQuery(document).ready(function() {
    //     jQuery('.skillbar').each(function() {
    //         jQuery(this).find('.skillbar-bar').animate({
    //             width: jQuery(this).attr('data-percent')
    //         }, 6000);
    //     });
    // });

});
