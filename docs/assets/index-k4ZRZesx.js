import { S as t } from './index-vjZxMvXl.js';
import { P as r } from './index-B24a6rfW.js';
import {
  d as c,
  Z as p,
  a8 as d,
  a9 as i,
  $ as s,
  k as o,
  u as a,
  a2 as l,
  a3 as n,
} from './vue-BjERyvPm.js';
import { c as _ } from '../index.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const m = (e) => (l('data-v-a7ca7c1b'), (e = e()), n(), e),
  u = { class: 'flex justify-center' },
  f = { class: 'demo-wrap p-10' },
  h = m(() => s('br', null, null, -1)),
  x = c({
    __name: 'index',
    setup(e) {
      return (v, w) => (
        p(),
        d(
          a(r),
          { title: '密码强度校验组件' },
          {
            default: i(() => [
              s('div', u, [
                s('div', f, [
                  o(a(t), { placeholder: '默认' }),
                  o(a(t), { placeholder: '禁用', disabled: '' }),
                  h,
                  o(a(t), { placeholder: '隐藏input', 'show-input': !1, value: '!@#qwe12345' }),
                ]),
              ]),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  P = _(x, [['__scopeId', 'data-v-a7ca7c1b']]);
export { P as default };
