$(document).ready(function () {
    $("#main-menu .menu-line").eq(5).addClass("activem");
    $("#main-menus .menu-line").eq(5).addClass("activem");
});
$("#FPForm").submit(function (e) {
    $("#OTPForm").show();
    $("#FPForm").hide();
    e.preventDefault();
});
$("#ModalFP").on('show.bs.modal', function (e) {
    $("#OTPForm").hide();
    $("#FPForm").show();
})