import { r as y } from './index-Ck6h_6RS.js';
var a = { exports: {} },
  v;
function c() {
  return (
    v ||
      ((v = 1),
      (function (b, f) {
        (function (e) {
          e(y());
        })(function (e) {
          e.overlayMode = function (o, u, i) {
            return {
              startState: function () {
                return {
                  base: e.startState(o),
                  overlay: e.startState(u),
                  basePos: 0,
                  baseCur: null,
                  overlayPos: 0,
                  overlayCur: null,
                  streamSeen: null,
                };
              },
              copyState: function (r) {
                return {
                  base: e.copyState(o, r.base),
                  overlay: e.copyState(u, r.overlay),
                  basePos: r.basePos,
                  baseCur: null,
                  overlayPos: r.overlayPos,
                  overlayCur: null,
                };
              },
              token: function (r, n) {
                return (
                  (r != n.streamSeen || Math.min(n.basePos, n.overlayPos) < r.start) &&
                    ((n.streamSeen = r), (n.basePos = n.overlayPos = r.start)),
                  r.start == n.basePos && ((n.baseCur = o.token(r, n.base)), (n.basePos = r.pos)),
                  r.start == n.overlayPos &&
                    ((r.pos = r.start),
                    (n.overlayCur = u.token(r, n.overlay)),
                    (n.overlayPos = r.pos)),
                  (r.pos = Math.min(n.basePos, n.overlayPos)),
                  n.overlayCur == null
                    ? n.baseCur
                    : (n.baseCur != null && n.overlay.combineTokens) ||
                        (i && n.overlay.combineTokens == null)
                      ? n.baseCur + ' ' + n.overlayCur
                      : n.overlayCur
                );
              },
              indent:
                o.indent &&
                function (r, n, l) {
                  return o.indent(r.base, n, l);
                },
              electricChars: o.electricChars,
              innerMode: function (r) {
                return { state: r.base, mode: o };
              },
              blankLine: function (r) {
                var n, l;
                return (
                  o.blankLine && (n = o.blankLine(r.base)),
                  u.blankLine && (l = u.blankLine(r.overlay)),
                  l == null ? n : i && n != null ? n + ' ' + l : l
                );
              },
            };
          };
        });
      })()),
    a.exports
  );
}
export { c as r };
