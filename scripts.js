$(document).ready(function() {


    //Investigate a better navbar scrolling function
    //$(window).scroll(function(){
    //    if($(window).scrollTop() > $(window).height()){
    //        $(".menu").css({"background-color":"transparent"});   
    //    }
    //})


    //Contact Me Button//
    $("#button1").click(function() {
        document.getElementById("button1").innerHTML = ("Thank you for contacting me.");
        console.log("Contact me button was clicked. Check your email.");
    });

    //CV Download Button//
    $("#button2").click(function() {
        document.getElementById("button2").innerHTML = ("");
        console.log("CV pdf was downloaded.");
    });



    //Owl Carousel//
    $("#owl-example").owlCarousel();


    //Wow//
    //new WOW().init();


    /*Simple Text Rotator
    !function($){
  
  var defaults = {
        animation: "dissolve",
        separator: ",",
        speed: 2000
    };
    
    $.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
    
  $.fn.textrotator = function(options){
    var settings = $.extend({}, defaults, options);
    
    return this.each(function(){
      var el = $(this)
      var array = [];
      $.each(el.text().split(settings.separator), function(key, value) { 
        array.push(value); 
      });
      el.text(array[0]);

    */

    /*  countTo
    (function ($) {
    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from:            $(this).data('from'),
                to:              $(this).data('to'),
                speed:           $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals:        $(this).data('decimals')
            }, options);
    */



    //Skillbar//
    jQuery(document).ready(function() {
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({
                width: jQuery(this).attr('data-percent')
            }, 6000);
        });
    });

    //Simple Text Rotator//


});
