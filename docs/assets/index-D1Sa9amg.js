import { W as u, s as e, w as i } from '../index.js';
import { d as a } from './vue-BjERyvPm.js';
const m = a({
    name: 'Authority',
    props: { value: { type: [Number, Array, String], default: '' } },
    setup(n, { slots: t }) {
      const { hasPermission: s } = u();
      function o() {
        const { value: r } = n;
        return r ? (s(r) ? e(t) : null) : e(t);
      }
      return () => o();
    },
  }),
  l = i(m);
export { l as A };
