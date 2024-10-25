import { i as s } from './mock-api-BMrgvRtj.js';
import { P as m } from './index-B24a6rfW.js';
import { b8 as l, Y as d, B as t, R as p, j as g } from './antd-BmrhB3rb.js';
import { d as i, k as e, G as u } from './vue-BjERyvPm.js';
import { u as f } from './index-Cw2evmpm.js';
import '../index.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const C = i({
    setup() {
      const {
        data: a,
        loading: n,
        run: r,
        cancel: o,
      } = f(s, { pollingInterval: 1e3, pollingWhenHidden: !1 });
      return () =>
        e(
          p,
          { title: '默认用法' },
          {
            default: () => [
              e(l, null, {
                default: () => [
                  e(l.Paragraph, null, {
                    default: () => [
                      u('通过设置'),
                      e(
                        l.Text,
                        { type: 'danger' },
                        { default: () => [u(' options.pollingInterval ')] },
                      ),
                      u('，进入轮询模式，useRequest 会定时触发 service 执行。'),
                    ],
                  }),
                  e(l.Paragraph, null, {
                    default: () => [
                      e(
                        l.Text,
                        { code: !0 },
                        {
                          default: () => [
                            'const { data, run, cancel } = useRequest(imitateApi, { pollingInterval: 3000 });',
                          ],
                        },
                      ),
                    ],
                  }),
                ],
              }),
              e('div', null, [
                e('div', null, [u('Username: '), n.value ? 'Loading' : a.value]),
                e(d, null, {
                  default: () => [
                    e(t, { onClick: () => r() }, { default: () => [u('start')] }),
                    e(t, { type: 'dashed', onClick: o }, { default: () => [u('stop')] }),
                  ],
                }),
              ]),
            ],
          },
        );
    },
  }),
  F = i({
    setup() {
      const {
        data: a,
        loading: n,
        run: r,
        cancel: o,
      } = f(s, {
        manual: !0,
        pollingInterval: 3e3,
        pollingErrorRetryCount: 3,
        pollingWhenHidden: !1,
        onError: (c) => {
          g.error(c.message);
        },
      });
      return () =>
        e(
          p,
          { title: '轮询错误重试', class: 'mt-2' },
          {
            default: () => [
              e(l, null, {
                default: () => [
                  e(l.Paragraph, null, {
                    default: () => [
                      u('通过'),
                      e(
                        l.Text,
                        { type: 'danger' },
                        { default: () => [u(' options.pollingErrorRetryCount ')] },
                      ),
                      u('轮询错误重试次数。'),
                    ],
                  }),
                  e(l.Paragraph, null, {
                    default: () => [
                      e(
                        l.Text,
                        { code: !0 },
                        {
                          default: () => [
                            'const { data, run, cancel } = useRequest(imitateApi, { pollingInterval: 3000,  pollingErrorRetryCount: 3 });',
                          ],
                        },
                      ),
                    ],
                  }),
                ],
              }),
              e('div', null, [
                e('div', null, [u('Username: '), n.value ? 'Loading' : a.value]),
                e(d, null, {
                  default: () => [
                    e(t, { onClick: () => r('lutz', !1) }, { default: () => [u('start')] }),
                    e(t, { type: 'dashed', onClick: o }, { default: () => [u('stop')] }),
                  ],
                }),
              ]),
            ],
          },
        );
    },
  }),
  P = i({
    setup() {
      return () => e(m, null, { default: () => [e(C, null, null), e(F, null, null)] });
    },
  });
export { P as default };