import { z as c, c as f } from '../index.js';
import { cardList as m } from './data-226JWQJe.js';
import { P as x } from './index-B24a6rfW.js';
import { U as h, V, ag as p, R as g } from './antd-BmrhB3rb.js';
import {
  d as C,
  Z as i,
  a8 as d,
  a9 as e,
  G as u,
  $ as a,
  k as t,
  a1 as s,
  u as o,
  _ as k,
  aa as v,
  ab as $,
  a0 as N,
  F as S,
  a2 as b,
  a3 as y,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const _ = (r) => (b('data-v-0a098e0d'), (r = r()), y(), r),
  I = _(() => a('span', null, '开始', -1)),
  w = _(() => a('span', null, '简介', -1)),
  B = _(() => a('span', null, '文档', -1)),
  n = 'list-card',
  D = C({
    __name: 'index',
    setup(r) {
      return (L, T) => (
        i(),
        d(
          o(x),
          { class: s(n), title: '卡片列表' },
          {
            headerContent: e(() => [
              u(' 基于Vue Next, TypeScript, Ant Design Vue实现的一套完整的企业级后台管理系统。 '),
              a(
                'div',
                { class: s(`${n}__link`) },
                [
                  a('a', null, [t(c, { icon: 'bx:bx-paper-plane', color: '#1890ff' }), I]),
                  a('a', null, [t(c, { icon: 'carbon:warning', color: '#1890ff' }), w]),
                  a('a', null, [t(c, { icon: 'ion:document-text-outline', color: '#1890ff' }), B]),
                ],
                2,
              ),
            ]),
            default: e(() => [
              a(
                'div',
                { class: s(`${n}__content`) },
                [
                  t(o(p), null, {
                    default: e(() => [
                      t(
                        o(h),
                        { gutter: 16 },
                        {
                          default: e(() => [
                            (i(!0),
                            k(
                              S,
                              null,
                              v(
                                o(m),
                                (l) => (
                                  i(),
                                  d(
                                    o(V),
                                    { key: l.title, span: 6 },
                                    {
                                      default: e(() => [
                                        t(
                                          o(p).Item,
                                          null,
                                          {
                                            default: e(() => [
                                              t(
                                                o(g),
                                                { hoverable: !0, class: s(`${n}__card`) },
                                                {
                                                  default: e(() => [
                                                    a(
                                                      'div',
                                                      { class: s(`${n}__card-title`) },
                                                      [
                                                        l.icon
                                                          ? (i(),
                                                            d(
                                                              c,
                                                              {
                                                                key: 0,
                                                                class: 'icon',
                                                                icon: l.icon,
                                                                color: l.color,
                                                              },
                                                              null,
                                                              8,
                                                              ['icon', 'color'],
                                                            ))
                                                          : $('', !0),
                                                        u(' ' + N(l.title), 1),
                                                      ],
                                                      2,
                                                    ),
                                                    a(
                                                      'div',
                                                      { class: s(`${n}__card-detail`) },
                                                      ' 基于Vue Next, TypeScript, Ant Design Vue实现的一套完整的企业级后台管理系统 ',
                                                      2,
                                                    ),
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
                  }),
                ],
                2,
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  W = f(D, [['__scopeId', 'data-v-0a098e0d']]);
export { W as default };
