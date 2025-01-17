import { B as u } from './index-BeVux7Oc.js';
import { a as S } from '../index.js';
import { P as $ } from './index-B24a6rfW.js';
import { b5 as x, aM as b } from './antd-BmrhB3rb.js';
import {
  d as j,
  f,
  a7 as V,
  Z as m,
  a8 as d,
  a9 as l,
  $ as p,
  k as t,
  u as s,
  G as r,
  _ as C,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const M = { class: 'flex justify-center p-4 items-center bg-gray-700' },
  N = { class: 'flex justify-center p-4 items-center bg-gray-700' },
  h = { class: 'flex justify-center p-4 items-center bg-gray-700' },
  O = { class: 'flex justify-center p-4 items-center bg-gray-700' },
  P = { class: 'flex justify-center p-4 items-center bg-gray-700' },
  T = { key: 0 },
  w = { key: 1 },
  F = j({
    __name: 'index',
    setup(D) {
      const { createMessage: B } = S(),
        y = f(null),
        _ = f(null),
        k = f(null),
        v = f(null),
        g = f(null);
      function o(c) {
        const { time: e } = c;
        B.success(`校验成功,耗时${e}秒`);
      }
      function a(c) {
        c && c.resume();
      }
      return (c, e) => {
        const i = V('a-button');
        return (
          m(),
          d(
            s($),
            { title: '拖动校验示例' },
            {
              default: l(() => [
                p('div', M, [
                  t(s(u), { ref_key: 'el1', ref: y, onSuccess: o }, null, 512),
                  t(
                    i,
                    { type: 'primary', class: 'ml-2', onClick: e[0] || (e[0] = (n) => a(y.value)) },
                    { default: l(() => [r(' 还原 ')]), _: 1 },
                  ),
                ]),
                p('div', N, [
                  t(s(u), { ref_key: 'el2', ref: _, onSuccess: o, circle: '' }, null, 512),
                  t(
                    i,
                    { type: 'primary', class: 'ml-2', onClick: e[1] || (e[1] = (n) => a(_.value)) },
                    { default: l(() => [r(' 还原 ')]), _: 1 },
                  ),
                ]),
                p('div', h, [
                  t(
                    s(u),
                    {
                      ref_key: 'el3',
                      ref: k,
                      onSuccess: o,
                      text: '拖动以进行校验',
                      successText: '校验成功',
                      barStyle: { backgroundColor: '#018ffb' },
                    },
                    null,
                    512,
                  ),
                  t(
                    i,
                    { type: 'primary', class: 'ml-2', onClick: e[2] || (e[2] = (n) => a(k.value)) },
                    { default: l(() => [r(' 还原 ')]), _: 1 },
                  ),
                ]),
                p('div', O, [
                  t(
                    s(u),
                    { ref_key: 'el4', ref: v, onSuccess: o },
                    {
                      actionIcon: l((n) => [
                        n ? (m(), d(s(x), { key: 0 })) : (m(), d(s(b), { key: 1 })),
                      ]),
                      _: 1,
                    },
                    512,
                  ),
                  t(
                    i,
                    { type: 'primary', class: 'ml-2', onClick: e[3] || (e[3] = (n) => a(v.value)) },
                    { default: l(() => [r(' 还原 ')]), _: 1 },
                  ),
                ]),
                p('div', P, [
                  t(
                    s(u),
                    { ref_key: 'el5', ref: g, onSuccess: o },
                    {
                      text: l((n) => [
                        n
                          ? (m(), C('div', T, [t(s(x)), r(' 成功 ')]))
                          : (m(), C('div', w, [r(' 拖动 '), t(s(b))])),
                      ]),
                      _: 1,
                    },
                    512,
                  ),
                  t(
                    i,
                    { type: 'primary', class: 'ml-2', onClick: e[4] || (e[4] = (n) => a(g.value)) },
                    { default: l(() => [r(' 还原 ')]), _: 1 },
                  ),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { F as default };
