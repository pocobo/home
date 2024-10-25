import { r as I } from './index-Ck6h_6RS.js';
var y = { exports: {} },
  k;
function F() {
  return (
    k ||
      ((k = 1),
      (function (q, T) {
        (function (g) {
          g(I());
        })(function (g) {
          (g.defineSimpleMode = function (t, i) {
            g.defineMode(t, function (n) {
              return g.simpleMode(n, i);
            });
          }),
            (g.simpleMode = function (t, i) {
              x(i, 'start');
              var n = {},
                e = i.meta || {},
                f = !1;
              for (var l in i)
                if (l != e && i.hasOwnProperty(l))
                  for (var u = (n[l] = []), a = i[l], d = 0; d < a.length; d++) {
                    var o = a[d];
                    u.push(new w(o, i)), (o.indent || o.dedent) && (f = !0);
                  }
              var p = {
                startState: function () {
                  return {
                    state: 'start',
                    pending: null,
                    local: null,
                    localState: null,
                    indent: f ? [] : null,
                  };
                },
                copyState: function (r) {
                  var h = {
                    state: r.state,
                    pending: r.pending,
                    local: r.local,
                    localState: null,
                    indent: r.indent && r.indent.slice(0),
                  };
                  r.localState && (h.localState = g.copyState(r.local.mode, r.localState)),
                    r.stack && (h.stack = r.stack.slice(0));
                  for (var S = r.persistentStates; S; S = S.next)
                    h.persistentStates = {
                      mode: S.mode,
                      spec: S.spec,
                      state: S.state == r.localState ? h.localState : g.copyState(S.mode, S.state),
                      next: h.persistentStates,
                    };
                  return h;
                },
                token: O(n, t),
                innerMode: function (r) {
                  return r.local && { mode: r.local.mode, state: r.localState };
                },
                indent: E(n, e),
              };
              if (e) for (var c in e) e.hasOwnProperty(c) && (p[c] = e[c]);
              return p;
            });
          function x(t, i) {
            if (!t.hasOwnProperty(i)) throw new Error('Undefined state ' + i + ' in simple mode');
          }
          function s(t, i) {
            if (!t) return /(?:)/;
            var n = '';
            return (
              t instanceof RegExp
                ? (t.ignoreCase && (n = 'i'), t.unicode && (n += 'u'), (t = t.source))
                : (t = String(t)),
              new RegExp((i === !1 ? '' : '^') + '(?:' + t + ')', n)
            );
          }
          function m(t) {
            if (!t) return null;
            if (t.apply) return t;
            if (typeof t == 'string') return t.replace(/\./g, ' ');
            for (var i = [], n = 0; n < t.length; n++) i.push(t[n] && t[n].replace(/\./g, ' '));
            return i;
          }
          function w(t, i) {
            (t.next || t.push) && x(i, t.next || t.push),
              (this.regex = s(t.regex)),
              (this.token = m(t.token)),
              (this.data = t);
          }
          function O(t, i) {
            return function (n, e) {
              if (e.pending) {
                var f = e.pending.shift();
                return (
                  e.pending.length == 0 && (e.pending = null), (n.pos += f.text.length), f.token
                );
              }
              if (e.local)
                if (e.local.end && n.match(e.local.end)) {
                  var l = e.local.endToken || null;
                  return (e.local = e.localState = null), l;
                } else {
                  var l = e.local.mode.token(n, e.localState),
                    u;
                  return (
                    e.local.endScan &&
                      (u = e.local.endScan.exec(n.current())) &&
                      (n.pos = n.start + u.index),
                    l
                  );
                }
              for (var a = t[e.state], d = 0; d < a.length; d++) {
                var o = a[d],
                  p = (!o.data.sol || n.sol()) && n.match(o.regex);
                if (p) {
                  o.data.next
                    ? (e.state = o.data.next)
                    : o.data.push
                      ? ((e.stack || (e.stack = [])).push(e.state), (e.state = o.data.push))
                      : o.data.pop && e.stack && e.stack.length && (e.state = e.stack.pop()),
                    o.data.mode && P(i, e, o.data.mode, o.token),
                    o.data.indent && e.indent.push(n.indentation() + i.indentUnit),
                    o.data.dedent && e.indent.pop();
                  var c = o.token;
                  if (
                    (c && c.apply && (c = c(p)),
                    p.length > 2 && o.token && typeof o.token != 'string')
                  ) {
                    for (var r = 2; r < p.length; r++)
                      p[r] &&
                        (e.pending || (e.pending = [])).push({ text: p[r], token: o.token[r - 1] });
                    return n.backUp(p[0].length - (p[1] ? p[1].length : 0)), c[0];
                  } else return c && c.join ? c[0] : c;
                }
              }
              return n.next(), null;
            };
          }
          function v(t, i) {
            if (t === i) return !0;
            if (!t || typeof t != 'object' || !i || typeof i != 'object') return !1;
            var n = 0;
            for (var e in t)
              if (t.hasOwnProperty(e)) {
                if (!i.hasOwnProperty(e) || !v(t[e], i[e])) return !1;
                n++;
              }
            for (var e in i) i.hasOwnProperty(e) && n--;
            return n == 0;
          }
          function P(t, i, n, e) {
            var f;
            if (n.persistent)
              for (var l = i.persistentStates; l && !f; l = l.next)
                (n.spec ? v(n.spec, l.spec) : n.mode == l.mode) && (f = l);
            var u = f ? f.mode : n.mode || g.getMode(t, n.spec),
              a = f ? f.state : g.startState(u);
            n.persistent &&
              !f &&
              (i.persistentStates = { mode: u, spec: n.spec, state: a, next: i.persistentStates }),
              (i.localState = a),
              (i.local = {
                mode: u,
                end: n.end && s(n.end),
                endScan: n.end && n.forceEnd !== !1 && s(n.end, !1),
                endToken: e && e.join ? e[e.length - 1] : e,
              });
          }
          function R(t, i) {
            for (var n = 0; n < i.length; n++) if (i[n] === t) return !0;
          }
          function E(t, i) {
            return function (n, e, f) {
              if (n.local && n.local.mode.indent) return n.local.mode.indent(n.localState, e, f);
              if (
                n.indent == null ||
                n.local ||
                (i.dontIndentStates && R(n.state, i.dontIndentStates) > -1)
              )
                return g.Pass;
              var l = n.indent.length - 1,
                u = t[n.state];
              n: for (;;) {
                for (var a = 0; a < u.length; a++) {
                  var d = u[a];
                  if (d.data.dedent && d.data.dedentIfLineStart !== !1) {
                    var o = d.regex.exec(e);
                    if (o && o[0]) {
                      l--,
                        (d.next || d.push) && (u = t[d.next || d.push]),
                        (e = e.slice(o[0].length));
                      continue n;
                    }
                  }
                }
                break;
              }
              return l < 0 ? 0 : n.indent[l];
            };
          }
        });
      })()),
    y.exports
  );
}
export { F as r };
