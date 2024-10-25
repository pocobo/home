import C from './index-St208Lgf.js';
import {
  d as g,
  a7 as t,
  Z as r,
  a8 as n,
  a9 as s,
  _ as a,
  F as p,
  aa as i,
  ad as $,
  ae as y,
} from './vue-BjERyvPm.js';
import { U as k, V as R } from './antd-BmrhB3rb.js';
import { c as D } from '../index.js';
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
import './useFormDesignState-DaR4Tnkk.js';
const M = g({
  name: 'FormRender',
  components: { VFormItem: C, Row: k, Col: R },
  props: {
    formData: { type: Object, default: () => ({}) },
    schema: { type: Object, default: () => ({}) },
    formConfig: { type: Object, default: () => [] },
    setFormModel: { type: Function, default: null },
  },
  emits: ['change', 'submit', 'reset'],
  setup(o) {},
});
function b(o, e, v, w, P, V) {
  const l = t('FormRender', !0),
    f = t('Col'),
    d = t('Row'),
    u = t('VFormItem');
  return ['Grid'].includes(o.schema.component)
    ? (r(),
      n(
        d,
        { key: 0, class: 'grid-row' },
        {
          default: s(() => [
            (r(!0),
            a(
              p,
              null,
              i(
                o.schema.columns,
                (m, c) => (
                  r(),
                  n(
                    f,
                    { class: 'grid-col', key: c, span: m.span },
                    {
                      default: s(() => [
                        (r(!0),
                        a(
                          p,
                          null,
                          i(
                            m.children,
                            (F, h) => (
                              r(),
                              n(
                                l,
                                {
                                  key: h,
                                  schema: F,
                                  formData: o.formData,
                                  formConfig: o.formConfig,
                                  setFormModel: o.setFormModel,
                                },
                                null,
                                8,
                                ['schema', 'formData', 'formConfig', 'setFormModel'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['span'],
                  )
                ),
              ),
              128,
            )),
          ]),
          _: 1,
        },
      ))
    : (r(),
      n(
        u,
        {
          key: 1,
          formConfig: o.formConfig,
          schema: o.schema,
          formData: o.formData,
          setFormModel: o.setFormModel,
          onChange: e[0] || (e[0] = (m) => o.$emit('change', { schema: o.schema, value: m })),
          onSubmit: e[1] || (e[1] = (m) => o.$emit('submit', o.schema)),
          onReset: e[2] || (e[2] = (m) => o.$emit('reset')),
        },
        $({ _: 2 }, [
          o.schema.componentProps && o.schema.componentProps.slotName
            ? {
                name: o.schema.componentProps.slotName,
                fn: s(() => [y(o.$slots, o.schema.componentProps.slotName)]),
                key: '0',
              }
            : void 0,
        ]),
        1032,
        ['formConfig', 'schema', 'formData', 'setFormModel'],
      ));
}
const _ = D(M, [['render', b]]);
export { _ as default };
