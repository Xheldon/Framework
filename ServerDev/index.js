var express = require('express');
var path = require('path');
var app = express();

app.get('/index.html', (req, res) => {
    console.log('req:', req.header);
    res.sendFile(path.resolve(__dirname, './app/index.html'));
});

app.get('/bg_1.png', (req, res) => {
    res.set({
        'Expires': new Date('2030')
    });
    res.sendFile(path.resolve(__dirname, './app/img/bg_1.png'));
});

app.listen(4000, () => {
    console.log('服务开启成功');
})