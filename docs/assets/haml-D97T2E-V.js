import { b as d } from './antd-BmrhB3rb.js';
import { r as a } from './index-Ck6h_6RS.js';
import { r as y } from './htmlmixed-sKS1wXfB.js';
import { r as b } from './ruby-B-h6WUT_.js';
function T(l, m) {
  for (var i = 0; i < m.length; i++) {
    const r = m[i];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in l)) {
          const u = Object.getOwnPropertyDescriptor(r, o);
          u && Object.defineProperty(l, o, u.get ? u : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(l, Symbol.toStringTag, { value: 'Module' }));
}
var v = { exports: {} };
(function (l, m) {
  (function (i) {
    i(a(), y(), b());
  })(function (i) {
    i.defineMode(
      'haml',
      function (r) {
        var o = i.getMode(r, { name: 'htmlmixed' }),
          u = i.getMode(r, 'ruby');
        function k(n) {
          return function (e, t) {
            var c = e.peek();
            return c == n && t.rubyState.tokenize.length == 1
              ? (e.next(), (t.tokenize = p), 'closeAttributeTag')
              : f(e, t);
          };
        }
        function f(n, e) {
          return n.match('-#') ? (n.skipToEnd(), 'comment') : u.token(n, e.rubyState);
        }
        function p(n, e) {
          var t = n.peek();
          if (e.previousToken.style == 'comment' && e.indented > e.previousToken.indented)
            return n.skipToEnd(), 'commentLine';
          if (e.startOfLine) {
            if (t == '!' && n.match('!!')) return n.skipToEnd(), 'tag';
            if (n.match(/^%[\w:#\.]+=/)) return (e.tokenize = f), 'hamlTag';
            if (n.match(/^%[\w:]+/)) return 'hamlTag';
            if (t == '/') return n.skipToEnd(), 'comment';
          }
          if ((e.startOfLine || e.previousToken.style == 'hamlTag') && (t == '#' || t == '.'))
            return n.match(/[\w-#\.]*/), 'hamlAttribute';
          if (e.startOfLine && !n.match('-->', !1) && (t == '=' || t == '-'))
            return (e.tokenize = f), e.tokenize(n, e);
          if (
            e.previousToken.style == 'hamlTag' ||
            e.previousToken.style == 'closeAttributeTag' ||
            e.previousToken.style == 'hamlAttribute'
          ) {
            if (t == '(') return (e.tokenize = k(')')), e.tokenize(n, e);
            if (t == '{' && !n.match(/^\{%.*/)) return (e.tokenize = k('}')), e.tokenize(n, e);
          }
          return o.token(n, e.htmlState);
        }
        return {
          startState: function () {
            var n = i.startState(o),
              e = i.startState(u);
            return {
              htmlState: n,
              rubyState: e,
              indented: 0,
              previousToken: { style: null, indented: 0 },
              tokenize: p,
            };
          },
          copyState: function (n) {
            return {
              htmlState: i.copyState(o, n.htmlState),
              rubyState: i.copyState(u, n.rubyState),
              indented: n.indented,
              previousToken: n.previousToken,
              tokenize: n.tokenize,
            };
          },
          token: function (n, e) {
            if ((n.sol() && ((e.indented = n.indentation()), (e.startOfLine = !0)), n.eatSpace()))
              return null;
            var t = e.tokenize(n, e);
            if (
              ((e.startOfLine = !1),
              t && t != 'commentLine' && (e.previousToken = { style: t, indented: e.indented }),
              n.eol() && e.tokenize == f)
            ) {
              n.backUp(1);
              var c = n.peek();
              n.next(), c && c != ',' && (e.tokenize = p);
            }
            return (
              t == 'hamlTag'
                ? (t = 'tag')
                : t == 'commentLine'
                  ? (t = 'comment')
                  : t == 'hamlAttribute'
                    ? (t = 'attribute')
                    : t == 'closeAttributeTag' && (t = null),
              t
            );
          },
        };
      },
      'htmlmixed',
      'ruby',
    ),
      i.defineMIME('text/x-haml', 'haml');
  });
})();
var h = v.exports;
const g = d(h),
  A = T({ __proto__: null, default: g }, [h]);
export { A as h };
