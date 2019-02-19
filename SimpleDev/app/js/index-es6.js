[...document.getElementsByTagName('img')].forEach((img) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://cdn.yinxiang.com/assets/media/img/yx_p_web/_e-share@2x.png', true);
    xhr.responseType = 'blob';
    xhr.onreadystatechange = function () {
        console.log(img.src);
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log('res1:', xhr.response);
            if (xhr.status === 200 || xhr.status === 304) {
                console.log('res2:', xhr.response);
            }
        }
    }
    xhr.send();
});