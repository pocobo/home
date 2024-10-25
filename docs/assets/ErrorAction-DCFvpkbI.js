import { aT as c, z as i, h as l, aX as m } from '../index.js';
import {
  d as f,
  Y as p,
  c as _,
  Z as E,
  a8 as d,
  a9 as e,
  k as r,
  u as o,
} from './vue-BjERyvPm.js';
import { aV as g, T as L } from './antd-BmrhB3rb.js';
const A = f({
  name: 'ErrorAction',
  __name: 'ErrorAction',
  setup(h) {
    const { t: a } = l(),
      { push: n } = p(),
      t = c(),
      s = _(() => t.getErrorLogListCount);
    function u() {
      n(m.ERROR_LOG_PAGE).then(() => {
        t.setErrorLogListCount(0);
      });
    }
    return (C, k) => (
      E(),
      d(
        o(L),
        {
          title: o(a)('layout.header.tooltipErrorLog'),
          placement: 'bottom',
          mouseEnterDelay: 0.5,
          onClick: u,
        },
        {
          default: e(() => [
            r(
              o(g),
              { count: s.value, offset: [0, 10], overflowCount: 99 },
              { default: e(() => [r(i, { icon: 'ion:bug-outline' })]), _: 1 },
              8,
              ['count'],
            ),
          ]),
          _: 1,
        },
        8,
        ['title'],
      )
    );
  },
});
export { A as default };
