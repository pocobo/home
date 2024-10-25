import { b as x } from './antd-BmrhB3rb.js';
import { r as h } from './index-Ck6h_6RS.js';
function m(a, f) {
  for (var l = 0; l < f.length; l++) {
    const i = f[l];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const t in i)
        if (t !== 'default' && !(t in a)) {
          const u = Object.getOwnPropertyDescriptor(i, t);
          u && Object.defineProperty(a, t, u.get ? u : { enumerable: !0, get: () => i[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }));
}
var O = { exports: {} };
(function (a, f) {
  (function (l) {
    l(h());
  })(function (l) {
    l.defineMode('apl', function () {
      var i = {
          '.': 'innerProduct',
          '\\': 'scan',
          '/': 'reduce',
          '⌿': 'reduce1Axis',
          '⍀': 'scan1Axis',
          '¨': 'each',
          '⍣': 'power',
        },
        t = {
          '+': ['conjugate', 'add'],
          '−': ['negate', 'subtract'],
          '×': ['signOf', 'multiply'],
          '÷': ['reciprocal', 'divide'],
          '⌈': ['ceiling', 'greaterOf'],
          '⌊': ['floor', 'lesserOf'],
          '∣': ['absolute', 'residue'],
          '⍳': ['indexGenerate', 'indexOf'],
          '?': ['roll', 'deal'],
          '⋆': ['exponentiate', 'toThePowerOf'],
          '⍟': ['naturalLog', 'logToTheBase'],
          '○': ['piTimes', 'circularFuncs'],
          '!': ['factorial', 'binomial'],
          '⌹': ['matrixInverse', 'matrixDivide'],
          '<': [null, 'lessThan'],
          '≤': [null, 'lessThanOrEqual'],
          '=': [null, 'equals'],
          '>': [null, 'greaterThan'],
          '≥': [null, 'greaterThanOrEqual'],
          '≠': [null, 'notEqual'],
          '≡': ['depth', 'match'],
          '≢': [null, 'notMatch'],
          '∈': ['enlist', 'membership'],
          '⍷': [null, 'find'],
          '∪': ['unique', 'union'],
          '∩': [null, 'intersection'],
          '∼': ['not', 'without'],
          '∨': [null, 'or'],
          '∧': [null, 'and'],
          '⍱': [null, 'nor'],
          '⍲': [null, 'nand'],
          '⍴': ['shapeOf', 'reshape'],
          ',': ['ravel', 'catenate'],
          '⍪': [null, 'firstAxisCatenate'],
          '⌽': ['reverse', 'rotate'],
          '⊖': ['axis1Reverse', 'axis1Rotate'],
          '⍉': ['transpose', null],
          '↑': ['first', 'take'],
          '↓': [null, 'drop'],
          '⊂': ['enclose', 'partitionWithAxis'],
          '⊃': ['diclose', 'pick'],
          '⌷': [null, 'index'],
          '⍋': ['gradeUp', null],
          '⍒': ['gradeDown', null],
          '⊤': ['encode', null],
          '⊥': ['decode', null],
          '⍕': ['format', 'formatByExample'],
          '⍎': ['execute', null],
          '⊣': ['stop', 'left'],
          '⊢': ['pass', 'right'],
        },
        u = /[\.\/⌿⍀¨⍣]/,
        p = /⍬/,
        c = /[\+−×÷⌈⌊∣⍳\?⋆⍟○!⌹<≤=>≥≠≡≢∈⍷∪∩∼∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⌷⍋⍒⊤⊥⍕⍎⊣⊢]/,
        d = /←/,
        v = /[⍝#].*$/,
        g = function (n) {
          var r;
          return (
            (r = !1),
            function (e) {
              return (r = e), e === n ? r === '\\' : !0;
            }
          );
        };
      return {
        startState: function () {
          return { prev: !1, func: !1, op: !1, string: !1, escape: !1 };
        },
        token: function (n, r) {
          var e, o;
          return n.eatSpace()
            ? null
            : ((e = n.next()),
              e === '"' || e === "'"
                ? (n.eatWhile(g(e)), n.next(), (r.prev = !0), 'string')
                : /[\[{\(]/.test(e)
                  ? ((r.prev = !1), null)
                  : /[\]}\)]/.test(e)
                    ? ((r.prev = !0), null)
                    : p.test(e)
                      ? ((r.prev = !1), 'niladic')
                      : /[¯\d]/.test(e)
                        ? (r.func ? ((r.func = !1), (r.prev = !1)) : (r.prev = !0),
                          n.eatWhile(/[\w\.]/),
                          'number')
                        : u.test(e)
                          ? 'operator apl-' + i[e]
                          : d.test(e)
                            ? 'apl-arrow'
                            : c.test(e)
                              ? ((o = 'apl-'),
                                t[e] != null && (r.prev ? (o += t[e][1]) : (o += t[e][0])),
                                (r.func = !0),
                                (r.prev = !1),
                                'function ' + o)
                              : v.test(e)
                                ? (n.skipToEnd(), 'comment')
                                : e === '∘' && n.peek() === '.'
                                  ? (n.next(), 'function jot-dot')
                                  : (n.eatWhile(/[\w\$_]/), (r.prev = !0), 'keyword'));
        },
      };
    }),
      l.defineMIME('text/apl', 'apl');
  });
})();
var s = O.exports;
const b = x(s),
  T = m({ __proto__: null, default: b }, [s]);
export { T as a };
