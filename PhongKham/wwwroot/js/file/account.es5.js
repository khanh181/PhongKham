"use strict";

$(document).ready(function () {
    $("#main-menu .menu-line").eq(5).addClass("activem");
    $("#main-menus .menu-line").eq(5).addClass("activem");
    var message = "ha";
    $(".toast-body-content").text(message);
    if (message.length > 0) {
        var toast = new bootstrap.Toast($(".toast"));
        toast.show();
    }
});
$("#FPForm").submit(function (e) {
    $("#OTPForm").show();
    $("#FPForm").hide();
    e.preventDefault();
});
$("#ModalFP").on('show.bs.modal', function (e) {
    $("#OTPForm").hide();
    $("#FPForm").show();
});

