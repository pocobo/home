import {
  a_ as k,
  f as h,
  bo as x,
  l as B,
  aF as M,
  h as T,
  bu as p,
  bA as A,
  bB as F,
  bC as v,
  a as D,
  c as N,
} from '../index.js';
import { c as O } from './copyTextToClipboard-DUmgQPO1.js';
import { bD as P, aS as d } from './antd-BmrhB3rb.js';
import {
  d as R,
  a7 as j,
  Z as w,
  _ as G,
  k as o,
  a9 as n,
  u as e,
  G as c,
  a0 as l,
  a1 as I,
} from './vue-BjERyvPm.js';
const V = R({
    name: 'SettingFooter',
    __name: 'SettingFooter',
    setup(W) {
      const g = k(),
        { prefixCls: m } = h('setting-footer'),
        { t } = T(),
        { createSuccessModal: S, createMessage: i } = D(),
        f = x(),
        _ = B(),
        a = M();
      function y() {
        O(JSON.stringify(e(a.getProjectConfig), null, 2), null).then(() => {
          S({
            title: t('layout.setting.operatingTitle'),
            content: t('layout.setting.operatingContent'),
          });
        });
      }
      function C() {
        try {
          a.setProjectConfig(p);
          const { colorWeak: s, grayMode: u } = p;
          A(), F(s), v(u), i.success(t('layout.setting.resetSuccess'));
        } catch (s) {
          i.error(s);
        }
      }
      function b() {
        localStorage.clear(),
          a.resetAllState(),
          g.resetState(),
          f.resetState(),
          _.resetState(),
          location.reload();
      }
      return (s, u) => {
        const r = j('a-button');
        return (
          w(),
          G(
            'div',
            { class: I(e(m)) },
            [
              o(
                r,
                { type: 'primary', block: '', onClick: y },
                {
                  default: n(() => [
                    o(e(P), { class: 'mr-2' }),
                    c(' ' + l(e(t)('layout.setting.copyBtn')), 1),
                  ]),
                  _: 1,
                },
              ),
              o(
                r,
                { color: 'warning', block: '', onClick: C, class: 'my-3' },
                {
                  default: n(() => [
                    o(e(d), { class: 'mr-2' }),
                    c(' ' + l(e(t)('common.resetText')), 1),
                  ]),
                  _: 1,
                },
              ),
              o(
                r,
                { color: 'error', block: '', onClick: b },
                {
                  default: n(() => [
                    o(e(d), { class: 'mr-2' }),
                    c(' ' + l(e(t)('layout.setting.clearBtn')), 1),
                  ]),
                  _: 1,
                },
              ),
            ],
            2,
          )
        );
      };
    },
  }),
  Z = N(V, [['__scopeId', 'data-v-e923ed59']]);
export { Z as default };
