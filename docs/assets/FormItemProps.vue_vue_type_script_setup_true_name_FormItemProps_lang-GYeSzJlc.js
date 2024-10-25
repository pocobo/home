import { b as y, a as _, c as h, d as C } from './formItemPropsConfig-3IO7EMJW.js';
import F from './RuleProps-D-jHI4R_.js';
import { u as U } from './useFormDesignState-DaR4Tnkk.js';
import {
  aI as g,
  Z as p,
  V as x,
  a3 as w,
  at as V,
  E as q,
  a2 as B,
  bp as D,
} from './antd-BmrhB3rb.js';
import {
  d as E,
  w as G,
  c as N,
  Z as a,
  _ as l,
  u as r,
  a8 as o,
  a9 as u,
  F as i,
  aa as v,
  ai as I,
  ac as f,
  ab as n,
  k,
  G as S,
  a0 as A,
  a1 as L,
} from './vue-BjERyvPm.js';
const Z = { class: 'properties-content' },
  z = { key: 0, class: 'properties-body' },
  M = E({
    __name: 'FormItemProps',
    setup(R) {
      const { formConfig: t } = U();
      G(
        () => t.value,
        () => {
          t.value.currentItem &&
            ((t.value.currentItem.itemProps = t.value.currentItem.itemProps || {}),
            (t.value.currentItem.itemProps.labelCol = t.value.currentItem.itemProps.labelCol || {}),
            (t.value.currentItem.itemProps.wrapperCol =
              t.value.currentItem.itemProps.wrapperCol || {}));
        },
        { deep: !0, immediate: !0 },
      );
      const m = (c) => (c && D(c) ? !c.includes(t.value.currentItem.component) : !0),
        P = N(() => y.filter((c) => m(c.exclude)));
      return (c, d) => {
        var b;
        return (
          a(),
          l('div', Z, [
            (b = r(t).currentItem) != null && b.itemProps
              ? (a(),
                l('div', z, [
                  r(t).currentItem.key
                    ? (a(),
                      o(
                        r(B),
                        { key: 1, 'label-align': 'left', layout: 'vertical' },
                        {
                          default: u(() => [
                            (a(!0),
                            l(
                              i,
                              null,
                              v(
                                r(_),
                                (e) => (
                                  a(),
                                  l('div', { key: e.name }, [
                                    m(e.exclude)
                                      ? (a(),
                                        o(
                                          r(p),
                                          { key: 0, label: e.label },
                                          {
                                            default: u(() => [
                                              e.component
                                                ? (a(),
                                                  o(
                                                    I(e.component),
                                                    f(
                                                      {
                                                        key: 0,
                                                        class: 'component-props',
                                                        ref_for: !0,
                                                      },
                                                      e.componentProps,
                                                      {
                                                        value: r(t).currentItem[e.name],
                                                        'onUpdate:value': (s) =>
                                                          (r(t).currentItem[e.name] = s),
                                                      },
                                                    ),
                                                    null,
                                                    16,
                                                    ['value', 'onUpdate:value'],
                                                  ))
                                                : n('', !0),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['label'],
                                        ))
                                      : n('', !0),
                                  ])
                                ),
                              ),
                              128,
                            )),
                            (a(!0),
                            l(
                              i,
                              null,
                              v(
                                r(h),
                                (e) => (
                                  a(),
                                  l('div', { key: e.name }, [
                                    m(e.exclude)
                                      ? (a(),
                                        o(
                                          r(p),
                                          { key: 0, label: e.label },
                                          {
                                            default: u(() => [
                                              e.component
                                                ? (a(),
                                                  o(
                                                    I(e.component),
                                                    f(
                                                      {
                                                        key: 0,
                                                        class: 'component-props',
                                                        ref_for: !0,
                                                      },
                                                      e.componentProps,
                                                      {
                                                        value: r(t).currentItem.itemProps[e.name],
                                                        'onUpdate:value': (s) =>
                                                          (r(t).currentItem.itemProps[e.name] = s),
                                                      },
                                                    ),
                                                    null,
                                                    16,
                                                    ['value', 'onUpdate:value'],
                                                  ))
                                                : n('', !0),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['label'],
                                        ))
                                      : n('', !0),
                                  ])
                                ),
                              ),
                              128,
                            )),
                            (a(!0),
                            l(
                              i,
                              null,
                              v(
                                r(C),
                                (e) => (
                                  a(),
                                  l('div', { key: e.name }, [
                                    m(e.exclude)
                                      ? (a(),
                                        o(
                                          r(p),
                                          { key: 0, label: e.label },
                                          {
                                            default: u(() => [
                                              e.component
                                                ? (a(),
                                                  o(
                                                    I(e.component),
                                                    f(
                                                      {
                                                        key: 0,
                                                        class: 'component-props',
                                                        ref_for: !0,
                                                      },
                                                      e.componentProps,
                                                      {
                                                        value:
                                                          r(t).currentItem.itemProps[e.name].span,
                                                        'onUpdate:value': (s) =>
                                                          (r(t).currentItem.itemProps[e.name].span =
                                                            s),
                                                      },
                                                    ),
                                                    null,
                                                    16,
                                                    ['value', 'onUpdate:value'],
                                                  ))
                                                : n('', !0),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ['label'],
                                        ))
                                      : n('', !0),
                                  ])
                                ),
                              ),
                              128,
                            )),
                            P.value.length
                              ? (a(),
                                o(
                                  r(p),
                                  { key: 0, label: '控制属性' },
                                  {
                                    default: u(() => [
                                      (a(!0),
                                      l(
                                        i,
                                        null,
                                        v(
                                          P.value,
                                          (e) => (
                                            a(),
                                            o(
                                              r(x),
                                              { key: e.name },
                                              {
                                                default: u(() => [
                                                  k(
                                                    r(w),
                                                    {
                                                      checked: r(t).currentItem.itemProps[e.name],
                                                      'onUpdate:checked': (s) =>
                                                        (r(t).currentItem.itemProps[e.name] = s),
                                                    },
                                                    { default: u(() => [S(A(e.label), 1)]), _: 2 },
                                                    1032,
                                                    ['checked', 'onUpdate:checked'],
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1024,
                                            )
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]),
                                    _: 1,
                                  },
                                ))
                              : n('', !0),
                            ['Grid'].includes(r(t).currentItem.component)
                              ? n('', !0)
                              : (a(),
                                o(
                                  r(p),
                                  { key: 1, label: '是否必选' },
                                  {
                                    default: u(() => [
                                      k(
                                        r(V),
                                        {
                                          checked: r(t).currentItem.itemProps.required,
                                          'onUpdate:checked':
                                            d[0] ||
                                            (d[0] = (e) =>
                                              (r(t).currentItem.itemProps.required = e)),
                                        },
                                        null,
                                        8,
                                        ['checked'],
                                      ),
                                      r(t).currentItem.itemProps.required
                                        ? (a(),
                                          o(
                                            r(q),
                                            {
                                              key: 0,
                                              value: r(t).currentItem.itemProps.message,
                                              'onUpdate:value':
                                                d[1] ||
                                                (d[1] = (e) =>
                                                  (r(t).currentItem.itemProps.message = e)),
                                              placeholder: '请输入必选提示',
                                            },
                                            null,
                                            8,
                                            ['value'],
                                          ))
                                        : n('', !0),
                                    ]),
                                    _: 1,
                                  },
                                )),
                            ['Grid'].includes(r(t).currentItem.component)
                              ? n('', !0)
                              : (a(),
                                o(
                                  r(p),
                                  {
                                    key: 2,
                                    label: '校验规则',
                                    class: L({
                                      'form-rule-props': !!r(t).currentItem.itemProps.rules,
                                    }),
                                  },
                                  { default: u(() => [k(F)]), _: 1 },
                                  8,
                                  ['class'],
                                )),
                          ]),
                          _: 1,
                        },
                      ))
                    : (a(), o(r(g), { key: 0, class: 'hint-box', description: '未选择控件' })),
                ]))
              : n('', !0),
          ])
        );
      };
    },
  });
export { M as _ };
