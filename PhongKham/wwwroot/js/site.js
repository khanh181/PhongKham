$(document).ready(function () {
	/*new js*/
	new Splide("#banner-carousel", {
		start: 0,
		perMove: 1,
		perPage: 2.5,
		padding: { left: "2px", right: "2px" },
		gap: "12px",
		focus: 0,
		omitEnd: true,
		trimSpace: true,

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

	new Splide("#newstype-carousel", {
		arrows: false,
		perPage: 4,
		pagination: false,
		gap: "12px",
		breakpoints: {
			500: {
				perPage: 3,
			},
		},
	}).mount();

	/*index */

	var s1 = document.createElement("script"),
		s0 = document.getElementsByTagName("script")[0];
	s1.async = true;
	s1.src = "https://embed.tawk.to/5ebcf757967ae56c5219ab49/1go9gfr3j";
	s1.charset = "UTF-8";
	s1.setAttribute("crossorigin", "*");
	s0.parentNode.insertBefore(s1, s0);

/*	$(".mrs-slider").slick({
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
	});*/

	$("#main-menu").smartmenus({
		subMenusSubOffsetX: 1,
		subMenusSubOffsetY: -8,
	});

	$("#main-menus").smartmenus({
		subMenusSubOffsetX: 1,
		subMenusSubOffsetY: -8,
	});


});

/*my js*/
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

	// Menu mobile
$(".i-menu").click(function () {
	$("#menus").slideToggle();
	var body = document.getElementsByTagName("body")[0];
	if ($("body").css("overflow") == "hidden") {
		body.style.overflow = null;
	} else {
		body.style = "overflow: hidden";
	}
});

$(".box-tab-tit div").click(function (event) {
	if (!$(this).hasClass("active")) {
		$(this)
			.parent(".box-tab-tit")
			.children("div")
			.not($(this))
			.removeClass("active");
		$(this).addClass("active");
		var i = parseInt($(this).index()) + 1;
		$(this).parent(".box-tab-tit").next().find(".box-tab-con").hide();
		$(this)
			.parent(".box-tab-tit")
			.next()
			.find(".box-tab-con:nth-child(" + i + ")")
			.show();
	}
});

$(".giohang-cl").click(function (event) {
	$("#giohang").removeClass("active");
});

$(".tbl-giohang").on("change", ".ajax_soluong", function (event) {
	// ajax cap nhat so luong
	var id = $(this).attr("data-key");
	var sl = $(this).val();
	var $gia = $(".p" + $(this).attr("data-id"));
	if (sl < 1) {
		sl = 1;
	}
	$this = $(this);
	$.ajax({
		url: "ajax/soluong.php",
		type: "POST",
		dataType: "json",
		data: { id: id, sl: sl },
		success: function (res) {
			$this.parent().next().html(res.thanhtien);
			$(".giohang-thanhtien span").html(res.tongtien);
			$gia.html(res.gia);
		},
	});
});

$(".tbl-giohang").on("click", ".del-cart", function (event) {
	// Xoa san pham khoi gio hang
	var id = $(this).attr("data-key");
	var pid = $(this).attr("data-id");
	$this = $(this);
	$.ajax({
		url: "ajax/delcart.php",
		type: "POST",
		dataType: "json",
		data: { id: id, pid: pid },
		success: function (res) {
			$(".giohang-thanhtien span").html(res.thanhtien);
			$(".giohang-tit span,.banner-ab-gh span").html(res.soluong);
			$(".p" + pid).html(res.gia);
			$this.parents(".tr").remove();
		},
	});
	return false;
});

$(".ajax_cart").click(function (event) {
	/* Xu ly gio hang*/
	var id = $(this).attr("data-id");
	var sl = $("#quality").val();
	$.ajax({
		url: "ajax/giohang.php",
		type: "POST",
		dataType: "json",
		data: { id: id, sl: sl },
		beforeSend: function () {
			$(".ajax_cart").html(
				'<img src="img/load.gif" width="25"/> Vui lòng đợi'
			);
		},
		success: function (res) {
			$(".ajax_cart").html(
				'<i class="fa fa-shopping-cart" aria-hidden="true"></i> Cho vào giỏ hàng'
			);
			$(".banner-ab-gh span,.giohang-tit span").html(res.soluong);
			$(".giohang-thanhtien span").html(res.tongtien);
			$(".tbl-giohang").html(res.giohang);
			$("#giohang").addClass("active");
		},
	});
});

$(".ajax_cart_for").click(function (event) {
	$(".row_sp").each(function (index, el) {
		var id = $(this).attr("data-id");
		var size = $(this).attr("data-size");
		var soluong = parseInt($(this).find(".soluong").val());
		if (soluong > 0) {
			$.ajax({
				url: "ajax/giohang_tt.php",
				type: "POST",
				dataType: "json",
				data: { id: id, size: size, soluong: soluong },
				success: function (res) {
					$(".banner-cart .text").html(res.soluong + " (sp)");
					$(".giohang-thanhtien span").html(res.tongtien);
					$(".tbl-giohang").html(res.giohang);
				},
			});
		}
	});
	if ($(this).hasClass("btn-pay")) {
		window.location.href = "gio-hang";
	}
	$("#giohang").addClass("active");
});

// Xu ly nguoi dung bam "thich" san pham
$(".ajax_like").click(function (event) {
	var id = $(this).attr("data-id");
	var $this = $(this);
	$.ajax({
		url: "ajax/like.php",
		type: "POST",
		dataType: "html",
		data: { id: id },
		success: function (res) {
			if (res == 0) {
				alert("Bạn đã thích sản phẩm này rồi!");
			} else {
				$this.children("span").html(res);
			}
		},
	});
});

;/* (function (context, $) {
	"use strict";
	APP = context.APP = {
		matchHeight: {
			init: function () {
				$('.js-equal-heights').matchHeight();
				$('.home-promo .l_side_block').matchHeight();
			}
		}
	};
});*/
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
/*	thanh tam*/
$(window).on("scroll", function () {
	$pageY = $(window).scrollTop();
	if ($pageY > 300) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}

	if ($pageY > $("#banner").height()) {
		$("#menu").addClass("fix");
		$("#smenu").addClass("fix");
		$("#menus").addClass("fix");
		$(".top-search").addClass("fix");
	} else {
		$("#menu").removeClass("fix");
		$("#smenu").removeClass("fix");
		$("#menus").removeClass("fix");
		$(".top-search").removeClass("fix");
	}
});

// Back top
$("#back-top").click(function () {
	$("html, body").animate(
		{
			scrollTop: 0,
		},
		800
	);
});

/* Lấy từ index*/

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