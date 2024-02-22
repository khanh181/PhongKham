$('.date-range').daterangepicker({
    "showDropdowns": true,
    "timePicker24Hour": true,
    "timePicker": true,
    /*"ranges": {
        "Hôm nay": [moment(), moment()],
        "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        "Tuần này": [moment().startOf('week'), moment().endOf('week')],
        "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
        "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Tháng này": [moment().startOf('month'), moment().endOf('month')],
        "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
    },*/
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
            "T7",
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

$('.date-only-range').daterangepicker({
    "timePicker": false,
    /*"ranges": {
        "Hôm nay": [moment(), moment()],
        "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        "Tuần này": [moment().startOf('week'), moment().endOf('week')],
        "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
        "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Tháng này": [moment().startOf('month'), moment().endOf('month')],
        "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
    },*/
    "locale": {
        "direction": "ltr",
        "format": "DD/MM/YYYY",
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
            "T7",
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

$('.date-full-time-range').daterangepicker({
    "timePicker": true,
    "showDropdowns": true,
    "timePicker24Hour": true,
    "timePickerSeconds":true,
    /*"ranges": {
        "Hôm nay": [moment(), moment()],
        "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        "Tuần này": [moment().startOf('week'), moment().endOf('week')],
        "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
        "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Tháng này": [moment().startOf('month'), moment().endOf('month')],
        "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
    },*/
    "locale": {
        "direction": "ltr",
        "format": "DD/MM/YYYY HH:mm:ss",
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
            "T7",
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

$('.date-time-range').daterangepicker({
    "showDropdowns": true,
    "autoUpdateInput": false,
    "timePicker24Hour": true,
    "timePicker": true,
    "applyButtonClasses": "btn-apply-date-time-range",
    /*"ranges": {
        "Hôm nay": [moment(), moment()],
        "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        "Tuần này": [moment().startOf('week'), moment().endOf('week')],
        "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
        "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Tháng này": [moment().startOf('month'), moment().endOf('month')],
        "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
    },*/
    "locale": {
        "direction": "ltr",
        "format": "DD/MM/YYYY HH:mm",
        "applyLabel": "Hoàn thành",
        "cancelLabel": "Hủy",
        "customRangeLabel": "Tùy chọn",
        "daysOfWeek": [
            "CN",
            "T2",
            "T3",
            "T4",
            "T5",
            "T6",
            "T7",
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

$('.date-time-range-2').daterangepicker({
    "showDropdowns": true,
    "autoUpdateInput": false,
    "timePicker24Hour": true,
    "timePicker": true,
    "applyButtonClasses": "btn-apply-date-time-range-2",
    /*"ranges": {
        "Hôm nay": [moment(), moment()],
        "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        "Tuần này": [moment().startOf('week'), moment().endOf('week')],
        "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
        "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Tháng này": [moment().startOf('month'), moment().endOf('month')],
        "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
    },*/
    "locale": {
        "direction": "ltr",
        "format": "DD/MM/YYYY HH:mm",
        "applyLabel": "Hoàn thành",
        "cancelLabel": "Hủy",
        "customRangeLabel": "Tùy chọn",
        "daysOfWeek": [
            "CN",
            "T2",
            "T3",
            "T4",
            "T5",
            "T6",
            "T7",
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


$('.date-single-only-range').daterangepicker({
    "timePicker": false,
    "singleDatePicker": true,
    /*"ranges": {
        "Hôm nay": [moment(), moment()],
        "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
        "Tuần này": [moment().startOf('week'), moment().endOf('week')],
        "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
        "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        "Tháng này": [moment().startOf('month'), moment().endOf('month')],
        "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
    },*/
    "locale": {
        "direction": "ltr",
        "format": "DD/MM/YYYY",
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
            "T7",
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

$('.time-range').daterangepicker({
    timePicker: true,
    timePicker24Hour: true,
    timePickerIncrement: 1,
    timePickerSeconds: false,

    locale: {
        format: 'HH:mm'
    }
}).on('show.daterangepicker', function (ev, picker) {
    picker.container.find(".calendar-table").hide();
});


$(".btn-apply-date-time-range").on("click", function () {
    $('.date-time-range').daterangepicker({
        "showDropdowns": true,
        "autoUpdateInput": true,
        "timePicker24Hour": true,
        "timePicker": true,
        "applyButtonClasses": "btn-apply-date-time-range",
        "cancelClass": "btn-cancel-date-time-range",
        /*"ranges": {
            "Hôm nay": [moment(), moment()],
            "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
            "Tuần này": [moment().startOf('week'), moment().endOf('week')],
            "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
            "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            "Tháng này": [moment().startOf('month'), moment().endOf('month')],
            "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
        },*/
        "locale": {
            "direction": "ltr",
            "format": "DD/MM/YYYY HH:mm",
            "applyLabel": "Hoàn thành",
            "cancelLabel": "Hủy",
            "customRangeLabel": "Tùy chọn",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7",
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
})

$(".btn-apply-date-time-range-2").on("click", function () {
    $('.date-time-range-2').daterangepicker({
        "showDropdowns": true,
        "autoUpdateInput": true,
        "timePicker24Hour": true,
        "timePicker": true,
        "applyButtonClasses": "btn-apply-date-time-range-2",
        "cancelClass": "btn-cancel-date-time-range",
        /*"ranges": {
            "Hôm nay": [moment(), moment()],
            "Tuần trước": [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
            "Tuần này": [moment().startOf('week'), moment().endOf('week')],
            "Tuần sau": [moment().add(1, 'week').startOf('week'), moment().add(1, 'week').endOf('week')],
            "Tháng trước": [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
            "Tháng này": [moment().startOf('month'), moment().endOf('month')],
            "Tháng sau": [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
        },*/
        "locale": {
            "direction": "ltr",
            "format": "DD/MM/YYYY HH:mm",
            "applyLabel": "Hoàn thành",
            "cancelLabel": "Hủy",
            "customRangeLabel": "Tùy chọn",
            "daysOfWeek": [
                "CN",
                "T2",
                "T3",
                "T4",
                "T5",
                "T6",
                "T7",
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
})