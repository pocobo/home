var Y = Object.defineProperty,
  Z = Object.defineProperties;
var j = Object.getOwnPropertyDescriptors;
var S = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty,
  H = Object.prototype.propertyIsEnumerable;
var w = (u, s, a) =>
    s in u ? Y(u, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (u[s] = a),
  x = (u, s) => {
    for (var a in s || (s = {})) q.call(s, a) && w(u, a, s[a]);
    if (S) for (var a of S(s)) H.call(s, a) && w(u, a, s[a]);
    return u;
  },
  $ = (u, s) => Z(u, j(s));
var D = (u, s, a) =>
  new Promise((y, b) => {
    var C = (f) => {
        try {
          p(a.next(f));
        } catch (_) {
          b(_);
        }
      },
      h = (f) => {
        try {
          p(a.throw(f));
        } catch (_) {
          b(_);
        }
      },
      p = (f) => (f.done ? y(f.value) : Promise.resolve(f.value).then(C, h));
    p((a = a.apply(u, s)).next());
  });
import {
  d as J,
  f as K,
  Y as Q,
  h as U,
  a7 as W,
  Z as i,
  _ as g,
  k as L,
  a9 as d,
  F as T,
  aa as V,
  a8 as v,
  ad as X,
  u as o,
  ab as z,
  a0 as M,
  G as F,
  a1 as I,
} from './vue-BjERyvPm.js';
import {
  p as ee,
  f as ae,
  D as ne,
  aN as te,
  z as G,
  h as se,
  bb as re,
  bk as le,
  b9 as ce,
  aC as ue,
} from '../index.js';
import { x as oe, b0 as ie, bA as fe, bB as me, l as de } from './antd-BmrhB3rb.js';
const he = { key: 1 },
  pe = { key: 1 },
  ge = J({
    name: 'LayoutBreadcrumb',
    __name: 'Breadcrumb',
    props: { theme: ee.oneOf(['dark', 'light']) },
    setup(u) {
      const s = K([]),
        { currentRoute: a } = Q(),
        { prefixCls: y } = ae('layout-breadcrumb'),
        { getShowBreadCrumbIcon: b } = ne(),
        C = te(),
        { t: h } = se();
      U(() =>
        D(this, null, function* () {
          var E, P, R, N;
          if (a.value.name === re) return;
          const c = yield le(),
            t = a.value.matched,
            n = t == null ? void 0 : t[t.length - 1];
          let e = a.value.path;
          n &&
            (E = n == null ? void 0 : n.meta) != null &&
            E.currentActiveMenu &&
            (e = n.meta.currentActiveMenu);
          const r = ce(c, e),
            l = c.filter((O) => O.path === r[0]),
            m = p(l, r);
          if (!m || m.length === 0) {
            s.value = [];
            return;
          }
          const k = f(m);
          (P = a.value.meta) != null &&
            P.currentActiveMenu &&
            !((R = a.value.meta) != null && R.hideBreadcrumb) &&
            k.push(
              $(x({}, a.value), {
                name: ((N = a.value.meta) == null ? void 0 : N.title) || a.value.name,
              }),
            ),
            (s.value = k);
        }),
      );
      function p(c, t) {
        const n = [];
        return (
          c.forEach((e) => {
            var r, l;
            t.includes(e.path) &&
              n.push($(x({}, e), { name: ((r = e.meta) == null ? void 0 : r.title) || e.name })),
              (l = e.children) != null && l.length && n.push(...p(e.children, t));
          }),
          n
        );
      }
      function f(c) {
        return ue(c, (t) => {
          const { meta: n, name: e } = t;
          if (!n) return !!e;
          const { title: r, hideBreadcrumb: l, hideMenu: m } = n;
          return !(!r || l || m);
        }).filter((t) => {
          var n;
          return !((n = t.meta) != null && n.hideBreadcrumb);
        });
      }
      function _(c) {
        const { children: t, redirect: n, meta: e } = c;
        if (!(t != null && t.length && !n) && !(e != null && e.carryParam))
          if (n && de(n)) C(n);
          else {
            let r = '';
            c.path ? (r = c.path) : (r = ''), (r = /^\//.test(r) ? r : `/${r}`), C(r);
          }
      }
      function A(c, t) {
        return c.indexOf(t) !== c.length - 1;
      }
      function B(c) {
        var t;
        return c.icon || ((t = c.meta) == null ? void 0 : t.icon);
      }
      return (c, t) => {
        const n = W('router-link');
        return (
          i(),
          g(
            'div',
            { class: I([o(y), `${o(y)}--${u.theme}`]) },
            [
              L(o(me), null, {
                default: d(() => [
                  (i(!0),
                  g(
                    T,
                    null,
                    V(s.value, (e) => {
                      var r;
                      return (
                        i(),
                        v(
                          o(fe),
                          { key: e.name },
                          X(
                            {
                              default: d(() => [
                                o(b) && B(e)
                                  ? (i(), v(G, { key: 0, icon: B(e) }, null, 8, ['icon']))
                                  : z('', !0),
                                A(s.value, e)
                                  ? (i(),
                                    v(
                                      n,
                                      { key: 2, to: '', onClick: (l) => _(e) },
                                      {
                                        default: d(() => [F(M(o(h)(e.meta.title || e.name)), 1)]),
                                        _: 2,
                                      },
                                      1032,
                                      ['onClick'],
                                    ))
                                  : (i(), g('span', he, M(o(h)(e.meta.title || e.name)), 1)),
                              ]),
                              _: 2,
                            },
                            [
                              e.children && !((r = e.meta) != null && r.hideChildrenInMenu)
                                ? {
                                    name: 'overlay',
                                    fn: d(() => [
                                      L(
                                        o(oe),
                                        null,
                                        {
                                          default: d(() => [
                                            (i(!0),
                                            g(
                                              T,
                                              null,
                                              V(
                                                e.children,
                                                (l) => (
                                                  i(),
                                                  v(
                                                    o(ie),
                                                    { key: l.name },
                                                    {
                                                      default: d(() => {
                                                        var m;
                                                        return [
                                                          o(b) && B(l)
                                                            ? (i(),
                                                              v(
                                                                G,
                                                                { key: 0, icon: B(l) },
                                                                null,
                                                                8,
                                                                ['icon'],
                                                              ))
                                                            : z('', !0),
                                                          A(s.value, l)
                                                            ? (i(),
                                                              v(
                                                                n,
                                                                {
                                                                  key: 2,
                                                                  to: '',
                                                                  onClick: (k) => _(l),
                                                                },
                                                                {
                                                                  default: d(() => {
                                                                    var k;
                                                                    return [
                                                                      F(
                                                                        M(
                                                                          o(h)(
                                                                            ((k = l.meta) == null
                                                                              ? void 0
                                                                              : k.title) || l.name,
                                                                          ),
                                                                        ),
                                                                        1,
                                                                      ),
                                                                    ];
                                                                  }),
                                                                  _: 2,
                                                                },
                                                                1032,
                                                                ['onClick'],
                                                              ))
                                                            : (i(),
                                                              g(
                                                                'span',
                                                                pe,
                                                                M(
                                                                  o(h)(
                                                                    ((m = l.meta) == null
                                                                      ? void 0
                                                                      : m.title) || l.name,
                                                                  ),
                                                                ),
                                                                1,
                                                              )),
                                                        ];
                                                      }),
                                                      _: 2,
                                                    },
                                                    1024,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                          ]),
                                          _: 2,
                                        },
                                        1024,
                                      ),
                                    ]),
                                    key: '0',
                                  }
                                : void 0,
                            ],
                          ),
                          1024,
                        )
                      );
                    }),
                    128,
                  )),
                ]),
                _: 1,
              }),
            ],
            2,
          )
        );
      };
    },
  });
export { ge as default };
