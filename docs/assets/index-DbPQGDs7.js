import {
  d as o,
  Y as s,
  c as n,
  u as e,
  Z as p,
  a8 as c,
  a9 as m,
  G as t,
  a0 as u,
  k as i,
  $ as l,
} from './vue-BjERyvPm.js';
import { P as d } from './index-B24a6rfW.js';
import { E as _ } from './antd-BmrhB3rb.js';
import '../index.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const f = l('br', null, null, -1),
  g = o({
    name: 'TestTab',
    __name: 'index',
    setup(x) {
      const { currentRoute: a } = s(),
        r = n(() => e(a).params);
      return (P, b) => (
        p(),
        c(
          e(d),
          { title: '带参数标签页', content: '支持带参数多tab缓存' },
          {
            default: m(() => [
              t(' Current Param : ' + u(r.value) + ' ', 1),
              f,
              t(' Keep Alive '),
              i(e(_)),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { g as default };