import { _ as o } from './index-snPuAjGa.js';
import { t as u } from './data-BOfxtlv4.js';
import { P as C } from './index-B24a6rfW.js';
import { I as K } from '../index.js';
import {
  U as R,
  V as s,
  aW as E,
  aX as w,
  R as y,
  G as $,
  f as m,
  aY as b,
} from './antd-BmrhB3rb.js';
import {
  d as A,
  f as i,
  a7 as B,
  Z as L,
  a8 as P,
  a9 as t,
  k as a,
  u as e,
  G as f,
  y as V,
} from './vue-BjERyvPm.js';
import './useContextMenu-1El4DIYg.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const j = A({
  __name: 'index',
  setup(G) {
    const p = i(null),
      _ = i(null),
      v = i(null),
      d = i([]),
      l = i(!1);
    function k(n, c) {}
    function T() {
      (l.value = !0),
        setTimeout(() => {
          (d.value = m(u)),
            (l.value = !1),
            V(() => {
              var n;
              (n = e(_)) == null || n.expandAll(!0);
            });
        }, 2e3);
    }
    function h() {
      (l.value = !0),
        setTimeout(() => {
          (d.value = m(u)), (l.value = !1);
        }, 2e3);
    }
    const x = i([{ title: 'parent ', key: '0-0' }]);
    function D(n) {
      return new Promise((c) => {
        if (K(n.children) && n.children.length > 0) {
          c();
          return;
        }
        setTimeout(() => {
          const r = e(p);
          if (r) {
            const g = [
              { title: `Child Node ${n.eventKey}-0`, key: `${n.eventKey}-0` },
              { title: `Child Node ${n.eventKey}-1`, key: `${n.eventKey}-1` },
            ];
            r.updateNodeByKey(n.eventKey, { children: g }),
              r.setExpandedKeys(b([n.eventKey, ...r.getExpandedKeys()]));
          }
          c();
        }, 300);
      });
    }
    return (n, c) => {
      const r = B('a-button');
      return (
        L(),
        P(
          e(C),
          { title: 'Tree基础示例' },
          {
            default: t(() => [
              a(
                e(R),
                { gutter: [16, 16] },
                {
                  default: t(() => [
                    a(
                      e(s),
                      { span: 8 },
                      {
                        default: t(() => [
                          a(
                            e(o),
                            {
                              title: '基础示例，默认展开第一层',
                              treeData: e(u),
                              defaultExpandLevel: '1',
                            },
                            {
                              icon: t(() => [a(e(E), { style: { 'font-size': '16px' } })]),
                              title: t(() => [f('666')]),
                              switcherIcon: t(() => [a(e(w))]),
                              _: 1,
                            },
                            8,
                            ['treeData'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(s),
                      { span: 8 },
                      {
                        default: t(() => [
                          a(
                            e(o),
                            {
                              title: '可勾选，默认全部展开',
                              treeData: e(u),
                              checkable: !0,
                              defaultExpandAll: '',
                              onCheck: k,
                            },
                            null,
                            8,
                            ['treeData'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(s),
                      { span: 8 },
                      {
                        default: t(() => [
                          a(
                            e(o),
                            {
                              title: '指定默认展开/勾选示例',
                              treeData: e(u),
                              checkable: !0,
                              expandedKeys: ['0-0'],
                              checkedKeys: ['0-0'],
                            },
                            null,
                            8,
                            ['treeData'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(s),
                      { span: 8 },
                      {
                        default: t(() => [
                          a(
                            e(o),
                            {
                              title: '懒加载异步树',
                              ref_key: 'asyncTreeRef',
                              ref: p,
                              treeData: x.value,
                              'load-data': D,
                            },
                            null,
                            8,
                            ['treeData'],
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(s),
                      { span: 8 },
                      {
                        default: t(() => [
                          a(
                            e(y),
                            { title: '异步数据，默认展开' },
                            {
                              extra: t(() => [
                                a(
                                  r,
                                  { onClick: T, loading: l.value },
                                  { default: t(() => [f('加载数据')]), _: 1 },
                                  8,
                                  ['loading'],
                                ),
                              ]),
                              default: t(() => [
                                a(
                                  e($),
                                  { spinning: l.value },
                                  {
                                    default: t(() => [
                                      a(
                                        e(o),
                                        {
                                          ref_key: 'asyncExpandTreeRef',
                                          ref: _,
                                          treeData: d.value,
                                        },
                                        null,
                                        8,
                                        ['treeData'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['spinning'],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
                    a(
                      e(s),
                      { span: 8 },
                      {
                        default: t(() => [
                          a(
                            e(y),
                            { title: 'BasicTree内置加载' },
                            {
                              extra: t(() => [
                                a(
                                  r,
                                  { onClick: h, loading: l.value },
                                  { default: t(() => [f('请求数据')]), _: 1 },
                                  8,
                                  ['loading'],
                                ),
                              ]),
                              default: t(() => [
                                a(
                                  e(o),
                                  {
                                    ref_key: 'loadTreeRef',
                                    ref: v,
                                    treeData: d.value,
                                    loading: l.value,
                                  },
                                  null,
                                  8,
                                  ['treeData', 'loading'],
                                ),
                              ]),
                              _: 1,
                            },
                          ),
                        ]),
                        _: 1,
                      },
                    ),
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
export { j as default };
