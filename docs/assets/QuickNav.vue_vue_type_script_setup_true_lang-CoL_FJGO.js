import { n } from './data-eeqyhHg8.js';
import { z as c } from '../index.js';
import { af as l, R as i } from './antd-BmrhB3rb.js';
import {
  d as _,
  Z as e,
  a8 as s,
  a9 as o,
  _ as m,
  F as d,
  aa as f,
  u as t,
  $ as r,
  k as p,
  a0 as u,
} from './vue-BjERyvPm.js';
const k = { class: 'flex flex-col items-center' },
  x = { class: 'text-md mt-2 truncate' },
  z = _({
    __name: 'QuickNav',
    setup(h) {
      return (B, C) => (
        e(),
        s(
          t(i),
          { title: '快捷导航' },
          {
            default: o(() => [
              (e(!0),
              m(
                d,
                null,
                f(
                  t(n),
                  (a) => (
                    e(),
                    s(
                      t(l),
                      { key: a.title },
                      {
                        default: o(() => [
                          r('span', k, [
                            p(c, { icon: a.icon, color: a.color, size: '20' }, null, 8, [
                              'icon',
                              'color',
                            ]),
                            r('span', x, u(a.title), 1),
                          ]),
                        ]),
                        _: 2,
                      },
                      1024,
                    )
                  ),
                ),
                128,
              )),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { z as _ };
