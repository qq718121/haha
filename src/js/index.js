/**
 * Created by lenovo on 2018/1/9.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 1440) {
                docEl.style.fontSize = '100px';
            } else if (clientWidth < 768) {
                docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            } else if (clientWidth < 992) {
                docEl.style.fontSize = 100 * (clientWidth / 992) + 'px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 1440) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 自调用函数用来对页面宽度,及是否旋转屏幕的宽度大于640px进行判断.
// 对浏览器的UserAgent进行正则匹配，不含有微信独有标识的则为其他浏览器

setTimeout(showPage, 1);
//点击外层收起导航
$('body').click(function () {
    console.log('q');
    $('#example-navbar-collapse').collapse('hide');
});


function showPage() {
    var bdy = document.body;
    bdy.style.visibility = "visible";
}
// 解决一个bug,系统通过计算窗口宽高需要一个时间进行处理,结果就是,上来页面先
// 是加载的没有样式的,过一秒从上往下渲染,可以给body加一个计时器,1毫秒后
// 显示不影响效果

//span初始化
vipspa.start({
    view: '#content',// 页面路由的div
    router: {
        '/home': {
            templateUrl: 'components/home.html',//view渲染的html
            controller: 'js/home.min.js' //当前html执行的js文件
        },
        '/down': {
            templateUrl: 'components/down.html',
            controller: 'js/down.min.js'
        },
        '/serve': {
            templateUrl: 'components/serve.html',
            controller: 'js/serve.min.js'
        },
        '/about': {
            templateUrl: 'components/about.html',
            controller: 'js/about.min.js'
        },
        'defaults': '/home'
    },
    errorTemplateId: '#error'//错误显示页面
});
//获取导航icon的移动元素
var div = $('.page_icon');
var position;
var target;
var tween, tweenBack;
var pos;
var ul = $('#nav_avtive li');

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
// function nav_effect() {
//     // $.each(ul, function (index, value) {
//     //     $(this).click(function () {
//     //         let index = $(this).index() + 1;
//     //         nav_init(this, ul, index);
//     //     });
//     // });
// }

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
var class_animated = function (one, two, three, four, five, six, seven, eight) {
    var len = arguments.length;
    var arr = [];
    var num = 1000;
    for (var i = 0; i < len; i++) {
        if (arguments[i]) {
            var defualt = `${arguments[i]}Animate`;
            arr.push(defualt);
            var j = $(`.${arr[i]}`);
            (function (e) {
                e.css('top', '1000px');
                e.animate({top: '0'}, num);
                // setTimeout(function () {
                //     animated(e, '', 'fadeInUpBig');
                // }, num);
                // setTimeout(function () {
                //     animated(e, 'fadeInUpBig', '');
                // }, 2000);
            })(j);
            num += 300;
        }
        continue;
    }
};
//根据当前的section执行相应的动画
function removeClass(index, nextIndex) {
    if (index !== nextIndex) {
        switch (index) {
            case 1:
                class_animated('lx_one', 'lx_two', 'lx_three');
                break;
            case 2:
                class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six');
                break;
            case 3:
                class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight');
                break;
            case 4:
                class_animated('zy_one', 'zy_two', 'zy_three', 'zy_four', 'zy_five', 'zy_six', 'zy_seven', 'zy_eight');
                break;
            case 5:
                class_animated('yy_one', 'yy_two', 'yy_three', 'yy_four', 'yy_five', 'yy_six', 'yy_seven', 'yy_eight');
                break;
        }
    }
}
//卡片左右角的icon动画
function icon_animate(index) {
    switch (index) {
        case 1:
            break;
        case 2:
            animated($('.twoSection_container_left'), '', 'twoSection_container_left_animate');
            animated($('.twoSection_container_right'), '', 'twoSection_container_right_animate');
            setTimeout(function () {
                animated($('.twoSection_container_left'), 'twoSection_container_left_animate', '');
                animated($('.twoSection_container_right'), 'twoSection_container_right_animate', '');
            }, 850);
            animated($('.advantage_container_left'), '', 'twoSection_container_left_animate');
            animated($('.advantage_container_right'), '', 'twoSection_container_right_animate');
            setTimeout(function () {
                animated($('.advantage_container_left'), 'twoSection_container_left_animate', '');
                animated($('.advantage_container_right'), 'twoSection_container_right_animate', '');
            }, 850);
            break;
        case 3:
            animated($('.twoSection_container_left'), '', 'twoSection_container_left_animate');
            animated($('.twoSection_container_right'), '', 'twoSection_container_right_animate');
            setTimeout(function () {
                animated($('.twoSection_container_left'), 'twoSection_container_left_animate', '');
                animated($('.twoSection_container_right'), 'twoSection_container_right_animate', '');
            }, 850);
            animated($('.advantage_container_left'), '', 'twoSection_container_left_animate');
            animated($('.advantage_container_right'), '', 'twoSection_container_right_animate');
            setTimeout(function () {
                animated($('.advantage_container_left'), 'twoSection_container_left_animate', '');
                animated($('.advantage_container_right'), 'twoSection_container_right_animate', '');
            }, 850);
            break;
        case 4:
            animated($('.twoSection_container_left'), '', 'twoSection_container_left_animate');
            animated($('.twoSection_container_right'), '', 'twoSection_container_right_animate');
            setTimeout(function () {
                animated($('.twoSection_container_left'), 'twoSection_container_left_animate', '');
                animated($('.twoSection_container_right'), 'twoSection_container_right_animate', '');
            }, 850);
            break;
        case 5:
            animated($('.twoSection_container_left'), '', 'twoSection_container_left_animate');
            animated($('.twoSection_container_right'), '', 'twoSection_container_right_animate');
            setTimeout(function () {
                animated($('.twoSection_container_left'), 'twoSection_container_left_animate', '');
                animated($('.twoSection_container_right'), 'twoSection_container_right_animate', '');
            }, 850);
            break;
    }
}

