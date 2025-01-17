import { i as d } from './mock-api-BMrgvRtj.js';
import { P as s } from './index-B24a6rfW.js';
import { b8 as a, G as p, Y as i, E as f, R as F } from './antd-BmrhB3rb.js';
import { d as r, k as u, f as m, G as e } from './vue-BjERyvPm.js';
import { u as c } from './index-Cw2evmpm.js';
import '../index.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const E = r({
    setup() {
      const t = m(''),
        { data: l, loading: n } = c(d, { debounceWait: 1e3, refreshDeps: [t] });
      return () =>
        u(
          F,
          { title: '防抖' },
          {
            default: () => [
              u(a, null, {
                default: () => [
                  u(a.Paragraph, null, {
                    default: () => [
                      e('通过设置'),
                      u(
                        a.Text,
                        { type: 'danger' },
                        { default: () => [e(' options.debounceWait ')] },
                      ),
                      e('，进入防抖模式，此时如果频繁触发'),
                      u(a.Text, { code: !0 }, { default: () => [e(' run ')] }),
                      e('或者'),
                      u(a.Text, { code: !0 }, { default: () => [e(' runAsync ')] }),
                      e('则会以防抖策略进行请求。'),
                    ],
                  }),
                  u(a.Paragraph, null, {
                    default: () => [
                      u(
                        a.Text,
                        { code: !0 },
                        {
                          default: () => [
                            'const { data, run } = useRequest(imitateApi, { debounceWait: 300, manual: true });',
                          ],
                        },
                      ),
                    ],
                  }),
                  u(a.Paragraph, null, {
                    default: () => [
                      e('如上示例代码，频繁触发'),
                      u(a.Text, { code: !0 }, { default: () => [e(' run ')] }),
                      e(', 300ms 执行一次。'),
                    ],
                  }),
                  u(a.Paragraph, null, {
                    default: () => [e('你可以在下面 input 框中快速输入文本，体验效果')],
                  }),
                ],
              }),
              u(
                p,
                { spinning: n.value },
                {
                  default: () => [
                    u(
                      i,
                      { direction: 'vertical' },
                      {
                        default: () => [
                          u(
                            f,
                            {
                              value: t.value,
                              'onUpdate:value': (o) => (t.value = o),
                              placeholder: 'Please enter username',
                            },
                            null,
                          ),
                          u('div', null, [e('Username: '), l.value]),
                        ],
                      },
                    ),
                  ],
                },
              ),
            ],
          },
        );
    },
  }),
  T = r({
    setup() {
      return () => u(s, null, { default: () => [u(E, null, null)] });
    },
  });
export { T as default };
