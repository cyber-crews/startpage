/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */ !(function (
  e,
  t
) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var f,
    p,
    S,
    F,
    N,
    H,
    B,
    K,
    q,
    G,
    X,
    v = [],
    i = e.document,
    Xe = Object.getPrototypeOf,
    g = v.slice,
    Te = v.concat,
    Z = v.push,
    U = v.indexOf,
    W = {},
    Ye = W.toString,
    $ = W.hasOwnProperty,
    Ve = $.toString,
    Je = Ve.call(Object),
    a = {},
    o = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return e != null && e === e.window;
    },
    nt = { type: !0, src: !0, nonce: !0, noModule: !0 },
    oe,
    le,
    ue,
    fe,
    ge,
    Se,
    ae,
    je,
    ce,
    Ne,
    De,
    Me,
    we,
    _e;
  function Ae(e, t, n) {
    var s,
      a,
      o = (n = n || i).createElement("script");
    if (((o.text = e), t))
      for (s in nt)
        (a = t[s] || (t.getAttribute && t.getAttribute(s))) &&
          o.setAttribute(s, a);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function _(e) {
    return e == null
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? W[Ye.call(e)] || "object"
      : typeof e;
  }
  var Ce =
      "3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
    n = function (e, t) {
      return new n.fn.init(e, t);
    },
    pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function ne(e) {
    var t = !!e && "length" in e && e.length,
      n = _(e);
    return (
      !o(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (n.fn = n.prototype =
    {
      jquery: Ce,
      constructor: n,
      length: 0,
      toArray: function () {
        return g.call(this);
      },
      get: function (e) {
        return e == null
          ? g.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = n.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return n.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          n.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(g.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var n = this.length,
          t = +e + (e < 0 ? n : 0);
        return this.pushStack(0 <= t && t < n ? [this[t]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: Z,
      sort: v.sort,
      splice: v.splice,
    }),
    (n.extend = n.fn.extend =
      function () {
        var t,
          i,
          a,
          r,
          c,
          d,
          e = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof e && ((l = e), (e = arguments[s] || {}), s++),
            "object" == typeof e || o(e) || (e = {}),
            s === u && ((e = this), s--);
          s < u;
          s++
        )
          if (null != (c = arguments[s]))
            for (i in c)
              (t = c[i]),
                "__proto__" !== i &&
                  e !== t &&
                  (l && t && (n.isPlainObject(t) || (r = Array.isArray(t)))
                    ? ((a = e[i]),
                      (d =
                        r && !Array.isArray(a)
                          ? []
                          : r || n.isPlainObject(a)
                          ? a
                          : {}),
                      (r = !1),
                      (e[i] = n.extend(l, d, t)))
                    : void 0 !== t && (e[i] = t));
        return e;
      }),
    n.extend({
      expando: "jQuery" + (Ce + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !!e &&
          "[object Object]" === Ye.call(e) &&
          (!(t = Xe(e)) ||
            ("function" ==
              typeof (n = $.call(t, "constructor") && t.constructor) &&
              Ve.call(n) === Je))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t) {
        Ae(e, { nonce: t && t.nonce });
      },
      each: function (e, t) {
        var s,
          n = 0;
        if (ne(e)) {
          for (s = e.length; n < s; n++)
            if (!1 === t.call(e[n], n, e[n])) break;
        } else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
        return e;
      },
      trim: function (e) {
        return e == null ? "" : (e + "").replace(pt, "");
      },
      makeArray: function (e, t) {
        var s = t || [];
        return (
          e != null &&
            (ne(Object(e))
              ? n.merge(s, "string" == typeof e ? [e] : e)
              : Z.call(s, e)),
          s
        );
      },
      inArray: function (e, t, n) {
        return t == null ? -1 : U.call(t, e, n);
      },
      merge: function (e, t) {
        for (var o = +t.length, n = 0, s = e.length; n < o; n++) e[s++] = t[n];
        return (e.length = s), e;
      },
      grep: function (e, t, n) {
        for (var o = [], s = 0, i = e.length, a = !n; s < i; s++)
          !t(e[s], s) !== a && o.push(e[s]);
        return o;
      },
      map: function (e, t, n) {
        var o,
          a,
          s = 0,
          i = [];
        if (ne(e))
          for (a = e.length; s < a; s++)
            null != (o = t(e[s], s, n)) && i.push(o);
        else for (s in e) null != (o = t(e[s], s, n)) && i.push(o);
        return Te.apply([], i);
      },
      guid: 1,
      support: a,
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = v[Symbol.iterator]),
    n.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        W["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (p = (function (e) {
      var t,
        n,
        a,
        r,
        l,
        d,
        g,
        v,
        O,
        x,
        C,
        k,
        A,
        D,
        R,
        P,
        K,
        re,
        ee,
        i = "sizzle" + 1 * new Date(),
        c = e.document,
        p = 0,
        ge = 0,
        ne = F(),
        ae = F(),
        G = F(),
        S = F(),
        W = function (e, t) {
          return e === t && (x = !0), 0;
        },
        de = {}.hasOwnProperty,
        j = [],
        ue = j.pop,
        pe = j.push,
        b = j.push,
        Q = j.slice,
        _ = function (e, t) {
          for (var n = 0, s = e.length; n < s; n++) if (e[n] === t) return n;
          return -1;
        },
        V =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        o = `[\\x20\\t\\r\\n\\f]`,
        y = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        te =
          "\\[" +
          o +
          "*(" +
          y +
          ")(?:" +
          o +
          "*([*^$|!~]?=)" +
          o +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          y +
          "))|)" +
          o +
          "*\\]",
        H =
          ":(" +
          y +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          te +
          ")*)|.*)\\)|)",
        xe = new RegExp(o + "+", "g"),
        L = new RegExp("^" + o + "+|((?:^|[^\\\\])(?:\\\\.)*)" + o + "+$", "g"),
        Oe = new RegExp("^" + o + "*," + o + "*"),
        we = new RegExp("^" + o + "*([>+~]|" + o + ")" + o + "*"),
        _e = new RegExp(o + "|>"),
        ye = new RegExp(H),
        je = new RegExp("^" + y + "$"),
        N = {
          ID: new RegExp("^#(" + y + ")"),
          CLASS: new RegExp("^\\.(" + y + ")"),
          TAG: new RegExp("^(" + y + "|[*])"),
          ATTR: new RegExp("^" + te),
          PSEUDO: new RegExp("^" + H),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              o +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              o +
              "*(?:([+-]|)" +
              o +
              "*(\\d+)|))" +
              o +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + V + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              o +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              o +
              "*((?:-\\d)?\\d*)" +
              o +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ce = /HTML$/i,
        be = /^(?:input|select|textarea|button)$/i,
        ve = /^h\d$/i,
        E = /^[^{]+\{\s*\[native \w/,
        he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        q = /[+~]/,
        m = new RegExp("\\\\([\\da-f]{1,6}" + o + "?|(" + o + ")|.)", "ig"),
        f = function (e, t, n) {
          var s = "0x" + t - 65536;
          return s != s || n
            ? t
            : s < 0
            ? String.fromCharCode(s + 65536)
            : String.fromCharCode((s >> 10) | 55296, (1023 & s) | 56320);
        },
        se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        oe = function (e, t) {
          return t
            ? "\0" === e
              ? "\ufffd"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        ie = function () {
          v();
        },
        le = M(
          function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        b.apply((j = Q.call(c.childNodes)), c.childNodes),
          j[c.childNodes.length].nodeType;
      } catch {
        b = {
          apply: j.length
            ? function (e, t) {
                pe.apply(e, Q.call(t));
              }
            : function (e, t) {
                for (var n = e.length, s = 0; (e[n++] = t[s++]); );
                e.length = n - 1;
              },
        };
      }
      function s(e, t, s, o) {
        var l,
          u,
          m,
          p,
          g,
          j,
          y,
          f = t && t.ownerDocument,
          h = t ? t.nodeType : 9;
        if (
          ((s = s || []),
          "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
        )
          return s;
        if (
          !o &&
          ((t ? t.ownerDocument || t : c) !== n && v(t), (t = t || n), d)
        ) {
          if (11 !== h && (g = he.exec(e)))
            if ((l = g[1])) {
              if (9 === h) {
                {
                  if (!(u = t.getElementById(l))) return s;
                  if (u.id === l) return s.push(u), s;
                }
              } else if (
                f &&
                (u = f.getElementById(l)) &&
                A(t, u) &&
                u.id === l
              )
                return s.push(u), s;
            } else {
              if (g[2]) return b.apply(s, t.getElementsByTagName(e)), s;
              if (
                (l = g[3]) &&
                a.getElementsByClassName &&
                t.getElementsByClassName
              )
                return b.apply(s, t.getElementsByClassName(l)), s;
            }
          if (
            a.qsa &&
            !S[e + " "] &&
            (!r || !r.test(e)) &&
            (1 !== h || "object" !== t.nodeName.toLowerCase())
          ) {
            if (((y = e), (f = t), 1 === h && _e.test(e))) {
              for (
                (m = t.getAttribute("id"))
                  ? (m = m.replace(se, oe))
                  : t.setAttribute("id", (m = i)),
                  p = (j = k(e)).length;
                p--;

              )
                j[p] = "#" + m + " " + z(j[p]);
              (y = j.join(",")), (f = (q.test(e) && Y(t.parentNode)) || t);
            }
            try {
              return b.apply(s, f.querySelectorAll(y)), s;
            } catch {
              S(e, !0);
            } finally {
              m === i && t.removeAttribute("id");
            }
          }
        }
        return ee(e.replace(L, "$1"), t, s, o);
      }
      function F() {
        var e = [];
        return function n(s, o) {
          return (
            e.push(s + " ") > t.cacheLength && delete n[e.shift()],
            (n[s + " "] = o)
          );
        };
      }
      function u(e) {
        return (e[i] = !0), e;
      }
      function h(e) {
        var t = n.createElement("fieldset");
        try {
          return !!e(t);
        } catch {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function I(e, n) {
        for (var s = e.split("|"), o = s.length; o--; ) t.attrHandle[s[o]] = n;
      }
      function J(e, t) {
        var n = t && e,
          s =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (s) return s;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function me(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function fe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function Z(e) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && le(t) === e)
              : t.disabled === e
            : "label" in t && t.disabled === e;
        };
      }
      function w(e) {
        return u(function (t) {
          return (
            (t = +t),
            u(function (n, s) {
              for (var o, i = e([], n.length, t), a = i.length; a--; )
                n[(o = i[a])] && (n[o] = !(s[o] = n[o]));
            })
          );
        });
      }
      function Y(e) {
        return e && "undefined" != typeof e.getElementsByTagName && e;
      }
      for (C in ((a = s.support = {}),
      (re = s.isXML =
        function (e) {
          var n = e.namespaceURI,
            t = (e.ownerDocument || e).documentElement;
          return !ce.test(n || (t && t.nodeName) || "HTML");
        }),
      (v = s.setDocument =
        function (e) {
          var s,
            p,
            u = e ? e.ownerDocument || e : c;
          return (
            u !== n &&
              9 === u.nodeType &&
              u.documentElement &&
              ((l = (n = u).documentElement),
              (d = !re(n)),
              c !== n &&
                (s = n.defaultView) &&
                s.top !== s &&
                (s.addEventListener
                  ? s.addEventListener("unload", ie, !1)
                  : s.attachEvent && s.attachEvent("onunload", ie)),
              (a.attributes = h(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (a.getElementsByTagName = h(function (e) {
                return (
                  e.appendChild(n.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (a.getElementsByClassName = E.test(n.getElementsByClassName)),
              (a.getById = h(function (e) {
                return (
                  (l.appendChild(e).id = i),
                  !n.getElementsByName || !n.getElementsByName(i).length
                );
              })),
              a.getById
                ? ((t.filter.ID = function (e) {
                    var t = e.replace(m, f);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (t.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && d) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((t.filter.ID = function (e) {
                    var t = e.replace(m, f);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (t.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && d) {
                      var s,
                        o,
                        i,
                        n = t.getElementById(e);
                      if (n) {
                        if ((s = n.getAttributeNode("id")) && s.value === e)
                          return [n];
                        for (i = t.getElementsByName(e), o = 0; (n = i[o++]); )
                          if ((s = n.getAttributeNode("id")) && s.value === e)
                            return [n];
                      }
                      return [];
                    }
                  })),
              (t.find.TAG = a.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : a.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      s = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && s.push(n);
                      return s;
                    }
                    return o;
                  }),
              (t.find.CLASS =
                a.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && d)
                    return t.getElementsByClassName(e);
                }),
              (O = []),
              (r = []),
              (a.qsa = E.test(n.querySelectorAll)) &&
                (h(function (e) {
                  (l.appendChild(e).innerHTML =
                    "<a id='" +
                    i +
                    "'></a><select id='" +
                    i +
                    `-
\\' msallowcapture=''><option selected=''></option></select>`),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      r.push("[*^$]=" + o + `*(?:''|"")`),
                    e.querySelectorAll("[selected]").length ||
                      r.push("\\[" + o + "*(?:value|" + V + ")"),
                    e.querySelectorAll("[id~=" + i + "-]").length ||
                      r.push("~="),
                    e.querySelectorAll(":checked").length || r.push(":checked"),
                    e.querySelectorAll("a#" + i + "+*").length ||
                      r.push(".#.+[+~]");
                }),
                h(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = n.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      r.push("name" + o + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      r.push(":enabled", ":disabled"),
                    (l.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      r.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    r.push(",.*:");
                })),
              (a.matchesSelector = E.test(
                (P =
                  l.matches ||
                  l.webkitMatchesSelector ||
                  l.mozMatchesSelector ||
                  l.oMatchesSelector ||
                  l.msMatchesSelector)
              )) &&
                h(function (e) {
                  (a.disconnectedMatch = P.call(e, "*")),
                    P.call(e, "[s!='']:x"),
                    O.push("!=", H);
                }),
              (r = r.length && new RegExp(r.join("|"))),
              (O = O.length && new RegExp(O.join("|"))),
              (p = E.test(l.compareDocumentPosition)),
              (A =
                p || E.test(l.contains)
                  ? function (e, t) {
                      var s = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                      return (
                        e === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(s.contains
                            ? s.contains(n)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t)
                        for (; (t = t.parentNode); ) if (t === e) return !0;
                      return !1;
                    }),
              (W = p
                ? function (e, t) {
                    if (e === t) return (x = !0), 0;
                    var s =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      s ||
                      (1 &
                        (s =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!a.sortDetached && t.compareDocumentPosition(e) === s)
                        ? e === n || (e.ownerDocument === c && A(c, e))
                          ? -1
                          : t === n || (t.ownerDocument === c && A(c, t))
                          ? 1
                          : g
                          ? _(g, e) - _(g, t)
                          : 0
                        : 4 & s
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (x = !0), 0;
                    var s,
                      o = 0,
                      r = e.parentNode,
                      l = t.parentNode,
                      i = [e],
                      a = [t];
                    if (!r || !l)
                      return e === n
                        ? -1
                        : t === n
                        ? 1
                        : r
                        ? -1
                        : l
                        ? 1
                        : g
                        ? _(g, e) - _(g, t)
                        : 0;
                    if (r === l) return J(e, t);
                    for (s = e; (s = s.parentNode); ) i.unshift(s);
                    for (s = t; (s = s.parentNode); ) a.unshift(s);
                    for (; i[o] === a[o]; ) o++;
                    return o
                      ? J(i[o], a[o])
                      : i[o] === c
                      ? -1
                      : a[o] === c
                      ? 1
                      : 0;
                  })),
            n
          );
        }),
      (s.matches = function (e, t) {
        return s(e, null, null, t);
      }),
      (s.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== n && v(e),
          a.matchesSelector &&
            d &&
            !S[t + " "] &&
            (!O || !O.test(t)) &&
            (!r || !r.test(t)))
        )
          try {
            var o = P.call(e, t);
            if (
              o ||
              a.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return o;
          } catch {
            S(t, !0);
          }
        return 0 < s(t, n, null, [e]).length;
      }),
      (s.contains = function (e, t) {
        return (e.ownerDocument || e) !== n && v(e), A(e, t);
      }),
      (s.attr = function (e, s) {
        (e.ownerDocument || e) !== n && v(e);
        var i = t.attrHandle[s.toLowerCase()],
          o =
            i && de.call(t.attrHandle, s.toLowerCase()) ? i(e, s, !d) : void 0;
        return void 0 !== o
          ? o
          : a.attributes || !d
          ? e.getAttribute(s)
          : (o = e.getAttributeNode(s)) && o.specified
          ? o.value
          : null;
      }),
      (s.escape = function (e) {
        return (e + "").replace(se, oe);
      }),
      (s.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (s.uniqueSort = function (e) {
        var s,
          o = [],
          t = 0,
          n = 0;
        if (
          ((x = !a.detectDuplicates),
          (g = !a.sortStable && e.slice(0)),
          e.sort(W),
          x)
        ) {
          for (; (s = e[n++]); ) s === e[n] && (t = o.push(n));
          for (; t--; ) e.splice(o[t], 1);
        }
        return (g = null), e;
      }),
      (R = s.getText =
        function (e) {
          var s,
            n = "",
            o = 0,
            t = e.nodeType;
          if (t) {
            if (1 === t || 9 === t || 11 === t) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += R(e);
            } else if (3 === t || 4 === t) return e.nodeValue;
          } else for (; (s = e[o++]); ) n += R(s);
          return n;
        }),
      ((t = s.selectors =
        {
          cacheLength: 50,
          createPseudo: u,
          match: N,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(m, f)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(m, f)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || s.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && s.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var n,
                t = !e[6] && e[2];
              return N.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : t &&
                      ye.test(t) &&
                      (n = k(t, !0)) &&
                      (n = t.indexOf(")", t.length - n) - t.length) &&
                      ((e[0] = e[0].slice(0, n)), (e[2] = t.slice(0, n))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(m, f).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = ne[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + o + ")" + e + "(" + o + "|$)")) &&
                  ne(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (o) {
                var i = s.attr(o, e);
                return i == null
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && -1 < i.indexOf(n)
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? -1 < (" " + i.replace(xe, " ") + " ").indexOf(n)
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, s, o) {
              var c = "nth" !== e.slice(0, 3),
                r = "last" !== e.slice(-4),
                a = "of-type" === t;
              return 1 === s && 0 === o
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, l) {
                    var d,
                      h,
                      m,
                      f,
                      g,
                      j,
                      v = c !== r ? "nextSibling" : "previousSibling",
                      b = t.parentNode,
                      _ = a && t.nodeName.toLowerCase(),
                      y = !l && !a,
                      u = !1;
                    if (b) {
                      if (c) {
                        for (; v; ) {
                          for (d = t; (d = d[v]); )
                            if (
                              a
                                ? d.nodeName.toLowerCase() === _
                                : 1 === d.nodeType
                            )
                              return !1;
                          g = v = "only" === e && !g && "nextSibling";
                        }
                        return !0;
                      }
                      if (((g = [r ? b.firstChild : b.lastChild]), r && y)) {
                        for (
                          u =
                            (h =
                              (f =
                                (j =
                                  (m = (d = b)[i] || (d[i] = {}))[d.uniqueID] ||
                                  (m[d.uniqueID] = {}))[e] || [])[0] === p &&
                              f[1]) && f[2],
                            d = h && b.childNodes[h];
                          (d = (++h && d && d[v]) || (u = h = 0) || g.pop());

                        )
                          if (1 === d.nodeType && ++u && d === t) {
                            j[e] = [p, h, u];
                            break;
                          }
                      } else if (
                        (y &&
                          (u = h =
                            (f =
                              (j =
                                (m = (d = t)[i] || (d[i] = {}))[d.uniqueID] ||
                                (m[d.uniqueID] = {}))[e] || [])[0] === p &&
                            f[1]),
                        !1 === u)
                      )
                        for (
                          ;
                          (d = (++h && d && d[v]) || (u = h = 0) || g.pop());

                        )
                          if (
                            (a
                              ? d.nodeName.toLowerCase() === _
                              : 1 === d.nodeType) &&
                            ++u &&
                            (y &&
                              ((j =
                                (m = d[i] || (d[i] = {}))[d.uniqueID] ||
                                (m[d.uniqueID] = {}))[e] = [p, u]),
                            d === t)
                          )
                            break;
                      return (u -= o) === s || (u % s == 0 && 0 <= u / s);
                    }
                  };
            },
            PSEUDO: function (e, n) {
              var a,
                o =
                  t.pseudos[e] ||
                  t.setFilters[e.toLowerCase()] ||
                  s.error("unsupported pseudo: " + e);
              return o[i]
                ? o(n)
                : 1 < o.length
                ? ((a = [e, e, "", n]),
                  t.setFilters.hasOwnProperty(e.toLowerCase())
                    ? u(function (e, t) {
                        for (var a, s = o(e, n), i = s.length; i--; )
                          e[(a = _(e, s[i]))] = !(t[a] = s[i]);
                      })
                    : function (e) {
                        return o(e, 0, a);
                      })
                : o;
            },
          },
          pseudos: {
            not: u(function (e) {
              var t = [],
                s = [],
                n = K(e.replace(L, "$1"));
              return n[i]
                ? u(function (e, t, s, o) {
                    for (var a, r = n(e, null, o, []), i = e.length; i--; )
                      (a = r[i]) && (e[i] = !(t[i] = a));
                  })
                : function (e, o, i) {
                    return (
                      (t[0] = e), n(t, null, i, s), (t[0] = null), !s.pop()
                    );
                  };
            }),
            has: u(function (e) {
              return function (t) {
                return 0 < s(e, t).length;
              };
            }),
            contains: u(function (e) {
              return (
                (e = e.replace(m, f)),
                function (t) {
                  return -1 < (t.textContent || R(t)).indexOf(e);
                }
              );
            }),
            lang: u(function (e) {
              return (
                je.test(e || "") || s.error("unsupported lang: " + e),
                (e = e.replace(m, f).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = d
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === l;
            },
            focus: function (e) {
              return (
                e === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: Z(!1),
            disabled: Z(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !t.pseudos.empty(e);
            },
            header: function (e) {
              return ve.test(e.nodeName);
            },
            input: function (e) {
              return be.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: w(function () {
              return [0];
            }),
            last: w(function (e, t) {
              return [t - 1];
            }),
            eq: w(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: w(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: w(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: w(function (e, t, n) {
              for (var s = n < 0 ? n + t : t < n ? t : n; 0 <= --s; ) e.push(s);
              return e;
            }),
            gt: w(function (e, t, n) {
              for (var s = n < 0 ? n + t : n; ++s < t; ) e.push(s);
              return e;
            }),
          },
        }).pseudos.nth = t.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        t.pseudos[C] = me(C);
      for (C in { submit: !0, reset: !0 }) t.pseudos[C] = fe(C);
      function X() {}
      function z(e) {
        for (var t = 0, s = e.length, n = ""; t < s; t++) n += e[t].value;
        return n;
      }
      function M(e, t, n) {
        var s = t.dir,
          o = t.next,
          a = o || s,
          r = n && "parentNode" === a,
          c = ge++;
        return t.first
          ? function (t, n, o) {
              for (; (t = t[s]); ) if (1 === t.nodeType || r) return e(t, n, o);
              return !1;
            }
          : function (t, n, l) {
              var d,
                u,
                h,
                m = [p, c];
              if (l) {
                for (; (t = t[s]); )
                  if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
              } else
                for (; (t = t[s]); )
                  if (1 === t.nodeType || r)
                    if (
                      ((u =
                        (h = t[i] || (t[i] = {}))[t.uniqueID] ||
                        (h[t.uniqueID] = {})),
                      o && o === t.nodeName.toLowerCase())
                    )
                      t = t[s] || t;
                    else {
                      if ((d = u[a]) && d[0] === p && d[1] === c)
                        return (m[2] = d[2]);
                      if (((u[a] = m)[2] = e(t, n, l))) return !0;
                    }
              return !1;
            };
      }
      function U(e) {
        return 1 < e.length
          ? function (t, n, s) {
              for (var o = e.length; o--; ) if (!e[o](t, n, s)) return !1;
              return !0;
            }
          : e[0];
      }
      function T(e, t, n, s, o) {
        for (var a, r = [], i = 0, c = e.length, l = t != null; i < c; i++)
          (a = e[i]) && ((n && !n(a, s, o)) || (r.push(a), l && t.push(i)));
        return r;
      }
      function $(e, t, n, o, a, r) {
        return (
          o && !o[i] && (o = $(o)),
          a && !a[i] && (a = $(a, r)),
          u(function (i, r, c, l) {
            var u,
              h,
              m,
              g = [],
              p = [],
              v = r.length,
              j =
                i ||
                (function (e, t, n) {
                  for (var o = 0, i = t.length; o < i; o++) s(e, t[o], n);
                  return n;
                })(t || "*", c.nodeType ? [c] : c, []),
              f = !e || (!i && t) ? j : T(j, g, e, c, l),
              d = n ? (a || (i ? e : v || o) ? [] : r) : f;
            if ((n && n(f, d, c, l), o))
              for (h = T(d, p), o(h, [], c, l), u = h.length; u--; )
                (m = h[u]) && (d[p[u]] = !(f[p[u]] = m));
            if (i) {
              if (a || e) {
                if (a) {
                  for (h = [], u = d.length; u--; )
                    (m = d[u]) && h.push((f[u] = m));
                  a(null, (d = []), h, l);
                }
                for (u = d.length; u--; )
                  (m = d[u]) &&
                    -1 < (h = a ? _(i, m) : g[u]) &&
                    (i[h] = !(r[h] = m));
              }
            } else (d = T(d === r ? d.splice(v, d.length) : d)), a ? a(null, r, d, l) : b.apply(r, d);
          })
        );
      }
      function B(e) {
        for (
          var s,
            o,
            r,
            c = e.length,
            l = t.relative[e[0].type],
            d = l || t.relative[" "],
            n = l ? 1 : 0,
            u = M(
              function (e) {
                return e === r;
              },
              d,
              !0
            ),
            h = M(
              function (e) {
                return -1 < _(r, e);
              },
              d,
              !0
            ),
            a = [
              function (e, t, n) {
                var s =
                  (!l && (n || t !== D)) ||
                  ((r = t).nodeType ? u(e, t, n) : h(e, t, n));
                return (r = null), s;
              },
            ];
          n < c;
          n++
        )
          if ((o = t.relative[e[n].type])) a = [M(U(a), o)];
          else {
            if ((o = t.filter[e[n].type].apply(null, e[n].matches))[i]) {
              for (s = ++n; s < c; s++) if (t.relative[e[s].type]) break;
              return $(
                1 < n && U(a),
                1 < n &&
                  z(
                    e
                      .slice(0, n - 1)
                      .concat({ value: " " === e[n - 2].type ? "*" : "" })
                  ).replace(L, "$1"),
                o,
                n < s && B(e.slice(n, s)),
                s < c && B((e = e.slice(s))),
                s < c && z(e)
              );
            }
            a.push(o);
          }
        return U(a);
      }
      return (
        (X.prototype = t.filters = t.pseudos),
        (t.setFilters = new X()),
        (k = s.tokenize =
          function (e, n) {
            var o,
              i,
              a,
              r,
              c,
              l,
              d,
              u = ae[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (o = e, l = [], d = t.preFilter; o; ) {
              for (r in ((a && !(i = Oe.exec(o))) ||
                (i && (o = o.slice(i[0].length) || o), l.push((c = []))),
              (a = !1),
              (i = we.exec(o)) &&
                ((a = i.shift()),
                c.push({ value: a, type: i[0].replace(L, " ") }),
                (o = o.slice(a.length))),
              t.filter))
                !(i = N[r].exec(o)) ||
                  (d[r] && !(i = d[r](i))) ||
                  ((a = i.shift()),
                  c.push({ value: a, type: r, matches: i }),
                  (o = o.slice(a.length)));
              if (!a) break;
            }
            return n ? o.length : o ? s.error(e) : ae(e, l).slice(0);
          }),
        (K = s.compile =
          function (e, o) {
            var r,
              c,
              l,
              h,
              m,
              f,
              g = [],
              j = [],
              a = G[e + " "];
            if (!a) {
              for (o || (o = k(e)), c = o.length; c--; )
                (a = B(o[c]))[i] ? g.push(a) : j.push(a);
              (a = G(
                e,
                ((l = j),
                (r = 0 < (h = g).length),
                (m = 0 < l.length),
                (f = function (e, o, i, a, c) {
                  var u,
                    j,
                    _,
                    y = 0,
                    f = "0",
                    w = e && [],
                    g = [],
                    O = D,
                    x = e || (m && t.find.TAG("*", c)),
                    C = (p += O == null ? 1 : Math.random() || 0.1),
                    E = x.length;
                  for (
                    c && (D = o === n || o || c);
                    f !== E && null != (u = x[f]);
                    f++
                  ) {
                    if (m && u) {
                      for (
                        _ = 0, o || u.ownerDocument === n || (v(u), (i = !d));
                        (j = l[_++]);

                      )
                        if (j(u, o || n, i)) {
                          a.push(u);
                          break;
                        }
                      c && (p = C);
                    }
                    r && ((u = !j && u) && y--, e && w.push(u));
                  }
                  if (((y += f), r && f !== y)) {
                    for (_ = 0; (j = h[_++]); ) j(w, g, o, i);
                    if (e) {
                      if (0 < y)
                        for (; f--; ) w[f] || g[f] || (g[f] = ue.call(a));
                      g = T(g);
                    }
                    b.apply(a, g),
                      c &&
                        !e &&
                        0 < g.length &&
                        1 < y + h.length &&
                        s.uniqueSort(a);
                  }
                  return c && ((p = C), (D = O)), w;
                }),
                r ? u(f) : f)
              )).selector = e;
            }
            return a;
          }),
        (ee = s.select =
          function (e, n, s, o) {
            var i,
              a,
              r,
              u,
              h,
              l = "function" == typeof e && e,
              c = !o && k((e = l.selector || e));
            if (((s = s || []), 1 === c.length)) {
              if (
                2 < (i = c[0] = c[0].slice(0)).length &&
                "ID" === (a = i[0]).type &&
                9 === n.nodeType &&
                d &&
                t.relative[i[1].type]
              ) {
                if (!(n = (t.find.ID(a.matches[0].replace(m, f), n) || [])[0]))
                  return s;
                l && (n = n.parentNode), (e = e.slice(i.shift().value.length));
              }
              for (r = N.needsContext.test(e) ? 0 : i.length; r--; ) {
                if (((a = i[r]), t.relative[(u = a.type)])) break;
                if (
                  (h = t.find[u]) &&
                  (o = h(
                    a.matches[0].replace(m, f),
                    (q.test(i[0].type) && Y(n.parentNode)) || n
                  ))
                ) {
                  if ((i.splice(r, 1), !(e = o.length && z(i))))
                    return b.apply(s, o), s;
                  break;
                }
              }
            }
            return (
              (l || K(e, c))(
                o,
                n,
                !d,
                s,
                !n || (q.test(e) && Y(n.parentNode)) || n
              ),
              s
            );
          }),
        (a.sortStable = i.split("").sort(W).join("") === i),
        (a.detectDuplicates = !!x),
        v(),
        (a.sortDetached = h(function (e) {
          return 1 & e.compareDocumentPosition(n.createElement("fieldset"));
        })),
        h(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          I("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (a.attributes &&
          h(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          I("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        h(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          I(V, function (e, t, n) {
            var s;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (s = e.getAttributeNode(t)) && s.specified
                ? s.value
                : null;
          }),
        s
      );
    })(e)),
    (n.find = p),
    (n.expr = p.selectors),
    (n.expr[":"] = n.expr.pseudos),
    (n.uniqueSort = n.unique = p.uniqueSort),
    (n.text = p.getText),
    (n.isXMLDoc = p.isXML),
    (n.contains = p.contains),
    (n.escapeSelector = p.escape);
  var C = function (e, t, s) {
      for (var o = [], i = void 0 !== s; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && n(e).is(s)) break;
          o.push(e);
        }
      return o;
    },
    ve = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    pe = n.expr.match.needsContext;
  function d(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  oe = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function ie(e, t, s) {
    return o(t)
      ? n.grep(e, function (e, n) {
          return !!t.call(e, n, e) !== s;
        })
      : t.nodeType
      ? n.grep(e, function (e) {
          return (e === t) !== s;
        })
      : "string" != typeof t
      ? n.grep(e, function (e) {
          return -1 < U.call(t, e) !== s;
        })
      : n.filter(t, e, s);
  }
  (n.filter = function (e, t, s) {
    var o = t[0];
    return (
      s && (e = ":not(" + e + ")"),
      1 === t.length && 1 === o.nodeType
        ? n.find.matchesSelector(o, e)
          ? [o]
          : []
        : n.find.matches(
            e,
            n.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    n.fn.extend({
      find: function (e) {
        var t,
          s,
          o = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            n(e).filter(function () {
              for (t = 0; t < o; t++) if (n.contains(i[t], this)) return !0;
            })
          );
        for (s = this.pushStack([]), t = 0; t < o; t++) n.find(e, i[t], s);
        return 1 < o ? n.uniqueSort(s) : s;
      },
      filter: function (e) {
        return this.pushStack(ie(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(ie(this, e || [], !0));
      },
      is: function (e) {
        return !!ie(
          this,
          "string" == typeof e && pe.test(e) ? n(e) : e || [],
          !1
        ).length;
      },
    }),
    (ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/),
    ((n.fn.init = function (e, t, s) {
      var a, r;
      if (!e) return this;
      if (((s = s || le), "string" == typeof e)) {
        if (
          !(a =
            "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
              ? [null, e, null]
              : ue.exec(e)) ||
          (!a[1] && t)
        )
          return !t || t.jquery
            ? (t || s).find(e)
            : this.constructor(t).find(e);
        if (a[1]) {
          if (
            ((t = t instanceof n ? t[0] : t),
            n.merge(
              this,
              n.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : i, !0)
            ),
            oe.test(a[1]) && n.isPlainObject(t))
          )
            for (a in t) o(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
          return this;
        }
        return (
          (r = i.getElementById(a[2])) && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : o(e)
        ? void 0 !== s.ready
          ? s.ready(e)
          : e(n)
        : n.makeArray(e, this);
    }).prototype = n.fn),
    (le = n(i)),
    (fe = /^(?:parents|prev(?:Until|All))/),
    (ge = { children: !0, contents: !0, next: !0, prev: !0 });
  function be(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  n.fn.extend({
    has: function (e) {
      var t = n(e, this),
        s = t.length;
      return this.filter(function () {
        for (var e = 0; e < s; e++) if (n.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var s,
        i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && n(e);
      if (!pe.test(e))
        for (; i < r; i++)
          for (s = this[i]; s && s !== t; s = s.parentNode)
            if (
              s.nodeType < 11 &&
              (a
                ? -1 < a.index(s)
                : 1 === s.nodeType && n.find.matchesSelector(s, e))
            ) {
              o.push(s);
              break;
            }
      return this.pushStack(1 < o.length ? n.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? U.call(n(e), this[0])
          : U.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(e, t))));
    },
    addBack: function (e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    n.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return C(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return C(e, "parentNode", n);
        },
        next: function (e) {
          return be(e, "nextSibling");
        },
        prev: function (e) {
          return be(e, "previousSibling");
        },
        nextAll: function (e) {
          return C(e, "nextSibling");
        },
        prevAll: function (e) {
          return C(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return C(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return C(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ve((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ve(e.firstChild);
        },
        contents: function (e) {
          return "undefined" != typeof e.contentDocument
            ? e.contentDocument
            : (d(e, "template") && (e = e.content || e),
              n.merge([], e.childNodes));
        },
      },
      function (e, t) {
        n.fn[e] = function (s, o) {
          var i = n.map(this, t, s);
          return (
            "Until" !== e.slice(-5) && (o = s),
            o && "string" == typeof o && (i = n.filter(o, i)),
            1 < this.length &&
              (ge[e] || n.uniqueSort(i), fe.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    ),
    (f = /[^\x20\t\r\n\f]+/g);
  function E(e) {
    return e;
  }
  function P(e) {
    throw e;
  }
  function Fe(e, t, n, s) {
    var i;
    try {
      e && o((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && o((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(s));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (n.Callbacks = function (e) {
    e =
      "string" == typeof e
        ? ((u = e),
          (l = {}),
          n.each(u.match(f) || [], function (e, t) {
            l[t] = !0;
          }),
          l)
        : n.extend({}, e);
    var s,
      i,
      r,
      l,
      u,
      h,
      t = [],
      c = [],
      a = -1,
      m = function () {
        for (i = i || e.once, h = r = !0; c.length; a = -1)
          for (s = c.shift(); ++a < t.length; )
            !1 === t[a].apply(s[0], s[1]) &&
              e.stopOnFalse &&
              ((a = t.length), (s = !1));
        e.memory || (s = !1), (r = !1), i && (t = s ? [] : "");
      },
      d = {
        add: function () {
          return (
            t &&
              (s && !r && ((a = t.length - 1), c.push(s)),
              (function s(i) {
                n.each(i, function (n, i) {
                  o(i)
                    ? (e.unique && d.has(i)) || t.push(i)
                    : i && i.length && "string" !== _(i) && s(i);
                });
              })(arguments),
              s && !r && m()),
            this
          );
        },
        remove: function () {
          return (
            n.each(arguments, function (e, s) {
              for (var o; -1 < (o = n.inArray(s, t, o)); )
                t.splice(o, 1), o <= a && a--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < n.inArray(e, t) : 0 < t.length;
        },
        empty: function () {
          return t && (t = []), this;
        },
        disable: function () {
          return (i = c = []), (t = s = ""), this;
        },
        disabled: function () {
          return !t;
        },
        lock: function () {
          return (i = c = []), s || r || (t = s = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, t) {
          return (
            i ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              c.push(t),
              r || m()),
            this
          );
        },
        fire: function () {
          return d.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!h;
        },
      };
    return d;
  }),
    n.extend({
      Deferred: function (t) {
        var i = [
            [
              "notify",
              "progress",
              n.Callbacks("memory"),
              n.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              n.Callbacks("once memory"),
              n.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              n.Callbacks("once memory"),
              n.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          a = {
            state: function () {
              return r;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return n
                .Deferred(function (t) {
                  n.each(i, function (n, i) {
                    var a = o(e[i[4]]) && e[i[4]];
                    s[i[1]](function () {
                      var e = a && a.apply(this, arguments);
                      e && o(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, a ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, s, a) {
              var r = 0;
              function c(t, s, i, a) {
                return function () {
                  var l = this,
                    d = arguments,
                    h = function () {
                      var e, n;
                      if (!(t < r)) {
                        if ((e = i.apply(l, d)) === s.promise())
                          throw new TypeError("Thenable self-resolution");
                        (n =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          o(n)
                            ? a
                              ? n.call(e, c(r, s, E, a), c(r, s, P, a))
                              : (r++,
                                n.call(
                                  e,
                                  c(r, s, E, a),
                                  c(r, s, P, a),
                                  c(r, s, E, s.notifyWith)
                                ))
                            : (i !== E && ((l = void 0), (d = [e])),
                              (a || s.resolveWith)(l, d));
                      }
                    },
                    u = a
                      ? h
                      : function () {
                          try {
                            h();
                          } catch (e) {
                            n.Deferred.exceptionHook &&
                              n.Deferred.exceptionHook(e, u.stackTrace),
                              r <= t + 1 &&
                                (i !== P && ((l = void 0), (d = [e])),
                                s.rejectWith(l, d));
                          }
                        };
                  t
                    ? u()
                    : (n.Deferred.getStackHook &&
                        (u.stackTrace = n.Deferred.getStackHook()),
                      e.setTimeout(u));
                };
              }
              return n
                .Deferred(function (e) {
                  i[0][3].add(c(0, e, o(a) ? a : E, e.notifyWith)),
                    i[1][3].add(c(0, e, o(t) ? t : E)),
                    i[2][3].add(c(0, e, o(s) ? s : P));
                })
                .promise();
            },
            promise: function (e) {
              return e != null ? n.extend(e, a) : a;
            },
          },
          s = {};
        return (
          n.each(i, function (e, t) {
            var n = t[2],
              o = t[5];
            (a[t[1]] = n.add),
              o &&
                n.add(
                  function () {
                    r = o;
                  },
                  i[3 - e][2].disable,
                  i[3 - e][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (e) {
        var a = arguments.length,
          t = a,
          r = Array(t),
          i = g.call(arguments),
          s = n.Deferred(),
          c = function (e) {
            return function (t) {
              (r[e] = this),
                (i[e] = 1 < arguments.length ? g.call(arguments) : t),
                --a || s.resolveWith(r, i);
            };
          };
        if (
          a <= 1 &&
          (Fe(e, s.done(c(t)).resolve, s.reject, !a),
          "pending" === s.state() || o(i[t] && i[t].then))
        )
          return s.then();
        for (; t--; ) Fe(i[t], c(t), s.reject);
        return s.promise();
      },
    }),
    (Se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/),
    (n.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        Se.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
    (n.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    }),
    (B = n.Deferred());
  function V() {
    i.removeEventListener("DOMContentLoaded", V),
      e.removeEventListener("load", V),
      n.ready();
  }
  (n.fn.ready = function (e) {
    return (
      B.then(e).catch(function (e) {
        n.readyException(e);
      }),
      this
    );
  }),
    n.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --n.readyWait : n.isReady) ||
          ((n.isReady = !0) !== e && 0 < --n.readyWait) ||
          B.resolveWith(i, [n]);
      },
    }),
    (n.ready.then = B.then),
    "complete" === i.readyState ||
    ("loading" !== i.readyState && !i.documentElement.doScroll)
      ? e.setTimeout(n.ready)
      : (i.addEventListener("DOMContentLoaded", V),
        e.addEventListener("load", V));
  var h = function (e, t, s, i, a, r, c) {
      var l = 0,
        u = e.length,
        d = s == null;
      if ("object" === _(s))
        for (l in ((a = !0), s)) h(e, t, l, s[l], !0, r, c);
      else if (
        void 0 !== i &&
        ((a = !0),
        o(i) || (c = !0),
        d &&
          (c
            ? (t.call(e, i), (t = null))
            : ((d = t),
              (t = function (e, t, s) {
                return d.call(n(e), s);
              }))),
        t)
      )
        for (; l < u; l++) t(e[l], s, c ? i : i.call(e[l], l, t(e[l], s)));
      return a ? e : d ? t.call(e) : u ? t(e[0], s) : r;
    },
    ht = /^-ms-/,
    bt = /-([a-z])/g;
  function Qe(e, t) {
    return t.toUpperCase();
  }
  function u(e) {
    return e.replace(ht, "ms-").replace(bt, Qe);
  }
  F = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function T() {
    this.expando = n.expando + T.uid++;
  }
  (T.uid = 1),
    (T.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            F(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var s,
          o = this.cache(e);
        if ("string" == typeof t) o[u(t)] = n;
        else for (s in t) o[u(s)] = t[s];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][u(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var o,
          s = e[this.expando];
        if (void 0 !== s) {
          if (void 0 !== t)
            for (
              o = (t = Array.isArray(t)
                ? t.map(u)
                : ((t = u(t)) in s)
                ? [t]
                : t.match(f) || []).length;
              o--;

            )
              delete s[t[o]];
          (void 0 === t || n.isEmptyObject(s)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !n.isEmptyObject(t);
      },
    });
  var s = new T(),
    r = new T(),
    ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    tt = /[A-Z]/g;
  function He(e, t, n) {
    var s, o;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((o = "data-" + t.replace(tt, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(o)))
      ) {
        try {
          n =
            "true" === (s = n) ||
            ("false" !== s &&
              ("null" === s
                ? null
                : s === +s + ""
                ? +s
                : ot.test(s)
                ? JSON.parse(s)
                : s));
        } catch {}
        r.set(e, t, n);
      } else n = void 0;
    return n;
  }
  n.extend({
    hasData: function (e) {
      return r.hasData(e) || s.hasData(e);
    },
    data: function (e, t, n) {
      return r.access(e, t, n);
    },
    removeData: function (e, t) {
      r.remove(e, t);
    },
    _data: function (e, t, n) {
      return s.access(e, t, n);
    },
    _removeData: function (e, t) {
      s.remove(e, t);
    },
  }),
    n.fn.extend({
      data: function (e, t) {
        var o,
          i,
          a,
          n = this[0],
          c = n && n.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((a = r.get(n)), 1 === n.nodeType && !s.get(n, "hasDataAttrs"))
          ) {
            for (i = c.length; i--; )
              c[i] &&
                0 === (o = c[i].name).indexOf("data-") &&
                ((o = u(o.slice(5))), He(n, o, a[o]));
            s.set(n, "hasDataAttrs", !0);
          }
          return a;
        }
        return "object" == typeof e
          ? this.each(function () {
              r.set(this, e);
            })
          : h(
              this,
              function (t) {
                var s;
                if (n && void 0 === t)
                  return void 0 !== (s = r.get(n, e))
                    ? s
                    : void 0 !== (s = He(n, e))
                    ? s
                    : void 0;
                this.each(function () {
                  r.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          r.remove(this, e);
        });
      },
    }),
    n.extend({
      queue: function (e, t, o) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = s.get(e, t)),
            o &&
              (!i || Array.isArray(o)
                ? (i = s.access(e, t, n.makeArray(o)))
                : i.push(o)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var s = n.queue(e, t),
          a = s.length,
          o = s.shift(),
          i = n._queueHooks(e, t);
        "inprogress" === o && ((o = s.shift()), a--),
          o &&
            ("fx" === t && s.unshift("inprogress"),
            delete i.stop,
            o.call(
              e,
              function () {
                n.dequeue(e, t);
              },
              i
            )),
          !a && i && i.empty.fire();
      },
      _queueHooks: function (e, t) {
        var o = t + "queueHooks";
        return (
          s.get(e, o) ||
          s.access(e, o, {
            empty: n.Callbacks("once memory").add(function () {
              s.remove(e, [t + "queue", o]);
            }),
          })
        );
      },
    }),
    n.fn.extend({
      queue: function (e, t) {
        var s = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), s--),
          arguments.length < s
            ? n.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var s = n.queue(this, e, t);
                n._queueHooks(this, e),
                  "fx" === e && "inprogress" !== s[0] && n.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          n.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var o,
          a = 1,
          r = n.Deferred(),
          i = this,
          c = this.length,
          l = function () {
            --a || r.resolveWith(i, [i]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          c--;

        )
          (o = s.get(i[c], e + "queueHooks")) &&
            o.empty &&
            (a++, o.empty.add(l));
        return l(), r.promise(t);
      },
    });
  var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"),
    m = ["Top", "Right", "Bottom", "Left"],
    z = i.documentElement,
    y = function (e) {
      return n.contains(e.ownerDocument, e);
    },
    dt = { composed: !0 };
  z.getRootNode &&
    (y = function (e) {
      return (
        n.contains(e.ownerDocument, e) || e.getRootNode(dt) === e.ownerDocument
      );
    }),
    (q = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && y(e) && "none" === n.css(e, "display"))
      );
    }),
    (ae = function (e, t, n, s) {
      var o,
        i,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, s || [])), t)) e.style[o] = a[o];
      return i;
    }),
    (K = {});
  function de(e, t) {
    for (var i, a, c, l, d, u, h, r = [], o = 0, m = e.length; o < m; o++)
      (i = e[o]).style &&
        ((l = i.style.display),
        t
          ? ("none" === l &&
              ((r[o] = s.get(i, "display") || null),
              r[o] || (i.style.display = "")),
            "" === i.style.display &&
              q(i) &&
              (r[o] =
                ((a = d = c = void 0),
                (d = (h = i).ownerDocument),
                (u = h.nodeName),
                (a = K[u]) ||
                  ((c = d.body.appendChild(d.createElement(u))),
                  (a = n.css(c, "display")),
                  c.parentNode.removeChild(c),
                  "none" === a && (a = "block"),
                  (K[u] = a)))))
          : "none" !== l && ((r[o] = "none"), s.set(i, "display", l)));
    for (o = 0; o < m; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  n.fn.extend({
    show: function () {
      return de(this, !0);
    },
    hide: function () {
      return de(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            q(this) ? n(this).show() : n(this).hide();
          });
    },
  });
  var M = /^(?:checkbox|radio)$/i,
    he = /<([a-z][^/\0>\x20\t\r\n\f]*)/i,
    me = /^$|^module$|\/(?:java|ecma)script/i,
    l = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function c(e, t) {
    var s;
    return (
      (s =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && d(e, t)) ? n.merge([e], s) : s
    );
  }
  function se(e, t) {
    for (var n = 0, o = e.length; n < o; n++)
      s.set(e[n], "globalEval", !t || s.get(t[n], "globalEval"));
  }
  (l.optgroup = l.option),
    (l.tbody = l.tfoot = l.colgroup = l.caption = l.thead),
    (l.th = l.td),
    (je = /<|&#?\w+;/);
  function ye(e, t, s, o, i) {
    for (
      var a,
        r,
        h,
        m,
        p,
        g,
        d = t.createDocumentFragment(),
        f = [],
        u = 0,
        v = e.length;
      u < v;
      u++
    )
      if ((a = e[u]) || 0 === a)
        if ("object" === _(a)) n.merge(f, a.nodeType ? [a] : a);
        else if (je.test(a)) {
          for (
            r = r || d.appendChild(t.createElement("div")),
              p = (he.exec(a) || ["", ""])[1].toLowerCase(),
              h = l[p] || l._default,
              r.innerHTML = h[1] + n.htmlPrefilter(a) + h[2],
              m = h[0];
            m--;

          )
            r = r.lastChild;
          n.merge(f, r.childNodes), ((r = d.firstChild).textContent = "");
        } else f.push(t.createTextNode(a));
    for (d.textContent = "", u = 0; (a = f[u++]); )
      if (o && -1 < n.inArray(a, o)) i && i.push(a);
      else if (((g = y(a)), (r = c(d.appendChild(a), "script")), g && se(r), s))
        for (m = 0; (a = r[m++]); ) me.test(a.type || "") && s.push(a);
    return d;
  }
  (N = i.createDocumentFragment().appendChild(i.createElement("div"))),
    (H = i.createElement("input")).setAttribute("type", "radio"),
    H.setAttribute("checked", "checked"),
    H.setAttribute("name", "t"),
    N.appendChild(H),
    (a.checkClone = N.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (N.innerHTML = "<textarea>x</textarea>"),
    (a.noCloneChecked = !!N.cloneNode(!0).lastChild.defaultValue);
  var yt = /^key/,
    jt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Oe = /^([^.]*)(?:\.(.+)|)/;
  function w() {
    return !0;
  }
  function A() {
    return !1;
  }
  function mt(e, t) {
    return (
      (e ===
        (function () {
          try {
            return i.activeElement;
          } catch {}
        })()) ==
      ("focus" === t)
    );
  }
  function te(e, t, s, o, i, a) {
    var r, c;
    if ("object" == typeof t) {
      for (c in ("string" != typeof s && ((o = o || s), (s = void 0)), t))
        te(e, c, s, o, t[c], a);
      return e;
    }
    if (
      (o == null && i == null
        ? ((i = s), (o = s = void 0))
        : i == null &&
          ("string" == typeof s
            ? ((i = o), (o = void 0))
            : ((i = o), (o = s), (s = void 0))),
      !1 === i)
    )
      i = A;
    else if (!i) return e;
    return (
      1 === a &&
        ((r = i),
        ((i = function (e) {
          return n().off(e), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = n.guid++))),
      e.each(function () {
        n.event.add(this, t, i, o, s);
      })
    );
  }
  function I(e, t, o) {
    o
      ? (s.set(e, t, !1),
        n.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var a,
              r,
              i = s.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (i.length)
                (n.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((i = g.call(arguments)),
                s.set(this, t, i),
                (r = o(this, t)),
                this[t](),
                i !== (a = s.get(this, t)) || r ? s.set(this, t, !1) : (a = {}),
                i !== a)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), a.value
                );
            } else
              i.length &&
                (s.set(this, t, {
                  value: n.event.trigger(
                    n.extend(i[0], n.Event.prototype),
                    i.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === s.get(e, t) && n.event.add(e, t, w);
  }
  (n.event = {
    global: {},
    add: function (e, t, o, i, a) {
      var r,
        c,
        l,
        d,
        h,
        m,
        p,
        g,
        v,
        b,
        j,
        u = s.get(e);
      if (u)
        for (
          o.handler && ((o = (p = o).handler), (a = p.selector)),
            a && n.find.matchesSelector(z, a),
            o.guid || (o.guid = n.guid++),
            (m = u.events) || (m = u.events = {}),
            (h = u.handle) ||
              (h = u.handle =
                function (t) {
                  return "undefined" != typeof n && n.event.triggered !== t.type
                    ? n.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            g = (t = (t || "").match(f) || [""]).length;
          g--;

        )
          (r = j = (b = Oe.exec(t[g]) || [])[1]),
            (v = (b[2] || "").split(".").sort()),
            r &&
              ((c = n.event.special[r] || {}),
              (r = (a ? c.delegateType : c.bindType) || r),
              (c = n.event.special[r] || {}),
              (l = n.extend(
                {
                  type: r,
                  origType: j,
                  data: i,
                  handler: o,
                  guid: o.guid,
                  selector: a,
                  needsContext: a && n.expr.match.needsContext.test(a),
                  namespace: v.join("."),
                },
                p
              )),
              (d = m[r]) ||
                (((d = m[r] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(e, i, v, h)) ||
                  (e.addEventListener && e.addEventListener(r, h))),
              c.add &&
                (c.add.call(e, l), l.handler.guid || (l.handler.guid = o.guid)),
              a ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (n.event.global[r] = !0));
    },
    remove: function (e, t, o, i, a) {
      var r,
        c,
        l,
        d,
        u,
        h,
        m,
        p,
        v,
        b,
        j,
        g = s.hasData(e) && s.get(e);
      if (g && (h = g.events)) {
        for (p = (t = (t || "").match(f) || [""]).length; p--; )
          if (
            ((r = j = (d = Oe.exec(t[p]) || [])[1]),
            (v = (d[2] || "").split(".").sort()),
            r)
          ) {
            for (
              l = n.event.special[r] || {},
                u = h[(r = (i ? l.delegateType : l.bindType) || r)] || [],
                d =
                  d[2] &&
                  new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                b = m = u.length;
              m--;

            )
              (c = u[m]),
                (!a && j !== c.origType) ||
                  (o && o.guid !== c.guid) ||
                  (d && !d.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (u.splice(m, 1),
                  c.selector && u.delegateCount--,
                  l.remove && l.remove.call(e, c));
            b &&
              !u.length &&
              ((l.teardown && !1 !== l.teardown.call(e, v, g.handle)) ||
                n.removeEvent(e, r, g.handle),
              delete h[r]);
          } else for (r in h) n.event.remove(e, r + t[p], o, i, !0);
        n.isEmptyObject(h) && s.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var o,
        i,
        a,
        l,
        d,
        u,
        t = n.event.fix(e),
        c = new Array(arguments.length),
        h = (s.get(this, "events") || {})[t.type] || [],
        r = n.event.special[t.type] || {};
      for (c[0] = t, o = 1; o < arguments.length; o++) c[o] = arguments[o];
      if (
        ((t.delegateTarget = this),
        !r.preDispatch || !1 !== r.preDispatch.call(this, t))
      ) {
        for (
          u = n.event.handlers.call(this, t, h), o = 0;
          (a = u[o++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = a.elem, l = 0;
            (i = a.handlers[l++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace &&
              !1 !== i.namespace &&
              !t.rnamespace.test(i.namespace)) ||
              ((t.handleObj = i),
              (t.data = i.data),
              void 0 !==
                (d = (
                  (n.event.special[i.origType] || {}).handle || i.handler
                ).apply(a.elem, c)) &&
                !1 === (t.result = d) &&
                (t.preventDefault(), t.stopPropagation()));
        return r.postDispatch && r.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var o,
        i,
        a,
        r,
        l,
        d = [],
        c = t.delegateCount,
        s = e.target;
      if (c && s.nodeType && !("click" === e.type && 1 <= e.button))
        for (; s !== this; s = s.parentNode || this)
          if (1 === s.nodeType && ("click" !== e.type || !0 !== s.disabled)) {
            for (a = [], r = {}, i = 0; i < c; i++)
              void 0 === r[(o = (l = t[i]).selector + " ")] &&
                (r[o] = l.needsContext
                  ? -1 < n(o, this).index(s)
                  : n.find(o, this, null, [s]).length),
                r[o] && a.push(l);
            a.length && d.push({ elem: s, handlers: a });
          }
      return (
        (s = this), c < t.length && d.push({ elem: s, handlers: t.slice(c) }), d
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(n.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: o(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[n.expando] ? e : new n.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            M.test(t.type) && t.click && d(t, "input") && I(t, "click", w), !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            M.test(t.type) && t.click && d(t, "input") && I(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (M.test(t.type) && t.click && d(t, "input") && s.get(t, "click")) ||
            d(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (n.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (n.Event = function (e, t) {
      if (!(this instanceof n.Event)) return new n.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? w
              : A),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && n.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[n.expando] = !0);
    }),
    (n.Event.prototype = {
      constructor: n.Event,
      isDefaultPrevented: A,
      isPropagationStopped: A,
      isImmediatePropagationStopped: A,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = w),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = w),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = w),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    n.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && yt.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && jt.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      n.event.addProp
    ),
    n.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      n.event.special[e] = {
        setup: function () {
          return I(this, e, mt), !1;
        },
        trigger: function () {
          return I(this, e), !0;
        },
        delegateType: t,
      };
    }),
    n.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        n.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var o,
              s = e.relatedTarget,
              i = e.handleObj;
            return (
              (s && (s === this || n.contains(this, s))) ||
                ((e.type = i.origType),
                (o = i.handler.apply(this, arguments)),
                (e.type = t)),
              o
            );
          },
        };
      }
    ),
    n.fn.extend({
      on: function (e, t, n, s) {
        return te(this, e, t, n, s);
      },
      one: function (e, t, n, s) {
        return te(this, e, t, n, s, 1);
      },
      off: function (e, t, s) {
        var o, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (o = e.handleObj),
            n(e.delegateTarget).off(
              o.namespace ? o.origType + "." + o.namespace : o.origType,
              o.selector,
              o.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((s = t), (t = void 0)),
          !1 === s && (s = A),
          this.each(function () {
            n.event.remove(this, e, s, t);
          })
        );
      },
    });
  var ut =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    st = /<script|<style|<link/i,
    et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function ze(e, t) {
    return (
      (d(e, "table") &&
        d(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        n(e).children("tbody")[0]) ||
      e
    );
  }
  function at(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function it(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var o, i, a, c, l, d, u, h;
    if (1 === t.nodeType) {
      if (
        s.hasData(e) &&
        ((c = s.access(e)), (l = s.set(t, c)), (a = c.events))
      )
        for (i in (delete l.handle, (l.events = {}), a))
          for (o = 0, d = a[i].length; o < d; o++) n.event.add(t, i, a[i][o]);
      r.hasData(e) && ((u = r.access(e)), (h = n.extend({}, u)), r.set(t, h));
    }
  }
  function O(e, t, i, r) {
    t = Te.apply([], t);
    var l,
      u,
      h,
      m,
      g,
      v,
      d = 0,
      f = e.length,
      j = f - 1,
      p = t[0],
      b = o(p);
    if (b || (1 < f && "string" == typeof p && !a.checkClone && et.test(p)))
      return e.each(function (n) {
        var s = e.eq(n);
        b && (t[0] = p.call(this, n, s.html())), O(s, t, i, r);
      });
    if (
      f &&
      ((g = (h = ye(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === h.childNodes.length && (h = g),
      g || r)
    ) {
      for (m = (u = n.map(c(h, "script"), at)).length; d < f; d++)
        (l = h),
          d !== j &&
            ((l = n.clone(l, !0, !0)), m && n.merge(u, c(l, "script"))),
          i.call(e[d], l, d);
      if (m)
        for (v = u[u.length - 1].ownerDocument, n.map(u, it), d = 0; d < m; d++)
          (l = u[d]),
            me.test(l.type || "") &&
              !s.access(l, "globalEval") &&
              n.contains(v, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? n._evalUrl &&
                  !l.noModule &&
                  n._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce"),
                  })
                : Ae(l.textContent.replace(rt, ""), l, v));
    }
    return e;
  }
  function Pe(e, t, s) {
    for (var o, a = t ? n.filter(t, e) : e, i = 0; null != (o = a[i]); i++)
      s || 1 !== o.nodeType || n.cleanData(c(o)),
        o.parentNode &&
          (s && y(o) && se(c(o, "script")), o.parentNode.removeChild(o));
    return e;
  }
  n.extend({
    htmlPrefilter: function (e) {
      return e.replace(ut, "<$1></$2>");
    },
    clone: function (e, t, s) {
      var o,
        i,
        r,
        d,
        u,
        h,
        m,
        l = e.cloneNode(!0),
        f = y(e);
      if (
        !(
          a.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          n.isXMLDoc(e)
        )
      )
        for (i = c(l), o = 0, d = (r = c(e)).length; o < d; o++)
          (u = r[o]),
            (h = i[o]),
            void 0,
            "input" === (m = h.nodeName.toLowerCase()) && M.test(u.type)
              ? (h.checked = u.checked)
              : ("input" !== m && "textarea" !== m) ||
                (h.defaultValue = u.defaultValue);
      if (t)
        if (s)
          for (r = r || c(e), i = i || c(l), o = 0, d = r.length; o < d; o++)
            Le(r[o], i[o]);
        else Le(e, l);
      return 0 < (i = c(l, "script")).length && se(i, !f && c(e, "script")), l;
    },
    cleanData: function (e) {
      for (var t, o, i, c = n.event.special, a = 0; void 0 !== (t = e[a]); a++)
        if (F(t)) {
          if ((o = t[s.expando])) {
            if (o.events)
              for (i in o.events)
                c[i] ? n.event.remove(t, i) : n.removeEvent(t, i, o.handle);
            t[s.expando] = void 0;
          }
          t[r.expando] && (t[r.expando] = void 0);
        }
    },
  }),
    n.fn.extend({
      detach: function (e) {
        return Pe(this, e, !0);
      },
      remove: function (e) {
        return Pe(this, e);
      },
      text: function (e) {
        return h(
          this,
          function (e) {
            return void 0 === e
              ? n.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return O(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ze(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return O(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ze(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return O(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (n.cleanData(c(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = e != null && e),
          (t = t ?? e),
          this.map(function () {
            return n.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return h(
          this,
          function (e) {
            var t = this[0] || {},
              s = 0,
              o = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !st.test(e) &&
              !l[(he.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = n.htmlPrefilter(e);
              try {
                for (; s < o; s++)
                  1 === (t = this[s] || {}).nodeType &&
                    (n.cleanData(c(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return O(
          this,
          arguments,
          function (t) {
            var s = this.parentNode;
            n.inArray(this, e) < 0 &&
              (n.cleanData(c(this)), s && s.replaceChild(t, this));
          },
          e
        );
      },
    }),
    n.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        n.fn[e] = function (e) {
          for (var o, i = [], a = n(e), r = a.length - 1, s = 0; s <= r; s++)
            (o = s === r ? this : this.clone(!0)),
              n(a[s])[t](o),
              Z.apply(i, o.get());
          return this.pushStack(i);
        };
      }
    );
  var ee = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"),
    L = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    lt = new RegExp(m.join("|"), "i");
  function D(e, t, s) {
    var i,
      r,
      c,
      l,
      o = e.style;
    return (
      (s = s || L(e)) &&
        ("" !== (i = s.getPropertyValue(t) || s[t]) ||
          y(e) ||
          (i = n.style(e, t)),
        !a.pixelBoxStyles() &&
          ee.test(i) &&
          lt.test(t) &&
          ((r = o.width),
          (c = o.minWidth),
          (l = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = i),
          (i = s.width),
          (o.width = r),
          (o.minWidth = c),
          (o.maxWidth = l))),
      void 0 !== i ? i + "" : i
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function s() {
      if (t) {
        (r.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (t.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          z.appendChild(r).appendChild(t);
        var n = e.getComputedStyle(t);
        (c = "1%" !== n.top),
          (h = 12 === o(n.marginLeft)),
          (t.style.right = "60%"),
          (u = 36 === o(n.right)),
          (l = 36 === o(n.width)),
          (t.style.position = "absolute"),
          (d = 12 === o(t.offsetWidth / 3)),
          z.removeChild(r),
          (t = null);
      }
    }
    function o(e) {
      return Math.round(parseFloat(e));
    }
    var c,
      l,
      d,
      u,
      h,
      r = i.createElement("div"),
      t = i.createElement("div");
    t.style &&
      ((t.style.backgroundClip = "content-box"),
      (t.cloneNode(!0).style.backgroundClip = ""),
      (a.clearCloneStyle = "content-box" === t.style.backgroundClip),
      n.extend(a, {
        boxSizingReliable: function () {
          return s(), l;
        },
        pixelBoxStyles: function () {
          return s(), u;
        },
        pixelPosition: function () {
          return s(), c;
        },
        reliableMarginLeft: function () {
          return s(), h;
        },
        scrollboxSize: function () {
          return s(), d;
        },
      }));
  })();
  var We = ["Webkit", "Moz", "ms"],
    Ue = i.createElement("div").style,
    Ke = {};
  function qe(e) {
    var t = n.cssProps[e] || Ke[e];
    return (
      t ||
      (e in Ue
        ? e
        : (Ke[e] =
            (function (e) {
              for (
                var n = e[0].toUpperCase() + e.slice(1), t = We.length;
                t--;

              )
                if ((e = We[t] + n) in Ue) return e;
            })(e) || e))
    );
  }
  var j,
    Ge,
    Ze = /^(none|table(?!-c[ea]).+)/,
    Be = /^--/,
    ct = { position: "absolute", visibility: "hidden", display: "block" },
    Ie = { letterSpacing: "0", fontWeight: "400" };
  function re(e, t, n) {
    var s = R.exec(t);
    return s ? Math.max(0, s[2] - (n || 0)) + (s[3] || "px") : t;
  }
  function J(e, t, s, o, i, a) {
    var r = "width" === t ? 1 : 0,
      l = 0,
      c = 0;
    if (s === (o ? "border" : "content")) return 0;
    for (; r < 4; r += 2)
      "margin" === s && (c += n.css(e, s + m[r], !0, i)),
        o
          ? ("content" === s && (c -= n.css(e, "padding" + m[r], !0, i)),
            "margin" !== s && (c -= n.css(e, "border" + m[r] + "Width", !0, i)))
          : ((c += n.css(e, "padding" + m[r], !0, i)),
            "padding" !== s
              ? (c += n.css(e, "border" + m[r] + "Width", !0, i))
              : (l += n.css(e, "border" + m[r] + "Width", !0, i)));
    return (
      !o &&
        0 <= a &&
        (c +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - a - c - l - 0.5
            )
          ) || 0),
      c
    );
  }
  function Re(e, t, s) {
    var i = L(e),
      r =
        (!a.boxSizingReliable() || s) &&
        "border-box" === n.css(e, "boxSizing", !1, i),
      c = r,
      o = D(e, t, i),
      l = "offset" + t[0].toUpperCase() + t.slice(1);
    if (ee.test(o)) {
      if (!s) return o;
      o = "auto";
    }
    return (
      ((!a.boxSizingReliable() && r) ||
        "auto" === o ||
        (!parseFloat(o) && "inline" === n.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === n.css(e, "boxSizing", !1, i)),
        (c = l in e) && (o = e[l])),
      (o = parseFloat(o) || 0) +
        J(e, t, s || (r ? "border" : "content"), c, i, o) +
        "px"
    );
  }
  n.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = D(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, s, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          r,
          l,
          d = u(t),
          h = Be.test(t),
          c = e.style;
        if (
          (h || (t = qe(d)), (r = n.cssHooks[t] || n.cssHooks[d]), void 0 === s)
        )
          return r && "get" in r && void 0 !== (i = r.get(e, !1, o)) ? i : c[t];
        "string" === (l = typeof s) &&
          (i = R.exec(s)) &&
          i[1] &&
          ((s = (function (e, t, s, o) {
            var c,
              l,
              d = 20,
              u = o
                ? function () {
                    return o.cur();
                  }
                : function () {
                    return n.css(e, t, "");
                  },
              r = u(),
              a = (s && s[3]) || (n.cssNumber[t] ? "" : "px"),
              i =
                e.nodeType &&
                (n.cssNumber[t] || ("px" !== a && +r)) &&
                R.exec(n.css(e, t));
            if (i && i[3] !== a) {
              for (r /= 2, a = a || i[3], i = +r || 1; d--; )
                n.style(e, t, i + a),
                  (1 - l) * (1 - (l = u() / r || 0.5)) <= 0 && (d = 0),
                  (i /= l);
              (i *= 2), n.style(e, t, i + a), (s = s || []);
            }
            return (
              s &&
                ((i = +i || +r || 0),
                (c = s[1] ? i + (s[1] + 1) * s[2] : +s[2]),
                o && ((o.unit = a), (o.start = i), (o.end = c))),
              c
            );
          })(e, t, i)),
          (l = "number")),
          s != null &&
            s == s &&
            ("number" !== l ||
              h ||
              (s += (i && i[3]) || (n.cssNumber[d] ? "" : "px")),
            a.clearCloneStyle ||
              "" !== s ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (r && "set" in r && void 0 === (s = r.set(e, s, o))) ||
              (h ? c.setProperty(t, s) : (c[t] = s)));
      }
    },
    css: function (e, t, s, o) {
      var i,
        a,
        r,
        c = u(t);
      return (
        Be.test(t) || (t = qe(c)),
        (r = n.cssHooks[t] || n.cssHooks[c]) &&
          "get" in r &&
          (i = r.get(e, !0, s)),
        void 0 === i && (i = D(e, t, o)),
        "normal" === i && t in Ie && (i = Ie[t]),
        "" === s || s
          ? ((a = parseFloat(i)), !0 === s || isFinite(a) ? a || 0 : i)
          : i
      );
    },
  }),
    n.each(["height", "width"], function (e, t) {
      n.cssHooks[t] = {
        get: function (e, s, o) {
          if (s)
            return !Ze.test(n.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Re(e, t, o)
              : ae(e, ct, function () {
                  return Re(e, t, o);
                });
        },
        set: function (e, s, o) {
          var c,
            i = L(e),
            l = !a.scrollboxSize() && "absolute" === i.position,
            d = (l || o) && "border-box" === n.css(e, "boxSizing", !1, i),
            r = o ? J(e, t, o, d, i) : 0;
          return (
            d &&
              l &&
              (r -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(i[t]) -
                  J(e, t, "border", !1, i) -
                  0.5
              )),
            r &&
              (c = R.exec(s)) &&
              "px" !== (c[3] || "px") &&
              ((e.style[t] = s), (s = n.css(e, t))),
            re(0, s, r)
          );
        },
      };
    }),
    (n.cssHooks.marginLeft = $e(a.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(D(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ae(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    n.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (n.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var s = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            s < 4;
            s++
          )
            i[e + m[s] + t] = o[s] || o[s - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (n.cssHooks[e + t].set = re);
    }),
    n.fn.extend({
      css: function (e, t) {
        return h(
          this,
          function (e, t, s) {
            var i,
              a,
              r = {},
              o = 0;
            if (Array.isArray(t)) {
              for (i = L(e), a = t.length; o < a; o++)
                r[t[o]] = n.css(e, t[o], !1, i);
              return r;
            }
            return void 0 !== s ? n.style(e, t, s) : n.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (n.fn.delay = function (t, s) {
      return (
        (t = (n.fx && n.fx.speeds[t]) || t),
        (s = s || "fx"),
        this.queue(s, function (n, s) {
          var o = e.setTimeout(n, t);
          s.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (j = i.createElement("input")),
    (Ge = i.createElement("select").appendChild(i.createElement("option"))),
    (j.type = "checkbox"),
    (a.checkOn = "" !== j.value),
    (a.optSelected = Ge.selected),
    ((j = i.createElement("input")).value = "t"),
    (j.type = "radio"),
    (a.radioValue = "t" === j.value),
    (S = n.expr.attrHandle),
    n.fn.extend({
      attr: function (e, t) {
        return h(this, n.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          n.removeAttr(this, e);
        });
      },
    }),
    n.extend({
      attr: function (e, t, s) {
        var o,
          i,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return "undefined" == typeof e.getAttribute
            ? n.prop(e, t, s)
            : ((1 === a && n.isXMLDoc(e)) ||
                (o =
                  n.attrHooks[t.toLowerCase()] ||
                  (n.expr.match.bool.test(t) ? ce : void 0)),
              void 0 !== s
                ? null === s
                  ? void n.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, s, t))
                  ? i
                  : (e.setAttribute(t, s + ""), s)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = n.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!a.radioValue && "radio" === t && d(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          o = 0,
          s = t && t.match(f);
        if (s && 1 === e.nodeType) for (; (n = s[o++]); ) e.removeAttribute(n);
      },
    }),
    (ce = {
      set: function (e, t, s) {
        return !1 === t ? n.removeAttr(e, s) : e.setAttribute(s, s), s;
      },
    }),
    n.each(n.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var s = S[t] || n.find.attr;
      S[t] = function (e, t, n) {
        var i,
          a,
          o = t.toLowerCase();
        return (
          n ||
            ((a = S[o]),
            (S[o] = i),
            (i = null != s(e, t, n) ? o : null),
            (S[o] = a)),
          i
        );
      };
    }),
    (Ne = /^(?:input|select|textarea|button)$/i),
    (De = /^(?:a|area)$/i);
  function k(e) {
    return (e.match(f) || []).join(" ");
  }
  function b(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Q(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(f)) || [];
  }
  n.fn.extend({
    prop: function (e, t) {
      return h(this, n.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[n.propFix[e] || e];
      });
    },
  }),
    n.extend({
      prop: function (e, t, s) {
        var o,
          i,
          a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return (
            (1 === a && n.isXMLDoc(e)) ||
              ((t = n.propFix[t] || t), (o = n.propHooks[t])),
            void 0 !== s
              ? o && "set" in o && void 0 !== (i = o.set(e, s, t))
                ? i
                : (e[t] = s)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = n.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Ne.test(e.nodeName) || (De.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    a.optSelected ||
      (n.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    n.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        n.propFix[this.toLowerCase()] = this;
      }
    ),
    n.fn.extend({
      addClass: function (e) {
        var t,
          s,
          i,
          a,
          r,
          c,
          l,
          d = 0;
        if (o(e))
          return this.each(function (t) {
            n(this).addClass(e.call(this, t, b(this)));
          });
        if ((r = Q(e)).length)
          for (; (t = this[d++]); )
            if (((i = b(t)), (s = 1 === t.nodeType && " " + k(i) + " "))) {
              for (c = 0; (a = r[c++]); )
                s.indexOf(" " + a + " ") < 0 && (s += a + " ");
              i !== (l = k(s)) && t.setAttribute("class", l);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          s,
          i,
          a,
          r,
          c,
          l,
          d = 0;
        if (o(e))
          return this.each(function (t) {
            n(this).removeClass(e.call(this, t, b(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((r = Q(e)).length)
          for (; (s = this[d++]); )
            if (((i = b(s)), (t = 1 === s.nodeType && " " + k(i) + " "))) {
              for (c = 0; (a = r[c++]); )
                for (; -1 < t.indexOf(" " + a + " "); )
                  t = t.replace(" " + a + " ", " ");
              i !== (l = k(t)) && s.setAttribute("class", l);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var i = typeof e,
          a = "string" === i || Array.isArray(e);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : o(e)
          ? this.each(function (s) {
              n(this).toggleClass(e.call(this, s, b(this), t), t);
            })
          : this.each(function () {
              if (a) {
                (r = 0), (o = n(this)), (c = Q(e));
                for (var t, o, r, c; (t = c[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              } else (void 0 !== e && "boolean" !== i) || ((t = b(this)) && s.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : s.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        for (var t, s = 0, n = " " + e + " "; (t = this[s++]); )
          if (1 === t.nodeType && -1 < (" " + k(b(t)) + " ").indexOf(n))
            return !0;
        return !1;
      },
    }),
    (Me = /\r/g),
    n.fn.extend({
      val: function (e) {
        var t,
          s,
          a,
          i = this[0];
        return arguments.length
          ? ((a = o(e)),
            this.each(function (s) {
              var o;
              1 === this.nodeType &&
                (null == (o = a ? e.call(this, s, n(this).val()) : e)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : Array.isArray(o) &&
                    (o = n.map(o, function (e) {
                      return e == null ? "" : e + "";
                    })),
                ((t =
                  n.valHooks[this.type] ||
                  n.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, o, "value")) ||
                  (this.value = o));
            }))
          : i
          ? (t = n.valHooks[i.type] || n.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (s = t.get(i, "value"))
            ? s
            : "string" == typeof (s = i.value)
            ? s.replace(Me, "")
            : s ?? ""
          : void 0;
      },
    }),
    n.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = n.find.attr(e, "value");
            return t ?? k(n.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              s,
              a,
              r = e.options,
              o = e.selectedIndex,
              i = "select-one" === e.type,
              c = i ? null : [],
              l = i ? o + 1 : r.length;
            for (s = o < 0 ? l : i ? o : 0; s < l; s++)
              if (
                ((t = r[s]).selected || s === o) &&
                !t.disabled &&
                (!t.parentNode.disabled || !d(t.parentNode, "optgroup"))
              ) {
                if (((a = n(t).val()), i)) return a;
                c.push(a);
              }
            return c;
          },
          set: function (e, t) {
            for (
              var s, o, i = e.options, a = n.makeArray(t), r = i.length;
              r--;

            )
              ((o = i[r]).selected =
                -1 < n.inArray(n.valHooks.option.get(o), a)) && (s = !0);
            return s || (e.selectedIndex = -1), a;
          },
        },
      },
    }),
    n.each(["radio", "checkbox"], function () {
      (n.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < n.inArray(n(e).val(), t));
        },
      }),
        a.checkOn ||
          (n.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (a.focusin = "onfocusin" in e),
    (X = /^(?:focusinfocus|focusoutblur)$/),
    (G = function (e) {
      e.stopPropagation();
    }),
    n.extend(n.event, {
      trigger: function (t, a, r, c) {
        var d,
          u,
          h,
          m,
          f,
          p,
          b,
          j,
          g = [r || i],
          l = $.call(t, "type") ? t.type : t,
          v = $.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((d = p = u = r = r || i),
          3 !== r.nodeType &&
            8 !== r.nodeType &&
            !X.test(l + n.event.triggered) &&
            (-1 < l.indexOf(".") &&
              ((l = (v = l.split(".")).shift()), v.sort()),
            (m = l.indexOf(":") < 0 && "on" + l),
            ((t = t[n.expando]
              ? t
              : new n.Event(l, "object" == typeof t && t)).isTrigger = c
              ? 2
              : 3),
            (t.namespace = v.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = r),
            (a = a == null ? [t] : n.makeArray(a, [t])),
            (h = n.event.special[l] || {}),
            c || !h.trigger || !1 !== h.trigger.apply(r, a)))
        ) {
          if (!c && !h.noBubble && !x(r)) {
            for (
              j = h.delegateType || l, X.test(j + l) || (d = d.parentNode);
              d;
              d = d.parentNode
            )
              g.push(d), (u = d);
            u === (r.ownerDocument || i) &&
              g.push(u.defaultView || u.parentWindow || e);
          }
          for (b = 0; (d = g[b++]) && !t.isPropagationStopped(); )
            (p = d),
              (t.type = 1 < b ? j : h.bindType || l),
              (f = (s.get(d, "events") || {})[t.type] && s.get(d, "handle")) &&
                f.apply(d, a),
              (f = m && d[m]) &&
                f.apply &&
                F(d) &&
                ((t.result = f.apply(d, a)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = l),
            c ||
              t.isDefaultPrevented() ||
              (h._default && !1 !== h._default.apply(g.pop(), a)) ||
              !F(r) ||
              (m &&
                o(r[l]) &&
                !x(r) &&
                ((u = r[m]) && (r[m] = null),
                (n.event.triggered = l),
                t.isPropagationStopped() && p.addEventListener(l, G),
                r[l](),
                t.isPropagationStopped() && p.removeEventListener(l, G),
                (n.event.triggered = void 0),
                u && (r[m] = u))),
            t.result
          );
        }
      },
      simulate: function (e, t, s) {
        var o = n.extend(new n.Event(), s, { type: e, isSimulated: !0 });
        n.event.trigger(o, null, t);
      },
    }),
    n.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          n.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var s = this[0];
        if (s) return n.event.trigger(e, t, s, !0);
      },
    }),
    a.focusin ||
      n.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var o = function (e) {
          n.event.simulate(t, e.target, n.event.fix(e));
        };
        n.event.special[t] = {
          setup: function () {
            var n = this.ownerDocument || this,
              i = s.access(n, t);
            i || n.addEventListener(e, o, !0), s.access(n, t, (i || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              i = s.access(n, t) - 1;
            i
              ? s.access(n, t, i)
              : (n.removeEventListener(e, o, !0), s.remove(n, t));
          },
        };
      });
  var Ee,
    ft = /\[\]$/,
    xe = /\r?\n/g,
    gt = /^(?:submit|button|image|reset|file)$/i,
    vt = /^(?:input|select|textarea|keygen)/i;
  function Y(e, t, s, o) {
    var i;
    if (Array.isArray(t))
      n.each(t, function (t, n) {
        s || ft.test(e)
          ? o(e, n)
          : Y(
              e + "[" + ("object" == typeof n && n != null ? t : "") + "]",
              n,
              s,
              o
            );
      });
    else if (s || "object" !== _(t)) o(e, t);
    else for (i in t) Y(e + "[" + i + "]", t[i], s, o);
  }
  return (
    (n.param = function (e, t) {
      var s,
        i = [],
        a = function (e, t) {
          var n = o(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) + "=" + encodeURIComponent(n ?? "");
        };
      if (e == null) return "";
      if (Array.isArray(e) || (e.jquery && !n.isPlainObject(e)))
        n.each(e, function () {
          a(this.name, this.value);
        });
      else for (s in e) Y(s, e[s], t, a);
      return i.join("&");
    }),
    n.fn.extend({
      serialize: function () {
        return n.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = n.prop(this, "elements");
          return e ? n.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !n(this).is(":disabled") &&
              vt.test(this.nodeName) &&
              !gt.test(e) &&
              (this.checked || !M.test(e))
            );
          })
          .map(function (e, t) {
            var s = n(this).val();
            return s == null
              ? null
              : Array.isArray(s)
              ? n.map(s, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(
                      xe,
                      `
`
                    ),
                  };
                })
              : {
                  name: t.name,
                  value: s.replace(
                    xe,
                    `
`
                  ),
                };
          })
          .get();
      },
    }),
    n.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (o(e) && (e = e.call(this[0])),
            (t = n(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return o(e)
          ? this.each(function (t) {
              n(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = n(this),
                s = t.contents();
              s.length ? s.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = o(e);
        return this.each(function (s) {
          n(this).wrapAll(t ? e.call(this, s) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              n(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (n.expr.pseudos.hidden = function (e) {
      return !n.expr.pseudos.visible(e);
    }),
    (n.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (a.createHTMLDocument =
      (((Ee = i.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ee.childNodes.length)),
    (n.parseHTML = function (e, t, s) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((s = t), (t = !1)),
          t ||
            (a.createHTMLDocument
              ? (((c = (t =
                  i.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = i.location.href),
                t.head.appendChild(c))
              : (t = i)),
          (o = !s && []),
          (r = oe.exec(e))
            ? [t.createElement(r[1])]
            : ((r = ye([e], t, o)),
              o && o.length && n(o).remove(),
              n.merge([], r.childNodes)));
      var o, r, c;
    }),
    (n.offset = {
      setOffset: function (e, t, s) {
        var i,
          r,
          c,
          l,
          d,
          m,
          u = n.css(e, "position"),
          h = n(e),
          a = {};
        "static" === u && (e.style.position = "relative"),
          (i = h.offset()),
          (c = n.css(e, "top")),
          (d = n.css(e, "left")),
          ("absolute" === u || "fixed" === u) && -1 < (c + d).indexOf("auto")
            ? ((l = (m = h.position()).top), (r = m.left))
            : ((l = parseFloat(c) || 0), (r = parseFloat(d) || 0)),
          o(t) && (t = t.call(e, s, n.extend({}, i))),
          null != t.top && (a.top = t.top - i.top + l),
          null != t.left && (a.left = t.left - i.left + r),
          "using" in t ? t.using.call(e, a) : h.css(a);
      },
    }),
    n.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                n.offset.setOffset(this, e, t);
              });
        var s,
          o,
          t = this[0];
        return t
          ? t.getClientRects().length
            ? ((s = t.getBoundingClientRect()),
              (o = t.ownerDocument.defaultView),
              { top: s.top + o.pageYOffset, left: s.left + o.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            s,
            o,
            t = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === n.css(t, "position")) s = t.getBoundingClientRect();
          else {
            for (
              s = this.offset(),
                o = t.ownerDocument,
                e = t.offsetParent || o.documentElement;
              e &&
              (e === o.body || e === o.documentElement) &&
              "static" === n.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== t &&
              1 === e.nodeType &&
              (((i = n(e).offset()).top += n.css(e, "borderTopWidth", !0)),
              (i.left += n.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: s.top - i.top - n.css(t, "marginTop", !0),
            left: s.left - i.left - n.css(t, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === n.css(e, "position");

          )
            e = e.offsetParent;
          return e || z;
        });
      },
    }),
    n.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var s = "pageYOffset" === t;
        n.fn[e] = function (n) {
          return h(
            this,
            function (e, n, o) {
              var i;
              if (
                (x(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
              )
                return i ? i[t] : e[n];
              i
                ? i.scrollTo(s ? i.pageXOffset : o, s ? o : i.pageYOffset)
                : (e[n] = o);
            },
            e,
            n,
            arguments.length
          );
        };
      }
    ),
    n.each(["top", "left"], function (e, t) {
      n.cssHooks[t] = $e(a.pixelPosition, function (e, s) {
        if (s) return (s = D(e, t)), ee.test(s) ? n(e).position()[t] + "px" : s;
      });
    }),
    n.each({ Height: "height", Width: "width" }, function (e, t) {
      n.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (s, o) {
          n.fn[o] = function (i, a) {
            var r = arguments.length && (s || "boolean" != typeof i),
              c = s || (!0 === i || !0 === a ? "margin" : "border");
            return h(
              this,
              function (t, s, i) {
                var a;
                return x(t)
                  ? 0 === o.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((a = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      a["scroll" + e],
                      t.body["offset" + e],
                      a["offset" + e],
                      a["client" + e]
                    ))
                  : void 0 === i
                  ? n.css(t, s, c)
                  : n.style(t, s, i, c);
              },
              t,
              r ? i : void 0,
              r
            );
          };
        }
      );
    }),
    n.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        n.fn[t] = function (e, n) {
          return 0 < arguments.length
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    n.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    n.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, s) {
        return this.on(t, e, n, s);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (n.proxy = function (e, t) {
      var s, i, a;
      if (("string" == typeof t && ((s = e[t]), (t = e), (e = s)), o(e)))
        return (
          (i = g.call(arguments, 2)),
          ((a = function () {
            return e.apply(t || this, i.concat(g.call(arguments)));
          }).guid = e.guid =
            e.guid || n.guid++),
          a
        );
    }),
    (n.holdReady = function (e) {
      e ? n.readyWait++ : n.ready(!0);
    }),
    (n.isArray = Array.isArray),
    (n.parseJSON = JSON.parse),
    (n.nodeName = d),
    (n.isFunction = o),
    (n.isWindow = x),
    (n.camelCase = u),
    (n.type = _),
    (n.now = Date.now),
    (n.isNumeric = function (e) {
      var t = n.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return n;
      }),
    (we = e.jQuery),
    (_e = e.$),
    ((n.noConflict = function (t) {
      return e.$ === n && (e.$ = _e), t && e.jQuery === n && (e.jQuery = we), n;
    }),
    t || (e.jQuery = e.$ = n),
    n)
  );
}),
  !(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports, require("jquery"), require("popper.js"))
      : "function" == typeof define && define.amd
      ? define(["exports", "jquery", "popper.js"], t)
      : t(((e = e || self).bootstrap = {}), e.jQuery, e.Popper);
  })(this, function (e, t, n) {
    "use strict";
    function $e(e, t) {
      for (var n, s = 0; s < t.length; s++)
        (n = t[s]),
          (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
    }
    function h(e, t, n) {
      return t && $e(e.prototype, t), n && $e(e, n), e;
    }
    function ct(e, t) {
      var n,
        s = Object.keys(e);
      return (
        Object.getOwnPropertySymbols &&
          ((n = Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          s.push.apply(s, n)),
        s
      );
    }
    function i(e) {
      for (var t, n = 1; n < arguments.length; n++)
        (t = null != arguments[n] ? arguments[n] : {}),
          n % 2
            ? ct(Object(t), !0).forEach(function (n) {
                var s, o, i;
                (s = e),
                  (i = t[(o = n)]),
                  o in s
                    ? Object.defineProperty(s, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (s[o] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ct(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
      return e;
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t),
      (n = n && n.hasOwnProperty("default") ? n.default : n),
      (H = "transitionend");
    function rs(e) {
      var o = this,
        n = !1;
      return (
        t(this).one(s.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || s.triggerTransitionEnd(o);
        }, e),
        this
      );
    }
    (s = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (e) {
        for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
        return e;
      },
      getSelectorFromElement: function (e) {
        var n,
          t = e.getAttribute("data-target");
        (!t || "#" === t) &&
          ((n = e.getAttribute("href")), (t = n && "#" !== n ? n.trim() : ""));
        try {
          return document.querySelector(t) ? t : null;
        } catch {
          return null;
        }
      },
      getTransitionDurationFromElement: function (e) {
        if (!e) return 0;
        var n = t(e).css("transition-duration"),
          s = t(e).css("transition-delay"),
          o = parseFloat(n),
          i = parseFloat(s);
        return o || i
          ? ((n = n.split(",")[0]),
            (s = s.split(",")[0]),
            1e3 * (parseFloat(n) + parseFloat(s)))
          : 0;
      },
      reflow: function (e) {
        return e.offsetHeight;
      },
      triggerTransitionEnd: function (e) {
        t(e).trigger(H);
      },
      supportsTransitionEnd: function () {
        return Boolean(H);
      },
      isElement: function (e) {
        return (e[0] || e).nodeType;
      },
      typeCheckConfig: function (e, t, n) {
        for (o in n)
          if (Object.prototype.hasOwnProperty.call(n, o)) {
            var o,
              c,
              a = n[o],
              i = t[o],
              r =
                i && s.isElement(i)
                  ? "element"
                  : ((c = i),
                    {}.toString
                      .call(c)
                      .match(/\s([a-z]+)/i)[1]
                      .toLowerCase());
            if (!new RegExp(a).test(r))
              throw new Error(
                e.toUpperCase() +
                  ': Option "' +
                  o +
                  '" provided type "' +
                  r +
                  '" but expected type "' +
                  a +
                  '".'
              );
          }
      },
      findShadowRoot: function (e) {
        if (!document.documentElement.attachShadow) return null;
        if ("function" != typeof e.getRootNode)
          return e instanceof ShadowRoot
            ? e
            : e.parentNode
            ? s.findShadowRoot(e.parentNode)
            : null;
        var t = e.getRootNode();
        return t instanceof ShadowRoot ? t : null;
      },
      jQueryDetection: function () {
        if ("undefined" == typeof t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (
          (e[0] < 2 && e[1] < 9) ||
          (1 === e[0] && 9 === e[1] && e[2] < 1) ||
          4 <= e[0]
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    }),
      s.jQueryDetection(),
      (t.fn.emulateTransitionEnd = rs),
      (t.event.special[s.TRANSITION_END] = {
        bindType: H,
        delegateType: H,
        handle: function (e) {
          if (t(e.target).is(this))
            return e.handleObj.handler.apply(this, arguments);
        },
      });
    var W = "alert",
      he = "bs.alert",
      Oe = "." + he,
      os = t.fn[W],
      Ee = {
        CLOSE: "close" + Oe,
        CLOSED: "closed" + Oe,
        CLICK_DATA_API: "click" + Oe + ".data-api",
      },
      ns = "alert",
      ts = "fade",
      es = "show",
      E = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.close = function (e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
              this._triggerCloseEvent(t).isDefaultPrevented() ||
                this._removeElement(t);
          }),
          (n.dispose = function () {
            t.removeData(this._element, he), (this._element = null);
          }),
          (n._getRootElement = function (e) {
            var o = s.getSelectorFromElement(e),
              n = !1;
            return (
              o && (n = document.querySelector(o)),
              (n = n || t(e).closest("." + ns)[0])
            );
          }),
          (n._triggerCloseEvent = function (e) {
            var n = t.Event(Ee.CLOSE);
            return t(e).trigger(n), n;
          }),
          (n._removeElement = function (e) {
            var n,
              o = this;
            t(e).removeClass(es),
              t(e).hasClass(ts)
                ? ((n = s.getTransitionDurationFromElement(e)),
                  t(e)
                    .one(s.TRANSITION_END, function (t) {
                      return o._destroyElement(e, t);
                    })
                    .emulateTransitionEnd(n))
                : this._destroyElement(e);
          }),
          (n._destroyElement = function (e) {
            t(e).detach().trigger(Ee.CLOSED).remove();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var o = t(this),
                s = o.data(he);
              s || ((s = new e(this)), o.data(he, s)),
                "close" === n && s[n](this);
            });
          }),
          (e._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this);
            };
          }),
          h(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          e
        );
      })();
    t(document).on(
      Ee.CLICK_DATA_API,
      '[data-dismiss="alert"]',
      E._handleDismiss(new E())
    ),
      (t.fn[W] = E._jQueryInterface),
      (t.fn[W].Constructor = E),
      (t.fn[W].noConflict = function () {
        return (t.fn[W] = os), E._jQueryInterface;
      });
    var U = "button",
      oe = "bs.button",
      ie = "." + oe,
      se = ".data-api",
      Zn = t.fn[U],
      f = "active",
      Xn = "btn",
      Gn = "focus",
      tt = '[data-toggle^="button"]',
      Yn = '[data-toggle="buttons"]',
      qn = '[data-toggle="button"]',
      $n = '[data-toggle="buttons"] .btn',
      ke = 'input:not([type="hidden"])',
      Vn = ".active",
      qe = ".btn",
      Ae = {
        CLICK_DATA_API: "click" + ie + se,
        FOCUS_BLUR_DATA_API: "focus" + ie + se + " blur" + ie + se,
        LOAD_DATA_API: "load" + ie + se,
      },
      te = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.toggle = function () {
            var e,
              s,
              n = !0,
              o = !0,
              i = t(this._element).closest(Yn)[0];
            i &&
              ((e = this._element.querySelector(ke)),
              e &&
                ("radio" === e.type
                  ? e.checked && this._element.classList.contains(f)
                    ? (n = !1)
                    : ((s = i.querySelector(Vn)), s && t(s).removeClass(f))
                  : "checkbox" === e.type
                  ? "LABEL" === this._element.tagName &&
                    e.checked === this._element.classList.contains(f) &&
                    (n = !1)
                  : (n = !1),
                n &&
                  ((e.checked = !this._element.classList.contains(f)),
                  t(e).trigger("change")),
                e.focus(),
                (o = !1))),
              this._element.hasAttribute("disabled") ||
                this._element.classList.contains("disabled") ||
                (o &&
                  this._element.setAttribute(
                    "aria-pressed",
                    !this._element.classList.contains(f)
                  ),
                n && t(this._element).toggleClass(f));
          }),
          (n.dispose = function () {
            t.removeData(this._element, oe), (this._element = null);
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var s = t(this).data(oe);
              s || ((s = new e(this)), t(this).data(oe, s)),
                "toggle" === n && s[n]();
            });
          }),
          h(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(Ae.CLICK_DATA_API, tt, function (e) {
        var s,
          n = e.target;
        if (
          (t(n).hasClass(Xn) || (n = t(n).closest(qe)[0]),
          !n || n.hasAttribute("disabled") || n.classList.contains("disabled"))
        )
          e.preventDefault();
        else {
          if (
            ((s = n.querySelector(ke)),
            s &&
              (s.hasAttribute("disabled") || s.classList.contains("disabled")))
          )
            return void e.preventDefault();
          te._jQueryInterface.call(t(n), "toggle");
        }
      })
      .on(Ae.FOCUS_BLUR_DATA_API, tt, function (e) {
        var n = t(e.target).closest(qe)[0];
        t(n).toggleClass(Gn, /^focus(in)?$/.test(e.type));
      }),
      t(window).on(Ae.LOAD_DATA_API, function () {
        for (
          var t,
            n,
            s,
            i,
            a,
            e = [].slice.call(document.querySelectorAll($n)),
            o = 0,
            r = e.length;
          o < r;
          o++
        )
          (t = e[o]),
            (i = t.querySelector(ke)),
            i.checked || i.hasAttribute("checked")
              ? t.classList.add(f)
              : t.classList.remove(f);
        for (
          n = 0, a = (e = [].slice.call(document.querySelectorAll(qn))).length;
          n < a;
          n++
        )
          (s = e[n]),
            "true" === s.getAttribute("aria-pressed")
              ? s.classList.add(f)
              : s.classList.remove(f);
      }),
      (t.fn[U] = te._jQueryInterface),
      (t.fn[U].Constructor = te),
      (t.fn[U].noConflict = function () {
        return (t.fn[U] = Zn), te._jQueryInterface;
      });
    var s,
      H,
      T = "carousel",
      R = "bs.carousel",
      a = "." + R,
      Le = ".data-api",
      Hn = t.fn[T],
      Ne = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0,
      },
      Pn = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean",
      },
      fe = "next",
      me = "prev",
      Ln = "left",
      Dn = "right",
      r = {
        SLIDE: "slide" + a,
        SLID: "slid" + a,
        KEYDOWN: "keydown" + a,
        MOUSEENTER: "mouseenter" + a,
        MOUSELEAVE: "mouseleave" + a,
        TOUCHSTART: "touchstart" + a,
        TOUCHMOVE: "touchmove" + a,
        TOUCHEND: "touchend" + a,
        POINTERDOWN: "pointerdown" + a,
        POINTERUP: "pointerup" + a,
        DRAG_START: "dragstart" + a,
        LOAD_DATA_API: "load" + a + Le,
        CLICK_DATA_API: "click" + a + Le,
      },
      Tn = "carousel",
      O = "active",
      Fn = "slide",
      Mn = "carousel-item-right",
      Sn = "carousel-item-left",
      xn = "carousel-item-next",
      wn = "carousel-item-prev",
      _n = "pointer-event",
      lt = ".active",
      Me = ".active.carousel-item",
      jn = ".carousel-item",
      vn = ".carousel-item img",
      pn = ".carousel-item-next, .carousel-item-prev",
      mn = ".carousel-indicators",
      hn = "[data-slide], [data-slide-to]",
      un = '[data-ride="carousel"]',
      Re = { TOUCH: "touch", PEN: "pen" },
      x = (function () {
        function n(e, t) {
          (this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this.touchStartX = 0),
            (this.touchDeltaX = 0),
            (this._config = this._getConfig(t)),
            (this._element = e),
            (this._indicatorsElement = this._element.querySelector(mn)),
            (this._touchSupported =
              "ontouchstart" in document.documentElement ||
              0 < navigator.maxTouchPoints),
            (this._pointerEvent = Boolean(
              window.PointerEvent || window.MSPointerEvent
            )),
            this._addEventListeners();
        }
        var e = n.prototype;
        return (
          (e.next = function () {
            this._isSliding || this._slide(fe);
          }),
          (e.nextWhenVisible = function () {
            !document.hidden &&
              t(this._element).is(":visible") &&
              "hidden" !== t(this._element).css("visibility") &&
              this.next();
          }),
          (e.prev = function () {
            this._isSliding || this._slide(me);
          }),
          (e.pause = function (e) {
            e || (this._isPaused = !0),
              this._element.querySelector(pn) &&
                (s.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (e.cycle = function (e) {
            e || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ));
          }),
          (e.to = function (e) {
            var n,
              s,
              o = this;
            if (
              ((this._activeElement = this._element.querySelector(Me)),
              (n = this._getItemIndex(this._activeElement)),
              !(e > this._items.length - 1 || e < 0))
            )
              if (this._isSliding)
                t(this._element).one(r.SLID, function () {
                  return o.to(e);
                });
              else {
                if (n === e) return this.pause(), void this.cycle();
                (s = n < e ? fe : me), this._slide(s, this._items[e]);
              }
          }),
          (e.dispose = function () {
            t(this._element).off(a),
              t.removeData(this._element, R),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (e._getConfig = function (e) {
            return (e = i({}, Ne, {}, e)), s.typeCheckConfig(T, e, Pn), e;
          }),
          (e._handleSwipe = function () {
            var e,
              t = Math.abs(this.touchDeltaX);
            t <= 40 ||
              ((e = t / this.touchDeltaX),
              (this.touchDeltaX = 0) < e && this.prev(),
              e < 0 && this.next());
          }),
          (e._addEventListeners = function () {
            var e = this;
            this._config.keyboard &&
              t(this._element).on(r.KEYDOWN, function (t) {
                return e._keydown(t);
              }),
              "hover" === this._config.pause &&
                t(this._element)
                  .on(r.MOUSEENTER, function (t) {
                    return e.pause(t);
                  })
                  .on(r.MOUSELEAVE, function (t) {
                    return e.cycle(t);
                  }),
              this._config.touch && this._addTouchEventListeners();
          }),
          (e._addTouchEventListeners = function () {
            if (((e = this), this._touchSupported)) {
              var e,
                n = function (t) {
                  e._pointerEvent &&
                  Re[t.originalEvent.pointerType.toUpperCase()]
                    ? (e.touchStartX = t.originalEvent.clientX)
                    : e._pointerEvent ||
                      (e.touchStartX = t.originalEvent.touches[0].clientX);
                },
                s = function (t) {
                  e._pointerEvent &&
                    Re[t.originalEvent.pointerType.toUpperCase()] &&
                    (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                    e._handleSwipe(),
                    "hover" === e._config.pause &&
                      (e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t);
                      }, 500 + e._config.interval)));
                };
              t(this._element.querySelectorAll(vn)).on(
                r.DRAG_START,
                function (e) {
                  return e.preventDefault();
                }
              ),
                this._pointerEvent
                  ? (t(this._element).on(r.POINTERDOWN, function (e) {
                      return n(e);
                    }),
                    t(this._element).on(r.POINTERUP, function (e) {
                      return s(e);
                    }),
                    this._element.classList.add(_n))
                  : (t(this._element).on(r.TOUCHSTART, function (e) {
                      return n(e);
                    }),
                    t(this._element).on(r.TOUCHMOVE, function (t) {
                      return (function (t) {
                        t.originalEvent.touches &&
                        1 < t.originalEvent.touches.length
                          ? (e.touchDeltaX = 0)
                          : (e.touchDeltaX =
                              t.originalEvent.touches[0].clientX -
                              e.touchStartX);
                      })(t);
                    }),
                    t(this._element).on(r.TOUCHEND, function (e) {
                      return s(e);
                    }));
            }
          }),
          (e._keydown = function (e) {
            if (!/input|textarea/i.test(e.target.tagName))
              switch (e.which) {
                case 37:
                  e.preventDefault(), this.prev();
                  break;
                case 39:
                  e.preventDefault(), this.next();
              }
          }),
          (e._getItemIndex = function (e) {
            return (
              (this._items =
                e && e.parentNode
                  ? [].slice.call(e.parentNode.querySelectorAll(jn))
                  : []),
              this._items.indexOf(e)
            );
          }),
          (e._getItemByDirection = function (e, t) {
            var s,
              o = e === fe,
              i = e === me,
              n = this._getItemIndex(t),
              a = this._items.length - 1;
            return ((i && 0 === n) || (o && n === a)) && !this._config.wrap
              ? t
              : ((s = (n + (e === me ? -1 : 1)) % this._items.length),
                -1 == s ? this._items[this._items.length - 1] : this._items[s]);
          }),
          (e._triggerSlideEvent = function (e, n) {
            var o = this._getItemIndex(e),
              i = this._getItemIndex(this._element.querySelector(Me)),
              s = t.Event(r.SLIDE, {
                relatedTarget: e,
                direction: n,
                from: i,
                to: o,
              });
            return t(this._element).trigger(s), s;
          }),
          (e._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              var n,
                s = [].slice.call(this._indicatorsElement.querySelectorAll(lt));
              t(s).removeClass(O),
                (n = this._indicatorsElement.children[this._getItemIndex(e)]),
                n && t(n).addClass(O);
            }
          }),
          (e._slide = function (e, n) {
            var a,
              c,
              l,
              d,
              u,
              f,
              h = this,
              i = this._element.querySelector(Me),
              p = this._getItemIndex(i),
              o = n || (i && this._getItemByDirection(e, i)),
              g = this._getItemIndex(o),
              m = Boolean(this._interval);
            (l =
              e === fe ? ((a = Sn), (c = xn), Ln) : ((a = Mn), (c = wn), Dn)),
              o && t(o).hasClass(O)
                ? (this._isSliding = !1)
                : !this._triggerSlideEvent(o, l).isDefaultPrevented() &&
                  i &&
                  o &&
                  ((this._isSliding = !0),
                  m && this.pause(),
                  this._setActiveIndicatorElement(o),
                  (d = t.Event(r.SLID, {
                    relatedTarget: o,
                    direction: l,
                    from: p,
                    to: g,
                  })),
                  t(this._element).hasClass(Fn)
                    ? (t(o).addClass(c),
                      s.reflow(o),
                      t(i).addClass(a),
                      t(o).addClass(a),
                      (u = parseInt(o.getAttribute("data-interval"), 10)),
                      u
                        ? ((this._config.defaultInterval =
                            this._config.defaultInterval ||
                            this._config.interval),
                          (this._config.interval = u))
                        : (this._config.interval =
                            this._config.defaultInterval ||
                            this._config.interval),
                      (f = s.getTransitionDurationFromElement(i)),
                      t(i)
                        .one(s.TRANSITION_END, function () {
                          t(o)
                            .removeClass(a + " " + c)
                            .addClass(O),
                            t(i).removeClass(O + " " + c + " " + a),
                            (h._isSliding = !1),
                            setTimeout(function () {
                              return t(h._element).trigger(d);
                            }, 0);
                        })
                        .emulateTransitionEnd(f))
                    : (t(i).removeClass(O),
                      t(o).addClass(O),
                      (this._isSliding = !1),
                      t(this._element).trigger(d)),
                  m && this.cycle());
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var a,
                s = t(this).data(R),
                o = i({}, Ne, {}, t(this).data());
              if (
                ("object" == typeof e && (o = i({}, o, {}, e)),
                (a = "string" == typeof e ? e : o.slide),
                (s || ((s = new n(this, o)), t(this).data(R, s)),
                "number" == typeof e))
              )
                s.to(e);
              else if ("string" == typeof a) {
                if ("undefined" == typeof s[a])
                  throw new TypeError('No method named "' + a + '"');
                s[a]();
              } else o.interval && o.ride && (s.pause(), s.cycle());
            });
          }),
          (n._dataApiClickHandler = function (e) {
            if (
              ((a = s.getSelectorFromElement(this)),
              a && ((o = t(a)[0]), o && t(o).hasClass(Tn)))
            ) {
              var o,
                a,
                c = i({}, t(o).data(), {}, t(this).data()),
                r = this.getAttribute("data-slide-to");
              r && (c.interval = !1),
                n._jQueryInterface.call(t(o), c),
                r && t(o).data(R).to(r),
                e.preventDefault();
            }
          }),
          h(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ne;
              },
            },
          ]),
          n
        );
      })();
    t(document).on(r.CLICK_DATA_API, hn, x._dataApiClickHandler),
      t(window).on(r.LOAD_DATA_API, function () {
        for (
          var n,
            s = [].slice.call(document.querySelectorAll(un)),
            e = 0,
            o = s.length;
          e < o;
          e++
        )
          (n = t(s[e])), x._jQueryInterface.call(n, n.data());
      }),
      (t.fn[T] = x._jQueryInterface),
      (t.fn[T].Constructor = x),
      (t.fn[T].noConflict = function () {
        return (t.fn[T] = Hn), x._jQueryInterface;
      });
    var M = "collapse",
      v = "bs.collapse",
      $ = "." + v,
      dn = t.fn[M],
      Ce = { toggle: !0, parent: "" },
      en = { toggle: "boolean", parent: "(string|element)" },
      I = {
        SHOW: "show" + $,
        SHOWN: "shown" + $,
        HIDE: "hide" + $,
        HIDDEN: "hidden" + $,
        CLICK_DATA_API: "click" + $ + ".data-api",
      },
      y = "show",
      P = "collapse",
      be = "collapsing",
      ze = "collapsed",
      rt = "width",
      Zt = "height",
      Qt = ".show, .collapsing",
      ot = '[data-toggle="collapse"]',
      X = (function () {
        function n(e, t) {
          (this._isTransitioning = !1),
            (this._element = e),
            (this._config = this._getConfig(t)),
            (this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  e.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  e.id +
                  '"]'
              )
            ));
          for (
            var i = [].slice.call(document.querySelectorAll(ot)),
              n = 0,
              r = i.length;
            n < r;
            n++
          ) {
            var a = i[n],
              o = s.getSelectorFromElement(a),
              c = [].slice
                .call(document.querySelectorAll(o))
                .filter(function (t) {
                  return t === e;
                });
            null !== o &&
              0 < c.length &&
              ((this._selector = o), this._triggerArray.push(a));
          }
          (this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle();
        }
        var e = n.prototype;
        return (
          (e.toggle = function () {
            t(this._element).hasClass(y) ? this.hide() : this.show();
          }),
          (e.show = function () {
            if (
              ((o = this),
              !this._isTransitioning &&
                !t(this._element).hasClass(y) &&
                (this._parent &&
                  0 ===
                    (e = [].slice
                      .call(this._parent.querySelectorAll(Qt))
                      .filter(function (e) {
                        return "string" == typeof o._config.parent
                          ? e.getAttribute("data-parent") === o._config.parent
                          : e.classList.contains(P);
                      })).length &&
                  (e = null),
                !(
                  e &&
                  (a = t(e).not(this._selector).data(v)) &&
                  a._isTransitioning
                )) &&
                ((r = t.Event(I.SHOW)),
                (t(this._element).trigger(r), !r.isDefaultPrevented())))
            ) {
              e &&
                (n._jQueryInterface.call(t(e).not(this._selector), "hide"),
                a || t(e).data(v, null)),
                (i = this._getDimension()),
                t(this._element).removeClass(P).addClass(be),
                (this._element.style[i] = 0),
                this._triggerArray.length &&
                  t(this._triggerArray)
                    .removeClass(ze)
                    .attr("aria-expanded", !0),
                this.setTransitioning(!0);
              var e,
                o,
                i,
                a,
                r,
                c = "scroll" + (i[0].toUpperCase() + i.slice(1)),
                l = s.getTransitionDurationFromElement(this._element);
              t(this._element)
                .one(s.TRANSITION_END, function () {
                  t(o._element).removeClass(be).addClass(P).addClass(y),
                    (o._element.style[i] = ""),
                    o.setTransitioning(!1),
                    t(o._element).trigger(I.SHOWN);
                })
                .emulateTransitionEnd(l),
                (this._element.style[i] = this._element[c] + "px");
            }
          }),
          (e.hide = function () {
            if (
              ((o = this),
              !this._isTransitioning &&
                t(this._element).hasClass(y) &&
                ((i = t.Event(I.HIDE)),
                (t(this._element).trigger(i), !i.isDefaultPrevented())))
            ) {
              if (
                ((e = this._getDimension()),
                (this._element.style[e] =
                  this._element.getBoundingClientRect()[e] + "px"),
                s.reflow(this._element),
                t(this._element).addClass(be).removeClass(P).removeClass(y),
                (a = this._triggerArray.length),
                0 < a)
              )
                for (n = 0; n < a; n++) {
                  var e,
                    n,
                    o,
                    i,
                    a,
                    l,
                    r = this._triggerArray[n],
                    c = s.getSelectorFromElement(r);
                  null !== c &&
                    (t([].slice.call(document.querySelectorAll(c))).hasClass(
                      y
                    ) ||
                      t(r).addClass(ze).attr("aria-expanded", !1));
                }
              this.setTransitioning(!0),
                (this._element.style[e] = ""),
                (l = s.getTransitionDurationFromElement(this._element)),
                t(this._element)
                  .one(s.TRANSITION_END, function () {
                    o.setTransitioning(!1),
                      t(o._element)
                        .removeClass(be)
                        .addClass(P)
                        .trigger(I.HIDDEN);
                  })
                  .emulateTransitionEnd(l);
            }
          }),
          (e.setTransitioning = function (e) {
            this._isTransitioning = e;
          }),
          (e.dispose = function () {
            t.removeData(this._element, v),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (e._getConfig = function (e) {
            return (
              ((e = i({}, Ce, {}, e)).toggle = Boolean(e.toggle)),
              s.typeCheckConfig(M, e, en),
              e
            );
          }),
          (e._getDimension = function () {
            return t(this._element).hasClass(rt) ? rt : Zt;
          }),
          (e._getParent = function () {
            (o = this),
              s.isElement(this._config.parent)
                ? ((e = this._config.parent),
                  "undefined" != typeof this._config.parent.jquery &&
                    (e = this._config.parent[0]))
                : (e = document.querySelector(this._config.parent));
            var e,
              o,
              i =
                '[data-toggle="collapse"][data-parent="' +
                this._config.parent +
                '"]',
              a = [].slice.call(e.querySelectorAll(i));
            return (
              t(a).each(function (e, t) {
                o._addAriaAndCollapsedClass(n._getTargetFromElement(t), [t]);
              }),
              e
            );
          }),
          (e._addAriaAndCollapsedClass = function (e, n) {
            var s = t(e).hasClass(y);
            n.length && t(n).toggleClass(ze, !s).attr("aria-expanded", s);
          }),
          (n._getTargetFromElement = function (e) {
            var t = s.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null;
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var o = t(this),
                s = o.data(v),
                a = i(
                  {},
                  Ce,
                  {},
                  o.data(),
                  {},
                  "object" == typeof e && e ? e : {}
                );
              if (
                (!s && a.toggle && /show|hide/.test(e) && (a.toggle = !1),
                s || ((s = new n(this, a)), o.data(v, s)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof s[e])
                  throw new TypeError('No method named "' + e + '"');
                s[e]();
              }
            });
          }),
          h(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ce;
              },
            },
          ]),
          n
        );
      })();
    t(document).on(I.CLICK_DATA_API, ot, function (e) {
      "A" === e.currentTarget.tagName && e.preventDefault();
      var n = t(this),
        o = s.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(o));
      t(i).each(function () {
        var e = t(this),
          s = e.data(v) ? "toggle" : n.data();
        X._jQueryInterface.call(e, s);
      });
    }),
      (t.fn[M] = X._jQueryInterface),
      (t.fn[M].Constructor = X),
      (t.fn[M].noConflict = function () {
        return (t.fn[M] = dn), X._jQueryInterface;
      });
    var C = "dropdown",
      ne = "bs.dropdown",
      p = "." + ne,
      Fe = ".data-api",
      Xt = t.fn[C],
      Gt = new RegExp("38|40|27"),
      l = {
        HIDE: "hide" + p,
        HIDDEN: "hidden" + p,
        SHOW: "show" + p,
        SHOWN: "shown" + p,
        CLICK: "click" + p,
        CLICK_DATA_API: "click" + p + Fe,
        KEYDOWN_DATA_API: "keydown" + p + Fe,
        KEYUP_DATA_API: "keyup" + p + Fe,
      },
      ae = "disabled",
      m = "show",
      Kt = "dropup",
      Ut = "dropright",
      Vt = "dropleft",
      Ie = "dropdown-menu-right",
      Bt = "position-static",
      je = '[data-toggle="dropdown"]',
      Ht = ".dropdown form",
      Se = ".dropdown-menu",
      Pt = ".navbar-nav",
      Tt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      Mt = "top-start",
      St = "top-end",
      At = "bottom-start",
      kt = "bottom-end",
      wt = "right-start",
      _t = "left-start",
      yt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
      },
      pt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)",
      },
      g = (function () {
        function e(e, t) {
          (this._element = e),
            (this._popper = null),
            (this._config = this._getConfig(t)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var o = e.prototype;
        return (
          (o.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(ae)) {
              var n = t(this._menu).hasClass(m);
              e._clearMenus(), n || this.show(!0);
            }
          }),
          (o.show = function (o) {
            if (
              (void 0 === o && (o = !1),
              !(
                this._element.disabled ||
                t(this._element).hasClass(ae) ||
                t(this._menu).hasClass(m)
              ))
            ) {
              var a,
                r = { relatedTarget: this._element },
                c = t.Event(l.SHOW, r),
                i = e._getParentFromElement(this._element);
              if ((t(i).trigger(c), !c.isDefaultPrevented())) {
                if (!this._inNavbar && o) {
                  if ("undefined" == typeof n)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    );
                  (a = this._element),
                    "parent" === this._config.reference
                      ? (a = i)
                      : s.isElement(this._config.reference) &&
                        ((a = this._config.reference),
                        "undefined" != typeof this._config.reference.jquery &&
                          (a = this._config.reference[0])),
                    "scrollParent" !== this._config.boundary &&
                      t(i).addClass(Bt),
                    (this._popper = new n(
                      a,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                "ontouchstart" in document.documentElement &&
                  0 === t(i).closest(Pt).length &&
                  t(document.body).children().on("mouseover", null, t.noop),
                  this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  t(this._menu).toggleClass(m),
                  t(i).toggleClass(m).trigger(t.Event(l.SHOWN, r));
              }
            }
          }),
          (o.hide = function () {
            if (
              !this._element.disabled &&
              !t(this._element).hasClass(ae) &&
              t(this._menu).hasClass(m)
            ) {
              var n = { relatedTarget: this._element },
                s = t.Event(l.HIDE, n),
                o = e._getParentFromElement(this._element);
              t(o).trigger(s),
                s.isDefaultPrevented() ||
                  (this._popper && this._popper.destroy(),
                  t(this._menu).toggleClass(m),
                  t(o).toggleClass(m).trigger(t.Event(l.HIDDEN, n)));
            }
          }),
          (o.dispose = function () {
            t.removeData(this._element, ne),
              t(this._element).off(p),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (o.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (o._addEventListeners = function () {
            var e = this;
            t(this._element).on(l.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle();
            });
          }),
          (o._getConfig = function (e) {
            return (
              (e = i(
                {},
                this.constructor.Default,
                {},
                t(this._element).data(),
                {},
                e
              )),
              s.typeCheckConfig(C, e, this.constructor.DefaultType),
              e
            );
          }),
          (o._getMenuElement = function () {
            if (!this._menu) {
              var t = e._getParentFromElement(this._element);
              t && (this._menu = t.querySelector(Se));
            }
            return this._menu;
          }),
          (o._getPlacement = function () {
            var n = t(this._element.parentNode),
              e = At;
            return (
              n.hasClass(Kt)
                ? ((e = Mt), t(this._menu).hasClass(Ie) && (e = St))
                : n.hasClass(Ut)
                ? (e = wt)
                : n.hasClass(Vt)
                ? (e = _t)
                : t(this._menu).hasClass(Ie) && (e = kt),
              e
            );
          }),
          (o._detectNavbar = function () {
            return 0 < t(this._element).closest(".navbar").length;
          }),
          (o._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this._config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = i(
                        {},
                        e.offsets,
                        {},
                        t._config.offset(e.offsets, t._element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this._config.offset),
              e
            );
          }),
          (o._getPopperConfig = function () {
            var e = {
              placement: this._getPlacement(),
              modifiers: {
                offset: this._getOffset(),
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (e.modifiers.applyStyle = { enabled: !1 }),
              i({}, e, {}, this._config.popperConfig)
            );
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var s = t(this).data(ne);
              if (
                (s ||
                  ((s = new e(this, "object" == typeof n ? n : null)),
                  t(this).data(ne, s)),
                "string" == typeof n)
              ) {
                if ("undefined" == typeof s[n])
                  throw new TypeError('No method named "' + n + '"');
                s[n]();
              }
            });
          }),
          (e._clearMenus = function (n) {
            if (!n || (3 !== n.which && ("keyup" !== n.type || 9 === n.which)))
              for (
                var c,
                  d,
                  o = [].slice.call(document.querySelectorAll(je)),
                  s = 0,
                  u = o.length;
                s < u;
                s++
              ) {
                var i = e._getParentFromElement(o[s]),
                  a = t(o[s]).data(ne),
                  r = { relatedTarget: o[s] };
                n && "click" === n.type && (r.clickEvent = n),
                  a &&
                    ((d = a._menu),
                    t(i).hasClass(m) &&
                      !(
                        n &&
                        (("click" === n.type &&
                          /input|textarea/i.test(n.target.tagName)) ||
                          ("keyup" === n.type && 9 === n.which)) &&
                        t.contains(i, n.target)
                      ) &&
                      ((c = t.Event(l.HIDE, r)),
                      t(i).trigger(c),
                      c.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          t(document.body)
                            .children()
                            .off("mouseover", null, t.noop),
                        o[s].setAttribute("aria-expanded", "false"),
                        a._popper && a._popper.destroy(),
                        t(d).removeClass(m),
                        t(i).removeClass(m).trigger(t.Event(l.HIDDEN, r)))));
              }
          }),
          (e._getParentFromElement = function (e) {
            var t,
              n = s.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode;
          }),
          (e._dataApiKeydownHandler = function (n) {
            if (
              (/input|textarea/i.test(n.target.tagName)
                ? !(
                    32 === n.which ||
                    (27 !== n.which &&
                      ((40 !== n.which && 38 !== n.which) ||
                        t(n.target).closest(Se).length))
                  )
                : Gt.test(n.which)) &&
              (n.preventDefault(),
              n.stopPropagation(),
              !this.disabled && !t(this).hasClass(ae))
            ) {
              var s,
                o,
                r,
                i = e._getParentFromElement(this),
                a = t(i).hasClass(m);
              (a || 27 !== n.which) &&
                (a && (!a || (27 !== n.which && 32 !== n.which))
                  ? ((o = [].slice
                      .call(i.querySelectorAll(Tt))
                      .filter(function (e) {
                        return t(e).is(":visible");
                      })),
                    0 !== o.length &&
                      ((s = o.indexOf(n.target)),
                      38 === n.which && 0 < s && s--,
                      40 === n.which && s < o.length - 1 && s++,
                      s < 0 && (s = 0),
                      o[s].focus()))
                  : (27 === n.which &&
                      ((r = i.querySelector(je)), t(r).trigger("focus")),
                    t(this).trigger("click")));
            }
          }),
          h(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return yt;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return pt;
              },
            },
          ]),
          e
        );
      })();
    t(document)
      .on(l.KEYDOWN_DATA_API, je, g._dataApiKeydownHandler)
      .on(l.KEYDOWN_DATA_API, Se, g._dataApiKeydownHandler)
      .on(l.CLICK_DATA_API + " " + l.KEYUP_DATA_API, g._clearMenus)
      .on(l.CLICK_DATA_API, je, function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          g._jQueryInterface.call(t(this), "toggle");
      })
      .on(l.CLICK_DATA_API, Ht, function (e) {
        e.stopPropagation();
      }),
      (t.fn[C] = g._jQueryInterface),
      (t.fn[C].Constructor = g),
      (t.fn[C].noConflict = function () {
        return (t.fn[C] = Xt), g._jQueryInterface;
      });
    var z = "modal",
      Z = "bs.modal",
      c = "." + Z,
      ft = t.fn[z],
      xe = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      mt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      },
      o = {
        HIDE: "hide" + c,
        HIDE_PREVENTED: "hidePrevented" + c,
        HIDDEN: "hidden" + c,
        SHOW: "show" + c,
        SHOWN: "shown" + c,
        FOCUSIN: "focusin" + c,
        RESIZE: "resize" + c,
        CLICK_DISMISS: "click.dismiss" + c,
        KEYDOWN_DISMISS: "keydown.dismiss" + c,
        MOUSEUP_DISMISS: "mouseup.dismiss" + c,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + c,
        CLICK_DATA_API: "click" + c + ".data-api",
      },
      ht = "modal-dialog-scrollable",
      dt = "modal-scrollbar-measure",
      ut = "modal-backdrop",
      We = "modal-open",
      k = "fade",
      ue = "show",
      et = "modal-static",
      gt = ".modal-dialog",
      vt = ".modal-body",
      bt = '[data-toggle="modal"]',
      jt = '[data-dismiss="modal"]',
      Je = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Ze = ".sticky-top",
      q = (function () {
        function n(e, t) {
          (this._config = this._getConfig(t)),
            (this._element = e),
            (this._dialog = e.querySelector(gt)),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._isTransitioning = !1),
            (this._scrollbarWidth = 0);
        }
        var e = n.prototype;
        return (
          (e.toggle = function (e) {
            return this._isShown ? this.hide() : this.show(e);
          }),
          (e.show = function (e) {
            var s,
              n = this;
            !this._isShown &&
              !this._isTransitioning &&
              (t(this._element).hasClass(k) && (this._isTransitioning = !0),
              (s = t.Event(o.SHOW, { relatedTarget: e })),
              t(this._element).trigger(s),
              this._isShown ||
                s.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                t(this._element).on(o.CLICK_DISMISS, jt, function (e) {
                  return n.hide(e);
                }),
                t(this._dialog).on(o.MOUSEDOWN_DISMISS, function () {
                  t(n._element).one(o.MOUSEUP_DISMISS, function (e) {
                    t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return n._showElement(e);
                })));
          }),
          (e.hide = function (e) {
            var n,
              i,
              a,
              r = this;
            e && e.preventDefault(),
              this._isShown &&
                !this._isTransitioning &&
                ((n = t.Event(o.HIDE)),
                (t(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) &&
                  ((this._isShown = !1),
                  (i = t(this._element).hasClass(k)),
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  t(document).off(o.FOCUSIN),
                  t(this._element).removeClass(ue),
                  t(this._element).off(o.CLICK_DISMISS),
                  t(this._dialog).off(o.MOUSEDOWN_DISMISS),
                  i)
                    ? ((a = s.getTransitionDurationFromElement(this._element)),
                      t(this._element)
                        .one(s.TRANSITION_END, function (e) {
                          return r._hideModal(e);
                        })
                        .emulateTransitionEnd(a))
                    : this._hideModal()));
          }),
          (e.dispose = function () {
            [window, this._element, this._dialog].forEach(function (e) {
              return t(e).off(c);
            }),
              t(document).off(o.FOCUSIN),
              t.removeData(this._element, Z),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (e) {
            return (e = i({}, xe, {}, e)), s.typeCheckConfig(z, e, mt), e;
          }),
          (e._triggerBackdropTransition = function () {
            var e,
              n,
              i = this;
            if ("static" === this._config.backdrop) {
              if (
                ((e = t.Event(o.HIDE_PREVENTED)),
                (t(this._element).trigger(e), e.defaultPrevented))
              )
                return;
              this._element.classList.add(et),
                (n = s.getTransitionDurationFromElement(this._element)),
                t(this._element)
                  .one(s.TRANSITION_END, function () {
                    i._element.classList.remove(et);
                  })
                  .emulateTransitionEnd(n),
                this._element.focus();
            } else this.hide();
          }),
          (e._showElement = function (e) {
            var c,
              l,
              n = this,
              i = t(this._element).hasClass(k),
              a = this._dialog ? this._dialog.querySelector(vt) : null;
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              t(this._dialog).hasClass(ht) && a
                ? (a.scrollTop = 0)
                : (this._element.scrollTop = 0),
              i && s.reflow(this._element),
              t(this._element).addClass(ue),
              this._config.focus && this._enforceFocus();
            function r() {
              n._config.focus && n._element.focus(),
                (n._isTransitioning = !1),
                t(n._element).trigger(c);
            }
            (c = t.Event(o.SHOWN, { relatedTarget: e })),
              i
                ? ((l = s.getTransitionDurationFromElement(this._dialog)),
                  t(this._dialog)
                    .one(s.TRANSITION_END, r)
                    .emulateTransitionEnd(l))
                : r();
          }),
          (e._enforceFocus = function () {
            var e = this;
            t(document)
              .off(o.FOCUSIN)
              .on(o.FOCUSIN, function (n) {
                document !== n.target &&
                  e._element !== n.target &&
                  0 === t(e._element).has(n.target).length &&
                  e._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard
              ? t(this._element).on(o.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && e._triggerBackdropTransition();
                })
              : this._isShown || t(this._element).off(o.KEYDOWN_DISMISS);
          }),
          (e._setResizeEvent = function () {
            var e = this;
            this._isShown
              ? t(window).on(o.RESIZE, function (t) {
                  return e.handleUpdate(t);
                })
              : t(window).off(o.RESIZE);
          }),
          (e._hideModal = function () {
            var e = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                t(document.body).removeClass(We),
                  e._resetAdjustments(),
                  e._resetScrollbar(),
                  t(e._element).trigger(o.HIDDEN);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              (t(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (e) {
            var a,
              r,
              c,
              n = this,
              i = t(this._element).hasClass(k) ? k : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = ut),
                i && this._backdrop.classList.add(i),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(o.CLICK_DISMISS, function (e) {
                  n._ignoreBackdropClick
                    ? (n._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      n._triggerBackdropTransition();
                }),
                i && s.reflow(this._backdrop),
                t(this._backdrop).addClass(ue),
                !e)
              )
                return;
              if (!i) return void e();
              (r = s.getTransitionDurationFromElement(this._backdrop)),
                t(this._backdrop)
                  .one(s.TRANSITION_END, e)
                  .emulateTransitionEnd(r);
            } else
              !this._isShown && this._backdrop
                ? (t(this._backdrop).removeClass(ue),
                  (a = function () {
                    n._removeBackdrop(), e && e();
                  }),
                  t(this._element).hasClass(k)
                    ? ((c = s.getTransitionDurationFromElement(this._backdrop)),
                      t(this._backdrop)
                        .one(s.TRANSITION_END, a)
                        .emulateTransitionEnd(c))
                    : a())
                : e && e();
          }),
          (e._adjustDialog = function () {
            var e =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              e &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !e &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (e._checkScrollbar = function () {
            var e = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = e.left + e.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            if (((e = this), this._isBodyOverflowing)) {
              var e,
                n,
                s,
                o = [].slice.call(document.querySelectorAll(Je)),
                i = [].slice.call(document.querySelectorAll(Ze));
              t(o).each(function (n, s) {
                var o = s.style.paddingRight,
                  i = t(s).css("padding-right");
                t(s)
                  .data("padding-right", o)
                  .css(
                    "padding-right",
                    parseFloat(i) + e._scrollbarWidth + "px"
                  );
              }),
                t(i).each(function (n, s) {
                  var o = s.style.marginRight,
                    i = t(s).css("margin-right");
                  t(s)
                    .data("margin-right", o)
                    .css(
                      "margin-right",
                      parseFloat(i) - e._scrollbarWidth + "px"
                    );
                }),
                (n = document.body.style.paddingRight),
                (s = t(document.body).css("padding-right")),
                t(document.body)
                  .data("padding-right", n)
                  .css(
                    "padding-right",
                    parseFloat(s) + this._scrollbarWidth + "px"
                  );
            }
            t(document.body).addClass(We);
          }),
          (e._resetScrollbar = function () {
            var e,
              n,
              s = [].slice.call(document.querySelectorAll(Je));
            t(s).each(function (e, n) {
              var s = t(n).data("padding-right");
              t(n).removeData("padding-right"),
                (n.style.paddingRight = s || "");
            }),
              (e = [].slice.call(document.querySelectorAll("" + Ze))),
              t(e).each(function (e, n) {
                var s = t(n).data("margin-right");
                "undefined" != typeof s &&
                  t(n).css("margin-right", s).removeData("margin-right");
              }),
              (n = t(document.body).data("padding-right")),
              t(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (e._getScrollbarWidth = function () {
            var t,
              e = document.createElement("div");
            return (
              (e.className = dt),
              document.body.appendChild(e),
              (t = e.getBoundingClientRect().width - e.clientWidth),
              document.body.removeChild(e),
              t
            );
          }),
          (n._jQueryInterface = function (e, s) {
            return this.each(function () {
              var o = t(this).data(Z),
                a = i(
                  {},
                  xe,
                  {},
                  t(this).data(),
                  {},
                  "object" == typeof e && e ? e : {}
                );
              if (
                (o || ((o = new n(this, a)), t(this).data(Z, o)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof o[e])
                  throw new TypeError('No method named "' + e + '"');
                o[e](s);
              } else a.show && o.show(s);
            });
          }),
          h(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return xe;
              },
            },
          ]),
          n
        );
      })();
    t(document).on(o.CLICK_DATA_API, bt, function (e) {
      var n,
        c,
        l,
        a = this,
        r = s.getSelectorFromElement(this);
      r && (n = document.querySelector(r)),
        (c = t(n).data(Z) ? "toggle" : i({}, t(n).data(), {}, t(this).data())),
        ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault(),
        (l = t(n).one(o.SHOW, function (e) {
          e.isDefaultPrevented() ||
            l.one(o.HIDDEN, function () {
              t(a).is(":visible") && a.focus();
            });
        })),
        q._jQueryInterface.call(t(n), c, this);
    }),
      (t.fn[z] = q._jQueryInterface),
      (t.fn[z].Constructor = q),
      (t.fn[z].noConflict = function () {
        return (t.fn[z] = ft), q._jQueryInterface;
      });
    var Ot = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      xt = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Ct = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      Et =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Xe(e, t, n) {
      if (0 === e.length) return e;
      if (n && "function" == typeof n) return n(e);
      for (
        var o = new window.DOMParser().parseFromString(e, "text/html"),
          a = Object.keys(t),
          i = [].slice.call(o.body.querySelectorAll("*")),
          r = function (e) {
            var s,
              o,
              n = i[e],
              r = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
              return n.parentNode.removeChild(n), "continue";
            (s = [].slice.call(n.attributes)),
              (o = [].concat(t["*"] || [], t[r] || [])),
              s.forEach(function (e) {
                !(function (e, t) {
                  if (((n = e.nodeName.toLowerCase()), -1 !== t.indexOf(n)))
                    return (
                      -1 === Ot.indexOf(n) ||
                      Boolean(e.nodeValue.match(Ct) || e.nodeValue.match(Et))
                    );
                  for (
                    var n,
                      o = t.filter(function (e) {
                        return e instanceof RegExp;
                      }),
                      s = 0,
                      i = o.length;
                    s < i;
                    s++
                  )
                    if (n.match(o[s])) return !0;
                  return !1;
                })(e, o) && n.removeAttribute(e.nodeName);
              });
          },
          s = 0,
          c = i.length;
        s < c;
        s++
      )
        r(s);
      return o.body.innerHTML;
    }
    var _ = "tooltip",
      ye = "bs.tooltip",
      d = "." + ye,
      Ft = t.fn[_],
      Ke = "bs-tooltip",
      zt = new RegExp("(^|\\s)" + Ke + "\\S+", "g"),
      Dt = ["sanitize", "whiteList", "sanitizeFn"],
      Nt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)",
      },
      Lt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left",
      },
      Rt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: xt,
        popperConfig: null,
      },
      L = "show",
      Te = "out",
      It = {
        HIDE: "hide" + d,
        HIDDEN: "hidden" + d,
        SHOW: "show" + d,
        SHOWN: "shown" + d,
        INSERTED: "inserted" + d,
        CLICK: "click" + d,
        FOCUSIN: "focusin" + d,
        FOCUSOUT: "focusout" + d,
        MOUSEENTER: "mouseenter" + d,
        MOUSELEAVE: "mouseleave" + d,
      },
      D = "fade",
      B = "show",
      $t = ".tooltip-inner",
      Wt = ".arrow",
      V = "hover",
      we = "focus",
      qt = "click",
      Yt = "manual",
      w = (function () {
        function o(e, t) {
          if ("undefined" == typeof n)
            throw new TypeError(
              "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = e),
            (this.config = this._getConfig(t)),
            (this.tip = null),
            this._setListeners();
        }
        var e = o.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (e) {
            if (this._isEnabled)
              if (e) {
                var s = this.constructor.DATA_KEY,
                  n = t(e.currentTarget).data(s);
                n ||
                  ((n = new this.constructor(
                    e.currentTarget,
                    this._getDelegateConfig()
                  )),
                  t(e.currentTarget).data(s, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (t(this.getTipElement()).hasClass(B))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              t.removeData(this.element, this.constructor.DATA_KEY),
              t(this.element).off(this.constructor.EVENT_KEY),
              t(this.element)
                .closest(".modal")
                .off("hide.bs.modal", this._hideModalHandler),
              this.tip && t(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            if (((e = this), "none" === t(this.element).css("display")))
              throw new Error("Please use show on visible elements");
            if (
              ((i = t.Event(this.constructor.Event.SHOW)),
              this.isWithContent() && this._isEnabled)
            ) {
              t(this.element).trigger(i);
              var e,
                o,
                i,
                a,
                r,
                c,
                d,
                u,
                h,
                l = s.findShadowRoot(this.element),
                m = t.contains(
                  null !== l ? l : this.element.ownerDocument.documentElement,
                  this.element
                );
              if (i.isDefaultPrevented() || !m) return;
              (o = this.getTipElement()),
                (a = s.getUID(this.constructor.NAME)),
                o.setAttribute("id", a),
                this.element.setAttribute("aria-describedby", a),
                this.setContent(),
                this.config.animation && t(o).addClass(D),
                (d =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, o, this.element)
                    : this.config.placement),
                (r = this._getAttachment(d)),
                this.addAttachmentClass(r),
                (u = this._getContainer()),
                t(o).data(this.constructor.DATA_KEY, this),
                t.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || t(o).appendTo(u),
                t(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new n(
                  this.element,
                  o,
                  this._getPopperConfig(r)
                )),
                t(o).addClass(B),
                "ontouchstart" in document.documentElement &&
                  t(document.body).children().on("mouseover", null, t.noop),
                (c = function () {
                  e.config.animation && e._fixTransition();
                  var n = e._hoverState;
                  (e._hoverState = null),
                    t(e.element).trigger(e.constructor.Event.SHOWN),
                    n === Te && e._leave(null, e);
                }),
                t(this.tip).hasClass(D)
                  ? ((h = s.getTransitionDurationFromElement(this.tip)),
                    t(this.tip)
                      .one(s.TRANSITION_END, c)
                      .emulateTransitionEnd(h))
                  : c();
            }
          }),
          (e.hide = function (e) {
            function i() {
              n._hoverState !== L &&
                o.parentNode &&
                o.parentNode.removeChild(o),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                t(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                e && e();
            }
            var r,
              n = this,
              o = this.getTipElement(),
              a = t.Event(this.constructor.Event.HIDE);
            t(this.element).trigger(a),
              !a.isDefaultPrevented() &&
                ((t(o).removeClass(B),
                "ontouchstart" in document.documentElement &&
                  t(document.body).children().off("mouseover", null, t.noop),
                (this._activeTrigger[qt] = !1),
                (this._activeTrigger[we] = !1),
                (this._activeTrigger[V] = !1),
                t(this.tip).hasClass(D))
                  ? ((r = s.getTransitionDurationFromElement(o)),
                    t(o).one(s.TRANSITION_END, i).emulateTransitionEnd(r))
                  : i(),
                (this._hoverState = ""));
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass(Ke + "-" + e);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (e.setContent = function () {
            var e = this.getTipElement();
            this.setElementContent(t(e.querySelectorAll($t)), this.getTitle()),
              t(e).removeClass(D + " " + B);
          }),
          (e.setElementContent = function (e, n) {
            "object" != typeof n || (!n.nodeType && !n.jquery)
              ? this.config.html
                ? (this.config.sanitize &&
                    (n = Xe(n, this.config.whiteList, this.config.sanitizeFn)),
                  e.html(n))
                : e.text(n)
              : this.config.html
              ? t(n).parent().is(e) || e.empty().append(n)
              : e.text(t(n).text());
          }),
          (e.getTitle = function () {
            var e = this.element.getAttribute("data-original-title");
            return (e =
              e ||
              ("function" == typeof this.config.title
                ? this.config.title.call(this.element)
                : this.config.title));
          }),
          (e._getPopperConfig = function (e) {
            var t = this;
            return i(
              {},
              {
                placement: e,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: Wt },
                  preventOverflow: { boundariesElement: this.config.boundary },
                },
                onCreate: function (e) {
                  e.originalPlacement !== e.placement &&
                    t._handlePopperPlacementChange(e);
                },
                onUpdate: function (e) {
                  return t._handlePopperPlacementChange(e);
                },
              },
              {},
              this.config.popperConfig
            );
          }),
          (e._getOffset = function () {
            var t = this,
              e = {};
            return (
              "function" == typeof this.config.offset
                ? (e.fn = function (e) {
                    return (
                      (e.offsets = i(
                        {},
                        e.offsets,
                        {},
                        t.config.offset(e.offsets, t.element) || {}
                      )),
                      e
                    );
                  })
                : (e.offset = this.config.offset),
              e
            );
          }),
          (e._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : s.isElement(this.config.container)
              ? t(this.config.container)
              : t(document).find(this.config.container);
          }),
          (e._getAttachment = function (e) {
            return Lt[e.toUpperCase()];
          }),
          (e._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (n) {
              if ("click" === n)
                t(e.element).on(
                  e.constructor.Event.CLICK,
                  e.config.selector,
                  function (t) {
                    return e.toggle(t);
                  }
                );
              else if (n !== Yt) {
                var s =
                    n === V
                      ? e.constructor.Event.MOUSEENTER
                      : e.constructor.Event.FOCUSIN,
                  o =
                    n === V
                      ? e.constructor.Event.MOUSELEAVE
                      : e.constructor.Event.FOCUSOUT;
                t(e.element)
                  .on(s, e.config.selector, function (t) {
                    return e._enter(t);
                  })
                  .on(o, e.config.selector, function (t) {
                    return e._leave(t);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                e.element && e.hide();
              }),
              t(this.element)
                .closest(".modal")
                .on("hide.bs.modal", this._hideModalHandler),
              this.config.selector
                ? (this.config = i({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var e = typeof this.element.getAttribute("data-original-title");
            (!this.element.getAttribute("title") && "string" == e) ||
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (e._enter = function (e, n) {
            var s = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(s)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(s, n)),
              e && (n._activeTrigger["focusin" === e.type ? we : V] = !0),
              t(n.getTipElement()).hasClass(B) || n._hoverState === L
                ? (n._hoverState = L)
                : (clearTimeout(n._timeout),
                  (n._hoverState = L),
                  n.config.delay && n.config.delay.show
                    ? (n._timeout = setTimeout(function () {
                        n._hoverState === L && n.show();
                      }, n.config.delay.show))
                    : n.show());
          }),
          (e._leave = function (e, n) {
            var s = this.constructor.DATA_KEY;
            (n = n || t(e.currentTarget).data(s)) ||
              ((n = new this.constructor(
                e.currentTarget,
                this._getDelegateConfig()
              )),
              t(e.currentTarget).data(s, n)),
              e && (n._activeTrigger["focusout" === e.type ? we : V] = !1),
              n._isWithActiveTrigger() ||
                (clearTimeout(n._timeout),
                (n._hoverState = Te),
                n.config.delay && n.config.delay.hide
                  ? (n._timeout = setTimeout(function () {
                      n._hoverState === Te && n.hide();
                    }, n.config.delay.hide))
                  : n.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var e in this._activeTrigger)
              if (this._activeTrigger[e]) return !0;
            return !1;
          }),
          (e._getConfig = function (e) {
            var n = t(this.element).data();
            return (
              Object.keys(n).forEach(function (e) {
                -1 !== Dt.indexOf(e) && delete n[e];
              }),
              "number" ==
                typeof (e = i(
                  {},
                  this.constructor.Default,
                  {},
                  n,
                  {},
                  "object" == typeof e && e ? e : {}
                )).delay && (e.delay = { show: e.delay, hide: e.delay }),
              "number" == typeof e.title && (e.title = e.title.toString()),
              "number" == typeof e.content &&
                (e.content = e.content.toString()),
              s.typeCheckConfig(_, e, this.constructor.DefaultType),
              e.sanitize &&
                (e.template = Xe(e.template, e.whiteList, e.sanitizeFn)),
              e
            );
          }),
          (e._getDelegateConfig = function () {
            var e,
              t = {};
            if (this.config)
              for (e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (e._cleanTipClass = function () {
            var n = t(this.getTipElement()),
              e = n.attr("class").match(zt);
            null !== e && e.length && n.removeClass(e.join(""));
          }),
          (e._handlePopperPlacementChange = function (e) {
            var t = e.instance;
            (this.tip = t.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(e.placement));
          }),
          (e._fixTransition = function () {
            var e = this.getTipElement(),
              n = this.config.animation;
            null === e.getAttribute("x-placement") &&
              (t(e).removeClass(D),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = n));
          }),
          (o._jQueryInterface = function (e) {
            return this.each(function () {
              var n = t(this).data(ye),
                s = "object" == typeof e && e;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new o(this, s)), t(this).data(ye, n)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          h(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Rt;
              },
            },
            {
              key: "NAME",
              get: function () {
                return _;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return ye;
              },
            },
            {
              key: "Event",
              get: function () {
                return It;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return d;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Nt;
              },
            },
          ]),
          o
        );
      })();
    (t.fn[_] = w._jQueryInterface),
      (t.fn[_].Constructor = w),
      (t.fn[_].noConflict = function () {
        return (t.fn[_] = Ft), w._jQueryInterface;
      });
    var F = "popover",
      ge = "bs.popover",
      u = "." + ge,
      Jt = t.fn[F],
      at = "bs-popover",
      tn = new RegExp("(^|\\s)" + at + "\\S+", "g"),
      nn = i({}, w.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      }),
      sn = i({}, w.DefaultType, { content: "(string|element|function)" }),
      on = "fade",
      an = "show",
      rn = ".popover-header",
      cn = ".popover-body",
      ln = {
        HIDE: "hide" + u,
        HIDDEN: "hidden" + u,
        SHOW: "show" + u,
        SHOWN: "shown" + u,
        INSERTED: "inserted" + u,
        CLICK: "click" + u,
        FOCUSIN: "focusin" + u,
        FOCUSOUT: "focusout" + u,
        MOUSEENTER: "mouseenter" + u,
        MOUSELEAVE: "mouseleave" + u,
      },
      pe = (function (e) {
        function n() {
          return e.apply(this, arguments) || this;
        }
        !(function (e, t) {
          (e.prototype = Object.create(t.prototype)),
            ((e.prototype.constructor = e).__proto__ = t);
        })(n, e);
        var s = n.prototype;
        return (
          (s.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (s.addAttachmentClass = function (e) {
            t(this.getTipElement()).addClass(at + "-" + e);
          }),
          (s.getTipElement = function () {
            return (
              (this.tip = this.tip || t(this.config.template)[0]), this.tip
            );
          }),
          (s.setContent = function () {
            var e,
              n = t(this.getTipElement());
            this.setElementContent(n.find(rn), this.getTitle()),
              (e = this._getContent()),
              "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(n.find(cn), e),
              n.removeClass(on + " " + an);
          }),
          (s._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (s._cleanTipClass = function () {
            var n = t(this.getTipElement()),
              e = n.attr("class").match(tn);
            null !== e && 0 < e.length && n.removeClass(e.join(""));
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var s = t(this).data(ge),
                o = "object" == typeof e ? e : null;
              if (
                (s || !/dispose|hide/.test(e)) &&
                (s || ((s = new n(this, o)), t(this).data(ge, s)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof s[e])
                  throw new TypeError('No method named "' + e + '"');
                s[e]();
              }
            });
          }),
          h(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return nn;
              },
            },
            {
              key: "NAME",
              get: function () {
                return F;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return ge;
              },
            },
            {
              key: "Event",
              get: function () {
                return ln;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return u;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return sn;
              },
            },
          ]),
          n
        );
      })(w);
    (t.fn[F] = pe._jQueryInterface),
      (t.fn[F].Constructor = pe),
      (t.fn[F].noConflict = function () {
        return (t.fn[F] = Jt), pe._jQueryInterface;
      });
    var b = "scrollspy",
      ce = "bs.scrollspy",
      re = "." + ce,
      fn = t.fn[b],
      Ue = { offset: 10, method: "auto", target: "" },
      gn = { offset: "number", method: "string", target: "(string|element)" },
      _e = {
        ACTIVATE: "activate" + re,
        SCROLL: "scroll" + re,
        LOAD_DATA_API: "load" + re + ".data-api",
      },
      bn = "dropdown-item",
      j = "active",
      yn = '[data-spy="scroll"]',
      Ve = ".nav, .list-group",
      De = ".nav-link",
      On = ".nav-item",
      He = ".list-group-item",
      Cn = ".dropdown",
      En = ".dropdown-item",
      kn = ".dropdown-toggle",
      An = "offset",
      Ge = "position",
      Q = (function () {
        function n(e, n) {
          var s = this;
          (this._element = e),
            (this._scrollElement = "BODY" === e.tagName ? window : e),
            (this._config = this._getConfig(n)),
            (this._selector =
              this._config.target +
              " " +
              De +
              "," +
              this._config.target +
              " " +
              He +
              "," +
              this._config.target +
              " " +
              En),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            t(this._scrollElement).on(_e.SCROLL, function (e) {
              return s._process(e);
            }),
            this.refresh(),
            this._process();
        }
        var e = n.prototype;
        return (
          (e.refresh = function () {
            var e = this,
              o = this._scrollElement === this._scrollElement.window ? An : Ge,
              n = "auto" === this._config.method ? o : this._config.method,
              i = n === Ge ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (e) {
                  var o,
                    r,
                    a = s.getSelectorFromElement(e);
                  return (a && (o = document.querySelector(a)), o) &&
                    ((r = o.getBoundingClientRect()), r.width || r.height)
                    ? [t(o)[n]().top + i, a]
                    : null;
                })
                .filter(function (e) {
                  return e;
                })
                .sort(function (e, t) {
                  return e[0] - t[0];
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1]);
                });
          }),
          (e.dispose = function () {
            t.removeData(this._element, ce),
              t(this._scrollElement).off(re),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (e) {
            if (
              "string" !=
              typeof (e = i({}, Ue, {}, "object" == typeof e && e ? e : {}))
                .target
            ) {
              var n = t(e.target).attr("id");
              n || ((n = s.getUID(b)), t(e.target).attr("id", n)),
                (e.target = "#" + n);
            }
            return s.typeCheckConfig(b, e, gn), e;
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var e,
              n,
              t = this._getScrollTop() + this._config.offset,
              s = this._getScrollHeight(),
              o = this._config.offset + s - this._getOffsetHeight();
            if ((this._scrollHeight !== s && this.refresh(), o <= t))
              (n = this._targets[this._targets.length - 1]),
                this._activeTarget !== n && this._activate(n);
            else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (e = this._offsets.length; e--; )
                this._activeTarget !== this._targets[e] &&
                  t >= this._offsets[e] &&
                  ("undefined" == typeof this._offsets[e + 1] ||
                    t < this._offsets[e + 1]) &&
                  this._activate(this._targets[e]);
            }
          }),
          (e._activate = function (e) {
            (this._activeTarget = e), this._clear();
            var s = this._selector.split(",").map(function (t) {
                return (
                  t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                );
              }),
              n = t([].slice.call(document.querySelectorAll(s.join(","))));
            n.hasClass(bn)
              ? (n.closest(Cn).find(kn).addClass(j), n.addClass(j))
              : (n.addClass(j),
                n
                  .parents(Ve)
                  .prev(De + ", " + He)
                  .addClass(j),
                n.parents(Ve).prev(On).children(De).addClass(j)),
              t(this._scrollElement).trigger(_e.ACTIVATE, { relatedTarget: e });
          }),
          (e._clear = function () {
            [].slice
              .call(document.querySelectorAll(this._selector))
              .filter(function (e) {
                return e.classList.contains(j);
              })
              .forEach(function (e) {
                return e.classList.remove(j);
              });
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var s = t(this).data(ce);
              if (
                (s ||
                  ((s = new n(this, "object" == typeof e && e)),
                  t(this).data(ce, s)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof s[e])
                  throw new TypeError('No method named "' + e + '"');
                s[e]();
              }
            });
          }),
          h(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "Default",
              get: function () {
                return Ue;
              },
            },
          ]),
          n
        );
      })();
    t(window).on(_e.LOAD_DATA_API, function () {
      for (
        var e, n = [].slice.call(document.querySelectorAll(yn)), s = n.length;
        s--;

      )
        (e = t(n[s])), Q._jQueryInterface.call(e, e.data());
    }),
      (t.fn[b] = Q._jQueryInterface),
      (t.fn[b].Constructor = Q),
      (t.fn[b].noConflict = function () {
        return (t.fn[b] = fn), Q._jQueryInterface;
      });
    var de = "bs.tab",
      Y = "." + de,
      zn = t.fn.tab,
      K = {
        HIDE: "hide" + Y,
        HIDDEN: "hidden" + Y,
        SHOW: "show" + Y,
        SHOWN: "shown" + Y,
        CLICK_DATA_API: "click" + Y + ".data-api",
      },
      Nn = "dropdown-menu",
      N = "active",
      Rn = "disabled",
      Pe = "fade",
      Be = "show",
      In = ".dropdown",
      Bn = ".nav, .list-group",
      Ye = ".active",
      Qe = "> li > .active",
      Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      Un = ".dropdown-toggle",
      Kn = "> .dropdown-menu .active",
      G = (function () {
        function e(e) {
          this._element = e;
        }
        var n = e.prototype;
        return (
          (n.show = function () {
            if (
              ((i = this),
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  t(this._element).hasClass(N)) ||
                t(this._element).hasClass(Rn)
              ))
            ) {
              var e,
                o,
                i,
                a,
                r,
                c,
                d,
                n = t(this._element).closest(Bn)[0],
                l = s.getSelectorFromElement(this._element);
              n &&
                ((d = "UL" === n.nodeName || "OL" === n.nodeName ? Qe : Ye),
                (e = (e = t.makeArray(t(n).find(d)))[e.length - 1])),
                (a = t.Event(K.HIDE, { relatedTarget: this._element })),
                (r = t.Event(K.SHOW, { relatedTarget: e })),
                (e && t(e).trigger(a),
                t(this._element).trigger(r),
                !r.isDefaultPrevented() && !a.isDefaultPrevented()) &&
                  (l && (o = document.querySelector(l)),
                  this._activate(this._element, n),
                  (c = function () {
                    var n = t.Event(K.HIDDEN, { relatedTarget: i._element }),
                      s = t.Event(K.SHOWN, { relatedTarget: e });
                    t(e).trigger(n), t(i._element).trigger(s);
                  }),
                  o ? this._activate(o, o.parentNode, c) : c());
            }
          }),
          (n.dispose = function () {
            t.removeData(this._element, de), (this._element = null);
          }),
          (n._activate = function (e, n, o) {
            function a() {
              return c._transitionComplete(e, i, o);
            }
            var r,
              c = this,
              i = (
                !n || ("UL" !== n.nodeName && "OL" !== n.nodeName)
                  ? t(n).children(Ye)
                  : t(n).find(Qe)
              )[0],
              l = o && i && t(i).hasClass(Pe);
            i && l
              ? ((r = s.getTransitionDurationFromElement(i)),
                t(i)
                  .removeClass(Be)
                  .one(s.TRANSITION_END, a)
                  .emulateTransitionEnd(r))
              : a();
          }),
          (n._transitionComplete = function (e, n, o) {
            if (n) {
              t(n).removeClass(N);
              var i,
                r,
                a = t(n.parentNode).find(Kn)[0];
              a && t(a).removeClass(N),
                "tab" === n.getAttribute("role") &&
                  n.setAttribute("aria-selected", !1);
            }
            (t(e).addClass(N),
            "tab" === e.getAttribute("role") &&
              e.setAttribute("aria-selected", !0),
            s.reflow(e),
            e.classList.contains(Pe) && e.classList.add(Be),
            e.parentNode && t(e.parentNode).hasClass(Nn)) &&
              ((i = t(e).closest(In)[0]),
              i &&
                ((r = [].slice.call(i.querySelectorAll(Un))), t(r).addClass(N)),
              e.setAttribute("aria-expanded", !0)),
              o && o();
          }),
          (e._jQueryInterface = function (n) {
            return this.each(function () {
              var o = t(this),
                s = o.data(de);
              if (
                (s || ((s = new e(this)), o.data(de, s)), "string" == typeof n)
              ) {
                if ("undefined" == typeof s[n])
                  throw new TypeError('No method named "' + n + '"');
                s[n]();
              }
            });
          }),
          h(e, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
          ]),
          e
        );
      })();
    t(document).on(K.CLICK_DATA_API, Wn, function (e) {
      e.preventDefault(), G._jQueryInterface.call(t(this), "show");
    }),
      (t.fn.tab = G._jQueryInterface),
      (t.fn.tab.Constructor = G),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = zn), G._jQueryInterface;
      });
    var A = "toast",
      le = "bs.toast",
      ee = "." + le,
      Qn = t.fn[A],
      S = {
        CLICK_DISMISS: "click.dismiss" + ee,
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
      },
      Jn = "fade",
      nt = "hide",
      J = "show",
      st = "showing",
      ss = { animation: "boolean", autohide: "boolean", delay: "number" },
      it = { animation: !0, autohide: !0, delay: 500 },
      is = '[data-dismiss="toast"]',
      ve = (function () {
        function n(e, t) {
          (this._element = e),
            (this._config = this._getConfig(t)),
            (this._timeout = null),
            this._setListeners();
        }
        var e = n.prototype;
        return (
          (e.show = function () {
            var n,
              i,
              e = this,
              o = t.Event(S.SHOW);
            t(this._element).trigger(o),
              !o.isDefaultPrevented() &&
                (this._config.animation && this._element.classList.add(Jn),
                (n = function () {
                  e._element.classList.remove(st),
                    e._element.classList.add(J),
                    t(e._element).trigger(S.SHOWN),
                    e._config.autohide &&
                      (e._timeout = setTimeout(function () {
                        e.hide();
                      }, e._config.delay));
                }),
                (this._element.classList.remove(nt),
                s.reflow(this._element),
                this._element.classList.add(st),
                this._config.animation)
                  ? ((i = s.getTransitionDurationFromElement(this._element)),
                    t(this._element)
                      .one(s.TRANSITION_END, n)
                      .emulateTransitionEnd(i))
                  : n());
          }),
          (e.hide = function () {
            if (this._element.classList.contains(J)) {
              var e = t.Event(S.HIDE);
              t(this._element).trigger(e),
                e.isDefaultPrevented() || this._close();
            }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              (this._timeout = null),
              this._element.classList.contains(J) &&
                this._element.classList.remove(J),
              t(this._element).off(S.CLICK_DISMISS),
              t.removeData(this._element, le),
              (this._element = null),
              (this._config = null);
          }),
          (e._getConfig = function (e) {
            return (
              (e = i(
                {},
                it,
                {},
                t(this._element).data(),
                {},
                "object" == typeof e && e ? e : {}
              )),
              s.typeCheckConfig(A, e, this.constructor.DefaultType),
              e
            );
          }),
          (e._setListeners = function () {
            var e = this;
            t(this._element).on(S.CLICK_DISMISS, is, function () {
              return e.hide();
            });
          }),
          (e._close = function () {
            function e() {
              n._element.classList.add(nt), t(n._element).trigger(S.HIDDEN);
            }
            var o,
              n = this;
            this._element.classList.remove(J),
              this._config.animation
                ? ((o = s.getTransitionDurationFromElement(this._element)),
                  t(this._element)
                    .one(s.TRANSITION_END, e)
                    .emulateTransitionEnd(o))
                : e();
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var o = t(this),
                s = o.data(le);
              if (
                (s ||
                  ((s = new n(this, "object" == typeof e && e)), o.data(le, s)),
                "string" == typeof e)
              ) {
                if ("undefined" == typeof s[e])
                  throw new TypeError('No method named "' + e + '"');
                s[e](this);
              }
            });
          }),
          h(n, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.4.1";
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ss;
              },
            },
            {
              key: "Default",
              get: function () {
                return it;
              },
            },
          ]),
          n
        );
      })();
    (t.fn[A] = ve._jQueryInterface),
      (t.fn[A].Constructor = ve),
      (t.fn[A].noConflict = function () {
        return (t.fn[A] = Qn), ve._jQueryInterface;
      }),
      (e.Alert = E),
      (e.Button = te),
      (e.Carousel = x),
      (e.Collapse = X),
      (e.Dropdown = g),
      (e.Modal = q),
      (e.Popover = pe),
      (e.Scrollspy = Q),
      (e.Tab = G),
      (e.Toast = ve),
      (e.Tooltip = w),
      (e.Util = s),
      Object.defineProperty(e, "__esModule", { value: !0 });
  });
