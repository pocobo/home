import { _ as n } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import './index-CIVgjVCU.js';
import { c as l, d as c, b as d, e as u, f as o, g as a } from './data-CX0ZTUft.js';
import { P as _ } from './index-B24a6rfW.js';
import {
  d as f,
  a7 as h,
  Z as x,
  a8 as S,
  a9 as t,
  k as r,
  u as e,
  G as i,
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
import './useContentViewHeight-mbS0GS8E.js';
const Y = f({
  __name: 'ArrayExport',
  setup(k) {
    function p() {
      d({ data: o, header: a, filename: '二维数组方式导出excel.xlsx' });
    }
    function s() {
      u({
        sheetList: [
          { data: o, header: a, sheetName: 'Sheet1' },
          { data: o, header: a, sheetName: 'Sheet2' },
        ],
        filename: '二维数组方式导出excel-多Sheet示例.xlsx',
      });
    }
    return (C, T) => {
      const m = h('a-button');
      return (
        x(),
        S(
          e(_),
          { title: '导出示例', content: '根据数组格式的数据进行导出' },
          {
            default: t(() => [
              r(
                e(n),
                { title: '基础表格', columns: e(l), dataSource: e(c) },
                {
                  toolbar: t(() => [
                    r(m, { onClick: p }, { default: t(() => [i(' 导出 ')]), _: 1 }),
                    r(
                      m,
                      { onClick: s, danger: '' },
                      { default: t(() => [i(' 导出多Sheet ')]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['columns', 'dataSource'],
              ),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { Y as default };
