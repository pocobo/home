import { b as x } from './antd-BmrhB3rb.js';
import { r as v } from './index-Ck6h_6RS.js';
function k(f, l) {
  for (var i = 0; i < l.length; i++) {
    const o = l[i];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const u in o)
        if (u !== 'default' && !(u in f)) {
          const a = Object.getOwnPropertyDescriptor(o, u);
          a && Object.defineProperty(f, u, a.get ? a : { enumerable: !0, get: () => o[u] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: 'Module' }));
}
var y = { exports: {} };
(function (f, l) {
  (function (i) {
    i(v());
  })(function (i) {
    i.defineMode('eiffel', function () {
      function o(e) {
        for (var r = {}, t = 0, n = e.length; t < n; ++t) r[e[t]] = !0;
        return r;
      }
      var u = o([
          'note',
          'across',
          'when',
          'variant',
          'until',
          'unique',
          'undefine',
          'then',
          'strip',
          'select',
          'retry',
          'rescue',
          'require',
          'rename',
          'reference',
          'redefine',
          'prefix',
          'once',
          'old',
          'obsolete',
          'loop',
          'local',
          'like',
          'is',
          'inspect',
          'infix',
          'include',
          'if',
          'frozen',
          'from',
          'external',
          'export',
          'ensure',
          'end',
          'elseif',
          'else',
          'do',
          'creation',
          'create',
          'check',
          'alias',
          'agent',
          'separate',
          'invariant',
          'inherit',
          'indexing',
          'feature',
          'expanded',
          'deferred',
          'class',
          'Void',
          'True',
          'Result',
          'Precursor',
          'False',
          'Current',
          'create',
          'attached',
          'detachable',
          'as',
          'and',
          'implies',
          'not',
          'or',
        ]),
        a = o([':=', 'and then', 'and', 'or', '<<', '>>']);
      function d(e, r, t) {
        return t.tokenize.push(e), e(r, t);
      }
      function b(e, r) {
        if (e.eatSpace()) return null;
        var t = e.next();
        return t == '"' || t == "'"
          ? d(g(t, 'string'), e, r)
          : t == '-' && e.eat('-')
            ? (e.skipToEnd(), 'comment')
            : t == ':' && e.eat('=')
              ? 'operator'
              : /[0-9]/.test(t)
                ? (e.eatWhile(/[xXbBCc0-9\.]/), e.eat(/[\?\!]/), 'ident')
                : /[a-zA-Z_0-9]/.test(t)
                  ? (e.eatWhile(/[a-zA-Z_0-9]/), e.eat(/[\?\!]/), 'ident')
                  : /[=+\-\/*^%<>~]/.test(t)
                    ? (e.eatWhile(/[=+\-\/*^%<>~]/), 'operator')
                    : null;
      }
      function g(e, r, t) {
        return function (n, h) {
          for (var c = !1, s; (s = n.next()) != null; ) {
            if (s == e && (t || !c)) {
              h.tokenize.pop();
              break;
            }
            c = !c && s == '%';
          }
          return r;
        };
      }
      return {
        startState: function () {
          return { tokenize: [b] };
        },
        token: function (e, r) {
          var t = r.tokenize[r.tokenize.length - 1](e, r);
          if (t == 'ident') {
            var n = e.current();
            t = u.propertyIsEnumerable(e.current())
              ? 'keyword'
              : a.propertyIsEnumerable(e.current())
                ? 'operator'
                : /^[A-Z][A-Z_0-9]*$/g.test(n)
                  ? 'tag'
                  : /^0[bB][0-1]+$/g.test(n) ||
                      /^0[cC][0-7]+$/g.test(n) ||
                      /^0[xX][a-fA-F0-9]+$/g.test(n) ||
                      /^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(n) ||
                      /^[0-9]+$/g.test(n)
                    ? 'number'
                    : 'variable';
          }
          return t;
        },
        lineComment: '--',
      };
    }),
      i.defineMIME('text/x-eiffel', 'eiffel');
  });
})();
var p = y.exports;
const m = x(p),
  $ = k({ __proto__: null, default: m }, [p]);
export { $ as e };
