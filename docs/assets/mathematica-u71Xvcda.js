import { b as g } from './antd-BmrhB3rb.js';
import { r as x } from './index-Ck6h_6RS.js';
function s(u, l) {
  for (var a = 0; a < l.length; a++) {
    const i = l[a];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const o in i)
        if (o !== 'default' && !(o in u)) {
          const f = Object.getOwnPropertyDescriptor(i, o);
          f && Object.defineProperty(u, o, f.get ? f : { enumerable: !0, get: () => i[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }));
}
var w = { exports: {} };
(function (u, l) {
  (function (a) {
    a(x());
  })(function (a) {
    a.defineMode('mathematica', function (i, o) {
      var f = '[a-zA-Z\\$][a-zA-Z0-9\\$]*',
        A = '(?:\\d+)',
        z = '(?:\\.\\d+|\\d+\\.\\d*|\\d+)',
        $ = '(?:\\.\\w+|\\w+\\.\\w*|\\w+)',
        p = '(?:`(?:`?' + z + ')?)',
        Z = new RegExp('(?:' + A + '(?:\\^\\^' + $ + p + '?(?:\\*\\^[+-]?\\d+)?))'),
        h = new RegExp('(?:' + z + p + '?(?:\\*\\^[+-]?\\d+)?)'),
        d = new RegExp('(?:`?)(?:' + f + ')(?:`(?:' + f + '))*(?:`?)');
      function m(e, r) {
        var t;
        return (
          (t = e.next()),
          t === '"'
            ? ((r.tokenize = b), r.tokenize(e, r))
            : t === '(' && e.eat('*')
              ? (r.commentLevel++, (r.tokenize = k), r.tokenize(e, r))
              : (e.backUp(1),
                e.match(Z, !0, !1) || e.match(h, !0, !1)
                  ? 'number'
                  : e.match(/(?:In|Out)\[[0-9]*\]/, !0, !1)
                    ? 'atom'
                    : e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/, !0, !1)
                      ? 'meta'
                      : e.match(
                            /([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,
                            !0,
                            !1,
                          )
                        ? 'string-2'
                        : e.match(
                              /([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,
                              !0,
                              !1,
                            ) ||
                            e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/, !0, !1) ||
                            e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/, !0, !1) ||
                            e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/, !0, !1)
                          ? 'variable-2'
                          : e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/, !0, !1)
                            ? 'variable-3'
                            : e.match(/(?:\[|\]|{|}|\(|\))/, !0, !1)
                              ? 'bracket'
                              : e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/, !0, !1)
                                ? 'variable-2'
                                : e.match(d, !0, !1)
                                  ? 'keyword'
                                  : e.match(
                                        /(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,
                                        !0,
                                        !1,
                                      )
                                    ? 'operator'
                                    : (e.next(), 'error'))
        );
      }
      function b(e, r) {
        for (var t, n = !1, c = !1; (t = e.next()) != null; ) {
          if (t === '"' && !c) {
            n = !0;
            break;
          }
          c = !c && t === '\\';
        }
        return n && !c && (r.tokenize = m), 'string';
      }
      function k(e, r) {
        for (var t, n; r.commentLevel > 0 && (n = e.next()) != null; )
          t === '(' && n === '*' && r.commentLevel++,
            t === '*' && n === ')' && r.commentLevel--,
            (t = n);
        return r.commentLevel <= 0 && (r.tokenize = m), 'comment';
      }
      return {
        startState: function () {
          return { tokenize: m, commentLevel: 0 };
        },
        token: function (e, r) {
          return e.eatSpace() ? null : r.tokenize(e, r);
        },
        blockCommentStart: '(*',
        blockCommentEnd: '*)',
      };
    }),
      a.defineMIME('text/x-mathematica', { name: 'mathematica' });
  });
})();
var v = w.exports;
const _ = g(v),
  C = s({ __proto__: null, default: _ }, [v]);
export { C as m };
