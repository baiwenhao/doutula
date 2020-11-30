var WebP = new Image();
WebP.onload = WebP.onerror = function(){
    window.supportWebP = WebP.height == 1;
};
WebP.src = "data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBoAAAAwAQCdASoBAAEAAAAMJaQAA3AA/v89WAAAAA==";