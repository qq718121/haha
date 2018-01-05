/**
 * Created by lenovo on 2018/1/5.
 */
$(document).ready(function () {
    function input_blur() {
        let span = $('.input_list span');
        let input = $('.input_list input');
        let i = $('.input_list .i_active');
        var target, i_target;

        function style_init(top, fontSize, lineHeight, color, width, background) {
            target.style.top = top;
            target.style.fontSize = fontSize;
            target.style.lineHeight = lineHeight;
            target.style.color = color;
            i_target.style.width = width;
            i_target.style.background = background;
        }

        function input_yz(index) {
            var val = input[index].value;
            var eng = '/^1[3|4|5|8][0-9]\d{4,8}$/';
            if (!val || !(eng.test(val))) {
                style_init('-15px', '12px', '20px', '#F56364', '280px', '#F56364');
            } else {
                style_init('-15px', '12px', '20px', '#0080FF', '280px', '#0080FF');
            }
        }

        function blur_yz(index) {
            var val = input[index].value;
            if (!val || !(/^1[3|4|5|8][0-9]\d{4,8}$/.test(val))) {
                style_init('0px', '16px', '50px', '#F56364', '280px', '#F56364');
            } else {
                style_init('-15px', '12px', '20px', '#0080FF', '280px', '#0080FF');
            }
        }

        $.each(span, function (index, value) {
            $(this).click(function () {
                target = span[index];
                i_target = i[index];
                input[index].addEventListener('blur', function () {
                    blur_yz(index);
                });
                input[index].addEventListener('focus', function () {
                    var top = '-15px';
                    var fontSize = '12px';
                    var lineHeight = '20px';
                    var color = '#0080FF';
                    var width = '280px';
                    var background = '#0080FF';
                    style_init(top, fontSize, lineHeight, color, width, background);
                });
                input[index].addEventListener('input', function () {
                    input_yz(index);
                });
                if (input[index] == document.activeElement) {
                    input[index].blur();
                } else {
                    input[index].focus();
                }
            });
        });
    }

    input_blur();
//初始化整屏滑动
    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        'sectionsColor': ['#fff', '#F6F7F8', '#fff', '#fff', '#F6F7F8'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['one', 'two', 'three', 'four', 'five', 'six'],
        'resize': true,
        easing: 'easeInExpo',//定义页面section滚动的动画方式，若修改此项需引入jquery.easing插件
        'scrollingSpeed': '2000',
        'keyboardScrolling': true,
        'touchSensitivity': 30,//在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
        'resize ': true,
        'afterLoad': function (anchorLink, index) {
            icon_animate(index);
        },
        'onLeave': function (index, nextIndex, direction) {
            nav_scrool(nextIndex);
            removeClass(nextIndex);
        }
    });
    removeClass(1);
    $('#fp-nav').addClass('right_change_white');
    nav_effect();

});