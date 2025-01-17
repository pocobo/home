import { b as _ } from './antd-BmrhB3rb.js';
import { r as O } from './index-Ck6h_6RS.js';
function j(p, h) {
  for (var f = 0; f < h.length; f++) {
    const r = h[f];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const a in r)
        if (a !== 'default' && !(a in p)) {
          const o = Object.getOwnPropertyDescriptor(r, a);
          o && Object.defineProperty(p, a, o.get ? o : { enumerable: !0, get: () => r[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(p, Symbol.toStringTag, { value: 'Module' }));
}
var A = { exports: {} };
(function (p, h) {
  (function (f) {
    f(O());
  })(function (f) {
    f.defineMode('elm', function () {
      function r(t, e, n) {
        return e(n), n(t, e);
      }
      var a = /[a-z]/,
        o = /[A-Z]/,
        u = /[a-zA-Z0-9_]/,
        m = /[0-9]/,
        x = /[0-9A-Fa-f]/,
        v = /[-&*+.\\/<>=?^|:]/,
        w = /[(),[\]{}]/,
        y = /[ \v\f]/;
      function i() {
        return function (t, e) {
          if (t.eatWhile(y)) return null;
          var n = t.next();
          if (w.test(n))
            return n === '{' && t.eat('-')
              ? r(t, e, g(1))
              : n === '[' && t.match('glsl|')
                ? r(t, e, W)
                : 'builtin';
          if (n === "'") return r(t, e, k);
          if (n === '"') return t.eat('"') ? (t.eat('"') ? r(t, e, E) : 'string') : r(t, e, b);
          if (o.test(n)) return t.eatWhile(u), 'variable-2';
          if (a.test(n)) {
            var l = t.pos === 1;
            return t.eatWhile(u), l ? 'def' : 'variable';
          }
          if (m.test(n)) {
            if (n === '0') {
              if (t.eat(/[xX]/)) return t.eatWhile(x), 'number';
            } else t.eatWhile(m);
            return (
              t.eat('.') && t.eatWhile(m), t.eat(/[eE]/) && (t.eat(/[-+]/), t.eatWhile(m)), 'number'
            );
          }
          return v.test(n)
            ? n === '-' && t.eat('-')
              ? (t.skipToEnd(), 'comment')
              : (t.eatWhile(v), 'keyword')
            : n === '_'
              ? 'keyword'
              : 'error';
        };
      }
      function g(t) {
        return t == 0
          ? i()
          : function (e, n) {
              for (; !e.eol(); ) {
                var l = e.next();
                if (l == '{' && e.eat('-')) ++t;
                else if (l == '-' && e.eat('}') && (--t, t === 0)) return n(i()), 'comment';
              }
              return n(g(t)), 'comment';
            };
      }
      function E(t, e) {
        for (; !t.eol(); ) {
          var n = t.next();
          if (n === '"' && t.eat('"') && t.eat('"')) return e(i()), 'string';
        }
        return 'string';
      }
      function b(t, e) {
        for (; t.skipTo('\\"'); ) t.next(), t.next();
        return t.skipTo('"') ? (t.next(), e(i()), 'string') : (t.skipToEnd(), e(i()), 'error');
      }
      function k(t, e) {
        for (; t.skipTo("\\'"); ) t.next(), t.next();
        return t.skipTo("'") ? (t.next(), e(i()), 'string') : (t.skipToEnd(), e(i()), 'error');
      }
      function W(t, e) {
        for (; !t.eol(); ) {
          var n = t.next();
          if (n === '|' && t.eat(']')) return e(i()), 'string';
        }
        return 'string';
      }
      var R = {
        case: 1,
        of: 1,
        as: 1,
        if: 1,
        then: 1,
        else: 1,
        let: 1,
        in: 1,
        type: 1,
        alias: 1,
        module: 1,
        where: 1,
        import: 1,
        exposing: 1,
        port: 1,
      };
      return {
        startState: function () {
          return { f: i() };
        },
        copyState: function (t) {
          return { f: t.f };
        },
        lineComment: '--',
        token: function (t, e) {
          var n = e.f(t, function (T) {
              e.f = T;
            }),
            l = t.current();
          return R.hasOwnProperty(l) ? 'keyword' : n;
        },
      };
    }),
      f.defineMIME('text/x-elm', 'elm');
  });
})();
var d = A.exports;
const M = _(d),
  z = j({ __proto__: null, default: M }, [d]);
export { z as e };
