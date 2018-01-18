/**
 * Created by lenovo on 2018/1/9.
 */
/**
 * Created by lenovo on 2017/12/22.
 */
$(document).ready(function () {
    var az = $('.firstSection_down_btn_az');
    var ip = $('.firstSection_down_btn_phone');
    var url = 'https://itunes.apple.com/cn/app/%E9%B9%B0%E7%9C%BC%E9%89%B4%E6%88%BF/id1298408736?mt=8';
    nav_init(ul[1], ul, 2);
    function down_checkout() {
        az.click(function () {
            $(".QR_cord").fadeToggle(700);
        });
        ip.click(function () {
            $(location).attr('href', url);
        });
    }

//初始化整屏滑动
    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        'sectionsColor': ['#fff', '#F6F7F8', '#F6F7F8', '#F6F7F8', '#F6F7F8'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['one', 'two', 'three', 'four', 'five', 'six'],
        'resize': true,
        easing: 'easeInExpo',//定义页面section滚动的动画方式，若修改此项需引入jquery.easing插件
        'scrollingSpeed': '2000',
        'keyboardScrolling': true,
        'touchSensitivity': 0,//在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
        'resize ': true,
        'afterLoad': function (anchorLink, index) {
            icon_animate(index);
        },
        'onLeave': function (index, nextIndex, direction) {
            nav_scrool(nextIndex);
            removeClass(nextIndex);
        }
    });
     a = 1;
    $('#section3').addClass('section_padding');
    $('#fullpage').css('display', 'block');
    removeClass(1);
    $('#fp-nav').addClass('right_change_white');
    down_checkout();
});