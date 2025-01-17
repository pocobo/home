import { e as d } from './formItemPropsConfig-3IO7EMJW.js';
import C from './RuleProps-D-jHI4R_.js';
import { u as _ } from './useFormDesignState-DaR4Tnkk.js';
import {
  aI as y,
  E as I,
  a2 as P,
  Z as b,
  at as k,
  a3 as v,
  W as F,
  au as g,
  bp as h,
} from './antd-BmrhB3rb.js';
import {
  d as E,
  a7 as m,
  Z as r,
  _ as n,
  a8 as s,
  a9 as p,
  F as w,
  aa as S,
  ai as $,
  ac as A,
  ab as a,
} from './vue-BjERyvPm.js';
import { c as B } from '../index.js';
import './formItemConfig-BWXCgi90.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './index-DrPvFpAA.js';
const D = E({
    name: 'FormItemProps',
    components: {
      RuleProps: C,
      Empty: y,
      Input: I,
      Form: P,
      FormItem: b,
      Switch: k,
      Checkbox: v,
      Select: F,
      Slider: g,
    },
    setup() {
      const { formConfig: o } = _();
      return {
        baseItemColumnProps: d,
        formConfig: o,
        showProps: (t) => (t && h(t) ? !t.includes(o.value.currentItem.component) : !0),
      };
    },
  }),
  U = { class: 'properties-content' },
  Z = { key: 0, class: 'properties-body' };
function L(o, i, t, N, R, V) {
  const c = m('Empty'),
    u = m('FormItem'),
    l = m('Form');
  return (
    r(),
    n('div', U, [
      o.formConfig.currentItem
        ? (r(),
          n('div', Z, [
            o.formConfig.currentItem.key
              ? (r(),
                s(
                  l,
                  { key: 1, 'label-align': 'left', layout: 'vertical' },
                  {
                    default: p(() => [
                      (r(!0),
                      n(
                        w,
                        null,
                        S(
                          o.baseItemColumnProps,
                          (e) => (
                            r(),
                            n('div', { key: e.name }, [
                              o.showProps(e.exclude)
                                ? (r(),
                                  s(
                                    u,
                                    { key: 0, label: e.label },
                                    {
                                      default: p(() => [
                                        o.formConfig.currentItem.colProps && e.component
                                          ? (r(),
                                            s(
                                              $(e.component),
                                              A(
                                                { key: 0, class: 'component-props', ref_for: !0 },
                                                e.componentProps,
                                                {
                                                  value: o.formConfig.currentItem.colProps[e.name],
                                                  'onUpdate:value': (f) =>
                                                    (o.formConfig.currentItem.colProps[e.name] = f),
                                                },
                                              ),
                                              null,
                                              16,
                                              ['value', 'onUpdate:value'],
                                            ))
                                          : a('', !0),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ['label'],
                                  ))
                                : a('', !0),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  },
                ))
              : (r(), s(c, { key: 0, class: 'hint-box', description: '未选择控件' })),
          ]))
        : a('', !0),
    ])
  );
}
const po = B(D, [['render', L]]);
export { po as default };
