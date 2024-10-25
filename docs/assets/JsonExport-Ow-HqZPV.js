import { _ as d } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import './index-CIVgjVCU.js';
import { c as l, d as e, j as m, a as c } from './data-CX0ZTUft.js';
import { P as u } from './index-B24a6rfW.js';
import {
  d as f,
  a7 as _,
  Z as h,
  a8 as x,
  a9 as t,
  k as o,
  u as a,
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
const U = f({
  __name: 'JsonExport',
  setup(k) {
    function n() {
      m({ data: e, filename: '使用key作为默认头部.xlsx' });
    }
    function s() {
      m({
        data: e,
        header: {
          id: 'ID',
          name: '姓名',
          age: '年龄',
          no: '编号',
          address: '地址',
          beginTime: '开始时间',
          endTime: '结束时间',
        },
        filename: '自定义头部.xlsx',
        json2sheetOpts: { header: ['name', 'id'] },
      });
    }
    function p() {
      c({
        sheetList: [
          { data: e, sheetName: '使用key作为默认头部' },
          {
            data: e,
            header: {
              id: 'ID',
              name: '姓名',
              age: '年龄',
              no: '编号',
              address: '地址',
              beginTime: '开始时间',
              endTime: '结束时间',
            },
            json2sheetOpts: { header: ['name', 'id'] },
            sheetName: '自定义头部',
          },
        ],
        filename: '多Sheet导出示例.xlsx',
      });
    }
    return (S, T) => {
      const r = _('a-button');
      return (
        h(),
        x(
          a(u),
          { title: '导出示例', content: '根据JSON格式的数据进行导出' },
          {
            default: t(() => [
              o(
                a(d),
                { title: '基础表格', columns: a(l), dataSource: a(e) },
                {
                  toolbar: t(() => [
                    o(r, { onClick: n }, { default: t(() => [i(' 导出：默认头部 ')]), _: 1 }),
                    o(r, { onClick: s }, { default: t(() => [i(' 导出：自定义头部 ')]), _: 1 }),
                    o(
                      r,
                      { onClick: p, danger: '' },
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
export { U as default };