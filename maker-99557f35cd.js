function resizeCanvasIfNeeded(t) {
    var e = t.targetCanvas
      , i = e.width
      , n = e.height
      , r = t.destinationWidth
      , s = t.destinationHeight;
    i === r && n === s || (e.width = r,
    e.height = s)
}
function copyGLTo2DDrawImage(t, e) {
    var i = t.canvas
      , n = e.targetCanvas
      , r = n.getContext("2d");
    r.translate(0, n.height),
    r.scale(1, -1);
    var s = i.height - n.height;
    r.drawImage(i, 0, s, n.width, n.height, 0, 0, n.width, n.height)
}
function copyGLTo2DPutImageData(t, e) {
    var i = e.targetCanvas
      , n = i.getContext("2d")
      , r = e.destinationWidth
      , s = e.destinationHeight
      , o = r * s * 4
      , a = new Uint8Array(this.imageBuffer,0,o)
      , h = new Uint8ClampedArray(this.imageBuffer,0,o);
    t.readPixels(0, 0, r, s, t.RGBA, t.UNSIGNED_BYTE, a);
    var c = new ImageData(h,r,s);
    n.putImageData(c, 0, 0)
}
function checkPlatform() {
    var t;
    return navigator.userAgent.indexOf("Win") !== -1 && (t = "Windows"),
    navigator.userAgent.indexOf("Mac") !== -1 && (t = "Macintosh"),
    navigator.userAgent.indexOf("Linux") !== -1 && (t = "Linux"),
    navigator.userAgent.indexOf("Android") !== -1 && (t = "Android"),
    navigator.userAgent.indexOf("like Mac") !== -1 && (t = "IOS"),
    t
}
function isCanvasSupported() {
    var t = document.createElement("canvas");
    return !(!t.getContext || !t.getContext("2d"))
}
function switchIt(t, e) {
    "free_draw" === t && ("on" === e ? ($("#free_draw").addClass("active"),
    canvas.isDrawingMode = !0) : "off" === e && ($("#free_draw").removeClass("active"),
    canvas.isDrawingMode = !1)),
    "add_text" === t && ("on" === e ? ($("#add-text").addClass("active"),
    canvas.defaultCursor = "text",
    rect.hoverCursor = "text") : "off" === e && ($("#add-text").removeClass("active"),
    canvas.defaultCursor = "default",
    rect.hoverCursor = "default")),
    "drag_mode" === t && ("on" === e ? ($("#magic").html($("#drag_mode").html()),
    $("#drag_mode").addClass("active"),
    canvas.defaultCursor = "default",
    rect.hoverCursor = "default") : "off" === e && $("#drag_mode").removeClass("active"))
}
function currentMode(t) {
    return t ? "free_draw" === t ? $("#free_draw").hasClass("active") || "free_draw" === $("#magic").data("mode") : "add_text" === t ? $("#add-text").hasClass("active") || "add-text" === $("#magic").data("mode") : "drag_mode" === t ? $("#drag_mode").hasClass("active") || "drag_mode" === $("#magic").data("mode") : void 0 : $("#magic").data("mode") || $(".toolbar div[class~=active]").data("mode")
}
function mobileCheck() {
    var t = !1;
    return function(e) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    $(window).width() <= 768 && (t = !0),
    t
}
function record(t, e) {
    var i;
    i = mobileCheck() ? "手机端" : "PC端",
    "undefined" != typeof _czc && _czc.push(["_trackEvent", t, e, i])
}
var fabric = fabric || {
    version: "2.0.0-rc.4"
};
"undefined" != typeof exports && (exports.fabric = fabric),
"undefined" != typeof document && "undefined" != typeof window ? (fabric.document = document,
fabric.window = window) : (fabric.document = require("jsdom").jsdom(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"), {
    features: {
        FetchExternalResources: ["img"]
    }
}),
fabric.jsdomImplForWrapper = require("jsdom/lib/jsdom/living/generated/utils").implForWrapper,
fabric.nodeCanvas = require("jsdom/lib/jsdom/utils").Canvas,
fabric.window = fabric.document.defaultView,
DOMParser = require("xmldom").DOMParser),
fabric.isTouchSupported = "ontouchstart"in fabric.window,
fabric.isLikelyNode = "undefined" != typeof Buffer && "undefined" == typeof window,
fabric.SHARED_ATTRIBUTES = ["display", "transform", "fill", "fill-opacity", "fill-rule", "opacity", "stroke", "stroke-dasharray", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "id", "paint-order", "instantiated_by_use"],
fabric.DPI = 96,
fabric.reNum = "(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:e[-+]?\\d+)?)",
fabric.fontPaths = {},
fabric.iMatrix = [1, 0, 0, 1, 0, 0],
fabric.canvasModule = "canvas",
fabric.perfLimitSizeTotal = 2097152,
fabric.maxCacheSideLimit = 4096,
fabric.minCacheSideLimit = 256,
fabric.charWidthsCache = {},
fabric.textureSize = 2048,
fabric.enableGLFiltering = !0,
fabric.devicePixelRatio = fabric.window.devicePixelRatio || fabric.window.webkitDevicePixelRatio || fabric.window.mozDevicePixelRatio || 1,
fabric.browserShadowBlurConstant = 1,
fabric.initFilterBackend = function() {
    return fabric.enableGLFiltering && fabric.isWebglSupported && fabric.isWebglSupported(fabric.textureSize) ? new fabric.WebglFilterBackend({
        tileSize: fabric.textureSize
    }) : fabric.Canvas2dFilterBackend ? new fabric.Canvas2dFilterBackend : void 0
}
,
"undefined" != typeof document && "undefined" != typeof window && (window.fabric = fabric),
function() {
    function t(t, e) {
        if (this.__eventListeners[t]) {
            var i = this.__eventListeners[t];
            e ? i[i.indexOf(e)] = !1 : fabric.util.array.fill(i, !1)
        }
    }
    function e(t, e) {
        if (this.__eventListeners || (this.__eventListeners = {}),
        1 === arguments.length)
            for (var i in t)
                this.on(i, t[i]);
        else
            this.__eventListeners[t] || (this.__eventListeners[t] = []),
            this.__eventListeners[t].push(e);
        return this
    }
    function i(e, i) {
        if (this.__eventListeners) {
            if (0 === arguments.length)
                for (e in this.__eventListeners)
                    t.call(this, e);
            else if (1 === arguments.length && "object" == typeof arguments[0])
                for (var n in e)
                    t.call(this, n, e[n]);
            else
                t.call(this, e, i);
            return this
        }
    }
    function n(t, e) {
        if (this.__eventListeners) {
            var i = this.__eventListeners[t];
            if (i) {
                for (var n = 0, r = i.length; n < r; n++)
                    i[n] && i[n].call(this, e || {});
                return this.__eventListeners[t] = i.filter(function(t) {
                    return t !== !1
                }),
                this
            }
        }
    }
    fabric.Observable = {
        observe: e,
        stopObserving: i,
        fire: n,
        on: e,
        off: i,
        trigger: n
    }
}(),
fabric.Collection = {
    _objects: [],
    add: function() {
        if (this._objects.push.apply(this._objects, arguments),
        this._onObjectAdded)
            for (var t = 0, e = arguments.length; t < e; t++)
                this._onObjectAdded(arguments[t]);
        return this.renderOnAddRemove && this.requestRenderAll(),
        this
    },
    insertAt: function(t, e, i) {
        var n = this.getObjects();
        return i ? n[e] = t : n.splice(e, 0, t),
        this._onObjectAdded && this._onObjectAdded(t),
        this.renderOnAddRemove && this.requestRenderAll(),
        this
    },
    remove: function() {
        for (var t, e = this.getObjects(), i = !1, n = 0, r = arguments.length; n < r; n++)
            t = e.indexOf(arguments[n]),
            t !== -1 && (i = !0,
            e.splice(t, 1),
            this._onObjectRemoved && this._onObjectRemoved(arguments[n]));
        return this.renderOnAddRemove && i && this.requestRenderAll(),
        this
    },
    forEachObject: function(t, e) {
        for (var i = this.getObjects(), n = 0, r = i.length; n < r; n++)
            t.call(e, i[n], n, i);
        return this
    },
    getObjects: function(t) {
        return "undefined" == typeof t ? this._objects : this._objects.filter(function(e) {
            return e.type === t
        })
    },
    item: function(t) {
        return this.getObjects()[t]
    },
    isEmpty: function() {
        return 0 === this.getObjects().length
    },
    size: function() {
        return this.getObjects().length
    },
    contains: function(t) {
        return this.getObjects().indexOf(t) > -1
    },
    complexity: function() {
        return this.getObjects().reduce(function(t, e) {
            return t += e.complexity ? e.complexity() : 0
        }, 0)
    }
},
fabric.CommonMethods = {
    _setOptions: function(t) {
        for (var e in t)
            this.set(e, t[e])
    },
    _initGradient: function(t, e) {
        !t || !t.colorStops || t instanceof fabric.Gradient || this.set(e, new fabric.Gradient(t))
    },
    _initPattern: function(t, e, i) {
        !t || !t.source || t instanceof fabric.Pattern ? i && i() : this.set(e, new fabric.Pattern(t,i))
    },
    _initClipping: function(t) {
        if (t.clipTo && "string" == typeof t.clipTo) {
            var e = fabric.util.getFunctionBody(t.clipTo);
            "undefined" != typeof e && (this.clipTo = new Function("ctx",e))
        }
    },
    _setObject: function(t) {
        for (var e in t)
            this._set(e, t[e])
    },
    set: function(t, e) {
        return "object" == typeof t ? this._setObject(t) : "function" == typeof e && "clipTo" !== t ? this._set(t, e(this.get(t))) : this._set(t, e),
        this
    },
    _set: function(t, e) {
        this[t] = e
    },
    toggle: function(t) {
        var e = this.get(t);
        return "boolean" == typeof e && this.set(t, !e),
        this
    },
    get: function(t) {
        return this[t]
    }
},
function(t) {
    var e = Math.sqrt
      , i = Math.atan2
      , n = Math.pow
      , r = Math.abs
      , s = Math.PI / 180;
    fabric.util = {
        removeFromArray: function(t, e) {
            var i = t.indexOf(e);
            return i !== -1 && t.splice(i, 1),
            t
        },
        getRandomInt: function(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        },
        degreesToRadians: function(t) {
            return t * s
        },
        radiansToDegrees: function(t) {
            return t / s
        },
        rotatePoint: function(t, e, i) {
            t.subtractEquals(e);
            var n = fabric.util.rotateVector(t, i);
            return new fabric.Point(n.x,n.y).addEquals(e)
        },
        rotateVector: function(t, e) {
            var i = Math.sin(e)
              , n = Math.cos(e)
              , r = t.x * n - t.y * i
              , s = t.x * i + t.y * n;
            return {
                x: r,
                y: s
            }
        },
        transformPoint: function(t, e, i) {
            return i ? new fabric.Point(e[0] * t.x + e[2] * t.y,e[1] * t.x + e[3] * t.y) : new fabric.Point(e[0] * t.x + e[2] * t.y + e[4],e[1] * t.x + e[3] * t.y + e[5])
        },
        makeBoundingBoxFromPoints: function(t) {
            var e = [t[0].x, t[1].x, t[2].x, t[3].x]
              , i = fabric.util.array.min(e)
              , n = fabric.util.array.max(e)
              , r = n - i
              , s = [t[0].y, t[1].y, t[2].y, t[3].y]
              , o = fabric.util.array.min(s)
              , a = fabric.util.array.max(s)
              , h = a - o;
            return {
                left: i,
                top: o,
                width: r,
                height: h
            }
        },
        invertTransform: function(t) {
            var e = 1 / (t[0] * t[3] - t[1] * t[2])
              , i = [e * t[3], -e * t[1], -e * t[2], e * t[0]]
              , n = fabric.util.transformPoint({
                x: t[4],
                y: t[5]
            }, i, !0);
            return i[4] = -n.x,
            i[5] = -n.y,
            i
        },
        toFixed: function(t, e) {
            return parseFloat(Number(t).toFixed(e))
        },
        parseUnit: function(t, e) {
            var i = /\D{0,2}$/.exec(t)
              , n = parseFloat(t);
            switch (e || (e = fabric.Text.DEFAULT_SVG_FONT_SIZE),
            i[0]) {
            case "mm":
                return n * fabric.DPI / 25.4;
            case "cm":
                return n * fabric.DPI / 2.54;
            case "in":
                return n * fabric.DPI;
            case "pt":
                return n * fabric.DPI / 72;
            case "pc":
                return n * fabric.DPI / 72 * 12;
            case "em":
                return n * e;
            default:
                return n
            }
        },
        falseFunction: function() {
            return !1
        },
        getKlass: function(t, e) {
            return t = fabric.util.string.camelize(t.charAt(0).toUpperCase() + t.slice(1)),
            fabric.util.resolveNamespace(e)[t]
        },
        getSvgAttributes: function(t) {
            var e = ["instantiated_by_use", "style", "id", "class"];
            switch (t) {
            case "linearGradient":
                e = e.concat(["x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform"]);
                break;
            case "radialGradient":
                e = e.concat(["gradientUnits", "gradientTransform", "cx", "cy", "r", "fx", "fy", "fr"]);
                break;
            case "stop":
                e = e.concat(["offset", "stop-color", "stop-opacity"])
            }
            return e
        },
        resolveNamespace: function(e) {
            if (!e)
                return fabric;
            var i, n = e.split("."), r = n.length, s = t || fabric.window;
            for (i = 0; i < r; ++i)
                s = s[n[i]];
            return s
        },
        loadImage: function(t, e, i, n) {
            if (!t)
                return void (e && e.call(i, t));
            var r = fabric.util.createImage()
              , s = function() {
                e && e.call(i, r),
                r = r.onload = r.onerror = null
            };
            r.onload = s,
            r.onerror = function() {
                fabric.log("Error loading " + r.src),
                e && e.call(i, null, !0),
                r = r.onload = r.onerror = null
            }
            ,
            0 !== t.indexOf("data") && n && (r.crossOrigin = n),
            "data:image/svg" === t.substring(0, 14) && (r.onload = null,
            fabric.util.loadImageInDom(r, s)),
            r.src = t
        },
        loadImageInDom: function(t, e) {
            var i = fabric.document.createElement("div");
            i.style.width = i.style.height = "1px",
            i.style.left = i.style.top = "-100%",
            i.style.position = "absolute",
            i.appendChild(t),
            fabric.document.querySelector("body").appendChild(i),
            t.onload = function() {
                e(),
                i.parentNode.removeChild(i),
                i = null
            }
        },
        enlivenObjects: function(t, e, i, n) {
            function r() {
                ++o === a && e && e(s)
            }
            t = t || [];
            var s = []
              , o = 0
              , a = t.length;
            return a ? void t.forEach(function(t, e) {
                if (!t || !t.type)
                    return void r();
                var o = fabric.util.getKlass(t.type, i);
                o.fromObject(t, function(i, o) {
                    o || (s[e] = i),
                    n && n(t, i, o),
                    r()
                })
            }) : void (e && e(s))
        },
        enlivenPatterns: function(t, e) {
            function i() {
                ++r === s && e && e(n)
            }
            t = t || [];
            var n = []
              , r = 0
              , s = t.length;
            return s ? void t.forEach(function(t, e) {
                t && t.source ? new fabric.Pattern(t,function(t) {
                    n[e] = t,
                    i()
                }
                ) : (n[e] = t,
                i())
            }) : void (e && e(n))
        },
        groupSVGElements: function(t, e, i) {
            var n;
            return 1 === t.length ? t[0] : (e && (e.width && e.height ? e.centerPoint = {
                x: e.width / 2,
                y: e.height / 2
            } : (delete e.width,
            delete e.height)),
            n = new fabric.Group(t,e),
            "undefined" != typeof i && (n.sourcePath = i),
            n)
        },
        populateWithProperties: function(t, e, i) {
            if (i && "[object Array]" === Object.prototype.toString.call(i))
                for (var n = 0, r = i.length; n < r; n++)
                    i[n]in t && (e[i[n]] = t[i[n]])
        },
        drawDashedLine: function(t, n, r, s, o, a) {
            var h = s - n
              , c = o - r
              , l = e(h * h + c * c)
              , u = i(c, h)
              , f = a.length
              , d = 0
              , p = !0;
            for (t.save(),
            t.translate(n, r),
            t.moveTo(0, 0),
            t.rotate(u),
            n = 0; l > n; )
                n += a[d++ % f],
                n > l && (n = l),
                t[p ? "lineTo" : "moveTo"](n, 0),
                p = !p;
            t.restore()
        },
        createCanvasElement: function() {
            return fabric.document.createElement("canvas")
        },
        createImage: function() {
            return fabric.document.createElement("img")
        },
        clipContext: function(t, e) {
            e.save(),
            e.beginPath(),
            t.clipTo(e),
            e.clip()
        },
        multiplyTransformMatrices: function(t, e, i) {
            return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], i ? 0 : t[0] * e[4] + t[2] * e[5] + t[4], i ? 0 : t[1] * e[4] + t[3] * e[5] + t[5]]
        },
        qrDecompose: function(t) {
            var r = i(t[1], t[0])
              , o = n(t[0], 2) + n(t[1], 2)
              , a = e(o)
              , h = (t[0] * t[3] - t[2] * t[1]) / a
              , c = i(t[0] * t[2] + t[1] * t[3], o);
            return {
                angle: r / s,
                scaleX: a,
                scaleY: h,
                skewX: c / s,
                skewY: 0,
                translateX: t[4],
                translateY: t[5]
            }
        },
        customTransformMatrix: function(t, e, i) {
            var n = [1, 0, r(Math.tan(i * s)), 1]
              , o = [r(t), 0, 0, r(e)];
            return fabric.util.multiplyTransformMatrices(o, n, !0)
        },
        resetObjectTransform: function(t) {
            t.scaleX = 1,
            t.scaleY = 1,
            t.skewX = 0,
            t.skewY = 0,
            t.flipX = !1,
            t.flipY = !1,
            t.rotate(0)
        },
        getFunctionBody: function(t) {
            return (String(t).match(/function[^{]*\{([\s\S]*)\}/) || {})[1]
        },
        isTransparent: function(t, e, i, n) {
            n > 0 && (e > n ? e -= n : e = 0,
            i > n ? i -= n : i = 0);
            var r, s, o = !0, a = t.getImageData(e, i, 2 * n || 1, 2 * n || 1), h = a.data.length;
            for (r = 3; r < h && (s = a.data[r],
            o = s <= 0,
            o !== !1); r += 4)
                ;
            return a = null,
            o
        },
        parsePreserveAspectRatioAttribute: function(t) {
            var e, i = "meet", n = "Mid", r = "Mid", s = t.split(" ");
            return s && s.length && (i = s.pop(),
            "meet" !== i && "slice" !== i ? (e = i,
            i = "meet") : s.length && (e = s.pop())),
            n = "none" !== e ? e.slice(1, 4) : "none",
            r = "none" !== e ? e.slice(5, 8) : "none",
            {
                meetOrSlice: i,
                alignX: n,
                alignY: r
            }
        },
        clearFabricFontCache: function(t) {
            t ? fabric.charWidthsCache[t] && delete fabric.charWidthsCache[t] : fabric.charWidthsCache = {}
        },
        limitDimsByArea: function(t, e) {
            var i = Math.sqrt(e * t)
              , n = Math.floor(e / i);
            return {
                x: Math.floor(i),
                y: n
            }
        },
        capValue: function(t, e, i) {
            return Math.max(t, Math.min(e, i))
        },
        findScaleToFit: function(t, e) {
            return Math.min(e.width / t.width, e.height / t.height)
        },
        findScaleToCover: function(t, e) {
            return Math.max(e.width / t.width, e.height / t.height)
        }
    }
}("undefined" != typeof exports ? exports : this),
function() {
    function t(t, n, s, o, h, c, l) {
        var u = a.call(arguments);
        if (r[u])
            return r[u];
        var f = Math.PI
          , d = l * f / 180
          , p = Math.sin(d)
          , g = Math.cos(d)
          , v = 0
          , m = 0;
        s = Math.abs(s),
        o = Math.abs(o);
        var _ = -g * t * .5 - p * n * .5
          , b = -g * n * .5 + p * t * .5
          , y = s * s
          , x = o * o
          , C = b * b
          , w = _ * _
          , S = y * x - y * C - x * w
          , T = 0;
        if (S < 0) {
            var O = Math.sqrt(1 - S / (y * x));
            s *= O,
            o *= O
        } else
            T = (h === c ? -1 : 1) * Math.sqrt(S / (y * C + x * w));
        var E = T * s * b / o
          , k = -T * o * _ / s
          , D = g * E - p * k + .5 * t
          , P = p * E + g * k + .5 * n
          , j = i(1, 0, (_ - E) / s, (b - k) / o)
          , A = i((_ - E) / s, (b - k) / o, (-_ - E) / s, (-b - k) / o);
        0 === c && A > 0 ? A -= 2 * f : 1 === c && A < 0 && (A += 2 * f);
        for (var M = Math.ceil(Math.abs(A / f * 2)), I = [], F = A / M, L = 8 / 3 * Math.sin(F / 4) * Math.sin(F / 4) / Math.sin(F / 2), B = j + F, R = 0; R < M; R++)
            I[R] = e(j, B, g, p, s, o, D, P, L, v, m),
            v = I[R][4],
            m = I[R][5],
            j = B,
            B += F;
        return r[u] = I,
        I
    }
    function e(t, e, i, n, r, o, h, c, l, u, f) {
        var d = a.call(arguments);
        if (s[d])
            return s[d];
        var p = Math.cos(t)
          , g = Math.sin(t)
          , v = Math.cos(e)
          , m = Math.sin(e)
          , _ = i * r * v - n * o * m + h
          , b = n * r * v + i * o * m + c
          , y = u + l * (-i * r * g - n * o * p)
          , x = f + l * (-n * r * g + i * o * p)
          , C = _ + l * (i * r * m + n * o * v)
          , w = b + l * (n * r * m - i * o * v);
        return s[d] = [y, x, C, w, _, b],
        s[d]
    }
    function i(t, e, i, n) {
        var r = Math.atan2(e, t)
          , s = Math.atan2(n, i);
        return s >= r ? s - r : 2 * Math.PI - (r - s)
    }
    function n(t, e, i, n, r, s, h, c) {
        var l = a.call(arguments);
        if (o[l])
            return o[l];
        var u, f, d, p, g, v, m, _, b = Math.sqrt, y = Math.min, x = Math.max, C = Math.abs, w = [], S = [[], []];
        f = 6 * t - 12 * i + 6 * r,
        u = -3 * t + 9 * i - 9 * r + 3 * h,
        d = 3 * i - 3 * t;
        for (var T = 0; T < 2; ++T)
            if (T > 0 && (f = 6 * e - 12 * n + 6 * s,
            u = -3 * e + 9 * n - 9 * s + 3 * c,
            d = 3 * n - 3 * e),
            C(u) < 1e-12) {
                if (C(f) < 1e-12)
                    continue;
                p = -d / f,
                0 < p && p < 1 && w.push(p)
            } else
                m = f * f - 4 * d * u,
                m < 0 || (_ = b(m),
                g = (-f + _) / (2 * u),
                0 < g && g < 1 && w.push(g),
                v = (-f - _) / (2 * u),
                0 < v && v < 1 && w.push(v));
        for (var O, E, k, D = w.length, P = D; D--; )
            p = w[D],
            k = 1 - p,
            O = k * k * k * t + 3 * k * k * p * i + 3 * k * p * p * r + p * p * p * h,
            S[0][D] = O,
            E = k * k * k * e + 3 * k * k * p * n + 3 * k * p * p * s + p * p * p * c,
            S[1][D] = E;
        S[0][P] = t,
        S[1][P] = e,
        S[0][P + 1] = h,
        S[1][P + 1] = c;
        var j = [{
            x: y.apply(null, S[0]),
            y: y.apply(null, S[1])
        }, {
            x: x.apply(null, S[0]),
            y: x.apply(null, S[1])
        }];
        return o[l] = j,
        j
    }
    var r = {}
      , s = {}
      , o = {}
      , a = Array.prototype.join;
    fabric.util.drawArc = function(e, i, n, r) {
        for (var s = r[0], o = r[1], a = r[2], h = r[3], c = r[4], l = r[5], u = r[6], f = [[], [], [], []], d = t(l - i, u - n, s, o, h, c, a), p = 0, g = d.length; p < g; p++)
            f[p][0] = d[p][0] + i,
            f[p][1] = d[p][1] + n,
            f[p][2] = d[p][2] + i,
            f[p][3] = d[p][3] + n,
            f[p][4] = d[p][4] + i,
            f[p][5] = d[p][5] + n,
            e.bezierCurveTo.apply(e, f[p])
    }
    ,
    fabric.util.getBoundsOfArc = function(e, i, r, s, o, a, h, c, l) {
        for (var u, f = 0, d = 0, p = [], g = t(c - e, l - i, r, s, a, h, o), v = 0, m = g.length; v < m; v++)
            u = n(f, d, g[v][0], g[v][1], g[v][2], g[v][3], g[v][4], g[v][5]),
            p.push({
                x: u[0].x + e,
                y: u[0].y + i
            }),
            p.push({
                x: u[1].x + e,
                y: u[1].y + i
            }),
            f = g[v][4],
            d = g[v][5];
        return p
    }
    ,
    fabric.util.getBoundsOfCurve = n
}(),
function() {
    function t(t, e) {
        for (var i = s.call(arguments, 2), n = [], r = 0, o = t.length; r < o; r++)
            n[r] = i.length ? t[r][e].apply(t[r], i) : t[r][e].call(t[r]);
        return n
    }
    function e(t, e) {
        return r(t, e, function(t, e) {
            return t >= e
        })
    }
    function i(t, e) {
        return r(t, e, function(t, e) {
            return t < e
        })
    }
    function n(t, e) {
        for (var i = t.length; i--; )
            t[i] = e;
        return t
    }
    function r(t, e, i) {
        if (t && 0 !== t.length) {
            var n = t.length - 1
              , r = e ? t[n][e] : t[n];
            if (e)
                for (; n--; )
                    i(t[n][e], r) && (r = t[n][e]);
            else
                for (; n--; )
                    i(t[n], r) && (r = t[n]);
            return r
        }
    }
    var s = Array.prototype.slice;
    fabric.util.array = {
        fill: n,
        invoke: t,
        min: i,
        max: e
    }
}(),
function() {
    function t(e, i, n) {
        if (n)
            if (!fabric.isLikelyNode && i instanceof Element)
                e = i;
            else if (i instanceof Array) {
                e = [];
                for (var r = 0, s = i.length; r < s; r++)
                    e[r] = t({}, i[r], n)
            } else if (i && "object" == typeof i)
                for (var o in i)
                    i.hasOwnProperty(o) && (e[o] = t({}, i[o], n));
            else
                e = i;
        else
            for (var o in i)
                e[o] = i[o];
        return e
    }
    function e(e, i) {
        return t({}, e, i)
    }
    fabric.util.object = {
        extend: t,
        clone: e
    },
    fabric.util.object.extend(fabric.util, fabric.Observable)
}(),
function() {
    function t(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }
    function e(t, e) {
        return t.charAt(0).toUpperCase() + (e ? t.slice(1) : t.slice(1).toLowerCase())
    }
    function i(t) {
        return t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function n(t) {
        var e, i = 0, n = [];
        for (i = 0,
        e; i < t.length; i++)
            (e = r(t, i)) !== !1 && n.push(e);
        return n
    }
    function r(t, e) {
        var i = t.charCodeAt(e);
        if (isNaN(i))
            return "";
        if (i < 55296 || i > 57343)
            return t.charAt(e);
        if (55296 <= i && i <= 56319) {
            if (t.length <= e + 1)
                throw "High surrogate without following low surrogate";
            var n = t.charCodeAt(e + 1);
            if (56320 > n || n > 57343)
                throw "High surrogate without following low surrogate";
            return t.charAt(e) + t.charAt(e + 1)
        }
        if (0 === e)
            throw "Low surrogate without preceding high surrogate";
        var r = t.charCodeAt(e - 1);
        if (55296 > r || r > 56319)
            throw "Low surrogate without preceding high surrogate";
        return !1
    }
    fabric.util.string = {
        camelize: t,
        capitalize: e,
        escapeXml: i,
        graphemeSplit: n
    }
}(),
function() {
    function t() {}
    function e(t) {
        for (var e = null, i = this; i.constructor.superclass; ) {
            var r = i.constructor.superclass.prototype[t];
            if (i[t] !== r) {
                e = r;
                break
            }
            i = i.constructor.superclass.prototype
        }
        if (e)
            return arguments.length > 1 ? e.apply(this, n.call(arguments, 1)) : e.call(this)
    }
    function i() {
        function i() {
            this.initialize.apply(this, arguments)
        }
        var s = null
          , a = n.call(arguments, 0);
        "function" == typeof a[0] && (s = a.shift()),
        i.superclass = s,
        i.subclasses = [],
        s && (t.prototype = s.prototype,
        i.prototype = new t,
        s.subclasses.push(i));
        for (var h = 0, c = a.length; h < c; h++)
            o(i, a[h], s);
        return i.prototype.initialize || (i.prototype.initialize = r),
        i.prototype.constructor = i,
        i.prototype.callSuper = e,
        i
    }
    var n = Array.prototype.slice
      , r = function() {}
      , s = function() {
        for (var t in {
            toString: 1
        })
            if ("toString" === t)
                return !1;
        return !0
    }()
      , o = function(t, e, i) {
        for (var n in e)
            n in t.prototype && "function" == typeof t.prototype[n] && (e[n] + "").indexOf("callSuper") > -1 ? t.prototype[n] = function(t) {
                return function() {
                    var n = this.constructor.superclass;
                    this.constructor.superclass = i;
                    var r = e[t].apply(this, arguments);
                    if (this.constructor.superclass = n,
                    "initialize" !== t)
                        return r
                }
            }(n) : t.prototype[n] = e[n],
            s && (e.toString !== Object.prototype.toString && (t.prototype.toString = e.toString),
            e.valueOf !== Object.prototype.valueOf && (t.prototype.valueOf = e.valueOf))
    };
    fabric.util.createClass = i
}(),
function() {
    function t(t) {
        var e, i, n = Array.prototype.slice.call(arguments, 1), r = n.length;
        for (i = 0; i < r; i++)
            if (e = typeof t[n[i]],
            !/^(?:function|object|unknown)$/.test(e))
                return !1;
        return !0
    }
    function e(t, e) {
        return {
            handler: e,
            wrappedHandler: i(t, e)
        }
    }
    function i(t, e) {
        return function(i) {
            e.call(o(t), i || fabric.window.event)
        }
    }
    function n(t, e) {
        return function(i) {
            if (g[t] && g[t][e])
                for (var n = g[t][e], r = 0, s = n.length; r < s; r++)
                    n[r].call(this, i || fabric.window.event)
        }
    }
    function r(t) {
        t || (t = fabric.window.event);
        var e = t.target || (typeof t.srcElement !== h ? t.srcElement : null)
          , i = fabric.util.getScrollLeftTop(e);
        return {
            x: v(t) + i.left,
            y: m(t) + i.top
        }
    }
    function s(t, e, i) {
        var n = "touchend" === t.type ? "changedTouches" : "touches";
        return t[n] && t[n][0] ? t[n][0][e] - (t[n][0][e] - t[n][0][i]) || t[i] : t[i]
    }
    var o, a, h = "unknown", c = function() {
        var t = 0;
        return function(e) {
            return e.__uniqueID || (e.__uniqueID = "uniqueID__" + t++)
        }
    }();
    !function() {
        var t = {};
        o = function(e) {
            return t[e]
        }
        ,
        a = function(e, i) {
            t[e] = i
        }
    }();
    var l, u, f = t(fabric.document.documentElement, "addEventListener", "removeEventListener") && t(fabric.window, "addEventListener", "removeEventListener"), d = t(fabric.document.documentElement, "attachEvent", "detachEvent") && t(fabric.window, "attachEvent", "detachEvent"), p = {}, g = {};
    f ? (l = function(t, e, i, n) {
        t && t.addEventListener(e, i, !d && n)
    }
    ,
    u = function(t, e, i, n) {
        t && t.removeEventListener(e, i, !d && n)
    }
    ) : d ? (l = function(t, i, n) {
        if (t) {
            var r = c(t);
            a(r, t),
            p[r] || (p[r] = {}),
            p[r][i] || (p[r][i] = []);
            var s = e(r, n);
            p[r][i].push(s),
            t.attachEvent("on" + i, s.wrappedHandler)
        }
    }
    ,
    u = function(t, e, i) {
        if (t) {
            var n, r = c(t);
            if (p[r] && p[r][e])
                for (var s = 0, o = p[r][e].length; s < o; s++)
                    n = p[r][e][s],
                    n && n.handler === i && (t.detachEvent("on" + e, n.wrappedHandler),
                    p[r][e][s] = null)
        }
    }
    ) : (l = function(t, e, i) {
        if (t) {
            var r = c(t);
            if (g[r] || (g[r] = {}),
            !g[r][e]) {
                g[r][e] = [];
                var s = t["on" + e];
                s && g[r][e].push(s),
                t["on" + e] = n(r, e)
            }
            g[r][e].push(i)
        }
    }
    ,
    u = function(t, e, i) {
        if (t) {
            var n = c(t);
            if (g[n] && g[n][e])
                for (var r = g[n][e], s = 0, o = r.length; s < o; s++)
                    r[s] === i && r.splice(s, 1)
        }
    }
    ),
    fabric.util.addListener = l,
    fabric.util.removeListener = u;
    var v = function(t) {
        return t.clientX
    }
      , m = function(t) {
        return t.clientY
    };
    fabric.isTouchSupported && (v = function(t) {
        return s(t, "pageX", "clientX")
    }
    ,
    m = function(t) {
        return s(t, "pageY", "clientY")
    }
    ),
    fabric.util.getPointer = r
}(),
function() {
    function t(t, e) {
        var i = t.style;
        if (!i)
            return t;
        if ("string" == typeof e)
            return t.style.cssText += ";" + e,
            e.indexOf("opacity") > -1 ? s(t, e.match(/opacity:\s*(\d?\.?\d*)/)[1]) : t;
        for (var n in e)
            if ("opacity" === n)
                s(t, e[n]);
            else {
                var r = "float" === n || "cssFloat" === n ? "undefined" == typeof i.styleFloat ? "cssFloat" : "styleFloat" : n;
                i[r] = e[n]
            }
        return t
    }
    var e = fabric.document.createElement("div")
      , i = "string" == typeof e.style.opacity
      , n = "string" == typeof e.style.filter
      , r = /alpha\s*\(\s*opacity\s*=\s*([^\)]+)\)/
      , s = function(t) {
        return t
    };
    i ? s = function(t, e) {
        return t.style.opacity = e,
        t
    }
    : n && (s = function(t, e) {
        var i = t.style;
        return t.currentStyle && !t.currentStyle.hasLayout && (i.zoom = 1),
        r.test(i.filter) ? (e = e >= .9999 ? "" : "alpha(opacity=" + 100 * e + ")",
        i.filter = i.filter.replace(r, e)) : i.filter += " alpha(opacity=" + 100 * e + ")",
        t
    }
    ),
    fabric.util.setStyle = t
}(),
function() {
    function t(t) {
        return "string" == typeof t ? fabric.document.getElementById(t) : t
    }
    function e(t, e) {
        var i = fabric.document.createElement(t);
        for (var n in e)
            "class" === n ? i.className = e[n] : "for" === n ? i.htmlFor = e[n] : i.setAttribute(n, e[n]);
        return i
    }
    function i(t, e) {
        t && (" " + t.className + " ").indexOf(" " + e + " ") === -1 && (t.className += (t.className ? " " : "") + e)
    }
    function n(t, i, n) {
        return "string" == typeof i && (i = e(i, n)),
        t.parentNode && t.parentNode.replaceChild(i, t),
        i.appendChild(t),
        i
    }
    function r(t) {
        for (var e = 0, i = 0, n = fabric.document.documentElement, r = fabric.document.body || {
            scrollLeft: 0,
            scrollTop: 0
        }; t && (t.parentNode || t.host) && (t = t.parentNode || t.host,
        t === fabric.document ? (e = r.scrollLeft || n.scrollLeft || 0,
        i = r.scrollTop || n.scrollTop || 0) : (e += t.scrollLeft || 0,
        i += t.scrollTop || 0),
        1 !== t.nodeType || "fixed" !== t.style.position); )
            ;
        return {
            left: e,
            top: i
        }
    }
    function s(t) {
        var e, i, n = t && t.ownerDocument, s = {
            left: 0,
            top: 0
        }, o = {
            left: 0,
            top: 0
        }, a = {
            borderLeftWidth: "left",
            borderTopWidth: "top",
            paddingLeft: "left",
            paddingTop: "top"
        };
        if (!n)
            return o;
        for (var h in a)
            o[a[h]] += parseInt(u(t, h), 10) || 0;
        return e = n.documentElement,
        "undefined" != typeof t.getBoundingClientRect && (s = t.getBoundingClientRect()),
        i = r(t),
        {
            left: s.left + i.left - (e.clientLeft || 0) + o.left,
            top: s.top + i.top - (e.clientTop || 0) + o.top
        }
    }
    function o(t) {
        var e = fabric.jsdomImplForWrapper(t);
        return e._canvas || e._image
    }
    var a, h = Array.prototype.slice, c = function(t) {
        return h.call(t, 0)
    };
    try {
        a = c(fabric.document.childNodes)instanceof Array
    } catch (l) {}
    a || (c = function(t) {
        for (var e = new Array(t.length), i = t.length; i--; )
            e[i] = t[i];
        return e
    }
    );
    var u;
    u = fabric.document.defaultView && fabric.document.defaultView.getComputedStyle ? function(t, e) {
        var i = fabric.document.defaultView.getComputedStyle(t, null);
        return i ? i[e] : void 0
    }
    : function(t, e) {
        var i = t.style[e];
        return !i && t.currentStyle && (i = t.currentStyle[e]),
        i
    }
    ,
    function() {
        function t(t) {
            return "undefined" != typeof t.onselectstart && (t.onselectstart = fabric.util.falseFunction),
            n ? t.style[n] = "none" : "string" == typeof t.unselectable && (t.unselectable = "on"),
            t
        }
        function e(t) {
            return "undefined" != typeof t.onselectstart && (t.onselectstart = null),
            n ? t.style[n] = "" : "string" == typeof t.unselectable && (t.unselectable = ""),
            t
        }
        var i = fabric.document.documentElement.style
          , n = "userSelect"in i ? "userSelect" : "MozUserSelect"in i ? "MozUserSelect" : "WebkitUserSelect"in i ? "WebkitUserSelect" : "KhtmlUserSelect"in i ? "KhtmlUserSelect" : "";
        fabric.util.makeElementUnselectable = t,
        fabric.util.makeElementSelectable = e
    }(),
    function() {
        function t(t, e) {
            var i = fabric.document.getElementsByTagName("head")[0]
              , n = fabric.document.createElement("script")
              , r = !0;
            n.onload = n.onreadystatechange = function(t) {
                if (r) {
                    if ("string" == typeof this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)
                        return;
                    r = !1,
                    e(t || fabric.window.event),
                    n = n.onload = n.onreadystatechange = null
                }
            }
            ,
            n.src = t,
            i.appendChild(n)
        }
        fabric.util.getScript = t
    }(),
    fabric.util.getById = t,
    fabric.util.toArray = c,
    fabric.util.makeElement = e,
    fabric.util.addClass = i,
    fabric.util.wrapElement = n,
    fabric.util.getScrollLeftTop = r,
    fabric.util.getElementOffset = s,
    fabric.util.getElementStyle = u,
    fabric.util.getNodeCanvas = o
}(),
function() {
    function t(t, e) {
        return t + (/\?/.test(t) ? "&" : "?") + e
    }
    function e() {}
    function i(i, r) {
        r || (r = {});
        var s = r.method ? r.method.toUpperCase() : "GET"
          , o = r.onComplete || function() {}
          , a = n()
          , h = r.body || r.parameters;
        return a.onreadystatechange = function() {
            4 === a.readyState && (o(a),
            a.onreadystatechange = e)
        }
        ,
        "GET" === s && (h = null,
        "string" == typeof r.parameters && (i = t(i, r.parameters))),
        a.open(s, i, !0),
        "POST" !== s && "PUT" !== s || a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        a.send(h),
        a
    }
    var n = function() {
        for (var t = [function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        , function() {
            return new ActiveXObject("Msxml2.XMLHTTP")
        }
        , function() {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        }
        , function() {
            return new XMLHttpRequest
        }
        ], e = t.length; e--; )
            try {
                var i = t[e]();
                if (i)
                    return t[e]
            } catch (n) {}
    }();
    fabric.util.request = i
}(),
fabric.log = function() {}
,
fabric.warn = function() {}
,
"undefined" != typeof console && ["log", "warn"].forEach(function(t) {
    "undefined" != typeof console[t] && "function" == typeof console[t].apply && (fabric[t] = function() {}
    )
}),
function() {
    function t() {
        return !1
    }
    function e(e) {
        i(function(n) {
            e || (e = {});
            var r, s = n || +new Date, o = e.duration || 500, a = s + o, h = e.onChange || t, c = e.abort || t, l = e.onComplete || t, u = e.easing || function(t, e, i, n) {
                return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
            }
            , f = "startValue"in e ? e.startValue : 0, d = "endValue"in e ? e.endValue : 100, p = e.byValue || d - f;
            e.onStart && e.onStart(),
            function g(t) {
                if (c())
                    return void l(d, 1, 1);
                r = t || +new Date;
                var n = r > a ? o : r - s
                  , v = n / o
                  , m = u(n, f, p, o)
                  , _ = Math.abs((m - f) / p);
                return h(m, _, v),
                r > a ? void (e.onComplete && e.onComplete()) : void i(g)
            }(s)
        })
    }
    function i() {
        return r.apply(fabric.window, arguments)
    }
    function n() {
        return s.apply(fabric.window, arguments)
    }
    var r = fabric.window.requestAnimationFrame || fabric.window.webkitRequestAnimationFrame || fabric.window.mozRequestAnimationFrame || fabric.window.oRequestAnimationFrame || fabric.window.msRequestAnimationFrame || function(t) {
        return fabric.window.setTimeout(t, 1e3 / 60)
    }
      , s = fabric.window.cancelAnimationFrame || fabric.window.clearTimeout;
    fabric.util.animate = e,
    fabric.util.requestAnimFrame = i,
    fabric.util.cancelAnimFrame = n
}(),
function() {
    function t(t, e, i) {
        var n = "rgba(" + parseInt(t[0] + i * (e[0] - t[0]), 10) + "," + parseInt(t[1] + i * (e[1] - t[1]), 10) + "," + parseInt(t[2] + i * (e[2] - t[2]), 10);
        return n += "," + (t && e ? parseFloat(t[3] + i * (e[3] - t[3])) : 1),
        n += ")"
    }
    function e(e, i, n, r) {
        var s = new fabric.Color(e).getSource()
          , o = new fabric.Color(i).getSource();
        r = r || {},
        fabric.util.animate(fabric.util.object.extend(r, {
            duration: n || 500,
            startValue: s,
            endValue: o,
            byValue: o,
            easing: function(e, i, n, s) {
                var o = r.colorEasing ? r.colorEasing(e, s) : 1 - Math.cos(e / s * (Math.PI / 2));
                return t(i, n, o)
            }
        }))
    }
    fabric.util.animateColor = e
}(),
function() {
    function t(t, e, i, n) {
        return t < Math.abs(e) ? (t = e,
        n = i / 4) : n = 0 === e && 0 === t ? i / (2 * Math.PI) * Math.asin(1) : i / (2 * Math.PI) * Math.asin(e / t),
        {
            a: t,
            c: e,
            p: i,
            s: n
        }
    }
    function e(t, e, i) {
        return t.a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - t.s) * (2 * Math.PI) / t.p)
    }
    function i(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t + 1) + e
    }
    function n(t, e, i, n) {
        return t /= n / 2,
        t < 1 ? i / 2 * t * t * t + e : i / 2 * ((t -= 2) * t * t + 2) + e
    }
    function r(t, e, i, n) {
        return i * (t /= n) * t * t * t + e
    }
    function s(t, e, i, n) {
        return -i * ((t = t / n - 1) * t * t * t - 1) + e
    }
    function o(t, e, i, n) {
        return t /= n / 2,
        t < 1 ? i / 2 * t * t * t * t + e : -i / 2 * ((t -= 2) * t * t * t - 2) + e
    }
    function a(t, e, i, n) {
        return i * (t /= n) * t * t * t * t + e
    }
    function h(t, e, i, n) {
        return i * ((t = t / n - 1) * t * t * t * t + 1) + e
    }
    function c(t, e, i, n) {
        return t /= n / 2,
        t < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e
    }
    function l(t, e, i, n) {
        return -i * Math.cos(t / n * (Math.PI / 2)) + i + e
    }
    function u(t, e, i, n) {
        return i * Math.sin(t / n * (Math.PI / 2)) + e
    }
    function f(t, e, i, n) {
        return -i / 2 * (Math.cos(Math.PI * t / n) - 1) + e
    }
    function d(t, e, i, n) {
        return 0 === t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e
    }
    function p(t, e, i, n) {
        return t === n ? e + i : i * (-Math.pow(2, -10 * t / n) + 1) + e
    }
    function g(t, e, i, n) {
        return 0 === t ? e : t === n ? e + i : (t /= n / 2,
        t < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + e : i / 2 * (-Math.pow(2, -10 * --t) + 2) + e)
    }
    function v(t, e, i, n) {
        return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e
    }
    function m(t, e, i, n) {
        return i * Math.sqrt(1 - (t = t / n - 1) * t) + e
    }
    function _(t, e, i, n) {
        return t /= n / 2,
        t < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + e : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
    }
    function b(i, n, r, s) {
        var o = 1.70158
          , a = 0
          , h = r;
        if (0 === i)
            return n;
        if (i /= s,
        1 === i)
            return n + r;
        a || (a = .3 * s);
        var c = t(h, r, a, o);
        return -e(c, i, s) + n
    }
    function y(e, i, n, r) {
        var s = 1.70158
          , o = 0
          , a = n;
        if (0 === e)
            return i;
        if (e /= r,
        1 === e)
            return i + n;
        o || (o = .3 * r);
        var h = t(a, n, o, s);
        return h.a * Math.pow(2, -10 * e) * Math.sin((e * r - h.s) * (2 * Math.PI) / h.p) + h.c + i
    }
    function x(i, n, r, s) {
        var o = 1.70158
          , a = 0
          , h = r;
        if (0 === i)
            return n;
        if (i /= s / 2,
        2 === i)
            return n + r;
        a || (a = s * (.3 * 1.5));
        var c = t(h, r, a, o);
        return i < 1 ? -.5 * e(c, i, s) + n : c.a * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * s - c.s) * (2 * Math.PI) / c.p) * .5 + c.c + n
    }
    function C(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158),
        i * (t /= n) * t * ((r + 1) * t - r) + e
    }
    function w(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158),
        i * ((t = t / n - 1) * t * ((r + 1) * t + r) + 1) + e
    }
    function S(t, e, i, n, r) {
        return void 0 === r && (r = 1.70158),
        t /= n / 2,
        t < 1 ? i / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + e : i / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + e
    }
    function T(t, e, i, n) {
        return i - O(n - t, 0, i, n) + e
    }
    function O(t, e, i, n) {
        return (t /= n) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
    }
    function E(t, e, i, n) {
        return t < n / 2 ? .5 * T(2 * t, 0, i, n) + e : .5 * O(2 * t - n, 0, i, n) + .5 * i + e
    }
    fabric.util.ease = {
        easeInQuad: function(t, e, i, n) {
            return i * (t /= n) * t + e;
        },
        easeOutQuad: function(t, e, i, n) {
            return -i * (t /= n) * (t - 2) + e
        },
        easeInOutQuad: function(t, e, i, n) {
            return t /= n / 2,
            t < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e
        },
        easeInCubic: function(t, e, i, n) {
            return i * (t /= n) * t * t + e
        },
        easeOutCubic: i,
        easeInOutCubic: n,
        easeInQuart: r,
        easeOutQuart: s,
        easeInOutQuart: o,
        easeInQuint: a,
        easeOutQuint: h,
        easeInOutQuint: c,
        easeInSine: l,
        easeOutSine: u,
        easeInOutSine: f,
        easeInExpo: d,
        easeOutExpo: p,
        easeInOutExpo: g,
        easeInCirc: v,
        easeOutCirc: m,
        easeInOutCirc: _,
        easeInElastic: b,
        easeOutElastic: y,
        easeInOutElastic: x,
        easeInBack: C,
        easeOutBack: w,
        easeInOutBack: S,
        easeInBounce: T,
        easeOutBounce: O,
        easeInOutBounce: E
    }
}(),
function(t) {
    "use strict";
    function e(t) {
        return t in O ? O[t] : t
    }
    function i(t, e, i, n) {
        var r, s = "[object Array]" === Object.prototype.toString.call(e);
        if ("fill" !== t && "stroke" !== t || "none" !== e)
            if ("strokeDashArray" === t)
                e = "none" === e ? null : e.replace(/,/g, " ").split(/\s+/).map(function(t) {
                    return parseFloat(t)
                });
            else if ("transformMatrix" === t)
                e = i && i.transformMatrix ? x(i.transformMatrix, v.parseTransformAttribute(e)) : v.parseTransformAttribute(e);
            else if ("visible" === t)
                e = "none" !== e && "hidden" !== e,
                i && i.visible === !1 && (e = !1);
            else if ("opacity" === t)
                e = parseFloat(e),
                i && "undefined" != typeof i.opacity && (e *= i.opacity);
            else if ("textAnchor" === t)
                e = "start" === e ? "left" : "end" === e ? "right" : "center";
            else if ("paintFirst" === t) {
                var o = e.indexOf("fill")
                  , a = e.indexOf("stroke")
                  , e = "fill";
                o > -1 && a > -1 && a < o ? e = "stroke" : o === -1 && a > -1 && (e = "stroke")
            } else
                r = s ? e.map(y) : y(e, n);
        else
            e = "";
        return !s && isNaN(r) ? e : r
    }
    function n(t) {
        return new RegExp("^(" + t.join("|") + ")\\b","i")
    }
    function r(t) {
        for (var e in E)
            if ("undefined" != typeof t[E[e]] && "" !== t[e]) {
                if ("undefined" == typeof t[e]) {
                    if (!v.Object.prototype[e])
                        continue;
                    t[e] = v.Object.prototype[e]
                }
                if (0 !== t[e].indexOf("url(")) {
                    var i = new v.Color(t[e]);
                    t[e] = i.setAlpha(b(i.getAlpha() * t[E[e]], 2)).toRgba()
                }
            }
        return t
    }
    function s(t, e) {
        var i, n, r, s, o = [];
        for (r = 0,
        s = e.length; r < s; r++)
            i = e[r],
            n = t.getElementsByTagName(i),
            o = o.concat(Array.prototype.slice.call(n));
        return o
    }
    function o(t, e) {
        var i, n;
        t.replace(/;\s*$/, "").split(";").forEach(function(t) {
            var r = t.split(":");
            i = r[0].trim().toLowerCase(),
            n = r[1].trim(),
            e[i] = n
        })
    }
    function a(t, e) {
        var i, n;
        for (var r in t)
            "undefined" != typeof t[r] && (i = r.toLowerCase(),
            n = t[r],
            e[i] = n)
    }
    function h(t, e) {
        var i = {};
        for (var n in v.cssRules[e])
            if (c(t, n.split(" ")))
                for (var r in v.cssRules[e][n])
                    i[r] = v.cssRules[e][n][r];
        return i
    }
    function c(t, e) {
        var i, n = !0;
        return i = u(t, e.pop()),
        i && e.length && (n = l(t, e)),
        i && n && 0 === e.length
    }
    function l(t, e) {
        for (var i, n = !0; t.parentNode && 1 === t.parentNode.nodeType && e.length; )
            n && (i = e.pop()),
            t = t.parentNode,
            n = u(t, i);
        return 0 === e.length
    }
    function u(t, e) {
        var i, n, r = t.nodeName, s = t.getAttribute("class"), o = t.getAttribute("id");
        if (i = new RegExp("^" + r,"i"),
        e = e.replace(i, ""),
        o && e.length && (i = new RegExp("#" + o + "(?![a-zA-Z\\-]+)","i"),
        e = e.replace(i, "")),
        s && e.length)
            for (s = s.split(" "),
            n = s.length; n--; )
                i = new RegExp("\\." + s[n] + "(?![a-zA-Z\\-]+)","i"),
                e = e.replace(i, "");
        return 0 === e.length
    }
    function f(t, e) {
        var i;
        if (t.getElementById && (i = t.getElementById(e)),
        i)
            return i;
        var n, r, s, o = t.getElementsByTagName("*");
        for (r = 0,
        s = o.length; r < s; r++)
            if (n = o[r],
            e === n.getAttribute("id"))
                return n
    }
    function d(t) {
        for (var e = s(t, ["use", "svg:use"]), i = 0; e.length && i < e.length; ) {
            var n, r, o, a, h, c = e[i], l = c.getAttribute("xlink:href").substr(1), u = c.getAttribute("x") || 0, d = c.getAttribute("y") || 0, g = f(t, l).cloneNode(!0), v = (g.getAttribute("transform") || "") + " translate(" + u + ", " + d + ")", m = e.length;
            if (p(g),
            /^svg$/i.test(g.nodeName)) {
                var _ = g.ownerDocument.createElement("g");
                for (o = 0,
                a = g.attributes,
                h = a.length; o < h; o++)
                    r = a.item(o),
                    _.setAttribute(r.nodeName, r.nodeValue);
                for (; g.firstChild; )
                    _.appendChild(g.firstChild);
                g = _
            }
            for (o = 0,
            a = c.attributes,
            h = a.length; o < h; o++)
                r = a.item(o),
                "x" !== r.nodeName && "y" !== r.nodeName && "xlink:href" !== r.nodeName && ("transform" === r.nodeName ? v = r.nodeValue + " " + v : g.setAttribute(r.nodeName, r.nodeValue));
            g.setAttribute("transform", v),
            g.setAttribute("instantiated_by_use", "1"),
            g.removeAttribute("id"),
            n = c.parentNode,
            n.replaceChild(g, c),
            e.length === m && i++
        }
    }
    function p(t) {
        var e, i, n, r, s = t.getAttribute("viewBox"), o = 1, a = 1, h = 0, c = 0, l = t.getAttribute("width"), u = t.getAttribute("height"), f = t.getAttribute("x") || 0, d = t.getAttribute("y") || 0, p = t.getAttribute("preserveAspectRatio") || "", g = !s || !v.svgViewBoxElementsRegEx.test(t.nodeName) || !(s = s.match(k)), m = !l || !u || "100%" === l || "100%" === u, _ = g && m, b = {}, x = "";
        if (b.width = 0,
        b.height = 0,
        b.toBeParsed = _,
        _)
            return b;
        if (g)
            return b.width = y(l),
            b.height = y(u),
            b;
        if (h = -parseFloat(s[1]),
        c = -parseFloat(s[2]),
        e = parseFloat(s[3]),
        i = parseFloat(s[4]),
        m ? (b.width = e,
        b.height = i) : (b.width = y(l),
        b.height = y(u),
        o = b.width / e,
        a = b.height / i),
        p = v.util.parsePreserveAspectRatioAttribute(p),
        "none" !== p.alignX && (a = o = o > a ? a : o),
        1 === o && 1 === a && 0 === h && 0 === c && 0 === f && 0 === d)
            return b;
        if ((f || d) && (x = " translate(" + y(f) + " " + y(d) + ") "),
        n = x + " matrix(" + o + " 0 0 " + a + " " + h * o + " " + c * a + ") ",
        "svg" === t.nodeName) {
            for (r = t.ownerDocument.createElement("g"); t.firstChild; )
                r.appendChild(t.firstChild);
            t.appendChild(r)
        } else
            r = t,
            n = r.getAttribute("transform") + n;
        return r.setAttribute("transform", n),
        b
    }
    function g(t, e) {
        for (; t && (t = t.parentNode); )
            if (t.nodeName && e.test(t.nodeName.replace("svg:", "")) && !t.getAttribute("instantiated_by_use"))
                return !0;
        return !1
    }
    var v = t.fabric || (t.fabric = {})
      , m = v.util.object.extend
      , _ = v.util.object.clone
      , b = v.util.toFixed
      , y = v.util.parseUnit
      , x = v.util.multiplyTransformMatrices
      , C = ["path", "circle", "polygon", "polyline", "ellipse", "rect", "line", "image", "text", "linearGradient", "radialGradient", "stop"]
      , w = ["symbol", "image", "marker", "pattern", "view", "svg"]
      , S = ["pattern", "defs", "symbol", "metadata", "clipPath", "mask", "desc"]
      , T = ["symbol", "g", "a", "svg"]
      , O = {
        cx: "left",
        x: "left",
        r: "radius",
        cy: "top",
        y: "top",
        display: "visible",
        visibility: "visible",
        transform: "transformMatrix",
        "fill-opacity": "fillOpacity",
        "fill-rule": "fillRule",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "paint-order": "paintFirst",
        "stroke-dasharray": "strokeDashArray",
        "stroke-linecap": "strokeLineCap",
        "stroke-linejoin": "strokeLineJoin",
        "stroke-miterlimit": "strokeMiterLimit",
        "stroke-opacity": "strokeOpacity",
        "stroke-width": "strokeWidth",
        "text-decoration": "textDecoration",
        "text-anchor": "textAnchor",
        opacity: "opacity"
    }
      , E = {
        stroke: "strokeOpacity",
        fill: "fillOpacity"
    };
    v.svgValidTagNamesRegEx = n(C),
    v.svgViewBoxElementsRegEx = n(w),
    v.svgInvalidAncestorsRegEx = n(S),
    v.svgValidParentsRegEx = n(T),
    v.cssRules = {},
    v.gradientDefs = {},
    v.parseTransformAttribute = function() {
        function t(t, e) {
            var i = Math.cos(e[0])
              , n = Math.sin(e[0])
              , r = 0
              , s = 0;
            3 === e.length && (r = e[1],
            s = e[2]),
            t[0] = i,
            t[1] = n,
            t[2] = -n,
            t[3] = i,
            t[4] = r - (i * r - n * s),
            t[5] = s - (n * r + i * s)
        }
        function e(t, e) {
            var i = e[0]
              , n = 2 === e.length ? e[1] : e[0];
            t[0] = i,
            t[3] = n
        }
        function i(t, e, i) {
            t[i] = Math.tan(v.util.degreesToRadians(e[0]))
        }
        function n(t, e) {
            t[4] = e[0],
            2 === e.length && (t[5] = e[1])
        }
        var r = [1, 0, 0, 1, 0, 0]
          , s = v.reNum
          , o = "(?:\\s+,?\\s*|,\\s*)"
          , a = "(?:(skewX)\\s*\\(\\s*(" + s + ")\\s*\\))"
          , h = "(?:(skewY)\\s*\\(\\s*(" + s + ")\\s*\\))"
          , c = "(?:(rotate)\\s*\\(\\s*(" + s + ")(?:" + o + "(" + s + ")" + o + "(" + s + "))?\\s*\\))"
          , l = "(?:(scale)\\s*\\(\\s*(" + s + ")(?:" + o + "(" + s + "))?\\s*\\))"
          , u = "(?:(translate)\\s*\\(\\s*(" + s + ")(?:" + o + "(" + s + "))?\\s*\\))"
          , f = "(?:(matrix)\\s*\\(\\s*(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")" + o + "(" + s + ")\\s*\\))"
          , d = "(?:" + f + "|" + u + "|" + l + "|" + c + "|" + a + "|" + h + ")"
          , p = "(?:" + d + "(?:" + o + "*" + d + ")*)"
          , g = "^\\s*(?:" + p + "?)\\s*$"
          , m = new RegExp(g)
          , _ = new RegExp(d,"g");
        return function(s) {
            var o = r.concat()
              , a = [];
            if (!s || s && !m.test(s))
                return o;
            s.replace(_, function(s) {
                var h = new RegExp(d).exec(s).filter(function(t) {
                    return !!t
                })
                  , c = h[1]
                  , l = h.slice(2).map(parseFloat);
                switch (c) {
                case "translate":
                    n(o, l);
                    break;
                case "rotate":
                    l[0] = v.util.degreesToRadians(l[0]),
                    t(o, l);
                    break;
                case "scale":
                    e(o, l);
                    break;
                case "skewX":
                    i(o, l, 2);
                    break;
                case "skewY":
                    i(o, l, 1);
                    break;
                case "matrix":
                    o = l
                }
                a.push(o.concat()),
                o = r.concat()
            });
            for (var h = a[0]; a.length > 1; )
                a.shift(),
                h = v.util.multiplyTransformMatrices(h, a[0]);
            return h
        }
    }();
    var k = new RegExp("^\\s*(" + v.reNum + "+)\\s*,?\\s*(" + v.reNum + "+)\\s*,?\\s*(" + v.reNum + "+)\\s*,?\\s*(" + v.reNum + "+)\\s*$");
    v.parseSVGDocument = function(t, e, i, n) {
        if (t) {
            d(t);
            var r, s, o = v.Object.__uid++, a = p(t), h = v.util.toArray(t.getElementsByTagName("*"));
            if (a.crossOrigin = n && n.crossOrigin,
            a.svgUid = o,
            0 === h.length && v.isLikelyNode) {
                h = t.selectNodes('//*[name(.)!="svg"]');
                var c = [];
                for (r = 0,
                s = h.length; r < s; r++)
                    c[r] = h[r];
                h = c
            }
            var l = h.filter(function(t) {
                return p(t),
                v.svgValidTagNamesRegEx.test(t.nodeName.replace("svg:", "")) && !g(t, v.svgInvalidAncestorsRegEx)
            });
            if (!l || l && !l.length)
                return void (e && e([], {}));
            v.gradientDefs[o] = v.getGradientDefs(t),
            v.cssRules[o] = v.getCSSRules(t),
            v.parseElements(l, function(t, i) {
                e && e(t, a, i, h)
            }, _(a), i, n)
        }
    }
    ;
    var D = new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*(" + v.reNum + "(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|" + v.reNum + "))?\\s+(.*)");
    m(v, {
        parseFontDeclaration: function(t, e) {
            var i = t.match(D);
            if (i) {
                var n = i[1]
                  , r = i[3]
                  , s = i[4]
                  , o = i[5]
                  , a = i[6];
                n && (e.fontStyle = n),
                r && (e.fontWeight = isNaN(parseFloat(r)) ? r : parseFloat(r)),
                s && (e.fontSize = y(s)),
                a && (e.fontFamily = a),
                o && (e.lineHeight = "normal" === o ? 1 : o)
            }
        },
        getGradientDefs: function(t) {
            var e, i, n, r = ["linearGradient", "radialGradient", "svg:linearGradient", "svg:radialGradient"], o = s(t, r), a = 0, h = {}, c = {};
            for (a = o.length; a--; )
                e = o[a],
                n = e.getAttribute("xlink:href"),
                i = e.getAttribute("id"),
                n && (c[i] = n.substr(1)),
                h[i] = e;
            for (i in c) {
                var l = h[c[i]].cloneNode(!0);
                for (e = h[i]; l.firstChild; )
                    e.appendChild(l.firstChild)
            }
            return h
        },
        parseAttributes: function(t, n, s) {
            if (t) {
                var o, a, c = {};
                "undefined" == typeof s && (s = t.getAttribute("svgUid")),
                t.parentNode && v.svgValidParentsRegEx.test(t.parentNode.nodeName) && (c = v.parseAttributes(t.parentNode, n, s)),
                a = c && c.fontSize || t.getAttribute("font-size") || v.Text.DEFAULT_SVG_FONT_SIZE;
                var l = n.reduce(function(e, i) {
                    return o = t.getAttribute(i),
                    o && (e[i] = o),
                    e
                }, {});
                l = m(l, m(h(t, s), v.parseStyleAttribute(t)));
                var u, f, d = {};
                for (var p in l)
                    u = e(p),
                    f = i(u, l[p], c, a),
                    d[u] = f;
                d && d.font && v.parseFontDeclaration(d.font, d);
                var g = m(c, d);
                return v.svgValidParentsRegEx.test(t.nodeName) ? g : r(g)
            }
        },
        parseElements: function(t, e, i, n, r) {
            new v.ElementsParser(t,e,i,n,r).parse()
        },
        parseStyleAttribute: function(t) {
            var e = {}
              , i = t.getAttribute("style");
            return i ? ("string" == typeof i ? o(i, e) : a(i, e),
            e) : e
        },
        parsePointsAttribute: function(t) {
            if (!t)
                return null;
            t = t.replace(/,/g, " ").trim(),
            t = t.split(/\s+/);
            var e, i, n = [];
            for (e = 0,
            i = t.length; e < i; e += 2)
                n.push({
                    x: parseFloat(t[e]),
                    y: parseFloat(t[e + 1])
                });
            return n
        },
        getCSSRules: function(t) {
            var e, i, n, r = t.getElementsByTagName("style"), s = {};
            for (e = 0,
            i = r.length; e < i; e++) {
                var o = r[e].textContent || r[e].text;
                o = o.replace(/\/\*[\s\S]*?\*\//g, ""),
                "" !== o.trim() && (n = o.match(/[^{]*\{[\s\S]*?\}/g),
                n = n.map(function(t) {
                    return t.trim()
                }),
                n.forEach(function(t) {
                    var n = t.match(/([\s\S]*?)\s*\{([^}]*)\}/)
                      , r = {}
                      , o = n[2].trim()
                      , a = o.replace(/;$/, "").split(/\s*;\s*/);
                    for (e = 0,
                    i = a.length; e < i; e++) {
                        var h = a[e].split(/\s*:\s*/)
                          , c = h[0]
                          , l = h[1];
                        r[c] = l
                    }
                    t = n[1],
                    t.split(",").forEach(function(t) {
                        t = t.replace(/^svg/i, "").trim(),
                        "" !== t && (s[t] ? v.util.object.extend(s[t], r) : s[t] = v.util.object.clone(r))
                    })
                }))
            }
            return s
        },
        loadSVGFromURL: function(t, e, i, n) {
            function r(t) {
                var r = t.responseXML;
                r && !r.documentElement && v.window.ActiveXObject && t.responseText && (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(t.responseText.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, ""))),
                r && r.documentElement || e && e(null),
                v.parseSVGDocument(r.documentElement, function(t, i, n, r) {
                    e && e(t, i, n, r)
                }, i, n)
            }
            t = t.replace(/^\n\s*/, "").trim(),
            new v.util.request(t,{
                method: "get",
                onComplete: r
            })
        },
        loadSVGFromString: function(t, e, i, n) {
            t = t.trim();
            var r;
            if ("undefined" != typeof DOMParser) {
                var s = new DOMParser;
                s && s.parseFromString && (r = s.parseFromString(t, "text/xml"))
            } else
                v.window.ActiveXObject && (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(t.replace(/<!DOCTYPE[\s\S]*?(\[[\s\S]*\])*?>/i, "")));
            v.parseSVGDocument(r.documentElement, function(t, i, n, r) {
                e(t, i, n, r)
            }, i, n)
        }
    })
}("undefined" != typeof exports ? exports : this),
fabric.ElementsParser = function(t, e, i, n, r) {
    this.elements = t,
    this.callback = e,
    this.options = i,
    this.reviver = n,
    this.svgUid = i && i.svgUid || 0,
    this.parsingOptions = r
}
,
fabric.ElementsParser.prototype.parse = function() {
    this.instances = new Array(this.elements.length),
    this.numElements = this.elements.length,
    this.createObjects()
}
,
fabric.ElementsParser.prototype.createObjects = function() {
    for (var t = 0, e = this.elements.length; t < e; t++)
        this.elements[t].setAttribute("svgUid", this.svgUid),
        function(t, e) {
            setTimeout(function() {
                t.createObject(t.elements[e], e)
            }, 0)
        }(this, t)
}
,
fabric.ElementsParser.prototype.createObject = function(t, e) {
    var i = fabric[fabric.util.string.capitalize(t.tagName.replace("svg:", ""))];
    if (i && i.fromElement)
        try {
            this._createObject(i, t, e)
        } catch (n) {
            fabric.log(n)
        }
    else
        this.checkIfDone()
}
,
fabric.ElementsParser.prototype._createObject = function(t, e, i) {
    t.fromElement(e, this.createCallback(i, e), this.options)
}
,
fabric.ElementsParser.prototype.createCallback = function(t, e) {
    var i = this;
    return function(n) {
        var r;
        i.resolveGradient(n, "fill"),
        i.resolveGradient(n, "stroke"),
        n instanceof fabric.Image && (r = n.parsePreserveAspectRatioAttribute(e)),
        n._removeTransformMatrix(r),
        i.reviver && i.reviver(e, n),
        i.instances[t] = n,
        i.checkIfDone()
    }
}
,
fabric.ElementsParser.prototype.resolveGradient = function(t, e) {
    var i = t.get(e);
    if (/^url\(/.test(i)) {
        var n = i.slice(5, i.length - 1);
        fabric.gradientDefs[this.svgUid][n] && t.set(e, fabric.Gradient.fromElement(fabric.gradientDefs[this.svgUid][n], t))
    }
}
,
fabric.ElementsParser.prototype.checkIfDone = function() {
    0 === --this.numElements && (this.instances = this.instances.filter(function(t) {
        return null != t
    }),
    this.callback(this.instances, this.elements))
}
,
function(t) {
    "use strict";
    function e(t, e) {
        this.x = t,
        this.y = e
    }
    var i = t.fabric || (t.fabric = {});
    return i.Point ? void i.warn("fabric.Point is already defined") : (i.Point = e,
    void (e.prototype = {
        type: "point",
        constructor: e,
        add: function(t) {
            return new e(this.x + t.x,this.y + t.y)
        },
        addEquals: function(t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        scalarAdd: function(t) {
            return new e(this.x + t,this.y + t)
        },
        scalarAddEquals: function(t) {
            return this.x += t,
            this.y += t,
            this
        },
        subtract: function(t) {
            return new e(this.x - t.x,this.y - t.y)
        },
        subtractEquals: function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        scalarSubtract: function(t) {
            return new e(this.x - t,this.y - t)
        },
        scalarSubtractEquals: function(t) {
            return this.x -= t,
            this.y -= t,
            this
        },
        multiply: function(t) {
            return new e(this.x * t,this.y * t)
        },
        multiplyEquals: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        divide: function(t) {
            return new e(this.x / t,this.y / t)
        },
        divideEquals: function(t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        eq: function(t) {
            return this.x === t.x && this.y === t.y
        },
        lt: function(t) {
            return this.x < t.x && this.y < t.y
        },
        lte: function(t) {
            return this.x <= t.x && this.y <= t.y
        },
        gt: function(t) {
            return this.x > t.x && this.y > t.y
        },
        gte: function(t) {
            return this.x >= t.x && this.y >= t.y
        },
        lerp: function(t, i) {
            return "undefined" == typeof i && (i = .5),
            i = Math.max(Math.min(1, i), 0),
            new e(this.x + (t.x - this.x) * i,this.y + (t.y - this.y) * i)
        },
        distanceFrom: function(t) {
            var e = this.x - t.x
              , i = this.y - t.y;
            return Math.sqrt(e * e + i * i)
        },
        midPointFrom: function(t) {
            return this.lerp(t)
        },
        min: function(t) {
            return new e(Math.min(this.x, t.x),Math.min(this.y, t.y))
        },
        max: function(t) {
            return new e(Math.max(this.x, t.x),Math.max(this.y, t.y))
        },
        toString: function() {
            return this.x + "," + this.y
        },
        setXY: function(t, e) {
            return this.x = t,
            this.y = e,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setFromPoint: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        },
        swap: function(t) {
            var e = this.x
              , i = this.y;
            this.x = t.x,
            this.y = t.y,
            t.x = e,
            t.y = i
        },
        clone: function() {
            return new e(this.x,this.y)
        }
    }))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    function e(t) {
        this.status = t,
        this.points = []
    }
    var i = t.fabric || (t.fabric = {});
    return i.Intersection ? void i.warn("fabric.Intersection is already defined") : (i.Intersection = e,
    i.Intersection.prototype = {
        constructor: e,
        appendPoint: function(t) {
            return this.points.push(t),
            this
        },
        appendPoints: function(t) {
            return this.points = this.points.concat(t),
            this
        }
    },
    i.Intersection.intersectLineLine = function(t, n, r, s) {
        var o, a = (s.x - r.x) * (t.y - r.y) - (s.y - r.y) * (t.x - r.x), h = (n.x - t.x) * (t.y - r.y) - (n.y - t.y) * (t.x - r.x), c = (s.y - r.y) * (n.x - t.x) - (s.x - r.x) * (n.y - t.y);
        if (0 !== c) {
            var l = a / c
              , u = h / c;
            0 <= l && l <= 1 && 0 <= u && u <= 1 ? (o = new e("Intersection"),
            o.appendPoint(new i.Point(t.x + l * (n.x - t.x),t.y + l * (n.y - t.y)))) : o = new e
        } else
            o = new e(0 === a || 0 === h ? "Coincident" : "Parallel");
        return o
    }
    ,
    i.Intersection.intersectLinePolygon = function(t, i, n) {
        var r, s, o, a, h = new e, c = n.length;
        for (a = 0; a < c; a++)
            r = n[a],
            s = n[(a + 1) % c],
            o = e.intersectLineLine(t, i, r, s),
            h.appendPoints(o.points);
        return h.points.length > 0 && (h.status = "Intersection"),
        h
    }
    ,
    i.Intersection.intersectPolygonPolygon = function(t, i) {
        var n, r = new e, s = t.length;
        for (n = 0; n < s; n++) {
            var o = t[n]
              , a = t[(n + 1) % s]
              , h = e.intersectLinePolygon(o, a, i);
            r.appendPoints(h.points)
        }
        return r.points.length > 0 && (r.status = "Intersection"),
        r
    }
    ,
    void (i.Intersection.intersectPolygonRectangle = function(t, n, r) {
        var s = n.min(r)
          , o = n.max(r)
          , a = new i.Point(o.x,s.y)
          , h = new i.Point(s.x,o.y)
          , c = e.intersectLinePolygon(s, a, t)
          , l = e.intersectLinePolygon(a, o, t)
          , u = e.intersectLinePolygon(o, h, t)
          , f = e.intersectLinePolygon(h, s, t)
          , d = new e;
        return d.appendPoints(c.points),
        d.appendPoints(l.points),
        d.appendPoints(u.points),
        d.appendPoints(f.points),
        d.points.length > 0 && (d.status = "Intersection"),
        d
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    function e(t) {
        t ? this._tryParsingColor(t) : this.setSource([0, 0, 0, 1])
    }
    function i(t, e, i) {
        return i < 0 && (i += 1),
        i > 1 && (i -= 1),
        i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    var n = t.fabric || (t.fabric = {});
    return n.Color ? void n.warn("fabric.Color is already defined.") : (n.Color = e,
    n.Color.prototype = {
        _tryParsingColor: function(t) {
            var i;
            t in e.colorNameMap && (t = e.colorNameMap[t]),
            "transparent" === t && (i = [255, 255, 255, 0]),
            i || (i = e.sourceFromHex(t)),
            i || (i = e.sourceFromRgb(t)),
            i || (i = e.sourceFromHsl(t)),
            i || (i = [0, 0, 0, 1]),
            i && this.setSource(i)
        },
        _rgbToHsl: function(t, e, i) {
            t /= 255,
            e /= 255,
            i /= 255;
            var r, s, o, a = n.util.array.max([t, e, i]), h = n.util.array.min([t, e, i]);
            if (o = (a + h) / 2,
            a === h)
                r = s = 0;
            else {
                var c = a - h;
                switch (s = o > .5 ? c / (2 - a - h) : c / (a + h),
                a) {
                case t:
                    r = (e - i) / c + (e < i ? 6 : 0);
                    break;
                case e:
                    r = (i - t) / c + 2;
                    break;
                case i:
                    r = (t - e) / c + 4
                }
                r /= 6
            }
            return [Math.round(360 * r), Math.round(100 * s), Math.round(100 * o)]
        },
        getSource: function() {
            return this._source
        },
        setSource: function(t) {
            this._source = t
        },
        toRgb: function() {
            var t = this.getSource();
            return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
        },
        toRgba: function() {
            var t = this.getSource();
            return "rgba(" + t[0] + "," + t[1] + "," + t[2] + "," + t[3] + ")"
        },
        toHsl: function() {
            var t = this.getSource()
              , e = this._rgbToHsl(t[0], t[1], t[2]);
            return "hsl(" + e[0] + "," + e[1] + "%," + e[2] + "%)"
        },
        toHsla: function() {
            var t = this.getSource()
              , e = this._rgbToHsl(t[0], t[1], t[2]);
            return "hsla(" + e[0] + "," + e[1] + "%," + e[2] + "%," + t[3] + ")"
        },
        toHex: function() {
            var t, e, i, n = this.getSource();
            return t = n[0].toString(16),
            t = 1 === t.length ? "0" + t : t,
            e = n[1].toString(16),
            e = 1 === e.length ? "0" + e : e,
            i = n[2].toString(16),
            i = 1 === i.length ? "0" + i : i,
            t.toUpperCase() + e.toUpperCase() + i.toUpperCase()
        },
        toHexa: function() {
            var t, e = this.getSource();
            return t = 255 * e[3],
            t = t.toString(16),
            t = 1 === t.length ? "0" + t : t,
            this.toHex() + t.toUpperCase()
        },
        getAlpha: function() {
            return this.getSource()[3]
        },
        setAlpha: function(t) {
            var e = this.getSource();
            return e[3] = t,
            this.setSource(e),
            this
        },
        toGrayscale: function() {
            var t = this.getSource()
              , e = parseInt((.3 * t[0] + .59 * t[1] + .11 * t[2]).toFixed(0), 10)
              , i = t[3];
            return this.setSource([e, e, e, i]),
            this
        },
        toBlackWhite: function(t) {
            var e = this.getSource()
              , i = (.3 * e[0] + .59 * e[1] + .11 * e[2]).toFixed(0)
              , n = e[3];
            return t = t || 127,
            i = Number(i) < Number(t) ? 0 : 255,
            this.setSource([i, i, i, n]),
            this
        },
        overlayWith: function(t) {
            t instanceof e || (t = new e(t));
            var i, n = [], r = this.getAlpha(), s = .5, o = this.getSource(), a = t.getSource();
            for (i = 0; i < 3; i++)
                n.push(Math.round(o[i] * (1 - s) + a[i] * s));
            return n[3] = r,
            this.setSource(n),
            this
        }
    },
    n.Color.reRGBa = /^rgba?\(\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*,\s*(\d{1,3}(?:\.\d+)?\%?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/,
    n.Color.reHSLa = /^hsla?\(\s*(\d{1,3})\s*,\s*(\d{1,3}\%)\s*,\s*(\d{1,3}\%)\s*(?:\s*,\s*(\d+(?:\.\d+)?)\s*)?\)$/,
    n.Color.reHex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,
    n.Color.colorNameMap = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgrey: "#A9A9A9",
        darkgreen: "#006400",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        grey: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgrey: "#D3D3D3",
        lightgreen: "#90EE90",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32"
    },
    n.Color.fromRgb = function(t) {
        return e.fromSource(e.sourceFromRgb(t))
    }
    ,
    n.Color.sourceFromRgb = function(t) {
        var i = t.match(e.reRGBa);
        if (i) {
            var n = parseInt(i[1], 10) / (/%$/.test(i[1]) ? 100 : 1) * (/%$/.test(i[1]) ? 255 : 1)
              , r = parseInt(i[2], 10) / (/%$/.test(i[2]) ? 100 : 1) * (/%$/.test(i[2]) ? 255 : 1)
              , s = parseInt(i[3], 10) / (/%$/.test(i[3]) ? 100 : 1) * (/%$/.test(i[3]) ? 255 : 1);
            return [parseInt(n, 10), parseInt(r, 10), parseInt(s, 10), i[4] ? parseFloat(i[4]) : 1]
        }
    }
    ,
    n.Color.fromRgba = e.fromRgb,
    n.Color.fromHsl = function(t) {
        return e.fromSource(e.sourceFromHsl(t))
    }
    ,
    n.Color.sourceFromHsl = function(t) {
        var n = t.match(e.reHSLa);
        if (n) {
            var r, s, o, a = (parseFloat(n[1]) % 360 + 360) % 360 / 360, h = parseFloat(n[2]) / (/%$/.test(n[2]) ? 100 : 1), c = parseFloat(n[3]) / (/%$/.test(n[3]) ? 100 : 1);
            if (0 === h)
                r = s = o = c;
            else {
                var l = c <= .5 ? c * (h + 1) : c + h - c * h
                  , u = 2 * c - l;
                r = i(u, l, a + 1 / 3),
                s = i(u, l, a),
                o = i(u, l, a - 1 / 3)
            }
            return [Math.round(255 * r), Math.round(255 * s), Math.round(255 * o), n[4] ? parseFloat(n[4]) : 1]
        }
    }
    ,
    n.Color.fromHsla = e.fromHsl,
    n.Color.fromHex = function(t) {
        return e.fromSource(e.sourceFromHex(t))
    }
    ,
    n.Color.sourceFromHex = function(t) {
        if (t.match(e.reHex)) {
            var i = t.slice(t.indexOf("#") + 1)
              , n = 3 === i.length || 4 === i.length
              , r = 8 === i.length || 4 === i.length
              , s = n ? i.charAt(0) + i.charAt(0) : i.substring(0, 2)
              , o = n ? i.charAt(1) + i.charAt(1) : i.substring(2, 4)
              , a = n ? i.charAt(2) + i.charAt(2) : i.substring(4, 6)
              , h = r ? n ? i.charAt(3) + i.charAt(3) : i.substring(6, 8) : "FF";
            return [parseInt(s, 16), parseInt(o, 16), parseInt(a, 16), parseFloat((parseInt(h, 16) / 255).toFixed(2))]
        }
    }
    ,
    void (n.Color.fromSource = function(t) {
        var i = new e;
        return i.setSource(t),
        i
    }
    ))
}("undefined" != typeof exports ? exports : this),
function() {
    function t(t) {
        var e, i, n, r, s = t.getAttribute("style"), o = t.getAttribute("offset") || 0;
        if (o = parseFloat(o) / (/%$/.test(o) ? 100 : 1),
        o = o < 0 ? 0 : o > 1 ? 1 : o,
        s) {
            var a = s.split(/\s*;\s*/);
            for ("" === a[a.length - 1] && a.pop(),
            r = a.length; r--; ) {
                var h = a[r].split(/\s*:\s*/)
                  , c = h[0].trim()
                  , l = h[1].trim();
                "stop-color" === c ? e = l : "stop-opacity" === c && (n = l)
            }
        }
        return e || (e = t.getAttribute("stop-color") || "rgb(0,0,0)"),
        n || (n = t.getAttribute("stop-opacity")),
        e = new fabric.Color(e),
        i = e.getAlpha(),
        n = isNaN(parseFloat(n)) ? 1 : parseFloat(n),
        n *= i,
        {
            offset: o,
            color: e.toRgb(),
            opacity: n
        }
    }
    function e(t) {
        return {
            x1: t.getAttribute("x1") || 0,
            y1: t.getAttribute("y1") || 0,
            x2: t.getAttribute("x2") || "100%",
            y2: t.getAttribute("y2") || 0
        }
    }
    function i(t) {
        return {
            x1: t.getAttribute("fx") || t.getAttribute("cx") || "50%",
            y1: t.getAttribute("fy") || t.getAttribute("cy") || "50%",
            r1: 0,
            x2: t.getAttribute("cx") || "50%",
            y2: t.getAttribute("cy") || "50%",
            r2: t.getAttribute("r") || "50%"
        }
    }
    function n(t, e, i) {
        var n, r = 0, s = 1, o = "";
        for (var a in e)
            "Infinity" === e[a] ? e[a] = 1 : "-Infinity" === e[a] && (e[a] = 0),
            n = parseFloat(e[a], 10),
            s = "string" == typeof e[a] && /^\d+%$/.test(e[a]) ? .01 : 1,
            "x1" === a || "x2" === a || "r2" === a ? (s *= "objectBoundingBox" === i ? t.width : 1,
            r = "objectBoundingBox" === i ? t.left || 0 : 0) : "y1" !== a && "y2" !== a || (s *= "objectBoundingBox" === i ? t.height : 1,
            r = "objectBoundingBox" === i ? t.top || 0 : 0),
            e[a] = n * s + r;
        if ("ellipse" === t.type && null !== e.r2 && "objectBoundingBox" === i && t.rx !== t.ry) {
            var h = t.ry / t.rx;
            o = " scale(1, " + h + ")",
            e.y1 && (e.y1 /= h),
            e.y2 && (e.y2 /= h)
        }
        return o
    }
    var r = fabric.util.object.clone;
    fabric.Gradient = fabric.util.createClass({
        offsetX: 0,
        offsetY: 0,
        initialize: function(t) {
            t || (t = {});
            var e = {};
            this.id = fabric.Object.__uid++,
            this.type = t.type || "linear",
            e = {
                x1: t.coords.x1 || 0,
                y1: t.coords.y1 || 0,
                x2: t.coords.x2 || 0,
                y2: t.coords.y2 || 0
            },
            "radial" === this.type && (e.r1 = t.coords.r1 || 0,
            e.r2 = t.coords.r2 || 0),
            this.coords = e,
            this.colorStops = t.colorStops.slice(),
            t.gradientTransform && (this.gradientTransform = t.gradientTransform),
            this.offsetX = t.offsetX || this.offsetX,
            this.offsetY = t.offsetY || this.offsetY
        },
        addColorStop: function(t) {
            for (var e in t) {
                var i = new fabric.Color(t[e]);
                this.colorStops.push({
                    offset: parseFloat(e),
                    color: i.toRgb(),
                    opacity: i.getAlpha()
                })
            }
            return this
        },
        toObject: function(t) {
            var e = {
                type: this.type,
                coords: this.coords,
                colorStops: this.colorStops,
                offsetX: this.offsetX,
                offsetY: this.offsetY,
                gradientTransform: this.gradientTransform ? this.gradientTransform.concat() : this.gradientTransform
            };
            return fabric.util.populateWithProperties(this, e, t),
            e
        },
        toSVG: function(t) {
            var e, i, n, s, o = r(this.coords, !0), a = r(this.colorStops, !0), h = o.r1 > o.r2, c = t.width / 2, l = t.height / 2;
            a.sort(function(t, e) {
                return t.offset - e.offset
            }),
            "path" === t.type && (c -= t.pathOffset.x,
            l -= t.pathOffset.y);
            for (var u in o)
                "x1" === u || "x2" === u ? o[u] += this.offsetX - c : "y1" !== u && "y2" !== u || (o[u] += this.offsetY - l);
            if (s = 'id="SVGID_' + this.id + '" gradientUnits="userSpaceOnUse"',
            this.gradientTransform && (s += ' gradientTransform="matrix(' + this.gradientTransform.join(" ") + ')" '),
            "linear" === this.type ? n = ["<linearGradient ", s, ' x1="', o.x1, '" y1="', o.y1, '" x2="', o.x2, '" y2="', o.y2, '">\n'] : "radial" === this.type && (n = ["<radialGradient ", s, ' cx="', h ? o.x1 : o.x2, '" cy="', h ? o.y1 : o.y2, '" r="', h ? o.r1 : o.r2, '" fx="', h ? o.x2 : o.x1, '" fy="', h ? o.y2 : o.y1, '">\n']),
            "radial" === this.type) {
                if (h)
                    for (a = a.concat(),
                    a.reverse(),
                    e = 0,
                    i = a.length; e < i; e++)
                        a[e].offset = 1 - a[e].offset;
                var f = Math.min(o.r1, o.r2);
                if (f > 0) {
                    var d = Math.max(o.r1, o.r2)
                      , p = f / d;
                    for (e = 0,
                    i = a.length; e < i; e++)
                        a[e].offset += p * (1 - a[e].offset)
                }
            }
            for (e = 0,
            i = a.length; e < i; e++) {
                var g = a[e];
                n.push("<stop ", 'offset="', 100 * g.offset + "%", '" style="stop-color:', g.color, null !== g.opacity ? ";stop-opacity: " + g.opacity : ";", '"/>\n')
            }
            return n.push("linear" === this.type ? "</linearGradient>\n" : "</radialGradient>\n"),
            n.join("")
        },
        toLive: function(t) {
            var e, i, n, r = fabric.util.object.clone(this.coords);
            if (this.type) {
                for ("linear" === this.type ? e = t.createLinearGradient(r.x1, r.y1, r.x2, r.y2) : "radial" === this.type && (e = t.createRadialGradient(r.x1, r.y1, r.r1, r.x2, r.y2, r.r2)),
                i = 0,
                n = this.colorStops.length; i < n; i++) {
                    var s = this.colorStops[i].color
                      , o = this.colorStops[i].opacity
                      , a = this.colorStops[i].offset;
                    "undefined" != typeof o && (s = new fabric.Color(s).setAlpha(o).toRgba()),
                    e.addColorStop(a, s)
                }
                return e
            }
        }
    }),
    fabric.util.object.extend(fabric.Gradient, {
        fromElement: function(r, s) {
            var o, a, h, c, l = r.getElementsByTagName("stop"), u = r.getAttribute("gradientUnits") || "objectBoundingBox", f = r.getAttribute("gradientTransform"), d = [];
            for (o = "linearGradient" === r.nodeName || "LINEARGRADIENT" === r.nodeName ? "linear" : "radial",
            "linear" === o ? a = e(r) : "radial" === o && (a = i(r)),
            c = l.length; c--; )
                d.push(t(l[c]));
            h = n(s, a, u);
            var p = new fabric.Gradient({
                type: o,
                coords: a,
                colorStops: d,
                offsetX: -s.left,
                offsetY: -s.top
            });
            return (f || "" !== h) && (p.gradientTransform = fabric.parseTransformAttribute((f || "") + h)),
            p
        },
        forObject: function(t, e) {
            return e || (e = {}),
            n(t, e.coords, "userSpaceOnUse"),
            new fabric.Gradient(e)
        }
    })
}(),
function() {
    "use strict";
    var t = fabric.util.toFixed;
    fabric.Pattern = fabric.util.createClass({
        repeat: "repeat",
        offsetX: 0,
        offsetY: 0,
        initialize: function(t, e) {
            if (t || (t = {}),
            this.id = fabric.Object.__uid++,
            this.setOptions(t),
            !t.source || t.source && "string" != typeof t.source)
                return void (e && e(this));
            if ("undefined" != typeof fabric.util.getFunctionBody(t.source))
                this.source = new Function(fabric.util.getFunctionBody(t.source)),
                e && e(this);
            else {
                var i = this;
                this.source = fabric.util.createImage(),
                fabric.util.loadImage(t.source, function(t) {
                    i.source = t,
                    e && e(i)
                })
            }
        },
        toObject: function(e) {
            var i, n, r = fabric.Object.NUM_FRACTION_DIGITS;
            return "function" == typeof this.source ? i = String(this.source) : "string" == typeof this.source.src ? i = this.source.src : "object" == typeof this.source && this.source.toDataURL && (i = this.source.toDataURL()),
            n = {
                type: "pattern",
                source: i,
                repeat: this.repeat,
                offsetX: t(this.offsetX, r),
                offsetY: t(this.offsetY, r)
            },
            fabric.util.populateWithProperties(this, n, e),
            n
        },
        toSVG: function(t) {
            var e = "function" == typeof this.source ? this.source() : this.source
              , i = e.width / t.width
              , n = e.height / t.height
              , r = this.offsetX / t.width
              , s = this.offsetY / t.height
              , o = "";
            return "repeat-x" !== this.repeat && "no-repeat" !== this.repeat || (n = 1),
            "repeat-y" !== this.repeat && "no-repeat" !== this.repeat || (i = 1),
            e.src ? o = e.src : e.toDataURL && (o = e.toDataURL()),
            '<pattern id="SVGID_' + this.id + '" x="' + r + '" y="' + s + '" width="' + i + '" height="' + n + '">\n<image x="0" y="0" width="' + e.width + '" height="' + e.height + '" xlink:href="' + o + '"></image>\n</pattern>\n'
        },
        setOptions: function(t) {
            for (var e in t)
                this[e] = t[e]
        },
        toLive: function(t) {
            var e = "function" == typeof this.source ? this.source() : this.source;
            if (!e)
                return "";
            if ("undefined" != typeof e.src) {
                if (!e.complete)
                    return "";
                if (0 === e.naturalWidth || 0 === e.naturalHeight)
                    return ""
            }
            return t.createPattern(e, this.repeat)
        }
    })
}(),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.toFixed;
    return e.Shadow ? void e.warn("fabric.Shadow is already defined.") : (e.Shadow = e.util.createClass({
        color: "rgb(0,0,0)",
        blur: 0,
        offsetX: 0,
        offsetY: 0,
        affectStroke: !1,
        includeDefaultValues: !0,
        initialize: function(t) {
            "string" == typeof t && (t = this._parseShadow(t));
            for (var i in t)
                this[i] = t[i];
            this.id = e.Object.__uid++
        },
        _parseShadow: function(t) {
            var i = t.trim()
              , n = e.Shadow.reOffsetsAndBlur.exec(i) || []
              , r = i.replace(e.Shadow.reOffsetsAndBlur, "") || "rgb(0,0,0)";
            return {
                color: r.trim(),
                offsetX: parseInt(n[1], 10) || 0,
                offsetY: parseInt(n[2], 10) || 0,
                blur: parseInt(n[3], 10) || 0
            }
        },
        toString: function() {
            return [this.offsetX, this.offsetY, this.blur, this.color].join("px ")
        },
        toSVG: function(t) {
            var n = 40
              , r = 40
              , s = e.Object.NUM_FRACTION_DIGITS
              , o = e.util.rotateVector({
                x: this.offsetX,
                y: this.offsetY
            }, e.util.degreesToRadians(-t.angle))
              , a = 20;
            return t.width && t.height && (n = 100 * i((Math.abs(o.x) + this.blur) / t.width, s) + a,
            r = 100 * i((Math.abs(o.y) + this.blur) / t.height, s) + a),
            t.flipX && (o.x *= -1),
            t.flipY && (o.y *= -1),
            '<filter id="SVGID_' + this.id + '" y="-' + r + '%" height="' + (100 + 2 * r) + '%" x="-' + n + '%" width="' + (100 + 2 * n) + '%" >\n\t<feGaussianBlur in="SourceAlpha" stdDeviation="' + i(this.blur ? this.blur / 2 : 0, s) + '"></feGaussianBlur>\n\t<feOffset dx="' + i(o.x, s) + '" dy="' + i(o.y, s) + '" result="oBlur" ></feOffset>\n\t<feFlood flood-color="' + this.color + '"/>\n\t<feComposite in2="oBlur" operator="in" />\n\t<feMerge>\n\t\t<feMergeNode></feMergeNode>\n\t\t<feMergeNode in="SourceGraphic"></feMergeNode>\n\t</feMerge>\n</filter>\n';
        },
        toObject: function() {
            if (this.includeDefaultValues)
                return {
                    color: this.color,
                    blur: this.blur,
                    offsetX: this.offsetX,
                    offsetY: this.offsetY,
                    affectStroke: this.affectStroke
                };
            var t = {}
              , i = e.Shadow.prototype;
            return ["color", "blur", "offsetX", "offsetY", "affectStroke"].forEach(function(e) {
                this[e] !== i[e] && (t[e] = this[e])
            }, this),
            t
        }
    }),
    void (e.Shadow.reOffsetsAndBlur = /(?:\s|^)(-?\d+(?:px)?(?:\s?|$))?(-?\d+(?:px)?(?:\s?|$))?(\d+(?:px)?)?(?:\s?|$)(?:$|\s)/))
}("undefined" != typeof exports ? exports : this),
function() {
    "use strict";
    if (fabric.StaticCanvas)
        return void fabric.warn("fabric.StaticCanvas is already defined.");
    var t = fabric.util.object.extend
      , e = fabric.util.getElementOffset
      , i = fabric.util.removeFromArray
      , n = fabric.util.toFixed
      , r = fabric.util.transformPoint
      , s = fabric.util.invertTransform
      , o = new Error("Could not initialize `canvas` element");
    fabric.StaticCanvas = fabric.util.createClass(fabric.CommonMethods, {
        initialize: function(t, e) {
            e || (e = {}),
            this.renderAndResetBound = this.renderAndReset.bind(this),
            this.requestRenderAllBound = this.requestRenderAll.bind(this),
            this._initStatic(t, e)
        },
        backgroundColor: "",
        backgroundImage: null,
        overlayColor: "",
        overlayImage: null,
        includeDefaultValues: !0,
        stateful: !1,
        renderOnAddRemove: !0,
        clipTo: null,
        controlsAboveOverlay: !1,
        allowTouchScrolling: !1,
        imageSmoothingEnabled: !0,
        viewportTransform: fabric.iMatrix.concat(),
        backgroundVpt: !0,
        overlayVpt: !0,
        onBeforeScaleRotate: function() {},
        enableRetinaScaling: !0,
        vptCoords: {},
        skipOffscreen: !0,
        _initStatic: function(t, e) {
            var i = this.requestRenderAllBound;
            this._objects = [],
            this._createLowerCanvas(t),
            this._initOptions(e),
            this._setImageSmoothing(),
            this.interactive || this._initRetinaScaling(),
            e.overlayImage && this.setOverlayImage(e.overlayImage, i),
            e.backgroundImage && this.setBackgroundImage(e.backgroundImage, i),
            e.backgroundColor && this.setBackgroundColor(e.backgroundColor, i),
            e.overlayColor && this.setOverlayColor(e.overlayColor, i),
            this.calcOffset()
        },
        _isRetinaScaling: function() {
            return 1 !== fabric.devicePixelRatio && this.enableRetinaScaling
        },
        getRetinaScaling: function() {
            return this._isRetinaScaling() ? fabric.devicePixelRatio : 1
        },
        _initRetinaScaling: function() {
            this._isRetinaScaling() && (this.lowerCanvasEl.setAttribute("width", this.width * fabric.devicePixelRatio),
            this.lowerCanvasEl.setAttribute("height", this.height * fabric.devicePixelRatio),
            this.contextContainer.scale(fabric.devicePixelRatio, fabric.devicePixelRatio))
        },
        calcOffset: function() {
            return this._offset = e(this.lowerCanvasEl),
            this
        },
        setOverlayImage: function(t, e, i) {
            return this.__setBgOverlayImage("overlayImage", t, e, i)
        },
        setBackgroundImage: function(t, e, i) {
            return this.__setBgOverlayImage("backgroundImage", t, e, i)
        },
        setOverlayColor: function(t, e) {
            return this.__setBgOverlayColor("overlayColor", t, e)
        },
        setBackgroundColor: function(t, e) {
            return this.__setBgOverlayColor("backgroundColor", t, e)
        },
        _setImageSmoothing: function() {
            var t = this.getContext();
            t.imageSmoothingEnabled = t.imageSmoothingEnabled || t.webkitImageSmoothingEnabled || t.mozImageSmoothingEnabled || t.msImageSmoothingEnabled || t.oImageSmoothingEnabled,
            t.imageSmoothingEnabled = this.imageSmoothingEnabled
        },
        __setBgOverlayImage: function(t, e, i, n) {
            return "string" == typeof e ? fabric.util.loadImage(e, function(e) {
                e && (this[t] = new fabric.Image(e,n)),
                i && i(e)
            }, this, n && n.crossOrigin) : (n && e.setOptions(n),
            this[t] = e,
            i && i(e)),
            this
        },
        __setBgOverlayColor: function(t, e, i) {
            return this[t] = e,
            this._initGradient(e, t),
            this._initPattern(e, t, i),
            this
        },
        _createCanvasElement: function() {
            var t = fabric.util.createCanvasElement();
            if (!t)
                throw o;
            if (t.style || (t.style = {}),
            "undefined" == typeof t.getContext)
                throw o;
            return t
        },
        _initOptions: function(t) {
            this._setOptions(t),
            this.width = this.width || parseInt(this.lowerCanvasEl.width, 10) || 0,
            this.height = this.height || parseInt(this.lowerCanvasEl.height, 10) || 0,
            this.lowerCanvasEl.style && (this.lowerCanvasEl.width = this.width,
            this.lowerCanvasEl.height = this.height,
            this.lowerCanvasEl.style.width = this.width + "px",
            this.lowerCanvasEl.style.height = this.height + "px",
            this.viewportTransform = this.viewportTransform.slice())
        },
        _createLowerCanvas: function(t) {
            t && t.getContext ? this.lowerCanvasEl = t : this.lowerCanvasEl = fabric.util.getById(t) || this._createCanvasElement(),
            fabric.util.addClass(this.lowerCanvasEl, "lower-canvas"),
            this.interactive && this._applyCanvasStyle(this.lowerCanvasEl),
            this.contextContainer = this.lowerCanvasEl.getContext("2d")
        },
        getWidth: function() {
            return this.width
        },
        getHeight: function() {
            return this.height
        },
        setWidth: function(t, e) {
            return this.setDimensions({
                width: t
            }, e)
        },
        setHeight: function(t, e) {
            return this.setDimensions({
                height: t
            }, e)
        },
        setDimensions: function(t, e) {
            var i;
            e = e || {};
            for (var n in t)
                i = t[n],
                e.cssOnly || (this._setBackstoreDimension(n, t[n]),
                i += "px"),
                e.backstoreOnly || this._setCssDimension(n, i);
            return this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._setBrushStyles(),
            this._initRetinaScaling(),
            this._setImageSmoothing(),
            this.calcOffset(),
            e.cssOnly || this.requestRenderAll(),
            this
        },
        _setBackstoreDimension: function(t, e) {
            return this.lowerCanvasEl[t] = e,
            this.upperCanvasEl && (this.upperCanvasEl[t] = e),
            this.cacheCanvasEl && (this.cacheCanvasEl[t] = e),
            this[t] = e,
            this
        },
        _setCssDimension: function(t, e) {
            return this.lowerCanvasEl.style[t] = e,
            this.upperCanvasEl && (this.upperCanvasEl.style[t] = e),
            this.wrapperEl && (this.wrapperEl.style[t] = e),
            this
        },
        getZoom: function() {
            return this.viewportTransform[0]
        },
        setViewportTransform: function(t) {
            var e, i, n, r = this._activeObject, s = !1, o = !0;
            for (this.viewportTransform = t,
            i = 0,
            n = this._objects.length; i < n; i++)
                e = this._objects[i],
                e.group || e.setCoords(s, o);
            return r && "activeSelection" === r.type && r.setCoords(s, o),
            this.calcViewportBoundaries(),
            this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        zoomToPoint: function(t, e) {
            var i = t
              , n = this.viewportTransform.slice(0);
            t = r(t, s(this.viewportTransform)),
            n[0] = e,
            n[3] = e;
            var o = r(t, n);
            return n[4] += i.x - o.x,
            n[5] += i.y - o.y,
            this.setViewportTransform(n)
        },
        setZoom: function(t) {
            return this.zoomToPoint(new fabric.Point(0,0), t),
            this
        },
        absolutePan: function(t) {
            var e = this.viewportTransform.slice(0);
            return e[4] = -t.x,
            e[5] = -t.y,
            this.setViewportTransform(e)
        },
        relativePan: function(t) {
            return this.absolutePan(new fabric.Point(-t.x - this.viewportTransform[4],-t.y - this.viewportTransform[5]))
        },
        getElement: function() {
            return this.lowerCanvasEl
        },
        _onObjectAdded: function(t) {
            this.stateful && t.setupState(),
            t._set("canvas", this),
            t.setCoords(),
            this.fire("object:added", {
                target: t
            }),
            t.fire("added")
        },
        _onObjectRemoved: function(t) {
            this.fire("object:removed", {
                target: t
            }),
            t.fire("removed"),
            delete t.canvas
        },
        clearContext: function(t) {
            return t.clearRect(0, 0, this.width, this.height),
            this
        },
        getContext: function() {
            return this.contextContainer
        },
        clear: function() {
            return this._objects.length = 0,
            this.backgroundImage = null,
            this.overlayImage = null,
            this.backgroundColor = "",
            this.overlayColor = "",
            this._hasITextHandlers && (this.off("mouse:up", this._mouseUpITextHandler),
            this._iTextInstances = null,
            this._hasITextHandlers = !1),
            this.clearContext(this.contextContainer),
            this.fire("canvas:cleared"),
            this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        renderAll: function() {
            var t = this.contextContainer;
            return this.renderCanvas(t, this._objects),
            this
        },
        renderAndReset: function() {
            this.isRendering = 0,
            this.renderAll()
        },
        requestRenderAll: function() {
            return this.isRendering || (this.isRendering = fabric.util.requestAnimFrame(this.renderAndResetBound)),
            this
        },
        calcViewportBoundaries: function() {
            var t = {}
              , e = this.width
              , i = this.height
              , n = s(this.viewportTransform);
            return t.tl = r({
                x: 0,
                y: 0
            }, n),
            t.br = r({
                x: e,
                y: i
            }, n),
            t.tr = new fabric.Point(t.br.x,t.tl.y),
            t.bl = new fabric.Point(t.tl.x,t.br.y),
            this.vptCoords = t,
            t
        },
        renderCanvas: function(t, e) {
            var i = this.viewportTransform;
            this.isRendering && (fabric.util.cancelAnimFrame(this.isRendering),
            this.isRendering = 0),
            this.calcViewportBoundaries(),
            this.clearContext(t),
            this.fire("before:render"),
            this.clipTo && fabric.util.clipContext(this, t),
            this._renderBackground(t),
            t.save(),
            t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
            this._renderObjects(t, e),
            t.restore(),
            !this.controlsAboveOverlay && this.interactive && this.drawControls(t),
            this.clipTo && t.restore(),
            this._renderOverlay(t),
            this.controlsAboveOverlay && this.interactive && this.drawControls(t),
            this.fire("after:render")
        },
        _renderObjects: function(t, e) {
            var i, n;
            for (i = 0,
            n = e.length; i < n; ++i)
                e[i] && e[i].render(t)
        },
        _renderBackgroundOrOverlay: function(t, e) {
            var i, n = this[e + "Color"];
            n && (t.fillStyle = n.toLive ? n.toLive(t, this) : n,
            t.fillRect(n.offsetX || 0, n.offsetY || 0, this.width, this.height)),
            n = this[e + "Image"],
            n && (this[e + "Vpt"] && (i = this.viewportTransform,
            t.save(),
            t.transform(i[0], i[1], i[2], i[3], i[4], i[5])),
            n.render(t),
            this[e + "Vpt"] && t.restore())
        },
        _renderBackground: function(t) {
            this._renderBackgroundOrOverlay(t, "background")
        },
        _renderOverlay: function(t) {
            this._renderBackgroundOrOverlay(t, "overlay")
        },
        getCenter: function() {
            return {
                top: this.height / 2,
                left: this.width / 2
            }
        },
        centerObjectH: function(t) {
            return this._centerObject(t, new fabric.Point(this.getCenter().left,t.getCenterPoint().y))
        },
        centerObjectV: function(t) {
            return this._centerObject(t, new fabric.Point(t.getCenterPoint().x,this.getCenter().top))
        },
        centerObject: function(t) {
            var e = this.getCenter();
            return this._centerObject(t, new fabric.Point(e.left,e.top))
        },
        viewportCenterObject: function(t) {
            var e = this.getVpCenter();
            return this._centerObject(t, e)
        },
        viewportCenterObjectH: function(t) {
            var e = this.getVpCenter();
            return this._centerObject(t, new fabric.Point(e.x,t.getCenterPoint().y)),
            this
        },
        viewportCenterObjectV: function(t) {
            var e = this.getVpCenter();
            return this._centerObject(t, new fabric.Point(t.getCenterPoint().x,e.y))
        },
        getVpCenter: function() {
            var t = this.getCenter()
              , e = s(this.viewportTransform);
            return r({
                x: t.left,
                y: t.top
            }, e)
        },
        _centerObject: function(t, e) {
            return t.setPositionByOrigin(e, "center", "center"),
            t.setCoords(),
            this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        toDatalessJSON: function(t) {
            return this.toDatalessObject(t)
        },
        toObject: function(t) {
            return this._toObjectMethod("toObject", t)
        },
        toDatalessObject: function(t) {
            return this._toObjectMethod("toDatalessObject", t)
        },
        _toObjectMethod: function(e, i) {
            var n = {
                version: fabric.version,
                objects: this._toObjects(e, i)
            };
            return t(n, this.__serializeBgOverlay(e, i)),
            fabric.util.populateWithProperties(this, n, i),
            n
        },
        _toObjects: function(t, e) {
            return this.getObjects().filter(function(t) {
                return !t.excludeFromExport
            }).map(function(i) {
                return this._toObject(i, t, e)
            }, this)
        },
        _toObject: function(t, e, i) {
            var n;
            this.includeDefaultValues || (n = t.includeDefaultValues,
            t.includeDefaultValues = !1);
            var r = t[e](i);
            return this.includeDefaultValues || (t.includeDefaultValues = n),
            r
        },
        __serializeBgOverlay: function(t, e) {
            var i = {}
              , n = this.backgroundImage
              , r = this.overlayImage;
            return this.backgroundColor && (i.background = this.backgroundColor.toObject ? this.backgroundColor.toObject(e) : this.backgroundColor),
            this.overlayColor && (i.overlay = this.overlayColor.toObject ? this.overlayColor.toObject(e) : this.overlayColor),
            n && !n.excludeFromExport && (i.backgroundImage = this._toObject(n, t, e)),
            r && !r.excludeFromExport && (i.overlayImage = this._toObject(r, t, e)),
            i
        },
        svgViewportTransformation: !0,
        toSVG: function(t, e) {
            t || (t = {});
            var i = [];
            return this._setSVGPreamble(i, t),
            this._setSVGHeader(i, t),
            this._setSVGBgOverlayColor(i, "backgroundColor"),
            this._setSVGBgOverlayImage(i, "backgroundImage", e),
            this._setSVGObjects(i, e),
            this._setSVGBgOverlayColor(i, "overlayColor"),
            this._setSVGBgOverlayImage(i, "overlayImage", e),
            i.push("</svg>"),
            i.join("")
        },
        _setSVGPreamble: function(t, e) {
            e.suppressPreamble || t.push('<?xml version="1.0" encoding="', e.encoding || "UTF-8", '" standalone="no" ?>\n', '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ', '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n')
        },
        _setSVGHeader: function(t, e) {
            var i, r = e.width || this.width, s = e.height || this.height, o = 'viewBox="0 0 ' + this.width + " " + this.height + '" ', a = fabric.Object.NUM_FRACTION_DIGITS;
            e.viewBox ? o = 'viewBox="' + e.viewBox.x + " " + e.viewBox.y + " " + e.viewBox.width + " " + e.viewBox.height + '" ' : this.svgViewportTransformation && (i = this.viewportTransform,
            o = 'viewBox="' + n(-i[4] / i[0], a) + " " + n(-i[5] / i[3], a) + " " + n(this.width / i[0], a) + " " + n(this.height / i[3], a) + '" '),
            t.push("<svg ", 'xmlns="http://www.w3.org/2000/svg" ', 'xmlns:xlink="http://www.w3.org/1999/xlink" ', 'version="1.1" ', 'width="', r, '" ', 'height="', s, '" ', o, 'xml:space="preserve">\n', "<desc>Created with Fabric.js ", fabric.version, "</desc>\n", "<defs>\n", this.createSVGFontFacesMarkup(), this.createSVGRefElementsMarkup(), "</defs>\n")
        },
        createSVGRefElementsMarkup: function() {
            var t = this
              , e = ["backgroundColor", "overlayColor"].map(function(e) {
                var i = t[e];
                if (i && i.toLive)
                    return i.toSVG(t, !1)
            });
            return e.join("")
        },
        createSVGFontFacesMarkup: function() {
            var t, e, i, n, r, s, o, a, h, c = "", l = {}, u = fabric.fontPaths, f = this.getObjects();
            for (a = 0,
            h = f.length; a < h; a++)
                if (t = f[a],
                e = t.fontFamily,
                t.type.indexOf("text") !== -1 && !l[e] && u[e] && (l[e] = !0,
                t.styles)) {
                    i = t.styles;
                    for (r in i) {
                        n = i[r];
                        for (o in n)
                            s = n[o],
                            e = s.fontFamily,
                            !l[e] && u[e] && (l[e] = !0)
                    }
                }
            for (var d in l)
                c += ["\t\t@font-face {\n", "\t\t\tfont-family: '", d, "';\n", "\t\t\tsrc: url('", u[d], "');\n", "\t\t}\n"].join("");
            return c && (c = ['\t<style type="text/css">', "<![CDATA[\n", c, "]]>", "</style>\n"].join("")),
            c
        },
        _setSVGObjects: function(t, e) {
            var i, n, r, s = this.getObjects();
            for (n = 0,
            r = s.length; n < r; n++)
                i = s[n],
                i.excludeFromExport || this._setSVGObject(t, i, e)
        },
        _setSVGObject: function(t, e, i) {
            t.push(e.toSVG(i))
        },
        _setSVGBgOverlayImage: function(t, e, i) {
            this[e] && this[e].toSVG && t.push(this[e].toSVG(i))
        },
        _setSVGBgOverlayColor: function(t, e) {
            var i = this[e];
            if (i)
                if (i.toLive) {
                    var n = i.repeat;
                    t.push('<rect transform="translate(', this.width / 2, ",", this.height / 2, ')"', ' x="', i.offsetX - this.width / 2, '" y="', i.offsetY - this.height / 2, '" ', 'width="', "repeat-y" === n || "no-repeat" === n ? i.source.width : this.width, '" height="', "repeat-x" === n || "no-repeat" === n ? i.source.height : this.height, '" fill="url(#SVGID_' + i.id + ')"', "></rect>\n")
                } else
                    t.push('<rect x="0" y="0" ', 'width="', this.width, '" height="', this.height, '" fill="', this[e], '"', "></rect>\n")
        },
        sendToBack: function(t) {
            if (!t)
                return this;
            var e, n, r, s = this._activeObject;
            if (t === s && "activeSelection" === t.type)
                for (r = s._objects,
                e = r.length; e--; )
                    n = r[e],
                    i(this._objects, n),
                    this._objects.unshift(n);
            else
                i(this._objects, t),
                this._objects.unshift(t);
            return this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        bringToFront: function(t) {
            if (!t)
                return this;
            var e, n, r, s = this._activeObject;
            if (t === s && "activeSelection" === t.type)
                for (r = s._objects,
                e = 0; e < r.length; e++)
                    n = r[e],
                    i(this._objects, n),
                    this._objects.push(n);
            else
                i(this._objects, t),
                this._objects.push(t);
            return this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        sendBackwards: function(t, e) {
            if (!t)
                return this;
            var n, r, s, o, a, h = this._activeObject, c = 0;
            if (t === h && "activeSelection" === t.type)
                for (a = h._objects,
                n = 0; n < a.length; n++)
                    r = a[n],
                    s = this._objects.indexOf(r),
                    s > 0 + c && (o = s - 1,
                    i(this._objects, r),
                    this._objects.splice(o, 0, r)),
                    c++;
            else
                s = this._objects.indexOf(t),
                0 !== s && (o = this._findNewLowerIndex(t, s, e),
                i(this._objects, t),
                this._objects.splice(o, 0, t));
            return this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        _findNewLowerIndex: function(t, e, i) {
            var n, r;
            if (i)
                for (n = e,
                r = e - 1; r >= 0; --r) {
                    var s = t.intersectsWithObject(this._objects[r]) || t.isContainedWithinObject(this._objects[r]) || this._objects[r].isContainedWithinObject(t);
                    if (s) {
                        n = r;
                        break
                    }
                }
            else
                n = e - 1;
            return n
        },
        bringForward: function(t, e) {
            if (!t)
                return this;
            var n, r, s, o, a, h = this._activeObject, c = 0;
            if (t === h && "activeSelection" === t.type)
                for (a = h._objects,
                n = a.length; n--; )
                    r = a[n],
                    s = this._objects.indexOf(r),
                    s < this._objects.length - 1 - c && (o = s + 1,
                    i(this._objects, r),
                    this._objects.splice(o, 0, r)),
                    c++;
            else
                s = this._objects.indexOf(t),
                s !== this._objects.length - 1 && (o = this._findNewUpperIndex(t, s, e),
                i(this._objects, t),
                this._objects.splice(o, 0, t));
            return this.renderOnAddRemove && this.requestRenderAll(),
            this
        },
        _findNewUpperIndex: function(t, e, i) {
            var n, r, s;
            if (i)
                for (n = e,
                r = e + 1,
                s = this._objects.length; r < s; ++r) {
                    var o = t.intersectsWithObject(this._objects[r]) || t.isContainedWithinObject(this._objects[r]) || this._objects[r].isContainedWithinObject(t);
                    if (o) {
                        n = r;
                        break
                    }
                }
            else
                n = e + 1;
            return n
        },
        moveTo: function(t, e) {
            return i(this._objects, t),
            this._objects.splice(e, 0, t),
            this.renderOnAddRemove && this.requestRenderAll()
        },
        dispose: function() {
            return this.forEachObject(function(t) {
                t.dispose && t.dispose()
            }),
            this._objects = [],
            this.backgroundImage = null,
            this.overlayImage = null,
            this._iTextInstances = null,
            this.lowerCanvasEl = null,
            this.cacheCanvasEl = null,
            this
        },
        toString: function() {
            return "#<fabric.Canvas (" + this.complexity() + "): { objects: " + this.getObjects().length + " }>"
        }
    }),
    t(fabric.StaticCanvas.prototype, fabric.Observable),
    t(fabric.StaticCanvas.prototype, fabric.Collection),
    t(fabric.StaticCanvas.prototype, fabric.DataURLExporter),
    t(fabric.StaticCanvas, {
        EMPTY_JSON: '{"objects": [], "background": "white"}',
        supports: function(t) {
            var e = fabric.util.createCanvasElement();
            if (!e || !e.getContext)
                return null;
            var i = e.getContext("2d");
            if (!i)
                return null;
            switch (t) {
            case "getImageData":
                return "undefined" != typeof i.getImageData;
            case "setLineDash":
                return "undefined" != typeof i.setLineDash;
            case "toDataURL":
                return "undefined" != typeof e.toDataURL;
            case "toDataURLWithQuality":
                try {
                    return e.toDataURL("image/jpeg", 0),
                    !0
                } catch (n) {}
                return !1;
            default:
                return null
            }
        }
    }),
    fabric.StaticCanvas.prototype.toJSON = fabric.StaticCanvas.prototype.toObject,
    fabric.isLikelyNode && (fabric.StaticCanvas.prototype.createPNGStream = function() {
        var t = fabric.util.getNodeCanvas(this.lowerCanvasEl);
        return t && t.createPNGStream()
    }
    ,
    fabric.StaticCanvas.prototype.createJPEGStream = function(t) {
        var e = fabric.util.getNodeCanvas(this.lowerCanvasEl);
        return e && e.createJPEGStream(t)
    }
    )
}(),
fabric.BaseBrush = fabric.util.createClass({
    color: "rgb(0, 0, 0)",
    width: 1,
    shadow: null,
    strokeLineCap: "round",
    strokeLineJoin: "round",
    strokeMiterLimit: 10,
    strokeDashArray: null,
    setShadow: function(t) {
        return this.shadow = new fabric.Shadow(t),
        this
    },
    _setBrushStyles: function() {
        var t = this.canvas.contextTop;
        t.strokeStyle = this.color,
        t.lineWidth = this.width,
        t.lineCap = this.strokeLineCap,
        t.miterLimit = this.strokeMiterLimit,
        t.lineJoin = this.strokeLineJoin,
        this.strokeDashArray && fabric.StaticCanvas.supports("setLineDash") && t.setLineDash(this.strokeDashArray)
    },
    _setShadow: function() {
        if (this.shadow) {
            var t = this.canvas.contextTop
              , e = this.canvas.getZoom();
            t.shadowColor = this.shadow.color,
            t.shadowBlur = this.shadow.blur * e,
            t.shadowOffsetX = this.shadow.offsetX * e,
            t.shadowOffsetY = this.shadow.offsetY * e
        }
    },
    _resetShadow: function() {
        var t = this.canvas.contextTop;
        t.shadowColor = "",
        t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0
    }
}),
function() {
    fabric.PencilBrush = fabric.util.createClass(fabric.BaseBrush, {
        initialize: function(t) {
            this.canvas = t,
            this._points = []
        },
        onMouseDown: function(t) {
            this._prepareForDrawing(t),
            this._captureDrawingPath(t),
            this._render()
        },
        onMouseMove: function(t) {
            this._captureDrawingPath(t),
            this.canvas.clearContext(this.canvas.contextTop),
            this._render()
        },
        onMouseUp: function() {
            this._finalizeAndAddPath()
        },
        _prepareForDrawing: function(t) {
            var e = new fabric.Point(t.x,t.y);
            this._reset(),
            this._addPoint(e),
            this.canvas.contextTop.moveTo(e.x, e.y)
        },
        _addPoint: function(t) {
            this._points.length > 1 && t.eq(this._points[this._points.length - 1]) || this._points.push(t)
        },
        _reset: function() {
            this._points.length = 0,
            this._setBrushStyles(),
            this._setShadow()
        },
        _captureDrawingPath: function(t) {
            var e = new fabric.Point(t.x,t.y);
            this._addPoint(e)
        },
        _render: function() {
            var t, e, i = this.canvas.contextTop, n = this.canvas.viewportTransform, r = this._points[0], s = this._points[1];
            if (i.save(),
            i.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
            i.beginPath(),
            2 === this._points.length && r.x === s.x && r.y === s.y) {
                var o = this.width / 1e3;
                r = new fabric.Point(r.x,r.y),
                s = new fabric.Point(s.x,s.y),
                r.x -= o,
                s.x += o
            }
            for (i.moveTo(r.x, r.y),
            t = 1,
            e = this._points.length; t < e; t++) {
                var a = r.midPointFrom(s);
                i.quadraticCurveTo(r.x, r.y, a.x, a.y),
                r = this._points[t],
                s = this._points[t + 1]
            }
            i.lineTo(r.x, r.y),
            i.stroke(),
            i.restore()
        },
        convertPointsToSVGPath: function(t) {
            var e, i = [], n = this.width / 1e3, r = new fabric.Point(t[0].x,t[0].y), s = new fabric.Point(t[1].x,t[1].y), o = t.length, a = 1, h = 1, c = o > 2;
            for (c && (a = t[2].x < s.x ? -1 : t[2].x === s.x ? 0 : 1,
            h = t[2].y < s.y ? -1 : t[2].y === s.y ? 0 : 1),
            i.push("M ", r.x - a * n, " ", r.y - h * n, " "),
            e = 1; e < o; e++) {
                if (!r.eq(s)) {
                    var l = r.midPointFrom(s);
                    i.push("Q ", r.x, " ", r.y, " ", l.x, " ", l.y, " ")
                }
                r = t[e],
                e + 1 < t.length && (s = t[e + 1])
            }
            return c && (a = r.x > t[e - 2].x ? 1 : r.x === t[e - 2].x ? 0 : -1,
            h = r.y > t[e - 2].y ? 1 : r.y === t[e - 2].y ? 0 : -1),
            i.push("L ", r.x + a * n, " ", r.y + h * n),
            i
        },
        createPath: function(t) {
            var e = new fabric.Path(t,{
                fill: null,
                stroke: this.color,
                strokeWidth: this.width,
                strokeLineCap: this.strokeLineCap,
                strokeMiterLimit: this.strokeMiterLimit,
                strokeLineJoin: this.strokeLineJoin,
                strokeDashArray: this.strokeDashArray
            })
              , i = new fabric.Point(e.left + e.width / 2,e.top + e.height / 2);
            return i = e.translateToGivenOrigin(i, "center", "center", e.originX, e.originY),
            e.top = i.y,
            e.left = i.x,
            this.shadow && (this.shadow.affectStroke = !0,
            e.setShadow(this.shadow)),
            e
        },
        _finalizeAndAddPath: function() {
            var t = this.canvas.contextTop;
            t.closePath();
            var e = this.convertPointsToSVGPath(this._points).join("");
            if ("M 0 0 Q 0 0 0 0 L 0 0" === e)
                return void this.canvas.requestRenderAll();
            var i = this.createPath(e);
            this.canvas.clearContext(this.canvas.contextTop),
            this.canvas.add(i),
            this.canvas.renderAll(),
            i.setCoords(),
            this._resetShadow(),
            this.canvas.fire("path:created", {
                path: i
            })
        }
    })
}(),
fabric.CircleBrush = fabric.util.createClass(fabric.BaseBrush, {
    width: 10,
    initialize: function(t) {
        this.canvas = t,
        this.points = []
    },
    drawDot: function(t) {
        var e = this.addPoint(t)
          , i = this.canvas.contextTop
          , n = this.canvas.viewportTransform;
        i.save(),
        i.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
        i.fillStyle = e.fill,
        i.beginPath(),
        i.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1),
        i.closePath(),
        i.fill(),
        i.restore()
    },
    onMouseDown: function(t) {
        this.points.length = 0,
        this.canvas.clearContext(this.canvas.contextTop),
        this._setShadow(),
        this.drawDot(t)
    },
    onMouseMove: function(t) {
        this.drawDot(t)
    },
    onMouseUp: function() {
        var t, e, i = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        var n = [];
        for (t = 0,
        e = this.points.length; t < e; t++) {
            var r = this.points[t]
              , s = new fabric.Circle({
                radius: r.radius,
                left: r.x,
                top: r.y,
                originX: "center",
                originY: "center",
                fill: r.fill
            });
            this.shadow && s.setShadow(this.shadow),
            n.push(s)
        }
        var o = new fabric.Group(n,{
            originX: "center",
            originY: "center"
        });
        o.canvas = this.canvas,
        this.canvas.add(o),
        this.canvas.fire("path:created", {
            path: o
        }),
        this.canvas.clearContext(this.canvas.contextTop),
        this._resetShadow(),
        this.canvas.renderOnAddRemove = i,
        this.canvas.requestRenderAll()
    },
    addPoint: function(t) {
        var e = new fabric.Point(t.x,t.y)
          , i = fabric.util.getRandomInt(Math.max(0, this.width - 20), this.width + 20) / 2
          , n = new fabric.Color(this.color).setAlpha(fabric.util.getRandomInt(0, 100) / 100).toRgba();
        return e.radius = i,
        e.fill = n,
        this.points.push(e),
        e
    }
}),
fabric.SprayBrush = fabric.util.createClass(fabric.BaseBrush, {
    width: 10,
    density: 20,
    dotWidth: 1,
    dotWidthVariance: 1,
    randomOpacity: !1,
    optimizeOverlapping: !0,
    initialize: function(t) {
        this.canvas = t,
        this.sprayChunks = []
    },
    onMouseDown: function(t) {
        this.sprayChunks.length = 0,
        this.canvas.clearContext(this.canvas.contextTop),
        this._setShadow(),
        this.addSprayChunk(t),
        this.render()
    },
    onMouseMove: function(t) {
        this.addSprayChunk(t),
        this.render()
    },
    onMouseUp: function() {
        var t = this.canvas.renderOnAddRemove;
        this.canvas.renderOnAddRemove = !1;
        for (var e = [], i = 0, n = this.sprayChunks.length; i < n; i++)
            for (var r = this.sprayChunks[i], s = 0, o = r.length; s < o; s++) {
                var a = new fabric.Rect({
                    width: r[s].width,
                    height: r[s].width,
                    left: r[s].x + 1,
                    top: r[s].y + 1,
                    originX: "center",
                    originY: "center",
                    fill: this.color
                });
                this.shadow && a.setShadow(this.shadow),
                e.push(a)
            }
        this.optimizeOverlapping && (e = this._getOptimizedRects(e));
        var h = new fabric.Group(e,{
            originX: "center",
            originY: "center"
        });
        h.canvas = this.canvas,
        this.canvas.add(h),
        this.canvas.fire("path:created", {
            path: h
        }),
        this.canvas.clearContext(this.canvas.contextTop),
        this._resetShadow(),
        this.canvas.renderOnAddRemove = t,
        this.canvas.requestRenderAll()
    },
    _getOptimizedRects: function(t) {
        var e, i, n, r = {};
        for (i = 0,
        n = t.length; i < n; i++)
            e = t[i].left + "" + t[i].top,
            r[e] || (r[e] = t[i]);
        var s = [];
        for (e in r)
            s.push(r[e]);
        return s
    },
    render: function() {
        var t = this.canvas.contextTop;
        t.fillStyle = this.color;
        var e, i, n = this.canvas.viewportTransform;
        for (t.save(),
        t.transform(n[0], n[1], n[2], n[3], n[4], n[5]),
        e = 0,
        i = this.sprayChunkPoints.length; e < i; e++) {
            var r = this.sprayChunkPoints[e];
            "undefined" != typeof r.opacity && (t.globalAlpha = r.opacity),
            t.fillRect(r.x, r.y, r.width, r.width)
        }
        t.restore()
    },
    addSprayChunk: function(t) {
        this.sprayChunkPoints = [];
        var e, i, n, r, s = this.width / 2;
        for (r = 0; r < this.density; r++) {
            e = fabric.util.getRandomInt(t.x - s, t.x + s),
            i = fabric.util.getRandomInt(t.y - s, t.y + s),
            n = this.dotWidthVariance ? fabric.util.getRandomInt(Math.max(1, this.dotWidth - this.dotWidthVariance), this.dotWidth + this.dotWidthVariance) : this.dotWidth;
            var o = new fabric.Point(e,i);
            o.width = n,
            this.randomOpacity && (o.opacity = fabric.util.getRandomInt(0, 100) / 100),
            this.sprayChunkPoints.push(o)
        }
        this.sprayChunks.push(this.sprayChunkPoints)
    }
}),
fabric.PatternBrush = fabric.util.createClass(fabric.PencilBrush, {
    getPatternSrc: function() {
        var t = 20
          , e = 5
          , i = fabric.document.createElement("canvas")
          , n = i.getContext("2d");
        return i.width = i.height = t + e,
        n.fillStyle = this.color,
        n.beginPath(),
        n.arc(t / 2, t / 2, t / 2, 0, 2 * Math.PI, !1),
        n.closePath(),
        n.fill(),
        i
    },
    getPatternSrcFunction: function() {
        return String(this.getPatternSrc).replace("this.color", '"' + this.color + '"')
    },
    getPattern: function() {
        return this.canvas.contextTop.createPattern(this.source || this.getPatternSrc(), "repeat")
    },
    _setBrushStyles: function() {
        this.callSuper("_setBrushStyles"),
        this.canvas.contextTop.strokeStyle = this.getPattern()
    },
    createPath: function(t) {
        var e = this.callSuper("createPath", t)
          , i = e._getLeftTopCoords().scalarAdd(e.strokeWidth / 2);
        return e.stroke = new fabric.Pattern({
            source: this.source || this.getPatternSrcFunction(),
            offsetX: -i.x,
            offsetY: -i.y
        }),
        e
    }
}),
function() {
    var t = fabric.util.getPointer
      , e = fabric.util.degreesToRadians
      , i = fabric.util.radiansToDegrees
      , n = Math.atan2
      , r = Math.abs
      , s = fabric.StaticCanvas.supports("setLineDash")
      , o = .5;
    fabric.Canvas = fabric.util.createClass(fabric.StaticCanvas, {
        initialize: function(t, e) {
            e || (e = {}),
            this.renderAndResetBound = this.renderAndReset.bind(this),
            this._initStatic(t, e),
            this._initInteractive(),
            this._createCacheCanvas()
        },
        uniScaleTransform: !1,
        uniScaleKey: "shiftKey",
        centeredScaling: !1,
        centeredRotation: !1,
        centeredKey: "altKey",
        altActionKey: "shiftKey",
        interactive: !0,
        selection: !0,
        selectionKey: "shiftKey",
        altSelectionKey: null,
        selectionColor: "rgba(100, 100, 255, 0.3)",
        selectionDashArray: [],
        selectionBorderColor: "rgba(255, 255, 255, 0.3)",
        selectionLineWidth: 1,
        selectionFullyContained: !1,
        hoverCursor: "move",
        moveCursor: "move",
        defaultCursor: "default",
        freeDrawingCursor: "crosshair",
        rotationCursor: "crosshair",
        notAllowedCursor: "not-allowed",
        containerClass: "canvas-container",
        perPixelTargetFind: !1,
        targetFindTolerance: 0,
        skipTargetFind: !1,
        isDrawingMode: !1,
        preserveObjectStacking: !1,
        snapAngle: 0,
        snapThreshold: null,
        stopContextMenu: !1,
        fireRightClick: !1,
        fireMiddleClick: !1,
        _initInteractive: function() {
            this._currentTransform = null,
            this._groupSelector = null,
            this._initWrapperElement(),
            this._createUpperCanvas(),
            this._initEventListeners(),
            this._initRetinaScaling(),
            this.freeDrawingBrush = fabric.PencilBrush && new fabric.PencilBrush(this),
            this.calcOffset()
        },
        _chooseObjectsToRender: function() {
            var t, e, i, n = this.getActiveObjects();
            if (n.length > 0 && !this.preserveObjectStacking) {
                e = [],
                i = [];
                for (var r = 0, s = this._objects.length; r < s; r++)
                    t = this._objects[r],
                    n.indexOf(t) === -1 ? e.push(t) : i.push(t);
                n.length > 1 && (this._activeObject._objects = i),
                e.push.apply(e, i)
            } else
                e = this._objects;
            return e
        },
        renderAll: function() {
            !this.contextTopDirty || this._groupSelector || this.isDrawingMode || (this.clearContext(this.contextTop),
            this.contextTopDirty = !1),
            this.isDrawingMode && this._isCurrentlyDrawing && this.freeDrawingBrush && this.freeDrawingBrush._render();
            var t = this.contextContainer;
            return this.renderCanvas(t, this._chooseObjectsToRender()),
            this
        },
        renderTop: function() {
            var t = this.contextTop;
            return this.clearContext(t),
            this.selection && this._groupSelector && this._drawSelection(t),
            this.fire("after:render"),
            this.contextTopDirty = !0,
            this
        },
        _resetCurrentTransform: function() {
            var t = this._currentTransform;
            t.target.set({
                scaleX: t.original.scaleX,
                scaleY: t.original.scaleY,
                skewX: t.original.skewX,
                skewY: t.original.skewY,
                left: t.original.left,
                top: t.original.top
            }),
            this._shouldCenterTransform(t.target) ? "rotate" === t.action ? this._setOriginToCenter(t.target) : ("center" !== t.originX && ("right" === t.originX ? t.mouseXSign = -1 : t.mouseXSign = 1),
            "center" !== t.originY && ("bottom" === t.originY ? t.mouseYSign = -1 : t.mouseYSign = 1),
            t.originX = "center",
            t.originY = "center") : (t.originX = t.original.originX,
            t.originY = t.original.originY)
        },
        containsPoint: function(t, e, i) {
            var n, r = !0, s = i || this.getPointer(t, r);
            return n = e.group && e.group === this._activeObject && "activeSelection" === e.group.type ? this._normalizePointer(e.group, s) : {
                x: s.x,
                y: s.y
            },
            e.containsPoint(n) || e._findTargetCorner(s)
        },
        _normalizePointer: function(t, e) {
            var i = t.calcTransformMatrix()
              , n = fabric.util.invertTransform(i)
              , r = this.restorePointerVpt(e);
            return fabric.util.transformPoint(r, n)
        },
        isTargetTransparent: function(t, e, i) {
            var n = this.contextCache
              , r = t.selectionBackgroundColor
              , s = this.viewportTransform;
            t.selectionBackgroundColor = "",
            this.clearContext(n),
            n.save(),
            n.transform(s[0], s[1], s[2], s[3], s[4], s[5]),
            t.render(n),
            n.restore(),
            t === this._activeObject && t._renderControls(n, {
                hasBorders: !1,
                transparentCorners: !1
            }, {
                hasBorders: !1
            }),
            t.selectionBackgroundColor = r;
            var o = fabric.util.isTransparent(n, e, i, this.targetFindTolerance);
            return o
        },
        _isSelectionKeyPressed: function(t) {
            var e = !1;
            return e = "[object Array]" === Object.prototype.toString.call(this.selectionKey) ? !!this.selectionKey.find(function(e) {
                return t[e] === !0
            }) : t[this.selectionKey]
        },
        _shouldClearSelection: function(t, e) {
            var i = this.getActiveObjects()
              , n = this._activeObject;
            return !e || e && n && i.length > 1 && i.indexOf(e) === -1 && n !== e && !this._isSelectionKeyPressed(t) || e && !e.evented || e && !e.selectable && n && n !== e
        },
        _shouldCenterTransform: function(t) {
            if (t) {
                var e, i = this._currentTransform;
                return "scale" === i.action || "scaleX" === i.action || "scaleY" === i.action ? e = this.centeredScaling || t.centeredScaling : "rotate" === i.action && (e = this.centeredRotation || t.centeredRotation),
                e ? !i.altKey : i.altKey
            }
        },
        _getOriginFromCorner: function(t, e) {
            var i = {
                x: t.originX,
                y: t.originY
            };
            return "ml" === e || "tl" === e || "bl" === e ? i.x = "right" : "mr" !== e && "tr" !== e && "br" !== e || (i.x = "left"),
            "tl" === e || "mt" === e || "tr" === e ? i.y = "bottom" : "bl" !== e && "mb" !== e && "br" !== e || (i.y = "top"),
            i
        },
        _getActionFromCorner: function(t, e, i) {
            if (!e)
                return "drag";
            switch (e) {
            case "mtr":
                return "rotate";
            case "ml":
            case "mr":
                return i[this.altActionKey] ? "skewY" : "scaleX";
            case "mt":
            case "mb":
                return i[this.altActionKey] ? "skewX" : "scaleY";
            default:
                return "scale"
            }
        },
        _setupCurrentTransform: function(t, i) {
            if (i) {
                var n = this.getPointer(t)
                  , r = i._findTargetCorner(this.getPointer(t, !0))
                  , s = this._getActionFromCorner(i, r, t)
                  , o = this._getOriginFromCorner(i, r);
                this._currentTransform = {
                    target: i,
                    action: s,
                    corner: r,
                    scaleX: i.scaleX,
                    scaleY: i.scaleY,
                    skewX: i.skewX,
                    skewY: i.skewY,
                    offsetX: n.x - i.left,
                    offsetY: n.y - i.top,
                    originX: o.x,
                    originY: o.y,
                    ex: n.x,
                    ey: n.y,
                    lastX: n.x,
                    lastY: n.y,
                    left: i.left,
                    top: i.top,
                    theta: e(i.angle),
                    width: i.width * i.scaleX,
                    mouseXSign: 1,
                    mouseYSign: 1,
                    shiftKey: t.shiftKey,
                    altKey: t[this.centeredKey]
                },
                this._currentTransform.original = {
                    left: i.left,
                    top: i.top,
                    scaleX: i.scaleX,
                    scaleY: i.scaleY,
                    skewX: i.skewX,
                    skewY: i.skewY,
                    originX: o.x,
                    originY: o.y
                },
                this._resetCurrentTransform()
            }
        },
        _translateObject: function(t, e) {
            var i = this._currentTransform
              , n = i.target
              , r = t - i.offsetX
              , s = e - i.offsetY
              , o = !n.get("lockMovementX") && n.left !== r
              , a = !n.get("lockMovementY") && n.top !== s;
            return o && n.set("left", r),
            a && n.set("top", s),
            o || a
        },
        _changeSkewTransformOrigin: function(t, e, i) {
            var n = "originX"
              , r = {
                0: "center"
            }
              , s = e.target.skewX
              , o = "left"
              , a = "right"
              , h = "mt" === e.corner || "ml" === e.corner ? 1 : -1
              , c = 1;
            t = t > 0 ? 1 : -1,
            "y" === i && (s = e.target.skewY,
            o = "top",
            a = "bottom",
            n = "originY"),
            r[-1] = o,
            r[1] = a,
            e.target.flipX && (c *= -1),
            e.target.flipY && (c *= -1),
            0 === s ? (e.skewSign = -h * t * c,
            e[n] = r[-t]) : (s = s > 0 ? 1 : -1,
            e.skewSign = s,
            e[n] = r[s * h * c])
        },
        _skewObject: function(t, e, i) {
            var n = this._currentTransform
              , r = n.target
              , s = !1
              , o = r.get("lockSkewingX")
              , a = r.get("lockSkewingY");
            if (o && "x" === i || a && "y" === i)
                return !1;
            var h, c, l = r.getCenterPoint(), u = r.toLocalPoint(new fabric.Point(t,e), "center", "center")[i], f = r.toLocalPoint(new fabric.Point(n.lastX,n.lastY), "center", "center")[i], d = r._getTransformedDimensions();
            return this._changeSkewTransformOrigin(u - f, n, i),
            h = r.toLocalPoint(new fabric.Point(t,e), n.originX, n.originY)[i],
            c = r.translateToOriginPoint(l, n.originX, n.originY),
            s = this._setObjectSkew(h, n, i, d),
            n.lastX = t,
            n.lastY = e,
            r.setPositionByOrigin(c, n.originX, n.originY),
            s
        },
        _setObjectSkew: function(t, e, i, n) {
            var r, s, o, a, h, c, l, u, f, d = e.target, p = !1, g = e.skewSign;
            return "x" === i ? (a = "y",
            h = "Y",
            c = "X",
            u = 0,
            f = d.skewY) : (a = "x",
            h = "X",
            c = "Y",
            u = d.skewX,
            f = 0),
            o = d._getTransformedDimensions(u, f),
            l = 2 * Math.abs(t) - o[i],
            l <= 2 ? r = 0 : (r = g * Math.atan(l / d["scale" + c] / (o[a] / d["scale" + h])),
            r = fabric.util.radiansToDegrees(r)),
            p = d["skew" + c] !== r,
            d.set("skew" + c, r),
            0 !== d["skew" + h] && (s = d._getTransformedDimensions(),
            r = n[a] / s[a] * d["scale" + h],
            d.set("scale" + h, r)),
            p
        },
        _scaleObject: function(t, e, i) {
            var n = this._currentTransform
              , r = n.target
              , s = r.get("lockScalingX")
              , o = r.get("lockScalingY")
              , a = r.get("lockScalingFlip");
            if (s && o)
                return !1;
            var h = r.translateToOriginPoint(r.getCenterPoint(), n.originX, n.originY)
              , c = r.toLocalPoint(new fabric.Point(t,e), n.originX, n.originY)
              , l = r._getTransformedDimensions()
              , u = !1;
            return this._setLocalMouse(c, n),
            u = this._setObjectScale(c, n, s, o, i, a, l),
            r.setPositionByOrigin(h, n.originX, n.originY),
            u
        },
        _setObjectScale: function(t, e, i, n, r, s, o) {
            var a, h, c, l, u = e.target, f = !1, d = !1, p = !1;
            return c = t.x * u.scaleX / o.x,
            l = t.y * u.scaleY / o.y,
            a = u.scaleX !== c,
            h = u.scaleY !== l,
            s && c <= 0 && c < u.scaleX && (f = !0,
            t.x = 0),
            s && l <= 0 && l < u.scaleY && (d = !0,
            t.y = 0),
            "equally" !== r || i || n ? r ? "x" !== r || u.get("lockUniScaling") ? "y" !== r || u.get("lockUniScaling") || d || n || u.set("scaleY", l) && (p = p || h) : f || i || u.set("scaleX", c) && (p = p || a) : (f || i || u.set("scaleX", c) && (p = p || a),
            d || n || u.set("scaleY", l) && (p = p || h)) : p = this._scaleObjectEqually(t, u, e, o),
            e.newScaleX = c,
            e.newScaleY = l,
            f || d || this._flipObject(e, r),
            p
        },
        _scaleObjectEqually: function(t, e, i, n) {
            var r, s = t.y + t.x, o = n.y * i.original.scaleY / e.scaleY + n.x * i.original.scaleX / e.scaleX, a = t.x < 0 ? -1 : 1, h = t.y < 0 ? -1 : 1;
            return i.newScaleX = a * Math.abs(i.original.scaleX * s / o),
            i.newScaleY = h * Math.abs(i.original.scaleY * s / o),
            r = i.newScaleX !== e.scaleX || i.newScaleY !== e.scaleY,
            e.set("scaleX", i.newScaleX),
            e.set("scaleY", i.newScaleY),
            r
        },
        _flipObject: function(t, e) {
            t.newScaleX < 0 && "y" !== e && ("left" === t.originX ? t.originX = "right" : "right" === t.originX && (t.originX = "left")),
            t.newScaleY < 0 && "x" !== e && ("top" === t.originY ? t.originY = "bottom" : "bottom" === t.originY && (t.originY = "top"))
        },
        _setLocalMouse: function(t, e) {
            var i = e.target
              , n = this.getZoom()
              , s = i.padding / n;
            "right" === e.originX ? t.x *= -1 : "center" === e.originX && (t.x *= 2 * e.mouseXSign,
            t.x < 0 && (e.mouseXSign = -e.mouseXSign)),
            "bottom" === e.originY ? t.y *= -1 : "center" === e.originY && (t.y *= 2 * e.mouseYSign,
            t.y < 0 && (e.mouseYSign = -e.mouseYSign)),
            r(t.x) > s ? t.x < 0 ? t.x += s : t.x -= s : t.x = 0,
            r(t.y) > s ? t.y < 0 ? t.y += s : t.y -= s : t.y = 0
        },
        _rotateObject: function(t, e) {
            var r = this._currentTransform;
            if (r.target.get("lockRotation"))
                return !1;
            var s = n(r.ey - r.top, r.ex - r.left)
              , o = n(e - r.top, t - r.left)
              , a = i(o - s + r.theta)
              , h = !0;
            if (r.target.snapAngle > 0) {
                var c = r.target.snapAngle
                  , l = r.target.snapThreshold || c
                  , u = Math.ceil(a / c) * c
                  , f = Math.floor(a / c) * c;
                Math.abs(a - f) < l ? a = f : Math.abs(a - u) < l && (a = u)
            }
            return a < 0 && (a = 360 + a),
            a %= 360,
            r.target.angle === a ? h = !1 : r.target.angle = a,
            h
        },
        setCursor: function(t) {
            this.upperCanvasEl.style.cursor = t
        },
        _resetObjectTransform: function(t) {
            t.scaleX = 1,
            t.scaleY = 1,
            t.skewX = 0,
            t.skewY = 0,
            t.rotate(0)
        },
        _drawSelection: function(t) {
            var e = this._groupSelector
              , i = e.left
              , n = e.top
              , a = r(i)
              , h = r(n);
            if (this.selectionColor && (t.fillStyle = this.selectionColor,
            t.fillRect(e.ex - (i > 0 ? 0 : -i), e.ey - (n > 0 ? 0 : -n), a, h)),
            this.selectionLineWidth && this.selectionBorderColor)
                if (t.lineWidth = this.selectionLineWidth,
                t.strokeStyle = this.selectionBorderColor,
                this.selectionDashArray.length > 1 && !s) {
                    var c = e.ex + o - (i > 0 ? 0 : a)
                      , l = e.ey + o - (n > 0 ? 0 : h);
                    t.beginPath(),
                    fabric.util.drawDashedLine(t, c, l, c + a, l, this.selectionDashArray),
                    fabric.util.drawDashedLine(t, c, l + h - 1, c + a, l + h - 1, this.selectionDashArray),
                    fabric.util.drawDashedLine(t, c, l, c, l + h, this.selectionDashArray),
                    fabric.util.drawDashedLine(t, c + a - 1, l, c + a - 1, l + h, this.selectionDashArray),
                    t.closePath(),
                    t.stroke()
                } else
                    fabric.Object.prototype._setLineDash.call(this, t, this.selectionDashArray),
                    t.strokeRect(e.ex + o - (i > 0 ? 0 : a), e.ey + o - (n > 0 ? 0 : h), a, h)
        },
        findTarget: function(t, e) {
            if (!this.skipTargetFind) {
                var i, n, r = !0, s = this.getPointer(t, r), o = this._activeObject, a = this.getActiveObjects();
                if (this.targets = [],
                a.length > 1 && !e && o === this._searchPossibleTargets([o], s))
                    return o;
                if (1 === a.length && o._findTargetCorner(s))
                    return o;
                if (1 === a.length && o === this._searchPossibleTargets([o], s)) {
                    if (!this.preserveObjectStacking)
                        return o;
                    i = o,
                    n = this.targets,
                    this.targets = []
                }
                var h = this._searchPossibleTargets(this._objects, s);
                return t[this.altSelectionKey] && h && i && h !== i && (h = i,
                this.targets = n),
                h
            }
        },
        _checkTarget: function(t, e) {
            if (e && e.visible && e.evented && this.containsPoint(null, e, t)) {
                if (!this.perPixelTargetFind && !e.perPixelTargetFind || e.isEditing)
                    return !0;
                var i = this.isTargetTransparent(e, t.x, t.y);
                if (!i)
                    return !0
            }
        },
        _searchPossibleTargets: function(t, e) {
            for (var i, n, r, s = t.length; s--; )
                if (this._checkTarget(e, t[s])) {
                    i = t[s],
                    "group" === i.type && i.subTargetCheck && (n = this._normalizePointer(i, e),
                    r = this._searchPossibleTargets(i._objects, n),
                    r && this.targets.push(r));
                    break
                }
            return i
        },
        restorePointerVpt: function(t) {
            return fabric.util.transformPoint(t, fabric.util.invertTransform(this.viewportTransform))
        },
        getPointer: function(e, i, n) {
            n || (n = this.upperCanvasEl);
            var r, s = t(e), o = n.getBoundingClientRect(), a = o.width || 0, h = o.height || 0;
            return a && h || ("top"in o && "bottom"in o && (h = Math.abs(o.top - o.bottom)),
            "right"in o && "left"in o && (a = Math.abs(o.right - o.left))),
            this.calcOffset(),
            s.x = s.x - this._offset.left,
            s.y = s.y - this._offset.top,
            i || (s = this.restorePointerVpt(s)),
            r = 0 === a || 0 === h ? {
                width: 1,
                height: 1
            } : {
                width: n.width / a,
                height: n.height / h
            },
            {
                x: s.x * r.width,
                y: s.y * r.height
            }
        },
        _createUpperCanvas: function() {
            var t = this.lowerCanvasEl.className.replace(/\s*lower-canvas\s*/, "");
            this.upperCanvasEl ? this.upperCanvasEl.className = "" : this.upperCanvasEl = this._createCanvasElement(),
            fabric.util.addClass(this.upperCanvasEl, "upper-canvas " + t),
            this.wrapperEl.appendChild(this.upperCanvasEl),
            this._copyCanvasStyle(this.lowerCanvasEl, this.upperCanvasEl),
            this._applyCanvasStyle(this.upperCanvasEl),
            this.contextTop = this.upperCanvasEl.getContext("2d")
        },
        _createCacheCanvas: function() {
            this.cacheCanvasEl = this._createCanvasElement(),
            this.cacheCanvasEl.setAttribute("width", this.width),
            this.cacheCanvasEl.setAttribute("height", this.height),
            this.contextCache = this.cacheCanvasEl.getContext("2d")
        },
        _initWrapperElement: function() {
            this.wrapperEl = fabric.util.wrapElement(this.lowerCanvasEl, "div", {
                "class": this.containerClass
            }),
            fabric.util.setStyle(this.wrapperEl, {
                width: this.width + "px",
                height: this.height + "px",
                position: "relative"
            }),
            fabric.util.makeElementUnselectable(this.wrapperEl)
        },
        _applyCanvasStyle: function(t) {
            var e = this.width || t.width
              , i = this.height || t.height;
            fabric.util.setStyle(t, {
                position: "absolute",
                width: e + "px",
                height: i + "px",
                left: 0,
                top: 0,
                "touch-action": "none"
            }),
            t.width = e,
            t.height = i,
            fabric.util.makeElementUnselectable(t)
        },
        _copyCanvasStyle: function(t, e) {
            e.style.cssText = t.style.cssText
        },
        getSelectionContext: function() {
            return this.contextTop
        },
        getSelectionElement: function() {
            return this.upperCanvasEl
        },
        getActiveObject: function() {
            return this._activeObject
        },
        getActiveObjects: function() {
            var t = this._activeObject;
            return t ? "activeSelection" === t.type && t._objects ? t._objects.slice(0) : [t] : []
        },
        _onObjectRemoved: function(t) {
            t === this._activeObject && (this.fire("before:selection:cleared", {
                target: t
            }),
            this._discardActiveObject(),
            this.fire("selection:cleared", {
                target: t
            }),
            t.fire("deselected")),
            this._hoveredTarget === t && (this._hoveredTarget = null),
            this.callSuper("_onObjectRemoved", t)
        },
        _fireSelectionEvents: function(t, e) {
            var i = !1
              , n = this.getActiveObjects()
              , r = []
              , s = []
              , o = {
                e: e
            };
            t.forEach(function(t) {
                n.indexOf(t) === -1 && (i = !0,
                t.fire("deselected", o),
                s.push(t))
            }),
            n.forEach(function(e) {
                t.indexOf(e) === -1 && (i = !0,
                e.fire("selected", o),
                r.push(e))
            }),
            t.length > 0 && n.length > 0 ? (o.selected = r,
            o.deselected = s,
            o.updated = r[0] || s[0],
            o.target = this._activeObject,
            i && this.fire("selection:updated", o)) : n.length > 0 ? (1 === n.length && (o.target = r[0],
            this.fire("object:selected", o)),
            o.selected = r,
            o.target = this._activeObject,
            this.fire("selection:created", o)) : t.length > 0 && (o.deselected = s,
            this.fire("selection:cleared", o))
        },
        setActiveObject: function(t, e) {
            var i = this.getActiveObjects();
            return this._setActiveObject(t, e),
            this._fireSelectionEvents(i, e),
            this
        },
        _setActiveObject: function(t, e) {
            return this._activeObject !== t && (!!this._discardActiveObject(e, t) && (!t.onSelect({
                e: e
            }) && (this._activeObject = t,
            !0)))
        },
        _discardActiveObject: function(t, e) {
            var i = this._activeObject;
            if (i) {
                if (i.onDeselect({
                    e: t,
                    object: e
                }))
                    return !1;
                this._activeObject = null
            }
            return !0
        },
        discardActiveObject: function(t) {
            var e = this.getActiveObjects();
            return e.length && this.fire("before:selection:cleared", {
                target: e[0],
                e: t
            }),
            this._discardActiveObject(t),
            this._fireSelectionEvents(e, t),
            this
        },
        dispose: function() {
            var t = this.wrapperEl;
            return this.removeListeners(),
            t.removeChild(this.upperCanvasEl),
            t.removeChild(this.lowerCanvasEl),
            delete this.upperCanvasEl,
            t.parentNode && t.parentNode.replaceChild(this.lowerCanvasEl, this.wrapperEl),
            delete this.wrapperEl,
            fabric.StaticCanvas.prototype.dispose.call(this),
            this
        },
        clear: function() {
            return this.discardActiveObject(),
            this.clearContext(this.contextTop),
            this.callSuper("clear")
        },
        drawControls: function(t) {
            var e = this._activeObject;
            e && e._renderControls(t)
        },
        _toObject: function(t, e, i) {
            var n = this._realizeGroupTransformOnObject(t)
              , r = this.callSuper("_toObject", t, e, i);
            return this._unwindGroupTransformOnObject(t, n),
            r
        },
        _realizeGroupTransformOnObject: function(t) {
            if (t.group && "activeSelection" === t.group.type && this._activeObject === t.group) {
                var e = ["angle", "flipX", "flipY", "left", "scaleX", "scaleY", "skewX", "skewY", "top"]
                  , i = {};
                return e.forEach(function(e) {
                    i[e] = t[e]
                }),
                this._activeObject.realizeTransform(t),
                i
            }
            return null
        },
        _unwindGroupTransformOnObject: function(t, e) {
            e && t.set(e)
        },
        _setSVGObject: function(t, e, i) {
            var n = this._realizeGroupTransformOnObject(e);
            this.callSuper("_setSVGObject", t, e, i),
            this._unwindGroupTransformOnObject(e, n)
        }
    });
    for (var a in fabric.StaticCanvas)
        "prototype" !== a && (fabric.Canvas[a] = fabric.StaticCanvas[a]);
    fabric.isTouchSupported && (fabric.Canvas.prototype._setCursorFromEvent = function() {}
    )
}(),
function() {
    function t(t, e) {
        return "which"in t ? t.which === e : t.button === e - 1
    }
    var e = {
        mt: 0,
        tr: 1,
        mr: 2,
        br: 3,
        mb: 4,
        bl: 5,
        ml: 6,
        tl: 7
    }
      , i = fabric.util.addListener
      , n = fabric.util.removeListener
      , r = 3
      , s = 2
      , o = 1;
    fabric.util.object.extend(fabric.Canvas.prototype, {
        cursorMap: ["n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize"],
        _initEventListeners: function() {
            this.removeListeners(),
            this._bindEvents(),
            i(fabric.window, "resize", this._onResize),
            i(this.upperCanvasEl, "mousedown", this._onMouseDown),
            i(this.upperCanvasEl, "dblclick", this._onDoubleClick),
            i(this.upperCanvasEl, "mousemove", this._onMouseMove),
            i(this.upperCanvasEl, "mouseout", this._onMouseOut),
            i(this.upperCanvasEl, "mouseenter", this._onMouseEnter),
            i(this.upperCanvasEl, "wheel", this._onMouseWheel),
            i(this.upperCanvasEl, "contextmenu", this._onContextMenu),
            i(this.upperCanvasEl, "touchstart", this._onMouseDown, {
                passive: !1
            }),
            i(this.upperCanvasEl, "touchmove", this._onMouseMove, {
                passive: !1
            }),
            "undefined" != typeof eventjs && "add"in eventjs && (eventjs.add(this.upperCanvasEl, "gesture", this._onGesture),
            eventjs.add(this.upperCanvasEl, "drag", this._onDrag),
            eventjs.add(this.upperCanvasEl, "orientation", this._onOrientationChange),
            eventjs.add(this.upperCanvasEl, "shake", this._onShake),
            eventjs.add(this.upperCanvasEl, "longpress", this._onLongPress))
        },
        _bindEvents: function() {
            this.eventsBinded || (this._onMouseDown = this._onMouseDown.bind(this),
            this._onMouseMove = this._onMouseMove.bind(this),
            this._onMouseUp = this._onMouseUp.bind(this),
            this._onResize = this._onResize.bind(this),
            this._onGesture = this._onGesture.bind(this),
            this._onDrag = this._onDrag.bind(this),
            this._onShake = this._onShake.bind(this),
            this._onLongPress = this._onLongPress.bind(this),
            this._onOrientationChange = this._onOrientationChange.bind(this),
            this._onMouseWheel = this._onMouseWheel.bind(this),
            this._onMouseOut = this._onMouseOut.bind(this),
            this._onMouseEnter = this._onMouseEnter.bind(this),
            this._onContextMenu = this._onContextMenu.bind(this),
            this._onDoubleClick = this._onDoubleClick.bind(this),
            this.eventsBinded = !0)
        },
        removeListeners: function() {
            n(fabric.window, "resize", this._onResize),
            n(this.upperCanvasEl, "mousedown", this._onMouseDown),
            n(this.upperCanvasEl, "mousemove", this._onMouseMove),
            n(this.upperCanvasEl, "mouseout", this._onMouseOut),
            n(this.upperCanvasEl, "mouseenter", this._onMouseEnter),
            n(this.upperCanvasEl, "wheel", this._onMouseWheel),
            n(this.upperCanvasEl, "contextmenu", this._onContextMenu),
            n(this.upperCanvasEl, "doubleclick", this._onDoubleClick),
            n(this.upperCanvasEl, "touchstart", this._onMouseDown),
            n(this.upperCanvasEl, "touchmove", this._onMouseMove),
            "undefined" != typeof eventjs && "remove"in eventjs && (eventjs.remove(this.upperCanvasEl, "gesture", this._onGesture),
            eventjs.remove(this.upperCanvasEl, "drag", this._onDrag),
            eventjs.remove(this.upperCanvasEl, "orientation", this._onOrientationChange),
            eventjs.remove(this.upperCanvasEl, "shake", this._onShake),
            eventjs.remove(this.upperCanvasEl, "longpress", this._onLongPress))
        },
        _onGesture: function(t, e) {
            this.__onTransformGesture && this.__onTransformGesture(t, e)
        },
        _onDrag: function(t, e) {
            this.__onDrag && this.__onDrag(t, e)
        },
        _onMouseWheel: function(t) {
            this.__onMouseWheel(t)
        },
        _onMouseOut: function(t) {
            var e = this._hoveredTarget;
            this.fire("mouse:out", {
                target: e,
                e: t
            }),
            this._hoveredTarget = null,
            e && e.fire("mouseout", {
                e: t
            }),
            this._iTextInstances && this._iTextInstances.forEach(function(t) {
                t.isEditing && t.hiddenTextarea.focus()
            })
        },
        _onMouseEnter: function(t) {
            this.findTarget(t) || (this.fire("mouse:over", {
                target: null,
                e: t
            }),
            this._hoveredTarget = null)
        },
        _onOrientationChange: function(t, e) {
            this.__onOrientationChange && this.__onOrientationChange(t, e)
        },
        _onShake: function(t, e) {
            this.__onShake && this.__onShake(t, e)
        },
        _onLongPress: function(t, e) {
            this.__onLongPress && this.__onLongPress(t, e)
        },
        _onContextMenu: function(t) {
            return this.stopContextMenu && (t.stopPropagation(),
            t.preventDefault()),
            !1
        },
        _onDoubleClick: function(t) {
            this._handleEvent(t, "dblclick")
        },
        _onMouseDown: function(t) {
            this.__onMouseDown(t),
            i(fabric.document, "touchend", this._onMouseUp, {
                passive: !1
            }),
            i(fabric.document, "touchmove", this._onMouseMove, {
                passive: !1
            }),
            n(this.upperCanvasEl, "mousemove", this._onMouseMove),
            n(this.upperCanvasEl, "touchmove", this._onMouseMove),
            "touchstart" === t.type ? n(this.upperCanvasEl, "mousedown", this._onMouseDown) : (i(fabric.document, "mouseup", this._onMouseUp),
            i(fabric.document, "mousemove", this._onMouseMove))
        },
        _onMouseUp: function(t) {
            if (this.__onMouseUp(t),
            n(fabric.document, "mouseup", this._onMouseUp),
            n(fabric.document, "touchend", this._onMouseUp),
            n(fabric.document, "mousemove", this._onMouseMove),
            n(fabric.document, "touchmove", this._onMouseMove),
            i(this.upperCanvasEl, "mousemove", this._onMouseMove),
            i(this.upperCanvasEl, "touchmove", this._onMouseMove, {
                passive: !1
            }),
            "touchend" === t.type) {
                var e = this;
                setTimeout(function() {
                    i(e.upperCanvasEl, "mousedown", e._onMouseDown)
                }, 400)
            }
        },
        _onMouseMove: function(t) {
            !this.allowTouchScrolling && t.preventDefault && t.preventDefault(),
            this.__onMouseMove(t)
        },
        _onResize: function() {
            this.calcOffset()
        },
        _shouldRender: function(t, e) {
            var i = this._activeObject;
            return (!i || !i.isEditing || t !== i) && !!(t && (t.isMoving || t !== i) || !t && i || !t && !i && !this._groupSelector || e && this._previousPointer && this.selection && (e.x !== this._previousPointer.x || e.y !== this._previousPointer.y))
        },
        __onMouseUp: function(e) {
            var i, n = !0, a = this._currentTransform, h = this._groupSelector, c = !h || 0 === h.left && 0 === h.top;
            if (t(e, r))
                return void (this.fireRightClick && this._handleEvent(e, "up", i, r, c));
            if (t(e, s))
                return void (this.fireMiddleClick && this._handleEvent(e, "up", i, s, c));
            if (this.isDrawingMode && this._isCurrentlyDrawing)
                return void this._onMouseUpInDrawingMode(e);
            a && (this._finalizeCurrentTransform(e),
            n = !a.actionPerformed),
            i = n ? this.findTarget(e, !0) : a.target;
            var l = this._shouldRender(i, this.getPointer(e));
            i || !c ? this._maybeGroupObjects(e) : (this._groupSelector = null,
            this._currentTransform = null),
            i && (i.isMoving = !1),
            this._setCursorFromEvent(e, i),
            this._handleEvent(e, "up", i ? i : null, o, c),
            i && (i.__corner = 0),
            l && this.requestRenderAll()
        },
        _handleEvent: function(t, e, i, n, r) {
            var s = "undefined" == typeof i ? this.findTarget(t) : i
              , a = this.targets || []
              , h = {
                e: t,
                target: s,
                subTargets: a,
                button: n || o,
                isClick: r || !1
            };
            this.fire("mouse:" + e, h),
            s && s.fire("mouse" + e, h);
            for (var c = 0; c < a.length; c++)
                a[c].fire("mouse" + e, h)
        },
        _finalizeCurrentTransform: function(t) {
            var e = this._currentTransform
              , i = e.target;
            i._scaling && (i._scaling = !1),
            i.setCoords(),
            this._restoreOriginXY(i),
            (e.actionPerformed || this.stateful && i.hasStateChanged()) && (this.fire("object:modified", {
                target: i,
                e: t
            }),
            i.fire("modified", {
                e: t
            }))
        },
        _restoreOriginXY: function(t) {
            if (this._previousOriginX && this._previousOriginY) {
                var e = t.translateToOriginPoint(t.getCenterPoint(), this._previousOriginX, this._previousOriginY);
                t.originX = this._previousOriginX,
                t.originY = this._previousOriginY,
                t.left = e.x,
                t.top = e.y,
                this._previousOriginX = null,
                this._previousOriginY = null
            }
        },
        _onMouseDownInDrawingMode: function(t) {
            this._isCurrentlyDrawing = !0,
            this.discardActiveObject(t).requestRenderAll(),
            this.clipTo && fabric.util.clipContext(this, this.contextTop);
            var e = this.getPointer(t);
            this.freeDrawingBrush.onMouseDown(e),
            this._handleEvent(t, "down")
        },
        _onMouseMoveInDrawingMode: function(t) {
            if (this._isCurrentlyDrawing) {
                var e = this.getPointer(t);
                this.freeDrawingBrush.onMouseMove(e)
            }
            this.setCursor(this.freeDrawingCursor),
            this._handleEvent(t, "move")
        },
        _onMouseUpInDrawingMode: function(t) {
            this._isCurrentlyDrawing = !1,
            this.clipTo && this.contextTop.restore(),
            this.freeDrawingBrush.onMouseUp(),
            this._handleEvent(t, "up")
        },
        __onMouseDown: function(e) {
            var i = this.findTarget(e) || null;
            if (t(e, r))
                return void (this.fireRightClick && this._handleEvent(e, "down", i, r));
            if (t(e, s))
                return void (this.fireMiddleClick && this._handleEvent(e, "down", i, s));
            if (this.isDrawingMode)
                return void this._onMouseDownInDrawingMode(e);
            if (!this._currentTransform) {
                var n = this.getPointer(e, !0);
                this._previousPointer = n;
                var o = this._shouldRender(i, n)
                  , a = this._shouldGroup(e, i);
                this._shouldClearSelection(e, i) ? this.discardActiveObject(e) : a && (this._handleGrouping(e, i),
                i = this._activeObject),
                !this.selection || i && (i.selectable || i.isEditing || i === this._activeObject) || (this._groupSelector = {
                    ex: n.x,
                    ey: n.y,
                    top: 0,
                    left: 0
                }),
                i && (i.selectable && this.setActiveObject(i, e),
                i !== this._activeObject || !i.__corner && a || (this._beforeTransform(e, i),
                this._setupCurrentTransform(e, i))),
                this._handleEvent(e, "down", i),
                o && this.requestRenderAll()
            }
        },
        _beforeTransform: function(t, e) {
            this.stateful && e.saveState(),
            e._findTargetCorner(this.getPointer(t)) && this.onBeforeScaleRotate(e)
        },
        _setOriginToCenter: function(t) {
            this._previousOriginX = this._currentTransform.target.originX,
            this._previousOriginY = this._currentTransform.target.originY;
            var e = t.getCenterPoint();
            t.originX = "center",
            t.originY = "center",
            t.left = e.x,
            t.top = e.y,
            this._currentTransform.left = t.left,
            this._currentTransform.top = t.top
        },
        _setCenterToOrigin: function(t) {
            var e = t.translateToOriginPoint(t.getCenterPoint(), this._previousOriginX, this._previousOriginY);
            t.originX = this._previousOriginX,
            t.originY = this._previousOriginY,
            t.left = e.x,
            t.top = e.y,
            this._previousOriginX = null,
            this._previousOriginY = null
        },
        __onMouseMove: function(t) {
            var e, i;
            if (this.isDrawingMode)
                return void this._onMouseMoveInDrawingMode(t);
            if (!("undefined" != typeof t.touches && t.touches.length > 1)) {
                var n = this._groupSelector;
                n ? (i = this.getPointer(t, !0),
                n.left = i.x - n.ex,
                n.top = i.y - n.ey,
                this.renderTop()) : this._currentTransform ? this._transformObject(t) : (e = this.findTarget(t) || null,
                this._setCursorFromEvent(t, e),
                this._fireOverOutEvents(e, t)),
                this._handleEvent(t, "move", this._currentTransform ? null : e)
            }
        },
        _fireOverOutEvents: function(t, e) {
            var i, n, r = this._hoveredTarget;
            r !== t && (i = {
                e: e,
                target: t,
                previousTarget: this._hoveredTarget
            },
            n = {
                e: e,
                target: this._hoveredTarget,
                nextTarget: t
            },
            this._hoveredTarget = t),
            t ? r !== t && (r && (this.fire("mouse:out", n),
            r.fire("mouseout", n)),
            this.fire("mouse:over", i),
            t.fire("mouseover", i)) : r && (this.fire("mouse:out", n),
            r.fire("mouseout", n))
        },
        __onMouseWheel: function(t) {
            this._handleEvent(t, "wheel")
        },
        _transformObject: function(t) {
            var e = this.getPointer(t)
              , i = this._currentTransform;
            i.reset = !1,
            i.target.isMoving = !0,
            i.shiftKey = t.shiftKey,
            i.altKey = t[this.centeredKey],
            this._beforeScaleTransform(t, i),
            this._performTransformAction(t, i, e),
            i.actionPerformed && this.requestRenderAll()
        },
        _performTransformAction: function(t, e, i) {
            var n = i.x
              , r = i.y
              , s = e.target
              , o = e.action
              , a = !1;
            "rotate" === o ? (a = this._rotateObject(n, r)) && this._fire("rotating", s, t) : "scale" === o ? (a = this._onScale(t, e, n, r)) && this._fire("scaling", s, t) : "scaleX" === o ? (a = this._scaleObject(n, r, "x")) && this._fire("scaling", s, t) : "scaleY" === o ? (a = this._scaleObject(n, r, "y")) && this._fire("scaling", s, t) : "skewX" === o ? (a = this._skewObject(n, r, "x")) && this._fire("skewing", s, t) : "skewY" === o ? (a = this._skewObject(n, r, "y")) && this._fire("skewing", s, t) : (a = this._translateObject(n, r),
            a && (this._fire("moving", s, t),
            this.setCursor(s.moveCursor || this.moveCursor))),
            e.actionPerformed = e.actionPerformed || a
        },
        _fire: function(t, e, i) {
            this.fire("object:" + t, {
                target: e,
                e: i
            }),
            e.fire(t, {
                e: i
            })
        },
        _beforeScaleTransform: function(t, e) {
            if ("scale" === e.action || "scaleX" === e.action || "scaleY" === e.action) {
                var i = this._shouldCenterTransform(e.target);
                (i && ("center" !== e.originX || "center" !== e.originY) || !i && "center" === e.originX && "center" === e.originY) && (this._resetCurrentTransform(),
                e.reset = !0)
            }
        },
        _onScale: function(t, e, i, n) {
            return this._isUniscalePossible(t, e.target) ? (e.currentAction = "scale",
            this._scaleObject(i, n)) : (e.reset || "scale" !== e.currentAction || this._resetCurrentTransform(),
            e.currentAction = "scaleEqually",
            this._scaleObject(i, n, "equally"))
        },
        _isUniscalePossible: function(t, e) {
            return (t[this.uniScaleKey] || this.uniScaleTransform) && !e.get("lockUniScaling")
        },
        _setCursorFromEvent: function(t, e) {
            if (!e)
                return this.setCursor(this.defaultCursor),
                !1;
            var i = e.hoverCursor || this.hoverCursor
              , n = this._activeObject && "activeSelection" === this._activeObject.type ? this._activeObject : null
              , r = (!n || !n.contains(e)) && e._findTargetCorner(this.getPointer(t, !0));
            r ? this.setCursor(this.getCornerCursor(r, e, t)) : this.setCursor(i)
        },
        getCornerCursor: function(t, i, n) {
            return this.actionIsDisabled(t, i, n) ? this.notAllowedCursor : t in e ? this._getRotatedCornerCursor(t, i, n) : "mtr" === t && i.hasRotatingPoint ? this.rotationCursor : this.defaultCursor
        },
        actionIsDisabled: function(t, e, i) {
            return "mt" === t || "mb" === t ? i[this.altActionKey] ? e.lockSkewingX : e.lockScalingY : "ml" === t || "mr" === t ? i[this.altActionKey] ? e.lockSkewingY : e.lockScalingX : "mtr" === t ? e.lockRotation : this._isUniscalePossible(i, e) ? e.lockScalingX && e.lockScalingY : e.lockScalingX || e.lockScalingY
        },
        _getRotatedCornerCursor: function(t, i, n) {
            var r = Math.round(i.angle % 360 / 45);
            return r < 0 && (r += 8),
            r += e[t],
            n[this.altActionKey] && e[t] % 2 === 0 && (r += 2),
            r %= 8,
            this.cursorMap[r]
        }
    })
}(),
function() {
    var t = Math.min
      , e = Math.max;
    fabric.util.object.extend(fabric.Canvas.prototype, {
        _shouldGroup: function(t, e) {
            var i = this._activeObject;
            return i && this._isSelectionKeyPressed(t) && e && e.selectable && this.selection && (i !== e || "activeSelection" === i.type)
        },
        _handleGrouping: function(t, e) {
            var i = this._activeObject;
            i.__corner || (e !== i || (e = this.findTarget(t, !0))) && (i && "activeSelection" === i.type ? this._updateActiveSelection(e, t) : this._createActiveSelection(e, t))
        },
        _updateActiveSelection: function(t, e) {
            var i = this._activeObject
              , n = i._objects.slice(0);
            i.contains(t) ? (i.removeWithUpdate(t),
            this._hoveredTarget = t,
            1 === i.size() && this._setActiveObject(i.item(0), e)) : (i.addWithUpdate(t),
            this._hoveredTarget = i),
            this._fireSelectionEvents(n, e)
        },
        _createActiveSelection: function(t, e) {
            var i = this.getActiveObjects()
              , n = this._createGroup(t);
            this._hoveredTarget = n,
            this._setActiveObject(n, e),
            this._fireSelectionEvents(i, e)
        },
        _createGroup: function(t) {
            var e = this.getObjects()
              , i = e.indexOf(this._activeObject) < e.indexOf(t)
              , n = i ? [this._activeObject, t] : [t, this._activeObject];
            return this._activeObject.isEditing && this._activeObject.exitEditing(),
            new fabric.ActiveSelection(n,{
                canvas: this
            })
        },
        _groupSelectedObjects: function(t) {
            var e, i = this._collectObjects();
            1 === i.length ? this.setActiveObject(i[0], t) : i.length > 1 && (e = new fabric.ActiveSelection(i.reverse(),{
                canvas: this
            }),
            this.setActiveObject(e, t))
        },
        _collectObjects: function() {
            for (var i, n = [], r = this._groupSelector.ex, s = this._groupSelector.ey, o = r + this._groupSelector.left, a = s + this._groupSelector.top, h = new fabric.Point(t(r, o),t(s, a)), c = new fabric.Point(e(r, o),e(s, a)), l = !this.selectionFullyContained, u = r === o && s === a, f = this._objects.length; f-- && (i = this._objects[f],
            !(i && i.selectable && i.visible && (l && i.intersectsWithRect(h, c) || i.isContainedWithinRect(h, c) || l && i.containsPoint(h) || l && i.containsPoint(c)) && (n.push(i),
            u))); )
                ;
            return n
        },
        _maybeGroupObjects: function(t) {
            this.selection && this._groupSelector && this._groupSelectedObjects(t),
            this.setCursor(this.defaultCursor),
            this._groupSelector = null,
            this._currentTransform = null
        }
    })
}(),
function() {
    var t = fabric.StaticCanvas.supports("toDataURLWithQuality");
    fabric.util.object.extend(fabric.StaticCanvas.prototype, {
        toDataURL: function(t) {
            t || (t = {});
            var e = t.format || "png"
              , i = t.quality || 1
              , n = t.multiplier || 1
              , r = {
                left: t.left || 0,
                top: t.top || 0,
                width: t.width || 0,
                height: t.height || 0
            };
            return this.__toDataURLWithMultiplier(e, i, r, n)
        },
        __toDataURLWithMultiplier: function(t, e, i, n) {
            var r = this.width
              , s = this.height
              , o = (i.width || this.width) * n
              , a = (i.height || this.height) * n
              , h = this.getZoom()
              , c = h * n
              , l = this.viewportTransform
              , u = (l[4] - i.left) * n
              , f = (l[5] - i.top) * n
              , d = [c, 0, 0, c, u, f]
              , p = this.interactive
              , g = this.skipOffscreen
              , v = r !== o || s !== a;
            this.viewportTransform = d,
            this.skipOffscreen = !1,
            this.interactive = !1,
            v && this.setDimensions({
                width: o,
                height: a
            }, {
                backstoreOnly: !0
            }),
            this.renderAll();
            var m = this.__toDataURL(t, e, i);
            return this.interactive = p,
            this.skipOffscreen = g,
            this.viewportTransform = l,
            v && this.setDimensions({
                width: r,
                height: s
            }, {
                backstoreOnly: !0
            }),
            this.renderAll(),
            m
        },
        __toDataURL: function(e, i) {
            var n = this.contextContainer.canvas;
            "jpg" === e && (e = "jpeg");
            var r = t ? n.toDataURL("image/" + e, i) : n.toDataURL("image/" + e);
            return r
        }
    })
}(),
fabric.util.object.extend(fabric.StaticCanvas.prototype, {
    loadFromDatalessJSON: function(t, e, i) {
        return this.loadFromJSON(t, e, i)
    },
    loadFromJSON: function(t, e, i) {
        if (t) {
            var n = "string" == typeof t ? JSON.parse(t) : fabric.util.object.clone(t)
              , r = this
              , s = this.renderOnAddRemove;
            return this.renderOnAddRemove = !1,
            this._enlivenObjects(n.objects, function(t) {
                r.clear(),
                r._setBgOverlay(n, function() {
                    t.forEach(function(t, e) {
                        r.insertAt(t, e)
                    }),
                    r.renderOnAddRemove = s,
                    delete n.objects,
                    delete n.backgroundImage,
                    delete n.overlayImage,
                    delete n.background,
                    delete n.overlay,
                    r._setOptions(n),
                    r.renderAll(),
                    e && e()
                })
            }, i),
            this
        }
    },
    _setBgOverlay: function(t, e) {
        var i = {
            backgroundColor: !1,
            overlayColor: !1,
            backgroundImage: !1,
            overlayImage: !1
        };
        if (!(t.backgroundImage || t.overlayImage || t.background || t.overlay))
            return void (e && e());
        var n = function() {
            i.backgroundImage && i.overlayImage && i.backgroundColor && i.overlayColor && e && e()
        };
        this.__setBgOverlay("backgroundImage", t.backgroundImage, i, n),
        this.__setBgOverlay("overlayImage", t.overlayImage, i, n),
        this.__setBgOverlay("backgroundColor", t.background, i, n),
        this.__setBgOverlay("overlayColor", t.overlay, i, n)
    },
    __setBgOverlay: function(t, e, i, n) {
        var r = this;
        return e ? void ("backgroundImage" === t || "overlayImage" === t ? fabric.util.enlivenObjects([e], function(e) {
            r[t] = e[0],
            i[t] = !0,
            n && n()
        }) : this["set" + fabric.util.string.capitalize(t, !0)](e, function() {
            i[t] = !0,
            n && n()
        })) : (i[t] = !0,
        void (n && n()))
    },
    _enlivenObjects: function(t, e, i) {
        return t && 0 !== t.length ? void fabric.util.enlivenObjects(t, function(t) {
            e && e(t)
        }, null, i) : void (e && e([]))
    },
    _toDataURL: function(t, e) {
        this.clone(function(i) {
            e(i.toDataURL(t))
        })
    },
    _toDataURLWithMultiplier: function(t, e, i) {
        this.clone(function(n) {
            i(n.toDataURLWithMultiplier(t, e))
        })
    },
    clone: function(t, e) {
        var i = JSON.stringify(this.toJSON(e));
        this.cloneWithoutData(function(e) {
            e.loadFromJSON(i, function() {
                t && t(e)
            })
        })
    },
    cloneWithoutData: function(t) {
        var e = fabric.document.createElement("canvas");
        e.width = this.width,
        e.height = this.height;
        var i = new fabric.Canvas(e);
        i.clipTo = this.clipTo,
        this.backgroundImage ? (i.setBackgroundImage(this.backgroundImage.src, function() {
            i.renderAll(),
            t && t(i)
        }),
        i.backgroundImageOpacity = this.backgroundImageOpacity,
        i.backgroundImageStretch = this.backgroundImageStretch) : t && t(i)
    }
}),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend
      , n = e.util.object.clone
      , r = e.util.toFixed
      , s = e.util.string.capitalize
      , o = e.util.degreesToRadians
      , a = e.StaticCanvas.supports("setLineDash")
      , h = !e.isLikelyNode
      , c = 2;
    e.Object || (e.Object = e.util.createClass(e.CommonMethods, {
        type: "object",
        originX: "left",
        originY: "top",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        scaleX: 1,
        scaleY: 1,
        flipX: !1,
        flipY: !1,
        opacity: 1,
        angle: 0,
        skewX: 0,
        skewY: 0,
        cornerSize: 13,
        transparentCorners: !0,
        hoverCursor: null,
        moveCursor: null,
        padding: 0,
        borderColor: "rgba(102,153,255,0.75)",
        borderDashArray: null,
        cornerColor: "rgba(102,153,255,0.5)",
        cornerStrokeColor: null,
        cornerStyle: "rect",
        cornerDashArray: null,
        centeredScaling: !1,
        centeredRotation: !0,
        fill: "rgb(0,0,0)",
        fillRule: "nonzero",
        globalCompositeOperation: "source-over",
        backgroundColor: "",
        selectionBackgroundColor: "",
        stroke: null,
        strokeWidth: 1,
        strokeDashArray: null,
        strokeLineCap: "butt",
        strokeLineJoin: "miter",
        strokeMiterLimit: 10,
        shadow: null,
        borderOpacityWhenMoving: .4,
        borderScaleFactor: 1,
        transformMatrix: null,
        minScaleLimit: 0,
        selectable: !0,
        evented: !0,
        visible: !0,
        hasControls: !0,
        hasBorders: !0,
        hasRotatingPoint: !0,
        rotatingPointOffset: 40,
        perPixelTargetFind: !1,
        includeDefaultValues: !0,
        clipTo: null,
        lockMovementX: !1,
        lockMovementY: !1,
        lockRotation: !1,
        lockScalingX: !1,
        lockScalingY: !1,
        lockUniScaling: !1,
        lockSkewingX: !1,
        lockSkewingY: !1,
        lockScalingFlip: !1,
        excludeFromExport: !1,
        objectCaching: h,
        statefullCache: !1,
        noScaleCache: !0,
        dirty: !0,
        __corner: 0,
        paintFirst: "fill",
        stateProperties: "top left width height scaleX scaleY flipX flipY originX originY transformMatrix stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit angle opacity fill globalCompositeOperation shadow clipTo visible backgroundColor skewX skewY fillRule paintFirst".split(" "),
        cacheProperties: "fill stroke strokeWidth strokeDashArray width height paintFirst strokeLineCap strokeLineJoin strokeMiterLimit backgroundColor".split(" "),
        initialize: function(t) {
            t && this.setOptions(t)
        },
        _createCacheCanvas: function() {
            this._cacheProperties = {},
            this._cacheCanvas = e.document.createElement("canvas"),
            this._cacheContext = this._cacheCanvas.getContext("2d"),
            this._updateCacheCanvas()
        },
        _limitCacheSize: function(t) {
            var i = e.perfLimitSizeTotal
              , n = t.width
              , r = t.height
              , s = e.maxCacheSideLimit
              , o = e.minCacheSideLimit;
            if (n <= s && r <= s && n * r <= i)
                return n < o && (t.width = o),
                r < o && (t.height = o),
                t;
            var a = n / r
              , h = e.util.limitDimsByArea(a, i)
              , c = e.util.capValue
              , l = c(o, h.x, s)
              , u = c(o, h.y, s);
            return n > l && (t.zoomX /= n / l,
            t.width = l,
            t.capped = !0),
            r > u && (t.zoomY /= r / u,
            t.height = u,
            t.capped = !0),
            t
        },
        _getCacheCanvasDimensions: function() {
            var t = this.canvas && this.canvas.getZoom() || 1
              , i = this.getObjectScaling()
              , n = this.canvas && this.canvas._isRetinaScaling() ? e.devicePixelRatio : 1
              , r = this._getNonTransformedDimensions()
              , s = i.scaleX * t * n
              , o = i.scaleY * t * n
              , a = r.x * s
              , h = r.y * o;
            return {
                width: a + c,
                height: h + c,
                zoomX: s,
                zoomY: o,
                x: r.x,
                y: r.y
            }
        },
        _updateCacheCanvas: function() {
            if (this.noScaleCache && this.canvas && this.canvas._currentTransform) {
                var t = this.canvas._currentTransform.target
                  , i = this.canvas._currentTransform.action;
                if (this === t && i.slice && "scale" === i.slice(0, 5))
                    return !1
            }
            var n, r, s = this._cacheCanvas, o = this._limitCacheSize(this._getCacheCanvasDimensions()), a = e.minCacheSideLimit, h = o.width, c = o.height, l = o.zoomX, u = o.zoomY, f = h !== this.cacheWidth || c !== this.cacheHeight, d = this.zoomX !== l || this.zoomY !== u, p = f || d, g = 0, v = 0, m = !1;
            if (f) {
                var _ = this._cacheCanvas.width
                  , b = this._cacheCanvas.height
                  , y = h > _ || c > b
                  , x = (h < .9 * _ || c < .9 * b) && _ > a && b > a;
                m = y || x,
                y && !o.capped && (h > a || c > a) && (g = .1 * h,
                v = .1 * c)
            }
            return !!p && (m ? (s.width = Math.ceil(h + g),
            s.height = Math.ceil(c + v)) : (this._cacheContext.setTransform(1, 0, 0, 1, 0, 0),
            this._cacheContext.clearRect(0, 0, s.width, s.height)),
            n = o.x * l / 2,
            r = o.y * u / 2,
            this.cacheTranslationX = Math.round(s.width / 2 - n) + n,
            this.cacheTranslationY = Math.round(s.height / 2 - r) + r,
            this.cacheWidth = h,
            this.cacheHeight = c,
            this._cacheContext.translate(this.cacheTranslationX, this.cacheTranslationY),
            this._cacheContext.scale(l, u),
            this.zoomX = l,
            this.zoomY = u,
            !0)
        },
        setOptions: function(t) {
            this._setOptions(t),
            this._initGradient(t.fill, "fill"),
            this._initGradient(t.stroke, "stroke"),
            this._initClipping(t),
            this._initPattern(t.fill, "fill"),
            this._initPattern(t.stroke, "stroke")
        },
        transform: function(t) {
            var e;
            e = this.group && !this.group._transformDone ? this.calcTransformMatrix() : this.calcOwnMatrix(),
            t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        },
        toObject: function(t) {
            var i = e.Object.NUM_FRACTION_DIGITS
              , n = {
                type: this.type,
                version: e.version,
                originX: this.originX,
                originY: this.originY,
                left: r(this.left, i),
                top: r(this.top, i),
                width: r(this.width, i),
                height: r(this.height, i),
                fill: this.fill && this.fill.toObject ? this.fill.toObject() : this.fill,
                stroke: this.stroke && this.stroke.toObject ? this.stroke.toObject() : this.stroke,
                strokeWidth: r(this.strokeWidth, i),
                strokeDashArray: this.strokeDashArray ? this.strokeDashArray.concat() : this.strokeDashArray,
                strokeLineCap: this.strokeLineCap,
                strokeLineJoin: this.strokeLineJoin,
                strokeMiterLimit: r(this.strokeMiterLimit, i),
                scaleX: r(this.scaleX, i),
                scaleY: r(this.scaleY, i),
                angle: r(this.angle, i),
                flipX: this.flipX,
                flipY: this.flipY,
                opacity: r(this.opacity, i),
                shadow: this.shadow && this.shadow.toObject ? this.shadow.toObject() : this.shadow,
                visible: this.visible,
                clipTo: this.clipTo && String(this.clipTo),
                backgroundColor: this.backgroundColor,
                fillRule: this.fillRule,
                paintFirst: this.paintFirst,
                globalCompositeOperation: this.globalCompositeOperation,
                transformMatrix: this.transformMatrix ? this.transformMatrix.concat() : null,
                skewX: r(this.skewX, i),
                skewY: r(this.skewY, i)
            };
            return e.util.populateWithProperties(this, n, t),
            this.includeDefaultValues || (n = this._removeDefaultValues(n)),
            n
        },
        toDatalessObject: function(t) {
            return this.toObject(t)
        },
        _removeDefaultValues: function(t) {
            var i = e.util.getKlass(t.type).prototype
              , n = i.stateProperties;
            return n.forEach(function(e) {
                t[e] === i[e] && delete t[e];
                var n = "[object Array]" === Object.prototype.toString.call(t[e]) && "[object Array]" === Object.prototype.toString.call(i[e]);
                n && 0 === t[e].length && 0 === i[e].length && delete t[e]
            }),
            t
        },
        toString: function() {
            return "#<fabric." + s(this.type) + ">"
        },
        getObjectScaling: function() {
            var t = this.scaleX
              , e = this.scaleY;
            if (this.group) {
                var i = this.group.getObjectScaling();
                t *= i.scaleX,
                e *= i.scaleY
            }
            return {
                scaleX: t,
                scaleY: e
            }
        },
        getObjectOpacity: function() {
            var t = this.opacity;
            return this.group && (t *= this.group.getObjectOpacity()),
            t
        },
        _set: function(t, i) {
            var n = "scaleX" === t || "scaleY" === t
              , r = this[t] !== i
              , s = !1;
            return n && (i = this._constrainScale(i)),
            "scaleX" === t && i < 0 ? (this.flipX = !this.flipX,
            i *= -1) : "scaleY" === t && i < 0 ? (this.flipY = !this.flipY,
            i *= -1) : "shadow" !== t || !i || i instanceof e.Shadow ? "dirty" === t && this.group && this.group.set("dirty", i) : i = new e.Shadow(i),
            this[t] = i,
            r && (s = this.group && this.group.isOnACache(),
            this.cacheProperties.indexOf(t) > -1 ? (this.dirty = !0,
            s && this.group.set("dirty", !0)) : s && this.stateProperties.indexOf(t) > -1 && this.group.set("dirty", !0)),
            this
        },
        setOnGroup: function() {},
        getViewportTransform: function() {
            return this.canvas && this.canvas.viewportTransform ? this.canvas.viewportTransform : e.iMatrix.concat()
        },
        isNotVisible: function() {
            return 0 === this.opacity || 0 === this.width && 0 === this.height || !this.visible
        },
        render: function(t) {
            this.isNotVisible() || this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (t.save(),
            this._setupCompositeOperation(t),
            this.drawSelectionBackground(t),
            this.transform(t),
            this._setOpacity(t),
            this._setShadow(t, this),
            this.transformMatrix && t.transform.apply(t, this.transformMatrix),
            this.clipTo && e.util.clipContext(this, t),
            this.shouldCache() ? (this._cacheCanvas || this._createCacheCanvas(),
            this.isCacheDirty() && (this.statefullCache && this.saveState({
                propertySet: "cacheProperties"
            }),
            this.drawObject(this._cacheContext),
            this.dirty = !1),
            this.drawCacheOnCanvas(t)) : (this._removeCacheCanvas(),
            this.dirty = !1,
            this.drawObject(t),
            this.objectCaching && this.statefullCache && this.saveState({
                propertySet: "cacheProperties"
            })),
            this.clipTo && t.restore(),
            t.restore())
        },
        _removeCacheCanvas: function() {
            this._cacheCanvas = null,
            this.cacheWidth = 0,
            this.cacheHeight = 0
        },
        needsItsOwnCache: function() {
            return "stroke" === this.paintFirst && "object" == typeof this.shadow
        },
        shouldCache: function() {
            return this.ownCaching = this.objectCaching && (!this.group || this.needsItsOwnCache() || !this.group.isOnACache()),
            this.ownCaching
        },
        willDrawShadow: function() {
            return !!this.shadow && (0 !== this.shadow.offsetX || 0 !== this.shadow.offsetY)
        },
        drawObject: function(t) {
            this._renderBackground(t),
            this._setStrokeStyles(t, this),
            this._setFillStyles(t, this),
            this._render(t)
        },
        drawCacheOnCanvas: function(t) {
            t.scale(1 / this.zoomX, 1 / this.zoomY),
            t.drawImage(this._cacheCanvas, -this.cacheTranslationX, -this.cacheTranslationY)
        },
        isCacheDirty: function(t) {
            if (this.isNotVisible())
                return !1;
            if (this._cacheCanvas && !t && this._updateCacheCanvas())
                return !0;
            if (this.dirty || this.statefullCache && this.hasStateChanged("cacheProperties")) {
                if (this._cacheCanvas && !t) {
                    var e = this.cacheWidth / this.zoomX
                      , i = this.cacheHeight / this.zoomY;
                    this._cacheContext.clearRect(-e / 2, -i / 2, e, i)
                }
                return !0
            }
            return !1
        },
        _renderBackground: function(t) {
            if (this.backgroundColor) {
                var e = this._getNonTransformedDimensions();
                t.fillStyle = this.backgroundColor,
                t.fillRect(-e.x / 2, -e.y / 2, e.x, e.y),
                this._removeShadow(t)
            }
        },
        _setOpacity: function(t) {
            this.group && !this.group._transformDone ? t.globalAlpha = this.getObjectOpacity() : t.globalAlpha *= this.opacity
        },
        _setStrokeStyles: function(t, e) {
            e.stroke && (t.lineWidth = e.strokeWidth,
            t.lineCap = e.strokeLineCap,
            t.lineJoin = e.strokeLineJoin,
            t.miterLimit = e.strokeMiterLimit,
            t.strokeStyle = e.stroke.toLive ? e.stroke.toLive(t, this) : e.stroke)
        },
        _setFillStyles: function(t, e) {
            e.fill && (t.fillStyle = e.fill.toLive ? e.fill.toLive(t, this) : e.fill)
        },
        _setLineDash: function(t, e, i) {
            e && (1 & e.length && e.push.apply(e, e),
            a ? t.setLineDash(e) : i && i(t))
        },
        _renderControls: function(t, i) {
            var n, r, s, a = this.getViewportTransform(), h = this.calcTransformMatrix();
            i = i || {},
            r = "undefined" != typeof i.hasBorders ? i.hasBorders : this.hasBorders,
            s = "undefined" != typeof i.hasControls ? i.hasControls : this.hasControls,
            h = e.util.multiplyTransformMatrices(a, h),
            n = e.util.qrDecompose(h),
            t.save(),
            t.translate(n.translateX, n.translateY),
            t.lineWidth = 1 * this.borderScaleFactor,
            this.group || (t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1),
            i.forActiveSelection ? (t.rotate(o(n.angle)),
            r && this.drawBordersInGroup(t, n, i)) : (t.rotate(o(this.angle)),
            r && this.drawBorders(t, i)),
            s && this.drawControls(t, i),
            t.restore()
        },
        _setShadow: function(t) {
            if (this.shadow) {
                var i = this.canvas && this.canvas.viewportTransform[0] || 1
                  , n = this.canvas && this.canvas.viewportTransform[3] || 1
                  , r = this.getObjectScaling();
                this.canvas && this.canvas._isRetinaScaling() && (i *= e.devicePixelRatio,
                n *= e.devicePixelRatio),
                t.shadowColor = this.shadow.color,
                t.shadowBlur = this.shadow.blur * e.browserShadowBlurConstant * (i + n) * (r.scaleX + r.scaleY) / 4,
                t.shadowOffsetX = this.shadow.offsetX * i * r.scaleX,
                t.shadowOffsetY = this.shadow.offsetY * n * r.scaleY
            }
        },
        _removeShadow: function(t) {
            this.shadow && (t.shadowColor = "",
            t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0)
        },
        _applyPatternGradientTransform: function(t, e) {
            if (!e || !e.toLive)
                return {
                    offsetX: 0,
                    offsetY: 0
                };
            var i = e.gradientTransform || e.patternTransform
              , n = -this.width / 2 + e.offsetX || 0
              , r = -this.height / 2 + e.offsetY || 0;
            return t.translate(n, r),
            i && t.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
            {
                offsetX: n,
                offsetY: r
            }
        },
        _renderPaintInOrder: function(t) {
            "stroke" === this.paintFirst ? (this._renderStroke(t),
            this._renderFill(t)) : (this._renderFill(t),
            this._renderStroke(t))
        },
        _renderFill: function(t) {
            this.fill && (t.save(),
            this._applyPatternGradientTransform(t, this.fill),
            "evenodd" === this.fillRule ? t.fill("evenodd") : t.fill(),
            t.restore())
        },
        _renderStroke: function(t) {
            this.stroke && 0 !== this.strokeWidth && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
            t.save(),
            this._setLineDash(t, this.strokeDashArray, this._renderDashedStroke),
            this._applyPatternGradientTransform(t, this.stroke),
            t.stroke(),
            t.restore())
        },
        _findCenterFromElement: function() {
            return {
                x: this.left + this.width / 2,
                y: this.top + this.height / 2
            }
        },
        _assignTransformMatrixProps: function() {
            if (this.transformMatrix) {
                var t = e.util.qrDecompose(this.transformMatrix);
                this.flipX = !1,
                this.flipY = !1,
                this.set("scaleX", t.scaleX),
                this.set("scaleY", t.scaleY),
                this.angle = t.angle,
                this.skewX = t.skewX,
                this.skewY = 0
            }
        },
        _removeTransformMatrix: function(t) {
            var i = this._findCenterFromElement();
            this.transformMatrix && (this._assignTransformMatrixProps(),
            i = e.util.transformPoint(i, this.transformMatrix)),
            this.transformMatrix = null,
            t && (this.scaleX *= t.scaleX,
            this.scaleY *= t.scaleY,
            this.cropX = t.cropX,
            this.cropY = t.cropY,
            i.x += t.offsetLeft,
            i.y += t.offsetTop,
            this.width = t.width,
            this.height = t.height),
            this.setPositionByOrigin(i, "center", "center")
        },
        clone: function(t, i) {
            var n = this.toObject(i);
            this.constructor.fromObject ? this.constructor.fromObject(n, t) : e.Object._fromObject("Object", n, t)
        },
        cloneAsImage: function(t, i) {
            var n = this.toDataURL(i);
            return e.util.loadImage(n, function(i) {
                t && t(new e.Image(i))
            }),
            this
        },
        toDataURL: function(t) {
            t || (t = {});
            var i = e.util.createCanvasElement()
              , n = this.getBoundingRect();
            i.width = n.width,
            i.height = n.height,
            e.util.wrapElement(i, "div");
            var r = new e.StaticCanvas(i,{
                enableRetinaScaling: t.enableRetinaScaling
            });
            "jpg" === t.format && (t.format = "jpeg"),
            "jpeg" === t.format && (r.backgroundColor = "#fff");
            var s = {
                left: this.left,
                top: this.top
            };
            this.setPositionByOrigin(new e.Point(r.width / 2,r.height / 2), "center", "center");
            var o = this.canvas;
            r.add(this);
            var a = r.toDataURL(t);
            return this.set(s).setCoords(),
            this.canvas = o,
            r.dispose(),
            r = null,
            a
        },
        isType: function(t) {
            return this.type === t
        },
        complexity: function() {
            return 1
        },
        toJSON: function(t) {
            return this.toObject(t)
        },
        setGradient: function(t, i) {
            i || (i = {});
            var n = {
                colorStops: []
            };
            return n.type = i.type || (i.r1 || i.r2 ? "radial" : "linear"),
            n.coords = {
                x1: i.x1,
                y1: i.y1,
                x2: i.x2,
                y2: i.y2
            },
            (i.r1 || i.r2) && (n.coords.r1 = i.r1,
            n.coords.r2 = i.r2),
            n.gradientTransform = i.gradientTransform,
            e.Gradient.prototype.addColorStop.call(n, i.colorStops),
            this.set(t, e.Gradient.forObject(this, n))
        },
        setPatternFill: function(t) {
            return this.set("fill", new e.Pattern(t))
        },
        setShadow: function(t) {
            return this.set("shadow", t ? new e.Shadow(t) : null)
        },
        setColor: function(t) {
            return this.set("fill", t),
            this
        },
        rotate: function(t) {
            var e = ("center" !== this.originX || "center" !== this.originY) && this.centeredRotation;
            return e && this._setOriginToCenter(),
            this.set("angle", t),
            e && this._resetOrigin(),
            this
        },
        centerH: function() {
            return this.canvas && this.canvas.centerObjectH(this),
            this
        },
        viewportCenterH: function() {
            return this.canvas && this.canvas.viewportCenterObjectH(this),
            this
        },
        centerV: function() {
            return this.canvas && this.canvas.centerObjectV(this),
            this
        },
        viewportCenterV: function() {
            return this.canvas && this.canvas.viewportCenterObjectV(this),
            this
        },
        center: function() {
            return this.canvas && this.canvas.centerObject(this),
            this
        },
        viewportCenter: function() {
            return this.canvas && this.canvas.viewportCenterObject(this),
            this
        },
        getLocalPointer: function(t, i) {
            i = i || this.canvas.getPointer(t);
            var n = new e.Point(i.x,i.y)
              , r = this._getLeftTopCoords();
            return this.angle && (n = e.util.rotatePoint(n, r, o(-this.angle))),
            {
                x: n.x - r.x,
                y: n.y - r.y
            }
        },
        _setupCompositeOperation: function(t) {
            this.globalCompositeOperation && (t.globalCompositeOperation = this.globalCompositeOperation)
        }
    }),
    e.util.createAccessors && e.util.createAccessors(e.Object),
    i(e.Object.prototype, e.Observable),
    e.Object.NUM_FRACTION_DIGITS = 2,
    e.Object._fromObject = function(t, i, r, s) {
        var o = e[t];
        i = n(i, !0),
        e.util.enlivenPatterns([i.fill, i.stroke], function(t) {
            "undefined" != typeof t[0] && (i.fill = t[0]),
            "undefined" != typeof t[1] && (i.stroke = t[1]);
            var e = s ? new o(i[s],i) : new o(i);
            r && r(e)
        })
    }
    ,
    e.Object.__uid = 0)
}("undefined" != typeof exports ? exports : this),
function() {
    var t = fabric.util.degreesToRadians
      , e = {
        left: -.5,
        center: 0,
        right: .5
    }
      , i = {
        top: -.5,
        center: 0,
        bottom: .5
    };
    fabric.util.object.extend(fabric.Object.prototype, {
        translateToGivenOrigin: function(t, n, r, s, o) {
            var a, h, c, l = t.x, u = t.y;
            return "string" == typeof n ? n = e[n] : n -= .5,
            "string" == typeof s ? s = e[s] : s -= .5,
            a = s - n,
            "string" == typeof r ? r = i[r] : r -= .5,
            "string" == typeof o ? o = i[o] : o -= .5,
            h = o - r,
            (a || h) && (c = this._getTransformedDimensions(),
            l = t.x + a * c.x,
            u = t.y + h * c.y),
            new fabric.Point(l,u)
        },
        translateToCenterPoint: function(e, i, n) {
            var r = this.translateToGivenOrigin(e, i, n, "center", "center");
            return this.angle ? fabric.util.rotatePoint(r, e, t(this.angle)) : r
        },
        translateToOriginPoint: function(e, i, n) {
            var r = this.translateToGivenOrigin(e, "center", "center", i, n);
            return this.angle ? fabric.util.rotatePoint(r, e, t(this.angle)) : r
        },
        getCenterPoint: function() {
            var t = new fabric.Point(this.left,this.top);
            return this.translateToCenterPoint(t, this.originX, this.originY)
        },
        getPointByOrigin: function(t, e) {
            var i = this.getCenterPoint();
            return this.translateToOriginPoint(i, t, e)
        },
        toLocalPoint: function(e, i, n) {
            var r, s, o = this.getCenterPoint();
            return r = "undefined" != typeof i && "undefined" != typeof n ? this.translateToGivenOrigin(o, "center", "center", i, n) : new fabric.Point(this.left,this.top),
            s = new fabric.Point(e.x,e.y),
            this.angle && (s = fabric.util.rotatePoint(s, o, -t(this.angle))),
            s.subtractEquals(r)
        },
        setPositionByOrigin: function(t, e, i) {
            var n = this.translateToCenterPoint(t, e, i)
              , r = this.translateToOriginPoint(n, this.originX, this.originY);
            this.set("left", r.x),
            this.set("top", r.y)
        },
        adjustPosition: function(i) {
            var n, r, s = t(this.angle), o = this.getScaledWidth(), a = Math.cos(s) * o, h = Math.sin(s) * o;
            n = "string" == typeof this.originX ? e[this.originX] : this.originX - .5,
            r = "string" == typeof i ? e[i] : i - .5,
            this.left += a * (r - n),
            this.top += h * (r - n),
            this.setCoords(),
            this.originX = i
        },
        _setOriginToCenter: function() {
            this._originalOriginX = this.originX,
            this._originalOriginY = this.originY;
            var t = this.getCenterPoint();
            this.originX = "center",
            this.originY = "center",
            this.left = t.x,
            this.top = t.y
        },
        _resetOrigin: function() {
            var t = this.translateToOriginPoint(this.getCenterPoint(), this._originalOriginX, this._originalOriginY);
            this.originX = this._originalOriginX,
            this.originY = this._originalOriginY,
            this.left = t.x,
            this.top = t.y,
            this._originalOriginX = null,
            this._originalOriginY = null
        },
        _getLeftTopCoords: function() {
            return this.translateToOriginPoint(this.getCenterPoint(), "left", "top")
        },
        onDeselect: function() {}
    })
}(),
function() {
    function t(t) {
        return [new fabric.Point(t.tl.x,t.tl.y), new fabric.Point(t.tr.x,t.tr.y), new fabric.Point(t.br.x,t.br.y), new fabric.Point(t.bl.x,t.bl.y)]
    }
    var e = fabric.util.degreesToRadians
      , i = fabric.util.multiplyTransformMatrices;
    fabric.util.object.extend(fabric.Object.prototype, {
        oCoords: null,
        aCoords: null,
        ownMatrixCache: null,
        matrixCache: null,
        getCoords: function(e, i) {
            this.oCoords || this.setCoords();
            var n = e ? this.aCoords : this.oCoords;
            return t(i ? this.calcCoords(e) : n)
        },
        intersectsWithRect: function(t, e, i, n) {
            var r = this.getCoords(i, n)
              , s = fabric.Intersection.intersectPolygonRectangle(r, t, e);
            return "Intersection" === s.status
        },
        intersectsWithObject: function(t, e, i) {
            var n = fabric.Intersection.intersectPolygonPolygon(this.getCoords(e, i), t.getCoords(e, i));
            return "Intersection" === n.status || t.isContainedWithinObject(this, e, i) || this.isContainedWithinObject(t, e, i)
        },
        isContainedWithinObject: function(t, e, i) {
            for (var n = this.getCoords(e, i), r = 0, s = t._getImageLines(i ? t.calcCoords(e) : e ? t.aCoords : t.oCoords); r < 4; r++)
                if (!t.containsPoint(n[r], s))
                    return !1;
            return !0
        },
        isContainedWithinRect: function(t, e, i, n) {
            var r = this.getBoundingRect(i, n);
            return r.left >= t.x && r.left + r.width <= e.x && r.top >= t.y && r.top + r.height <= e.y
        },
        containsPoint: function(t, e, i, n) {
            var e = e || this._getImageLines(n ? this.calcCoords(i) : i ? this.aCoords : this.oCoords)
              , r = this._findCrossPoints(t, e);
            return 0 !== r && r % 2 === 1
        },
        isOnScreen: function(t) {
            if (!this.canvas)
                return !1;
            for (var e, i = this.canvas.vptCoords.tl, n = this.canvas.vptCoords.br, r = this.getCoords(!0, t), s = 0; s < 4; s++)
                if (e = r[s],
                e.x <= n.x && e.x >= i.x && e.y <= n.y && e.y >= i.y)
                    return !0;
            if (this.intersectsWithRect(i, n, !0))
                return !0;
            var o = {
                x: (i.x + n.x) / 2,
                y: (i.y + n.y) / 2
            };
            return !!this.containsPoint(o, null, !0)
        },
        _getImageLines: function(t) {
            return {
                topline: {
                    o: t.tl,
                    d: t.tr
                },
                rightline: {
                    o: t.tr,
                    d: t.br
                },
                bottomline: {
                    o: t.br,
                    d: t.bl
                },
                leftline: {
                    o: t.bl,
                    d: t.tl
                }
            }
        },
        _findCrossPoints: function(t, e) {
            var i, n, r, s, o, a, h = 0;
            for (var c in e)
                if (a = e[c],
                !(a.o.y < t.y && a.d.y < t.y || a.o.y >= t.y && a.d.y >= t.y || (a.o.x === a.d.x && a.o.x >= t.x ? o = a.o.x : (i = 0,
                n = (a.d.y - a.o.y) / (a.d.x - a.o.x),
                r = t.y - i * t.x,
                s = a.o.y - n * a.o.x,
                o = -(r - s) / (i - n)),
                o >= t.x && (h += 1),
                2 !== h)))
                    break;
            return h
        },
        getBoundingRect: function(t, e) {
            var i = this.getCoords(t, e);
            return fabric.util.makeBoundingBoxFromPoints(i)
        },
        getScaledWidth: function() {
            return this._getTransformedDimensions().x
        },
        getScaledHeight: function() {
            return this._getTransformedDimensions().y
        },
        _constrainScale: function(t) {
            return Math.abs(t) < this.minScaleLimit ? t < 0 ? -this.minScaleLimit : this.minScaleLimit : 0 === t ? 1e-4 : t
        },
        scale: function(t) {
            return this._set("scaleX", t),
            this._set("scaleY", t),
            this.setCoords()
        },
        scaleToWidth: function(t, e) {
            var i = this.getBoundingRect(e).width / this.getScaledWidth();
            return this.scale(t / this.width / i)
        },
        scaleToHeight: function(t, e) {
            var i = this.getBoundingRect(e).height / this.getScaledHeight();
            return this.scale(t / this.height / i)
        },
        calcCoords: function(t) {
            var i = e(this.angle)
              , n = this.getViewportTransform()
              , r = t ? this._getTransformedDimensions() : this._calculateCurrentDimensions()
              , s = r.x
              , o = r.y
              , a = i ? Math.sin(i) : 0
              , h = i ? Math.cos(i) : 1
              , c = s > 0 ? Math.atan(o / s) : 0
              , l = s / Math.cos(c) / 2
              , u = Math.cos(c + i) * l
              , f = Math.sin(c + i) * l
              , d = this.getCenterPoint()
              , p = t ? d : fabric.util.transformPoint(d, n)
              , g = new fabric.Point(p.x - u,p.y - f)
              , v = new fabric.Point(g.x + s * h,g.y + s * a)
              , m = new fabric.Point(g.x - o * a,g.y + o * h)
              , _ = new fabric.Point(p.x + u,p.y + f);
            if (!t)
                var b = new fabric.Point((g.x + m.x) / 2,(g.y + m.y) / 2)
                  , y = new fabric.Point((v.x + g.x) / 2,(v.y + g.y) / 2)
                  , x = new fabric.Point((_.x + v.x) / 2,(_.y + v.y) / 2)
                  , C = new fabric.Point((_.x + m.x) / 2,(_.y + m.y) / 2)
                  , w = new fabric.Point(y.x + a * this.rotatingPointOffset,y.y - h * this.rotatingPointOffset);
            var p = {
                tl: g,
                tr: v,
                br: _,
                bl: m
            };
            return t || (p.ml = b,
            p.mt = y,
            p.mr = x,
            p.mb = C,
            p.mtr = w),
            p
        },
        setCoords: function(t, e) {
            return this.oCoords = this.calcCoords(t),
            e || (this.aCoords = this.calcCoords(!0)),
            t || this._setCornerCoords && this._setCornerCoords(),
            this
        },
        _calcRotateMatrix: function() {
            if (this.angle) {
                var t = e(this.angle)
                  , i = Math.cos(t)
                  , n = Math.sin(t);
                return 6.123233995736766e-17 !== i && i !== -1.8369701987210297e-16 || (i = 0),
                [i, n, -n, i, 0, 0]
            }
            return fabric.iMatrix.concat()
        },
        transformMatrixKey: function(t) {
            var e = "_"
              , i = "";
            return !t && this.group && (i = this.group.transformMatrixKey(t) + e),
            i + this.top + e + this.left + e + this.scaleX + e + this.scaleY + e + this.skewX + e + this.skewY + e + this.angle + e + this.width + e + this.height + e + this.strokeWidth + this.flipX + this.flipY
        },
        calcTransformMatrix: function(t) {
            if (t)
                return this.calcOwnMatrix();
            var e = this.transformMatrixKey()
              , n = this.matrixCache || (this.matrixCache = {});
            if (n.key === e)
                return n.value;
            var r = this.calcOwnMatrix();
            return this.group && (r = i(this.group.calcTransformMatrix(), r)),
            n.key = e,
            n.value = r,
            r
        },
        calcOwnMatrix: function() {
            var t = this.transformMatrixKey(!0)
              , e = this.ownMatrixCache || (this.ownMatrixCache = {});
            if (e.key === t)
                return e.value;
            var n, r = this.getCenterPoint(), s = [1, 0, 0, 1, r.x, r.y], o = this._calcDimensionsTransformMatrix(this.skewX, this.skewY, !0);
            return this.angle && (n = this._calcRotateMatrix(),
            s = i(s, n)),
            s = i(s, o),
            e.key = t,
            e.value = s,
            s
        },
        _calcDimensionsTransformMatrix: function(t, n, r) {
            var s, o = this.scaleX * (r && this.flipX ? -1 : 1), a = this.scaleY * (r && this.flipY ? -1 : 1), h = [o, 0, 0, a, 0, 0];
            return t && (s = [1, 0, Math.tan(e(t)), 1],
            h = i(h, s, !0)),
            n && (s = [1, Math.tan(e(n)), 0, 1],
            h = i(h, s, !0)),
            h
        },
        _getNonTransformedDimensions: function() {
            var t = this.strokeWidth
              , e = this.width + t
              , i = this.height + t;
            return {
                x: e,
                y: i
            }
        },
        _getTransformedDimensions: function(t, e) {
            "undefined" == typeof t && (t = this.skewX),
            "undefined" == typeof e && (e = this.skewY);
            var i, n, r = this._getNonTransformedDimensions(), s = r.x / 2, o = r.y / 2, a = [{
                x: -s,
                y: -o
            }, {
                x: s,
                y: -o
            }, {
                x: -s,
                y: o
            }, {
                x: s,
                y: o
            }], h = this._calcDimensionsTransformMatrix(t, e, !1);
            for (i = 0; i < a.length; i++)
                a[i] = fabric.util.transformPoint(a[i], h);
            return n = fabric.util.makeBoundingBoxFromPoints(a),
            {
                x: n.width,
                y: n.height
            }
        },
        _calculateCurrentDimensions: function() {
            var t = this.getViewportTransform()
              , e = this._getTransformedDimensions()
              , i = fabric.util.transformPoint(e, t, !0);
            return i.scalarAdd(2 * this.padding)
        }
    })
}(),
fabric.util.object.extend(fabric.Object.prototype, {
    sendToBack: function() {
        return this.group ? fabric.StaticCanvas.prototype.sendToBack.call(this.group, this) : this.canvas.sendToBack(this),
        this
    },
    bringToFront: function() {
        return this.group ? fabric.StaticCanvas.prototype.bringToFront.call(this.group, this) : this.canvas.bringToFront(this),
        this
    },
    sendBackwards: function(t) {
        return this.group ? fabric.StaticCanvas.prototype.sendBackwards.call(this.group, this, t) : this.canvas.sendBackwards(this, t),
        this
    },
    bringForward: function(t) {
        return this.group ? fabric.StaticCanvas.prototype.bringForward.call(this.group, this, t) : this.canvas.bringForward(this, t),
        this
    },
    moveTo: function(t) {
        return this.group && "activeSelection" !== this.group.type ? fabric.StaticCanvas.prototype.moveTo.call(this.group, this, t) : this.canvas.moveTo(this, t),
        this
    }
}),
function() {
    function t(t, e) {
        if (e) {
            if (e.toLive)
                return t + ": url(#SVGID_" + e.id + "); ";
            var i = new fabric.Color(e)
              , n = t + ": " + i.toRgb() + "; "
              , r = i.getAlpha();
            return 1 !== r && (n += t + "-opacity: " + r.toString() + "; "),
            n
        }
        return t + ": none; "
    }
    var e = fabric.Object.NUM_FRACTION_DIGITS
      , i = fabric.util.toFixed;
    fabric.util.object.extend(fabric.Object.prototype, {
        getSvgStyles: function(e) {
            var i = this.fillRule
              , n = this.strokeWidth ? this.strokeWidth : "0"
              , r = this.strokeDashArray ? this.strokeDashArray.join(" ") : "none"
              , s = this.strokeLineCap ? this.strokeLineCap : "butt"
              , o = this.strokeLineJoin ? this.strokeLineJoin : "miter"
              , a = this.strokeMiterLimit ? this.strokeMiterLimit : "4"
              , h = "undefined" != typeof this.opacity ? this.opacity : "1"
              , c = this.visible ? "" : " visibility: hidden;"
              , l = e ? "" : this.getSvgFilter()
              , u = t("fill", this.fill)
              , f = t("stroke", this.stroke);
            return [f, "stroke-width: ", n, "; ", "stroke-dasharray: ", r, "; ", "stroke-linecap: ", s, "; ", "stroke-linejoin: ", o, "; ", "stroke-miterlimit: ", a, "; ", u, "fill-rule: ", i, "; ", "opacity: ", h, ";", l, c].join("")
        },
        getSvgSpanStyles: function(e, i) {
            var n = "; "
              , r = e.strokeWidth ? "stroke-width: " + e.strokeWidth + n : ""
              , s = e.fontFamily ? "font-family: " + e.fontFamily.replace(/"/g, "'") + n : ""
              , o = e.fontSize ? "font-size: " + e.fontSize + n : ""
              , a = e.fontStyle ? "font-style: " + e.fontStyle + n : ""
              , h = e.fontWeight ? "font-weight: " + e.fontWeight + n : ""
              , c = e.fill ? t("fill", e.fill) : ""
              , l = e.stroke ? t("stroke", e.stroke) : ""
              , u = this.getSvgTextDecoration(e);
            return u && (u = "text-decoration: " + u + n),
            [l, r, s, o, a, h, u, c, i ? "white-space: pre; " : ""].join("")
        },
        getSvgTextDecoration: function(t) {
            return "overline"in t || "underline"in t || "linethrough"in t ? (t.overline ? "overline " : "") + (t.underline ? "underline " : "") + (t.linethrough ? "line-through " : "") : ""
        },
        getSvgFilter: function() {
            return this.shadow ? "filter: url(#SVGID_" + this.shadow.id + ");" : ""
        },
        getSvgId: function() {
            return this.id ? 'id="' + this.id + '" ' : ""
        },
        getSvgTransform: function() {
            var t = this.angle
              , e = this.skewX % 360
              , n = this.skewY % 360
              , r = this.getCenterPoint()
              , s = fabric.Object.NUM_FRACTION_DIGITS
              , o = "translate(" + i(r.x, s) + " " + i(r.y, s) + ")"
              , a = 0 !== t ? " rotate(" + i(t, s) + ")" : ""
              , h = 1 === this.scaleX && 1 === this.scaleY ? "" : " scale(" + i(this.scaleX, s) + " " + i(this.scaleY, s) + ")"
              , c = 0 !== e ? " skewX(" + i(e, s) + ")" : ""
              , l = 0 !== n ? " skewY(" + i(n, s) + ")" : ""
              , u = this.flipX ? " matrix(-1 0 0 1 0 0) " : ""
              , f = this.flipY ? " matrix(1 0 0 -1 0 0)" : "";
            return [o, a, h, u, f, c, l].join("")
        },
        getSvgTransformMatrix: function() {
            return this.transformMatrix ? " matrix(" + this.transformMatrix.join(" ") + ") " : ""
        },
        _setSVGBg: function(t) {
            this.backgroundColor && t.push("\t\t<rect ", this._getFillAttributes(this.backgroundColor), ' x="', i(-this.width / 2, e), '" y="', i(-this.height / 2, e), '" width="', i(this.width, e), '" height="', i(this.height, e), '"></rect>\n')
        },
        _createBaseSVGMarkup: function() {
            var t = [];
            return this.fill && this.fill.toLive && t.push(this.fill.toSVG(this, !1)),
            this.stroke && this.stroke.toLive && t.push(this.stroke.toSVG(this, !1)),
            this.shadow && t.push(this.shadow.toSVG(this)),
            t
        },
        addPaintOrder: function() {
            return "fill" !== this.paintFirst ? ' paint-order="' + this.paintFirst + '" ' : ""
        }
    })
}(),
function() {
    function t(t, e, n) {
        var r = {}
          , s = !0;
        n.forEach(function(e) {
            r[e] = t[e]
        }),
        i(t[e], r, s)
    }
    function e(t, i, n) {
        if (t === i)
            return !0;
        if (Array.isArray(t)) {
            if (t.length !== i.length)
                return !1;
            for (var r = 0, s = t.length; r < s; r++)
                if (!e(t[r], i[r]))
                    return !1;
            return !0
        }
        if (t && "object" == typeof t) {
            var o, a = Object.keys(t);
            if (!n && a.length !== Object.keys(i).length)
                return !1;
            for (var r = 0, s = a.length; r < s; r++)
                if (o = a[r],
                !e(t[o], i[o]))
                    return !1;
            return !0
        }
    }
    var i = fabric.util.object.extend
      , n = "stateProperties";
    fabric.util.object.extend(fabric.Object.prototype, {
        hasStateChanged: function(t) {
            t = t || n;
            var i = "_" + t;
            return Object.keys(this[i]).length < this[t].length || !e(this[i], this, !0)
        },
        saveState: function(e) {
            var i = e && e.propertySet || n
              , r = "_" + i;
            return this[r] ? (t(this, r, this[i]),
            e && e.stateProperties && t(this, r, e.stateProperties),
            this) : this.setupState(e)
        },
        setupState: function(t) {
            t = t || {};
            var e = t.propertySet || n;
            return t.propertySet = e,
            this["_" + e] = {},
            this.saveState(t),
            this
        }
    })
}(),
function() {
    var t = fabric.util.degreesToRadians;
    fabric.util.object.extend(fabric.Object.prototype, {
        _controlsVisibility: null,
        _findTargetCorner: function(t) {
            if (!this.hasControls || this.group || !this.canvas || this.canvas._activeObject !== this)
                return !1;
            var e, i, n = t.x, r = t.y;
            this.__corner = 0;
            for (var s in this.oCoords)
                if (this.isControlVisible(s) && ("mtr" !== s || this.hasRotatingPoint) && (!this.get("lockUniScaling") || "mt" !== s && "mr" !== s && "mb" !== s && "ml" !== s) && (i = this._getImageLines(this.oCoords[s].corner),
                e = this._findCrossPoints({
                    x: n,
                    y: r
                }, i),
                0 !== e && e % 2 === 1))
                    return this.__corner = s,
                    s;
            return !1
        },
        _setCornerCoords: function() {
            var e, i, n = this.oCoords, r = t(45 - this.angle), s = .707106 * this.cornerSize, o = s * Math.cos(r), a = s * Math.sin(r);
            for (var h in n)
                e = n[h].x,
                i = n[h].y,
                n[h].corner = {
                    tl: {
                        x: e - a,
                        y: i - o
                    },
                    tr: {
                        x: e + o,
                        y: i - a
                    },
                    bl: {
                        x: e - o,
                        y: i + a
                    },
                    br: {
                        x: e + a,
                        y: i + o
                    }
                }
        },
        drawSelectionBackground: function(e) {
            if (!this.selectionBackgroundColor || this.canvas && !this.canvas.interactive || this.canvas && this.canvas._activeObject !== this)
                return this;
            e.save();
            var i = this.getCenterPoint()
              , n = this._calculateCurrentDimensions()
              , r = this.canvas.viewportTransform;
            return e.translate(i.x, i.y),
            e.scale(1 / r[0], 1 / r[3]),
            e.rotate(t(this.angle)),
            e.fillStyle = this.selectionBackgroundColor,
            e.fillRect(-n.x / 2, -n.y / 2, n.x, n.y),
            e.restore(),
            this
        },
        drawBorders: function(t, e) {
            e = e || {};
            var i = this._calculateCurrentDimensions()
              , n = 1 / this.borderScaleFactor
              , r = i.x + n
              , s = i.y + n
              , o = "undefined" != typeof e.hasRotatingPoint ? e.hasRotatingPoint : this.hasRotatingPoint
              , a = "undefined" != typeof e.hasControls ? e.hasControls : this.hasControls
              , h = "undefined" != typeof e.rotatingPointOffset ? e.rotatingPointOffset : this.rotatingPointOffset;
            if (t.save(),
            t.strokeStyle = e.borderColor || this.borderColor,
            this._setLineDash(t, e.borderDashArray || this.borderDashArray, null),
            t.strokeRect(-r / 2, -s / 2, r, s),
            o && this.isControlVisible("mtr") && a) {
                var c = -s / 2;
                t.beginPath(),
                t.moveTo(0, c),
                t.lineTo(0, c - h),
                t.stroke()
            }
            return t.restore(),
            this
        },
        drawBordersInGroup: function(t, e, i) {
            i = i || {};
            var n = this._getNonTransformedDimensions()
              , r = fabric.util.customTransformMatrix(e.scaleX, e.scaleY, e.skewX)
              , s = fabric.util.transformPoint(n, r)
              , o = 1 / this.borderScaleFactor
              , a = s.x + o
              , h = s.y + o;
            return t.save(),
            this._setLineDash(t, i.borderDashArray || this.borderDashArray, null),
            t.strokeStyle = i.borderColor || this.borderColor,
            t.strokeRect(-a / 2, -h / 2, a, h),
            t.restore(),
            this
        },
        drawControls: function(t, e) {
            e = e || {};
            var i = this._calculateCurrentDimensions()
              , n = i.x
              , r = i.y
              , s = e.cornerSize || this.cornerSize
              , o = -(n + s) / 2
              , a = -(r + s) / 2
              , h = "undefined" != typeof e.transparentCorners ? e.transparentCorners : this.transparentCorners
              , c = "undefined" != typeof e.hasRotatingPoint ? e.hasRotatingPoint : this.hasRotatingPoint
              , l = h ? "stroke" : "fill";
            return t.save(),
            t.strokeStyle = t.fillStyle = e.cornerColor || this.cornerColor,
            this.transparentCorners || (t.strokeStyle = e.cornerStrokeColor || this.cornerStrokeColor),
            this._setLineDash(t, e.cornerDashArray || this.cornerDashArray, null),
            this._drawControl("tl", t, l, o, a, e),
            this._drawControl("tr", t, l, o + n, a, e),
            this._drawControl("bl", t, l, o, a + r, e),
            this._drawControl("br", t, l, o + n, a + r, e),
            this.get("lockUniScaling") || (this._drawControl("mt", t, l, o + n / 2, a, e),
            this._drawControl("mb", t, l, o + n / 2, a + r, e),
            this._drawControl("mr", t, l, o + n, a + r / 2, e),
            this._drawControl("ml", t, l, o, a + r / 2, e)),
            c && this._drawControl("mtr", t, l, o + n / 2, a - this.rotatingPointOffset, e),
            t.restore(),
            this
        },
        _drawControl: function(t, e, i, n, r, s) {
            if (s = s || {},
            this.isControlVisible(t)) {
                var o = this.cornerSize
                  , a = !this.transparentCorners && this.cornerStrokeColor;
                switch (s.cornerStyle || this.cornerStyle) {
                case "circle":
                    e.beginPath(),
                    e.arc(n + o / 2, r + o / 2, o / 2, 0, 2 * Math.PI, !1),
                    e[i](),
                    a && e.stroke();
                    break;
                default:
                    this.transparentCorners || e.clearRect(n, r, o, o),
                    e[i + "Rect"](n, r, o, o),
                    a && e.strokeRect(n, r, o, o)
                }
            }
        },
        isControlVisible: function(t) {
            return this._getControlsVisibility()[t]
        },
        setControlVisible: function(t, e) {
            return this._getControlsVisibility()[t] = e,
            this
        },
        setControlsVisibility: function(t) {
            t || (t = {});
            for (var e in t)
                this.setControlVisible(e, t[e]);
            return this
        },
        _getControlsVisibility: function() {
            return this._controlsVisibility || (this._controlsVisibility = {
                tl: !0,
                tr: !0,
                br: !0,
                bl: !0,
                ml: !0,
                mt: !0,
                mr: !0,
                mb: !0,
                mtr: !0
            }),
            this._controlsVisibility
        },
        onDeselect: function() {},
        onSelect: function() {}
    })
}(),
fabric.util.object.extend(fabric.StaticCanvas.prototype, {
    FX_DURATION: 500,
    fxCenterObjectH: function(t, e) {
        e = e || {};
        var i = function() {}
          , n = e.onComplete || i
          , r = e.onChange || i
          , s = this;
        return fabric.util.animate({
            startValue: t.left,
            endValue: this.getCenter().left,
            duration: this.FX_DURATION,
            onChange: function(e) {
                t.set("left", e),
                s.requestRenderAll(),
                r()
            },
            onComplete: function() {
                t.setCoords(),
                n()
            }
        }),
        this
    },
    fxCenterObjectV: function(t, e) {
        e = e || {};
        var i = function() {}
          , n = e.onComplete || i
          , r = e.onChange || i
          , s = this;
        return fabric.util.animate({
            startValue: t.top,
            endValue: this.getCenter().top,
            duration: this.FX_DURATION,
            onChange: function(e) {
                t.set("top", e),
                s.requestRenderAll(),
                r()
            },
            onComplete: function() {
                t.setCoords(),
                n()
            }
        }),
        this
    },
    fxRemove: function(t, e) {
        e = e || {};
        var i = function() {}
          , n = e.onComplete || i
          , r = e.onChange || i
          , s = this;
        return fabric.util.animate({
            startValue: t.opacity,
            endValue: 0,
            duration: this.FX_DURATION,
            onChange: function(e) {
                t.set("opacity", e),
                s.requestRenderAll(),
                r()
            },
            onComplete: function() {
                s.remove(t),
                n()
            }
        }),
        this
    }
}),
fabric.util.object.extend(fabric.Object.prototype, {
    animate: function() {
        if (arguments[0] && "object" == typeof arguments[0]) {
            var t, e, i = [];
            for (t in arguments[0])
                i.push(t);
            for (var n = 0, r = i.length; n < r; n++)
                t = i[n],
                e = n !== r - 1,
                this._animate(t, arguments[0][t], arguments[1], e)
        } else
            this._animate.apply(this, arguments);
        return this
    },
    _animate: function(t, e, i, n) {
        var r, s = this;
        e = e.toString(),
        i = i ? fabric.util.object.clone(i) : {},
        ~t.indexOf(".") && (r = t.split("."));
        var o = r ? this.get(r[0])[r[1]] : this.get(t);
        "from"in i || (i.from = o),
        e = ~e.indexOf("=") ? o + parseFloat(e.replace("=", "")) : parseFloat(e),
        fabric.util.animate({
            startValue: i.from,
            endValue: e,
            byValue: i.by,
            easing: i.easing,
            duration: i.duration,
            abort: i.abort && function() {
                return i.abort.call(s)
            }
            ,
            onChange: function(e, o, a) {
                r ? s[r[0]][r[1]] = e : s.set(t, e),
                n || i.onChange && i.onChange(e, o, a)
            },
            onComplete: function(t, e, r) {
                n || (s.setCoords(),
                i.onComplete && i.onComplete(t, e, r))
            }
        })
    }
}),
function(t) {
    "use strict";
    function e(t, e) {
        var i = t.origin
          , n = t.axis1
          , r = t.axis2
          , s = t.dimension
          , o = e.nearest
          , a = e.center
          , h = e.farthest;
        return function() {
            switch (this.get(i)) {
            case o:
                return Math.min(this.get(n), this.get(r));
            case a:
                return Math.min(this.get(n), this.get(r)) + .5 * this.get(s);
            case h:
                return Math.max(this.get(n), this.get(r))
            }
        }
    }
    var i = t.fabric || (t.fabric = {})
      , n = i.util.object.extend
      , r = i.util.object.clone
      , s = {
        x1: 1,
        x2: 1,
        y1: 1,
        y2: 1
    }
      , o = i.StaticCanvas.supports("setLineDash");
    return i.Line ? void i.warn("fabric.Line is already defined") : (i.Line = i.util.createClass(i.Object, {
        type: "line",
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        cacheProperties: i.Object.prototype.cacheProperties.concat("x1", "x2", "y1", "y2"),
        initialize: function(t, e) {
            t || (t = [0, 0, 0, 0]),
            this.callSuper("initialize", e),
            this.set("x1", t[0]),
            this.set("y1", t[1]),
            this.set("x2", t[2]),
            this.set("y2", t[3]),
            this._setWidthHeight(e)
        },
        _setWidthHeight: function(t) {
            t || (t = {}),
            this.width = Math.abs(this.x2 - this.x1),
            this.height = Math.abs(this.y2 - this.y1),
            this.left = "left"in t ? t.left : this._getLeftToOriginX(),
            this.top = "top"in t ? t.top : this._getTopToOriginY()
        },
        _set: function(t, e) {
            return this.callSuper("_set", t, e),
            "undefined" != typeof s[t] && this._setWidthHeight(),
            this
        },
        _getLeftToOriginX: e({
            origin: "originX",
            axis1: "x1",
            axis2: "x2",
            dimension: "width"
        }, {
            nearest: "left",
            center: "center",
            farthest: "right"
        }),
        _getTopToOriginY: e({
            origin: "originY",
            axis1: "y1",
            axis2: "y2",
            dimension: "height"
        }, {
            nearest: "top",
            center: "center",
            farthest: "bottom"
        }),
        _render: function(t) {
            if (t.beginPath(),
            !this.strokeDashArray || this.strokeDashArray && o) {
                var e = this.calcLinePoints();
                t.moveTo(e.x1, e.y1),
                t.lineTo(e.x2, e.y2)
            }
            t.lineWidth = this.strokeWidth;
            var i = t.strokeStyle;
            t.strokeStyle = this.stroke || t.fillStyle,
            this.stroke && this._renderStroke(t),
            t.strokeStyle = i
        },
        _renderDashedStroke: function(t) {
            var e = this.calcLinePoints();
            t.beginPath(),
            i.util.drawDashedLine(t, e.x1, e.y1, e.x2, e.y2, this.strokeDashArray),
            t.closePath()
        },
        _findCenterFromElement: function() {
            return {
                x: (this.x1 + this.x2) / 2,
                y: (this.y1 + this.y2) / 2
            }
        },
        toObject: function(t) {
            return n(this.callSuper("toObject", t), this.calcLinePoints())
        },
        _getNonTransformedDimensions: function() {
            var t = this.callSuper("_getNonTransformedDimensions");
            return "butt" === this.strokeLineCap && (0 === this.width && (t.y -= this.strokeWidth),
            0 === this.height && (t.x -= this.strokeWidth)),
            t
        },
        calcLinePoints: function() {
            var t = this.x1 <= this.x2 ? -1 : 1
              , e = this.y1 <= this.y2 ? -1 : 1
              , i = t * this.width * .5
              , n = e * this.height * .5
              , r = t * this.width * -.5
              , s = e * this.height * -.5;
            return {
                x1: i,
                x2: r,
                y1: n,
                y2: s
            }
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup()
              , i = this.calcLinePoints();
            return e.push("<line ", this.getSvgId(), 'x1="', i.x1, '" y1="', i.y1, '" x2="', i.x2, '" y2="', i.y2, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"/>\n'),
            t ? t(e.join("")) : e.join("")
        }
    }),
    i.Line.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("x1 y1 x2 y2".split(" ")),
    i.Line.fromElement = function(t, e, r) {
        r = r || {};
        var s = i.parseAttributes(t, i.Line.ATTRIBUTE_NAMES)
          , o = [s.x1 || 0, s.y1 || 0, s.x2 || 0, s.y2 || 0];
        e(new i.Line(o,n(s, r)))
    }
    ,
    void (i.Line.fromObject = function(t, e) {
        function n(t) {
            delete t.points,
            e && e(t)
        }
        var s = r(t, !0);
        s.points = [t.x1, t.y1, t.x2, t.y2],
        i.Object._fromObject("Line", s, n, "points")
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    function e(t) {
        return "radius"in t && t.radius >= 0
    }
    var i = t.fabric || (t.fabric = {})
      , n = Math.PI
      , r = i.util.object.extend;
    return i.Circle ? void i.warn("fabric.Circle is already defined.") : (i.Circle = i.util.createClass(i.Object, {
        type: "circle",
        radius: 0,
        startAngle: 0,
        endAngle: 2 * n,
        cacheProperties: i.Object.prototype.cacheProperties.concat("radius"),
        _set: function(t, e) {
            return this.callSuper("_set", t, e),
            "radius" === t && this.setRadius(e),
            this
        },
        toObject: function(t) {
            return this.callSuper("toObject", ["radius", "startAngle", "endAngle"].concat(t))
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup()
              , i = 0
              , r = 0
              , s = (this.endAngle - this.startAngle) % (2 * n);
            if (0 === s)
                e.push("<circle ", this.getSvgId(), 'cx="' + i + '" cy="' + r + '" ', 'r="', this.radius, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), " ", this.getSvgTransformMatrix(), '"', this.addPaintOrder(), "/>\n");
            else {
                var o = Math.cos(this.startAngle) * this.radius
                  , a = Math.sin(this.startAngle) * this.radius
                  , h = Math.cos(this.endAngle) * this.radius
                  , c = Math.sin(this.endAngle) * this.radius
                  , l = s > n ? "1" : "0";
                e.push('<path d="M ' + o + " " + a, " A " + this.radius + " " + this.radius, " 0 ", +l + " 1", " " + h + " " + c, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), " ", this.getSvgTransformMatrix(), '"', this.addPaintOrder(), '"/>\n')
            }
            return t ? t(e.join("")) : e.join("")
        },
        _render: function(t) {
            t.beginPath(),
            t.arc(0, 0, this.radius, this.startAngle, this.endAngle, !1),
            this._renderPaintInOrder(t)
        },
        getRadiusX: function() {
            return this.get("radius") * this.get("scaleX")
        },
        getRadiusY: function() {
            return this.get("radius") * this.get("scaleY")
        },
        setRadius: function(t) {
            return this.radius = t,
            this.set("width", 2 * t).set("height", 2 * t)
        }
    }),
    i.Circle.ATTRIBUTE_NAMES = i.SHARED_ATTRIBUTES.concat("cx cy r".split(" ")),
    i.Circle.fromElement = function(t, n, s) {
        s || (s = {});
        var o = i.parseAttributes(t, i.Circle.ATTRIBUTE_NAMES);
        if (!e(o))
            throw new Error("value of `r` attribute is required and can not be negative");
        o.left = (o.left || 0) - o.radius,
        o.top = (o.top || 0) - o.radius,
        n(new i.Circle(r(o, s)))
    }
    ,
    void (i.Circle.fromObject = function(t, e) {
        return i.Object._fromObject("Circle", t, e)
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {});
    return e.Triangle ? void e.warn("fabric.Triangle is already defined") : (e.Triangle = e.util.createClass(e.Object, {
        type: "triangle",
        width: 100,
        height: 100,
        _render: function(t) {
            var e = this.width / 2
              , i = this.height / 2;
            t.beginPath(),
            t.moveTo(-e, i),
            t.lineTo(0, -i),
            t.lineTo(e, i),
            t.closePath(),
            this._renderPaintInOrder(t)
        },
        _renderDashedStroke: function(t) {
            var i = this.width / 2
              , n = this.height / 2;
            t.beginPath(),
            e.util.drawDashedLine(t, -i, n, 0, -n, this.strokeDashArray),
            e.util.drawDashedLine(t, 0, -n, i, n, this.strokeDashArray),
            e.util.drawDashedLine(t, i, n, -i, n, this.strokeDashArray),
            t.closePath()
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup()
              , i = this.width / 2
              , n = this.height / 2
              , r = [-i + " " + n, "0 " + -n, i + " " + n].join(",");
            return e.push("<polygon ", this.getSvgId(), 'points="', r, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), '"', this.addPaintOrder(), "/>"),
            t ? t(e.join("")) : e.join("")
        }
    }),
    void (e.Triangle.fromObject = function(t, i) {
        return e.Object._fromObject("Triangle", t, i)
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = 2 * Math.PI
      , n = e.util.object.extend;
    return e.Ellipse ? void e.warn("fabric.Ellipse is already defined.") : (e.Ellipse = e.util.createClass(e.Object, {
        type: "ellipse",
        rx: 0,
        ry: 0,
        cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
        initialize: function(t) {
            this.callSuper("initialize", t),
            this.set("rx", t && t.rx || 0),
            this.set("ry", t && t.ry || 0)
        },
        _set: function(t, e) {
            switch (this.callSuper("_set", t, e),
            t) {
            case "rx":
                this.rx = e,
                this.set("width", 2 * e);
                break;
            case "ry":
                this.ry = e,
                this.set("height", 2 * e)
            }
            return this
        },
        getRx: function() {
            return this.get("rx") * this.get("scaleX")
        },
        getRy: function() {
            return this.get("ry") * this.get("scaleY")
        },
        toObject: function(t) {
            return this.callSuper("toObject", ["rx", "ry"].concat(t))
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup();
            return e.push("<ellipse ", this.getSvgId(), 'cx="0" cy="0" ', 'rx="', this.rx, '" ry="', this.ry, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"', this.addPaintOrder(), "/>\n"),
            t ? t(e.join("")) : e.join("")
        },
        _render: function(t) {
            t.beginPath(),
            t.save(),
            t.transform(1, 0, 0, this.ry / this.rx, 0, 0),
            t.arc(0, 0, this.rx, 0, i, !1),
            t.restore(),
            this._renderPaintInOrder(t)
        }
    }),
    e.Ellipse.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("cx cy rx ry".split(" ")),
    e.Ellipse.fromElement = function(t, i, r) {
        r || (r = {});
        var s = e.parseAttributes(t, e.Ellipse.ATTRIBUTE_NAMES);
        s.left = (s.left || 0) - s.rx,
        s.top = (s.top || 0) - s.ry,
        i(new e.Ellipse(n(s, r)))
    }
    ,
    void (e.Ellipse.fromObject = function(t, i) {
        return e.Object._fromObject("Ellipse", t, i)
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend;
    return e.Rect ? void e.warn("fabric.Rect is already defined") : (e.Rect = e.util.createClass(e.Object, {
        stateProperties: e.Object.prototype.stateProperties.concat("rx", "ry"),
        type: "rect",
        rx: 0,
        ry: 0,
        cacheProperties: e.Object.prototype.cacheProperties.concat("rx", "ry"),
        initialize: function(t) {
            this.callSuper("initialize", t),
            this._initRxRy()
        },
        _initRxRy: function() {
            this.rx && !this.ry ? this.ry = this.rx : this.ry && !this.rx && (this.rx = this.ry)
        },
        _render: function(t) {
            if (1 === this.width && 1 === this.height)
                return void t.fillRect(-.5, -.5, 1, 1);
            var e = this.rx ? Math.min(this.rx, this.width / 2) : 0
              , i = this.ry ? Math.min(this.ry, this.height / 2) : 0
              , n = this.width
              , r = this.height
              , s = -this.width / 2
              , o = -this.height / 2
              , a = 0 !== e || 0 !== i
              , h = .4477152502;
            t.beginPath(),
            t.moveTo(s + e, o),
            t.lineTo(s + n - e, o),
            a && t.bezierCurveTo(s + n - h * e, o, s + n, o + h * i, s + n, o + i),
            t.lineTo(s + n, o + r - i),
            a && t.bezierCurveTo(s + n, o + r - h * i, s + n - h * e, o + r, s + n - e, o + r),
            t.lineTo(s + e, o + r),
            a && t.bezierCurveTo(s + h * e, o + r, s, o + r - h * i, s, o + r - i),
            t.lineTo(s, o + i),
            a && t.bezierCurveTo(s, o + h * i, s + h * e, o, s + e, o),
            t.closePath(),
            this._renderPaintInOrder(t)
        },
        _renderDashedStroke: function(t) {
            var i = -this.width / 2
              , n = -this.height / 2
              , r = this.width
              , s = this.height;
            t.beginPath(),
            e.util.drawDashedLine(t, i, n, i + r, n, this.strokeDashArray),
            e.util.drawDashedLine(t, i + r, n, i + r, n + s, this.strokeDashArray),
            e.util.drawDashedLine(t, i + r, n + s, i, n + s, this.strokeDashArray),
            e.util.drawDashedLine(t, i, n + s, i, n, this.strokeDashArray),
            t.closePath()
        },
        toObject: function(t) {
            return this.callSuper("toObject", ["rx", "ry"].concat(t))
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup()
              , i = -this.width / 2
              , n = -this.height / 2;
            return e.push("<rect ", this.getSvgId(), 'x="', i, '" y="', n, '" rx="', this.get("rx"), '" ry="', this.get("ry"), '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"', this.addPaintOrder(), "/>\n"),
            t ? t(e.join("")) : e.join("")
        }
    }),
    e.Rect.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y rx ry width height".split(" ")),
    e.Rect.fromElement = function(t, n, r) {
        if (!t)
            return n(null);
        r = r || {};
        var s = e.parseAttributes(t, e.Rect.ATTRIBUTE_NAMES);
        s.left = s.left || 0,
        s.top = s.top || 0;
        var o = new e.Rect(i(r ? e.util.object.clone(r) : {}, s));
        o.visible = o.visible && o.width > 0 && o.height > 0,
        n(o)
    }
    ,
    void (e.Rect.fromObject = function(t, i) {
        return e.Object._fromObject("Rect", t, i)
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend
      , n = e.util.array.min
      , r = e.util.array.max
      , s = e.util.toFixed
      , o = e.Object.NUM_FRACTION_DIGITS;
    return e.Polyline ? void e.warn("fabric.Polyline is already defined") : (e.Polyline = e.util.createClass(e.Object, {
        type: "polyline",
        points: null,
        cacheProperties: e.Object.prototype.cacheProperties.concat("points"),
        initialize: function(t, e) {
            e = e || {},
            this.points = t || [],
            this.callSuper("initialize", e);
            var i = this._calcDimensions();
            "undefined" == typeof e.left && (this.left = i.left),
            "undefined" == typeof e.top && (this.top = i.top),
            this.width = i.width,
            this.height = i.height,
            this.pathOffset = {
                x: i.left + this.width / 2,
                y: i.top + this.height / 2
            }
        },
        _calcDimensions: function() {
            var t = this.points
              , e = n(t, "x") || 0
              , i = n(t, "y") || 0
              , s = r(t, "x") || 0
              , o = r(t, "y") || 0
              , a = s - e
              , h = o - i;
            return {
                left: e,
                top: i,
                width: a,
                height: h
            }
        },
        toObject: function(t) {
            return i(this.callSuper("toObject", t), {
                points: this.points.concat()
            })
        },
        toSVG: function(t) {
            for (var e = [], i = this.pathOffset.x, n = this.pathOffset.y, r = this._createBaseSVGMarkup(), a = 0, h = this.points.length; a < h; a++)
                e.push(s(this.points[a].x - i, o), ",", s(this.points[a].y - n, o), " ");
            return r.push("<", this.type, " ", this.getSvgId(), 'points="', e.join(""), '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), " ", this.getSvgTransformMatrix(), '"', this.addPaintOrder(), "/>\n"),
            t ? t(r.join("")) : r.join("")
        },
        commonRender: function(t) {
            var e, i = this.points.length, n = this.pathOffset.x, r = this.pathOffset.y;
            if (!i || isNaN(this.points[i - 1].y))
                return !1;
            t.beginPath(),
            t.moveTo(this.points[0].x - n, this.points[0].y - r);
            for (var s = 0; s < i; s++)
                e = this.points[s],
                t.lineTo(e.x - n, e.y - r);
            return !0
        },
        _render: function(t) {
            this.commonRender(t) && this._renderPaintInOrder(t)
        },
        _renderDashedStroke: function(t) {
            var i, n;
            t.beginPath();
            for (var r = 0, s = this.points.length; r < s; r++)
                i = this.points[r],
                n = this.points[r + 1] || i,
                e.util.drawDashedLine(t, i.x, i.y, n.x, n.y, this.strokeDashArray)
        },
        complexity: function() {
            return this.get("points").length
        }
    }),
    e.Polyline.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(),
    e.Polyline.fromElement = function(t, i, n) {
        if (!t)
            return i(null);
        n || (n = {});
        var r = e.parsePointsAttribute(t.getAttribute("points"))
          , s = e.parseAttributes(t, e.Polyline.ATTRIBUTE_NAMES);
        i(new e.Polyline(r,e.util.object.extend(s, n)))
    }
    ,
    void (e.Polyline.fromObject = function(t, i) {
        return e.Object._fromObject("Polyline", t, i, "points")
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend;
    return e.Polygon ? void e.warn("fabric.Polygon is already defined") : (e.Polygon = e.util.createClass(e.Polyline, {
        type: "polygon",
        _render: function(t) {
            this.commonRender(t) && (t.closePath(),
            this._renderPaintInOrder(t))
        },
        _renderDashedStroke: function(t) {
            this.callSuper("_renderDashedStroke", t),
            t.closePath()
        }
    }),
    e.Polygon.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(),
    e.Polygon.fromElement = function(t, n, r) {
        if (!t)
            return n(null);
        r || (r = {});
        var s = e.parsePointsAttribute(t.getAttribute("points"))
          , o = e.parseAttributes(t, e.Polygon.ATTRIBUTE_NAMES);
        n(new e.Polygon(s,i(o, r)))
    }
    ,
    void (e.Polygon.fromObject = function(t, i) {
        return e.Object._fromObject("Polygon", t, i, "points")
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.array.min
      , n = e.util.array.max
      , r = e.util.object.extend
      , s = Object.prototype.toString
      , o = e.util.drawArc
      , a = {
        m: 2,
        l: 2,
        h: 1,
        v: 1,
        c: 6,
        s: 4,
        q: 4,
        t: 2,
        a: 7
    }
      , h = {
        m: "l",
        M: "L"
    };
    return e.Path ? void e.warn("fabric.Path is already defined") : (e.Path = e.util.createClass(e.Object, {
        type: "path",
        path: null,
        cacheProperties: e.Object.prototype.cacheProperties.concat("path", "fillRule"),
        stateProperties: e.Object.prototype.stateProperties.concat("path"),
        initialize: function(t, e) {
            e = e || {},
            this.callSuper("initialize", e),
            t || (t = []);
            var i = "[object Array]" === s.call(t);
            this.path = i ? t : t.match && t.match(/[mzlhvcsqta][^mzlhvcsqta]*/gi),
            this.path && (i || (this.path = this._parsePath()),
            this._setPositionDimensions(e))
        },
        _setPositionDimensions: function(t) {
            var e = this._parseDimensions();
            this.width = e.width,
            this.height = e.height,
            "undefined" == typeof t.left && (this.left = e.left),
            "undefined" == typeof t.top && (this.top = e.top),
            this.pathOffset = this.pathOffset || {
                x: e.left + this.width / 2,
                y: e.top + this.height / 2
            }
        },
        _renderPathCommands: function(t) {
            var e, i, n, r = null, s = 0, a = 0, h = 0, c = 0, l = 0, u = 0, f = -this.pathOffset.x, d = -this.pathOffset.y;
            t.beginPath();
            for (var p = 0, g = this.path.length; p < g; ++p) {
                switch (e = this.path[p],
                e[0]) {
                case "l":
                    h += e[1],
                    c += e[2],
                    t.lineTo(h + f, c + d);
                    break;
                case "L":
                    h = e[1],
                    c = e[2],
                    t.lineTo(h + f, c + d);
                    break;
                case "h":
                    h += e[1],
                    t.lineTo(h + f, c + d);
                    break;
                case "H":
                    h = e[1],
                    t.lineTo(h + f, c + d);
                    break;
                case "v":
                    c += e[1],
                    t.lineTo(h + f, c + d);
                    break;
                case "V":
                    c = e[1],
                    t.lineTo(h + f, c + d);
                    break;
                case "m":
                    h += e[1],
                    c += e[2],
                    s = h,
                    a = c,
                    t.moveTo(h + f, c + d);
                    break;
                case "M":
                    h = e[1],
                    c = e[2],
                    s = h,
                    a = c,
                    t.moveTo(h + f, c + d);
                    break;
                case "c":
                    i = h + e[5],
                    n = c + e[6],
                    l = h + e[3],
                    u = c + e[4],
                    t.bezierCurveTo(h + e[1] + f, c + e[2] + d, l + f, u + d, i + f, n + d),
                    h = i,
                    c = n;
                    break;
                case "C":
                    h = e[5],
                    c = e[6],
                    l = e[3],
                    u = e[4],
                    t.bezierCurveTo(e[1] + f, e[2] + d, l + f, u + d, h + f, c + d);
                    break;
                case "s":
                    i = h + e[3],
                    n = c + e[4],
                    null === r[0].match(/[CcSs]/) ? (l = h,
                    u = c) : (l = 2 * h - l,
                    u = 2 * c - u),
                    t.bezierCurveTo(l + f, u + d, h + e[1] + f, c + e[2] + d, i + f, n + d),
                    l = h + e[1],
                    u = c + e[2],
                    h = i,
                    c = n;
                    break;
                case "S":
                    i = e[3],
                    n = e[4],
                    null === r[0].match(/[CcSs]/) ? (l = h,
                    u = c) : (l = 2 * h - l,
                    u = 2 * c - u),
                    t.bezierCurveTo(l + f, u + d, e[1] + f, e[2] + d, i + f, n + d),
                    h = i,
                    c = n,
                    l = e[1],
                    u = e[2];
                    break;
                case "q":
                    i = h + e[3],
                    n = c + e[4],
                    l = h + e[1],
                    u = c + e[2],
                    t.quadraticCurveTo(l + f, u + d, i + f, n + d),
                    h = i,
                    c = n;
                    break;
                case "Q":
                    i = e[3],
                    n = e[4],
                    t.quadraticCurveTo(e[1] + f, e[2] + d, i + f, n + d),
                    h = i,
                    c = n,
                    l = e[1],
                    u = e[2];
                    break;
                case "t":
                    i = h + e[1],
                    n = c + e[2],
                    null === r[0].match(/[QqTt]/) ? (l = h,
                    u = c) : (l = 2 * h - l,
                    u = 2 * c - u),
                    t.quadraticCurveTo(l + f, u + d, i + f, n + d),
                    h = i,
                    c = n;
                    break;
                case "T":
                    i = e[1],
                    n = e[2],
                    null === r[0].match(/[QqTt]/) ? (l = h,
                    u = c) : (l = 2 * h - l,
                    u = 2 * c - u),
                    t.quadraticCurveTo(l + f, u + d, i + f, n + d),
                    h = i,
                    c = n;
                    break;
                case "a":
                    o(t, h + f, c + d, [e[1], e[2], e[3], e[4], e[5], e[6] + h + f, e[7] + c + d]),
                    h += e[6],
                    c += e[7];
                    break;
                case "A":
                    o(t, h + f, c + d, [e[1], e[2], e[3], e[4], e[5], e[6] + f, e[7] + d]),
                    h = e[6],
                    c = e[7];
                    break;
                case "z":
                case "Z":
                    h = s,
                    c = a,
                    t.closePath()
                }
                r = e
            }
        },
        _render: function(t) {
            this._renderPathCommands(t),
            this._renderPaintInOrder(t)
        },
        toString: function() {
            return "#<fabric.Path (" + this.complexity() + '): { "top": ' + this.top + ', "left": ' + this.left + " }>"
        },
        toObject: function(t) {
            var e = r(this.callSuper("toObject", t), {
                path: this.path.map(function(t) {
                    return t.slice()
                }),
                top: this.top,
                left: this.left
            });
            return e
        },
        toDatalessObject: function(t) {
            var e = this.toObject(["sourcePath"].concat(t));
            return e.sourcePath && delete e.path,
            e
        },
        toSVG: function(t) {
            for (var e = [], i = this._createBaseSVGMarkup(), n = "", r = 0, s = this.path.length; r < s; r++)
                e.push(this.path[r].join(" "));
            var o = e.join(" ");
            return n = " translate(" + -this.pathOffset.x + ", " + -this.pathOffset.y + ") ",
            i.push("<path ", this.getSvgId(), 'd="', o, '" style="', this.getSvgStyles(), '" transform="', this.getSvgTransform(), n, this.getSvgTransformMatrix(), '" stroke-linecap="round" ', this.addPaintOrder(), "/>\n"),
            t ? t(i.join("")) : i.join("")
        },
        complexity: function() {
            return this.path.length
        },
        _parsePath: function() {
            for (var t, e, i, n, r, s = [], o = [], c = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, l = 0, u = this.path.length; l < u; l++) {
                for (t = this.path[l],
                n = t.slice(1).trim(),
                o.length = 0; i = c.exec(n); )
                    o.push(i[0]);
                r = [t.charAt(0)];
                for (var f = 0, d = o.length; f < d; f++)
                    e = parseFloat(o[f]),
                    isNaN(e) || r.push(e);
                var p = r[0]
                  , g = a[p.toLowerCase()]
                  , v = h[p] || p;
                if (r.length - 1 > g)
                    for (var m = 1, _ = r.length; m < _; m += g)
                        s.push([p].concat(r.slice(m, m + g))),
                        p = v;
                else
                    s.push(r)
            }
            return s
        },
        _parseDimensions: function() {
            for (var t, r, s, o, a = [], h = [], c = null, l = 0, u = 0, f = 0, d = 0, p = 0, g = 0, v = 0, m = this.path.length; v < m; ++v) {
                switch (t = this.path[v],
                t[0]) {
                case "l":
                    f += t[1],
                    d += t[2],
                    o = [];
                    break;
                case "L":
                    f = t[1],
                    d = t[2],
                    o = [];
                    break;
                case "h":
                    f += t[1],
                    o = [];
                    break;
                case "H":
                    f = t[1],
                    o = [];
                    break;
                case "v":
                    d += t[1],
                    o = [];
                    break;
                case "V":
                    d = t[1],
                    o = [];
                    break;
                case "m":
                    f += t[1],
                    d += t[2],
                    l = f,
                    u = d,
                    o = [];
                    break;
                case "M":
                    f = t[1],
                    d = t[2],
                    l = f,
                    u = d,
                    o = [];
                    break;
                case "c":
                    r = f + t[5],
                    s = d + t[6],
                    p = f + t[3],
                    g = d + t[4],
                    o = e.util.getBoundsOfCurve(f, d, f + t[1], d + t[2], p, g, r, s),
                    f = r,
                    d = s;
                    break;
                case "C":
                    p = t[3],
                    g = t[4],
                    o = e.util.getBoundsOfCurve(f, d, t[1], t[2], p, g, t[5], t[6]),
                    f = t[5],
                    d = t[6];
                    break;
                case "s":
                    r = f + t[3],
                    s = d + t[4],
                    null === c[0].match(/[CcSs]/) ? (p = f,
                    g = d) : (p = 2 * f - p,
                    g = 2 * d - g),
                    o = e.util.getBoundsOfCurve(f, d, p, g, f + t[1], d + t[2], r, s),
                    p = f + t[1],
                    g = d + t[2],
                    f = r,
                    d = s;
                    break;
                case "S":
                    r = t[3],
                    s = t[4],
                    null === c[0].match(/[CcSs]/) ? (p = f,
                    g = d) : (p = 2 * f - p,
                    g = 2 * d - g),
                    o = e.util.getBoundsOfCurve(f, d, p, g, t[1], t[2], r, s),
                    f = r,
                    d = s,
                    p = t[1],
                    g = t[2];
                    break;
                case "q":
                    r = f + t[3],
                    s = d + t[4],
                    p = f + t[1],
                    g = d + t[2],
                    o = e.util.getBoundsOfCurve(f, d, p, g, p, g, r, s),
                    f = r,
                    d = s;
                    break;
                case "Q":
                    p = t[1],
                    g = t[2],
                    o = e.util.getBoundsOfCurve(f, d, p, g, p, g, t[3], t[4]),
                    f = t[3],
                    d = t[4];
                    break;
                case "t":
                    r = f + t[1],
                    s = d + t[2],
                    null === c[0].match(/[QqTt]/) ? (p = f,
                    g = d) : (p = 2 * f - p,
                    g = 2 * d - g),
                    o = e.util.getBoundsOfCurve(f, d, p, g, p, g, r, s),
                    f = r,
                    d = s;
                    break;
                case "T":
                    r = t[1],
                    s = t[2],
                    null === c[0].match(/[QqTt]/) ? (p = f,
                    g = d) : (p = 2 * f - p,
                    g = 2 * d - g),
                    o = e.util.getBoundsOfCurve(f, d, p, g, p, g, r, s),
                    f = r,
                    d = s;
                    break;
                case "a":
                    o = e.util.getBoundsOfArc(f, d, t[1], t[2], t[3], t[4], t[5], t[6] + f, t[7] + d),
                    f += t[6],
                    d += t[7];
                    break;
                case "A":
                    o = e.util.getBoundsOfArc(f, d, t[1], t[2], t[3], t[4], t[5], t[6], t[7]),
                    f = t[6],
                    d = t[7];
                    break;
                case "z":
                case "Z":
                    f = l,
                    d = u
                }
                c = t,
                o.forEach(function(t) {
                    a.push(t.x),
                    h.push(t.y)
                }),
                a.push(f),
                h.push(d)
            }
            var _ = i(a) || 0
              , b = i(h) || 0
              , y = n(a) || 0
              , x = n(h) || 0
              , C = y - _
              , w = x - b
              , S = {
                left: _,
                top: b,
                width: C,
                height: w
            };
            return S
        }
    }),
    e.Path.fromObject = function(t, i) {
        if ("string" == typeof t.sourcePath) {
            var n = t.sourcePath;
            e.loadSVGFromURL(n, function(e) {
                var n = e[0];
                n.setOptions(t),
                i && i(n)
            })
        } else
            e.Object._fromObject("Path", t, i, "path")
    }
    ,
    e.Path.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat(["d"]),
    void (e.Path.fromElement = function(t, i, n) {
        var s = e.parseAttributes(t, e.Path.ATTRIBUTE_NAMES);
        i(new e.Path(s.d,r(s, n)))
    }
    ))
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend
      , n = e.util.array.min
      , r = e.util.array.max;
    e.Group || (e.Group = e.util.createClass(e.Object, e.Collection, {
        type: "group",
        strokeWidth: 0,
        subTargetCheck: !1,
        cacheProperties: [],
        useSetOnGroup: !1,
        initialize: function(t, e, i) {
            e = e || {},
            this._objects = [],
            i && this.callSuper("initialize", e),
            this._objects = t || [];
            for (var n = this._objects.length; n--; )
                this._objects[n].group = this;
            if (e.originX && (this.originX = e.originX),
            e.originY && (this.originY = e.originY),
            i)
                this._updateObjectsACoords();
            else {
                var r = e && e.centerPoint;
                r || this._calcBounds(),
                this._updateObjectsCoords(r),
                delete e.centerPoint,
                this.callSuper("initialize", e)
            }
            this.setCoords()
        },
        _updateObjectsACoords: function() {
            for (var t = !0, e = !0, i = this._objects.length; i--; )
                this._objects[i].setCoords(t, e)
        },
        _updateObjectsCoords: function(t) {
            for (var t = t || this.getCenterPoint(), e = this._objects.length; e--; )
                this._updateObjectCoords(this._objects[e], t)
        },
        _updateObjectCoords: function(t, e) {
            var i = t.left
              , n = t.top
              , r = !0
              , s = !0;
            t.set({
                left: i - e.x,
                top: n - e.y
            }),
            t.group = this,
            t.setCoords(r, s)
        },
        toString: function() {
            return "#<fabric.Group: (" + this.complexity() + ")>"
        },
        addWithUpdate: function(t) {
            return this._restoreObjectsState(),
            e.util.resetObjectTransform(this),
            t && (this._objects.push(t),
            t.group = this,
            t._set("canvas", this.canvas)),
            this._calcBounds(),
            this._updateObjectsCoords(),
            this.setCoords(),
            this.dirty = !0,
            this
        },
        removeWithUpdate: function(t) {
            return this._restoreObjectsState(),
            e.util.resetObjectTransform(this),
            this.remove(t),
            this._calcBounds(),
            this._updateObjectsCoords(),
            this.setCoords(),
            this.dirty = !0,
            this
        },
        _onObjectAdded: function(t) {
            this.dirty = !0,
            t.group = this,
            t._set("canvas", this.canvas)
        },
        _onObjectRemoved: function(t) {
            this.dirty = !0,
            delete t.group
        },
        _set: function(t, e) {
            var i = this._objects.length;
            if (this.useSetOnGroup)
                for (; i--; )
                    this._objects[i].setOnGroup(t, e);
            if ("canvas" === t)
                for (i = this._objects.length; i--; )
                    this._objects[i]._set(t, e);
            this.callSuper("_set", t, e)
        },
        toObject: function(t) {
            var e = this.getObjects().map(function(e) {
                var i = e.includeDefaultValues;
                e.includeDefaultValues = e.group.includeDefaultValues;
                var n = e.toObject(t);
                return e.includeDefaultValues = i,
                n
            });
            return i(this.callSuper("toObject", t), {
                objects: e
            })
        },
        toDatalessObject: function(t) {
            var e, n = this.sourcePath;
            return e = n ? n : this.getObjects().map(function(e) {
                var i = e.includeDefaultValues;
                e.includeDefaultValues = e.group.includeDefaultValues;
                var n = e.toDatalessObject(t);
                return e.includeDefaultValues = i,
                n
            }),
            i(this.callSuper("toDatalessObject", t), {
                objects: e
            })
        },
        render: function(t) {
            this._transformDone = !0,
            this.callSuper("render", t),
            this._transformDone = !1
        },
        shouldCache: function() {
            var t = this.objectCaching && (!this.group || this.needsItsOwnCache() || !this.group.isOnACache());
            if (this.ownCaching = t,
            t)
                for (var e = 0, i = this._objects.length; e < i; e++)
                    if (this._objects[e].willDrawShadow())
                        return this.ownCaching = !1,
                        !1;
            return t
        },
        willDrawShadow: function() {
            if (this.shadow)
                return this.callSuper("willDrawShadow");
            for (var t = 0, e = this._objects.length; t < e; t++)
                if (this._objects[t].willDrawShadow())
                    return !0;
            return !1
        },
        isOnACache: function() {
            return this.ownCaching || this.group && this.group.isOnACache()
        },
        drawObject: function(t) {
            for (var e = 0, i = this._objects.length; e < i; e++)
                this._objects[e].render(t)
        },
        isCacheDirty: function() {
            if (this.callSuper("isCacheDirty"))
                return !0;
            if (!this.statefullCache)
                return !1;
            for (var t = 0, e = this._objects.length; t < e; t++)
                if (this._objects[t].isCacheDirty(!0)) {
                    if (this._cacheCanvas) {
                        var i = this.cacheWidth / this.zoomX
                          , n = this.cacheHeight / this.zoomY;
                        this._cacheContext.clearRect(-i / 2, -n / 2, i, n)
                    }
                    return !0
                }
            return !1
        },
        _restoreObjectsState: function() {
            return this._objects.forEach(this._restoreObjectState, this),
            this
        },
        realizeTransform: function(t) {
            var i = t.calcTransformMatrix()
              , n = e.util.qrDecompose(i)
              , r = new e.Point(n.translateX,n.translateY);
            return t.flipX = !1,
            t.flipY = !1,
            t.set("scaleX", n.scaleX),
            t.set("scaleY", n.scaleY),
            t.skewX = n.skewX,
            t.skewY = n.skewY,
            t.angle = n.angle,
            t.setPositionByOrigin(r, "center", "center"),
            t
        },
        _restoreObjectState: function(t) {
            return this.realizeTransform(t),
            t.setCoords(),
            delete t.group,
            this
        },
        destroy: function() {
            return this._objects.forEach(function(t) {
                t.set("dirty", !0)
            }),
            this._restoreObjectsState()
        },
        toActiveSelection: function() {
            if (this.canvas) {
                var t = this._objects
                  , i = this.canvas;
                this._objects = [];
                var n = this.toObject();
                delete n.objects;
                var r = new e.ActiveSelection([]);
                return r.set(n),
                r.type = "activeSelection",
                i.remove(this),
                t.forEach(function(t) {
                    t.group = r,
                    t.dirty = !0,
                    i.add(t)
                }),
                r.canvas = i,
                r._objects = t,
                i._activeObject = r,
                r.setCoords(),
                r
            }
        },
        ungroupOnCanvas: function() {
            return this._restoreObjectsState()
        },
        setObjectsCoords: function() {
            var t = !0
              , e = !0;
            return this.forEachObject(function(i) {
                i.setCoords(t, e)
            }),
            this
        },
        _calcBounds: function(t) {
            for (var e, i, n, r = [], s = [], o = ["tr", "br", "bl", "tl"], a = 0, h = this._objects.length, c = o.length, l = !0; a < h; ++a)
                for (e = this._objects[a],
                e.setCoords(l),
                n = 0; n < c; n++)
                    i = o[n],
                    r.push(e.oCoords[i].x),
                    s.push(e.oCoords[i].y);
            this.set(this._getBounds(r, s, t))
        },
        _getBounds: function(t, i, s) {
            var o = new e.Point(n(t),n(i))
              , a = new e.Point(r(t),r(i))
              , h = {
                width: a.x - o.x || 0,
                height: a.y - o.y || 0
            };
            return s || (h.left = o.x || 0,
            h.top = o.y || 0,
            "center" === this.originX && (h.left += h.width / 2),
            "right" === this.originX && (h.left += h.width),
            "center" === this.originY && (h.top += h.height / 2),
            "bottom" === this.originY && (h.top += h.height)),
            h
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup();
            e.push("<g ", this.getSvgId(), 'transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '" style="', this.getSvgFilter(), '">\n');
            for (var i = 0, n = this._objects.length; i < n; i++)
                e.push("\t", this._objects[i].toSVG(t));
            return e.push("</g>\n"),
            t ? t(e.join("")) : e.join("")
        }
    }),
    e.Group.fromObject = function(t, i) {
        e.util.enlivenObjects(t.objects, function(n) {
            var r = e.util.object.clone(t, !0);
            delete r.objects,
            i && i(new e.Group(n,r,(!0)))
        })
    }
    )
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {});
    e.ActiveSelection || (e.ActiveSelection = e.util.createClass(e.Group, {
        type: "activeSelection",
        initialize: function(t, i) {
            i = i || {},
            this._objects = t || [];
            for (var n = this._objects.length; n--; )
                this._objects[n].group = this;
            i.originX && (this.originX = i.originX),
            i.originY && (this.originY = i.originY),
            this._calcBounds(),
            this._updateObjectsCoords(),
            e.Object.prototype.initialize.call(this, i),
            this.setCoords()
        },
        toGroup: function() {
            var t = this._objects;
            this._objects = [];
            var i = this.toObject()
              , n = new e.Group([]);
            if (delete i.objects,
            n.set(i),
            n.type = "group",
            t.forEach(function(t) {
                t.group = n,
                t.canvas.remove(t)
            }),
            n._objects = t,
            !this.canvas)
                return n;
            var r = this.canvas;
            return r.add(n),
            r._activeObject = n,
            n.setCoords(),
            n
        },
        onDeselect: function() {
            return this.destroy(),
            !1
        },
        toString: function() {
            return "#<fabric.ActiveSelection: (" + this.complexity() + ")>"
        },
        _set: function(t, i) {
            var n = this._objects.length;
            if ("canvas" === t)
                for (; n--; )
                    this._objects[n].set(t, i);
            if (this.useSetOnGroup)
                for (; n--; )
                    this._objects[n].setOnGroup(t, i);
            e.Object.prototype._set.call(this, t, i)
        },
        shouldCache: function() {
            return !1
        },
        willDrawShadow: function() {
            if (this.shadow)
                return this.callSuper("willDrawShadow");
            for (var t = 0, e = this._objects.length; t < e; t++)
                if (this._objects[t].willDrawShadow())
                    return !0;
            return !1
        },
        isOnACache: function() {
            return !1
        },
        _renderControls: function(t, e, i) {
            t.save(),
            t.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1,
            this.callSuper("_renderControls", t, e),
            i = i || {},
            "undefined" == typeof i.hasControls && (i.hasControls = !1),
            "undefined" == typeof i.hasRotatingPoint && (i.hasRotatingPoint = !1),
            i.forActiveSelection = !0;
            for (var n = 0, r = this._objects.length; n < r; n++)
                this._objects[n]._renderControls(t, i);
            t.restore()
        }
    }),
    e.ActiveSelection.fromObject = function(t, i) {
        e.util.enlivenObjects(t.objects, function(n) {
            delete t.objects,
            i && i(new e.ActiveSelection(n,t,(!0)))
        })
    }
    )
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = fabric.util.object.extend;
    return t.fabric || (t.fabric = {}),
    t.fabric.Image ? void fabric.warn("fabric.Image is already defined.") : (fabric.Image = fabric.util.createClass(fabric.Object, {
        type: "image",
        crossOrigin: "",
        strokeWidth: 0,
        _lastScaleX: 1,
        _lastScaleY: 1,
        _filterScalingX: 1,
        _filterScalingY: 1,
        minimumScaleTrigger: .5,
        stateProperties: fabric.Object.prototype.stateProperties.concat("cropX", "cropY"),
        objectCaching: !1,
        cacheKey: "",
        cropX: 0,
        cropY: 0,
        initialize: function(t, e) {
            e || (e = {}),
            this.filters = [],
            this.cacheKey = "texture" + fabric.Object.__uid++,
            this.callSuper("initialize", e),
            this._initElement(t, e)
        },
        getElement: function() {
            return this._element
        },
        setElement: function(t, e) {
            var i = fabric.filterBackend;
            return i && i.evictCachesForKey && (i.evictCachesForKey(this.cacheKey),
            i.evictCachesForKey(this.cacheKey + "_filtered")),
            this._element = t,
            this._originalElement = t,
            this._initConfig(e),
            this.resizeFilter && this.applyResizeFilters(),
            0 !== this.filters.length && this.applyFilters(),
            this
        },
        dispose: function() {
            var t = fabric.filterBackend;
            t && t.evictCachesForKey && (t.evictCachesForKey(this.cacheKey),
            t.evictCachesForKey(this.cacheKey + "_filtered")),
            this._originalElement = void 0,
            this._element = void 0,
            this._filteredEl = void 0
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this._element.crossOrigin = t,
            this
        },
        getOriginalSize: function() {
            var t = this.getElement();
            return {
                width: t.width,
                height: t.height
            }
        },
        _stroke: function(t) {
            if (this.stroke && 0 !== this.strokeWidth) {
                var e = this.width / 2
                  , i = this.height / 2;
                t.beginPath(),
                t.moveTo(-e, -i),
                t.lineTo(e, -i),
                t.lineTo(e, i),
                t.lineTo(-e, i),
                t.lineTo(-e, -i),
                t.closePath()
            }
        },
        _renderDashedStroke: function(t) {
            var e = -this.width / 2
              , i = -this.height / 2
              , n = this.width
              , r = this.height;
            t.save(),
            this._setStrokeStyles(t, this),
            t.beginPath(),
            fabric.util.drawDashedLine(t, e, i, e + n, i, this.strokeDashArray),
            fabric.util.drawDashedLine(t, e + n, i, e + n, i + r, this.strokeDashArray),
            fabric.util.drawDashedLine(t, e + n, i + r, e, i + r, this.strokeDashArray),
            fabric.util.drawDashedLine(t, e, i + r, e, i, this.strokeDashArray),
            t.closePath(),
            t.restore()
        },
        toObject: function(t) {
            var i = [];
            this.filters.forEach(function(t) {
                t && i.push(t.toObject())
            });
            var n = e(this.callSuper("toObject", ["crossOrigin", "cropX", "cropY"].concat(t)), {
                src: this.getSrc(),
                filters: i
            });
            return this.resizeFilter && (n.resizeFilter = this.resizeFilter.toObject()),
            n
        },
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup()
              , i = -this.width / 2
              , n = -this.height / 2;
            e.push('<g transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '">\n');
            var r = ["\t<image ", this.getSvgId(), 'xlink:href="', this.getSvgSrc(!0), '" x="', i, '" y="', n, '" style="', this.getSvgStyles(), '" width="', this.width, '" height="', this.height, '"></image>\n'];
            if ("fill" === this.paintFirst && Array.prototype.push.apply(e, r),
            this.stroke || this.strokeDashArray) {
                var s = this.fill;
                this.fill = null,
                e.push("\t<rect ", 'x="', i, '" y="', n, '" width="', this.width, '" height="', this.height, '" style="', this.getSvgStyles(), '"/>\n'),
                this.fill = s
            }
            return "fill" !== this.paintFirst && Array.prototype.push.apply(e, r),
            e.push("</g>\n"),
            t ? t(e.join("")) : e.join("")
        },
        getSrc: function(t) {
            var e = t ? this._element : this._originalElement;
            return e ? e.toDataURL ? e.toDataURL() : e.src : this.src || ""
        },
        setSrc: function(t, e, i) {
            return fabric.util.loadImage(t, function(t) {
                this.setElement(t, i),
                e(this)
            }, this, i && i.crossOrigin),
            this
        },
        toString: function() {
            return '#<fabric.Image: { src: "' + this.getSrc() + '" }>'
        },
        applyResizeFilters: function() {
            var t = this.resizeFilter
              , e = this.canvas ? this.canvas.getRetinaScaling() : 1
              , i = this.minimumScaleTrigger
              , n = this.scaleX * e
              , r = this.scaleY * e
              , s = this._filteredEl || this._originalElement;
            if (!t || n > i && r > i)
                return this._element = s,
                this._filterScalingX = 1,
                void (this._filterScalingY = 1);
            fabric.filterBackend || (fabric.filterBackend = fabric.initFilterBackend());
            var o = fabric.util.createCanvasElement()
              , a = this._filteredEl ? this.cacheKey : this.cacheKey + "_filtered"
              , h = s.width
              , c = s.height;
            o.width = h,
            o.height = c,
            this._element = o,
            t.scaleX = n,
            t.scaleY = r,
            fabric.filterBackend.applyFilters([t], s, h, c, this._element, a),
            this._filterScalingX = o.width / this._originalElement.width,
            this._filterScalingY = o.height / this._originalElement.height
        },
        applyFilters: function(t) {
            if (t = t || this.filters || [],
            t = t.filter(function(t) {
                return t
            }),
            0 === t.length)
                return this._element = this._originalElement,
                this._filteredEl = null,
                this._filterScalingX = 1,
                this._filterScalingY = 1,
                this;
            var e = this._originalElement
              , i = e.naturalWidth || e.width
              , n = e.naturalHeight || e.height;
            if (this._element === this._originalElement) {
                var r = fabric.util.createCanvasElement();
                r.width = i,
                r.height = n,
                this._element = r,
                this._filteredEl = r
            } else
                this._element.getContext("2d").clearRect(0, 0, i, n);
            return fabric.filterBackend || (fabric.filterBackend = fabric.initFilterBackend()),
            fabric.filterBackend.applyFilters(t, this._originalElement, i, n, this._element, this.cacheKey),
            this._originalElement.width === this._element.width && this._originalElement.height === this._element.height || (this._filterScalingX = this._element.width / this._originalElement.width,
            this._filterScalingY = this._element.height / this._originalElement.height),
            this
        },
        _render: function(t) {
            this.isMoving === !1 && this.resizeFilter && this._needsResize() && (this._lastScaleX = this.scaleX,
            this._lastScaleY = this.scaleY,
            this.applyResizeFilters()),
            this._stroke(t),
            this._renderPaintInOrder(t)
        },
        _renderFill: function(t) {
            var e = this.width
              , i = this.height
              , n = e * this._filterScalingX
              , r = i * this._filterScalingY
              , s = -e / 2
              , o = -i / 2
              , a = this._element;
            a && t.drawImage(a, this.cropX * this._filterScalingX, this.cropY * this._filterScalingY, n, r, s, o, e, i)
        },
        _needsResize: function() {
            return this.scaleX !== this._lastScaleX || this.scaleY !== this._lastScaleY
        },
        _resetWidthHeight: function() {
            var t = this.getElement();
            this.set("width", t.width),
            this.set("height", t.height)
        },
        _initElement: function(t, e) {
            this.setElement(fabric.util.getById(t), e),
            fabric.util.addClass(this.getElement(), fabric.Image.CSS_CANVAS)
        },
        _initConfig: function(t) {
            t || (t = {}),
            this.setOptions(t),
            this._setWidthHeight(t),
            this._element && this.crossOrigin && (this._element.crossOrigin = this.crossOrigin)
        },
        _initFilters: function(t, e) {
            t && t.length ? fabric.util.enlivenObjects(t, function(t) {
                e && e(t)
            }, "fabric.Image.filters") : e && e()
        },
        _setWidthHeight: function(t) {
            this.width = "width"in t ? t.width : this.getElement() ? this.getElement().width || 0 : 0,
            this.height = "height"in t ? t.height : this.getElement() ? this.getElement().height || 0 : 0
        },
        parsePreserveAspectRatioAttribute: function() {
            var t, e = fabric.util.parsePreserveAspectRatioAttribute(this.preserveAspectRatio || ""), i = this._element.width, n = this._element.height, r = 1, s = 1, o = 0, a = 0, h = 0, c = 0, l = this.width, u = this.height, f = {
                width: l,
                height: u
            };
            return !e || "none" === e.alignX && "none" === e.alignY ? (r = l / i,
            s = u / n) : ("meet" === e.meetOrSlice && (r = s = fabric.util.findScaleToFit(this._element, f),
            t = (l - i * r) / 2,
            "Min" === e.alignX && (o = -t),
            "Max" === e.alignX && (o = t),
            t = (u - n * s) / 2,
            "Min" === e.alignY && (a = -t),
            "Max" === e.alignY && (a = t)),
            "slice" === e.meetOrSlice && (r = s = fabric.util.findScaleToCover(this._element, f),
            t = i - l / r,
            "Mid" === e.alignX && (h = t / 2),
            "Max" === e.alignX && (h = t),
            t = n - u / s,
            "Mid" === e.alignY && (c = t / 2),
            "Max" === e.alignY && (c = t),
            i = l / r,
            n = u / s)),
            {
                width: i,
                height: n,
                scaleX: r,
                scaleY: s,
                offsetLeft: o,
                offsetTop: a,
                cropX: h,
                cropY: c
            }
        }
    }),
    fabric.Image.CSS_CANVAS = "canvas-img",
    fabric.Image.prototype.getSvgSrc = fabric.Image.prototype.getSrc,
    fabric.Image.fromObject = function(t, e) {
        fabric.util.loadImage(t.src, function(i, n) {
            return n ? void (e && e(null, n)) : void fabric.Image.prototype._initFilters.call(t, t.filters, function(n) {
                t.filters = n || [],
                fabric.Image.prototype._initFilters.call(t, [t.resizeFilter], function(n) {
                    t.resizeFilter = n[0];
                    var r = new fabric.Image(i,t);
                    e(r)
                })
            })
        }, null, t.crossOrigin)
    }
    ,
    fabric.Image.fromURL = function(t, e, i) {
        fabric.util.loadImage(t, function(t) {
            e && e(new fabric.Image(t,i))
        }, null, i && i.crossOrigin)
    }
    ,
    fabric.Image.ATTRIBUTE_NAMES = fabric.SHARED_ATTRIBUTES.concat("x y width height preserveAspectRatio xlink:href crossOrigin".split(" ")),
    void (fabric.Image.fromElement = function(t, i, n) {
        var r = fabric.parseAttributes(t, fabric.Image.ATTRIBUTE_NAMES);
        fabric.Image.fromURL(r["xlink:href"], i, e(n ? fabric.util.object.clone(n) : {}, r))
    }
    ))
}("undefined" != typeof exports ? exports : this),
fabric.util.object.extend(fabric.Object.prototype, {
    _getAngleValueForStraighten: function() {
        var t = this.angle % 360;
        return t > 0 ? 90 * Math.round((t - 1) / 90) : 90 * Math.round(t / 90)
    },
    straighten: function() {
        return this.rotate(this._getAngleValueForStraighten()),
        this
    },
    fxStraighten: function(t) {
        t = t || {};
        var e = function() {}
          , i = t.onComplete || e
          , n = t.onChange || e
          , r = this;
        return fabric.util.animate({
            startValue: this.get("angle"),
            endValue: this._getAngleValueForStraighten(),
            duration: this.FX_DURATION,
            onChange: function(t) {
                r.rotate(t),
                n()
            },
            onComplete: function() {
                r.setCoords(),
                i()
            }
        }),
        this
    }
}),
fabric.util.object.extend(fabric.StaticCanvas.prototype, {
    straightenObject: function(t) {
        return t.straighten(),
        this.requestRenderAll(),
        this
    },
    fxStraightenObject: function(t) {
        return t.fxStraighten({
            onChange: this.requestRenderAllBound
        }),
        this
    }
}),
function() {
    "use strict";
    function t(t, e) {
        var i = "precision " + e + " float;\nvoid main(){}"
          , n = t.createShader(t.FRAGMENT_SHADER);
        return t.shaderSource(n, i),
        t.compileShader(n),
        !!t.getShaderParameter(n, t.COMPILE_STATUS)
    }
    function e(t) {
        t && t.tileSize && (this.tileSize = t.tileSize),
        this.setupGLContext(this.tileSize, this.tileSize),
        this.captureGPUInfo()
    }
    fabric.isWebglSupported = function(e) {
        if (fabric.isLikelyNode)
            return !1;
        e = e || fabric.WebglFilterBackend.prototype.tileSize;
        var i = document.createElement("canvas")
          , n = i.getContext("webgl") || i.getContext("experimental-webgl")
          , r = !1;
        if (n) {
            fabric.maxTextureSize = n.getParameter(n.MAX_TEXTURE_SIZE),
            r = fabric.maxTextureSize >= e;
            for (var s = ["highp", "mediump", "lowp"], o = 0; o < 3; o++)
                if (t(n, s[o])) {
                    fabric.webGlPrecision = s[o];
                    break
                }
        }
        return this.isSupported = r,
        r
    }
    ,
    fabric.WebglFilterBackend = e,
    e.prototype = {
        tileSize: 2048,
        resources: {},
        setupGLContext: function(t, e) {
            this.dispose(),
            this.createWebGLCanvas(t, e),
            this.aPosition = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
            this.chooseFastestCopyGLTo2DMethod(t, e)
        },
        chooseFastestCopyGLTo2DMethod: function(t, e) {
            var i, n = "undefined" != typeof window.performance;
            try {
                new ImageData(1,1),
                i = !0
            } catch (r) {
                i = !1
            }
            var s = "undefined" != typeof ArrayBuffer
              , o = "undefined" != typeof Uint8ClampedArray;
            if (n && i && s && o) {
                var a, h, c, l = fabric.util.createCanvasElement(), u = new ArrayBuffer(t * e * 4), f = {
                    imageBuffer: u,
                    destinationWidth: t,
                    destinationHeight: e,
                    targetCanvas: l
                };
                l.width = t,
                l.height = e,
                a = window.performance.now(),
                copyGLTo2DDrawImage.call(f, this.gl, f),
                h = window.performance.now() - a,
                a = window.performance.now(),
                copyGLTo2DPutImageData.call(f, this.gl, f),
                c = window.performance.now() - a,
                h > c ? (this.imageBuffer = u,
                this.copyGLTo2D = copyGLTo2DPutImageData) : this.copyGLTo2D = copyGLTo2DDrawImage
            }
        },
        createWebGLCanvas: function(t, e) {
            var i = fabric.util.createCanvasElement();
            i.width = t,
            i.height = e;
            var n = {
                premultipliedAlpha: !1
            }
              , r = i.getContext("webgl", n);
            r || (r = i.getContext("experimental-webgl", n)),
            r && (r.clearColor(0, 0, 0, 0),
            this.canvas = i,
            this.gl = r)
        },
        applyFilters: function(t, e, i, n, r, s) {
            var o, a = this.gl;
            s && (o = this.getCachedTexture(s, e));
            var h = {
                originalWidth: e.width || e.originalWidth,
                originalHeight: e.height || e.originalHeight,
                sourceWidth: i,
                sourceHeight: n,
                destinationWidth: i,
                destinationHeight: n,
                context: a,
                sourceTexture: this.createTexture(a, i, n, !o && e),
                targetTexture: this.createTexture(a, i, n),
                originalTexture: o || this.createTexture(a, i, n, !o && e),
                passes: t.length,
                webgl: !0,
                aPosition: this.aPosition,
                programCache: this.programCache,
                pass: 0,
                filterBackend: this,
                targetCanvas: r
            }
              , c = a.createFramebuffer();
            return a.bindFramebuffer(a.FRAMEBUFFER, c),
            t.forEach(function(t) {
                t && t.applyTo(h)
            }),
            resizeCanvasIfNeeded(h),
            this.copyGLTo2D(a, h),
            a.bindTexture(a.TEXTURE_2D, null),
            a.deleteTexture(h.sourceTexture),
            a.deleteTexture(h.targetTexture),
            a.deleteFramebuffer(c),
            r.getContext("2d").setTransform(1, 0, 0, 1, 0, 0),
            h
        },
        applyFiltersDebug: function(t, e, i, n, r, s) {
            var o = this.gl
              , a = this.applyFilters(t, e, i, n, r, s)
              , h = o.getError();
            if (h !== o.NO_ERROR) {
                var c = this.glErrorToString(o, h)
                  , l = new Error("WebGL Error " + c);
                throw l.glErrorCode = h,
                l
            }
            return a
        },
        glErrorToString: function(t, e) {
            if (!t)
                return "Context undefined for error code: " + e;
            if ("number" != typeof e)
                return "Error code is not a number";
            switch (e) {
            case t.NO_ERROR:
                return "NO_ERROR";
            case t.INVALID_ENUM:
                return "INVALID_ENUM";
            case t.INVALID_VALUE:
                return "INVALID_VALUE";
            case t.INVALID_OPERATION:
                return "INVALID_OPERATION";
            case t.INVALID_FRAMEBUFFER_OPERATION:
                return "INVALID_FRAMEBUFFER_OPERATION";
            case t.OUT_OF_MEMORY:
                return "OUT_OF_MEMORY";
            case t.CONTEXT_LOST_WEBGL:
                return "CONTEXT_LOST_WEBGL";
            default:
                return "UNKNOWN_ERROR"
            }
        },
        dispose: function() {
            this.canvas && (this.canvas = null,
            this.gl = null),
            this.clearWebGLCaches()
        },
        clearWebGLCaches: function() {
            this.programCache = {},
            this.textureCache = {}
        },
        createTexture: function(t, e, i, n) {
            var r = t.createTexture();
            return t.bindTexture(t.TEXTURE_2D, r),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            n ? t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, n) : t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, e, i, 0, t.RGBA, t.UNSIGNED_BYTE, null),
            r
        },
        getCachedTexture: function(t, e) {
            if (this.textureCache[t])
                return this.textureCache[t];
            var i = this.createTexture(this.gl, e.width, e.height, e);
            return this.textureCache[t] = i,
            i
        },
        evictCachesForKey: function(t) {
            this.textureCache[t] && (this.gl.deleteTexture(this.textureCache[t]),
            delete this.textureCache[t])
        },
        copyGLTo2D: copyGLTo2DDrawImage,
        captureGPUInfo: function() {
            if (this.gpuInfo)
                return this.gpuInfo;
            var t = this.gl
              , e = t.getExtension("WEBGL_debug_renderer_info")
              , i = {
                renderer: "",
                vendor: ""
            };
            if (e) {
                var n = t.getParameter(e.UNMASKED_RENDERER_WEBGL)
                  , r = t.getParameter(e.UNMASKED_VENDOR_WEBGL);
                n && (i.renderer = n.toLowerCase()),
                r && (i.vendor = r.toLowerCase())
            }
            return this.gpuInfo = i,
            i
        }
    }
}(),
function() {
    "use strict";
    function t() {}
    var e = function() {};
    fabric.Canvas2dFilterBackend = t,
    t.prototype = {
        evictCachesForKey: e,
        dispose: e,
        clearWebGLCaches: e,
        resources: {},
        applyFilters: function(t, e, i, n, r) {
            var s = r.getContext("2d");
            s.drawImage(e, 0, 0, i, n);
            var o = s.getImageData(0, 0, i, n)
              , a = s.getImageData(0, 0, i, n)
              , h = {
                sourceWidth: i,
                sourceHeight: n,
                imageData: o,
                originalEl: e,
                originalImageData: a,
                canvasEl: r,
                ctx: s,
                filterBackend: this
            };
            return t.forEach(function(t) {
                t.applyTo(h)
            }),
            h.imageData.width === i && h.imageData.height === n || (r.width = h.imageData.width,
            r.height = h.imageData.height),
            s.putImageData(h.imageData, 0, 0),
            h
        }
    }
}(),
fabric.Image.filters = fabric.Image.filters || {},
fabric.Image.filters.BaseFilter = fabric.util.createClass({
    type: "BaseFilter",
    vertexSource: "attribute vec2 aPosition;\nvarying vec2 vTexCoord;\nvoid main() {\nvTexCoord = aPosition;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
    fragmentSource: "precision highp float;\nvarying vec2 vTexCoord;\nuniform sampler2D uTexture;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\n}",
    initialize: function(t) {
        t && this.setOptions(t)
    },
    setOptions: function(t) {
        for (var e in t)
            this[e] = t[e]
    },
    createProgram: function(t, e, i) {
        e = e || this.fragmentSource,
        i = i || this.vertexSource,
        "highp" !== fabric.webGlPrecision && (e = e.replace(/precision highp float/g, "precision " + fabric.webGlPrecision + " float"));
        var n = t.createShader(t.VERTEX_SHADER);
        if (t.shaderSource(n, i),
        t.compileShader(n),
        !t.getShaderParameter(n, t.COMPILE_STATUS))
            throw new Error("Vertex shader compile error for " + this.type + ": " + t.getShaderInfoLog(n));
        var r = t.createShader(t.FRAGMENT_SHADER);
        if (t.shaderSource(r, e),
        t.compileShader(r),
        !t.getShaderParameter(r, t.COMPILE_STATUS))
            throw new Error("Fragment shader compile error for " + this.type + ": " + t.getShaderInfoLog(r));
        var s = t.createProgram();
        if (t.attachShader(s, n),
        t.attachShader(s, r),
        t.linkProgram(s),
        !t.getProgramParameter(s, t.LINK_STATUS))
            throw new Error('Shader link error for "${this.type}" ' + t.getProgramInfoLog(s));
        var o = this.getAttributeLocations(t, s)
          , a = this.getUniformLocations(t, s) || {};
        return a.uStepW = t.getUniformLocation(s, "uStepW"),
        a.uStepH = t.getUniformLocation(s, "uStepH"),
        {
            program: s,
            attributeLocations: o,
            uniformLocations: a
        }
    },
    getAttributeLocations: function(t, e) {
        return {
            aPosition: t.getAttribLocation(e, "aPosition")
        }
    },
    getUniformLocations: function() {
        return {}
    },
    sendAttributeData: function(t, e, i) {
        var n = e.aPostion
          , r = t.createBuffer();
        t.bindBuffer(t.ARRAY_BUFFER, r),
        t.enableVertexAttribArray(n),
        t.vertexAttribPointer(n, 2, t.FLOAT, !1, 0, 0),
        t.bufferData(t.ARRAY_BUFFER, i, t.STATIC_DRAW)
    },
    _setupFrameBuffer: function(t) {
        var e, i, n = t.context;
        t.passes > 1 ? (e = t.destinationWidth,
        i = t.destinationHeight,
        t.sourceWidth === e && t.sourceHeight === i || (n.deleteTexture(t.targetTexture),
        t.targetTexture = t.filterBackend.createTexture(n, e, i)),
        n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, t.targetTexture, 0)) : (n.bindFramebuffer(n.FRAMEBUFFER, null),
        n.finish())
    },
    _swapTextures: function(t) {
        t.passes--,
        t.pass++;
        var e = t.targetTexture;
        t.targetTexture = t.sourceTexture,
        t.sourceTexture = e
    },
    isNeutralState: function() {
        return !1
    },
    applyTo: function(t) {
        if (t.webgl) {
            if (t.passes > 1 && this.isNeutralState(t))
                return;
            this._setupFrameBuffer(t),
            this.applyToWebGL(t),
            this._swapTextures(t)
        } else
            this.isNeutralState() || this.applyTo2d(t)
    },
    retrieveShader: function(t) {
        return t.programCache.hasOwnProperty(this.type) || (t.programCache[this.type] = this.createProgram(t.context)),
        t.programCache[this.type]
    },
    applyToWebGL: function(t) {
        var e = t.context
          , i = this.retrieveShader(t);
        0 === t.pass && t.originalTexture ? e.bindTexture(e.TEXTURE_2D, t.originalTexture) : e.bindTexture(e.TEXTURE_2D, t.sourceTexture),
        e.useProgram(i.program),
        this.sendAttributeData(e, i.attributeLocations, t.aPosition),
        e.uniform1f(i.uniformLocations.uStepW, 1 / t.sourceWidth),
        e.uniform1f(i.uniformLocations.uStepH, 1 / t.sourceHeight),
        this.sendUniformData(e, i.uniformLocations),
        e.viewport(0, 0, t.destinationWidth, t.destinationHeight),
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4)
    },
    bindAdditionalTexture: function(t, e, i) {
        t.activeTexture(i),
        t.bindTexture(t.TEXTURE_2D, e),
        t.activeTexture(t.TEXTURE0)
    },
    unbindAdditionalTexture: function(t, e) {
        t.activeTexture(e),
        t.bindTexture(t.TEXTURE_2D, null),
        t.activeTexture(t.TEXTURE0)
    },
    getMainParameter: function() {
        return this[this.mainParameter]
    },
    setMainParameter: function(t) {
        this[this.mainParameter] = t
    },
    sendUniformData: function() {},
    createHelpLayer: function(t) {
        if (!t.helpLayer) {
            var e = document.createElement("canvas");
            e.width = t.sourceWidth,
            e.height = t.sourceHeight,
            t.helpLayer = e
        }
    },
    toObject: function() {
        var t = {
            type: this.type
        }
          , e = this.mainParameter;
        return e && (t[e] = this[e]),
        t
    },
    toJSON: function() {
        return this.toObject()
    }
}),
fabric.Image.filters.BaseFilter.fromObject = function(t, e) {
    var i = new fabric.Image.filters[t.type](t);
    return e && e(i),
    i
}
,
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.ColorMatrix = n(i.BaseFilter, {
        type: "ColorMatrix",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nuniform mat4 uColorMatrix;\nuniform vec4 uConstants;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor *= uColorMatrix;\ncolor += uConstants;\ngl_FragColor = color;\n}",
        matrix: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        mainParameter: "matrix",
        colorsOnly: !0,
        initialize: function(t) {
            this.callSuper("initialize", t),
            this.matrix = this.matrix.slice(0)
        },
        isNeutralState: function() {
            for (var t = i.ColorMatrix, e = 20; e--; )
                if (this.matrix[e] !== t.prototype.matrix[e])
                    return !1;
            return !0
        },
        applyTo2d: function(t) {
            var e, i, n, r, s, o = t.imageData, a = o.data, h = a.length, c = this.matrix, l = this.colorsOnly;
            for (s = 0; s < h; s += 4)
                e = a[s],
                i = a[s + 1],
                n = a[s + 2],
                l ? (a[s] = e * c[0] + i * c[1] + n * c[2] + 255 * c[4],
                a[s + 1] = e * c[5] + i * c[6] + n * c[7] + 255 * c[9],
                a[s + 2] = e * c[10] + i * c[11] + n * c[12] + 255 * c[14]) : (r = a[s + 3],
                a[s] = e * c[0] + i * c[1] + n * c[2] + r * c[3] + 255 * c[4],
                a[s + 1] = e * c[5] + i * c[6] + n * c[7] + r * c[8] + 255 * c[9],
                a[s + 2] = e * c[10] + i * c[11] + n * c[12] + r * c[13] + 255 * c[14],
                a[s + 3] = e * c[15] + i * c[16] + n * c[17] + r * c[18] + 255 * c[19])
        },
        getUniformLocations: function(t, e) {
            return {
                uColorMatrix: t.getUniformLocation(e, "uColorMatrix"),
                uConstants: t.getUniformLocation(e, "uConstants")
            }
        },
        sendUniformData: function(t, e) {
            var i = this.matrix
              , n = [i[0], i[1], i[2], i[3], i[5], i[6], i[7], i[8], i[10], i[11], i[12], i[13], i[15], i[16], i[17], i[18]]
              , r = [i[4], i[9], i[14], i[19]];
            t.uniformMatrix4fv(e.uColorMatrix, !1, n),
            t.uniform4fv(e.uConstants, r)
        }
    }),
    e.Image.filters.ColorMatrix.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Brightness = n(i.BaseFilter, {
        type: "Brightness",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBrightness;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += uBrightness;\ngl_FragColor = color;\n}",
        brightness: 0,
        mainParameter: "brightness",
        applyTo2d: function(t) {
            if (0 !== this.brightness) {
                var e, i = t.imageData, n = i.data, r = n.length, s = Math.round(255 * this.brightness);
                for (e = 0; e < r; e += 4)
                    n[e] = n[e] + s,
                    n[e + 1] = n[e + 1] + s,
                    n[e + 2] = n[e + 2] + s
            }
        },
        getUniformLocations: function(t, e) {
            return {
                uBrightness: t.getUniformLocation(e, "uBrightness")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1f(e.uBrightness, this.brightness)
        }
    }),
    e.Image.filters.Brightness.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend
      , n = e.Image.filters
      , r = e.util.createClass;
    n.Convolute = r(n.BaseFilter, {
        type: "Convolute",
        opaque: !1,
        matrix: [0, 0, 0, 0, 1, 0, 0, 0, 0],
        fragmentSource: {
            Convolute_3_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
            Convolute_3_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[9];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 3.0; h+=1.0) {\nfor (float w = 0.0; w < 3.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
            Convolute_5_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
            Convolute_5_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[25];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 5.0; h+=1.0) {\nfor (float w = 0.0; w < 5.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
            Convolute_7_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
            Convolute_7_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[49];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 7.0; h+=1.0) {\nfor (float w = 0.0; w < 7.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}",
            Convolute_9_1: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 0);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];\n}\n}\ngl_FragColor = color;\n}",
            Convolute_9_0: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uMatrix[81];\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = vec4(0, 0, 0, 1);\nfor (float h = 0.0; h < 9.0; h+=1.0) {\nfor (float w = 0.0; w < 9.0; w+=1.0) {\nvec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));\ncolor.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];\n}\n}\nfloat alpha = texture2D(uTexture, vTexCoord).a;\ngl_FragColor = color;\ngl_FragColor.a = alpha;\n}"
        },
        retrieveShader: function(t) {
            var e = Math.sqrt(this.matrix.length)
              , i = this.type + "_" + e + "_" + (this.opaque ? 1 : 0)
              , n = this.fragmentSource[i];
            return t.programCache.hasOwnProperty(i) || (t.programCache[i] = this.createProgram(t.context, n)),
            t.programCache[i]
        },
        applyTo2d: function(t) {
            var e, i, n, r, s, o, a, h, c, l, u, f, d, p = t.imageData, g = p.data, v = this.matrix, m = Math.round(Math.sqrt(v.length)), _ = Math.floor(m / 2), b = p.width, y = p.height, x = t.ctx.createImageData(b, y), C = x.data, w = this.opaque ? 1 : 0;
            for (u = 0; u < y; u++)
                for (l = 0; l < b; l++) {
                    for (s = 4 * (u * b + l),
                    e = 0,
                    i = 0,
                    n = 0,
                    r = 0,
                    d = 0; d < m; d++)
                        for (f = 0; f < m; f++)
                            a = u + d - _,
                            o = l + f - _,
                            a < 0 || a > y || o < 0 || o > b || (h = 4 * (a * b + o),
                            c = v[d * m + f],
                            e += g[h] * c,
                            i += g[h + 1] * c,
                            n += g[h + 2] * c,
                            w || (r += g[h + 3] * c));
                    C[s] = e,
                    C[s + 1] = i,
                    C[s + 2] = n,
                    w ? C[s + 3] = g[s + 3] : C[s + 3] = r
                }
            t.imageData = x
        },
        getUniformLocations: function(t, e) {
            return {
                uMatrix: t.getUniformLocation(e, "uMatrix"),
                uOpaque: t.getUniformLocation(e, "uOpaque"),
                uHalfSize: t.getUniformLocation(e, "uHalfSize"),
                uSize: t.getUniformLocation(e, "uSize")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1fv(e.uMatrix, this.matrix)
        },
        toObject: function() {
            return i(this.callSuper("toObject"), {
                opaque: this.opaque,
                matrix: this.matrix
            })
        }
    }),
    e.Image.filters.Convolute.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Grayscale = n(i.BaseFilter, {
        type: "Grayscale",
        fragmentSource: {
            average: "precision highp float;\nuniform sampler2D uTexture;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat average = (color.r + color.b + color.g) / 3.0;\ngl_FragColor = vec4(average, average, average, color.a);\n}",
            lightness: "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;\ngl_FragColor = vec4(average, average, average, col.a);\n}",
            luminosity: "precision highp float;\nuniform sampler2D uTexture;\nuniform int uMode;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 col = texture2D(uTexture, vTexCoord);\nfloat average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;\ngl_FragColor = vec4(average, average, average, col.a);\n}"
        },
        mode: "average",
        mainParameter: "mode",
        applyTo2d: function(t) {
            var e, i, n = t.imageData, r = n.data, s = r.length, o = this.mode;
            for (e = 0; e < s; e += 4)
                "average" === o ? i = (r[e] + r[e + 1] + r[e + 2]) / 3 : "lightness" === o ? i = (Math.min(r[e], r[e + 1], r[e + 2]) + Math.max(r[e], r[e + 1], r[e + 2])) / 2 : "luminosity" === o && (i = .21 * r[e] + .72 * r[e + 1] + .07 * r[e + 2]),
                r[e] = i,
                r[e + 1] = i,
                r[e + 2] = i
        },
        retrieveShader: function(t) {
            var e = this.type + "_" + this.mode;
            if (!t.programCache.hasOwnProperty(e)) {
                var i = this.fragmentSource[this.mode];
                t.programCache[e] = this.createProgram(t.context, i)
            }
            return t.programCache[e]
        },
        getUniformLocations: function(t, e) {
            return {
                uMode: t.getUniformLocation(e, "uMode")
            }
        },
        sendUniformData: function(t, e) {
            var i = 1;
            t.uniform1i(e.uMode, i)
        }
    }),
    e.Image.filters.Grayscale.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Invert = n(i.BaseFilter, {
        type: "Invert",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform int uInvert;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nif (uInvert == 1) {\ngl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);\n} else {\ngl_FragColor = color;\n}\n}",
        invert: !0,
        mainParameter: "invert",
        applyTo2d: function(t) {
            if (this.invert) {
                var e, i = t.imageData, n = i.data, r = n.length;
                for (e = 0; e < r; e += 4)
                    n[e] = 255 - n[e],
                    n[e + 1] = 255 - n[e + 1],
                    n[e + 2] = 255 - n[e + 2]
            }
        },
        getUniformLocations: function(t, e) {
            return {
                uInvert: t.getUniformLocation(e, "uInvert")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1i(e.uInvert, this.invert)
        }
    }),
    e.Image.filters.Invert.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend
      , n = e.Image.filters
      , r = e.util.createClass;
    n.Noise = r(n.BaseFilter, {
        type: "Noise",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uStepH;\nuniform float uNoise;\nuniform float uSeed;\nvarying vec2 vTexCoord;\nfloat rand(vec2 co, float seed, float vScale) {\nreturn fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);\n}\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;\ngl_FragColor = color;\n}",
        mainParameter: "noise",
        noise: 0,
        applyTo2d: function(t) {
            if (0 !== this.noise) {
                var e, i, n = t.imageData, r = n.data, s = r.length, o = this.noise;
                for (e = 0,
                s = r.length; e < s; e += 4)
                    i = (.5 - Math.random()) * o,
                    r[e] += i,
                    r[e + 1] += i,
                    r[e + 2] += i
            }
        },
        getUniformLocations: function(t, e) {
            return {
                uNoise: t.getUniformLocation(e, "uNoise"),
                uSeed: t.getUniformLocation(e, "uSeed")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1f(e.uNoise, this.noise / 255),
            t.uniform1f(e.uSeed, Math.random())
        },
        toObject: function() {
            return i(this.callSuper("toObject"), {
                noise: this.noise
            })
        }
    }),
    e.Image.filters.Noise.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Pixelate = n(i.BaseFilter, {
        type: "Pixelate",
        blocksize: 4,
        mainParameter: "blocksize",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uBlocksize;\nuniform float uStepW;\nuniform float uStepH;\nvarying vec2 vTexCoord;\nvoid main() {\nfloat blockW = uBlocksize * uStepW;\nfloat blockH = uBlocksize * uStepW;\nint posX = int(vTexCoord.x / blockW);\nint posY = int(vTexCoord.y / blockH);\nfloat fposX = float(posX);\nfloat fposY = float(posY);\nvec2 squareCoords = vec2(fposX * blockW, fposY * blockH);\nvec4 color = texture2D(uTexture, squareCoords);\ngl_FragColor = color;\n}",
        applyTo2d: function(t) {
            if (1 !== this.blocksize) {
                var e, i, n, r, s, o, a, h, c, l, u, f = t.imageData, d = f.data, p = f.height, g = f.width;
                for (i = 0; i < p; i += this.blocksize)
                    for (n = 0; n < g; n += this.blocksize)
                        for (e = 4 * i * g + 4 * n,
                        r = d[e],
                        s = d[e + 1],
                        o = d[e + 2],
                        a = d[e + 3],
                        l = Math.min(i + this.blocksize, p),
                        u = Math.min(n + this.blocksize, g),
                        h = i; h < l; h++)
                            for (c = n; c < u; c++)
                                e = 4 * h * g + 4 * c,
                                d[e] = r,
                                d[e + 1] = s,
                                d[e + 2] = o,
                                d[e + 3] = a
            }
        },
        isNeutralState: function() {
            return 1 === this.blocksize
        },
        getUniformLocations: function(t, e) {
            return {
                uBlocksize: t.getUniformLocation(e, "uBlocksize"),
                uStepW: t.getUniformLocation(e, "uStepW"),
                uStepH: t.getUniformLocation(e, "uStepH")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1f(e.uBlocksize, this.blocksize)
        }
    }),
    e.Image.filters.Pixelate.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.extend
      , n = e.Image.filters
      , r = e.util.createClass;
    n.RemoveColor = r(n.BaseFilter, {
        type: "RemoveColor",
        color: "#FFFFFF",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uLow;\nuniform vec4 uHigh;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {\ngl_FragColor.a = 0.0;\n}\n}",
        distance: .02,
        useAlpha: !1,
        applyTo2d: function(t) {
            var i, n, r, s, o = t.imageData, a = o.data, h = 255 * this.distance, c = new e.Color(this.color).getSource(), l = [c[0] - h, c[1] - h, c[2] - h], u = [c[0] + h, c[1] + h, c[2] + h];
            for (i = 0; i < a.length; i += 4)
                n = a[i],
                r = a[i + 1],
                s = a[i + 2],
                n > l[0] && r > l[1] && s > l[2] && n < u[0] && r < u[1] && s < u[2] && (a[i + 3] = 0)
        },
        getUniformLocations: function(t, e) {
            return {
                uLow: t.getUniformLocation(e, "uLow"),
                uHigh: t.getUniformLocation(e, "uHigh")
            }
        },
        sendUniformData: function(t, i) {
            var n = new e.Color(this.color).getSource()
              , r = parseFloat(this.distance)
              , s = [0 + n[0] / 255 - r, 0 + n[1] / 255 - r, 0 + n[2] / 255 - r, 1]
              , o = [n[0] / 255 + r, n[1] / 255 + r, n[2] / 255 + r, 1];
            t.uniform4fv(i.uLow, s),
            t.uniform4fv(i.uHigh, o)
        },
        toObject: function() {
            return i(this.callSuper("toObject"), {
                color: this.color,
                distance: this.distance
            })
        }
    }),
    e.Image.filters.RemoveColor.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass
      , r = {
        Brownie: [.5997, .34553, -.27082, 0, .186, -.0377, .86095, .15059, 0, -.1449, .24113, -.07441, .44972, 0, -.02965, 0, 0, 0, 1, 0],
        Vintage: [.62793, .32021, -.03965, 0, .03784, .02578, .64411, .03259, 0, .02926, .0466, -.08512, .52416, 0, .02023, 0, 0, 0, 1, 0],
        Kodachrome: [1.12855, -.39673, -.03992, 0, .24991, -.16404, 1.08352, -.05498, 0, .09698, -.16786, -.56034, 1.60148, 0, .13972, 0, 0, 0, 1, 0],
        Technicolor: [1.91252, -.85453, -.09155, 0, .04624, -.30878, 1.76589, -.10601, 0, -.27589, -.2311, -.75018, 1.84759, 0, .12137, 0, 0, 0, 1, 0],
        Polaroid: [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0],
        Sepia: [.393, .769, .189, 0, 0, .349, .686, .168, 0, 0, .272, .534, .131, 0, 0, 0, 0, 0, 1, 0],
        BlackWhite: [1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 1.5, 1.5, 1.5, 0, -1, 0, 0, 0, 1, 0]
    };
    for (var s in r)
        i[s] = n(i.ColorMatrix, {
            type: s,
            matrix: r[s],
            mainParameter: !1,
            colorsOnly: !0
        }),
        e.Image.filters[s].fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric
      , i = e.Image.filters
      , n = e.util.createClass;
    i.BlendColor = n(i.BaseFilter, {
        type: "BlendColor",
        color: "#F95C63",
        mode: "multiply",
        alpha: 1,
        fragmentSource: {
            multiply: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb *= uColor.rgb;\ngl_FragColor = color;\n}",
            screen: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\ncolor.rgb = 1.0 - (1.0 - color.rgb) * (1.0 - uColor.rgb);\ngl_FragColor = color;\n}",
            add: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb += uColor.rgb;\n}",
            diff: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);\n}",
            subtract: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb -= uColor.rgb;\n}",
            lighten: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);\n}",
            darken: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);\n}",
            exclusion: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);\n}",
            overlay: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\nif (uColor.r < 0.5) {\ngl_FragColor.r *= 2.0 * uColor.r;\n} else {\ngl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);\n}\nif (uColor.g < 0.5) {\ngl_FragColor.g *= 2.0 * uColor.g;\n} else {\ngl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);\n}\nif (uColor.b < 0.5) {\ngl_FragColor.b *= 2.0 * uColor.b;\n} else {\ngl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);\n}\n}",
            tint: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvoid main() {\ngl_FragColor = texture2D(uTexture, vTexCoord);\ngl_FragColor.rgb *= (1.0 - uColor.a);\ngl_FragColor.rgb += uColor.rgb;\n}"
        },
        retrieveShader: function(t) {
            var e = this.type + "_" + this.mode
              , i = this.fragmentSource[this.mode];
            return t.programCache.hasOwnProperty(e) || (t.programCache[e] = this.createProgram(t.context, i)),
            t.programCache[e]
        },
        applyTo2d: function(t) {
            var i, n, r, s, o, a, h, c = t.imageData, l = c.data, u = l.length, f = 1 - this.alpha;
            h = new e.Color(this.color).getSource(),
            i = h[0] * this.alpha,
            n = h[1] * this.alpha,
            r = h[2] * this.alpha;
            for (var d = 0; d < u; d += 4)
                switch (s = l[d],
                o = l[d + 1],
                a = l[d + 2],
                this.mode) {
                case "multiply":
                    l[d] = s * i / 255,
                    l[d + 1] = o * n / 255,
                    l[d + 2] = a * r / 255;
                    break;
                case "screen":
                    l[d] = 255 - (255 - s) * (255 - i) / 255,
                    l[d + 1] = 255 - (255 - o) * (255 - n) / 255,
                    l[d + 2] = 255 - (255 - a) * (255 - r) / 255;
                    break;
                case "add":
                    l[d] = s + i,
                    l[d + 1] = o + n,
                    l[d + 2] = a + r;
                    break;
                case "diff":
                case "difference":
                    l[d] = Math.abs(s - i),
                    l[d + 1] = Math.abs(o - n),
                    l[d + 2] = Math.abs(a - r);
                    break;
                case "subtract":
                    l[d] = s - i,
                    l[d + 1] = o - n,
                    l[d + 2] = a - r;
                    break;
                case "darken":
                    l[d] = Math.min(s, i),
                    l[d + 1] = Math.min(o, n),
                    l[d + 2] = Math.min(a, r);
                    break;
                case "lighten":
                    l[d] = Math.max(s, i),
                    l[d + 1] = Math.max(o, n),
                    l[d + 2] = Math.max(a, r);
                    break;
                case "overlay":
                    l[d] = i < 128 ? 2 * s * i / 255 : 255 - 2 * (255 - s) * (255 - i) / 255,
                    l[d + 1] = n < 128 ? 2 * o * n / 255 : 255 - 2 * (255 - o) * (255 - n) / 255,
                    l[d + 2] = r < 128 ? 2 * a * r / 255 : 255 - 2 * (255 - a) * (255 - r) / 255;
                    break;
                case "exclusion":
                    l[d] = i + s - 2 * i * s / 255,
                    l[d + 1] = n + o - 2 * n * o / 255,
                    l[d + 2] = r + a - 2 * r * a / 255;
                    break;
                case "tint":
                    l[d] = i + s * f,
                    l[d + 1] = n + o * f,
                    l[d + 2] = r + a * f
                }
        },
        getUniformLocations: function(t, e) {
            return {
                uColor: t.getUniformLocation(e, "uColor")
            }
        },
        sendUniformData: function(t, i) {
            var n = new e.Color(this.color).getSource();
            n[0] = this.alpha * n[0] / 255,
            n[1] = this.alpha * n[1] / 255,
            n[2] = this.alpha * n[2] / 255,
            n[3] = this.alpha,
            t.uniform4fv(i.uColor, n)
        },
        toObject: function() {
            return {
                type: this.type,
                color: this.color,
                mode: this.mode,
                alpha: this.alpha
            }
        }
    }),
    e.Image.filters.BlendColor.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric
      , i = e.Image.filters
      , n = e.util.createClass;
    i.BlendImage = n(i.BaseFilter, {
        type: "BlendImage",
        image: null,
        mode: "multiply",
        alpha: 1,
        vertexSource: "attribute vec2 aPosition;\nattribute vec2 aTexCoord;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nuniform mat3 uTransformMatrix;\nvoid main() {\nvTexCoord = aTexCoord;\nvTexCoord2 = (uTransformMatrix * vec3(aTexCoord, 1.0)).xy;\ngl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);\n}",
        fragmentSource: {
            multiply: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.rgba *= color2.rgba;\ngl_FragColor = color;\n}",
            mask: "precision highp float;\nuniform sampler2D uTexture;\nuniform sampler2D uImage;\nuniform vec4 uColor;\nvarying vec2 vTexCoord;\nvarying vec2 vTexCoord2;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec4 color2 = texture2D(uImage, vTexCoord2);\ncolor.a = color2.a;\ngl_FragColor = color;\n}"
        },
        retrieveShader: function(t) {
            var e = this.type + "_" + this.mode
              , i = this.fragmentSource[this.mode];
            return t.programCache.hasOwnProperty(e) || (t.programCache[e] = this.createProgram(t.context, i)),
            t.programCache[e]
        },
        applyToWebGL: function(t) {
            var e = t.context
              , i = this.createTexture(t.filterBackend, this.image);
            this.bindAdditionalTexture(e, i, e.TEXTURE1),
            this.callSuper("applyToWebGL", t),
            this.unbindAdditionalTexture(e, e.TEXTURE1)
        },
        createTexture: function(t, e) {
            return t.getCachedTexture(e.cacheKey, e._element)
        },
        calculateMatrix: function() {
            var t = this.image
              , e = t._element.width
              , i = t._element.height;
            return [1 / t.scaleX, 0, 0, 0, 1 / t.scaleY, 0, -t.left / e, -t.top / i, 1]
        },
        applyTo2d: function(t) {
            var e, i, n, r, s, o, a, h, c, l, u, f = t.imageData, d = t.filterBackend.resources, p = f.data, g = p.length, v = t.imageData.width, m = t.imageData.height, _ = this.image;
            d.blendImage || (d.blendImage = document.createElement("canvas")),
            c = d.blendImage,
            c.width === v && c.height === m || (c.width = v,
            c.height = m),
            l = c.getContext("2d"),
            l.setTransform(_.scaleX, 0, 0, _.scaleY, _.left, _.top),
            l.drawImage(_._element, 0, 0, v, m),
            u = l.getImageData(0, 0, v, m).data;
            for (var b = 0; b < g; b += 4)
                switch (s = p[b],
                o = p[b + 1],
                a = p[b + 2],
                h = p[b + 3],
                e = u[b],
                i = u[b + 1],
                n = u[b + 2],
                r = u[b + 3],
                this.mode) {
                case "multiply":
                    p[b] = s * e / 255,
                    p[b + 1] = o * i / 255,
                    p[b + 2] = a * n / 255,
                    p[b + 3] = h * r / 255;
                    break;
                case "mask":
                    p[b + 3] = r
                }
        },
        getUniformLocations: function(t, e) {
            return {
                uTransformMatrix: t.getUniformLocation(e, "uTransformMatrix"),
                uImage: t.getUniformLocation(e, "uImage")
            }
        },
        sendUniformData: function(t, e) {
            var i = this.calculateMatrix();
            t.uniform1i(e.uImage, 1),
            t.uniformMatrix3fv(e.uTransformMatrix, !1, i)
        },
        toObject: function() {
            return {
                type: this.type,
                image: this.image && this.image.toObject(),
                mode: this.mode,
                alpha: this.alpha
            }
        }
    }),
    e.Image.filters.BlendImage.fromObject = function(t, i) {
        e.Image.fromObject(t.image, function(n) {
            var r = e.util.object.clone(t);
            r.image = n,
            i(new e.Image.filters.BlendImage(r))
        })
    }
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = Math.pow
      , n = Math.floor
      , r = Math.sqrt
      , s = Math.abs
      , o = Math.round
      , a = Math.sin
      , h = Math.ceil
      , c = e.Image.filters
      , l = e.util.createClass;
    c.Resize = l(c.BaseFilter, {
        type: "Resize",
        resizeType: "hermite",
        scaleX: 0,
        scaleY: 0,
        lanczosLobes: 3,
        getUniformLocations: function(t, e) {
            return {
                uDelta: t.getUniformLocation(e, "uDelta"),
                uTaps: t.getUniformLocation(e, "uTaps")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform2fv(e.uDelta, this.horizontal ? [1 / this.width, 0] : [0, 1 / this.height]),
            t.uniform1fv(e.uTaps, this.taps)
        },
        retrieveShader: function(t) {
            var e = this.getFilterWindow()
              , i = this.type + "_" + e;
            if (!t.programCache.hasOwnProperty(i)) {
                var n = this.generateShader(e);
                t.programCache[i] = this.createProgram(t.context, n)
            }
            return t.programCache[i]
        },
        getFilterWindow: function() {
            var t = this.tempScale;
            return Math.ceil(this.lanczosLobes / t)
        },
        getTaps: function() {
            for (var t = this.lanczosCreate(this.lanczosLobes), e = this.tempScale, i = this.getFilterWindow(), n = new Array(i), r = 1; r <= i; r++)
                n[r - 1] = t(r * e);
            return n
        },
        generateShader: function(t) {
            for (var t, e = new Array(t), i = this.fragmentSourceTOP, n = 1; n <= t; n++)
                e[n - 1] = n + ".0 * uDelta";
            return i += "uniform float uTaps[" + t + "];\n",
            i += "void main() {\n",
            i += "  vec4 color = texture2D(uTexture, vTexCoord);\n",
            i += "  float sum = 1.0;\n",
            e.forEach(function(t, e) {
                i += "  color += texture2D(uTexture, vTexCoord + " + t + ") * uTaps[" + e + "];\n",
                i += "  color += texture2D(uTexture, vTexCoord - " + t + ") * uTaps[" + e + "];\n",
                i += "  sum += 2.0 * uTaps[" + e + "];\n"
            }),
            i += "  gl_FragColor = color / sum;\n",
            i += "}"
        },
        fragmentSourceTOP: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\n",
        applyTo: function(t) {
            if (t.webgl) {
                if (t.passes > 1 && this.isNeutralState(t))
                    return;
                t.passes++,
                this.width = t.sourceWidth,
                this.horizontal = !0,
                this.dW = Math.round(this.width * this.scaleX),
                this.dH = t.sourceHeight,
                this.tempScale = this.dW / this.width,
                this.taps = this.getTaps(),
                t.destinationWidth = this.dW,
                this._setupFrameBuffer(t),
                this.applyToWebGL(t),
                this._swapTextures(t),
                t.sourceWidth = t.destinationWidth,
                this.height = t.sourceHeight,
                this.horizontal = !1,
                this.dH = Math.round(this.height * this.scaleY),
                this.tempScale = this.dH / this.height,
                this.taps = this.getTaps(),
                t.destinationHeight = this.dH,
                this._setupFrameBuffer(t),
                this.applyToWebGL(t),
                this._swapTextures(t),
                t.sourceHeight = t.destinationHeight
            } else
                this.isNeutralState(t) || this.applyTo2d(t)
        },
        isNeutralState: function(t) {
            var e = t.scaleX || this.scaleX
              , i = t.scaleY || this.scaleY;
            return 1 === e && 1 === i
        },
        lanczosCreate: function(t) {
            return function(e) {
                if (e >= t || e <= -t)
                    return 0;
                if (e < 1.1920929e-7 && e > -1.1920929e-7)
                    return 1;
                e *= Math.PI;
                var i = e / t;
                return a(e) / e * a(i) / i
            }
        },
        applyTo2d: function(t) {
            var e = t.imageData
              , i = this.scaleX
              , n = this.scaleY;
            this.rcpScaleX = 1 / i,
            this.rcpScaleY = 1 / n;
            var r, s = e.width, a = e.height, h = o(s * i), c = o(a * n);
            "sliceHack" === this.resizeType ? r = this.sliceByTwo(t, s, a, h, c) : "hermite" === this.resizeType ? r = this.hermiteFastResize(t, s, a, h, c) : "bilinear" === this.resizeType ? r = this.bilinearFiltering(t, s, a, h, c) : "lanczos" === this.resizeType && (r = this.lanczosResize(t, s, a, h, c)),
            t.imageData = r
        },
        sliceByTwo: function(t, i, r, s, o) {
            var a, h, c = t.imageData, l = .5, u = !1, f = !1, d = i * l, p = r * l, g = e.filterBackend.resources, v = 0, m = 0, _ = i, b = 0;
            for (g.sliceByTwo || (g.sliceByTwo = document.createElement("canvas")),
            a = g.sliceByTwo,
            (a.width < 1.5 * i || a.height < r) && (a.width = 1.5 * i,
            a.height = r),
            h = a.getContext("2d"),
            h.clearRect(0, 0, 1.5 * i, r),
            h.putImageData(c, 0, 0),
            s = n(s),
            o = n(o); !u || !f; )
                i = d,
                r = p,
                s < n(d * l) ? d = n(d * l) : (d = s,
                u = !0),
                o < n(p * l) ? p = n(p * l) : (p = o,
                f = !0),
                h.drawImage(a, v, m, i, r, _, b, d, p),
                v = _,
                m = b,
                b += p;
            return h.getImageData(v, m, s, o)
        },
        lanczosResize: function(t, e, o, a, c) {
            function l(t) {
                var h, S, T, O, E, k, D, P, j, A, M;
                for (C.x = (t + .5) * g,
                w.x = n(C.x),
                h = 0; h < c; h++) {
                    for (C.y = (h + .5) * v,
                    w.y = n(C.y),
                    E = 0,
                    k = 0,
                    D = 0,
                    P = 0,
                    j = 0,
                    S = w.x - b; S <= w.x + b; S++)
                        if (!(S < 0 || S >= e)) {
                            A = n(1e3 * s(S - C.x)),
                            x[A] || (x[A] = {});
                            for (var I = w.y - y; I <= w.y + y; I++)
                                I < 0 || I >= o || (M = n(1e3 * s(I - C.y)),
                                x[A][M] || (x[A][M] = p(r(i(A * m, 2) + i(M * _, 2)) / 1e3)),
                                T = x[A][M],
                                T > 0 && (O = 4 * (I * e + S),
                                E += T,
                                k += T * u[O],
                                D += T * u[O + 1],
                                P += T * u[O + 2],
                                j += T * u[O + 3]))
                        }
                    O = 4 * (h * a + t),
                    d[O] = k / E,
                    d[O + 1] = D / E,
                    d[O + 2] = P / E,
                    d[O + 3] = j / E
                }
                return ++t < a ? l(t) : f
            }
            var u = t.imageData.data
              , f = t.ctx.createImageData(a, c)
              , d = f.data
              , p = this.lanczosCreate(this.lanczosLobes)
              , g = this.rcpScaleX
              , v = this.rcpScaleY
              , m = 2 / this.rcpScaleX
              , _ = 2 / this.rcpScaleY
              , b = h(g * this.lanczosLobes / 2)
              , y = h(v * this.lanczosLobes / 2)
              , x = {}
              , C = {}
              , w = {};
            return l(0)
        },
        bilinearFiltering: function(t, e, i, r, s) {
            var o, a, h, c, l, u, f, d, p, g, v, m, _, b = 0, y = this.rcpScaleX, x = this.rcpScaleY, C = 4 * (e - 1), w = t.imageData, S = w.data, T = t.ctx.createImageData(r, s), O = T.data;
            for (f = 0; f < s; f++)
                for (d = 0; d < r; d++)
                    for (l = n(y * d),
                    u = n(x * f),
                    p = y * d - l,
                    g = x * f - u,
                    _ = 4 * (u * e + l),
                    v = 0; v < 4; v++)
                        o = S[_ + v],
                        a = S[_ + 4 + v],
                        h = S[_ + C + v],
                        c = S[_ + C + 4 + v],
                        m = o * (1 - p) * (1 - g) + a * p * (1 - g) + h * g * (1 - p) + c * p * g,
                        O[b++] = m;
            return T
        },
        hermiteFastResize: function(t, e, i, o, a) {
            for (var c = this.rcpScaleX, l = this.rcpScaleY, u = h(c / 2), f = h(l / 2), d = t.imageData, p = d.data, g = t.ctx.createImageData(o, a), v = g.data, m = 0; m < a; m++)
                for (var _ = 0; _ < o; _++) {
                    for (var b = 4 * (_ + m * o), y = 0, x = 0, C = 0, w = 0, S = 0, T = 0, O = 0, E = (m + .5) * l, k = n(m * l); k < (m + 1) * l; k++)
                        for (var D = s(E - (k + .5)) / f, P = (_ + .5) * c, j = D * D, A = n(_ * c); A < (_ + 1) * c; A++) {
                            var M = s(P - (A + .5)) / u
                              , I = r(j + M * M);
                            I > 1 && I < -1 || (y = 2 * I * I * I - 3 * I * I + 1,
                            y > 0 && (M = 4 * (A + k * e),
                            O += y * p[M + 3],
                            C += y,
                            p[M + 3] < 255 && (y = y * p[M + 3] / 250),
                            w += y * p[M],
                            S += y * p[M + 1],
                            T += y * p[M + 2],
                            x += y))
                        }
                    v[b] = w / x,
                    v[b + 1] = S / x,
                    v[b + 2] = T / x,
                    v[b + 3] = O / C
                }
            return g
        },
        toObject: function() {
            return {
                type: this.type,
                scaleX: this.scaleX,
                scaleY: this.scaleY,
                resizeType: this.resizeType,
                lanczosLobes: this.lanczosLobes
            }
        }
    }),
    e.Image.filters.Resize.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Contrast = n(i.BaseFilter, {
        type: "Contrast",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uContrast;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));\ncolor.rgb = contrastF * (color.rgb - 0.5) + 0.5;\ngl_FragColor = color;\n}",
        contrast: 0,
        mainParameter: "contrast",
        applyTo2d: function(t) {
            if (0 !== this.contrast) {
                var e, i, n = t.imageData, r = n.data, i = r.length, s = Math.floor(255 * this.contrast), o = 259 * (s + 255) / (255 * (259 - s));
                for (e = 0; e < i; e += 4)
                    r[e] = o * (r[e] - 128) + 128,
                    r[e + 1] = o * (r[e + 1] - 128) + 128,
                    r[e + 2] = o * (r[e + 2] - 128) + 128
            }
        },
        getUniformLocations: function(t, e) {
            return {
                uContrast: t.getUniformLocation(e, "uContrast")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1f(e.uContrast, this.contrast)
        }
    }),
    e.Image.filters.Contrast.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Saturation = n(i.BaseFilter, {
        type: "Saturation",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform float uSaturation;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nfloat rgMax = max(color.r, color.g);\nfloat rgbMax = max(rgMax, color.b);\ncolor.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;\ncolor.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;\ncolor.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;\ngl_FragColor = color;\n}",
        saturation: 0,
        mainParameter: "saturation",
        applyTo2d: function(t) {
            if (0 !== this.saturation) {
                var e, i, n = t.imageData, r = n.data, s = r.length, o = -this.saturation;
                for (e = 0; e < s; e += 4)
                    i = Math.max(r[e], r[e + 1], r[e + 2]),
                    r[e] += i !== r[e] ? (i - r[e]) * o : 0,
                    r[e + 1] += i !== r[e + 1] ? (i - r[e + 1]) * o : 0,
                    r[e + 2] += i !== r[e + 2] ? (i - r[e + 2]) * o : 0
            }
        },
        getUniformLocations: function(t, e) {
            return {
                uSaturation: t.getUniformLocation(e, "uSaturation")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform1f(e.uSaturation, -this.saturation)
        }
    }),
    e.Image.filters.Saturation.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Blur = n(i.BaseFilter, {
        type: "Blur",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec2 uDelta;\nvarying vec2 vTexCoord;\nconst float nSamples = 15.0;\nvec3 v3offset = vec3(12.9898, 78.233, 151.7182);\nfloat random(vec3 scale) {\nreturn fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);\n}\nvoid main() {\nvec4 color = vec4(0.0);\nfloat total = 0.0;\nfloat offset = random(v3offset);\nfor (float t = -nSamples; t <= nSamples; t++) {\nfloat percent = (t + offset - 0.5) / nSamples;\nfloat weight = 1.0 - abs(percent);\ncolor += texture2D(uTexture, vTexCoord + uDelta * percent) * weight;\ntotal += weight;\n}\ngl_FragColor = color / total;\n}",
        blur: 0,
        mainParameter: "blur",
        applyTo: function(t) {
            t.webgl ? (this.aspectRatio = t.sourceWidth / t.sourceHeight,
            t.passes++,
            this._setupFrameBuffer(t),
            this.horizontal = !0,
            this.applyToWebGL(t),
            this._swapTextures(t),
            this._setupFrameBuffer(t),
            this.horizontal = !1,
            this.applyToWebGL(t),
            this._swapTextures(t)) : this.applyTo2d(t)
        },
        applyTo2d: function(t) {
            t.imageData = this.simpleBlur(t)
        },
        simpleBlur: function(t) {
            var e, i, n = t.filterBackend.resources, r = t.imageData.width, s = t.imageData.height;
            n.blurLayer1 || (n.blurLayer1 = document.createElement("canvas"),
            n.blurLayer2 = document.createElement("canvas")),
            e = n.blurLayer1,
            i = n.blurLayer2,
            e.width === r && e.height === s || (i.width = e.width = r,
            i.height = e.height = s);
            var o, a, h, c, l = e.getContext("2d"), u = i.getContext("2d"), f = 15, d = .06 * this.blur * .5;
            for (l.putImageData(t.imageData, 0, 0),
            u.clearRect(0, 0, r, s),
            c = -f; c <= f; c++)
                o = (Math.random() - .5) / 4,
                a = c / f,
                h = d * a * r + o,
                u.globalAlpha = 1 - Math.abs(a),
                u.drawImage(e, h, o),
                l.drawImage(i, 0, 0),
                u.globalAlpha = 1,
                u.clearRect(0, 0, i.width, i.height);
            for (c = -f; c <= f; c++)
                o = (Math.random() - .5) / 4,
                a = c / f,
                h = d * a * s + o,
                u.globalAlpha = 1 - Math.abs(a),
                u.drawImage(e, o, h),
                l.drawImage(i, 0, 0),
                u.globalAlpha = 1,
                u.clearRect(0, 0, i.width, i.height);
            t.ctx.drawImage(e, 0, 0);
            var p = t.ctx.getImageData(0, 0, e.width, e.height);
            return l.globalAlpha = 1,
            l.clearRect(0, 0, e.width, e.height),
            p
        },
        getUniformLocations: function(t, e) {
            return {
                delta: t.getUniformLocation(e, "uDelta")
            }
        },
        sendUniformData: function(t, e) {
            var i = this.chooseRightDelta();
            t.uniform2fv(e.delta, i)
        },
        chooseRightDelta: function() {
            var t, e = 1, i = [0, 0];
            return this.horizontal ? this.aspectRatio > 1 && (e = 1 / this.aspectRatio) : this.aspectRatio < 1 && (e = this.aspectRatio),
            t = e * this.blur * .12,
            this.horizontal ? i[0] = t : i[1] = t,
            i
        }
    }),
    i.Blur.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Gamma = n(i.BaseFilter, {
        type: "Gamma",
        fragmentSource: "precision highp float;\nuniform sampler2D uTexture;\nuniform vec3 uGamma;\nvarying vec2 vTexCoord;\nvoid main() {\nvec4 color = texture2D(uTexture, vTexCoord);\nvec3 correction = (1.0 / uGamma);\ncolor.r = pow(color.r, correction.r);\ncolor.g = pow(color.g, correction.g);\ncolor.b = pow(color.b, correction.b);\ngl_FragColor = color;\ngl_FragColor.rgb *= color.a;\n}",
        gamma: [1, 1, 1],
        mainParameter: "gamma",
        applyTo2d: function(t) {
            var e, i = t.imageData, n = i.data, r = this.gamma, s = n.length, o = 1 / r[0], a = 1 / r[1], h = 1 / r[2];
            for (this.rVals || (this.rVals = new Uint8Array(256),
            this.gVals = new Uint8Array(256),
            this.bVals = new Uint8Array(256)),
            e = 0,
            s = 256; e < s; e++)
                this.rVals[e] = 255 * Math.pow(e / 255, o),
                this.gVals[e] = 255 * Math.pow(e / 255, a),
                this.bVals[e] = 255 * Math.pow(e / 255, h);
            for (e = 0,
            s = n.length; e < s; e += 4)
                n[e] = this.rVals[n[e]],
                n[e + 1] = this.gVals[n[e + 1]],
                n[e + 2] = this.bVals[n[e + 2]]
        },
        getUniformLocations: function(t, e) {
            return {
                uGamma: t.getUniformLocation(e, "uGamma")
            }
        },
        sendUniformData: function(t, e) {
            t.uniform3fv(e.uGamma, this.gamma)
        }
    }),
    e.Image.filters.Gamma.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.Composed = n(i.BaseFilter, {
        type: "Composed",
        subFilters: [],
        initialize: function(t) {
            this.callSuper("initialize", t),
            this.subFilters = this.subFilters.slice(0)
        },
        applyTo: function(t) {
            t.passes += this.subFilters.length - 1,
            this.subFilters.forEach(function(e) {
                e.applyTo(t)
            })
        },
        toObject: function() {
            return e.util.object.extend(this.callSuper("toObject"), {
                subFilters: this.subFilters.map(function(t) {
                    return t.toObject()
                })
            })
        }
    }),
    e.Image.filters.Composed.fromObject = function(t, i) {
        var n = t.subFilters || []
          , r = n.map(function(t) {
            return new e.Image.filters[t.type](t)
        })
          , s = new e.Image.filters.Composed({
            subFilters: r
        });
        return i && i(s),
        s
    }
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.Image.filters
      , n = e.util.createClass;
    i.HueRotation = n(i.ColorMatrix, {
        type: "HueRotation",
        rotation: 0,
        mainParameter: "rotation",
        calculateMatrix: function() {
            var t = this.rotation * Math.PI
              , e = Math.cos(t)
              , i = Math.sin(t)
              , n = 1 / 3
              , r = Math.sqrt(n) * i
              , s = 1 - e;
            this.matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            this.matrix[0] = e + s / 3,
            this.matrix[1] = n * s - r,
            this.matrix[2] = n * s + r,
            this.matrix[5] = n * s + r,
            this.matrix[6] = e + n * s,
            this.matrix[7] = n * s - r,
            this.matrix[10] = n * s - r,
            this.matrix[11] = n * s + r,
            this.matrix[12] = e + n * s
        },
        applyTo: function(t) {
            this.calculateMatrix(),
            e.Image.filters.BaseFilter.prototype.applyTo.call(this, t)
        }
    }),
    e.Image.filters.HueRotation.fromObject = e.Image.filters.BaseFilter.fromObject
}("undefined" != typeof exports ? exports : this),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {})
      , i = e.util.object.clone
      , n = 2
      , r = 200;
    return e.Text ? void e.warn("fabric.Text is already defined") : (e.Text = e.util.createClass(e.Object, {
        _dimensionAffectingProps: ["fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "text", "charSpacing", "textAlign", "styles"],
        _reNewline: /\r?\n/,
        _reSpacesAndTabs: /[ \t\r]/g,
        _reSpaceAndTab: /[ \t\r]/,
        _reWords: /\S+/g,
        type: "text",
        fontSize: 40,
        fontWeight: "normal",
        fontFamily: "Times New Roman",
        underline: !1,
        overline: !1,
        linethrough: !1,
        textAlign: "left",
        fontStyle: "normal",
        lineHeight: 1.16,
        textBackgroundColor: "",
        stateProperties: e.Object.prototype.stateProperties.concat("fontFamily", "fontWeight", "fontSize", "text", "underline", "overline", "linethrough", "textAlign", "fontStyle", "lineHeight", "textBackgroundColor", "charSpacing", "styles"),
        cacheProperties: e.Object.prototype.cacheProperties.concat("fontFamily", "fontWeight", "fontSize", "text", "underline", "overline", "linethrough", "textAlign", "fontStyle", "lineHeight", "textBackgroundColor", "charSpacing", "styles"),
        stroke: null,
        shadow: null,
        _fontSizeFraction: .222,
        offsets: {
            underline: .1,
            linethrough: -.315,
            overline: -.88
        },
        _fontSizeMult: 1.13,
        charSpacing: 0,
        styles: null,
        _measuringContext: null,
        _styleProperties: ["stroke", "strokeWidth", "fill", "fontFamily", "fontSize", "fontWeight", "fontStyle", "underline", "overline", "linethrough", "textBackgroundColor"],
        __charBounds: [],
        initialize: function(t, e) {
            this.styles = e ? e.styles || {} : {},
            this.text = t,
            this.__skipDimension = !0,
            this.callSuper("initialize", e),
            this.__skipDimension = !1,
            this.initDimensions(),
            this.setCoords(),
            this.setupState({
                propertySet: "_dimensionAffectingProps"
            })
        },
        getMeasuringContext: function() {
            return e._measuringContext || (e._measuringContext = this.canvas && this.canvas.contextCache || e.util.createCanvasElement().getContext("2d")),
            e._measuringContext
        },
        _splitText: function() {
            var t = this._splitTextIntoLines(this.text);
            return this.textLines = t.lines,
            this._textLines = t.graphemeLines,
            this._unwrappedTextLines = t._unwrappedLines,
            this._text = t.graphemeText,
            t
        },
        initDimensions: function() {
            this.__skipDimension || (this._splitText(),
            this._clearCache(),
            this.width = this.calcTextWidth() || this.cursorWidth || n,
            this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(),
            this.height = this.calcTextHeight(),
            this.saveState({
                propertySet: "_dimensionAffectingProps"
            }))
        },
        enlargeSpaces: function() {
            for (var t, e, i, n, r, s, o, a = 0, h = this._textLines.length; a < h; a++)
                if (("justify" === this.textAlign || a !== h - 1 && !this.isEndOfWrapping(a)) && (n = 0,
                r = this._textLines[a],
                e = this.getLineWidth(a),
                e < this.width && (o = this.textLines[a].match(this._reSpacesAndTabs)))) {
                    i = o.length,
                    t = (this.width - e) / i;
                    for (var c = 0, l = r.length; c <= l; c++)
                        s = this.__charBounds[a][c],
                        this._reSpaceAndTab.test(r[c]) ? (s.width += t,
                        s.kernedWidth += t,
                        s.left += n,
                        n += t) : s.left += n
                }
        },
        isEndOfWrapping: function(t) {
            return t === this._textLines.length - 1
        },
        toString: function() {
            return "#<fabric.Text (" + this.complexity() + '): { "text": "' + this.text + '", "fontFamily": "' + this.fontFamily + '" }>'
        },
        _getCacheCanvasDimensions: function() {
            var t = this.callSuper("_getCacheCanvasDimensions")
              , e = this.fontSize;
            return t.width += e * t.zoomX,
            t.height += e * t.zoomY,
            t
        },
        _render: function(t) {
            this._setTextStyles(t),
            this._renderTextLinesBackground(t),
            this._renderTextDecoration(t, "underline"),
            this._renderText(t),
            this._renderTextDecoration(t, "overline"),
            this._renderTextDecoration(t, "linethrough")
        },
        _renderText: function(t) {
            "stroke" === this.paintFirst ? (this._renderTextStroke(t),
            this._renderTextFill(t)) : (this._renderTextFill(t),
            this._renderTextStroke(t))
        },
        _setTextStyles: function(t, e, i) {
            t.textBaseline = "alphabetic",
            t.font = this._getFontDeclaration(e, i)
        },
        calcTextWidth: function() {
            for (var t = this.getLineWidth(0), e = 1, i = this._textLines.length; e < i; e++) {
                var n = this.getLineWidth(e);
                n > t && (t = n)
            }
            return t
        },
        _renderTextLine: function(t, e, i, n, r, s) {
            this._renderChars(t, e, i, n, r, s)
        },
        _renderTextLinesBackground: function(t) {
            if (this.textBackgroundColor || this.styleHas("textBackgroundColor")) {
                for (var e, i, n, r, s, o, a = 0, h = t.fillStyle, c = this._getLeftOffset(), l = this._getTopOffset(), u = 0, f = 0, d = 0, p = this._textLines.length; d < p; d++)
                    if (e = this.getHeightOfLine(d),
                    this.textBackgroundColor || this.styleHas("textBackgroundColor", d)) {
                        n = this._textLines[d],
                        i = this._getLineLeftOffset(d),
                        f = 0,
                        u = 0,
                        r = this.getValueOfPropertyAt(d, 0, "textBackgroundColor");
                        for (var g = 0, v = n.length; g < v; g++)
                            s = this.__charBounds[d][g],
                            o = this.getValueOfPropertyAt(d, g, "textBackgroundColor"),
                            o !== r ? (t.fillStyle = r,
                            r && t.fillRect(c + i + u, l + a, f, e / this.lineHeight),
                            u = s.left,
                            f = s.width,
                            r = o) : f += s.kernedWidth;
                        o && (t.fillStyle = o,
                        t.fillRect(c + i + u, l + a, f, e / this.lineHeight)),
                        a += e
                    } else
                        a += e;
                t.fillStyle = h,
                this._removeShadow(t)
            }
        },
        getFontCache: function(t) {
            var i = t.fontFamily.toLowerCase();
            e.charWidthsCache[i] || (e.charWidthsCache[i] = {});
            var n = e.charWidthsCache[i]
              , r = t.fontStyle.toLowerCase() + "_" + (t.fontWeight + "").toLowerCase();
            return n[r] || (n[r] = {}),
            n[r]
        },
        _applyCharStyles: function(t, e, i, n, r) {
            this._setFillStyles(e, r),
            this._setStrokeStyles(e, r),
            e.font = this._getFontDeclaration(r)
        },
        _measureChar: function(t, e, i, n) {
            var s, o, a, h, c = this.getFontCache(e), l = this._getFontDeclaration(e), u = this._getFontDeclaration(n), f = i + t, d = l === u, p = e.fontSize / r;
            if (i && c[i] && (a = c[i]),
            c[t] && (h = s = c[t]),
            d && c[f] && (o = c[f],
            h = o - a),
            !s || !a || !o) {
                var g = this.getMeasuringContext();
                this._setTextStyles(g, e, !0)
            }
            if (s || (h = s = g.measureText(t).width,
            c[t] = s),
            !a && d && i && (a = g.measureText(i).width,
            c[i] = a),
            d && !o && (o = g.measureText(f).width,
            c[f] = o,
            h = o - a,
            h > s)) {
                var v = h - s;
                c[t] = h,
                c[f] += v,
                s = h
            }
            return {
                width: s * p,
                kernedWidth: h * p
            }
        },
        getHeightOfChar: function(t, e) {
            return this.getValueOfPropertyAt(t, e, "fontSize")
        },
        measureLine: function(t) {
            var e = this._measureLine(t);
            return 0 !== this.charSpacing && (e.width -= this._getWidthOfCharSpacing()),
            e.width < 0 && (e.width = 0),
            e
        },
        _measureLine: function(t) {
            var e, i, n, r, s = 0, o = this._textLines[t], a = 0, h = new Array(o.length);
            for (this.__charBounds[t] = h,
            e = 0; e < o.length; e++)
                i = o[e],
                r = this._getGraphemeBox(i, t, e, n),
                h[e] = r,
                s += r.kernedWidth,
                n = i;
            return h[e] = {
                left: r ? r.left + r.width : 0,
                width: 0,
                kernedWidth: 0,
                height: this.fontSize
            },
            {
                width: s,
                numOfSpaces: a
            }
        },
        _getGraphemeBox: function(t, e, i, n, r) {
            var s = this.getCompleteStyleDeclaration(e, i)
              , o = n ? this.getCompleteStyleDeclaration(e, i - 1) : {}
              , a = this._measureChar(t, s, n, o)
              , h = a.kernedWidth
              , c = a.width;
            0 !== this.charSpacing && (c += this._getWidthOfCharSpacing(),
            h += this._getWidthOfCharSpacing());
            var l = {
                width: c,
                left: 0,
                height: s.fontSize,
                kernedWidth: h
            };
            if (i > 0 && !r) {
                var u = this.__charBounds[e][i - 1];
                l.left = u.left + u.width + a.kernedWidth - a.width
            }
            return l
        },
        getHeightOfLine: function(t) {
            if (this.__lineHeights[t])
                return this.__lineHeights[t];
            for (var e = this._textLines[t], i = this.getHeightOfChar(t, 0), n = 1, r = e.length; n < r; n++) {
                var s = this.getHeightOfChar(t, n);
                s > i && (i = s)
            }
            return this.__lineHeights[t] = i * this.lineHeight * this._fontSizeMult,
            this.__lineHeights[t]
        },
        calcTextHeight: function() {
            for (var t, e = 0, i = 0, n = this._textLines.length; i < n; i++)
                t = this.getHeightOfLine(i),
                e += i === n - 1 ? t / this.lineHeight : t;
            return e
        },
        _getLeftOffset: function() {
            return -this.width / 2
        },
        _getTopOffset: function() {
            return -this.height / 2
        },
        _renderTextCommon: function(t, e) {
            t.save();
            for (var i = 0, n = this._getLeftOffset(), r = this._getTopOffset(), s = this._applyPatternGradientTransform(t, "fillText" === e ? this.fill : this.stroke), o = 0, a = this._textLines.length; o < a; o++) {
                var h = this.getHeightOfLine(o)
                  , c = h / this.lineHeight
                  , l = this._getLineLeftOffset(o);
                this._renderTextLine(e, t, this._textLines[o], n + l - s.offsetX, r + i + c - s.offsetY, o),
                i += h
            }
            t.restore()
        },
        _renderTextFill: function(t) {
            (this.fill || this.styleHas("fill")) && this._renderTextCommon(t, "fillText")
        },
        _renderTextStroke: function(t) {
            (this.stroke && 0 !== this.strokeWidth || !this.isEmptyStyles()) && (this.shadow && !this.shadow.affectStroke && this._removeShadow(t),
            t.save(),
            this._setLineDash(t, this.strokeDashArray),
            t.beginPath(),
            this._renderTextCommon(t, "strokeText"),
            t.closePath(),
            t.restore())
        },
        _renderChars: function(t, e, i, n, r, s) {
            var o, a, h, c, l = this.getHeightOfLine(s), u = this.textAlign.indexOf("justify") !== -1, f = "", d = 0, p = !u && this.isEmptyStyles(s);
            if (e.save(),
            r -= l * this._fontSizeFraction / this.lineHeight,
            p)
                return this._renderChar(t, e, s, 0, this.textLines[s], n, r, l),
                void e.restore();
            for (var g = 0, v = i.length - 1; g <= v; g++)
                c = g === v || this.charSpacing,
                f += i[g],
                h = this.__charBounds[s][g],
                0 === d ? (n += h.kernedWidth - h.width,
                d += h.width) : d += h.kernedWidth,
                u && !c && this._reSpaceAndTab.test(i[g]) && (c = !0),
                c || (o = o || this.getCompleteStyleDeclaration(s, g),
                a = this.getCompleteStyleDeclaration(s, g + 1),
                c = this._hasStyleChanged(o, a)),
                c && (this._renderChar(t, e, s, g, f, n, r, l),
                f = "",
                o = a,
                n += d,
                d = 0);
            e.restore()
        },
        _renderChar: function(t, e, i, n, r, s, o) {
            var a = this._getStyleDeclaration(i, n)
              , h = this.getCompleteStyleDeclaration(i, n)
              , c = "fillText" === t && h.fill
              , l = "strokeText" === t && h.stroke && h.strokeWidth;
            (l || c) && (a && e.save(),
            this._applyCharStyles(t, e, i, n, h),
            a && a.textBackgroundColor && this._removeShadow(e),
            c && e.fillText(r, s, o),
            l && e.strokeText(r, s, o),
            a && e.restore())
        },
        _hasStyleChanged: function(t, e) {
            return t.fill !== e.fill || t.stroke !== e.stroke || t.strokeWidth !== e.strokeWidth || t.fontSize !== e.fontSize || t.fontFamily !== e.fontFamily || t.fontWeight !== e.fontWeight || t.fontStyle !== e.fontStyle
        },
        _hasStyleChangedForSvg: function(t, e) {
            return this._hasStyleChanged(t, e) || t.overline !== e.overline || t.underline !== e.underline || t.linethrough !== e.linethrough
        },
        _getLineLeftOffset: function(t) {
            var e = this.getLineWidth(t);
            return "center" === this.textAlign ? (this.width - e) / 2 : "right" === this.textAlign ? this.width - e : "justify-center" === this.textAlign && this.isEndOfWrapping(t) ? (this.width - e) / 2 : "justify-right" === this.textAlign && this.isEndOfWrapping(t) ? this.width - e : 0
        },
        _clearCache: function() {
            this.__lineWidths = [],
            this.__lineHeights = [],
            this.__charBounds = []
        },
        _shouldClearDimensionCache: function() {
            var t = this._forceClearCache;
            return t || (t = this.hasStateChanged("_dimensionAffectingProps")),
            t && (this.dirty = !0,
            this._forceClearCache = !1),
            t
        },
        getLineWidth: function(t) {
            if (this.__lineWidths[t])
                return this.__lineWidths[t];
            var e, i, n = this._textLines[t];
            return "" === n ? e = 0 : (i = this.measureLine(t),
            e = i.width),
            this.__lineWidths[t] = e,
            e
        },
        _getWidthOfCharSpacing: function() {
            return 0 !== this.charSpacing ? this.fontSize * this.charSpacing / 1e3 : 0
        },
        getValueOfPropertyAt: function(t, e, i) {
            var n = this._getStyleDeclaration(t, e)
              , r = n && "undefined" != typeof n[i];
            return r ? n[i] : this[i]
        },
        _renderTextDecoration: function(t, e) {
            if (this[e] || this.styleHas(e)) {
                for (var i, n, r, s, o, a, h, c, l, u, f, d = this._getLeftOffset(), p = this._getTopOffset(), g = 0, v = this._textLines.length; g < v; g++)
                    if (i = this.getHeightOfLine(g),
                    this[e] || this.styleHas(e, g)) {
                        r = this._textLines[g],
                        l = i / this.lineHeight,
                        n = this._getLineLeftOffset(g),
                        o = 0,
                        a = 0,
                        s = this.getValueOfPropertyAt(g, 0, e),
                        f = this.getValueOfPropertyAt(g, 0, "fill");
                        for (var m = 0, _ = r.length; m < _; m++)
                            h = this.__charBounds[g][m],
                            c = this.getValueOfPropertyAt(g, m, e),
                            u = this.getValueOfPropertyAt(g, m, "fill"),
                            (c !== s || u !== f) && a > 0 ? (t.fillStyle = f,
                            s && f && t.fillRect(d + n + o, p + l * (1 - this._fontSizeFraction) + this.offsets[e] * this.fontSize, a, this.fontSize / 15),
                            o = h.left,
                            a = h.width,
                            s = c,
                            f = u) : a += h.kernedWidth;
                        t.fillStyle = u,
                        c && u && t.fillRect(d + n + o, p + l * (1 - this._fontSizeFraction) + this.offsets[e] * this.fontSize, a, this.fontSize / 15),
                        p += i
                    } else
                        p += i;
                this._removeShadow(t)
            }
        },
        _getFontDeclaration: function(t, i) {
            var n = t || this;
            return [e.isLikelyNode ? n.fontWeight : n.fontStyle, e.isLikelyNode ? n.fontStyle : n.fontWeight, i ? r + "px" : n.fontSize + "px", e.isLikelyNode ? '"' + n.fontFamily + '"' : n.fontFamily].join(" ")
        },
        render: function(t) {
            this.visible && (this.canvas && this.canvas.skipOffscreen && !this.group && !this.isOnScreen() || (this._shouldClearDimensionCache() && this.initDimensions(),
            this.callSuper("render", t)))
        },
        _splitTextIntoLines: function(t) {
            for (var i = t.split(this._reNewline), n = new Array(i.length), r = ["\n"], s = [], o = 0; o < i.length; o++)
                n[o] = e.util.string.graphemeSplit(i[o]),
                s = s.concat(n[o], r);
            return s.pop(),
            {
                _unwrappedLines: n,
                lines: i,
                graphemeText: s,
                graphemeLines: n
            }
        },
        toObject: function(t) {
            var e = ["text", "fontSize", "fontWeight", "fontFamily", "fontStyle", "lineHeight", "underline", "overline", "linethrough", "textAlign", "textBackgroundColor", "charSpacing"].concat(t)
              , n = this.callSuper("toObject", e);
            return n.styles = i(this.styles, !0),
            n
        },
        set: function(t, e) {
            this.callSuper("set", t, e);
            var i = !1;
            if ("object" == typeof t)
                for (var n in t)
                    i = i || this._dimensionAffectingProps.indexOf(n) !== -1;
            else
                i = this._dimensionAffectingProps.indexOf(t) !== -1;
            return i && (this.initDimensions(),
            this.setCoords()),
            this
        },
        complexity: function() {
            return 1
        }
    }),
    e.Text.ATTRIBUTE_NAMES = e.SHARED_ATTRIBUTES.concat("x y dx dy font-family font-style font-weight font-size text-decoration text-anchor".split(" ")),
    e.Text.DEFAULT_SVG_FONT_SIZE = 16,
    e.Text.fromElement = function(t, n, r) {
        if (!t)
            return n(null);
        var s = e.parseAttributes(t, e.Text.ATTRIBUTE_NAMES)
          , o = s.textAnchor || "left";
        if (r = e.util.object.extend(r ? i(r) : {}, s),
        r.top = r.top || 0,
        r.left = r.left || 0,
        s.textDecoration) {
            var a = s.textDecoration;
            a.indexOf("underline") !== -1 && (r.underline = !0),
            a.indexOf("overline") !== -1 && (r.overline = !0),
            a.indexOf("line-through") !== -1 && (r.linethrough = !0),
            delete r.textDecoration
        }
        "dx"in s && (r.left += s.dx),
        "dy"in s && (r.top += s.dy),
        "fontSize"in r || (r.fontSize = e.Text.DEFAULT_SVG_FONT_SIZE);
        var h = "";
        "textContent"in t ? h = t.textContent : "firstChild"in t && null !== t.firstChild && "data"in t.firstChild && null !== t.firstChild.data && (h = t.firstChild.data),
        h = h.replace(/^\s+|\s+$|\n+/g, "").replace(/\s+/g, " ");
        var c = new e.Text(h,r)
          , l = c.getScaledHeight() / c.height
          , u = (c.height + c.strokeWidth) * c.lineHeight - c.height
          , f = u * l
          , d = c.getScaledHeight() + f
          , p = 0;
        "center" === o && (p = c.getScaledWidth() / 2),
        "right" === o && (p = c.getScaledWidth()),
        c.set({
            left: c.left - p,
            top: c.top - (d - c.fontSize * (.18 + c._fontSizeFraction)) / c.lineHeight
        }),
        n(c)
    }
    ,
    e.Text.fromObject = function(t, i) {
        return e.Object._fromObject("Text", t, i, "text")
    }
    ,
    void (e.util.createAccessors && e.util.createAccessors(e.Text)))
}("undefined" != typeof exports ? exports : this),
function() {
    fabric.util.object.extend(fabric.Text.prototype, {
        isEmptyStyles: function(t) {
            if (!this.styles)
                return !0;
            if ("undefined" != typeof t && !this.styles[t])
                return !0;
            var e = "undefined" == typeof t ? this.styles : {
                line: this.styles[t]
            };
            for (var i in e)
                for (var n in e[i])
                    for (var r in e[i][n])
                        return !1;
            return !0
        },
        styleHas: function(t, e) {
            if (!this.styles || !t || "" === t)
                return !1;
            if ("undefined" != typeof e && !this.styles[e])
                return !1;
            var i = "undefined" == typeof e ? this.styles : {
                line: this.styles[e]
            };
            for (var n in i)
                for (var r in i[n])
                    if ("undefined" != typeof i[n][r][t])
                        return !0;
            return !1
        },
        cleanStyle: function(t) {
            if (!this.styles || !t || "" === t)
                return !1;
            var e, i, n = this.styles, r = 0, s = !1, o = !0, a = 0;
            for (var h in n) {
                e = 0;
                for (var c in n[h])
                    r++,
                    s ? n[h][c][t] !== i && (o = !1) : (i = n[h][c][t],
                    s = !0),
                    n[h][c][t] === this[t] && delete n[h][c][t],
                    0 !== Object.keys(n[h][c]).length ? e++ : delete n[h][c];
                0 === e && delete n[h]
            }
            for (var l = 0; l < this._textLines.length; l++)
                a += this._textLines[l].length;
            o && r === a && (this[t] = i,
            this.removeStyle(t))
        },
        removeStyle: function(t) {
            if (this.styles && t && "" !== t) {
                var e, i, n, r = this.styles;
                for (i in r) {
                    e = r[i];
                    for (n in e)
                        delete e[n][t],
                        0 === Object.keys(e[n]).length && delete e[n];
                    0 === Object.keys(e).length && delete r[i]
                }
            }
        },
        _extendStyles: function(t, e) {
            var i = this.get2DCursorLocation(t);
            this._getLineStyle(i.lineIndex) || this._setLineStyle(i.lineIndex, {}),
            this._getStyleDeclaration(i.lineIndex, i.charIndex) || this._setStyleDeclaration(i.lineIndex, i.charIndex, {}),
            fabric.util.object.extend(this._getStyleDeclaration(i.lineIndex, i.charIndex), e)
        },
        get2DCursorLocation: function(t, e) {
            "undefined" == typeof t && (t = this.selectionStart);
            for (var i = e ? this._unwrappedTextLines : this._textLines, n = i.length, r = 0; r < n; r++) {
                if (t <= i[r].length)
                    return {
                        lineIndex: r,
                        charIndex: t
                    };
                t -= i[r].length + 1
            }
            return {
                lineIndex: r - 1,
                charIndex: i[r - 1].length < t ? i[r - 1].length : t
            }
        },
        getSelectionStyles: function(t, e, i) {
            "undefined" == typeof t && (t = this.selectionStart || 0),
            "undefined" == typeof e && (e = this.selectionEnd || t);
            for (var n = [], r = t; r < e; r++)
                n.push(this.getStyleAtPosition(r, i));
            return n
        },
        getStyleAtPosition: function(t, e) {
            var i = this.get2DCursorLocation(t)
              , n = e ? this.getCompleteStyleDeclaration(i.lineIndex, i.charIndex) : this._getStyleDeclaration(i.lineIndex, i.charIndex);
            return n || {}
        },
        setSelectionStyles: function(t, e, i) {
            "undefined" == typeof e && (e = this.selectionStart || 0),
            "undefined" == typeof i && (i = this.selectionEnd || e);
            for (var n = e; n < i; n++)
                this._extendStyles(n, t);
            return this._forceClearCache = !0,
            this
        },
        _getStyleDeclaration: function(t, e) {
            var i = this.styles && this.styles[t];
            return i ? i[e] : null
        },
        getCompleteStyleDeclaration: function(t, e) {
            for (var i, n = this._getStyleDeclaration(t, e) || {}, r = {}, s = 0; s < this._styleProperties.length; s++)
                i = this._styleProperties[s],
                r[i] = "undefined" == typeof n[i] ? this[i] : n[i];
            return r
        },
        _setStyleDeclaration: function(t, e, i) {
            this.styles[t][e] = i
        },
        _deleteStyleDeclaration: function(t, e) {
            delete this.styles[t][e]
        },
        _getLineStyle: function(t) {
            return this.styles[t]
        },
        _setLineStyle: function(t, e) {
            this.styles[t] = e
        },
        _deleteLineStyle: function(t) {
            delete this.styles[t]
        }
    })
}(),
function() {
    function t(t) {
        t.textDecoration && (t.textDecoration.indexOf("underline") > -1 && (t.underline = !0),
        t.textDecoration.indexOf("line-through") > -1 && (t.linethrough = !0),
        t.textDecoration.indexOf("overline") > -1 && (t.overline = !0),
        delete t.textDecoration)
    }
    fabric.IText = fabric.util.createClass(fabric.Text, fabric.Observable, {
        type: "i-text",
        selectionStart: 0,
        selectionEnd: 0,
        selectionColor: "rgba(17,119,255,0.3)",
        isEditing: !1,
        editable: !0,
        editingBorderColor: "rgba(102,153,255,0.25)",
        cursorWidth: 2,
        cursorColor: "#333",
        cursorDelay: 1e3,
        cursorDuration: 600,
        caching: !0,
        _reSpace: /\s|\n/,
        _currentCursorOpacity: 0,
        _selectionDirection: null,
        _abortCursorAnimation: !1,
        __widthOfSpace: [],
        inCompositionMode: !1,
        initialize: function(t, e) {
            this.callSuper("initialize", t, e),
            this.initBehavior()
        },
        setSelectionStart: function(t) {
            t = Math.max(t, 0),
            this._updateAndFire("selectionStart", t)
        },
        setSelectionEnd: function(t) {
            t = Math.min(t, this.text.length),
            this._updateAndFire("selectionEnd", t)
        },
        _updateAndFire: function(t, e) {
            this[t] !== e && (this._fireSelectionChanged(),
            this[t] = e),
            this._updateTextarea()
        },
        _fireSelectionChanged: function() {
            this.fire("selection:changed"),
            this.canvas && this.canvas.fire("text:selection:changed", {
                target: this
            })
        },
        initDimensions: function() {
            this.isEditing && this.initDelayedCursor(),
            this.clearContextTop(),
            this.callSuper("initDimensions")
        },
        render: function(t) {
            this.clearContextTop(),
            this.callSuper("render", t),
            this.cursorOffsetCache = {},
            this.renderCursorOrSelection()
        },
        _render: function(t) {
            this.callSuper("_render", t)
        },
        clearContextTop: function(t) {
            if (this.isEditing && this.canvas && this.canvas.contextTop) {
                var e = this.canvas.contextTop
                  , i = this.canvas.viewportTransform;
                e.save(),
                e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                this.transform(e),
                this.transformMatrix && e.transform.apply(e, this.transformMatrix),
                this._clearTextArea(e),
                t || e.restore()
            }
        },
        renderCursorOrSelection: function() {
            if (this.isEditing && this.canvas) {
                var t, e = this._getCursorBoundaries();
                this.canvas && this.canvas.contextTop ? (t = this.canvas.contextTop,
                this.clearContextTop(!0)) : (t = this.canvas.contextContainer,
                t.save()),
                this.selectionStart === this.selectionEnd ? this.renderCursor(e, t) : this.renderSelection(e, t),
                t.restore()
            }
        },
        _clearTextArea: function(t) {
            var e = this.width + 4
              , i = this.height + 4;
            t.clearRect(-e / 2, -i / 2, e, i)
        },
        _getCursorBoundaries: function(t) {
            "undefined" == typeof t && (t = this.selectionStart);
            var e = this._getLeftOffset()
              , i = this._getTopOffset()
              , n = this._getCursorBoundariesOffsets(t);
            return {
                left: e,
                top: i,
                leftOffset: n.left,
                topOffset: n.top
            }
        },
        _getCursorBoundariesOffsets: function(t) {
            if (this.cursorOffsetCache && "top"in this.cursorOffsetCache)
                return this.cursorOffsetCache;
            for (var e, i, n = 0, r = 0, s = 0, o = 0, a = this.get2DCursorLocation(t), h = 0; h < a.lineIndex; h++)
                s += this.getHeightOfLine(h);
            e = this._getLineLeftOffset(a.lineIndex);
            var c = this.__charBounds[a.lineIndex][a.charIndex];
            return c && (o = c.left),
            0 !== this.charSpacing && r === this._textLines[n].length && (o -= this._getWidthOfCharSpacing()),
            i = {
                top: s,
                left: e + (o > 0 ? o : 0)
            },
            this.cursorOffsetCache = i,
            this.cursorOffsetCache
        },
        renderCursor: function(t, e) {
            var i = this.get2DCursorLocation()
              , n = i.lineIndex
              , r = i.charIndex > 0 ? i.charIndex - 1 : 0
              , s = this.getValueOfPropertyAt(n, r, "fontSize")
              , o = this.scaleX * this.canvas.getZoom()
              , a = this.cursorWidth / o
              , h = t.topOffset;
            h += (1 - this._fontSizeFraction) * this.getHeightOfLine(n) / this.lineHeight - s * (1 - this._fontSizeFraction),
            this.inCompositionMode && this.renderSelection(t, e),
            e.fillStyle = this.getValueOfPropertyAt(n, r, "fill"),
            e.globalAlpha = this.__isMousedown ? 1 : this._currentCursorOpacity,
            e.fillRect(t.left + t.leftOffset - a / 2, h + t.top, a, s)
        },
        renderSelection: function(t, e) {
            for (var i = this.inCompositionMode ? this.hiddenTextarea.selectionStart : this.selectionStart, n = this.inCompositionMode ? this.hiddenTextarea.selectionEnd : this.selectionEnd, r = this.textAlign.indexOf("justify") !== -1, s = this.get2DCursorLocation(i), o = this.get2DCursorLocation(n), a = s.lineIndex, h = o.lineIndex, c = s.charIndex < 0 ? 0 : s.charIndex, l = o.charIndex < 0 ? 0 : o.charIndex, u = a; u <= h; u++) {
                var f = this._getLineLeftOffset(u) || 0
                  , d = this.getHeightOfLine(u)
                  , p = 0
                  , g = 0
                  , v = 0;
                u === a && (g = this.__charBounds[a][c].left),
                u >= a && u < h ? v = r && !this.isEndOfWrapping(u) ? this.width : this.getLineWidth(u) || 5 : u === h && (v = 0 === l ? this.__charBounds[h][l].left : this.__charBounds[h][l - 1].left + this.__charBounds[h][l - 1].width),
                p = d,
                (this.lineHeight < 1 || u === h && this.lineHeight > 1) && (d /= this.lineHeight),
                this.inCompositionMode ? (e.fillStyle = this.compositionColor || "black",
                e.fillRect(t.left + f + g, t.top + t.topOffset + d, v - g, 1)) : (e.fillStyle = this.selectionColor,
                e.fillRect(t.left + f + g, t.top + t.topOffset, v - g, d)),
                t.topOffset += p
            }
        },
        getCurrentCharFontSize: function() {
            var t = this._getCurrentCharIndex();
            return this.getValueOfPropertyAt(t.l, t.c, "fontSize")
        },
        getCurrentCharColor: function() {
            var t = this._getCurrentCharIndex();
            return this.getValueOfPropertyAt(t.l, t.c, "fill")
        },
        _getCurrentCharIndex: function() {
            var t = this.get2DCursorLocation(this.selectionStart, !0)
              , e = t.charIndex > 0 ? t.charIndex - 1 : 0;
            return {
                l: t.lineIndex,
                c: e
            }
        }
    }),
    fabric.IText.fromObject = function(e, i) {
        if (t(e),
        e.styles)
            for (var n in e.styles)
                for (var r in e.styles[n])
                    t(e.styles[n][r]);
        fabric.Object._fromObject("IText", e, i, "text")
    }
}(),
function() {
    var t = fabric.util.object.clone;
    fabric.util.object.extend(fabric.IText.prototype, {
        initBehavior: function() {
            this.initAddedHandler(),
            this.initRemovedHandler(),
            this.initCursorSelectionHandlers(),
            this.initDoubleClickSimulation(),
            this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
        },
        onDeselect: function(t) {
            this.isEditing && this.exitEditing(),
            this.selected = !1,
            fabric.Object.prototype.onDeselect.call(this, t)
        },
        initAddedHandler: function() {
            var t = this;
            this.on("added", function() {
                var e = t.canvas;
                e && (e._hasITextHandlers || (e._hasITextHandlers = !0,
                t._initCanvasHandlers(e)),
                e._iTextInstances = e._iTextInstances || [],
                e._iTextInstances.push(t))
            })
        },
        initRemovedHandler: function() {
            var t = this;
            this.on("removed", function() {
                var e = t.canvas;
                e && (e._iTextInstances = e._iTextInstances || [],
                fabric.util.removeFromArray(e._iTextInstances, t),
                0 === e._iTextInstances.length && (e._hasITextHandlers = !1,
                t._removeCanvasHandlers(e)))
            })
        },
        _initCanvasHandlers: function(t) {
            t._mouseUpITextHandler = function() {
                t._iTextInstances && t._iTextInstances.forEach(function(t) {
                    t.__isMousedown = !1
                })
            }
            .bind(this),
            t.on("mouse:up", t._mouseUpITextHandler)
        },
        _removeCanvasHandlers: function(t) {
            t.off("mouse:up", t._mouseUpITextHandler)
        },
        _tick: function() {
            this._currentTickState = this._animateCursor(this, 1, this.cursorDuration, "_onTickComplete")
        },
        _animateCursor: function(t, e, i, n) {
            var r;
            return r = {
                isAborted: !1,
                abort: function() {
                    this.isAborted = !0
                }
            },
            t.animate("_currentCursorOpacity", e, {
                duration: i,
                onComplete: function() {
                    r.isAborted || t[n]()
                },
                onChange: function() {
                    t.canvas && t.selectionStart === t.selectionEnd && t.renderCursorOrSelection()
                },
                abort: function() {
                    return r.isAborted
                }
            }),
            r
        },
        _onTickComplete: function() {
            var t = this;
            this._cursorTimeout1 && clearTimeout(this._cursorTimeout1),
            this._cursorTimeout1 = setTimeout(function() {
                t._currentTickCompleteState = t._animateCursor(t, 0, this.cursorDuration / 2, "_tick")
            }, 100)
        },
        initDelayedCursor: function(t) {
            var e = this
              , i = t ? 0 : this.cursorDelay;
            this.abortCursorAnimation(),
            this._currentCursorOpacity = 1,
            this._cursorTimeout2 = setTimeout(function() {
                e._tick()
            }, i)
        },
        abortCursorAnimation: function() {
            var t = this._currentTickState || this._currentTickCompleteState
              , e = this.canvas;
            this._currentTickState && this._currentTickState.abort(),
            this._currentTickCompleteState && this._currentTickCompleteState.abort(),
            clearTimeout(this._cursorTimeout1),
            clearTimeout(this._cursorTimeout2),
            this._currentCursorOpacity = 0,
            t && e && e.clearContext(e.contextTop || e.contextContainer)
        },
        selectAll: function() {
            return this.selectionStart = 0,
            this.selectionEnd = this._text.length,
            this._fireSelectionChanged(),
            this._updateTextarea(),
            this
        },
        getSelectedText: function() {
            return this._text.slice(this.selectionStart, this.selectionEnd).join("")
        },
        findWordBoundaryLeft: function(t) {
            var e = 0
              , i = t - 1;
            if (this._reSpace.test(this._text[i]))
                for (; this._reSpace.test(this._text[i]); )
                    e++,
                    i--;
            for (; /\S/.test(this._text[i]) && i > -1; )
                e++,
                i--;
            return t - e
        },
        findWordBoundaryRight: function(t) {
            var e = 0
              , i = t;
            if (this._reSpace.test(this._text[i]))
                for (; this._reSpace.test(this._text[i]); )
                    e++,
                    i++;
            for (; /\S/.test(this._text[i]) && i < this.text.length; )
                e++,
                i++;
            return t + e
        },
        findLineBoundaryLeft: function(t) {
            for (var e = 0, i = t - 1; !/\n/.test(this._text[i]) && i > -1; )
                e++,
                i--;
            return t - e
        },
        findLineBoundaryRight: function(t) {
            for (var e = 0, i = t; !/\n/.test(this._text[i]) && i < this.text.length; )
                e++,
                i++;
            return t + e
        },
        searchWordBoundary: function(t, e) {
            for (var i = this._reSpace.test(this.text.charAt(t)) ? t - 1 : t, n = this.text.charAt(i), r = /[ \n\.,;!\?\-]/; !r.test(n) && i > 0 && i < this.text.length; )
                i += e,
                n = this.text.charAt(i);
            return r.test(n) && "\n" !== n && (i += 1 === e ? 0 : 1),
            i
        },
        selectWord: function(t) {
            t = t || this.selectionStart;
            var e = this.searchWordBoundary(t, -1)
              , i = this.searchWordBoundary(t, 1);
            this.selectionStart = e,
            this.selectionEnd = i,
            this._fireSelectionChanged(),
            this._updateTextarea(),
            this.renderCursorOrSelection()
        },
        selectLine: function(t) {
            t = t || this.selectionStart;
            var e = this.findLineBoundaryLeft(t)
              , i = this.findLineBoundaryRight(t);
            return this.selectionStart = e,
            this.selectionEnd = i,
            this._fireSelectionChanged(),
            this._updateTextarea(),
            this
        },
        enterEditing: function(t) {
            if (!this.isEditing && this.editable)
                return this.canvas && this.exitEditingOnOthers(this.canvas),
                this.isEditing = !0,
                this.initHiddenTextarea(t),
                this.hiddenTextarea.focus(),
                this.hiddenTextarea.value = this.text,
                this._updateTextarea(),
                this._saveEditingProps(),
                this._setEditingProps(),
                this._textBeforeEdit = this.text,
                this._tick(),
                this.fire("editing:entered"),
                this._fireSelectionChanged(),
                this.canvas ? (this.canvas.fire("text:editing:entered", {
                    target: this
                }),
                this.initMouseMoveHandler(),
                this.canvas.requestRenderAll(),
                this) : this
        },
        exitEditingOnOthers: function(t) {
            t._iTextInstances && t._iTextInstances.forEach(function(t) {
                t.selected = !1,
                t.isEditing && t.exitEditing()
            })
        },
        initMouseMoveHandler: function() {
            this.canvas.on("mouse:move", this.mouseMoveHandler)
        },
        mouseMoveHandler: function(t) {
            if (this.__isMousedown && this.isEditing) {
                var e = this.getSelectionStartFromPointer(t.e)
                  , i = this.selectionStart
                  , n = this.selectionEnd;
                (e === this.__selectionStartOnMouseDown && i !== n || i !== e && n !== e) && (e > this.__selectionStartOnMouseDown ? (this.selectionStart = this.__selectionStartOnMouseDown,
                this.selectionEnd = e) : (this.selectionStart = e,
                this.selectionEnd = this.__selectionStartOnMouseDown),
                this.selectionStart === i && this.selectionEnd === n || (this.restartCursorIfNeeded(),
                this._fireSelectionChanged(),
                this._updateTextarea(),
                this.renderCursorOrSelection()))
            }
        },
        _setEditingProps: function() {
            this.hoverCursor = "text",
            this.canvas && (this.canvas.defaultCursor = this.canvas.moveCursor = "text"),
            this.borderColor = this.editingBorderColor,
            this.hasControls = this.selectable = !1,
            this.lockMovementX = this.lockMovementY = !0
        },
        fromStringToGraphemeSelection: function(t, e, i) {
            var n = i.slice(0, t)
              , r = fabric.util.string.graphemeSplit(n).length;
            if (t === e)
                return {
                    selectionStart: r,
                    selectionEnd: r
                };
            var s = i.slice(t, e)
              , o = fabric.util.string.graphemeSplit(s).length;
            return {
                selectionStart: r,
                selectionEnd: r + o
            }
        },
        fromGraphemeToStringSelection: function(t, e, i) {
            var n = i.slice(0, t)
              , r = n.join("").length;
            if (t === e)
                return {
                    selectionStart: r,
                    selectionEnd: r
                };
            var s = i.slice(t, e)
              , o = s.join("").length;
            return {
                selectionStart: r,
                selectionEnd: r + o
            }
        },
        _updateTextarea: function() {
            if (this.cursorOffsetCache = {},
            this.hiddenTextarea) {
                if (!this.inCompositionMode) {
                    var t = this.fromGraphemeToStringSelection(this.selectionStart, this.selectionEnd, this._text);
                    this.hiddenTextarea.selectionStart = t.selectionStart,
                    this.hiddenTextarea.selectionEnd = t.selectionEnd
                }
                this.updateTextareaPosition()
            }
        },
        updateFromTextArea: function() {
            if (this.hiddenTextarea) {
                this.cursorOffsetCache = {},
                this.text = this.hiddenTextarea.value,
                this._shouldClearDimensionCache() && (this.initDimensions(),
                this.setCoords());
                var t = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value);
                this.selectionEnd = this.selectionStart = t.selectionEnd,
                this.inCompositionMode || (this.selectionStart = t.selectionStart),
                this.updateTextareaPosition()
            }
        },
        updateTextareaPosition: function() {
            if (this.selectionStart === this.selectionEnd) {
                var t = this._calcTextareaPosition();
                this.hiddenTextarea.style.left = t.left,
                this.hiddenTextarea.style.top = t.top
            }
        },
        _calcTextareaPosition: function() {
            if (!this.canvas)
                return {
                    x: 1,
                    y: 1
                };
            var t = this.inCompositionMode ? this.compositionStart : this.selectionStart
              , e = this._getCursorBoundaries(t)
              , i = this.get2DCursorLocation(t)
              , n = i.lineIndex
              , r = i.charIndex
              , s = this.getValueOfPropertyAt(n, r, "fontSize") * this.lineHeight
              , o = e.leftOffset
              , a = this.calcTransformMatrix()
              , h = {
                x: e.left + o,
                y: e.top + e.topOffset + s
            }
              , c = this.canvas.upperCanvasEl
              , l = c.width - s
              , u = c.height - s;
            return h = fabric.util.transformPoint(h, a),
            h = fabric.util.transformPoint(h, this.canvas.viewportTransform),
            h.x < 0 && (h.x = 0),
            h.x > l && (h.x = l),
            h.y < 0 && (h.y = 0),
            h.y > u && (h.y = u),
            h.x += this.canvas._offset.left,
            h.y += this.canvas._offset.top,
            {
                left: h.x + "px",
                top: h.y + "px",
                fontSize: s + "px",
                charHeight: s
            }
        },
        _saveEditingProps: function() {
            this._savedProps = {
                hasControls: this.hasControls,
                borderColor: this.borderColor,
                lockMovementX: this.lockMovementX,
                lockMovementY: this.lockMovementY,
                hoverCursor: this.hoverCursor,
                defaultCursor: this.canvas && this.canvas.defaultCursor,
                moveCursor: this.canvas && this.canvas.moveCursor
            }
        },
        _restoreEditingProps: function() {
            this._savedProps && (this.hoverCursor = this._savedProps.hoverCursor,
            this.hasControls = this._savedProps.hasControls,
            this.borderColor = this._savedProps.borderColor,
            this.lockMovementX = this._savedProps.lockMovementX,
            this.lockMovementY = this._savedProps.lockMovementY,
            this.canvas && (this.canvas.defaultCursor = this._savedProps.defaultCursor,
            this.canvas.moveCursor = this._savedProps.moveCursor))
        },
        exitEditing: function() {
            var t = this._textBeforeEdit !== this.text;
            return this.selected = !1,
            this.isEditing = !1,
            this.selectable = !0,
            this.selectionEnd = this.selectionStart,
            this.hiddenTextarea && (this.hiddenTextarea.blur && this.hiddenTextarea.blur(),
            this.canvas && this.hiddenTextarea.parentNode.removeChild(this.hiddenTextarea),
            this.hiddenTextarea = null),
            this.abortCursorAnimation(),
            this._restoreEditingProps(),
            this._currentCursorOpacity = 0,
            this._shouldClearDimensionCache() && (this.initDimensions(),
            this.setCoords()),
            this.fire("editing:exited"),
            t && this.fire("modified"),
            this.canvas && (this.canvas.off("mouse:move", this.mouseMoveHandler),
            this.canvas.fire("text:editing:exited", {
                target: this
            }),
            t && this.canvas.fire("object:modified", {
                target: this
            })),
            this
        },
        _removeExtraneousStyles: function() {
            for (var t in this.styles)
                this._textLines[t] || delete this.styles[t]
        },
        removeStyleFromTo: function(t, e) {
            var i, n, r = this.get2DCursorLocation(t, !0), s = this.get2DCursorLocation(e, !0), o = r.lineIndex, a = r.charIndex, h = s.lineIndex, c = s.charIndex;
            if (o !== h) {
                if (this.styles[o])
                    for (i = a; i < this._unwrappedTextLines[o].length; i++)
                        delete this.styles[o][i];
                if (this.styles[h])
                    for (i = c; i < this._unwrappedTextLines[h].length; i++)
                        n = this.styles[h][i],
                        n && (this.styles[o] || (this.styles[o] = {}),
                        this.styles[o][a + i - c] = n);
                for (i = o + 1; i <= h; i++)
                    delete this.styles[i];
                this.shiftLineStyles(h, o - h)
            } else if (this.styles[o]) {
                n = this.styles[o];
                var l, u, f = c - a;
                for (i = a; i < c; i++)
                    delete n[i];
                for (u in this.styles[o])
                    l = parseInt(u, 10),
                    l >= c && (n[l - f] = n[u],
                    delete n[u])
            }
        },
        shiftLineStyles: function(e, i) {
            var n = t(this.styles);
            for (var r in this.styles) {
                var s = parseInt(r, 10);
                s > e && (this.styles[s + i] = n[s],
                n[s - i] || delete this.styles[s])
            }
        },
        restartCursorIfNeeded: function() {
            this._currentTickState && !this._currentTickState.isAborted && this._currentTickCompleteState && !this._currentTickCompleteState.isAborted || this.initDelayedCursor()
        },
        insertNewlineStyleObject: function(e, i, n, r) {
            var s, o = {}, a = !1;
            n || (n = 1),
            this.shiftLineStyles(e, n),
            this.styles[e] && (s = this.styles[e][0 === i ? i : i - 1]);
            for (var h in this.styles[e]) {
                var c = parseInt(h, 10);
                c >= i && (a = !0,
                o[c - i] = this.styles[e][h],
                delete this.styles[e][h])
            }
            for (a ? this.styles[e + n] = o : delete this.styles[e + n]; n > 1; )
                n--,
                r && r[n] ? this.styles[e + n] = {
                    0: t(r[n])
                } : s ? this.styles[e + n] = {
                    0: t(s)
                } : delete this.styles[e + n];
            this._forceClearCache = !0
        },
        insertCharStyleObject: function(e, i, n, r) {
            this.styles || (this.styles = {});
            var s = this.styles[e]
              , o = s ? t(s) : {};
            n || (n = 1);
            for (var a in o) {
                var h = parseInt(a, 10);
                h >= i && (s[h + n] = o[h],
                o[h - n] || delete s[h])
            }
            if (this._forceClearCache = !0,
            r)
                for (; n--; )
                    Object.keys(r[n]).length && (this.styles[e] || (this.styles[e] = {}),
                    this.styles[e][i + n] = t(r[n]));
            else if (s)
                for (var c = s[i ? i - 1 : 1]; c && n--; )
                    this.styles[e][i + n] = t(c)
        },
        insertNewStyleBlock: function(t, e, i) {
            for (var n = this.get2DCursorLocation(e, !0), r = [0], s = 0, o = 0; o < t.length; o++)
                "\n" === t[o] ? (s++,
                r[s] = 0) : r[s]++;
            r[0] > 0 && (this.insertCharStyleObject(n.lineIndex, n.charIndex, r[0], i),
            i = i && i.slice(r[0] + 1)),
            s && this.insertNewlineStyleObject(n.lineIndex, n.charIndex + r[0], s);
            for (var o = 1; o < s; o++)
                r[o] > 0 ? this.insertCharStyleObject(n.lineIndex + o, 0, r[o], i) : i && (this.styles[n.lineIndex + o][0] = i[0]),
                i = i && i.slice(r[o] + 1);
            r[o] > 0 && this.insertCharStyleObject(n.lineIndex + o, 0, r[o], i)
        },
        setSelectionStartEndWithShift: function(t, e, i) {
            i <= t ? (e === t ? this._selectionDirection = "left" : "right" === this._selectionDirection && (this._selectionDirection = "left",
            this.selectionEnd = t),
            this.selectionStart = i) : i > t && i < e ? "right" === this._selectionDirection ? this.selectionEnd = i : this.selectionStart = i : (e === t ? this._selectionDirection = "right" : "left" === this._selectionDirection && (this._selectionDirection = "right",
            this.selectionStart = e),
            this.selectionEnd = i)
        },
        setSelectionInBoundaries: function() {
            var t = this.text.length;
            this.selectionStart > t ? this.selectionStart = t : this.selectionStart < 0 && (this.selectionStart = 0),
            this.selectionEnd > t ? this.selectionEnd = t : this.selectionEnd < 0 && (this.selectionEnd = 0)
        }
    })
}(),
fabric.util.object.extend(fabric.IText.prototype, {
    initDoubleClickSimulation: function() {
        this.__lastClickTime = +new Date,
        this.__lastLastClickTime = +new Date,
        this.__lastPointer = {},
        this.on("mousedown", this.onMouseDown.bind(this))
    },
    onMouseDown: function(t) {
        this.__newClickTime = +new Date;
        var e = this.canvas.getPointer(t.e);
        this.isTripleClick(e, t.e) && (this.fire("tripleclick", t),
        this._stopEvent(t.e)),
        this.__lastLastClickTime = this.__lastClickTime,
        this.__lastClickTime = this.__newClickTime,
        this.__lastPointer = e,
        this.__lastIsEditing = this.isEditing,
        this.__lastSelected = this.selected
    },
    isTripleClick: function(t) {
        return this.__newClickTime - this.__lastClickTime < 500 && this.__lastClickTime - this.__lastLastClickTime < 500 && this.__lastPointer.x === t.x && this.__lastPointer.y === t.y
    },
    _stopEvent: function(t) {
        t.preventDefault && t.preventDefault(),
        t.stopPropagation && t.stopPropagation()
    },
    initCursorSelectionHandlers: function() {
        this.initMousedownHandler(),
        this.initMouseupHandler(),
        this.initClicks()
    },
    initClicks: function() {
        this.on("mousedblclick", function(t) {
            this.selectWord(this.getSelectionStartFromPointer(t.e))
        }),
        this.on("tripleclick", function(t) {
            this.selectLine(this.getSelectionStartFromPointer(t.e))
        })
    },
    initMousedownHandler: function() {
        this.on("mousedown", function(t) {
            if (this.editable && (!t.e.button || 1 === t.e.button)) {
                var e = this.canvas.getPointer(t.e);
                this.__mousedownX = e.x,
                this.__mousedownY = e.y,
                this.__isMousedown = !0,
                this.selected && this.setCursorByClick(t.e),
                this.isEditing && (this.__selectionStartOnMouseDown = this.selectionStart,
                this.selectionStart === this.selectionEnd && this.abortCursorAnimation(),
                this.renderCursorOrSelection())
            }
        })
    },
    _isObjectMoved: function(t) {
        var e = this.canvas.getPointer(t);
        return this.__mousedownX !== e.x || this.__mousedownY !== e.y
    },
    initMouseupHandler: function() {
        this.on("mouseup", function(t) {
            this.__isMousedown = !1,
            !this.editable || this._isObjectMoved(t.e) || t.e.button && 1 !== t.e.button || (this.__lastSelected && !this.__corner && (this.enterEditing(t.e),
            this.selectionStart === this.selectionEnd ? this.initDelayedCursor(!0) : this.renderCursorOrSelection()),
            this.selected = !0)
        })
    },
    setCursorByClick: function(t) {
        var e = this.getSelectionStartFromPointer(t)
          , i = this.selectionStart
          , n = this.selectionEnd;
        t.shiftKey ? this.setSelectionStartEndWithShift(i, n, e) : (this.selectionStart = e,
        this.selectionEnd = e),
        this.isEditing && (this._fireSelectionChanged(),
        this._updateTextarea())
    },
    getSelectionStartFromPointer: function(t) {
        for (var e, i, n = this.getLocalPointer(t), r = 0, s = 0, o = 0, a = 0, h = 0, c = 0, l = this._textLines.length; c < l && o <= n.y; c++)
            o += this.getHeightOfLine(c) * this.scaleY,
            h = c,
            c > 0 && (a += this._textLines[c - 1].length + 1);
        e = this._getLineLeftOffset(h),
        s = e * this.scaleX,
        i = this._textLines[h];
        for (var u = 0, f = i.length; u < f && (r = s,
        s += this.__charBounds[h][u].kernedWidth * this.scaleX,
        s <= n.x); u++)
            a++;
        return this._getNewSelectionStartFromOffset(n, r, s, a, f)
    },
    _getNewSelectionStartFromOffset: function(t, e, i, n, r) {
        var s = t.x - e
          , o = i - t.x
          , a = o > s || o < 0 ? 0 : 1
          , h = n + a;
        return this.flipX && (h = r - h),
        h > this._text.length && (h = this._text.length),
        h
    }
}),
fabric.util.object.extend(fabric.IText.prototype, {
    initHiddenTextarea: function() {
        this.hiddenTextarea = fabric.document.createElement("textarea"),
        this.hiddenTextarea.setAttribute("autocapitalize", "off"),
        this.hiddenTextarea.setAttribute("autocorrect", "off"),
        this.hiddenTextarea.setAttribute("autocomplete", "off"),
        this.hiddenTextarea.setAttribute("spellcheck", "false"),
        this.hiddenTextarea.setAttribute("data-fabric-hiddentextarea", ""),
        this.hiddenTextarea.setAttribute("wrap", "off");
        var t = this._calcTextareaPosition();
        this.hiddenTextarea.style.cssText = "position: absolute; top: " + t.top + "; left: " + t.left + "; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; line-height: 1px; paddingｰtop: " + t.fontSize + ";",
        fabric.document.body.appendChild(this.hiddenTextarea),
        fabric.util.addListener(this.hiddenTextarea, "keydown", this.onKeyDown.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "keyup", this.onKeyUp.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "input", this.onInput.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "copy", this.copy.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "cut", this.copy.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "paste", this.paste.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "compositionstart", this.onCompositionStart.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "compositionupdate", this.onCompositionUpdate.bind(this)),
        fabric.util.addListener(this.hiddenTextarea, "compositionend", this.onCompositionEnd.bind(this)),
        !this._clickHandlerInitialized && this.canvas && (fabric.util.addListener(this.canvas.upperCanvasEl, "click", this.onClick.bind(this)),
        this._clickHandlerInitialized = !0)
    },
    keysMap: {
        9: "exitEditing",
        27: "exitEditing",
        33: "moveCursorUp",
        34: "moveCursorDown",
        35: "moveCursorRight",
        36: "moveCursorLeft",
        37: "moveCursorLeft",
        38: "moveCursorUp",
        39: "moveCursorRight",
        40: "moveCursorDown"
    },
    ctrlKeysMapUp: {
        67: "copy",
        88: "cut"
    },
    ctrlKeysMapDown: {
        65: "selectAll"
    },
    onClick: function() {
        this.hiddenTextarea && this.hiddenTextarea.focus()
    },
    onKeyDown: function(t) {
        if (this.isEditing && !this.inCompositionMode) {
            if (t.keyCode in this.keysMap)
                this[this.keysMap[t.keyCode]](t);
            else {
                if (!(t.keyCode in this.ctrlKeysMapDown && (t.ctrlKey || t.metaKey)))
                    return;
                this[this.ctrlKeysMapDown[t.keyCode]](t)
            }
            t.stopImmediatePropagation(),
            t.preventDefault(),
            t.keyCode >= 33 && t.keyCode <= 40 ? (this.clearContextTop(),
            this.renderCursorOrSelection()) : this.canvas && this.canvas.requestRenderAll()
        }
    },
    onKeyUp: function(t) {
        return !this.isEditing || this._copyDone || this.inCompositionMode ? void (this._copyDone = !1) : void (t.keyCode in this.ctrlKeysMapUp && (t.ctrlKey || t.metaKey) && (this[this.ctrlKeysMapUp[t.keyCode]](t),
        t.stopImmediatePropagation(),
        t.preventDefault(),
        this.canvas && this.canvas.requestRenderAll()))
    },
    onInput: function(t) {
        var e = this.fromPaste;
        if (this.fromPaste = !1,
        t && t.stopPropagation(),
        this.isEditing) {
            var i, n, r = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText, s = this._text.length, o = r.length, a = o - s;
            if ("" === this.hiddenTextarea.value)
                return this.styles = {},
                this.updateFromTextArea(),
                this.fire("changed"),
                void (this.canvas && (this.canvas.fire("text:changed", {
                    target: this
                }),
                this.canvas.requestRenderAll()));
            var h = this.fromStringToGraphemeSelection(this.hiddenTextarea.selectionStart, this.hiddenTextarea.selectionEnd, this.hiddenTextarea.value)
              , c = this.selectionStart > h.selectionStart;
            this.selectionStart !== this.selectionEnd ? (i = this._text.slice(this.selectionStart, this.selectionEnd),
            a += this.selectionEnd - this.selectionStart) : o < s && (i = c ? this._text.slice(this.selectionEnd + a, this.selectionEnd) : this._text.slice(this.selectionStart, this.selectionStart - a)),
            n = r.slice(h.selectionEnd - a, h.selectionEnd),
            i && i.length && (this.selectionStart !== this.selectionEnd ? this.removeStyleFromTo(this.selectionStart, this.selectionEnd) : c ? this.removeStyleFromTo(this.selectionEnd - i.length, this.selectionEnd) : this.removeStyleFromTo(this.selectionEnd, this.selectionEnd + i.length)),
            n.length && (e && n.join("") === fabric.copiedText ? this.insertNewStyleBlock(n, this.selectionStart, fabric.copiedTextStyle) : this.insertNewStyleBlock(n, this.selectionStart)),
            this.updateFromTextArea(),
            this.fire("changed"),
            this.canvas && (this.canvas.fire("text:changed", {
                target: this
            }),
            this.canvas.requestRenderAll())
        }
    },
    onCompositionStart: function() {
        this.inCompositionMode = !0
    },
    onCompositionEnd: function() {
        this.inCompositionMode = !1
    },
    onCompositionUpdate: function(t) {
        this.compositionStart = t.target.selectionStart,
        this.compositionEnd = t.target.selectionEnd,
        this.updateTextareaPosition()
    },
    copy: function() {
        this.selectionStart !== this.selectionEnd && (fabric.copiedText = this.getSelectedText(),
        fabric.copiedTextStyle = this.getSelectionStyles(this.selectionStart, this.selectionEnd, !0),
        this._copyDone = !0)
    },
    paste: function() {
        this.fromPaste = !0
    },
    _getClipboardData: function(t) {
        return t && t.clipboardData || fabric.window.clipboardData
    },
    _getWidthBeforeCursor: function(t, e) {
        var i, n = this._getLineLeftOffset(t);
        return e > 0 && (i = this.__charBounds[t][e - 1],
        n += i.left + i.width),
        n
    },
    getDownCursorOffset: function(t, e) {
        var i = this._getSelectionForOffset(t, e)
          , n = this.get2DCursorLocation(i)
          , r = n.lineIndex;
        if (r === this._textLines.length - 1 || t.metaKey || 34 === t.keyCode)
            return this._text.length - i;
        var s = n.charIndex
          , o = this._getWidthBeforeCursor(r, s)
          , a = this._getIndexOnLine(r + 1, o)
          , h = this._textLines[r].slice(s);
        return h.length + a + 2
    },
    _getSelectionForOffset: function(t, e) {
        return t.shiftKey && this.selectionStart !== this.selectionEnd && e ? this.selectionEnd : this.selectionStart
    },
    getUpCursorOffset: function(t, e) {
        var i = this._getSelectionForOffset(t, e)
          , n = this.get2DCursorLocation(i)
          , r = n.lineIndex;
        if (0 === r || t.metaKey || 33 === t.keyCode)
            return -i;
        var s = n.charIndex
          , o = this._getWidthBeforeCursor(r, s)
          , a = this._getIndexOnLine(r - 1, o)
          , h = this._textLines[r].slice(0, s);
        return -this._textLines[r - 1].length + a - h.length
    },
    _getIndexOnLine: function(t, e) {
        for (var i, n, r = this._textLines[t], s = this._getLineLeftOffset(t), o = s, a = 0, h = 0, c = r.length; h < c; h++)
            if (i = this.__charBounds[t][h].width,
            o += i,
            o > e) {
                n = !0;
                var l = o - i
                  , u = o
                  , f = Math.abs(l - e)
                  , d = Math.abs(u - e);
                a = d < f ? h : h - 1;
                break
            }
        return n || (a = r.length - 1),
        a
    },
    moveCursorDown: function(t) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorUpOrDown("Down", t)
    },
    moveCursorUp: function(t) {
        0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorUpOrDown("Up", t)
    },
    _moveCursorUpOrDown: function(t, e) {
        var i = "get" + t + "CursorOffset"
          , n = this[i](e, "right" === this._selectionDirection);
        e.shiftKey ? this.moveCursorWithShift(n) : this.moveCursorWithoutShift(n),
        0 !== n && (this.setSelectionInBoundaries(),
        this.abortCursorAnimation(),
        this._currentCursorOpacity = 1,
        this.initDelayedCursor(),
        this._fireSelectionChanged(),
        this._updateTextarea())
    },
    moveCursorWithShift: function(t) {
        var e = "left" === this._selectionDirection ? this.selectionStart + t : this.selectionEnd + t;
        return this.setSelectionStartEndWithShift(this.selectionStart, this.selectionEnd, e),
        0 !== t
    },
    moveCursorWithoutShift: function(t) {
        return t < 0 ? (this.selectionStart += t,
        this.selectionEnd = this.selectionStart) : (this.selectionEnd += t,
        this.selectionStart = this.selectionEnd),
        0 !== t
    },
    moveCursorLeft: function(t) {
        0 === this.selectionStart && 0 === this.selectionEnd || this._moveCursorLeftOrRight("Left", t)
    },
    _move: function(t, e, i) {
        var n;
        if (t.altKey)
            n = this["findWordBoundary" + i](this[e]);
        else {
            if (!t.metaKey && 35 !== t.keyCode && 36 !== t.keyCode)
                return this[e] += "Left" === i ? -1 : 1,
                !0;
            n = this["findLineBoundary" + i](this[e])
        }
        if (void 0 !== typeof n && this[e] !== n)
            return this[e] = n,
            !0
    },
    _moveLeft: function(t, e) {
        return this._move(t, e, "Left")
    },
    _moveRight: function(t, e) {
        return this._move(t, e, "Right")
    },
    moveCursorLeftWithoutShift: function(t) {
        var e = !0;
        return this._selectionDirection = "left",
        this.selectionEnd === this.selectionStart && 0 !== this.selectionStart && (e = this._moveLeft(t, "selectionStart")),
        this.selectionEnd = this.selectionStart,
        e
    },
    moveCursorLeftWithShift: function(t) {
        return "right" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveLeft(t, "selectionEnd") : 0 !== this.selectionStart ? (this._selectionDirection = "left",
        this._moveLeft(t, "selectionStart")) : void 0
    },
    moveCursorRight: function(t) {
        this.selectionStart >= this._text.length && this.selectionEnd >= this._text.length || this._moveCursorLeftOrRight("Right", t)
    },
    _moveCursorLeftOrRight: function(t, e) {
        var i = "moveCursor" + t + "With";
        this._currentCursorOpacity = 1,
        i += e.shiftKey ? "Shift" : "outShift",
        this[i](e) && (this.abortCursorAnimation(),
        this.initDelayedCursor(),
        this._fireSelectionChanged(),
        this._updateTextarea())
    },
    moveCursorRightWithShift: function(t) {
        return "left" === this._selectionDirection && this.selectionStart !== this.selectionEnd ? this._moveRight(t, "selectionStart") : this.selectionEnd !== this._text.length ? (this._selectionDirection = "right",
        this._moveRight(t, "selectionEnd")) : void 0
    },
    moveCursorRightWithoutShift: function(t) {
        var e = !0;
        return this._selectionDirection = "right",
        this.selectionStart === this.selectionEnd ? (e = this._moveRight(t, "selectionStart"),
        this.selectionEnd = this.selectionStart) : this.selectionStart = this.selectionEnd,
        e
    },
    removeChars: function(t, e) {
        "undefined" == typeof e && (e = t + 1),
        this.removeStyleFromTo(t, e),
        this._text.splice(t, e - t),
        this.text = this._text.join(""),
        this.set("dirty", !0),
        this._shouldClearDimensionCache() && (this.initDimensions(),
        this.setCoords()),
        this._removeExtraneousStyles()
    },
    insertChars: function(t, e, i, n) {
        "undefined" == typeof n && (n = i),
        n > i && this.removeStyleFromTo(i, n);
        var r = fabric.util.string.graphemeSplit(t);
        this.insertNewStyleBlock(r, i, e),
        this._text = [].concat(this._text.slice(0, i), r, this._text.slice(n)),
        this.text = this._text.join(""),
        this.set("dirty", !0),
        this._shouldClearDimensionCache() && (this.initDimensions(),
        this.setCoords()),
        this._removeExtraneousStyles()
    }
}),
function() {
    var t = fabric.util.toFixed
      , e = fabric.Object.NUM_FRACTION_DIGITS;
    fabric.util.object.extend(fabric.Text.prototype, {
        toSVG: function(t) {
            var e = this._createBaseSVGMarkup()
              , i = this._getSVGLeftTopOffsets()
              , n = this._getSVGTextAndBg(i.textTop, i.textLeft);
            return this._wrapSVGTextAndBg(e, n),
            t ? t(e.join("")) : e.join("")
        },
        _getSVGLeftTopOffsets: function() {
            return {
                textLeft: -this.width / 2,
                textTop: -this.height / 2,
                lineTop: this.getHeightOfLine(0)
            }
        },
        _wrapSVGTextAndBg: function(t, e) {
            var i = !0
              , n = this.getSvgFilter()
              , r = "" === n ? "" : ' style="' + n + '"'
              , s = this.getSvgTextDecoration(this);
            t.push("\t<g ", this.getSvgId(), 'transform="', this.getSvgTransform(), this.getSvgTransformMatrix(), '"', r, ">\n", e.textBgRects.join(""), '\t\t<text xml:space="preserve" ', this.fontFamily ? 'font-family="' + this.fontFamily.replace(/"/g, "'") + '" ' : "", this.fontSize ? 'font-size="' + this.fontSize + '" ' : "", this.fontStyle ? 'font-style="' + this.fontStyle + '" ' : "", this.fontWeight ? 'font-weight="' + this.fontWeight + '" ' : "", s ? 'text-decoration="' + s + '" ' : "", 'style="', this.getSvgStyles(i), '"', this.addPaintOrder(), " >", e.textSpans.join(""), "</text>\n", "\t</g>\n")
        },
        _getSVGTextAndBg: function(t, e) {
            var i, n = [], r = [], s = t;
            this._setSVGBg(r);
            for (var o = 0, a = this._textLines.length; o < a; o++)
                i = this._getLineLeftOffset(o),
                (this.textBackgroundColor || this.styleHas("textBackgroundColor", o)) && this._setSVGTextLineBg(r, o, e + i, s),
                this._setSVGTextLineText(n, o, e + i, s),
                s += this.getHeightOfLine(o);
            return {
                textSpans: n,
                textBgRects: r
            }
        },
        _createTextCharSpan: function(i, n, r, s) {
            var o = this.getSvgSpanStyles(n, i !== i.trim())
              , a = o ? 'style="' + o + '"' : "";
            return ['<tspan x="', t(r, e), '" y="', t(s, e), '" ', a, ">", fabric.util.string.escapeXml(i), "</tspan>"].join("")
        },
        _setSVGTextLineText: function(t, e, i, n) {
            var r, s, o, a, h, c = this.getHeightOfLine(e), l = this.textAlign.indexOf("justify") !== -1, u = "", f = 0, d = this._textLines[e];
            n += c * (1 - this._fontSizeFraction) / this.lineHeight;
            for (var p = 0, g = d.length - 1; p <= g; p++)
                h = p === g || this.charSpacing,
                u += d[p],
                o = this.__charBounds[e][p],
                0 === f ? (i += o.kernedWidth - o.width,
                f += o.width) : f += o.kernedWidth,
                l && !h && this._reSpaceAndTab.test(d[p]) && (h = !0),
                h || (r = r || this.getCompleteStyleDeclaration(e, p),
                s = this.getCompleteStyleDeclaration(e, p + 1),
                h = this._hasStyleChangedForSvg(r, s)),
                h && (a = this._getStyleDeclaration(e, p) || {},
                t.push(this._createTextCharSpan(u, a, i, n)),
                u = "",
                r = s,
                i += f,
                f = 0)
        },
        _pushTextBgRect: function(i, n, r, s, o, a) {
            i.push("\t\t<rect ", this._getFillAttributes(n), ' x="', t(r, e), '" y="', t(s, e), '" width="', t(o, e), '" height="', t(a, e), '"></rect>\n');
        },
        _setSVGTextLineBg: function(t, e, i, n) {
            for (var r, s, o = this._textLines[e], a = this.getHeightOfLine(e) / this.lineHeight, h = 0, c = 0, l = this.getValueOfPropertyAt(e, 0, "textBackgroundColor"), u = 0, f = o.length; u < f; u++)
                r = this.__charBounds[e][u],
                s = this.getValueOfPropertyAt(e, u, "textBackgroundColor"),
                s !== l ? (l && this._pushTextBgRect(t, l, i + c, n, h, a),
                c = r.left,
                h = r.width,
                l = s) : h += r.kernedWidth;
            s && this._pushTextBgRect(t, s, i + c, n, h, a)
        },
        _getFillAttributes: function(t) {
            var e = t && "string" == typeof t ? new fabric.Color(t) : "";
            return e && e.getSource() && 1 !== e.getAlpha() ? 'opacity="' + e.getAlpha() + '" fill="' + e.setAlpha(1).toRgb() + '"' : 'fill="' + t + '"'
        },
        _getSVGLineTopOffset: function(t) {
            for (var e = 0, i = 0, n = 0; n < t; n++)
                e += this.getHeightOfLine(n);
            return i = this.getHeightOfLine(n),
            {
                lineTop: e,
                offset: (this._fontSizeMult - this._fontSizeFraction) * i / (this.lineHeight * this._fontSizeMult)
            }
        },
        getSvgStyles: function(t) {
            var e = fabric.Object.prototype.getSvgStyles.call(this, t);
            return e + " white-space: pre;"
        }
    })
}(),
function(t) {
    "use strict";
    var e = t.fabric || (t.fabric = {});
    e.Textbox = e.util.createClass(e.IText, e.Observable, {
        type: "textbox",
        minWidth: 20,
        dynamicMinWidth: 2,
        __cachedLines: null,
        lockScalingFlip: !0,
        noScaleCache: !1,
        _dimensionAffectingProps: e.Text.prototype._dimensionAffectingProps.concat("width"),
        initialize: function(t, e) {
            this.callSuper("initialize", t, e)
        },
        initDimensions: function() {
            this.__skipDimension || (this.isEditing && this.initDelayedCursor(),
            this.clearContextTop(),
            this._clearCache(),
            this.dynamicMinWidth = 0,
            this._styleMap = this._generateStyleMap(this._splitText()),
            this.dynamicMinWidth > this.width && this._set("width", this.dynamicMinWidth),
            this.textAlign.indexOf("justify") !== -1 && this.enlargeSpaces(),
            this.height = this.calcTextHeight(),
            this.saveState({
                propertySet: "_dimensionAffectingProps"
            }))
        },
        _generateStyleMap: function(t) {
            for (var e = 0, i = 0, n = 0, r = {}, s = 0; s < t.graphemeLines.length; s++)
                "\n" === t.graphemeText[n] && s > 0 ? (i = 0,
                n++,
                e++) : this._reSpaceAndTab.test(t.graphemeText[n]) && s > 0 && (i++,
                n++),
                r[s] = {
                    line: e,
                    offset: i
                },
                n += t.graphemeLines[s].length,
                i += t.graphemeLines[s].length;
            return r
        },
        styleHas: function(t, i) {
            if (this._styleMap && !this.isWrapping) {
                var n = this._styleMap[i];
                n && (i = n.line)
            }
            return e.Text.prototype.styleHas.call(this, t, i)
        },
        _getStyleDeclaration: function(t, e) {
            if (this._styleMap && !this.isWrapping) {
                var i = this._styleMap[t];
                if (!i)
                    return null;
                t = i.line,
                e = i.offset + e
            }
            return this.callSuper("_getStyleDeclaration", t, e)
        },
        _setStyleDeclaration: function(t, e, i) {
            var n = this._styleMap[t];
            t = n.line,
            e = n.offset + e,
            this.styles[t][e] = i
        },
        _deleteStyleDeclaration: function(t, e) {
            var i = this._styleMap[t];
            t = i.line,
            e = i.offset + e,
            delete this.styles[t][e]
        },
        _getLineStyle: function(t) {
            var e = this._styleMap[t];
            return this.styles[e.line]
        },
        _setLineStyle: function(t, e) {
            var i = this._styleMap[t];
            this.styles[i.line] = e
        },
        _deleteLineStyle: function(t) {
            var e = this._styleMap[t];
            delete this.styles[e.line]
        },
        _wrapText: function(t, e) {
            var i, n = [];
            for (this.isWrapping = !0,
            i = 0; i < t.length; i++)
                n = n.concat(this._wrapLine(t[i], i, e));
            return this.isWrapping = !1,
            n
        },
        _measureWord: function(t, e, i) {
            var n, r = 0, s = !0;
            i = i || 0;
            for (var o = 0, a = t.length; o < a; o++) {
                var h = this._getGraphemeBox(t[o], e, o + i, n, s);
                r += h.kernedWidth,
                n = t[o]
            }
            return r
        },
        _wrapLine: function(t, i, n) {
            for (var r = 0, s = [], o = [], a = t.split(this._reSpaceAndTab), h = "", c = 0, l = " ", u = 0, f = 0, d = 0, p = !0, g = this._getWidthOfCharSpacing(), v = 0; v < a.length; v++)
                h = e.util.string.graphemeSplit(a[v]),
                u = this._measureWord(h, i, c),
                c += h.length,
                r += f + u - g,
                r >= n && !p && (s.push(o),
                o = [],
                r = u,
                p = !0),
                p || o.push(l),
                o = o.concat(h),
                f = this._measureWord([l], i, c),
                c++,
                p = !1,
                u > d && (d = u);
            return v && s.push(o),
            d > this.dynamicMinWidth && (this.dynamicMinWidth = d - g),
            s
        },
        isEndOfWrapping: function(t) {
            return !this._styleMap[t + 1] || this._styleMap[t + 1].line !== this._styleMap[t].line
        },
        _splitTextIntoLines: function(t) {
            for (var i = e.Text.prototype._splitTextIntoLines.call(this, t), n = this._wrapText(i.lines, this.width), r = new Array(n.length), s = 0; s < n.length; s++)
                r[s] = n[s].join("");
            return i.lines = r,
            i.graphemeLines = n,
            i
        },
        getMinWidth: function() {
            return Math.max(this.minWidth, this.dynamicMinWidth)
        },
        toObject: function(t) {
            return this.callSuper("toObject", ["minWidth"].concat(t))
        }
    }),
    e.Textbox.fromObject = function(t, i) {
        return e.Object._fromObject("Textbox", t, i, "text")
    }
}("undefined" != typeof exports ? exports : this),
function() {
    var t = fabric.Canvas.prototype._setObjectScale;
    fabric.Canvas.prototype._setObjectScale = function(e, i, n, r, s, o, a) {
        var h = i.target;
        if (!("x" === s && h instanceof fabric.Textbox))
            return t.call(fabric.Canvas.prototype, e, i, n, r, s, o, a);
        var c = h._getTransformedDimensions().x
          , l = h.width * (e.x / c);
        return l >= h.getMinWidth() ? (h.set("width", l),
        !0) : void 0
    }
    ,
    fabric.util.object.extend(fabric.Textbox.prototype, {
        _removeExtraneousStyles: function() {
            for (var t in this._styleMap)
                this._textLines[t] || delete this.styles[this._styleMap[t].line]
        }
    })
}(),
!function(t, e, i, n) {
    "use strict";
    function r(t, e, i) {
        return setTimeout(c(t, i), e)
    }
    function s(t, e, i) {
        return !!Array.isArray(t) && (o(t, i[e], i),
        !0)
    }
    function o(t, e, i) {
        var r;
        if (t)
            if (t.forEach)
                t.forEach(e, i);
            else if (t.length !== n)
                for (r = 0; r < t.length; )
                    e.call(i, t[r], r, t),
                    r++;
            else
                for (r in t)
                    t.hasOwnProperty(r) && e.call(i, t[r], r, t)
    }
    function a(e, i, n) {
        var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace")
              , n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , s = t.console && (t.console.warn || t.console.log);
            return s && s.call(t.console, r, n),
            e.apply(this, arguments)
        }
    }
    function h(t, e, i) {
        var n, r = e.prototype;
        n = t.prototype = Object.create(r),
        n.constructor = t,
        n._super = r,
        i && ut(n, i)
    }
    function c(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function l(t, e) {
        return typeof t == pt ? t.apply(e ? e[0] || n : n, e) : t
    }
    function u(t, e) {
        return t === n ? e : t
    }
    function f(t, e, i) {
        o(v(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }
    function d(t, e, i) {
        o(v(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }
    function p(t, e) {
        for (; t; ) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function g(t, e) {
        return t.indexOf(e) > -1
    }
    function v(t) {
        return t.trim().split(/\s+/g)
    }
    function m(t, e, i) {
        if (t.indexOf && !i)
            return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
            if (i && t[n][i] == e || !i && t[n] === e)
                return n;
            n++
        }
        return -1
    }
    function _(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function b(t, e, i) {
        for (var n = [], r = [], s = 0; s < t.length; ) {
            var o = e ? t[s][e] : t[s];
            m(r, o) < 0 && n.push(t[s]),
            r[s] = o,
            s++
        }
        return i && (n = e ? n.sort(function(t, i) {
            return t[e] > i[e]
        }) : n.sort()),
        n
    }
    function y(t, e) {
        for (var i, r, s = e[0].toUpperCase() + e.slice(1), o = 0; o < ft.length; ) {
            if (i = ft[o],
            r = i ? i + s : e,
            r in t)
                return r;
            o++
        }
        return n
    }
    function x() {
        return yt++
    }
    function C(e) {
        var i = e.ownerDocument || e;
        return i.defaultView || i.parentWindow || t
    }
    function w(t, e) {
        var i = this;
        this.manager = t,
        this.callback = e,
        this.element = t.element,
        this.target = t.options.inputTarget,
        this.domHandler = function(e) {
            l(t.options.enable, [t]) && i.handler(e)
        }
        ,
        this.init()
    }
    function S(t) {
        var e, i = t.options.inputClass;
        return new (e = i ? i : wt ? R : St ? z : Ct ? U : B)(t,T)
    }
    function T(t, e, i) {
        var n = i.pointers.length
          , r = i.changedPointers.length
          , s = e & Pt && n - r === 0
          , o = e & (At | Mt) && n - r === 0;
        i.isFirst = !!s,
        i.isFinal = !!o,
        s && (t.session = {}),
        i.eventType = e,
        O(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        t.session.prevInput = i
    }
    function O(t, e) {
        var i = t.session
          , n = e.pointers
          , r = n.length;
        i.firstInput || (i.firstInput = D(e)),
        r > 1 && !i.firstMultiple ? i.firstMultiple = D(e) : 1 === r && (i.firstMultiple = !1);
        var s = i.firstInput
          , o = i.firstMultiple
          , a = o ? o.center : s.center
          , h = e.center = P(n);
        e.timeStamp = mt(),
        e.deltaTime = e.timeStamp - s.timeStamp,
        e.angle = I(a, h),
        e.distance = M(a, h),
        E(i, e),
        e.offsetDirection = A(e.deltaX, e.deltaY);
        var c = j(e.deltaTime, e.deltaX, e.deltaY);
        e.overallVelocityX = c.x,
        e.overallVelocityY = c.y,
        e.overallVelocity = vt(c.x) > vt(c.y) ? c.x : c.y,
        e.scale = o ? L(o.pointers, n) : 1,
        e.rotation = o ? F(o.pointers, n) : 0,
        e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
        k(i, e);
        var l = t.element;
        p(e.srcEvent.target, l) && (l = e.srcEvent.target),
        e.target = l
    }
    function E(t, e) {
        var i = e.center
          , n = t.offsetDelta || {}
          , r = t.prevDelta || {}
          , s = t.prevInput || {};
        e.eventType !== Pt && s.eventType !== At || (r = t.prevDelta = {
            x: s.deltaX || 0,
            y: s.deltaY || 0
        },
        n = t.offsetDelta = {
            x: i.x,
            y: i.y
        }),
        e.deltaX = r.x + (i.x - n.x),
        e.deltaY = r.y + (i.y - n.y)
    }
    function k(t, e) {
        var i, r, s, o, a = t.lastInterval || e, h = e.timeStamp - a.timeStamp;
        if (e.eventType != Mt && (h > Dt || a.velocity === n)) {
            var c = e.deltaX - a.deltaX
              , l = e.deltaY - a.deltaY
              , u = j(h, c, l);
            r = u.x,
            s = u.y,
            i = vt(u.x) > vt(u.y) ? u.x : u.y,
            o = A(c, l),
            t.lastInterval = e
        } else
            i = a.velocity,
            r = a.velocityX,
            s = a.velocityY,
            o = a.direction;
        e.velocity = i,
        e.velocityX = r,
        e.velocityY = s,
        e.direction = o
    }
    function D(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
            e[i] = {
                clientX: gt(t.pointers[i].clientX),
                clientY: gt(t.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: mt(),
            pointers: e,
            center: P(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function P(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: gt(t[0].clientX),
                y: gt(t[0].clientY)
            };
        for (var i = 0, n = 0, r = 0; e > r; )
            i += t[r].clientX,
            n += t[r].clientY,
            r++;
        return {
            x: gt(i / e),
            y: gt(n / e)
        }
    }
    function j(t, e, i) {
        return {
            x: e / t || 0,
            y: i / t || 0
        }
    }
    function A(t, e) {
        return t === e ? It : vt(t) >= vt(e) ? 0 > t ? Ft : Lt : 0 > e ? Bt : Rt
    }
    function M(t, e, i) {
        i || (i = Wt);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + r * r)
    }
    function I(t, e, i) {
        i || (i = Wt);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }
    function F(t, e) {
        return I(e[1], e[0], Ut) + I(t[1], t[0], Ut)
    }
    function L(t, e) {
        return M(e[0], e[1], Ut) / M(t[0], t[1], Ut)
    }
    function B() {
        this.evEl = Ht,
        this.evWin = Gt,
        this.pressed = !1,
        w.apply(this, arguments)
    }
    function R() {
        this.evEl = qt,
        this.evWin = Kt,
        w.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function X() {
        this.evTarget = Zt,
        this.evWin = Qt,
        this.started = !1,
        w.apply(this, arguments)
    }
    function Y(t, e) {
        var i = _(t.touches)
          , n = _(t.changedTouches);
        return e & (At | Mt) && (i = b(i.concat(n), "identifier", !0)),
        [i, n]
    }
    function z() {
        this.evTarget = ee,
        this.targetIds = {},
        w.apply(this, arguments)
    }
    function W(t, e) {
        var i = _(t.touches)
          , n = this.targetIds;
        if (e & (Pt | jt) && 1 === i.length)
            return n[i[0].identifier] = !0,
            [i, i];
        var r, s, o = _(t.changedTouches), a = [], h = this.target;
        if (s = i.filter(function(t) {
            return p(t.target, h)
        }),
        e === Pt)
            for (r = 0; r < s.length; )
                n[s[r].identifier] = !0,
                r++;
        for (r = 0; r < o.length; )
            n[o[r].identifier] && a.push(o[r]),
            e & (At | Mt) && delete n[o[r].identifier],
            r++;
        return a.length ? [b(s.concat(a), "identifier", !0), a] : void 0
    }
    function U() {
        w.apply(this, arguments);
        var t = c(this.handler, this);
        this.touch = new z(this.manager,t),
        this.mouse = new B(this.manager,t),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function N(t, e) {
        t & Pt ? (this.primaryTouch = e.changedPointers[0].identifier,
        H.call(this, e)) : t & (At | Mt) && H.call(this, e)
    }
    function H(t) {
        var e = t.changedPointers[0];
        if (e.identifier === this.primaryTouch) {
            var i = {
                x: e.clientX,
                y: e.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches
              , r = function() {
                var t = n.indexOf(i);
                t > -1 && n.splice(t, 1)
            };
            setTimeout(r, ie)
        }
    }
    function G(t) {
        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n]
              , s = Math.abs(e - r.x)
              , o = Math.abs(i - r.y);
            if (ne >= s && ne >= o)
                return !0
        }
        return !1
    }
    function V(t, e) {
        this.manager = t,
        this.set(e)
    }
    function $(t) {
        if (g(t, ce))
            return ce;
        var e = g(t, le)
          , i = g(t, ue);
        return e && i ? ce : e || i ? e ? le : ue : g(t, he) ? he : ae
    }
    function q() {
        if (!se)
            return !1;
        var e = {}
          , i = t.CSS && t.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            e[n] = !i || t.CSS.supports("touch-action", n)
        }),
        e
    }
    function K(t) {
        this.options = ut({}, this.defaults, t || {}),
        this.id = x(),
        this.manager = null,
        this.options.enable = u(this.options.enable, !0),
        this.state = de,
        this.simultaneous = {},
        this.requireFail = []
    }
    function J(t) {
        return t & _e ? "cancel" : t & ve ? "end" : t & ge ? "move" : t & pe ? "start" : ""
    }
    function Z(t) {
        return t == Rt ? "down" : t == Bt ? "up" : t == Ft ? "left" : t == Lt ? "right" : ""
    }
    function Q(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }
    function tt() {
        K.apply(this, arguments)
    }
    function et() {
        tt.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function it() {
        tt.apply(this, arguments)
    }
    function nt() {
        K.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function rt() {
        tt.apply(this, arguments)
    }
    function st() {
        tt.apply(this, arguments)
    }
    function ot() {
        K.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function at(t, e) {
        return e = e || {},
        e.recognizers = u(e.recognizers, at.defaults.preset),
        new ht(t,e)
    }
    function ht(t, e) {
        this.options = ut({}, at.defaults, e || {}),
        this.options.inputTarget = this.options.inputTarget || t,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = t,
        this.input = S(this),
        this.touchAction = new V(this,this.options.touchAction),
        ct(this, !0),
        o(this.options.recognizers, function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]),
            t[3] && e.requireFailure(t[3])
        }, this)
    }
    function ct(t, e) {
        var i = t.element;
        if (i.style) {
            var n;
            o(t.options.cssProps, function(r, s) {
                n = y(i.style, s),
                e ? (t.oldCssProps[n] = i.style[n],
                i.style[n] = r) : i.style[n] = t.oldCssProps[n] || ""
            }),
            e || (t.oldCssProps = {})
        }
    }
    function lt(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0),
        n.gesture = i,
        i.target.dispatchEvent(n)
    }
    var ut, ft = ["", "webkit", "Moz", "MS", "ms", "o"], dt = e.createElement("div"), pt = "function", gt = Math.round, vt = Math.abs, mt = Date.now;
    ut = "function" != typeof Object.assign ? function(t) {
        if (t === n || null === t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r !== n && null !== r)
                for (var s in r)
                    r.hasOwnProperty(s) && (e[s] = r[s])
        }
        return e
    }
    : Object.assign;
    var _t = a(function(t, e, i) {
        for (var r = Object.keys(e), s = 0; s < r.length; )
            (!i || i && t[r[s]] === n) && (t[r[s]] = e[r[s]]),
            s++;
        return t
    }, "extend", "Use `assign`.")
      , bt = a(function(t, e) {
        return _t(t, e, !0)
    }, "merge", "Use `assign`.")
      , yt = 1
      , xt = /mobile|tablet|ip(ad|hone|od)|android/i
      , Ct = "ontouchstart"in t
      , wt = y(t, "PointerEvent") !== n
      , St = Ct && xt.test(navigator.userAgent)
      , Tt = "touch"
      , Ot = "pen"
      , Et = "mouse"
      , kt = "kinect"
      , Dt = 25
      , Pt = 1
      , jt = 2
      , At = 4
      , Mt = 8
      , It = 1
      , Ft = 2
      , Lt = 4
      , Bt = 8
      , Rt = 16
      , Xt = Ft | Lt
      , Yt = Bt | Rt
      , zt = Xt | Yt
      , Wt = ["x", "y"]
      , Ut = ["clientX", "clientY"];
    w.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler),
            this.evTarget && f(this.target, this.evTarget, this.domHandler),
            this.evWin && f(C(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && d(this.element, this.evEl, this.domHandler),
            this.evTarget && d(this.target, this.evTarget, this.domHandler),
            this.evWin && d(C(this.element), this.evWin, this.domHandler)
        }
    };
    var Nt = {
        mousedown: Pt,
        mousemove: jt,
        mouseup: At
    }
      , Ht = "mousedown"
      , Gt = "mousemove mouseup";
    h(B, w, {
        handler: function(t) {
            var e = Nt[t.type];
            e & Pt && 0 === t.button && (this.pressed = !0),
            e & jt && 1 !== t.which && (e = At),
            this.pressed && (e & At && (this.pressed = !1),
            this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: Et,
                srcEvent: t
            }))
        }
    });
    var Vt = {
        pointerdown: Pt,
        pointermove: jt,
        pointerup: At,
        pointercancel: Mt,
        pointerout: Mt
    }
      , $t = {
        2: Tt,
        3: Ot,
        4: Et,
        5: kt
    }
      , qt = "pointerdown"
      , Kt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && (qt = "MSPointerDown",
    Kt = "MSPointerMove MSPointerUp MSPointerCancel"),
    h(R, w, {
        handler: function(t) {
            var e = this.store
              , i = !1
              , n = t.type.toLowerCase().replace("ms", "")
              , r = Vt[n]
              , s = $t[t.pointerType] || t.pointerType
              , o = s == Tt
              , a = m(e, t.pointerId, "pointerId");
            r & Pt && (0 === t.button || o) ? 0 > a && (e.push(t),
            a = e.length - 1) : r & (At | Mt) && (i = !0),
            0 > a || (e[a] = t,
            this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: s,
                srcEvent: t
            }),
            i && e.splice(a, 1))
        }
    });
    var Jt = {
        touchstart: Pt,
        touchmove: jt,
        touchend: At,
        touchcancel: Mt
    }
      , Zt = "touchstart"
      , Qt = "touchstart touchmove touchend touchcancel";
    h(X, w, {
        handler: function(t) {
            var e = Jt[t.type];
            if (e === Pt && (this.started = !0),
            this.started) {
                var i = Y.call(this, t, e);
                e & (At | Mt) && i[0].length - i[1].length === 0 && (this.started = !1),
                this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: Tt,
                    srcEvent: t
                })
            }
        }
    });
    var te = {
        touchstart: Pt,
        touchmove: jt,
        touchend: At,
        touchcancel: Mt
    }
      , ee = "touchstart touchmove touchend touchcancel";
    h(z, w, {
        handler: function(t) {
            var e = te[t.type]
              , i = W.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: Tt,
                srcEvent: t
            })
        }
    });
    var ie = 2500
      , ne = 25;
    h(U, w, {
        handler: function(t, e, i) {
            var n = i.pointerType == Tt
              , r = i.pointerType == Et;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n)
                    N.call(this, e, i);
                else if (r && G.call(this, i))
                    return;
                this.callback(t, e, i)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var re = y(dt.style, "touchAction")
      , se = re !== n
      , oe = "compute"
      , ae = "auto"
      , he = "manipulation"
      , ce = "none"
      , le = "pan-x"
      , ue = "pan-y"
      , fe = q();
    V.prototype = {
        set: function(t) {
            t == oe && (t = this.compute()),
            se && this.manager.element.style && fe[t] && (this.manager.element.style[re] = t),
            this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return o(this.manager.recognizers, function(e) {
                l(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }),
            $(t.join(" "))
        },
        preventDefaults: function(t) {
            var e = t.srcEvent
              , i = t.offsetDirection;
            if (this.manager.session.prevented)
                return void e.preventDefault();
            var n = this.actions
              , r = g(n, ce) && !fe[ce]
              , s = g(n, ue) && !fe[ue]
              , o = g(n, le) && !fe[le];
            if (r) {
                var a = 1 === t.pointers.length
                  , h = t.distance < 2
                  , c = t.deltaTime < 250;
                if (a && h && c)
                    return
            }
            return o && s ? void 0 : r || s && i & Xt || o && i & Yt ? this.preventSrc(e) : void 0
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0,
            t.preventDefault()
        }
    };
    var de = 1
      , pe = 2
      , ge = 4
      , ve = 8
      , me = ve
      , _e = 16
      , be = 32;
    K.prototype = {
        defaults: {},
        set: function(t) {
            return ut(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(t) {
            if (s(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return t = Q(t, this),
            e[t.id] || (e[t.id] = t,
            t.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(t) {
            return s(t, "dropRecognizeWith", this) ? this : (t = Q(t, this),
            delete this.simultaneous[t.id],
            this)
        },
        requireFailure: function(t) {
            if (s(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return t = Q(t, this),
            -1 === m(e, t) && (e.push(t),
            t.requireFailure(this)),
            this
        },
        dropRequireFailure: function(t) {
            if (s(t, "dropRequireFailure", this))
                return this;
            t = Q(t, this);
            var e = m(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(e, t)
            }
            var i = this
              , n = this.state;
            ve > n && e(i.options.event + J(n)),
            e(i.options.event),
            t.additionalEvent && e(t.additionalEvent),
            n >= ve && e(i.options.event + J(n))
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = be)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (be | de)))
                    return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = ut({}, t);
            return l(this.options.enable, [this, e]) ? (this.state & (me | _e | be) && (this.state = de),
            this.state = this.process(e),
            void (this.state & (pe | ge | ve | _e) && this.tryEmit(e))) : (this.reset(),
            void (this.state = be))
        },
        process: function(t) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    h(tt, K, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state
              , i = t.eventType
              , n = e & (pe | ge)
              , r = this.attrTest(t);
            return n && (i & Mt || !r) ? e | _e : n || r ? i & At ? e | ve : e & pe ? e | ge : pe : be
        }
    }),
    h(et, tt, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: zt
        },
        getTouchAction: function() {
            var t = this.options.direction
              , e = [];
            return t & Xt && e.push(ue),
            t & Yt && e.push(le),
            e
        },
        directionTest: function(t) {
            var e = this.options
              , i = !0
              , n = t.distance
              , r = t.direction
              , s = t.deltaX
              , o = t.deltaY;
            return r & e.direction || (e.direction & Xt ? (r = 0 === s ? It : 0 > s ? Ft : Lt,
            i = s != this.pX,
            n = Math.abs(t.deltaX)) : (r = 0 === o ? It : 0 > o ? Bt : Rt,
            i = o != this.pY,
            n = Math.abs(t.deltaY))),
            t.direction = r,
            i && n > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return tt.prototype.attrTest.call(this, t) && (this.state & pe || !(this.state & pe) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX,
            this.pY = t.deltaY;
            var e = Z(t.direction);
            e && (t.additionalEvent = this.options.event + e),
            this._super.emit.call(this, t)
        }
    }),
    h(it, tt, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ce]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & pe)
        },
        emit: function(t) {
            if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
        }
    }),
    h(nt, K, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [ae]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , s = t.deltaTime > e.time;
            if (this._input = t,
            !n || !i || t.eventType & (At | Mt) && !s)
                this.reset();
            else if (t.eventType & Pt)
                this.reset(),
                this._timer = r(function() {
                    this.state = me,
                    this.tryEmit()
                }, e.time, this);
            else if (t.eventType & At)
                return me;
            return be
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === me && (t && t.eventType & At ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = mt(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    h(rt, tt, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ce]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & pe)
        }
    }),
    h(st, tt, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Xt | Yt,
            pointers: 1
        },
        getTouchAction: function() {
            return et.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (Xt | Yt) ? e = t.overallVelocity : i & Xt ? e = t.overallVelocityX : i & Yt && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && vt(e) > this.options.velocity && t.eventType & At
        },
        emit: function(t) {
            var e = Z(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t)
        }
    }),
    h(ot, K, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [he]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , s = t.deltaTime < e.time;
            if (this.reset(),
            t.eventType & Pt && 0 === this.count)
                return this.failTimeout();
            if (n && s && i) {
                if (t.eventType != At)
                    return this.failTimeout();
                var o = !this.pTime || t.timeStamp - this.pTime < e.interval
                  , a = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                this.pTime = t.timeStamp,
                this.pCenter = t.center,
                a && o ? this.count += 1 : this.count = 1,
                this._input = t;
                var h = this.count % e.taps;
                if (0 === h)
                    return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = me,
                        this.tryEmit()
                    }, e.interval, this),
                    pe) : me
            }
            return be
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = be
            }, this.options.interval, this),
            be
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == me && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    at.VERSION = "2.0.8",
    at.defaults = {
        domEvents: !1,
        touchAction: oe,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[rt, {
            enable: !1
        }], [it, {
            enable: !1
        }, ["rotate"]], [st, {
            direction: Xt
        }], [et, {
            direction: Xt
        }, ["swipe"]], [ot], [ot, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [nt]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ye = 1
      , xe = 2;
    ht.prototype = {
        set: function(t) {
            return ut(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget && (this.input.destroy(),
            this.input.target = t.inputTarget,
            this.input.init()),
            this
        },
        stop: function(t) {
            this.session.stopped = t ? xe : ye
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, r = e.curRecognizer;
                (!r || r && r.state & me) && (r = e.curRecognizer = null);
                for (var s = 0; s < n.length; )
                    i = n[s],
                    e.stopped === xe || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t),
                    !r && i.state & (pe | ge | ve) && (r = e.curRecognizer = i),
                    s++
            }
        },
        get: function(t) {
            if (t instanceof K)
                return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t)
                    return e[i];
            return null
        },
        add: function(t) {
            if (s(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e),
            this.recognizers.push(t),
            t.manager = this,
            this.touchAction.update(),
            t
        },
        remove: function(t) {
            if (s(t, "remove", this))
                return this;
            if (t = this.get(t)) {
                var e = this.recognizers
                  , i = m(e, t);
                -1 !== i && (e.splice(i, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(t, e) {
            if (t !== n && e !== n) {
                var i = this.handlers;
                return o(v(t), function(t) {
                    i[t] = i[t] || [],
                    i[t].push(e)
                }),
                this
            }
        },
        off: function(t, e) {
            if (t !== n) {
                var i = this.handlers;
                return o(v(t), function(t) {
                    e ? i[t] && i[t].splice(m(i[t], e), 1) : delete i[t]
                }),
                this
            }
        },
        emit: function(t, e) {
            this.options.domEvents && lt(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t,
                e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                }
                ;
                for (var n = 0; n < i.length; )
                    i[n](e),
                    n++
            }
        },
        destroy: function() {
            this.element && ct(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    ut(at, {
        INPUT_START: Pt,
        INPUT_MOVE: jt,
        INPUT_END: At,
        INPUT_CANCEL: Mt,
        STATE_POSSIBLE: de,
        STATE_BEGAN: pe,
        STATE_CHANGED: ge,
        STATE_ENDED: ve,
        STATE_RECOGNIZED: me,
        STATE_CANCELLED: _e,
        STATE_FAILED: be,
        DIRECTION_NONE: It,
        DIRECTION_LEFT: Ft,
        DIRECTION_RIGHT: Lt,
        DIRECTION_UP: Bt,
        DIRECTION_DOWN: Rt,
        DIRECTION_HORIZONTAL: Xt,
        DIRECTION_VERTICAL: Yt,
        DIRECTION_ALL: zt,
        Manager: ht,
        Input: w,
        TouchAction: V,
        TouchInput: z,
        MouseInput: B,
        PointerEventInput: R,
        TouchMouseInput: U,
        SingleTouchInput: X,
        Recognizer: K,
        AttrRecognizer: tt,
        Tap: ot,
        Pan: et,
        Swipe: st,
        Pinch: it,
        Rotate: rt,
        Press: nt,
        on: f,
        off: d,
        each: o,
        merge: bt,
        extend: _t,
        assign: ut,
        inherit: h,
        bindFn: c,
        prefixed: y
    });
    var Ce = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    Ce.Hammer = at,
    "function" == typeof define && define.amd ? define(function() {
        return at
    }) : "undefined" != typeof module && module.exports ? module.exports = at : t[i] = at
}(window, document, "Hammer"),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
}(function(t) {
    function e(e) {
        var o = e || window.event
          , a = h.call(arguments, 1)
          , c = 0
          , u = 0
          , f = 0
          , d = 0
          , p = 0
          , g = 0;
        if (e = t.event.fix(o),
        e.type = "mousewheel",
        "detail"in o && (f = o.detail * -1),
        "wheelDelta"in o && (f = o.wheelDelta),
        "wheelDeltaY"in o && (f = o.wheelDeltaY),
        "wheelDeltaX"in o && (u = o.wheelDeltaX * -1),
        "axis"in o && o.axis === o.HORIZONTAL_AXIS && (u = f * -1,
        f = 0),
        c = 0 === f ? u : f,
        "deltaY"in o && (f = o.deltaY * -1,
        c = f),
        "deltaX"in o && (u = o.deltaX,
        0 === f && (c = u * -1)),
        0 !== f || 0 !== u) {
            if (1 === o.deltaMode) {
                var v = t.data(this, "mousewheel-line-height");
                c *= v,
                f *= v,
                u *= v
            } else if (2 === o.deltaMode) {
                var m = t.data(this, "mousewheel-page-height");
                c *= m,
                f *= m,
                u *= m
            }
            if (d = Math.max(Math.abs(f), Math.abs(u)),
            (!s || d < s) && (s = d,
            n(o, d) && (s /= 40)),
            n(o, d) && (c /= 40,
            u /= 40,
            f /= 40),
            c = Math[c >= 1 ? "floor" : "ceil"](c / s),
            u = Math[u >= 1 ? "floor" : "ceil"](u / s),
            f = Math[f >= 1 ? "floor" : "ceil"](f / s),
            l.settings.normalizeOffset && this.getBoundingClientRect) {
                var _ = this.getBoundingClientRect();
                p = e.clientX - _.left,
                g = e.clientY - _.top
            }
            return e.deltaX = u,
            e.deltaY = f,
            e.deltaFactor = s,
            e.offsetX = p,
            e.offsetY = g,
            e.deltaMode = 0,
            a.unshift(e, c, u, f),
            r && clearTimeout(r),
            r = setTimeout(i, 200),
            (t.event.dispatch || t.event.handle).apply(this, a)
        }
    }
    function i() {
        s = null
    }
    function n(t, e) {
        return l.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
    }
    var r, s, o = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], h = Array.prototype.slice;
    if (t.event.fixHooks)
        for (var c = o.length; c; )
            t.event.fixHooks[o[--c]] = t.event.mouseHooks;
    var l = t.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var i = a.length; i; )
                    this.addEventListener(a[--i], e, !1);
            else
                this.onmousewheel = e;
            t.data(this, "mousewheel-line-height", l.getLineHeight(this)),
            t.data(this, "mousewheel-page-height", l.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var i = a.length; i; )
                    this.removeEventListener(a[--i], e, !1);
            else
                this.onmousewheel = null;
            t.removeData(this, "mousewheel-line-height"),
            t.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var i = t(e)
              , n = i["offsetParent"in t.fn ? "offsetParent" : "parent"]();
            return n.length || (n = t("body")),
            parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return t(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , r = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; r; ) {
                var o = s && s[r];
                o && (this.off(t, r),
                delete s[r]),
                r.apply(this, e),
                n += o ? 0 : 1,
                r = i[n]
            }
            return this
        }
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i() {}
    function n() {}
    var r = n.prototype = Object.create(e.prototype);
    r.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }
    ,
    r.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }
    ,
    r._bindStartEvent = function(e, i) {
        i = void 0 === i || !!i;
        var n = i ? "addEventListener" : "removeEventListener";
        t.navigator.pointerEnabled ? e[n]("pointerdown", this) : t.navigator.msPointerEnabled ? e[n]("MSPointerDown", this) : (e[n]("mousedown", this),
        e[n]("touchstart", this))
    }
    ,
    r.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    r.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    }
    ,
    r.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }
    ,
    r.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }
    ,
    r.onMSPointerDown = r.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }
    ,
    r._pointerDown = function(t, e) {
        this.isPointerDown || (this.isPointerDown = !0,
        this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
        this.pointerDown(t, e))
    }
    ,
    r.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ;
    var s = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"],
        MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
    };
    return r._bindPostStartEvents = function(e) {
        if (e) {
            var i = s[e.type];
            i.forEach(function(e) {
                t.addEventListener(e, this)
            }, this),
            this._boundPointerEvents = i
        }
    }
    ,
    r._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this)
        }, this),
        delete this._boundPointerEvents)
    }
    ,
    r.onmousemove = function(t) {
        this._pointerMove(t, t)
    }
    ,
    r.onMSPointerMove = r.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }
    ,
    r.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }
    ,
    r._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }
    ,
    r.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }
    ,
    r.onmouseup = function(t) {
        this._pointerUp(t, t)
    }
    ,
    r.onMSPointerUp = r.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }
    ,
    r.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }
    ,
    r._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }
    ,
    r.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }
    ,
    r._pointerDone = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier,
        this._unbindPostStartEvents(),
        this.pointerDone()
    }
    ,
    r.pointerDone = i,
    r.onMSPointerCancel = r.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }
    ,
    r.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }
    ,
    r._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }
    ,
    r.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }
    ,
    n.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter", "unipointer/unipointer"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("unipointer")) : t.Huebee = e(t, t.EvEmitter, t.Unipointer)
}(window, function(t, e, i) {
    function n(t, e) {
        if (t = a(t),
        !t)
            throw "Bad element for Huebee: " + t;
        this.anchor = t,
        this.options = {},
        this.option(n.defaults),
        this.option(e),
        this.create()
    }
    function r() {
        for (var t = document.querySelectorAll("[data-huebee]"), e = 0; e < t.length; e++) {
            var i, r = t[e], s = r.getAttribute("data-huebee");
            try {
                i = s && JSON.parse(s)
            } catch (o) {
                x && x.error("Error parsing data-huebee on " + r.className + ": " + o);
                continue
            }
            new n(r,i)
        }
    }
    function s(t) {
        S.clearRect(0, 0, 1, 1),
        S.fillStyle = "#010203",
        S.fillStyle = t,
        S.fillRect(0, 0, 1, 1);
        var e = S.getImageData(0, 0, 1, 1).data;
        if (e = [e[0], e[1], e[2], e[3]],
        "1,2,3,255" != e.join(",")) {
            var i = l.apply(this, e);
            return {
                color: t.trim(),
                hue: i[0],
                sat: i[1],
                lum: i[2]
            }
        }
    }
    function o(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function a(t) {
        return "string" == typeof t && (t = document.querySelector(t)),
        t
    }
    function h(t, e, i) {
        var n = c(t, e, i);
        return u(n)
    }
    function c(t, e, i) {
        var n, r, s = (1 - Math.abs(2 * i - 1)) * e, o = t / 60, a = s * (1 - Math.abs(o % 2 - 1));
        switch (Math.floor(o)) {
        case 0:
            n = [s, a, 0];
            break;
        case 1:
            n = [a, s, 0];
            break;
        case 2:
            n = [0, s, a];
            break;
        case 3:
            n = [0, a, s];
            break;
        case 4:
            n = [a, 0, s];
            break;
        case 5:
            n = [s, 0, a];
            break;
        default:
            n = [0, 0, 0]
        }
        return r = i - s / 2,
        n = n.map(function(t) {
            return t + r
        })
    }
    function l(t, e, i) {
        t /= 255,
        e /= 255,
        i /= 255;
        var n, r = Math.max(t, e, i), s = Math.min(t, e, i), o = r - s, a = .5 * (r + s), h = 0 === o ? 0 : o / (1 - Math.abs(2 * a - 1));
        0 === o ? n = 0 : r === t ? n = (e - i) / o % 6 : r === e ? n = (i - t) / o + 2 : r === i && (n = (t - e) / o + 4);
        var c = 60 * n;
        return [c, parseFloat(h), parseFloat(a)]
    }
    function u(t) {
        var e = t.map(function(t) {
            t = Math.round(255 * t);
            var e = t.toString(16).toUpperCase();
            return e = e.length < 2 ? "0" + e : e
        });
        return "#" + e.join("")
    }
    function f(t) {
        return "#" + t[1] + t[3] + t[5]
    }
    n.defaults = {
        hues: 12,
        hue0: 0,
        shades: 5,
        saturations: 3,
        notation: "shortHex",
        setText: !0,
        setBGColor: !0
    };
    var d = n.prototype = Object.create(e.prototype);
    d.option = function(t) {
        this.options = o(this.options, t)
    }
    ;
    var p = 0
      , g = {};
    d.create = function() {
        function t(t) {
            t.target == n && t.preventDefault()
        }
        var e = this.guid = ++p;
        this.anchor.huebeeGUID = e,
        g[e] = this,
        this.setBGElems = this.getSetElems(this.options.setBGColor),
        this.setTextElems = this.getSetElems(this.options.setText),
        this.outsideCloseIt = this.outsideClose.bind(this),
        this.onDocKeydown = this.docKeydown.bind(this),
        this.closeIt = this.close.bind(this),
        this.openIt = this.open.bind(this),
        this.onElemTransitionend = this.elemTransitionend.bind(this),
        this.isInputAnchor = "INPUT" == this.anchor.nodeName,
        this.options.staticOpen || (this.anchor.addEventListener("click", this.openIt),
        this.anchor.addEventListener("focus", this.openIt)),
        this.isInputAnchor && this.anchor.addEventListener("input", this.inputInput.bind(this));
        var i = this.element = document.createElement("div");
        i.className = "huebee ",
        i.className += this.options.staticOpen ? "is-static-open " : "is-hidden ",
        i.className += this.options.className || "";
        var n = this.container = document.createElement("div");
        if (n.className = "huebee__container",
        n.addEventListener("mousedown", t),
        n.addEventListener("touchstart", t),
        this.createCanvas(),
        this.cursor = document.createElement("div"),
        this.cursor.className = "huebee__cursor is-hidden",
        n.appendChild(this.cursor),
        this.createCloseButton(),
        i.appendChild(n),
        !this.options.staticOpen) {
            var r = getComputedStyle(this.anchor.parentNode);
            "relative" != r.position && "absolute" != r.position && (this.anchor.parentNode.style.position = "relative")
        }
        var s = this.options.hues
          , o = this.options.customColors
          , a = o && o.length;
        this.satY = a ? Math.ceil(a / s) + 1 : 0,
        this.updateColors(),
        this.setAnchorColor(),
        this.options.staticOpen && this.open()
    }
    ,
    d.getSetElems = function(t) {
        return t === !0 ? [this.anchor] : "string" == typeof t ? document.querySelectorAll(t) : void 0
    }
    ,
    d.createCanvas = function() {
        var t = this.canvas = document.createElement("canvas");
        t.className = "huebee__canvas",
        this.ctx = t.getContext("2d");
        var e = this.canvasPointer = new i;
        e._bindStartEvent(t),
        e.on("pointerDown", this.canvasPointerDown.bind(this)),
        e.on("pointerMove", this.canvasPointerMove.bind(this)),
        this.container.appendChild(t)
    }
    ;
    var v = "http://www.w3.org/2000/svg";
    d.createCloseButton = function() {
        if (!this.options.staticOpen) {
            var t = document.createElementNS(v, "svg");
            t.setAttribute("class", "huebee__close-button"),
            t.setAttribute("viewBox", "0 0 24 24"),
            t.setAttribute("width", "24"),
            t.setAttribute("height", "24");
            var e = document.createElementNS(v, "path");
            e.setAttribute("d", "M 7,7 L 17,17 M 17,7 L 7,17"),
            e.setAttribute("class", "huebee__close-button__x"),
            t.appendChild(e),
            t.addEventListener("click", this.closeIt),
            this.container.appendChild(t)
        }
    }
    ,
    d.updateColors = function() {
        this.swatches = {},
        this.colorGrid = {},
        this.updateColorModer();
        var t = this.options.shades
          , e = this.options.saturations
          , i = this.options.hues
          , n = this.options.customColors;
        if (n && n.length) {
            var r = 0;
            n.forEach(function(t) {
                var e = r % i
                  , n = Math.floor(r / i)
                  , o = s(t);
                o && (this.addSwatch(o, e, n),
                r++)
            }
            .bind(this))
        }
        for (var o = 0; o < e; o++) {
            var a = 1 - o / e
              , h = t * o + this.satY;
            this.updateSaturationGrid(o, a, h)
        }
        for (o = 0; o < t + 2; o++) {
            var c = 1 - o / (t + 1)
              , l = this.colorModer(0, 0, c)
              , u = s(l);
            this.addSwatch(u, i + 1, o)
        }
    }
    ,
    d.updateSaturationGrid = function(t, e, i) {
        for (var n = this.options.shades, r = this.options.hues, o = this.options.hue0, a = 0; a < n; a++)
            for (var h = 0; h < r; h++) {
                var c = Math.round(360 * h / r + o) % 360
                  , l = 1 - (a + 1) / (n + 1)
                  , u = this.colorModer(c, e, l)
                  , f = s(u)
                  , d = a + i;
                this.addSwatch(f, h, d)
            }
    }
    ,
    d.addSwatch = function(t, e, i) {
        this.swatches[e + "," + i] = t,
        this.colorGrid[t.color.toUpperCase()] = {
            x: e,
            y: i
        }
    }
    ;
    var m = {
        hsl: function(t, e, i) {
            return e = Math.round(100 * e),
            i = Math.round(100 * i),
            "hsl(" + t + ", " + e + "%, " + i + "%)"
        },
        hex: h,
        shortHex: function(t, e, i) {
            var n = h(t, e, i);
            return f(n)
        }
    };
    d.updateColorModer = function() {
        this.colorModer = m[this.options.notation] || m.shortHex
    }
    ,
    d.renderColors = function() {
        var t = 2 * this.gridSize;
        for (var e in this.swatches) {
            var i = this.swatches[e]
              , n = e.split(",")
              , r = n[0]
              , s = n[1];
            this.ctx.fillStyle = i.color,
            this.ctx.fillRect(r * t, s * t, t, t)
        }
    }
    ,
    d.setAnchorColor = function() {
        this.isInputAnchor && this.setColor(this.anchor.value)
    }
    ;
    var _ = document.documentElement;
    d.open = function() {
        if (!this.isOpen) {
            var t = this.anchor
              , e = this.element;
            this.options.staticOpen || (e.style.left = t.offsetLeft + "px",
            e.style.top = t.offsetTop + t.offsetHeight + "px"),
            this.bindOpenEvents(!0),
            e.removeEventListener("transitionend", this.onElemTransitionend),
            t.parentNode.insertBefore(e, t.nextSibling);
            var i = getComputedStyle(e).transitionDuration;
            this.hasTransition = i && "none" != i && parseFloat(i),
            this.isOpen = !0,
            this.updateSizes(),
            this.renderColors(),
            this.setAnchorColor();
            e.offsetHeight;
            e.classList.remove("is-hidden")
        }
    }
    ,
    d.bindOpenEvents = function(t) {
        if (!this.options.staticOpen) {
            var e = (t ? "add" : "remove") + "EventListener";
            _[e]("mousedown", this.outsideCloseIt),
            _[e]("touchstart", this.outsideCloseIt),
            document[e]("focusin", this.outsideCloseIt),
            document[e]("keydown", this.onDocKeydown),
            this.anchor[e]("blur", this.closeIt)
        }
    }
    ,
    d.updateSizes = function() {
        var t = this.options.hues
          , e = this.options.shades
          , i = this.options.saturations;
        this.cursorBorder = parseInt(getComputedStyle(this.cursor).borderTopWidth, 10),
        this.gridSize = Math.round(this.cursor.offsetWidth - 2 * this.cursorBorder),
        this.canvasOffset = {
            x: this.canvas.offsetLeft,
            y: this.canvas.offsetTop
        };
        var n = Math.max(e * i + this.satY, e + 2)
          , r = this.gridSize * (t + 2);
        this.canvas.width = 2 * r,
        this.canvas.style.width = r + "px",
        this.canvas.height = this.gridSize * n * 2
    }
    ,
    d.outsideClose = function(t) {
        var e = this.anchor.contains(t.target)
          , i = this.element.contains(t.target);
        e || i || this.close()
    }
    ;
    var b = {
        13: !0,
        27: !0
    };
    d.docKeydown = function(t) {
        b[t.keyCode] && this.close()
    }
    ;
    var y = "string" == typeof _.style.transform;
    d.close = function() {
        this.isOpen && (y && this.hasTransition ? this.element.addEventListener("transitionend", this.onElemTransitionend) : this.remove(),
        this.element.classList.add("is-hidden"),
        this.bindOpenEvents(!1),
        this.isOpen = !1)
    }
    ,
    d.remove = function() {
        var t = this.element.parentNode;
        t.contains(this.element) && t.removeChild(this.element)
    }
    ,
    d.elemTransitionend = function(t) {
        t.target == this.element && (this.element.removeEventListener("transitionend", this.onElemTransitionend),
        this.remove())
    }
    ,
    d.inputInput = function() {
        this.setColor(this.anchor.value)
    }
    ,
    d.canvasPointerDown = function(t, e) {
        t.preventDefault(),
        this.updateOffset(),
        this.canvasPointerChange(e)
    }
    ,
    d.updateOffset = function() {
        var e = this.canvas.getBoundingClientRect();
        this.offset = {
            x: e.left + t.pageXOffset,
            y: e.top + t.pageYOffset
        }
    }
    ,
    d.canvasPointerMove = function(t, e) {
        this.canvasPointerChange(e)
    }
    ,
    d.canvasPointerChange = function(t) {
        var e = Math.round(t.pageX - this.offset.x)
          , i = Math.round(t.pageY - this.offset.y)
          , n = this.gridSize
          , r = Math.floor(e / n)
          , s = Math.floor(i / n)
          , o = this.swatches[r + "," + s];
        this.setSwatch(o)
    }
    ,
    d.setColor = function(t) {
        var e = s(t);
        this.setSwatch(e)
    }
    ,
    d.setSwatch = function(t) {
        var e = t && t.color;
        if (t) {
            var i = e == this.color;
            this.color = e,
            this.hue = t.hue,
            this.sat = t.sat,
            this.lum = t.lum;
            var n = this.lum - .15 * Math.cos((this.hue + 70) / 180 * Math.PI);
            this.isLight = n > .5;
            var r = this.colorGrid[e.toUpperCase()];
            this.updateCursor(r),
            this.setTexts(),
            this.setBackgrounds(),
            i || this.emitEvent("change", [e, t.hue, t.sat, t.lum])
        }
    }
    ,
    d.setTexts = function() {
        if (this.setTextElems)
            for (var t = 0; t < this.setTextElems.length; t++) {
                var e = this.setTextElems[t]
                  , i = "INPUT" == e.nodeName ? "value" : "textContent";
                e[i] = this.color
            }
    }
    ,
    d.setBackgrounds = function() {
        if (this.setBGElems)
            for (var t = this.isLight ? "#222" : "white", e = 0; e < this.setBGElems.length; e++) {
                var i = this.setBGElems[e];
                i.style.backgroundColor = this.color,
                i.style.color = t
            }
    }
    ,
    d.updateCursor = function(t) {
        if (this.isOpen) {
            var e = t ? "remove" : "add";
            if (this.cursor.classList[e]("is-hidden"),
            t) {
                var i = this.gridSize
                  , n = this.canvasOffset
                  , r = this.cursorBorder;
                this.cursor.style.left = t.x * i + n.x - r + "px",
                this.cursor.style.top = t.y * i + n.y - r + "px"
            }
        }
    }
    ;
    var x = t.console
      , C = document.readyState;
    "complete" == C || "interactive" == C ? r() : document.addEventListener("DOMContentLoaded", r),
    n.data = function(t) {
        t = a(t);
        var e = t && t.huebeeGUID;
        return e && g[e]
    }
    ;
    var w = document.createElement("canvas");
    w.width = w.height = 1;
    var S = w.getContext("2d");
    return n
}),
function(t, e, i) {
    function n(i, n) {
        this.wrapper = "string" == typeof i ? e.querySelector(i) : i,
        this.scroller = this.wrapper.children[0],
        this.scrollerStyle = this.scroller.style,
        this.options = {
            disablePointer: !s.hasPointer,
            disableTouch: s.hasPointer || !s.hasTouch,
            disableMouse: s.hasPointer || s.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: "undefined" == typeof t.onmousedown
        };
        for (var r in n)
            this.options[r] = n[r];
        this.translateZ = this.options.HWCompositing && s.hasPerspective ? " translateZ(0)" : "",
        this.options.useTransition = s.hasTransition && this.options.useTransition,
        this.options.useTransform = s.hasTransform && this.options.useTransform,
        this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough,
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault,
        this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY,
        this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX,
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough,
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold,
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? s.ease[this.options.bounceEasing] || s.ease.circular : this.options.bounceEasing,
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling,
        this.options.tap === !0 && (this.options.tap = "tap"),
        this.x = 0,
        this.y = 0,
        this.directionX = 0,
        this.directionY = 0,
        this._events = {},
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable()
    }
    var r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
        t.setTimeout(e, 1e3 / 60)
    }
      , s = function() {
        function n(t) {
            return o !== !1 && ("" === o ? t : o + t.charAt(0).toUpperCase() + t.substr(1))
        }
        var r = {}
          , s = e.createElement("div").style
          , o = function() {
            for (var t, e = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = e.length; i < n; i++)
                if (t = e[i] + "ransform",
                t in s)
                    return e[i].substr(0, e[i].length - 1);
            return !1
        }();
        r.getTime = Date.now || function() {
            return (new Date).getTime()
        }
        ,
        r.extend = function(t, e) {
            for (var i in e)
                t[i] = e[i]
        }
        ,
        r.addEvent = function(t, e, i, n) {
            t.addEventListener(e, i, !!n)
        }
        ,
        r.removeEvent = function(t, e, i, n) {
            t.removeEventListener(e, i, !!n)
        }
        ,
        r.prefixPointerEvent = function(e) {
            return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
        }
        ,
        r.momentum = function(t, e, n, r, s, o) {
            var a, h, c = t - e, l = i.abs(c) / n;
            return o = void 0 === o ? 6e-4 : o,
            a = t + l * l / (2 * o) * (c < 0 ? -1 : 1),
            h = l / o,
            a < r ? (a = s ? r - s / 2.5 * (l / 8) : r,
            c = i.abs(a - t),
            h = c / l) : a > 0 && (a = s ? s / 2.5 * (l / 8) : 0,
            c = i.abs(t) + a,
            h = c / l),
            {
                destination: i.round(a),
                duration: h
            }
        }
        ;
        var a = n("transform");
        return r.extend(r, {
            hasTransform: a !== !1,
            hasPerspective: n("perspective")in s,
            hasTouch: "ontouchstart"in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: n("transition")in s
        }),
        r.isBadAndroid = function() {
            var e = t.navigator.appVersion;
            if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                var i = e.match(/Safari\/(\d+.\d)/);
                return !(i && "object" == typeof i && i.length >= 2) || parseFloat(i[1]) < 535.19
            }
            return !1
        }(),
        r.extend(r.style = {}, {
            transform: a,
            transitionTimingFunction: n("transitionTimingFunction"),
            transitionDuration: n("transitionDuration"),
            transitionDelay: n("transitionDelay"),
            transformOrigin: n("transformOrigin")
        }),
        r.hasClass = function(t, e) {
            var i = new RegExp("(^|\\s)" + e + "(\\s|$)");
            return i.test(t.className)
        }
        ,
        r.addClass = function(t, e) {
            if (!r.hasClass(t, e)) {
                var i = t.className.split(" ");
                i.push(e),
                t.className = i.join(" ")
            }
        }
        ,
        r.removeClass = function(t, e) {
            if (r.hasClass(t, e)) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)","g");
                t.className = t.className.replace(i, " ")
            }
        }
        ,
        r.offset = function(t) {
            for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent; )
                e -= t.offsetLeft,
                i -= t.offsetTop;
            return {
                left: e,
                top: i
            }
        }
        ,
        r.preventDefaultException = function(t, e) {
            for (var i in e)
                if (e[i].test(t[i]))
                    return !0;
            return !1
        }
        ,
        r.extend(r.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }),
        r.extend(r.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                    return i.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                    var e = 4;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(t) {
                    var e = .22
                      , n = .4;
                    return 0 === t ? 0 : 1 == t ? 1 : n * i.pow(2, -10 * t) * i.sin((t - e / 4) * (2 * i.PI) / e) + 1
                }
            }
        }),
        r.tap = function(t, i) {
            var n = e.createEvent("Event");
            n.initEvent(i, !0, !0),
            n.pageX = t.pageX,
            n.pageY = t.pageY,
            t.target.dispatchEvent(n)
        }
        ,
        r.click = function(t) {
            var i, n = t.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (i = e.createEvent("MouseEvents"),
            i.initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null),
            i._constructed = !0,
            n.dispatchEvent(i))
        }
        ,
        r
    }();
    n.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents()
        },
        destroy: function() {
            this._initEvents(!0),
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = null,
            this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(),
            this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1,
            this._execEvent("scrollEnd")))
        },
        _start: function(t) {
            if (1 != s.eventType[t.type]) {
                var e;
                if (e = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2,
                0 !== e)
                    return
            }
            if (this.enabled && (!this.initiated || s.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || s.isBadAndroid || s.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var n, r = t.touches ? t.touches[0] : t;
                this.initiated = s.eventType[t.type],
                this.moved = !1,
                this.distX = 0,
                this.distY = 0,
                this.directionX = 0,
                this.directionY = 0,
                this.directionLocked = 0,
                this.startTime = s.getTime(),
                this.options.useTransition && this.isInTransition ? (this._transitionTime(),
                this.isInTransition = !1,
                n = this.getComputedPosition(),
                this._translate(i.round(n.x), i.round(n.y)),
                this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1,
                this._execEvent("scrollEnd")),
                this.startX = this.x,
                this.startY = this.y,
                this.absStartX = this.x,
                this.absStartY = this.y,
                this.pointX = r.pageX,
                this.pointY = r.pageY,
                this._execEvent("beforeScrollStart")
            }
        },
        _move: function(t) {
            if (this.enabled && s.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, n, r, o, a = t.touches ? t.touches[0] : t, h = a.pageX - this.pointX, c = a.pageY - this.pointY, l = s.getTime();
                if (this.pointX = a.pageX,
                this.pointY = a.pageY,
                this.distX += h,
                this.distY += c,
                r = i.abs(this.distX),
                o = i.abs(this.distY),
                !(l - this.endTime > 300 && r < 10 && o < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (r > o + this.options.directionLockThreshold ? this.directionLocked = "h" : o >= r + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"),
                    "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        c = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough)
                            t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough)
                            return void (this.initiated = !1);
                        h = 0
                    }
                    h = this.hasHorizontalScroll ? h : 0,
                    c = this.hasVerticalScroll ? c : 0,
                    e = this.x + h,
                    n = this.y + c,
                    (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + h / 3 : e > 0 ? 0 : this.maxScrollX),
                    (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : n > 0 ? 0 : this.maxScrollY),
                    this.directionX = h > 0 ? -1 : h < 0 ? 1 : 0,
                    this.directionY = c > 0 ? -1 : c < 0 ? 1 : 0,
                    this.moved || this._execEvent("scrollStart"),
                    this.moved = !0,
                    this._translate(e, n),
                    l - this.startTime > 300 && (this.startTime = l,
                    this.startX = this.x,
                    this.startY = this.y)
                }
            }
        },
        _end: function(t) {
            if (this.enabled && s.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !s.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                var e, n, r = (t.changedTouches ? t.changedTouches[0] : t,
                s.getTime() - this.startTime), o = i.round(this.x), a = i.round(this.y), h = i.abs(o - this.startX), c = i.abs(a - this.startY), l = 0, u = "";
                if (this.isInTransition = 0,
                this.initiated = 0,
                this.endTime = s.getTime(),
                !this.resetPosition(this.options.bounceTime))
                    return this.scrollTo(o, a),
                    this.moved ? this._events.flick && r < 200 && h < 100 && c < 100 ? void this._execEvent("flick") : (this.options.momentum && r < 300 && (e = this.hasHorizontalScroll ? s.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: o,
                        duration: 0
                    },
                    n = this.hasVerticalScroll ? s.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: a,
                        duration: 0
                    },
                    o = e.destination,
                    a = n.destination,
                    l = i.max(e.duration, n.duration),
                    this.isInTransition = 1),
                    o != this.x || a != this.y ? ((o > 0 || o < this.maxScrollX || a > 0 || a < this.maxScrollY) && (u = s.ease.quadratic),
                    void this.scrollTo(o, a, l, u)) : void this._execEvent("scrollEnd")) : (this.options.tap && s.tap(t, this.options.tap),
                    this.options.click && s.click(t),
                    void this._execEvent("scrollCancel"))
            }
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout),
            this.resizeTimeout = setTimeout(function() {
                t.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(t) {
            var e = this.x
              , i = this.y;
            return t = t || 0,
            !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX),
            !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY),
            (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing),
            !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth,
            this.wrapperHeight = this.wrapper.clientHeight,
            this.scrollerWidth = this.scroller.offsetWidth,
            this.scrollerHeight = this.scroller.offsetHeight,
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth,
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight,
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0,
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0,
            this.hasHorizontalScroll || (this.maxScrollX = 0,
            this.scrollerWidth = this.wrapperWidth),
            this.hasVerticalScroll || (this.maxScrollY = 0,
            this.scrollerHeight = this.wrapperHeight),
            this.endTime = 0,
            this.directionX = 0,
            this.directionY = 0,
            this.wrapperOffset = s.offset(this.wrapper),
            this._execEvent("refresh"),
            this.resetPosition()
        },
        on: function(t, e) {
            this._events[t] || (this._events[t] = []),
            this._events[t].push(e)
        },
        off: function(t, e) {
            if (this._events[t]) {
                var i = this._events[t].indexOf(e);
                i > -1 && this._events[t].splice(i, 1)
            }
        },
        _execEvent: function(t) {
            if (this._events[t]) {
                var e = 0
                  , i = this._events[t].length;
                if (i)
                    for (; e < i; e++)
                        this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(t, e, i, n) {
            t = this.x + t,
            e = this.y + e,
            i = i || 0,
            this.scrollTo(t, e, i, n)
        },
        scrollTo: function(t, e, i, n) {
            n = n || s.ease.circular,
            this.isInTransition = this.options.useTransition && i > 0;
            var r = this.options.useTransition && n.style;
            !i || r ? (r && (this._transitionTimingFunction(n.style),
            this._transitionTime(i)),
            this._translate(t, e)) : this._animate(t, e, i, n.fn)
        },
        scrollToElement: function(t, e, n, r, o) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var a = s.offset(t);
                a.left -= this.wrapperOffset.left,
                a.top -= this.wrapperOffset.top,
                n === !0 && (n = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                r === !0 && (r = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                a.left -= n || 0,
                a.top -= r || 0,
                a.left = a.left > 0 ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left,
                a.top = a.top > 0 ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top,
                e = void 0 === e || null === e || "auto" === e ? i.max(i.abs(this.x - a.left), i.abs(this.y - a.top)) : e,
                this.scrollTo(a.left, a.top, e, o)
            }
        },
        _transitionTime: function(t) {
            t = t || 0;
            var e = s.style.transitionDuration;
            if (this.scrollerStyle[e] = t + "ms",
            !t && s.isBadAndroid) {
                this.scrollerStyle[e] = "0.0001ms";
                var i = this;
                r(function() {
                    "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                })
            }
        },
        _transitionTimingFunction: function(t) {
            this.scrollerStyle[s.style.transitionTimingFunction] = t
        },
        _translate: function(t, e) {
            this.options.useTransform ? this.scrollerStyle[s.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = i.round(t),
            e = i.round(e),
            this.scrollerStyle.left = t + "px",
            this.scrollerStyle.top = e + "px"),
            this.x = t,
            this.y = e
        },
        _initEvents: function(e) {
            var i = e ? s.removeEvent : s.addEvent
              , n = this.options.bindToWrapper ? this.wrapper : t;
            i(t, "orientationchange", this),
            i(t, "resize", this),
            this.options.click && i(this.wrapper, "click", this, !0),
            this.options.disableMouse || (i(this.wrapper, "mousedown", this),
            i(n, "mousemove", this),
            i(n, "mousecancel", this),
            i(n, "mouseup", this)),
            s.hasPointer && !this.options.disablePointer && (i(this.wrapper, s.prefixPointerEvent("pointerdown"), this),
            i(n, s.prefixPointerEvent("pointermove"), this),
            i(n, s.prefixPointerEvent("pointercancel"), this),
            i(n, s.prefixPointerEvent("pointerup"), this)),
            s.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this),
            i(n, "touchmove", this),
            i(n, "touchcancel", this),
            i(n, "touchend", this)),
            i(this.scroller, "transitionend", this),
            i(this.scroller, "webkitTransitionEnd", this),
            i(this.scroller, "oTransitionEnd", this),
            i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var e, i, n = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (n = n[s.style.transform].split(")")[0].split(", "),
            e = +(n[12] || n[4]),
            i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""),
            i = +n.top.replace(/[^-\d.]/g, "")),
            {
                x: e,
                y: i
            }
        },
        _animate: function(t, e, i, n) {
            function o() {
                var f, d, p, g = s.getTime();
                return g >= u ? (a.isAnimating = !1,
                a._translate(t, e),
                void (a.resetPosition(a.options.bounceTime) || a._execEvent("scrollEnd"))) : (g = (g - l) / i,
                p = n(g),
                f = (t - h) * p + h,
                d = (e - c) * p + c,
                a._translate(f, d),
                void (a.isAnimating && r(o)))
            }
            var a = this
              , h = this.x
              , c = this.y
              , l = s.getTime()
              , u = l + i;
            this.isAnimating = !0,
            o()
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                this.enabled && !t._constructed && (t.preventDefault(),
                t.stopPropagation())
            }
        }
    },
    n.utils = s,
    "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
        return n
    }) : t.IScroll = n
}(window, document, Math),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0
              , r = i[n];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; r; ) {
                var o = s && s[r];
                o && (this.off(t, r),
                delete s[r]),
                r.apply(this, e),
                n += o ? 0 : 1,
                r = i[n]
            }
            return this
        }
    }
    ,
    e.allOff = e.removeAllListeners = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        var e = [];
        if (Array.isArray(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    function r(t, e, s) {
        return this instanceof r ? ("string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = n(t),
        this.options = i({}, this.options),
        "function" == typeof e ? s = e : i(this.options, e),
        s && this.on("always", s),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new r(t,e,s)
    }
    function s(t) {
        this.img = t
    }
    function o(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = t.jQuery
      , h = t.console;
    r.prototype = Object.create(e.prototype),
    r.prototype.options = {},
    r.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    r.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var r = i[n];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var s = t.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var o = s[n];
                    this.addElementBackgroundImages(o)
                }
            }
        }
    }
    ;
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var r = n && n[2];
                r && this.addBackground(r, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    r.prototype.addImage = function(t) {
        var e = new s(t);
        this.images.push(e)
    }
    ,
    r.prototype.addBackground = function(t, e) {
        var i = new o(t,e);
        this.images.push(i)
    }
    ,
    r.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }
    ,
    r.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && h && h.log("progress: " + i, t, e)
    }
    ,
    r.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    s.prototype = Object.create(e.prototype),
    s.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    s.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    s.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    s.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    o.prototype = Object.create(s.prototype),
    o.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    o.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    o.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    r.makeJQueryPlugin = function(e) {
        e = e || t.jQuery,
        e && (a = e,
        a.fn.imagesLoaded = function(t, e) {
            var i = new r(this,t,e);
            return i.jqDeferred.promise(a(this))
        }
        )
    }
    ,
    r.makeJQueryPlugin(),
    r
});
var myScroll = new IScroll("#mobile_image_container",{
    click: !0
});
var copiedObjects = [], _clipboard, container_default_width, container_default_height, rect_default_width, rect_default_height, triangle_min_left, triangle_min_top;
isCanvasSupported() || layer.open({
    content: "您的浏览器版本过低，暂时不支持新版斗图制图器。",
    btn: ["确定"]
});
$("#add-text, #magic").on("change", "select", function(t) {
    t.preventDefault();
    var e = canvas.getActiveObject();
    e && "i-text" === e.get("type") && (e.set("fontFamily", $(this).val()),
    canvas.renderAll())
});
var font_string, os = checkPlatform();
for (var index in font_list[os]) {
    var font = font_list[os][index];
    font_string += '<option value="' + font.family + '">' + font.name + "</option>"
}
$("#add-text select").html(font_string);
var line_weight = $("#free_draw div[class=dot]")[0]
  , line_weight_x = new Hammer(line_weight)
  , line_bar_width = $("#free_draw .dot-bg").width()
  , init_percent = .15
  , line_weight_x_position = line_bar_width * init_percent;
line_weight_x.on("panmove", function(t) {
    var e = parseInt((line_weight_x_position + t.deltaX) / line_bar_width * 100);
    e < 2 && (e = 2),
    e > 90 && (e = 90),
    line_weight.style.left = e + "%",
    init_percent = e,
    canvas.isDrawingMode && (canvas.freeDrawingBrush.width = parseInt(e / 100 * 60))
}),
line_weight_x.on("panend", function(t) {
    line_weight_x_position += t.deltaX,
    line_weight_x_position > .9 * line_bar_width && (line_weight_x_position = .9 * line_bar_width),
    line_weight_x_position < .02 * line_bar_width && (line_weight_x_position = .02 * line_bar_width),
    last_delta_x = 0
}),
$(".toolbar").on("click", "div", function() {
    if ($(this).hasClass("select") && ($(this).hasClass("active") || (switchIt("drag_mode", "on"),
    switchIt("free_draw", "off"),
    switchIt("add_text", "off"),
    canvas.discardActiveObject(),
    canvas.renderAll(),
    record("制作器", "拖动按钮"))),
    $(this).hasClass("delete")) {
        var t = canvas.getActiveObjects();
        t && t.forEach(function(t) {
            "triangle" !== t.type && canvas.remove(t)
        }),
        canvas.discardActiveObject(),
        record("制作器", "删除按钮"),
        canvas.renderAll()
    }
    if ($(this).hasClass("rewards")) {
        var t = canvas.getActiveObjects();
        t && t.forEach(function(t) {
            "triangle" !== t.type && t.set("flipX", !t.flipX)
        }),
        canvas.renderAll(),
        record("制作器", "左右翻转")
    }
    if ($(this).hasClass("forwards")) {
        var t = canvas.getActiveObjects();
        t && t.forEach(function(t) {
            "triangle" !== t.type && t.set("flipY", !t.flipY)
        }),
        canvas.renderAll(),
        record("制作器", "上下翻转")
    }
    if (mobileCheck()) {
        if (($(this).hasClass("draw") || $(this).hasClass("font-size") || $(this).hasClass("type") || $(this).hasClass("select")) && ($(".select, .draw, .font-size, .type").toggle(),
        $("#magic").html($(this).html()),
        $("#magic").children("div").on("click", function(t) {
            t.stopPropagation()
        }),
        $("#magic").data("mode", $(this).data("mode"))),
        $(this).hasClass("draw") && ($(this).children("div").on("click", function(t) {
            t.stopPropagation()
        }),
        !$(this).hasClass("active"))) {
            switchIt("drag_mode", "off"),
            switchIt("add_text", "off"),
            switchIt("free_draw", "on");
            var e = $("#magic div[class=dot]")[0]
              , i = new Hammer(e)
              , n = $("#magic .dot-bg").width()
              , r = .15
              , s = n * r;
            canvas.freeDrawingBrush.width = parseInt(60 * r),
            canvas.freeDrawingBrush.color = $(".color-input").css("background-color"),
            i.on("panmove", function(t) {
                var i = parseInt((s + t.deltaX) / n * 100);
                i < 2 && (i = 2),
                i > 90 && (i = 90),
                e.style.left = i + "%",
                r = i,
                canvas.freeDrawingBrush.width = parseInt(i / 100 * 60)
            }),
            i.on("panend", function(t) {
                s += t.deltaX,
                s > .9 * n && (s = .9 * n),
                s < .02 * n && (s = .02 * n),
                last_delta_x = 0
            }),
            record("制作器", "画笔按钮")
        }
        $(this).hasClass("type") && (switchIt("free_draw", "off"),
        switchIt("add_text", "off"),
        switchIt("drag_mode", "on"),
        $("#slider-mobile").toggleClass("active"),
        $("#slider-mobile").hasClass("active") && $("#slider-mobile").focus(),
        record("制作器", "素材按钮")),
        $(this).hasClass("font-size") && ($(this).children("div").on("click", function(t) {
            t.stopPropagation()
        }),
        $(this).hasClass("active") || (switchIt("free_draw", "off"),
        switchIt("add_text", "on"),
        record("制作器", "加字按钮")))
    } else
        $(this).hasClass("draw") && ($(this).hasClass("active") || (switchIt("drag_mode", "off"),
        switchIt("add_text", "off"),
        switchIt("free_draw", "on"),
        r = .15,
        canvas.freeDrawingBrush.width = parseInt(60 * r),
        canvas.freeDrawingBrush.color = $(".color-input").css("background-color"),
        record("制作器", "画笔按钮")),
        $(this).children("div").on("click", function(t) {
            t.stopPropagation()
        })),
        $(this).hasClass("font-size") && ($(this).children("div").on("click", function(t) {
            t.stopPropagation()
        }),
        $(this).hasClass("active") || (switchIt("free_draw", "off"),
        switchIt("drag_mode", "off"),
        switchIt("add_text", "on"),
        record("制作器", "加字按钮"))),
        $(this).hasClass("type") && (switchIt("free_draw", "off"),
        switchIt("add_text", "off"),
        switchIt("drag_mode", "on"),
        $("#slider").toggleClass("active"),
        record("制作器", "素材按钮"))
}),
$("#slider-mobile").on("blur", function(t) {
    t.preventDefault(),
    $("#slider-mobile").hasClass("active") && $("#slider-mobile").toggleClass("active")
});
var image_drag_offset_x = 0
  , image_drag_offset_y = 0
  , canvas_pan_x = 0
  , canvas_pan_y = 0;
if ($("#image_container").on("dragstart", "img", function(t) {
    switchIt("free_draw", "off"),
    switchIt("add_text", "off"),
    switchIt("drag_mode", "on"),
    image_drag_offset_x = t.originalEvent.pageX - $(this).offset().left,
    image_drag_offset_y = t.originalEvent.pageY - $(this).offset().top,
    $(this).siblings().removeClass("img_dragging"),
    $(this).siblings().removeClass("is_drag"),
    $(this).addClass("is_drag"),
    $(this).addClass("img_dragging")
}),
$("#image_container").on("dragend", "img", function(t) {}),
$("#maker_container").on("dragenter", function(t) {}),
$("#maker_container").on("dragover", function(t) {
    return t.preventDefault && t.preventDefault(),
    t.originalEvent.dataTransfer.dropEffect = "copy",
    !1
}),
$("#maker_container").on("dragleave", function(t) {}),
$("#maker_container").on("drop", function(t) {
    t.stopPropagation && t.stopPropagation();
    var e = document.querySelector("#image_container img.img_dragging")
      , i = new Image;
    return i.src = e.src,
    i.onload = function() {
        var e = new fabric.Image(i);
        e.scale(200 / i.width).set({
            angle: 0,
            left: t.originalEvent.offsetX - image_drag_offset_x + canvas_pan_x,
            top: t.originalEvent.offsetY - image_drag_offset_y - canvas_pan_y
        }),
        canvas.add(e),
        e.setCoords()
    }
    ,
    $("#image_container img").removeClass("img_dragging"),
    $("#image_container img").removeClass("is_drag"),
    !1
}),
mobileCheck()) {
    var canvas = new fabric.Canvas("canvas",{
        width: $(document).width(),
        height: $(document).height(),
        backgroundColor: "#eeeeee",
        preserveObjectStacking: !0
    });
    container_default_width = $("#maker_container").width(),
    container_default_height = $("#maker_container").height(),
    rect_default_width = container_default_width - 10,
    rect_default_height = container_default_height - 250;
    var rect = new fabric.Rect({
        width: rect_default_width,
        height: rect_default_height,
        fill: "#fff",
        top: 10,
        left: ($("#maker_container").width() - rect_default_width) / 2,
        hasControls: !1,
        selectable: !1,
        hoverCursor: "default"
    })

    var triangle = new fabric.Triangle({
        hasBorders: !1,
        hasControls: !1,
        selectable: !1,
        top: rect.get("top") + rect_default_height - 17,
        left: rect.get("left") + rect_default_width + 19,
        width: 50,
        height: 25,
        fill: "#bbbbbb",
        angle: 135,
        hoverCursor: "nw-resize"
    })
      , current_triangle_left = triangle.get("left")
      , current_triangle_top = triangle.get("top");
    triangle.on("moving", function(t) {
        var e = rect_default_width + (triangle.get("left") - current_triangle_left)
          , i = rect_default_height + (triangle.get("top") - current_triangle_top);
        triangle_min_left = 200 - rect_default_width + current_triangle_left,
        triangle_min_top = 200 - rect_default_height + current_triangle_top,
        e < 200 && (e = 200,
        triangle.set({
            left: triangle_min_left
        })),
        i < 200 && (i = 200,
        triangle.set({
            top: triangle_min_top
        })),
        rect.set({
            width: e,
            height: i
        });
        canvas.requestRenderAll()
    })
} else {
    container_default_width = $("#maker_container").width(),
    container_default_height = $("#maker_container").height(),
    rect_default_width = 400,
    rect_default_height = 500;
    var canvas = new fabric.Canvas("canvas",{
        width: $(document).width(),
        height: $(document).height(),
        backgroundColor: "#eeeeee",
        preserveObjectStacking: !0
    })
      , rect = new fabric.Rect({
        width: rect_default_width,
        height: rect_default_height,
        fill: "#fff",
        top: ($("#maker_container").height() - rect_default_height) / 2,
        left: ($("#maker_container").width() - rect_default_width) / 2,
        hasControls: !1,
        selectable: !1,
        hoverCursor: "default"
    });

    // 原先遮罩方法
    var triangle = new fabric.Triangle({
        hasBorders: !1,
        hasControls: !1,
        selectable: !1,
        top: rect.get("top") + rect_default_height - 17,
        left: rect.get("left") + rect_default_width + 19,
        width: 50,
        height: 25,
        fill: "#bbbbbb",
        angle: 135,
        hoverCursor: "nw-resize"
    });
    var current_triangle_left = triangle.get("left")
      , current_triangle_top = triangle.get("top");
    triangle.on("moving", function(t) {
        var e = rect_default_width + (triangle.get("left") - current_triangle_left)
          , i = rect_default_height + (triangle.get("top") - current_triangle_top);
        triangle_min_left = 200 - rect_default_width + current_triangle_left,
        triangle_min_top = 200 - rect_default_height + current_triangle_top,
        e < 200 && (e = 200,
        triangle.set({
            left: triangle_min_left
        })),
        i < 200 && (i = 200,
        triangle.set({
            top: triangle_min_top
        })).setCoords(),
        rect.set({
            width: e,
            height: i
        }).setCoords();
    });
}
canvas.add(rect),
canvas.add(triangle),
canvas.on("mouse:down", function(t) {
    t.target && t.target === triangle && triangle.set("fill", "red")
}),
canvas.on("mouse:up", function(t) {
    t.target && t.target === triangle && triangle.set("fill", "gray")
}),
canvas.on("mouse:over", function(t) {
    t.target && t.target === triangle && (triangle.selectable = !0)
}),
canvas.on("mouse:out", function(t) {
    t.target && t.target === triangle && (triangle.selectable = !1)
}),
canvas.on("object:selected", function(t) {
    mobileCheck() && (t.target.cornerSize = 20,
    t.target && t.target !== triangle && ($("#delete_selected").show(),
    $(".layer_control").show()))
}),
canvas.on("selection:cleared", function(t) {
    mobileCheck() && ($("#delete_selected").hide(),
    $(".layer_control").hide())
}),
canvas.on("object:added", function(t) {
    canvas.bringToFront(triangle)
});

/* 自定义滚动条 */
var handle_x = $(".handle-x")[0]
  , scroll_bar_x = new Hammer($(".handle-x")[0])
  , scroll_bar_x_position = ($(".scroll-bar-x").width() - $(".handle-x").width()) / 2
  , scroll_bar_x_init = ["translateX(" + scroll_bar_x_position + "px)"].join(" ")
  , last_delta_x = 0;
handle_x.style.webkitTransform = scroll_bar_x_init,
handle_x.style.mozTransform = scroll_bar_x_init,
handle_x.style.transform = scroll_bar_x_init,
scroll_bar_x.on("panmove", function(t) {
    var e = scroll_bar_x_position + t.deltaX;
    e < 0 && (e = 0),
    e > $(".scroll-bar-x").width() - 80 && (e = $(".scroll-bar-x").width() - 80);
    var i = ["translateX(" + e + "px)", "scale(1, 1)", "rotate(0deg)"].join(" ");
    handle_x.style.webkitTransform = i,
    handle_x.style.mozTransform = i,
    handle_x.style.transform = i;
    if (e > 0 && e < $(".scroll-bar-x").width() - 80) {
        canvas.relativePan(new fabric.Point(-(t.deltaX - last_delta_x) / 2,0));
        last_delta_x = t.deltaX
    }
}),
scroll_bar_x.on("panend", function(t) {
    t.deltaX < 0 ? scroll_bar_x_position >= Math.abs(t.deltaX) ? (canvas_pan_x += t.deltaX / 2,
    scroll_bar_x_position += t.deltaX) : (t.deltaX = -scroll_bar_x_position,
    canvas_pan_x += t.deltaX / 2,
    scroll_bar_x_position = 0) : scroll_bar_x_position + t.deltaX >= $(".scroll-bar-x").width() - 80 ? (t.deltaX = $(".scroll-bar-x").width() - 80 - scroll_bar_x_position,
    canvas_pan_x += t.deltaX / 2,
    scroll_bar_x_position = $(".scroll-bar-x").width() - 80) : (canvas_pan_x += t.deltaX / 2,
    scroll_bar_x_position += t.deltaX),
    last_delta_x = 0
});
var handle_y = $(".handle-y")[0]
  , scroll_bar_y = new Hammer($(".handle-y")[0]);
scroll_bar_y.get("pan").set({
    direction: Hammer.DIRECTION_ALL
});
var scroll_bar_y_position = ($(".scroll-bar-y").height() - $(".handle-y").height()) / 2
  , scroll_bar_y_init = ["translateY(" + scroll_bar_y_position + "px)"].join(" ")
  , last_delta_y = 0;
handle_y.style.webkitTransform = scroll_bar_y_init,
handle_y.style.mozTransform = scroll_bar_y_init,
handle_y.style.transform = scroll_bar_y_init,
scroll_bar_y.on("panstart panmove", function(t) {
    var e = scroll_bar_y_position + t.deltaY;
    e < 0 && (e = 0),
    e > $(".scroll-bar-y").height() - 80 - 64 && (e = $(".scroll-bar-y").height() - 80 - 64);
    var i = ["translateY(" + e + "px)", "scale(1, 1)", "rotate(0deg)"].join(" ");
    handle_y.style.webkitTransform = i,
    handle_y.style.mozTransform = i,
    handle_y.style.transform = i,
    e > 0
    && e < $(".scroll-bar-y").height() - 80 - 64;
    // var obj =
    // &&(canvas.relativePan(new fabric.Point(0,-(t.deltaY - last_delta_y) / 2)), last_delta_y = t.deltaY);
}),
scroll_bar_y.on("panend", function(t) {
    t.deltaY < 0 ? scroll_bar_y_position >= Math.abs(t.deltaY) ? (canvas_pan_y -= t.deltaY / 2,
    scroll_bar_y_position += t.deltaY) : (t.deltaY = -scroll_bar_y_position,
    canvas_pan_y -= t.deltaY / 2,
    scroll_bar_y_position = 0) : scroll_bar_y_position + t.deltaY >= $(".scroll-bar-y").height() - 80 - 64 ? (t.deltaY = $(".scroll-bar-y").height() - 80 - 64 - scroll_bar_y_position,
    canvas_pan_y -= t.deltaY / 2,
    scroll_bar_y_position = $(".scroll-bar-y").height() - 80 - 64) : (canvas_pan_y -= t.deltaY / 2,
    scroll_bar_y_position += t.deltaY),
    last_delta_y = 0
}),
$("#generate_picture").on("click", function(t) {
    t.preventDefault();
    var e, i, n, r;
    switchIt("drag_mode", "on"),
    switchIt("free_draw", "off"),
    switchIt("add_text", "off"),
    canvas.clone(function(t) {
        var s = 9
          , o = t.getObjects();
        if (o.length > 2) {
            o.forEach(function(s) {
                if ("triangle" === s.type && (flag = t.remove(s)),
                "rect" === s.type) {
                    var o = s.getBoundingRect();
                    e = o.left,
                    i = o.top,
                    n = s.get("width"),
                    r = s.get("height")
                }
            });
            var params = {
                format: "image/png",
                multiplier: 1,
                left: e + 1,
                top: i + 1,
                width: n - 1,
                height: r - 1,
                crossOrigin: 'anonymous'
            }

            var a = t.toDataURL(params)
            var h = '<img id="maker_output" style="width:' + (n - 100) + 'px;" src="' + a + '" />';
            layer.open({
                content: h + '<div class="progress" style="height: 4px;margin-top: 30px;">  <div id="output_quality" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 20%;">  </div></div><div>提示：手机长按保存，电脑右键复制。</div>',
                btn: ["渣图"],
                yes: function(t) {
                    // s >= 1 && $.post("/maker/fuzzy", {
                    //     img: a,
                    //     _token: $("#csrf_token").val(),
                    //     quality: s
                    // }, function(t) {
                    //     1 === t.status ? ($("#maker_output").attr("src", t.img),
                    //     s -= 3,
                    //     $("#output_quality").css("width", 10 * (11 - s) + "%")) : layer.open({
                    //         style: "width:300px",
                    //         content: "变渣失败",
                    //         btn: ["确定"]
                    //     })
                    // }, "json"),
                    record("制作器", "变渣")
                }
            })
        } else
            layer.open({
                style: "width:300px",
                content: "请在画布上加点东西吧",
                btn: ["确定"]
            })
    }),
    record("制作器", "生成按钮")
}),
$(".layer_control").on("click", function(t) {
    t.preventDefault();
    var e = $(this).data("control")
      , i = canvas.getActiveObject();
    i && ("up" === e && (canvas._objects.indexOf(i) < canvas._objects.length - 2 && canvas.bringForward(i, 1),
    record("制作器", "图层向上")),
    "down" === e && (canvas._objects.indexOf(i) > 1 && canvas.sendBackwards(i, 1),
    record("制作器", "图层向下")))
}),
$("#maker_container").on("mousewheel", function(t) {
    t.preventDefault();
    var e = scroll_bar_y_position
      , i = scroll_bar_x_position;
    if (Math.abs(t.deltaX) > scroll_bar_x_position && scroll_bar_x_position > 0 && (t.deltaX = Math.sign(t.deltaX) * scroll_bar_x_position),
    Math.abs(t.deltaY) > scroll_bar_y_position && scroll_bar_y_position > 0 && (t.deltaY = Math.sign(t.deltaY) * scroll_bar_y_position),
    scroll_bar_y_position -= t.deltaY,
    scroll_bar_x_position += t.deltaX,
    scroll_bar_y_position >= 0 && scroll_bar_y_position <= $(".scroll-bar-y").height() - 80 - 64 && scroll_bar_x_position >= 0 && scroll_bar_x_position <= $(".scroll-bar-x").width() - 80) {
        canvas_pan_y += t.deltaY / 2,
        canvas_pan_x += t.deltaX / 2,
        canvas.relativePan(new fabric.Point(-t.deltaX / 2,t.deltaY / 2));
        var n = ["translateY(" + scroll_bar_y_position + "px)"].join(" ");
        handle_y.style.webkitTransform = n,
        handle_y.style.mozTransform = n,
        handle_y.style.transform = n;
        var r = ["translateX(" + scroll_bar_x_position + "px)"].join(" ");
        handle_x.style.webkitTransform = r,
        handle_x.style.mozTransform = r,
        handle_x.style.transform = r
    } else
        scroll_bar_y_position = e,
        scroll_bar_x_position = i
});
var hueb = new Huebee(".color-input",{
    setBGColor: !0,
    saturations: 2,
    setText: !1
});
hueb.on("change", function(t, e, i, n) {
    if (canvas.isDrawingMode)
        canvas.freeDrawingBrush.color = $(".color-input").css("background-color");
    else {
        var r = canvas.getActiveObject();
        "i-text" === r.get("type") ? (r.setColor(t),
        canvas.renderAll()) : "path" === r.get("type") && (r.setStroke(t),
        canvas.renderAll())
    }
}),
$("#maker_container").on("click", function(t) {
    if ($("#add-text").hasClass("active")) {
        if (mobileCheck())
            var e = new fabric.IText("",{
                left: t.originalEvent.offsetX + canvas_pan_x,
                top: t.originalEvent.offsetY - canvas_pan_y,
                padding: 7
            });
        else
            var e = new fabric.IText("",{
                left: t.originalEvent.offsetX + canvas_pan_x,
                top: t.originalEvent.offsetY - canvas_pan_y,
                padding: 7,
                fontFamily: $("#add-text select option:selected").val()
            });
        canvas.add(e).setActiveObject(e),
        e.enterEditing(),
        e.on("editing:exited", function() {
            $("#add-text").removeClass("active"),
            switchIt("drag_mode", "on")
        })
    }
}),
$("#upload_image, #mobile_upload_image").on("change", function(t) {
    switchIt("free_draw", "off"),
    switchIt("add_text", "off");
    var e = new FileReader;
    e.onload = function(t) {
        var e = t.target.result.split(",")[0].split(":")[1].split(";")[0];
        if (e.match("image/.*")) {
            var i = rect.getBoundingRect()
              , n = i.left
              , r = i.top
              , s = i.width
              , o = i.height
              , a = new Image;
            a.src = t.target.result,
            a.onload = function() {
                var t = new fabric.Image(a);
                t.scale(200 / a.width).set({
                    angle: 0,
                    padding: 10,
                    cornersize: 10,
                    left: n + (s - 200) / 2,
                    top: r + (o - a.height * (200 / a.width)) / 2
                }),
                canvas.add(t),
                canvas.renderAll()
            }
        } else
            layer.open({
                content: "请选择图片文件",
                btn: ["确定"]
            })
    }
    ,
    e.readAsDataURL(t.target.files[0])
}),
$("html").keyup(function(t) {
    if (46 === t.keyCode) {
        t.preventDefault();
        var e = canvas.getActiveObjects();
        e && e.forEach(function(t) {
            "triangle" !== t.type && canvas.remove(t)
        }),
        canvas.discardActiveObject()
    }
}),
$(window).on("copy", function(t) {
    t.preventDefault(),
    canvas.getActiveObject().clone(function(t) {
        _clipboard = t
    })
}),
$(window).on("paste", function(t) {
    t.preventDefault(),
    _clipboard.clone(function(t) {
        canvas.discardActiveObject(),
        t.set({
            left: t.left + 10,
            top: t.top + 10,
            evented: !0
        }),
        "activeSelection" === t.type ? (t.canvas = canvas,
        t.forEachObject(function(t) {
            canvas.add(t)
        }),
        t.setCoords()) : canvas.add(t),
        _clipboard.top += 10,
        _clipboard.left += 10,
        canvas.setActiveObject(t),
        canvas.requestRenderAll()
    })
}),
$("#cate1_filter").on("click", "li", function(t) {
    t.preventDefault();
    var e = $(this).data("cate1");
    $(this).hasClass("active");
    $(".loading").show();
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var menu = window.item[e];
    var c = "";
    for (var i in menu) {
        c += '<a href="#" data-cate2="' + i + '">' + i + "</a>";
    };
    $("#cate2_filter").html(c);
    $("#cate2_filter a:first-child").addClass('active');
    c = '';
    var a = $("#cate2_filter .active").html();
    var img = menu[a]
    for (var j = 0, len = img.length; j < len; j++) {
        c += '<div class="grid-item"><img draggable="true" src="/resources/'+ e + '/' + a + "/" + img[j] + '"></div>';
    }
    $("#image_container").html(c)
    $(".loading").hide()
}),
$("#cate2_filter").on("click", "a", function(t) {
    $(".loading").show(),
    t.preventDefault();
    var e = $("#cate1_filter li[class=active]").data("cate1")
      , i = $(this).data("cate2");
    $(this).hasClass("active");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var img = window.item[e][i];
    var tpl = '';
    for (var v = 0,len = img.length; v < len; v++) {
        tpl += '<div class="grid-item"><img draggable="true" src="/resources/' + e + '/' + i + '/' + img[v] +'"></div>'
    }
    $("#image_container").html(tpl);
    $(".loading").hide();
}),
$("#mobile_cate2_filter").on("click", "li", function(t) {
    t.preventDefault();
    var e = $(this).data("category").split("|")
      , i = e[0]
      , n = e[1];
    $(this).hasClass("active");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    var e = '';
    var arr = window.item[i][n];
    for (var k = 0,len = arr.length; k < len; k++ ) {
        e += '<div class="grid-item"><img draggable="true" src="/resources/' + i + '/' + n + '/' + arr[k] + '"></div>';
    }
    $("#mobile_image_container div").html(e),
    $("#mobile_image_container").imagesLoaded(function() {
        setTimeout(function() {
            myScroll.refresh()
        }, 500)
    })
}),
$("#mobile_image_container, #image_container").on("click", "img", function(t) {
    if (t.preventDefault(),
    $(this).hasClass("is_drag"))
        $(this).removeClass("is_drag");
    else {
        var e = rect.getBoundingRect()
          , i = e.left
          , n = e.top
          , r = e.width
          , s = e.height
          , o = new Image;
        o.src = this.src;
        // o.src = "./a1.png"
        o.onload = function() {
            var t = new fabric.Image(o);
            t.scale(200 / o.width).set({
                angle: 0,
                padding: 10,
                cornersize: 10,
                left: i + (r - 200) / 2,
                top: n + (s - o.height * (200 / o.width)) / 2
            });
            canvas.add(t);
            t.setCoords();
        }
    }
}),
$("#magic").on("click", function(t) {
    t.preventDefault(),
    $(".select, .draw, .font-size, .type").toggle()
});
$(".loading").show();

// 初始化数据
function init () {
    var name = $('#cate1_filter .active').data("cate1");
    var two = window.item[name];
    var tpl = ''
    for (var i in two) {
        tpl += '<a href="#" data-cate2="' + i + '">' + i + "</a>";
    }
    $('#cate2_filter').html(tpl);
    var n = $('#cate2_filter a:first-child').addClass('active').data("cate2");
    var t = two[n];
    var html = ''
    for (var v = 0, len = t.length; v < len; v++) {
        html += '<div class="grid-item"><img draggable="true" src="/resources/'+ name + '/' + n + "/" + t[v] + '"></div>';
    }
    $('#image_container').html(html);
    $(".loading").hide();
}
function initMobile () {
    var t = ''
    for (var key in window.item) {
        var menu = window.item[key];
        for (var key2 in menu) {
            t += '<li data-category="' + key + '|' + key2 + '">' + key2 + '</li>'
        }
    }
    $('#mobile_two').html(t);
    var path = $('#mobile_two li:first-child').addClass('active').data("category");
    $("#mobile_cate2_filter").find(".scroll").each(function() {
        for (var t = $(this).find("li"), e = 100, i = 0; i < t.length; i++)
            e += parseInt($(t[i]).width()) + 10;
        $(this).width(e)
    })
    new IScroll("#mobile_cate2_filter",{
        eventPassthrough: !0,
        scrollX: !0,
        scrollY: !1,
        preventDefault: !1
    });
    var c = ''
    var p = path.split('|')
    var arr = window.item[p[0]][p[1]];
    for (var i = 0,len = arr.length; i < len; i++) {
        c += '<div class="grid-item"><img draggable="true" src="/resources/' + p[0] + '/' + p[1] + '/' + arr[i] + '"></div>'
    }
    $("#mobile_image_container div").html(c),
    $("#mobile_image_container").imagesLoaded(function() {
        setTimeout(function() {
            myScroll.refresh()
        }, 500)
    })
}
window.onload = function () {
    init()
    initMobile()
}

// pc 专属武器
if (!mobileCheck()) {
    window.key = ''
    document.addEventListener('keydown', function (e) {
        const el = document.activeElement
        const name = el.tagName.toLowerCase()
        if (name === 'textarea' || name === 'input') return
        var key = e.keyCode
        if (key === 32) {
            cont.style.display = 'block';
            window.key = 32
        }
        if (key === 8) {
            canvas.remove.apply(canvas, canvas.getActiveObjects())
        } else if (key === 27) {
            canvas.discardActiveObject()
            el.blur()
        }
    });
    document.addEventListener('keyup', function (e) {
        window.key = '';
        cont.style.display = 'none';
    });

    var mask = '<div id="event_mask" style="display: none;"></div>'
    document.body.insertAdjacentHTML('beforeend', mask);
    var cont = document.querySelector('#event_mask');
    var dw = ''
    var dh = ''
    var mt = 60
    var disX = ''
    var disY = ''
    cont.addEventListener('mousedown', function (e) {
        var w = rect.width
        var h = rect.height
        var cl = e.clientX
        var ct = e.clientY - mt
        var rl = rect.left
        var rt = rect.top
        var iw = rl + w
        var ih = rt + h
        // if (cl > rl && ct > rt && cl < iw && ct < ih) {
            dw = e.clientX - rect.left
            dh = ct - rect.top
            disX = cl
            disY = ct
            // 找到所有在方形内的对象
            var obj = canvas.getObjects()
            for (var i = 0,len = obj.length; i < len; i++) {
                var l = obj[i].left
                var t = obj[i].top
                if (obj[i] === triangle) {
                    obj[i]._left = l
                    obj[i]._top = t
                }
                if (l > rl && l < iw && t > rt && t < ih) {
                    obj[i]._left = l
                    obj[i]._top = t
                }
            }
        // }
        cont.classList.add('active')
    });
    cont.addEventListener('mousemove', function (e) {
        var w = rect.width
        var h = rect.height
        var cl = e.clientX
        var ct = e.clientY - mt
        var rl = rect.left
        var rt = rect.top
        var iw = rl + w
        var ih = rt + h
        // if (cl > rl && ct > rt && cl < iw && ct < ih) {
        //     cont.classList.add('active')
        // } else {
        //     cont.classList.remove('active')
        // }
        if (dw && dh) {
            var cl = e.clientX - dw
            var ct = e.clientY - mt - dh
            rect.set({ left: cl, top: ct }).setCoords()
            // 控制其他对象
            var obj = canvas.getObjects()
            for (var i = 0,len = obj.length; i < len; i++) {
                if (obj[i]._left) {
                    obj[i].set({
                        left: e.clientX - disX + obj[i]._left,
                        top: e.clientY - 60 - disY + obj[i]._top
                    }).setCoords()
                }
            }
            canvas.requestRenderAll()
        }
    });
    cont.addEventListener('mouseup', function (e) {
        current_triangle_left = triangle.get("left");
        current_triangle_top = triangle.get("top");
        dw = ''
        dh = ''
        cont.classList.remove('active')
        var obj = canvas.getObjects()
        for (var i = 0,len = obj.length; i < len; i++) {
            if (obj[i]._left) delete obj[i]._lef
        }
        rect_default_width = rect.width;
        rect_default_height = rect.height;
    });
}


// function priceFormat (mindecimal, v) {
//     return mindecimal ? (v / Math.pow(10, mindecimal) +0.001).toFixed(mindecimal) : parseInt(v);
// }
// function unPriceFormat (mindecimal, v) {
//     return mindecimal ? v*Math.pow(10,mindecimal) +0.001 : parseInt(v);
// }