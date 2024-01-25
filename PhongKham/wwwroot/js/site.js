$(function () {
    /*Fancy box */

    $(".various").fancybox({
        maxWidth: 1200,
        maxHeight: 600,
        fitToView: false,
        width: "80%",
        height: "80%",
        autoSize: false,
        closeClick: false,
        openEffect: "none",
        closeEffect: "none",
        padding: 10,
    });

    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none",
    });

    /*Slick*/
    $(".mrs-slider").slick({
        dots: !0,
        dotsClass: "hero-pagination",
        infinite: !0,
        speed: 500,
        fade: !0,
        cssEase: "linear",
        autoplay: !0,
        autoplaySpeed: 1e4,
        adaptiveHeight: !0,
        pauseOnFocus: !0,
        pauseOnHover: !0,
        arrows: !0,
    });
    $(".slick-img-thumb").slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".slick-video").slick({
        dots: false,
        speed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".slick-dichvu").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    /*Video*/
    $("#video").on("change", function (event) {
        var id = $(this).val();
        $.ajax({
            url: "ajax/video.php",
            type: "POST",
            data: { id: id },
            success: function (res) {
                $(".video").html(res);
            },
        });
    });
    $(".tintucyte ul li").click(function (event) {
        if (!$(this).hasClass("active")) {
            $(".tintucyte ul li").removeClass("active");
            $(this).addClass("active");
            var id = $(this).data("id");
            $.ajax({
                url: "ajax/index.php",
                type: "POST",
                data: { id: id },
                success: function (res) {
                    $(".tintuc-rss").html(res);
                },
            });
        }
    });

    $('.hienthi').click(function (event) {
        var id = $(this).attr('data-id');
        var com = $(this).attr('data-com');
        var list = $(this).attr('data-list');
        var $this = $(this);
        $.ajax({
            url: 'ajax/hienthi.php',
            type: 'POST',
            dataType: 'html',
            data: { id: id, com: com, list: list },
            success: function (res) {
                if (res == 1) {
                    $this.removeClass('fa-square-o');
                    $this.addClass('fa-check-square-o');
                }
                else {
                    $this.addClass('fa-square-o');
                    $this.removeClass('fa-check-square-o');
                }
            }
        })
    });

    $('.tinhtrang').click(function (event) {
        var id = $(this).attr('data-id');
        var com = $(this).attr('data-com');
        var list = $(this).attr('data-list');
        var $this = $(this);
        $.ajax({
            url: 'ajax/tinhtrang.php',
            type: 'POST',
            dataType: 'html',
            data: { id: id, com: com, list: list },
            success: function (res) {
                $this.html(res);
            }
        })
    });

    $('.noibat').click(function (event) {
        var id = $(this).attr('data-id');
        var com = $(this).attr('data-com');
        var list = $(this).attr('data-list');
        var col = $(this).attr('data-col');
        var $this = $(this);
        $.ajax({
            url: 'ajax/noibat.php',
            type: 'POST',
            dataType: 'html',
            data: { id: id, com: com, list: list, col: col },
            success: function (res) {
                if (res == 1) {
                    $this.removeClass('fa-star-o');
                    $this.addClass('fa-star');
                }
                else {
                    $this.addClass('fa-star-o');
                    $this.removeClass('fa-star');
                }
            }
        })
    });

    $('.login').click(function (event) {
        var id = $(this).attr('data-id');
        var com = $(this).attr('data-com');
        var list = $(this).attr('data-list');
        var col = $(this).attr('data-col');
        var $this = $(this);
        $.ajax({
            url: 'ajax/login.php',
            type: 'POST',
            dataType: 'html',
            data: { id: id, com: com, list: list, col: col },
            success: function (res) {
                if (res == 1) {
                    $this.removeClass('fa-star-o');
                    $this.addClass('fa-star');
                }
                else {
                    $this.addClass('fa-star-o');
                    $this.removeClass('fa-star');
                }
            }
        })
    });

    $('.change_stt').dblclick(function () {
        $(this).children().removeAttr('disabled');
        $(this).children().focus();
    })

    $('.change_stt').focusout(function () {
        var id = $(this).children().attr('data-id');
        var com = $(this).children().attr('data-com');
        var list = $(this).children().attr('data-list');
        var stt = parseInt($(this).children().val());
        $this = $(this).children();
        $.ajax({
            type: 'POST',
            url: 'ajax/stt.php',
            data: { id: id, com: com, stt: stt, list: list },
            success: function () {
                $this.val(stt);
            }

        })
        $(this).children().attr("disabled", "disabled");
    })

    $('.change_stt').keypress(function (evt) {
        if (evt.keyCode == 13 || evt.which == 13) {
            var id = $(this).children().attr('data-id');
            var com = $(this).children().attr('data-com');
            var list = $(this).children().attr('data-list');
            var stt = parseInt($(this).children().val());
            $this = $(this).children();
            $.ajax({
                type: 'POST',
                url: 'ajax/stt.php',
                data: { id: id, com: com, stt: stt, list: list },
                success: function () {
                    $this.val(stt);
                }

            })
            $(this).children().attr("disabled", "disabled");
        }
    })

    /*carousel*/

    new Splide("#banner-carousel", {
        start: 0,
        perMove: 1,
        perPage: 2.5,
        //   padding: { left: "10px", right: "10px" },
        gap: "12px",
        focus: 0,
        omitEnd: true,
        trimSpace: true,
        lazyLoad: "nearby",
        pagination: false,
        breakpoints: {
            950: {
                perPage: 1.5,
            },
        },
        classes: {
            arrows: "splide__arrows slide-arrows",
            arrow: "splide__arrow slide-arrow",
            prev: "splide__arrow--prev slide-prev",
            next: "splide__arrow--next slide-next",
        },
    }).mount();
    new Splide("#news-carousel", {
        start: 0,
        perMove: 1,
        perPage: 2.5,
        gap: "12px",
        focus: 0,
        omitEnd: true,
        trimSpace: true,
        lazyLoad: "nearby",
        pagination: false,
        breakpoints: {
            950: {
                perPage: 1.5,
            },
        },
    }).mount();
});

/*Start of Tawk.to Script*/

 var Tawk_API = Tawk_API || {},
Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5ebcf757967ae56c5219ab49/1go9gfr3j";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();

/*Tìm kiếm*/
function doEnter(evt) {
    var key;
    if (evt.keyCode == 13 || evt.which == 13) {
        onSearchs(evt);
    }
}

function onSearch(evt) {
    var keyword = document.getElementById("keyword").value;

    if (keyword == "") alert("Bạn chưa nhập từ khóa!");
    else {
        //var encoded = Base64.encode(keyword);
        location.href = "tim-kiem/keyword=" + keyword;
        loadPage(document.location);
    }
}

function onSearchs(evt) {
    var tmp = document.getElementById("keywords").value;
    var tmp1 = document.getElementById("keywords1").value;
    var keyword = "";
    if (tmp != "") keyword = tmp;
    else if (tmp1 != "") keyword = tmp1;
    if (keyword == "") alert("Bạn chưa nhập từ khóa!");
    else {
        //var encoded = Base64.encode(keyword);
        //location.href = "tim-kiem/keyword="+keyword;
        //loadPage(document.location);
        window.location.href = "tim-kiem/keyword=" + keyword;
    }
}

/*SmartMenus jQuery init*/
$(function () {
    $("#main-menu").smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
    });

    $("#main-menus").smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8,
    });
});
/*Scroll*/

(function ($) {
    $(function () {
        $("#uscroll").simplyScroll({
            orientation: "vertical",
            customClass: "vert",
        });
    });
})(jQuery);

/* fb */
/*(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "../connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");*/


; (function (context, $) {
    "use strict";
    APP = context.APP = {
        matchHeight: {
            init: function () {
                $('.js-equal-heights').matchHeight();
                $('.home-promo .l_side_block').matchHeight();
            }
        }
    };
});
// Toggle Search
// ------------------------------------------------------------------------------ //
$("#menu").each(function () {
    $("li.search1 > a", this).on("click", function (e) {
        e.preventDefault();
        $(".top-search").slideToggle();
    });
});
$(".input-group-addon.close-search").on("click", function () {
    $(".top-search").slideUp();
});

// ------------------------------------------------------------------------------ //
/* 
 *	_section_nav.js
 */
var rw = {};
rw.sectionNav = (function () {
    'use strict';

    var init = function () {

        $(document).on('click', '.section_nav button', function () {
            var parent = $(this).parent('.root');

            if (parent.hasClass('-open')) {
                parent.removeClass('-open');
                parent.next('div').slideToggle();
            }
            else {
                parent.addClass('-open');
                parent.next('div').slideToggle();
            }

        });
    };

    return {
        init: init
    };

}());
$(function () {
    rw.sectionNav.init();
});
$('.sidebar-left .sidebar-menu li.has-child > a .icon').click(function (e) {
    e.preventDefault();
    $(this).parent().parent().siblings().find('a').removeClass('menu-open').next('ul').slideUp();
    $(this).parent().toggleClass('menu-open').next('ul').slideToggle();
});