$(document).ready(function () {
    $("#main-menu .menu-line").eq(5).addClass("activem");
    $("#main-menus .menu-line").eq(5).addClass("activem");
    var message = "ha";
    $(".toast-body-content").text(message);
    if (message.length > 0) {
        const toast = new bootstrap.Toast($(".toast"));
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
})

$('.date-range').daterangepicker({
    "showDropdowns": true,
    "singleDatePicker": true,
    "timePicker24Hour": true,
    "timePicker": true,
    "locale": {
        "direction": "ltr",
        "format": "DD/MM/YYYY HH:mm",
        "separator": " - ",
        "applyLabel": "Hoàn thành",
        "cancelLabel": "Hủy",
        "fromLabel": "Từ",
        "toLabel": "Đến",
        "customRangeLabel": "Tùy chọn",
        "daysOfWeek": [
            "CN",
            "T2",
            "T3",
            "T4",
            "T5",
            "T6",
            "T7"
        ],
        "monthNames": [
            "Tháng một",
            "Tháng hai",
            "Tháng ba",
            "Tháng tư",
            "Tháng năm",
            "Tháng sáu",
            "Tháng bảy",
            "Tháng tám",
            "Tháng chín",
            "Tháng mười",
            "Tháng mười một",
            "Tháng mười hai"
        ],
        "firstDay": 1
    }
});
