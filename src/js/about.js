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
        'sectionsColor': ['#fff', '#F6F7F8', '#F6F7F8', '#F6F7F8', '#F6F7F8'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['one', 'two', 'three', 'four', 'five', 'six'],
        'resize': true,
        easing: 'easeInExpo',//定义页面section滚动的动画方式，若修改此项需引入jquery.easing插件
        'scrollingSpeed': '2000',
        'keyboardScrolling': true,
        'touchSensitivity': 5,//在移动设备中滑动页面的敏感性，默认为5最高100，越大越难滑动
        'resize ': true,
        'afterRender': function () {
            $('.about_firstSection_img').animateCss('fadeInUpBig');
            $('.firstSection_down_one_p').animateCss('fadeInUpBig');
            $('.about_firstSection_down_two_p').animateCss('fadeInUpBig');
            $('#section2').addClass('section_padding');
            $('#fullpage').css('display', 'block');
            $('#fp-nav').addClass('right_change_white');
            nav_init(ul[3], ul, 4);
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
            $('.twoSection_container_img').animateCss('fadeInUpBig');
            $('.twoSection_container_inner h1').animateCss('fadeInUpBig');
            $('.twoSection_container_inner span').animateCss('fadeInUpBig');
            $('.twoSection_container_inner p').animateCss('fadeInUpBig');
        }
        if (nextIndex == 3 && direction == 'down') {
            $('.contact_we').animateCss('fadeInUpBig');
            // $('.wx_img').animateCss('swing');
        }
    }
});