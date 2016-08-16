/** 
 * 颜色选择器
 */

(function (window, document) {
    var pluginName = 'simpleColor';

    var simpleColor = function (obj) {
        var option = {
            width: obj.dataset.width || '120',
            height: obj.dataset.height || '40',
        };

        obj.style.position = 'relative';
        obj.style.height = option.height + 'px';
        obj.style.width = option.width + 'px';

        var innerDom = '<input type="color" style="position:absolute; width:30%;height:100%;box-sizing: border-box;"><input type="text" style="width:100%; height:100%;box-sizing: border-box;padding-left:32%;">';
        obj.innerHTML = innerDom;

        this.initColorChangeEvent(obj);
        this.initTextBlurEvent(obj);

    };

    simpleColor.prototype.initColorChangeEvent = function (obj) {
        obj.querySelector('[type=color').addEventListener('change', function (e) {
            var value = e.target.value;
            obj.querySelector('[type=text]').value = value;
            console.log(value);
        });
    };

    simpleColor.prototype.initTextBlurEvent = function (obj) {
        obj.querySelector('[type=text').addEventListener('blur', function (e) {
            var value = e.target.value;
            var reg = /^#[A-Fa-f0-9]{6}/;
            if (reg.test(value)) {
                obj.querySelector('[type=color]').value = value;
            } else {
                console.log('数据格式出现问题，请重现校验');
            }
        });
    };

    window[pluginName] = simpleColor;

})(window, document);