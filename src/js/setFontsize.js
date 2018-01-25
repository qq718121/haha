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
function showPage() {
    var bdy = document.body;
    bdy.style.visibility = "visible";
}
// 解决一个bug,系统通过计算窗口宽高需要一个时间进行处理,结果就是,上来页面先
// 是加载的没有样式的,过一秒从上往下渲染,可以给body加一个计时器,1毫秒后
// 显示不影响效果
setTimeout(showPage, 1);