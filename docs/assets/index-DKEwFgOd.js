import { P as B } from './index-B24a6rfW.js';
import {
  p as c,
  h as C,
  ay as M,
  az as x,
  a3 as I,
  J as g,
  H as S,
  w as Y,
  C as D,
} from '../index.js';
import { aa as k, l as H } from './antd-BmrhB3rb.js';
import {
  d as b,
  f as R,
  w as U,
  Z as N,
  _ as j,
  a0 as P,
  r as V,
  a8 as $,
  a9 as v,
  k as l,
  u as a,
  $ as h,
} from './vue-BjERyvPm.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const T = 1e3,
  q = b({
    name: 'Time',
    __name: 'Time',
    props: {
      value: c.oneOfType([c.number, c.instanceOf(Date), c.string]).isRequired,
      step: c.number.def(60),
      mode: c.oneOf(['date', 'datetime', 'relative']).def('relative'),
    },
    setup(w) {
      const n = w,
        i = T * 60,
        f = i * 60,
        p = f * 24,
        d = R(''),
        { t: r } = C();
      M(O, n.step * T),
        U(
          () => n.value,
          () => {
            O();
          },
          { immediate: !0 },
        );
      function E() {
        const { value: e } = n;
        let s = 0;
        if (k(e)) {
          const m = e.toString().length > 10 ? e : e * 1e3;
          s = new Date(m).getTime();
        } else H(e) ? (s = new Date(e).getTime()) : S(e) && (s = e.getTime());
        return s;
      }
      function O() {
        const { mode: e, value: s } = n,
          m = E();
        e === 'relative'
          ? (d.value = y(m))
          : e === 'datetime'
            ? (d.value = x(s))
            : e === 'date' && (d.value = I(s));
      }
      function y(e) {
        const s = new Date().getTime(),
          m = g(e).isBefore(s);
        let t = s - e;
        m || (t = -t);
        let o = '',
          _ = r(m ? 'component.time.before' : 'component.time.after');
        return (
          t < T
            ? (o = r('component.time.just'))
            : t < i
              ? (o = parseInt(t / T) + r('component.time.seconds') + _)
              : t >= i && t < f
                ? (o = Math.floor(t / i) + r('component.time.minutes') + _)
                : t >= f && t < p
                  ? (o = Math.floor(t / f) + r('component.time.hours') + _)
                  : t >= p && t < 262386e4
                    ? (o = Math.floor(t / p) + r('component.time.days') + _)
                    : t >= 262386e4 && t <= 3156786e4 && m
                      ? (o = g(e).format('MM-DD-HH-mm'))
                      : (o = g(e).format('YYYY')),
          o
        );
      }
      return (e, s) => (N(), j('span', null, P(d.value), 1));
    },
  }),
  u = Y(q),
  z = h('br', null, null, -1),
  A = h('br', null, null, -1),
  F = h('br', null, null, -1),
  J = h('br', null, null, -1),
  ee = b({
    __name: 'index',
    setup(w) {
      const n = new Date().getTime(),
        i = V({ time1: n - 60 * 3 * 1e3, time2: n - 86400 * 3 * 1e3 });
      return (f, p) => (
        N(),
        $(
          a(B),
          { title: '时间组件示例' },
          {
            default: v(() => [
              l(
                a(D),
                { title: '基础示例' },
                {
                  default: v(() => [
                    l(a(u), { value: i.time1 }, null, 8, ['value']),
                    z,
                    l(a(u), { value: i.time2 }, null, 8, ['value']),
                  ]),
                  _: 1,
                },
              ),
              l(
                a(D),
                { title: '定时更新', class: 'my-4' },
                {
                  default: v(() => [
                    l(a(u), { value: a(n), step: 1 }, null, 8, ['value']),
                    A,
                    l(a(u), { value: a(n), step: 5 }, null, 8, ['value']),
                  ]),
                  _: 1,
                },
              ),
              l(
                a(D),
                { title: '定时更新' },
                {
                  default: v(() => [
                    l(a(u), { value: a(n), mode: 'date' }, null, 8, ['value']),
                    F,
                    l(a(u), { value: a(n), mode: 'datetime' }, null, 8, ['value']),
                    J,
                    l(a(u), { value: a(n) }, null, 8, ['value']),
                  ]),
                  _: 1,
                },
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  });
export { ee as default };
