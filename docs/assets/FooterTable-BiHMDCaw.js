import { _ as n } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as s } from './useTable-USe4NIEW.js';
import { getBasicColumns as a } from './tableData-B7W8a9YK.js';
import { d as c } from './table-WVnDNY78.js';
import { d as u, Z as l, _, k as d, u as e } from './vue-BjERyvPm.js';
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
const f = { class: 'p-4' },
  P = u({
    __name: 'FooterTable',
    setup(h) {
      function i(r) {
        const o = r.reduce((t, p) => ((t += p.no), t), 0);
        return [
          { _row: '合计', _index: '平均值', no: o },
          { _row: '合计', _index: '平均值', no: o },
        ];
      }
      const [m] = s({
        title: '表尾行合计示例',
        api: c,
        rowSelection: { type: 'checkbox' },
        columns: a(),
        showSummary: !0,
        summaryFunc: i,
        scroll: { x: 2e3 },
        canResize: !1,
        showSelectionBar: !0,
      });
      return (r, o) => (l(), _('div', f, [d(e(n), { onRegister: e(m) }, null, 8, ['onRegister'])]));
    },
  });
export { P as default };
