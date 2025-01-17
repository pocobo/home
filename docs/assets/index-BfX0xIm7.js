var b = (d, n, r) =>
  new Promise((c, i) => {
    var m = (e) => {
        try {
          l(r.next(e));
        } catch (a) {
          i(a);
        }
      },
      f = (e) => {
        try {
          l(r.throw(e));
        } catch (a) {
          i(a);
        }
      },
      l = (e) => (e.done ? c(e.value) : Promise.resolve(e.value).then(m, f));
    l((r = r.apply(d, n)).next());
  });
import { _ } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as P } from './useForm-b1qEKHt-.js';
import { _ as v } from './PersonTable.vue_vue_type_script_setup_true_lang-Dhlh1JkF.js';
import { P as g } from './index-B24a6rfW.js';
import { R as u } from './antd-BmrhB3rb.js';
import {
  d as q,
  f as k,
  a7 as y,
  Z as R,
  a8 as x,
  a9 as s,
  k as t,
  G as C,
  u as o,
} from './vue-BjERyvPm.js';
import { c as S } from '../index.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
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
import './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './sortable.esm-CoO8jRpa.js';
import './useTable-USe4NIEW.js';
import './useContentViewHeight-mbS0GS8E.js';
const p = [
    { label: '付晓晓', value: '1' },
    { label: '周毛毛', value: '2' },
  ],
  h = [
    { label: '私密', value: '1' },
    { label: '公开', value: '2' },
  ],
  w = [
    { field: 'f1', component: 'Input', label: '仓库名', required: !0 },
    {
      field: 'f2',
      component: 'Input',
      label: '仓库域名',
      required: !0,
      componentProps: { addonBefore: 'http://', addonAfter: 'com' },
      colProps: { offset: 2 },
    },
    {
      field: 'f3',
      component: 'Select',
      label: '仓库管理员',
      componentProps: { options: p },
      required: !0,
      colProps: { offset: 2 },
    },
    {
      field: 'f4',
      component: 'Select',
      label: '审批人',
      componentProps: { options: p },
      required: !0,
    },
    {
      field: 'f5',
      component: 'RangePicker',
      label: '生效日期',
      required: !0,
      colProps: { offset: 2 },
    },
    {
      field: 'f6',
      component: 'Select',
      label: '仓库类型',
      componentProps: { options: h },
      required: !0,
      colProps: { offset: 2 },
    },
  ],
  B = [
    { field: 't1', component: 'Input', label: '任务名', required: !0 },
    { field: 't2', component: 'Input', label: '任务描述', required: !0, colProps: { offset: 2 } },
    {
      field: 't3',
      component: 'Select',
      label: '执行人',
      componentProps: { options: p },
      required: !0,
      colProps: { offset: 2 },
    },
    {
      field: 't4',
      component: 'Select',
      label: '责任人',
      componentProps: { options: p },
      required: !0,
    },
    {
      field: 't5',
      component: 'TimePicker',
      label: '生效日期',
      required: !0,
      componentProps: { style: { width: '100%' } },
      colProps: { offset: 2 },
    },
    {
      field: 't6',
      component: 'Select',
      label: '任务类型',
      componentProps: { options: h },
      required: !0,
      colProps: { offset: 2 },
    },
  ],
  I = q({
    name: 'FormHightPage',
    __name: 'index',
    setup(d) {
      const n = k(null),
        [r, { validate: c }] = P({
          layout: 'vertical',
          baseColProps: { span: 6 },
          schemas: w,
          showActionButtonGroup: !1,
        }),
        [i, { validate: m }] = P({
          layout: 'vertical',
          baseColProps: { span: 6 },
          schemas: B,
          showActionButtonGroup: !1,
        });
      function f() {
        return b(this, null, function* () {
          try {
            n.value;
            const [l, e] = yield Promise.all([c(), m()]);
          } catch (l) {}
        });
      }
      return (l, e) => {
        const a = y('a-button');
        return (
          R(),
          x(
            o(g),
            {
              class: 'high-form',
              title: '高级表单',
              content: ' 高级表单常见于一次性输入和提交大批量数据的场景。',
            },
            {
              rightFooter: s(() => [
                t(a, { type: 'primary', onClick: f }, { default: s(() => [C(' 提交 ')]), _: 1 }),
              ]),
              default: s(() => [
                t(
                  o(u),
                  { title: '仓库管理', bordered: !1 },
                  {
                    default: s(() => [t(o(_), { onRegister: o(r) }, null, 8, ['onRegister'])]),
                    _: 1,
                  },
                ),
                t(
                  o(u),
                  { title: '任务管理', bordered: !1, class: '!mt-5' },
                  {
                    default: s(() => [t(o(_), { onRegister: o(i) }, null, 8, ['onRegister'])]),
                    _: 1,
                  },
                ),
                t(
                  o(u),
                  { title: '成员管理', bordered: !1, class: '!mt-5' },
                  { default: s(() => [t(v, { ref_key: 'tableRef', ref: n }, null, 512)]), _: 1 },
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  }),
  pe = S(I, [['__scopeId', 'data-v-ddf1f53d']]);
export { pe as default };
