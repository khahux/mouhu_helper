(function() {
    'use strict';
    let style = document.createElement('style')
    style.innerHTML = `.Modal-wrapper{display:none!important;}
    html {overflow: initial!important;}
    `
    window.document.head.append(style)
    window.onload = function () {
        var e = document.querySelector('.Modal-wrapper');
        if (e != null) {
            e.remove();
            console.log('modal closed.');
        }
    }
})();
