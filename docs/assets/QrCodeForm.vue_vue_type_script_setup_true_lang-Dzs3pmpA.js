import {
  u as l,
  L as m,
  _,
} from './LoginFormTitle.vue_vue_type_script_setup_true_lang-B0bLB5Y9.js';
import { Q as d } from './index-2-WXwuOR.js';
import { h as u } from '../index.js';
import { a4 as f, B as p } from './antd-BmrhB3rb.js';
import {
  d as g,
  c as x,
  u as e,
  Z as h,
  _ as k,
  k as t,
  $ as C,
  a9 as a,
  G as o,
  a0 as n,
  ab as v,
} from './vue-BjERyvPm.js';
const S = { key: 0 },
  y = { class: 'enter-x min-w-64 min-h-64' },
  B = 'https://vben.vvbin.cn/login',
  j = g({
    __name: 'QrCodeForm',
    setup(b) {
      const { t: s } = u(),
        { handleBackLogin: r, getLoginState: i } = l(),
        c = x(() => e(i) === m.QR_CODE);
      return (L, w) =>
        c.value
          ? (h(),
            k('div', S, [
              t(_, { class: 'enter-x' }),
              C('div', y, [
                t(e(d), {
                  value: B,
                  class: 'enter-x flex justify-center xl:justify-start',
                  width: 280,
                }),
                t(
                  e(f),
                  { class: 'enter-x' },
                  { default: a(() => [o(n(e(s)('sys.login.scanSign')), 1)]), _: 1 },
                ),
                t(
                  e(p),
                  { size: 'large', block: '', class: 'mt-4 enter-x', onClick: e(r) },
                  { default: a(() => [o(n(e(s)('sys.login.backSignIn')), 1)]), _: 1 },
                  8,
                  ['onClick'],
                ),
              ]),
            ]))
          : v('', !0);
    },
  });
export { j as _ };
