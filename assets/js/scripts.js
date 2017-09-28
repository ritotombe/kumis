$(document).ready(function() {
    var initial_width = $('#background').width() / 2 - $('#background').width();
    var kumisPos = initial_width - initial_width * 0.73;
    var keys = {};

    function detectmob() { /* stackoverflow.com/questions/11381673/detecting-a-mobile-browser*/
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }

    function showMobileSite() {
        $('#mobile').css('display', 'block');
        $('#container').css('display', 'none');
    }

    function animasi(obj, end, start, speed) {
        $(obj).css('top', start + "%");
        $(obj).animate({
            'top': "+=" + end + "%",
            'opacity': 1
        }, speed);
        $(obj).clearQueue();
    }

    function showText(obj, speed) {
        if ($(obj).css('opacity') == 0) {
            $(obj).animate({
                'opacity': 1
            }, speed);
        }
        $(obj).clearQueue();
    }

    function hideText(obj, speed) {
        if ($(obj).css('opacity') == 1) {
            $(obj).animate({
                'opacity': 0
            }, speed);
        }
        $(obj).clearQueue();
    }

    function kumisStop(remObj, addObj) {
        $('#kumis').removeClass(remObj).addClass(addObj);
        $('#background').clearQueue();
    }

    function kumisMove(remObj, addObj, speed) {
        $('#kumis').removeClass(remObj).addClass(addObj);
        $('#background').animate({
            'left': "+=" + speed + "%"
        }, 2);
        $('#background').clearQueue();
    }

    function kumisJump(obj, height) {
        if ($(obj).queue() == 0) {
            $(obj).animate({
                'top': "-=" + height + "%",
            }, 100).animate({
                'top': "+=" + height + "%",
            }, 100);
        }
    }

    function kumisMotion() {
        if ($('#background').position().left < initial_width * 0.73) {
            $('#kumis').removeClass('kumis-stop').removeClass('kumis-left').removeClass('kumis-right').addClass('kumis-stop-1');
            if (keys[37]) {
                if ($('#background').position().left > 0) {
                    kumisStop('kumis-left-1', 'kumis-stop-1');
                } else {
                    kumisMove('kumis-stop-1', 'kumis-left-1', "0.5");
                }
            }
            if (!keys[37]) {
                kumisStop('kumis-left-1', 'kumis-stop-1');
            }
            if (keys[39]) {
                if (initial_width * 2 - initial_width * 0.73 > $('#background').position().left) {
                    kumisStop('kumis-right-1', 'kumis-stop-1');
                } else {
                    kumisMove('kumis-stop-1', 'kumis-right-1', "-0.5");
                }
            }
            if (!keys[39]) {
                kumisStop('kumis-right-1', 'kumis-stop-1');
            }
        } else {
            $('#kumis').removeClass('kumis-stop-1').removeClass('kumis-left-1').removeClass('kumis-right-1').addClass('kumis-stop');
            if (keys[37]) {
                if ($('#background').position().left > 0) {
                    kumisStop('kumis-left', 'kumis-stop');
                } else {
                    kumisMove('kumis-stop', 'kumis-left', "0.5");
                }
            }
            if (!keys[37]) {
                kumisStop('kumis-left', 'kumis-stop');
            }
            if (keys[39]) {
                if (initial_width > $('#background').position().left) {
                    kumisStop('kumis-right', 'kumis-stop');
                } else {
                    kumisMove('kumis-stop', 'kumis-right', "-0.5");
                }
            }
            if (!keys[39]) {
                kumisStop('kumis-right', 'kumis-stop');
            }
        }
        if (keys[38]) {
            kumisJump("#kumis", 20);
        }
        if (parseInt($('#background').position().left) < parseInt(initial_width * 2 * 0.2 - kumisPos) && parseInt($('#text1').position().top) == parseInt($('#background').height() * 0.1)) {}
        if ($('#background').position().left < initial_width * 2 * 0.2 - kumisPos && $('#background').position().left > initial_width * 2 * 0.3 - kumisPos) {
            showText("#text2", 500);
            if (parseInt($('#text1').position().top) == parseInt($('#background').height() * 0.1)) {
                animasi("#text1", -60, 10, 1000);
            }
            if (parseInt($('#rektorat').position().top) == parseInt($('#background').height() * 2)) {
                animasi("#rektorat", -200, 200, 1000);
            }
        } else {
            hideText("#text2", 500);
        }
        if ($('#background').position().left < initial_width * 2 * 0.3 - kumisPos && $('#background').position().left > initial_width * 2 * 0.35 - kumisPos) {
            showText("#text3", 500);
            showText("#toped", 1500);
        } else {
            hideText("#text3", 500);
        }
        if ($('#background').position().left < initial_width * 2 * 0.35 - kumisPos && $('#background').position().left > initial_width * 2 * 0.5 - kumisPos) {
            showText("#text4", 500);
        } else {
            hideText("#text4", 500);
        }
        if ($('#background').position().left < initial_width * 2 * 0.5 - kumisPos && $('#background').position().left > initial_width * 2 * 0.6 - kumisPos) {
            showText("#text5", 500);
            if (parseInt($('#unimelb').position().top) == parseInt($('#background').height() * -1.5)) {
                animasi("#unimelb", 150, -150, 1000);
            }
        } else {
            hideText("#text5", 500);
        }
        if ($('#background').position().left < initial_width * 2 * 0.6 - kumisPos && $('#background').position().left > initial_width * 2 * 0.8 - kumisPos) {
            showText("#text6", 500);
        } else {
            hideText("#text6", 500);
        }
        if ($('#background').position().left < initial_width * 2 * 0.65 - kumisPos) {
            showText("#text7", 500);
            showText("#rito", 1500);
        } else {
            hideText("#text7", 500);
        }
        if ($('#background').position().left < initial_width * 2 * 0.6 - kumisPos && $('#background').position().left > initial_width * 2 * 0.8 - kumisPos) {
            showText("#text6", 500);
        } else {
            hideText("#text6", 500);
        }
        return;
    }

    function main() {
        if (detectmob()) {
            showMobileSite();
        } else {
            $(".oval").fadeIn("slow");
            showText("hr", 1000);
            animasi("#text1", 60, -50, 1000);
            animasi("#text0", 60, -50, 800);
            $(document).keydown(function(e) {
                keys[e.which] = true;
                e.preventDefault();
                kumisMotion();
                return;
            });
            $(document).keyup(function(e) {
                keys[e.which] = false;
                e.preventDefault();
                kumisMotion();
                return;
            });
            setInterval(kumisMotion, 0.0001);
        }
    }
    $(main);
});
