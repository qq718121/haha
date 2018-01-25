/**
 * Created by lenovo on 2018/1/9.
 */

//span初始化
//获取导航icon的移动元素
var div = $('.page_icon');
var position;
var target;
var tween, tweenBack;
var pos;
var a;
var ul = $('#nav_avtive li');

vipspa.start({
    view: '#content',// 页面路由的div
    router: {
        '/home': {
            templateUrl: 'components/home.html',//view渲染的html
            controller: '/js/home.min.js' //当前html执行的js文件
        },
        '/down': {
            templateUrl: 'components/down.html',
            controller: '/js/down.min.js'
        },
        '/serve': {
            templateUrl: 'components/serve.html',
            controller: '/js/serve.min.js'
        },
        '/about': {
            templateUrl: 'components/about.html',
            controller: '/js/about.min.js'
        },
        'defaults': '/home'
    },
    errorTemplateId: '#error'//错误显示页面
});
rotate();
pushState_navHide();
collapse_();
$.fn.extend({
    animateCss: function (animationName) {
        $.fn.fullpage.setAllowScrolling(false);
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
            $.fn.fullpage.setAllowScrolling(true);
        });
    }
});

function collapse_() {
    //点击外层收起导航
    $('body').click(function () {
        $('#example-navbar-collapse').collapse('hide');
    });
}
//利用tween.js实现导航icon的点击移动特效
function init(index, num) {
    position = {x: num};
    target = $('.page_icon');
    pos = {x: 25.1 * index - 21.445};
    tween = new TWEEN.Tween(position)
        .to(pos, 1)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(update);
    tween.start();
}
//tween.js任务的实时更新函数
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
//tween.js定义的动画任务让指定的dom来执行
function update() {
    target[0].style.left = position.x + '%';
}
//初始化导航active特效
function nav_init(n, list, index) {
    nav_scrool(1);
    init(index, 15);
    animate(1);
    for (let i = 0, len = list.length; i < len; i++) {
        list[i].className = null;
        continue;
    }
    n.className = 'active';
}
// //导航滑动特效

//如果当前section是第一个view，导航所展示的效果
function nav_scrool(index) {
    if (index == 1) {

        $('nav').removeClass('active_all');
        $('nav').addClass('active_one');
        $('#nav_avtive').removeClass('active_all');
        $('#nav_avtive').addClass('active_one');
        $('.header_logo img').attr('src', 'http://oxrgdeqd8.bkt.clouddn.com/logo-white@3x.png');
        $('.navbar-toggle').removeClass('active_icon_black');
        $('.navbar-toggle').addClass('active_icon_white');
        $('#fp-nav').removeClass('right_change_blue');
        $('#fp-nav').addClass('right_change_white');
        div.removeClass('page_icon_active');
    } else {

        $('nav').removeClass('active_one').addClass('active_all');
        $('#nav_avtive').removeClass('active_one').addClass('active_all');
        $('.header_logo img').attr('src', 'http://oxrgdeqd8.bkt.clouddn.com/logo-blue@3x.png');
        $('.navbar-toggle').addClass('active_icon_black');
        $('#fp-nav').removeClass('right_change_white');
        $('#fp-nav').addClass('right_change_blue');
        div.addClass('page_icon_active');
    }
}

//动画创建
function animated($, re, add) {
    $.removeClass(re).addClass(add);
}

//封装一个元素class动画，指定第几个执行
// var class_animated = function (one, two, three, four, five, six, seven, eight, to_, serve_to, num) {
//     var len = arguments.length;
//     var arr = [];
//     // for (var i = 0; i < len; i++) {
//     //     if (arguments[i]) {
//     //         var defualt = `${arguments[i]}Animate`;
//     //         arr.push(defualt);
//     //         var j = $(`.${arr[i]}`);
//     //         (function (e, n) {
//     //             e.transition({display: 'none'}, 1, 'linear', function () {
//     //                 e.transition({translate: [0, '100px']}, 1, 'linear', function () {
//     //                     setTimeout(function () {
//     //                         e.transition({display: ''}, 1, 'linear', function () {
//     //                             e.transition({translate: [0, '0px']}, 600, 'linear', function () {
//     //                             });
//     //                         });
//     //                     }, num);
//     //                 });
//     //             });
//     //         })(j, num);
//     //         num += 150;
//     //     }
//     //     continue;
//     // }
// };
function navigator_win() {
    var system = {
        win: false,
        mac: false,
        xll: false
    };
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    return system;
//跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
}
//根据当前的section执行相应的动画

// function removeClass(index, nextIndex, serve_is) {
//     //平台、设备和操作系统
//     if (index !== nextIndex) {
//         switch (index) {
//             case 1:
//                 class_animated('lx_one', 'lx_two', 'lx_three', '', '', '', '', '', '900px', '', 800);
//                 break;
//             case 2:
//                 if (navigator_win().win || navigator_win().mac || navigator_win().xll) {
//                     class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six', '', '', '900px', '', 800);
//                 } else {
//                     if (a == 2) {
//                         class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six', '', '', '900px', '180px', 300);
//                     } else {
//                         class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six', '', '', '900px', '', 800);
//                     }
//                 }
//                 break;
//             case 3:
//                 if (navigator_win().win || navigator_win().mac || navigator_win().xll) {
//                     class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight', '900px', '', 800);
//                 } else {
//                     if (a == 0) {
//                         class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight', '900px', '200px', 300);
//                     } else {
//                         class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight', '900px', '', 800);
//                     }
//                 }
//                 break;
//             case 4:
//                 class_animated('zy_one', 'zy_two', 'zy_three', 'zy_four', 'zy_five', 'zy_six', 'zy_seven', 'zy_eight', '900px', '', 800);
//                 break;
//             case 5:
//                 class_animated('yy_one', 'yy_two', 'yy_three', 'yy_four', 'yy_five', 'yy_six', 'yy_seven', 'yy_eight', '900px', '', 800);
//                 break;
//         }
//     }
// }
//卡片左右角的icon动画

function icon_animate(index) {
    var left = $('.twoSection_container_left');
    var r = $('.twoSection_container_right');
    var la = 'twoSection_container_left_animate';
    var ra = 'twoSection_container_right_animate';
    var al = $('.advantage_container_left');
    var ar = $('.advantage_container_right');
    switch (index) {
        case 1:
            break;
        case 2:
            animated(left, '', la);
            animated(r, '', ra);
            setTimeout(function () {
                animated(left, la, '');
                animated(r, ra, '');
            }, 850);
            animated(al, '', la);
            animated(ar, '', ra);
            setTimeout(function () {
                animated(al, la, '');
                animated(ar, ra, '');
            }, 850);
            break;
        case 3:
            animated(left, '', la);
            animated(r, '', ra);
            setTimeout(function () {
                animated(left, la, '');
                animated(r, ra, '');
            }, 850);
            animated(al, '', la);
            animated(ar, '', ra);
            setTimeout(function () {
                animated(al, la, '');
                animated(ar, ra, '');
            }, 850);
            break;
        case 4:
            animated(left, '', la);
            animated(r, '', ra);
            setTimeout(function () {
                animated(left, la, '');
                animated(r, ra, '');
            }, 850);
            break;
        case 5:
            animated(left, '', la);
            animated(r, '', ra);
            setTimeout(function () {
                animated(left, la, '');
                animated(r, ra, '');
            }, 850);
            break;
    }
}
//当页面前进后退时候收起导航下拉
function pushState_navHide() {
    var counter = 0;
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            // window.history.pushState('forward', null, '#');
            // window.history.forward(1);
            $('#example-navbar-collapse').collapse('hide');
        });
    }
    // window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
    // window.history.forward(1);
}

