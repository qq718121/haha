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
        'afterRender': function () {
            a = 1;
            $('.firstSection_img').animateCss('fadeInUpBig');
            $('.firstSection_down_one_p').animateCss('fadeInUpBig');
            $('.firstSection_down_two_p').animateCss('fadeInUpBig');
            $('.down_btn').animateCss('fadeInUpBig');
            $('#section3').addClass('section_padding');
            $('#fullpage').css('display', 'block');
            $('#fp-nav').addClass('right_change_white');
            down_checkout();
            nav_init(ul[1], ul, 2);
        },
        'afterLoad': function (anchorLink, index) {
            $(".QR_cord").hide(700);
            icon_animate(index);
        },
        'onLeave': function (index, nextIndex, direction) {
            $('#example-navbar-collapse').collapse('hide');
            nav_scrool(nextIndex);
            animate_css(nextIndex, direction);
        }
    });
    function animate_css(nextIndex, direction) {

        if (nextIndex == 2 && direction == 'down') {
            $('.twoSection_container_img_watch').animateCss('fadeInUpBig');
            $('.twoSection_container_watch h1').animateCss('fadeInUpBig');
            $('.twoSection_container_watch span').animateCss('fadeInUpBig');
            $('.twoSection_container_watch p').animateCss('fadeInUpBig');
        }
        if (nextIndex == 3 && direction == 'down') {
            $('.twoSection_container_img_down').animateCss('fadeInUpBig');
            $('.twoSection_container_inner h1').animateCss('fadeInUpBig');
            $('.twoSection_container_inner span').animateCss('fadeInUpBig');
            $('.twoSection_container_inner p').animateCss('fadeInUpBig');
        }
        if (nextIndex == 4 && direction == 'down') {
            $('.twoSection_container_img_all').animateCss('fadeInUpBig');
            $('.twoSection_container_all h1').animateCss('fadeInUpBig');
            $('.twoSection_container_all span').animateCss('fadeInUpBig');
            $('.twoSection_container_all p').animateCss('fadeInUpBig');
        }
    }

    function down_checkout() {
        az.click(function () {
            $(".QR_cord").fadeToggle(700);
        });
        ip.click(function () {
            window.open(url);
        });
    }
});