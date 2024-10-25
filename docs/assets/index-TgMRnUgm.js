import {
  d as i,
  a7 as p,
  Z as r,
  _ as u,
  k as e,
  a9 as t,
  G as a,
  u as s,
  $ as _,
  a2 as f,
  a3 as m,
} from './vue-BjERyvPm.js';
import { bi as b, ad as l, bj as o } from './antd-BmrhB3rb.js';
import { c as h } from '../index.js';
const n = (c) => (f('data-v-ede385fe'), (c = c()), m(), c),
  x = { class: 'm-5 result-success' },
  I = { class: 'result-success__content' },
  S = n(() => _('div', null, 'Vben', -1)),
  y = n(() => _('p', null, '2016-12-12 12:32', -1)),
  k = n(() => _('p', null, 'Chad', -1)),
  v = i({
    __name: 'index',
    setup(c) {
      return (V, C) => {
        const d = p('a-button');
        return (
          r(),
          u('div', x, [
            e(
              s(b),
              {
                status: 'success',
                title: '提交成功',
                'sub-title':
                  '提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。',
              },
              {
                extra: t(() => [
                  e(
                    d,
                    { key: 'console', type: 'primary' },
                    { default: t(() => [a(' 返回列表 ')]), _: 1 },
                  ),
                  e(d, { key: 'buy' }, { default: t(() => [a(' 查看项目 ')]), _: 1 }),
                  e(d, { key: 'buy' }, { default: t(() => [a(' 打印 ')]), _: 1 }),
                ]),
                _: 1,
              },
            ),
            _('div', I, [
              e(
                s(l),
                { title: '项目名称' },
                {
                  default: t(() => [
                    e(s(l).Item, { label: '项目 ID' }, { default: t(() => [a(' 111222 ')]), _: 1 }),
                    e(s(l).Item, { label: '负责人' }, { default: t(() => [a(' Vben ')]), _: 1 }),
                    e(
                      s(l).Item,
                      { label: '生效时间' },
                      { default: t(() => [a(' 2016-12-12 ~ 2017-12-12 ')]), _: 1 },
                    ),
                  ]),
                  _: 1,
                },
              ),
              e(
                s(o),
                { current: 1, 'progress-dot': '', size: 'small' },
                {
                  default: t(() => [
                    e(s(o).Step, { title: '创建项目' }, { description: t(() => [S, y]), _: 1 }),
                    e(s(o).Step, { title: '部门初审' }, { description: t(() => [k]), _: 1 }),
                    e(s(o).Step, { title: '财务复核' }),
                    e(s(o).Step, { title: '完成' }),
                  ]),
                  _: 1,
                },
              ),
            ]),
          ])
        );
      };
    },
  }),
  w = h(v, [['__scopeId', 'data-v-ede385fe']]);
export { w as default };
