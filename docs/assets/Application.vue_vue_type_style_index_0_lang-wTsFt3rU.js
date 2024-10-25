import { z as _ } from '../index.js';
import { applicationList as m } from './data-NRFjrms5.js';
import { ag as u, U as k, V as C, R as $ } from './antd-BmrhB3rb.js';
import {
  d as w,
  Z as t,
  a8 as n,
  a9 as c,
  k as i,
  u as s,
  _ as v,
  F as x,
  aa as V,
  a1 as e,
  $ as l,
  ab as p,
  G as r,
  a0 as d,
} from './vue-BjERyvPm.js';
const o = 'account-center-application',
  z = w({
    __name: 'Application',
    setup(g) {
      const f = u.Item;
      return (y, B) => (
        t(),
        n(
          s(u),
          { class: e(o) },
          {
            default: c(() => [
              i(
                s(k),
                { gutter: 16 },
                {
                  default: c(() => [
                    (t(!0),
                    v(
                      x,
                      null,
                      V(
                        s(m),
                        (a) => (
                          t(),
                          n(
                            s(C),
                            { key: a.title, span: 6 },
                            {
                              default: c(() => [
                                i(
                                  s(f),
                                  null,
                                  {
                                    default: c(() => [
                                      i(
                                        s($),
                                        { hoverable: !0, class: e(`${o}__card`) },
                                        {
                                          default: c(() => [
                                            l(
                                              'div',
                                              { class: e(`${o}__card-title`) },
                                              [
                                                a.icon
                                                  ? (t(),
                                                    n(
                                                      _,
                                                      {
                                                        key: 0,
                                                        class: 'icon',
                                                        icon: a.icon,
                                                        color: a.color,
                                                      },
                                                      null,
                                                      8,
                                                      ['icon', 'color'],
                                                    ))
                                                  : p('', !0),
                                                r(' ' + d(a.title), 1),
                                              ],
                                              2,
                                            ),
                                            l(
                                              'div',
                                              { class: e(`${o}__card-num`) },
                                              [
                                                r(' 活跃用户：'),
                                                l('span', null, d(a.active), 1),
                                                r(' 万 '),
                                              ],
                                              2,
                                            ),
                                            l(
                                              'div',
                                              { class: e(`${o}__card-num`) },
                                              [r(' 新增用户：'), l('span', null, d(a.new), 1)],
                                              2,
                                            ),
                                            a.download
                                              ? (t(),
                                                n(
                                                  _,
                                                  {
                                                    key: 0,
                                                    class: e(`${o}__card-download`),
                                                    icon: a.download,
                                                  },
                                                  null,
                                                  8,
                                                  ['class', 'icon'],
                                                ))
                                              : p('', !0),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ['class'],
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024,
                                ),
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
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { z as _ };
