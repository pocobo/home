var He = Object.defineProperty,
  $e = Object.defineProperties;
var Ue = Object.getOwnPropertyDescriptors;
var te = Object.getOwnPropertySymbols;
var je = Object.prototype.hasOwnProperty,
  Ve = Object.prototype.propertyIsEnumerable;
var ee = (a, t, i) =>
    t in a ? He(a, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : (a[t] = i),
  xt = (a, t) => {
    for (var i in t || (t = {})) je.call(t, i) && ee(a, i, t[i]);
    if (te) for (var i of te(t)) Ve.call(t, i) && ee(a, i, t[i]);
    return a;
  },
  ie = (a, t) => $e(a, Ue(t));
var St = (a, t, i) =>
  new Promise((e, o) => {
    var r = (u) => {
        try {
          s(i.next(u));
        } catch (l) {
          o(l);
        }
      },
      n = (u) => {
        try {
          s(i.throw(u));
        } catch (l) {
          o(l);
        }
      },
      s = (u) => (u.done ? e(u.value) : Promise.resolve(u.value).then(r, n));
    s((i = i.apply(a, t)).next());
  });
import {
  r as Ge,
  f as $t,
  u as Fe,
  h as we,
  z as qe,
  a as Ze,
  c as Ke,
  w as ye,
} from '../index.js';
import {
  d as Ut,
  f as at,
  c as F,
  o as Qe,
  b as Je,
  u as b,
  Z as q,
  _ as vt,
  m as ti,
  A as ei,
  $ as U,
  ag as ot,
  a1 as Y,
  a7 as xe,
  a8 as It,
  a9 as B,
  ab as gt,
  k as O,
  ac as De,
  h as ii,
  w as ai,
  G as ri,
  a0 as ni,
} from './vue-BjERyvPm.js';
import { a as oi, B as si, b as hi } from './index-RbNU_lzt.js';
import { d as ci } from './base64Conver-bBv-IO2K.js';
import { T as V, aF as li, Y as ui, a1 as Dt, e as pi } from './antd-BmrhB3rb.js';
/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */ function ae(a, t) {
  var i = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(a);
    t &&
      (e = e.filter(function (o) {
        return Object.getOwnPropertyDescriptor(a, o).enumerable;
      })),
      i.push.apply(i, e);
  }
  return i;
}
function Me(a) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ae(Object(i), !0).forEach(function (e) {
          mi(a, e, i[e]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
        : ae(Object(i)).forEach(function (e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
          });
  }
  return a;
}
function di(a, t) {
  if (typeof a != 'object' || !a) return a;
  var i = a[Symbol.toPrimitive];
  if (i !== void 0) {
    var e = i.call(a, t || 'default');
    if (typeof e != 'object') return e;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(a);
}
function Ce(a) {
  var t = di(a, 'string');
  return typeof t == 'symbol' ? t : t + '';
}
function kt(a) {
  '@babel/helpers - typeof';
  return (
    (kt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    kt(a)
  );
}
function fi(a, t) {
  if (!(a instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function re(a, t) {
  for (var i = 0; i < t.length; i++) {
    var e = t[i];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      'value' in e && (e.writable = !0),
      Object.defineProperty(a, Ce(e.key), e);
  }
}
function gi(a, t, i) {
  return (
    t && re(a.prototype, t),
    i && re(a, i),
    Object.defineProperty(a, 'prototype', { writable: !1 }),
    a
  );
}
function mi(a, t, i) {
  return (
    (t = Ce(t)),
    t in a
      ? Object.defineProperty(a, t, { value: i, enumerable: !0, configurable: !0, writable: !0 })
      : (a[t] = i),
    a
  );
}
function Ee(a) {
  return vi(a) || bi(a) || wi(a) || yi();
}
function vi(a) {
  if (Array.isArray(a)) return zt(a);
}
function bi(a) {
  if ((typeof Symbol != 'undefined' && a[Symbol.iterator] != null) || a['@@iterator'] != null)
    return Array.from(a);
}
function wi(a, t) {
  if (a) {
    if (typeof a == 'string') return zt(a, t);
    var i = Object.prototype.toString.call(a).slice(8, -1);
    if ((i === 'Object' && a.constructor && (i = a.constructor.name), i === 'Map' || i === 'Set'))
      return Array.from(a);
    if (i === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return zt(a, t);
  }
}
function zt(a, t) {
  (t == null || t > a.length) && (t = a.length);
  for (var i = 0, e = new Array(t); i < t; i++) e[i] = a[i];
  return e;
}
function yi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Tt = typeof window != 'undefined' && typeof window.document != 'undefined',
  H = Tt ? window : {},
  jt = Tt && H.document.documentElement ? 'ontouchstart' in H.document.documentElement : !1,
  Vt = Tt ? 'PointerEvent' in H : !1,
  N = 'cropper',
  Gt = 'all',
  Te = 'crop',
  Oe = 'move',
  Ne = 'zoom',
  et = 'e',
  it = 'w',
  nt = 's',
  G = 'n',
  ut = 'ne',
  pt = 'nw',
  dt = 'se',
  ft = 'sw',
  _t = ''.concat(N, '-crop'),
  ne = ''.concat(N, '-disabled'),
  z = ''.concat(N, '-hidden'),
  oe = ''.concat(N, '-hide'),
  xi = ''.concat(N, '-invisible'),
  Et = ''.concat(N, '-modal'),
  Bt = ''.concat(N, '-move'),
  bt = ''.concat(N, 'Action'),
  Mt = ''.concat(N, 'Preview'),
  Ft = 'crop',
  Se = 'move',
  Ae = 'none',
  Lt = 'crop',
  Pt = 'cropend',
  Yt = 'cropmove',
  Xt = 'cropstart',
  se = 'dblclick',
  Di = jt ? 'touchstart' : 'mousedown',
  Mi = jt ? 'touchmove' : 'mousemove',
  Ci = jt ? 'touchend touchcancel' : 'mouseup',
  he = Vt ? 'pointerdown' : Di,
  ce = Vt ? 'pointermove' : Mi,
  le = Vt ? 'pointerup pointercancel' : Ci,
  ue = 'ready',
  pe = 'resize',
  de = 'wheel',
  Wt = 'zoom',
  fe = 'image/jpeg',
  Ei = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,
  Ti = /^data:/,
  Oi = /^data:image\/jpeg;base64,/,
  Ni = /^img|canvas$/i,
  Re = 200,
  Ie = 100,
  ge = {
    viewMode: 0,
    dragMode: Ft,
    initialAspectRatio: NaN,
    aspectRatio: NaN,
    data: null,
    preview: '',
    responsive: !0,
    restore: !0,
    checkCrossOrigin: !0,
    checkOrientation: !0,
    modal: !0,
    guides: !0,
    center: !0,
    highlight: !0,
    background: !0,
    autoCrop: !0,
    autoCropArea: 0.8,
    movable: !0,
    rotatable: !0,
    scalable: !0,
    zoomable: !0,
    zoomOnTouch: !0,
    zoomOnWheel: !0,
    wheelZoomRatio: 0.1,
    cropBoxMovable: !0,
    cropBoxResizable: !0,
    toggleDragModeOnDblclick: !0,
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: Re,
    minContainerHeight: Ie,
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null,
  },
  Si =
    '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',
  Ai = Number.isNaN || H.isNaN;
function D(a) {
  return typeof a == 'number' && !Ai(a);
}
var me = function (t) {
  return t > 0 && t < 1 / 0;
};
function At(a) {
  return typeof a == 'undefined';
}
function rt(a) {
  return kt(a) === 'object' && a !== null;
}
var Ri = Object.prototype.hasOwnProperty;
function st(a) {
  if (!rt(a)) return !1;
  try {
    var t = a.constructor,
      i = t.prototype;
    return t && i && Ri.call(i, 'isPrototypeOf');
  } catch (e) {
    return !1;
  }
}
function k(a) {
  return typeof a == 'function';
}
var Ii = Array.prototype.slice;
function ke(a) {
  return Array.from ? Array.from(a) : Ii.call(a);
}
function A(a, t) {
  return (
    a &&
      k(t) &&
      (Array.isArray(a) || D(a.length)
        ? ke(a).forEach(function (i, e) {
            t.call(a, i, e, a);
          })
        : rt(a) &&
          Object.keys(a).forEach(function (i) {
            t.call(a, a[i], i, a);
          })),
    a
  );
}
var S =
    Object.assign ||
    function (t) {
      for (var i = arguments.length, e = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
        e[o - 1] = arguments[o];
      return (
        rt(t) &&
          e.length > 0 &&
          e.forEach(function (r) {
            rt(r) &&
              Object.keys(r).forEach(function (n) {
                t[n] = r[n];
              });
          }),
        t
      );
    },
  ki = /\.\d*(?:0|9){12}\d*$/;
function ct(a) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return ki.test(a) ? Math.round(a * t) / t : a;
}
var zi = /^width|height|left|top|marginLeft|marginTop$/;
function Z(a, t) {
  var i = a.style;
  A(t, function (e, o) {
    zi.test(o) && D(e) && (e = ''.concat(e, 'px')), (i[o] = e);
  });
}
function _i(a, t) {
  return a.classList ? a.classList.contains(t) : a.className.indexOf(t) > -1;
}
function R(a, t) {
  if (t) {
    if (D(a.length)) {
      A(a, function (e) {
        R(e, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.add(t);
      return;
    }
    var i = a.className.trim();
    i ? i.indexOf(t) < 0 && (a.className = ''.concat(i, ' ').concat(t)) : (a.className = t);
  }
}
function W(a, t) {
  if (t) {
    if (D(a.length)) {
      A(a, function (i) {
        W(i, t);
      });
      return;
    }
    if (a.classList) {
      a.classList.remove(t);
      return;
    }
    a.className.indexOf(t) >= 0 && (a.className = a.className.replace(t, ''));
  }
}
function ht(a, t, i) {
  if (t) {
    if (D(a.length)) {
      A(a, function (e) {
        ht(e, t, i);
      });
      return;
    }
    i ? R(a, t) : W(a, t);
  }
}
var Bi = /([a-z\d])([A-Z])/g;
function qt(a) {
  return a.replace(Bi, '$1-$2').toLowerCase();
}
function Ht(a, t) {
  return rt(a[t]) ? a[t] : a.dataset ? a.dataset[t] : a.getAttribute('data-'.concat(qt(t)));
}
function wt(a, t, i) {
  rt(i) ? (a[t] = i) : a.dataset ? (a.dataset[t] = i) : a.setAttribute('data-'.concat(qt(t)), i);
}
function Li(a, t) {
  if (rt(a[t]))
    try {
      delete a[t];
    } catch (i) {
      a[t] = void 0;
    }
  else if (a.dataset)
    try {
      delete a.dataset[t];
    } catch (i) {
      a.dataset[t] = void 0;
    }
  else a.removeAttribute('data-'.concat(qt(t)));
}
var ze = /\s\s*/,
  _e = (function () {
    var a = !1;
    if (Tt) {
      var t = !1,
        i = function () {},
        e = Object.defineProperty({}, 'once', {
          get: function () {
            return (a = !0), t;
          },
          set: function (r) {
            t = r;
          },
        });
      H.addEventListener('test', i, e), H.removeEventListener('test', i, e);
    }
    return a;
  })();
function P(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = i;
  t.trim()
    .split(ze)
    .forEach(function (r) {
      if (!_e) {
        var n = a.listeners;
        n &&
          n[r] &&
          n[r][i] &&
          ((o = n[r][i]),
          delete n[r][i],
          Object.keys(n[r]).length === 0 && delete n[r],
          Object.keys(n).length === 0 && delete a.listeners);
      }
      a.removeEventListener(r, o, e);
    });
}
function L(a, t, i) {
  var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = i;
  t.trim()
    .split(ze)
    .forEach(function (r) {
      if (e.once && !_e) {
        var n = a.listeners,
          s = n === void 0 ? {} : n;
        (o = function () {
          delete s[r][i], a.removeEventListener(r, o, e);
          for (var l = arguments.length, h = new Array(l), c = 0; c < l; c++) h[c] = arguments[c];
          i.apply(a, h);
        }),
          s[r] || (s[r] = {}),
          s[r][i] && a.removeEventListener(r, s[r][i], e),
          (s[r][i] = o),
          (a.listeners = s);
      }
      a.addEventListener(r, o, e);
    });
}
function lt(a, t, i) {
  var e;
  return (
    k(Event) && k(CustomEvent)
      ? (e = new CustomEvent(t, { detail: i, bubbles: !0, cancelable: !0 }))
      : ((e = document.createEvent('CustomEvent')), e.initCustomEvent(t, !0, !0, i)),
    a.dispatchEvent(e)
  );
}
function Be(a) {
  var t = a.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop),
  };
}
var Rt = H.location,
  Pi = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function ve(a) {
  var t = a.match(Pi);
  return t !== null && (t[1] !== Rt.protocol || t[2] !== Rt.hostname || t[3] !== Rt.port);
}
function be(a) {
  var t = 'timestamp='.concat(new Date().getTime());
  return a + (a.indexOf('?') === -1 ? '?' : '&') + t;
}
function mt(a) {
  var t = a.rotate,
    i = a.scaleX,
    e = a.scaleY,
    o = a.translateX,
    r = a.translateY,
    n = [];
  D(o) && o !== 0 && n.push('translateX('.concat(o, 'px)')),
    D(r) && r !== 0 && n.push('translateY('.concat(r, 'px)')),
    D(t) && t !== 0 && n.push('rotate('.concat(t, 'deg)')),
    D(i) && i !== 1 && n.push('scaleX('.concat(i, ')')),
    D(e) && e !== 1 && n.push('scaleY('.concat(e, ')'));
  var s = n.length ? n.join(' ') : 'none';
  return { WebkitTransform: s, msTransform: s, transform: s };
}
function Yi(a) {
  var t = Me({}, a),
    i = 0;
  return (
    A(a, function (e, o) {
      delete t[o],
        A(t, function (r) {
          var n = Math.abs(e.startX - r.startX),
            s = Math.abs(e.startY - r.startY),
            u = Math.abs(e.endX - r.endX),
            l = Math.abs(e.endY - r.endY),
            h = Math.sqrt(n * n + s * s),
            c = Math.sqrt(u * u + l * l),
            d = (c - h) / h;
          Math.abs(d) > Math.abs(i) && (i = d);
        });
    }),
    i
  );
}
function Ct(a, t) {
  var i = a.pageX,
    e = a.pageY,
    o = { endX: i, endY: e };
  return t ? o : Me({ startX: i, startY: e }, o);
}
function Xi(a) {
  var t = 0,
    i = 0,
    e = 0;
  return (
    A(a, function (o) {
      var r = o.startX,
        n = o.startY;
      (t += r), (i += n), (e += 1);
    }),
    (t /= e),
    (i /= e),
    { pageX: t, pageY: i }
  );
}
function K(a) {
  var t = a.aspectRatio,
    i = a.height,
    e = a.width,
    o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'contain',
    r = me(e),
    n = me(i);
  if (r && n) {
    var s = i * t;
    (o === 'contain' && s > e) || (o === 'cover' && s < e) ? (i = e / t) : (e = i * t);
  } else r ? (i = e / t) : n && (e = i * t);
  return { width: e, height: i };
}
function Wi(a) {
  var t = a.width,
    i = a.height,
    e = a.degree;
  if (((e = Math.abs(e) % 180), e === 90)) return { width: i, height: t };
  var o = ((e % 90) * Math.PI) / 180,
    r = Math.sin(o),
    n = Math.cos(o),
    s = t * n + i * r,
    u = t * r + i * n;
  return e > 90 ? { width: u, height: s } : { width: s, height: u };
}
function Hi(a, t, i, e) {
  var o = t.aspectRatio,
    r = t.naturalWidth,
    n = t.naturalHeight,
    s = t.rotate,
    u = s === void 0 ? 0 : s,
    l = t.scaleX,
    h = l === void 0 ? 1 : l,
    c = t.scaleY,
    d = c === void 0 ? 1 : c,
    w = i.aspectRatio,
    f = i.naturalWidth,
    C = i.naturalHeight,
    x = e.fillColor,
    E = x === void 0 ? 'transparent' : x,
    v = e.imageSmoothingEnabled,
    M = v === void 0 ? !0 : v,
    y = e.imageSmoothingQuality,
    g = y === void 0 ? 'low' : y,
    p = e.maxWidth,
    m = p === void 0 ? 1 / 0 : p,
    T = e.maxHeight,
    _ = T === void 0 ? 1 / 0 : T,
    $ = e.minWidth,
    Q = $ === void 0 ? 0 : $,
    J = e.minHeight,
    j = J === void 0 ? 0 : J,
    X = document.createElement('canvas'),
    I = X.getContext('2d'),
    tt = K({ aspectRatio: w, width: m, height: _ }),
    yt = K({ aspectRatio: w, width: Q, height: j }, 'cover'),
    Ot = Math.min(tt.width, Math.max(yt.width, f)),
    Nt = Math.min(tt.height, Math.max(yt.height, C)),
    Zt = K({ aspectRatio: o, width: m, height: _ }),
    Kt = K({ aspectRatio: o, width: Q, height: j }, 'cover'),
    Qt = Math.min(Zt.width, Math.max(Kt.width, r)),
    Jt = Math.min(Zt.height, Math.max(Kt.height, n)),
    Xe = [-Qt / 2, -Jt / 2, Qt, Jt];
  return (
    (X.width = ct(Ot)),
    (X.height = ct(Nt)),
    (I.fillStyle = E),
    I.fillRect(0, 0, Ot, Nt),
    I.save(),
    I.translate(Ot / 2, Nt / 2),
    I.rotate((u * Math.PI) / 180),
    I.scale(h, d),
    (I.imageSmoothingEnabled = M),
    (I.imageSmoothingQuality = g),
    I.drawImage.apply(
      I,
      [a].concat(
        Ee(
          Xe.map(function (We) {
            return Math.floor(ct(We));
          }),
        ),
      ),
    ),
    I.restore(),
    X
  );
}
var Le = String.fromCharCode;
function $i(a, t, i) {
  var e = '';
  i += t;
  for (var o = t; o < i; o += 1) e += Le(a.getUint8(o));
  return e;
}
var Ui = /^data:.*,/;
function ji(a) {
  var t = a.replace(Ui, ''),
    i = atob(t),
    e = new ArrayBuffer(i.length),
    o = new Uint8Array(e);
  return (
    A(o, function (r, n) {
      o[n] = i.charCodeAt(n);
    }),
    e
  );
}
function Vi(a, t) {
  for (var i = [], e = 8192, o = new Uint8Array(a); o.length > 0; )
    i.push(Le.apply(null, ke(o.subarray(0, e)))), (o = o.subarray(e));
  return 'data:'.concat(t, ';base64,').concat(btoa(i.join('')));
}
function Gi(a) {
  var t = new DataView(a),
    i;
  try {
    var e, o, r;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var n = t.byteLength, s = 2; s + 1 < n; ) {
        if (t.getUint8(s) === 255 && t.getUint8(s + 1) === 225) {
          o = s;
          break;
        }
        s += 1;
      }
    if (o) {
      var u = o + 4,
        l = o + 10;
      if ($i(t, u, 4) === 'Exif') {
        var h = t.getUint16(l);
        if (((e = h === 18761), (e || h === 19789) && t.getUint16(l + 2, e) === 42)) {
          var c = t.getUint32(l + 4, e);
          c >= 8 && (r = l + c);
        }
      }
    }
    if (r) {
      var d = t.getUint16(r, e),
        w,
        f;
      for (f = 0; f < d; f += 1)
        if (((w = r + f * 12 + 2), t.getUint16(w, e) === 274)) {
          (w += 8), (i = t.getUint16(w, e)), t.setUint16(w, 1, e);
          break;
        }
    }
  } catch (C) {
    i = 1;
  }
  return i;
}
function Fi(a) {
  var t = 0,
    i = 1,
    e = 1;
  switch (a) {
    case 2:
      i = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      e = -1;
      break;
    case 5:
      (t = 90), (e = -1);
      break;
    case 6:
      t = 90;
      break;
    case 7:
      (t = 90), (i = -1);
      break;
    case 8:
      t = -90;
      break;
  }
  return { rotate: t, scaleX: i, scaleY: e };
}
var qi = {
    render: function () {
      this.initContainer(),
        this.initCanvas(),
        this.initCropBox(),
        this.renderCanvas(),
        this.cropped && this.renderCropBox();
    },
    initContainer: function () {
      var t = this.element,
        i = this.options,
        e = this.container,
        o = this.cropper,
        r = Number(i.minContainerWidth),
        n = Number(i.minContainerHeight);
      R(o, z), W(t, z);
      var s = {
        width: Math.max(e.offsetWidth, r >= 0 ? r : Re),
        height: Math.max(e.offsetHeight, n >= 0 ? n : Ie),
      };
      (this.containerData = s), Z(o, { width: s.width, height: s.height }), R(t, z), W(o, z);
    },
    initCanvas: function () {
      var t = this.containerData,
        i = this.imageData,
        e = this.options.viewMode,
        o = Math.abs(i.rotate) % 180 === 90,
        r = o ? i.naturalHeight : i.naturalWidth,
        n = o ? i.naturalWidth : i.naturalHeight,
        s = r / n,
        u = t.width,
        l = t.height;
      t.height * s > t.width
        ? e === 3
          ? (u = t.height * s)
          : (l = t.width / s)
        : e === 3
          ? (l = t.width / s)
          : (u = t.height * s);
      var h = { aspectRatio: s, naturalWidth: r, naturalHeight: n, width: u, height: l };
      (this.canvasData = h),
        (this.limited = e === 1 || e === 2),
        this.limitCanvas(!0, !0),
        (h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth)),
        (h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight)),
        (h.left = (t.width - h.width) / 2),
        (h.top = (t.height - h.height) / 2),
        (h.oldLeft = h.left),
        (h.oldTop = h.top),
        (this.initialCanvasData = S({}, h));
    },
    limitCanvas: function (t, i) {
      var e = this.options,
        o = this.containerData,
        r = this.canvasData,
        n = this.cropBoxData,
        s = e.viewMode,
        u = r.aspectRatio,
        l = this.cropped && n;
      if (t) {
        var h = Number(e.minCanvasWidth) || 0,
          c = Number(e.minCanvasHeight) || 0;
        s > 1
          ? ((h = Math.max(h, o.width)),
            (c = Math.max(c, o.height)),
            s === 3 && (c * u > h ? (h = c * u) : (c = h / u)))
          : s > 0 &&
            (h
              ? (h = Math.max(h, l ? n.width : 0))
              : c
                ? (c = Math.max(c, l ? n.height : 0))
                : l && ((h = n.width), (c = n.height), c * u > h ? (h = c * u) : (c = h / u)));
        var d = K({ aspectRatio: u, width: h, height: c });
        (h = d.width),
          (c = d.height),
          (r.minWidth = h),
          (r.minHeight = c),
          (r.maxWidth = 1 / 0),
          (r.maxHeight = 1 / 0);
      }
      if (i)
        if (s > (l ? 0 : 1)) {
          var w = o.width - r.width,
            f = o.height - r.height;
          (r.minLeft = Math.min(0, w)),
            (r.minTop = Math.min(0, f)),
            (r.maxLeft = Math.max(0, w)),
            (r.maxTop = Math.max(0, f)),
            l &&
              this.limited &&
              ((r.minLeft = Math.min(n.left, n.left + (n.width - r.width))),
              (r.minTop = Math.min(n.top, n.top + (n.height - r.height))),
              (r.maxLeft = n.left),
              (r.maxTop = n.top),
              s === 2 &&
                (r.width >= o.width && ((r.minLeft = Math.min(0, w)), (r.maxLeft = Math.max(0, w))),
                r.height >= o.height &&
                  ((r.minTop = Math.min(0, f)), (r.maxTop = Math.max(0, f)))));
        } else
          (r.minLeft = -r.width),
            (r.minTop = -r.height),
            (r.maxLeft = o.width),
            (r.maxTop = o.height);
    },
    renderCanvas: function (t, i) {
      var e = this.canvasData,
        o = this.imageData;
      if (i) {
        var r = Wi({
            width: o.naturalWidth * Math.abs(o.scaleX || 1),
            height: o.naturalHeight * Math.abs(o.scaleY || 1),
            degree: o.rotate || 0,
          }),
          n = r.width,
          s = r.height,
          u = e.width * (n / e.naturalWidth),
          l = e.height * (s / e.naturalHeight);
        (e.left -= (u - e.width) / 2),
          (e.top -= (l - e.height) / 2),
          (e.width = u),
          (e.height = l),
          (e.aspectRatio = n / s),
          (e.naturalWidth = n),
          (e.naturalHeight = s),
          this.limitCanvas(!0, !1);
      }
      (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft),
        (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop),
        (e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth)),
        (e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight)),
        this.limitCanvas(!1, !0),
        (e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft)),
        (e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop)),
        (e.oldLeft = e.left),
        (e.oldTop = e.top),
        Z(
          this.canvas,
          S({ width: e.width, height: e.height }, mt({ translateX: e.left, translateY: e.top })),
        ),
        this.renderImage(t),
        this.cropped && this.limited && this.limitCropBox(!0, !0);
    },
    renderImage: function (t) {
      var i = this.canvasData,
        e = this.imageData,
        o = e.naturalWidth * (i.width / i.naturalWidth),
        r = e.naturalHeight * (i.height / i.naturalHeight);
      S(e, { width: o, height: r, left: (i.width - o) / 2, top: (i.height - r) / 2 }),
        Z(
          this.image,
          S(
            { width: e.width, height: e.height },
            mt(S({ translateX: e.left, translateY: e.top }, e)),
          ),
        ),
        t && this.output();
    },
    initCropBox: function () {
      var t = this.options,
        i = this.canvasData,
        e = t.aspectRatio || t.initialAspectRatio,
        o = Number(t.autoCropArea) || 0.8,
        r = { width: i.width, height: i.height };
      e && (i.height * e > i.width ? (r.height = r.width / e) : (r.width = r.height * e)),
        (this.cropBoxData = r),
        this.limitCropBox(!0, !0),
        (r.width = Math.min(Math.max(r.width, r.minWidth), r.maxWidth)),
        (r.height = Math.min(Math.max(r.height, r.minHeight), r.maxHeight)),
        (r.width = Math.max(r.minWidth, r.width * o)),
        (r.height = Math.max(r.minHeight, r.height * o)),
        (r.left = i.left + (i.width - r.width) / 2),
        (r.top = i.top + (i.height - r.height) / 2),
        (r.oldLeft = r.left),
        (r.oldTop = r.top),
        (this.initialCropBoxData = S({}, r));
    },
    limitCropBox: function (t, i) {
      var e = this.options,
        o = this.containerData,
        r = this.canvasData,
        n = this.cropBoxData,
        s = this.limited,
        u = e.aspectRatio;
      if (t) {
        var l = Number(e.minCropBoxWidth) || 0,
          h = Number(e.minCropBoxHeight) || 0,
          c = s ? Math.min(o.width, r.width, r.width + r.left, o.width - r.left) : o.width,
          d = s ? Math.min(o.height, r.height, r.height + r.top, o.height - r.top) : o.height;
        (l = Math.min(l, o.width)),
          (h = Math.min(h, o.height)),
          u &&
            (l && h ? (h * u > l ? (h = l / u) : (l = h * u)) : l ? (h = l / u) : h && (l = h * u),
            d * u > c ? (d = c / u) : (c = d * u)),
          (n.minWidth = Math.min(l, c)),
          (n.minHeight = Math.min(h, d)),
          (n.maxWidth = c),
          (n.maxHeight = d);
      }
      i &&
        (s
          ? ((n.minLeft = Math.max(0, r.left)),
            (n.minTop = Math.max(0, r.top)),
            (n.maxLeft = Math.min(o.width, r.left + r.width) - n.width),
            (n.maxTop = Math.min(o.height, r.top + r.height) - n.height))
          : ((n.minLeft = 0),
            (n.minTop = 0),
            (n.maxLeft = o.width - n.width),
            (n.maxTop = o.height - n.height)));
    },
    renderCropBox: function () {
      var t = this.options,
        i = this.containerData,
        e = this.cropBoxData;
      (e.width > e.maxWidth || e.width < e.minWidth) && (e.left = e.oldLeft),
        (e.height > e.maxHeight || e.height < e.minHeight) && (e.top = e.oldTop),
        (e.width = Math.min(Math.max(e.width, e.minWidth), e.maxWidth)),
        (e.height = Math.min(Math.max(e.height, e.minHeight), e.maxHeight)),
        this.limitCropBox(!1, !0),
        (e.left = Math.min(Math.max(e.left, e.minLeft), e.maxLeft)),
        (e.top = Math.min(Math.max(e.top, e.minTop), e.maxTop)),
        (e.oldLeft = e.left),
        (e.oldTop = e.top),
        t.movable &&
          t.cropBoxMovable &&
          wt(this.face, bt, e.width >= i.width && e.height >= i.height ? Oe : Gt),
        Z(
          this.cropBox,
          S({ width: e.width, height: e.height }, mt({ translateX: e.left, translateY: e.top })),
        ),
        this.cropped && this.limited && this.limitCanvas(!0, !0),
        this.disabled || this.output();
    },
    output: function () {
      this.preview(), lt(this.element, Lt, this.getData());
    },
  },
  Zi = {
    initPreview: function () {
      var t = this.element,
        i = this.crossOrigin,
        e = this.options.preview,
        o = i ? this.crossOriginUrl : this.url,
        r = t.alt || 'The image to preview',
        n = document.createElement('img');
      if (
        (i && (n.crossOrigin = i),
        (n.src = o),
        (n.alt = r),
        this.viewBox.appendChild(n),
        (this.viewBoxImage = n),
        !!e)
      ) {
        var s = e;
        typeof e == 'string'
          ? (s = t.ownerDocument.querySelectorAll(e))
          : e.querySelector && (s = [e]),
          (this.previews = s),
          A(s, function (u) {
            var l = document.createElement('img');
            wt(u, Mt, { width: u.offsetWidth, height: u.offsetHeight, html: u.innerHTML }),
              i && (l.crossOrigin = i),
              (l.src = o),
              (l.alt = r),
              (l.style.cssText =
                'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"'),
              (u.innerHTML = ''),
              u.appendChild(l);
          });
      }
    },
    resetPreview: function () {
      A(this.previews, function (t) {
        var i = Ht(t, Mt);
        Z(t, { width: i.width, height: i.height }), (t.innerHTML = i.html), Li(t, Mt);
      });
    },
    preview: function () {
      var t = this.imageData,
        i = this.canvasData,
        e = this.cropBoxData,
        o = e.width,
        r = e.height,
        n = t.width,
        s = t.height,
        u = e.left - i.left - t.left,
        l = e.top - i.top - t.top;
      !this.cropped ||
        this.disabled ||
        (Z(
          this.viewBoxImage,
          S({ width: n, height: s }, mt(S({ translateX: -u, translateY: -l }, t))),
        ),
        A(this.previews, function (h) {
          var c = Ht(h, Mt),
            d = c.width,
            w = c.height,
            f = d,
            C = w,
            x = 1;
          o && ((x = d / o), (C = r * x)),
            r && C > w && ((x = w / r), (f = o * x), (C = w)),
            Z(h, { width: f, height: C }),
            Z(
              h.getElementsByTagName('img')[0],
              S(
                { width: n * x, height: s * x },
                mt(S({ translateX: -u * x, translateY: -l * x }, t)),
              ),
            );
        }));
    },
  },
  Ki = {
    bind: function () {
      var t = this.element,
        i = this.options,
        e = this.cropper;
      k(i.cropstart) && L(t, Xt, i.cropstart),
        k(i.cropmove) && L(t, Yt, i.cropmove),
        k(i.cropend) && L(t, Pt, i.cropend),
        k(i.crop) && L(t, Lt, i.crop),
        k(i.zoom) && L(t, Wt, i.zoom),
        L(e, he, (this.onCropStart = this.cropStart.bind(this))),
        i.zoomable &&
          i.zoomOnWheel &&
          L(e, de, (this.onWheel = this.wheel.bind(this)), { passive: !1, capture: !0 }),
        i.toggleDragModeOnDblclick && L(e, se, (this.onDblclick = this.dblclick.bind(this))),
        L(t.ownerDocument, ce, (this.onCropMove = this.cropMove.bind(this))),
        L(t.ownerDocument, le, (this.onCropEnd = this.cropEnd.bind(this))),
        i.responsive && L(window, pe, (this.onResize = this.resize.bind(this)));
    },
    unbind: function () {
      var t = this.element,
        i = this.options,
        e = this.cropper;
      k(i.cropstart) && P(t, Xt, i.cropstart),
        k(i.cropmove) && P(t, Yt, i.cropmove),
        k(i.cropend) && P(t, Pt, i.cropend),
        k(i.crop) && P(t, Lt, i.crop),
        k(i.zoom) && P(t, Wt, i.zoom),
        P(e, he, this.onCropStart),
        i.zoomable && i.zoomOnWheel && P(e, de, this.onWheel, { passive: !1, capture: !0 }),
        i.toggleDragModeOnDblclick && P(e, se, this.onDblclick),
        P(t.ownerDocument, ce, this.onCropMove),
        P(t.ownerDocument, le, this.onCropEnd),
        i.responsive && P(window, pe, this.onResize);
    },
  },
  Qi = {
    resize: function () {
      if (!this.disabled) {
        var t = this.options,
          i = this.container,
          e = this.containerData,
          o = i.offsetWidth / e.width,
          r = i.offsetHeight / e.height,
          n = Math.abs(o - 1) > Math.abs(r - 1) ? o : r;
        if (n !== 1) {
          var s, u;
          t.restore && ((s = this.getCanvasData()), (u = this.getCropBoxData())),
            this.render(),
            t.restore &&
              (this.setCanvasData(
                A(s, function (l, h) {
                  s[h] = l * n;
                }),
              ),
              this.setCropBoxData(
                A(u, function (l, h) {
                  u[h] = l * n;
                }),
              ));
        }
      }
    },
    dblclick: function () {
      this.disabled ||
        this.options.dragMode === Ae ||
        this.setDragMode(_i(this.dragBox, _t) ? Se : Ft);
    },
    wheel: function (t) {
      var i = this,
        e = Number(this.options.wheelZoomRatio) || 0.1,
        o = 1;
      this.disabled ||
        (t.preventDefault(),
        !this.wheeling &&
          ((this.wheeling = !0),
          setTimeout(function () {
            i.wheeling = !1;
          }, 50),
          t.deltaY
            ? (o = t.deltaY > 0 ? 1 : -1)
            : t.wheelDelta
              ? (o = -t.wheelDelta / 120)
              : t.detail && (o = t.detail > 0 ? 1 : -1),
          this.zoom(-o * e, t)));
    },
    cropStart: function (t) {
      var i = t.buttons,
        e = t.button;
      if (
        !(
          this.disabled ||
          ((t.type === 'mousedown' || (t.type === 'pointerdown' && t.pointerType === 'mouse')) &&
            ((D(i) && i !== 1) || (D(e) && e !== 0) || t.ctrlKey))
        )
      ) {
        var o = this.options,
          r = this.pointers,
          n;
        t.changedTouches
          ? A(t.changedTouches, function (s) {
              r[s.identifier] = Ct(s);
            })
          : (r[t.pointerId || 0] = Ct(t)),
          Object.keys(r).length > 1 && o.zoomable && o.zoomOnTouch
            ? (n = Ne)
            : (n = Ht(t.target, bt)),
          Ei.test(n) &&
            lt(this.element, Xt, { originalEvent: t, action: n }) !== !1 &&
            (t.preventDefault(),
            (this.action = n),
            (this.cropping = !1),
            n === Te && ((this.cropping = !0), R(this.dragBox, Et)));
      }
    },
    cropMove: function (t) {
      var i = this.action;
      if (!(this.disabled || !i)) {
        var e = this.pointers;
        t.preventDefault(),
          lt(this.element, Yt, { originalEvent: t, action: i }) !== !1 &&
            (t.changedTouches
              ? A(t.changedTouches, function (o) {
                  S(e[o.identifier] || {}, Ct(o, !0));
                })
              : S(e[t.pointerId || 0] || {}, Ct(t, !0)),
            this.change(t));
      }
    },
    cropEnd: function (t) {
      if (!this.disabled) {
        var i = this.action,
          e = this.pointers;
        t.changedTouches
          ? A(t.changedTouches, function (o) {
              delete e[o.identifier];
            })
          : delete e[t.pointerId || 0],
          i &&
            (t.preventDefault(),
            Object.keys(e).length || (this.action = ''),
            this.cropping &&
              ((this.cropping = !1), ht(this.dragBox, Et, this.cropped && this.options.modal)),
            lt(this.element, Pt, { originalEvent: t, action: i }));
      }
    },
  },
  Ji = {
    change: function (t) {
      var i = this.options,
        e = this.canvasData,
        o = this.containerData,
        r = this.cropBoxData,
        n = this.pointers,
        s = this.action,
        u = i.aspectRatio,
        l = r.left,
        h = r.top,
        c = r.width,
        d = r.height,
        w = l + c,
        f = h + d,
        C = 0,
        x = 0,
        E = o.width,
        v = o.height,
        M = !0,
        y;
      !u && t.shiftKey && (u = c && d ? c / d : 1),
        this.limited &&
          ((C = r.minLeft),
          (x = r.minTop),
          (E = C + Math.min(o.width, e.width, e.left + e.width)),
          (v = x + Math.min(o.height, e.height, e.top + e.height)));
      var g = n[Object.keys(n)[0]],
        p = { x: g.endX - g.startX, y: g.endY - g.startY },
        m = function (_) {
          switch (_) {
            case et:
              w + p.x > E && (p.x = E - w);
              break;
            case it:
              l + p.x < C && (p.x = C - l);
              break;
            case G:
              h + p.y < x && (p.y = x - h);
              break;
            case nt:
              f + p.y > v && (p.y = v - f);
              break;
          }
        };
      switch (s) {
        case Gt:
          (l += p.x), (h += p.y);
          break;
        case et:
          if (p.x >= 0 && (w >= E || (u && (h <= x || f >= v)))) {
            M = !1;
            break;
          }
          m(et),
            (c += p.x),
            c < 0 && ((s = it), (c = -c), (l -= c)),
            u && ((d = c / u), (h += (r.height - d) / 2));
          break;
        case G:
          if (p.y <= 0 && (h <= x || (u && (l <= C || w >= E)))) {
            M = !1;
            break;
          }
          m(G),
            (d -= p.y),
            (h += p.y),
            d < 0 && ((s = nt), (d = -d), (h -= d)),
            u && ((c = d * u), (l += (r.width - c) / 2));
          break;
        case it:
          if (p.x <= 0 && (l <= C || (u && (h <= x || f >= v)))) {
            M = !1;
            break;
          }
          m(it),
            (c -= p.x),
            (l += p.x),
            c < 0 && ((s = et), (c = -c), (l -= c)),
            u && ((d = c / u), (h += (r.height - d) / 2));
          break;
        case nt:
          if (p.y >= 0 && (f >= v || (u && (l <= C || w >= E)))) {
            M = !1;
            break;
          }
          m(nt),
            (d += p.y),
            d < 0 && ((s = G), (d = -d), (h -= d)),
            u && ((c = d * u), (l += (r.width - c) / 2));
          break;
        case ut:
          if (u) {
            if (p.y <= 0 && (h <= x || w >= E)) {
              M = !1;
              break;
            }
            m(G), (d -= p.y), (h += p.y), (c = d * u);
          } else
            m(G),
              m(et),
              p.x >= 0 ? (w < E ? (c += p.x) : p.y <= 0 && h <= x && (M = !1)) : (c += p.x),
              p.y <= 0 ? h > x && ((d -= p.y), (h += p.y)) : ((d -= p.y), (h += p.y));
          c < 0 && d < 0
            ? ((s = ft), (d = -d), (c = -c), (h -= d), (l -= c))
            : c < 0
              ? ((s = pt), (c = -c), (l -= c))
              : d < 0 && ((s = dt), (d = -d), (h -= d));
          break;
        case pt:
          if (u) {
            if (p.y <= 0 && (h <= x || l <= C)) {
              M = !1;
              break;
            }
            m(G), (d -= p.y), (h += p.y), (c = d * u), (l += r.width - c);
          } else
            m(G),
              m(it),
              p.x <= 0
                ? l > C
                  ? ((c -= p.x), (l += p.x))
                  : p.y <= 0 && h <= x && (M = !1)
                : ((c -= p.x), (l += p.x)),
              p.y <= 0 ? h > x && ((d -= p.y), (h += p.y)) : ((d -= p.y), (h += p.y));
          c < 0 && d < 0
            ? ((s = dt), (d = -d), (c = -c), (h -= d), (l -= c))
            : c < 0
              ? ((s = ut), (c = -c), (l -= c))
              : d < 0 && ((s = ft), (d = -d), (h -= d));
          break;
        case ft:
          if (u) {
            if (p.x <= 0 && (l <= C || f >= v)) {
              M = !1;
              break;
            }
            m(it), (c -= p.x), (l += p.x), (d = c / u);
          } else
            m(nt),
              m(it),
              p.x <= 0
                ? l > C
                  ? ((c -= p.x), (l += p.x))
                  : p.y >= 0 && f >= v && (M = !1)
                : ((c -= p.x), (l += p.x)),
              p.y >= 0 ? f < v && (d += p.y) : (d += p.y);
          c < 0 && d < 0
            ? ((s = ut), (d = -d), (c = -c), (h -= d), (l -= c))
            : c < 0
              ? ((s = dt), (c = -c), (l -= c))
              : d < 0 && ((s = pt), (d = -d), (h -= d));
          break;
        case dt:
          if (u) {
            if (p.x >= 0 && (w >= E || f >= v)) {
              M = !1;
              break;
            }
            m(et), (c += p.x), (d = c / u);
          } else
            m(nt),
              m(et),
              p.x >= 0 ? (w < E ? (c += p.x) : p.y >= 0 && f >= v && (M = !1)) : (c += p.x),
              p.y >= 0 ? f < v && (d += p.y) : (d += p.y);
          c < 0 && d < 0
            ? ((s = pt), (d = -d), (c = -c), (h -= d), (l -= c))
            : c < 0
              ? ((s = ft), (c = -c), (l -= c))
              : d < 0 && ((s = ut), (d = -d), (h -= d));
          break;
        case Oe:
          this.move(p.x, p.y), (M = !1);
          break;
        case Ne:
          this.zoom(Yi(n), t), (M = !1);
          break;
        case Te:
          if (!p.x || !p.y) {
            M = !1;
            break;
          }
          (y = Be(this.cropper)),
            (l = g.startX - y.left),
            (h = g.startY - y.top),
            (c = r.minWidth),
            (d = r.minHeight),
            p.x > 0 ? (s = p.y > 0 ? dt : ut) : p.x < 0 && ((l -= c), (s = p.y > 0 ? ft : pt)),
            p.y < 0 && (h -= d),
            this.cropped ||
              (W(this.cropBox, z), (this.cropped = !0), this.limited && this.limitCropBox(!0, !0));
          break;
      }
      M &&
        ((r.width = c),
        (r.height = d),
        (r.left = l),
        (r.top = h),
        (this.action = s),
        this.renderCropBox()),
        A(n, function (T) {
          (T.startX = T.endX), (T.startY = T.endY);
        });
    },
  },
  ta = {
    crop: function () {
      return (
        this.ready &&
          !this.cropped &&
          !this.disabled &&
          ((this.cropped = !0),
          this.limitCropBox(!0, !0),
          this.options.modal && R(this.dragBox, Et),
          W(this.cropBox, z),
          this.setCropBoxData(this.initialCropBoxData)),
        this
      );
    },
    reset: function () {
      return (
        this.ready &&
          !this.disabled &&
          ((this.imageData = S({}, this.initialImageData)),
          (this.canvasData = S({}, this.initialCanvasData)),
          (this.cropBoxData = S({}, this.initialCropBoxData)),
          this.renderCanvas(),
          this.cropped && this.renderCropBox()),
        this
      );
    },
    clear: function () {
      return (
        this.cropped &&
          !this.disabled &&
          (S(this.cropBoxData, { left: 0, top: 0, width: 0, height: 0 }),
          (this.cropped = !1),
          this.renderCropBox(),
          this.limitCanvas(!0, !0),
          this.renderCanvas(),
          W(this.dragBox, Et),
          R(this.cropBox, z)),
        this
      );
    },
    replace: function (t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      return (
        !this.disabled &&
          t &&
          (this.isImg && (this.element.src = t),
          i
            ? ((this.url = t),
              (this.image.src = t),
              this.ready &&
                ((this.viewBoxImage.src = t),
                A(this.previews, function (e) {
                  e.getElementsByTagName('img')[0].src = t;
                })))
            : (this.isImg && (this.replaced = !0),
              (this.options.data = null),
              this.uncreate(),
              this.load(t))),
        this
      );
    },
    enable: function () {
      return this.ready && this.disabled && ((this.disabled = !1), W(this.cropper, ne)), this;
    },
    disable: function () {
      return this.ready && !this.disabled && ((this.disabled = !0), R(this.cropper, ne)), this;
    },
    destroy: function () {
      var t = this.element;
      return t[N]
        ? ((t[N] = void 0),
          this.isImg && this.replaced && (t.src = this.originalUrl),
          this.uncreate(),
          this)
        : this;
    },
    move: function (t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        e = this.canvasData,
        o = e.left,
        r = e.top;
      return this.moveTo(At(t) ? t : o + Number(t), At(i) ? i : r + Number(i));
    },
    moveTo: function (t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        e = this.canvasData,
        o = !1;
      return (
        (t = Number(t)),
        (i = Number(i)),
        this.ready &&
          !this.disabled &&
          this.options.movable &&
          (D(t) && ((e.left = t), (o = !0)),
          D(i) && ((e.top = i), (o = !0)),
          o && this.renderCanvas(!0)),
        this
      );
    },
    zoom: function (t, i) {
      var e = this.canvasData;
      return (
        (t = Number(t)),
        t < 0 ? (t = 1 / (1 - t)) : (t = 1 + t),
        this.zoomTo((e.width * t) / e.naturalWidth, null, i)
      );
    },
    zoomTo: function (t, i, e) {
      var o = this.options,
        r = this.canvasData,
        n = r.width,
        s = r.height,
        u = r.naturalWidth,
        l = r.naturalHeight;
      if (((t = Number(t)), t >= 0 && this.ready && !this.disabled && o.zoomable)) {
        var h = u * t,
          c = l * t;
        if (lt(this.element, Wt, { ratio: t, oldRatio: n / u, originalEvent: e }) === !1)
          return this;
        if (e) {
          var d = this.pointers,
            w = Be(this.cropper),
            f = d && Object.keys(d).length ? Xi(d) : { pageX: e.pageX, pageY: e.pageY };
          (r.left -= (h - n) * ((f.pageX - w.left - r.left) / n)),
            (r.top -= (c - s) * ((f.pageY - w.top - r.top) / s));
        } else
          st(i) && D(i.x) && D(i.y)
            ? ((r.left -= (h - n) * ((i.x - r.left) / n)), (r.top -= (c - s) * ((i.y - r.top) / s)))
            : ((r.left -= (h - n) / 2), (r.top -= (c - s) / 2));
        (r.width = h), (r.height = c), this.renderCanvas(!0);
      }
      return this;
    },
    rotate: function (t) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(t));
    },
    rotateTo: function (t) {
      return (
        (t = Number(t)),
        D(t) &&
          this.ready &&
          !this.disabled &&
          this.options.rotatable &&
          ((this.imageData.rotate = t % 360), this.renderCanvas(!0, !0)),
        this
      );
    },
    scaleX: function (t) {
      var i = this.imageData.scaleY;
      return this.scale(t, D(i) ? i : 1);
    },
    scaleY: function (t) {
      var i = this.imageData.scaleX;
      return this.scale(D(i) ? i : 1, t);
    },
    scale: function (t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t,
        e = this.imageData,
        o = !1;
      return (
        (t = Number(t)),
        (i = Number(i)),
        this.ready &&
          !this.disabled &&
          this.options.scalable &&
          (D(t) && ((e.scaleX = t), (o = !0)),
          D(i) && ((e.scaleY = i), (o = !0)),
          o && this.renderCanvas(!0, !0)),
        this
      );
    },
    getData: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
        i = this.options,
        e = this.imageData,
        o = this.canvasData,
        r = this.cropBoxData,
        n;
      if (this.ready && this.cropped) {
        n = { x: r.left - o.left, y: r.top - o.top, width: r.width, height: r.height };
        var s = e.width / e.naturalWidth;
        if (
          (A(n, function (h, c) {
            n[c] = h / s;
          }),
          t)
        ) {
          var u = Math.round(n.y + n.height),
            l = Math.round(n.x + n.width);
          (n.x = Math.round(n.x)),
            (n.y = Math.round(n.y)),
            (n.width = l - n.x),
            (n.height = u - n.y);
        }
      } else n = { x: 0, y: 0, width: 0, height: 0 };
      return (
        i.rotatable && (n.rotate = e.rotate || 0),
        i.scalable && ((n.scaleX = e.scaleX || 1), (n.scaleY = e.scaleY || 1)),
        n
      );
    },
    setData: function (t) {
      var i = this.options,
        e = this.imageData,
        o = this.canvasData,
        r = {};
      if (this.ready && !this.disabled && st(t)) {
        var n = !1;
        i.rotatable && D(t.rotate) && t.rotate !== e.rotate && ((e.rotate = t.rotate), (n = !0)),
          i.scalable &&
            (D(t.scaleX) && t.scaleX !== e.scaleX && ((e.scaleX = t.scaleX), (n = !0)),
            D(t.scaleY) && t.scaleY !== e.scaleY && ((e.scaleY = t.scaleY), (n = !0))),
          n && this.renderCanvas(!0, !0);
        var s = e.width / e.naturalWidth;
        D(t.x) && (r.left = t.x * s + o.left),
          D(t.y) && (r.top = t.y * s + o.top),
          D(t.width) && (r.width = t.width * s),
          D(t.height) && (r.height = t.height * s),
          this.setCropBoxData(r);
      }
      return this;
    },
    getContainerData: function () {
      return this.ready ? S({}, this.containerData) : {};
    },
    getImageData: function () {
      return this.sized ? S({}, this.imageData) : {};
    },
    getCanvasData: function () {
      var t = this.canvasData,
        i = {};
      return (
        this.ready &&
          A(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (e) {
            i[e] = t[e];
          }),
        i
      );
    },
    setCanvasData: function (t) {
      var i = this.canvasData,
        e = i.aspectRatio;
      return (
        this.ready &&
          !this.disabled &&
          st(t) &&
          (D(t.left) && (i.left = t.left),
          D(t.top) && (i.top = t.top),
          D(t.width)
            ? ((i.width = t.width), (i.height = t.width / e))
            : D(t.height) && ((i.height = t.height), (i.width = t.height * e)),
          this.renderCanvas(!0)),
        this
      );
    },
    getCropBoxData: function () {
      var t = this.cropBoxData,
        i;
      return (
        this.ready &&
          this.cropped &&
          (i = { left: t.left, top: t.top, width: t.width, height: t.height }),
        i || {}
      );
    },
    setCropBoxData: function (t) {
      var i = this.cropBoxData,
        e = this.options.aspectRatio,
        o,
        r;
      return (
        this.ready &&
          this.cropped &&
          !this.disabled &&
          st(t) &&
          (D(t.left) && (i.left = t.left),
          D(t.top) && (i.top = t.top),
          D(t.width) && t.width !== i.width && ((o = !0), (i.width = t.width)),
          D(t.height) && t.height !== i.height && ((r = !0), (i.height = t.height)),
          e && (o ? (i.height = i.width / e) : r && (i.width = i.height * e)),
          this.renderCropBox()),
        this
      );
    },
    getCroppedCanvas: function () {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) return null;
      var i = this.canvasData,
        e = Hi(this.image, this.imageData, i, t);
      if (!this.cropped) return e;
      var o = this.getData(t.rounded),
        r = o.x,
        n = o.y,
        s = o.width,
        u = o.height,
        l = e.width / Math.floor(i.naturalWidth);
      l !== 1 && ((r *= l), (n *= l), (s *= l), (u *= l));
      var h = s / u,
        c = K({ aspectRatio: h, width: t.maxWidth || 1 / 0, height: t.maxHeight || 1 / 0 }),
        d = K({ aspectRatio: h, width: t.minWidth || 0, height: t.minHeight || 0 }, 'cover'),
        w = K({
          aspectRatio: h,
          width: t.width || (l !== 1 ? e.width : s),
          height: t.height || (l !== 1 ? e.height : u),
        }),
        f = w.width,
        C = w.height;
      (f = Math.min(c.width, Math.max(d.width, f))),
        (C = Math.min(c.height, Math.max(d.height, C)));
      var x = document.createElement('canvas'),
        E = x.getContext('2d');
      (x.width = ct(f)),
        (x.height = ct(C)),
        (E.fillStyle = t.fillColor || 'transparent'),
        E.fillRect(0, 0, f, C);
      var v = t.imageSmoothingEnabled,
        M = v === void 0 ? !0 : v,
        y = t.imageSmoothingQuality;
      (E.imageSmoothingEnabled = M), y && (E.imageSmoothingQuality = y);
      var g = e.width,
        p = e.height,
        m = r,
        T = n,
        _,
        $,
        Q,
        J,
        j,
        X;
      m <= -s || m > g
        ? ((m = 0), (_ = 0), (Q = 0), (j = 0))
        : m <= 0
          ? ((Q = -m), (m = 0), (_ = Math.min(g, s + m)), (j = _))
          : m <= g && ((Q = 0), (_ = Math.min(s, g - m)), (j = _)),
        _ <= 0 || T <= -u || T > p
          ? ((T = 0), ($ = 0), (J = 0), (X = 0))
          : T <= 0
            ? ((J = -T), (T = 0), ($ = Math.min(p, u + T)), (X = $))
            : T <= p && ((J = 0), ($ = Math.min(u, p - T)), (X = $));
      var I = [m, T, _, $];
      if (j > 0 && X > 0) {
        var tt = f / s;
        I.push(Q * tt, J * tt, j * tt, X * tt);
      }
      return (
        E.drawImage.apply(
          E,
          [e].concat(
            Ee(
              I.map(function (yt) {
                return Math.floor(ct(yt));
              }),
            ),
          ),
        ),
        x
      );
    },
    setAspectRatio: function (t) {
      var i = this.options;
      return (
        !this.disabled &&
          !At(t) &&
          ((i.aspectRatio = Math.max(0, t) || NaN),
          this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())),
        this
      );
    },
    setDragMode: function (t) {
      var i = this.options,
        e = this.dragBox,
        o = this.face;
      if (this.ready && !this.disabled) {
        var r = t === Ft,
          n = i.movable && t === Se;
        (t = r || n ? t : Ae),
          (i.dragMode = t),
          wt(e, bt, t),
          ht(e, _t, r),
          ht(e, Bt, n),
          i.cropBoxMovable || (wt(o, bt, t), ht(o, _t, r), ht(o, Bt, n));
      }
      return this;
    },
  },
  ea = H.Cropper,
  Pe = (function () {
    function a(t) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if ((fi(this, a), !t || !Ni.test(t.tagName)))
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      (this.element = t),
        (this.options = S({}, ge, st(i) && i)),
        (this.cropped = !1),
        (this.disabled = !1),
        (this.pointers = {}),
        (this.ready = !1),
        (this.reloading = !1),
        (this.replaced = !1),
        (this.sized = !1),
        (this.sizing = !1),
        this.init();
    }
    return gi(
      a,
      [
        {
          key: 'init',
          value: function () {
            var i = this.element,
              e = i.tagName.toLowerCase(),
              o;
            if (!i[N]) {
              if (((i[N] = this), e === 'img')) {
                if (
                  ((this.isImg = !0), (o = i.getAttribute('src') || ''), (this.originalUrl = o), !o)
                )
                  return;
                o = i.src;
              } else e === 'canvas' && window.HTMLCanvasElement && (o = i.toDataURL());
              this.load(o);
            }
          },
        },
        {
          key: 'load',
          value: function (i) {
            var e = this;
            if (i) {
              (this.url = i), (this.imageData = {});
              var o = this.element,
                r = this.options;
              if (
                (!r.rotatable && !r.scalable && (r.checkOrientation = !1),
                !r.checkOrientation || !window.ArrayBuffer)
              ) {
                this.clone();
                return;
              }
              if (Ti.test(i)) {
                Oi.test(i) ? this.read(ji(i)) : this.clone();
                return;
              }
              var n = new XMLHttpRequest(),
                s = this.clone.bind(this);
              (this.reloading = !0),
                (this.xhr = n),
                (n.onabort = s),
                (n.onerror = s),
                (n.ontimeout = s),
                (n.onprogress = function () {
                  n.getResponseHeader('content-type') !== fe && n.abort();
                }),
                (n.onload = function () {
                  e.read(n.response);
                }),
                (n.onloadend = function () {
                  (e.reloading = !1), (e.xhr = null);
                }),
                r.checkCrossOrigin && ve(i) && o.crossOrigin && (i = be(i)),
                n.open('GET', i, !0),
                (n.responseType = 'arraybuffer'),
                (n.withCredentials = o.crossOrigin === 'use-credentials'),
                n.send();
            }
          },
        },
        {
          key: 'read',
          value: function (i) {
            var e = this.options,
              o = this.imageData,
              r = Gi(i),
              n = 0,
              s = 1,
              u = 1;
            if (r > 1) {
              this.url = Vi(i, fe);
              var l = Fi(r);
              (n = l.rotate), (s = l.scaleX), (u = l.scaleY);
            }
            e.rotatable && (o.rotate = n),
              e.scalable && ((o.scaleX = s), (o.scaleY = u)),
              this.clone();
          },
        },
        {
          key: 'clone',
          value: function () {
            var i = this.element,
              e = this.url,
              o = i.crossOrigin,
              r = e;
            this.options.checkCrossOrigin && ve(e) && (o || (o = 'anonymous'), (r = be(e))),
              (this.crossOrigin = o),
              (this.crossOriginUrl = r);
            var n = document.createElement('img');
            o && (n.crossOrigin = o),
              (n.src = r || e),
              (n.alt = i.alt || 'The image to crop'),
              (this.image = n),
              (n.onload = this.start.bind(this)),
              (n.onerror = this.stop.bind(this)),
              R(n, oe),
              i.parentNode.insertBefore(n, i.nextSibling);
          },
        },
        {
          key: 'start',
          value: function () {
            var i = this,
              e = this.image;
            (e.onload = null), (e.onerror = null), (this.sizing = !0);
            var o =
                H.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(H.navigator.userAgent),
              r = function (l, h) {
                S(i.imageData, { naturalWidth: l, naturalHeight: h, aspectRatio: l / h }),
                  (i.initialImageData = S({}, i.imageData)),
                  (i.sizing = !1),
                  (i.sized = !0),
                  i.build();
              };
            if (e.naturalWidth && !o) {
              r(e.naturalWidth, e.naturalHeight);
              return;
            }
            var n = document.createElement('img'),
              s = document.body || document.documentElement;
            (this.sizingImage = n),
              (n.onload = function () {
                r(n.width, n.height), o || s.removeChild(n);
              }),
              (n.src = e.src),
              o ||
                ((n.style.cssText =
                  'left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;'),
                s.appendChild(n));
          },
        },
        {
          key: 'stop',
          value: function () {
            var i = this.image;
            (i.onload = null), (i.onerror = null), i.parentNode.removeChild(i), (this.image = null);
          },
        },
        {
          key: 'build',
          value: function () {
            if (!(!this.sized || this.ready)) {
              var i = this.element,
                e = this.options,
                o = this.image,
                r = i.parentNode,
                n = document.createElement('div');
              n.innerHTML = Si;
              var s = n.querySelector('.'.concat(N, '-container')),
                u = s.querySelector('.'.concat(N, '-canvas')),
                l = s.querySelector('.'.concat(N, '-drag-box')),
                h = s.querySelector('.'.concat(N, '-crop-box')),
                c = h.querySelector('.'.concat(N, '-face'));
              (this.container = r),
                (this.cropper = s),
                (this.canvas = u),
                (this.dragBox = l),
                (this.cropBox = h),
                (this.viewBox = s.querySelector('.'.concat(N, '-view-box'))),
                (this.face = c),
                u.appendChild(o),
                R(i, z),
                r.insertBefore(s, i.nextSibling),
                W(o, oe),
                this.initPreview(),
                this.bind(),
                (e.initialAspectRatio = Math.max(0, e.initialAspectRatio) || NaN),
                (e.aspectRatio = Math.max(0, e.aspectRatio) || NaN),
                (e.viewMode = Math.max(0, Math.min(3, Math.round(e.viewMode))) || 0),
                R(h, z),
                e.guides || R(h.getElementsByClassName(''.concat(N, '-dashed')), z),
                e.center || R(h.getElementsByClassName(''.concat(N, '-center')), z),
                e.background && R(s, ''.concat(N, '-bg')),
                e.highlight || R(c, xi),
                e.cropBoxMovable && (R(c, Bt), wt(c, bt, Gt)),
                e.cropBoxResizable ||
                  (R(h.getElementsByClassName(''.concat(N, '-line')), z),
                  R(h.getElementsByClassName(''.concat(N, '-point')), z)),
                this.render(),
                (this.ready = !0),
                this.setDragMode(e.dragMode),
                e.autoCrop && this.crop(),
                this.setData(e.data),
                k(e.ready) && L(i, ue, e.ready, { once: !0 }),
                lt(i, ue);
            }
          },
        },
        {
          key: 'unbuild',
          value: function () {
            if (this.ready) {
              (this.ready = !1), this.unbind(), this.resetPreview();
              var i = this.cropper.parentNode;
              i && i.removeChild(this.cropper), W(this.element, z);
            }
          },
        },
        {
          key: 'uncreate',
          value: function () {
            this.ready
              ? (this.unbuild(), (this.ready = !1), (this.cropped = !1))
              : this.sizing
                ? ((this.sizingImage.onload = null), (this.sizing = !1), (this.sized = !1))
                : this.reloading
                  ? ((this.xhr.onabort = null), this.xhr.abort())
                  : this.image && this.stop();
          },
        },
      ],
      [
        {
          key: 'noConflict',
          value: function () {
            return (window.Cropper = ea), a;
          },
        },
        {
          key: 'setDefaults',
          value: function (i) {
            S(ge, st(i) && i);
          },
        },
      ],
    );
  })();
S(Pe.prototype, qi, Zi, Ki, Qi, Ji, ta);
const ia = ['src', 'alt', 'crossorigin'],
  Ye = Ut({
    name: 'CropperImage',
    __name: 'Cropper',
    props: {
      src: { type: String, required: !0 },
      alt: { type: String },
      circled: { type: Boolean, default: !1 },
      realTimePreview: { type: Boolean, default: !0 },
      height: { type: [String, Number], default: '360px' },
      crossorigin: { type: String, default: void 0 },
      imageStyle: { type: Object, default: () => ({}) },
      options: { type: Object, default: () => ({}) },
    },
    emits: ['cropend', 'ready', 'cropendError'],
    setup(a, { emit: t }) {
      const i = {
          aspectRatio: 1,
          zoomable: !0,
          zoomOnTouch: !0,
          zoomOnWheel: !0,
          cropBoxMovable: !0,
          cropBoxResizable: !0,
          toggleDragModeOnDblclick: !0,
          autoCrop: !0,
          background: !0,
          highlight: !0,
          center: !0,
          responsive: !0,
          restore: !0,
          checkCrossOrigin: !0,
          checkOrientation: !0,
          scalable: !0,
          modal: !0,
          guides: !0,
          movable: !0,
          rotatable: !0,
        },
        e = a,
        o = t,
        r = Ge(),
        n = at(),
        s = at(),
        u = at(!1),
        { prefixCls: l } = $t('cropper-image'),
        h = Fe(C, 80),
        c = F(() => xt({ height: e.height, maxWidth: '100%' }, e.imageStyle)),
        d = F(() => [l, r.class, { [`${l}--circled`]: e.circled }]),
        w = F(() => ({ height: `${e.height}`.replace(/px/, '') + 'px' }));
      Qe(f),
        Je(() => {
          var v;
          (v = s.value) == null || v.destroy();
        });
      function f() {
        return St(this, null, function* () {
          const v = b(n);
          v &&
            (s.value = new Pe(
              v,
              xt(
                ie(xt({}, i), {
                  ready: () => {
                    (u.value = !0), C(), o('ready', s.value);
                  },
                  crop() {
                    h();
                  },
                  zoom() {
                    h();
                  },
                  cropmove() {
                    h();
                  },
                }),
                e.options,
              ),
            ));
        });
      }
      function C() {
        e.realTimePreview && x();
      }
      function x() {
        if (!s.value) return;
        let v = s.value.getData();
        (e.circled ? E() : s.value.getCroppedCanvas()).toBlob((y) => {
          if (!y) return;
          let g = new FileReader();
          g.readAsDataURL(y),
            (g.onloadend = (p) => {
              var m, T;
              o('cropend', {
                imgBase64: (T = (m = p.target) == null ? void 0 : m.result) != null ? T : '',
                imgInfo: v,
              });
            }),
            (g.onerror = () => {
              o('cropendError');
            });
        }, 'image/png');
      }
      function E() {
        const v = s.value.getCroppedCanvas(),
          M = document.createElement('canvas'),
          y = M.getContext('2d'),
          g = v.width,
          p = v.height;
        return (
          (M.width = g),
          (M.height = p),
          (y.imageSmoothingEnabled = !0),
          y.drawImage(v, 0, 0, g, p),
          (y.globalCompositeOperation = 'destination-in'),
          y.beginPath(),
          y.arc(g / 2, p / 2, Math.min(g, p) / 2, 0, 2 * Math.PI, !0),
          y.fill(),
          M
        );
      }
      return (v, M) => (
        q(),
        vt(
          'div',
          { class: Y(d.value), style: ot(w.value) },
          [
            ti(
              U(
                'img',
                {
                  ref_key: 'imgElRef',
                  ref: n,
                  src: a.src,
                  alt: a.alt,
                  crossorigin: a.crossorigin,
                  style: ot(c.value),
                },
                null,
                12,
                ia,
              ),
              [[ei, u.value]],
            ),
          ],
          6,
        )
      );
    },
  }),
  aa = ['src', 'alt'],
  ra = Ut({
    name: 'CropperModal',
    __name: 'CropperModal',
    props: {
      circled: { type: Boolean, default: !0 },
      uploadApi: { type: Function },
      src: { type: String },
      size: { type: Number },
    },
    emits: ['uploadSuccess', 'uploadError', 'register'],
    setup(a, { emit: t }) {
      const i = a,
        e = t;
      let o = '';
      const r = at(i.src || ''),
        n = at(''),
        s = at();
      let u = 1,
        l = 1;
      const { prefixCls: h } = $t('cropper-am'),
        [c, { closeModal: d, setModalProps: w }] = oi(),
        { t: f } = we();
      function C(y) {
        if (i.size && y.size > 1024 * 1024 * i.size)
          return e('uploadError', { msg: f('component.cropper.imageTooBig') }), !1;
        const g = new FileReader();
        return (
          g.readAsDataURL(y),
          (r.value = ''),
          (n.value = ''),
          (g.onload = function (p) {
            var m, T;
            (r.value = (T = (m = p.target) == null ? void 0 : m.result) != null ? T : ''),
              (o = y.name);
          }),
          !1
        );
      }
      function x({ imgBase64: y }) {
        n.value = y;
      }
      function E(y) {
        s.value = y;
      }
      function v(y, g) {
        var p, m;
        y === 'scaleX' && (u = g = u === -1 ? 1 : -1),
          y === 'scaleY' && (l = g = l === -1 ? 1 : -1),
          (m = (p = s == null ? void 0 : s.value) == null ? void 0 : p[y]) == null || m.call(p, g);
      }
      function M() {
        return St(this, null, function* () {
          const y = i.uploadApi;
          if (y && pi(y)) {
            const g = ci(n.value);
            try {
              w({ confirmLoading: !0 });
              const p = yield y({ name: 'file', file: g, filename: o });
              e('uploadSuccess', { source: n.value, data: p.url }), d();
            } finally {
              w({ confirmLoading: !1 });
            }
          }
        });
      }
      return (y, g) => {
        const p = xe('a-button');
        return (
          q(),
          It(
            b(si),
            De(y.$attrs, {
              onRegister: b(c),
              title: b(f)('component.cropper.modalTitle'),
              width: '800px',
              canFullscreen: !1,
              onOk: M,
              okText: b(f)('component.cropper.okText'),
            }),
            {
              default: B(() => [
                U(
                  'div',
                  { class: Y(b(h)) },
                  [
                    U(
                      'div',
                      { class: Y(`${b(h)}-left`) },
                      [
                        U(
                          'div',
                          { class: Y(`${b(h)}-cropper`) },
                          [
                            r.value
                              ? (q(),
                                It(
                                  Ye,
                                  {
                                    key: 0,
                                    src: r.value,
                                    height: '300px',
                                    circled: a.circled,
                                    onCropend: x,
                                    onReady: E,
                                  },
                                  null,
                                  8,
                                  ['src', 'circled'],
                                ))
                              : gt('', !0),
                          ],
                          2,
                        ),
                        U(
                          'div',
                          { class: Y(`${b(h)}-toolbar`) },
                          [
                            O(
                              b(li),
                              { fileList: [], accept: 'image/*', beforeUpload: C },
                              {
                                default: B(() => [
                                  O(
                                    b(V),
                                    {
                                      title: b(f)('component.cropper.selectImage'),
                                      placement: 'bottom',
                                    },
                                    {
                                      default: B(() => [
                                        O(p, {
                                          size: 'small',
                                          preIcon: 'ant-design:upload-outlined',
                                          type: 'primary',
                                        }),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ['title'],
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                            O(b(ui), null, {
                              default: B(() => [
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_reset'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'ant-design:reload-outlined',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[0] || (g[0] = (m) => v('reset')),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_rotate_left'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'ant-design:rotate-left-outlined',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[1] || (g[1] = (m) => v('rotate', -45)),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_rotate_right'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'ant-design:rotate-right-outlined',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[2] || (g[2] = (m) => v('rotate', 45)),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_scale_x'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'vaadin:arrows-long-h',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[3] || (g[3] = (m) => v('scaleX')),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_scale_y'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'vaadin:arrows-long-v',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[4] || (g[4] = (m) => v('scaleY')),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_zoom_in'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'ant-design:zoom-in-outlined',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[5] || (g[5] = (m) => v('zoom', 0.1)),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                                O(
                                  b(V),
                                  {
                                    title: b(f)('component.cropper.btn_zoom_out'),
                                    placement: 'bottom',
                                  },
                                  {
                                    default: B(() => [
                                      O(
                                        p,
                                        {
                                          type: 'primary',
                                          preIcon: 'ant-design:zoom-out-outlined',
                                          size: 'small',
                                          disabled: !r.value,
                                          onClick: g[6] || (g[6] = (m) => v('zoom', -0.1)),
                                        },
                                        null,
                                        8,
                                        ['disabled'],
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  8,
                                  ['title'],
                                ),
                              ]),
                              _: 1,
                            }),
                          ],
                          2,
                        ),
                      ],
                      2,
                    ),
                    U(
                      'div',
                      { class: Y(`${b(h)}-right`) },
                      [
                        U(
                          'div',
                          { class: Y(`${b(h)}-preview`) },
                          [
                            n.value
                              ? (q(),
                                vt(
                                  'img',
                                  { key: 0, src: n.value, alt: b(f)('component.cropper.preview') },
                                  null,
                                  8,
                                  aa,
                                ))
                              : gt('', !0),
                          ],
                          2,
                        ),
                        n.value
                          ? (q(),
                            vt(
                              'div',
                              { key: 0, class: Y(`${b(h)}-group`) },
                              [
                                O(b(Dt), { src: n.value, size: 'large' }, null, 8, ['src']),
                                O(b(Dt), { src: n.value, size: 48 }, null, 8, ['src']),
                                O(b(Dt), { src: n.value, size: 64 }, null, 8, ['src']),
                                O(b(Dt), { src: n.value, size: 80 }, null, 8, ['src']),
                              ],
                              2,
                            ))
                          : gt('', !0),
                      ],
                      2,
                    ),
                  ],
                  2,
                ),
              ]),
              _: 1,
            },
            16,
            ['onRegister', 'title', 'okText'],
          )
        );
      };
    },
  }),
  na = ['src'],
  oa = Ut({
    name: 'CropperAvatar',
    __name: 'CropperAvatar',
    props: {
      width: { type: [String, Number], default: '200px' },
      value: { type: String },
      showBtn: { type: Boolean, default: !0 },
      btnProps: { type: Object },
      btnText: { type: String, default: '' },
      uploadApi: { type: Function },
      size: { type: Number, default: 5 },
    },
    emits: ['update:value', 'change'],
    setup(a, { expose: t, emit: i }) {
      const e = a,
        o = i,
        r = at(e.value || ''),
        { prefixCls: n } = $t('cropper-avatar'),
        [s, { openModal: u, closeModal: l }] = hi(),
        { createMessage: h } = Ze(),
        { t: c } = we(),
        d = F(() => [n]),
        w = F(() => `${e.width}`.replace(/px/, '') + 'px'),
        f = F(() => parseInt(`${e.width}`.replace(/px/, '')) / 2 + 'px'),
        C = F(() => ({ width: b(w) })),
        x = F(() => ({ width: b(w), height: b(w) }));
      ii(() => {
        r.value = e.value || '';
      }),
        ai(
          () => r.value,
          (v) => {
            o('update:value', v);
          },
        );
      function E({ source: v, data: M }) {
        (r.value = v),
          o('change', { source: v, data: M }),
          h.success(c('component.cropper.uploadSuccess'));
      }
      return (
        t({ openModal: u.bind(null, !0), closeModal: l }),
        (v, M) => {
          const y = xe('a-button');
          return (
            q(),
            vt(
              'div',
              { class: Y(d.value), style: ot(C.value) },
              [
                U(
                  'div',
                  {
                    class: Y(`${b(n)}-image-wrapper`),
                    style: ot(x.value),
                    onClick: M[0] || (M[0] = (g) => b(u)()),
                  },
                  [
                    U(
                      'div',
                      { class: Y(`${b(n)}-image-mask`), style: ot(x.value) },
                      [
                        O(
                          qe,
                          {
                            icon: 'ant-design:cloud-upload-outlined',
                            size: f.value,
                            style: ot(x.value),
                            color: '#d6d6d6',
                          },
                          null,
                          8,
                          ['size', 'style'],
                        ),
                      ],
                      6,
                    ),
                    r.value
                      ? (q(), vt('img', { key: 0, src: r.value, alt: 'avatar' }, null, 8, na))
                      : gt('', !0),
                  ],
                  6,
                ),
                a.showBtn
                  ? (q(),
                    It(
                      y,
                      De({ key: 0, class: `${b(n)}-upload-btn`, onClick: b(u) }, a.btnProps),
                      {
                        default: B(() => [
                          ri(ni(a.btnText ? a.btnText : b(c)('component.cropper.selectImage')), 1),
                        ]),
                        _: 1,
                      },
                      16,
                      ['class', 'onClick'],
                    ))
                  : gt('', !0),
                O(
                  ra,
                  {
                    onRegister: b(s),
                    onUploadSuccess: E,
                    uploadApi: a.uploadApi,
                    src: r.value,
                    size: a.size,
                  },
                  null,
                  8,
                  ['onRegister', 'uploadApi', 'src', 'size'],
                ),
              ],
              6,
            )
          );
        }
      );
    },
  }),
  sa = Ke(oa, [['__scopeId', 'data-v-5bf52be3']]),
  fa = ye(Ye),
  ga = ye(sa);
export { ga as C, fa as a };
