(function($) {
    ("use strict");
    // Page loading
    $(window).on("load", function () {
        $("#preloader-active").fadeOut("slow");
    });
    /*-----------------
        Menu Stick
    -----------------*/
    var header = $(".sticky-bar");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass("stick");
            $(".header-style-2 .categories-dropdown-active-large").removeClass("open");
            $(".header-style-2 .categories-button-active").removeClass("open");
        } else {
            header.addClass("stick");
        }
    });

    /*-----------------
        Sidebar Sticky
    -----------------*/
    var sidebar = $(".sidebar-left");
    var win = $(window);
    win.on("scroll", function () {
        var scroll = win.scrollTop();
        if (scroll < 760) {
            sidebar.removeClass("stick");
        } else {
            sidebar.addClass("stick");
        }
    });
    /*------ ScrollUp -------- */
    $.scrollUp({
        scrollText: '<i class="fi-rr-arrow-small-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
    });
    /*------ Wow Active ----*/
    new WOW().init();
    //sidebar sticky
    if ($(".sticky-sidebar").length) {
        $(".sticky-sidebar").theiaStickySidebar();
    }
    /*----------------------------
        Category toggle function
    ------------------------------*/
    if ($(".categories-button-active").length) {
        var searchToggle = $(".categories-button-active");
        searchToggle.on("click", function (e) {
            e.preventDefault();
            if ($(this).hasClass("open")) {
                $(this).removeClass("open");
                $(this).siblings(".categories-dropdown-active-large").removeClass("open");
            } else {
                $(this).addClass("open");
                $(this).siblings(".categories-dropdown-active-large").addClass("open");
            }
        });
    }
    /*---------------------
        Select active
    --------------------- */
    if ($(".select-active").length) {
        $(".select-active").select2();
    }
    /*---- CounterUp ----*/
    if ($(".count").length) {
        $(".count").counterUp({
            delay: 10,
            time: 600
        });
    }
    // Isotope active
    if ($(".grid").length) {
        $(".grid").imagesLoaded(function () {
            // init Isotope
            var $grid = $(".grid").isotope({
                itemSelector: ".grid-item",
                percentPosition: true,
                layoutMode: "masonry",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: ".grid-item"
                }
            });
        });
    }
    /*====== SidebarSearch ======*/
    function sidebarSearch() {
        var searchTrigger = $(".search-active"),
            endTriggersearch = $(".search-close"),
            container = $(".main-search-active");
        searchTrigger.on("click", function (e) {
            e.preventDefault();
            container.addClass("search-visible");
        });
        endTriggersearch.on("click", function () {
            container.removeClass("search-visible");
        });
    }
    sidebarSearch();
    /*====== Sidebar menu Active ======*/
    function mobileHeaderActive() {
        var navbarTrigger = $(".burger-icon"),
            endTrigger = $(".mobile-menu-close"),
            container = $(".mobile-header-active"),
            wrapper4 = $("body");
        wrapper4.prepend('<div class="body-overlay-1"></div>');
        navbarTrigger.on("click", function (e) {
            navbarTrigger.toggleClass("burger-close");
            e.preventDefault();
            container.toggleClass("sidebar-visible");
            wrapper4.toggleClass("mobile-menu-active");
            window.scrollTo(0, 0);
        });
        endTrigger.on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
        });
        $(".body-overlay-1").on("click", function () {
            container.removeClass("sidebar-visible");
            wrapper4.removeClass("mobile-menu-active");
            navbarTrigger.removeClass("burger-close");
        });
    }
    mobileHeaderActive();
    /*---------------------
        Mobile menu active
    ------------------------ */
    var $offCanvasNav = $(".mobile-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fi-rr-caret-down"></i></span>');
    /*Close Off Canvas Sub Menu*/
    $offCanvasNavSubMenu.slideUp();
    /*Category Sub Menu Toggle*/
    $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
        var $this = $(this);
        if (
            $this
                .parent()
                .attr("class")
                .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
            ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
        ) {
            e.preventDefault();
            if ($this.siblings("ul:visible").length) {
                $this.parent("li").removeClass("active");
                $this.siblings("ul").slideUp();
            } else {
                $this.parent("li").addClass("active");
                $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                $this.closest("li").siblings("li").find("ul:visible").slideUp();
                $this.siblings("ul").slideDown();
            }
        }
    });
    /*--- language currency active ----*/
    $(".mobile-language-active").on("click", function (e) {
        e.preventDefault();
        $(".lang-dropdown-active").slideToggle(900);
    });
    /*--- categories-button-active-2 ----*/
    $(".categories-button-active-2").on("click", function (e) {
        e.preventDefault();
        $(".categori-dropdown-active-small").slideToggle(900);
    });
    /*--- Mobile demo active ----*/
    var demo = $(".tm-demo-options-wrapper");
    $(".view-demo-btn-active").on("click", function (e) {
        e.preventDefault();
        demo.toggleClass("demo-open");
    });
    /*-----More Menu Open----*/
    $(".more_slide_open").slideUp();
    $(".more_categories").on("click", function () {
        $(this).toggleClass("show");
        $(".more_slide_open").slideToggle();
    });
    /* --- SwiperJS --- */
    $(".swiper-group-15").each(function () {
        var swiper_10_items = new Swiper(this, {
            spaceBetween: 10,
            slidesPerView: 15,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-15",
                prevEl: ".swiper-button-prev-group-15"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 15
                },
                1199: {
                    slidesPerView: 11
                },
                800: {
                    slidesPerView: 8
                },
                390: {
                    slidesPerView: 5
                },
                250: {
                    slidesPerView: 4,
                    slidesPerGroup: 1
                }
            }
        });
    });
    $(".swiper-group-10").each(function () {
        var swiper_10_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 10,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-10",
                prevEl: ".swiper-button-prev-group-10"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 10
                },
                1199: {
                    slidesPerView: 7
                },
                800: {
                    slidesPerView: 5
                },
                390: {
                    slidesPerView: 4
                },
                250: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".swiper-group-9").each(function () {
        var swiper_10_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 9,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-9",
                prevEl: ".swiper-button-prev-group-9"
            },
            autoplay: {
                delay: 10000
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                1360: {
                    slidesPerView: 9
                },
                1199: {
                    slidesPerView: 6
                },
                768: {
                    slidesPerView: 5
                },
                575: {
                    slidesPerView: 3
                },
                390: {
                    slidesPerView: 2
                },
                250: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".js-swiper-9 .swiper-slide").each(function(){
        var _this = $(this);
        var width_height = _this.width();
        _this.find(".inner-image").css("width", width_height);
        _this.find(".inner-image").css("height", width_height);
        _this.find(".inner-image").css("line-height", width_height+'px');
    });
    $(".swiper-group-7").each(function () {
        var swiper_7_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 7,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1360: {
                    slidesPerView: 7
                },
                1199: {
                    slidesPerView: 6
                },
                800: {
                    slidesPerView: 5
                },
                390: {
                    slidesPerView: 4
                },
                250: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".swiper-group-6").each(function () {
        var swiper_6_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 6,
            slidesPerGroup: 2,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 6
                },
                800: {
                    slidesPerView: 4
                },
                400: {
                    slidesPerView: 2
                },
                350: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 15
                }
            }
        });
    });
    $(".swiper-group-5").each(function () {
        var swiper_4_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 5,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-6",
                prevEl: ".swiper-button-prev-group-6"
            },

            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1299: {
                    slidesPerView: 5
                },
                1150: {
                    slidesPerView: 4
                },
                750: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 2
                },
                550: {
                    slidesPerView: 2
                },
                375: {
                    slidesPerView: 1
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-4").each(function () {
        var swiper_4_items = new Swiper(this, {
            spaceBetween: 20,
            slidesPerView: 4,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-4",
                prevEl: ".swiper-button-prev-group-4"
            },

            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1299: {
                    slidesPerView: 4
                },
                1150: {
                    slidesPerView: 4
                },
                750: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                550: {
                    slidesPerView: 1
                },
                300: {
                    slidesPerView: 1
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-3").each(function () {
        var swiper_3_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-3",
                prevEl: ".swiper-button-prev-group-3"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 2
                },
                600: {
                    slidesPerView: 1
                },
                350: {
                    slidesPerView: 1
                },
                310: {
                    slidesPerView: 1
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });
    $(".swiper-group-2-style-2").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-ecom",
                prevEl: ".swiper-button-prev-ecom"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2
                },
                900: {
                    slidesPerView: 2
                },
                800: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                250: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-2").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 30,
            slidesPerView: 2,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2
                },
                800: {
                    slidesPerView: 1
                },
                600: {
                    slidesPerView: 1
                },
                400: {
                    slidesPerView: 1
                },
                350: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-best-seller").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-bestseller",
                prevEl: ".swiper-button-prev-bestseller"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });

    $(".swiper-featured").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-featured",
                prevEl: ".swiper-button-prev-featured"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });

    $(".swiper-mostviewed").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-mostviewed",
                prevEl: ".swiper-button-prev-mostviewed"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });

    $(".swiper-trending").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-trending",
                prevEl: ".swiper-button-prev-trending"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });
    $(".swiper-banner-1").each(function () {
        var swiper_2_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-style-4",
                prevEl: ".swiper-button-prev-style-4"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });
    $(".swiper-group-1").each(function () {
        var swiper_1_items = new Swiper(this, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-1",
                prevEl: ".swiper-button-prev-group-1"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 10000
            }
        });
    });

    $(".swiper-group-2").each(function () {
        var swiper_2_items = new Swiper(this, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-1",
                prevEl: ".swiper-button-prev-group-1"
            },
            autoplay: {
                delay: 10000
            }
        });
    });

    $(".swiper-group-style-2").each(function () {
        var swiper_1_items = new Swiper(this, {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-group-2",
                prevEl: ".swiper-button-prev-group-2"
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            autoplay: {
                delay: 10000
            }
        });
    });
    $(".swiper-vertical-1").each(function () {
        var swiper_1_items = new Swiper(this, {
            direction: "vertical",
            slidesPerView: 1,
            mousewheel: true,
            loop: true,
            autoplay: {
                delay: 10000
            }
        });
    });

    // Swipper category
    $(".swiper-group-3-newarrival").each(function () {
        var newarrival = new Swiper(this, {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-newarrival",
                prevEl: ".swiper-button-prev-newarrival"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                310: {
                    slidesPerView: 2
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-bestselling").each(function () {
        var newarrival = new Swiper(this, {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-bestselling",
                prevEl: ".swiper-button-prev-bestselling"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                310: {
                    slidesPerView: 2
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-hotdeal").each(function () {
        var newarrival = new Swiper(this, {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-hotdeal",
                prevEl: ".swiper-button-prev-hotdeal"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                310: {
                    slidesPerView: 2
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-topranking").each(function () {
        var newarrival = new Swiper(this, {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-topranking",
                prevEl: ".swiper-button-prev-topranking"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                310: {
                    slidesPerView: 2
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-dropshipping").each(function () {
        var newarrival = new Swiper(this, {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-dropshipping",
                prevEl: ".swiper-button-prev-dropshipping"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                310: {
                    slidesPerView: 2
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });

    $(".swiper-group-3-upcoming").each(function () {
        var upcoming = new Swiper(this, {
            spaceBetween: 15,
            slidesPerView: 3,
            slidesPerGroup: 1,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next-upcoming",
                prevEl: ".swiper-button-prev-upcoming"
            },
            autoplay: {
                delay: 10000
            },
            breakpoints: {
                1199: {
                    slidesPerView: 3
                },
                800: {
                    slidesPerView: 3
                },
                600: {
                    slidesPerView: 3
                },
                350: {
                    slidesPerView: 2
                },
                310: {
                    slidesPerView: 2
                },
                200: {
                    slidesPerView: 1
                }
            }
        });
    });

    //Dropdown selected item
    $(".dropdown-menu > li a").on("click", function (e) {
        e.preventDefault();
        $(this)
            .parents(".dropdown")
            .find(".btn span")
            .html($(this).html() + "");
        $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
    });

    // Video popup
    if ($(".popup-youtube").length) {
        $(".popup-youtube").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    // Init function billed

    /*------ Timer Countdown ----*/
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $(this).html(event.strftime("" + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%D</span><span class="countdown-period lh-14 font-xs"> day </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%H</span><span class="countdown-period font-xs lh-14"> hour </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%M</span><span class="countdown-period font-xs lh-14"> min </span></span>' + '<span class="countdown-section"><span class="countdown-amount font-sm-bold lh-16">%S</span><span class="countdown-period font-xs lh-14"> sec </span></span>'));
        });
    });

    $(".btn-open").on("click", function (e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        var width = $(window).width();
        if (width > 992) {
            if ($(".menu-texts").hasClass("menu-close")) {
                $(".menu-texts").removeClass("menu-close");
            } else {
                $(".menu-texts").addClass("menu-close");
            }
        } else {
            $(".menu-texts").addClass("menu-close");
            $(this).addClass("open");
            if ($(".menu-texts").css("display") == "none") {
                $(".menu-texts").fadeIn();
            } else {
                $(".menu-texts").fadeOut();
            }
        }
    });

    //Mobile left sideba
    function mobileLeftSidebar() {
        var width = $(window).width();
        if (width < 992) {
            $(".menu-texts li.has-children > a").removeAttr("href");
            $(".menu-texts li.has-children > a").on("click", function (e) {
                $(this).parent().toggleClass("submenu-open");
                $(this).parent().siblings().removeClass("submenu-open");
            });
        }
    }
    mobileLeftSidebar();

    $(document).click(function (event) {
        var menu_text = $(".menu-texts");
        var btnOpen = $(".btn-open");
        if (!menu_text.is(event.target) && menu_text.has(event.target).length === 0 && !btnOpen.is(event.target) && btnOpen.has(event.target).length === 0) {
            menu_text.addClass("menu-close");
            menu_text.css("style", "");
        }
    });

    $(window).scroll(function(){
        if ($(".box-notify").length > 0) {
            var boxNotify = $(".box-notify");
            var height = boxNotify.outerHeight() - 3;
            $(".sidebar-left").css("top",height+"px");
        }
    }).scroll();
    // hide notify
    $(".btn-close").on("click", function(){
        $(".box-notify").hide(function(){
            $(".sidebar-left").css("top", "");
        });
    });

    // init var swiper
    var swiper_1 = null;
    // tab event show
    $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        if (swiper_1) {
            swiper_1.destroy();
        }
        var _tab = $(e.target).attr("href");
        var idx = $(e.target).data("index");
        var _button = _tab + "-nav";
        initSwiperTab(idx);
        initSwiperTopDeal(idx);
        var _parent = $(_button).parents(".box-button-slider");
        var _box_btn = _parent.find(".button-slider-nav");
        _box_btn.hide();
        $(_button).show();
    });

    // init swiper section Refrigerators & Freezers tab 1 - 4
    swiper_1 = initSwiperTab(1);

    // init swiper section Kitchen Appliances tab 5 - 8
    swiper_1 = initSwiperTab(5);

    // init swiper section Household Tool tab 9 - 12
    swiper_1 = initSwiperTab(9);

    // homepage4
    initSwiperTab(4);
    initSwiperTab(5);

    initSwiperTopDeal(1);
})(jQuery);
// Check billed

function initSwiperTab(idx) {
    if ($(".swiper-tab-" + idx + "").length == 0) {
        return;
    }
    return new Swiper('.swiper-tab-' + idx + '', {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-tab-" + idx,
            prevEl: ".swiper-button-prev-tab-" + idx
        },
        autoplay: {
            delay: 10000
        }
    });
}

function initSwiperTopDeal(idx) {
    if ($('.swiper-tab[data-index="' + idx + '"]').length == 0) {
        return;
    }
    return new Swiper('.swiper-tab[data-index="' + idx + '"]', {
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-tab-" + idx,
            prevEl: ".swiper-button-prev-tab-" + idx
        },
        autoplay: {
            delay: 10000
        }
    });
}

//Perfect Scrollbar
if ($(".mobile-header-wrapper-inner").length) {
    const ps = new PerfectScrollbar(".mobile-header-wrapper-inner");
}