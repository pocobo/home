import { _ as m } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as i } from './useForm-b1qEKHt-.js';
import { a as p } from '../index.js';
import { u as o } from './upload-vaW6y1fb.js';
import { d as c, Z as u, _ as d, k as t, u as e, F as f } from './vue-BjERyvPm.js';
import { aE as _ } from './antd-BmrhB3rb.js';
const C = c({
  __name: 'Upload2',
  setup(g) {
    const { createMessage: a } = p(),
      r = [
        {
          field: 'field1',
          component: 'Upload',
          label: '字段1',
          rules: [{ required: !0, message: '请选择上传文件' }],
          componentProps: { api: o },
        },
        {
          field: 'field2',
          component: 'ImageUpload',
          label: '字段2(ImageUpload)',
          colProps: { span: 8 },
          componentProps: { api: o },
        },
      ],
      [n, { getFieldsValue: h, validate: l }] = i({
        labelWidth: 160,
        schemas: r,
        actionColOptions: { span: 18 },
        submitFunc: () =>
          new Promise((s) => {
            l()
              .then(() => {
                s(), a.success('请到控制台查看结果');
              })
              .catch(() => {
                a.error('请输入必填项');
              });
          }),
      });
    return (s, F) => (
      u(),
      d(
        f,
        null,
        [
          t(e(_), { message: '嵌入表单,加入表单校验' }),
          t(e(m), { onRegister: e(n), class: 'my-5' }, null, 8, ['onRegister']),
        ],
        64,
      )
    );
  },
});
export { C as _ };