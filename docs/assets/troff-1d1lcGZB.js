import { b as p } from './antd-BmrhB3rb.js';
import { r as l } from './index-Ck6h_6RS.js';
function d(i, u) {
  for (var n = 0; n < u.length; n++) {
    const f = u[n];
    if (typeof f != 'string' && !Array.isArray(f)) {
      for (const o in f)
        if (o !== 'default' && !(o in i)) {
          const e = Object.getOwnPropertyDescriptor(f, o);
          e && Object.defineProperty(i, o, e.get ? e : { enumerable: !0, get: () => f[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }));
}
var g = { exports: {} };
(function (i, u) {
  (function (n) {
    n(l());
  })(function (n) {
    n.defineMode('troff', function () {
      var f = {};
      function o(t) {
        if (t.eatSpace()) return null;
        var r = t.sol(),
          c = t.next();
        if (c === '\\')
          return t.match('fB') ||
            t.match('fR') ||
            t.match('fI') ||
            t.match('u') ||
            t.match('d') ||
            t.match('%') ||
            t.match('&')
            ? 'string'
            : t.match('m[')
              ? (t.skipTo(']'), t.next(), 'string')
              : t.match('s+') || t.match('s-')
                ? (t.eatWhile(/[\d-]/), 'string')
                : ((t.match('(') || t.match('*(')) && t.eatWhile(/[\w-]/), 'string');
        if (r && (c === '.' || c === "'") && t.eat('\\') && t.eat('"'))
          return t.skipToEnd(), 'comment';
        if (r && c === '.') {
          if (t.match('B ') || t.match('I ') || t.match('R ')) return 'attribute';
          if (t.match('TH ') || t.match('SH ') || t.match('SS ') || t.match('HP '))
            return t.skipToEnd(), 'quote';
          if ((t.match(/[A-Z]/) && t.match(/[A-Z]/)) || (t.match(/[a-z]/) && t.match(/[a-z]/)))
            return 'attribute';
        }
        t.eatWhile(/[\w-]/);
        var h = t.current();
        return f.hasOwnProperty(h) ? f[h] : null;
      }
      function e(t, r) {
        return (r.tokens[0] || o)(t, r);
      }
      return {
        startState: function () {
          return { tokens: [] };
        },
        token: function (t, r) {
          return e(t, r);
        },
      };
    }),
      n.defineMIME('text/troff', 'troff'),
      n.defineMIME('text/x-troff', 'troff'),
      n.defineMIME('application/x-troff', 'troff');
  });
})();
var a = g.exports;
const x = p(a),
  v = d({ __proto__: null, default: x }, [a]);
export { v as t };
