/**
 * Created by lenovo on 2018/1/5.
 */
$(document).ready(function () {
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
        'touchSensitivity': 0,//在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
        'resize ': true,
        'afterRender': function () {
            a = 0;
            $('.firstSection_img').animateCss('fadeInUpBig');
            $('.firstSection_down_one_p').animateCss('fadeInUpBig');
            $('.firstSection_down_two_p').animateCss('fadeInUpBig');
            $('.firstSection_down_btn').animateCss('fadeInUpBig');
            $('#section4').addClass('section_padding');
            $('#fullpage').css('display', 'block');
            down_href();
            $('#fp-nav').addClass('right_change_white');
            nav_init(ul[0], ul, 1);
            input_blur();
        },
        'afterLoad': function (anchorLink, index) {
            icon_animate(index);
        },
        'onLeave': function (index, nextIndex, direction) {
            $('#example-navbar-collapse').collapse('hide');
            nav_scrool(nextIndex);
            animate_css(nextIndex, direction);
        }
    });

});
var eng = /^1[3|4|5|8][0-9]\d{4,8}$/;
var url = 'http://47.95.233.255:8081/maijiabangbackstate-1.0-SNAPSHOT';
var is_ = true;
function down_href() {
    var btn = $('.firstSection_down_btn');
    btn.click(function () {
        $(location).attr('href', '../appDown.html');
    });
}
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
        var button = $('.post_button');
        target = span[index];
        i_target = i[index];
        button.css('background', '#0080FF').css('color', '#fff');
        if (index == 3) {
            if (!val || !(eng.test(val)) || val.length < 11) {
                style_init('-0.15rem', '0.12rem', '0.2rem', '#b9c0c8', '100%', '#F56364');
            } else {
                style_init('-0.15rem', '0.12rem', '0.2rem', '#0080FF', '100%', '#0080FF');
            }
        } else {
            style_init('-0.15rem', '0.12rem', '0.2rem', '#b9c0c8', '100%', '#0080FF');
        }
    }

    function focus_yz(e, index) {
        target = span[index];
        i_target = i[index];
        var top = '-0.15rem';
        var fontSize = '0.12rem';
        var lineHeight = '0.2rem';
        var color = '#0080FF';
        var width = '100%';
        var background = '#0080FF';
        style_init(top, fontSize, lineHeight, color, width, background);
        $('body').height($('body')[0].clientHeight);
    }

    function blur_yz(index) {
        // alert($('#section4').css('top'));
        var val = input[index].value;
        target = span[index];
        i_target = i[index];
        if (index == 3) {
            if (!(eng.test(val)) || val.length < 11) {
                style_init('-0.15rem', '0.12rem', '0.2rem', '#F56364', '0rem', '#F56364');
            } else {
                style_init('-0.15rem', '0.12rem', '0.2rem', '#b9c0c8', '0rem', '#0080FF');
            }
        } else if (!val || val == '') {
            style_init('-0.15rem', '0.12rem', '0.2rem', '#F56364', '0rem', '#0080FF');
        } else {
            style_init('-0.15rem', '0.12rem', '0.2rem', '#b9c0c8', '0rem', '#0080FF');
        }
    }

    $('.modal_inner button').click(function () {
        input.each(function (i, val) {
            val.value = '';
        });
        $('#myForm').attr('action', '');
        $('.modal_').hide(100);
        is_ = true;
    });

    $.each(span, function (index) {
        $(this).click(function () {
            input[index].addEventListener('focus', function (e) {
                focus_yz(e, index);
            });
            input[index].addEventListener('blur', function () {
                blur_yz(index);
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

    $('.post_button').click(function () {
            is_ = true;
            for (var i = 0, len = input.length; i < len; i++) {
                var val = input[i].value;
                if (!val) {
                    is_ = false;
                    return;
                }
                if (i == 3) {
                    if (!val || !(eng.test(val))) {
                        is_ = false;
                        return;
                    }
                }
            }
            if (is_ == true) {
                $('#myForm').attr('action', url + '/appUserScoreController/appointBuildInfo');
                $('#myForm').submit();
                $('.modal_').toggle(100);
            } else {
                return false;
            }
        }
    );
}
function animate_css(nextIndex, direction) {

    if (nextIndex == 2 && direction == 'down') {
        $('.twoSection_container_img').animateCss('fadeInUpBig');
        $('.twoSection_container_inner h1').animateCss('fadeInUpBig');
        $('.twoSection_container_inner span').animateCss('fadeInUpBig');
        $('.twoSection_container_inner p').animateCss('fadeInUpBig');
    }
    if (nextIndex == 3 && direction == 'down') {
        $('.threeSection_container_title h1').animateCss('fadeInUpBig');
        $('.threeSection_container_title p').animateCss('fadeInUpBig');
        $('.threeSection_container_list_img').animateCss('fadeInUpBig');
        $('.threeSection_container_list_img_two').animateCss('fadeInUpBig');
        $('.threeSection_container_list_img_three').animateCss('fadeInUpBig');
        $('.threeSection_container_list_img_four').animateCss('fadeInUpBig');
        $('.threeSection_container_list p').animateCss('fadeInUpBig');
    }
    if (nextIndex == 4 && direction == 'down') {
        $('.six_fourSection_container_title h1').animateCss('fadeInUpBig');
        $('.six_fourSection_container_title p').animateCss('fadeInUpBig');
        $('.list_one,.list_two,.list_three,.list_four,.list_five,.list_six').animateCss('fadeInUpBig');
    }
    if (nextIndex == 5 && direction == 'down') {
        $('.fiveSection_container_box').animateCss('fadeInUpBig');
    }
}
