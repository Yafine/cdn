! function () {
    var e = document.getElementById("ribbon");
    if ("false" != e.getAttribute("mobile") || !/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)) {
        config = {
            z: h(e, "zIndex", -1),
            a: h(e, "alpha", .6),
            s: h(e, "size", 90),
            c: h(e, "data-click", !0)
        };
        var t, n, i = document.createElement("canvas"),
            o = i.getContext("2d"),
            c = window.devicePixelRatio || 1,
            a = window.innerWidth,
            l = window.innerHeight,
            d = config.s,
            r = Math,
            g = 0,
            f = 2 * r.PI,
            s = r.cos,
            u = r.random;
        i.width = a * c, i.height = l * c, o.scale(c, c), o.globalAlpha = config.a, i.style.cssText = "opacity: " +
            config.a + ";position:fixed;top:0;left:0;z-index: " + config.z +
            ";width:100%;height:100%;pointer-events:none;", document.getElementsByTagName("body")[0].appendChild(i),
            "false" !== config.c && (document.onclick = m, document.ontouchstart = m), m()
    }

    function h(e, t, n) {
        return !0 === n ? e.getAttribute(t) || n : Number(e.getAttribute(t)) || n
    }

    function m() {
        for (o.clearRect(0, 0, a, l), t = [{
                x: 0,
                y: .7 * l + d
            }, {
                x: 0,
                y: .7 * l - d
            }]; t[1].x < a + d;) x(t[0], t[1])
    }

    function x(e, i) {
        o.beginPath(), o.moveTo(e.x, e.y), o.lineTo(i.x, i.y);
        var c = i.x + (2 * u() - .25) * d,
            a = function e(t) {
                return (n = t + (2 * u() - 1.1) * d) > l || n < 0 ? e(t) : n
            }(i.y);
        o.lineTo(c, a), o.closePath(), g -= f / -50, o.fillStyle = "#" + (127 * s(g) + 128 << 16 | 127 * s(g + f / 3) +
            128 << 8 | 127 * s(g + f / 3 * 2) + 128).toString(16), o.fill(), t[0] = t[1], t[1] = {
            x: c,
            y: a
        }
    }
}();