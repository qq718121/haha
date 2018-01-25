/**
 * Created by lenovo on 2018/1/9.
 */
/**
 * Created by lenovo on 2018/1/9.
 */
/**
 * Created by lenovo on 2017/12/22.
 */
$(document).ready(function () {
//初始化整屏滑动
    if ($('html').hasClass('fp-enabled')) {
        $.fn.fullpage.destroy('all');
    }
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        'sectionsColor': ['#fff', '#fff', '#F6F7F8', '#fff', '#F6F7F8'],
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
            $('.serve_firstSection_img').animateCss('fadeInUpBig');
            $('.serve_firstSection_down_one_p').animateCss('fadeInUpBig');
            $('.serve_firstSection_down_two_p').animateCss('fadeInUpBig');
            $('#section4').addClass('section_padding');
            $('#fullpage').css('display', 'block');
            a = 2;
            $('#fp-nav').addClass('right_change_white');
            nav_init(ul[2], ul, 3);
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
    function animate_css(nextIndex, direction) {

        if (nextIndex == 2 && direction == 'down') {
            $('.fourSection_container_title h1').animateCss('fadeInUpBig');
            $('.serve_one,.serve_two,.serve_three,.serve_four').animateCss('fadeInUpBig');
        }
        if (nextIndex == 3 && direction == 'down') {
            $('.twoSection_container_img').animateCss('fadeInUpBig');
            $('.twoSection_container_inner h1').animateCss('fadeInUpBig');
            $('.twoSection_container_inner span').animateCss('fadeInUpBig');
            $('.twoSection_container_inner p').animateCss('fadeInUpBig');
        }
        if (nextIndex == 4 && direction == 'down') {
            $('.server_container_title h1').animateCss('fadeInUpBig');
            $('.server_container_title p').animateCss('fadeInUpBig');
            $('.dimen_one,.dimen_two,.dimen_three').animateCss('fadeInUpBig');
        }
        if (nextIndex == 5 && direction == 'down') {
            $('.twoSection_container_img').animateCss('fadeInUpBig');
            $('.twoSection_container_inner h1').animateCss('fadeInUpBig');
            $('.twoSection_container_inner span').animateCss('fadeInUpBig');
            $('.twoSection_container_inner p').animateCss('fadeInUpBig');
        }
    }
});