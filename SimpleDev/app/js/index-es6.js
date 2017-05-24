window.onload = function () {
    let canvas = document.getElementById('paint');
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let lineargradient = ctx.createLinearGradient(0,0,150,150);
        lineargradient.addColorStop(0,'white');
        lineargradient.addColorStop(1,'black');
    }
    let target = document.getElementById('target');
    let source = document.getElementById('source');
    [...document.getElementsByTagName('img')].forEach(function (value, key) {
        value.addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'move';
            console.log('Start:', e);
            e.dataTransfer.setDragImage(source, 50, 50);
            // e.dataTransfer.addElement(source);
        });
    });
    target.addEventListener('dragover', function (e) {
       // e 一定要阻止默认, 否则下面的 drop 不会触发
        e.preventDefault();
        // dropEffect设置的值与 effectAllowed 不同的时候, 将不会触发 drop 事件.
        e.dataTransfer.dropEffect = 'move';
    });
    target.addEventListener('dragenter', function (e) {
        // e.preventDefault();
        console.log('Enter:', e);
    });
    target.addEventListener('drop', function (e) {
        e.preventDefault();
        console.log('Drop:', e);
    })
};
