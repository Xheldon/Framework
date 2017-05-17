'use strict';

window.onload = function () {
    var canvas = document.getElementById('paint');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
        lineargradient.addColorStop(0, 'white');
        lineargradient.addColorStop(1, 'black');
    }
};