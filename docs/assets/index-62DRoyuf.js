import { _ as h } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import { _ as b } from './index-BpHr8pvE.js';
import { u as g } from './useTable-USe4NIEW.js';
import { c as C } from './system-DVoCCBj0.js';
import { u as k } from './index-dz3v0Mah.js';
import {
  _ as x,
  c as w,
  s as y,
} from './RoleDrawer.vue_vue_type_script_setup_true_lang-C3dDHknC.js';
import {
  d as R,
  a7 as S,
  Z as a,
  _ as B,
  k as o,
  a9 as r,
  G as D,
  a8 as T,
  u as e,
  ab as v,
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
import './index-snPuAjGa.js';
import './useContextMenu-1El4DIYg.js';
const ce = R({
  name: 'RoleManagement',
  __name: 'index',
  setup(N) {
    const [m, { openDrawer: i }] = k(),
      [s, { reload: l }] = g({
        title: '角色列表',
        api: C,
        columns: w,
        formConfig: { labelWidth: 120, schemas: y },
        useSearchForm: !0,
        showTableSetting: !0,
        bordered: !0,
        showIndexColumn: !1,
        actionColumn: { width: 80, title: '操作', dataIndex: 'action', fixed: void 0 },
      });
    function p() {
      i(!0, { isUpdate: !1 });
    }
    function c(t) {
      i(!0, { record: t, isUpdate: !0 });
    }
    function u(t) {}
    function d() {
      l();
    }
    return (t, V) => {
      const f = S('a-button');
      return (
        a(),
        B('div', null, [
          o(
            e(h),
            { onRegister: e(s) },
            {
              toolbar: r(() => [
                o(
                  f,
                  { type: 'primary', onClick: p },
                  { default: r(() => [D(' 新增角色 ')]), _: 1 },
                ),
              ]),
              bodyCell: r(({ column: _, record: n }) => [
                _.key === 'action'
                  ? (a(),
                    T(
                      e(b),
                      {
                        key: 0,
                        actions: [
                          { icon: 'clarity:note-edit-line', onClick: c.bind(null, n) },
                          {
                            icon: 'ant-design:delete-outlined',
                            color: 'error',
                            popConfirm: {
                              title: '是否确认删除',
                              placement: 'left',
                              confirm: u.bind(null, n),
                            },
                          },
                        ],
                      },
                      null,
                      8,
                      ['actions'],
                    ))
                  : v('', !0),
              ]),
              _: 1,
            },
            8,
            ['onRegister'],
          ),
          o(x, { onRegister: e(m), onSuccess: d }, null, 8, ['onRegister']),
        ])
      );
    };
  },
});
export { ce as default };