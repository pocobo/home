var ke = Object.defineProperty;
var be = Object.getOwnPropertySymbols;
var He = Object.prototype.hasOwnProperty,
  Ue = Object.prototype.propertyIsEnumerable;
var Ve = (n, c, a) =>
    c in n ? ke(n, c, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (n[c] = a),
  $ = (n, c) => {
    for (var a in c || (c = {})) He.call(c, a) && Ve(n, a, c[a]);
    if (be) for (var a of be(c)) Ue.call(c, a) && Ve(n, a, c[a]);
    return n;
  };
var _ = (n, c, a) =>
  new Promise((o, y) => {
    var A = (l) => {
        try {
          g(a.next(l));
        } catch (f) {
          y(f);
        }
      },
      d = (l) => {
        try {
          g(a.throw(l));
        } catch (f) {
          y(f);
        }
      },
      g = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(A, d));
    g((a = a.apply(n, c)).next());
  });
import {
  u as t,
  g as We,
  c as q,
  w as ne,
  an as Ye,
  y as ye,
  J as we,
  h as Xe,
  d as qe,
  K as Ge,
  r as Ie,
  f as te,
  o as Je,
  Z as pe,
  a8 as Te,
  a9 as le,
  k as Be,
  ae as ue,
  _ as ze,
  aa as he,
  ad as De,
  ac as me,
  F as Ze,
  aj as Ee,
  ak as Oe,
  al as Qe,
} from './vue-BjERyvPm.js';
import { _ as Me } from './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import { b as et, c as tt, _ as nt } from './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import { i as fe, d as $e, a as st } from './helper-BjbsUAHT.js';
import { H as U, I as se, J as W, G as at, u as Le, K as Ae, d as Ke, f as it } from '../index.js';
import {
  e as Z,
  l as de,
  s as J,
  ae,
  ah as _e,
  d as G,
  v as je,
  f as z,
  aa as rt,
  ai as xe,
  aj as ot,
  ak as ct,
  U as lt,
  a2 as ut,
} from './antd-BmrhB3rb.js';
import { u as ft } from './index-RbNU_lzt.js';
function dt(n, c, a) {
  const o = /^\[(.+)\]$/;
  if (o.test(n)) {
    const y = n.match(o);
    if (y && y[1]) {
      const A = y[1].split(',');
      return (
        (c = Array.isArray(c) ? c : [c]),
        A.forEach((d, g) => {
          J(a, d.trim(), c[g]);
        }),
        !0
      );
    }
  }
}
function pt(n, c, a) {
  const o = /^\{(.+)\}$/;
  if (o.test(n)) {
    const y = n.match(o);
    if (y && y[1]) {
      const A = y[1].split(',');
      return (
        (c = U(c) ? c : {}),
        A.forEach((d) => {
          J(a, d.trim(), c[d.trim()]);
        }),
        !0
      );
    }
  }
}
function ht({ defaultValueRef: n, getSchema: c, formModel: a, getProps: o }) {
  function y(l) {
    var v, D;
    if (!U(l)) return {};
    const f = {};
    for (const B of Object.entries(l)) {
      let [, r] = B;
      const [T] = B;
      if (!T || (se(r) && r.length === 0) || Z(r)) continue;
      const u = t(o).transformDateFunc;
      U(r) && (r = u == null ? void 0 : u(r)),
        se(r) &&
          (v = r[0]) != null &&
          v.format &&
          (D = r[1]) != null &&
          D.format &&
          (r = r.map((m) => (u == null ? void 0 : u(m)))),
        de(r) && (r = r.trim()),
        !dt(T, r, f) && !pt(T, r, f) && J(f, T, r);
    }
    return A(f);
  }
  function A(l) {
    const f = t(o).fieldMapToTime;
    if (!f || !Array.isArray(f)) return l;
    for (const [v, [D, B], r = 'YYYY-MM-DD'] of f) {
      if (!v || !D || !B) continue;
      if (!ae(l, v)) {
        _e(l, v);
        continue;
      }
      const [T, u] = ae(l, v),
        [m, b] = Array.isArray(r) ? r : [r, r];
      !G(T) && !je(T) && J(l, D, d(T, m)), !G(u) && !je(u) && J(l, B, d(u, b)), _e(l, v);
    }
    return l;
  }
  function d(l, f) {
    return f === 'timestamp'
      ? W(l).unix()
      : f === 'timestampStartDay'
        ? W(l).startOf('day').unix()
        : W(l).format(f);
  }
  function g() {
    const l = t(c),
      f = {};
    l.forEach((v) => {
      const { defaultValue: D, defaultValueObj: B, componentProps: r = {} } = v,
        T = Object.keys(B || {});
      T.length &&
        T.forEach((u) => {
          (f[u] = B[u]), a[u] === void 0 && (a[u] = B[u]);
        }),
        G(D) || ((f[v.field] = D), a[v.field] === void 0 && (a[v.field] = D)),
        G(r == null ? void 0 : r.defaultValue) ||
          ((f[v.field] = r == null ? void 0 : r.defaultValue),
          a[v.field] === void 0 && (a[v.field] = r == null ? void 0 : r.defaultValue));
    }),
      (n.value = z(f));
  }
  return { handleFormValues: y, initDefault: g };
}
const X = 24;
function mt({
  advanceState: n,
  emit: c,
  getProps: a,
  getSchema: o,
  formModel: y,
  defaultValueRef: A,
}) {
  const d = We(),
    { realWidthRef: g, screenEnum: l, screenRef: f } = at(),
    v = q(() => {
      if (!n.isAdvanced) return 0;
      const m = t(a).emptySpan || 0;
      if (rt(m)) return m;
      if (U(m)) {
        const { span: b = 0 } = m,
          C = t(f);
        return m[C.toLowerCase()] || b || 0;
      }
      return 0;
    }),
    D = Le(T, 30);
  ne(
    [() => t(o), () => n.isAdvanced, () => t(g)],
    () => {
      const { showAdvancedButton: m } = t(a);
      m && D();
    },
    { immediate: !0 },
  );
  function B(m, b = 0, C = !1) {
    const E = t(g),
      j = parseInt(m.md) || parseInt(m.xs) || parseInt(m.sm) || m.span || X,
      N = parseInt(m.lg) || j,
      L = parseInt(m.xl) || N,
      k = parseInt(m.xxl) || L;
    return (
      E <= l.LG ? (b += j) : E < l.XL ? (b += N) : E < l.XXL ? (b += L) : (b += k),
      C
        ? ((n.hideAdvanceBtn = !1),
          b <= X * 2
            ? ((n.hideAdvanceBtn = !0), (n.isAdvanced = !0))
            : b > X * 2 && b <= X * (t(a).autoAdvancedLine || 3)
              ? (n.hideAdvanceBtn = !1)
              : n.isLoad || ((n.isLoad = !0), (n.isAdvanced = !n.isAdvanced)),
          { isAdvanced: n.isAdvanced, itemColSum: b })
        : b > X * (t(a).alwaysShowLines || 1)
          ? { isAdvanced: n.isAdvanced, itemColSum: b }
          : { isAdvanced: !0, itemColSum: b }
    );
  }
  const r = Ye({});
  function T() {
    var E;
    let m = 0,
      b = 0;
    const { baseColProps: C = {} } = t(a);
    for (const j of t(o)) {
      const { show: N, ifShow: L, colProps: k } = j,
        H = { schema: j, model: y, field: j.field, values: $($({}, t(A)), y) };
      let O = !0;
      if (
        (O && xe(L) && (O = L),
        O && Z(L) && (O = L(H)),
        O && xe(N) && (O = N),
        O && Z(N) && (O = N(H)),
        O && (k || C))
      ) {
        const { itemColSum: Q, isAdvanced: e } = B($($({}, C), k), m);
        (m = Q || 0), e && (b = m), (r[j.field] = e);
      }
    }
    (E = d == null ? void 0 : d.proxy) == null || E.$forceUpdate(),
      (n.actionSpan = (b % X) + t(v)),
      B(t(a).actionColOptions || { span: X }, m, !0),
      c('advanced-change', n.isAdvanced);
  }
  function u() {
    n.isAdvanced = !n.isAdvanced;
  }
  return { handleToggleAdvanced: u, fieldsIsAdvancedMap: r };
}
function At(n, c = {}) {
  const a = /^\[(.+)\]$/;
  if (a.test(n)) {
    const o = n.match(a);
    if (o && o[1]) {
      const y = o[1].split(',');
      if (!y.length) return;
      const A = [];
      return (
        y.forEach((d, g) => {
          J(A, g, c[d.trim()]);
        }),
        A.filter(Boolean).length ? A : void 0
      );
    }
  }
}
function yt({
  emit: n,
  getProps: c,
  formModel: a,
  getSchema: o,
  defaultValueRef: y,
  formElRef: A,
  schemaRef: d,
  handleFormValues: g,
}) {
  function l() {
    return _(this, null, function* () {
      const { resetFunc: e, submitOnReset: i } = t(c);
      e && Z(e) && (yield e()),
        t(A) &&
          (Object.keys(a).forEach((s) => {
            const F = t(o).find((w) => w.field === s),
              I = F == null ? void 0 : F.defaultValueObj,
              K = Object.keys(I || {});
            K.length &&
              K.forEach((w) => {
                a[w] = I[w];
              }),
              (a[s] = vt(F, y, s));
          }),
          ye(() => k()),
          n('reset', we(a)),
          i && O());
    });
  }
  const f = () =>
    t(o)
      .map((e) => [...(e.fields || []), e.field])
      .flat(1)
      .filter(Boolean);
  function v(e) {
    return _(this, null, function* () {
      if (Object.keys(e).length === 0) return;
      const i = f(),
        h = [];
      i.forEach((s) => {
        const F = t(o).find((x) => x.field === s),
          I = ae(e, s),
          K = ot(e, s),
          { componentProps: w } = F || {};
        let P = w;
        typeof w == 'function' && (P = P({ formModel: t(a), formActionType: Q }));
        let Y;
        const ie = (x) => (x ? (P != null && P.valueFormat ? x : W(x)) : null);
        if (E(F == null ? void 0 : F.component) && ((Y = At(s, e)), Y)) {
          const x = Y || I;
          if (Array.isArray(x)) {
            const re = [];
            for (const M of x) re.push(ie(M));
            (t(a)[s] = re), h.push(s);
          } else (t(a)[s] = ie(x)), h.push(s);
        }
        if (K) {
          Y = ae(I, s);
          const x = Y || I;
          (t(a)[s] = x), P != null && P.onChange && (P == null || P.onChange(x)), h.push(s);
        }
      }),
        j(h).catch((s) => {});
    });
  }
  function D(e) {
    if (!Array.isArray(e) || (Array.isArray(e) && e.length === 0)) return;
    const i = [],
      h = Object.keys(t(a));
    h &&
      (e.forEach((s) => {
        h.includes(s) && (i.push(s), (t(a)[s] = z(t(ae(y.value, s)))));
      }),
      j(i).catch((s) => {}));
  }
  function B(e) {
    return _(this, null, function* () {
      const i = z(t(o));
      if (!e) return;
      let h = de(e) ? [e] : e;
      de(e) && (h = [e]);
      for (const s of h) r(s, i);
      d.value = i;
    });
  }
  function r(e, i) {
    if (de(e)) {
      const h = i.findIndex((s) => s.field === e);
      h !== -1 && (delete a[e], i.splice(h, 1));
    }
  }
  function T(e, i, h = !1) {
    return _(this, null, function* () {
      const s = z(t(o)),
        F = Array.isArray(e) ? e.map((w) => w.field) : [e.field];
      if (s.find((w) => F.includes(w.field))) {
        Ae('There are schemas that have already been added');
        return;
      }
      const I = s.findIndex((w) => w.field === i),
        K = U(e) ? [e] : e;
      !i || I === -1 || h
        ? h
          ? s.unshift(...K)
          : s.push(...K)
        : I !== -1 && s.splice(I + 1, 0, ...K),
        (d.value = s),
        b(e);
    });
  }
  function u(e) {
    return _(this, null, function* () {
      let i = [];
      if (
        (U(e) && i.push(e),
        se(e) && (i = [...e]),
        !i.every((s) => fe(s.component) || (Reflect.has(s, 'field') && s.field)))
      ) {
        Ae(
          'All children of the form Schema array that need to be updated must contain the `field` field',
        );
        return;
      }
      d.value = i;
    });
  }
  function m(e) {
    return _(this, null, function* () {
      let i = [];
      if (
        (U(e) && i.push(e),
        se(e) && (i = [...e]),
        !i.every((I) => fe(I.component) || (Reflect.has(I, 'field') && I.field)))
      ) {
        Ae(
          'All children of the form Schema array that need to be updated must contain the `field` field',
        );
        return;
      }
      const s = [],
        F = [];
      t(o).forEach((I) => {
        const K = i.find((w) => I.field === w.field);
        if (K) {
          const w = Ke(I, K);
          F.push(w), s.push(w);
        } else s.push(I);
      }),
        b(F),
        (d.value = ct(s, 'field'));
    });
  }
  function b(e) {
    let i = [];
    U(e) && i.push(e), se(e) && (i = [...e]);
    const h = {},
      s = C();
    i.forEach((F) => {
      !fe(F.component) &&
        Reflect.has(F, 'field') &&
        F.field &&
        !G(F.defaultValue) &&
        (!(F.field in s) || G(s[F.field])) &&
        (h[F.field] = F.defaultValue);
    }),
      v(h);
  }
  function C() {
    return t(A) ? g(we(t(a))) : {};
  }
  function E(e) {
    return $e.includes(e);
  }
  function j(e) {
    return _(this, null, function* () {
      var h;
      const i = yield (h = t(A)) == null ? void 0 : h.validateFields(e);
      return g(i);
    });
  }
  function N(e) {
    return _(this, null, function* () {
      var i;
      yield (i = t(A)) == null ? void 0 : i.setProps(e);
    });
  }
  function L(e) {
    return _(this, null, function* () {
      var s;
      let i;
      e === void 0 ? (i = f()) : (i = e === Array.isArray(e) ? e : void 0);
      const h = yield (s = t(A)) == null ? void 0 : s.validate(i);
      return g(h);
    });
  }
  function k(e) {
    return _(this, null, function* () {
      var i;
      yield (i = t(A)) == null ? void 0 : i.clearValidate(e);
    });
  }
  function H(e, i) {
    return _(this, null, function* () {
      var h;
      yield (h = t(A)) == null ? void 0 : h.scrollToField(e, i);
    });
  }
  function O(e) {
    return _(this, null, function* () {
      e && e.preventDefault();
      const { submitFunc: i } = t(c);
      if (i && Z(i)) {
        yield i();
        return;
      }
      if (t(A))
        try {
          const s = yield L();
          n('submit', s);
        } catch (s) {
          if ((s == null ? void 0 : s.outOfDate) === !1 && s != null && s.errorFields) return;
          throw new Error(s);
        }
    });
  }
  const Q = {
    getFieldsValue: C,
    setFieldsValue: v,
    resetFields: l,
    updateSchema: m,
    resetSchema: u,
    setProps: N,
    removeSchemaByField: B,
    appendSchemaByField: T,
    clearValidate: k,
    validateFields: j,
    validate: L,
    submit: O,
    scrollToField: H,
  };
  return {
    handleSubmit: O,
    clearValidate: k,
    validate: L,
    validateFields: j,
    getFieldsValue: C,
    updateSchema: m,
    resetSchema: u,
    appendSchemaByField: T,
    removeSchemaByField: B,
    resetFields: l,
    setFieldsValue: v,
    scrollToField: H,
    resetDefaultField: D,
  };
}
function vt(n, c, a) {
  let o = z(c.value[a]);
  return gt(n)
    ? G(o)
      ? void 0
      : o
    : (!o && n && Ft(n) && (o = [0, 0]), !o && n && n.component === 'ApiTree' && (o = []), o);
}
function Ft(n) {
  if (n.component === 'Slider' && n.componentProps && 'range' in n.componentProps) return !0;
}
function gt(n) {
  return (n == null ? void 0 : n.component) && st.includes(n.component);
}
function bt(y) {
  return _(
    this,
    arguments,
    function* ({ getSchema: n, getProps: c, formElRef: a, isInitedDefault: o }) {
      Xe(() =>
        _(this, null, function* () {
          if (t(o) || !t(c).autoFocusFirstItem) return;
          yield ye();
          const A = t(n),
            d = t(a),
            g = d == null ? void 0 : d.$el;
          if (!d || !g || !A || A.length === 0) return;
          const l = A[0];
          if (!l.component || !l.component.includes('Input')) return;
          const f = g.querySelector('.ant-row:first-child input');
          f && (f == null || f.focus());
        }),
      );
    },
  );
}
const _t = qe({
  name: 'BasicForm',
  __name: 'BasicForm',
  props: et,
  emits: ['advanced-change', 'reset', 'submit', 'register', 'field-value-change'],
  setup(n, { expose: c, emit: a }) {
    const o = n,
      y = a,
      A = Ge(),
      d = Ie({}),
      g = ft(),
      l = Ie({ isAdvanced: !0, hideAdvanceBtn: !1, isLoad: !1, actionSpan: 6 }),
      f = te({}),
      v = te(!1),
      D = te(),
      B = te(null),
      r = te(null),
      { prefixCls: T } = it('basic-form'),
      u = q(() => $($({}, o), t(D))),
      m = q(() => [T, { [`${T}--compact`]: t(u).compact }]),
      b = q(() => {
        const { baseRowStyle: p = {}, rowProps: S } = t(u);
        return $({ style: p }, S);
      }),
      C = q(() => $($($({}, A), o), t(u))),
      E = q(() => {
        var S;
        const p = z(t(B) || t(u).schemas);
        for (const V of p) {
          const {
            defaultValue: R,
            component: ee,
            componentProps: oe = {},
            isHandleDateDefaultValue: Se = !0,
            field: Re,
            isHandleDefaultValue: Ce = !0,
            valueFormat: ve,
          } = V;
          if (Se && R && ee && $e.includes(ee)) {
            const Ne = {
                schema: V,
                tableAction: (S = o.tableAction) != null ? S : {},
                formModel: d,
                formActionType: {},
              },
              ce = oe ? (typeof oe == 'function' ? oe(Ne).valueFormat : oe.valueFormat) : null;
            if (!Array.isArray(R)) V.defaultValue = ce ? W(R).format(ce) : W(R);
            else {
              const Fe = [];
              R.forEach((ge) => {
                Fe.push(ce ? W(ge).format(ce) : W(ge));
              }),
                (V.defaultValue = Fe);
            }
          }
          Ce &&
            R &&
            ee &&
            Z(ve) &&
            (V.defaultValue = ve({ value: R, schema: V, model: d, field: Re }));
        }
        return t(u).showAdvancedButton ? p.filter((V) => !fe(V.component)) : p;
      }),
      { handleToggleAdvanced: j, fieldsIsAdvancedMap: N } = mt({
        advanceState: l,
        emit: y,
        getProps: u,
        getSchema: E,
        formModel: d,
        defaultValueRef: f,
      }),
      { handleFormValues: L, initDefault: k } = ht({
        getProps: u,
        defaultValueRef: f,
        getSchema: E,
        formModel: d,
      });
    bt({ getSchema: E, getProps: u, isInitedDefault: v, formElRef: r });
    const {
      handleSubmit: H,
      setFieldsValue: O,
      clearValidate: Q,
      validate: e,
      validateFields: i,
      getFieldsValue: h,
      updateSchema: s,
      resetSchema: F,
      appendSchemaByField: I,
      removeSchemaByField: K,
      resetFields: w,
      scrollToField: P,
      resetDefaultField: Y,
    } = yt({
      emit: y,
      getProps: u,
      formModel: d,
      getSchema: E,
      defaultValueRef: f,
      formElRef: r,
      schemaRef: B,
      handleFormValues: L,
    });
    tt({ resetAction: w, submitAction: H }),
      ne(
        () => t(u).model,
        () => {
          const { model: p } = t(u);
          p && O(p);
        },
        { immediate: !0 },
      ),
      ne(
        () => o.schemas,
        (p) => {
          F(p != null ? p : []);
        },
      ),
      ne(
        () => E.value,
        (p) => {
          ye(() => {
            var S;
            (S = g == null ? void 0 : g.redoModalHeight) == null || S.call(g);
          }),
            !t(v) && p != null && p.length && (k(), (v.value = !0));
        },
      ),
      ne(
        () => d,
        Le(() => {
          t(u).submitOnChange && H();
        }, 300),
        { deep: !0 },
      );
    function ie(p) {
      return _(this, null, function* () {
        D.value = Ke(t(D) || {}, p);
      });
    }
    function x(p, S, V) {
      (d[p] = S),
        y('field-value-change', p, S),
        V && V.itemProps && !V.itemProps.autoLink && i([p]).catch((R) => {});
    }
    function re(p) {
      const { autoSubmitOnEnter: S } = t(u);
      if (S && p.key === 'Enter' && p.target && p.target instanceof HTMLElement) {
        const V = p.target;
        V && V.tagName && V.tagName.toUpperCase() === 'INPUT' && H();
      }
    }
    const M = {
        getFieldsValue: h,
        setFieldsValue: O,
        resetFields: w,
        updateSchema: s,
        resetSchema: F,
        setProps: ie,
        removeSchemaByField: K,
        appendSchemaByField: I,
        clearValidate: Q,
        validateFields: i,
        validate: e,
        submit: H,
        scrollToField: P,
        resetDefaultField: Y,
      },
      Pe = q(() => $($({}, u.value), l));
    return (
      c($({}, M)),
      Je(() => {
        k(), y('register', M);
      }),
      (p, S) => (
        pe(),
        Te(
          t(ut),
          me(C.value, {
            class: m.value,
            ref_key: 'formElRef',
            ref: r,
            model: d,
            onKeypress: Qe(re, ['enter']),
          }),
          {
            default: le(() => [
              Be(
                t(lt),
                Ee(Oe(b.value)),
                {
                  default: le(() => [
                    ue(p.$slots, 'formHeader'),
                    (pe(!0),
                    ze(
                      Ze,
                      null,
                      he(
                        E.value,
                        (V) => (
                          pe(),
                          Te(
                            Me,
                            {
                              key: V.field,
                              isAdvanced: t(N)[V.field],
                              tableAction: p.tableAction,
                              formActionType: M,
                              schema: V,
                              formProps: u.value,
                              allDefaultValues: f.value,
                              formModel: d,
                              setFormModel: x,
                            },
                            De({ _: 2 }, [
                              he(Object.keys(p.$slots), (R) => ({
                                name: R,
                                fn: le((ee) => [ue(p.$slots, R, me({ ref_for: !0 }, ee || {}))]),
                              })),
                            ]),
                            1032,
                            [
                              'isAdvanced',
                              'tableAction',
                              'schema',
                              'formProps',
                              'allDefaultValues',
                              'formModel',
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                    Be(
                      nt,
                      me(Pe.value, { onToggleAdvanced: t(j) }),
                      De({ _: 2 }, [
                        he(
                          ['resetBefore', 'submitBefore', 'advanceBefore', 'advanceAfter'],
                          (V) => ({ name: V, fn: le((R) => [ue(p.$slots, V, Ee(Oe(R || {})))]) }),
                        ),
                      ]),
                      1040,
                      ['onToggleAdvanced'],
                    ),
                    ue(p.$slots, 'formFooter'),
                  ]),
                  _: 3,
                },
                16,
              ),
            ]),
            _: 3,
          },
          16,
          ['class', 'model'],
        )
      )
    );
  },
});
export { _t as _ };