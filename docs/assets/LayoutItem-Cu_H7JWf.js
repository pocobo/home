var w = Object.defineProperty,
  V = Object.defineProperties;
var L = Object.getOwnPropertyDescriptors;
var y = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty,
  R = Object.prototype.propertyIsEnumerable;
var C = (e, o, t) =>
    o in e ? w(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[o] = t),
  v = (e, o) => {
    for (var t in o || (o = {})) O.call(o, t) && C(e, t, o[t]);
    if (y) for (var t of y(o)) R.call(o, t) && C(e, t, o[t]);
    return e;
  },
  $ = (e, o) => V(e, L(o));
import { d as A } from './vuedraggable.umd-C9wUXg6p.js';
import B from './FormNode-_FIelQGV.js';
import D from './FormNodeOperate-qJmXbTvC.js';
import { u as H } from './useFormDesignState-DaR4Tnkk.js';
import {
  d as j,
  r as z,
  c as p,
  I as U,
  a7 as n,
  Z as m,
  a8 as u,
  a9 as s,
  _ as k,
  a1 as q,
  B as M,
  k as l,
  ac as I,
  F as E,
  aa as G,
  aj as T,
  ak as Z,
} from './vue-BjERyvPm.js';
import { U as J, V as K } from './antd-BmrhB3rb.js';
import { c as Q } from '../index.js';
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
import './index-DrPvFpAA.js';
const W = j({
  name: 'LayoutItem',
  components: { FormNode: B, FormNodeOperate: D, draggable: A, Row: J, Col: K },
  props: { schema: { type: Object, required: !0 }, currentItem: { type: Object, required: !0 } },
  emits: ['dragStart', 'handleColAdd', 'handle-copy', 'handle-delete'],
  setup(e) {
    const {
        formDesignMethods: { handleSetSelectItem: o },
        formConfig: t,
      } = H(),
      c = z({}),
      g = p(() => {
        const { colProps: i = {} } = e.schema;
        return i;
      }),
      h = p(() => e.schema.columns),
      d = p(() => (t.value.layout === 'horizontal' ? 'Col' : 'div'));
    return $(v({}, U(c)), { colPropsComputed: g, handleSetSelectItem: o, layoutTag: d, list1: h });
  },
});
function X(e, o, t, c, g, h) {
  const d = n('LayoutItem', !0),
    i = n('draggable'),
    f = n('Col'),
    b = n('Row'),
    F = n('FormNodeOperate'),
    S = n('FormNode');
  return (
    m(),
    u(
      f,
      T(Z(e.colPropsComputed)),
      {
        default: s(() => [
          ['Grid'].includes(e.schema.component)
            ? (m(),
              k(
                'div',
                {
                  key: 0,
                  class: q(['grid-box', { active: e.schema.key === e.currentItem.key }]),
                  onClick: o[2] || (o[2] = M((r) => e.handleSetSelectItem(e.schema), ['stop'])),
                },
                [
                  l(
                    b,
                    I({ class: 'grid-row' }, e.schema.componentProps),
                    {
                      default: s(() => [
                        (m(!0),
                        k(
                          E,
                          null,
                          G(
                            e.schema.columns,
                            (r, N) => (
                              m(),
                              u(
                                f,
                                { class: 'grid-col', key: N, span: r.span },
                                {
                                  default: s(() => [
                                    l(
                                      i,
                                      I(
                                        {
                                          class: 'list-main draggable-box',
                                          'component-data': {
                                            name: 'list',
                                            tag: 'div',
                                            type: 'transition-group',
                                          },
                                          ref_for: !0,
                                        },
                                        {
                                          group: 'form-draggable',
                                          ghostClass: 'moving',
                                          animation: 180,
                                          handle: '.drag-move',
                                        },
                                        {
                                          'item-key': 'key',
                                          modelValue: r.children,
                                          'onUpdate:modelValue': (a) => (r.children = a),
                                          onStart: (a) => e.$emit('dragStart', a, r.children),
                                          onAdd: (a) => e.$emit('handleColAdd', a, r.children),
                                        },
                                      ),
                                      {
                                        item: s(({ element: a }) => [
                                          l(
                                            d,
                                            {
                                              class: 'drag-move',
                                              schema: a,
                                              'current-item': e.currentItem,
                                              onHandleCopy:
                                                o[0] || (o[0] = (P) => e.$emit('handle-copy')),
                                              onHandleDelete:
                                                o[1] || (o[1] = (P) => e.$emit('handle-delete')),
                                            },
                                            null,
                                            8,
                                            ['schema', 'current-item'],
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1040,
                                      ['modelValue', 'onUpdate:modelValue', 'onStart', 'onAdd'],
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ['span'],
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                    16,
                  ),
                  l(F, { schema: e.schema, currentItem: e.currentItem }, null, 8, [
                    'schema',
                    'currentItem',
                  ]),
                ],
                2,
              ))
            : (m(),
              u(
                S,
                {
                  key: e.schema.key,
                  schema: e.schema,
                  'current-item': e.currentItem,
                  onHandleCopy: o[3] || (o[3] = (r) => e.$emit('handle-copy')),
                  onHandleDelete: o[4] || (o[4] = (r) => e.$emit('handle-delete')),
                },
                null,
                8,
                ['schema', 'current-item'],
              )),
        ]),
        _: 1,
      },
      16,
    )
  );
}
const be = Q(W, [['render', X]]);
export { be as default };
