var u = (s, a, e) =>
  new Promise((m, i) => {
    var o = (r) => {
        try {
          t(e.next(r));
        } catch (c) {
          i(c);
        }
      },
      p = (r) => {
        try {
          t(e.throw(r));
        } catch (c) {
          i(c);
        }
      },
      t = (r) => (r.done ? m(r.value) : Promise.resolve(r.value).then(o, p));
    t((e = e.apply(s, a)).next());
  });
import { P as w } from './index-B24a6rfW.js';
import { _ as h } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { u as P } from './useForm-b1qEKHt-.js';
import {
  d as b,
  a7 as g,
  Z as x,
  a8 as y,
  a9 as l,
  $ as f,
  k as d,
  u as n,
  G as _,
} from './vue-BjERyvPm.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './helper-BjbsUAHT.js';
import './index-RbNU_lzt.js';
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
const C = [
    { field: 'passwordOld', label: '当前密码', component: 'InputPassword', required: !0 },
    {
      field: 'passwordNew',
      label: '新密码',
      component: 'StrengthMeter',
      componentProps: { placeholder: '新密码' },
      rules: [{ required: !0, message: '请输入新密码' }],
    },
    {
      field: 'confirmPassword',
      label: '确认密码',
      component: 'InputPassword',
      dynamicRules: ({ values: s }) => [
        {
          required: !0,
          validator: (a, e) =>
            e
              ? e !== s.passwordNew
                ? Promise.reject('两次输入的密码不一致!')
                : Promise.resolve()
              : Promise.reject('密码不能为空'),
        },
      ],
    },
  ],
  k = { class: 'py-8 bg-white flex flex-col justify-center items-center' },
  v = { class: 'flex justify-center' },
  Y = b({
    name: 'ChangePassword',
    __name: 'index',
    setup(s) {
      const [a, { validate: e, resetFields: m }] = P({
        size: 'large',
        baseColProps: { span: 24 },
        labelWidth: 100,
        showActionButtonGroup: !1,
        schemas: C,
      });
      function i() {
        return u(this, null, function* () {
          try {
            const o = yield e(),
              { passwordOld: p, passwordNew: t } = o;
          } catch (o) {}
        });
      }
      return (o, p) => {
        const t = g('a-button');
        return (
          x(),
          y(
            n(w),
            { title: '修改当前用户密码', content: '修改成功后会自动退出当前登录！' },
            {
              default: l(() => [
                f('div', k, [
                  d(n(h), { onRegister: n(a) }, null, 8, ['onRegister']),
                  f('div', v, [
                    d(t, { onClick: n(m) }, { default: l(() => [_(' 重置 ')]), _: 1 }, 8, [
                      'onClick',
                    ]),
                    d(
                      t,
                      { class: '!ml-4', type: 'primary', onClick: i },
                      { default: l(() => [_(' 确认 ')]), _: 1 },
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { Y as default };
