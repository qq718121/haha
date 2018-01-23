/**
 * Created by lenovo on 2018/1/9.
 */

rotate();
pushState_navHide();

//span初始化
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

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            //适配有底部工具栏的浏览器
            var h = window.innerHeight - document.documentElement.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 1440) {
                docEl.style.fontSize = '100px';
            } else if (clientWidth < 768) {
                if (h < 200) {
                    docEl.style.fontSize = 100 * (clientWidth / 415) + 'px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
                }
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
    $('#example-navbar-collapse').collapse('hide');
});

//利用requestAnimationFrame对JQ的动画进行相对的优化
var lastTime = 0;
var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀
var requestAnimationFrame = window.requestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame;
var prefix;
//通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
for (var i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) {
        break;
    }
    prefix = prefixes[i];
    requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
    cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
}

//如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        //为了使setTimteout的尽可能的接近每秒60帧的效果
        var timeToCall = Math.max(0, 16 - ( currTime - lastTime ));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    cancelAnimationFrame = function (id) {
        window.clearTimeout(id);
    };
}

//得到兼容各浏览器的API
window.requestAnimationFrame = requestAnimationFrame;
window.cancelAnimationFrame = cancelAnimationFrame;

function showPage() {
    var bdy = document.body;
    bdy.style.visibility = "visible";
}
// 解决一个bug,系统通过计算窗口宽高需要一个时间进行处理,结果就是,上来页面先
// 是加载的没有样式的,过一秒从上往下渲染,可以给body加一个计时器,1毫秒后
// 显示不影响效果

//获取导航icon的移动元素
var div = $('.page_icon');
var position;
var target;
var tween, tweenBack;
var pos;
var a;
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
var class_animated = function (one, two, three, four, five, six, seven, eight, to_, serve_to, num) {
    var len = arguments.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
        if (arguments[i]) {
            var defualt = `${arguments[i]}Animate`;
            arr.push(defualt);
            var j = $(`.${arr[i]}`);
            (function (e, n) {
                requestAnimationFrame(function () {
                    e.stop(true, true);
                    if (serve_to) {
                        e.css('top', serve_to).css('opacity', '0');
                    } else {
                        e.css('top', to_).css('opacity', '0');
                    }
                    e.css('display', 'none');
                    e.css('display', '');
                    e.animate({'top': '0', 'opacity': '1'}, n);
                });
            })(j, num);
            num += 150;
        }
        continue;
    }
};
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

function removeClass(index, nextIndex, serve_is) {
    //平台、设备和操作系统
    if (index !== nextIndex) {
        switch (index) {
            case 1:
                class_animated('lx_one', 'lx_two', 'lx_three', '', '', '', '', '', '900px', '', 800);
                break;
            case 2:
                if (navigator_win().win || navigator_win().mac || navigator_win().xll) {
                    class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six', '', '', '900px', '', 800);
                } else {
                    if (a == 2) {
                        class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six', '', '', '900px', '180px', 300);
                    } else {
                        class_animated('rh_one', 'rh_two', 'rh_three', 'rh_four', 'rh_five', 'rh_six', '', '', '900px', '', 800);
                    }
                }
                break;
            case 3:
                if (navigator_win().win || navigator_win().mac || navigator_win().xll) {
                    class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight', '900px', '', 800);
                } else {
                    if (a == 0) {
                        class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight', '900px', '200px', 300);
                    } else {
                        class_animated('ql_one', 'ql_two', 'ql_three', 'ql_four', 'ql_five', 'ql_six', 'ql_seven', 'ql_eight', '900px', '', 800);
                    }
                }
                break;
            case 4:
                class_animated('zy_one', 'zy_two', 'zy_three', 'zy_four', 'zy_five', 'zy_six', 'zy_seven', 'zy_eight', '900px', '', 800);
                break;
            case 5:
                class_animated('yy_one', 'yy_two', 'yy_three', 'yy_four', 'yy_five', 'yy_six', 'yy_seven', 'yy_eight', '900px', '', 800);
                break;
        }
    }
}
//卡片左右角的icon动画
var left = $('.twoSection_container_left');
var r = $('.twoSection_container_right');
var la = 'twoSection_container_left_animate';
var ra = 'twoSection_container_right_animate';
var al = $('.advantage_container_left');
var ar = $('.advantage_container_right');
function icon_animate(index) {
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

