var x = (y, r, i) =>
  new Promise((t, c) => {
    var p = (s) => {
        try {
          u(i.next(s));
        } catch (d) {
          c(d);
        }
      },
      m = (s) => {
        try {
          u(i.throw(s));
        } catch (d) {
          c(d);
        }
      },
      u = (s) => (s.done ? t(s.value) : Promise.resolve(s.value).then(p, m));
    u((i = i.apply(y, r)).next());
  });
import {
  u as z,
  a as I,
  b as R,
  L as F,
  _ as P,
} from './LoginFormTitle.vue_vue_type_script_setup_true_lang-B0bLB5Y9.js';
import { S as B } from './index-vjZxMvXl.js';
import { C as U } from './index-CziPtsqx.js';
import { h as E } from '../index.js';
import { a2 as k, E as f, a3 as L, B as w } from './antd-BmrhB3rb.js';
import {
  d as N,
  f as _,
  r as V,
  c as T,
  u as e,
  Z as D,
  _ as G,
  k as a,
  a9 as n,
  G as g,
  a0 as v,
  ab as M,
} from './vue-BjERyvPm.js';
const Z = { key: 0 },
  O = N({
    __name: 'RegisterForm',
    setup(y) {
      const r = k.Item,
        i = f.Password,
        { t } = E(),
        { handleBackLogin: c, getLoginState: p } = z(),
        m = _(),
        u = _(!1),
        s = V({ account: '', password: '', confirmPassword: '', mobile: '', sms: '', policy: !1 }),
        { getFormRules: d } = I(s),
        { validForm: b } = R(m),
        h = T(() => e(p) === F.REGISTER);
      function C() {
        return x(this, null, function* () {
          yield b();
        });
      }
      return (S, o) =>
        h.value
          ? (D(),
            G('div', Z, [
              a(P, { class: 'enter-x' }),
              a(
                e(k),
                { class: 'p-4 enter-x', model: s, rules: e(d), ref_key: 'formRef', ref: m },
                {
                  default: n(() => [
                    a(
                      e(r),
                      { name: 'account', class: 'enter-x' },
                      {
                        default: n(() => [
                          a(
                            e(f),
                            {
                              class: 'fix-auto-fill',
                              size: 'large',
                              value: s.account,
                              'onUpdate:value': o[0] || (o[0] = (l) => (s.account = l)),
                              placeholder: e(t)('sys.login.userName'),
                            },
                            null,
                            8,
                            ['value', 'placeholder'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(r),
                      { name: 'mobile', class: 'enter-x' },
                      {
                        default: n(() => [
                          a(
                            e(f),
                            {
                              size: 'large',
                              value: s.mobile,
                              'onUpdate:value': o[1] || (o[1] = (l) => (s.mobile = l)),
                              placeholder: e(t)('sys.login.mobile'),
                              class: 'fix-auto-fill',
                            },
                            null,
                            8,
                            ['value', 'placeholder'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(r),
                      { name: 'sms', class: 'enter-x' },
                      {
                        default: n(() => [
                          a(
                            e(U),
                            {
                              size: 'large',
                              class: 'fix-auto-fill',
                              value: s.sms,
                              'onUpdate:value': o[2] || (o[2] = (l) => (s.sms = l)),
                              placeholder: e(t)('sys.login.smsCode'),
                            },
                            null,
                            8,
                            ['value', 'placeholder'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(r),
                      { name: 'password', class: 'enter-x' },
                      {
                        default: n(() => [
                          a(
                            e(B),
                            {
                              size: 'large',
                              value: s.password,
                              'onUpdate:value': o[3] || (o[3] = (l) => (s.password = l)),
                              placeholder: e(t)('sys.login.password'),
                            },
                            null,
                            8,
                            ['value', 'placeholder'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(r),
                      { name: 'confirmPassword', class: 'enter-x' },
                      {
                        default: n(() => [
                          a(
                            e(i),
                            {
                              size: 'large',
                              visibilityToggle: '',
                              value: s.confirmPassword,
                              'onUpdate:value': o[4] || (o[4] = (l) => (s.confirmPassword = l)),
                              placeholder: e(t)('sys.login.confirmPassword'),
                            },
                            null,
                            8,
                            ['value', 'placeholder'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(r),
                      { class: 'enter-x', name: 'policy' },
                      {
                        default: n(() => [
                          a(
                            e(L),
                            {
                              checked: s.policy,
                              'onUpdate:checked': o[5] || (o[5] = (l) => (s.policy = l)),
                              size: 'small',
                            },
                            { default: n(() => [g(v(e(t)('sys.login.policy')), 1)]), _: 1 },
                            8,
                            ['checked'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(w),
                      {
                        type: 'primary',
                        class: 'enter-x',
                        size: 'large',
                        block: '',
                        onClick: C,
                        loading: u.value,
                      },
                      { default: n(() => [g(v(e(t)('sys.login.registerButton')), 1)]), _: 1 },
                      8,
                      ['loading'],
                    ),
                    a(
                      e(w),
                      { size: 'large', block: '', class: 'mt-4 enter-x', onClick: e(c) },
                      { default: n(() => [g(v(e(t)('sys.login.backSignIn')), 1)]), _: 1 },
                      8,
                      ['onClick'],
                    ),
                  ]),
                  _: 1,
                },
                8,
                ['model', 'rules'],
              ),
            ]))
          : M('', !0);
    },
  });
export { O as _ };
