import { f as r, c as l } from '../index.js';
import {
  d,
  Z as n,
  _ as o,
  F as p,
  aa as u,
  a8 as _,
  a9 as m,
  $ as i,
  a1 as c,
  u as a,
  a2 as f,
  a3 as y,
} from './vue-BjERyvPm.js';
import { T as k } from './antd-BmrhB3rb.js';
const h = (e) => (f('data-v-484d23e8'), (e = e()), y(), e),
  v = ['onClick'],
  T = h(() => i('div', { class: 'mix-sidebar' }, null, -1)),
  x = [T],
  C = d({
    name: 'MenuTypePicker',
    __name: 'TypePicker',
    props: {
      menuTypeList: { type: Array, default: () => [] },
      handler: { type: Function, default: () => ({}) },
      def: { type: String, default: '' },
    },
    setup(e) {
      const { prefixCls: s } = r('setting-menu-type-picker');
      return ($, g) => (
        n(),
        o(
          'div',
          { class: c(a(s)) },
          [
            (n(!0),
            o(
              p,
              null,
              u(
                e.menuTypeList || [],
                (t) => (
                  n(),
                  _(
                    a(k),
                    { key: t.title, title: t.title, placement: 'bottom' },
                    {
                      default: m(() => [
                        i(
                          'div',
                          {
                            onClick: (B) => e.handler(t),
                            class: c([
                              `${a(s)}__item`,
                              `${a(s)}__item--${t.type}`,
                              { [`${a(s)}__item--active`]: e.def === t.type },
                            ]),
                          },
                          x,
                          10,
                          v,
                        ),
                      ]),
                      _: 2,
                    },
                    1032,
                    ['title'],
                  )
                ),
              ),
              128,
            )),
          ],
          2,
        )
      );
    },
  }),
  L = l(C, [['__scopeId', 'data-v-484d23e8']]);
export { L as default };
