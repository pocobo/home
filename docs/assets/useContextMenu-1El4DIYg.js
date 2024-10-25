var $ = Object.defineProperty;
var C = Object.getOwnPropertySymbols;
var j = Object.prototype.hasOwnProperty,
  O = Object.prototype.propertyIsEnumerable;
var I = (e, t, n) =>
    t in e ? $(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  g = (e, t) => {
    for (var n in t || (t = {})) j.call(t, n) && I(e, n, t[n]);
    if (C) for (var n of C(t)) O.call(t, n) && I(e, n, t[n]);
    return e;
  };
import { z as D, aE as N } from '../index.js';
import { x as v, a4 as S } from './antd-BmrhB3rb.js';
import {
  d as P,
  f as w,
  c as z,
  o as A,
  y as F,
  b as E,
  u as h,
  k as c,
  i as H,
  F as R,
  x as T,
  g as V,
} from './vue-BjERyvPm.js';
function W(e) {
  return (
    typeof e == 'function' || (Object.prototype.toString.call(e) === '[object Object]' && !H(e))
  );
}
const b = 'context-menu',
  B = {
    width: { type: Number, default: 156 },
    customEvent: { type: Object, default: null },
    styles: { type: Object },
    showIcon: { type: Boolean, default: !0 },
    axis: {
      type: Object,
      default() {
        return { x: 0, y: 0 };
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  k = (e) => {
    const { item: t } = e;
    return c(
      'span',
      {
        style: 'display: inline-block; width: 100%; ',
        class: 'px-4',
        onClick: e.handler.bind(null, t),
      },
      [
        e.showIcon && t.icon && c(D, { class: 'mr-2', icon: t.icon }, null),
        c('span', null, [t.label]),
      ],
    );
  },
  U = P({
    name: 'ContextMenu',
    props: B,
    setup(e) {
      const t = w(null),
        n = w(!1),
        r = z(() => {
          const { axis: o, items: s, styles: l, width: i } = e,
            { x: a, y: d } = o || { x: 0, y: 0 },
            y = (s || []).length * 40,
            p = i,
            x = document.body,
            M = x.clientWidth < a + p ? a - p : a,
            L = x.clientHeight < d + y ? d - y : d;
          return g(
            {
              position: 'absolute',
              width: `${i}px`,
              left: `${M + 1}px`,
              top: `${L + 1}px`,
              zIndex: 9999,
            },
            l,
          );
        });
      A(() => {
        F(() => (n.value = !0));
      }),
        E(() => {
          const o = h(t);
          o && document.body.removeChild(o);
        });
      function m(o, s) {
        const { handler: l, disabled: i } = o;
        i ||
          ((n.value = !1),
          s == null || s.stopPropagation(),
          s == null || s.preventDefault(),
          l == null || l());
      }
      function u(o) {
        return o
          .filter((l) => !l.hidden)
          .map((l) => {
            const { disabled: i, label: a, children: d, divider: y = !1 } = l,
              p = { item: l, handler: m, showIcon: e.showIcon };
            return !d || d.length === 0
              ? c(R, null, [
                  c(
                    v.Item,
                    { disabled: i, class: `${b}__item`, key: a },
                    { default: () => [c(k, p, null)] },
                  ),
                  y ? c(S, { key: `d-${a}` }, null) : null,
                ])
              : h(n)
                ? c(
                    v.SubMenu,
                    { key: a, disabled: i, popupClassName: `${b}__popup` },
                    { title: () => c(k, p, null), default: () => u(d) },
                  )
                : null;
          });
      }
      return () => {
        let o;
        if (!h(n)) return null;
        const { items: s } = e;
        return c(
          v,
          { inlineIndent: 12, mode: 'vertical', class: b, ref: t, style: h(r) },
          W((o = u(s))) ? o : { default: () => [o] },
        );
      };
    },
  }),
  f = { domList: [], resolve: () => {} },
  X = function (e) {
    const { event: t } = e || {};
    if ((t && (t == null || t.preventDefault()), !!N))
      return new Promise((n) => {
        const r = document.body,
          m = document.createElement('div'),
          u = {};
        e.styles && (u.styles = e.styles),
          e.items && (u.items = e.items),
          e.event && ((u.customEvent = t), (u.axis = { x: t.clientX, y: t.clientY + r.scrollTop }));
        const o = c(U, u);
        T(o, m);
        const s = function () {
          f.resolve('');
        };
        f.domList.push(m);
        const l = function () {
          f.domList.forEach((i) => {
            try {
              i && r.removeChild(i);
            } catch (a) {}
          }),
            r.removeEventListener('click', s),
            r.removeEventListener('scroll', s);
        };
        (f.resolve = function (i) {
          l(), n(i);
        }),
          l(),
          r.appendChild(m),
          r.addEventListener('click', s),
          r.addEventListener('scroll', s);
      });
  },
  _ = function () {
    f && (f.resolve(''), (f.domList = []));
  };
function K(e = !0) {
  return (
    V() &&
      e &&
      E(() => {
        _();
      }),
    [X, _]
  );
}
export { K as u };