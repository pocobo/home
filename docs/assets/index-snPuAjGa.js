var He = Object.defineProperty,
  Xe = Object.defineProperties;
var Ye = Object.getOwnPropertyDescriptors;
var se = Object.getOwnPropertySymbols;
var Re = Object.prototype.hasOwnProperty,
  ze = Object.prototype.propertyIsEnumerable;
var ie = (e, a, l) =>
    a in e ? He(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : (e[a] = l),
  O = (e, a) => {
    for (var l in a || (a = {})) Re.call(a, l) && ie(e, l, a[l]);
    if (se) for (var l of se(a)) ze.call(a, l) && ie(e, l, a[l]);
    return e;
  },
  ue = (e, a) => Xe(e, Ye(a));
var oe = (e, a, l) =>
  new Promise((S, k) => {
    var v = (K) => {
        try {
          y(l.next(K));
        } catch (_) {
          k(_);
        }
      },
      s = (K) => {
        try {
          y(l.throw(K));
        } catch (_) {
          k(_);
        }
      },
      y = (K) => (K.done ? S(K.value) : Promise.resolve(K.value).then(v, s));
    y((l = l.apply(e, a)).next());
  });
import {
  ap as Ge,
  d as _e,
  f as Ee,
  ah as Je,
  c as M,
  w as $,
  Z as m,
  _ as P,
  u,
  ae as qe,
  ab as I,
  a8 as W,
  a9 as j,
  G as de,
  a0 as he,
  a1 as fe,
  k as L,
  F as z,
  aa as We,
  ac as Te,
  B as Ze,
  l as ye,
  r as pe,
  J as R,
  h as V,
  o as Qe,
  m as ke,
  A as ge,
  i as et,
} from './vue-BjERyvPm.js';
import {
  aA as tt,
  h as nt,
  u as at,
  O as lt,
  z as Q,
  aB as Se,
  I as ct,
  aC as rt,
  a8 as st,
  aD as it,
  R as Ke,
  U as ut,
  s as xe,
} from '../index.js';
import {
  aZ as ot,
  a_ as dt,
  a$ as ht,
  x as ft,
  b0 as yt,
  b1 as pt,
  D as kt,
  l as gt,
  f as ee,
  b2 as St,
  o as Kt,
  e as Z,
  G as xt,
  an as Ct,
  aI as Ce,
  ae as At,
  v as Lt,
  ai as Ae,
} from './antd-BmrhB3rb.js';
import { u as vt } from './useContextMenu-1El4DIYg.js';
function te(e, a) {
  return a
    ? typeof a == 'string'
      ? ` ${e}--${a}`
      : Array.isArray(a)
        ? a.reduce((l, S) => l + te(e, S), '')
        : Object.keys(a).reduce((l, S) => l + (a[S] ? te(e, S) : ''), '')
    : '';
}
function bt(e) {
  return (a, l) => (
    a && typeof a != 'string' && ((l = a), (a = '')), (a = a ? `${e}__${a}` : e), `${a}${te(a, l)}`
  );
}
function Be(e) {
  return [bt(`${tt}-${e}`)];
}
const Le = Symbol(),
  ve = Symbol();
function _t(e, a) {
  if (!dt(e) || e[ve]) return e;
  const { values: l, required: S, default: k, type: v, validator: s } = e,
    y =
      l || s
        ? (K) => {
            let _ = !1,
              b = [];
            if (
              (l && ((b = [...l, k]), _ || (_ = b.includes(K))),
              s && (_ || (_ = s(K))),
              !_ && b.length > 0)
            ) {
              const h = [...new Set(b)].map((d) => JSON.stringify(d)).join(', ');
              Ge(
                `Invalid prop: validation failed${a ? ` for prop "${a}"` : ''}. Expected one of [${h}], got value ${JSON.stringify(K)}.`,
              );
            }
            return _;
          }
        : void 0;
  return {
    type: typeof v == 'object' && Object.getOwnPropertySymbols(v).includes(Le) && v ? v[Le] : v,
    required: !!S,
    default: k,
    validator: y,
    [ve]: !0,
  };
}
const Et = (e) => ot(Object.entries(e).map(([a, l]) => [a, _t(l, a)]));
var T = ((e) => (
  (e[(e.SELECT_ALL = 0)] = 'SELECT_ALL'),
  (e[(e.UN_SELECT_ALL = 1)] = 'UN_SELECT_ALL'),
  (e[(e.EXPAND_ALL = 2)] = 'EXPAND_ALL'),
  (e[(e.UN_EXPAND_ALL = 3)] = 'UN_EXPAND_ALL'),
  (e[(e.CHECK_STRICTLY = 4)] = 'CHECK_STRICTLY'),
  (e[(e.CHECK_UN_STRICTLY = 5)] = 'CHECK_UN_STRICTLY'),
  e
))(T || {});
const Tt = [
    'update:expandedKeys',
    'update:selectedKeys',
    'update:value',
    'change',
    'check',
    'update:searchValue',
  ],
  Bt = Et({
    value: { type: [Object, Array] },
    renderIcon: { type: Function },
    helpMessage: { type: [String, Array], default: '' },
    title: { type: String, default: '' },
    toolbar: Boolean,
    search: Boolean,
    searchValue: { type: String, default: '' },
    checkStrictly: Boolean,
    clickRowToExpand: { type: Boolean, default: !1 },
    checkable: Boolean,
    defaultExpandLevel: { type: [String, Number], default: '' },
    defaultExpandAll: Boolean,
    fieldNames: { type: Object },
    treeData: { type: Array },
    actionList: { type: Array, default: () => [] },
    expandedKeys: { type: Array, default: () => [] },
    selectedKeys: { type: Array, default: () => [] },
    checkedKeys: { type: [Array, Object], default: () => [] },
    beforeRightClick: { type: Function, default: void 0 },
    rightMenuList: { type: Array },
    filterFn: { type: Function, default: void 0 },
    highlight: { type: [Boolean, String], default: !1 },
    expandOnSearch: Boolean,
    checkOnSearch: Boolean,
    selectedOnSearch: Boolean,
    loading: { type: Boolean, default: !1 },
    treeWrapperClassName: String,
  }),
  Dt = { key: 2, class: 'flex items-center flex-1 cursor-pointer justify-self-stretch' },
  wt = _e({
    __name: 'TreeHeader',
    props: {
      helpMessage: { type: [String, Array], default: '' },
      title: { type: String, default: '' },
      toolbar: { type: Boolean, default: !1 },
      checkable: { type: Boolean, default: !1 },
      search: { type: Boolean, default: !1 },
      searchText: { type: String, default: '' },
      checkAll: { type: Function, default: void 0 },
      expandAll: { type: Function, default: void 0 },
    },
    emits: ['strictly-change', 'search'],
    setup(e, { emit: a }) {
      const l = Ee(''),
        [S] = Be('tree-header'),
        k = e,
        v = a,
        s = Je(),
        { t: y } = nt(),
        K = M(() => ['mr-1', 'w-full', { 'ml-5': s.headerTitle || k.title }]),
        _ = M(() => {
          const { checkable: t } = k,
            r = [
              { label: y('component.tree.expandAll'), value: T.EXPAND_ALL },
              { label: y('component.tree.unExpandAll'), value: T.UN_EXPAND_ALL, divider: t },
            ];
          return t
            ? [
                { label: y('component.tree.selectAll'), value: T.SELECT_ALL },
                { label: y('component.tree.unSelectAll'), value: T.UN_SELECT_ALL, divider: t },
                ...r,
                { label: y('component.tree.checkStrictly'), value: T.CHECK_STRICTLY },
                { label: y('component.tree.checkUnStrictly'), value: T.CHECK_UN_STRICTLY },
              ]
            : r;
        }),
        b = ({ key: t }) => {
          var r, i, o, c;
          switch (t) {
            case T.SELECT_ALL:
              (r = k.checkAll) == null || r.call(k, !0);
              break;
            case T.UN_SELECT_ALL:
              (i = k.checkAll) == null || i.call(k, !1);
              break;
            case T.EXPAND_ALL:
              (o = k.expandAll) == null || o.call(k, !0);
              break;
            case T.UN_EXPAND_ALL:
              (c = k.expandAll) == null || c.call(k, !1);
              break;
            case T.CHECK_STRICTLY:
              v('strictly-change', !1);
              break;
            case T.CHECK_UN_STRICTLY:
              v('strictly-change', !0);
              break;
          }
        };
      function h(t) {
        v('search', t);
      }
      const d = at(h, 200);
      return (
        $(
          () => l.value,
          (t) => {
            d(t);
          },
        ),
        $(
          () => k.searchText,
          (t) => {
            t !== l.value && (l.value = t);
          },
        ),
        (t, r) => (
          m(),
          P(
            'div',
            { class: fe([u(S)(), 'flex mb-1 px-2 py-1.5 items-center']) },
            [
              u(s).headerTitle ? qe(t.$slots, 'headerTitle', { key: 0 }) : I('', !0),
              !u(s).headerTitle && t.title
                ? (m(),
                  W(
                    u(lt),
                    { key: 1, helpMessage: t.helpMessage },
                    { default: j(() => [de(he(t.title), 1)]), _: 1 },
                    8,
                    ['helpMessage'],
                  ))
                : I('', !0),
              t.search || t.toolbar
                ? (m(),
                  P('div', Dt, [
                    t.search
                      ? (m(),
                        P(
                          'div',
                          { key: 0, class: fe(K.value) },
                          [
                            L(
                              u(ht),
                              {
                                placeholder: u(y)('common.searchText'),
                                size: 'small',
                                allowClear: '',
                                value: l.value,
                                'onUpdate:value': r[0] || (r[0] = (i) => (l.value = i)),
                              },
                              null,
                              8,
                              ['placeholder', 'value'],
                            ),
                          ],
                          2,
                        ))
                      : I('', !0),
                    t.toolbar
                      ? (m(),
                        W(
                          u(kt),
                          { key: 1, onClick: r[1] || (r[1] = Ze(() => {}, ['prevent'])) },
                          {
                            overlay: j(() => [
                              L(
                                u(ft),
                                { onClick: b },
                                {
                                  default: j(() => [
                                    (m(!0),
                                    P(
                                      z,
                                      null,
                                      We(
                                        _.value,
                                        (i) => (
                                          m(),
                                          P(
                                            z,
                                            { key: i.value },
                                            [
                                              L(
                                                u(yt),
                                                Te({ ref_for: !0 }, { key: i.value }),
                                                { default: j(() => [de(he(i.label), 1)]), _: 2 },
                                                1040,
                                              ),
                                              i.divider ? (m(), W(u(pt), { key: 0 })) : I('', !0),
                                            ],
                                            64,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            default: j(() => [L(Q, { icon: 'ion:ellipsis-vertical' })]),
                            _: 1,
                          },
                        ))
                      : I('', !0),
                  ]))
                : I('', !0),
            ],
            2,
          )
        )
      );
    },
  }),
  Ft = ({ icon: e }) => (e ? (gt(e) ? ye(Q, { icon: e, class: 'mr-2' }) : ye(Q)) : null);
function Nt(e, a) {
  function l(h) {
    const d = [],
      t = h || u(e),
      { key: r, children: i } = u(a);
    if (!i || !r) return d;
    for (let o = 0; o < t.length; o++) {
      const c = t[o];
      d.push(c[r]);
      const p = c[i];
      p && p.length && d.push(...l(p));
    }
    return d;
  }
  function S(h) {
    const d = [],
      t = h || u(e),
      { key: r, children: i } = u(a);
    if (!i || !r) return d;
    for (let o = 0; o < t.length; o++) {
      const c = t[o];
      c.disabled !== !0 && c.selectable !== !1 && d.push(c[r]);
      const p = c[i];
      p && p.length && d.push(...S(p));
    }
    return d;
  }
  function k(h, d) {
    const t = [],
      r = d || u(e),
      { key: i, children: o } = u(a);
    if (!o || !i) return t;
    for (let c = 0; c < r.length; c++) {
      const p = r[c],
        E = p[o];
      h === p[i]
        ? (t.push(p[i]), E && E.length && t.push(...l(E)))
        : E && E.length && t.push(...k(h, E));
    }
    return t;
  }
  function v(h, d, t) {
    if (!h) return;
    const r = t || u(e),
      { key: i, children: o } = u(a);
    if (!(!o || !i))
      for (let c = 0; c < r.length; c++) {
        const p = r[c],
          E = p[o];
        if (p[i] === h) {
          r[c] = O(O({}, r[c]), d);
          break;
        } else E && E.length && v(h, d, p[o]);
      }
  }
  function s(h = 1, d, t = 1) {
    if (!h) return [];
    const r = [],
      i = d || u(e) || [];
    for (let o = 0; o < i.length; o++) {
      const c = i[o],
        { key: p, children: E } = u(a),
        G = p ? c[p] : '',
        U = E ? c[E] : [];
      r.push(G), U && U.length && t < h && ((t += 1), r.push(...s(h, U, t)));
    }
    return r;
  }
  function y({ parentKey: h = null, node: d, push: t = 'push' }) {
    const r = ee(u(e));
    if (!h) {
      r[t](d), (e.value = r);
      return;
    }
    const { key: i, children: o } = u(a);
    !o ||
      !i ||
      (Se(r, (c) => {
        if (c[i] === h) return (c[o] = c[o] || []), c[o][t](d), !0;
      }),
      (e.value = r));
  }
  function K({ parentKey: h = null, list: d, push: t = 'push' }) {
    const r = ee(u(e));
    if (!(!d || d.length < 1))
      if (h) {
        const { key: i, children: o } = u(a);
        if (!o || !i) return;
        Se(r, (c) => {
          if (c[i] === h) {
            c[o] = c[o] || [];
            for (let p = 0; p < d.length; p++) c[o][t](d[p]);
            return (e.value = r), !0;
          }
        });
      } else {
        for (let i = 0; i < d.length; i++) r[t](d[i]);
        e.value = r;
        return;
      }
  }
  function _(h, d) {
    if (!h) return;
    const t = d || u(e),
      { key: r, children: i } = u(a);
    if (!(!i || !r))
      for (let o = 0; o < t.length; o++) {
        const c = t[o],
          p = c[i];
        if (c[r] === h) {
          t.splice(o, 1);
          break;
        } else p && p.length && _(h, c[i]);
      }
  }
  function b(h, d, t) {
    if (!h && h !== 0) return null;
    const r = d || u(e),
      { key: i, children: o } = u(a);
    return i
      ? (r.forEach((c) => {
          if ((t != null && t.key) || (t == null ? void 0 : t.key) === 0) return t;
          if (c[i] === h) {
            t = c;
            return;
          }
          c[o] && c[o].length && (t = b(h, c[o], t));
        }),
        t || null)
      : null;
  }
  return {
    deleteNodeByKey: _,
    insertNodeByKey: y,
    insertNodesByKey: K,
    filterByLevel: s,
    updateNodeByKey: v,
    getAllKeys: l,
    getChildrenKeys: k,
    getEnabledKeys: S,
    getSelectedNode: b,
  };
}
function be(e) {
  return (
    typeof e == 'function' || (Object.prototype.toString.call(e) === '[object Object]' && !et(e))
  );
}
const Ut = _e({
  name: 'BasicTree',
  inheritAttrs: !1,
  props: Bt,
  emits: Tt,
  setup(e, { attrs: a, slots: l, emit: S, expose: k }) {
    const [v] = Be('tree'),
      s = pe({
        checkStrictly: e.checkStrictly,
        expandedKeys: e.expandedKeys || [],
        selectedKeys: e.selectedKeys || [],
        checkedKeys: e.checkedKeys || [],
      }),
      y = pe({ startSearch: !1, searchText: '', searchData: [] }),
      K = Ee([]),
      [_] = vt(),
      b = M(() => {
        const { fieldNames: n } = e;
        return O({ children: 'children', title: 'title', key: 'key' }, n);
      }),
      h = M(() => {
        let n = ue(O(O({ blockNode: !0 }, a), e), {
          expandedKeys: s.expandedKeys,
          selectedKeys: s.selectedKeys,
          checkedKeys: s.checkedKeys,
          checkStrictly: s.checkStrictly,
          fieldNames: u(b),
          'onUpdate:expandedKeys': (f) => {
            (s.expandedKeys = f), S('update:expandedKeys', f);
          },
          'onUpdate:selectedKeys': (f) => {
            (s.selectedKeys = f), S('update:selectedKeys', f);
          },
          onCheck: (f, x) => {
            let g = R(s.checkedKeys);
            if (ct(g) && y.startSearch) {
              const A = x.node.eventKey;
              (g = St(g, G(A))), x.checked && g.push(A), (s.checkedKeys = g);
            } else s.checkedKeys = f;
            const C = R(s.checkedKeys);
            S('update:value', C), S('check', C, x);
          },
          onRightClick: Fe,
        });
        return Kt(n, 'treeData', 'class');
      }),
      d = M(() => (y.startSearch ? y.searchData : u(K))),
      t = M(() => !d.value || d.value.length === 0),
      {
        deleteNodeByKey: r,
        insertNodeByKey: i,
        insertNodesByKey: o,
        filterByLevel: c,
        updateNodeByKey: p,
        getAllKeys: E,
        getChildrenKeys: G,
        getEnabledKeys: U,
        getSelectedNode: De,
      } = Nt(K, b);
    function we(n, f) {
      return !f && e.renderIcon && Z(e.renderIcon) ? e.renderIcon(n) : f;
    }
    function Fe(x) {
      return oe(this, arguments, function* ({ event: n, node: f }) {
        var F;
        const { rightMenuList: g = [], beforeRightClick: C } = e;
        let A = { event: n, items: [] };
        if (C && Z(C)) {
          let B = yield C(f, n);
          Array.isArray(B) ? (A.items = B) : Object.assign(A, B);
        } else A.items = g;
        (F = A.items) != null && F.length && ((A.items = A.items.filter((B) => !B.hidden)), _(A));
      });
    }
    function Ne() {
      return u(K);
    }
    function H(n) {
      s.expandedKeys = n;
    }
    function me() {
      return s.expandedKeys;
    }
    function ne(n) {
      s.selectedKeys = n;
    }
    function Me() {
      return s.selectedKeys;
    }
    function ae(n) {
      s.checkedKeys = n;
    }
    function Oe() {
      return s.checkedKeys;
    }
    function le(n) {
      s.checkedKeys = n ? U() : [];
    }
    function J(n) {
      s.expandedKeys = n ? E() : [];
    }
    function Ie(n) {
      s.checkStrictly = n;
    }
    $(
      () => e.searchValue,
      (n) => {
        n !== y.searchText && (y.searchText = n);
      },
      { immediate: !0 },
    ),
      $(
        () => e.treeData,
        (n) => {
          n && q(y.searchText);
        },
      );
    function q(n) {
      if ((n !== y.searchText && (y.searchText = n), S('update:searchValue', n), !n)) {
        y.startSearch = !1;
        return;
      }
      const {
        filterFn: f,
        checkable: x,
        expandOnSearch: g,
        checkOnSearch: C,
        selectedOnSearch: A,
      } = u(e);
      y.startSearch = !0;
      const { title: F, key: B } = u(b),
        w = [];
      if (
        ((y.searchData = rt(
          u(K),
          (D) => {
            var X, Y;
            const N = f
              ? f(n, D, u(b))
              : (Y = (X = D[F]) == null ? void 0 : X.includes(n)) != null
                ? Y
                : !1;
            return N && w.push(D[B]), N;
          },
          u(b),
        )),
        g)
      ) {
        const D = st(y.searchData).map((N) => N[B]);
        D && D.length && H(D);
      }
      C && x && w.length && ae(w), A && w.length && ne(w);
    }
    function $e(n, f) {
      if (!(!e.clickRowToExpand || !f || f.length === 0))
        if (!s.expandedKeys.includes(n)) H([...s.expandedKeys, n]);
        else {
          const x = [...s.expandedKeys],
            g = x.findIndex((C) => C === n);
          g !== -1 && x.splice(g, 1), H(x);
        }
    }
    V(() => {
      K.value = e.treeData;
    }),
      Qe(() => {
        const n = parseInt(e.defaultExpandLevel);
        n > 0 ? (s.expandedKeys = c(n)) : e.defaultExpandAll && J(!0);
      }),
      V(() => {
        s.expandedKeys = e.expandedKeys;
      }),
      V(() => {
        s.selectedKeys = e.selectedKeys;
      }),
      V(() => {
        s.checkedKeys = e.checkedKeys;
      }),
      $(
        () => e.value,
        () => {
          s.checkedKeys = R(e.value || []);
        },
        { immediate: !0 },
      ),
      $(
        () => s.checkedKeys,
        () => {
          const n = R(s.checkedKeys);
          S('update:value', n), S('change', n);
        },
      ),
      V(() => {
        s.checkStrictly = e.checkStrictly;
      });
    const Ue = {
      getTreeData: Ne,
      setExpandedKeys: H,
      getExpandedKeys: me,
      setSelectedKeys: ne,
      getSelectedKeys: Me,
      setCheckedKeys: ae,
      getCheckedKeys: Oe,
      insertNodeByKey: i,
      insertNodesByKey: o,
      deleteNodeByKey: r,
      updateNodeByKey: p,
      getSelectedNode: De,
      checkAll: le,
      expandAll: J,
      filterByLevel: (n) => {
        s.expandedKeys = c(n);
      },
      setSearchValue: (n) => {
        q(n);
      },
      getSearchValue: () => y.searchText,
    };
    function Pe(n) {
      const { actionList: f } = e;
      if (!(!f || f.length === 0))
        return f.map((x, g) => {
          var A;
          let C = !0;
          return (
            Z(x.show)
              ? (C = (A = x.show) == null ? void 0 : A.call(x, n))
              : Ae(x.show) && (C = x.show),
            C ? L('span', { key: g, class: v('action') }, [x.render(n)]) : null
          );
        });
    }
    const je = M(() => {
      const n = ee(d.value);
      return (
        it(n, (f, x) => {
          var re;
          const g = y.searchText,
            { highlight: C } = u(e),
            { title: A, key: F, children: B } = u(b),
            w = we(f, f.icon),
            D = At(f, A),
            N = g ? D.indexOf(g) : -1,
            X = y.startSearch && !Lt(g) && C && N !== -1,
            Y = `color: ${Ae(C) ? '#f50' : C}`,
            Ve = X
              ? L('span', { class: (re = u(h)) != null && re.blockNode ? `${v('content')}` : '' }, [
                  L('span', null, [D.substr(0, N)]),
                  L('span', { style: Y }, [g]),
                  L('span', null, [D.substr(N + g.length)]),
                ])
              : D,
            ce = w
              ? L(Ft, { icon: w }, null)
              : l.icon
                ? L('span', { class: 'mr-2' }, [xe(l, 'icon')])
                : null;
          return (
            (f[A] = L('span', { class: `${v('title')}`, onClick: $e.bind(null, f[F], f[B]) }, [
              l != null && l.title
                ? L(z, null, [ce, xe(l, 'title', f)])
                : L(z, null, [ce, Ve, L('span', { class: v('actions') }, [Pe(f)])]),
            ])),
            f
          );
        }),
        n
      );
    });
    return (
      k(Ue),
      () => {
        let n, f;
        const { title: x, helpMessage: g, toolbar: C, search: A, checkable: F } = e,
          B = x || C || A || l.headerTitle,
          w = { height: 'calc(100% - 38px)' };
        return L('div', { class: [v(), 'h-full', a.class] }, [
          B &&
            L(
              wt,
              {
                checkable: F,
                checkAll: le,
                expandAll: J,
                title: x,
                search: A,
                toolbar: C,
                helpMessage: g,
                onStrictlyChange: Ie,
                onSearch: q,
                searchText: y.searchText,
              },
              be((n = Ke(l))) ? n : { default: () => [n] },
            ),
          L(
            xt,
            {
              wrapperClassName: u(e.treeWrapperClassName),
              spinning: u(e.loading),
              tip: '加载中...',
            },
            {
              default: () => [
                ke(
                  L(
                    ut,
                    { style: w },
                    {
                      default: () => [
                        L(
                          Ct,
                          Te(u(h), { showIcon: !1, treeData: je.value }),
                          be((f = Ke(l, ['title']))) ? f : { default: () => [f] },
                        ),
                      ],
                    },
                  ),
                  [[ge, !u(t)]],
                ),
                ke(L(Ce, { image: Ce.PRESENTED_IMAGE_SIMPLE, class: '!mt-4' }, null), [[ge, u(t)]]),
              ],
            },
          ),
        ]);
      }
    );
  },
});
export { Ut as _ };
