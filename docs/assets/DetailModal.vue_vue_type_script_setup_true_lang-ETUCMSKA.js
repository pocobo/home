import { B as s } from './index-RbNU_lzt.js';
import { D as i } from './index-DXnpckpY.js';
import { h as n } from '../index.js';
import { getDescSchema as c } from './data-Dn12aQq8.js';
import { u as m } from './useDescription-CSes53e9.js';
import { d as p, Z as l, a8 as f, a9 as u, k as d, u as e, ac as _ } from './vue-BjERyvPm.js';
const x = p({
  __name: 'DetailModal',
  props: { info: { type: Object, default: null } },
  setup(t) {
    const { t: o } = n(),
      [a] = m({ column: 2, schema: c() });
    return (r, g) => (
      l(),
      f(
        e(s),
        _({ width: 800, title: e(o)('sys.errorLog.tableActionDesc') }, r.$attrs),
        {
          default: u(() => [
            d(e(i), { data: t.info, onRegister: e(a) }, null, 8, ['data', 'onRegister']),
          ]),
          _: 1,
        },
        16,
        ['title'],
      )
    );
  },
});
export { x as _ };
