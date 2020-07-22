module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1595341178383, function(require, module, exports) {
function t(r) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {return typeof t}
      : function(t) {return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t})(r)
}

function r(t, r) {
    return function(t) {if (Array.isArray(t)) return t}(t) || function(t, r) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [], o = !0, e = !1, u = void 0;
        try {for (var a, i = t[Symbol.iterator](); !(o = (a = i.next()).done) && (n.push(a.value), !r || n.length !== r); o = !0) ;} catch (t) {e = !0, u = t} finally {try {o || null == i.return || i.return()} finally {if (e) throw u}}
        return n
    }(t, r) || function(t, r) {
        if (!t) return;
        if ("string" == typeof t) return n(t, r);
        var o = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === o && t.constructor && (o = t.constructor.name);
        if ("Map" === o || "Set" === o) return Array.from(t);
        if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return n(t, r)
    }(t, r) || function() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()
}

function n(t, r) {
    (null == r || r > t.length) && (r = t.length);
    for (var n = 0, o = new Array(r); n < r; n++) o[n] = t[n];
    return o
}

function o(t) {return Array.isArray(t)}

function e(r) {return "object" === t(r) && null !== r && !o(r)}

var u = function t(r, n, u) {
    r.forEach((function(r, c) {
        if (r !== a) {
            var f = "".concat(n, "[").concat(c, "]");
            e(r) ? i(r, f + ".", u) : o(r) ? t(r, f, u) : u[f] = r
        }
    }))
}, a = Symbol("updata empty array item"), i = function t(n) {
    for (var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2]
      : {}, c = 0, f = Object.entries(n); c < f.length; c++) {
        var l = r(f[c], 2), y = l[0], b = l[1], m = "" === a ? y : a.endsWith("].") ? "".concat(a).concat(y) : "".concat(a, ".").concat(y);
        e(b) ? t(b, m, i) : o(b) ? u(b, m, i) : i[m] = b
    }
    return i
}, c = function(t, r) {
    var n = t;
    return function(t) {return t.upData = function(t, n) {return r.debug && console.log("转化后效果:", i(t)), this.setData(i(t), n)}, n(t)}
};
if (!exports.__esModule) Object.defineProperty(exports, "__esModule", { value: true });Object.defineProperty(exports, 'Empty', { enumerable: true, configurable: true, get: function() { return a; } });Object.defineProperty(exports, 'objToPath', { enumerable: true, configurable: true, get: function() { return i; } });Object.defineProperty(exports, 'updataInit', { enumerable: true, configurable: true, get: function() { return c; } });
//# sourceMappingURL=wx-updata.js.map

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1595341178383);
})()
//# sourceMappingURL=index.js.map