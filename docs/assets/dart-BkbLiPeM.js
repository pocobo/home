import { b as $ } from './antd-BmrhB3rb.js';
import { r as I } from './index-Ck6h_6RS.js';
import { a as j } from './clike-BoeJ_n6w.js';
function E(u, s) {
  for (var r = 0; r < s.length; r++) {
    const i = s[r];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const a in i)
        if (a !== 'default' && !(a in u)) {
          const l = Object.getOwnPropertyDescriptor(i, a);
          l && Object.defineProperty(u, a, l.get ? l : { enumerable: !0, get: () => i[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: 'Module' }));
}
var O = { exports: {} };
(function (u, s) {
  (function (r) {
    r(I(), j);
  })(function (r) {
    var i =
        'this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required sealed base interface when'.split(
          ' ',
        ),
      a = 'try catch finally do else for if switch while'.split(' '),
      l = 'true false null'.split(' '),
      v = 'void bool num int double dynamic var String Null Never'.split(' ');
    function c(e) {
      for (var n = {}, t = 0; t < e.length; ++t) n[e[t]] = !0;
      return n;
    }
    function m(e) {
      (e.interpolationStack || (e.interpolationStack = [])).push(e.tokenize);
    }
    function b(e) {
      return (e.interpolationStack || (e.interpolationStack = [])).pop();
    }
    function x(e) {
      return e.interpolationStack ? e.interpolationStack.length : 0;
    }
    r.defineMIME('application/dart', {
      name: 'clike',
      keywords: c(i),
      blockKeywords: c(a),
      builtin: c(v),
      atoms: c(l),
      hooks: {
        '@': function (e) {
          return e.eatWhile(/[\w\$_\.]/), 'meta';
        },
        "'": function (e, n) {
          return k("'", e, n, !1);
        },
        '"': function (e, n) {
          return k('"', e, n, !1);
        },
        r: function (e, n) {
          var t = e.peek();
          return t == "'" || t == '"' ? k(e.next(), e, n, !0) : !1;
        },
        '}': function (e, n) {
          return x(n) > 0 ? ((n.tokenize = b(n)), null) : !1;
        },
        '/': function (e, n) {
          return e.eat('*') ? ((n.tokenize = d(1)), n.tokenize(e, n)) : !1;
        },
        token: function (e, n, t) {
          if (t == 'variable') {
            var o = RegExp('^[_$]*[A-Z][a-zA-Z0-9_$]*$', 'g');
            if (o.test(e.current())) return 'variable-2';
          }
        },
      },
    });
    function k(e, n, t, o) {
      var g = !1;
      if (n.eat(e))
        if (n.eat(e)) g = !0;
        else return 'string';
      function y(f, h) {
        for (var p = !1; !f.eol(); ) {
          if (!o && !p && f.peek() == '$') return m(h), (h.tokenize = S), 'string';
          var w = f.next();
          if (w == e && !p && (!g || f.match(e + e))) {
            h.tokenize = null;
            break;
          }
          p = !o && !p && w == '\\';
        }
        return 'string';
      }
      return (t.tokenize = y), y(n, t);
    }
    function S(e, n) {
      return e.eat('$'), e.eat('{') ? (n.tokenize = null) : (n.tokenize = _), null;
    }
    function _(e, n) {
      return e.eatWhile(/[\w_]/), (n.tokenize = b(n)), 'variable';
    }
    function d(e) {
      return function (n, t) {
        for (var o; (o = n.next()); )
          if (o == '*' && n.eat('/'))
            if (e == 1) {
              t.tokenize = null;
              break;
            } else return (t.tokenize = d(e - 1)), t.tokenize(n, t);
          else if (o == '/' && n.eat('*')) return (t.tokenize = d(e + 1)), t.tokenize(n, t);
        return 'comment';
      };
    }
    r.registerHelper('hintWords', 'application/dart', i.concat(l).concat(v)),
      r.defineMode(
        'dart',
        function (e) {
          return r.getMode(e, 'application/dart');
        },
        'clike',
      );
  });
})();
var z = O.exports;
const A = $(z),
  D = E({ __proto__: null, default: A }, [z]);
export { D as d };
