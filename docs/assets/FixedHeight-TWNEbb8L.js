import { a, _ as p } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as n } from './useTable-USe4NIEW.js';
import { getCustomHeaderColumns as l } from './tableData-B7W8a9YK.js';
import { d as c } from './table-WVnDNY78.js';
import { Q as _ } from '../index.js';
import {
  d,
  Z as e,
  _ as r,
  k as m,
  a9 as f,
  G as i,
  u as t,
  F as u,
  a8 as k,
} from './vue-BjERyvPm.js';
import { aK as g } from './antd-BmrhB3rb.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
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
const h = { class: 'p-4' },
  x = { key: 0 },
  ee = d({
    __name: 'FixedHeight',
    setup(y) {
      const [s] = n({
        title: '定高/头部自定义',
        api: c,
        columns: l(),
        canResize: !1,
        scroll: { y: 100 },
      });
      return (C, B) => (
        e(),
        r('div', h, [
          m(
            t(p),
            { onRegister: t(s) },
            {
              headerCell: f(({ column: o }) => [
                o.key === 'name'
                  ? (e(),
                    r('span', x, [
                      i(' 姓名 '),
                      m(t(_), { class: 'ml-2', text: 'headerHelpMessage方式2' }),
                    ]))
                  : o.key === 'address'
                    ? (e(), r(u, { key: 1 }, [i(' 地址 '), m(t(g), { class: 'ml-2' })], 64))
                    : (e(), k(a, { key: 2, column: o }, null, 8, ['column'])),
              ]),
              _: 1,
            },
            8,
            ['onRegister'],
          ),
        ])
      );
    },
  });
export { ee as default };