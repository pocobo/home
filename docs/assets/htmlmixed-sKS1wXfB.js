import { r as q } from './index-Ck6h_6RS.js';
import { r as I } from './xml-w1k-fQXr.js';
import { a as P } from './javascript-CucwyKld.js';
import { a as F } from './css-DfXPPpS6.js';
var M = { exports: {} },
  y;
function X() {
  return (
    y ||
      ((y = 1),
      (function (H, U) {
        (function (i) {
          i(q(), I(), P, F);
        })(function (i) {
          var k = {
            script: [
              ['lang', /(javascript|babel)/i, 'javascript'],
              [
                'type',
                /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,
                'javascript',
              ],
              ['type', /./, 'text/plain'],
              [null, null, 'javascript'],
            ],
            style: [
              ['lang', /^css$/i, 'css'],
              ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
              ['type', /./, 'text/plain'],
              [null, null, 'css'],
            ],
          };
          function $(n, l, a) {
            var c = n.current(),
              r = c.search(l);
            return (
              r > -1
                ? n.backUp(c.length - r)
                : c.match(/<\/?$/) && (n.backUp(c.length), n.match(l, !1) || n.match(c)),
              a
            );
          }
          var d = {};
          function b(n) {
            var l = d[n];
            return l || (d[n] = new RegExp('\\s+' + n + `\\s*=\\s*('|")?([^'"]+)('|")?\\s*`));
          }
          function j(n, l) {
            var a = n.match(b(l));
            return a ? /^\s*(.*?)\s*$/.exec(a[2])[1] : '';
          }
          function p(n, l) {
            return new RegExp((l ? '^' : '') + '</\\s*' + n + '\\s*>', 'i');
          }
          function v(n, l) {
            for (var a in n)
              for (var c = l[a] || (l[a] = []), r = n[a], o = r.length - 1; o >= 0; o--)
                c.unshift(r[o]);
          }
          function w(n, l) {
            for (var a = 0; a < n.length; a++) {
              var c = n[a];
              if (!c[0] || c[1].test(j(l, c[0]))) return c[2];
            }
          }
          i.defineMode(
            'htmlmixed',
            function (n, l) {
              var a = i.getMode(n, {
                  name: 'xml',
                  htmlMode: !0,
                  multilineTagIndentFactor: l.multilineTagIndentFactor,
                  multilineTagIndentPastTag: l.multilineTagIndentPastTag,
                  allowMissingTagName: l.allowMissingTagName,
                }),
                c = {},
                r = l && l.tags,
                o = l && l.scriptTypes;
              if ((v(k, c), r && v(r, c), o))
                for (var f = o.length - 1; f >= 0; f--)
                  c.script.unshift(['type', o[f].matches, o[f].mode]);
              function x(t, e) {
                var u = a.token(t, e.htmlState),
                  S = /\btag\b/.test(u),
                  s;
                if (
                  S &&
                  !/[<>\s\/]/.test(t.current()) &&
                  (s = e.htmlState.tagName && e.htmlState.tagName.toLowerCase()) &&
                  c.hasOwnProperty(s)
                )
                  e.inTag = s + ' ';
                else if (e.inTag && S && />$/.test(t.current())) {
                  var g = /^([\S]+) (.*)/.exec(e.inTag);
                  e.inTag = null;
                  var R = t.current() == '>' && w(c[g[1]], g[2]),
                    T = i.getMode(n, R),
                    E = p(g[1], !0),
                    N = p(g[1], !1);
                  (e.token = function (h, m) {
                    return h.match(E, !1)
                      ? ((m.token = x), (m.localState = m.localMode = null), null)
                      : $(h, N, m.localMode.token(h, m.localState));
                  }),
                    (e.localMode = T),
                    (e.localState = i.startState(T, a.indent(e.htmlState, '', '')));
                } else e.inTag && ((e.inTag += t.current()), t.eol() && (e.inTag += ' '));
                return u;
              }
              return {
                startState: function () {
                  var t = i.startState(a);
                  return { token: x, inTag: null, localMode: null, localState: null, htmlState: t };
                },
                copyState: function (t) {
                  var e;
                  return (
                    t.localState && (e = i.copyState(t.localMode, t.localState)),
                    {
                      token: t.token,
                      inTag: t.inTag,
                      localMode: t.localMode,
                      localState: e,
                      htmlState: i.copyState(a, t.htmlState),
                    }
                  );
                },
                token: function (t, e) {
                  return e.token(t, e);
                },
                indent: function (t, e, u) {
                  return !t.localMode || /^\s*<\//.test(e)
                    ? a.indent(t.htmlState, e, u)
                    : t.localMode.indent
                      ? t.localMode.indent(t.localState, e, u)
                      : i.Pass;
                },
                innerMode: function (t) {
                  return { state: t.localState || t.htmlState, mode: t.localMode || a };
                },
              };
            },
            'xml',
            'javascript',
            'css',
          ),
            i.defineMIME('text/html', 'htmlmixed');
        });
      })()),
    M.exports
  );
}
export { X as r };
