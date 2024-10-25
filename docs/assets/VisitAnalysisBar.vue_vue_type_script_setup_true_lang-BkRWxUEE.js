var p = Object.defineProperty;
var s = Object.getOwnPropertySymbols;
var l = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable;
var i = (a, e, t) =>
    e in a ? p(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (a[e] = t),
  n = (a, e) => {
    for (var t in e || (e = {})) l.call(e, t) && i(a, t, e[t]);
    if (s) for (var t of s(e)) m.call(e, t) && i(a, t, e[t]);
    return a;
  };
import { dv as c } from './useECharts-m6DBXNkB.js';
import { b as h } from './props-BGjQktHt.js';
import { d, f, o as y, Z as u, _, ag as g } from './vue-BjERyvPm.js';
const k = d({
  __name: 'VisitAnalysisBar',
  props: n({}, h),
  setup(a) {
    const e = f(null),
      { setOptions: t } = c(e);
    return (
      y(() => {
        t({
          tooltip: { trigger: 'axis', axisPointer: { lineStyle: { width: 1, color: '#019680' } } },
          grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: !0 },
          xAxis: { type: 'category', data: [...new Array(12)].map((r, o) => `${o + 1}月`) },
          yAxis: { type: 'value', max: 8e3, splitNumber: 4 },
          series: [
            {
              data: [3e3, 2e3, 3333, 5e3, 3200, 4200, 3200, 2100, 3e3, 5100, 6e3, 3200, 4800],
              type: 'bar',
              barMaxWidth: 80,
            },
          ],
        });
      }),
      (r, o) => (
        u(),
        _(
          'div',
          { ref_key: 'chartRef', ref: e, style: g({ height: r.height, width: r.width }) },
          null,
          4,
        )
      )
    );
  },
});
export { k as _ };
