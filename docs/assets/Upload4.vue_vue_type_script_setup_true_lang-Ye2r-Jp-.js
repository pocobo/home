import { _ as c } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as m } from './useForm-b1qEKHt-.js';
import { a as f } from '../index.js';
import { u as p } from './upload-vaW6y1fb.js';
import { aE as y, B as o } from './antd-BmrhB3rb.js';
import { d as g, Z as _, _ as v, k as n, u as l, F as b } from './vue-BjERyvPm.js';
const R = g({
  __name: 'Upload4',
  setup(w) {
    const { createMessage: s } = f(),
      d = [
        {
          field: 'field5',
          component: 'Upload',
          label: '字段5',
          componentProps: {
            previewColumns: [
              { title: 'url5', dataIndex: 'url5' },
              { title: 'type5', dataIndex: 'type5' },
              { title: 'name5', dataIndex: 'name5' },
              {
                title: 'operation',
                dataIndex: '',
                customRender: ({ record: r }) =>
                  n(
                    o,
                    {
                      onclick: () => {
                        s.success('请到控制台查看该行输出结果');
                      },
                    },
                    () => '点我输出该行信息',
                  ),
              },
            ],
            beforePreviewData: (r) =>
              r
                .filter((e) => !!e)
                .map((e) => {
                  if (typeof e == 'string')
                    return {
                      url5: e,
                      type5: e.split('.').pop() || '',
                      name5: e.split('/').pop() || '',
                    };
                }),
            resultField: 'data5.url',
            api: (r, a) =>
              new Promise((e) => {
                p(r, a).then((t) => {
                  e({ code: 200, data5: { url: t.data.url } });
                });
              }),
          },
        },
        {
          field: 'field6',
          component: 'Upload',
          label: '字段6',
          componentProps: {
            maxNumber: 2,
            previewColumns: ({ handleRemove: r, handleAdd: a }) => [
              { title: 'url6', dataIndex: 'url6' },
              { title: 'type6', dataIndex: 'type6' },
              {
                title: '操作1',
                dataIndex: 'operation',
                customRender: ({ record: e }) =>
                  n('div', {}, [
                    n(
                      o,
                      {
                        type: 'primary',
                        style: 'margin:4px',
                        onclick: () => {
                          a({
                            record: {
                              id6: new Date().getTime(),
                              url6: 'https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png',
                            },
                            uidKey: 'id6',
                            valueKey: 'url6',
                          });
                        },
                      },
                      () => '点我新增',
                    ),
                    n(
                      o,
                      {
                        danger: !0,
                        onclick: () => {
                          r({ record: { url6: e.url6 }, uidKey: 'url6', valueKey: 'url6' });
                        },
                      },
                      () => '点我删除',
                    ),
                  ]),
              },
            ],
            beforePreviewData: (r) =>
              r
                .filter((e) => !!e)
                .map((e) => {
                  var t, u;
                  if (typeof e == 'object')
                    return {
                      uid: e == null ? void 0 : e.uid,
                      url6: e == null ? void 0 : e.url,
                      type6:
                        ((t = e == null ? void 0 : e.url) == null ? void 0 : t.split('.').pop()) ||
                        '',
                      name6:
                        ((u = e == null ? void 0 : e.url) == null ? void 0 : u.split('/').pop()) ||
                        '',
                    };
                }),
            resultField: 'data6.url',
            api: (r, a) =>
              new Promise((e) => {
                p(r, a).then((t) => {
                  e({ code: 200, data6: { url: t.data.url } });
                });
              }),
          },
        },
      ],
      [i, { getFieldsValue: x }] = m({
        labelWidth: 160,
        schemas: d,
        actionColOptions: { span: 18 },
        submitFunc: () =>
          new Promise((r) => {
            r(), s.success('请到控制台查看结果');
          }),
      });
    return (r, a) => (
      _(),
      v(
        b,
        null,
        [
          n(l(y), { message: '嵌入表单,自定义预览内容' }),
          n(l(c), { onRegister: l(i), class: 'my-5' }, null, 8, ['onRegister']),
        ],
        64,
      )
    );
  },
});
export { R as _ };
