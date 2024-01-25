$(document).ready(function (e) {
  // Back top
  $("#back-top,.go-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

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
});

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
