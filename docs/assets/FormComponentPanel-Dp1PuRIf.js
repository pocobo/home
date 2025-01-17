import { d as f } from './vuedraggable.umd-C9wUXg6p.js';
import g from './LayoutItem-Cu_H7JWf.js';
import { u as h } from './useFormDesignState-DaR4Tnkk.js';
import { a2 as v, aI as _, f as C } from './antd-BmrhB3rb.js';
import {
  d as y,
  c as S,
  a7 as r,
  Z as I,
  _ as E,
  m as F,
  A as D,
  k as s,
  a9 as d,
  $ as b,
  aj as k,
  ak as A,
} from './vue-BjERyvPm.js';
import { c as V } from '../index.js';
import './FormNode-_FIelQGV.js';
import './FormNodeOperate-qJmXbTvC.js';
import './index-DrPvFpAA.js';
import './index-St208Lgf.js';
import './formItemConfig-BWXCgi90.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
const $ = y({
    name: 'FormComponentPanel',
    components: { LayoutItem: g, draggable: f, Form: v, Empty: _ },
    emits: ['handleSetSelectItem'],
    setup(o, { emit: a }) {
      const { formConfig: t } = h(),
        i = ({ newIndex: e }) => {
          t.value.schemas = t.value.schemas || [];
          const m = t.value.schemas;
          (m[e] = C(m[e])), a('handleSetSelectItem', m[e]);
        },
        p = (e) => {
          a('handleSetSelectItem', t.value.schemas[e.oldIndex]);
        },
        l = S(() => (t.value.layout === 'horizontal' ? 'Col' : 'div'));
      return { addItem: i, handleDragStart: p, formConfig: t, layoutTag: l };
    },
  }),
  B = { class: 'form-panel v-form-container' },
  P = { class: 'draggable-box' };
function L(o, a, t, i, p, l) {
  const e = r('Empty'),
    m = r('LayoutItem'),
    c = r('draggable'),
    u = r('Form');
  return (
    I(),
    E('div', B, [
      F(s(e, { class: 'empty-text', description: '从左侧选择控件添加' }, null, 512), [
        [D, o.formConfig.schemas.length === 0],
      ]),
      s(
        u,
        k(A(o.formConfig)),
        {
          default: d(() => [
            b('div', P, [
              s(
                c,
                {
                  class: 'list-main ant-row',
                  group: 'form-draggable',
                  'component-data': { name: 'list', tag: 'div', type: 'transition-group' },
                  ghostClass: 'moving',
                  animation: 180,
                  handle: '.drag-move',
                  modelValue: o.formConfig.schemas,
                  'onUpdate:modelValue': a[0] || (a[0] = (n) => (o.formConfig.schemas = n)),
                  'item-key': 'key',
                  onAdd: o.addItem,
                  onStart: o.handleDragStart,
                },
                {
                  item: d(({ element: n }) => [
                    s(
                      m,
                      {
                        class: 'drag-move',
                        schema: n,
                        data: o.formConfig,
                        'current-item': o.formConfig.currentItem || {},
                      },
                      null,
                      8,
                      ['schema', 'data', 'current-item'],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['modelValue', 'onAdd', 'onStart'],
              ),
            ]),
          ]),
          _: 1,
        },
        16,
      ),
    ])
  );
}
const so = V($, [
  ['render', L],
  ['__scopeId', 'data-v-311e860d'],
]);
export { so as default };
