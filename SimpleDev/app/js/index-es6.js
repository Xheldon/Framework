window.onload = function () {
    let canvas = document.getElementById('paint');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let lineargradient = ctx.createLinearGradient(0,0,150,150);
        lineargradient.addColorStop(0,'white');
        lineargradient.addColorStop(1,'black');
    }
};
