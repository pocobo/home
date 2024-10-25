var k = (S, b, p) =>
  new Promise((f, s) => {
    var h = (t) => {
        try {
          r(p.next(t));
        } catch (u) {
          s(u);
        }
      },
      P = (t) => {
        try {
          r(p.throw(t));
        } catch (u) {
          s(u);
        }
      },
      r = (t) => (t.done ? f(t.value) : Promise.resolve(t.value).then(h, P));
    r((p = p.apply(S, b)).next());
  });
import { _ as q } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import { _ as y } from './componentMap-C0n90BJh.js';
import { u as V, C as O, a as U } from '../index.js';
import { P as w } from './index-B24a6rfW.js';
import { o as m } from './select-BJlCZDbb.js';
import { t as F } from './tree-BEHPd0A8.js';
import { a as B } from './cascader-WY2IuUlW.js';
import { u as A } from './upload-vaW6y1fb.js';
import { f as D, W as T } from './antd-BmrhB3rb.js';
import {
  d as H,
  f as v,
  c as C,
  u as a,
  Z as $,
  a8 as Y,
  a9 as c,
  k as d,
} from './vue-BjERyvPm.js';
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
const Pe = H({
  __name: 'index',
  setup(S) {
    let b = V(_, 300);
    const p = v([]),
      f = v([]),
      s = v([]);
    for (let e = 1; e < 10; e++) s.value.push({ label: '选项' + e, value: `${e}` });
    const h = C(() => D(a(s)).map((e) => ((e.disabled = a(f).indexOf(e.value) !== -1), e))),
      P = C(() => D(a(s)).map((e) => ((e.disabled = a(p).indexOf(e.value) !== -1), e))),
      r = [
        { id: 'guangdong', label: '广东省', value: '1', key: '1' },
        { id: 'jiangsu', label: '江苏省', value: '2', key: '2' },
      ],
      t = {
        guangdong: [
          { label: '珠海市', value: '1', key: '1' },
          { label: '深圳市', value: '2', key: '2' },
          { label: '广州市', value: '3', key: '3' },
        ],
        jiangsu: [
          { label: '南京市', value: '1', key: '1' },
          { label: '无锡市', value: '2', key: '2' },
          { label: '苏州市', value: '3', key: '3' },
        ],
      },
      u = [
        { field: 'divider-basic', component: 'Divider', label: '基础字段', colProps: { span: 24 } },
        {
          field: 'field1',
          component: 'Input',
          label: ({ model: e }) => `字段1${e.field3 ? e.field3 : ''}`,
          colProps: { span: 8 },
          componentProps: ({ schema: e, formModel: i }) => ({
            placeholder: '自定义placeholder',
            onChange: (l) => {},
          }),
          renderComponentContent: () => ({ prefix: () => 'pSlot', suffix: () => 'sSlot' }),
        },
        {
          field: 'field2',
          component: 'Input',
          label: '带后缀',
          defaultValue: '111',
          colProps: { span: 8 },
          componentProps: { onChange: (e) => {} },
          suffix: '天',
        },
        {
          field: 'fieldsc',
          component: 'Upload',
          label: '上传',
          colProps: { span: 8 },
          rules: [{ required: !0, message: '请选择上传文件' }],
          componentProps: { api: A },
        },
        { field: 'field3', component: 'DatePicker', label: '字段3', colProps: { span: 8 } },
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
          component: 'Checkbox',
          label: '字段8',
          colProps: { span: 8 },
          renderComponentContent: 'Check',
        },
        { field: 'field9', component: 'Switch', label: '字段9', colProps: { span: 8 } },
        {
          field: 'field10',
          component: 'RadioButtonGroup',
          label: '字段10',
          colProps: { span: 8 },
          componentProps: {
            options: [
              { label: '选项1', value: '1' },
              { label: '选项2', value: '2' },
            ],
            onChange: (e) => {},
          },
        },
        {
          field: 'field11',
          component: 'Cascader',
          label: '字段11',
          colProps: { span: 8 },
          componentProps: {
            options: [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [{ value: 'xihu', label: 'West Lake' }],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [{ value: 'zhonghuamen', label: 'Zhong Hua Men' }],
                  },
                ],
              },
            ],
          },
        },
        {
          field: 'field12',
          component: 'BasicTitle',
          label: '标题区分',
          componentProps: { span: !0 },
          colProps: { span: 24 },
        },
        { field: 'field13', component: 'CropperAvatar', label: '头像上传', colProps: { span: 8 } },
        {
          field: 'field14',
          component: 'Transfer',
          label: '穿梭框',
          colProps: { span: 8 },
          componentProps: { render: (e) => e.label, dataSource: t.guangdong, targetKeys: ['1'] },
        },
        {
          field: 'divider-api-select',
          component: 'Divider',
          label: '远程下拉演示',
          colProps: { span: 24 },
        },
        {
          field: 'field30',
          component: 'ApiSelect',
          label: '懒加载远程下拉',
          required: !0,
          componentProps: {
            api: m,
            params: { id: 1 },
            resultField: 'list',
            labelField: 'name',
            valueField: 'id',
            immediate: !0,
            onChange: (e, i) => {},
            onOptionsChange: (e) => {},
          },
          colProps: { span: 8 },
          defaultValue: '0',
        },
        {
          field: 'field8',
          component: 'ApiCascader',
          label: '联动ApiCascader',
          required: !0,
          colProps: { span: 8 },
          componentProps: {
            api: B,
            apiParamKey: 'parentCode',
            labelField: 'name',
            valueField: 'code',
            initFetchParams: { parentCode: '' },
            isLeaf: (e) => !(e.levelType < 3),
            onChange: (e, ...i) => {},
          },
        },
        {
          field: 'field31',
          label: '下拉本地搜索',
          helpMessage: ['ApiSelect组件', '远程数据源本地搜索', '只发起一次请求获取所有选项'],
          required: !0,
          slot: 'localSearch',
          colProps: { span: 8 },
          defaultValue: '0',
          componentProps: { onOptionsChange() {} },
        },
        {
          field: 'field32',
          label: '下拉远程搜索',
          helpMessage: ['ApiSelect组件', '将关键词发送到接口进行远程搜索'],
          required: !0,
          slot: 'remoteSearch',
          colProps: { span: 8 },
          defaultValue: '0',
        },
        {
          field: 'field33',
          component: 'ApiTreeSelect',
          label: '远程下拉树',
          helpMessage: ['ApiTreeSelect组件', '使用接口提供的数据生成选项'],
          required: !0,
          componentProps: { api: F, resultField: 'list', onChange: (e, i) => {} },
          colProps: { span: 8 },
        },
        {
          field: 'field33',
          component: 'ApiTreeSelect',
          label: '远程懒加载下拉树',
          helpMessage: ['ApiTreeSelect组件', '使用接口提供的数据生成选项'],
          required: !0,
          componentProps: {
            api: () =>
              new Promise((e) => {
                e([{ title: 'Parent Node', value: '0-0' }]);
              }),
            async: !0,
            onChange: (e, i) => {},
            onLoadData: ({ treeData: e, resolve: i, treeNode: l }) => {
              setTimeout(() => {
                const o = [
                  { title: `Child Node ${l.eventKey}-0`, value: `${l.eventKey}-0` },
                  { title: `Child Node ${l.eventKey}-1`, value: `${l.eventKey}-1` },
                ];
                o.forEach((n) => {
                  (n.isLeaf = !1), (n.children = []);
                }),
                  (l.dataRef.children = o),
                  (e.value = [...e.value]),
                  i();
              }, 300);
            },
          },
          colProps: { span: 8 },
        },
        {
          field: 'field34',
          component: 'ApiRadioGroup',
          label: '远程Radio',
          helpMessage: ['ApiRadioGroup组件', '使用接口提供的数据生成选项'],
          required: !0,
          componentProps: {
            api: m,
            params: { count: 2 },
            resultField: 'list',
            labelField: 'name',
            valueField: 'id',
          },
          defaultValue: '1',
          colProps: { span: 8 },
        },
        {
          field: 'field35',
          component: 'ApiRadioGroup',
          label: '远程Radio',
          helpMessage: ['ApiRadioGroup组件', '使用接口提供的数据生成选项'],
          required: !0,
          componentProps: {
            api: m,
            params: { count: 2 },
            resultField: 'list',
            labelField: 'name',
            valueField: 'id',
            isBtn: !0,
            onChange: (e) => {},
          },
          colProps: { span: 8 },
        },
        {
          field: 'field36',
          component: 'ApiTree',
          label: '远程Tree',
          helpMessage: ['ApiTree组件', '使用接口提供的数据生成选项'],
          required: !0,
          componentProps: {
            api: F,
            params: { count: 2 },
            afterFetch: (e) => e,
            resultField: 'list',
          },
          colProps: { span: 8 },
        },
        {
          label: '远程穿梭框',
          field: 'field37',
          component: 'ApiTransfer',
          componentProps: {
            render: (e) => e.label,
            api: () =>
              k(this, null, function* () {
                return Promise.resolve(t.guangdong);
              }),
          },
          defaultValue: ['1'],
          required: !0,
        },
        {
          field: 'divider-linked',
          component: 'Divider',
          label: '字段联动',
          colProps: { span: 24 },
        },
        {
          field: 'province',
          component: 'Select',
          label: '省份',
          colProps: { span: 8 },
          componentProps: ({ formModel: e, formActionType: i }) => ({
            options: r,
            placeholder: '省份与城市联动',
            onChange: (l) => {
              let o = l == 1 ? t[r[0].id] : t[r[1].id];
              l === void 0 && (o = []), (e.city = void 0);
              const { updateSchema: n } = i;
              n({ field: 'city', componentProps: { options: o } });
            },
          }),
        },
        {
          field: 'city',
          component: 'Select',
          label: '城市',
          colProps: { span: 8 },
          componentProps: { options: [], placeholder: '省份与城市联动' },
        },
        {
          field: 'divider-selects',
          component: 'Divider',
          label: '互斥多选',
          helpMessage: ['两个Select共用数据源', '但不可选择对方已选中的项目'],
          colProps: { span: 24 },
        },
        {
          field: 'selectA',
          label: '互斥SelectA',
          slot: 'selectA',
          defaultValue: [],
          colProps: { span: 8 },
        },
        {
          field: 'selectB',
          label: '互斥SelectB',
          slot: 'selectB',
          defaultValue: [],
          colProps: { span: 8 },
        },
        {
          field: 'divider-deconstruct',
          component: 'Divider',
          label: '字段解构',
          helpMessage: ['如果组件的值是 array 或者 object', '可以根据 ES6 的解构语法分别取值'],
          colProps: { span: 24 },
        },
        {
          field: '[startTime, endTime]',
          label: '时间范围',
          component: 'TimeRangePicker',
          componentProps: { format: 'HH:mm:ss', placeholder: ['开始时间', '结束时间'] },
        },
        {
          field: '[startDate, endDate]',
          label: '日期范围',
          component: 'RangePicker',
          componentProps: { format: 'YYYY-MM-DD', placeholder: ['开始日期', '结束日期'] },
        },
        {
          field: '[startDateTime, endDateTime]',
          label: '日期时间范围',
          component: 'RangePicker',
          componentProps: {
            format: 'YYYY-MM-DD HH:mm:ss',
            placeholder: ['开始日期、时间', '结束日期、时间'],
            showTime: { format: 'HH:mm:ss' },
          },
        },
        { field: 'divider-others', component: 'Divider', label: '其它', colProps: { span: 24 } },
        {
          field: 'field20',
          component: 'InputNumber',
          label: '字段20',
          required: !0,
          colProps: { span: 8 },
        },
        {
          field: 'field21',
          component: 'Slider',
          label: '字段21',
          componentProps: { min: 0, max: 100, range: !0, marks: { 20: '20°C', 60: '60°C' } },
          colProps: { span: 8 },
        },
        {
          field: 'field22',
          component: 'Rate',
          label: '字段22',
          defaultValue: 3,
          colProps: { span: 8 },
          componentProps: { disabled: !1, allowHalf: !0 },
        },
        {
          field: 'field23',
          component: 'ImageUpload',
          label: '上传图片',
          required: !0,
          defaultValue: [
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          ],
          componentProps: { api: A, accept: ['png', 'jpeg', 'jpg'], maxSize: 2, maxNumber: 1 },
        },
      ],
      { createMessage: M } = U(),
      g = v(''),
      R = C(() => ({ keyword: a(g) }));
    function _(e) {
      g.value = e;
    }
    function x() {
      g.value = '';
    }
    function j(e) {
      M.success('click search,values:' + JSON.stringify(e));
    }
    return (e, i) => (
      $(),
      Y(
        a(w),
        { title: '表单基础示例', contentFullHeight: '' },
        {
          default: c(() => [
            d(
              a(O),
              { title: '基础示例' },
              {
                default: c(() => [
                  d(
                    a(q),
                    {
                      autoFocusFirstItem: '',
                      labelWidth: 200,
                      schemas: u,
                      actionColOptions: { span: 24 },
                      onSubmit: j,
                      onReset: x,
                    },
                    {
                      selectA: c(({ model: l, field: o }) => [
                        d(
                          a(T),
                          {
                            options: h.value,
                            mode: 'multiple',
                            value: l[o],
                            'onUpdate:value': (n) => (l[o] = n),
                            onChange: (n) => (p.value = l[o]),
                            allowClear: '',
                          },
                          null,
                          8,
                          ['options', 'value', 'onUpdate:value', 'onChange'],
                        ),
                      ]),
                      selectB: c(({ model: l, field: o }) => [
                        d(
                          a(T),
                          {
                            options: P.value,
                            mode: 'multiple',
                            value: l[o],
                            'onUpdate:value': (n) => (l[o] = n),
                            onChange: (n) => (f.value = l[o]),
                            allowClear: '',
                          },
                          null,
                          8,
                          ['options', 'value', 'onUpdate:value', 'onChange'],
                        ),
                      ]),
                      localSearch: c(({ model: l, field: o }) => [
                        d(
                          a(y),
                          {
                            api: a(m),
                            showSearch: '',
                            value: l[o],
                            'onUpdate:value': (n) => (l[o] = n),
                            optionFilterProp: 'label',
                            resultField: 'list',
                            labelField: 'name',
                            valueField: 'id',
                          },
                          null,
                          8,
                          ['api', 'value', 'onUpdate:value'],
                        ),
                      ]),
                      remoteSearch: c(({ model: l, field: o }) => [
                        d(
                          a(y),
                          {
                            api: a(m),
                            showSearch: '',
                            value: l[o],
                            'onUpdate:value': (n) => (l[o] = n),
                            filterOption: !1,
                            resultField: 'list',
                            labelField: 'name',
                            valueField: 'id',
                            params: R.value,
                            onSearch: a(b),
                          },
                          null,
                          8,
                          ['api', 'value', 'onUpdate:value', 'params', 'onSearch'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
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
export { Pe as default };
