import { T as n } from './index-BOSNvcSL.js';
import { P as m } from './index-B24a6rfW.js';
import { d as p, f as i, Z as u, a8 as s, a9 as d, k as f, u as o } from './vue-BjERyvPm.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './uuid-D0SLUWHI.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
const B = p({
  __name: 'index',
  setup(c) {
    const e = i('hello world!');
    function t(r) {}
    return (r, a) => (
      u(),
      s(
        o(m),
        { title: '富文本组件示例' },
        {
          default: d(() => [
            f(
              o(n),
              {
                modelValue: e.value,
                'onUpdate:modelValue': a[0] || (a[0] = (l) => (e.value = l)),
                onChange: t,
                width: '100%',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        },
      )
    );
  },
});
export { B as default };
