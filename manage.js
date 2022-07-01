function init(resourcesPaths, backImageNames, modelDir, canvasSize) {
    initDefine(resourcesPath, backImageName, modelDir, canvasSize);
}
/* 监听复制 */
(function() {
    // setTimeout(() => {
    //     console.log(window['s_instance'])
    //     window['s_instance'].nextScene();
    // }, 3000)
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showMessage('你都复制了什么呀，能让我看看吗？', 5000, true);
    })
}());
/* 工具栏的点击事件 */
$('.tool .fui-home').click(() => {

})
$('.tool .fui-eye').click(() => {

})
$('.tool .fui-chat').click(() => {

})
$('.tool .fui-user').click(() => {

})
$('.tool .fui-info-circle').click(() => {

})
$('.tool .fui-cross').click(() => {

})
$('.tool .fui-photo').click(() => {

})

function showMessage(text, timeout, flag) {
    if (flag || sessionStorage.getItem('waifu-text') === '' || sessionStorage.getItem('waifu-text') === null) {
        if (Array.isArray(text)) {
            text = text[Math.floor(Math.random * text.length + 1) - 1];
        }
        if (flag) {
            sessionStorage.setItem('waifu-text', text);
        }
        $('.live2d-tips').stop();
        $('.live2d-tips').html(text).fadeTo(200, 1);
        if (timeout === undefined) {
            timeout = 5000;
        }
        hideMessage(timeout)
    }
}

function hideMessage(timeout) {
    $('.live2d-tips').stop().css('opacity', 1);
    if (timeout === undefined) {
        timeout = 5000;
    }
    window.setTimeout(() => {
        sessionStorage.removeItem('waifu-text')
    }, timeout);
    $('.live2d-tips').delay(timeout).fadeTo(200,0);
}