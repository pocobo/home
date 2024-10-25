import { D as n } from './index-DXnpckpY.js';
import { _ as s } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as l } from './useTable-USe4NIEW.js';
import { P as d } from './index-B24a6rfW.js';
import {
  refundData as f,
  refundSchema as _,
  personData as h,
  personSchema as T,
  refundTableData as g,
  refundTableSchema as b,
  refundTimeTableSchema as x,
  refundTimeTableData as S,
} from './data-Ex1wC0vt.js';
import { d as D, Z as y, a8 as R, a9 as k, k as t, u as e } from './vue-BjERyvPm.js';
import { a4 as o } from './antd-BmrhB3rb.js';
import { c as w } from '../index.js';
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
import './useContentViewHeight-mbS0GS8E.js';
const C = D({
    __name: 'index',
    setup(B) {
      const [p] = l({
          title: '退货商品',
          dataSource: g,
          columns: b,
          pagination: !1,
          showIndexColumn: !1,
          scroll: { y: 300 },
          showSummary: !0,
          summaryFunc: u,
        }),
        [c] = l({
          title: '退货进度',
          columns: x,
          pagination: !1,
          dataSource: S,
          showIndexColumn: !1,
          scroll: { y: 300 },
        });
      function u(a) {
        let r = 0,
          m = 0;
        return (
          a.forEach((i) => {
            (r += i.t5), (m += i.t6);
          }),
          [{ t1: '总计', t5: r, t6: m }]
        );
      }
      return (a, r) => (
        y(),
        R(
          e(d),
          { title: '基础详情页', contentBackground: '' },
          {
            default: k(() => [
              t(
                e(n),
                {
                  size: 'middle',
                  title: '退款申请',
                  bordered: !1,
                  column: 3,
                  data: e(f),
                  schema: e(_),
                },
                null,
                8,
                ['data', 'schema'],
              ),
              t(e(o)),
              t(
                e(n),
                {
                  size: 'middle',
                  title: '用户信息',
                  bordered: !1,
                  column: 3,
                  data: e(h),
                  schema: e(T),
                },
                null,
                8,
                ['data', 'schema'],
              ),
              t(e(o)),
              t(e(s), { onRegister: e(p) }, null, 8, ['onRegister']),
              t(e(o)),
              t(e(s), { onRegister: e(c) }, null, 8, ['onRegister']),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  ne = w(C, [['__scopeId', 'data-v-773668ff']]);
export { ne as default };