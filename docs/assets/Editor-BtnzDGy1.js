import { _ as n } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { C as l, a as u } from '../index.js';
import { M as c } from './index-DFvxRCvJ.js';
import { P as f } from './index-B24a6rfW.js';
import { d, Z as _, a8 as k, a9 as o, k as a, u as e, l as h } from './vue-BjERyvPm.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './helper-BjbsUAHT.js';
import './antd-BmrhB3rb.js';
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
import './onMountedOrActivated-DcvTUt7V.js';
import './useContentViewHeight-mbS0GS8E.js';
const H = d({
  __name: 'Editor',
  setup(C) {
    const i = [
        {
          field: 'title',
          component: 'Input',
          label: 'title',
          defaultValue: '标题',
          rules: [{ required: !0 }],
        },
        {
          field: 'markdown',
          component: 'Input',
          label: 'markdown',
          defaultValue: 'defaultValue',
          rules: [{ required: !0, trigger: 'blur' }],
          render: ({ model: t, field: r }) =>
            h(c, {
              value: t[r],
              onChange: (s) => {
                t[r] = s;
              },
            }),
        },
      ],
      { createMessage: p } = u();
    function m(t) {
      p.success('click search,values:' + JSON.stringify(t));
    }
    return (t, r) => (
      _(),
      k(
        e(f),
        { title: 'MarkDown组件嵌入Form示例' },
        {
          default: o(() => [
            a(
              e(l),
              { title: 'MarkDown表单' },
              {
                default: o(() => [
                  a(e(n), {
                    labelWidth: 100,
                    schemas: i,
                    actionColOptions: { span: 24 },
                    baseColProps: { span: 24 },
                    onSubmit: m,
                  }),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        },
      )
    );
  },
});
export { H as default };
