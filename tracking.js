!function() {
    "use strict";
    function e(e, t) {
        return e + t
    }
    const {hasOwnProperty: t} = {};
    function n(e, n) {
        return t.call(n, e)
    }
    function i() {
        return (i = Object.assign || function(e) {
            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++)
                i[o - 1] = arguments[o];
            return i.forEach((t => {
                for (const i in t)
                    n(i, t) && (e[i] = t[i])
            }
            )),
            e
        }
        ).apply(void 0, arguments)
    }
    function o(e) {
        return Array.isArray(e)
    }
    function r(e) {
        return "object" == typeof e && null !== e && !o(e)
    }
    function a(e) {
        if ("keys"in Object && "function" == typeof Object.keys)
            return Object.keys(e);
        const t = [];
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t
    }
    function c(e, t) {
        return a(t).reduce(( (n, i) => (n[i] = e(t[i]),
        n)), {})
    }
    function s(e) {
        return o(e) ? e.map(s) : r(e) ? c(s, e) : e
    }
    function l(e) {
        return o(e) ? e.filter((e => null != e && !Number.isNaN(e))) : Object.keys(e).reduce(( (t, n) => {
            const i = e[n];
            return null == i || Number.isNaN(i) || (t[n] = i),
            t
        }
        ), {})
    }
    function d(e, t) {
        let n;
        return function() {
            clearTimeout(n);
            for (var i = arguments.length, o = Array(i), r = 0; i > r; r++)
                o[r] = arguments[r];
            n = setTimeout.apply(void 0, [t, e].concat(o))
        }
    }
    function u(e, t) {
        for (let n = 0; t.length > n; n++) {
            const i = t[n];
            if (e(i))
                return i
        }
    }
    function p(e, t) {
        for (let n = t.length - 1; n >= 0; n--)
            if (e(t[n]))
                return t[n]
    }
    function m(e) {
        return e
    }
    function h(e, t) {
        return a(t).forEach((n => {
            e(t[n], n)
        }
        ))
    }
    function f() {
        return Math.random().toString(36).substring(2)
    }
    function g(e) {
        const t = f();
        return n(t, e) ? g(e) : t
    }
    function v(e, t, n) {
        const i = function(e, t) {
            const n = "string" == typeof e ? e.split(".") : e;
            let i = 0
              , o = t;
            for (; o && n.length > i; )
                o = o[n[i++]];
            return o
        }(t, n);
        return null != i ? i : e
    }
    function _(e, t) {
        return -1 !== t.indexOf(e)
    }
    function w(e) {
        return 0 === (o(e) ? e : Object.keys(e)).length
    }
    function y(e) {
        return !e
    }
    function b(e) {
        return !!e
    }
    function k(e) {
        return e.length > 0 ? e[e.length - 1] : void 0
    }
    function C(e, t) {
        return a(t).reduce(( (n, i) => (Object.defineProperty(n, e(i), {
            value: t[i],
            enumerable: !0
        }),
        n)), {})
    }
    function E(e, t) {
        if (w(t))
            return e;
        const i = {};
        return h(( (a, c) => {
            if (n(c, t))
                if (r(e[c]) && r(t[c]))
                    i[c] = E(e[c], t[c]);
                else if (o(e[c]) && o(t[c])) {
                    const n = Math.max(e[c].length, t[c].length);
                    i[c] = Array(n);
                    for (let o = 0; n > o; o++)
                        o in t[c] ? i[c][o] = t[c][o] : o in e[c] && (i[c][o] = e[c][o])
                } else
                    i[c] = t[c];
            else
                i[c] = e[c]
        }
        ), e),
        h(( (e, o) => {
            n(o, i) || (i[o] = t[o])
        }
        ), t),
        i
    }
    function x(e) {
        if (0 === e.length)
            return {};
        const [t,...n] = e;
        return n.reduce(( (e, t) => E(e, t)), t)
    }
    function I(e) {
        return function(e, t) {
            const i = {};
            return function() {
                const o = e.apply(void 0, arguments);
                if (n(o, i))
                    return i[o];
                const r = t.apply(void 0, arguments);
                return i[o] = r,
                r
            }
        }(m, e)
    }
    function L() {}
    function A(e, t) {
        return e.reduce(( (e, n) => (e[n] = t[n],
        e)), {})
    }
    function T(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }
    function z(e, t) {
        if (T(e, t))
            return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1;
        const i = Object.keys(e);
        if (i.length !== Object.keys(t).length)
            return !1;
        for (let o = 0; i.length > o; o++)
            if (!n(i[o], t) || !T(e[i[o]], t[i[o]]))
                return !1;
        return !0
    }
    function P(t) {
        return t.reduce(e, 0)
    }
    function O(e) {
        return Array.prototype.slice.call(e)
    }
    function S(e) {
        return a(e).map((t => [t, e[t]]))
    }
    const M = ( () => {
        try {
            return !1
        } catch {
            return !1
        }
    }
    )()
      , D = "not_ready"
      , F = "ready"
      , N = "bootstrapped"
      , B = "eu-west3";
    var j = Object.freeze({
        __proto__: null,
        FRA_A: "fra-a",
        FRA_B: "fra-b",
        FRA: "fra",
        EU_WEST3: B,
        DAL: "dal"
    });
    const q = e => (e => {
        const t = "string" == typeof e ? parseInt(e, 10) : e;
        return (e => "number" == typeof e && e >= 0)(t) ? t : null
    }
    )(void 0 !== e.group ? e.group : e.skill);
    var H = "__test_storage_support__"
      , W = "@@test"
      , V = function(e) {
        void 0 === e && (e = "local");
        try {
            var t = "session" === e ? window.sessionStorage : window.localStorage;
            return t.setItem(H, W),
            t.getItem(H) !== W ? !1 : (t.removeItem(H),
            !0)
        } catch (e) {
            return !1
        }
    }
      , R = function() {
        var e = Object.create(null);
        return {
            getItem: function(t) {
                var n = e[t];
                return "string" == typeof n ? n : null
            },
            setItem: function(t, n) {
                e[t] = n
            },
            removeItem: function(t) {
                delete e[t]
            },
            clear: function() {
                e = Object.create(null)
            }
        }
    }();
    const G = e => S(e).map((e => e.map(encodeURIComponent).join("="))).join("&")
      , U = e => function(e) {
        return e.reduce(( (e, t) => {
            let[n,i] = t;
            return e[n] = i,
            e
        }
        ), {})
    }(e.split("&").filter(Boolean).map((e => e.split("=").map((e => decodeURIComponent(e.replace("+", "%20")))))).map((e => 2 === e.length ? e : [e[0], ""])))
      , Y = /(?:[^:]+:\/\/)?([^/\s]+)/;
    const J = /[^:]+:\/\/[^(/|?)\s]+/
      , K = e => {
        const t = e.match(J);
        return t && t[0]
    }
      , X = /.*?\?([^#]+)/
      , $ = e => {
        const t = e.match(X);
        return t ? "?" + t[1] : ""
    }
      , Z = e => e.replace(/^\?/, "")
      , Q = e => {
        if (null === K(e))
            return U(Z(e));
        const t = Z($(e));
        return t ? U(t) : {}
    }
      , ee = /^(?:https?:)?\/\/[^/]+\/([^?#]+)/
      , te = e => {
        const t = e.match(ee);
        return "/" + (t && t[1] || "")
    }
      , ne = e => e.replace(/\w/g, "$&[\\r\\n\\t]*")
      , ie = (RegExp("^[\0-]*(" + ne("javascript") + "|" + ne("data") + "):", "i"),
    /^((http(s)?:)?\/\/)/)
      , oe = /^((http(s)?:)?\/\/)/
      , re = e => {
        const t = e.match(oe);
        return t ? t[2] : null
    }
      , ae = (e, t) => {
        if (-1 === e.indexOf("?"))
            return e;
        const n = Q(e);
        if (w(n))
            return e;
        if (Object.keys(n).every((e => !t.includes(e))))
            return e;
        t.forEach((e => delete n[e]));
        const [i] = e.split("?")
          , o = ( (e, t) => {
            if (0 === Object.keys(t).length)
                return e;
            const n = K(e)
              , i = te(e)
              , o = $(e) ? Q(e) : {}
              , r = G({
                ...o,
                ...t
            });
            return e.indexOf("#") > -1 ? "" + n + i + "?" + r + "#" + e.split("#")[1] : "" + n + i + "?" + r
        }
        )(i, n);
        return e.indexOf("#") > -1 ? o + "#" + e.split("#")[1] : o
    }
      , ce = e => "https://" + (e => e.replace(ie, ""))(e)
      , se = "cw_configurator"
      , le = () => {
        return e = se,
        t = window.location.search,
        Q(t)[e] || V("session") && !!window.sessionStorage.getItem(se);
        var e, t
    }
    ;
    var de = e => (t, n) => {
        if (0 !== t)
            return;
        if ("function" != typeof e)
            return n(0, ( () => {}
            )),
            void n(2);
        let i, o = !1;
        n(0, (e => {
            o || (o = 2 === e,
            o && "function" == typeof i && i())
        }
        )),
        o || (i = e((e => {
            o || n(1, e)
        }
        ), (e => {
            o || void 0 === e || (o = !0,
            n(2, e))
        }
        ), ( () => {
            o || (o = !0,
            n(2))
        }
        )))
    }
    ;
    const ue = e => (t, n) => {
        if (0 !== t)
            return;
        let i, o;
        function r(e, t) {
            1 === e && (o || i)(1, t),
            2 === e && (o && o(2),
            i && i(2))
        }
        e(0, ( (e, t) => {
            if (0 === e)
                i = t,
                n(0, r);
            else if (1 === e) {
                const e = t;
                o && o(2),
                e(0, ( (e, t) => {
                    0 === e ? (o = t,
                    o(1)) : 1 === e ? n(1, t) : 2 === e && t ? (i && i(2),
                    n(2, t)) : 2 === e && (i ? (o = void 0,
                    i(1)) : n(2))
                }
                ))
            } else
                2 === e && t ? (o && o(2),
                n(2, t)) : 2 === e && (o ? i = void 0 : n(2))
        }
        ))
    }
    ;
    var pe = function(e, t) {
        return e === t
    };
    function me(e) {
        return void 0 === e && (e = pe),
        function(t) {
            return function(n, i) {
                if (0 === n) {
                    var o, r, a = !1;
                    t(0, (function(t, n) {
                        0 === t && (r = n),
                        1 === t ? a && e(o, n) ? r(1) : (a = !0,
                        o = n,
                        i(1, n)) : i(t, n)
                    }
                    ))
                }
            }
        }
    }
    var he = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o;
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(t, n)) : 1 === t ? e(n) ? i(t, n) : o(1) : i(t, n)
        }
        ))
    }
    ;
    var fe = e => t => {
        let n;
        t(0, ( (t, i) => {
            0 === t && (n = i),
            1 === t && e(i),
            1 !== t && 0 !== t || n(1)
        }
        ))
    }
    ;
    const ge = (e, t, n) => (i, o) => {
        if (0 !== i)
            return;
        let r = !1;
        const a = e => {
            o(1, e)
        }
        ;
        o(0, (i => {
            2 === i && (r = !0,
            e.removeEventListener(t, a, n))
        }
        )),
        r || e.addEventListener(t, a, n)
    }
    ;
    var ve = function() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        return (e, n) => {
            if (0 !== e)
                return;
            const i = t.length
              , o = Array(i);
            let r = 0
              , a = 0;
            const c = e => {
                if (0 !== e)
                    for (let t = 0; i > t; t++)
                        o[t] && o[t](e)
            }
            ;
            for (let e = 0; i > e; e++)
                t[e](0, ( (t, s) => {
                    0 === t ? (o[e] = s,
                    1 == ++r && n(0, c)) : 2 === t ? (o[e] = void 0,
                    ++a === i && n(2)) : n(t, s)
                }
                ))
        }
    };
    function _e(e, t) {
        return de((n => (e.on(t, n),
        () => {
            e.off(t, n)
        }
        )))
    }
    !function(e) {
        var t, n = e.Symbol;
        "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
        n.observable = t) : t = "@@observable"
    }("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")());
    var we = function() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        let i = t[0];
        for (let e = 1, n = t.length; n > e; e++)
            i = t[e](i);
        return i
    };
    var ye = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o;
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(0, ( (e, t) => {
                0 !== e && o(e, t)
            }
            )),
            i(1, e)) : i(t, n)
        }
        ))
    }
    ;
    var be = e => t => (n, i) => {
        0 === n && t(0, ( (t, n) => {
            i(t, 1 === t ? e(n) : n)
        }
        ))
    }
    ;
    function ke(e) {
        return t => ue(be(e)(t))
    }
    var Ce = function() {};
    function Ee(e, t) {
        0 === e && t(0, Ce)
    }
    function xe() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        return function(e, n) {
            if (0 === e) {
                var i = !1;
                for (n(0, (function(e) {
                    2 === e && (i = !0,
                    t.length = 0)
                }
                )); 0 !== t.length; )
                    n(1, t.shift());
                i || n(2)
            }
        }
    }
    function Ie(e) {
        return function(t, n) {
            if (0 === t) {
                var i, o, r, a = 0;
                e(0, (function(e, t) {
                    if (0 === e && (r = t),
                    1 === e) {
                        var c = [o, t];
                        i = c[0],
                        o = c[1],
                        2 > ++a ? r(1) : n(1, [i, o])
                    } else
                        n(e, t)
                }
                ))
            }
        }
    }
    var Le = function() {}
      , Ae = {};
    function Te(e) {
        var t, n, i = [], o = !1, r = Ae;
        return function(a, c) {
            if (0 === a) {
                if (r !== Ae)
                    return c(0, Le),
                    o && c(1, n),
                    void c(2, r);
                i.push(c);
                var s = function(e, n) {
                    if (2 !== e)
                        r === Ae && t(e, n);
                    else {
                        var o = i.indexOf(c);
                        -1 !== o && i.splice(o, 1)
                    }
                };
                1 !== i.length ? (c(0, s),
                o && r === Ae && c(1, n)) : e(0, (function(e, a) {
                    if (0 === e)
                        return t = a,
                        void c(0, s);
                    1 === e && (o = !0,
                    n = a);
                    var l = i.slice(0);
                    2 === e && (r = a,
                    i = null),
                    l.forEach((function(t) {
                        t(e, a)
                    }
                    ))
                }
                ))
            }
        }
    }
    var ze = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o, r = 0;
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(t, n)) : 1 === t && e > r ? (r++,
            o(1)) : i(t, n)
        }
        ))
    }
    ;
    const Pe = function(e) {
        return void 0 === e && (e = {}),
        t => {
            "function" == typeof e && (e = {
                next: e
            });
            let n, {next: i, error: o, complete: r} = e;
            t(0, ( (e, t) => {
                0 === e && (n = t),
                1 === e && i && i(t),
                1 !== e && 0 !== e || n(1),
                2 === e && !t && r && r(),
                2 === e && t && o && o(t)
            }
            ));
            return () => {
                n && n(2)
            }
        }
    };
    var Oe = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o, r = 0;
        function a(t, n) {
            e > r && o(t, n)
        }
        t(0, ( (t, n) => {
            0 === t ? (o = n,
            i(0, a)) : 1 === t ? e > r && (r++,
            i(t, n),
            r === e && (i(2),
            o(2))) : i(t, n)
        }
        ))
    }
    ;
    const Se = {}
      , Me = e => t => (n, i) => {
        if (0 !== n)
            return;
        let o, r, a = !1, c = Se;
        t(0, ( (t, n) => {
            if (0 === t)
                return o = n,
                e(0, ( (e, t) => 0 === e ? (r = t,
                void r(1)) : 1 === e ? (c = void 0,
                r(2),
                o(2),
                void (a && i(2))) : void (2 === e && (r = null,
                t && (c = t,
                o(2),
                a && i(e, t)))))),
                a = !0,
                i(0, ( (e, t) => {
                    c === Se && (2 === e && r && r(2),
                    o(e, t))
                }
                )),
                void (c !== Se && i(2, c));
            2 === t && r(2),
            i(t, n)
        }
        ))
    }
    ;
    function De(e) {
        return new Promise((function(t, n) {
            Pe({
                next: t,
                error: n,
                complete: function() {
                    var e = Error("No elements in sequence.");
                    e.code = "NO_ELEMENTS",
                    n(e)
                }
            })(function(e) {
                return function(t, n) {
                    if (0 === t) {
                        var i, o, r = !1, a = !1;
                        e(0, (function(e, t) {
                            return 0 === e ? (i = t,
                            void n(0, (function(e, t) {
                                2 === e && (a = !0),
                                i(e, t)
                            }
                            ))) : 1 === e ? (r = !0,
                            o = t,
                            void i(1)) : void (2 === e && !t && r && (n(1, o),
                            a) || n(e, t))
                        }
                        ))
                    }
                }
            }(e))
        }
        ))
    }
    var Fe = function(e, t, n) {
        return e(n = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }()
            }
        }, n.exports),
        n.exports
    }((function(e, t) {
        function n(e, t) {
            return e === t
        }
        function i(e, t, n) {
            if (null === t || null === n || t.length !== n.length)
                return !1;
            for (var i = t.length, o = 0; i > o; o++)
                if (!e(t[o], n[o]))
                    return !1;
            return !0
        }
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n
              , o = null
              , r = null;
            return function() {
                return i(t, o, arguments) || (r = e.apply(null, arguments)),
                o = arguments,
                r
            }
        }
        function r(e) {
            var t = Array.isArray(e[0]) ? e[0] : e;
            if (!t.every((function(e) {
                return "function" == typeof e
            }
            ))) {
                var n = t.map((function(e) {
                    return typeof e
                }
                )).join(", ");
                throw Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]")
            }
            return t
        }
        function a(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
                n[i - 1] = arguments[i];
            return function() {
                for (var t = arguments.length, i = Array(t), a = 0; t > a; a++)
                    i[a] = arguments[a];
                var c = 0
                  , s = i.pop()
                  , l = r(i)
                  , d = e.apply(void 0, [function() {
                    return c++,
                    s.apply(null, arguments)
                }
                ].concat(n))
                  , u = o((function() {
                    for (var e = [], t = l.length, n = 0; t > n; n++)
                        e.push(l[n].apply(null, arguments));
                    return d.apply(null, e)
                }
                ));
                return u.resultFunc = s,
                u.recomputations = function() {
                    return c
                }
                ,
                u.resetRecomputations = function() {
                    return c = 0
                }
                ,
                u
            }
        }
        t.__esModule = !0,
        t.defaultMemoize = o,
        t.createSelectorCreator = a,
        t.createStructuredSelector = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
            if ("object" != typeof e)
                throw Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
            var n = Object.keys(e);
            return t(n.map((function(t) {
                return e[t]
            }
            )), (function() {
                for (var e = arguments.length, t = Array(e), i = 0; e > i; i++)
                    t[i] = arguments[i];
                return t.reduce((function(e, t, i) {
                    return e[n[i]] = t,
                    e
                }
                ), {})
            }
            ))
        }
        ;
        var c = t.createSelector = a(o)
    }
    ))
      , Ne = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
      , Be = function() {
        function e() {
            Ne(this, e),
            this._cache = {}
        }
        return e.prototype.set = function(e, t) {
            this._cache[e] = t
        }
        ,
        e.prototype.get = function(e) {
            return this._cache[e]
        }
        ,
        e.prototype.remove = function(e) {
            delete this._cache[e]
        }
        ,
        e.prototype.clear = function() {
            this._cache = {}
        }
        ,
        e
    }();
    (function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.cacheSize;
            if (Ne(this, e),
            void 0 === n)
                throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(n) || 0 >= n)
                throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {},
            this._cacheOrdering = [],
            this._cacheSize = n
        }
        e.prototype.set = function(e, t) {
            (this._cache[e] = t,
            this._cacheOrdering.push(e),
            this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }
        ,
        e.prototype.get = function(e) {
            return this._cache[e]
        }
        ,
        e.prototype.remove = function(e) {
            var t = this._cacheOrdering.indexOf(e);
            t > -1 && this._cacheOrdering.splice(t, 1),
            delete this._cache[e]
        }
        ,
        e.prototype.clear = function() {
            this._cache = {},
            this._cacheOrdering = []
        }
    }
    )(),
    function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , n = t.cacheSize;
            if (Ne(this, e),
            void 0 === n)
                throw Error("Missing the required property `cacheSize`.");
            if (!Number.isInteger(n) || 0 >= n)
                throw Error("The `cacheSize` property must be a positive integer value.");
            this._cache = {},
            this._cacheOrdering = [],
            this._cacheSize = n
        }
        e.prototype.set = function(e, t) {
            (this._cache[e] = t,
            this._registerCacheHit(e),
            this._cacheOrdering.length > this._cacheSize) && this.remove(this._cacheOrdering[0])
        }
        ,
        e.prototype.get = function(e) {
            return this._registerCacheHit(e),
            this._cache[e]
        }
        ,
        e.prototype.remove = function(e) {
            this._deleteCacheHit(e),
            delete this._cache[e]
        }
        ,
        e.prototype.clear = function() {
            this._cache = {},
            this._cacheOrdering = []
        }
        ,
        e.prototype._registerCacheHit = function(e) {
            this._deleteCacheHit(e),
            this._cacheOrdering.push(e)
        }
        ,
        e.prototype._deleteCacheHit = function(e) {
            var t = this._cacheOrdering.indexOf(e);
            t > -1 && this._cacheOrdering.splice(t, 1)
        }
    }();
    function je() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        var i = Be;
        return function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , o = void 0
              , r = void 0;
            "function" == typeof n ? (console.warn('[re-reselect] Deprecation warning: "selectorCreator" argument is discouraged and will be removed in the upcoming major release. Please use "options.selectorCreator" instead.'),
            o = new i,
            r = n) : (o = n.cacheObject || new i,
            r = n.selectorCreator || Fe.createSelector);
            var a = function() {
                var n = e.apply(void 0, arguments);
                if ("string" == typeof n || "number" == typeof n) {
                    var i = o.get(n);
                    return void 0 === i && (i = r.apply(void 0, t),
                    o.set(n, i)),
                    i.apply(void 0, arguments)
                }
            };
            return a.getMatchingSelector = function() {
                var t = e.apply(void 0, arguments);
                return o.get(t)
            }
            ,
            a.removeMatchingSelector = function() {
                var t = e.apply(void 0, arguments);
                o.remove(t)
            }
            ,
            a.clearCache = function() {
                o.clear()
            }
            ,
            a.resultFunc = t[t.length - 1],
            a
        }
    }
    const qe = (e, t) => t
      , He = (e, t) => (e => e.entities.chats.byIds)(e)[t]
      , We = je([ (e, t) => He(e, t).events.orderedIds, (e, t) => He(e, t).events.byIds], ( (e, t) => e.map((e => t[e]))))(qe)
      , Ve = je([He, We], ( (e, t) => ({
        ...e,
        events: t
    })))(qe)
      , Re = e => e.entities.users.byIds
      , Ge = e => Re(e)[(e => e.session.id)(e)]
      , Ue = (e, t) => Re(e)[t]
      , Ye = e => Ge(e).id
      , Je = (je([We, Ye], ( (e, t) => p((e => {
        let {delivered: n, author: i} = e;
        return n && i === t
    }
    ), e)))(qe),
    je([We, Ye], ( (e, t) => p((e => {
        let {seen: n, author: i} = e;
        return n && i === t
    }
    ), e)))(qe),
    {
        boosters: !0,
        form: !0,
        system_message: !0
    });
    Fe.createSelector([We, e => Ge(e).id], ( (e, t) => {
        return function(e, t, n) {
            for (let i = t; i >= 0; i--)
                if (e(n[i]))
                    return i;
            return -1
        }((e => e.author === t && "message" === e.type && !(e.properties && "file" === e.properties.serverType) || !0 === e.seen && !Je[e.type] && !!e.serverId), (n = e).length - 1, n);
        var n
    }
    )),
    je([ (e, t) => He(e, t).participants, Re], ( (e, t) => e.map((e => t[e]))))(qe);
    function Ke(e, t) {
        if (void 0 === t)
            return e.application;
        return e.application[t]
    }
    var Xe = (e, t) => {
        h(( (e, n) => {
            t.style[n] = e
        }
        ), e)
    }
      , $e = (e, t) => {
        h(( (e, n) => {
            "style" !== n ? t.setAttribute(n, e) : Xe(e, t)
        }
        ), e)
    }
    ;
    const Ze = () => !!document.documentElement.currentStyle
      , Qe = (e, t) => {
        const i = window.getComputedStyle(t)
          , o = "border-box" === i.boxSizing
          , r = A(e, i);
        if (Ze() && o && n("width", r) && null !== r.width) {
            r.width = P([r.width, i.paddingLeft, i.paddingRight, i.borderLeftWidth, i.borderRightWidth].map(parseFloat)) + "px"
        }
        if (Ze() && o && n("height", r) && null !== r.height) {
            r.height = P([r.height, i.paddingTop, i.paddingBottom, i.borderTopWidth, i.borderBottomWidth].map(parseFloat)) + "px"
        }
        return r
    }
    ;
    function et() {
        return new Promise((e => {
            const t = () => {
                document.body ? e(document.body) : setTimeout(t, 100)
            }
            ;
            t()
        }
        ))
    }
    function tt(e) {
        const {parentNode: t} = e;
        t && t.removeChild(e)
    }
    const nt = (e, t) => {
        const n = document.createElement(e);
        return $e(t, n),
        n
    }
      , it = "chat-widget"
      , ot = "chat-widget-minimized"
      , rt = "chat-widget-lightbox"
      , at = "LiveChat chat widget"
      , ct = "OpenWidget widget"
      , st = {
        opacity: 0,
        visibility: "hidden",
        zIndex: -1
    }
      , lt = {
        opacity: 1,
        visibility: "visible",
        zIndex: 2147483639
    }
      , dt = {
        id: it + "-container",
        style: {
            ...st,
            position: "fixed",
            bottom: 0,
            width: 0,
            height: 0,
            maxWidth: "100%",
            maxHeight: "100%",
            minHeight: 0,
            minWidth: 0,
            backgroundColor: "transparent",
            border: 0,
            overflow: "hidden"
        }
    }
      , ut = {
        id: "livechat-eye-catcher",
        style: {
            position: "fixed",
            visibility: "visible",
            zIndex: 2147483639,
            background: "transparent",
            border: 0,
            padding: "10px 10px 0 0",
            float: "left",
            marginRight: "-10px",
            webkitBackfaceVisibility: "hidden"
        }
    }
      , pt = {
        style: {
            position: "absolute",
            display: "none",
            top: "-5px",
            right: "-5px",
            width: "16px",
            lineHeight: "16px",
            textAlign: "center",
            cursor: "pointer",
            textDecoration: "none",
            color: "#000",
            fontSize: "20px",
            fontFamily: "Arial, sans-serif",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.5)"
        }
    }
      , mt = {
        id: "livechat-eye-catcher-img",
        style: {
            display: "block",
            overflow: "hidden",
            cursor: "pointer"
        }
    }
      , ht = {
        alt: "",
        style: {
            display: "block",
            border: 0,
            float: "right"
        }
    }
      , ft = {
        position: "absolute",
        top: "0px",
        left: "0px",
        bottom: "0px",
        right: "0px"
    }
      , gt = {
        id: it,
        name: it,
        title: at,
        scrolling: "no",
        style: {
            width: "100%",
            height: "100%",
            "min-height": "0px",
            "min-width": "0px",
            margin: "0px",
            padding: "0px",
            "background-image": "none",
            "background-position-x": "0%",
            "background-position-y": "0%",
            "background-size": "initial",
            "background-attachment": "scroll",
            "background-origin": "initial",
            "background-clip": "initial",
            "background-color": "rgba(0, 0, 0, 0)",
            "border-width": "0px",
            float: "none",
            "color-scheme": "normal"
        }
    }
      , vt = {
        id: rt,
        name: rt,
        title: "Lightbox image preview",
        scrolling: "no",
        style: {
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            border: "none",
            "z-index": "2147483647",
            background: "transparent",
            "aria-hidden": "false",
            tabindex: "0"
        }
    }
      , _t = {
        ...gt,
        id: ot,
        name: ot
    }
      , wt = e => "lc-aria-announcer-" + e;
    const yt = "new_message"
      , bt = e => "function" == typeof e.start && "function" == typeof e.stop
      , kt = e => {
        bt(e) ? e.start(0) : e.noteOn(0)
    }
      , Ct = () => {
        const e = new (window.AudioContext || window.webkitAudioContext);
        let t = !0
          , n = [];
        const i = t => new Promise(( (n, i) => {
            e.decodeAudioData(t, n, i)
        }
        ))
          , o = t => ({
            play: () => {
                const n = e.createBufferSource();
                n.connect(e.destination),
                n.buffer = t;
                return {
                    playback: new Promise(( (t, i) => {
                        if (n.onended = () => t(),
                        kt(n),
                        "running" !== e.state) {
                            const t = Error("Playback failed, AudioContext is in incorrect state '" + e.state + "'");
                            t.name = "PlaybackError",
                            i(t)
                        }
                    }
                    )),
                    stop() {
                        (e => {
                            bt(e) ? e.stop(0) : e.noteOff(0)
                        }
                        )(n)
                    }
                }
            }
        });
        return {
            preload: e => (e => new Promise(( (t, n) => {
                const i = new XMLHttpRequest;
                i.onload = () => {
                    t(i.response)
                }
                ,
                i.onerror = n,
                i.open("GET", e),
                i.responseType = "arraybuffer",
                i.send()
            }
            )))(e).then(i).then(o),
            playSound: e => {
                const i = e.play();
                return t && n.push(i),
                i.playback
            }
            ,
            unlock: () => new Promise((i => {
                const o = () => {
                    document.removeEventListener("click", o, !0),
                    t && (n.forEach((e => {
                        e.stop()
                    }
                    )),
                    n = [],
                    t = !1),
                    e.resume(),
                    ( () => {
                        const t = e.createBuffer(1, 1, 22050)
                          , n = e.createBufferSource();
                        n.buffer = t,
                        n.connect(e.destination),
                        kt(n)
                    }
                    )(),
                    i()
                }
                ;
                document.addEventListener("click", o, !0)
            }
            ))
        }
    }
    ;
    const Et = /\.(\w+)$/i
      , xt = new Audio
      , It = {
        mp3: "audio/mpeg",
        ogg: "audio/ogg"
    }
      , Lt = e => {
        const t = (e => {
            const t = e.match(Et);
            return t ? t[1].toLowerCase() : ""
        }
        )(e);
        return t in It && "" !== xt.canPlayType(It[t])
    }
      , At = e => new Promise(( (t, n) => {
        const i = new Audio(e);
        i.onloadeddata = () => {
            t(i)
        }
        ,
        i.onerror = n
    }
    ))
      , Tt = e => {
        const t = e.play();
        return (n = t) && "function" == typeof n.then ? t : Promise.resolve();
        var n
    }
    ;
    const zt = () => "function" == typeof window.webkitAudioContext || "function" == typeof window.AudioContext ? ( () => {
        const e = Ct()
          , t = I((t => {
            const n = e.preload(t);
            return n.catch(L),
            n
        }
        ));
        return {
            play: n => {
                const i = t(n).then(e.playSound);
                return i.catch(L),
                i
            }
            ,
            preload: t,
            unlock: () => e.unlock()
        }
    }
    )() : ( () => {
        const e = I(At);
        return {
            play: t => e(t).then(Tt),
            preload: e,
            unlock: () => Promise.resolve()
        }
    }
    )()
      , Pt = e => Object.keys(e).reduce(( (t, n) => {
        const i = u((e => Lt(e)), o(r = e[n]) ? r : [r]);
        var r;
        return t[n] = i,
        t
    }
    ), {});
    const Ot = () => {
        const e = (e => {
            const t = zt()
              , n = Pt(e);
            return {
                play: e => {
                    t.play(n[e]).then(L, L)
                }
                ,
                preload: e => {
                    t.preload(n[e]).then(L, L)
                }
                ,
                unlock: () => t.unlock()
            }
        }
        )({
            [yt]: ["https://cdn.livechatinc.com/widget/static/media/new_message.CTorF0S8.ogg", "https://cdn.livechatinc.com/widget/static/media/new_message.C32z5SiC.mp3"]
        });
        return M && (window.parent.soundPlayer = e),
        e.unlock().then(( () => function(e, t) {
            let n = 0;
            return function() {
                const i = Date.now();
                e > i - n || (n = Date.now(),
                t.apply(void 0, arguments))
            }
        }(2e3, (t => {
            e.play(t)
        }
        ))))
    }
      , St = {
        isBridgeActive: !1,
        isIframeActive: null,
        hasIframeUnlocked: !1
    }
      , Mt = e => !!e && /native code/.test(e + "")
      , Dt = () => _(navigator.platform, ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]) && _("Version/15", navigator.userAgent)
      , Ft = () => /mobile/gi.test(navigator.userAgent) && !("MacIntel" === navigator.platform && _("iPad", navigator.userAgent))
      , Nt = () => _("Chrome", navigator.userAgent)
      , Bt = () => {
        const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return e ? parseInt(e[2], 10) : 0
    }
      , jt = () => /Firefox/.test(navigator.userAgent)
      , qt = (e, t) => Ke(e, "visibility").state === t;
    !function(e) {
        const t = function(e) {
            try {
                return window.localStorage
            } catch (t) {
                return "SecurityError" === t.name && e ? e : V() ? window.localStorage : R
            }
        }(e)
    }();
    const Ht = () => {
        const {all: e, ...t} = {
            all: n = n || new Map,
            on: function(e, t) {
                var i = n.get(e);
                i ? i.push(t) : n.set(e, [t])
            },
            off: function(e, t) {
                var i = n.get(e);
                i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []))
            },
            emit: function(e, t) {
                var i = n.get(e);
                i && i.slice().map((function(e) {
                    e(t)
                }
                )),
                (i = n.get("*")) && i.slice().map((function(n) {
                    n(e, t)
                }
                ))
            }
        };
        var n;
        return {
            ...t,
            off: (n, i) => {
                n ? t.off(n, i) : e.clear()
            }
            ,
            once: (e, n) => {
                t.on(e, (function i(o, r) {
                    t.off(e, i),
                    n(o, r)
                }
                ))
            }
        }
    }
    ;
    function Wt(e, t) {
        let {retriesCount: n=1 / 0, minTime: i=100, maxTime: o=1e4} = void 0 === t ? {} : t;
        const r = (e => {
            let {min: t=1e3, max: n=5e3, jitter: i=.5} = e
              , o = 0;
            return {
                duration: () => {
                    let e = t * Math.pow(2, o++);
                    if (i) {
                        const t = Math.random()
                          , n = Math.floor(t * i * e);
                        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                    }
                    return 0 | Math.min(e, n)
                }
                ,
                reset: () => {
                    o = 0
                }
            }
        }
        )({
            min: i,
            max: o,
            jitter: 0
        });
        return new Promise(( (t, i) => {
            let o = 0;
            const a = () => e().then(t, ( () => {
                n === 1 / 0 || o++ < n ? setTimeout(a, r.duration()) : i(Error("Maximum retries count (" + n + ") reached"))
            }
            ));
            a()
        }
        ))
    }
    Object.freeze({
        success: !0
    });
    const Vt = e => e.map((e => {
        switch (e.type) {
        case "group_chooser":
            return {
                ...e,
                options: e.options.map((e => {
                    let {group_id: t, ...n} = e;
                    return {
                        ...n,
                        groupId: t
                    }
                }
                ))
            };
        case "rating":
            {
                const {comment_label: t, ...n} = e;
                return {
                    ...n,
                    commentLabel: t
                }
            }
        default:
            return e
        }
    }
    ))
      , Rt = e => {
        const t = e.map(( (e, t) => ({
            ...e,
            id: t + ""
        })));
        return Vt(t)
    }
      , Gt = e => ({
        id: e.id,
        fields: !("id"in e.fields[0]) ? Rt(e.fields) : Vt(e.fields)
    })
      , Ut = {};
    function Yt(e, t) {
        let {query: n={}, jsonpParam: i="jsonp", callbackName: o} = void 0 === t ? {} : t;
        return new Promise(( (t, r) => {
            et().then((a => {
                const c = document.createElement("script")
                  , s = o || g(Ut);
                Ut[s] = !0;
                const l = "__" + s;
                window[l] = e => {
                    delete Ut[s],
                    delete window[l],
                    tt(c),
                    t(e)
                }
                ,
                c.src = e + "?" + G({
                    ...n,
                    [i]: l
                }),
                c.addEventListener("error", ( () => {
                    setTimeout(( () => r(Error("JSONP request failed."))), 100)
                }
                )),
                a.appendChild(c)
            }
            ))
        }
        ))
    }
    const Jt = /\.([a-z]{1,})$/i
      , Kt = e => {
        let {__priv: t} = e;
        const n = {
            enabled: !0,
            x: parseInt(t.group["embedded_chat.eye_grabber.x"]) + 15,
            y: parseInt(t.group["embedded_chat.eye_grabber.y"]),
            src: ce(t.group["embedded_chat.eye_grabber.path"])
        };
        if (-1 !== n.src.indexOf("/default/eyeCatchers/")) {
            const e = n.src.match(Jt)[1];
            n.srcset = {
                "1x": n.src,
                "2x": n.src.replace(RegExp("\\." + e, "i"), "-2x." + e)
            }
        }
        return n
    }
      , Xt = e => {
        var t;
        return {
            "x-region": null != (t = e.region) ? t : ""
        }
    }
      , $t = e => {
        let {region: t} = e;
        return "https://api" + (e => "fra" === e || e === B ? "-fra" : "")(t) + ".livechatinc.com"
    }
      , Zt = (e, t) => {
        const n = "get_dynamic_configuration" === e ? "v3.6" : "v3.5";
        return $t(t) + "/" + n + "/customer/action/" + e
    }
      , Qt = function(e, t) {
        let {validateDefaultWidget: n=!0} = void 0 === t ? {} : t;
        return Yt(Zt("get_dynamic_configuration", e), {
            query: {
                ...Xt(e),
                ...e.organizationId ? {
                    organization_id: e.organizationId
                } : {},
                ...e.licenseId ? {
                    license_id: e.licenseId
                } : {},
                client_id: null != "c5e4f61e1a6c3b1521b541bc5c5a2ac5" ? "c5e4f61e1a6c3b1521b541bc5c5a2ac5" : "",
                url: ae(e.url, ["cw_configurator"]),
                ..."number" == typeof e.groupId && {
                    group_id: e.groupId
                },
                ...e.channelType && {
                    channel_type: e.channelType
                },
                ...e.skipCodeInstallationTracking && {
                    test: 1
                },
                ...e.productName && {
                    origin: e.productName
                },
                ...e.integrationName && {
                    implementation_type: e.integrationName
                }
            }
        }).then((t => {
            if (t.error)
                switch (t.error.type) {
                case "misdirected_request":
                    return Qt({
                        ...e,
                        region: t.error.data.region
                    });
                case "license_not_found":
                    {
                        if ("direct_link" === e.channelType) {
                            const t = G({
                                utm_source: "expired_chat_link",
                                utm_medium: "referral",
                                utm_campaign: "lc_" + e.licenseId
                            });
                            window.location.replace("https://www.livechat.com/expired-chat-link/?" + t)
                        }
                        const t = Error("License not found");
                        throw t.code = "LICENSE_NOT_FOUND",
                        t
                    }
                default:
                    {
                        const e = Error(t.error.message);
                        throw e.code = t.error.type.toUpperCase(),
                        e
                    }
                }
            if (19196658 !== e.licenseId && "4c8c0751-837f-4a11-928e-047b2d095307" !== e.organizationId || (t.default_widget = "livechat"),
            n && "livechat" !== t.default_widget) {
                const e = Error("The 'default_widget' is not 'livechat', but instead: '" + t.default_widget + "'");
                throw e.code = "DEFAULT_WIDGET_NOT_LIVECHAT",
                e.organizationId = t.organization_id,
                e.defaultWidget = t.default_widget,
                e
            }
            if (!t.livechat_active) {
                if ("direct_link" === e.channelType) {
                    const t = G({
                        utm_source: "expired_chat_link",
                        utm_medium: "referral",
                        utm_campaign: "lc_" + e.licenseId
                    });
                    window.location.replace("https://www.livechat.com/expired-chat-link/?" + t)
                }
                const t = Error("License expired");
                throw t.code = "LICENSE_EXPIRED",
                t
            }
            if (!t.livechat.domain_allowed) {
                const e = Error("Current domain is not added to the allowlist.");
                throw e.code = "DOMAIN_NOT_ALLOWED",
                e
            }
            return {
                organizationId: (i = t).organization_id,
                groupId: i.livechat.group_id,
                clientLimitExceeded: i.livechat.client_limit_exceeded,
                configVersion: i.livechat.config_version,
                localizationVersion: i.livechat.localization_version,
                onlineGroupIds: i.livechat.online_group_ids || [],
                region: e.region || null,
                language: i.livechat.language
            };
            var i
        }
        ))
    }
      , en = e => {
        var t, n;
        const i = "feade1d6c3f17748ae4c8d917a1e1068"
          , o = !!(null == (t = e.properties.group[i]) ? void 0 : t.forwardTicketFormToHelpdesk)
          , r = null == (n = e.properties.license[i]) ? void 0 : n.hdLicenseID;
        return "number" == typeof r && r > -1 && (o || "1" === e.__priv.license["helpdesk.inbound_forwarding"])
    }
      , tn = (e, t) => t.includes(e) ? e : t[0]
      , nn = e => {
        const {buttons: t, allowed_domains: n, prechat_form: i, ticket_form: o, __priv: r, properties: a, ...c} = e
          , s = "0" === r.group.tickets_enabled
          , l = !!!r.disable_native_tickets && !!o
          , d = en(e)
          , u = s || d || l;
        return {
            ...c,
            ...i && {
                prechatForm: Gt(i)
            },
            ...u && o && {
                ticketForm: Gt(o)
            },
            properties: a,
            buttons: t.map((e => "image" === e.type ? {
                id: e.id,
                type: e.type,
                onlineValue: ce(e.online_value),
                offlineValue: ce(e.offline_value)
            } : {
                id: e.id,
                type: e.type,
                onlineValue: e.online_value,
                offlineValue: e.offline_value
            })),
            ...n && {
                allowedDomains: n
            },
            __unsafeProperties: {
                ...r.s && {
                    s: !0
                },
                ...r.enable_textapp && {
                    enableTextApp: !0
                },
                group: {
                    chatBoosters: r.group.chat_boosters,
                    disabledMinimized: "1" === r.group["chat_window.disable_minimized"],
                    disabledMinimizedOnMobile: "1" === r.group["chat_window.mobile_disable_minimized"],
                    disabledOnMobile: "1" === r.group["chat_window.hide_on_mobile"],
                    eyeCatcher: "1" === r.group["embedded_chat.display_eye_catcher"] ? Kt(e) : {
                        enabled: !1
                    },
                    hasAgentAvatarsEnabled: "1" === r.group["chat_window.display_avatar"],
                    hasCustomMobileSettings: "1" === r.group["chat_window.custom_mobile_settings"],
                    hasHiddenTrademark: "1" === r.group["chat_window.hide_trademark"],
                    hasSoundsEnabled: "0" === r.group["chat_window.disable_sounds"],
                    initiallyHidden: "1" === r.group["chat_window.hide_on_init"] || "1" === r.group["chat_window.disable_minimized"],
                    initiallyHiddenOnMobile: "1" === r.group["chat_window.mobile_hide_on_init"] || "1" === r.group["chat_window.mobile_disable_minimized"],
                    hideOnInit: "1" === r.group["chat_window.hide_on_init"],
                    language: r.group.language,
                    linksUnfurlingEnabled: "1" === r.group.links_unfurling,
                    logo: "1" === r.group["chat_window.display_logo"] ? {
                        enabled: !0,
                        src: r.group["chat_window.logo_path"]
                    } : {
                        enabled: !1
                    },
                    minimizedType: tn(r.group["chat_window.theme.minimized"], ["circle", "bar"]),
                    minimizedTypeOnMobile: r.group["chat_window.mobile_minimized_theme"],
                    offlineMessagesEnabled: s,
                    offsetX: parseInt(r.group["chat_window.offset_x"]),
                    offsetXOnMobile: parseInt(r.group["chat_window.mobile_offset_x"]),
                    offsetY: parseInt(r.group["chat_window.offset_y"]),
                    offsetYOnMobile: parseInt(r.group["chat_window.mobile_offset_y"]),
                    prechatFormAfterGreetingEnabled: "1" === r.group.pre_chat_survey_after_greeting,
                    ratingEnabled: "1" === r.group["rate_me.enabled"],
                    screenPosition: tn(r.group["chat_window.screen_position"], ["right", "left"]),
                    screenPositionOnMobile: tn(r.group["chat_window.mobile_screen_position"], ["right", "left"]),
                    transcriptButtonEnabled: "1" === r.group["chat_window.display_transcript_button"],
                    theme: {
                        name: tn(r.group["chat_window.new_theme.name"], ["smooth", "modern"]),
                        variant: tn(r.group["chat_window.new_theme.variant"], ["light", "dark"]),
                        customJson: r.group["chat_window.new_theme.custom_json"],
                        agentbarBackgroundColor: r.group["chat_window.new_theme.agentbar_background_color"],
                        agentbarText: r.group["chat_window.new_theme.agentbar_text"],
                        agentMessageColorBackground: r.group["chat_window.new_theme.agent_message_color_background"],
                        agentMessageColorText: r.group["chat_window.new_theme.agent_message_color_text"],
                        backgroundColor: r.group["chat_window.new_theme.background_color"],
                        ctaColor: r.group["chat_window.new_theme.cta_color"],
                        minimizedColorBackground: r.group["chat_window.new_theme.minimized_color_background"],
                        minimizedColorIcon: r.group["chat_window.new_theme.minimized_color_icon"],
                        minimizedColorText: r.group["chat_window.new_theme.minimized_color_text"],
                        systemMessageColor: r.group["chat_window.new_theme.system_message_color"],
                        titlebarBackgroundColor: r.group["chat_window.new_theme.titlebar_background_color"],
                        titlebarText: r.group["chat_window.new_theme.titlebar_text"],
                        visitorMessageColorBackground: r.group["chat_window.new_theme.visitor_message_color_background"],
                        visitorMessageColorText: r.group["chat_window.new_theme.visitor_message_color_text"]
                    }
                },
                license: {
                    creditCardMaskingEnabled: "1" === r.license.mask_credit_cards,
                    nonProfit: "1" === r.license.non_profit,
                    licenseinboundForwardingToHelpdeskEnabled: "1" === r.license["helpdesk.inbound_forwarding"]
                },
                helpdeskIntegrationEnabled: d,
                ticketFormMode: (p = e,
                en(p) ? "helpdesk" : "0" === p.__priv.group.tickets_enabled ? "offline_message" : "livechat")
            }
        };
        var p
    }
      , on = (e, t, n, i, o) => {
        const r = "https://api.openwidget.com/v1.0/configuration/" + e;
        return Wt(( () => Yt(r, {
            callbackName: "ow_config",
            query: {
                ...t && {
                    integration_name: t
                },
                ...n && {
                    tid: n
                },
                ...i && {
                    test: !0
                },
                ...o && {
                    url: o
                }
            }
        }).then((t => {
            let {staticConfig: n, localization: i, ...o} = t;
            return {
                ...o,
                ...nn(n),
                localization: C((e => e.toLowerCase()), i),
                organizationId: e
            }
        }
        ))), {
            minTime: 500,
            maxTime: 5e3,
            retriesCount: 20
        })
    }
      , rn = e => {
        const t = document.createElement("textarea");
        t.value = e,
        t.style.position = "fixed",
        t.style.top = "0",
        t.style.left = "0",
        t.style.opacity = "0",
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t)
    }
      , an = "data-lc-focus"
      , cn = "data-lc-event"
      , sn = "data-lc-prop"
      , ln = "data-lc-action"
      , dn = "data-lc-action-value"
      , un = "data-lc-action-success";
    let pn = L;
    function mn(e, t, n, i) {
        var o;
        const r = n.contentDocument
          , a = null != (o = i.state.application.language) ? o : "en";
        if (null === r)
            throw Error("Parameter `frame` needs to be inserted into any document before rendering");
        Nt() ? (r.documentElement.lang = a,
        r.head.innerHTML = e,
        r.body.innerHTML = t) : (r.open(),
        r.write('\n\t\t\t<!DOCTYPE html>\n\t\t\t<html lang="' + a + '">\n\t\t\t\t<head>' + e + "</head>\n\t\t\t\t<body>" + t + "</body>\n\t\t\t</html>\n\t\t"),
        r.close());
        const c = r.documentElement
          , s = O(c.querySelectorAll("[" + cn + "]"));
        for (const e of s) {
            const t = e.getAttribute(cn);
            if ("string" == typeof t)
                for (const n of t.split(";")) {
                    const [t,o] = n.split(":");
                    t && o && (e.removeAttribute(cn),
                    e.addEventListener(t, (n => {
                        var r, a, c, s, l, d, u, p, m, h;
                        n.stopPropagation();
                        const f = {
                            type: n.type,
                            bubbles: !0,
                            isTrusted: n.isTrusted,
                            cancelBubble: n.cancelBubble,
                            cancelable: n.cancelable,
                            composed: n.composed,
                            defaultPrevented: n.defaultPrevented,
                            eventPhase: n.eventPhase,
                            timeStamp: n.timeStamp,
                            currentTarget: {
                                value: null == (r = n.currentTarget) ? void 0 : r.value,
                                checked: null == (a = n.currentTarget) ? void 0 : a.checked,
                                disabled: null == (c = n.currentTarget) ? void 0 : c.disabled,
                                draggable: null == (s = n.currentTarget) ? void 0 : s.draggable,
                                hidden: null == (l = n.currentTarget) ? void 0 : l.hidden
                            },
                            target: {
                                value: null == (d = n.target) ? void 0 : d.value,
                                checked: null == (u = n.target) ? void 0 : u.checked,
                                disabled: null == (p = n.target) ? void 0 : p.disabled,
                                draggable: null == (m = n.target) ? void 0 : m.draggable,
                                hidden: null == (h = n.target) ? void 0 : h.hidden
                            }
                        };
                        if ("click" === t && "copy" === e.getAttribute(ln))
                            return g = e.getAttribute(dn),
                            navigator.clipboard ? navigator.clipboard.writeText(g).catch(rn) : rn(g),
                            void (e.innerHTML = e.getAttribute(un));
                        var g;
                        i.call("crossFrameEvent", o, JSON.stringify(f))
                    }
                    )))
                }
        }
        const l = c.querySelector("[" + an + "]");
        if (l && (l.removeAttribute(an),
        l.focus(),
        "INPUT" === l.nodeName)) {
            l.setSelectionRange(l.value.length, l.value.length)
        }
        const d = []
          , u = O(c.querySelectorAll("[" + sn + "]"));
        for (const e of u) {
            const t = e.getAttribute(sn);
            if ("string" != typeof t)
                continue;
            e.removeAttribute(sn);
            const [n,i] = t.split(":");
            d.push((t => {
                var o;
                let r = null == (o = t.views) || null == (o = o.minimized) ? void 0 : o[i.replace("!", "")];
                "string" == typeof r && (r = r.trim()),
                "disabled" === n && (r = i.includes("!") ? !r : !!r),
                "boolean" == typeof r ? e.toggleAttribute(n, r) : r ? e.setAttribute(n, r) : e.removeAttribute(n)
            }
            ))
        }
        d.forEach((e => e(i.state))),
        i.off("state_diff", pn),
        pn = e => {
            var t;
            null != e && null != (t = e.views) && t.minimized && d.forEach((t => t(e)))
        }
        ,
        i.on("state_diff", pn)
    }
    const hn = e => {
        let {allowAutoplay: t, allowVideoConferencing: n, allowClipboardWrite: i, allowDisplayCapture: o} = e
          , r = ["clipboard-read; clipboard-write;"];
        if (t && !jt() && r.push("autoplay;"),
        o && r.push("display-capture *;"),
        n) {
            const e = {
                "display-capture *;": !Nt() || Bt() >= 94,
                "picture-in-picture *;": "PictureInPictureEvent"in window,
                "fullscreen *;": "function" == typeof Element.prototype.requestFullscreen
            };
            r = [].concat(r, ["microphone *;", "camera *;"], Object.keys((c = Boolean,
            a(s = e).reduce(( (e, t) => (c(s[t]) && (e[t] = s[t]),
            e)), {}))))
        }
        var c, s;
        return i && !jt() && r.push("clipboard-write *;"),
        r.join(" ")
    }
      , fn = e => e.replace(/\?+$/, "");
    function gn(e, t) {
        return ue((n = () => we(_e(e, "state_diff"), be(( () => e.state)), ye(e.state), be(t), me(z), Me(_e(e, "unbind"))),
        (e, t) => {
            if (0 === e) {
                let e = !1;
                t(0, (t => {
                    2 === t && (e = !0)
                }
                )),
                t(1, n()),
                e || t(2)
            }
        }
        ));
        var n
    }
    const vn = (e, t) => we(gn(e, t), ze(1))
      , _n = ["maximize", "minimize"]
      , wn = {
        maximize: ["feature", "messageDraft"],
        minimize: []
    }
      , yn = (e, t) => {
        const n = e.target;
        if (!(n instanceof Element))
            return;
        const i = n.closest("[data-openwidget-action]");
        if (!i)
            return;
        const o = i.getAttribute("data-openwidget-action");
        if (!o)
            return void console.error("OpenWidget: Action attribute value not found.");
        if (!(e => _(e, _n))(o))
            return void console.error('OpenWidget: Action "' + o + '" is not allowed. Allowed actions: ' + _n.join(", "));
        const r = ( (e, t) => {
            const n = {}
              , i = wn[t];
            return i && i.forEach((t => {
                const i = e.getAttribute("data-openwidget-" + t);
                i && (n[t] = i)
            }
            )),
            n
        }
        )(i, o);
        t[o](r)
    }
      , bn = M ? 100 : 2e3;
    let kn = null;
    const Cn = () => {
        if (kn)
            throw Error("Title notification service already initialized");
        kn = ( () => {
            try {
                let e = document.title
                  , t = null
                  , n = void 0;
                const i = document.querySelector("title");
                return i && new MutationObserver((n => {
                    const i = n[0].target.textContent;
                    i && ![e, t].includes(i) && (e = i)
                }
                )).observe(i, {
                    subtree: !0,
                    characterData: !0,
                    childList: !0
                }),
                {
                    setTitleNotification: i => {
                        i !== t && (t = i,
                        e = document.title,
                        document.title = t,
                        clearInterval(n),
                        n = window.setInterval(( () => {
                            document.title = document.title === e && t ? t : e
                        }
                        ), bn))
                    }
                    ,
                    clearTitleNotification: () => {
                        document.title = e,
                        clearInterval(n),
                        t = null
                    }
                    ,
                    getOriginalPageTitle: () => e
                }
            } catch (e) {
                return console.error("Error while creating title notification service", e),
                null
            }
        }
        )()
    }
      , En = () => {
        if (!kn)
            throw Error("Title notification service not initialized");
        return kn
    }
      , xn = e => {
        var t, n;
        const i = ["http:", "https:"];
        return !i.includes(null != (t = re(e)) ? t : "") && i.includes(null != (n = re(document.referrer)) ? n : "") ? document.referrer : e
    }
      , In = () => ({
        title: kn ? kn.getOriginalPageTitle() : document.title,
        url: fn(xn(document.location + "")),
        referrer: document.referrer
    })
      , Ln = e => {
        we(function(e, t) {
            return de((n => {
                const i = new MutationObserver(n);
                return i.observe(e, t),
                () => {
                    i.disconnect()
                }
            }
            ))
        }(document.body, {
            childList: !0,
            subtree: !0
        }), be(In), me(( (e, t) => e.url === t.url)), Me(_e(e, "unbind")), fe((t => {
            e.call("storeMethod", ["setApplicationState", {
                page: t
            }])
        }
        )))
    }
    ;
    var An = "application/x-postmate-v1+json"
      , Tn = 0
      , zn = {
        handshake: 1,
        "handshake-reply": 1,
        call: 1,
        emit: 1,
        reply: 1,
        request: 1
    }
      , Pn = function(e, t) {
        return ("string" != typeof t || e.origin === t) && (!!e.data && ("object" == typeof e.data && ("postmate"in e.data && (e.data.type === An && !!zn[e.data.postmate]))))
    }
      , On = function() {
        function e(e) {
            var t = this;
            this.parent = e.parent,
            this.frame = e.frame,
            this.child = e.child,
            this.childOrigin = e.childOrigin,
            this.events = {},
            this.listener = function(e) {
                if (!Pn(e, t.childOrigin))
                    return !1;
                var n = ((e || {}).data || {}).value || {}
                  , i = n.name;
                "emit" === e.data.postmate && i in t.events && t.events[i].call(t, n.data)
            }
            ,
            this.parent.addEventListener("message", this.listener, !1)
        }
        var t = e.prototype;
        return t.get = function(e) {
            var t = this;
            return new Mn.Promise((function(n) {
                var i = ++Tn;
                t.parent.addEventListener("message", (function e(o) {
                    o.data.uid === i && "reply" === o.data.postmate && (t.parent.removeEventListener("message", e, !1),
                    n(o.data.value))
                }
                ), !1),
                t.child.postMessage({
                    postmate: "request",
                    type: An,
                    property: e,
                    uid: i
                }, t.childOrigin)
            }
            ))
        }
        ,
        t.call = function(e, t) {
            this.child.postMessage({
                postmate: "call",
                type: An,
                property: e,
                data: t
            }, this.childOrigin)
        }
        ,
        t.on = function(e, t) {
            this.events[e] = t
        }
        ,
        t.destroy = function() {
            window.removeEventListener("message", this.listener, !1),
            this.frame.parentNode.removeChild(this.frame)
        }
        ,
        e
    }()
      , Sn = function() {
        function e(e) {
            var t = this;
            this.model = e.model,
            this.parent = e.parent,
            this.parentOrigin = e.parentOrigin,
            this.child = e.child,
            this.child.addEventListener("message", (function(e) {
                if (Pn(e, t.parentOrigin)) {
                    var n = e.data
                      , i = n.property
                      , o = n.uid
                      , r = n.data;
                    "call" !== e.data.postmate ? function(e, t) {
                        var n = "function" == typeof e[t] ? e[t]() : e[t];
                        return Mn.Promise.resolve(n)
                    }(t.model, i).then((function(t) {
                        return e.source.postMessage({
                            property: i,
                            postmate: "reply",
                            type: An,
                            uid: o,
                            value: t
                        }, e.origin)
                    }
                    )) : i in t.model && "function" == typeof t.model[i] && t.model[i].call(t, r)
                }
            }
            ))
        }
        return e.prototype.emit = function(e, t) {
            this.parent.postMessage({
                postmate: "emit",
                type: An,
                value: {
                    name: e,
                    data: t
                }
            }, this.parentOrigin)
        }
        ,
        e
    }()
      , Mn = function() {
        function e(e) {
            var t = e.container
              , n = void 0 === t ? void 0 !== n ? n : document.body : t
              , i = e.model
              , o = e.url
              , r = e.iframeAllowedProperties;
            return this.parent = window,
            this.frame = document.createElement("iframe"),
            r && (this.frame.allow = r),
            n.appendChild(this.frame),
            this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow,
            this.model = i || {},
            this.sendHandshake(o)
        }
        return e.prototype.sendHandshake = function(t) {
            var n, i = this, o = function(e) {
                var t = document.createElement("a");
                t.href = e;
                var n = t.protocol.length > 4 ? t.protocol : window.location.protocol
                  , i = t.host.length ? "80" === t.port || "443" === t.port ? t.hostname : t.host : window.location.host;
                return t.origin || n + "//" + i
            }(t), r = 0;
            return new e.Promise((function(e, a) {
                i.parent.addEventListener("message", (function t(r) {
                    return !!Pn(r, o) && ("handshake-reply" === r.data.postmate ? (clearInterval(n),
                    i.parent.removeEventListener("message", t, !1),
                    i.childOrigin = r.origin,
                    e(new On(i))) : a("Failed handshake"))
                }
                ), !1);
                var c = function() {
                    r++,
                    i.child.postMessage({
                        postmate: "handshake",
                        type: An,
                        model: i.model
                    }, o),
                    5 === r && clearInterval(n)
                }
                  , s = function() {
                    c(),
                    n = setInterval(c, 500)
                };
                i.frame.attachEvent ? i.frame.attachEvent("onload", s) : i.frame.addEventListener("load", s),
                i.frame.src = t
            }
            ))
        }
        ,
        e
    }();
    Mn.debug = !1,
    Mn.Promise = function() {
        try {
            return window ? window.Promise : Promise
        } catch (e) {
            return null
        }
    }(),
    Mn.Model = function() {
        function e(e) {
            return this.child = window,
            this.model = e,
            this.parent = this.child.parent,
            this.sendHandshakeReply()
        }
        return e.prototype.sendHandshakeReply = function() {
            var e = this;
            return new Mn.Promise((function(t, n) {
                e.child.addEventListener("message", (function i(o) {
                    if (o.data.postmate) {
                        if ("handshake" === o.data.postmate) {
                            e.child.removeEventListener("message", i, !1),
                            o.source.postMessage({
                                postmate: "handshake-reply",
                                type: An
                            }, o.origin),
                            e.parentOrigin = o.origin;
                            var r = o.data.model;
                            return r && Object.keys(r).forEach((function(t) {
                                e.model[t] = r[t]
                            }
                            )),
                            t(new Sn(e))
                        }
                        return n("Handshake Reply Failed")
                    }
                }
                ), !1)
            }
            ))
        }
        ,
        e
    }(),
    Mn.Promise = Promise;
    let Dn = function(e) {
        let {methods: t, ...n} = e;
        return new Mn(n).then((e => {
            const n = e.on
              , o = e.call
              , r = function() {
                for (var t = arguments.length, n = Array(t), i = 0; t > i; i++)
                    n[i] = arguments[i];
                return o.apply(e, n)
            }
              , a = Ht()
              , c = {}
              , s = {};
            return t.resolveRemoteCall = e => {
                let {id: t, value: n} = e;
                const i = s[t];
                delete s[t],
                i(n)
            }
            ,
            e.on = (t, i) => {
                a.on(t, i),
                c[t] || (c[t] = !0,
                function() {
                    for (var t = arguments.length, i = Array(t), o = 0; t > o; o++)
                        i[o] = arguments[o];
                    n.apply(e, i)
                }(t, (e => {
                    a.emit(t, e)
                }
                )))
            }
            ,
            e.off = a.off,
            e.on("remote-call", (n => {
                let {id: i, method: o, args: a} = n;
                const c = "function" == typeof t[o] ? t[o].apply(e, a) : void 0;
                c && "function" == typeof c.then ? c.then((e => {
                    r("resolveRemoteCall", {
                        id: i,
                        value: e
                    })
                }
                )) : r("resolveRemoteCall", {
                    id: i,
                    value: c
                })
            }
            )),
            e.emit = (e, t) => {
                r("emitEvent", {
                    event: e,
                    data: t
                })
            }
            ,
            e._emit = a.emit,
            e.call = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
                    n[i - 1] = arguments[i];
                return new Promise((t => {
                    const i = g(s);
                    s[i] = t,
                    r("remoteCall", {
                        id: i,
                        method: e,
                        args: n
                    })
                }
                ))
            }
            ,
            i(e, t)
        }
        ))
    };
    const Fn = window.Wix;
    var Nn = () => new Promise((e => {
        Fn.getSiteInfo((t => {
            let n = t.url;
            const i = t.referrer || t.referer || "";
            t.baseUrl && -1 === n.indexOf(t.baseUrl) && (n = t.baseUrl);
            e({
                title: t.pageTitle,
                referrer: i,
                url: n
            })
        }
        ))
    }
    ));
    const Bn = Promise.resolve()
      , jn = e => {
        Bn.then(e)
    }
      , qn = e => jn(( () => {
        throw e
    }
    ));
    function Hn(e) {
        return we(gn(e, (e => Ke(e, "availability"))), he(b))
    }
    const Wn = "liveChatChatId";
    function Vn(e) {
        return we(gn(e, (e => Ve(e, Wn).active)), ze(1), ke((t => t ? we(gn(e, (e => Ve(e, Wn).properties.currentAgent)), he(Boolean), be(( () => t)), Oe(1)) : xe(t))))
    }
    function Rn(e, t) {
        return we(_e(e, "state_diff"), be(( () => Ke(e.state, "readyState"))), he((e => e === t)), Oe(1), Te)
    }
    function Gn(e, t) {
        return we(Rn(e, F), ke(t))
    }
    function Un(e, t) {
        return we(Rn(e, N), ke(t))
    }
    function Yn(e, t) {
        return we(gn(e, (e => Ke(e, "invitation"))), be((e => e[t])), he(b), Ie, he((e => {
            let[t,n] = e;
            return n.length > t.length
        }
        )), be((e => {
            let[,t] = e;
            return k(t)
        }
        )))
    }
    const Jn = () => window.GoogleAnalyticsObject || "ga"
      , Kn = e => {
        let {event: t, label: n, nonInteraction: i, trackerName: o} = e;
        const r = window[Jn()];
        r && "function" == typeof r && r([o, "send"].filter(Boolean).join("."), {
            hitType: "event",
            eventCategory: "LiveChat",
            eventAction: t,
            eventLabel: n,
            nonInteraction: i
        })
    }
      , Xn = {
        ga: Kn,
        gaAll: e => {
            const t = window[Jn()];
            if (!t || "function" != typeof t.getAll)
                return;
            const n = t.getAll();
            o(n) && n.forEach((t => {
                Kn({
                    ...e,
                    trackerName: t && "function" == typeof t.get ? t.get("name") : null
                })
            }
            ))
        }
        ,
        gaq: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window._gaq;
            o && "function" == typeof o.push && o.push(["_trackEvent", "LiveChat", t, n, null, i])
        }
        ,
        gtm: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window.dataLayer;
            o && "function" == typeof o.push && o.push({
                event: "LiveChat",
                eventCategory: "LiveChat",
                eventAction: t,
                eventLabel: n,
                nonInteraction: i
            })
        }
        ,
        pageTracker: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window.pageTracker;
            o && "function" == typeof o._trackEvent && o._trackEvent("LiveChat", t, n, null, i)
        }
        ,
        urchinTracker: e => {
            let {event: t} = e;
            const n = window.urchinTracker;
            n && "function" == typeof n && n(t)
        }
        ,
        gtag: e => {
            let {event: t, label: n, nonInteraction: i} = e;
            const o = window.gtag;
            o && "function" == typeof o && o("event", t, {
                event_category: "LiveChat",
                event_label: n,
                non_interaction: i
            })
        }
    }
      , $n = e => {
        let {version: t, omitGtm: n, sendToAll: i} = e;
        if (t && "function" == typeof Xn[t])
            return i && "ga" === t ? "gaAll" : t;
        if ("object" == typeof window.pageTracker && "function" == typeof window.pageTracker._trackEvent)
            return "pageTracker";
        if ("function" == typeof window.urchinTracker)
            return "urchinTracker";
        if ("function" == typeof window.gtag)
            return "gtag";
        if (!n && "object" == typeof window.dataLayer && "function" == typeof window.dataLayer.push)
            return "gtm";
        if ("object" == typeof window._gaq)
            return "gaq";
        if (window.GoogleAnalyticsObject && "string" == typeof window.GoogleAnalyticsObject)
            return i ? "gaAll" : "ga";
        if ("function" == typeof window.ga) {
            let e = !1;
            if (window.ga((t => {
                e = "object" == typeof t
            }
            )),
            e)
                return i ? "gaAll" : "ga"
        }
        return null
    }
      , Zn = {
        Chat: "LiveChat Chat started",
        "Automated greeting": "LiveChat Automated greeting displayed",
        "Ticket form": "LiveChat Ticket form displayed",
        "Ticket form filled in": "LiveChat Ticket form filled in",
        "Pre-chat survey": "LiveChat Pre-chat survey displayed",
        "Pre-chat survey filled in": "LiveChat Pre-chat survey filled in",
        "Post-chat survey": "LiveChat Post-chat survey displayed",
        "Post-chat survey filled in": "LiveChat Post-chat survey filled in"
    }
      , Qn = () => window.mixpanel && "function" == typeof window.mixpanel.track && "function" == typeof window.mixpanel.register
      , ei = {
        googleAnalytics: e => {
            let {trackerName: t} = e;
            return t ? Xn[t] : null
        }
        ,
        kissmetrics: () => null,
        mixpanel: () => {
            if (!Qn())
                return null;
            return e => {
                let {event: t, eventData: n, persistentData: i} = e;
                if (!Qn())
                    return;
                const {mixpanel: o} = window;
                i && (o.register(i),
                !Qn()) || t in Zn && o.track(Zn[t], n)
            }
        }
    };
    var ti = (e, t) => {
        let {analytics: n} = t;
        const i = Object.keys(n).filter((e => n[e].enabled)).map((e => {
            const t = n[e]
              , i = ei[e];
            try {
                return i(t)
            } catch (e) {
                return qn(e),
                null
            }
        }
        )).filter(Boolean);
        if (0 === i.length)
            return;
        const o = function(t, n) {
            let {group: o=Ke(e.state, "group"), nonInteraction: r=!1, eventData: a={}, persistentData: c=null, useDataAsLabel: s=!1} = void 0 === n ? {} : n;
            const l = 0 !== o ? "Group ID: " + o : "(no group)"
              , d = s ? S(a).map((e => {
                let[t,n] = e;
                return t + ": " + n
            }
            )).join(", ") : l;
            i.forEach((e => {
                try {
                    e({
                        event: t,
                        nonInteraction: r,
                        label: d,
                        eventData: {
                            ...a,
                            group: l
                        },
                        persistentData: c
                    })
                } catch (e) {
                    qn(e)
                }
            }
            ))
        };
        we(gn(e, (e => Ke(e, "readyState"))), he((e => e === F)), Oe(1), ke(( () => Vn(e))), he(Boolean), fe(( () => {
            const {email: t, name: n} = Ge(e.state);
            o("Chat", {
                eventData: {
                    email: t,
                    name: n
                },
                persistentData: {
                    "performed chat": !0
                }
            })
        }
        ))),
        e.on("add_event", (e => {
            let {event: {properties: t}} = e;
            t.invitation && t.receivedFirstTime && o("Automated greeting", {
                nonInteraction: !0
            })
        }
        )),
        e.on("on_chat_booster_launched", (e => {
            let {id: t, title: n} = e;
            o("Chat Booster Launched: " + n, {
                eventData: {
                    appId: t,
                    title: n
                }
            })
        }
        )),
        e.on("on_prechat_survey_submitted", ( () => {
            o("Pre-chat survey filled in")
        }
        )),
        e.on("on_postchat_survey_submitted", ( () => {
            o("Post-chat survey filled in")
        }
        )),
        e.on("on_ticket_created", (e => {
            let {visitor_email: t} = e;
            o("Ticket form filled in", {
                eventData: {
                    email: t
                }
            })
        }
        )),
        e.on("rich_greeting_button_clicked", (e => {
            let {button: t, event: n} = e;
            o("Rich greeting button clicked", {
                eventData: {
                    buttonText: t.text,
                    greetingId: n.properties.id
                },
                useDataAsLabel: !0
            })
        }
        )),
        ["prechat", "postchat", "ticket", "offline"].forEach((t => {
            var n;
            we(ve(_e(e, "set_default_view"), _e(e, "set_current_view")), he((e => e.viewInfo && "Chat" === e.viewInfo.view && e.viewInfo.default === t)), Me(_e(e, "unbind")), (n = () => {
                const [n,i] = {
                    prechat: ["on_prechat_survey_submitted", "Pre-chat survey"],
                    postchat: ["on_postchat_survey_submitted", "Post-chat survey"],
                    ticket: ["on_ticket_created", "Ticket form"],
                    offline: ["on_ticket_created", "Ticket form"]
                }[t];
                return we(function() {
                    for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
                        t[n] = arguments[n];
                    return (e, n) => {
                        if (0 !== e)
                            return;
                        const i = t.length;
                        if (0 === i)
                            return n(0, ( () => {}
                            )),
                            void n(2);
                        let o, r = 0;
                        const a = (e, t) => {
                            o(e, t)
                        }
                        ;
                        !function e() {
                            r !== i ? t[r](0, ( (t, i) => {
                                0 === t ? (o = i,
                                0 === r ? n(0, a) : o(1)) : 2 === t && i ? n(2, i) : 2 === t ? (r++,
                                e()) : n(t, i)
                            }
                            )) : n(2)
                        }()
                    }
                }(xe(i), Ee), (o = we(gn(e, (e => qt(e, "maximized"))), he(Boolean)),
                c = void 0 === (a = (void 0 === r ? {} : r).size) ? 100 : a,
                function(e) {
                    return function(t, n) {
                        var i = [];
                        if (0 === t) {
                            var r, a, s = !1;
                            e(0, (function(e, t) {
                                if (0 === e && (r = t,
                                o(0, (function(e, t) {
                                    if (0 === e)
                                        (a = t)(1);
                                    else if (1 === e) {
                                        s = !0,
                                        a(2);
                                        var o = i.slice();
                                        i.length = 0,
                                        o.forEach((function(e) {
                                            return n(1, e)
                                        }
                                        ))
                                    }
                                }
                                ))),
                                1 === e)
                                    return s ? void n(1, t) : (i.push(t),
                                    i.length > c && i.shift(),
                                    void r(1));
                                n(e, t)
                            }
                            ))
                        }
                    }
                }
                ), Me(_e(e, n)));
                var o, r, a, c
            }
            ,
            function(e) {
                return function(t, i) {
                    if (0 === t) {
                        var o, r = null, a = function(e, t) {
                            if (0 !== e)
                                return 1 === e ? (i(1, t),
                                void r(1)) : void (2 === e && (r = null));
                            (r = t)(1)
                        }, c = function(e, t) {
                            2 === e && null !== r && r(2, t),
                            o(e, t)
                        };
                        e(0, (function(e, t) {
                            if (0 === e)
                                return o = t,
                                void i(0, c);
                            if (1 !== e) {
                                if (2 === e) {
                                    if (i(2, t),
                                    null === r)
                                        return;
                                    r(2, t)
                                }
                            } else {
                                if (null !== r)
                                    return;
                                n(t)(0, a)
                            }
                        }
                        ))
                    }
                }
            }
            ), fe((e => {
                o(e)
            }
            )))
        }
        ))
    }
    ;
    const ni = e => {
        let {actingAsDirectLink: t, isInCustomContainer: n} = e;
        return t || n
    }
      , ii = () => {
        const e = "lc_get_time_" + f();
        window.performance && "function" == typeof window.performance.mark && window.performance.mark(e);
        const [{startTime: t}] = performance.getEntriesByName(e);
        return performance.clearMarks(e),
        t
    }
      , oi = () => {
        if ("undefined" == typeof PerformanceObserver)
            return null;
        const e = ii()
          , t = []
          , n = new PerformanceObserver((e => {
            t.push.apply(t, e.getEntries())
        }
        ));
        n.observe({
            entryTypes: ["longtask"]
        });
        const i = () => {
            const n = k(t);
            return n ? (i = n,
            ii() - i.startTime + i.duration) : ii() - e;
            var i
        }
        ;
        return {
            disconnect: () => n.disconnect(),
            getLongTasks: () => [].concat(t),
            waitForIdle: e => new Promise((o => {
                const r = () => {
                    t.push.apply(t, n.takeRecords());
                    const a = i();
                    e > a ? setTimeout(r, Math.ceil(e - a)) : o()
                }
                ;
                r()
            }
            ))
        }
    }
      , ri = function(e) {
        void 0 === e && (e = "first-contentful-paint");
        const t = oi();
        return t ? (n = e,
        new Promise((e => {
            const t = performance.getEntriesByName(n);
            if (!w(t))
                return void e(t[0]);
            if ("undefined" == typeof PerformanceObserver)
                return void e(null);
            const i = setTimeout(( () => {
                o.disconnect(),
                e(null)
            }
            ), 6e4)
              , o = new PerformanceObserver((t => {
                const r = u((e => e.name === n), t.getEntries());
                r && (o.disconnect(),
                clearTimeout(i),
                e(r))
            }
            ));
            o.observe({
                entryTypes: ["paint"]
            })
        }
        ))).then((e => e ? t.waitForIdle(5e3).then(( () => (t.disconnect(),
        t.getLongTasks()))) : null)) : Promise.resolve(null);
        var n
    }
      , ai = e => {
        const t = performance.getEntriesByName(e);
        return 1 !== t.length ? null : t[0]
    }
      , ci = (e, t) => e && t ? Math.abs(t.startTime - e.startTime) : null
      , si = e => {
        if (!e)
            return null;
        const t = performance.getEntriesByType("navigation");
        return e.startTime - (w(t) ? performance.timing.domContentLoadedEventStart - performance.timing.navigationStart : t[0].domContentLoadedEventStart)
    }
      , li = () => {
        if (Math.floor(1e3 * Math.random()))
            return;
        const e = ri().then((e => e ? P(e.filter((e => _(".livechatinc.com", e.attribution[0].containerSrc))).map((e => e.duration))) : null));
        return {
            getLogs: () => e.then((e => {
                const t = ( () => {
                    const e = performance.getEntriesByType("resource").filter((e => /livechatinc\.com\/(.+\/)?tracking.js/.test(e.name)));
                    return 1 !== e.length ? null : e[0]
                }
                )()
                  , n = ai("lc_bridge_init")
                  , i = ai("lc_bridge_ready");
                return c((e => e && Number(e.toFixed(2))), {
                    timeFromTrackingStart: ci(t, i),
                    timeFromBridgeInit: ci(n, i),
                    timeFromDomContentLoaded: si(i),
                    totalBlockingTimeContributedToOurScript: e
                })
            }
            ))
        }
    }
      , di = e => {
        e.innerHTML = ""
    }
    ;
    var ui = (e, t) => {
        const n = document.querySelectorAll(".livechat_button")
          , i = _(t.groupId, t.onlineGroupIds || []);
        [].forEach.call(n, (n => {
            const o = n.getAttribute("data-id")
              , r = u((e => e.id === o), t.buttons);
            if (!r)
                return;
            const a = v("#", "0.href", n);
            "image" === r.type ? ( (e, t) => {
                let {text: n, url: i, src: o} = e;
                di(t);
                const r = nt("a", {
                    href: i
                })
                  , a = nt("img", {
                    src: o,
                    alt: n,
                    title: n
                });
                r.appendChild(a),
                t.appendChild(r)
            }
            )({
                url: a,
                text: n.textContent,
                src: i ? r.onlineValue : r.offlineValue
            }, n) : ( (e, t) => {
                let {text: n, url: i} = e;
                di(t);
                const o = nt("a", {
                    href: i
                });
                o.appendChild(document.createTextNode(n)),
                t.appendChild(o)
            }
            )({
                url: a,
                text: i ? r.onlineValue : r.offlineValue
            }, n),
            n.children[0].addEventListener("click", (t => {
                t.preventDefault(),
                e.maximize()
            }
            ))
        }
        ))
    }
    ;
    const pi = ["America/", "Europe/"]
      , mi = (e, t) => {
        const n = e.target;
        if (!(n instanceof HTMLElement))
            return;
        const i = n.closest("a, button");
        if (!i)
            return;
        if (Math.random() >= .01)
            return;
        const o = (e => {
            var t;
            const n = e.getAttribute("aria-label")
              , i = {
                clickElementTagType: e.tagName.toLowerCase(),
                ...e.id && {
                    clickElementId: e.id
                },
                ...e.className && {
                    clickElementClassNames: e.className
                },
                ...(null == (t = e.textContent) ? void 0 : t.trim()) && {
                    clickElementLabel: e.textContent.trim()
                },
                ...n && {
                    clickElementAriaLabel: n
                }
            };
            return e instanceof HTMLAnchorElement ? {
                ...i,
                ...e.href && {
                    clickElementHref: e.href
                }
            } : e instanceof HTMLButtonElement ? {
                ...i,
                ...e.type && {
                    clickElementType: e.type
                },
                ...e.name && {
                    clickElementName: e.name
                },
                ...e.value && {
                    clickElementValue: e.value
                }
            } : i
        }
        )(i)
          , r = In();
        t.call("logInfo", "button_click", {
            ...o,
            ...r
        })
    }
      , hi = (e, t, n) => {
        const {actingAsDirectLink: i} = t;
        if (i || !n.__unsafeProperties.s || !( () => {
            const e = Intl.DateTimeFormat().resolvedOptions().timeZone;
            return pi.some((t => e.startsWith(t)))
        }
        )())
            return;
        const o = t => mi(t, e);
        document.addEventListener("click", o),
        e.on("unbind", ( () => {
            document.removeEventListener("click", o)
        }
        ))
    }
      , fi = {
        25: "#EDDDBF",
        50: "#FFFAE5",
        100: "#F7C56E",
        500: "#FFD000",
        700: "#7B664C",
        800: "#3A352C"
    }
      , gi = {
        100: "#FF7C6B",
        500: "#D93311"
    }
      , vi = {
        100: "#77Cf9D",
        500: "#268750"
    }
      , _i = {
        100: "#FA6681",
        500: "#E30D34"
    }
      , wi = {
        0: "#FFFFFF",
        15: "#F6F6F7",
        25: "#F0F0F0",
        50: "#F8F8F8",
        75: "#EDEDED",
        100: "#E3E3E3",
        200: "#D5D5D5",
        300: "#C0C0C0",
        400: "#B3B3B3",
        425: "#A6A4A4",
        450: "#949494",
        500: "#757575",
        525: "#707070",
        550: "#6E6E6E",
        600: "#575757",
        625: "#474747",
        650: "#333333",
        700: "#2E2E2E",
        800: "#252525",
        900: "#111111"
    };
    var yi = Object.freeze({
        __proto__: null,
        yellow: fi,
        red: gi,
        green: vi,
        ruby: _i,
        accent: "#2000F0",
        webkitOutline: "#3B99FC",
        grayscale: wi,
        brand: {
            orange: "#FF5100",
            black: "#1B1B20"
        }
    });
    const bi = {
        ...yi,
        border: wi[500],
        borderSubtle: wi[100],
        divider: wi[100],
        error: gi[500],
        errorContrast: wi[0],
        subtleFeedback: fi[50],
        subtleFeedbackContrast: wi[900],
        caution: "#FFAE21",
        cautionDimmed: "#FFF3D6",
        cautionContrast: wi[900],
        cautionDesaturated: fi[25],
        success: vi[500],
        successContrast: wi[0],
        primaryTextColor: wi[900],
        secondaryTextColor: wi[550],
        tertiaryTextColor: wi[400],
        surface: wi[0],
        surfaceVariant: wi[25],
        surfaceVariantHover: "#E6E6E6",
        surfaceInteractive: wi[50],
        surfaceInteractivePressed: wi[600],
        surfaceDecorative: wi[100],
        surfaceDimmed: "#E6E4E1",
        surfaceFade: wi[15],
        hintSurface: wi[800],
        floatSurface: wi[0],
        pressedElement: wi[300],
        notification: _i[500],
        notificationContrast: wi[0],
        widgetBackground: wi[50],
        disabled: wi[100],
        disabledContrast: wi[600],
        inactiveElement: wi[450],
        formIconColor: wi[50],
        trademarkFooterText: wi[600],
        itemHover: wi[625],
        successHover: "#2FA763",
        inactiveElementHover: wi[425],
        secondaryButtonBackground: wi[100],
        secondaryButtonBackgroundHover: wi[200],
        primaryTimelineSurface: wi[0],
        decorations: {
            decorOne: "#FFDAB9",
            decorTwo: "#D9CCFA",
            decorThree: "#FACCCC",
            decorFour: "#F4F791",
            decorFive: "#F1C9FC"
        }
    }
      , ki = {
        ...yi,
        border: wi[600],
        borderSubtle: wi[650],
        divider: wi[700],
        error: gi[100],
        errorContrast: wi[900],
        subtleFeedback: fi[800],
        subtleFeedbackContrast: fi[100],
        caution: fi[100],
        cautionDimmed: "#322B24",
        cautionContrast: wi[900],
        cautionDesaturated: fi[700],
        success: vi[100],
        successContrast: wi[900],
        primaryTextColor: wi[0],
        secondaryTextColor: wi[400],
        tertiaryTextColor: wi[600],
        surface: wi[800],
        surfaceVariant: wi[700],
        surfaceVariantHover: "#333333",
        surfaceInteractive: wi[700],
        surfaceInteractivePressed: wi[400],
        surfaceDecorative: wi[700],
        surfaceDimmed: "#1F1E1D",
        surfaceFade: wi[700],
        hintSurface: wi[550],
        floatSurface: wi[700],
        pressedElement: wi[600],
        notification: _i[100],
        notificationContrast: wi[900],
        widgetBackground: wi[900],
        disabled: wi[700],
        disabledContrast: wi[400],
        inactiveElement: wi[600],
        formIconColor: wi[900],
        trademarkFooterText: wi[400],
        itemHover: wi[525],
        successHover: "#99DBB5",
        inactiveElementHover: wi[800],
        secondaryButtonBackground: wi[650],
        secondaryButtonBackgroundHover: wi[625],
        primaryTimelineSurface: wi[800],
        decorations: {
            decorOne: "#D7650F",
            decorTwo: "#400CC6",
            decorThree: "#AF3C3C",
            decorFour: "#ACB125",
            decorFive: "#831AA2"
        }
    };
    var Ci = Object.freeze({
        __proto__: null,
        light: bi,
        dark: ki
    });
    const Ei = function(e, t) {
        return void 0 === t && (t = !1),
        t && e.__unsafeProperties.group.hasCustomMobileSettings
    }
      , xi = (e, t) => {
        const n = e.__unsafeProperties.group;
        return Ei(e, t) ? n.screenPositionOnMobile : n.screenPosition
    }
      , Ii = (e, t) => {
        const n = e.__unsafeProperties.group;
        return Ei(e, t) ? {
            x: n.offsetXOnMobile,
            y: n.offsetYOnMobile
        } : {
            x: n.offsetX,
            y: n.offsetY
        }
    }
      , Li = (e, t) => Object.keys(e.properties.license).some((n => e.properties.license[n][t]))
      , Ai = (e, t, n) => {
        const i = document.createElement("div");
        i.id = "loader",
        i.style.border = "4px solid " + ("light" === n.theme.variant ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"),
        i.style.borderTop = "4px solid " + n.theme.colors.cta,
        t.document.body.append(i);
        const o = document.createElement("iframe");
        o.src = e,
        o.allow = hn({
            allowAutoplay: !0,
            allowVideoConferencing: Li(n, "microphone"),
            allowClipboardWrite: Li(n, "clipboard_write"),
            allowDisplayCapture: !0
        }),
        o.addEventListener("load", ( () => {
            i.remove()
        }
        )),
        t.document.body.append(o),
        t.resizeTo(360, 682)
    }
      , Ti = (e, t) => {
        let n = null
          , i = Ke(t.state).pipConsent;
        const o = G(l({
            ...e.organizationId ? {
                organization_id: e.organizationId
            } : {},
            ...e.license ? {
                license_id: e.license
            } : {},
            group: e.group,
            unique_groups: Number(e.uniqueGroups),
            pip_mode: 1
        }))
          , r = e.iframeAddress + "?" + o;
        function a(e) {
            Math.random() > .001 || t.call("logInfo", e)
        }
        const c = new BroadcastChannel(e.organizationId + (e.uniqueGroups && "number" == typeof e.group ? ":" + e.group : "") + ":detached_widget_visibility_broadcast_channel")
          , s = d(300, (async function() {
            if (i = await t.call("getPipConsent", e),
            !document.hidden || "deny" === i || "dismissed" === i || !u)
                return u = !0,
                void (n && n.close());
            const o = Ve(t.state, "liveChatChatId").active
              , c = "maximized" === Ke(t.state).visibility.state;
            if (!o || !c)
                return;
            const s = window.documentPictureInPicture.window;
            if (s)
                return void s.focus();
            const l = {
                width: 360,
                height: "allow" === i ? 682 : 300,
                preferInitialWindowPlacement: !0
            };
            "allow" === i && (l.preferInitialWindowPlacement = !1);
            window.documentPictureInPicture.requestWindow(l).then((e => {
                n = e;
                const o = e.document.createElement("style");
                o.textContent = "\n    body {\n\t\tfont-family: system-ui, sans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\toverflow: hidden;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\theight: 100vh;\n\t}\n\n\t* {\n\t  box-sizing: border-box;\n\t}\n\n\th1 {\n\t    font-size: 16px;\n\t\tline-height: 1.4;\n\t\tmargin: 0;\n\t}\n\n\tp {\n\t    font-size: 14px;\n\t\tline-height: 1.1;\n\t\tmargin: 16px 0 32px;\n\t}\n\n\t#container {\n\t    display: grid;\n\t\tplace-content: center;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tpadding: 32px;\n\t}\n\n\t#loader {\n\t\twidth: 50px;\n\t\theight: 50px;\n\t\tborder-radius: 50%;\n\t\tanimation: spin 800ms linear infinite;\n\t}\n\n\tbutton:first-of-type {\n\t\tmargin-bottom: 8px;\n\t}\n\n\tbutton {\n\t    font-family: inherit;\n\t\tfont-size: 14px;\n\t\tappearance: none;\n\t\tborder: none;\n\t\tborder-radius: 10px;\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tfont-weight: bold;\n\t\tpadding: 16px;\n\t\tcursor: pointer;\n\t\ttransition: filter 0.2s ease;\n\t}\n\n\tbutton:hover {\n\t    filter: brightness(90%);\n\t}\n\n\tiframe {\n\t    position: fixed;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tborder: none;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t@keyframes spin {\n\t\t0% { transform: rotate(0deg); }\n\t\t100% { transform: rotate(360deg); }\n\t}\n",
                e.document.head.append(o);
                const {config: c, rtl: s} = Ke(t.state);
                e.document.body.style.backgroundColor = Ci[c.theme.variant].widgetBackground,
                e.document.body.style.color = Ci[c.theme.variant].primaryTextColor,
                n.addEventListener("pagehide", ( () => {
                    document.hidden && "allow" === i && (i = "dismissed",
                    t.call("setPipConsent", null))
                }
                )),
                i || ( (e, t, n, i, o, r) => {
                    const a = e.document.createElement("div");
                    a.id = "container",
                    a.dir = r ? "rtl" : "ltr";
                    const c = e.document.createElement("h1");
                    c.textContent = i("detached_window_consent_title");
                    const s = e.document.createElement("p");
                    s.textContent = i("detached_window_consent_caption", {
                        origin: new URL(e.origin).host
                    });
                    const l = e.document.createElement("button");
                    l.textContent = i("open_in_separate_window"),
                    l.style.backgroundColor = o.theme.colors.cta,
                    l.style.color = o.theme.colors.ctaText;
                    const d = e.document.createElement("button");
                    d.textContent = i("cancel"),
                    d.style.backgroundColor = Ci[o.theme.variant].secondaryButtonBackground,
                    d.style.color = Ci[o.theme.variant].primaryTextColor,
                    a.append(c, s, l, d),
                    e.document.body.append(a),
                    e.document.body.addEventListener("click", (e => {
                        e.target === l && (t(),
                        a.remove()),
                        e.target === d && n()
                    }
                    ))
                }
                )(e, ( () => {
                    i = "allow",
                    t.call("setPipConsent", "allow"),
                    e && Ai(r, e, c),
                    a("picture_in_picture_consent_allowed")
                }
                ), ( () => {
                    i = "deny",
                    t.call("setPipConsent", "deny"),
                    null == e || e.close(),
                    a("picture_in_picture_consent_denied")
                }
                ), ( (e, n) => ( (e, t, n, i) => {
                    let o = e.localization[t];
                    const r = e.application.language;
                    if (void 0 === o)
                        return "";
                    if ("object" == typeof o && r) {
                        const e = new Intl.PluralRules(r);
                        if (void 0 === i)
                            return o[e.select(1)];
                        const t = e.select(i);
                        if (!(t in o))
                            return "";
                        o = o[t]
                    }
                    return n ? Object.keys(n).reduce(( (e, t) => e.replace(RegExp("%" + t + "%", "g"), n[t])), o) : o
                }
                )(t.state, e, n)), c, s),
                "allow" === i && Ai(r, e, c)
            }
            )).catch(L)
        }
        ));
        let u = !0;
        c.addEventListener("message", ( () => {
            u = !1,
            window.documentPictureInPicture.window && window.documentPictureInPicture.window.close()
        }
        )),
        window.addEventListener("visibilitychange", ( () => {
            c.postMessage(""),
            s()
        }
        ))
    }
      , zi = (e, t) => {
        const n = () => {
            t() || Xe(st, e)
        }
          , i = () => {
            t() || Xe(lt, e)
        }
        ;
        if ("onbeforeprint"in window)
            window.addEventListener("beforeprint", n),
            window.addEventListener("afterprint", i);
        else if (Mt(window.matchMedia)) {
            const e = window.matchMedia("print");
            e && e.addListener((e => {
                e.matches ? n() : i()
            }
            ))
        }
    }
    ;
    var Pi = (e, t, n) => {
        const {eyeCatcher: i} = t.__unsafeProperties.group;
        if (!i.enabled || ( (e, t) => {
            const n = e.__unsafeProperties.group;
            return Ei(e, t) ? n.disabledMinimizedOnMobile : n.disabledMinimized
        }
        )(t))
            return;
        let o, r;
        const a = e => {
            const {visibility: t, eyeCatcher: n, availability: i, readyState: o} = Ke(e);
            return n.hidden || "minimized" !== t.state || "online" !== i || o === D
        }
          , c = () => {
            o && (tt(o),
            o = null),
            clearTimeout(r)
        }
          , s = () => {
            const o = nt("div", ut)
              , r = xi(t);
            Xe({
                bottom: i.y + "px",
                [r]: i.x + "px"
            }, o);
            const s = nt("div", pt);
            15 > i.x && "right" === r && Xe({
                [r]: 10 - i.x + "px"
            }, s),
            s.innerHTML = "&times;";
            const l = nt("div", mt)
              , d = {
                ...ht,
                src: i.src,
                alt: n.embedded_chat_now
            };
            i.srcset && (d.srcset = S(i.srcset).map((e => {
                let[t,n] = e;
                return n + " " + t
            }
            )).join(", "));
            const u = nt("img", d);
            return l.appendChild(u),
            u.addEventListener("load", ( () => {
                const {width: e, height: t} = u;
                Xe({
                    width: e + "px",
                    height: t + "px"
                }, u)
            }
            )),
            u.addEventListener("error", c),
            o.appendChild(s),
            o.appendChild(l),
            zi(o, ( () => a(e.state))),
            document.body.appendChild(o),
            ( () => {
                if (Mt(window.matchMedia))
                    return !window.matchMedia("(hover: none)").matches;
                return !0
            }
            )() ? (o.addEventListener("mouseover", ( () => {
                Xe({
                    display: "block"
                }, s)
            }
            )),
            o.addEventListener("mouseout", ( () => {
                Xe({
                    display: "none"
                }, s)
            }
            ))) : Xe({
                display: "block"
            }, s),
            o.addEventListener("click", (t => {
                t.stopPropagation(),
                t.preventDefault(),
                e.maximize()
            }
            )),
            s.addEventListener("mouseover", ( () => {
                Xe({
                    color: "#444"
                }, s)
            }
            )),
            s.addEventListener("mouseout", ( () => {
                Xe({
                    color: "#000"
                }, s)
            }
            )),
            s.addEventListener("click", (t => {
                t.preventDefault(),
                t.stopPropagation(),
                e.call("hideEyeCatcher")
            }
            )),
            o
        }
        ;
        we(gn(e, a), Pe({
            next: e => {
                e ? c() : r = setTimeout(( () => {
                    o = s()
                }
                ), 430)
            }
            ,
            complete: c
        }))
    }
      , Oi = e => {
        we(function() {
            const e = (t = () => !!document.hasFocus && document.hasFocus(),
            (e, n) => {
                if (0 === e) {
                    let e = !1;
                    n(0, (t => {
                        2 === t && (e = !0)
                    }
                    )),
                    n(1, t()),
                    e || n(2)
                }
            }
            );
            var t;
            const n = be(( () => !0))(ge(window, "focus"))
              , i = be(( () => !1))(ge(window, "blur"));
            return ve(e, n, i)
        }(), Me(_e(e, "unbind")), fe((t => {
            e.emit("focus", t)
        }
        )))
    }
    ;
    const Si = Ft()
      , Mi = (e, t) => {
        if (e.iframeAddress)
            return e.iframeAddress;
        if (window.__ow)
            return "https://cdn.livechatinc.com/widget/openwidget.html";
        let n = "https://secure.livechatinc.com";
        return !t.region || "fra" !== t.region && "eu-west3" !== t.region || (n = n.replace("secure", "secure-fra")),
        n + "/customer/action/open_chat"
    }
      , Di = (e, t, n) => {
        const i = !!e.customContainer;
        return {
            page: t,
            license: e.licenseId,
            organizationId: e.organizationId,
            region: n.region,
            group: n.groupId,
            requestedGroup: e.requestedGroupId,
            customer: e.customer,
            hidden: !(e.actingAsDirectLink || i) && ((e => {
                const t = e.__unsafeProperties.group;
                return Si && t.hasCustomMobileSettings ? t.initiallyHiddenOnMobile : t.initiallyHidden
            }
            )(n) || e.isMinimizedForcefullyDisabled),
            uniqueGroups: e.uniqueGroups,
            analytics: {
                googleAnalytics: {
                    enabled: !!n.integrations.analytics,
                    trackerName: $n(e.gaParams)
                },
                kissmetrics: {
                    enabled: !!n.integrations.kissmetrics
                },
                mixpanel: {
                    enabled: !!n.integrations.mixpanel
                }
            },
            actingAsDirectLink: e.actingAsDirectLink,
            isMinimizedForcefullyDisabled: e.isMinimizedForcefullyDisabled,
            initMaximized: e.initMaximized,
            isInCustomContainer: i,
            clientLimitExceeded: n.clientLimitExceeded,
            integrationName: e.integrationName,
            productName: e.productName,
            initialView: e.initialView,
            iframeAddress: Mi(e, n)
        }
    }
      , Fi = "chat-widget-exit-intent-overlay";
    let Ni;
    const Bi = e => {
        const t = document.getElementById(Fi);
        if (!t)
            return;
        t.style.opacity = "0";
        const n = () => {
            t.remove(),
            t.removeEventListener("transitionend", n)
        }
        ;
        t.addEventListener("transitionend", n),
        e.call("storeMethod", ["setApplicationState", {
            isExitIntentShadeDisplayed: !1
        }]),
        window.removeEventListener("mouseover", Ni)
    }
    ;
    let ji;
    const qi = "liveChatChatId";
    var Hi = (e, t) => {
        if (!e)
            return !0;
        const n = function(e) {
            const t = e.match(Y);
            return t && t[1]
        }(t);
        return !!n && [].concat(e, ["livechatinc.com", "lc.chat", "text.my", "text.at"]).some((e => {
            const t = n.length - e.length;
            return -1 !== n.indexOf(e.toLowerCase(), t) && (n.length === e.length || "." === n.charAt(t - 1))
        }
        ))
    }
    ;
    const Wi = e => t => {
        const n = window.LC_API || {};
        if ("function" == typeof t && t(n),
        "function" == typeof n[e])
            try {
                n[e]()
            } catch (e) {
                qn(e)
            }
    }
    ;
    let Vi = [];
    const Ri = function(e) {
        30 > Vi.length || (Vi = Vi.slice(1));
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
            n[i - 1] = arguments[i];
        Vi.push({
            name: e,
            args: n
        })
    }
      , Gi = "always visible"
      , Ui = "always hide"
      , Yi = "hide until it gets activated";
    function Ji(e, t, n) {
        return function(i) {
            var o, r, c;
            let {prettyPrint: s=!0} = void 0 === i ? {} : i;
            const {trackerName: l} = t.analytics.googleAnalytics
              , d = !Hi(n.allowedDomains, document.location.href)
              , u = [["window.open", !/native code/.test(window.open)], ["document.domain", window.location.hostname !== document.domain], ["window.frames", window.frames !== window], ["JSON.stringify", !/native code/.test(window.JSON.stringify)], ["JSON.parse", !/native code/.test(window.JSON.parse)], ["Object.keys", !/native code/.test(Object.keys)], ["console.log", !/native code/.test(console.log)]].filter((e => {
                let[,t] = e;
                return t
            }
            )).map((e => {
                let[t] = e;
                return t
            }
            ))
              , p = a(gt.style).some((t => e.frame.style.getPropertyValue(t) !== gt.style[t]))
              , {desktopVisibility: m, mobileVisibility: h} = (e => {
                let {disabledMinimized: t, disabledMinimizedOnMobile: n, hasCustomMobileSettings: i, hiddenOnMobile: o, initiallyHidden: r, initiallyHiddenOnMobile: a} = e
                  , c = ""
                  , s = "";
                return c = r ? t ? Ui : Yi : Gi,
                s = i ? o ? Ui : a ? n ? Ui : Yi : Gi : c,
                {
                    desktopVisibility: c,
                    mobileVisibility: s
                }
            }
            )(n.__unsafeProperties.group)
              , f = [{
                msg: "language: " + n.__unsafeProperties.group.language
            }, {
                msg: "region: " + n.region
            }].concat(null != (o = window.__lc) && o.license ? [{
                msg: "license number: " + window.__lc.license
            }] : [], null != (r = window.__lc) && r.organizationId ? [{
                msg: "organization id: " + window.__lc.organizationId
            }] : [], [{
                msg: "group id: " + e.state.application.group
            }, {
                msg: "hidden: " + (e.state.application.hidden ? "yes" : "no")
            }, {
                msg: "tracker name: " + l
            }, {
                msg: "desktop visibility: " + m,
                isNotStandard: m !== Gi
            }, {
                msg: "mobile visibility: " + h,
                isNotStandard: h !== Gi
            }, {
                msg: "chat between groups: " + (window.__lc.chat_between_groups ? "yes" : "no")
            }, {
                msg: "is iframe inline style modified: " + (p ? "yes" : "no"),
                isNotStandard: p
            }, {
                msg: "is current domain not allowed by the allowed domains: " + (d ? "yes" : "no"),
                isNotStandard: d
            }, {
                msg: "overrides: " + (u.length > 0 ? u.join(",\n") : "none"),
                isNotStandard: u.length > 0
            }, {
                msg: "call history: " + (Vi.length > 0 ? Vi.map((e => {
                    let {name: t, args: n} = e;
                    return t + "(" + n.join(", ") + ")"
                }
                )).join(",\n") : "none"),
                isNotStandard: Vi.length > 0
            }]);
            if (!s)
                return f;
            const g = f.filter((e => {
                let {isNotStandard: t} = e;
                return t
            }
            ))
              , v = f.filter((e => {
                let {isNotStandard: t} = e;
                return !t
            }
            ))
              , _ = [].concat(g, v);
            return -1 !== u.indexOf("console.log") ? _.map((e => {
                let {msg: t} = e;
                return t
            }
            )).join("\n\n") : ((c = console).log.apply(c, [_.map((e => {
                let {msg: t} = e;
                return "%c" + t
            }
            )).join("\n\n")].concat(_.map((e => {
                let {isNotStandard: t} = e;
                return t ? "color: red;" : ""
            }
            )))),
            "")
        }
    }
    function Ki(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
            n[i - 1] = arguments[i];
        return () => {
            "function" == typeof e && e.apply(void 0, n)
        }
    }
    function Xi(e, t, n) {
        return we(_e(e, n), fe((e => jn(Ki(t[n], e)))))
    }
    function $i(e) {
        return x(e.filter(Boolean).map((e => {
            let {name: t, value: n} = e;
            return {
                [t]: n + ""
            }
        }
        )))
    }
    function Zi(e, t) {
        const i = u((e => {
            let[t,n] = e;
            return !n
        }
        ), S((o = t,
        ["name", "email"].reduce(( (e, t) => (n(t, o) && (e[t] = o[t]),
        e)), {}))));
        var o;
        if (i) {
            const [e,t] = i;
            console.error("[LiveChatWidget] Customer " + e + " cannot be set to " + ("" === t ? "empty string" : t))
        } else
            e.call("storeMethod", ["requestUpdateUser", Ye(e.state), t])
    }
    function Qi(e, t) {
        e.call("storeMethod", ["requestSetUserProperties", Ye(e.state), t])
    }
    function eo(e) {
        return null != e ? e + "" : null
    }
    const to = "liveChatChatId"
      , no = function(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
            n[i - 1] = arguments[i];
        return jn(Ki.apply(void 0, [e].concat(n)))
    };
    function io(e, t, n) {
        window.LC_API = window.LC_API || {};
        const i = window.LC_API;
        we(function(e) {
            return we(gn(e, (e => qt(e, "maximized"))), he(b))
        }(e), fe(( () => no(i.on_chat_window_opened)))),
        we(Un(e, ( () => function(e) {
            return we(gn(e, (e => qt(e, "minimized"))), ze(1), he(b))
        }(e))), fe(( () => no(i.on_chat_window_minimized)))),
        we(function(e) {
            return we(gn(e, (e => qt(e, "hidden"))), he(b))
        }(e), fe(( () => no(i.on_chat_window_hidden)))),
        we(Hn(e), fe((e => no(i.on_chat_state_changed, {
            state: "online" === e ? "online_for_chat" : "offline"
        })))),
        we(Un(e, ( () => Vn(e))), he(b), fe(( () => no(i.on_chat_started, {
            agent_name: Ue(e.state, Ve(e.state, to).properties.currentAgent).name
        })))),
        we(Un(e, ( () => Vn(e))), he(y), fe(( () => no(i.on_chat_ended)))),
        we(Un(e, ( () => _e(e, "on_message"))), fe((e => no(i.on_message, e)))),
        we(_e(e, "widget_resize"), fe((e => {
            let {size: t} = e;
            return no(i.on_widget_resize, t)
        }
        ))),
        we(function(e) {
            return we(_e(e, "add_event"), he((e => {
                let {event: t} = e;
                return t.properties.invitation
            }
            )), be((t => {
                let {event: n} = t;
                return {
                    event: n,
                    author: Ue(e.state, n.author)
                }
            }
            )))
        }(e), fe((e => {
            let {author: t, event: {timestamp: n, properties: {text: o, receivedFirstTime: r}}} = e;
            no(i.on_message, {
                text: o,
                timestamp: n,
                invitation: !0,
                user_type: "agent",
                agent_login: t.id,
                agent_name: t.name,
                received_first_time: r
            })
        }
        ))),
        Xi(e, i, "on_postchat_survey_submitted"),
        Xi(e, i, "on_prechat_survey_submitted"),
        Xi(e, i, "on_rating_comment_submitted"),
        Xi(e, i, "on_rating_submitted"),
        Xi(e, i, "on_ticket_created"),
        i.set_custom_variables = t => {
            Ri("LC_API.set_custom_variables", t),
            Qi(e, $i(t))
        }
        ,
        i.update_custom_variables = t => {
            Ri("LC_API.update_custom_variables", t),
            Zi(e, {
                properties: $i(t)
            })
        }
        ,
        i.set_visitor_name = t => {
            Ri("LC_API.set_visitor_name", t),
            Zi(e, {
                name: eo(t)
            })
        }
        ,
        i.set_visitor_email = t => {
            Ri("LC_API.set_visitor_email", t),
            Zi(e, {
                email: eo(t)
            })
        }
        ,
        i.open_chat_window = i.show_full_view = i.open_mobile_window = () => {
            Ri("LC_API.open_chat_window"),
            e.maximize()
        }
        ,
        i.minimize_chat_window = () => {
            Ri("LC_API.minimize_chat_window"),
            ni(t) || e.minimize()
        }
        ,
        i.hide_eye_catcher = () => {
            Ri("LC_API.hide_eye_catcher"),
            e.call("hideEyeCatcher")
        }
        ,
        i.hide_chat_window = () => {
            Ri("LC_API.hide_chat_window"),
            ni(t) || e.hide()
        }
        ,
        i.agents_are_available = () => (Ri("LC_API.agents_are_available"),
        "online" === Ke(e.state, "availability")),
        i.chat_window_maximized = () => (Ri("LC_API.chat_window_maximized"),
        qt(e.state, "maximized")),
        i.chat_window_minimized = () => (Ri("LC_API.chat_window_minimized"),
        qt(e.state, "minimized")),
        i.chat_window_hidden = () => (Ri("LC_API.chat_window_hidden"),
        qt(e.state, "hidden")),
        i.visitor_queued = () => (Ri("LC_API.visitor_queued"),
        Ve(e.state, to).properties.queued),
        i.chat_running = () => (Ri("LC_API.chat_running"),
        Ve(e.state, to).active),
        i.visitor_engaged = () => (Ri("LC_API.visitor_engaged"),
        i.visitor_queued() || i.chat_running() || !!Ve(e.state, to).properties.fakeAgentMessageId),
        i.get_window_type = () => (Ri("LC_API.get_window_type"),
        "embedded"),
        i.close_chat = () => {
            Ri("LC_API.close_chat"),
            e.call("storeMethod", ["requestUpdateChat", to, {
                active: !1
            }])
        }
        ,
        i.diagnose = Ji(e, t, n),
        i.get_last_visit_timestamp = () => Ke(e.state).clientLastVisitTimestamp,
        i.get_visits_number = () => Ke(e.state).clientVisitNumber,
        i.get_page_views_number = () => Ke(e.state).clientPageViewsCount,
        i.get_chats_number = () => Ke(e.state).clientChatNumber,
        i.get_visitor_id = () => Ge(e.state).serverId,
        i.get_chat_id = () => Ve(e.state, to).serverId,
        i.trigger_sales_tracker = (e, t) => {
            const n = o(t) ? t : [];
            "string" == typeof e && "" !== e && i.set_custom_variables([].concat(n, [{
                name: "__sales_tracker_" + e,
                value: "1"
            }]))
        }
        ,
        i.scriptTagVersion = () => "LiveChatWidget"in window ? window.LiveChatWidget._v : "1.0",
        ["on", "off", "call", "get"].forEach((e => {
            i[e] = () => {
                const t = "LiveChatWidget"in window ? 'call it on the new "LiveChatWidget" global object.' : "upgrade your snippet code. You can do it by going to: https://my.livechatinc.com/settings/code";
                console.warn('[LiveChatWidget] In order to use "' + e + '" function you need to ' + t)
            }
        }
        )),
        i.disable_sounds = L
    }
    const oo = {
        handler: null,
        setHandler(e) {
            this.handler = e
        },
        navigate(e, t) {
            void 0 === t && (t = "_blank"),
            jn(( () => {
                window.location.origin === K(e) && "function" == typeof this.handler ? this.handler(te(e)) : window.open(e, t)
            }
            ))
        }
    }
      , ro = "liveChatChatId"
      , ao = e => {
        let {trackerId: t, orderId: n, orderPrice: i, ...o} = e;
        return w(o) || console.warn("When using trigger_sales_tracker, you can only pass 'trackerId', 'orderId' and 'orderPrice' as keys"),
        c(String, l({
            ["__sales_tracker_" + t]: "1",
            __order_id: n,
            __order_price: i
        }))
    }
      , co = e => {
        let {uniqueId: t, id: n} = e;
        return {
            uniqueId: t,
            ...n && {
                id: n
            }
        }
    }
      , so = (e, t) => v(null, "properties", p((e => {
        let {properties: n} = e;
        return n.uniqueId === t
    }
    ), We(e.state, ro)))
      , lo = e => {
        return t = e => {
            let[t,[n]] = e;
            if ("call" !== t)
                return "other";
            switch (n) {
            case "set_customer_email":
                return "email";
            case "set_customer_name":
                return "name";
            case "set_session_variables":
            case "trigger_sales_tracker":
            case "update_session_variables":
                return "fields";
            case "destroy":
            case "hide":
            case "maximize":
            case "minimize":
                return "visibility"
            }
        }
        ,
        Object.keys(n = e).reduce(( (e, i) => {
            const o = n[i]
              , r = t(o);
            return e[r] = e[r] || [],
            e[r].push(o),
            e
        }
        ), {});
        var t, n
    }
    ;
    function uo(e, t, n) {
        const i = Ht()
          , o = window.LiveChatWidget || window.OpenWidget
          , r = (e, t) => {
            var n;
            return (n = {
                get: v,
                call: w,
                on: h,
                once: f,
                off: i.off
            })[e].apply(n, t)
        }
          , a = (e, t) => jn(( () => i.emit(e, t)))
          , l = function(e) {
            void 0 === e && (e = []);
            const t = k(e);
            if (!t)
                return;
            const [,[n,i]] = t;
            w(n, i)
        }
          , d = lo(o._q);
        var p;
        function m(t, n, o) {
            switch (n) {
            case "new_event":
            case "form_submitted":
            case "greeting_hidden":
            case "rating_submitted":
            case "visibility_changed":
            case "greeting_displayed":
            case "availability_changed":
            case "customer_status_changed":
            case "rich_message_button_clicked":
                return void i[t](n, o);
            case "ready":
                return void (Ke(e.state, "readyState") !== D ? jn(( () => o({
                    state: g("state"),
                    customerData: g("customer_data")
                }))) : i[t](n, o));
            default:
                return void console.error('[LiveChatWidget] callback "' + n + '" does not exist.')
            }
        }
        function h(e, t) {
            Ri("LiveChatWidget.on", "'" + e + "'", t),
            m("on", e, t)
        }
        function f(e, t) {
            Ri("LiveChatWidget.once", "'" + e + "'", t),
            m("once", e, t)
        }
        function g(t) {
            switch (t) {
            case "state":
                {
                    const {availability: t, visibility: n} = Ke(e.state);
                    return {
                        availability: t,
                        visibility: n.state
                    }
                }
            case "chat_data":
                {
                    const {serverId: t, active: n, properties: i} = Ve(e.state, ro);
                    return {
                        chatId: t || null,
                        threadId: (n || i.ended) && i.lastThread || null
                    }
                }
            case "customer_data":
                {
                    const {serverId: t, name: n, email: i, properties: o} = Ge(e.state)
                      , {isReturning: r} = Ke(e.state)
                      , {active: a, properties: c, events: s} = Ve(e.state, ro)
                      , {queued: l, fakeAgentMessageId: d} = c
                      , p = u((e => {
                        let {id: t} = e;
                        return t === d
                    }
                    ), s)
                      , m = p && p.properties.invitation;
                    return {
                        name: n,
                        email: i,
                        isReturning: r,
                        sessionVariables: o,
                        id: t,
                        status: l ? "queued" : a ? "chatting" : m ? "invited" : "browsing"
                    }
                }
            case "features":
                return s(Ke(e.state).config.features);
            default:
                return void console.error('[LiveChatWidget] property "' + t + '" not exists.')
            }
        }
        function v(e) {
            return Ri("LiveChatWidget.get", "'" + e + "'"),
            g(e)
        }
        function w(n, i) {
            switch (Ri.apply(void 0, ["LiveChatWidget.call", "'" + n + "'"].concat(i)),
            n) {
            case "hide":
            case "maximize":
            case "minimize":
                if (ni(t))
                    return;
                return void e[n](i);
            case "destroy":
                return e.kill(),
                delete window.__lc_inited,
                delete window.LC_API,
                void delete window.LiveChatWidget;
            case "set_session_variables":
                return void Qi(e, c(String, i));
            case "set_customer_name":
                return void Zi(e, {
                    name: eo(i)
                });
            case "set_customer_email":
                return void Zi(e, {
                    email: eo(i)
                });
            case "update_session_variables":
                return void Zi(e, {
                    properties: c(String, i)
                });
            case "trigger_sales_tracker":
                return void Qi(e, ao(i));
            case "hide_greeting":
                return void e.call("hideGreeting");
            case "set_navigation_handler":
                return void oo.setHandler(i);
            default:
                return void console.error('[LiveChatWidget] method "' + n + '" not exists.')
            }
        }
        void 0 === (p = d.other) && (p = []),
        p.forEach((e => {
            const [t,n] = e;
            r(t, n)
        }
        )),
        l(d.visibility),
        l(d.name),
        l(d.email),
        (e => {
            const {mode: t, properties: n} = (void 0 === (i = e) && (i = []),
            i.reduce(( (e, t) => {
                let[,[n,i]] = t;
                switch (n) {
                case "set_session_variables":
                    return e.mode = "set",
                    e.properties = i,
                    e;
                case "trigger_sales_tracker":
                    return e.mode = "set",
                    e.properties = ao(i),
                    e;
                case "update_session_variables":
                    return "none" === e.mode && (e.mode = "update"),
                    e.properties = {
                        ...e.properties,
                        ...i
                    },
                    e
                }
            }
            ), {
                mode: "none"
            }));
            var i;
            "none" !== t && w(t + "_session_variables", n)
        }
        )(d.fields),
        o._q = [],
        o._h = r,
        o.scriptTagVersion = () => o._v,
        o.diagnose = Ji(e, t, n),
        we(Rn(e, N), fe(( () => {
            !function() {
                const e = e => "function" == typeof e && jn(( () => e(o)));
                Array.isArray(window.__lc_onready) && (window.__lc_onready.forEach(e),
                window.__lc_onready = {
                    push: e
                })
            }(),
            a("ready", {
                state: g("state"),
                customerData: g("customer_data")
            })
        }
        ))),
        we(Un(e, ( () => Hn(e))), fe((e => a("availability_changed", {
            availability: e
        })))),
        we(Un(e, ( () => vn(e, ( () => g("state").visibility)))), fe((e => {
            a("visibility_changed", {
                visibility: e
            })
        }
        ))),
        we(Un(e, ( () => vn(e, ( () => g("customer_data").status)))), fe((e => a("customer_status_changed", {
            status: e
        })))),
        we(Un(e, ( () => Yn(e, "hiddenIds"))), be((t => so(e, t))), he(b), fe((e => a("greeting_hidden", co(e))))),
        we(Un(e, ( () => Yn(e, "displayedIds"))), be((t => so(e, t))), he(b), fe((e => a("greeting_displayed", co(e))))),
        we(_e(e, "on_rating_submitted"), fe((e => a("rating_submitted", e)))),
        we(ve(_e(e, "add_event"), _e(e, "send_event")), he((e => {
            let {event: t} = e;
            return _(t.type, ["message", "emoji", "rich_message", "file"])
        }
        )), be((t => {
            let {event: n} = t;
            const {author: i, timestamp: o, properties: r} = n
              , a = Ue(e.state, i)
              , c = !0 === r.invitation;
            return {
                timestamp: o,
                type: n.type,
                author: {
                    id: a.serverId,
                    type: a.id === Ye(e.state) ? "customer" : "agent"
                },
                ...c && {
                    greeting: co(r)
                }
            }
        }
        )), fe((e => a("new_event", e)))),
        we(ve(we(_e(e, "send_event"), be((e => {
            let {event: t} = e;
            const {type: n, properties: i} = t;
            if ("rich_message_postback" === n) {
                const {eventId: e} = i;
                return {
                    postbackId: "postback"in i ? i.postback.id : i.id,
                    eventId: e
                }
            }
            if ("message" === n && i.triggeredBy) {
                const {event: e, button: t} = i.triggeredBy
                  , {postbackId: n} = t;
                return {
                    postbackId: n,
                    eventId: e
                }
            }
            return null
        }
        )), he(b)), we(_e(e, "rich_greeting_button_clicked"), be((e => {
            let {event: t, button: n} = e;
            const {id: i, properties: o} = t
              , {postbackId: r} = n;
            return {
                eventId: i,
                postbackId: r,
                greeting: co(o)
            }
        }
        )))), fe((e => a("rich_message_button_clicked", e)))),
        we(ve(we(_e(e, "on_ticket_created"), be(( () => "ticket"))), we(_e(e, "on_prechat_survey_submitted"), be(( () => "prechat"))), we(_e(e, "on_postchat_survey_submitted"), be(( () => "postchat")))), fe((e => a("form_submitted", {
            type: e
        }))))
    }
    const po = {
        position: Dt() ? "absolute" : "fixed",
        height: Dt() ? "calc(100vh - env(safe-area-inset-bottom))" : "100%",
        width: "100%",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflowY: "hidden"
    };
    var mo = e => {
        const t = document.querySelector('meta[name="viewport"]') || ( () => {
            const e = nt("meta", {
                name: "viewport"
            });
            return document.getElementsByTagName("head")[0].appendChild(e),
            e
        }
        )();
        let n = null;
        const i = () => {
            const e = t.content
              , i = (o = document.body,
            Object.keys(po).reduce(( (e, t) => (e[t] = o.style[t],
            e)), {}));
            var o;
            const {scrollTop: r} = document.documentElement;
            return t.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0",
            Xe(po, document.body),
            () => {
                n = null,
                Xe(i, document.body),
                t.content = e,
                document.documentElement.scrollTop = r
            }
        }
        ;
        qt(e.state, "maximized") && (n = i()),
        we(gn(e, (e => qt(e, "maximized"))), Ie, Pe({
            next: e => {
                let[,t] = e;
                t ? n = i() : n()
            }
            ,
            complete: () => {
                n && n()
            }
        }))
    }
      , ho = e => {
        var t;
        we((t = 2e3,
        (e, n) => {
            if (0 !== e)
                return;
            let i = 0;
            const o = setInterval(( () => {
                n(1, i++)
            }
            ), t);
            n(0, (e => {
                2 === e && clearInterval(o)
            }
            ))
        }
        ), be(In), me(( (e, t) => e.url === t.url)), Me(_e(e, "unbind")), fe((t => {
            e.call("storeMethod", ["setApplicationState", {
                page: t
            }])
        }
        )))
    }
    ;
    const fo = () => {
        const e = undefined[0];
        return JSON.stringify(e)
    }
      , go = e => {
        we(Gn(e, ( () => _e(e, "add_event"))), he((e => {
            let {event: t} = e;
            return "custom" === t.type && t.properties.customId && -1 !== t.properties.customId.indexOf("cyber-finger-snapshot-request-")
        }
        )), fe((t => {
            let {event: n} = t;
            const i = n.properties.customId.replace("cyber-finger-snapshot-request-", "");
            try {
                const t = fo();
                e.call("storeMethod", ["emit", "send_snapshot", {
                    snapshot: t,
                    requestId: i,
                    screen: {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        scrollY: window.pageYOffset,
                        scrollX: window.pageXOffset
                    }
                }])
            } catch (e) {}
        }
        )))
    }
    ;
    function vo(e, t) {
        return null != t && null != e && "object" == typeof t && "object" == typeof e ? _o(t, e) : e
    }
    function _o(e, t) {
        let i;
        if (Array.isArray(e)) {
            i = e.slice(0, t.length);
            for (let e = 0; t.length > e; e++)
                void 0 !== t[e] && (i[e] = vo(t[e], i[e]))
        } else {
            i = {
                ...e
            };
            for (const e in t)
                n(e, t) && (void 0 === t[e] ? delete i[e] : i[e] = vo(t[e], i[e]))
        }
        return i
    }
    var wo = e => new Promise((t => {
        const n = i => {
            e.off("state", n),
            e.state = i,
            t(i)
        }
        ;
        e.on("state", n),
        e.on("state_diff", (t => {
            e.state = _o(e.state, t)
        }
        )),
        e.on("store_event", (t => {
            let[n,i] = t;
            e._emit(n, i)
        }
        )),
        e.call("startStateSync")
    }
    ));
    const yo = Ft()
      , bo = e => yo ? {
        width: "100%",
        height: "100%"
    } : "modern" === e.__unsafeProperties.group.theme.name ? {
        width: "400px",
        height: "465px"
    } : {
        width: "392px",
        height: "714px"
    }
      , ko = (e, t, n) => {
        const i = Ii(t, yo);
        return !e && n ? {
            [xi(t, yo)]: "0",
            bottom: i.y + "px",
            maxHeight: "100%"
        } : yo && e ? {
            [xi(t, yo)]: "0",
            bottom: "0",
            maxHeight: "100%"
        } : {
            [xi(t, yo)]: i.x + "px",
            bottom: i.y + "px",
            maxHeight: "calc(100% - " + i.y + "px)"
        }
    }
      , Co = e => e.style.setProperty("transition", "none", "important")
      , Eo = e => {
        const t = document.createElement("div");
        return $e((e => ({
            "aria-live": e,
            id: wt(e),
            tabIndex: -1,
            style: {
                "clip-path": "rect(0px, 0px, 0px, 0px)",
                height: "1px",
                width: "1px",
                margin: "-1px",
                overflow: "hidden",
                "white-space": "nowrap",
                border: "0px",
                padding: "0px",
                position: "absolute"
            }
        }))(e), t),
        t
    }
      , xo = (e, t) => {
        const n = nt("div", dt)
          , i = Ii(e, yo)
          , o = ko(t, e)
          , {width: r, height: a} = bo(e);
        return Xe({
            width: r,
            height: a,
            [xi(e, yo)]: i.x + "px",
            ...o
        }, n),
        n
    }
      , Io = (e, t, n, i, o, r, a) => {
        var c, s;
        let d = G(l({
            ...t.license && {
                license_id: t.license
            },
            group: t.group,
            embedded: 1,
            widget_version: 3,
            initial_view: t.initialView,
            unique_groups: Number(t.uniqueGroups),
            organization_id: n.organizationId,
            ...!!i && {
                custom_identity_provider: 1
            },
            ...!!o && {
                use_parent_storage: 1
            },
            ...!!r && {
                features: r
            },
            ...Xt(n)
        }));
        Cn();
        const p = {
            kill() {
                this._emit("widget_resize", {
                    size: {
                        width: "0px",
                        height: "0px"
                    }
                }),
                this.unbind(),
                e.custom || tt(e.element)
            },
            applyHiddenStyles() {
                Xe(st, e.element)
            },
            isFocused: () => !!document.hasFocus && document.hasFocus(),
            resize(t) {
                let {width: i, height: o, maximized: r, ignoreHorizontalOffset: a} = void 0 === t ? {} : t;
                const c = {
                    width: i,
                    height: o
                }
                  , s = ko(r, n, a);
                Xe({
                    ...c,
                    ...s
                }, e.element);
                const l = Qe(["width", "height"], e.element);
                this._emit("widget_resize", {
                    size: c,
                    computedSize: l
                })
            },
            show() {
                Xe(lt, e.element)
            },
            hide() {
                this.call("hide")
            },
            focusMinimized() {
                const e = document.getElementById(ot);
                if (e && e.contentDocument) {
                    const t = e.contentDocument.querySelector("button");
                    t && t.focus()
                }
            },
            minimize() {
                this.call("minimize")
            },
            maximize(e) {
                const {activeElement: t} = document
                  , n = window.event && window.event.isTrusted ? window.event.type : null
                  , i = () => {
                    t.removeEventListener("blur", i),
                    this.emit("host_focus_shifted")
                }
                ;
                t.addEventListener("blur", i),
                this.call("maximize", n, e)
            },
            unbind() {
                this.hide(),
                this.destroy(),
                this._emit("unbind"),
                this.off(),
                this.call = L,
                Object.keys(p).forEach((e => {
                    this[e] = L
                }
                ))
            },
            callIdentityProvider: e => null == i ? void 0 : i[e](),
            callParentStorageMethod(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++)
                    n[i - 1] = arguments[i];
                return null == o ? void 0 : o[e].apply(o, n)
            },
            applyFramesStyle(e) {
                let {minimizedFrameStyle: t, maximizedFrameStyle: n} = e;
                const i = document.getElementById(it)
                  , o = document.getElementById(ot);
                i && Xe(n, i),
                o && Xe(t, o)
            },
            setLiveAnnouncerMessage(e) {
                let {message: t, ariaLevel: n} = e;
                const i = document.getElementById(wt(n));
                i ? i.textContent = t : console.error('[LiveChat] Aria announcer element with level "' + n + '" not found')
            },
            renderCrossFrameMarkup(t) {
                let[n,i] = t
                  , o = document.getElementById(ot);
                o || (o = document.createElement("iframe"),
                $e({
                    ..._t,
                    title: "openwidget" === a ? ct : at
                }, o),
                e.element.appendChild(o),
                e.element.appendChild(Eo("polite")),
                e.element.appendChild(Eo("assertive")),
                o.contentDocument.fonts.ready.then(( () => this.emit("minimized_frame_fonts_ready"))).catch(L)),
                mn(n, i, o, this)
            },
            renderLightboxMarkup(e) {
                let[t,n] = e
                  , i = document.getElementById(vt.id);
                this.handleLightboxKeydown = e => {
                    if ("Escape" === e.key) {
                        this.call("storeMethod", ["setApplicationState", {
                            lightbox: {
                                ...this.state.application.lightbox || {},
                                state: "closing"
                            }
                        }])
                    }
                }
                ,
                i || (i = document.createElement("iframe"),
                $e(vt, i),
                document.body.appendChild(i),
                i.focus(),
                jt() || !Nt() && /Safari/.test(navigator.userAgent) ? i.onload = () => {
                    i.contentDocument.addEventListener("keydown", this.handleLightboxKeydown)
                }
                : i.contentDocument.addEventListener("keydown", this.handleLightboxKeydown)),
                mn(t, n, i, this)
            },
            removeLightboxMarkup() {
                const e = document.getElementById(vt.id);
                e && (this.handleLightboxKeydown && (e.contentDocument.removeEventListener("keydown", this.handleLightboxKeydown),
                this.handleLightboxKeydown = null),
                e.remove())
            },
            getMinimizedDimensions() {
                const e = document.getElementById(ot).contentDocument.querySelector('[role="main"]');
                return Qe(["width", "height"], e)
            },
            callElementMethod(e) {
                var t, n;
                let[i,o,...r] = e;
                null == (t = document.getElementById(ot).contentDocument.querySelector(i)) || null == (n = t[o]) || n.call.apply(n, [t].concat(r))
            },
            refreshPage() {
                window.location.reload()
            },
            getElementProperties(e) {
                let[t,n] = e;
                const i = document.getElementById(ot)
                  , o = i && i.contentDocument.querySelector(t);
                return o ? A(n, o) : {}
            },
            setTitleNotification(e) {
                const t = En();
                e ? t.setTitleNotification(e) : t.clearTitleNotification()
            }
        }
          , m = t.iframeAddress + "?" + d
          , h = new MutationObserver((t => t.forEach((t => {
            const n = u((e => "IFRAME" === e.tagName && e.getAttribute("src") === m), t.addedNodes);
            n && ( (e, t, n) => {
                $e({
                    ...gt,
                    title: "openwidget" === n ? ct : at
                }, t),
                e.custom || Xe(ft, t)
            }
            )(e, n, a)
        }
        ))));
        h.observe(e.element, {
            childList: !0
        });
        let f = !0;
        if ("openwidget" === a) {
            var g;
            f = !!(null == (g = n.features.find((e => "forms" === e.name))) || null == (g = g.properties) || null == (g = g.templates) ? void 0 : g.bugreport)
        }
        return new Dn({
            container: e.element,
            url: m,
            methods: p,
            iframeAllowedProperties: hn({
                allowAutoplay: !0,
                allowVideoConferencing: Li(n, "microphone"),
                allowClipboardWrite: Li(n, "clipboard_write"),
                allowDisplayCapture: f
            }),
            model: {
                ...t,
                fullWidth: null == (c = e.size) ? void 0 : c.width,
                fullHeight: null == (s = e.size) ? void 0 : s.height,
                serverConfig: n,
                parentWidth: window.innerWidth,
                parentHeight: window.innerHeight,
                defaultWidget: a
            }
        }).then((e => Promise.all([e, wo(e)]))).then((e => {
            let[t] = e;
            return h.disconnect(),
            t
        }
        ))
    }
      , Lo = (e, t, n, i, o, r) => {
        e.call("storeMethod", ["setLocalization", i]),
        (e => {
            let t = !1
              , n = null;
            function i(t) {
                e.state.application.visibility.interactionModality === t && t === n || (e.call("setInteractionModality", t),
                n = t)
            }
            function o(e) {
                t = !0,
                function(e) {
                    const t = "Tab" === e.key && e.shiftKey;
                    return ["Tab", " ", "Enter", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"].includes(e.key) || t
                }(e) && i("keyboard")
            }
            function r(e) {
                i("pointer"),
                "mousedown" !== e.type && "pointerdown" !== e.type || (t = !0)
            }
            function a(e) {
                e.target !== window && e.target !== document && (t || i("keyboard"),
                t = !1)
            }
            function c() {
                t = !1
            }
            document.addEventListener("keydown", o, !0),
            document.addEventListener("keyup", o, !0),
            window.addEventListener("focus", a, !0),
            window.addEventListener("blur", c, !1),
            "undefined" != typeof PointerEvent ? (document.addEventListener("pointerdown", r, !0),
            document.addEventListener("pointermove", r, !0),
            document.addEventListener("pointerup", r, !0)) : (document.addEventListener("mousedown", r, !0),
            document.addEventListener("mousemove", r, !0),
            document.addEventListener("mouseup", r, !0))
        }
        )(e),
        n.custom || zi(n.element, ( () => qt(e.state, "hidden"))),
        yo || "wix" === t.integrationName || Pi(e, o, i),
        Co(e.frame),
        function(e, t, n) {
            io(e, t, n),
            ("LiveChatWidget"in window || "OpenWidget"in window) && uo(e, t, n)
        }(e, t, o),
        ti(e, t),
        we(Gn(e, ( () => ((e => {
            Ot().then((t => {
                e.call("shouldBridgeHandleAudio").then((n => {
                    n && (St.isBridgeActive = !0,
                    e.on("add_event", (n => {
                        let {event: i} = n;
                        St.isBridgeActive && (Ke(e.state, "muted") || ( (e, t) => "system" !== e.author && !e.properties.welcomeMessage && e.author !== t && "custom" !== e.type)(i, Ye(e.state)) && t(yt))
                    }
                    )),
                    e.on("reaction_received", (n => {
                        let {event: i} = n;
                        St.isBridgeActive && (Ke(e.state, "muted") || Ye(e.state) === i.author && t(yt))
                    }
                    )))
                }
                ))
            }
            ))
        }
        )(e),
        Ee))), fe(L)),
        "wix" === t.integrationName ? (e => {
            Fn.addEventListener(Fn.Events.PAGE_NAVIGATION, ( () => {
                Nn().then((t => e.call("storeMethod", ["setApplicationState", {
                    page: t
                }])))
            }
            ))
        }
        )(e) : (ho(e),
        "openwidget" === r && (Ln(e),
        (e => {
            const t = t => yn(t, e);
            we(gn(e, (e => e.application.readyState)), he((e => e === F)), Oe(1), fe(( () => {
                document.addEventListener("click", t)
            }
            ))),
            we(_e(e, "unbind"), fe(( () => {
                document.removeEventListener("click", t)
            }
            )))
        }
        )(e))),
        Oi(e),
        "livechat" === r && ("documentPictureInPicture"in window && (e => {
            var t;
            return !!(null == (t = e.properties.license.bb9e5b2f1ab480e4a715977b7b1b4279) ? void 0 : t.detached_mode_enabled)
        }
        )(o) && Ti(t, e),
        (e => {
            const {actingAsDirectLink: t, embedded: n, mobileWrapper: i} = Ke(e.state);
            if (t || !n || i)
                return;
            let o = null
              , r = null;
            const a = we(ge(document, "visibilitychange"), he(( () => "maximized" === Ke(e.state).visibility.state)), be(( () => !document.hidden)));
            we(a, Me(_e(e, "unbind")), fe((t => {
                !t && Ve(e.state, qi).active ? o = Date.now() : o && (r = Date.now() - o)
            }
            ))),
            we(_e(e, "add_event"), he((e => {
                var t;
                let {event: n} = e;
                return "client_inactive" === (null == (t = n.properties) ? void 0 : t.systemMessageType)
            }
            )), he(( () => r && Ve(e.state, qi).properties.ended)), Oe(1), fe(( () => {
                Math.floor(100 * Math.random()) || e.call("logInfo", "inactivity_duration", {
                    duration: r,
                    mobile: Ke(e.state).mobile
                }),
                r = null
            }
            )))
        }
        )(e),
        hi(e, t, o));
        t.actingAsDirectLink || n.custom || function(e) {
            we(gn(e, (e => qt(e, "hidden"))), ze(1), fe((t => {
                t ? e.applyHiddenStyles() : e.show()
            }
            )))
        }(e),
        function(e) {
            if ("Google Inc." !== navigator.vendor || "Win32" !== navigator.platform)
                return;
            const {frame: t} = e
              , n = d(100, ( () => {
                Xe(Qe(["width"], t), t),
                requestAnimationFrame(( () => {
                    Xe({
                        width: gt.style.width
                    }, t)
                }
                ))
            }
            ));
            document.addEventListener("scroll", n);
            const i = () => {
                e.off("unbind", i),
                document.removeEventListener("scroll", n)
            }
            ;
            e.on("unbind", i)
        }(e),
        function(e) {
            const t = () => {
                setTimeout(( () => {
                    document.addEventListener("touchstart", L),
                    setTimeout(( () => {
                        document.removeEventListener("touchstart", L)
                    }
                    ), 500)
                }
                ), 500)
            }
            ;
            window.addEventListener("orientationchange", t);
            const n = () => {
                e.off("unbind", n),
                window.removeEventListener("orientationchange", t)
            }
            ;
            e.on("unbind", n)
        }(e),
        ui(e, o),
        yo && !n.custom && mo(e),
        go(e),
        e.on("rich_greeting_button_clicked", (e => {
            let {button: t} = e;
            "url" === t.type && oo.navigate(t.value, "current" === t.target ? "_parent" : "_blank")
        }
        )),
        e.on("open_in_new_tab", (e => {
            oo.navigate(e)
        }
        )),
        e.on("register_exit_intent_listener", ( () => {
            const t = ( (e, t) => {
                const n = n => {
                    n.currentTarget && n.relatedTarget || (e.call("storeMethod", ["emit", "exit_intent_detected"]),
                    t())
                }
                ;
                return window && (ji && window.removeEventListener("mouseout", ji),
                window.addEventListener("mouseout", n),
                ji = n),
                () => {
                    window && window.removeEventListener("mouseout", n)
                }
            }
            )(e, ( () => {
                t()
            }
            ))
        }
        )),
        e.on("apply_exit_intent_shade", ( () => {
            ( (e, t) => {
                t.call("storeMethod", ["setApplicationState", {
                    isExitIntentShadeDisplayed: !0
                }]);
                const n = document.createElement("div");
                n.id = Fi,
                Xe((e => ({
                    position: "fixed",
                    bottom: "0",
                    [e]: "0",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to " + ("left" === e ? "right" : "left") + " top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                    zIndex: 999999,
                    "pointer-events": "none",
                    opacity: 0,
                    transition: "opacity 100ms ease-in-out"
                }))(e), n),
                document.body.appendChild(n),
                setTimeout(( () => {
                    n.style.opacity = "1"
                }
                ), 0),
                Ni && window.removeEventListener("mouseover", Ni),
                Ni = () => Bi(t),
                window.addEventListener("mouseover", Ni)
            }
            )(xi(o, !1), e)
        }
        )),
        e.on("remove_exit_intent_shade", ( () => {
            Bi(e)
        }
        )),
        e.on("refresh-page", ( () => {
            window.location.reload()
        }
        )),
        e.on("open_phone_number", (e => {
            window.location.href = "tel:" + e
        }
        ))
    }
      , Ao = e => (e => {
        let {licenseId: t, organizationId: n} = e;
        return Yt("https://api.livechatinc.com/global-mapper/" + (t ? "lc_license_id/" + t : "organization_id/" + n) + "/region", {
            callbackName: "lc_region"
        }).then((e => e.region)).catch(( () => {
            const e = Error("Fetch region failed");
            throw e.code = "FETCH_REGION_FAILED",
            e
        }
        ))
    }
    )(e).then((t => Qt({
        ...e,
        region: t
    }).then((t => {
        return Promise.all([t, (n = {
            region: t.region,
            organizationId: t.organizationId,
            licenseId: e.licenseId,
            groupId: t.groupId,
            version: t.configVersion
        },
        Yt(Zt("get_configuration", n), {
            callbackName: "lc_static_config",
            query: {
                organization_id: n.organizationId,
                version: n.version,
                ...Xt(n),
                ..."number" == typeof n.groupId && {
                    group_id: n.groupId
                }
            }
        }).then((e => nn(e))))]).then((e => {
            let[t,n] = e;
            return {
                ...t,
                ...n
            }
        }
        ));
        var n
    }
    ))));
    var To = (e, t) => {
        window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_init");
        let n = !1
          , i = e;
        window.LC_API = window.LC_API || {},
        window.LC_API.is_loaded = () => n;
        const {region: o, licenseId: r, organizationId: a, requestedGroupId: c, actingAsDirectLink: s, skipCodeInstallationTracking: d, integrationName: u, productName: p, customIdentityProviderInitializer: m, templateId: h} = t
          , f = {
            ...a ? {
                organizationId: a
            } : {
                licenseId: r
            },
            skipCodeInstallationTracking: d,
            productName: p,
            integrationName: u,
            channelType: s ? "direct_link" : "code",
            url: fn(document.location + ""),
            ..."number" == typeof c && {
                groupId: c
            },
            ..."string" == typeof o && {
                region: o
            }
        }
          , g = "livechat" === i ? Ao(f).catch((e => {
            if ("DEFAULT_WIDGET_NOT_LIVECHAT" === e.code && "openwidget" === e.defaultWidget)
                return i = e.defaultWidget,
                window.__ow = window.__ow || {},
                window.__ow.organizationId = e.organizationId,
                window.OpenWidget = {
                    ...window.LiveChatWidget
                },
                on(e.organizationId, u, null, d);
            throw e
        }
        )) : on(a, u, h, d, f.url);
        Promise.all([g, "wix" === u ? Nn() : In(), et()]).then((e => {
            let[o,r,a] = e;
            if (!Hi(o.allowedDomains, window.top === window ? window.location.hostname : document.referrer))
                return void console.log("[LiveChat] Current domain is not added to the allowed domains. LiveChat has been disabled.");
            if ("openwidget" === i && !1 === o.isWidgetEnabled)
                return;
            if (yo && o.__unsafeProperties.group.disabledOnMobile && !t.actingAsDirectLink)
                return;
            const c = li()
              , s = (e => {
                if (null === e)
                    return null;
                const t = e();
                return "object" != typeof t || "function" != typeof t.getToken || "function" != typeof t.getFreshToken || "function" != typeof t.hasToken || "function" != typeof t.invalidate ? (console.error("custom_identity_provider() does not return proper handlers. ({getFreshToken: () => Promise<Token>, getToken: () => Promise<Token>, hasToken: () => Promise<boolean>, invalidate: () => Promise<void> })"),
                null) : t
            }
            )(m)
              , d = window.localStorage
              , u = Di(t, r, o)
              , p = ( (e, t) => e.customContainer ? {
                custom: !0,
                element: e.customContainer
            } : {
                custom: !1,
                element: xo(t, e.actingAsDirectLink),
                size: bo(t)
            })(t, o)
              , h = {};
            let f = !1;
            const g = Wi("on_before_load")
              , v = Wi("on_after_load");
            g((e => {
                e.disable_sounds = L,
                e.mobile_is_detected = () => yo,
                e.chat_running = () => !1,
                e.visitor_engaged = () => !1,
                e.agents_are_available = () => -1 !== o.onlineGroupIds.indexOf(o.groupId),
                e.get_window_type = () => "embedded",
                e.hide_chat_window = ni(u) ? L : () => f = !0,
                e.set_visitor_name = e => h.name = eo(e),
                e.set_visitor_email = e => h.email = eo(e),
                e.set_custom_variables = e => h.properties = e ? $i(e) : {},
                e.update_custom_variables = e => {
                    e && (h.properties = {
                        ...h.properties,
                        ...$i(e)
                    })
                }
            }
            ));
            const _ = {
                ...u,
                ...o.licenseId && {
                    license: o.licenseId
                },
                customer: {
                    ...u.customer,
                    ...h
                },
                hidden: u.hidden || f,
                organizationId: o.organizationId
            };
            var w;
            p.custom || a.appendChild(p.element),
            window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bind_child"),
            Promise.all([Io(p, _, o, s, d, null, i), "openwidget" === i ? Promise.resolve(o.localization) : (w = {
                organizationId: _.organizationId,
                licenseId: _.license,
                groupId: _.group,
                region: _.region,
                version: o.localizationVersion,
                language: o.__unsafeProperties.group.language
            },
            Yt(Zt("get_localization", w), {
                callbackName: "lc_localization",
                query: {
                    organization_id: w.organizationId,
                    version: w.version,
                    language: w.language,
                    ...Xt(w),
                    ..."number" == typeof w.groupId && {
                        group_id: w.groupId
                    }
                }
            }).then((e => C((e => e.toLowerCase()), e))))]).then((e => {
                let[t,n] = e;
                return p.custom || Co(p.element),
                Lo(t, _, p, n, o, i),
                we(gn(t, (e => Ke(e, "readyState"))), he((e => e === F)), Oe(1), be(( () => t)), De)
            }
            )).then((e => {
                window.performance && "function" == typeof window.performance.mark && window.performance.mark("lc_bridge_ready"),
                c && c.getLogs().then((t => {
                    e.call("logInfo", "loading_time_measured", l(t))
                }
                )),
                v(( () => n = !0))
            }
            ))
        }
        )).catch((e => {
            switch (null == e ? void 0 : e.code) {
            case "ACCESS_NOT_RESOLVED":
            case "CUSTOMER_BANNED":
            case "FETCH_REGION_FAILED":
                return void console.warn("[LiveChat] " + e.message);
            default:
                throw e
            }
        }
        ))
    }
    ;
    function zo() {
        et().then((e => {
            ["https://cdn.livechatinc.com/widget/static/js/configurator.b7NSUnKc.js"].forEach((t => {
                ( (e, t) => {
                    const n = document.createElement("script");
                    $e({
                        src: t,
                        type: "module",
                        charset: "utf-8"
                    }, n),
                    e.appendChild(n)
                }
                )(e.ownerDocument.head, t)
            }
            ))
        }
        ))
    }
    const Po = (e, t) => {
        const n = {
            name: null,
            email: null,
            properties: {}
        };
        if ("object" == typeof e && e) {
            const t = e.name
              , i = e.email;
            "string" == typeof t && (n.name = t),
            "string" == typeof i && (n.email = i)
        }
        return Array.isArray(t) && (n.properties = $i(t)),
        n
    }
      , Oo = e => {
        if (e.wix)
            return "wix";
        if ("string" == typeof e.integration_name)
            return e.integration_name;
        if ("google_tag_manager"in window)
            try {
                if (void 0 !== Array.from(document.getElementsByTagName("script")).find((e => {
                    var t;
                    return null == (t = e.textContent) ? void 0 : t.startsWith("window.__lc")
                }
                )))
                    return "potentially_gtm"
            } catch {}
        return null
    }
      , So = () => {
        if (window.__lc_inited = !0,
        "msCrypto"in window)
            return void console.error("[LiveChat] We no longer support Internet Explorer");
        if (3 !== [1].reduce(( (e, t) => e + t), 2))
            return void console.error("[LiveChat] This site has overriden Array.prototype.reduce (for example by using Prototype library) to a version that is not compatible with Web standards. LiveChat code couldn't be initialized because of this.");
        const e = {
            licenseId: (t = window.__lc).license ? parseInt(t.license) : null,
            organizationId: "string" == typeof t.organizationId ? t.organizationId : null,
            requestedGroupId: q(t),
            uniqueGroups: !1 === t.chat_between_groups,
            customer: Po(t.visitor, t.params),
            skipCodeInstallationTracking: 1 === t.test,
            integrationName: Oo(t),
            productName: t.product_name || null,
            actingAsDirectLink: !0 === t.direct_link,
            isMinimizedForcefullyDisabled: !0 === t.disable_minimized,
            initMaximized: !0 === t.init_maximized,
            initialView: "string" == typeof t.initial_view ? t.initial_view : null,
            customContainer: t.custom_container || null,
            gaParams: {
                version: "string" == typeof t.ga_version ? t.ga_version : null,
                omitGtm: !!t.ga_omit_gtm,
                sendToAll: !!t.ga_send_to_all_trackers
            },
            customIdentityProviderInitializer: "function" == typeof t.custom_identity_provider ? t.custom_identity_provider : null,
            iframeAddress: null,
            region: _(t.region, (n = j,
            a(n).map((e => n[e])))) ? t.region + "" : null
        };
        var t, n;
        e.actingAsDirectLink || !le() ? To("livechat", e) : zo()
    }
    ;
    window.__lc_inited || So()
}();
