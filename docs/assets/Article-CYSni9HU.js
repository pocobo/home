import { z as x, c as $ } from '../index.js';
import { articleList as v, actions as y } from './data-NRFjrms5.js';
import {
  d as C,
  Z as t,
  a8 as i,
  a9 as l,
  _,
  F as u,
  aa as m,
  u as a,
  k as I,
  $ as o,
  a1 as s,
  a0 as n,
  G as p,
  ab as L,
} from './vue-BjERyvPm.js';
import { ag as d, Q as B } from './antd-BmrhB3rb.js';
const c = 'account-center-article',
  N = C({
    __name: 'Article',
    setup(V) {
      const f = d.Item,
        k = d.Item.Meta;
      return (b, g) => (
        t(),
        i(
          a(d),
          { 'item-layout': 'vertical', class: s(c) },
          {
            default: l(() => [
              (t(!0),
              _(
                u,
                null,
                m(
                  a(v),
                  (r) => (
                    t(),
                    i(
                      a(f),
                      { key: r.title },
                      {
                        default: l(() => [
                          I(
                            a(k),
                            null,
                            {
                              description: l(() => [
                                o('div', { class: s(`${c}__content`) }, n(r.content), 3),
                              ]),
                              title: l(() => [
                                o('p', { class: s(`${c}__title`) }, n(r.title), 3),
                                o('div', null, [
                                  (t(!0),
                                  _(
                                    u,
                                    null,
                                    m(
                                      r.description,
                                      (e) => (
                                        t(),
                                        i(
                                          a(B),
                                          { key: e, class: 'mb-2' },
                                          { default: l(() => [p(n(e), 1)]), _: 2 },
                                          1024,
                                        )
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]),
                              _: 2,
                            },
                            1024,
                          ),
                          o('div', null, [
                            (t(!0),
                            _(
                              u,
                              null,
                              m(
                                a(y),
                                (e) => (
                                  t(),
                                  _(
                                    'div',
                                    { key: e.text, class: s(`${c}__action`) },
                                    [
                                      e.icon
                                        ? (t(),
                                          i(
                                            x,
                                            {
                                              key: 0,
                                              class: s(`${c}__action-icon`),
                                              icon: e.icon,
                                              color: e.color,
                                            },
                                            null,
                                            8,
                                            ['class', 'icon', 'color'],
                                          ))
                                        : L('', !0),
                                      p(' ' + n(e.text), 1),
                                    ],
                                    2,
                                  )
                                ),
                              ),
                              128,
                            )),
                            o('span', { class: s(`${c}__time`) }, n(r.time), 3),
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
  }),
  M = $(N, [['__scopeId', 'data-v-e52d1b71']]);
export { M as default };
