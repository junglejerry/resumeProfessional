/**
 *  Background Slider - A minimalistic fullscreen slideshow plugin for jQuery.
 *  Author  : Byron Adams <byron.adams54@gmail.com>
 *  License : MIT License
 *  Github  : https://github.com/badams/jquery-background-slider
 */

(function (window, $) {

    var defaults = {
            interval: 3000,
            transition: 3000,
            images: [],
            first: 0,
            ready: $.noop
    };

    $.fn.bgSlider = function(options) {
        this.data('slider') = new Slider(this, $.extend(defaults, options));
        return this;
    };

    var Slider = function (el, options) {
        this.options = options;
        this.el = el;
        this.images = [];
        this.active = this.options.first;
        this.prev = null;
        this.loadImages();
        return this;
    };

    Slider.prototype = {

        init: function () {
            
            for (var i = 0; i < this.options.images.length; i++) {
                var div = '<div class="slide slide-' + i + '" data-slide="' + i + '"></div>';
                this.el.append(div);
            }

            this.generateCSS();
            this.options.ready();
            this.nextSlide();
        },

        loadImages: function () {
            var self = this;
            $.each(this.options.images, function () {
                var img = new Image();
                img.src = this;
                img.onload = function () {
                    self.images.push(this);
                    if (self.images.length === self.options.images.length) {
                        self.init();
                    }
                }
            });
        },

        nextSlide: function () {
            var prev_slide = this.el.find('[data-slide=' + this.prev + ']'),
                curr_slide = this.el.find('[data-slide=' + this.active + ']'),
                self = this;

            if (prev_slide[0]) {
                prev_slide.animate({ 'opacity': 0 }, this.options.transition, 'linear');
                curr_slide.animate({ 'opacity': 1 }, this.options.transition, 'linear', function () {
                    self.timer.call(self);
                });
            } else {
                curr_slide.css('opacity', 1);
                this.timer();
            }
        },

        timer: function () {
            var self = this;
            this.timer_id = setTimeout(function () {
                self.prev = self.active;
                self.active = ((self.images.length - 1) == self.active) ? 0 : self.active + 1;
                self.nextSlide.call(self);
            }, this.options.interval);
        },

        generateCSS : function () {
            var css = '';
            for (var i = 0; i < this.options.images.length; i++) {
                var img = this.options.images[i];
                if ($.browser.msie) {
                    css += '.slide-' + i + '{filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + img + '\',sizingMethod=\'scale\');';
                    css += '-ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + img + '\',sizingMethod=\'scale\')";}';
                } else {
                    css += '.slide-' + i + ' { background-image: url(' + this.options.images[i] + ');}';
                }
            }

            $('html > head').append('<style>' + css + '</style>');           

        },
    };

})(window, jQuery)