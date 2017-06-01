window.onload = function () {
    // todo 需要有个计时, 来处理鼠标移动过快, mousemove 画图的时候不连续的问题.初步解决思路是, 计时判断两个点之间的移动速度, 如果过快就自动填充两点之前的距离.
    // todo 鼠标右键事件实现裁剪工具
    let canvas = document.getElementById('paint');
    let control = {
        color: 'black',
        tool: 'pencil',
        toolOption: {
            nibType: 'arc'
        },
        thickness: 1
    };
    // 初始化
    // todo 根据 color 值设置背景色
    function ctrl (option, cb) {
        let wrap, ele, attr, type;
        ({wrap, ele, attr, type} = option);
        let ctrlGrids = [...wrap.querySelectorAll(ele)];
        ctrlGrids.forEach(function (el) {
            el.addEventListener('click', {
                type: type,
                ele: el,
                handleEvent: function (e) {
                    e.preventDefault();
                    ctrlGrids.forEach(function (el) {
                        if (el.hasAttribute('class')) {
                            el.removeAttribute('class');
                        }
                    });
                    this.ele.className = 'active';
                    control[attr] = this.ele.getAttribute(attr);
                    if (cb) cb(control[attr]);
                }
            });
        });
    }
    // 颜色控制
    let colorPanel = document.getElementById('color-panel');
    ctrl({
        wrap: colorPanel,
        ele: 'li',
        attr: 'color',
        type: 'color'
    });
    //工具选择
    let tools = document.getElementById('tools');
    ctrl({
        wrap: tools,
        ele: 'li',
        attr: 'tool',
        type: 'tool'
    }, function (attr) {
        let documentFragment = document.createDocumentFragment();
        console.log(attr);
        switch (attr) {
            case 'pencil':
                break;
            case 'nib':
                // 两种类型的笔尖
                let nib = [{
                    type: 'arc',
                    name: '圆形'
                }, {
                    type: 'rect',
                    name: '方形'
                }];
                for (let i = 1; i <= nib.length; i++) {
                    let rect = document.createElement('input');
                    let label = document.createElement('label');
                    let text = document.createTextNode(nib[i-1]['name']);
                    rect.type = 'radio';
                    rect.name = 'nib';
                    rect.id = 'radio' + i;
                    rect.value = nib[i-1]['type'];
                    rect.checked = (i === 1);
                    label.appendChild(rect);
                    // // 没有 insertAfter 方法, 使用 insertBefore 和 nextSibling 模拟
                    label.insertBefore(text, rect.nextSibling);
                    rect.addEventListener('click', function () {
                        control.toolOption.nibType = this.value;
                    });
                    documentFragment.appendChild(label);
                    // documentFragment.insertBefore(label, rect.nextElementSibling);
                }
                let controlWrap = document.getElementById('control');
                controlWrap.innerHTML = '';
                controlWrap.appendChild(documentFragment);
                break;
            case 'bucket':

        }
    });
    // 粗细控制
    let controlBar = document.getElementById('control');
    controlBar.querySelectorAll('input').forEach(function (ele, key) {
        ele.addEventListener('change', {
            type: 'control',
            ele: ele,
            dataType: ele.getAttribute('data-type'),
            handleEvent: function (e) {
                e.preventDefault();
                control.thickness = this.ele.value;
            }
        });
    });

    // 铅笔绘图函数
    let draw  = function (ctx, radius, pointer) {
        ctx.beginPath();
        ctx.fillStyle = control.color;
        switch (pointer.type) {
            case 'arc':
                ctx.arc(pointer.x, pointer.y, control.thickness, 0, Math.PI*2, true);
                break;
            case 'rect':
                ctx.fillRect(pointer.x - control.thickness/2, pointer.y - control.thickness/2, control.thickness, control.thickness);
        }
        ctx.fill();
    };
    if (canvas && canvas.getContext) {
        let ctx = canvas.getContext('2d');
        let img = new Image();
        let downFlag = 0;
        ctx.drawImage(img, 0, 0, 400, 250);
        canvas.addEventListener('mousedown', function (e) {
            e.preventDefault();
            console.log('start');
            downFlag = 1;
            draw(ctx, control.thickness, {
                x: e.offsetX,
                y: e.offsetY,
                type: control.toolOption.nibType
            })
        });
        canvas.addEventListener('mousemove', function (e) {
            e.preventDefault();
            if (downFlag) {
                console.log(1);
                draw(ctx, control.thickness, {
                    x: e.offsetX,
                    y: e.offsetY,
                    type: control.toolOption.nibType
                })
            }
        });
        canvas.addEventListener('mouseup', function (e) {
            e.preventDefault();
            downFlag = 0;
        });
    }
};
window.onbeforeunload = function (e) {
    e.preventDefault();
    // 防止错误关闭/刷新
    if (e) {
        // e.returnValue = '真的要离开吗?'
    }
    // return '真的要离开吗?'
};
