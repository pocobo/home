import { P as X } from './index-B24a6rfW.js';
import {
  d as Y,
  Z as L,
  a8 as S,
  a9 as W,
  m as A,
  _ as D,
  G as q,
  u as _,
} from './vue-BjERyvPm.js';
import '../index.js';
import './antd-BmrhB3rb.js';
import './useContentViewHeight-mbS0GS8E.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './onMountedOrActivated-DcvTUt7V.js';
const m = { event: 'mousedown', transition: 400 },
  h = {
    beforeMount: (e, t) => {
      if (t.value === !1) return;
      const o = e.getAttribute('ripple-background');
      H(Object.keys(t.modifiers), m);
      const s = o || h.background,
        r = h.zIndex;
      e.addEventListener(m.event, (l) => {
        G({ event: l, el: e, background: s, zIndex: r });
      });
    },
    updated(e, t) {
      var s, r;
      if (!t.value) {
        (s = e == null ? void 0 : e.clearRipple) == null || s.call(e);
        return;
      }
      const o = e.getAttribute('ripple-background');
      (r = e == null ? void 0 : e.setBackground) == null || r.call(e, o);
    },
  };
function G({ event: e, el: t, zIndex: o, background: s }) {
  var E, R;
  const r = parseInt(getComputedStyle(t).borderWidth.replace('px', '')),
    l = e.clientX || e.touches[0].clientX,
    T = e.clientY || e.touches[0].clientY,
    C = t.getBoundingClientRect(),
    { left: N, top: $ } = C,
    { offsetWidth: b, offsetHeight: x } = t,
    { transition: k } = m,
    d = l - N,
    u = T - $,
    v = Math.max(d, b - d),
    y = Math.max(u, x - u),
    B = window.getComputedStyle(t),
    f = Math.sqrt(v * v + y * y),
    w = r > 0 ? r : 0,
    a = document.createElement('div'),
    n = document.createElement('div');
  (a.className = 'ripple'),
    Object.assign((E = a.style) != null ? E : {}, {
      marginTop: '0px',
      marginLeft: '0px',
      width: '1px',
      height: '1px',
      transition: `all ${k}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      borderRadius: '50%',
      pointerEvents: 'none',
      position: 'relative',
      zIndex: o != null ? o : '9999',
      backgroundColor: s != null ? s : 'rgba(0, 0, 0, 0.12)',
    }),
    (n.className = 'ripple-container'),
    Object.assign((R = n.style) != null ? R : {}, {
      position: 'absolute',
      left: `${0 - w}px`,
      top: `${0 - w}px`,
      height: '0',
      width: '0',
      pointerEvents: 'none',
      overflow: 'hidden',
    });
  const g = t.style.position.length > 0 ? t.style.position : getComputedStyle(t).position;
  g !== 'relative' && (t.style.position = 'relative'),
    n.appendChild(a),
    t.appendChild(n),
    Object.assign(a.style, { marginTop: `${u}px`, marginLeft: `${d}px` });
  const {
    borderTopLeftRadius: j,
    borderTopRightRadius: O,
    borderBottomLeftRadius: P,
    borderBottomRightRadius: M,
  } = B;
  Object.assign(n.style, {
    width: `${b}px`,
    height: `${x}px`,
    direction: 'ltr',
    borderTopLeftRadius: j,
    borderTopRightRadius: O,
    borderBottomLeftRadius: P,
    borderBottomRightRadius: M,
  }),
    setTimeout(() => {
      var p;
      const i = `${f * 2}px`;
      Object.assign((p = a.style) != null ? p : {}, {
        width: i,
        height: i,
        marginLeft: `${d - f}px`,
        marginTop: `${u - f}px`,
      });
    }, 0);
  function c() {
    setTimeout(() => {
      a.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }, 250),
      setTimeout(() => {
        var i;
        (i = n == null ? void 0 : n.parentNode) == null || i.removeChild(n);
      }, 850),
      t.removeEventListener('mouseup', c, !1),
      t.removeEventListener('mouseleave', c, !1),
      t.removeEventListener('dragstart', c, !1),
      setTimeout(() => {
        let i = !0;
        for (let p = 0; p < t.childNodes.length; p++)
          t.childNodes[p].className === 'ripple-container' && (i = !1);
        i && (t.style.position = g !== 'static' ? g : '');
      }, m.transition + 260);
  }
  e.type === 'mousedown'
    ? (t.addEventListener('mouseup', c, !1),
      t.addEventListener('mouseleave', c, !1),
      t.addEventListener('dragstart', c, !1))
    : c(),
    (t.setBackground = (i) => {
      i && (a.style.backgroundColor = i);
    });
}
function H(e, t) {
  e.forEach((o) => {
    isNaN(Number(o)) ? (t.event = o) : (t.transition = o);
  });
}
const V = {
    class: 'flex item-center justify-center w-75 h-75 border-2 bg-blue-500 text-white text-24px',
  },
  U = Y({
    __name: 'index',
    setup(e) {
      const t = h;
      return (o, s) => (
        L(),
        S(
          _(X),
          { title: 'Ripple示例' },
          { default: W(() => [A((L(), D('div', V, [q(' content ')])), [[_(t)]])]), _: 1 },
        )
      );
    },
  });
export { U as default };
