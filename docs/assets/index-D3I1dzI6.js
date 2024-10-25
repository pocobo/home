import { aN as y, aO as B, C as r, a as N } from '../index.js';
import { P as w } from './index-B24a6rfW.js';
import {
  d as D,
  f as P,
  a7 as u,
  Z as m,
  a8 as V,
  a9 as a,
  k as e,
  u as t,
  $,
  G as l,
  _ as A,
  F as E,
  aa as F,
  a0 as G,
} from './vue-BjERyvPm.js';
import { aE as L } from './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const M = { class: 'mt-2 flex flex-grow-0' },
  H = D({
    name: 'TabsDemo',
    __name: 'index',
    setup(O) {
      const f = y(),
        n = P(''),
        {
          closeAll: _,
          closeLeft: p,
          closeRight: d,
          closeOther: C,
          closeCurrent: k,
          refreshPage: b,
          setTitle: g,
        } = B(),
        { createMessage: v } = N();
      function T() {
        n.value ? g(n.value) : v.error('请输入要设置的Tab标题！');
      }
      function h(c) {
        f(`/feat/tabs/detail/${c}`);
      }
      return (c, i) => {
        const s = u('a-button'),
          x = u('a-input');
        return (
          m(),
          V(
            t(w),
            { title: '标签页操作示例' },
            {
              default: a(() => [
                e(
                  t(r),
                  { title: '在下面输入框输入文本,切换后回来内容会保存' },
                  {
                    default: a(() => [
                      e(t(L), { banner: '', message: '该操作不会影响页面标题，仅修改Tab标题' }),
                      $('div', M, [
                        e(
                          s,
                          { class: 'mr-2', onClick: T, type: 'primary' },
                          { default: a(() => [l(' 设置Tab标题 ')]), _: 1 },
                        ),
                        e(
                          x,
                          {
                            placeholder: '请输入',
                            value: n.value,
                            'onUpdate:value': i[0] || (i[0] = (o) => (n.value = o)),
                            class: 'mr-4 w-50',
                          },
                          null,
                          8,
                          ['value'],
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                e(
                  t(r),
                  { class: 'mt-4', title: '标签页操作' },
                  {
                    default: a(() => [
                      e(
                        s,
                        { class: 'mr-2', onClick: t(_) },
                        { default: a(() => [l(' 关闭所有 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      e(
                        s,
                        { class: 'mr-2', onClick: t(p) },
                        { default: a(() => [l(' 关闭左侧 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      e(
                        s,
                        { class: 'mr-2', onClick: t(d) },
                        { default: a(() => [l(' 关闭右侧 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      e(
                        s,
                        { class: 'mr-2', onClick: t(C) },
                        { default: a(() => [l(' 关闭其他 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      e(
                        s,
                        { class: 'mr-2', onClick: t(k) },
                        { default: a(() => [l(' 关闭当前 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                      e(
                        s,
                        { class: 'mr-2', onClick: t(b) },
                        { default: a(() => [l(' 刷新当前 ')]), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ]),
                    _: 1,
                  },
                ),
                e(
                  t(r),
                  { class: 'mt-4', title: '标签页复用超出限制自动关闭(使用场景: 动态路由)' },
                  {
                    default: a(() => [
                      (m(),
                      A(
                        E,
                        null,
                        F(6, (o) =>
                          e(
                            s,
                            { key: o, class: 'mr-2', onClick: (R) => h(o) },
                            { default: a(() => [l(' 打开' + G(o) + '详情页 ', 1)]), _: 2 },
                            1032,
                            ['onClick'],
                          ),
                        ),
                        64,
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
      };
    },
  });
export { H as default };
