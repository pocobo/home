var y = Object.defineProperty,
  P = Object.defineProperties;
var U = Object.getOwnPropertyDescriptors;
var k = Object.getOwnPropertySymbols;
var B = Object.prototype.hasOwnProperty,
  D = Object.prototype.propertyIsEnumerable;
var _ = (e, n, t) =>
    n in e ? y(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[n] = t),
  C = (e, n) => {
    for (var t in n || (n = {})) B.call(n, t) && _(e, t, n[t]);
    if (k) for (var t of k(n)) D.call(n, t) && _(e, t, n[t]);
    return e;
  },
  O = (e, n) => P(e, U(n));
import { u as w } from './useFormDesignState-DaR4Tnkk.js';
import { c as $ } from './index-DrPvFpAA.js';
import { a as N, z as V, c as A } from '../index.js';
import { E } from './antd-BmrhB3rb.js';
import {
  d as M,
  r as S,
  I as T,
  a7 as b,
  Z as l,
  _ as u,
  F as h,
  aa as F,
  $ as c,
  k as i,
  G,
} from './vue-BjERyvPm.js';
const { createMessage: p } = N(),
  j = Object.assign({
    success: (e) => {
      p.success(e);
    },
    error: (e) => {
      p.error(e);
    },
    warning: (e) => {
      p.warning(e);
    },
    info: (e) => {
      p.info(e);
    },
  }),
  z = j,
  L = M({
    name: 'FormOptions',
    components: { Input: E, Icon: V },
    setup() {
      var r;
      const e = S({}),
        { formConfig: n } = w(),
        t =
          ((r = n.value.currentItem) == null ? void 0 : r.component) === 'TreeSelect'
            ? 'treeData'
            : 'options',
        m = () => {
          var s, a, g, I;
          ((a = (s = n.value.currentItem) == null ? void 0 : s.componentProps) != null && a[t]) ||
            (n.value.currentItem.componentProps[t] = []);
          const o =
            ((I = (g = n.value.currentItem) == null ? void 0 : g.componentProps) == null
              ? void 0
              : I[t].length) + 1;
          n.value.currentItem.componentProps[t].push({ label: `选项${o}`, value: '' + o });
        },
        v = (o) => {
          var s, a;
          $(
            (a = (s = n.value.currentItem) == null ? void 0 : s.componentProps) == null
              ? void 0
              : a[t],
            o,
          );
        },
        f = () => {
          var o, s;
          (s = (o = n.value.currentItem) == null ? void 0 : o.columns) == null ||
            s.push({ span: 12, children: [] });
        },
        d = (o) => {
          if (o === 0) return z.warning('请至少保留一个栅格');
          $(n.value.currentItem.columns, o);
        };
      return O(C({}, T(e)), {
        formConfig: n,
        addOptions: m,
        deleteOptions: v,
        key: t,
        deleteGridOptions: d,
        addGridOptions: f,
      });
    },
  }),
  R = { key: 0 },
  Z = { class: 'options-box' },
  q = ['onClick'],
  H = { key: 1 },
  J = { class: 'options-box' },
  K = ['onClick'];
function Q(e, n, t, m, v, f) {
  const d = b('Input'),
    r = b('Icon');
  return (
    l(),
    u('div', null, [
      ['Grid'].includes(e.formConfig.currentItem.component)
        ? (l(),
          u('div', R, [
            (l(!0),
            u(
              h,
              null,
              F(
                e.formConfig.currentItem.columns,
                (o, s) => (
                  l(),
                  u('div', { key: s }, [
                    c('div', Z, [
                      i(
                        d,
                        {
                          value: o.span,
                          'onUpdate:value': (a) => (o.span = a),
                          class: 'options-value',
                        },
                        null,
                        8,
                        ['value', 'onUpdate:value'],
                      ),
                      c(
                        'a',
                        { class: 'options-delete', onClick: (a) => e.deleteGridOptions(s) },
                        [i(r, { icon: 'ant-design:delete-outlined' })],
                        8,
                        q,
                      ),
                    ]),
                  ])
                ),
              ),
              128,
            )),
            c(
              'a',
              { onClick: n[0] || (n[0] = (...o) => e.addGridOptions && e.addGridOptions(...o)) },
              [i(r, { icon: 'ant-design:file-add-outlined' }), G(' 添加栅格 ')],
            ),
          ]))
        : (l(),
          u('div', H, [
            (l(!0),
            u(
              h,
              null,
              F(
                e.formConfig.currentItem.componentProps[e.key],
                (o, s) => (
                  l(),
                  u('div', { key: s }, [
                    c('div', J, [
                      i(d, { value: o.label, 'onUpdate:value': (a) => (o.label = a) }, null, 8, [
                        'value',
                        'onUpdate:value',
                      ]),
                      i(
                        d,
                        {
                          value: o.value,
                          'onUpdate:value': (a) => (o.value = a),
                          class: 'options-value',
                        },
                        null,
                        8,
                        ['value', 'onUpdate:value'],
                      ),
                      c(
                        'a',
                        { class: 'options-delete', onClick: (a) => e.deleteOptions(s) },
                        [i(r, { icon: 'ant-design:delete-outlined' })],
                        8,
                        K,
                      ),
                    ]),
                  ])
                ),
              ),
              128,
            )),
            c('a', { onClick: n[1] || (n[1] = (...o) => e.addOptions && e.addOptions(...o)) }, [
              i(r, { icon: 'ant-design:file-add-outlined' }),
              G(' 添加选项 '),
            ]),
          ])),
    ])
  );
}
const oe = A(L, [
  ['render', Q],
  ['__scopeId', 'data-v-a999f6b7'],
]);
export { oe as default };
