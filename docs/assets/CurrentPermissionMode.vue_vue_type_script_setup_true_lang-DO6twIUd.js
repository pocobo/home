import { aF as m, W as c, aZ as p } from '../index.js';
import {
  d as _,
  c as d,
  a7 as u,
  Z as l,
  _ as f,
  G as e,
  k as o,
  a9 as a,
  a0 as C,
  u as s,
} from './vue-BjERyvPm.js';
import { a4 as k } from './antd-BmrhB3rb.js';
const M = { class: 'mt-2' },
  B = _({
    name: 'CurrentPermissionMode',
    __name: 'CurrentPermissionMode',
    setup(P) {
      const n = m(),
        r = d(() => n.getProjectConfig.permissionMode),
        { togglePermissionMode: i } = c();
      return (g, v) => {
        const t = u('a-button');
        return (
          l(),
          f('div', M, [
            e(' 当前权限模式： '),
            o(
              t,
              { type: 'link' },
              {
                default: a(() => [
                  e(C(r.value === s(p).BACK ? '后台权限模式' : '前端角色权限模式'), 1),
                ]),
                _: 1,
              },
            ),
            o(
              t,
              { class: 'ml-4', onClick: s(i), type: 'primary' },
              { default: a(() => [e(' 切换权限模式 ')]), _: 1 },
              8,
              ['onClick'],
            ),
            o(s(k)),
          ])
        );
      };
    },
  });
export { B as _ };
