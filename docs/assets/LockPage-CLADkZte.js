var H = Object.defineProperty,
  q = Object.defineProperties;
var F = Object.getOwnPropertyDescriptors;
var N = Object.getOwnPropertySymbols;
var G = Object.prototype.hasOwnProperty,
  J = Object.prototype.propertyIsEnumerable;
var z = (l, a, e) =>
    a in l ? H(l, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : (l[a] = e),
  U = (l, a) => {
    for (var e in a || (a = {})) G.call(a, e) && z(l, e, a[e]);
    if (N) for (var e of N(a)) J.call(a, e) && z(l, e, a[e]);
    return l;
  },
  D = (l, a) => q(l, F(a));
var P = (l, a, e) =>
  new Promise((i, m) => {
    var u = (r) => {
        try {
          f(e.next(r));
        } catch (v) {
          m(v);
        }
      },
      s = (r) => {
        try {
          f(e.throw(r));
        } catch (v) {
          m(v);
        }
      },
      f = (r) => (r.done ? i(r.value) : Promise.resolve(r.value).then(u, s));
    f((e = e.apply(l, a)).next());
  });
import {
  r as R,
  I as Z,
  d as K,
  f as k,
  c as Q,
  a7 as W,
  Z as V,
  _ as j,
  m as h,
  A as g,
  $ as n,
  k as x,
  u as t,
  a0 as o,
  a1 as c,
  a9 as w,
  ab as X,
  G as b,
  q as Y,
} from './vue-BjERyvPm.js';
import { y as ee, t as te, J as se, f as ae, l as ne, h as oe, c as le } from '../index.js';
import { u as re } from './lock-DyB6sZX8.js';
import { h as ce } from './header-DYIk9Ych.js';
import { E as ie, bz as ue } from './antd-BmrhB3rb.js';
function de(l = !0) {
  let a;
  const e = R({
      year: 0,
      month: 0,
      week: '',
      day: 0,
      hour: '',
      minute: '',
      second: 0,
      meridiem: '',
    }),
    i = () => {
      const s = se(),
        f = s.format('HH'),
        r = s.format('mm'),
        v = s.get('s');
      (e.year = s.get('y')),
        (e.month = s.get('M') + 1),
        (e.week = '星期' + ['日', '一', '二', '三', '四', '五', '六'][s.day()]),
        (e.day = s.get('date')),
        (e.hour = f),
        (e.minute = r),
        (e.second = v),
        (e.meridiem = s.format('A'));
    };
  function m() {
    i(), clearInterval(a), (a = setInterval(() => i(), 1e3));
  }
  function u() {
    clearInterval(a);
  }
  return (
    ee(() => {
      l && m();
    }),
    te(() => {
      u();
    }),
    D(U({}, Z(e)), { start: m, stop: u })
  );
}
const me = { class: 'flex w-screen h-screen justify-center items-center' },
  fe = ['src'],
  ve = {
    class: 'absolute bottom-5 w-full text-gray-300 xl:text-xl 2xl:text-3xl text-center enter-y',
  },
  pe = { class: 'text-5xl mb-4 enter-x' },
  xe = { class: 'text-3xl' },
  _e = { class: 'text-2xl' },
  ye = K({
    __name: 'LockPage',
    setup(l) {
      const a = ie.Password,
        e = k(''),
        i = k(!1),
        m = k(!1),
        u = k(!0),
        { prefixCls: s } = ae('lock-page'),
        f = re(),
        r = ne(),
        { hour: v, month: B, minute: I, meridiem: C, year: M, day: O, week: T } = de(!0),
        { t: p } = oe(),
        L = Q(() => r.getUserInfo || {});
      function A() {
        return P(this, null, function* () {
          if (!e.value) return;
          let _ = e.value;
          try {
            i.value = !0;
            const d = yield f.unLock(_);
            m.value = !d;
          } finally {
            i.value = !1;
          }
        });
      }
      function E() {
        r.logout(!0), f.resetLockInfo();
      }
      function S(_ = !1) {
        u.value = _;
      }
      return (_, d) => {
        const $ = W('a-button');
        return (
          V(),
          j(
            'div',
            {
              class: c([
                t(s),
                'fixed inset-0 flex h-screen w-screen bg-black items-center justify-center',
              ]),
            },
            [
              h(
                n(
                  'div',
                  {
                    class: c([
                      `${t(s)}__unlock`,
                      'absolute top-0 left-1/2 flex pt-5 h-16 items-center justify-center sm:text-md xl:text-xl text-white flex-col cursor-pointer transform translate-x-1/2',
                    ]),
                    onClick: d[0] || (d[0] = (y) => S(!1)),
                  },
                  [x(t(ue)), n('span', null, o(t(p)('sys.lock.unlock')), 1)],
                  2,
                ),
                [[g, u.value]],
              ),
              n('div', me, [
                n(
                  'div',
                  { class: c([`${t(s)}__hour`, 'relative mr-5 md:mr-20 w-2/5 h-2/5 md:h-4/5']) },
                  [
                    n('span', null, o(t(v)), 1),
                    h(
                      n(
                        'span',
                        { class: 'meridiem absolute left-5 top-5 text-md xl:text-xl' },
                        o(t(C)),
                        513,
                      ),
                      [[g, u.value]],
                    ),
                  ],
                  2,
                ),
                n(
                  'div',
                  { class: c(`${t(s)}__minute w-2/5 h-2/5 md:h-4/5 `) },
                  [n('span', null, o(t(I)), 1)],
                  2,
                ),
              ]),
              x(
                Y,
                { name: 'fade-slide' },
                {
                  default: w(() => [
                    h(
                      n(
                        'div',
                        { class: c(`${t(s)}-entry`) },
                        [
                          n(
                            'div',
                            { class: c(`${t(s)}-entry-content`) },
                            [
                              n(
                                'div',
                                { class: c(`${t(s)}-entry__header enter-x`) },
                                [
                                  n(
                                    'img',
                                    {
                                      src: L.value.avatar || t(ce),
                                      class: c(`${t(s)}-entry__header-img`),
                                    },
                                    null,
                                    10,
                                    fe,
                                  ),
                                  n(
                                    'p',
                                    { class: c(`${t(s)}-entry__header-name`) },
                                    o(L.value.realName),
                                    3,
                                  ),
                                ],
                                2,
                              ),
                              x(
                                t(a),
                                {
                                  placeholder: t(p)('sys.lock.placeholder'),
                                  class: 'enter-x',
                                  value: e.value,
                                  'onUpdate:value': d[1] || (d[1] = (y) => (e.value = y)),
                                },
                                null,
                                8,
                                ['placeholder', 'value'],
                              ),
                              m.value
                                ? (V(),
                                  j(
                                    'span',
                                    { key: 0, class: c(`${t(s)}-entry__err-msg enter-x`) },
                                    o(t(p)('sys.lock.alert')),
                                    3,
                                  ))
                                : X('', !0),
                              n(
                                'div',
                                { class: c(`${t(s)}-entry__footer enter-x`) },
                                [
                                  x(
                                    $,
                                    {
                                      type: 'link',
                                      size: 'small',
                                      class: 'mt-2 mr-2 enter-x',
                                      disabled: i.value,
                                      onClick: d[2] || (d[2] = (y) => S(!0)),
                                    },
                                    { default: w(() => [b(o(t(p)('common.back')), 1)]), _: 1 },
                                    8,
                                    ['disabled'],
                                  ),
                                  x(
                                    $,
                                    {
                                      type: 'link',
                                      size: 'small',
                                      class: 'mt-2 mr-2 enter-x',
                                      disabled: i.value,
                                      onClick: E,
                                    },
                                    {
                                      default: w(() => [b(o(t(p)('sys.lock.backToLogin')), 1)]),
                                      _: 1,
                                    },
                                    8,
                                    ['disabled'],
                                  ),
                                  x(
                                    $,
                                    {
                                      class: 'mt-2',
                                      type: 'link',
                                      size: 'small',
                                      onClick: d[3] || (d[3] = (y) => A()),
                                      loading: i.value,
                                    },
                                    { default: w(() => [b(o(t(p)('sys.lock.entry')), 1)]), _: 1 },
                                    8,
                                    ['loading'],
                                  ),
                                ],
                                2,
                              ),
                            ],
                            2,
                          ),
                        ],
                        2,
                      ),
                      [[g, !u.value]],
                    ),
                  ]),
                  _: 1,
                },
              ),
              n('div', ve, [
                h(
                  n(
                    'div',
                    pe,
                    [b(o(t(v)) + ':' + o(t(I)) + ' ', 1), n('span', xe, o(t(C)), 1)],
                    512,
                  ),
                  [[g, !u.value]],
                ),
                n('div', _e, o(t(M)) + '/' + o(t(B)) + '/' + o(t(O)) + ' ' + o(t(T)), 1),
              ]),
            ],
            2,
          )
        );
      };
    },
  }),
  Ie = le(ye, [['__scopeId', 'data-v-b7e0f58a']]);
export { Ie as default };
