// Requires jQuery

// Initialize slider:
$(document).ready(function () {
    $(".noUi-handle").on("click", function () {
        $(this).width(50);
    });
    var rangeSlider = document.getElementById("slider-range");
    var rangeSlider2 = $("#slider-range");
    if (rangeSlider2.length > 0) {
        var moneyFormat = wNumb({
            decimals: 0,
            thousand: ",",
            prefix: "$"
        });
        noUiSlider.create(rangeSlider, {
            start: [16, 173],
            step: 1,
            range: {
                min: [0],
                max: [300]
            },
            format: moneyFormat,
            connect: true
        });

        // Set visual min and max values and also update value hidden form inputs
        rangeSlider.noUiSlider.on("update", function (values, handle) {
            $(".min-value-money").html(values[0]);
            $(".max-value-money").html(values[1]);
            $(".min-value").val(moneyFormat.from(values[0]));
            $(".max-value").val(moneyFormat.from(values[1]));
        });
    }
});
