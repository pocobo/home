import { b as w } from './antd-BmrhB3rb.js';
import { r as g } from './index-Ck6h_6RS.js';
function y(c, p) {
  for (var a = 0; a < p.length; a++) {
    const l = p[a];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const o in l)
        if (o !== 'default' && !(o in c)) {
          const s = Object.getOwnPropertyDescriptor(l, o);
          s && Object.defineProperty(c, o, s.get ? s : { enumerable: !0, get: () => l[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: 'Module' }));
}
var W = { exports: {} };
(function (c, p) {
  (function (a) {
    a(g());
  })(function (a) {
    a.defineMode('smalltalk', function (l) {
      var o = /[+\-\/\\*~<>=@%|&?!.,:;^]/,
        s = /true|false|nil|self|super|thisContext/,
        u = function (e, n) {
          (this.next = e), (this.parent = n);
        },
        f = function (e, n, t) {
          (this.name = e), (this.context = n), (this.eos = t);
        },
        d = function () {
          (this.context = new u(x, null)),
            (this.expectVariable = !0),
            (this.indentation = 0),
            (this.userIndentationDelta = 0);
        };
      d.prototype.userIndent = function (e) {
        this.userIndentationDelta = e > 0 ? e / l.indentUnit - this.indentation : 0;
      };
      var x = function (e, n, t) {
          var i = new f(null, n, !1),
            r = e.next();
          return (
            r === '"'
              ? (i = h(e, new u(h, n)))
              : r === "'"
                ? (i = v(e, new u(v, n)))
                : r === '#'
                  ? e.peek() === "'"
                    ? (e.next(), (i = b(e, new u(b, n))))
                    : e.eatWhile(/[^\s.{}\[\]()]/)
                      ? (i.name = 'string-2')
                      : (i.name = 'meta')
                  : r === '$'
                    ? (e.next() === '<' && (e.eatWhile(/[^\s>]/), e.next()), (i.name = 'string-2'))
                    : r === '|' && t.expectVariable
                      ? (i.context = new u(m, n))
                      : /[\[\]{}()]/.test(r)
                        ? ((i.name = 'bracket'),
                          (i.eos = /[\[{(]/.test(r)),
                          r === '['
                            ? t.indentation++
                            : r === ']' && (t.indentation = Math.max(0, t.indentation - 1)))
                        : o.test(r)
                          ? (e.eatWhile(o), (i.name = 'operator'), (i.eos = r !== ';'))
                          : /\d/.test(r)
                            ? (e.eatWhile(/[\w\d]/), (i.name = 'number'))
                            : /[\w_]/.test(r)
                              ? (e.eatWhile(/[\w\d_]/),
                                (i.name = t.expectVariable
                                  ? s.test(e.current())
                                    ? 'keyword'
                                    : 'variable'
                                  : null))
                              : (i.eos = t.expectVariable),
            i
          );
        },
        h = function (e, n) {
          return e.eatWhile(/[^"]/), new f('comment', e.eat('"') ? n.parent : n, !0);
        },
        v = function (e, n) {
          return e.eatWhile(/[^']/), new f('string', e.eat("'") ? n.parent : n, !1);
        },
        b = function (e, n) {
          return e.eatWhile(/[^']/), new f('string-2', e.eat("'") ? n.parent : n, !1);
        },
        m = function (e, n) {
          var t = new f(null, n, !1),
            i = e.next();
          return (
            i === '|'
              ? ((t.context = n.parent), (t.eos = !0))
              : (e.eatWhile(/[^|]/), (t.name = 'variable')),
            t
          );
        };
      return {
        startState: function () {
          return new d();
        },
        token: function (e, n) {
          if ((n.userIndent(e.indentation()), e.eatSpace())) return null;
          var t = n.context.next(e, n.context, n);
          return (n.context = t.context), (n.expectVariable = t.eos), t.name;
        },
        blankLine: function (e) {
          e.userIndent(0);
        },
        indent: function (e, n) {
          var t = e.context.next === x && n && n.charAt(0) === ']' ? -1 : e.userIndentationDelta;
          return (e.indentation + t) * l.indentUnit;
        },
        electricChars: ']',
      };
    }),
      a.defineMIME('text/x-stsrc', { name: 'smalltalk' });
  });
})();
var k = W.exports;
const C = w(k),
  _ = y({ __proto__: null, default: C }, [k]);
export { _ as s };
