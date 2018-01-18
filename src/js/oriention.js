/**
 * Created by lenovo on 2018/1/17.
 */
function rotate() {
    var orientation = window.orientation;
    if (orientation == 90 || orientation == -90) {
        $('.preventTran').css('display', 'block');
        $('#fp-nav').css('display', 'none');
    } else {
        $('#fp-nav').css('display', 'block');
    }
    window.onorientationchange = function () {
        $('.preventTran').css('display', 'none');
        rotate();
    };
}