import { b as g } from './antd-BmrhB3rb.js';
import { r as h } from './index-Ck6h_6RS.js';
import { a as d } from './javascript-CucwyKld.js';
function C(f, t) {
  for (var r = 0; r < t.length; r++) {
    const l = t[r];
    if (typeof l != 'string' && !Array.isArray(l)) {
      for (const i in l)
        if (i !== 'default' && !(i in f)) {
          const o = Object.getOwnPropertyDescriptor(l, i);
          o && Object.defineProperty(f, i, o.get ? o : { enumerable: !0, get: () => l[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: 'Module' }));
}
var S = { exports: {} };
(function (f, t) {
  (function (r) {
    r(h(), d);
  })(function (r) {
    r.defineMode(
      'pegjs',
      function (l) {
        var i = r.getMode(l, 'javascript');
        function o(e) {
          return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
        }
        return {
          startState: function () {
            return {
              inString: !1,
              stringType: null,
              inComment: !1,
              inCharacterClass: !1,
              braced: 0,
              lhs: !0,
              localState: null,
            };
          },
          token: function (e, n) {
            if (
              (!n.inString &&
                !n.inComment &&
                (e.peek() == '"' || e.peek() == "'") &&
                ((n.stringType = e.peek()), e.next(), (n.inString = !0)),
              !n.inString && !n.inComment && e.match('/*') && (n.inComment = !0),
              n.inString)
            ) {
              for (; n.inString && !e.eol(); )
                e.peek() === n.stringType
                  ? (e.next(), (n.inString = !1))
                  : e.peek() === '\\'
                    ? (e.next(), e.next())
                    : e.match(/^.[^\\\"\']*/);
              return n.lhs ? 'property string' : 'string';
            } else if (n.inComment) {
              for (; n.inComment && !e.eol(); )
                e.match('*/') ? (n.inComment = !1) : e.match(/^.[^\*]*/);
              return 'comment';
            } else if (n.inCharacterClass)
              for (; n.inCharacterClass && !e.eol(); )
                e.match(/^[^\]\\]+/) || e.match(/^\\./) || (n.inCharacterClass = !1);
            else {
              if (e.peek() === '[') return e.next(), (n.inCharacterClass = !0), 'bracket';
              if (e.match('//')) return e.skipToEnd(), 'comment';
              if (n.braced || e.peek() === '{') {
                n.localState === null && (n.localState = r.startState(i));
                var u = i.token(e, n.localState),
                  p = e.current();
                if (!u)
                  for (var c = 0; c < p.length; c++)
                    p[c] === '{' ? n.braced++ : p[c] === '}' && n.braced--;
                return u;
              } else {
                if (o(e)) return e.peek() === ':' ? 'variable' : 'variable-2';
                if (['[', ']', '(', ')'].indexOf(e.peek()) != -1) return e.next(), 'bracket';
                e.eatSpace() || e.next();
              }
            }
            return null;
          },
        };
      },
      'javascript',
    );
  });
})();
var a = S.exports;
const b = g(a),
  v = C({ __proto__: null, default: b }, [a]);
export { v as p };
