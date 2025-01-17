import { _ as t } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as r } from './useTable-USe4NIEW.js';
import { getBasicColumns as l, getFormConfig as n } from './tableData-B7W8a9YK.js';
import { d as a } from './table-WVnDNY78.js';
import { d as p, Z as f, _ as u, $ as o, k as s, u as e } from './vue-BjERyvPm.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './antd-BmrhB3rb.js';
import '../index.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './base64Conver-bBv-IO2K.js';
import './helper-BjbsUAHT.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './useForm-b1qEKHt-.js';
import './uuid-D0SLUWHI.js';
import './sortable.esm-CoO8jRpa.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './select-BJlCZDbb.js';
const d = { class: 'h-full flex p-4' },
  _ = { class: 'flex flex-col pr-4 w-1/2' },
  h = { class: 'flex-1 h-0' },
  g = o('div', { class: 'h-4 shrink-0' }, null, -1),
  R = { class: 'flex-1 h-0' },
  b = { class: 'flex-1 flex flex-col w-1/2 h-full' },
  x = { class: 'h-1/3 mb-4' },
  C = { class: 'h-1/3 mb-4' },
  S = { class: 'h-1/3' },
  se = p({
    __name: 'ResizeParentHeightTable',
    setup(w) {
      const [i] = r({
          api: a,
          columns: l(),
          useSearchForm: !1,
          formConfig: n(),
          showTableSetting: !1,
          tableSetting: { fullScreen: !0 },
          showIndexColumn: !1,
          isCanResizeParent: !0,
          rowKey: 'id',
        }),
        [m] = r({
          api: a,
          columns: l(),
          formConfig: n(),
          showTableSetting: !1,
          tableSetting: { fullScreen: !0 },
          showIndexColumn: !1,
          isCanResizeParent: !0,
          useSearchForm: !1,
          rowKey: 'id',
        }),
        [c] = r({
          api: a,
          columns: l(),
          formConfig: n(),
          showTableSetting: !1,
          tableSetting: { fullScreen: !0 },
          showIndexColumn: !1,
          isCanResizeParent: !0,
          useSearchForm: !1,
          pagination: !1,
          rowKey: 'id',
        });
      return (v, T) => (
        f(),
        u('div', d, [
          o('div', _, [
            o('div', h, [s(e(t), { onRegister: e(i) }, null, 8, ['onRegister'])]),
            g,
            o('div', R, [s(e(t), { onRegister: e(i) }, null, 8, ['onRegister'])]),
          ]),
          o('div', b, [
            o('div', x, [s(e(t), { onRegister: e(i) }, null, 8, ['onRegister'])]),
            o('div', C, [s(e(t), { onRegister: e(c) }, null, 8, ['onRegister'])]),
            o('div', S, [s(e(t), { onRegister: e(m) }, null, 8, ['onRegister'])]),
          ]),
        ])
      );
    },
  });
export { se as default };
