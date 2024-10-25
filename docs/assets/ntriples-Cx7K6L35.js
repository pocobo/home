import { b as B } from './antd-BmrhB3rb.js';
import { r as P } from './index-Ck6h_6RS.js';
function s(f, l) {
  for (var R = 0; R < l.length; R++) {
    const e = l[R];
    if (typeof e != 'string' && !Array.isArray(e)) {
      for (const I in e)
        if (I !== 'default' && !(I in f)) {
          const r = Object.getOwnPropertyDescriptor(e, I);
          r && Object.defineProperty(f, I, r.get ? r : { enumerable: !0, get: () => e[I] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: 'Module' }));
}
var N = { exports: {} };
(function (f, l) {
  (function (R) {
    R(P());
  })(function (R) {
    R.defineMode('ntriples', function () {
      var e = {
        PRE_SUBJECT: 0,
        WRITING_SUB_URI: 1,
        WRITING_BNODE_URI: 2,
        PRE_PRED: 3,
        WRITING_PRED_URI: 4,
        PRE_OBJ: 5,
        WRITING_OBJ_URI: 6,
        WRITING_OBJ_BNODE: 7,
        WRITING_OBJ_LITERAL: 8,
        WRITING_LIT_LANG: 9,
        WRITING_LIT_TYPE: 10,
        POST_OBJ: 11,
        ERROR: 12,
      };
      function I(r, n) {
        var i = r.location,
          _;
        i == e.PRE_SUBJECT && n == '<'
          ? (_ = e.WRITING_SUB_URI)
          : i == e.PRE_SUBJECT && n == '_'
            ? (_ = e.WRITING_BNODE_URI)
            : i == e.PRE_PRED && n == '<'
              ? (_ = e.WRITING_PRED_URI)
              : i == e.PRE_OBJ && n == '<'
                ? (_ = e.WRITING_OBJ_URI)
                : i == e.PRE_OBJ && n == '_'
                  ? (_ = e.WRITING_OBJ_BNODE)
                  : i == e.PRE_OBJ && n == '"'
                    ? (_ = e.WRITING_OBJ_LITERAL)
                    : (i == e.WRITING_SUB_URI && n == '>') || (i == e.WRITING_BNODE_URI && n == ' ')
                      ? (_ = e.PRE_PRED)
                      : i == e.WRITING_PRED_URI && n == '>'
                        ? (_ = e.PRE_OBJ)
                        : (i == e.WRITING_OBJ_URI && n == '>') ||
                            (i == e.WRITING_OBJ_BNODE && n == ' ') ||
                            (i == e.WRITING_OBJ_LITERAL && n == '"') ||
                            (i == e.WRITING_LIT_LANG && n == ' ') ||
                            (i == e.WRITING_LIT_TYPE && n == '>')
                          ? (_ = e.POST_OBJ)
                          : i == e.WRITING_OBJ_LITERAL && n == '@'
                            ? (_ = e.WRITING_LIT_LANG)
                            : i == e.WRITING_OBJ_LITERAL && n == '^'
                              ? (_ = e.WRITING_LIT_TYPE)
                              : n == ' ' &&
                                  (i == e.PRE_SUBJECT ||
                                    i == e.PRE_PRED ||
                                    i == e.PRE_OBJ ||
                                    i == e.POST_OBJ)
                                ? (_ = i)
                                : i == e.POST_OBJ && n == '.'
                                  ? (_ = e.PRE_SUBJECT)
                                  : (_ = e.ERROR),
          (r.location = _);
      }
      return {
        startState: function () {
          return {
            location: e.PRE_SUBJECT,
            uris: [],
            anchors: [],
            bnodes: [],
            langs: [],
            types: [],
          };
        },
        token: function (r, n) {
          var i = r.next();
          if (i == '<') {
            I(n, i);
            var _ = '';
            return (
              r.eatWhile(function (t) {
                return t != '#' && t != '>' ? ((_ += t), !0) : !1;
              }),
              n.uris.push(_),
              r.match('#', !1) || (r.next(), I(n, '>')),
              'variable'
            );
          }
          if (i == '#') {
            var u = '';
            return (
              r.eatWhile(function (t) {
                return t != '>' && t != ' ' ? ((u += t), !0) : !1;
              }),
              n.anchors.push(u),
              'variable-2'
            );
          }
          if (i == '>') return I(n, '>'), 'variable';
          if (i == '_') {
            I(n, i);
            var o = '';
            return (
              r.eatWhile(function (t) {
                return t != ' ' ? ((o += t), !0) : !1;
              }),
              n.bnodes.push(o),
              r.next(),
              I(n, ' '),
              'builtin'
            );
          }
          if (i == '"')
            return (
              I(n, i),
              r.eatWhile(function (t) {
                return t != '"';
              }),
              r.next(),
              r.peek() != '@' && r.peek() != '^' && I(n, '"'),
              'string'
            );
          if (i == '@') {
            I(n, '@');
            var T = '';
            return (
              r.eatWhile(function (t) {
                return t != ' ' ? ((T += t), !0) : !1;
              }),
              n.langs.push(T),
              r.next(),
              I(n, ' '),
              'string-2'
            );
          }
          if (i == '^') {
            r.next(), I(n, '^');
            var E = '';
            return (
              r.eatWhile(function (t) {
                return t != '>' ? ((E += t), !0) : !1;
              }),
              n.types.push(E),
              r.next(),
              I(n, '>'),
              'variable'
            );
          }
          i == ' ' && I(n, i), i == '.' && I(n, i);
        },
      };
    }),
      R.defineMIME('application/n-triples', 'ntriples'),
      R.defineMIME('application/n-quads', 'ntriples'),
      R.defineMIME('text/n-triples', 'ntriples');
  });
})();
var O = N.exports;
const p = B(O),
  G = s({ __proto__: null, default: p }, [O]);
export { G as n };
