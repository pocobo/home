import { P as a } from './index-B24a6rfW.js';
import {
  d as o,
  a7 as r,
  Z as n,
  a8 as p,
  a9 as t,
  k as s,
  G as i,
  u as m,
} from './vue-BjERyvPm.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const h = o({
  __name: 'FlatList',
  setup(c) {
    return (_, l) => {
      const e = r('router-link');
      return (
        n(),
        p(
          m(a),
          { title: '平级面包屑示例', content: '子级页面面包屑会覆盖当前层级' },
          {
            default: t(() => [
              s(
                e,
                { to: '/feat/breadcrumb/flatDetail' },
                { default: t(() => [i(' 进入平级详情页 ')]), _: 1 },
              ),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { h as default };
