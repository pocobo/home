import { D as r } from './index-DXnpckpY.js';
import { P as c } from './index-B24a6rfW.js';
import { u as i } from './useDescription-CSes53e9.js';
import { d as p, Z as d, a8 as u, a9 as x, k as s, u as e } from './vue-BjERyvPm.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const q = p({
  __name: 'index',
  setup(f) {
    const t = {
        username: 'test',
        nickName: 'VB',
        age: '123',
        phone: '15695909xxx',
        email: '190848757@qq.com',
        addr: '厦门市思明区',
        sex: '男',
        certy: '3504256199xxxxxxxxx',
        tag: 'orange',
      },
      a = [
        { field: 'username', label: '用户名' },
        { field: 'nickName', label: '昵称', render: (l, o) => `${o.username}-${l}` },
        { field: 'phone', label: '联系电话' },
        { field: 'email', label: '邮箱' },
        { field: 'addr', label: '地址' },
      ],
      [n] = i({ title: 'useDescription', data: t, schema: a }),
      [m] = i({ title: '无边框', bordered: !1, data: t, schema: a });
    return (l, o) => (
      d(),
      u(
        e(c),
        { title: '详情组件示例' },
        {
          default: x(() => [
            s(e(r), {
              title: '基础示例',
              collapseOptions: { canExpand: !0, helpMessage: 'help me' },
              column: 3,
              data: t,
              schema: a,
            }),
            s(e(r), {
              class: 'mt-4',
              title: '垂直示例',
              layout: 'vertical',
              collapseOptions: { canExpand: !0, helpMessage: 'help me' },
              column: 2,
              data: t,
              schema: a,
            }),
            s(e(r), { onRegister: e(n), class: 'mt-4' }, null, 8, ['onRegister']),
            s(e(r), { onRegister: e(m), class: 'mt-4' }, null, 8, ['onRegister']),
          ]),
          _: 1,
        },
      )
    );
  },
});
export { q as default };
