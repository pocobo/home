var p = (n, o, t) =>
  new Promise((r, a) => {
    var i = (e) => {
        try {
          s(t.next(e));
        } catch (c) {
          a(c);
        }
      },
      f = (e) => {
        try {
          s(t.throw(e));
        } catch (c) {
          a(c);
        }
      },
      s = (e) => (e.done ? r(e.value) : Promise.resolve(e.value).then(i, f));
    s((t = t.apply(n, o)).next());
  });
import { u as d } from './useScript-BwrFIpPm.js';
import { d as l, f as m, o as u, Z as w, _ as h, ag as y, y as M, u as _ } from './vue-BjERyvPm.js';
const g = 'https://webapi.amap.com/maps?v=2.0&key=d7bb98e7185300250dd5f918c12f484b',
  v = l({
    name: 'AMap',
    __name: 'Gaode',
    props: {
      width: { type: String, default: '100%' },
      height: { type: String, default: 'calc(100vh - 78px)' },
    },
    setup(n) {
      const o = m(null),
        { toPromise: t } = d({ src: g });
      function r() {
        return p(this, null, function* () {
          yield t(), yield M();
          const a = _(o);
          if (!a) return;
          const i = window.AMap;
          new i.Map(a, { zoom: 11, center: [116.397428, 39.90923], viewMode: '3D' });
        });
      }
      return (
        u(() =>
          p(this, null, function* () {
            yield r();
          }),
        ),
        (a, i) => (
          w(),
          h(
            'div',
            { ref_key: 'wrapRef', ref: o, style: y({ height: n.height, width: n.width }) },
            null,
            4,
          )
        )
      );
    },
  });
export { v as default };
