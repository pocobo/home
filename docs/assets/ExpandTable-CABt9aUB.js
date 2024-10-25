import { _ as s } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import { _ as c } from './index-BpHr8pvE.js';
import { u as d } from './useTable-USe4NIEW.js';
import { P as u } from './index-B24a6rfW.js';
import { getBasicColumns as f } from './tableData-B7W8a9YK.js';
import { d as _ } from './table-WVnDNY78.js';
import {
  d as b,
  Z as n,
  a8 as a,
  a9 as e,
  k as g,
  u as o,
  $ as C,
  a0 as x,
  ab as B,
} from './vue-BjERyvPm.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './antd-BmrhB3rb.js';
import '../index.js';
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
import './select-BJlCZDbb.js';
const eo = b({
  __name: 'ExpandTable',
  setup(k) {
    const [p] = d({
      api: _,
      title: '可展开表格演示',
      titleHelpMessage: ['已启用expandRowByClick', '已启用stopButtonPropagation'],
      columns: f(),
      rowKey: 'id',
      canResize: !1,
      expandRowByClick: !0,
      accordion: !0,
      actionColumn: { width: 160, title: 'Action', dataIndex: 'action', fixed: 'right' },
    });
    function m(i) {}
    function l(i) {}
    return (i, w) => (
      n(),
      a(
        o(u),
        {
          title: '可展开表格',
          content:
            'TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick',
        },
        {
          default: e(() => [
            g(
              o(s),
              { onRegister: o(p) },
              {
                expandedRowRender: e(({ record: t }) => [C('span', null, 'No: ' + x(t.no), 1)]),
                bodyCell: e(({ column: t, record: r }) => [
                  t.key === 'action'
                    ? (n(),
                      a(
                        o(c),
                        {
                          key: 0,
                          stopButtonPropagation: '',
                          actions: [
                            {
                              label: '删除',
                              icon: 'ic:outline-delete-outline',
                              onClick: m.bind(null, r),
                            },
                          ],
                          dropDownActions: [
                            {
                              label: '启用',
                              popConfirm: { title: '是否启用？', confirm: l.bind(null, r) },
                            },
                          ],
                        },
                        null,
                        8,
                        ['actions', 'dropDownActions'],
                      ))
                    : B('', !0),
                ]),
                _: 1,
              },
              8,
              ['onRegister'],
            ),
          ]),
          _: 1,
        },
      )
    );
  },
});
export { eo as default };