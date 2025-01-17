import { b as w } from './antd-BmrhB3rb.js';
import { r as y } from './index-Ck6h_6RS.js';
function _(c, s) {
  for (var b = 0; b < s.length; b++) {
    const o = s[b];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const a in o)
        if (a !== 'default' && !(a in c)) {
          const u = Object.getOwnPropertyDescriptor(o, a);
          u && Object.defineProperty(c, a, u.get ? u : { enumerable: !0, get: () => o[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: 'Module' }));
}
var C = { exports: {} };
(function (c, s) {
  (function (b) {
    b(y());
  })(function (b) {
    b.defineMode('gas', function (o, a) {
      var u = [],
        v = '',
        p = {
          '.abort': 'builtin',
          '.align': 'builtin',
          '.altmacro': 'builtin',
          '.ascii': 'builtin',
          '.asciz': 'builtin',
          '.balign': 'builtin',
          '.balignw': 'builtin',
          '.balignl': 'builtin',
          '.bundle_align_mode': 'builtin',
          '.bundle_lock': 'builtin',
          '.bundle_unlock': 'builtin',
          '.byte': 'builtin',
          '.cfi_startproc': 'builtin',
          '.comm': 'builtin',
          '.data': 'builtin',
          '.def': 'builtin',
          '.desc': 'builtin',
          '.dim': 'builtin',
          '.double': 'builtin',
          '.eject': 'builtin',
          '.else': 'builtin',
          '.elseif': 'builtin',
          '.end': 'builtin',
          '.endef': 'builtin',
          '.endfunc': 'builtin',
          '.endif': 'builtin',
          '.equ': 'builtin',
          '.equiv': 'builtin',
          '.eqv': 'builtin',
          '.err': 'builtin',
          '.error': 'builtin',
          '.exitm': 'builtin',
          '.extern': 'builtin',
          '.fail': 'builtin',
          '.file': 'builtin',
          '.fill': 'builtin',
          '.float': 'builtin',
          '.func': 'builtin',
          '.global': 'builtin',
          '.gnu_attribute': 'builtin',
          '.hidden': 'builtin',
          '.hword': 'builtin',
          '.ident': 'builtin',
          '.if': 'builtin',
          '.incbin': 'builtin',
          '.include': 'builtin',
          '.int': 'builtin',
          '.internal': 'builtin',
          '.irp': 'builtin',
          '.irpc': 'builtin',
          '.lcomm': 'builtin',
          '.lflags': 'builtin',
          '.line': 'builtin',
          '.linkonce': 'builtin',
          '.list': 'builtin',
          '.ln': 'builtin',
          '.loc': 'builtin',
          '.loc_mark_labels': 'builtin',
          '.local': 'builtin',
          '.long': 'builtin',
          '.macro': 'builtin',
          '.mri': 'builtin',
          '.noaltmacro': 'builtin',
          '.nolist': 'builtin',
          '.octa': 'builtin',
          '.offset': 'builtin',
          '.org': 'builtin',
          '.p2align': 'builtin',
          '.popsection': 'builtin',
          '.previous': 'builtin',
          '.print': 'builtin',
          '.protected': 'builtin',
          '.psize': 'builtin',
          '.purgem': 'builtin',
          '.pushsection': 'builtin',
          '.quad': 'builtin',
          '.reloc': 'builtin',
          '.rept': 'builtin',
          '.sbttl': 'builtin',
          '.scl': 'builtin',
          '.section': 'builtin',
          '.set': 'builtin',
          '.short': 'builtin',
          '.single': 'builtin',
          '.size': 'builtin',
          '.skip': 'builtin',
          '.sleb128': 'builtin',
          '.space': 'builtin',
          '.stab': 'builtin',
          '.string': 'builtin',
          '.struct': 'builtin',
          '.subsection': 'builtin',
          '.symver': 'builtin',
          '.tag': 'builtin',
          '.text': 'builtin',
          '.title': 'builtin',
          '.type': 'builtin',
          '.uleb128': 'builtin',
          '.val': 'builtin',
          '.version': 'builtin',
          '.vtable_entry': 'builtin',
          '.vtable_inherit': 'builtin',
          '.warning': 'builtin',
          '.weak': 'builtin',
          '.weakref': 'builtin',
          '.word': 'builtin',
        },
        i = {};
      function x(e) {
        (v = '#'),
          (i.al = 'variable'),
          (i.ah = 'variable'),
          (i.ax = 'variable'),
          (i.eax = 'variable-2'),
          (i.rax = 'variable-3'),
          (i.bl = 'variable'),
          (i.bh = 'variable'),
          (i.bx = 'variable'),
          (i.ebx = 'variable-2'),
          (i.rbx = 'variable-3'),
          (i.cl = 'variable'),
          (i.ch = 'variable'),
          (i.cx = 'variable'),
          (i.ecx = 'variable-2'),
          (i.rcx = 'variable-3'),
          (i.dl = 'variable'),
          (i.dh = 'variable'),
          (i.dx = 'variable'),
          (i.edx = 'variable-2'),
          (i.rdx = 'variable-3'),
          (i.si = 'variable'),
          (i.esi = 'variable-2'),
          (i.rsi = 'variable-3'),
          (i.di = 'variable'),
          (i.edi = 'variable-2'),
          (i.rdi = 'variable-3'),
          (i.sp = 'variable'),
          (i.esp = 'variable-2'),
          (i.rsp = 'variable-3'),
          (i.bp = 'variable'),
          (i.ebp = 'variable-2'),
          (i.rbp = 'variable-3'),
          (i.ip = 'variable'),
          (i.eip = 'variable-2'),
          (i.rip = 'variable-3'),
          (i.cs = 'keyword'),
          (i.ds = 'keyword'),
          (i.ss = 'keyword'),
          (i.es = 'keyword'),
          (i.fs = 'keyword'),
          (i.gs = 'keyword');
      }
      function k(e) {
        (v = '@'),
          (p.syntax = 'builtin'),
          (i.r0 = 'variable'),
          (i.r1 = 'variable'),
          (i.r2 = 'variable'),
          (i.r3 = 'variable'),
          (i.r4 = 'variable'),
          (i.r5 = 'variable'),
          (i.r6 = 'variable'),
          (i.r7 = 'variable'),
          (i.r8 = 'variable'),
          (i.r9 = 'variable'),
          (i.r10 = 'variable'),
          (i.r11 = 'variable'),
          (i.r12 = 'variable'),
          (i.sp = 'variable-2'),
          (i.lr = 'variable-2'),
          (i.pc = 'variable-2'),
          (i.r13 = i.sp),
          (i.r14 = i.lr),
          (i.r15 = i.pc),
          u.push(function (t, l) {
            if (t === '#') return l.eatWhile(/\w/), 'number';
          });
      }
      var f = (a.architecture || 'x86').toLowerCase();
      f === 'x86' ? x() : (f === 'arm' || f === 'armv6') && k();
      function h(e, t) {
        for (var l = !1, n; (n = e.next()) != null; ) {
          if (n === t && !l) return !1;
          l = !l && n === '\\';
        }
        return l;
      }
      function g(e, t) {
        for (var l = !1, n; (n = e.next()) != null; ) {
          if (n === '/' && l) {
            t.tokenize = null;
            break;
          }
          l = n === '*';
        }
        return 'comment';
      }
      return {
        startState: function () {
          return { tokenize: null };
        },
        token: function (e, t) {
          if (t.tokenize) return t.tokenize(e, t);
          if (e.eatSpace()) return null;
          var l,
            n,
            r = e.next();
          if (r === '/' && e.eat('*')) return (t.tokenize = g), g(e, t);
          if (r === v) return e.skipToEnd(), 'comment';
          if (r === '"') return h(e, '"'), 'string';
          if (r === '.')
            return e.eatWhile(/\w/), (n = e.current().toLowerCase()), (l = p[n]), l || null;
          if (r === '=') return e.eatWhile(/\w/), 'tag';
          if (r === '{' || r === '}') return 'bracket';
          if (/\d/.test(r))
            return r === '0' && e.eat('x')
              ? (e.eatWhile(/[0-9a-fA-F]/), 'number')
              : (e.eatWhile(/\d/), 'number');
          if (/\w/.test(r))
            return (
              e.eatWhile(/\w/),
              e.eat(':') ? 'tag' : ((n = e.current().toLowerCase()), (l = i[n]), l || null)
            );
          for (var d = 0; d < u.length; d++) if (((l = u[d](r, e, t)), l)) return l;
        },
        lineComment: v,
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
      };
    });
  });
})();
var m = C.exports;
const z = w(m),
  W = _({ __proto__: null, default: z }, [m]);
export { W as g };
