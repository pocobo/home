import {
  d as f,
  f as r,
  a7 as T,
  Z as l,
  a8 as c,
  a9 as o,
  $ as p,
  k as u,
  u as n,
  G as x,
  ai as S,
  m as h,
  A as b,
} from './vue-BjERyvPm.js';
import { P as k } from './index-B24a6rfW.js';
import {
  al as w,
  am as y,
  an as C,
  ao as R,
  ap as X,
  aq as Y,
  ar as B,
  as as N,
  at as V,
  au as D,
  av as E,
  aw as F,
  ax as I,
  c as P,
} from '../index.js';
import { W } from './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const g = { class: 'flex' },
  j = { class: 'box' },
  q = f({
    __name: 'index',
    setup(A) {
      const i = {
          FadeTransition: w,
          ScaleTransition: y,
          SlideYTransition: C,
          ScrollYTransition: R,
          SlideYReverseTransition: X,
          ScrollYReverseTransition: Y,
          SlideXTransition: B,
          ScrollXTransition: N,
          SlideXReverseTransition: V,
          ScrollXReverseTransition: D,
          ScaleRotateTransition: E,
          ExpandXTransition: F,
          ExpandTransition: I,
        },
        d = Object.keys(i).map((a) => ({ label: a.replace('Transition', ''), value: a, key: a })),
        e = r('FadeTransition'),
        s = r(!0);
      function m() {
        (s.value = !1),
          setTimeout(() => {
            s.value = !0;
          }, 300);
      }
      return (a, t) => {
        const v = T('a-button');
        return (
          l(),
          c(
            n(k),
            { title: '动画组件示例' },
            {
              default: o(() => [
                p('div', g, [
                  u(
                    n(W),
                    {
                      options: n(d),
                      value: e.value,
                      'onUpdate:value': t[0] || (t[0] = (_) => (e.value = _)),
                      placeholder: '选择动画',
                      style: { width: '150px' },
                    },
                    null,
                    8,
                    ['options', 'value'],
                  ),
                  u(
                    v,
                    { type: 'primary', class: 'ml-4', onClick: m },
                    { default: o(() => [x(' start ')]), _: 1 },
                  ),
                ]),
                (l(),
                c(S(i[e.value]), null, {
                  default: o(() => [h(p('div', j, null, 512), [[b, s.value]])]),
                  _: 1,
                })),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  }),
  J = P(q, [['__scopeId', 'data-v-f3d40c1d']]);
export { J as default };
