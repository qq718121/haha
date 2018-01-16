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
        'afterLoad': function (anchorLink, index) {
            icon_animate(index);
        },
        'onLeave': function (index, nextIndex, direction) {
            nav_scrool(nextIndex);
            removeClass(nextIndex);
        }
    });
    $('#section4').addClass('section_padding');
    $('#fullpage').css('display', 'block');
    removeClass(1);
    $('#fp-nav').addClass('right_change_white');
    nav_init(ul[2], ul, 3);
});