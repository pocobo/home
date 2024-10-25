import { _ as D } from './index-snPuAjGa.js';
import { t as x } from './data-BOfxtlv4.js';
import { a as T } from '../index.js';
import { P as b } from './index-B24a6rfW.js';
import {
  d as G,
  f as A,
  a7 as E,
  Z as J,
  a8 as O,
  a9 as n,
  $ as d,
  k as s,
  G as a,
  u as c,
} from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
import './useContextMenu-1El4DIYg.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const h = { class: 'mb-4' },
  w = { class: 'mb-4' },
  V = { class: 'mb-4' },
  I = G({
    __name: 'ActionTree',
    setup(L) {
      const u = A(null),
        { createMessage: i } = T();
      function o() {
        const e = c(u);
        if (!e) throw new Error('tree is null!');
        return e;
      }
      function f(e) {
        o().filterByLevel(e);
      }
      function y() {
        o().setCheckedKeys(['0-0']);
      }
      function C() {
        const e = o().getCheckedKeys();
        i.success(JSON.stringify(e));
      }
      function _() {
        o().setSelectedKeys(['0-0']);
      }
      function g() {
        const e = o().getSelectedKeys();
        i.success(JSON.stringify(e));
      }
      function v() {
        const e = o().getSelectedKeys(),
          t = o().getSelectedNode(e[0]);
        i.success(t !== null ? JSON.stringify(t) : null);
      }
      function N() {
        o().setExpandedKeys(['0-0']);
      }
      function S() {
        const e = o().getExpandedKeys();
        i.success(JSON.stringify(e));
      }
      function m(e) {
        o().checkAll(e);
      }
      function p(e) {
        o().expandAll(e);
      }
      function k(e = null) {
        o().insertNodeByKey({
          parentKey: e,
          node: { title: '新增节点', key: '2-2-2' },
          push: 'push',
        });
      }
      function K(e) {
        o().deleteNodeByKey(e);
      }
      function $(e) {
        o().updateNodeByKey(e, { title: 'parent2-new' });
      }
      function B() {
        i.success(JSON.stringify(o().getTreeData()));
      }
      return (e, t) => {
        const l = E('a-button');
        return (
          J(),
          O(
            c(b),
            { title: 'Tree函数操作示例', contentBackground: '', contentClass: 'p-4' },
            {
              default: n(() => [
                d('div', h, [
                  s(
                    l,
                    { onClick: t[0] || (t[0] = (r) => p(!0)), class: 'mr-2' },
                    { default: n(() => [a(' 展开全部 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[1] || (t[1] = (r) => p(!1)), class: 'mr-2' },
                    { default: n(() => [a(' 折叠全部 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[2] || (t[2] = (r) => m(!0)), class: 'mr-2' },
                    { default: n(() => [a(' 全选 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[3] || (t[3] = (r) => m(!1)), class: 'mr-2' },
                    { default: n(() => [a(' 全不选 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[4] || (t[4] = (r) => f(2)), class: 'mr-2' },
                    { default: n(() => [a(' 显示到第2级 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[5] || (t[5] = (r) => f(1)), class: 'mr-2' },
                    { default: n(() => [a(' 显示到第1级 ')]), _: 1 },
                  ),
                ]),
                d('div', w, [
                  s(
                    l,
                    { onClick: y, class: 'mr-2' },
                    { default: n(() => [a(' 设置勾选数据 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: C, class: 'mr-2' },
                    { default: n(() => [a(' 获取勾选数据 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: _, class: 'mr-2' },
                    { default: n(() => [a(' 设置选中数据 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: g, class: 'mr-2' },
                    { default: n(() => [a(' 获取选中数据 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: v, class: 'mr-2' },
                    { default: n(() => [a(' 获取选中节点 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: B, class: 'mr-2' },
                    { default: n(() => [a(' 获取Tree数据 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: N, class: 'mr-2' },
                    { default: n(() => [a(' 设置展开数据 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: S, class: 'mr-2' },
                    { default: n(() => [a(' 获取展开数据 ')]), _: 1 },
                  ),
                ]),
                d('div', V, [
                  s(
                    l,
                    { onClick: t[6] || (t[6] = (r) => k(null)), class: 'mr-2' },
                    { default: n(() => [a(' 添加根节点 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[7] || (t[7] = (r) => k('2-2')), class: 'mr-2' },
                    { default: n(() => [a(' 添加在parent3内添加节点 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[8] || (t[8] = (r) => K('2-2')), class: 'mr-2' },
                    { default: n(() => [a(' 删除parent3节点 ')]), _: 1 },
                  ),
                  s(
                    l,
                    { onClick: t[9] || (t[9] = (r) => $('1-1')), class: 'mr-2' },
                    { default: n(() => [a(' 更新parent2节点 ')]), _: 1 },
                  ),
                ]),
                s(
                  c(D),
                  { treeData: c(x), title: '函数操作', ref_key: 'treeRef', ref: u, checkable: !0 },
                  null,
                  8,
                  ['treeData'],
                ),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { I as default };
