var Yt = Object.defineProperty,
  Vt = Object.defineProperties;
var Xt = Object.getOwnPropertyDescriptors;
var tt = Object.getOwnPropertySymbols;
var Zt = Object.prototype.hasOwnProperty,
  Qt = Object.prototype.propertyIsEnumerable;
var nt = (n, a, t) =>
    a in n ? Yt(n, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[a] = t),
  k = (n, a) => {
    for (var t in a || (a = {})) Zt.call(a, t) && nt(n, t, a[t]);
    if (tt) for (var t of tt(a)) Qt.call(a, t) && nt(n, t, a[t]);
    return n;
  },
  ie = (n, a) => Vt(n, Xt(a));
var oe = (n, a, t) =>
  new Promise((s, o) => {
    var c = (i) => {
        try {
          u(t.next(i));
        } catch (l) {
          o(l);
        }
      },
      f = (i) => {
        try {
          u(t.throw(i));
        } catch (l) {
          o(l);
        }
      },
      u = (i) => (i.done ? s(i.value) : Promise.resolve(i.value).then(c, f));
    u((t = t.apply(n, a)).next());
  });
import {
  d as se,
  Z as A,
  _ as fe,
  ae as ye,
  G as re,
  a0 as U,
  k as K,
  u as e,
  c as T,
  f as N,
  w as de,
  l as Be,
  J as we,
  r as gt,
  h as mt,
  o as Ve,
  y as Ke,
  ao as en,
  K as pt,
  a7 as vt,
  a8 as j,
  a9 as _,
  $ as ue,
  a1 as be,
  ab as V,
  F as tn,
  aa as Je,
  m as Ct,
  A as St,
  ah as nn,
  e as an,
  ad as at,
  aj as ze,
  ak as Le,
  ac as ot,
} from './vue-BjERyvPm.js';
import { _ as on } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import {
  a2 as lt,
  f as Ae,
  h as xe,
  I as Ue,
  W as ln,
  a3 as sn,
  E as cn,
  H as rn,
  a4 as un,
  U as fn,
  z as st,
  a5 as wt,
  a6 as dn,
  O as hn,
  c as gn,
  s as qe,
  F as mn,
  q as pn,
  P as vn,
} from '../index.js';
import './componentMap-C0n90BJh.js';
import { u as Cn } from './useForm-b1qEKHt-.js';
import {
  aK as Sn,
  ai as Ce,
  aL as wn,
  aM as yn,
  f as Se,
  e as X,
  l as Xe,
  a as bn,
  aN as _n,
  aO as xn,
  ae as ct,
  o as Ze,
  aJ as Rn,
  a3 as Oe,
  aP as Tn,
  T as Fe,
  a4 as yt,
  aQ as In,
  d as it,
  D as kn,
  x as Me,
  aR as Fn,
  aS as Kn,
  az as Pn,
  ay as An,
  aE as Dn,
  aT as bt,
  ab as En,
} from './antd-BmrhB3rb.js';
import {
  a as $n,
  p as le,
  b as Ye,
  u as _t,
  c as On,
  d as Bn,
} from './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import {
  P as Qe,
  a as Hn,
  D as Nn,
  b as Pe,
  A as je,
  R as ve,
  F as zn,
  u as De,
  c as Ln,
} from './index-BpHr8pvE.js';
import { b as rt } from './uuid-D0SLUWHI.js';
import Mn from './sortable.esm-CoO8jRpa.js';
const Un = { class: 'edit-header-cell' },
  ut = se({
    name: 'EditTableHeaderIcon',
    __name: 'EditTableHeaderIcon',
    props: { title: { type: String, default: '' } },
    setup(n) {
      return (a, t) => (
        A(), fe('span', Un, [ye(a.$slots, 'default'), re(' ' + U(n.title) + ' ', 1), K(e(Sn))])
      );
    },
  }),
  jn = se({
    name: 'TableHeaderCell',
    components: { EditTableHeaderCell: ut, BasicHelp: lt },
    props: { column: { type: Object, default: () => ({}) } },
    setup(n) {
      const { prefixCls: a } = Ae('basic-table-header-cell'),
        t = T(() => {
          var c;
          return !!((c = n.column) != null && c.edit);
        }),
        s = T(() => {
          var f;
          const c = n.column;
          return typeof c.customHeaderRender == 'function'
            ? c.customHeaderRender(c)
            : (c == null ? void 0 : c.customTitle) || ((f = n.column) == null ? void 0 : f.title);
        }),
        o = T(() => {
          var c;
          return (c = n.column) == null ? void 0 : c.helpMessage;
        });
      return () =>
        K('div', null, [
          t.value
            ? K(ut, null, { default: () => [s.value] })
            : K('span', { class: 'default-header-cell' }, [s.value]),
          o.value && K(lt, { text: o.value, class: `${a}__help` }, null),
        ]);
    },
  });
function Wn({ page: n, type: a, originalElement: t }) {
  return a === 'prev' ? (n === 0 ? null : Be(wn)) : a === 'next' ? (n === 1 ? null : Be(yn)) : t;
}
function Gn(n) {
  const { t: a } = xe(),
    t = N({}),
    s = N(!0);
  de(
    () => e(n).pagination,
    (l) => {
      !Ce(l) && l && (t.value = k(k({}, e(t)), l != null ? l : {}));
    },
  );
  const o = T(() => {
    const { pagination: l } = e(n);
    return !e(s) || (Ce(l) && !l)
      ? !1
      : k(
          k(
            {
              current: 1,
              size: 'small',
              defaultPageSize: Qe,
              showTotal: (S) => a('component.table.total', { total: S }),
              showSizeChanger: !0,
              pageSizeOptions: Hn,
              itemRender: Wn,
              showQuickJumper: !0,
            },
            Ce(l) ? {} : l,
          ),
          e(t),
        );
  });
  function c(l) {
    const S = e(o);
    t.value = k(k({}, Ce(S) ? {} : S), l);
  }
  function f() {
    return e(o);
  }
  function u() {
    return e(s);
  }
  function i(l) {
    return oe(this, null, function* () {
      s.value = l;
    });
  }
  return {
    getPagination: f,
    getPaginationInfo: o,
    setShowPagination: i,
    getShowPagination: u,
    setPagination: c,
  };
}
function qn(n) {
  return ({ text: a, record: t, index: s }) => (
    (we(t).onValid = () =>
      oe(this, null, function* () {
        if (Ue(t == null ? void 0 : t.validCbs)) {
          const o = ((t == null ? void 0 : t.validCbs) || []).map((f) => f());
          return (yield Promise.all(o)).every((f) => !!f);
        } else return !1;
      })),
    (we(t).onEdit = (o, c = !1) =>
      oe(this, null, function* () {
        var f, u;
        return (
          c || (t.editable = o),
          !o && c
            ? (yield t.onValid()) && (yield (f = t.onSubmitEdit) == null ? void 0 : f.call(t))
              ? ((t.editable = !1), !0)
              : !1
            : (!o && !c && ((u = t.onCancelEdit) == null || u.call(t)), !0)
        );
      })),
    Be($n, { value: a, record: t, column: n, index: s })
  );
}
function xt(n, a) {
  const { key: t, dataIndex: s, children: o } = n;
  (n.align = n.align || Nn),
    a &&
      (t || (n.key = typeof s == 'object' ? s.join('-') : s),
      Ce(n.ellipsis) || Object.assign(n, { ellipsis: a })),
    o && o.length && Rt(o, !!a);
}
function Rt(n, a) {
  n &&
    n.forEach((t) => {
      const { children: s } = t;
      xt(t, a), Rt(s, a);
    });
}
function Jn(n, a, t) {
  const { t: s } = xe(),
    { showIndexColumn: o, indexColumnProps: c, isTreeTable: f } = e(n);
  let u = !1;
  if (
    e(f) ||
    (t.forEach(() => {
      const l = t.findIndex((S) => S.flag === Pe);
      o ? (u = l === -1) : !o && l !== -1 && t.splice(l, 1);
    }),
    !u)
  )
    return;
  const i = t.some((l) => l.fixed === 'left');
  t.unshift(
    k(
      k(
        {
          flag: Pe,
          width: 60,
          title: s('component.table.index'),
          align: 'center',
          customRender: ({ index: l }) => {
            const S = e(a);
            if (Ce(S)) return `${l + 1}`;
            const { current: I = 1, pageSize: O = Qe } = S;
            return ((I < 1 ? 1 : I) - 1) * O + l + 1;
          },
        },
        i ? { fixed: 'left' } : {},
      ),
      c,
    ),
  );
}
function Yn(n, a) {
  const { actionColumn: t } = e(n);
  if (!t) return;
  const s = a.findIndex((o) => o.flag === je);
  s === -1 && a.push(ie(k(ie(k({}, a[s]), { fixed: 'right' }), t), { flag: je }));
}
function Vn(n, a) {
  const t = N(e(n).columns);
  let s = e(n).columns;
  const o = T(() => {
    const C = Se(e(t));
    if ((Jn(n, a, C), Yn(n, C), !C)) return [];
    const { ellipsis: r } = e(n);
    return (
      C.forEach((h) => {
        const { customRender: g, slots: v } = h;
        xt(h, Reflect.has(h, 'ellipsis') ? !!h.ellipsis : !!r && !g && !v);
      }),
      C
    );
  });
  function c(C) {
    const r = C.ifShow;
    let h = !0;
    return Ce(r) && (h = r), X(r) && (h = r(C)), h;
  }
  const { hasPermission: f } = ln(),
    u = T(() => {
      const C = ft(e(o)),
        r = (g) => {
          const { slots: v, customRender: w, format: x, edit: L, editRow: F, flag: D } = g;
          (!v || !(v != null && v.title)) && (g.customTitle = g.title);
          const W = [Pe, je].includes(D);
          return (
            !w &&
              x &&
              !L &&
              !W &&
              (g.customRender = ({ text: q, record: ce, index: he }) => Xn(q, x, ce, he)),
            (L || F) && !W && (g.customRender = qn(g)),
            gt(g)
          );
        };
      return Se(C)
        .filter((g) => f(g.auth) && c(g))
        .map((g) => {
          var v;
          return (v = g.children) != null && v.length && (g.children = g.children.map(r)), r(g);
        });
    });
  de(
    () => e(n).columns,
    (C) => {
      var r;
      (t.value = C), (s = (r = C == null ? void 0 : C.filter((h) => !h.flag)) != null ? r : []);
    },
  );
  function i(C, r) {
    !C ||
      !r ||
      s.forEach((h) => {
        if (h.dataIndex === C) {
          Object.assign(h, r);
          return;
        }
      });
  }
  function l(C) {
    const r = Se(C);
    if (!Ue(r)) return;
    if (r.length <= 0) {
      t.value = [];
      return;
    }
    const h = r[0],
      g = s.map((v) => v.dataIndex);
    if (!Xe(h) && !Ue(h)) t.value = r;
    else {
      const v = r.map((x) => x.toString()),
        w = [];
      s.forEach((x) => {
        var L;
        w.push(
          ie(k({}, x), {
            defaultHidden: !v.includes(
              ((L = x.dataIndex) == null ? void 0 : L.toString()) || x.key,
            ),
          }),
        );
      }),
        bn(g, r) ||
          w.sort((x, L) => {
            var F, D;
            return (
              v.indexOf((F = x.dataIndex) == null ? void 0 : F.toString()) -
              v.indexOf((D = L.dataIndex) == null ? void 0 : D.toString())
            );
          }),
        (t.value = w);
    }
  }
  function S(C) {
    const { ignoreIndex: r, ignoreAction: h, sort: g } = C || {};
    let v = we(e(o));
    return (
      r && (v = v.filter((w) => w.flag !== Pe)),
      h && (v = v.filter((w) => w.flag !== je)),
      g && (v = ft(v)),
      v
    );
  }
  function I() {
    return s;
  }
  function O(C) {
    Ue(C) && (s = C.filter((r) => !r.flag));
  }
  function z(C, r) {
    r.width = C;
  }
  return {
    getColumnsRef: o,
    getCacheColumns: I,
    getColumns: S,
    setColumns: l,
    setColumnWidth: z,
    getViewColumns: u,
    setCacheColumnsByField: i,
    setCacheColumns: O,
  };
}
function ft(n) {
  const a = [],
    t = [],
    s = [];
  for (const u of n) {
    if (u.fixed === 'left') {
      a.push(u);
      continue;
    }
    if (u.fixed === 'right') {
      t.push(u);
      continue;
    }
    s.push(u);
  }
  const o = (u) => !u.defaultHidden,
    c = [...a, ...s, ...t].filter(o),
    f = [...c];
  for (; f.length; ) {
    const u = f[0];
    Array.isArray(u.children)
      ? ((u.children = u.children.filter(o)), f.shift(), f.unshift(...u.children))
      : f.shift();
  }
  return c;
}
function Xn(n, a, t, s) {
  if (!a) return n;
  if (X(a)) return a(n, t, s);
  try {
    const o = 'date|';
    if (Xe(a) && a.startsWith(o) && n) {
      const c = a.replace(o, '');
      return c ? sn(n, c) : n;
    }
    if (_n(a)) return a.get(n);
  } catch (o) {
    return n;
  }
}
function Zn(
  n,
  {
    getPaginationInfo: a,
    setPagination: t,
    setLoading: s,
    getFieldsValue: o,
    clearSelectedRowKeys: c,
    tableData: f,
  },
  u,
) {
  const i = gt({ sortInfo: {}, filterInfo: {} }),
    l = N([]),
    S = N({}),
    I = N({});
  mt(() => {
    f.value = e(l);
  }),
    de(
      () => e(n).dataSource,
      () => {
        const { dataSource: p, api: b } = e(n);
        !b && p && (l.value = p);
      },
      { immediate: !0 },
    );
  function O(p, b, E) {
    const { clearSelectOnPageChange: B, sortFn: H, filterFn: J } = e(n);
    B && c(), t(p);
    const P = {};
    if (E && X(H)) {
      const Y = H(E);
      (i.sortInfo = Y), (P.sortInfo = Y);
    }
    if (b && X(J)) {
      const Y = J(b);
      (i.filterInfo = Y), (P.filterInfo = Y);
    }
    F(P);
  }
  function z(p) {
    !p ||
      !Array.isArray(p) ||
      p.forEach((b) => {
        b[ve] || (b[ve] = rt()), b.children && b.children.length && z(b.children);
      });
  }
  const C = T(() => e(n).autoCreateKey && !e(n).rowKey),
    r = T(() => {
      const { rowKey: p } = e(n);
      return e(C) ? ve : p;
    }),
    h = N([]);
  de(
    () => l.value,
    () => {
      const p = e(l);
      if (((!p || p.length === 0) && (h.value = e(l)), e(C))) {
        const b = p[0],
          E = p[p.length - 1];
        if (b && E && (!b[ve] || !E[ve])) {
          const B = Se(e(l));
          B.forEach((H) => {
            H[ve] || (H[ve] = rt()), H.children && H.children.length && z(H.children);
          }),
            (l.value = B);
        }
      }
      h.value = e(l);
    },
    { deep: !0 },
  );
  function g(p, b, E) {
    return oe(this, null, function* () {
      return l.value[p] && (l.value[p][b] = E), l.value[p];
    });
  }
  function v(p, b) {
    const E = L(p);
    if (E) {
      for (const B in E) Reflect.has(b, B) && (E[B] = b[B]);
      return E;
    }
  }
  function w(p) {
    var B;
    if (!l.value || l.value.length == 0) return;
    const b = Array.isArray(p) ? p : [p];
    function E(H, J) {
      const P = Y(H, J);
      if (P === null || P.index === -1) return;
      P.data.splice(P.index, 1);
      function Y(Q, ge) {
        var me;
        if (Q == null) return null;
        for (let ee = 0; ee < Q.length; ee++) {
          const te = Q[ee];
          if (le(e(r), te) === ge) return { index: ee, data: Q };
          if (((me = te.children) == null ? void 0 : me.length) > 0) {
            const pe = Y(te.children, ge);
            if (pe != null) return pe;
          }
        }
        return null;
      }
    }
    for (const H of b) E(l.value, H), E(e(n).dataSource, H);
    t({ total: (B = e(n).dataSource) == null ? void 0 : B.length });
  }
  function x(p, b) {
    var B;
    b = b != null ? b : (B = l.value) == null ? void 0 : B.length;
    const E = rn(p) ? [p] : p;
    return e(l).splice(b, 0, ...E), e(l);
  }
  function L(p) {
    if (!l.value || l.value.length === 0) return;
    const { childrenColumnName: b = 'children' } = e(n);
    return ((B) => {
      let H;
      return (
        B.some(function J(P) {
          return le(e(r), P) === p ? ((H = P), !0) : P[b] && P[b].some(J);
        }),
        H
      );
    })(l.value);
  }
  function F(p) {
    return oe(this, null, function* () {
      var ge, me, ee;
      const {
        api: b,
        searchInfo: E,
        defSort: B,
        fetchSetting: H,
        beforeFetch: J,
        afterFetch: P,
        useSearchForm: Y,
        pagination: Q,
      } = e(n);
      if (!(!b || !X(b)))
        try {
          s(!0);
          const {
            pageField: te,
            sizeField: pe,
            listField: Re,
            totalField: Te,
          } = Object.assign({}, zn, H);
          let _e = {};
          const { current: Ie = 1, pageSize: ke = Qe } = e(a);
          (Ce(Q) && !Q) || Ce(a) ? (_e = {}) : ((_e[te] = (p && p.page) || Ie), (_e[pe] = ke));
          const { sortInfo: d = {}, filterInfo: y } = i;
          let R = xn(
            _e,
            Y ? o() : {},
            E,
            (ge = p == null ? void 0 : p.searchInfo) != null ? ge : {},
            B,
            d,
            y,
            (me = p == null ? void 0 : p.sortInfo) != null ? me : {},
            (ee = p == null ? void 0 : p.filterInfo) != null ? ee : {},
          );
          J && X(J) && (R = (yield J(R)) || R), (I.value = R);
          const m = yield b(R);
          S.value = m;
          const $ = Array.isArray(m);
          let ne = $ ? m : ct(m, Re);
          const ae = $ ? m.length : ct(m, Te);
          if (Number(ae)) {
            const He = Math.ceil(ae / ke);
            if (Ie > He) return t({ current: He }), yield F(p);
          }
          return (
            P && X(P) && (ne = (yield P(ne)) || ne),
            (l.value = ne),
            t({ total: ae || 0 }),
            p && p.page && t({ current: p.page || 1 }),
            u('fetch-success', { items: e(ne), total: ae }),
            ne
          );
        } catch (te) {
          u('fetch-error', te), (l.value = []), t({ total: 0 });
        } finally {
          s(!1);
        }
    });
  }
  function D(p) {
    l.value = p;
  }
  function W() {
    return h.value;
  }
  function q() {
    return S.value;
  }
  function ce(p) {
    return oe(this, null, function* () {
      return yield F(p);
    });
  }
  function he() {
    return I.value;
  }
  return (
    Ve(() => {
      cn(() => {
        e(n).immediate && F();
      }, 16);
    }),
    {
      getDataSourceRef: T(() => h.value),
      getDataSource: W,
      getRawDataSource: q,
      searchInfoRef: I,
      getSearchInfo: he,
      getRowKey: r,
      setTableData: D,
      getAutoCreateKey: C,
      fetch: F,
      reload: ce,
      updateTableData: g,
      updateTableDataRecord: v,
      deleteTableDataRecord: w,
      insertTableDataRecord: x,
      findTableDataRecord: L,
      handleTableChange: O,
    }
  );
}
function Qn(n) {
  const a = N(e(n).loading);
  de(
    () => e(n).loading,
    (o) => {
      a.value = o;
    },
  );
  const t = T(() => e(a));
  function s(o) {
    a.value = o;
  }
  return { getLoading: t, setLoading: s };
}
function ea(n, a, t) {
  const s = N([]),
    o = N([]),
    c = T(() => {
      const { rowSelection: r } = e(n);
      return r
        ? k(
            {
              selectedRowKeys: e(s),
              onChange: (h, g, v) => {
                var w, x;
                if (v) (w = r.onChange) == null || w.call(r, h, g);
                else {
                  const L = a.value.map((F) => le(e(u), F));
                  for (const F of s.value.filter((D) => L.includes(D)))
                    if (h.findIndex((D) => D === F) < 0) {
                      const D = s.value.findIndex((W) => W === F);
                      D > -1 && (s.value.splice(D, 1), o.value.splice(D, 1));
                    }
                  for (const F of h)
                    if (s.value.findIndex((W) => W === F) < 0) {
                      s.value.push(F);
                      const W = g.find((q) => le(e(u), q) === F);
                      W && o.value.push(W);
                    }
                  i(s.value), (x = r.onChange) == null || x.call(r, s.value, o.value);
                }
              },
            },
            Ze(r, ['onChange']),
          )
        : null;
    });
  de(
    () => {
      var r;
      return (r = e(n).rowSelection) == null ? void 0 : r.selectedRowKeys;
    },
    (r) => {
      i(r);
    },
  ),
    de(
      () => e(s),
      () => {
        Ke(() => {
          const { rowSelection: r } = e(n);
          if (r) {
            const { onChange: h } = r;
            h && X(h) && h(O(), z(), !0);
          }
          t('selection-change', { keys: O(), rows: z() });
        });
      },
      { deep: !0 },
    );
  const f = T(() => e(n).autoCreateKey && !e(n).rowKey),
    u = T(() => {
      const { rowKey: r } = e(n);
      return e(f) ? ve : r;
    });
  function i(r) {
    var w;
    s.value = r || [];
    const h = we(e(a)).concat(we(e(o))),
      g = un(h, (x) => (r == null ? void 0 : r.includes(le(e(u), x))), {
        children: (w = n.value.childrenColumnName) != null ? w : 'children',
      }),
      v = [];
    r == null ||
      r.forEach((x) => {
        const L = g.find((F) => le(e(u), F) === x);
        L ? v.push(L) : h[0] && v.push({ [Ye(e(u), h[0])]: x });
      }),
      (o.value = v);
  }
  function l(r) {
    (o.value = r), (s.value = o.value.map((h) => le(e(u), h)));
  }
  function S() {
    (o.value = []), (s.value = []);
  }
  function I(r) {
    const g = e(s).findIndex((v) => v === r);
    g !== -1 && e(s).splice(g, 1);
  }
  function O() {
    return e(s);
  }
  function z() {
    return e(o);
  }
  function C() {
    return e(c);
  }
  return {
    getRowSelection: C,
    getRowSelectionRef: c,
    getSelectRows: z,
    getSelectRowKeys: O,
    setSelectedRowKeys: i,
    clearSelectedRowKeys: S,
    deleteSelectRowByKey: I,
    setSelectedRows: l,
  };
}
function ta(n, a) {
  let t;
  function s(c) {
    return oe(this, null, function* () {
      var i;
      const { id: f } = c,
        u = t == null ? void 0 : t.querySelector(`[data-row-key="${f}"]`);
      yield Ke(),
        t == null ||
          t.scrollTo({
            top: (i = u == null ? void 0 : u.offsetTop) != null ? i : 0,
            behavior: 'smooth',
          });
    });
  }
  function o(c) {
    const f = e(n);
    if (!f) return;
    const u = f.$el;
    if (!u || (!t && ((t = u.querySelector('.ant-table-body')), !t))) return;
    const i = e(a);
    if (i)
      if (c === 'top') s(i[0]);
      else if (c === 'bottom') s(i[i.length - 1]);
      else {
        const l = i.find((S) => S.id === c);
        l && s(l);
      }
  }
  return { scrollTo: o };
}
function na(
  n,
  {
    setSelectedRowKeys: a,
    getSelectRowKeys: t,
    getAutoCreateKey: s,
    clearSelectedRowKeys: o,
    emit: c,
  },
) {
  return {
    customRow: (u, i) => ({
      onClick: (l) => {
        l == null || l.stopPropagation();
        function S() {
          var v;
          const { rowSelection: I, rowKey: O, clickToRowSelect: z } = e(n);
          if (!I || !z) return;
          const C = t() || [],
            r = le(O, u, e(s));
          if (!r) return;
          if (I.type === 'checkbox') {
            const w =
              (v = l.composedPath) == null ? void 0 : v.call(l).find((F) => F.tagName === 'TR');
            if (!w) return;
            const x = w.querySelector('input[type=checkbox]');
            if (!x || x.hasAttribute('disabled')) return;
            if (!C.includes(r)) {
              C.push(r), a(C);
              return;
            }
            const L = C.findIndex((F) => F === r);
            C.splice(L, 1), a(C);
            return;
          }
          if (I.type === 'radio') {
            if (!C.includes(r)) {
              C.length && o(), a([r]);
              return;
            }
            o();
          }
        }
        S(), c('row-click', u, i, l);
      },
      onDblclick: (l) => {
        c('row-dbClick', u, i, l);
      },
      onContextmenu: (l) => {
        c('row-contextmenu', u, i, l);
      },
      onMouseenter: (l) => {
        c('row-mouseenter', u, i, l);
      },
      onMouseleave: (l) => {
        c('row-mouseleave', u, i, l);
      },
    }),
  };
}
function aa(n, a) {
  function t(s, o) {
    const { striped: c, rowClassName: f } = e(n),
      u = [];
    return (
      c && u.push((o || 0) % 2 === 1 ? `${a}-row__striped` : ''),
      f && X(f) && u.push(f(s, o)),
      u.filter((i) => !!i).join(' ')
    );
  }
  return { getRowClassName: t };
}
const oa = ['data-no'],
  la = se({
    name: 'ColumnSetting',
    __name: 'ColumnSetting',
    props: { cache: { type: Boolean, default: () => !1 } },
    emits: ['columns-change'],
    setup(n, { emit: a }) {
      const t = _t(),
        s = a,
        o = en(),
        { t: c } = xe(),
        { prefixCls: f } = Ae('basic-column-setting'),
        u = pt(),
        i = De(),
        l = n,
        S = () => (X(u.getPopupContainer) ? u.getPopupContainer() : wt());
      let I = !1,
        O = !1,
        z,
        C = [],
        r = !1,
        h = !1;
      const g = N([]),
        v = N(null),
        w = N([]);
      de(w, () => {
        r &&
          (g.value
            .filter((d) => w.value.includes(d.value))
            .forEach((d) => {
              d.column.defaultHidden = !1;
            }),
          g.value
            .filter((d) => !w.value.includes(d.value))
            .forEach((d) => {
              (d.column.defaultHidden = !0), (d.fixed = void 0);
            }),
          ee(),
          P(),
          l.cache && he());
      });
      const x = N(!1),
        L = () => {
          w.value.length < g.value.length
            ? (w.value = g.value.map((d) => d.value))
            : (w.value = []);
        },
        F = T(() => w.value.length > 0 && w.value.length < g.value.length),
        D = N(!1),
        W = (d) => {
          te(d.target.checked),
            l.cache && typeof o.name == 'string' && t.setShowIndexColumn(o.name, d.target.checked);
        },
        q = N(!1),
        ce = (d) => {
          pe(d.target.checked),
            l.cache && typeof o.name == 'string' && t.setShowRowSelection(o.name, d.target.checked);
        },
        he = () => {
          typeof o.name == 'string' && t.setColumns(o.name, g.value);
        },
        p = () => {
          (D.value = I),
            W({ target: { checked: I } }),
            (q.value = O),
            ce({ target: { checked: O } }),
            (g.value = Se(C)),
            Re();
        },
        b = (d, y) => {
          y === 'left'
            ? !d.fixed || d.fixed === 'right'
              ? (d.fixed = 'left')
              : (d.fixed = void 0)
            : y === 'right' &&
              (!d.fixed || d.fixed === 'left' ? (d.fixed = 'right') : (d.fixed = void 0)),
            P(),
            l.cache && he();
        },
        E = () =>
          oe(this, null, function* () {
            if (v.value) {
              const d = v.value.$el;
              Array.from(d.children).forEach((y) => d.removeChild(y));
            }
            yield Ke();
          }),
        B = (d) => {
          if (d) {
            if ('ifShow' in d) {
              if (typeof d.ifShow == 'boolean') return d.ifShow;
              if (d.ifShow) return d.ifShow(d);
            }
            return !0;
          }
          return !1;
        },
        H = () => i.getColumns({ ignoreIndex: !0, ignoreAction: !0 }).filter((d) => B(d)),
        J = (d) => {
          (h = !0), i == null || i.setColumns(d);
          const y = d.map((R) => ({
            dataIndex: R.dataIndex ? R.dataIndex.toString() : '',
            fixed: R.fixed,
            visible: !R.defaultHidden,
          }));
          s('columns-change', y);
        },
        P = () => {
          var m;
          const d = Se(i.getColumns());
          let y = d.filter(($) => $.flag !== Pe && ($.fixed === 'left' || $.fixed === !0)).length;
          D.value && y++;
          for (const $ of g.value) {
            const ne = d.findIndex((ae) => ae.dataIndex === $.value);
            if (ne > -1) {
              const ae = d[ne];
              (ae.defaultHidden = (m = $.column) == null ? void 0 : m.defaultHidden),
                (ae.fixed = $.fixed),
                d.splice(ne, 1),
                d.splice(y++, 0, ae);
            }
          }
          const R = d.findIndex(($) => $.dataIndex === 'action');
          if (R > -1) {
            const $ = d.splice(R, 1);
            d.push($[0]);
          }
          J(d);
        },
        Y = () =>
          oe(this, null, function* () {
            if ((yield Ke(), v.value)) {
              const d = v.value.$el;
              Mn.create(e(d), {
                animation: 500,
                delay: 400,
                delayOnTouchOnly: !0,
                handle: '.table-column-drag-icon ',
                dataIdAttr: 'data-no',
                onEnd: (y) => {
                  const { oldIndex: R, newIndex: m } = y;
                  if (it(R) || it(m) || R === m) return;
                  const $ = Se(g.value);
                  R > m
                    ? ($.splice(m, 0, $[R]), $.splice(R + 1, 1))
                    : ($.splice(m + 1, 0, $[R]), $.splice(R, 1)),
                    (g.value = $),
                    P(),
                    l.cache && he();
                },
              });
            }
          }),
        Q = () => {
          if (typeof o.name == 'string') {
            let d = t.getColumns(o.name);
            if (
              d &&
              JSON.stringify(g.value.map((y) => ({ value: y.value, label: y.label }))) !==
                JSON.stringify(d.map((y) => ({ value: y.value, label: y.label })))
            ) {
              const y = g.value.reduce((R, m) => ((R[m.value] = m.label), R), {});
              if (Array.isArray(d)) {
                (d = d.filter((m) => y[m.value])),
                  d.forEach((m) => {
                    m.label = y[m.value];
                  });
                const R = d.map((m) => m.value);
                (d = d.concat(g.value.filter((m) => !R.includes(m.value)))),
                  t.setColumns(o.name, d);
              }
            }
          }
        },
        ge = () => {
          if (typeof o.name == 'string') {
            const d = t.getShowIndexColumn(o.name);
            typeof d == 'boolean' && (D.value = I && d);
            const y = t.getShowRowSelection(o.name);
            typeof y == 'boolean' && (q.value = O && y);
          }
          if (
            (W({ target: { checked: D.value } }),
            ce({ target: { checked: q.value } }),
            typeof o.name == 'string')
          ) {
            const d = t.getColumns(o.name);
            Array.isArray(d) && (g.value = d);
          }
        },
        me = () => {
          w.value = g.value
            .filter((d) => {
              var y;
              return !((y = d.column) != null && y.defaultHidden);
            })
            .map((d) => d.value);
        },
        ee = () => {
          x.value = g.value.length === w.value.length;
        },
        te = (d) => {
          (h = !0), i.setProps({ showIndexColumn: d });
        },
        pe = (d) => {
          (h = !0),
            i.setProps({
              rowSelection: d ? ie(k({}, Ze(z, ['selectedRowKeys'])), { fixed: !0 }) : void 0,
            });
        },
        Re = () => {
          me(), ee(), te(D.value), pe(q.value), P();
        },
        Te = () =>
          oe(this, null, function* () {
            var d;
            if (!r) {
              const y = H();
              (d = i.setCacheColumns) == null || d.call(i, y);
              const R = [];
              for (const m of y)
                R.push({
                  label:
                    typeof m.title == 'string'
                      ? m.title
                      : m.customTitle === 'string'
                        ? m.customTitle
                        : '',
                  value:
                    typeof m.dataIndex == 'string'
                      ? m.dataIndex
                      : m.title === 'string'
                        ? m.title
                        : '',
                  column: { defaultHidden: m.defaultHidden },
                  fixed: m.fixed,
                });
              (I = i.getBindValues.value.showIndexColumn || !1),
                (z = i.getRowSelection()),
                (O = !!z),
                (C = R),
                (D.value = I),
                (q.value = O),
                (g.value = Se(R)),
                l.cache && Q(),
                l.cache && ge(),
                Re(),
                (r = !0);
            }
          });
      oe(this, null, function* () {
        yield E(), Te();
      });
      const Ie = T(() => (i == null ? void 0 : i.getColumns())),
        ke = T(() => (i == null ? void 0 : i.getBindValues));
      return (
        Ve(() => {
          de([Ie, ke], () => {
            h ? (h = !1) : ((r = !1), Te());
          });
        }),
        (d, y) => {
          const R = vt('a-button');
          return (
            A(),
            j(
              e(Fe),
              { placement: 'top' },
              {
                title: _(() => [ue('span', null, U(e(c)('component.table.settingColumn')), 1)]),
                default: _(() => [
                  K(
                    e(Rn),
                    {
                      placement: 'bottomLeft',
                      trigger: 'click',
                      onOpenChange: Y,
                      overlayClassName: `${e(f)}__column-list`,
                      getPopupContainer: S,
                    },
                    {
                      title: _(() => [
                        ue(
                          'div',
                          { class: be(`${e(f)}__popover-title`) },
                          [
                            K(
                              e(Oe),
                              {
                                indeterminate: F.value,
                                checked: x.value,
                                'onUpdate:checked': y[0] || (y[0] = (m) => (x.value = m)),
                                onChange: L,
                              },
                              {
                                default: _(() => [
                                  re(U(e(c)('component.table.settingColumnShow')), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ['indeterminate', 'checked'],
                            ),
                            K(
                              e(Oe),
                              {
                                checked: D.value,
                                'onUpdate:checked': y[1] || (y[1] = (m) => (D.value = m)),
                                onChange: W,
                              },
                              {
                                default: _(() => [
                                  re(U(e(c)('component.table.settingIndexColumnShow')), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ['checked'],
                            ),
                            e(O)
                              ? (A(),
                                j(
                                  e(Oe),
                                  {
                                    key: 0,
                                    checked: q.value,
                                    'onUpdate:checked': y[2] || (y[2] = (m) => (q.value = m)),
                                    onChange: ce,
                                  },
                                  {
                                    default: _(() => [
                                      re(U(e(c)('component.table.settingSelectColumnShow')), 1),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['checked'],
                                ))
                              : V('', !0),
                            K(
                              R,
                              { size: 'small', type: 'link', onClick: p },
                              { default: _(() => [re(U(e(c)('common.resetText')), 1)]), _: 1 },
                            ),
                          ],
                          2,
                        ),
                      ]),
                      content: _(() => [
                        K(e(fn), null, {
                          default: _(() => [
                            K(
                              e(Oe).Group,
                              {
                                value: w.value,
                                'onUpdate:value': y[3] || (y[3] = (m) => (w.value = m)),
                                ref_key: 'columnOptionsRef',
                                ref: v,
                              },
                              {
                                default: _(() => [
                                  (A(!0),
                                  fe(
                                    tn,
                                    null,
                                    Je(
                                      g.value,
                                      (m) => (
                                        A(),
                                        fe(
                                          'div',
                                          {
                                            key: m.value,
                                            class: be(`${e(f)}__check-item`),
                                            'data-no': m.value,
                                          },
                                          [
                                            K(e(Tn), { class: 'table-column-drag-icon' }),
                                            K(
                                              e(Oe),
                                              { value: m.value },
                                              { default: _(() => [re(U(m.label), 1)]), _: 2 },
                                              1032,
                                              ['value'],
                                            ),
                                            K(
                                              e(Fe),
                                              {
                                                placement: 'bottomLeft',
                                                mouseLeaveDelay: 0.4,
                                                getPopupContainer: S,
                                              },
                                              {
                                                title: _(() => [
                                                  re(
                                                    U(e(c)('component.table.settingFixedLeft')),
                                                    1,
                                                  ),
                                                ]),
                                                default: _(() => [
                                                  K(
                                                    st,
                                                    {
                                                      icon: 'line-md:arrow-align-left',
                                                      class: be([
                                                        `${e(f)}__fixed-left`,
                                                        {
                                                          active: m.fixed === 'left',
                                                          disabled: m.value
                                                            ? !w.value.includes(m.value)
                                                            : !0,
                                                        },
                                                      ]),
                                                      onClick: ($) => b(m, 'left'),
                                                    },
                                                    null,
                                                    8,
                                                    ['class', 'onClick'],
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                            K(e(yt), { type: 'vertical' }),
                                            K(
                                              e(Fe),
                                              {
                                                placement: 'bottomLeft',
                                                mouseLeaveDelay: 0.4,
                                                getPopupContainer: S,
                                              },
                                              {
                                                title: _(() => [
                                                  re(
                                                    U(e(c)('component.table.settingFixedRight')),
                                                    1,
                                                  ),
                                                ]),
                                                default: _(() => [
                                                  K(
                                                    st,
                                                    {
                                                      icon: 'line-md:arrow-align-left',
                                                      class: be([
                                                        `${e(f)}__fixed-right`,
                                                        {
                                                          active: m.fixed === 'right',
                                                          disabled: m.value
                                                            ? !w.value.includes(m.value)
                                                            : !0,
                                                        },
                                                      ]),
                                                      onClick: ($) => b(m, 'right'),
                                                    },
                                                    null,
                                                    8,
                                                    ['class', 'onClick'],
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            ),
                                          ],
                                          10,
                                          oa,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['value'],
                            ),
                          ]),
                          _: 1,
                        }),
                      ]),
                      default: _(() => [K(e(In))]),
                      _: 1,
                    },
                    8,
                    ['overlayClassName'],
                  ),
                ]),
                _: 1,
              },
            )
          );
        }
      );
    },
  }),
  sa = se({
    name: 'SizeSetting',
    __name: 'SizeSetting',
    setup(n) {
      const a = _t(),
        t = De(),
        { t: s } = xe(),
        o = N([t.getSize()]),
        c = ({ key: f }) => {
          (o.value = [f]), a.setTableSize(f), t.setProps({ size: f });
        };
      return (
        Ve(() => {
          (o.value = [a.getTableSize]), t.setProps({ size: o.value[0] });
        }),
        (f, u) => (
          A(),
          j(
            e(Fe),
            { placement: 'top' },
            {
              title: _(() => [ue('span', null, U(e(s)('component.table.settingDens')), 1)]),
              default: _(() => [
                K(
                  e(kn),
                  { placement: 'bottom', trigger: ['click'], getPopupContainer: e(wt) },
                  {
                    overlay: _(() => [
                      K(
                        e(Me),
                        {
                          onClick: c,
                          selectable: '',
                          selectedKeys: o.value,
                          'onUpdate:selectedKeys': u[0] || (u[0] = (i) => (o.value = i)),
                        },
                        {
                          default: _(() => [
                            K(
                              e(Me).Item,
                              { key: 'default' },
                              {
                                default: _(() => [
                                  ue(
                                    'span',
                                    null,
                                    U(e(s)('component.table.settingDensDefault')),
                                    1,
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            K(
                              e(Me).Item,
                              { key: 'middle' },
                              {
                                default: _(() => [
                                  ue('span', null, U(e(s)('component.table.settingDensMiddle')), 1),
                                ]),
                                _: 1,
                              },
                            ),
                            K(
                              e(Me).Item,
                              { key: 'small' },
                              {
                                default: _(() => [
                                  ue('span', null, U(e(s)('component.table.settingDensSmall')), 1),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ['selectedKeys'],
                      ),
                    ]),
                    default: _(() => [K(e(Fn))]),
                    _: 1,
                  },
                  8,
                  ['getPopupContainer'],
                ),
              ]),
              _: 1,
            },
          )
        )
      );
    },
  }),
  ca = se({
    name: 'RedoSetting',
    __name: 'RedoSetting',
    setup(n) {
      const a = De(),
        { t } = xe();
      function s() {
        a.reload();
      }
      return (o, c) => (
        A(),
        j(
          e(Fe),
          { placement: 'top' },
          {
            title: _(() => [ue('span', null, U(e(t)('common.redo')), 1)]),
            default: _(() => [K(e(Kn), { onClick: s })]),
            _: 1,
          },
        )
      );
    },
  }),
  ia = se({
    name: 'FullScreenSetting',
    __name: 'FullScreenSetting',
    setup(n) {
      const a = De(),
        { t } = xe(),
        { toggle: s, isFullscreen: o } = dn(a.wrapRef);
      return (c, f) => (
        A(),
        j(
          e(Fe),
          { placement: 'top' },
          {
            title: _(() => [ue('span', null, U(e(t)('component.table.settingFullScreen')), 1)]),
            default: _(() => [
              e(o)
                ? (A(), j(e(An), { key: 1, onClick: e(s) }, null, 8, ['onClick']))
                : (A(), j(e(Pn), { key: 0, onClick: e(s) }, null, 8, ['onClick'])),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  ra = { class: 'table-settings' },
  ua = se({
    name: 'TableSetting',
    __name: 'index',
    props: { setting: { type: Object, default: () => ({}) } },
    emits: ['columns-change'],
    setup(n, { emit: a }) {
      const t = n,
        s = a,
        o = De(),
        c = T(() =>
          k({ redo: !0, size: !0, setting: !0, settingCache: !1, fullScreen: !1 }, t.setting),
        );
      function f(i) {
        s('columns-change', i);
      }
      function u() {
        return o ? e(o.wrapRef) : document.body;
      }
      return (i, l) => (
        A(),
        fe('div', ra, [
          c.value.redo ? (A(), j(ca, { key: 0, getPopupContainer: u })) : V('', !0),
          c.value.size ? (A(), j(sa, { key: 1, getPopupContainer: u })) : V('', !0),
          c.value.setting
            ? (A(),
              j(
                la,
                { key: 2, onColumnsChange: f, getPopupContainer: u, cache: c.value.settingCache },
                null,
                8,
                ['cache'],
              ))
            : V('', !0),
          c.value.fullScreen ? (A(), j(ia, { key: 3, getPopupContainer: u })) : V('', !0),
        ])
      );
    },
  }),
  fa = se({
    name: 'BasicTableTitle',
    __name: 'TableTitle',
    props: {
      title: { type: [Function, String] },
      getSelectRows: { type: Function },
      helpMessage: { type: [String, Array] },
    },
    setup(n) {
      const a = n,
        { prefixCls: t } = Ae('basic-table-title'),
        s = T(() => {
          const { title: o, getSelectRows: c = () => {} } = a;
          let f = o;
          return X(o) && (f = o({ selectRows: c() })), f;
        });
      return (o, c) =>
        s.value
          ? (A(),
            j(
              e(hn),
              { key: 0, class: be(e(t)), helpMessage: n.helpMessage },
              { default: _(() => [re(U(s.value), 1)]), _: 1 },
              8,
              ['class', 'helpMessage'],
            ))
          : V('', !0);
    },
  }),
  da = { key: 0 },
  ha = { key: 1 },
  ga = se({
    name: 'TableSelectBar',
    __name: 'TableSelectionBar',
    props: { count: { default: () => 0 }, clearSelectedRowKeys: {} },
    setup(n) {
      const { t: a } = xe(),
        { prefixCls: t } = Ae('table-select-bar'),
        s = n;
      return (o, c) => {
        const f = vt('a-button');
        return (
          A(),
          j(
            e(Dn),
            { type: 'info', showIcon: '', class: be([e(t)]) },
            {
              message: _(() => [
                s.count > 0
                  ? (A(),
                    fe(
                      'span',
                      da,
                      U(e(a)('component.table.selectionBarTips', { count: s.count })),
                      1,
                    ))
                  : (A(), fe('span', ha, U(e(a)('component.table.selectionBarEmpty')), 1)),
                Ct(
                  K(
                    f,
                    { type: 'link', onClick: o.clearSelectedRowKeys, size: 'small' },
                    {
                      default: _(() => [re(U(e(a)('component.table.selectionBarClear')), 1)]),
                      _: 1,
                    },
                    8,
                    ['onClick'],
                  ),
                  [[St, s.count > 0]],
                ),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        );
      };
    },
  }),
  ma = gn(ga, [['__scopeId', 'data-v-80ee960a']]),
  pa = { style: { width: '100%' } },
  va = { key: 0, style: { margin: '5px' } },
  Ca = { key: 1, style: { margin: '5px' } },
  Sa = { class: 'flex items-center' },
  wa = se({
    name: 'BasicTableHeader',
    __name: 'TableHeader',
    props: {
      title: { type: [Function, String] },
      tableSetting: { type: Object },
      showTableSetting: { type: Boolean },
      titleHelpMessage: { type: [String, Array], default: '' },
      clearSelectedRowKeys: { type: Function },
      count: { type: Number, default: 0 },
      showSelectionBar: { type: Boolean, default: !1 },
    },
    emits: ['columns-change'],
    setup(n, { emit: a }) {
      const t = n,
        s = a,
        { prefixCls: o } = Ae('basic-table-header');
      function c(f) {
        s('columns-change', f);
      }
      return (f, u) => (
        A(),
        fe('div', pa, [
          f.$slots.headerTop ? (A(), fe('div', va, [ye(f.$slots, 'headerTop')])) : V('', !0),
          n.showSelectionBar
            ? (A(),
              fe('div', Ca, [
                K(ma, { clearSelectedRowKeys: t.clearSelectedRowKeys, count: t.count }, null, 8, [
                  'clearSelectedRowKeys',
                  'count',
                ]),
              ]))
            : V('', !0),
          ue('div', Sa, [
            f.$slots.tableTitle ? ye(f.$slots, 'tableTitle', { key: 0 }) : V('', !0),
            !f.$slots.tableTitle && n.title
              ? (A(),
                j(fa, { key: 1, helpMessage: n.titleHelpMessage, title: n.title }, null, 8, [
                  'helpMessage',
                  'title',
                ]))
              : V('', !0),
            ue(
              'div',
              { class: be(`${e(o)}__toolbar`) },
              [
                ye(f.$slots, 'toolbar'),
                f.$slots.toolbar && n.showTableSetting
                  ? (A(), j(e(yt), { key: 0, type: 'vertical' }))
                  : V('', !0),
                n.showTableSetting
                  ? (A(),
                    j(ua, { key: 1, setting: n.tableSetting, onColumnsChange: c }, null, 8, [
                      'setting',
                    ]))
                  : V('', !0),
              ],
              2,
            ),
          ]),
        ])
      );
    },
  });
function ya(n, a, t, s) {
  return {
    getHeaderProps: T(() => {
      const {
          title: c,
          showTableSetting: f,
          titleHelpMessage: u,
          tableSetting: i,
          showSelectionBar: l,
        } = e(n),
        S = !a.tableTitle && !c && !a.toolbar && !f;
      return S && !Xe(c)
        ? {}
        : {
            title: S
              ? null
              : () =>
                  Be(
                    wa,
                    {
                      title: c,
                      titleHelpMessage: u,
                      showTableSetting: f,
                      tableSetting: i,
                      onColumnsChange: t.onColumnsChange,
                      clearSelectedRowKeys: s.clearSelectedRowKeys,
                      count: s.getSelectRowKeys().length,
                      showSelectionBar: l,
                    },
                    k(
                      k(
                        k({}, a.toolbar ? { toolbar: () => qe(a, 'toolbar') } : {}),
                        a.tableTitle ? { tableTitle: () => qe(a, 'tableTitle') } : {},
                      ),
                      a.headerTop ? { headerTop: () => qe(a, 'headerTop') } : {},
                    ),
                  ),
          };
    }),
  };
}
function ba(n, a, t) {
  const s = N([]),
    o = T(() => e(n).autoCreateKey && !e(n).rowKey),
    c = T(() => {
      const { rowKey: r } = e(n);
      return e(o) ? ve : r;
    }),
    f = T(() => {
      const { isTreeTable: r, expandRowByClick: h } = e(n);
      return !r && !h
        ? {}
        : {
            expandedRowKeys: e(s),
            onExpandedRowsChange: (g) => {
              (s.value = g), t('expanded-rows-change', g);
            },
          };
    });
  function u() {
    const r = I();
    s.value = r;
  }
  function i() {
    s.value = [];
  }
  function l(r) {
    const { isTreeTable: h, expandRowByClick: g } = e(n);
    (!h && !g) || (s.value = [...s.value, ...r]);
  }
  function S(r) {
    const { isTreeTable: h, expandRowByClick: g } = e(n);
    (!h && !g) || (s.value = e(s).filter((v) => !r.includes(v)));
  }
  function I(r) {
    const h = [],
      { childrenColumnName: g } = e(n);
    return (
      we(r || e(a)).forEach((v) => {
        h.push(le(e(c), v));
        const w = v[g || 'children'];
        w != null && w.length && h.push(...I(w));
      }),
      h
    );
  }
  function O(r, h, g, v) {
    if (r.findIndex((w) => le(e(c), w) === g) > -1) return v.push(g), !0;
    for (const w of r) {
      const x = w[h];
      if (Array.isArray(x) && O(x, h, g, v)) return v.push(le(e(c), w)), !0;
    }
    return !1;
  }
  function z(r) {
    const { childrenColumnName: h } = e(n),
      g = [];
    O(a.value, h || 'children', r, g), (s.value = g);
  }
  function C(r, h) {
    n.value.accordion &&
      (n.value.isTreeTable || n.value.expandRowByClick) &&
      r &&
      Ke(() => {
        z(le(e(c), h));
      });
  }
  return {
    getExpandOption: f,
    expandAll: u,
    collapseAll: i,
    expandRows: l,
    collapseRows: S,
    expandRowAccordion: z,
    handleTableExpand: C,
  };
}
const dt = '_row',
  ht = '_index',
  _a = se({
    name: 'BasicTableFooter',
    __name: 'TableFooter',
    props: {
      summaryFunc: { default: null },
      summaryData: { default: null },
      scroll: {},
      rowKey: { default: '' },
    },
    setup(n) {
      const a = n,
        t = De(),
        s = T(() => {
          var f;
          if ((f = a.summaryData) != null && f.length)
            return (
              a.summaryData.forEach((u, i) => {
                u[Ye(a.rowKey, u)] = `${i}`;
              }),
              a.summaryData
            );
          if (!X(a.summaryFunc)) return [];
          let c = we(e(t.getDataSource()));
          return (
            (c = a.summaryFunc(c)),
            c.forEach((u, i) => {
              u[Ye(a.rowKey, u)] = `${i}`;
            }),
            c
          );
        }),
        o = T(() => {
          const c = e(s),
            f = Se(t.getColumns()),
            u = f.findIndex((S) => S.flag === Pe),
            i = c.some((S) => Reflect.has(S, dt)),
            l = c.some((S) => Reflect.has(S, ht));
          if (
            (u !== -1 &&
              (l
                ? ((f[u].customRender = ({ record: S }) => S[ht]), (f[u].ellipsis = !1))
                : Reflect.deleteProperty(f[u], 'customRender')),
            t.getRowSelection() && i)
          ) {
            const S = f.some((I) => I.fixed === 'left');
            f.unshift(
              ie(
                k(
                  { width: 60, title: 'selection', key: 'selectionKey', align: 'center' },
                  S ? { fixed: 'left' } : {},
                ),
                { customRender: ({ record: I }) => I[dt] },
              ),
            );
          }
          return f;
        });
      return (c, f) =>
        a.summaryFunc || a.summaryData
          ? (A(),
            j(
              e(bt),
              {
                key: 0,
                showHeader: !1,
                bordered: !1,
                pagination: !1,
                dataSource: s.value,
                rowKey: a.rowKey,
                columns: o.value,
                tableLayout: 'fixed',
                scroll: a.scroll,
              },
              null,
              8,
              ['dataSource', 'rowKey', 'columns', 'scroll'],
            ))
          : V('', !0);
    },
  });
function xa(n, a, t, s) {
  const o = T(() => (e(s) || []).length === 0),
    c = T(() => {
      const { summaryFunc: u, showSummary: i, summaryData: l } = e(n);
      return i && !e(o) ? () => Be(_a, { summaryFunc: u, summaryData: l, scroll: e(a) }) : void 0;
    });
  mt(() => {
    f();
  });
  function f() {
    const { showSummary: u } = e(n);
    !u ||
      e(o) ||
      Ke(() => {
        const i = e(t);
        if (!i) return;
        const l = i.$el.querySelector(' .ant-table-content,  .ant-table-body');
        mn({
          el: l,
          name: 'scroll',
          listener: () => {
            const S = i.$el.querySelector(
              '.ant-table-footer .ant-table-container  [class^="ant-table-"]',
            );
            !S || !l || (S.scrollLeft = l.scrollLeft);
          },
          wait: 0,
          options: !0,
        });
      });
  }
  return { getFooterProps: c };
}
function Ra(n, a, t, s) {
  const o = T(() => {
      const { formConfig: i } = e(n),
        { submitButtonOptions: l } = i || {};
      return ie(k({ showAdvancedButton: !0 }, i), {
        submitButtonOptions: k({ loading: e(s) }, l),
        compact: !0,
      });
    }),
    c = T(() =>
      Object.keys(a)
        .map((l) => (l.startsWith('form-') ? l : null))
        .filter((l) => !!l),
    );
  function f(i) {
    var l, S;
    return i &&
      (S = (l = i == null ? void 0 : i.replace) == null ? void 0 : l.call(i, /form-/, '')) != null
      ? S
      : '';
  }
  function u(i) {
    const { handleSearchInfoFn: l } = e(n);
    l && X(l) && (i = l(i) || i), t({ searchInfo: i, page: 1 });
  }
  return { getFormProps: o, replaceFormSlotKey: f, getFormSlotKeys: c, handleSearchInfoChange: u };
}
const Ha = se({
  name: 'BasicTable',
  __name: 'BasicTable',
  props: On,
  emits: [
    'fetch-success',
    'fetch-error',
    'selection-change',
    'register',
    'row-click',
    'row-dbClick',
    'row-contextmenu',
    'row-mouseenter',
    'row-mouseleave',
    'edit-end',
    'edit-cancel',
    'edit-row-end',
    'edit-change',
    'expanded-rows-change',
    'change',
    'columns-change',
  ],
  setup(n, { expose: a, emit: t }) {
    const s = n,
      o = t,
      c = pt(),
      f = nn(),
      u = N(null),
      i = N([]),
      l = N(null),
      S = N(null),
      I = N(),
      { height: O } = pn(l),
      { prefixCls: z } = Ae('basic-table'),
      [C, r] = Cn(),
      h = T(() => k(k({}, s), e(I))),
      g = an(vn, !1),
      { getLoading: v, setLoading: w } = Qn(h),
      {
        getPaginationInfo: x,
        getPagination: L,
        setPagination: F,
        setShowPagination: D,
        getShowPagination: W,
      } = Gn(h),
      {
        getRowSelection: q,
        getRowSelectionRef: ce,
        getSelectRows: he,
        setSelectedRows: p,
        clearSelectedRowKeys: b,
        getSelectRowKeys: E,
        deleteSelectRowByKey: B,
        setSelectedRowKeys: H,
      } = ea(h, i, o),
      {
        handleTableChange: J,
        getDataSourceRef: P,
        getDataSource: Y,
        getRawDataSource: Q,
        getSearchInfo: ge,
        setTableData: me,
        updateTableDataRecord: ee,
        deleteTableDataRecord: te,
        insertTableDataRecord: pe,
        findTableDataRecord: Re,
        fetch: Te,
        getRowKey: _e,
        reload: Ie,
        getAutoCreateKey: ke,
        updateTableData: d,
      } = Zn(
        h,
        {
          tableData: i,
          getPaginationInfo: x,
          setLoading: w,
          setPagination: F,
          getFieldsValue: r.getFieldsValue,
          clearSelectedRowKeys: b,
        },
        o,
      );
    function y(M, Z, G, $e) {
      J(M, Z, G), o('change', M, Z, G);
      const { onChange: Ge } = e(h);
      Ge && X(Ge) && Ge(M, Z, G, $e);
    }
    const {
        getViewColumns: R,
        getColumns: m,
        setCacheColumnsByField: $,
        setCacheColumns: ne,
        setColumnWidth: ae,
        setColumns: He,
        getColumnsRef: Tt,
        getCacheColumns: It,
      } = Vn(h, x),
      { getScrollRef: et, redoHeight: We } = Bn(h, u, Tt, ce, P, l, S),
      kt = En(We, 50),
      { scrollTo: Ft } = ta(u, P),
      { customRow: Kt } = na(h, {
        setSelectedRowKeys: H,
        getSelectRowKeys: E,
        clearSelectedRowKeys: b,
        getAutoCreateKey: ke,
        emit: o,
      }),
      { getRowClassName: Pt } = aa(h, z),
      {
        getExpandOption: At,
        expandAll: Dt,
        expandRows: Et,
        collapseRows: $t,
        collapseAll: Ot,
        handleTableExpand: Bt,
      } = ba(h, i, o),
      Ht = {
        onColumnsChange: (M) => {
          var Z, G;
          o('columns-change', M), (G = (Z = e(h)).onColumnsChange) == null || G.call(Z, M);
        },
      },
      Nt = { clearSelectedRowKeys: b, getSelectRowKeys: E },
      { getHeaderProps: zt } = ya(h, f, Ht, Nt),
      { getFooterProps: Lt } = xa(h, et, u, P),
      {
        getFormProps: Mt,
        replaceFormSlotKey: Ut,
        getFormSlotKeys: jt,
        handleSearchInfoChange: Wt,
      } = Ra(h, f, Te, v),
      Ee = T(() => {
        const M = e(P);
        let Z = k(
          ie(k(k(ie(k({}, c), { customRow: Kt }), e(h)), e(zt)), {
            scroll: e(et),
            loading: e(v),
            tableLayout: 'fixed',
            rowSelection: e(ce),
            rowKey: e(_e),
            columns: we(e(R)),
            pagination: we(e(x)),
            dataSource: M,
            footer: e(Lt),
          }),
          e(At),
        );
        return (Z = Ze(Z, ['class', 'onChange'])), Z;
      }),
      Gt = T(() => {
        const M = e(Ee);
        return [z, c.class, { [`${z}-form-container`]: M.useSearchForm, [`${z}--inset`]: M.inset }];
      }),
      qt = T(() => {
        const { emptyDataIsShowTable: M, useSearchForm: Z } = e(h);
        return M || !Z ? !0 : !!e(P).length;
      });
    de(O, () => {
      e(g) && s.canResize && kt();
    });
    function Jt(M) {
      I.value = k(k({}, e(I)), M);
    }
    const Ne = {
      reload: Ie,
      getSelectRows: he,
      setSelectedRows: p,
      clearSelectedRowKeys: b,
      getSelectRowKeys: E,
      deleteSelectRowByKey: B,
      setPagination: F,
      setTableData: me,
      updateTableDataRecord: ee,
      deleteTableDataRecord: te,
      insertTableDataRecord: pe,
      findTableDataRecord: Re,
      redoHeight: We,
      setSelectedRowKeys: H,
      setColumns: He,
      setLoading: w,
      getDataSource: Y,
      getRawDataSource: Q,
      getSearchInfo: ge,
      setProps: Jt,
      getRowSelection: q,
      getPaginationRef: L,
      getColumns: m,
      getCacheColumns: It,
      emit: o,
      updateTableData: d,
      setShowPagination: D,
      getShowPagination: W,
      setCacheColumnsByField: $,
      expandAll: Dt,
      collapseAll: Ot,
      expandRows: Et,
      collapseRows: $t,
      scrollTo: Ft,
      getSize: () => e(Ee).size,
      setCacheColumns: ne,
    };
    return (
      Ln(ie(k({}, Ne), { wrapRef: l, getBindValues: Ee })),
      o('register', Ne, r),
      a(k({ tableElRef: u }, Ne)),
      (M, Z) => (
        A(),
        fe(
          'div',
          { ref_key: 'wrapRef', ref: l, class: be(Gt.value) },
          [
            Ee.value.useSearchForm
              ? (A(),
                j(
                  e(on),
                  ot({ key: 0, ref_key: 'formRef', ref: S, submitOnReset: '' }, e(Mt), {
                    tableAction: Ne,
                    onRegister: e(C),
                    onSubmit: e(Wt),
                    onAdvancedChange: e(We),
                  }),
                  at({ _: 2 }, [
                    Je(e(jt), (G) => ({
                      name: e(Ut)(G),
                      fn: _(($e) => [ye(M.$slots, G, ze(Le($e || {})))]),
                    })),
                  ]),
                  1040,
                  ['onRegister', 'onSubmit', 'onAdvancedChange'],
                ))
              : V('', !0),
            Ct(
              K(
                e(bt),
                ot({ ref_key: 'tableElRef', ref: u }, Ee.value, {
                  rowClassName: e(Pt),
                  onChange: y,
                  onResizeColumn: e(ae),
                  onExpand: e(Bt),
                }),
                at(
                  {
                    headerCell: _(({ column: G }) => [
                      ye(M.$slots, 'headerCell', ze(Le({ column: G })), () => [
                        K(jn, { column: G }, null, 8, ['column']),
                      ]),
                    ]),
                    bodyCell: _((G) => [ye(M.$slots, 'bodyCell', ze(Le(G || {})))]),
                    _: 2,
                  },
                  [
                    Je(Object.keys(M.$slots), (G) => ({
                      name: G,
                      fn: _(($e) => [ye(M.$slots, G, ze(Le($e || {})))]),
                    })),
                  ],
                ),
                1040,
                ['rowClassName', 'onResizeColumn', 'onExpand'],
              ),
              [[St, qt.value]],
            ),
          ],
          2,
        )
      )
    );
  },
});
export { Ha as _, jn as a };
