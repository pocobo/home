var p = (s, i, t) =>
  new Promise((l, a) => {
    var n = (e) => {
        try {
          o(t.next(e));
        } catch (c) {
          a(c);
        }
      },
      r = (e) => {
        try {
          o(t.throw(e));
        } catch (c) {
          a(c);
        }
      },
      o = (e) => (e.done ? l(e.value) : Promise.resolve(e.value).then(n, r));
    o((t = t.apply(s, i)).next());
  });
import { u as g } from './useScript-BwrFIpPm.js';
import { d as m, f, o as u, Z as w, _ as d, ag as h, y, u as _ } from './vue-BjERyvPm.js';
const k =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyBQWrGwj4gAzKndcbwD5favT9K0wgty_0&signed_in=true',
  z = m({
    name: 'GoogleMap',
    __name: 'Google',
    props: {
      width: { type: String, default: '100%' },
      height: { type: String, default: 'calc(100vh - 78px)' },
    },
    setup(s) {
      const i = f(null),
        { toPromise: t } = g({ src: k });
      function l() {
        return p(this, null, function* () {
          yield t(), yield y();
          const a = _(i);
          if (!a) return;
          const n = window.google,
            r = { lat: 116.404, lng: 39.915 },
            o = new n.maps.Map(a, { zoom: 4, center: r });
          new n.maps.Marker({ position: r, map: o, title: 'Hello World!' });
        });
      }
      return (
        u(() =>
          p(this, null, function* () {
            yield l();
          }),
        ),
        (a, n) => (
          w(),
          d(
            'div',
            { ref_key: 'wrapRef', ref: i, style: h({ height: s.height, width: s.width }) },
            null,
            4,
          )
        )
      );
    },
  });
export { z as default };
