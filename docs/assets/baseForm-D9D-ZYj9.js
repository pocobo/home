import { _ as e } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as m } from './useForm-b1qEKHt-.js';
import { d as i, Z as n, a8 as s, u as o } from './vue-BjERyvPm.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './helper-BjbsUAHT.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
const z = i({
  __name: 'baseForm',
  setup(a) {
    const r = [
        {
          field: 'field1',
          component: 'Input',
          label: '字段1',
          span: 8,
          componentProps: { placeholder: '自定义placeholder', onChange: (p) => {} },
        },
        { field: 'field2', component: 'Input', label: '字段2', span: 8 },
      ],
      [t] = m({ schemas: r });
    return (p, c) => (n(), s(o(e), { onRegister: o(t) }, null, 8, ['onRegister']));
  },
});
export { z as default };
