import { b as d } from './antd-BmrhB3rb.js';
import { r as m } from './index-Ck6h_6RS.js';
import { r as f } from './simple-Cawj9dol.js';
function y(o, s) {
  for (var e = 0; e < s.length; e++) {
    const r = s[e];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const t in r)
        if (t !== 'default' && !(t in o)) {
          const n = Object.getOwnPropertyDescriptor(r, t);
          n && Object.defineProperty(o, t, n.get ? n : { enumerable: !0, get: () => r[t] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }));
}
var b = { exports: {} };
(function (o, s) {
  (function (e) {
    e(m(), f());
  })(function (e) {
    var r = 'from',
      t = new RegExp('^(\\s*)\\b(' + r + ')\\b', 'i'),
      n = ['run', 'cmd', 'entrypoint', 'shell'],
      u = new RegExp('^(\\s*)(' + n.join('|') + ')(\\s+\\[)', 'i'),
      l = 'expose',
      g = new RegExp('^(\\s*)(' + l + ')(\\s+)', 'i'),
      a = [
        'arg',
        'from',
        'maintainer',
        'label',
        'env',
        'add',
        'copy',
        'volume',
        'user',
        'workdir',
        'onbuild',
        'stopsignal',
        'healthcheck',
        'shell',
      ],
      k = [r, l].concat(n).concat(a),
      x = '(' + k.join('|') + ')',
      p = new RegExp('^(\\s*)' + x + '(\\s*)(#.*)?$', 'i'),
      c = new RegExp('^(\\s*)' + x + '(\\s+)', 'i');
    e.defineSimpleMode('dockerfile', {
      start: [
        { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
        { regex: t, token: [null, 'keyword'], sol: !0, next: 'from' },
        { regex: p, token: [null, 'keyword', null, 'error'], sol: !0 },
        { regex: u, token: [null, 'keyword', null], sol: !0, next: 'array' },
        { regex: g, token: [null, 'keyword', null], sol: !0, next: 'expose' },
        { regex: c, token: [null, 'keyword', null], sol: !0, next: 'arguments' },
        { regex: /./, token: null },
      ],
      from: [
        { regex: /\s*$/, token: null, next: 'start' },
        { regex: /(\s*)(#.*)$/, token: [null, 'error'], next: 'start' },
        { regex: /(\s*\S+\s+)(as)/i, token: [null, 'keyword'], next: 'start' },
        { token: null, next: 'start' },
      ],
      single: [
        { regex: /(?:[^\\']|\\.)/, token: 'string' },
        { regex: /'/, token: 'string', pop: !0 },
      ],
      double: [
        { regex: /(?:[^\\"]|\\.)/, token: 'string' },
        { regex: /"/, token: 'string', pop: !0 },
      ],
      array: [
        { regex: /\]/, token: null, next: 'start' },
        { regex: /"(?:[^\\"]|\\.)*"?/, token: 'string' },
      ],
      expose: [
        { regex: /\d+$/, token: 'number', next: 'start' },
        { regex: /[^\d]+$/, token: null, next: 'start' },
        { regex: /\d+/, token: 'number' },
        { regex: /[^\d]+/, token: null },
        { token: null, next: 'start' },
      ],
      arguments: [
        { regex: /^\s*#.*$/, sol: !0, token: 'comment' },
        { regex: /"(?:[^\\"]|\\.)*"?$/, token: 'string', next: 'start' },
        { regex: /"/, token: 'string', push: 'double' },
        { regex: /'(?:[^\\']|\\.)*'?$/, token: 'string', next: 'start' },
        { regex: /'/, token: 'string', push: 'single' },
        { regex: /[^#"']+[\\`]$/, token: null },
        { regex: /[^#"']+$/, token: null, next: 'start' },
        { regex: /[^#"']+/, token: null },
        { token: null, next: 'start' },
      ],
      meta: { lineComment: '#' },
    }),
      e.defineMIME('text/x-dockerfile', 'dockerfile');
  });
})();
var i = b.exports;
const v = d(i),
  R = y({ __proto__: null, default: v }, [i]);
export { R as d };
