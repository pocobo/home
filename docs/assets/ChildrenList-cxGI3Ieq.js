import { P as r } from './index-B24a6rfW.js';
import {
  d as o,
  a7 as a,
  Z as n,
  a8 as i,
  a9 as e,
  k as p,
  G as s,
  u as c,
} from './vue-BjERyvPm.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const b = o({
  __name: 'ChildrenList',
  setup(m) {
    return (l, _) => {
      const t = a('router-link');
      return (
        n(),
        i(
          c(r),
          { title: '层级面包屑示例', content: '子级页面面包屑会添加到当前层级后面' },
          {
            default: e(() => [
              p(
                t,
                { to: '/feat/breadcrumb/children/childrenDetail' },
                { default: e(() => [s(' 进入子级详情页 ')]), _: 1 },
              ),
            ]),
            _: 1,
          },
        )
      );
    };
  },
});
export { b as default };
