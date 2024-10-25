import { f as i, c as r } from '../index.js';
import { b as c } from './index-DrpmYqed.js';
import {
  d as m,
  c as p,
  Z as d,
  _ as u,
  $ as f,
  a0 as g,
  k as b,
  ac as y,
  u as a,
  a1 as S,
} from './vue-BjERyvPm.js';
import { W as v } from './antd-BmrhB3rb.js';
import './index-BvvAk0TE.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useSortable-D6mV6aGQ.js';
import './index-dz3v0Mah.js';
import './lock-DyB6sZX8.js';
const V = m({
    name: 'SelectItem',
    __name: 'SelectItem',
    props: {
      event: { type: Number },
      disabled: { type: Boolean },
      title: { type: String },
      def: { type: [String, Number] },
      initValue: { type: [String, Number] },
      options: { type: Array, default: () => [] },
    },
    setup(t) {
      const e = t,
        { prefixCls: s } = i('setting-select-item'),
        o = p(() => (e.def ? { value: e.def, defaultValue: e.initValue || e.def } : {})),
        l = (n) => {
          e.event && c(e.event, n);
        };
      return (n, B) => (
        d(),
        u(
          'div',
          { class: S(a(s)) },
          [
            f('span', null, g(t.title), 1),
            b(
              a(v),
              y(o.value, {
                class: `${a(s)}-select`,
                onChange: l,
                disabled: t.disabled,
                size: 'small',
                options: t.options,
              }),
              null,
              16,
              ['class', 'disabled', 'options'],
            ),
          ],
          2,
        )
      );
    },
  }),
  A = r(V, [['__scopeId', 'data-v-cf1163e4']]);
export { A as default };