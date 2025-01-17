import { r as U } from './index-Ck6h_6RS.js';
var y = { exports: {} },
  M;
function L() {
  return (
    M ||
      ((M = 1),
      (function (D, F) {
        (function (l) {
          l(U());
        })(function (l) {
          var P = {
              autoSelfClosers: {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                command: !0,
                embed: !0,
                frame: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0,
                menuitem: !0,
              },
              implicitlyClosed: {
                dd: !0,
                li: !0,
                optgroup: !0,
                option: !0,
                p: !0,
                rp: !0,
                rt: !0,
                tbody: !0,
                td: !0,
                tfoot: !0,
                th: !0,
                tr: !0,
              },
              contextGrabbers: {
                dd: { dd: !0, dt: !0 },
                dt: { dd: !0, dt: !0 },
                li: { li: !0 },
                option: { option: !0, optgroup: !0 },
                optgroup: { optgroup: !0 },
                p: {
                  address: !0,
                  article: !0,
                  aside: !0,
                  blockquote: !0,
                  dir: !0,
                  div: !0,
                  dl: !0,
                  fieldset: !0,
                  footer: !0,
                  form: !0,
                  h1: !0,
                  h2: !0,
                  h3: !0,
                  h4: !0,
                  h5: !0,
                  h6: !0,
                  header: !0,
                  hgroup: !0,
                  hr: !0,
                  menu: !0,
                  nav: !0,
                  ol: !0,
                  p: !0,
                  pre: !0,
                  section: !0,
                  table: !0,
                  ul: !0,
                },
                rp: { rp: !0, rt: !0 },
                rt: { rp: !0, rt: !0 },
                tbody: { tbody: !0, tfoot: !0 },
                td: { td: !0, th: !0 },
                tfoot: { tbody: !0 },
                th: { td: !0, th: !0 },
                thead: { tbody: !0, tfoot: !0 },
                tr: { tr: !0 },
              },
              doNotIndent: { pre: !0 },
              allowUnquoted: !0,
              allowMissing: !0,
              caseFold: !0,
            },
            O = {
              autoSelfClosers: {},
              implicitlyClosed: {},
              contextGrabbers: {},
              doNotIndent: {},
              allowUnquoted: !1,
              allowMissing: !1,
              allowMissingTagName: !1,
              caseFold: !1,
            };
          l.defineMode('xml', function (q, p) {
            var x = q.indentUnit,
              u = {},
              T = p.htmlMode ? P : O;
            for (var g in T) u[g] = T[g];
            for (var g in p) u[g] = p[g];
            var d, i;
            function c(e, r) {
              function t(m) {
                return (r.tokenize = m), m(e, r);
              }
              var n = e.next();
              if (n == '<')
                return e.eat('!')
                  ? e.eat('[')
                    ? e.match('CDATA[')
                      ? t(w('atom', ']]>'))
                      : null
                    : e.match('--')
                      ? t(w('comment', '-->'))
                      : e.match('DOCTYPE', !0, !0)
                        ? (e.eatWhile(/[\w\._\-]/), t(v(1)))
                        : null
                  : e.eat('?')
                    ? (e.eatWhile(/[\w\._\-]/), (r.tokenize = w('meta', '?>')), 'meta')
                    : ((d = e.eat('/') ? 'closeTag' : 'openTag'), (r.tokenize = b), 'tag bracket');
              if (n == '&') {
                var o;
                return (
                  e.eat('#')
                    ? e.eat('x')
                      ? (o = e.eatWhile(/[a-fA-F\d]/) && e.eat(';'))
                      : (o = e.eatWhile(/[\d]/) && e.eat(';'))
                    : (o = e.eatWhile(/[\w\.\-:]/) && e.eat(';')),
                  o ? 'atom' : 'error'
                );
              } else return e.eatWhile(/[^&<]/), null;
            }
            c.isInText = !0;
            function b(e, r) {
              var t = e.next();
              if (t == '>' || (t == '/' && e.eat('>')))
                return (r.tokenize = c), (d = t == '>' ? 'endTag' : 'selfcloseTag'), 'tag bracket';
              if (t == '=') return (d = 'equals'), null;
              if (t == '<') {
                (r.tokenize = c), (r.state = h), (r.tagName = r.tagStart = null);
                var n = r.tokenize(e, r);
                return n ? n + ' tag error' : 'tag error';
              } else
                return /[\'\"]/.test(t)
                  ? ((r.tokenize = A(t)), (r.stringStartCol = e.column()), r.tokenize(e, r))
                  : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
            }
            function A(e) {
              var r = function (t, n) {
                for (; !t.eol(); )
                  if (t.next() == e) {
                    n.tokenize = b;
                    break;
                  }
                return 'string';
              };
              return (r.isInAttribute = !0), r;
            }
            function w(e, r) {
              return function (t, n) {
                for (; !t.eol(); ) {
                  if (t.match(r)) {
                    n.tokenize = c;
                    break;
                  }
                  t.next();
                }
                return e;
              };
            }
            function v(e) {
              return function (r, t) {
                for (var n; (n = r.next()) != null; ) {
                  if (n == '<') return (t.tokenize = v(e + 1)), t.tokenize(r, t);
                  if (n == '>')
                    if (e == 1) {
                      t.tokenize = c;
                      break;
                    } else return (t.tokenize = v(e - 1)), t.tokenize(r, t);
                }
                return 'meta';
              };
            }
            function a(e) {
              return e && e.toLowerCase();
            }
            function E(e, r, t) {
              (this.prev = e.context),
                (this.tagName = r || ''),
                (this.indent = e.indented),
                (this.startOfLine = t),
                (u.doNotIndent.hasOwnProperty(r) || (e.context && e.context.noIndent)) &&
                  (this.noIndent = !0);
            }
            function k(e) {
              e.context && (e.context = e.context.prev);
            }
            function S(e, r) {
              for (var t; ; ) {
                if (
                  !e.context ||
                  ((t = e.context.tagName),
                  !u.contextGrabbers.hasOwnProperty(a(t)) ||
                    !u.contextGrabbers[a(t)].hasOwnProperty(a(r)))
                )
                  return;
                k(e);
              }
            }
            function h(e, r, t) {
              return e == 'openTag' ? ((t.tagStart = r.column()), C) : e == 'closeTag' ? W : h;
            }
            function C(e, r, t) {
              return e == 'word'
                ? ((t.tagName = r.current()), (i = 'tag'), f)
                : u.allowMissingTagName && e == 'endTag'
                  ? ((i = 'tag bracket'), f(e, r, t))
                  : ((i = 'error'), C);
            }
            function W(e, r, t) {
              if (e == 'word') {
                var n = r.current();
                return (
                  t.context &&
                    t.context.tagName != n &&
                    u.implicitlyClosed.hasOwnProperty(a(t.context.tagName)) &&
                    k(t),
                  (t.context && t.context.tagName == n) || u.matchClosing === !1
                    ? ((i = 'tag'), s)
                    : ((i = 'tag error'), N)
                );
              } else
                return u.allowMissingTagName && e == 'endTag'
                  ? ((i = 'tag bracket'), s(e, r, t))
                  : ((i = 'error'), N);
            }
            function s(e, r, t) {
              return e != 'endTag' ? ((i = 'error'), s) : (k(t), h);
            }
            function N(e, r, t) {
              return (i = 'error'), s(e, r, t);
            }
            function f(e, r, t) {
              if (e == 'word') return (i = 'attribute'), G;
              if (e == 'endTag' || e == 'selfcloseTag') {
                var n = t.tagName,
                  o = t.tagStart;
                return (
                  (t.tagName = t.tagStart = null),
                  e == 'selfcloseTag' || u.autoSelfClosers.hasOwnProperty(a(n))
                    ? S(t, n)
                    : (S(t, n), (t.context = new E(t, n, o == t.indented))),
                  h
                );
              }
              return (i = 'error'), f;
            }
            function G(e, r, t) {
              return e == 'equals' ? z : (u.allowMissing || (i = 'error'), f(e, r, t));
            }
            function z(e, r, t) {
              return e == 'string'
                ? I
                : e == 'word' && u.allowUnquoted
                  ? ((i = 'string'), f)
                  : ((i = 'error'), f(e, r, t));
            }
            function I(e, r, t) {
              return e == 'string' ? I : f(e, r, t);
            }
            return {
              startState: function (e) {
                var r = {
                  tokenize: c,
                  state: h,
                  indented: e || 0,
                  tagName: null,
                  tagStart: null,
                  context: null,
                };
                return e != null && (r.baseIndent = e), r;
              },
              token: function (e, r) {
                if ((!r.tagName && e.sol() && (r.indented = e.indentation()), e.eatSpace()))
                  return null;
                d = null;
                var t = r.tokenize(e, r);
                return (
                  (t || d) &&
                    t != 'comment' &&
                    ((i = null),
                    (r.state = r.state(d || t, e, r)),
                    i && (t = i == 'error' ? t + ' error' : i)),
                  t
                );
              },
              indent: function (e, r, t) {
                var n = e.context;
                if (e.tokenize.isInAttribute)
                  return e.tagStart == e.indented ? e.stringStartCol + 1 : e.indented + x;
                if (n && n.noIndent) return l.Pass;
                if (e.tokenize != b && e.tokenize != c) return t ? t.match(/^(\s*)/)[0].length : 0;
                if (e.tagName)
                  return u.multilineTagIndentPastTag !== !1
                    ? e.tagStart + e.tagName.length + 2
                    : e.tagStart + x * (u.multilineTagIndentFactor || 1);
                if (u.alignCDATA && /<!\[CDATA\[/.test(r)) return 0;
                var o = r && /^<(\/)?([\w_:\.-]*)/.exec(r);
                if (o && o[1])
                  for (; n; )
                    if (n.tagName == o[2]) {
                      n = n.prev;
                      break;
                    } else if (u.implicitlyClosed.hasOwnProperty(a(n.tagName))) n = n.prev;
                    else break;
                else if (o)
                  for (; n; ) {
                    var m = u.contextGrabbers[a(n.tagName)];
                    if (m && m.hasOwnProperty(a(o[2]))) n = n.prev;
                    else break;
                  }
                for (; n && n.prev && !n.startOfLine; ) n = n.prev;
                return n ? n.indent + x : e.baseIndent || 0;
              },
              electricInput: /<\/[\s\w:]+>$/,
              blockCommentStart: '<!--',
              blockCommentEnd: '-->',
              configuration: u.htmlMode ? 'html' : 'xml',
              helperType: u.htmlMode ? 'html' : 'xml',
              skipAttribute: function (e) {
                e.state == z && (e.state = f);
              },
              xmlCurrentTag: function (e) {
                return e.tagName ? { name: e.tagName, close: e.type == 'closeTag' } : null;
              },
              xmlCurrentContext: function (e) {
                for (var r = [], t = e.context; t; t = t.prev) r.push(t.tagName);
                return r.reverse();
              },
            };
          }),
            l.defineMIME('text/xml', 'xml'),
            l.defineMIME('application/xml', 'xml'),
            l.mimeModes.hasOwnProperty('text/html') ||
              l.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
        });
      })()),
    y.exports
  );
}
export { L as r };
