import { b as c } from './antd-BmrhB3rb.js';
import { r as s } from './index-Ck6h_6RS.js';
function u(i, a) {
  for (var t = 0; t < a.length; t++) {
    const n = a[t];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const e in n)
        if (e !== 'default' && !(e in i)) {
          const r = Object.getOwnPropertyDescriptor(n, e);
          r && Object.defineProperty(i, e, r.get ? r : { enumerable: !0, get: () => n[e] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }));
}
var l = { exports: {} };
(function (i, a) {
  (function (t) {
    t(s());
  })(function (t) {
    function n(e) {
      var r = e.match(/^\s*\S/);
      return e.skipToEnd(), r ? 'error' : null;
    }
    t.defineMode('asciiarmor', function () {
      return {
        token: function (e, r) {
          var o;
          if (r.state == 'top')
            return e.sol() && (o = e.match(/^-----BEGIN (.*)?-----\s*$/))
              ? ((r.state = 'headers'), (r.type = o[1]), 'tag')
              : n(e);
          if (r.state == 'headers') {
            if (e.sol() && e.match(/^\w+:/)) return (r.state = 'header'), 'atom';
            var f = n(e);
            return f && (r.state = 'body'), f;
          } else {
            if (r.state == 'header') return e.skipToEnd(), (r.state = 'headers'), 'string';
            if (r.state == 'body')
              return e.sol() && (o = e.match(/^-----END (.*)?-----\s*$/))
                ? o[1] != r.type
                  ? 'error'
                  : ((r.state = 'end'), 'tag')
                : e.eatWhile(/[A-Za-z0-9+\/=]/)
                  ? null
                  : (e.next(), 'error');
            if (r.state == 'end') return n(e);
          }
        },
        blankLine: function (e) {
          e.state == 'headers' && (e.state = 'body');
        },
        startState: function () {
          return { state: 'top', type: null };
        },
      };
    }),
      t.defineMIME('application/pgp', 'asciiarmor'),
      t.defineMIME('application/pgp-encrypted', 'asciiarmor'),
      t.defineMIME('application/pgp-keys', 'asciiarmor'),
      t.defineMIME('application/pgp-signature', 'asciiarmor');
  });
})();
var p = l.exports;
const d = c(p),
  m = u({ __proto__: null, default: d }, [p]);
export { m as a };
