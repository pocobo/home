import { b as X } from './antd-BmrhB3rb.js';
import { r as Y } from './index-Ck6h_6RS.js';
function C(g, h) {
  for (var a = 0; a < h.length; a++) {
    const _ = h[a];
    if (typeof _ != 'string' && !Array.isArray(_)) {
      for (const p in _)
        if (p !== 'default' && !(p in g)) {
          const s = Object.getOwnPropertyDescriptor(_, p);
          s && Object.defineProperty(g, p, s.get ? s : { enumerable: !0, get: () => _[p] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(g, Symbol.toStringTag, { value: 'Module' }));
}
var ee = { exports: {} };
(function (g, h) {
  (function (a) {
    a(Y());
  })(function (a) {
    a.defineMIME('text/x-erlang', 'erlang'),
      a.defineMode('erlang', function (_) {
        var p = ['-type', '-spec', '-export_type', '-opaque'],
          s = [
            'after',
            'begin',
            'catch',
            'case',
            'cond',
            'end',
            'fun',
            'if',
            'let',
            'of',
            'query',
            'receive',
            'try',
            'when',
          ],
          A = /[\->,;]/,
          R = ['->', ';', ','],
          U = [
            'and',
            'andalso',
            'band',
            'bnot',
            'bor',
            'bsl',
            'bsr',
            'bxor',
            'div',
            'not',
            'or',
            'orelse',
            'rem',
            'xor',
          ],
          j = /[\+\-\*\/<>=\|:!]/,
          O = [
            '=',
            '+',
            '-',
            '*',
            '/',
            '>',
            '>=',
            '<',
            '=<',
            '=:=',
            '==',
            '=/=',
            '/=',
            '||',
            '<-',
            '!',
          ],
          Z = /[<\(\[\{]/,
          y = ['<<', '(', '[', '{'],
          q = /[>\)\]\}]/,
          x = ['}', ']', ')', '>>'],
          $ = [
            'is_atom',
            'is_binary',
            'is_bitstring',
            'is_boolean',
            'is_float',
            'is_function',
            'is_integer',
            'is_list',
            'is_number',
            'is_pid',
            'is_port',
            'is_record',
            'is_reference',
            'is_tuple',
            'atom',
            'binary',
            'bitstring',
            'boolean',
            'function',
            'integer',
            'list',
            'number',
            'pid',
            'port',
            'record',
            'reference',
            'tuple',
          ],
          D = [
            'abs',
            'adler32',
            'adler32_combine',
            'alive',
            'apply',
            'atom_to_binary',
            'atom_to_list',
            'binary_to_atom',
            'binary_to_existing_atom',
            'binary_to_list',
            'binary_to_term',
            'bit_size',
            'bitstring_to_list',
            'byte_size',
            'check_process_code',
            'contact_binary',
            'crc32',
            'crc32_combine',
            'date',
            'decode_packet',
            'delete_module',
            'disconnect_node',
            'element',
            'erase',
            'exit',
            'float',
            'float_to_list',
            'garbage_collect',
            'get',
            'get_keys',
            'group_leader',
            'halt',
            'hd',
            'integer_to_list',
            'internal_bif',
            'iolist_size',
            'iolist_to_binary',
            'is_alive',
            'is_atom',
            'is_binary',
            'is_bitstring',
            'is_boolean',
            'is_float',
            'is_function',
            'is_integer',
            'is_list',
            'is_number',
            'is_pid',
            'is_port',
            'is_process_alive',
            'is_record',
            'is_reference',
            'is_tuple',
            'length',
            'link',
            'list_to_atom',
            'list_to_binary',
            'list_to_bitstring',
            'list_to_existing_atom',
            'list_to_float',
            'list_to_integer',
            'list_to_pid',
            'list_to_tuple',
            'load_module',
            'make_ref',
            'module_loaded',
            'monitor_node',
            'node',
            'node_link',
            'node_unlink',
            'nodes',
            'notalive',
            'now',
            'open_port',
            'pid_to_list',
            'port_close',
            'port_command',
            'port_connect',
            'port_control',
            'pre_loaded',
            'process_flag',
            'process_info',
            'processes',
            'purge_module',
            'put',
            'register',
            'registered',
            'round',
            'self',
            'setelement',
            'size',
            'spawn',
            'spawn_link',
            'spawn_monitor',
            'spawn_opt',
            'split_binary',
            'statistics',
            'term_to_binary',
            'time',
            'throw',
            'tl',
            'trunc',
            'tuple_size',
            'tuple_to_list',
            'unlink',
            'unregister',
            'whereis',
          ],
          v = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/,
          I = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
        function Q(e, n) {
          if (n.in_string) return (n.in_string = !E(e)), o(n, e, 'string');
          if (n.in_atom) return (n.in_atom = !z(e)), o(n, e, 'atom');
          if (e.eatSpace()) return o(n, e, 'whitespace');
          if (!b(n) && e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))
            return u(e.current(), p) ? o(n, e, 'type') : o(n, e, 'attribute');
          var r = e.next();
          if (r == '%') return e.skipToEnd(), o(n, e, 'comment');
          if (r == ':') return o(n, e, 'colon');
          if (r == '?') return e.eatSpace(), e.eatWhile(v), o(n, e, 'macro');
          if (r == '#') return e.eatSpace(), e.eatWhile(v), o(n, e, 'record');
          if (r == '$')
            return e.next() == '\\' && !e.match(I) ? o(n, e, 'error') : o(n, e, 'number');
          if (r == '.') return o(n, e, 'dot');
          if (r == "'") {
            if (!(n.in_atom = !z(e))) {
              if (e.match(/\s*\/\s*[0-9]/, !1)) return e.match(/\s*\/\s*[0-9]/, !0), o(n, e, 'fun');
              if (e.match(/\s*\(/, !1) || e.match(/\s*:/, !1)) return o(n, e, 'function');
            }
            return o(n, e, 'atom');
          }
          if (r == '"') return (n.in_string = !E(e)), o(n, e, 'string');
          if (/[A-Z_Ø-ÞÀ-Ö]/.test(r)) return e.eatWhile(v), o(n, e, 'variable');
          if (/[a-z_ß-öø-ÿ]/.test(r)) {
            if ((e.eatWhile(v), e.match(/\s*\/\s*[0-9]/, !1)))
              return e.match(/\s*\/\s*[0-9]/, !0), o(n, e, 'fun');
            var t = e.current();
            return u(t, s)
              ? o(n, e, 'keyword')
              : u(t, U)
                ? o(n, e, 'operator')
                : e.match(/\s*\(/, !1)
                  ? u(t, D) && (b(n).token != ':' || b(n, 2).token == 'erlang')
                    ? o(n, e, 'builtin')
                    : u(t, $)
                      ? o(n, e, 'guard')
                      : o(n, e, 'function')
                  : F(e) == ':'
                    ? t == 'erlang'
                      ? o(n, e, 'builtin')
                      : o(n, e, 'function')
                    : u(t, ['true', 'false'])
                      ? o(n, e, 'boolean')
                      : o(n, e, 'atom');
          }
          var c = /[0-9]/,
            i = /[0-9a-zA-Z]/;
          return c.test(r)
            ? (e.eatWhile(c),
              e.eat('#')
                ? e.eatWhile(i) || e.backUp(1)
                : e.eat('.') &&
                  (e.eatWhile(c)
                    ? e.eat(/[eE]/) &&
                      (e.eat(/[-+]/) ? e.eatWhile(c) || e.backUp(2) : e.eatWhile(c) || e.backUp(1))
                    : e.backUp(1)),
              o(n, e, 'number'))
            : S(e, Z, y)
              ? o(n, e, 'open_paren')
              : S(e, q, x)
                ? o(n, e, 'close_paren')
                : W(e, A, R)
                  ? o(n, e, 'separator')
                  : W(e, j, O)
                    ? o(n, e, 'operator')
                    : o(n, e, null);
        }
        function S(e, n, r) {
          if (e.current().length == 1 && n.test(e.current())) {
            for (e.backUp(1); n.test(e.peek()); ) if ((e.next(), u(e.current(), r))) return !0;
            e.backUp(e.current().length - 1);
          }
          return !1;
        }
        function W(e, n, r) {
          if (e.current().length == 1 && n.test(e.current())) {
            for (; n.test(e.peek()); ) e.next();
            for (; 0 < e.current().length; ) {
              if (u(e.current(), r)) return !0;
              e.backUp(1);
            }
            e.next();
          }
          return !1;
        }
        function E(e) {
          return T(e, '"', '\\');
        }
        function z(e) {
          return T(e, "'", '\\');
        }
        function T(e, n, r) {
          for (; !e.eol(); ) {
            var t = e.next();
            if (t == n) return !0;
            t == r && e.next();
          }
          return !1;
        }
        function F(e) {
          var n = e.match(/^\s*([^\s%])/, !1);
          return n ? n[1] : '';
        }
        function u(e, n) {
          return -1 < n.indexOf(e);
        }
        function o(e, n, r) {
          switch ((G(e, N(r, n)), r)) {
            case 'atom':
              return 'atom';
            case 'attribute':
              return 'attribute';
            case 'boolean':
              return 'atom';
            case 'builtin':
              return 'builtin';
            case 'close_paren':
              return null;
            case 'colon':
              return null;
            case 'comment':
              return 'comment';
            case 'dot':
              return null;
            case 'error':
              return 'error';
            case 'fun':
              return 'meta';
            case 'function':
              return 'tag';
            case 'guard':
              return 'property';
            case 'keyword':
              return 'keyword';
            case 'macro':
              return 'variable-2';
            case 'number':
              return 'number';
            case 'open_paren':
              return null;
            case 'operator':
              return 'operator';
            case 'record':
              return 'bracket';
            case 'separator':
              return null;
            case 'string':
              return 'string';
            case 'type':
              return 'def';
            case 'variable':
              return 'variable';
            default:
              return null;
          }
        }
        function m(e, n, r, t) {
          return { token: e, column: n, indent: r, type: t };
        }
        function N(e, n) {
          return m(n.current(), n.column(), n.indentation(), e);
        }
        function B(e) {
          return m(e, 0, 0, e);
        }
        function b(e, n) {
          var r = e.tokenStack.length,
            t = n || 1;
          return r < t ? !1 : e.tokenStack[r - t];
        }
        function G(e, n) {
          n.type == 'comment' ||
            n.type == 'whitespace' ||
            ((e.tokenStack = H(e.tokenStack, n)), (e.tokenStack = J(e.tokenStack)));
        }
        function H(e, n) {
          var r = e.length - 1;
          return (
            0 < r && e[r].type === 'record' && n.type === 'dot'
              ? e.pop()
              : (0 < r && e[r].type === 'group' && e.pop(), e.push(n)),
            e
          );
        }
        function J(e) {
          if (!e.length) return e;
          var n = e.length - 1;
          if (e[n].type === 'dot') return [];
          if (n > 1 && e[n].type === 'fun' && e[n - 1].token === 'fun') return e.slice(0, n - 1);
          switch (e[n].token) {
            case '}':
              return f(e, { g: ['{'] });
            case ']':
              return f(e, { i: ['['] });
            case ')':
              return f(e, { i: ['('] });
            case '>>':
              return f(e, { i: ['<<'] });
            case 'end':
              return f(e, { i: ['begin', 'case', 'fun', 'if', 'receive', 'try'] });
            case ',':
              return f(e, { e: ['begin', 'try', 'when', '->', ',', '(', '[', '{', '<<'] });
            case '->':
              return f(e, { r: ['when'], m: ['try', 'if', 'case', 'receive'] });
            case ';':
              return f(e, { E: ['case', 'fun', 'if', 'receive', 'try', 'when'] });
            case 'catch':
              return f(e, { e: ['try'] });
            case 'of':
              return f(e, { e: ['case'] });
            case 'after':
              return f(e, { e: ['receive', 'try'] });
            default:
              return e;
          }
        }
        function f(e, n) {
          for (var r in n)
            for (var t = e.length - 1, c = n[r], i = t - 1; -1 < i; i--)
              if (u(e[i].token, c)) {
                var l = e.slice(0, i);
                switch (r) {
                  case 'm':
                    return l.concat(e[i]).concat(e[t]);
                  case 'r':
                    return l.concat(e[t]);
                  case 'i':
                    return l;
                  case 'g':
                    return l.concat(B('group'));
                  case 'E':
                    return l.concat(e[i]);
                  case 'e':
                    return l.concat(e[i]);
                }
              }
          return r == 'E' ? [] : e;
        }
        function K(e, n) {
          var r,
            t = _.indentUnit,
            c = L(n),
            i = b(e, 1),
            l = b(e, 2);
          return e.in_string || e.in_atom
            ? a.Pass
            : l
              ? i.token == 'when'
                ? i.column + t
                : c === 'when' && l.type === 'function'
                  ? l.indent + t
                  : c === '(' && i.token === 'fun'
                    ? i.column + 3
                    : c === 'catch' && (r = w(e, ['try']))
                      ? r.column
                      : u(c, ['end', 'after', 'of'])
                        ? ((r = w(e, ['begin', 'case', 'fun', 'if', 'receive', 'try'])),
                          r ? r.column : a.Pass)
                        : u(c, x)
                          ? ((r = w(e, y)), r ? r.column : a.Pass)
                          : u(i.token, [',', '|', '||']) || u(c, [',', '|', '||'])
                            ? ((r = M(e)), r ? r.column + r.token.length : t)
                            : i.token == '->'
                              ? u(l.token, ['receive', 'case', 'if', 'try'])
                                ? l.column + t + t
                                : l.column + t
                              : u(i.token, y)
                                ? i.column + i.token.length
                                : ((r = V(e)), d(r) ? r.column + t : 0)
              : 0;
        }
        function L(e) {
          var n = e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
          return d(n) && n.index === 0 ? n[0] : '';
        }
        function M(e) {
          var n = e.tokenStack.slice(0, -1),
            r = k(n, 'type', ['open_paren']);
          return d(n[r]) ? n[r] : !1;
        }
        function V(e) {
          var n = e.tokenStack,
            r = k(n, 'type', ['open_paren', 'separator', 'keyword']),
            t = k(n, 'type', ['operator']);
          return d(r) && d(t) && r < t ? n[r + 1] : d(r) ? n[r] : !1;
        }
        function w(e, n) {
          var r = e.tokenStack,
            t = k(r, 'token', n);
          return d(r[t]) ? r[t] : !1;
        }
        function k(e, n, r) {
          for (var t = e.length - 1; -1 < t; t--) if (u(e[t][n], r)) return t;
          return !1;
        }
        function d(e) {
          return e !== !1 && e != null;
        }
        return {
          startState: function () {
            return { tokenStack: [], in_string: !1, in_atom: !1 };
          },
          token: function (e, n) {
            return Q(e, n);
          },
          indent: function (e, n) {
            return K(e, n);
          },
          lineComment: '%',
        };
      });
  });
})();
var P = ee.exports;
const ne = X(P),
  oe = C({ __proto__: null, default: ne }, [P]);
export { oe as e };
