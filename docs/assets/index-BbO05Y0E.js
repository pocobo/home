import { P as l } from './index-B24a6rfW.js';
import { _ as r } from './WorkbenchHeader.vue_vue_type_script_setup_true_lang-DYjXmohC.js';
import { _ as n } from './ProjectCard.vue_vue_type_script_setup_true_lang-CTBhoX5G.js';
import { _ as i } from './QuickNav.vue_vue_type_script_setup_true_lang-CoL_FJGO.js';
import { _ as m } from './DynamicInfo.vue_vue_type_script_setup_true_lang-Xffs0OM8.js';
import { _ } from './SaleRadar.vue_vue_type_script_setup_true_lang-BPyxNT_b.js';
import { R as c } from './antd-BmrhB3rb.js';
import { d, f as u, Z as f, a8 as p, a9 as o, k as s, $ as e, u as t } from './vue-BjERyvPm.js';
import '../index.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './header-DYIk9Ych.js';
import './data-eeqyhHg8.js';
import './useECharts-m6DBXNkB.js';
const g = '/home/assets/illustration-jTCqTCdW.svg',
  h = { class: 'lg:flex' },
  v = { class: 'lg:w-7/10 w-full !mr-4 enter-y' },
  y = { class: 'lg:w-3/10 w-full enter-y' },
  x = e('img', { class: 'xl:h-50 h-30 mx-auto', src: g }, null, -1),
  E = d({
    __name: 'index',
    setup(C) {
      const a = u(!0);
      return (
        setTimeout(() => {
          a.value = !1;
        }, 1500),
        ($, w) => (
          f(),
          p(t(l), null, {
            headerContent: o(() => [s(r)]),
            default: o(() => [
              e('div', h, [
                e('div', v, [
                  s(n, { loading: a.value, class: 'enter-y' }, null, 8, ['loading']),
                  s(m, { loading: a.value, class: '!my-4 enter-y' }, null, 8, ['loading']),
                ]),
                e('div', y, [
                  s(i, { loading: a.value, class: 'enter-y' }, null, 8, ['loading']),
                  s(
                    t(c),
                    { class: '!my-4 enter-y', loading: a.value },
                    { default: o(() => [x]), _: 1 },
                    8,
                    ['loading'],
                  ),
                  s(_, { loading: a.value, class: 'enter-y' }, null, 8, ['loading']),
                ]),
              ]),
            ]),
            _: 1,
          })
        )
      );
    },
  });
export { E as default };
