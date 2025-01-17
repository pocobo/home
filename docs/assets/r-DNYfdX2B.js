import { b as S } from './antd-BmrhB3rb.js';
import { r as U } from './index-Ck6h_6RS.js';
function z(a, d) {
  for (var o = 0; o < d.length; o++) {
    const f = d[o];
    if (typeof f != 'string' && !Array.isArray(f)) {
      for (const l in f)
        if (l !== 'default' && !(l in a)) {
          const u = Object.getOwnPropertyDescriptor(f, l);
          u && Object.defineProperty(a, l, u.get ? u : { enumerable: !0, get: () => f[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }));
}
var O = { exports: {} };
(function (a, d) {
  (function (o) {
    o(U());
  })(function (o) {
    o.registerHelper('wordChars', 'r', /[\w.]/),
      o.defineMode('r', function (f) {
        function l(e) {
          for (var r = {}, n = 0; n < e.length; ++n) r[e[n]] = !0;
          return r;
        }
        var u = [
            'NULL',
            'NA',
            'Inf',
            'NaN',
            'NA_integer_',
            'NA_real_',
            'NA_complex_',
            'NA_character_',
            'TRUE',
            'FALSE',
          ],
          g = ['list', 'quote', 'bquote', 'eval', 'return', 'call', 'parse', 'deparse'],
          k = ['if', 'else', 'repeat', 'while', 'function', 'for', 'in', 'next', 'break'],
          A = ['if', 'else', 'repeat', 'while', 'function', 'for'];
        o.registerHelper('hintWords', 'r', u.concat(g, k));
        var E = l(u),
          w = l(g),
          N = l(k),
          I = l(A),
          y = /[+\-*\/^<>=!&|~$:]/,
          t;
        function s(e, r) {
          t = null;
          var n = e.next();
          if (n == '#') return e.skipToEnd(), 'comment';
          if (n == '0' && e.eat('x')) return e.eatWhile(/[\da-f]/i), 'number';
          if (n == '.' && e.eat(/\d/)) return e.match(/\d*(?:e[+\-]?\d+)?/), 'number';
          if (/\d/.test(n)) return e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/), 'number';
          if (n == "'" || n == '"') return (r.tokenize = L(n)), 'string';
          if (n == '`') return e.match(/[^`]+`/), 'variable-3';
          if (n == '.' && e.match(/.(?:[.]|\d+)/)) return 'keyword';
          if (/[a-zA-Z\.]/.test(n)) {
            e.eatWhile(/[\w\.]/);
            var i = e.current();
            return E.propertyIsEnumerable(i)
              ? 'atom'
              : N.propertyIsEnumerable(i)
                ? (I.propertyIsEnumerable(i) && !e.match(/\s*if(\s+|$)/, !1) && (t = 'block'),
                  'keyword')
                : w.propertyIsEnumerable(i)
                  ? 'builtin'
                  : 'variable';
          } else
            return n == '%'
              ? (e.skipTo('%') && e.next(), 'operator variable-2')
              : (n == '<' && e.eat('-')) ||
                  (n == '<' && e.match('<-')) ||
                  (n == '-' && e.match(/>>?/))
                ? 'operator arrow'
                : n == '=' && r.ctx.argList
                  ? 'arg-is'
                  : y.test(n)
                    ? n == '$'
                      ? 'operator dollar'
                      : (e.eatWhile(y), 'operator')
                    : /[\(\){}\[\];]/.test(n)
                      ? ((t = n), n == ';' ? 'semi' : null)
                      : null;
        }
        function L(e) {
          return function (r, n) {
            if (r.eat('\\')) {
              var i = r.next();
              return (
                i == 'x'
                  ? r.match(/^[a-f0-9]{2}/i)
                  : (i == 'u' || i == 'U') && r.eat('{') && r.skipTo('}')
                    ? r.next()
                    : i == 'u'
                      ? r.match(/^[a-f0-9]{4}/i)
                      : i == 'U'
                        ? r.match(/^[a-f0-9]{8}/i)
                        : /[0-7]/.test(i) && r.match(/^[0-7]{1,2}/),
                'string-2'
              );
            } else {
              for (var c; (c = r.next()) != null; ) {
                if (c == e) {
                  n.tokenize = s;
                  break;
                }
                if (c == '\\') {
                  r.backUp(1);
                  break;
                }
              }
              return 'string';
            }
          };
        }
        var h = 1,
          v = 2,
          x = 4;
        function p(e, r, n) {
          e.ctx = { type: r, indent: e.indent, flags: 0, column: n.column(), prev: e.ctx };
        }
        function m(e, r) {
          var n = e.ctx;
          e.ctx = {
            type: n.type,
            indent: n.indent,
            flags: n.flags | r,
            column: n.column,
            prev: n.prev,
          };
        }
        function b(e) {
          (e.indent = e.ctx.indent), (e.ctx = e.ctx.prev);
        }
        return {
          startState: function () {
            return {
              tokenize: s,
              ctx: { type: 'top', indent: -f.indentUnit, flags: v },
              indent: 0,
              afterIdent: !1,
            };
          },
          token: function (e, r) {
            if (
              (e.sol() &&
                (r.ctx.flags & 3 || (r.ctx.flags |= v),
                r.ctx.flags & x && b(r),
                (r.indent = e.indentation())),
              e.eatSpace())
            )
              return null;
            var n = r.tokenize(e, r);
            return (
              n != 'comment' && !(r.ctx.flags & v) && m(r, h),
              (t == ';' || t == '{' || t == '}') && r.ctx.type == 'block' && b(r),
              t == '{'
                ? p(r, '}', e)
                : t == '('
                  ? (p(r, ')', e), r.afterIdent && (r.ctx.argList = !0))
                  : t == '['
                    ? p(r, ']', e)
                    : t == 'block'
                      ? p(r, 'block', e)
                      : t == r.ctx.type
                        ? b(r)
                        : r.ctx.type == 'block' && n != 'comment' && m(r, x),
              (r.afterIdent = n == 'variable' || n == 'keyword'),
              n
            );
          },
          indent: function (e, r) {
            if (e.tokenize != s) return 0;
            var n = r && r.charAt(0),
              i = e.ctx,
              c = n == i.type;
            return (
              i.flags & x && (i = i.prev),
              i.type == 'block'
                ? i.indent + (n == '{' ? 0 : f.indentUnit)
                : i.flags & h
                  ? i.column + (c ? 0 : 1)
                  : i.indent + (c ? 0 : f.indentUnit)
            );
          },
          lineComment: '#',
        };
      }),
      o.defineMIME('text/x-rsrc', 'r');
  });
})();
var _ = O.exports;
const j = S(_),
  B = z({ __proto__: null, default: j }, [_]);
export { B as r };
