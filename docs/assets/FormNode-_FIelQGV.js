var I = Object.defineProperty,
  g = Object.defineProperties;
var C = Object.getOwnPropertyDescriptors;
var a = Object.getOwnPropertySymbols;
var F = Object.prototype.hasOwnProperty,
  k = Object.prototype.propertyIsEnumerable;
var i = (e, o, t) =>
    o in e ? I(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[o] = t),
  n = (e, o) => {
    for (var t in o || (o = {})) F.call(o, t) && i(e, t, o[t]);
    if (a) for (var t of a(o)) k.call(o, t) && i(e, t, o[t]);
    return e;
  },
  p = (e, o) => g(e, C(o));
import v from './FormNodeOperate-qJmXbTvC.js';
import { u as N } from './useFormDesignState-DaR4Tnkk.js';
import S from './index-St208Lgf.js';
import {
  d as b,
  r as y,
  I as V,
  a7 as c,
  Z as $,
  _ as B,
  $ as f,
  k as d,
  a0 as O,
  a1 as _,
  B as D,
} from './vue-BjERyvPm.js';
import { c as w } from '../index.js';
import './index-DrPvFpAA.js';
import './antd-BmrhB3rb.js';
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
const M = b({
    name: 'FormNode',
    components: { VFormItem: S, FormNodeOperate: v },
    props: { schema: { type: Object, required: !0 } },
    setup(e) {
      const { formConfig: o, formDesignMethods: t } = N(),
        r = y({}),
        m = () => {
          t.handleSetSelectItem(e.schema);
        };
      return p(n({}, V(r)), { handleSelectItem: m, formConfig: o });
    },
  }),
  j = { class: 'form-item-box' },
  q = { class: 'show-key-box' };
function z(e, o, t, r, m, E) {
  var s;
  const l = c('VFormItem'),
    h = c('FormNodeOperate');
  return (
    $(),
    B(
      'div',
      {
        class: _([
          'drag-move-box',
          { active: e.schema.key === ((s = e.formConfig.currentItem) == null ? void 0 : s.key) },
        ]),
        onClick:
          o[0] || (o[0] = D((...u) => e.handleSelectItem && e.handleSelectItem(...u), ['stop'])),
      },
      [
        f('div', j, [
          d(l, { formConfig: e.formConfig, schema: e.schema }, null, 8, ['formConfig', 'schema']),
        ]),
        f('div', q, O(e.schema.label + (e.schema.field ? '/' + e.schema.field : '')), 1),
        d(h, { schema: e.schema, currentItem: e.formConfig.currentItem }, null, 8, [
          'schema',
          'currentItem',
        ]),
      ],
      2,
    )
  );
}
const ne = w(M, [['render', z]]);
export { ne as default };
