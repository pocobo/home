import { a as n, B as i } from './index-dz3v0Mah.js';
import { _ as l } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as p } from './useForm-b1qEKHt-.js';
import {
  d as c,
  Z as m,
  a8 as f,
  a9 as u,
  $ as d,
  k as _,
  u as o,
  ac as g,
} from './vue-BjERyvPm.js';
const C = c({
  __name: 'Drawer4',
  setup(w) {
    const r = [
        {
          field: 'field1',
          component: 'Input',
          label: '字段1',
          colProps: { span: 12 },
          defaultValue: '111',
        },
        { field: 'field2', component: 'Input', label: '字段2', colProps: { span: 12 } },
      ],
      [s, { setFieldsValue: t }] = p({
        labelWidth: 120,
        schemas: r,
        showActionButtonGroup: !1,
        actionColOptions: { span: 24 },
      }),
      [a] = n((e) => {
        t({ field2: e.data, field1: e.info });
      });
    return (e, h) => (
      m(),
      f(
        o(i),
        g(e.$attrs, { onRegister: o(a), title: 'Drawer Title', width: '50%' }),
        {
          default: u(() => [
            d('div', null, [_(o(l), { onRegister: o(s) }, null, 8, ['onRegister'])]),
          ]),
          _: 1,
        },
        16,
        ['onRegister'],
      )
    );
  },
});
export { C as _ };
