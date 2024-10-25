import { b as s } from './antd-BmrhB3rb.js';
import { r as G } from './index-Ck6h_6RS.js';
function M(S, u) {
  for (var n = 0; n < u.length; n++) {
    const T = u[n];
    if (typeof T != 'string' && !Array.isArray(T)) {
      for (const t in T)
        if (t !== 'default' && !(t in S)) {
          const E = Object.getOwnPropertyDescriptor(T, t);
          E && Object.defineProperty(S, t, E.get ? E : { enumerable: !0, get: () => T[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(S, Symbol.toStringTag, { value: 'Module' }));
}
var C = { exports: {} };
(function (S, u) {
  (function (n) {
    n(G());
  })(function (n) {
    n.defineMode('pig', function (T, t) {
      var E = t.keywords,
        A = t.builtins,
        o = t.types,
        R = t.multiLineStrings,
        N = /[*+\-%<>=&?:\/!|]/;
      function i(e, O, r) {
        return (O.tokenize = r), r(e, O);
      }
      function f(e, O) {
        for (var r = !1, I; (I = e.next()); ) {
          if (I == '/' && r) {
            O.tokenize = L;
            break;
          }
          r = I == '*';
        }
        return 'comment';
      }
      function a(e) {
        return function (O, r) {
          for (var I = !1, l, p = !1; (l = O.next()) != null; ) {
            if (l == e && !I) {
              p = !0;
              break;
            }
            I = !I && l == '\\';
          }
          return (p || !(I || R)) && (r.tokenize = L), 'error';
        };
      }
      function L(e, O) {
        var r = e.next();
        return r == '"' || r == "'"
          ? i(e, O, a(r))
          : /[\[\]{}\(\),;\.]/.test(r)
            ? null
            : /\d/.test(r)
              ? (e.eatWhile(/[\w\.]/), 'number')
              : r == '/'
                ? e.eat('*')
                  ? i(e, O, f)
                  : (e.eatWhile(N), 'operator')
                : r == '-'
                  ? e.eat('-')
                    ? (e.skipToEnd(), 'comment')
                    : (e.eatWhile(N), 'operator')
                  : N.test(r)
                    ? (e.eatWhile(N), 'operator')
                    : (e.eatWhile(/[\w\$_]/),
                      E &&
                      E.propertyIsEnumerable(e.current().toUpperCase()) &&
                      !e.eat(')') &&
                      !e.eat('.')
                        ? 'keyword'
                        : A && A.propertyIsEnumerable(e.current().toUpperCase())
                          ? 'variable-2'
                          : o && o.propertyIsEnumerable(e.current().toUpperCase())
                            ? 'variable-3'
                            : 'variable');
      }
      return {
        startState: function () {
          return { tokenize: L, startOfLine: !0 };
        },
        token: function (e, O) {
          if (e.eatSpace()) return null;
          var r = O.tokenize(e, O);
          return r;
        },
      };
    }),
      (function () {
        function T(o) {
          for (var R = {}, N = o.split(' '), i = 0; i < N.length; ++i) R[N[i]] = !0;
          return R;
        }
        var t =
            'ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ',
          E =
            'VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP',
          A = 'BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ';
        n.defineMIME('text/x-pig', { name: 'pig', builtins: T(t), keywords: T(E), types: T(A) }),
          n.registerHelper('hintWords', 'pig', (t + A + E).split(' '));
      })();
  });
})();
var U = C.exports;
const D = s(U),
  F = M({ __proto__: null, default: D }, [U]);
export { F as p };
