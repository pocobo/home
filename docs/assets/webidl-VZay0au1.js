import { b as T } from './antd-BmrhB3rb.js';
import { r as _ } from './index-Ck6h_6RS.js';
function U(f, c) {
  for (var n = 0; n < c.length; n++) {
    const t = c[n];
    if (typeof t != 'string' && !Array.isArray(t)) {
      for (const i in t)
        if (i !== 'default' && !(i in f)) {
          const l = Object.getOwnPropertyDescriptor(t, i);
          l && Object.defineProperty(f, i, l.get ? l : { enumerable: !0, get: () => t[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: 'Module' }));
}
var z = { exports: {} };
(function (f, c) {
  (function (n) {
    n(_());
  })(function (n) {
    function t(e) {
      return new RegExp('^((' + e.join(')|(') + '))\\b');
    }
    var i = [
        'Clamp',
        'Constructor',
        'EnforceRange',
        'Exposed',
        'ImplicitThis',
        'Global',
        'PrimaryGlobal',
        'LegacyArrayClass',
        'LegacyUnenumerableNamedProperties',
        'LenientThis',
        'NamedConstructor',
        'NewObject',
        'NoInterfaceObject',
        'OverrideBuiltins',
        'PutForwards',
        'Replaceable',
        'SameObject',
        'TreatNonObjectAsNull',
        'TreatNullAs',
        'EmptyString',
        'Unforgeable',
        'Unscopeable',
      ],
      l = t(i),
      u = [
        'unsigned',
        'short',
        'long',
        'unrestricted',
        'float',
        'double',
        'boolean',
        'byte',
        'octet',
        'Promise',
        'ArrayBuffer',
        'DataView',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Uint8Array',
        'Uint16Array',
        'Uint32Array',
        'Uint8ClampedArray',
        'Float32Array',
        'Float64Array',
        'ByteString',
        'DOMString',
        'USVString',
        'sequence',
        'object',
        'RegExp',
        'Error',
        'DOMException',
        'FrozenArray',
        'any',
        'void',
      ],
      p = t(u),
      s = [
        'attribute',
        'callback',
        'const',
        'deleter',
        'dictionary',
        'enum',
        'getter',
        'implements',
        'inherit',
        'interface',
        'iterable',
        'legacycaller',
        'maplike',
        'partial',
        'required',
        'serializer',
        'setlike',
        'setter',
        'static',
        'stringifier',
        'typedef',
        'optional',
        'readonly',
        'or',
      ],
      b = t(s),
      d = ['true', 'false', 'Infinity', 'NaN', 'null'],
      v = t(d);
    n.registerHelper('hintWords', 'webidl', i.concat(u).concat(s).concat(d));
    var g = ['callback', 'dictionary', 'enum', 'interface'],
      A = t(g),
      h = ['typedef'],
      w = t(h),
      D = /^[:<=>?]/,
      E = /^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,
      k = /^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,
      m = /^_?[A-Za-z][0-9A-Z_a-z-]*/,
      x = /^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,
      O = /^"[^"]*"/,
      C = /^\/\*.*?\*\//,
      j = /^\/\*.*/,
      S = /^.*?\*\//;
    function N(e, r) {
      if (e.eatSpace()) return null;
      if (r.inComment)
        return e.match(S) ? ((r.inComment = !1), 'comment') : (e.skipToEnd(), 'comment');
      if (e.match('//')) return e.skipToEnd(), 'comment';
      if (e.match(C)) return 'comment';
      if (e.match(j)) return (r.inComment = !0), 'comment';
      if (e.match(/^-?[0-9\.]/, !1) && (e.match(E) || e.match(k))) return 'number';
      if (e.match(O)) return 'string';
      if (r.startDef && e.match(m)) return 'def';
      if (r.endDef && e.match(x)) return (r.endDef = !1), 'def';
      if (e.match(b)) return 'keyword';
      if (e.match(p)) {
        var a = r.lastToken,
          o = (e.match(/^\s*(.+?)\b/, !1) || [])[1];
        return a === ':' || a === 'implements' || o === 'implements' || o === '='
          ? 'builtin'
          : 'variable-3';
      }
      return e.match(l)
        ? 'builtin'
        : e.match(v)
          ? 'atom'
          : e.match(m)
            ? 'variable'
            : e.match(D)
              ? 'operator'
              : (e.next(), null);
    }
    n.defineMode('webidl', function () {
      return {
        startState: function () {
          return { inComment: !1, lastToken: '', startDef: !1, endDef: !1 };
        },
        token: function (e, r) {
          var a = N(e, r);
          if (a) {
            var o = e.current();
            (r.lastToken = o),
              a === 'keyword'
                ? ((r.startDef = A.test(o)), (r.endDef = r.endDef || w.test(o)))
                : (r.startDef = !1);
          }
          return a;
        },
      };
    }),
      n.defineMIME('text/x-webidl', 'webidl');
  });
})();
var y = z.exports;
const I = T(y),
  R = U({ __proto__: null, default: I }, [y]);
export { R as w };
