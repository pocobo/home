import { _ as p } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as a } from './useTable-USe4NIEW.js';
import { getBasicColumns as s, getFormConfig as n } from './tableData-B7W8a9YK.js';
import { d as c } from './table-WVnDNY78.js';
import {
  d as u,
  a7 as l,
  Z as f,
  a8 as _,
  a9 as o,
  G as t,
  k as g,
  u as r,
} from './vue-BjERyvPm.js';
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
const W = u({
  __name: 'FormTable',
  setup(d) {
    const [e, { getForm: b }] = a({
      title: '开启搜索区域',
      api: c,
      columns: s(),
      useSearchForm: !0,
      formConfig: n(),
      showTableSetting: !0,
      tableSetting: { fullScreen: !0 },
      showIndexColumn: !1,
      rowKey: 'id',
      rowSelection: { type: 'checkbox' },
      showSelectionBar: !0,
    });
    function m() {}
    return (C, h) => {
      const i = l('a-button');
      return (
        f(),
        _(
          r(p),
          { onRegister: r(e) },
          {
            'form-custom': o(() => [t(' custom-slot ')]),
            toolbar: o(() => [
              g(
                i,
                { type: 'primary', onClick: m },
                { default: o(() => [t('获取表单数据')]), _: 1 },
              ),
            ]),
            _: 1,
          },
          8,
          ['onRegister'],
        )
      );
    };
  },
});
export { W as default };