var f = (w, b, r) =>
  new Promise((P, d) => {
    var h = (a) => {
        try {
          s(r.next(a));
        } catch (u) {
          d(u);
        }
      },
      p = (a) => {
        try {
          s(r.throw(a));
        } catch (u) {
          d(u);
        }
      },
      s = (a) => (a.done ? P(a.value) : Promise.resolve(a.value).then(h, p));
    s((r = r.apply(w, b)).next());
  });
import { _ as C } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as y } from './useForm-b1qEKHt-.js';
import { C as I } from '../index.js';
import { P as L } from './index-B24a6rfW.js';
import { a as V } from './cascader-WY2IuUlW.js';
import {
  d as N,
  f as _,
  a7 as Y,
  Z as W,
  a8 as H,
  a9 as o,
  k as l,
  G as c,
  u as n,
} from './vue-BjERyvPm.js';
import { X as M, Y as B } from './antd-BmrhB3rb.js';
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
import './useContentViewHeight-mbS0GS8E.js';
import './onMountedOrActivated-DcvTUt7V.js';
const ve = N({
  __name: 'UseForm',
  setup(w) {
    const b = [
        { value: 'large', label: 'large' },
        { value: 'middle', label: 'middle' },
        { value: 'small', label: 'small' },
        { value: 'default', label: 'defualt' },
      ],
      r = [
        { value: 'vertical', label: 'vertical' },
        { value: 'inline', label: 'inline' },
        { value: 'horizontal', label: 'horizontal' },
      ],
      P = [
        { value: 'left', label: 'left' },
        { value: 'right', label: 'right' },
      ],
      d = [
        {
          field: 'field1',
          component: 'Input',
          label: '字段1',
          colProps: { span: 8 },
          componentProps: { placeholder: '自定义placeholder', onChange: (e) => {} },
        },
        { field: 'field2', component: 'Input', label: '字段2', colProps: { span: 8 } },
        {
          field: 'field3',
          component: 'DatePicker',
          label: '字段3',
          colProps: { span: 8 },
          componentProps: { getPopupContainer: () => document.querySelector('.ant-form') },
        },
        {
          field: 'fieldTime',
          component: 'RangePicker',
          label: '时间字段',
          colProps: { span: 8 },
          componentProps: { getPopupContainer: () => document.querySelector('.ant-form') },
        },
        {
          field: 'field4',
          component: 'Select',
          label: '字段4',
          colProps: { span: 8 },
          componentProps: {
            options: [
              { label: '选项1', value: '1', key: '1' },
              { label: '选项2', value: '2', key: '2' },
            ],
          },
        },
        {
          field: 'field5',
          component: 'CheckboxGroup',
          label: '字段5',
          colProps: { span: 8 },
          componentProps: {
            options: [
              { label: '选项1', value: '1' },
              { label: '选项2', value: '2' },
            ],
          },
        },
        {
          field: 'field7',
          component: 'RadioGroup',
          label: '字段7',
          colProps: { span: 8 },
          componentProps: {
            options: [
              { label: '选项1', value: '1' },
              { label: '选项2', value: '2' },
            ],
          },
        },
        {
          field: 'field8',
          component: 'ApiCascader',
          label: '联动',
          colProps: { span: 8 },
          componentProps: {
            api: V,
            apiParamKey: 'parentCode',
            labelField: 'name',
            valueField: 'code',
            initFetchParams: { parentCode: '' },
            isLeaf: (e) => !(e.levelType < 3),
          },
        },
        {
          field: 'field9',
          component: 'ApiCascader',
          label: '联动回显',
          colProps: { span: 8 },
          componentProps: {
            api: V,
            apiParamKey: 'parentCode',
            labelField: 'name',
            valueField: 'code',
            initFetchParams: { parentCode: '' },
            isLeaf: (e) => !(e.levelType < 3),
          },
        },
      ],
      h = [
        {
          field: 'd1',
          component: 'Divider',
          label: '基础属性',
          colProps: { span: 24 },
          componentProps: { orientation: 'center' },
        },
        {
          field: 'name',
          defaultValue: 'useForm',
          component: 'Input',
          label: 'name',
          colProps: { span: 24 },
        },
        {
          field: 'layout',
          defaultValue: 'horizontal',
          component: 'RadioButtonGroup',
          label: 'layout',
          colProps: { span: 24 },
          componentProps: { options: r },
        },
        {
          field: 'labelAlign',
          defaultValue: 'right',
          component: 'RadioButtonGroup',
          label: 'labelAlign',
          colProps: { span: 24 },
          componentProps: { options: P },
        },
        {
          field: 'labelWidth',
          defaultValue: 120,
          component: 'InputNumber',
          label: 'labelWidth',
          colProps: { span: 24 },
        },
        {
          field: 'size',
          defaultValue: 'default',
          component: 'Select',
          label: 'size',
          colProps: { span: 24 },
          componentProps: { options: b },
        },
        {
          field: 'colon',
          defaultValue: !1,
          component: 'Switch',
          label: 'colon',
          colProps: { span: 24 },
        },
        {
          field: 'disabled',
          defaultValue: !1,
          component: 'Switch',
          label: 'disabled',
          colProps: { span: 24 },
        },
        {
          field: 'compact',
          defaultValue: !1,
          component: 'Switch',
          label: 'compact',
          colProps: { span: 24 },
        },
        {
          field: 'autoSetPlaceHolder',
          defaultValue: !0,
          component: 'Switch',
          label: 'autoSetPlaceHolder',
          colProps: { span: 24 },
        },
        {
          field: 'autoSubmitOnEnter',
          defaultValue: !1,
          component: 'Switch',
          label: 'autoSubmitOnEnter',
          colProps: { span: 24 },
        },
        {
          field: 'showAdvancedButton',
          defaultValue: !1,
          component: 'Switch',
          label: 'showAdvancedButton',
          colProps: { span: 24 },
        },
        {
          field: 'd2',
          component: 'Divider',
          label: '网格布局(rowProps)',
          colProps: { span: 24 },
          componentProps: { orientation: 'center' },
        },
        {
          field: 'rowProps.gutter.0',
          component: 'InputNumber',
          defaultValue: 0,
          label: 'Horizontal Gutter',
          colProps: { span: 24 },
          componentProps: { addonAfter: 'px' },
        },
        {
          field: 'rowProps.gutter.1',
          component: 'InputNumber',
          defaultValue: 0,
          label: 'Vertical Gutter',
          colProps: { span: 24 },
          componentProps: { addonAfter: 'px' },
        },
        {
          field: 'rowProps.align',
          defaultValue: 'top',
          component: 'Select',
          label: 'align',
          colProps: { span: 24 },
          componentProps: {
            options: [
              { value: 'stretch', label: 'stretch' },
              { value: 'bottom', label: 'bottom' },
              { value: 'top', label: 'top' },
              { value: 'middle', label: 'middle' },
            ],
          },
        },
        {
          field: 'rowProps.justify',
          defaultValue: 'start',
          component: 'Select',
          label: 'justify',
          colProps: { span: 24 },
          componentProps: {
            options: [
              { value: 'space-around', label: 'space-around' },
              { value: 'space-between', label: 'space-between' },
              { value: 'center', label: 'center' },
              { value: 'end', label: 'end' },
              { value: 'start', label: 'start' },
            ],
          },
        },
        {
          field: 'wrap',
          defaultValue: !0,
          component: 'Switch',
          label: 'wrap',
          colProps: { span: 24 },
        },
        {
          field: 'd3',
          component: 'Divider',
          label: '操作按钮',
          colProps: { span: 24 },
          componentProps: { orientation: 'center' },
        },
        {
          field: 'showActionButtonGroup',
          defaultValue: !0,
          component: 'Switch',
          label: 'showActionButtonGroup',
          colProps: { span: 24 },
          componentProps: ({ formActionType: e }) => ({
            onChange: (t) => {
              e.updateSchema([
                { field: 'showResetButton', componentProps: { disabled: !t } },
                { field: 'showSubmitButton', componentProps: { disabled: !t } },
                { field: 'actionColOptions.span', componentProps: { disabled: !t } },
              ]);
            },
          }),
        },
        {
          field: 'showResetButton',
          defaultValue: !0,
          component: 'Switch',
          label: 'showResetButton',
          colProps: { span: 24 },
        },
        {
          field: 'showSubmitButton',
          defaultValue: !0,
          component: 'Switch',
          label: 'showSubmitButton',
          colProps: { span: 24 },
        },
        {
          field: 'd4',
          component: 'Divider',
          label: '操作按钮网格布局(actionColOptions)',
          colProps: { span: 24 },
          componentProps: { orientation: 'center' },
        },
        {
          field: 'actionColOptions.span',
          component: 'Slider',
          defaultValue: 24,
          label: 'span',
          colProps: { span: 24 },
          componentProps: { min: 0, max: 24 },
        },
        {
          field: 'd5',
          component: 'Divider',
          label: '其他事件',
          colProps: { span: 24 },
          componentProps: { orientation: 'center' },
        },
        { field: 'other', component: 'Input', label: '', colProps: { span: 24 }, colSlot: 'other' },
      ],
      p = _(!1),
      s = _(),
      [a] = y({
        size: 'small',
        schemas: h,
        compact: !0,
        actionColOptions: { span: 24 },
        showActionButtonGroup: !1,
      }),
      u = () =>
        f(this, null, function* () {
          var e;
          m({ resetButtonOptions: { disabled: !1, text: '重置' } }),
            m({ submitButtonOptions: { disabled: !1, loading: !1 } }),
            yield S({ field9: [] }),
            yield (e = s.value) == null ? void 0 : e.resetFields();
        }),
      F = (e) =>
        f(this, null, function* () {
          yield m(e), (p.value = !1);
        }),
      [k, { setProps: m, setFieldsValue: S, updateSchema: R }] = y({
        labelWidth: 120,
        schemas: d,
        actionColOptions: { span: 24 },
        fieldMapToTime: [['fieldTime', ['startTime', 'endTime'], 'YYYY-MM']],
      });
    function A() {
      return f(this, null, function* () {
        const t = yield (function () {
            return new Promise((D) => {
              setTimeout(() => {
                D({
                  field9: ['430000', '430100', '430102'],
                  province: '湖南省',
                  city: '长沙市',
                  district: '岳麓区',
                });
              }, 1e3);
            });
          })(),
          { field9: i, province: v, city: T, district: z } = t;
        yield R({ field: 'field9', componentProps: { displayRenderArray: [v, T, z] } }),
          yield S({ field9: i }),
          (p.value = !1);
      });
    }
    const x = () => {
        p.value = !0;
      },
      O = () => {
        var e;
        (e = s.value) == null || e.submit();
      },
      g = (e) => {
        m(e), (p.value = !1);
      };
    function G(e) {}
    return (e, t) => {
      const i = Y('a-button');
      return (
        W(),
        H(
          n(L),
          { title: 'UseForm操作示例' },
          {
            default: o(() => [
              l(
                i,
                { class: 'mb-4', type: 'primary', onClick: x },
                { default: o(() => [c(' 更改设置 ')]), _: 1 },
              ),
              l(
                n(M),
                {
                  open: p.value,
                  'onUpdate:open': t[2] || (t[2] = (v) => (p.value = v)),
                  title: '更改设置',
                  placement: 'right',
                },
                {
                  extra: o(() => [
                    l(n(B), null, {
                      default: o(() => [
                        l(i, { onClick: u }, { default: o(() => [c('重置设置')]), _: 1 }),
                        l(
                          i,
                          { type: 'primary', onClick: O },
                          { default: o(() => [c('应用')]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    }),
                  ]),
                  default: o(() => [
                    l(
                      n(C),
                      { ref_key: 'settingFormRef', ref: s, onRegister: n(a), onSubmit: F },
                      {
                        other: o(() => [
                          l(n(B), null, {
                            default: o(() => [
                              l(
                                i,
                                {
                                  onClick:
                                    t[0] ||
                                    (t[0] = () =>
                                      g({ resetButtonOptions: { disabled: !0, text: '重置New' } })),
                                },
                                { default: o(() => [c(' 修改重置按钮 ')]), _: 1 },
                              ),
                              l(
                                i,
                                {
                                  onClick:
                                    t[1] ||
                                    (t[1] = () =>
                                      g({ submitButtonOptions: { disabled: !0, loading: !0 } })),
                                },
                                { default: o(() => [c(' 修改查询按钮 ')]), _: 1 },
                              ),
                              l(
                                i,
                                { onClick: A, class: 'mr-2' },
                                { default: o(() => [c(' 联动回显 ')]), _: 1 },
                              ),
                            ]),
                            _: 1,
                          }),
                        ]),
                        _: 1,
                      },
                      8,
                      ['onRegister'],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['open'],
              ),
              l(
                n(I),
                { title: 'useForm示例' },
                {
                  default: o(() => [
                    l(n(C), { onRegister: n(k), onSubmit: G }, null, 8, ['onRegister']),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { ve as default };
