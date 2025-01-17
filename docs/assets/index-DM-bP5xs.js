import { bi as d, bk as c } from './antd-BmrhB3rb.js';
import {
  d as i,
  a7 as l,
  Z as p,
  _ as m,
  k as s,
  a9 as _,
  G as o,
  u as a,
  $ as e,
  a2 as u,
  a3 as h,
} from './vue-BjERyvPm.js';
import { c as f } from '../index.js';
const r = (t) => (u('data-v-ead79ee2'), (t = t()), h(), t),
  v = { class: 'm-5 result-error' },
  x = { class: 'result-error__content' },
  b = r(() => e('div', { class: 'result-error__content-title' }, '您提交的内容有如下错误：', -1)),
  k = { class: 'mb-4' },
  C = r(() => e('a', { class: 'ml-4' }, '立即解冻 >', -1)),
  I = { class: 'mb-4' },
  y = r(() => e('a', { class: 'ml-4' }, '立即解冻 >', -1)),
  B = i({
    __name: 'index',
    setup(t) {
      return (N, S) => {
        const n = l('a-button');
        return (
          p(),
          m('div', v, [
            s(
              a(d),
              {
                status: 'error',
                title: '提交失败',
                'sub-title': '请核对并修改以下信息后，再重新提交。',
              },
              {
                extra: _(() => [
                  s(
                    n,
                    { key: 'console', type: 'primary' },
                    { default: _(() => [o(' 返回修改 ')]), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e('div', x, [
              b,
              e('div', k, [
                s(a(c), { class: 'mr-2 result-error__content-icon' }),
                o(' 您的账户已被冻结 '),
                C,
              ]),
              e('div', I, [
                s(a(c), { class: 'mr-2 result-error__content-icon' }),
                o(' 您的账户还不具备申请资格 '),
                y,
              ]),
            ]),
          ])
        );
      };
    },
  }),
  G = f(B, [['__scopeId', 'data-v-ead79ee2']]);
export { G as default };
