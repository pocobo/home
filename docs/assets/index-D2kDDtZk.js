import { C as e } from './index-9EbO13_D.js';
import { P as l } from './index-B24a6rfW.js';
import { R as d } from './antd-BmrhB3rb.js';
import { d as s, Z as c, a8 as n, a9 as t, k as o, u as a } from './vue-BjERyvPm.js';
import { c as u } from '../index.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const i = s({
    __name: 'index',
    setup(f) {
      const r = d.Grid;
      return (m, p) => (
        c(),
        n(
          a(l),
          { title: '数字动画示例' },
          {
            default: t(() => [
              o(a(d), null, {
                default: t(() => [
                  o(
                    a(r),
                    { class: 'count-to-demo-card' },
                    {
                      default: t(() => [
                        o(a(e), {
                          prefix: '$',
                          color: '#409EFF',
                          startVal: 1,
                          endVal: 2e5,
                          duration: 8e3,
                        }),
                      ]),
                      _: 1,
                    },
                  ),
                  o(
                    a(r),
                    { class: 'count-to-demo-card' },
                    {
                      default: t(() => [
                        o(a(e), {
                          suffix: '$',
                          color: 'red',
                          startVal: 1,
                          endVal: 3e5,
                          decimals: 2,
                          duration: 6e3,
                        }),
                      ]),
                      _: 1,
                    },
                  ),
                  o(
                    a(r),
                    { class: 'count-to-demo-card' },
                    {
                      default: t(() => [
                        o(
                          a(e),
                          {
                            suffix: '$',
                            color: 'rgb(0,238,0)',
                            startVal: 1,
                            endVal: 4e5,
                            duration: 7e3,
                          },
                          null,
                          8,
                          ['color'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  o(
                    a(r),
                    { class: 'count-to-demo-card' },
                    {
                      default: t(() => [
                        o(
                          a(e),
                          {
                            separator: '-',
                            color: 'rgba(138,43,226,.6)',
                            startVal: 1e4,
                            endVal: 5e5,
                            duration: 8e3,
                          },
                          null,
                          8,
                          ['color'],
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  h = u(i, [['__scopeId', 'data-v-6c712fe3']]);
export { h as default };
