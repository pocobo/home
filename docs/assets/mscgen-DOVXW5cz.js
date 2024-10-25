import { b as x } from './antd-BmrhB3rb.js';
import { r as d } from './index-Ck6h_6RS.js';
function f(s, a) {
  for (var r = 0; r < a.length; r++) {
    const i = a[r];
    if (typeof i != 'string' && !Array.isArray(i)) {
      for (const n in i)
        if (n !== 'default' && !(n in s)) {
          const c = Object.getOwnPropertyDescriptor(i, n);
          c && Object.defineProperty(s, n, c.get ? c : { enumerable: !0, get: () => i[n] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }));
}
var g = { exports: {} };
(function (s, a) {
  (function (r) {
    r(d());
  })(function (r) {
    var i = {
      mscgen: {
        keywords: ['msc'],
        options: ['hscale', 'width', 'arcgradient', 'wordwraparcs'],
        constants: ['true', 'false', 'on', 'off'],
        attributes: [
          'label',
          'idurl',
          'id',
          'url',
          'linecolor',
          'linecolour',
          'textcolor',
          'textcolour',
          'textbgcolor',
          'textbgcolour',
          'arclinecolor',
          'arclinecolour',
          'arctextcolor',
          'arctextcolour',
          'arctextbgcolor',
          'arctextbgcolour',
          'arcskip',
        ],
        brackets: ['\\{', '\\}'],
        arcsWords: ['note', 'abox', 'rbox', 'box'],
        arcsOthers: [
          '\\|\\|\\|',
          '\\.\\.\\.',
          '---',
          '--',
          '<->',
          '==',
          '<<=>>',
          '<=>',
          '\\.\\.',
          '<<>>',
          '::',
          '<:>',
          '->',
          '=>>',
          '=>',
          '>>',
          ':>',
          '<-',
          '<<=',
          '<=',
          '<<',
          '<:',
          'x-',
          '-x',
        ],
        singlecomment: ['//', '#'],
        operators: ['='],
      },
      xu: {
        keywords: ['msc', 'xu'],
        options: [
          'hscale',
          'width',
          'arcgradient',
          'wordwraparcs',
          'wordwrapentities',
          'watermark',
        ],
        constants: ['true', 'false', 'on', 'off', 'auto'],
        attributes: [
          'label',
          'idurl',
          'id',
          'url',
          'linecolor',
          'linecolour',
          'textcolor',
          'textcolour',
          'textbgcolor',
          'textbgcolour',
          'arclinecolor',
          'arclinecolour',
          'arctextcolor',
          'arctextcolour',
          'arctextbgcolor',
          'arctextbgcolour',
          'arcskip',
          'title',
          'deactivate',
          'activate',
          'activation',
        ],
        brackets: ['\\{', '\\}'],
        arcsWords: [
          'note',
          'abox',
          'rbox',
          'box',
          'alt',
          'else',
          'opt',
          'break',
          'par',
          'seq',
          'strict',
          'neg',
          'critical',
          'ignore',
          'consider',
          'assert',
          'loop',
          'ref',
          'exc',
        ],
        arcsOthers: [
          '\\|\\|\\|',
          '\\.\\.\\.',
          '---',
          '--',
          '<->',
          '==',
          '<<=>>',
          '<=>',
          '\\.\\.',
          '<<>>',
          '::',
          '<:>',
          '->',
          '=>>',
          '=>',
          '>>',
          ':>',
          '<-',
          '<<=',
          '<=',
          '<<',
          '<:',
          'x-',
          '-x',
        ],
        singlecomment: ['//', '#'],
        operators: ['='],
      },
      msgenny: {
        keywords: null,
        options: [
          'hscale',
          'width',
          'arcgradient',
          'wordwraparcs',
          'wordwrapentities',
          'watermark',
        ],
        constants: ['true', 'false', 'on', 'off', 'auto'],
        attributes: null,
        brackets: ['\\{', '\\}'],
        arcsWords: [
          'note',
          'abox',
          'rbox',
          'box',
          'alt',
          'else',
          'opt',
          'break',
          'par',
          'seq',
          'strict',
          'neg',
          'critical',
          'ignore',
          'consider',
          'assert',
          'loop',
          'ref',
          'exc',
        ],
        arcsOthers: [
          '\\|\\|\\|',
          '\\.\\.\\.',
          '---',
          '--',
          '<->',
          '==',
          '<<=>>',
          '<=>',
          '\\.\\.',
          '<<>>',
          '::',
          '<:>',
          '->',
          '=>>',
          '=>',
          '>>',
          ':>',
          '<-',
          '<<=',
          '<=',
          '<<',
          '<:',
          'x-',
          '-x',
        ],
        singlecomment: ['//', '#'],
        operators: ['='],
      },
    };
    r.defineMode('mscgen', function (t, e) {
      var o = i[(e && e.language) || 'mscgen'];
      return {
        startState: l,
        copyState: m,
        token: b(o),
        lineComment: '#',
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
      };
    }),
      r.defineMIME('text/x-mscgen', 'mscgen'),
      r.defineMIME('text/x-xu', { name: 'mscgen', language: 'xu' }),
      r.defineMIME('text/x-msgenny', { name: 'mscgen', language: 'msgenny' });
    function n(t) {
      return new RegExp('^\\b(?:' + t.join('|') + ')\\b', 'i');
    }
    function c(t) {
      return new RegExp('^(?:' + t.join('|') + ')', 'i');
    }
    function l() {
      return { inComment: !1, inString: !1, inAttributeList: !1, inScript: !1 };
    }
    function m(t) {
      return {
        inComment: t.inComment,
        inString: t.inString,
        inAttributeList: t.inAttributeList,
        inScript: t.inScript,
      };
    }
    function b(t) {
      return function (e, o) {
        if (e.match(c(t.brackets), !0, !0)) return 'bracket';
        if (!o.inComment) {
          if (e.match(/\/\*[^\*\/]*/, !0, !0)) return (o.inComment = !0), 'comment';
          if (e.match(c(t.singlecomment), !0, !0)) return e.skipToEnd(), 'comment';
        }
        if (o.inComment)
          return e.match(/[^\*\/]*\*\//, !0, !0) ? (o.inComment = !1) : e.skipToEnd(), 'comment';
        if (!o.inString && e.match(/\"(\\\"|[^\"])*/, !0, !0)) return (o.inString = !0), 'string';
        if (o.inString)
          return e.match(/[^\"]*\"/, !0, !0) ? (o.inString = !1) : e.skipToEnd(), 'string';
        if (
          (t.keywords && e.match(n(t.keywords), !0, !0)) ||
          e.match(n(t.options), !0, !0) ||
          e.match(n(t.arcsWords), !0, !0) ||
          e.match(c(t.arcsOthers), !0, !0)
        )
          return 'keyword';
        if (t.operators && e.match(c(t.operators), !0, !0)) return 'operator';
        if (t.constants && e.match(c(t.constants), !0, !0)) return 'variable';
        if (!t.inAttributeList && t.attributes && e.match('[', !0, !0))
          return (t.inAttributeList = !0), 'bracket';
        if (t.inAttributeList) {
          if (t.attributes !== null && e.match(n(t.attributes), !0, !0)) return 'attribute';
          if (e.match(']', !0, !0)) return (t.inAttributeList = !1), 'bracket';
        }
        return e.next(), 'base';
      };
    }
  });
})();
var u = g.exports;
const k = x(u),
  y = f({ __proto__: null, default: k }, [u]);
export { y as m };
