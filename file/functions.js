

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function () {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this), str = $ele.html(), progress = 0;
            $ele.html('');
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;

    // Adjust the number of days to display 6570
    var days = 6570;

    // Start Hours and Minutes from 0
    var hours = "00";
    var minutes = "00";
    var remainingSeconds = seconds % 60; // Update only seconds dynamically
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }

    var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes + "</span> Seconds <span class=\"digit\">" + remainingSeconds + "</span>";
    $("#clock").html(result);

    var text = "THE WORLD JUST GOT LUCKIER SINCE ";
    $("#message-box").html(text);
}

