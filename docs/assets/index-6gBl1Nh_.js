import { _ as o } from './GrowCard.vue_vue_type_script_setup_true_lang-BkFsUu_V.js';
import { _ as e } from './SiteAnalysis.vue_vue_type_script_setup_true_lang-BQALtD4Y.js';
import { _ as s } from './VisitSource.vue_vue_type_script_setup_true_lang-fLNNmmlu.js';
import { _ as m } from './VisitRadar.vue_vue_type_script_setup_true_lang-Bku0aoLI.js';
import { _ as n } from './SalesProductPie.vue_vue_type_script_setup_true_lang-lyOw4JKF.js';
import { d as i, f as t, Z as r, _, k as l, $ as d } from './vue-BjERyvPm.js';
import './index-9EbO13_D.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './VisitAnalysis.vue_vue_type_script_setup_true_lang-R0nrz2Pl.js';
import './useECharts-m6DBXNkB.js';
import './props-BGjQktHt.js';
import './VisitAnalysisBar.vue_vue_type_script_setup_true_lang-BkRWxUEE.js';
const c = { class: 'p-4' },
  f = { class: 'md:flex enter-y' },
  Z = i({
    __name: 'index',
    setup(p) {
      const a = t(!0);
      return (
        setTimeout(() => {
          a.value = !1;
        }, 1500),
        (u, g) => (
          r(),
          _('div', c, [
            l(o, { loading: a.value, class: 'enter-y' }, null, 8, ['loading']),
            l(e, { class: '!my-4 enter-y', loading: a.value }, null, 8, ['loading']),
            d('div', f, [
              l(m, { class: 'md:w-1/3 w-full', loading: a.value }, null, 8, ['loading']),
              l(
                s,
                { class: 'md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full', loading: a.value },
                null,
                8,
                ['loading'],
              ),
              l(n, { class: 'md:w-1/3 w-full', loading: a.value }, null, 8, ['loading']),
            ]),
          ])
        )
      );
    },
  });
export { Z as default };
