(function ($) {
    ("use strict");
    /*Header Account, Cart Dropdown*/
    $(document).on("click", function (event) {
        var $trigger = $(".box-dropdown-cart");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".dropdown-account").removeClass("dropdown-open");
            $(".dropdown-cart").removeClass("dropdown-open");
        }
    });

    $(".icon-account").on("click", function () {
        $(".dropdown-account").toggleClass("dropdown-open");
    });

    $(".icon-cart").on("click", function () {
        $(".dropdown-cart").toggleClass("dropdown-open");
    });

    /*-----Modal----*/
     $(".btn-quickview").on("click", function () {
         $(".modal").on("shown.bs.modal", function (e) {
             $(".product-image-slider-2").slick("setPosition");
             $(".slider-nav-thumbnails-2").slick("setPosition");
             if ($(window).width() > 768) {
                 $(".product-image-slider-2 .slick-active img").elevateZoom({
                     zoomType: "inner",
                     cursor: "crosshair",
                     zoomWindowFadeIn: 500,
                     zoomWindowFadeOut: 750
                 });
             }
         });
     });

    /*Fix Bootstrap 5 tab & slick slider*/
    $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        $(".carausel-4-columns").slick("setPosition");
    });

    $(".image-left ul li").on("click", function () {
        var _img = $(this).find("img").attr("src");
        var _img_main = $(".image-main img");
        _img_main.attr("src", _img);
        $(".image-left ul li").removeClass("active");
        $(this).addClass("active");
    });
    $(".minus-cart").on("click", function () {
        var _parent = $(this).parents(".input-quantity");
        var _currentInput = _parent.find("input");
        var _number = parseInt(_currentInput.val());
        if (_number > 1) {
            _number = _number - 1;
        }
        _currentInput.val(_number);
    });
    $(".plus-cart").on("click", function () {
        var _parent = $(this).parents(".input-quantity");
        var _currentInput = _parent.find("input");
        var _number = parseInt(_currentInput.val());
        if (_number >= 0) {
            _number = _number + 1;
        }
        _currentInput.val(_number);
    });

    $("ul.list-colors li").on("click", function () {
        if (!$(this).hasClass("disabled")) {
            var _title = $(this).find("img").attr("title");
            var _parent = $(this).parents(".box-product-color");
            _parent.find(".nameColor").text(_title);
            _parent.find("ul.list-colors li").removeClass("active");
            $(this).addClass("active");
        }
    });
    $("ul.list-styles li").on("click", function () {
        if (!$(this).hasClass("disabled")) {
            var _title = $(this).attr("title");
            var _parent = $(this).parents(".box-product-style-size");
            _parent.find(".nameStyle").text(_title);
            _parent.find("ul.list-styles li").removeClass("active");
            $(this).addClass("active");
        }
    });
    $("ul.list-sizes li").on("click", function () {
        if (!$(this).hasClass("disabled")) {
            var _title = $(this).attr("title");
            var _parent = $(this).parents(".box-product-style-size");

            _parent.find(".nameSize").text(_title);
            _parent.find("ul.list-sizes li").removeClass("active");
            $(this).addClass("active");
        }
    });
    // SLick
    $(".product-image-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: ".slider-nav-thumbnails"
    });

    $(".slider-nav-thumbnails").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: ".product-image-slider",
        dots: false,
        focusOnSelect: true,
        vertical: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fi-rs-arrow-small-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fi-rs-arrow-small-right"></i></button>'
    });

    // Remove active class from all thumbnail slides
    $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");

    // Set active class to first thumbnail slides
    $(".slider-nav-thumbnails .slick-slide").eq(0).addClass("slick-active");

    // On before slide change match active thumbnail to current slide
    $(".product-image-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $(".slider-nav-thumbnails .slick-slide").removeClass("slick-active");
        $(".slider-nav-thumbnails .slick-slide").eq(mySlideNumber).addClass("slick-active");
    });

    $(".product-image-slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        var img = $(slick.$slides[nextSlide]).find("img");
        $(".zoomWindowContainer,.zoomContainer").remove();
        $(img).elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    });
    //Elevate Zoom
    if ($(".product-image-slider").length) {
        $(".product-image-slider .slick-active img").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    }
    var productDetails = function () {
        $slick_slider_1.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: ".slider-nav-thumbnails-2"
        });
        $slick_slider_2.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: ".product-image-slider-2",
            dots: false,
            focusOnSelect: true,
            vertical: false,
            adaptiveHeight: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="fi-rs-arrow-small-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fi-rs-arrow-small-right"></i></button>'
        });

        // Remove active class from all thumbnail slides
        $(".slider-nav-thumbnails-2 .slick-slide").removeClass("slick-active");

        // Set active class to first thumbnail slides
        $(".slider-nav-thumbnails-2 .slick-slide").eq(0).addClass("slick-active");

        // On before slide change match active thumbnail to current slide
        $(".product-image-slider-2").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            var mySlideNumber = nextSlide;
            $(".slider-nav-thumbnails-2 .slick-slide").removeClass("slick-active");
            $(".slider-nav-thumbnails-2 .slick-slide").eq(mySlideNumber).addClass("slick-active");
        });

        $(".product-image-slider-2").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            var img = $(slick.$slides[nextSlide]).find("img");
            $(".zoomWindowContainer,.zoomContainer").remove();
            $(img).elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            });
        });
        //Elevate Zoom
        if ($(".product-image-slider-2").length) {
            $(".product-image-slider-2 .slick-active img").elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            });
        }
    };
    // Slide 2
    $(document).on("show.bs.modal", "#ModalQuickview", function () {
        if ($slick_slider_1.hasClass("slick-initialized")) $slick_slider_1.slick("unslick");
        if ($slick_slider_2.hasClass("slick-initialized")) $slick_slider_2.slick("unslick");
        setTimeout(function () {
            productDetails();
        }, 10);
    });
    $(document).on("hide.bs.modal", "#ModalQuickview", function () {
        setTimeout(function () {
            $(".zoomWindowContainer,.zoomContainer").remove();
        }, 10);
    });

    $(".btn-expand-more").on("click", function () {
        var _div_short = $(".display-text-short");
        var _btn_short = $(".btn-expand-more");
        if (_div_short.height() == 125) {
            _div_short.css("height", "auto");
            _btn_short.html("Less");
        } else {
            _div_short.css("height", "");
            _btn_short.html("More Details");
        }
    });

    // click color
    $(".list-color li a").on("click", function (e) {
        e.preventDefault();
        $(".list-color li a").removeClass("active");
        $(this).addClass("active");
    });
})(jQuery);
$slick_slider_1 = $(".product-image-slider-2");
$slick_slider_2 = $(".slider-nav-thumbnails-2");
function initSlickQuickview() {
    $slick_slider_1.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: ".slider-nav-thumbnails-2"
    });
    $slick_slider_2.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".product-image-slider-2",
        dots: false,
        focusOnSelect: true,
        vertical: false,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fi-rs-arrow-small-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fi-rs-arrow-small-right"></i></button>'
    });

    // Remove active class from all thumbnail slides
    $(".slider-nav-thumbnails-2 .slick-slide").removeClass("slick-active");

    // Set active class to first thumbnail slides
    $(".slider-nav-thumbnails-2 .slick-slide").eq(0).addClass("slick-active");

    // On before slide change match active thumbnail to current slide
    $(".product-image-slider-2").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $(".slider-nav-thumbnails-2 .slick-slide").removeClass("slick-active");
        $(".slider-nav-thumbnails-2 .slick-slide").eq(mySlideNumber).addClass("slick-active");
    });

    $(".product-image-slider-2").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        var img = $(slick.$slides[nextSlide]).find("img");
        $(".zoomWindowContainer,.zoomContainer").remove();
        $(img).elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    });
    //Elevate Zoom
    if ($(".product-image-slider-2").length) {
        $(".product-image-slider-2 .slick-active img").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    }
}