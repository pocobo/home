import { z as d } from '../index.js';
import { g as i } from './data-eeqyhHg8.js';
import { af as p, R as u } from './antd-BmrhB3rb.js';
import {
  d as f,
  a7 as m,
  Z as o,
  a8 as n,
  a9 as s,
  k as l,
  G as x,
  _ as g,
  F as h,
  aa as k,
  u as r,
  $ as a,
  a0 as t,
  ac as y,
} from './vue-BjERyvPm.js';
const C = { class: 'flex' },
  w = { class: 'text-lg ml-4' },
  B = { class: 'flex mt-2 h-10 text-secondary' },
  b = { class: 'flex justify-between text-secondary' },
  F = f({
    __name: 'ProjectCard',
    setup(v) {
      return (c, z) => {
        const _ = m('a-button');
        return (
          o(),
          n(
            r(u),
            y({ title: '项目' }, c.$attrs),
            {
              extra: s(() => [
                l(_, { type: 'link', size: 'small' }, { default: s(() => [x('更多')]), _: 1 }),
              ]),
              default: s(() => [
                (o(!0),
                g(
                  h,
                  null,
                  k(
                    r(i),
                    (e) => (
                      o(),
                      n(
                        r(p),
                        { key: e.title, class: '!md:w-1/3 !w-full' },
                        {
                          default: s(() => [
                            a('span', C, [
                              l(d, { icon: e.icon, color: e.color, size: '30' }, null, 8, [
                                'icon',
                                'color',
                              ]),
                              a('span', w, t(e.title), 1),
                            ]),
                            a('div', B, t(e.desc), 1),
                            a('div', b, [
                              a('span', null, t(e.group), 1),
                              a('span', null, t(e.date), 1),
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
            16,
          )
        );
      };
    },
  });
export { F as _ };
