var wi = Object.defineProperty,
  Ei = Object.defineProperties;
var ki = Object.getOwnPropertyDescriptors;
var On = Object.getOwnPropertySymbols;
var Si = Object.prototype.hasOwnProperty,
  Li = Object.prototype.propertyIsEnumerable;
var jn = (Ce, Le, ye) =>
    Le in Ce
      ? wi(Ce, Le, { enumerable: !0, configurable: !0, writable: !0, value: ye })
      : (Ce[Le] = ye),
  Mt = (Ce, Le) => {
    for (var ye in Le || (Le = {})) Si.call(Le, ye) && jn(Ce, ye, Le[ye]);
    if (On) for (var ye of On(Le)) Li.call(Le, ye) && jn(Ce, ye, Le[ye]);
    return Ce;
  },
  In = (Ce, Le) => Ei(Ce, ki(Le));
import { aG as Ti, D as Rn, w as Pn } from '../index.js';
import { c as qn, b as Bn } from './antd-BmrhB3rb.js';
import { u as Mi } from './index-RbNU_lzt.js';
import {
  d as Vn,
  K as Ai,
  f as st,
  w as At,
  c as Ci,
  u as lt,
  j as Un,
  Q as zn,
  Z as Wn,
  _ as Gn,
  y as _i,
  a1 as xi,
} from './vue-BjERyvPm.js';
import { o as Kn } from './onMountedOrActivated-DcvTUt7V.js';
navigator.mediaDevices ||
  ((navigator.mediaDevices = {}),
  navigator.mediaDevices.getUserMedia ||
    (navigator.mediaDevices.getUserMedia = function (Ce) {
      const Le = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
      return Le
        ? new Promise(function (ye, He) {
            Le.call(navigator, Ce, ye, He);
          })
        : Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }));
var Fn = { exports: {} };
(function (Ce, Le) {
  (function (ye, He) {
    Ce.exports = He();
  })(qn, () =>
    (() => {
      var ye = {
          471: (P) => {
            var M = function () {
                (this.Diff_Timeout = 1),
                  (this.Diff_EditCost = 4),
                  (this.Match_Threshold = 0.5),
                  (this.Match_Distance = 1e3),
                  (this.Patch_DeleteThreshold = 0.5),
                  (this.Patch_Margin = 4),
                  (this.Match_MaxBits = 32);
              },
              h = -1;
            (M.Diff = function (u, d) {
              return [u, d];
            }),
              (M.prototype.diff_main = function (u, d, l, y) {
                y === void 0 &&
                  (y =
                    this.Diff_Timeout <= 0
                      ? Number.MAX_VALUE
                      : new Date().getTime() + 1e3 * this.Diff_Timeout);
                var c = y;
                if (u == null || d == null) throw new Error('Null input. (diff_main)');
                if (u == d) return u ? [new M.Diff(0, u)] : [];
                l === void 0 && (l = !0);
                var s = l,
                  p = this.diff_commonPrefix(u, d),
                  f = u.substring(0, p);
                (u = u.substring(p)), (d = d.substring(p)), (p = this.diff_commonSuffix(u, d));
                var L = u.substring(u.length - p);
                (u = u.substring(0, u.length - p)), (d = d.substring(0, d.length - p));
                var w = this.diff_compute_(u, d, s, c);
                return (
                  f && w.unshift(new M.Diff(0, f)),
                  L && w.push(new M.Diff(0, L)),
                  this.diff_cleanupMerge(w),
                  w
                );
              }),
              (M.prototype.diff_compute_ = function (u, d, l, y) {
                var c;
                if (!u) return [new M.Diff(1, d)];
                if (!d) return [new M.Diff(h, u)];
                var s = u.length > d.length ? u : d,
                  p = u.length > d.length ? d : u,
                  f = s.indexOf(p);
                if (f != -1)
                  return (
                    (c = [
                      new M.Diff(1, s.substring(0, f)),
                      new M.Diff(0, p),
                      new M.Diff(1, s.substring(f + p.length)),
                    ]),
                    u.length > d.length && (c[0][0] = c[2][0] = h),
                    c
                  );
                if (p.length == 1) return [new M.Diff(h, u), new M.Diff(1, d)];
                var L = this.diff_halfMatch_(u, d);
                if (L) {
                  var w = L[0],
                    T = L[1],
                    g = L[2],
                    k = L[3],
                    m = L[4],
                    _ = this.diff_main(w, g, l, y),
                    D = this.diff_main(T, k, l, y);
                  return _.concat([new M.Diff(0, m)], D);
                }
                return l && u.length > 100 && d.length > 100
                  ? this.diff_lineMode_(u, d, y)
                  : this.diff_bisect_(u, d, y);
              }),
              (M.prototype.diff_lineMode_ = function (u, d, l) {
                var y = this.diff_linesToChars_(u, d);
                (u = y.chars1), (d = y.chars2);
                var c = y.lineArray,
                  s = this.diff_main(u, d, !1, l);
                this.diff_charsToLines_(s, c),
                  this.diff_cleanupSemantic(s),
                  s.push(new M.Diff(0, ''));
                for (var p = 0, f = 0, L = 0, w = '', T = ''; p < s.length; ) {
                  switch (s[p][0]) {
                    case 1:
                      L++, (T += s[p][1]);
                      break;
                    case h:
                      f++, (w += s[p][1]);
                      break;
                    case 0:
                      if (f >= 1 && L >= 1) {
                        s.splice(p - f - L, f + L), (p = p - f - L);
                        for (var g = this.diff_main(w, T, !1, l), k = g.length - 1; k >= 0; k--)
                          s.splice(p, 0, g[k]);
                        p += g.length;
                      }
                      (L = 0), (f = 0), (w = ''), (T = '');
                  }
                  p++;
                }
                return s.pop(), s;
              }),
              (M.prototype.diff_bisect_ = function (u, d, l) {
                for (
                  var y = u.length,
                    c = d.length,
                    s = Math.ceil((y + c) / 2),
                    p = s,
                    f = 2 * s,
                    L = new Array(f),
                    w = new Array(f),
                    T = 0;
                  T < f;
                  T++
                )
                  (L[T] = -1), (w[T] = -1);
                (L[p + 1] = 0), (w[p + 1] = 0);
                for (
                  var g = y - c, k = g % 2 != 0, m = 0, _ = 0, D = 0, I = 0, x = 0;
                  x < s && !(new Date().getTime() > l);
                  x++
                ) {
                  for (var V = -x + m; V <= x - _; V += 2) {
                    for (
                      var ie = p + V,
                        me =
                          (Se =
                            V == -x || (V != x && L[ie - 1] < L[ie + 1])
                              ? L[ie + 1]
                              : L[ie - 1] + 1) - V;
                      Se < y && me < c && u.charAt(Se) == d.charAt(me);

                    )
                      Se++, me++;
                    if (((L[ie] = Se), Se > y)) _ += 2;
                    else if (me > c) m += 2;
                    else if (
                      k &&
                      (ve = p + g - V) >= 0 &&
                      ve < f &&
                      w[ve] != -1 &&
                      Se >= (de = y - w[ve])
                    )
                      return this.diff_bisectSplit_(u, d, Se, me, l);
                  }
                  for (var fe = -x + D; fe <= x - I; fe += 2) {
                    for (
                      var de,
                        ve = p + fe,
                        Te =
                          (de =
                            fe == -x || (fe != x && w[ve - 1] < w[ve + 1])
                              ? w[ve + 1]
                              : w[ve - 1] + 1) - fe;
                      de < y && Te < c && u.charAt(y - de - 1) == d.charAt(c - Te - 1);

                    )
                      de++, Te++;
                    if (((w[ve] = de), de > y)) I += 2;
                    else if (Te > c) D += 2;
                    else if (!k && (ie = p + g - fe) >= 0 && ie < f && L[ie] != -1) {
                      var Se;
                      if (((me = p + (Se = L[ie]) - ie), Se >= (de = y - de)))
                        return this.diff_bisectSplit_(u, d, Se, me, l);
                    }
                  }
                }
                return [new M.Diff(h, u), new M.Diff(1, d)];
              }),
              (M.prototype.diff_bisectSplit_ = function (u, d, l, y, c) {
                var s = u.substring(0, l),
                  p = d.substring(0, y),
                  f = u.substring(l),
                  L = d.substring(y),
                  w = this.diff_main(s, p, !1, c),
                  T = this.diff_main(f, L, !1, c);
                return w.concat(T);
              }),
              (M.prototype.diff_linesToChars_ = function (u, d) {
                var l = [],
                  y = {};
                function c(f) {
                  for (var L = '', w = 0, T = -1, g = l.length; T < f.length - 1; ) {
                    (T = f.indexOf(
                      `
`,
                      w,
                    )) == -1 && (T = f.length - 1);
                    var k = f.substring(w, T + 1);
                    (y.hasOwnProperty ? y.hasOwnProperty(k) : y[k] !== void 0)
                      ? (L += String.fromCharCode(y[k]))
                      : (g == s && ((k = f.substring(w)), (T = f.length)),
                        (L += String.fromCharCode(g)),
                        (y[k] = g),
                        (l[g++] = k)),
                      (w = T + 1);
                  }
                  return L;
                }
                l[0] = '';
                var s = 4e4,
                  p = c(u);
                return (s = 65535), { chars1: p, chars2: c(d), lineArray: l };
              }),
              (M.prototype.diff_charsToLines_ = function (u, d) {
                for (var l = 0; l < u.length; l++) {
                  for (var y = u[l][1], c = [], s = 0; s < y.length; s++) c[s] = d[y.charCodeAt(s)];
                  u[l][1] = c.join('');
                }
              }),
              (M.prototype.diff_commonPrefix = function (u, d) {
                if (!u || !d || u.charAt(0) != d.charAt(0)) return 0;
                for (var l = 0, y = Math.min(u.length, d.length), c = y, s = 0; l < c; )
                  u.substring(s, c) == d.substring(s, c) ? (s = l = c) : (y = c),
                    (c = Math.floor((y - l) / 2 + l));
                return c;
              }),
              (M.prototype.diff_commonSuffix = function (u, d) {
                if (!u || !d || u.charAt(u.length - 1) != d.charAt(d.length - 1)) return 0;
                for (var l = 0, y = Math.min(u.length, d.length), c = y, s = 0; l < c; )
                  u.substring(u.length - c, u.length - s) == d.substring(d.length - c, d.length - s)
                    ? (s = l = c)
                    : (y = c),
                    (c = Math.floor((y - l) / 2 + l));
                return c;
              }),
              (M.prototype.diff_commonOverlap_ = function (u, d) {
                var l = u.length,
                  y = d.length;
                if (l == 0 || y == 0) return 0;
                l > y ? (u = u.substring(l - y)) : l < y && (d = d.substring(0, l));
                var c = Math.min(l, y);
                if (u == d) return c;
                for (var s = 0, p = 1; ; ) {
                  var f = u.substring(c - p),
                    L = d.indexOf(f);
                  if (L == -1) return s;
                  (p += L), (L != 0 && u.substring(c - p) != d.substring(0, p)) || ((s = p), p++);
                }
              }),
              (M.prototype.diff_halfMatch_ = function (u, d) {
                if (this.Diff_Timeout <= 0) return null;
                var l = u.length > d.length ? u : d,
                  y = u.length > d.length ? d : u;
                if (l.length < 4 || 2 * y.length < l.length) return null;
                var c = this;
                function s(m, _, D) {
                  for (
                    var I,
                      x,
                      V,
                      ie,
                      me = m.substring(D, D + Math.floor(m.length / 4)),
                      fe = -1,
                      de = '';
                    (fe = _.indexOf(me, fe + 1)) != -1;

                  ) {
                    var ve = c.diff_commonPrefix(m.substring(D), _.substring(fe)),
                      Te = c.diff_commonSuffix(m.substring(0, D), _.substring(0, fe));
                    de.length < Te + ve &&
                      ((de = _.substring(fe - Te, fe) + _.substring(fe, fe + ve)),
                      (I = m.substring(0, D - Te)),
                      (x = m.substring(D + ve)),
                      (V = _.substring(0, fe - Te)),
                      (ie = _.substring(fe + ve)));
                  }
                  return 2 * de.length >= m.length ? [I, x, V, ie, de] : null;
                }
                var p,
                  f,
                  L,
                  w,
                  T,
                  g = s(l, y, Math.ceil(l.length / 4)),
                  k = s(l, y, Math.ceil(l.length / 2));
                return g || k
                  ? ((p = k ? (g && g[4].length > k[4].length ? g : k) : g),
                    u.length > d.length
                      ? ((f = p[0]), (L = p[1]), (w = p[2]), (T = p[3]))
                      : ((w = p[0]), (T = p[1]), (f = p[2]), (L = p[3])),
                    [f, L, w, T, p[4]])
                  : null;
              }),
              (M.prototype.diff_cleanupSemantic = function (u) {
                for (
                  var d = !1, l = [], y = 0, c = null, s = 0, p = 0, f = 0, L = 0, w = 0;
                  s < u.length;

                )
                  u[s][0] == 0
                    ? ((l[y++] = s), (p = L), (f = w), (L = 0), (w = 0), (c = u[s][1]))
                    : (u[s][0] == 1 ? (L += u[s][1].length) : (w += u[s][1].length),
                      c &&
                        c.length <= Math.max(p, f) &&
                        c.length <= Math.max(L, w) &&
                        (u.splice(l[y - 1], 0, new M.Diff(h, c)),
                        (u[l[y - 1] + 1][0] = 1),
                        y--,
                        (s = --y > 0 ? l[y - 1] : -1),
                        (p = 0),
                        (f = 0),
                        (L = 0),
                        (w = 0),
                        (c = null),
                        (d = !0))),
                    s++;
                for (
                  d && this.diff_cleanupMerge(u), this.diff_cleanupSemanticLossless(u), s = 1;
                  s < u.length;

                ) {
                  if (u[s - 1][0] == h && u[s][0] == 1) {
                    var T = u[s - 1][1],
                      g = u[s][1],
                      k = this.diff_commonOverlap_(T, g),
                      m = this.diff_commonOverlap_(g, T);
                    k >= m
                      ? (k >= T.length / 2 || k >= g.length / 2) &&
                        (u.splice(s, 0, new M.Diff(0, g.substring(0, k))),
                        (u[s - 1][1] = T.substring(0, T.length - k)),
                        (u[s + 1][1] = g.substring(k)),
                        s++)
                      : (m >= T.length / 2 || m >= g.length / 2) &&
                        (u.splice(s, 0, new M.Diff(0, T.substring(0, m))),
                        (u[s - 1][0] = 1),
                        (u[s - 1][1] = g.substring(0, g.length - m)),
                        (u[s + 1][0] = h),
                        (u[s + 1][1] = T.substring(m)),
                        s++),
                      s++;
                  }
                  s++;
                }
              }),
              (M.prototype.diff_cleanupSemanticLossless = function (u) {
                function d(m, _) {
                  if (!m || !_) return 6;
                  var D = m.charAt(m.length - 1),
                    I = _.charAt(0),
                    x = D.match(M.nonAlphaNumericRegex_),
                    V = I.match(M.nonAlphaNumericRegex_),
                    ie = x && D.match(M.whitespaceRegex_),
                    me = V && I.match(M.whitespaceRegex_),
                    fe = ie && D.match(M.linebreakRegex_),
                    de = me && I.match(M.linebreakRegex_),
                    ve = fe && m.match(M.blanklineEndRegex_),
                    Te = de && _.match(M.blanklineStartRegex_);
                  return ve || Te
                    ? 5
                    : fe || de
                      ? 4
                      : x && !ie && me
                        ? 3
                        : ie || me
                          ? 2
                          : x || V
                            ? 1
                            : 0;
                }
                for (var l = 1; l < u.length - 1; ) {
                  if (u[l - 1][0] == 0 && u[l + 1][0] == 0) {
                    var y = u[l - 1][1],
                      c = u[l][1],
                      s = u[l + 1][1],
                      p = this.diff_commonSuffix(y, c);
                    if (p) {
                      var f = c.substring(c.length - p);
                      (y = y.substring(0, y.length - p)),
                        (c = f + c.substring(0, c.length - p)),
                        (s = f + s);
                    }
                    for (
                      var L = y, w = c, T = s, g = d(y, c) + d(c, s);
                      c.charAt(0) === s.charAt(0);

                    ) {
                      (y += c.charAt(0)), (c = c.substring(1) + s.charAt(0)), (s = s.substring(1));
                      var k = d(y, c) + d(c, s);
                      k >= g && ((g = k), (L = y), (w = c), (T = s));
                    }
                    u[l - 1][1] != L &&
                      (L ? (u[l - 1][1] = L) : (u.splice(l - 1, 1), l--),
                      (u[l][1] = w),
                      T ? (u[l + 1][1] = T) : (u.splice(l + 1, 1), l--));
                  }
                  l++;
                }
              }),
              (M.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/),
              (M.whitespaceRegex_ = /\s/),
              (M.linebreakRegex_ = /[\r\n]/),
              (M.blanklineEndRegex_ = /\n\r?\n$/),
              (M.blanklineStartRegex_ = /^\r?\n\r?\n/),
              (M.prototype.diff_cleanupEfficiency = function (u) {
                for (
                  var d = !1, l = [], y = 0, c = null, s = 0, p = !1, f = !1, L = !1, w = !1;
                  s < u.length;

                )
                  u[s][0] == 0
                    ? (u[s][1].length < this.Diff_EditCost && (L || w)
                        ? ((l[y++] = s), (p = L), (f = w), (c = u[s][1]))
                        : ((y = 0), (c = null)),
                      (L = w = !1))
                    : (u[s][0] == h ? (w = !0) : (L = !0),
                      c &&
                        ((p && f && L && w) ||
                          (c.length < this.Diff_EditCost / 2 && p + f + L + w == 3)) &&
                        (u.splice(l[y - 1], 0, new M.Diff(h, c)),
                        (u[l[y - 1] + 1][0] = 1),
                        y--,
                        (c = null),
                        p && f
                          ? ((L = w = !0), (y = 0))
                          : ((s = --y > 0 ? l[y - 1] : -1), (L = w = !1)),
                        (d = !0))),
                    s++;
                d && this.diff_cleanupMerge(u);
              }),
              (M.prototype.diff_cleanupMerge = function (u) {
                u.push(new M.Diff(0, ''));
                for (var d, l = 0, y = 0, c = 0, s = '', p = ''; l < u.length; )
                  switch (u[l][0]) {
                    case 1:
                      c++, (p += u[l][1]), l++;
                      break;
                    case h:
                      y++, (s += u[l][1]), l++;
                      break;
                    case 0:
                      y + c > 1
                        ? (y !== 0 &&
                            c !== 0 &&
                            ((d = this.diff_commonPrefix(p, s)) !== 0 &&
                              (l - y - c > 0 && u[l - y - c - 1][0] == 0
                                ? (u[l - y - c - 1][1] += p.substring(0, d))
                                : (u.splice(0, 0, new M.Diff(0, p.substring(0, d))), l++),
                              (p = p.substring(d)),
                              (s = s.substring(d))),
                            (d = this.diff_commonSuffix(p, s)) !== 0 &&
                              ((u[l][1] = p.substring(p.length - d) + u[l][1]),
                              (p = p.substring(0, p.length - d)),
                              (s = s.substring(0, s.length - d)))),
                          (l -= y + c),
                          u.splice(l, y + c),
                          s.length && (u.splice(l, 0, new M.Diff(h, s)), l++),
                          p.length && (u.splice(l, 0, new M.Diff(1, p)), l++),
                          l++)
                        : l !== 0 && u[l - 1][0] == 0
                          ? ((u[l - 1][1] += u[l][1]), u.splice(l, 1))
                          : l++,
                        (c = 0),
                        (y = 0),
                        (s = ''),
                        (p = '');
                  }
                u[u.length - 1][1] === '' && u.pop();
                var f = !1;
                for (l = 1; l < u.length - 1; )
                  u[l - 1][0] == 0 &&
                    u[l + 1][0] == 0 &&
                    (u[l][1].substring(u[l][1].length - u[l - 1][1].length) == u[l - 1][1]
                      ? ((u[l][1] =
                          u[l - 1][1] + u[l][1].substring(0, u[l][1].length - u[l - 1][1].length)),
                        (u[l + 1][1] = u[l - 1][1] + u[l + 1][1]),
                        u.splice(l - 1, 1),
                        (f = !0))
                      : u[l][1].substring(0, u[l + 1][1].length) == u[l + 1][1] &&
                        ((u[l - 1][1] += u[l + 1][1]),
                        (u[l][1] = u[l][1].substring(u[l + 1][1].length) + u[l + 1][1]),
                        u.splice(l + 1, 1),
                        (f = !0))),
                    l++;
                f && this.diff_cleanupMerge(u);
              }),
              (M.prototype.diff_xIndex = function (u, d) {
                var l,
                  y = 0,
                  c = 0,
                  s = 0,
                  p = 0;
                for (
                  l = 0;
                  l < u.length &&
                  (u[l][0] !== 1 && (y += u[l][1].length),
                  u[l][0] !== h && (c += u[l][1].length),
                  !(y > d));
                  l++
                )
                  (s = y), (p = c);
                return u.length != l && u[l][0] === h ? p : p + (d - s);
              }),
              (M.prototype.diff_prettyHtml = function (u) {
                for (
                  var d = [], l = /&/g, y = /</g, c = />/g, s = /\n/g, p = 0;
                  p < u.length;
                  p++
                ) {
                  var f = u[p][0],
                    L = u[p][1]
                      .replace(l, '&amp;')
                      .replace(y, '&lt;')
                      .replace(c, '&gt;')
                      .replace(s, '&para;<br>');
                  switch (f) {
                    case 1:
                      d[p] = '<ins style="background:#e6ffe6;">' + L + '</ins>';
                      break;
                    case h:
                      d[p] = '<del style="background:#ffe6e6;">' + L + '</del>';
                      break;
                    case 0:
                      d[p] = '<span>' + L + '</span>';
                  }
                }
                return d.join('');
              }),
              (M.prototype.diff_text1 = function (u) {
                for (var d = [], l = 0; l < u.length; l++) u[l][0] !== 1 && (d[l] = u[l][1]);
                return d.join('');
              }),
              (M.prototype.diff_text2 = function (u) {
                for (var d = [], l = 0; l < u.length; l++) u[l][0] !== h && (d[l] = u[l][1]);
                return d.join('');
              }),
              (M.prototype.diff_levenshtein = function (u) {
                for (var d = 0, l = 0, y = 0, c = 0; c < u.length; c++) {
                  var s = u[c][0],
                    p = u[c][1];
                  switch (s) {
                    case 1:
                      l += p.length;
                      break;
                    case h:
                      y += p.length;
                      break;
                    case 0:
                      (d += Math.max(l, y)), (l = 0), (y = 0);
                  }
                }
                return (d += Math.max(l, y));
              }),
              (M.prototype.diff_toDelta = function (u) {
                for (var d = [], l = 0; l < u.length; l++)
                  switch (u[l][0]) {
                    case 1:
                      d[l] = '+' + encodeURI(u[l][1]);
                      break;
                    case h:
                      d[l] = '-' + u[l][1].length;
                      break;
                    case 0:
                      d[l] = '=' + u[l][1].length;
                  }
                return d.join('	').replace(/%20/g, ' ');
              }),
              (M.prototype.diff_fromDelta = function (u, d) {
                for (var l = [], y = 0, c = 0, s = d.split(/\t/g), p = 0; p < s.length; p++) {
                  var f = s[p].substring(1);
                  switch (s[p].charAt(0)) {
                    case '+':
                      try {
                        l[y++] = new M.Diff(1, decodeURI(f));
                      } catch (T) {
                        throw new Error('Illegal escape in diff_fromDelta: ' + f);
                      }
                      break;
                    case '-':
                    case '=':
                      var L = parseInt(f, 10);
                      if (isNaN(L) || L < 0)
                        throw new Error('Invalid number in diff_fromDelta: ' + f);
                      var w = u.substring(c, (c += L));
                      s[p].charAt(0) == '='
                        ? (l[y++] = new M.Diff(0, w))
                        : (l[y++] = new M.Diff(h, w));
                      break;
                    default:
                      if (s[p])
                        throw new Error('Invalid diff operation in diff_fromDelta: ' + s[p]);
                  }
                }
                if (c != u.length)
                  throw new Error(
                    'Delta length (' +
                      c +
                      ') does not equal source text length (' +
                      u.length +
                      ').',
                  );
                return l;
              }),
              (M.prototype.match_main = function (u, d, l) {
                if (u == null || d == null || l == null)
                  throw new Error('Null input. (match_main)');
                return (
                  (l = Math.max(0, Math.min(l, u.length))),
                  u == d
                    ? 0
                    : u.length
                      ? u.substring(l, l + d.length) == d
                        ? l
                        : this.match_bitap_(u, d, l)
                      : -1
                );
              }),
              (M.prototype.match_bitap_ = function (u, d, l) {
                if (d.length > this.Match_MaxBits)
                  throw new Error('Pattern too long for this browser.');
                var y = this.match_alphabet_(d),
                  c = this;
                function s(me, fe) {
                  var de = me / d.length,
                    ve = Math.abs(l - fe);
                  return c.Match_Distance ? de + ve / c.Match_Distance : ve ? 1 : de;
                }
                var p = this.Match_Threshold,
                  f = u.indexOf(d, l);
                f != -1 &&
                  ((p = Math.min(s(0, f), p)),
                  (f = u.lastIndexOf(d, l + d.length)) != -1 && (p = Math.min(s(0, f), p)));
                var L,
                  w,
                  T = 1 << (d.length - 1);
                f = -1;
                for (var g, k = d.length + u.length, m = 0; m < d.length; m++) {
                  for (L = 0, w = k; L < w; )
                    s(m, l + w) <= p ? (L = w) : (k = w), (w = Math.floor((k - L) / 2 + L));
                  k = w;
                  var _ = Math.max(1, l - w + 1),
                    D = Math.min(l + w, u.length) + d.length,
                    I = Array(D + 2);
                  I[D + 1] = (1 << m) - 1;
                  for (var x = D; x >= _; x--) {
                    var V = y[u.charAt(x - 1)];
                    if (
                      ((I[x] =
                        m === 0
                          ? ((I[x + 1] << 1) | 1) & V
                          : (((I[x + 1] << 1) | 1) & V) | ((g[x + 1] | g[x]) << 1) | 1 | g[x + 1]),
                      I[x] & T)
                    ) {
                      var ie = s(m, x - 1);
                      if (ie <= p) {
                        if (((p = ie), !((f = x - 1) > l))) break;
                        _ = Math.max(1, 2 * l - f);
                      }
                    }
                  }
                  if (s(m + 1, l) > p) break;
                  g = I;
                }
                return f;
              }),
              (M.prototype.match_alphabet_ = function (u) {
                for (var d = {}, l = 0; l < u.length; l++) d[u.charAt(l)] = 0;
                for (l = 0; l < u.length; l++) d[u.charAt(l)] |= 1 << (u.length - l - 1);
                return d;
              }),
              (M.prototype.patch_addContext_ = function (u, d) {
                if (d.length != 0) {
                  if (u.start2 === null) throw Error('patch not initialized');
                  for (
                    var l = d.substring(u.start2, u.start2 + u.length1), y = 0;
                    d.indexOf(l) != d.lastIndexOf(l) &&
                    l.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;

                  )
                    (y += this.Patch_Margin),
                      (l = d.substring(u.start2 - y, u.start2 + u.length1 + y));
                  y += this.Patch_Margin;
                  var c = d.substring(u.start2 - y, u.start2);
                  c && u.diffs.unshift(new M.Diff(0, c));
                  var s = d.substring(u.start2 + u.length1, u.start2 + u.length1 + y);
                  s && u.diffs.push(new M.Diff(0, s)),
                    (u.start1 -= c.length),
                    (u.start2 -= c.length),
                    (u.length1 += c.length + s.length),
                    (u.length2 += c.length + s.length);
                }
              }),
              (M.prototype.patch_make = function (u, d, l) {
                var y, c;
                if (typeof u == 'string' && typeof d == 'string' && l === void 0)
                  (y = u),
                    (c = this.diff_main(y, d, !0)).length > 2 &&
                      (this.diff_cleanupSemantic(c), this.diff_cleanupEfficiency(c));
                else if (u && typeof u == 'object' && d === void 0 && l === void 0)
                  (c = u), (y = this.diff_text1(c));
                else if (typeof u == 'string' && d && typeof d == 'object' && l === void 0)
                  (y = u), (c = d);
                else {
                  if (typeof u != 'string' || typeof d != 'string' || !l || typeof l != 'object')
                    throw new Error('Unknown call format to patch_make.');
                  (y = u), (c = l);
                }
                if (c.length === 0) return [];
                for (
                  var s = [], p = new M.patch_obj(), f = 0, L = 0, w = 0, T = y, g = y, k = 0;
                  k < c.length;
                  k++
                ) {
                  var m = c[k][0],
                    _ = c[k][1];
                  switch ((f || m === 0 || ((p.start1 = L), (p.start2 = w)), m)) {
                    case 1:
                      (p.diffs[f++] = c[k]),
                        (p.length2 += _.length),
                        (g = g.substring(0, w) + _ + g.substring(w));
                      break;
                    case h:
                      (p.length1 += _.length),
                        (p.diffs[f++] = c[k]),
                        (g = g.substring(0, w) + g.substring(w + _.length));
                      break;
                    case 0:
                      _.length <= 2 * this.Patch_Margin && f && c.length != k + 1
                        ? ((p.diffs[f++] = c[k]), (p.length1 += _.length), (p.length2 += _.length))
                        : _.length >= 2 * this.Patch_Margin &&
                          f &&
                          (this.patch_addContext_(p, T),
                          s.push(p),
                          (p = new M.patch_obj()),
                          (f = 0),
                          (T = g),
                          (L = w));
                  }
                  m !== 1 && (L += _.length), m !== h && (w += _.length);
                }
                return f && (this.patch_addContext_(p, T), s.push(p)), s;
              }),
              (M.prototype.patch_deepCopy = function (u) {
                for (var d = [], l = 0; l < u.length; l++) {
                  var y = u[l],
                    c = new M.patch_obj();
                  c.diffs = [];
                  for (var s = 0; s < y.diffs.length; s++)
                    c.diffs[s] = new M.Diff(y.diffs[s][0], y.diffs[s][1]);
                  (c.start1 = y.start1),
                    (c.start2 = y.start2),
                    (c.length1 = y.length1),
                    (c.length2 = y.length2),
                    (d[l] = c);
                }
                return d;
              }),
              (M.prototype.patch_apply = function (u, d) {
                if (u.length == 0) return [d, []];
                u = this.patch_deepCopy(u);
                var l = this.patch_addPadding(u);
                (d = l + d + l), this.patch_splitMax(u);
                for (var y = 0, c = [], s = 0; s < u.length; s++) {
                  var p,
                    f,
                    L = u[s].start2 + y,
                    w = this.diff_text1(u[s].diffs),
                    T = -1;
                  if (
                    (w.length > this.Match_MaxBits
                      ? (p = this.match_main(d, w.substring(0, this.Match_MaxBits), L)) != -1 &&
                        ((T = this.match_main(
                          d,
                          w.substring(w.length - this.Match_MaxBits),
                          L + w.length - this.Match_MaxBits,
                        )) == -1 ||
                          p >= T) &&
                        (p = -1)
                      : (p = this.match_main(d, w, L)),
                    p == -1)
                  )
                    (c[s] = !1), (y -= u[s].length2 - u[s].length1);
                  else if (
                    ((c[s] = !0),
                    (y = p - L),
                    w ==
                      (f =
                        T == -1
                          ? d.substring(p, p + w.length)
                          : d.substring(p, T + this.Match_MaxBits)))
                  )
                    d = d.substring(0, p) + this.diff_text2(u[s].diffs) + d.substring(p + w.length);
                  else {
                    var g = this.diff_main(w, f, !1);
                    if (
                      w.length > this.Match_MaxBits &&
                      this.diff_levenshtein(g) / w.length > this.Patch_DeleteThreshold
                    )
                      c[s] = !1;
                    else {
                      this.diff_cleanupSemanticLossless(g);
                      for (var k, m = 0, _ = 0; _ < u[s].diffs.length; _++) {
                        var D = u[s].diffs[_];
                        D[0] !== 0 && (k = this.diff_xIndex(g, m)),
                          D[0] === 1
                            ? (d = d.substring(0, p + k) + D[1] + d.substring(p + k))
                            : D[0] === h &&
                              (d =
                                d.substring(0, p + k) +
                                d.substring(p + this.diff_xIndex(g, m + D[1].length))),
                          D[0] !== h && (m += D[1].length);
                      }
                    }
                  }
                }
                return [(d = d.substring(l.length, d.length - l.length)), c];
              }),
              (M.prototype.patch_addPadding = function (u) {
                for (var d = this.Patch_Margin, l = '', y = 1; y <= d; y++)
                  l += String.fromCharCode(y);
                for (y = 0; y < u.length; y++) (u[y].start1 += d), (u[y].start2 += d);
                var c = u[0],
                  s = c.diffs;
                if (s.length == 0 || s[0][0] != 0)
                  s.unshift(new M.Diff(0, l)),
                    (c.start1 -= d),
                    (c.start2 -= d),
                    (c.length1 += d),
                    (c.length2 += d);
                else if (d > s[0][1].length) {
                  var p = d - s[0][1].length;
                  (s[0][1] = l.substring(s[0][1].length) + s[0][1]),
                    (c.start1 -= p),
                    (c.start2 -= p),
                    (c.length1 += p),
                    (c.length2 += p);
                }
                return (
                  (s = (c = u[u.length - 1]).diffs).length == 0 || s[s.length - 1][0] != 0
                    ? (s.push(new M.Diff(0, l)), (c.length1 += d), (c.length2 += d))
                    : d > s[s.length - 1][1].length &&
                      ((p = d - s[s.length - 1][1].length),
                      (s[s.length - 1][1] += l.substring(0, p)),
                      (c.length1 += p),
                      (c.length2 += p)),
                  l
                );
              }),
              (M.prototype.patch_splitMax = function (u) {
                for (var d = this.Match_MaxBits, l = 0; l < u.length; l++)
                  if (!(u[l].length1 <= d)) {
                    var y = u[l];
                    u.splice(l--, 1);
                    for (var c = y.start1, s = y.start2, p = ''; y.diffs.length !== 0; ) {
                      var f = new M.patch_obj(),
                        L = !0;
                      for (
                        f.start1 = c - p.length,
                          f.start2 = s - p.length,
                          p !== '' &&
                            ((f.length1 = f.length2 = p.length), f.diffs.push(new M.Diff(0, p)));
                        y.diffs.length !== 0 && f.length1 < d - this.Patch_Margin;

                      ) {
                        var w = y.diffs[0][0],
                          T = y.diffs[0][1];
                        w === 1
                          ? ((f.length2 += T.length),
                            (s += T.length),
                            f.diffs.push(y.diffs.shift()),
                            (L = !1))
                          : w === h && f.diffs.length == 1 && f.diffs[0][0] == 0 && T.length > 2 * d
                            ? ((f.length1 += T.length),
                              (c += T.length),
                              (L = !1),
                              f.diffs.push(new M.Diff(w, T)),
                              y.diffs.shift())
                            : ((T = T.substring(0, d - f.length1 - this.Patch_Margin)),
                              (f.length1 += T.length),
                              (c += T.length),
                              w === 0 ? ((f.length2 += T.length), (s += T.length)) : (L = !1),
                              f.diffs.push(new M.Diff(w, T)),
                              T == y.diffs[0][1]
                                ? y.diffs.shift()
                                : (y.diffs[0][1] = y.diffs[0][1].substring(T.length)));
                      }
                      p = (p = this.diff_text2(f.diffs)).substring(p.length - this.Patch_Margin);
                      var g = this.diff_text1(y.diffs).substring(0, this.Patch_Margin);
                      g !== '' &&
                        ((f.length1 += g.length),
                        (f.length2 += g.length),
                        f.diffs.length !== 0 && f.diffs[f.diffs.length - 1][0] === 0
                          ? (f.diffs[f.diffs.length - 1][1] += g)
                          : f.diffs.push(new M.Diff(0, g))),
                        L || u.splice(++l, 0, f);
                    }
                  }
              }),
              (M.prototype.patch_toText = function (u) {
                for (var d = [], l = 0; l < u.length; l++) d[l] = u[l];
                return d.join('');
              }),
              (M.prototype.patch_fromText = function (u) {
                var d = [];
                if (!u) return d;
                for (
                  var l = u.split(`
`),
                    y = 0,
                    c = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/;
                  y < l.length;

                ) {
                  var s = l[y].match(c);
                  if (!s) throw new Error('Invalid patch string: ' + l[y]);
                  var p = new M.patch_obj();
                  for (
                    d.push(p),
                      p.start1 = parseInt(s[1], 10),
                      s[2] === ''
                        ? (p.start1--, (p.length1 = 1))
                        : s[2] == '0'
                          ? (p.length1 = 0)
                          : (p.start1--, (p.length1 = parseInt(s[2], 10))),
                      p.start2 = parseInt(s[3], 10),
                      s[4] === ''
                        ? (p.start2--, (p.length2 = 1))
                        : s[4] == '0'
                          ? (p.length2 = 0)
                          : (p.start2--, (p.length2 = parseInt(s[4], 10))),
                      y++;
                    y < l.length;

                  ) {
                    var f = l[y].charAt(0);
                    try {
                      var L = decodeURI(l[y].substring(1));
                    } catch (w) {
                      throw new Error('Illegal escape in patch_fromText: ' + L);
                    }
                    if (f == '-') p.diffs.push(new M.Diff(h, L));
                    else if (f == '+') p.diffs.push(new M.Diff(1, L));
                    else if (f == ' ') p.diffs.push(new M.Diff(0, L));
                    else {
                      if (f == '@') break;
                      if (f !== '') throw new Error('Invalid patch mode "' + f + '" in: ' + L);
                    }
                    y++;
                  }
                }
                return d;
              }),
              ((M.patch_obj = function () {
                (this.diffs = []),
                  (this.start1 = null),
                  (this.start2 = null),
                  (this.length1 = 0),
                  (this.length2 = 0);
              }).prototype.toString = function () {
                for (
                  var u,
                    d = [
                      '@@ -' +
                        (this.length1 === 0
                          ? this.start1 + ',0'
                          : this.length1 == 1
                            ? this.start1 + 1
                            : this.start1 + 1 + ',' + this.length1) +
                        ' +' +
                        (this.length2 === 0
                          ? this.start2 + ',0'
                          : this.length2 == 1
                            ? this.start2 + 1
                            : this.start2 + 1 + ',' + this.length2) +
                        ` @@
`,
                    ],
                    l = 0;
                  l < this.diffs.length;
                  l++
                ) {
                  switch (this.diffs[l][0]) {
                    case 1:
                      u = '+';
                      break;
                    case h:
                      u = '-';
                      break;
                    case 0:
                      u = ' ';
                  }
                  d[l + 1] =
                    u +
                    encodeURI(this.diffs[l][1]) +
                    `
`;
                }
                return d.join('').replace(/%20/g, ' ');
              }),
              (P.exports = M),
              (P.exports.diff_match_patch = M),
              (P.exports.DIFF_DELETE = h),
              (P.exports.DIFF_INSERT = 1),
              (P.exports.DIFF_EQUAL = 0);
          },
          872: (P, M, h) => {
            h.d(M, { default: () => ee });
            var u = h(478),
              d = h(156),
              l = h(314),
              y = h(730),
              c = h(66),
              s = h(218),
              p = h(702),
              f = function (N) {
                N === void 0 && (N = document);
                var Z = function (j) {
                  var O = document.createElement('img');
                  (O.src = j.getAttribute('data-src')),
                    O.addEventListener('load', function () {
                      j.getAttribute('style') ||
                        j.getAttribute('class') ||
                        j.getAttribute('width') ||
                        j.getAttribute('height') ||
                        (O.naturalHeight > O.naturalWidth &&
                          O.naturalWidth / O.naturalHeight <
                            document.querySelector('.vditor-reset').clientWidth /
                              (window.innerHeight - 40) &&
                          O.naturalHeight > window.innerHeight - 40 &&
                          (j.style.height = window.innerHeight - 40 + 'px')),
                        (j.src = O.src);
                    }),
                    j.removeAttribute('data-src');
                };
                if (!('IntersectionObserver' in window))
                  return (
                    N.querySelectorAll('img').forEach(function (j) {
                      j.getAttribute('data-src') && Z(j);
                    }),
                    !1
                  );
                window.vditorImageIntersectionObserver
                  ? (window.vditorImageIntersectionObserver.disconnect(),
                    N.querySelectorAll('img').forEach(function (j) {
                      window.vditorImageIntersectionObserver.observe(j);
                    }))
                  : ((window.vditorImageIntersectionObserver = new IntersectionObserver(function (
                      j,
                    ) {
                      j.forEach(function (O) {
                        (O.isIntersecting === void 0
                          ? O.intersectionRatio !== 0
                          : O.isIntersecting) &&
                          O.target.getAttribute('data-src') &&
                          Z(O.target);
                      });
                    })),
                    N.querySelectorAll('img').forEach(function (j) {
                      window.vditorImageIntersectionObserver.observe(j);
                    }));
              },
              L = h(466),
              w = h(554),
              T = h(40),
              g = h(563),
              k = h(749),
              m = h(818),
              _ = h(408),
              D = h(54),
              I = h(227),
              x = h(526),
              V = h(827),
              ie = h(640),
              me = h(895),
              fe = h(393),
              de = function (N, Z) {
                if (
                  (Z === void 0 && (Z = 'zh_CN'),
                  typeof speechSynthesis != 'undefined' &&
                    typeof SpeechSynthesisUtterance != 'undefined')
                ) {
                  var j = function () {
                      var ue, he;
                      return (
                        speechSynthesis.getVoices().forEach(function (oe) {
                          oe.lang === Z.replace('_', '-') && (ue = oe), oe.default && (he = oe);
                        }),
                        ue || (ue = he),
                        ue
                      );
                    },
                    O = '<svg><use xlink:href="#vditor-icon-play"></use></svg>',
                    re = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
                  document.getElementById('vditorIconScript') ||
                    ((O =
                      '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>'),
                    (re =
                      '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>'));
                  var $ = document.querySelector('.vditor-speech');
                  $ ||
                    ((($ = document.createElement('button')).className = 'vditor-speech'),
                    N.insertAdjacentElement('beforeend', $),
                    speechSynthesis.onvoiceschanged !== void 0 &&
                      (speechSynthesis.onvoiceschanged = j));
                  var te = j(),
                    X = new SpeechSynthesisUtterance();
                  (X.voice = te),
                    (X.onend = X.onerror =
                      function () {
                        ($.style.display = 'none'),
                          speechSynthesis.cancel(),
                          $.classList.remove('vditor-speech--current'),
                          ($.innerHTML = O);
                      }),
                    N.addEventListener(
                      window.ontouchstart !== void 0 ? 'touchend' : 'click',
                      function (ue) {
                        var he = ue.target;
                        if (
                          he.classList.contains('vditor-speech') ||
                          he.parentElement.classList.contains('vditor-speech')
                        )
                          return (
                            $.classList.contains('vditor-speech--current')
                              ? speechSynthesis.speaking &&
                                (speechSynthesis.paused
                                  ? (speechSynthesis.resume(), ($.innerHTML = re))
                                  : (speechSynthesis.pause(), ($.innerHTML = O)))
                              : ((X.text = $.getAttribute('data-text')),
                                speechSynthesis.speak(X),
                                $.classList.add('vditor-speech--current'),
                                ($.innerHTML = re)),
                            (0, fe.Hc)(window.vditorSpeechRange),
                            void N.focus()
                          );
                        if (
                          (($.style.display = 'none'),
                          speechSynthesis.cancel(),
                          $.classList.remove('vditor-speech--current'),
                          ($.innerHTML = O),
                          getSelection().rangeCount !== 0)
                        ) {
                          var oe = getSelection().getRangeAt(0),
                            We = oe.toString().trim();
                          if (We) {
                            window.vditorSpeechRange = oe.cloneRange();
                            var Ze = oe.getBoundingClientRect();
                            ($.innerHTML = O),
                              ($.style.display = 'block'),
                              ($.style.top =
                                Ze.top +
                                Ze.height +
                                document.querySelector('html').scrollTop -
                                20 +
                                'px'),
                              window.ontouchstart !== void 0
                                ? ($.style.left =
                                    ue.changedTouches[ue.changedTouches.length - 1].pageX +
                                    2 +
                                    'px')
                                : ($.style.left = ue.clientX + 2 + 'px'),
                              $.setAttribute('data-text', We);
                          }
                        }
                      },
                    );
                }
              },
              ve = function (N, Z, j, O) {
                return new (j || (j = Promise))(function (re, $) {
                  function te(he) {
                    try {
                      ue(O.next(he));
                    } catch (oe) {
                      $(oe);
                    }
                  }
                  function X(he) {
                    try {
                      ue(O.throw(he));
                    } catch (oe) {
                      $(oe);
                    }
                  }
                  function ue(he) {
                    var oe;
                    he.done
                      ? re(he.value)
                      : ((oe = he.value),
                        oe instanceof j
                          ? oe
                          : new j(function (We) {
                              We(oe);
                            })).then(te, X);
                  }
                  ue((O = O.apply(N, Z || [])).next());
                });
              },
              Te = function (N, Z) {
                var j,
                  O,
                  re,
                  $,
                  te = {
                    label: 0,
                    sent: function () {
                      if (1 & re[0]) throw re[1];
                      return re[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  ($ = { next: X(0), throw: X(1), return: X(2) }),
                  typeof Symbol == 'function' &&
                    ($[Symbol.iterator] = function () {
                      return this;
                    }),
                  $
                );
                function X(ue) {
                  return function (he) {
                    return (function (oe) {
                      if (j) throw new TypeError('Generator is already executing.');
                      for (; te; )
                        try {
                          if (
                            ((j = 1),
                            O &&
                              (re =
                                2 & oe[0]
                                  ? O.return
                                  : oe[0]
                                    ? O.throw || ((re = O.return) && re.call(O), 0)
                                    : O.next) &&
                              !(re = re.call(O, oe[1])).done)
                          )
                            return re;
                          switch (((O = 0), re && (oe = [2 & oe[0], re.value]), oe[0])) {
                            case 0:
                            case 1:
                              re = oe;
                              break;
                            case 4:
                              return te.label++, { value: oe[1], done: !1 };
                            case 5:
                              te.label++, (O = oe[1]), (oe = [0]);
                              continue;
                            case 7:
                              (oe = te.ops.pop()), te.trys.pop();
                              continue;
                            default:
                              if (
                                ((re = te.trys),
                                !(
                                  (re = re.length > 0 && re[re.length - 1]) ||
                                  (oe[0] !== 6 && oe[0] !== 2)
                                ))
                              ) {
                                te = 0;
                                continue;
                              }
                              if (oe[0] === 3 && (!re || (oe[1] > re[0] && oe[1] < re[3]))) {
                                te.label = oe[1];
                                break;
                              }
                              if (oe[0] === 6 && te.label < re[1]) {
                                (te.label = re[1]), (re = oe);
                                break;
                              }
                              if (re && te.label < re[2]) {
                                (te.label = re[2]), te.ops.push(oe);
                                break;
                              }
                              re[2] && te.ops.pop(), te.trys.pop();
                              continue;
                          }
                          oe = Z.call(N, te);
                        } catch (We) {
                          (oe = [6, We]), (O = 0);
                        } finally {
                          j = re = 0;
                        }
                      if (5 & oe[0]) throw oe[1];
                      return { value: oe[0] ? oe[1] : void 0, done: !0 };
                    })([ue, he]);
                  };
                }
              },
              Se = function (N) {
                var Z,
                  j = {
                    anchor: 0,
                    cdn: D.g.CDN,
                    customEmoji: {},
                    emojiPath: D.g.CDN + '/dist/images/emoji',
                    hljs: D.g.HLJS_OPTIONS,
                    icon: 'ant',
                    lang: 'zh_CN',
                    markdown: D.g.MARKDOWN_OPTIONS,
                    math: D.g.MATH_OPTIONS,
                    mode: 'light',
                    speech: { enable: !1 },
                    render: { media: { enable: !0 } },
                    theme: D.g.THEME_OPTIONS,
                  };
                return (
                  N.cdn &&
                    ((!((Z = N.theme) === null || Z === void 0) && Z.path) ||
                      (j.theme.path = N.cdn + '/dist/css/content-theme'),
                    N.emojiPath || (j.emojiPath = N.cdn + '/dist/images/emoji')),
                  (0, ie.T)(j, N)
                );
              },
              Ie = function (N, Z) {
                var j = Se(Z);
                return (0, x.G)(j.cdn + '/dist/js/lute/lute.min.js', 'vditorLuteScript').then(
                  function () {
                    var O = (0, me.X)({
                      autoSpace: j.markdown.autoSpace,
                      gfmAutoLink: j.markdown.gfmAutoLink,
                      codeBlockPreview: j.markdown.codeBlockPreview,
                      emojiSite: j.emojiPath,
                      emojis: j.customEmoji,
                      fixTermTypo: j.markdown.fixTermTypo,
                      footnotes: j.markdown.footnotes,
                      headingAnchor: j.anchor !== 0,
                      inlineMathDigit: j.math.inlineDigit,
                      lazyLoadImage: j.lazyLoadImage,
                      linkBase: j.markdown.linkBase,
                      linkPrefix: j.markdown.linkPrefix,
                      listStyle: j.markdown.listStyle,
                      mark: j.markdown.mark,
                      mathBlockPreview: j.markdown.mathBlockPreview,
                      paragraphBeginningSpace: j.markdown.paragraphBeginningSpace,
                      sanitize: j.markdown.sanitize,
                      toc: j.markdown.toc,
                    });
                    return (
                      Z != null &&
                        Z.renderers &&
                        O.SetJSRenderers({ renderers: { Md2HTML: Z.renderers } }),
                      O.SetHeadingID(!0),
                      O.Md2HTML(N)
                    );
                  },
                );
              },
              be = function (N, Z, j) {
                return ve(void 0, void 0, void 0, function () {
                  var O, re, $;
                  return Te(this, function (te) {
                    switch (te.label) {
                      case 0:
                        return (O = Se(j)), [4, Ie(Z, O)];
                      case 1:
                        if (
                          ((re = te.sent()),
                          O.transform && (re = O.transform(re)),
                          (N.innerHTML = re),
                          N.classList.add('vditor-reset'),
                          O.i18n)
                        )
                          return [3, 5];
                        if (
                          [
                            'en_US',
                            'fr_FR',
                            'pt_BR',
                            'ja_JP',
                            'ko_KR',
                            'ru_RU',
                            'sv_SE',
                            'zh_CN',
                            'zh_TW',
                          ].includes(O.lang)
                        )
                          return [3, 2];
                        throw new Error(
                          'options.lang error, see https://ld246.com/article/1549638745630#options',
                        );
                      case 2:
                        return (
                          ($ = 'vditorI18nScript' + O.lang),
                          document
                            .querySelectorAll('head script[id^="vditorI18nScript"]')
                            .forEach(function (ue) {
                              ue.id !== $ && document.head.removeChild(ue);
                            }),
                          [4, (0, x.G)(O.cdn + '/dist/js/i18n/' + O.lang + '.js', $)]
                        );
                      case 3:
                        te.sent(), (te.label = 4);
                      case 4:
                        return [3, 6];
                      case 5:
                        (window.VditorI18n = O.i18n), (te.label = 6);
                      case 6:
                        return O.icon
                          ? [
                              4,
                              (0, x.G)(
                                O.cdn + '/dist/js/icons/' + O.icon + '.js',
                                'vditorIconScript',
                              ),
                            ]
                          : [3, 8];
                      case 7:
                        te.sent(), (te.label = 8);
                      case 8:
                        return (
                          (0, I.Z)(O.theme.current, O.theme.path),
                          O.anchor === 1 && N.classList.add('vditor-reset--anchor'),
                          (0, y.O)(N, O.hljs),
                          (0, p.s)(O.hljs, N, O.cdn),
                          (0, L.H)(N, { cdn: O.cdn, math: O.math }),
                          (0, T.i)(N, O.cdn, O.mode),
                          (0, g.K)(N, O.cdn, O.mode),
                          (0, c.P)(N, O.cdn),
                          (0, s.v)(N, O.cdn),
                          (0, l.p)(N, O.cdn, O.mode),
                          (0, k.P)(N, O.cdn, O.mode),
                          (0, _.B)(N, O.cdn),
                          (0, u.Q)(N, O.cdn),
                          O.render.media.enable && (0, w.Y)(N),
                          O.speech.enable && de(N),
                          O.anchor !== 0 &&
                            ((X = O.anchor),
                            document.querySelectorAll('.vditor-anchor').forEach(function (ue) {
                              X === 1 && ue.classList.add('vditor-anchor--left'),
                                (ue.onclick = function () {
                                  var he = ue.getAttribute('href').substr(1),
                                    oe = document.getElementById('vditorAnchor-' + he).offsetTop;
                                  document.querySelector('html').scrollTop = oe;
                                });
                            }),
                            (window.onhashchange = function () {
                              var ue = document.getElementById(
                                'vditorAnchor-' +
                                  decodeURIComponent(window.location.hash.substr(1)),
                              );
                              ue && (document.querySelector('html').scrollTop = ue.offsetTop);
                            })),
                          O.after && O.after(),
                          O.lazyLoadImage && f(N),
                          N.addEventListener('click', function (ue) {
                            var he = (0, V.lG)(ue.target, 'SPAN');
                            if (he && (0, V.fb)(he, 'vditor-toc')) {
                              var oe = N.querySelector('#' + he.getAttribute('data-target-id'));
                              oe && window.scrollTo(window.scrollX, oe.offsetTop);
                            }
                          }),
                          [2]
                        );
                    }
                    var X;
                  });
                });
              },
              A = h(863),
              ge = h(312);
            const ee = (function () {
              function N() {}
              return (
                (N.adapterRender = d),
                (N.previewImage = A.E),
                (N.codeRender = y.O),
                (N.graphvizRender = s.v),
                (N.highlightRender = p.s),
                (N.mathRender = L.H),
                (N.mermaidRender = T.i),
                (N.markmapRender = g.K),
                (N.flowchartRender = c.P),
                (N.chartRender = l.p),
                (N.abcRender = u.Q),
                (N.mindmapRender = k.P),
                (N.plantumlRender = _.B),
                (N.outlineRender = m.k),
                (N.mediaRender = w.Y),
                (N.speechRender = de),
                (N.lazyLoadImageRender = f),
                (N.md2html = Ie),
                (N.preview = be),
                (N.setCodeTheme = ge.Y),
                (N.setContentTheme = I.Z),
                N
              );
            })();
          },
          54: (P, M, h) => {
            h.d(M, { H: () => u, g: () => d });
            var u = '3.10.4',
              d = (function () {
                function l() {}
                return (
                  (l.ZWSP = '​'),
                  (l.DROP_EDITOR = 'application/editor'),
                  (l.MOBILE_WIDTH = 520),
                  (l.CLASS_MENU_DISABLED = 'vditor-menu--disabled'),
                  (l.EDIT_TOOLBARS = [
                    'emoji',
                    'headings',
                    'bold',
                    'italic',
                    'strike',
                    'link',
                    'list',
                    'ordered-list',
                    'outdent',
                    'indent',
                    'check',
                    'line',
                    'quote',
                    'code',
                    'inline-code',
                    'insert-after',
                    'insert-before',
                    'upload',
                    'record',
                    'table',
                  ]),
                  (l.CODE_THEME = [
                    'abap',
                    'algol',
                    'algol_nu',
                    'arduino',
                    'autumn',
                    'borland',
                    'bw',
                    'colorful',
                    'dracula',
                    'emacs',
                    'friendly',
                    'fruity',
                    'github',
                    'igor',
                    'lovelace',
                    'manni',
                    'monokai',
                    'monokailight',
                    'murphy',
                    'native',
                    'paraiso-dark',
                    'paraiso-light',
                    'pastie',
                    'perldoc',
                    'pygments',
                    'rainbow_dash',
                    'rrt',
                    'solarized-dark',
                    'solarized-dark256',
                    'solarized-light',
                    'swapoff',
                    'tango',
                    'trac',
                    'vim',
                    'vs',
                    'xcode',
                    'ant-design',
                  ]),
                  (l.CODE_LANGUAGES = [
                    'mermaid',
                    'echarts',
                    'mindmap',
                    'plantuml',
                    'abc',
                    'graphviz',
                    'flowchart',
                    'apache',
                    'js',
                    'ts',
                    'html',
                    'markmap',
                    'properties',
                    'apache',
                    'bash',
                    'c',
                    'csharp',
                    'cpp',
                    'css',
                    'coffeescript',
                    'diff',
                    'go',
                    'xml',
                    'http',
                    'json',
                    'java',
                    'javascript',
                    'kotlin',
                    'less',
                    'lua',
                    'makefile',
                    'markdown',
                    'nginx',
                    'objectivec',
                    'php',
                    'php-template',
                    'perl',
                    'plaintext',
                    'python',
                    'python-repl',
                    'r',
                    'ruby',
                    'rust',
                    'scss',
                    'sql',
                    'shell',
                    'swift',
                    'ini',
                    'typescript',
                    'vbnet',
                    'yaml',
                    'ada',
                    'clojure',
                    'dart',
                    'erb',
                    'fortran',
                    'gradle',
                    'haskell',
                    'julia',
                    'julia-repl',
                    'lisp',
                    'matlab',
                    'pgsql',
                    'powershell',
                    'sql_more',
                    'stata',
                    'cmake',
                    'mathematica',
                    'solidity',
                    'yul',
                  ]),
                  (l.CDN = 'https://unpkg.com/vditor@3.10.4'),
                  (l.MARKDOWN_OPTIONS = {
                    autoSpace: !1,
                    gfmAutoLink: !0,
                    codeBlockPreview: !0,
                    fixTermTypo: !1,
                    footnotes: !0,
                    linkBase: '',
                    linkPrefix: '',
                    listStyle: !1,
                    mark: !1,
                    mathBlockPreview: !0,
                    paragraphBeginningSpace: !1,
                    sanitize: !0,
                    toc: !1,
                  }),
                  (l.HLJS_OPTIONS = {
                    enable: !0,
                    lineNumber: !1,
                    defaultLang: '',
                    style: 'github',
                  }),
                  (l.MATH_OPTIONS = { engine: 'KaTeX', inlineDigit: !1, macros: {} }),
                  (l.THEME_OPTIONS = {
                    current: 'light',
                    list: {
                      'ant-design': 'Ant Design',
                      dark: 'Dark',
                      light: 'Light',
                      wechat: 'WeChat',
                    },
                    path: l.CDN + '/dist/css/content-theme',
                  }),
                  l
                );
              })();
          },
          478: (P, M, h) => {
            h.d(M, { Q: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var p = l.abcRenderAdapter.getElements(c);
                p.length > 0 &&
                  (0, d.G)(s + '/dist/js/abcjs/abcjs_basic.min.js', 'vditorAbcjsScript').then(
                    function () {
                      p.forEach(function (f) {
                        f.parentElement.classList.contains('vditor-wysiwyg__pre') ||
                          f.parentElement.classList.contains('vditor-ir__marker--pre') ||
                          (f.getAttribute('data-processed') !== 'true' &&
                            (ABCJS.renderAbc(f, l.abcRenderAdapter.getCode(f).trim()),
                            (f.style.overflowX = 'auto'),
                            f.setAttribute('data-processed', 'true')));
                      });
                    },
                  );
              };
          },
          156: (P, M, h) => {
            h.r(M),
              h.d(M, {
                abcRenderAdapter: () => s,
                chartRenderAdapter: () => c,
                flowchartRenderAdapter: () => f,
                graphvizRenderAdapter: () => p,
                markmapRenderAdapter: () => l,
                mathRenderAdapter: () => u,
                mermaidRenderAdapter: () => d,
                mindmapRenderAdapter: () => y,
                plantumlRenderAdapter: () => L,
              });
            var u = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-math');
                },
              },
              d = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-mermaid');
                },
              },
              l = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-markmap');
                },
              },
              y = {
                getCode: function (w) {
                  return w.getAttribute('data-code');
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-mindmap');
                },
              },
              c = {
                getCode: function (w) {
                  return w.innerText;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-echarts');
                },
              },
              s = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-abc');
                },
              },
              p = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-graphviz');
                },
              },
              f = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-flowchart');
                },
              },
              L = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-plantuml');
                },
              };
          },
          314: (P, M, h) => {
            h.d(M, { p: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s, p) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var f = l.chartRenderAdapter.getElements(c);
                f.length > 0 &&
                  (0, d.G)(s + '/dist/js/echarts/echarts.min.js', 'vditorEchartsScript').then(
                    function () {
                      f.forEach(function (L) {
                        if (
                          !L.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                          !L.parentElement.classList.contains('vditor-ir__marker--pre')
                        ) {
                          var w = l.chartRenderAdapter.getCode(L).trim();
                          if (w)
                            try {
                              if (L.getAttribute('data-processed') === 'true') return;
                              var T = JSON.parse(w);
                              echarts.init(L, p === 'dark' ? 'dark' : void 0).setOption(T),
                                L.setAttribute('data-processed', 'true');
                            } catch (g) {
                              (L.className = 'vditor-reset--error'),
                                (L.innerHTML = 'echarts render error: <br>' + g);
                            }
                        }
                      });
                    },
                  );
              };
          },
          730: (P, M, h) => {
            h.d(M, { O: () => l });
            var u = h(51),
              d = h(54),
              l = function (y, c) {
                Array.from(y.querySelectorAll('pre > code'))
                  .filter(function (s, p) {
                    return (
                      !s.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                      !s.parentElement.classList.contains('vditor-ir__marker--pre') &&
                      !(
                        s.classList.contains('language-mermaid') ||
                        s.classList.contains('language-flowchart') ||
                        s.classList.contains('language-echarts') ||
                        s.classList.contains('language-mindmap') ||
                        s.classList.contains('language-plantuml') ||
                        s.classList.contains('language-markmap') ||
                        s.classList.contains('language-abc') ||
                        s.classList.contains('language-graphviz') ||
                        s.classList.contains('language-math')
                      ) &&
                      !(s.style.maxHeight.indexOf('px') > -1) &&
                      !(y.classList.contains('vditor-preview') && p > 5)
                    );
                  })
                  .forEach(function (s) {
                    var p,
                      f,
                      L,
                      w = s.innerText;
                    if (s.classList.contains('highlight-chroma')) {
                      var T = s.cloneNode(!0);
                      T.querySelectorAll('.highlight-ln').forEach(function (_) {
                        _.remove();
                      }),
                        (w = T.innerText);
                    } else
                      w.endsWith(`
`) && (w = w.substr(0, w.length - 1));
                    var g = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
                    document.getElementById('vditorIconScript') ||
                      (g =
                        '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
                    var k = document.createElement('div');
                    (k.className = 'vditor-copy'),
                      (k.innerHTML =
                        '<span aria-label="' +
                        (((p = window.VditorI18n) === null || p === void 0 ? void 0 : p.copy) ||
                          '复制') +
                        `"
onmouseover="this.setAttribute('aria-label', '` +
                        (((f = window.VditorI18n) === null || f === void 0 ? void 0 : f.copy) ||
                          '复制') +
                        `')"
class="vditor-tooltipped vditor-tooltipped__w"
onclick="this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '` +
                        (((L = window.VditorI18n) === null || L === void 0 ? void 0 : L.copied) ||
                          '已复制') +
                        `');this.previousElementSibling.blur()">` +
                        g +
                        '</span>');
                    var m = document.createElement('textarea');
                    (m.value = (0, u.X)(w)),
                      k.insertAdjacentElement('afterbegin', m),
                      c && c.renderMenu && c.renderMenu(s, k),
                      s.before(k),
                      (s.style.maxHeight = window.outerHeight - 40 + 'px'),
                      s.insertAdjacentHTML(
                        'afterend',
                        '<span style="position: absolute">' + d.g.ZWSP + '</span>',
                      );
                  });
              };
          },
          66: (P, M, h) => {
            h.d(M, { P: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                s === void 0 && (s = u.g.CDN);
                var p = l.flowchartRenderAdapter.getElements(c);
                p.length !== 0 &&
                  (0, d.G)(
                    s + '/dist/js/flowchart.js/flowchart.min.js',
                    'vditorFlowchartScript',
                  ).then(function () {
                    p.forEach(function (f) {
                      if (f.getAttribute('data-processed') !== 'true') {
                        var L = flowchart.parse(l.flowchartRenderAdapter.getCode(f));
                        (f.innerHTML = ''), L.drawSVG(f), f.setAttribute('data-processed', 'true');
                      }
                    });
                  });
              };
          },
          218: (P, M, h) => {
            h.d(M, { v: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                s === void 0 && (s = u.g.CDN);
                var p = l.graphvizRenderAdapter.getElements(c);
                p.length !== 0 &&
                  (0, d.G)(s + '/dist/js/graphviz/viz.js', 'vditorGraphVizScript').then(
                    function () {
                      p.forEach(function (f) {
                        var L = l.graphvizRenderAdapter.getCode(f);
                        if (
                          !f.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                          !f.parentElement.classList.contains('vditor-ir__marker--pre') &&
                          f.getAttribute('data-processed') !== 'true' &&
                          L.trim() !== ''
                        ) {
                          try {
                            var w = new Blob(
                                [
                                  "importScripts('" +
                                    document
                                      .getElementById('vditorGraphVizScript')
                                      .src.replace('viz.js', 'full.render.js') +
                                    "');",
                                ],
                                { type: 'application/javascript' },
                              ),
                              T = (window.URL || window.webkitURL).createObjectURL(w),
                              g = new Worker(T);
                            new Viz({ worker: g })
                              .renderSVGElement(L)
                              .then(function (k) {
                                f.innerHTML = k.outerHTML;
                              })
                              .catch(function (k) {
                                (f.innerHTML = 'graphviz render error: <br>' + k),
                                  (f.className = 'vditor-reset--error');
                              });
                          } catch (k) {}
                          f.setAttribute('data-processed', 'true');
                        }
                      });
                    },
                  );
              };
          },
          702: (P, M, h) => {
            h.d(M, { s: () => y });
            var u = h(54),
              d = h(526),
              l = h(578),
              y = function (c, s, p) {
                s === void 0 && (s = document), p === void 0 && (p = u.g.CDN);
                var f = c.style;
                u.g.CODE_THEME.includes(f) || (f = 'github');
                var L = document.getElementById('vditorHljsStyle'),
                  w = p + '/dist/js/highlight.js/styles/' + f + '.css';
                L && L.getAttribute('href') !== w && L.remove(),
                  (0, l.c)(p + '/dist/js/highlight.js/styles/' + f + '.css', 'vditorHljsStyle'),
                  c.enable !== !1 &&
                    s.querySelectorAll('pre > code').length !== 0 &&
                    (0, d.G)(
                      p + '/dist/js/highlight.js/highlight.pack.js',
                      'vditorHljsScript',
                    ).then(function () {
                      (0, d.G)(
                        p + '/dist/js/highlight.js/solidity.min.js',
                        'vditorHljsSolidityScript',
                      ).then(function () {
                        (0, d.G)(
                          p + '/dist/js/highlight.js/yul.min.js',
                          'vditorHljsYulScript',
                        ).then(function () {
                          s.querySelectorAll('pre > code').forEach(function (T) {
                            if (
                              !T.parentElement.classList.contains('vditor-ir__marker--pre') &&
                              !T.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                              !(
                                T.classList.contains('language-mermaid') ||
                                T.classList.contains('language-flowchart') ||
                                T.classList.contains('language-echarts') ||
                                T.classList.contains('language-mindmap') ||
                                T.classList.contains('language-plantuml') ||
                                T.classList.contains('language-abc') ||
                                T.classList.contains('language-graphviz') ||
                                T.classList.contains('language-math')
                              ) &&
                              (c.defaultLang !== '' &&
                                T.className.indexOf('language-') === -1 &&
                                T.classList.add('language-' + c.defaultLang),
                              hljs.highlightElement(T),
                              c.lineNumber)
                            ) {
                              T.classList.add('vditor-linenumber');
                              var g = T.querySelector('.vditor-linenumber__temp');
                              g ||
                                (((g = document.createElement('div')).className =
                                  'vditor-linenumber__temp'),
                                T.insertAdjacentElement('beforeend', g));
                              var k = getComputedStyle(T).whiteSpace,
                                m = !1;
                              (k !== 'pre-wrap' && k !== 'pre-line') || (m = !0);
                              var _ = '',
                                D = T.textContent.split(/\r\n|\r|\n/g);
                              D.pop(),
                                D.map(function (I) {
                                  var x = '';
                                  m &&
                                    ((g.textContent =
                                      I ||
                                      `
`),
                                    (x =
                                      ' style="height:' +
                                      g.getBoundingClientRect().height +
                                      'px"')),
                                    (_ += '<span' + x + '></span>');
                                }),
                                (g.style.display = 'none'),
                                (_ = '<span class="vditor-linenumber__rows">' + _ + '</span>'),
                                T.insertAdjacentHTML('beforeend', _);
                            }
                          });
                        });
                      });
                    });
              };
          },
          563: (P, M, h) => {
            h.d(M, { K: () => s });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = {},
              c = function (p, f) {
                var L = window.markmap,
                  w = L.Transformer,
                  T = L.Markmap,
                  g = L.deriveOptions,
                  k = (L.globalCSS, new w());
                p.innerHTML = '<svg style="width:100%"></svg>';
                var m = p.firstChild,
                  _ = T.create(m, null),
                  D = (function (ie, me) {
                    var fe = ie.transform(me),
                      de = Object.keys(fe.features).filter(function (be) {
                        return !y[be];
                      });
                    de.forEach(function (be) {
                      y[be] = !0;
                    });
                    var ve = ie.getAssets(de),
                      Te = ve.styles,
                      Se = ve.scripts,
                      Ie = window.markmap;
                    return Te && Ie.loadCSS(Te), Se && Ie.loadJS(Se), fe;
                  })(k, f),
                  I = D.root,
                  x = D.frontmatter,
                  V = g(x == null ? void 0 : x.markmap);
                _.setData(I, V), _.fit();
              },
              s = function (p, f, L) {
                f === void 0 && (f = u.g.CDN);
                var w = l.markmapRenderAdapter.getElements(p);
                w.length !== 0 &&
                  (0, d.G)(f + '/dist/js/markmap/markmap.min.js', 'vditorMermaidScript').then(
                    function () {
                      w.forEach(function (T) {
                        var g = l.markmapRenderAdapter.getCode(T);
                        if (T.getAttribute('data-processed') !== 'true' && g.trim() !== '') {
                          var k = document.createElement('div');
                          (k.className = 'language-markmap'),
                            T.parentNode.appendChild(k),
                            c(k, g),
                            T.parentNode.childNodes[0].nodeName == 'CODE' &&
                              T.parentNode.removeChild(T.parentNode.childNodes[0]);
                        }
                      });
                    },
                  );
              };
          },
          466: (P, M, h) => {
            h.d(M, { H: () => s });
            var u = h(54),
              d = h(526),
              l = h(578),
              y = h(51),
              c = h(156),
              s = function (p, f) {
                var L = c.mathRenderAdapter.getElements(p);
                if (L.length !== 0) {
                  var w = { cdn: u.g.CDN, math: { engine: 'KaTeX', inlineDigit: !1, macros: {} } };
                  if (
                    (f && f.math && (f.math = Object.assign({}, w.math, f.math)),
                    (f = Object.assign({}, w, f)).math.engine === 'KaTeX')
                  )
                    (0, l.c)(f.cdn + '/dist/js/katex/katex.min.css?v=0.16.9', 'vditorKatexStyle'),
                      (0, d.G)(
                        f.cdn + '/dist/js/katex/katex.min.js?v=0.16.9',
                        'vditorKatexScript',
                      ).then(function () {
                        (0, d.G)(
                          f.cdn + '/dist/js/katex/mhchem.min.js?v=0.16.9',
                          'vditorKatexChemScript',
                        ).then(function () {
                          L.forEach(function (g) {
                            if (
                              !g.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                              !g.parentElement.classList.contains('vditor-ir__marker--pre') &&
                              !g.getAttribute('data-math')
                            ) {
                              var k = (0, y.X)(c.mathRenderAdapter.getCode(g));
                              g.setAttribute('data-math', k);
                              try {
                                g.innerHTML = katex.renderToString(k, {
                                  displayMode: g.tagName === 'DIV',
                                  output: 'html',
                                  macros: f.math.macros,
                                });
                              } catch (m) {
                                (g.innerHTML = m.message),
                                  (g.className = 'language-math vditor-reset--error');
                              }
                              g.addEventListener('copy', function (m) {
                                m.stopPropagation(), m.preventDefault();
                                var _ = m.currentTarget.closest('.language-math');
                                m.clipboardData.setData('text/html', _.innerHTML),
                                  m.clipboardData.setData(
                                    'text/plain',
                                    _.getAttribute('data-math'),
                                  );
                              });
                            }
                          });
                        });
                      });
                  else if (f.math.engine === 'MathJax') {
                    window.MathJax ||
                      ((window.MathJax = {
                        loader: { paths: { mathjax: f.cdn + '/dist/js/mathjax' } },
                        startup: { typeset: !1 },
                        tex: { macros: f.math.macros },
                      }),
                      Object.assign(window.MathJax, f.math.mathJaxOptions)),
                      (0, d.J)(f.cdn + '/dist/js/mathjax/tex-svg-full.js', 'protyleMathJaxScript');
                    var T = function (g, k) {
                      var m = (0, y.X)(g.textContent).trim(),
                        _ = window.MathJax.getMetricsFor(g);
                      (_.display = g.tagName === 'DIV'),
                        window.MathJax.tex2svgPromise(m, _).then(function (D) {
                          (g.innerHTML = ''),
                            g.setAttribute('data-math', m),
                            g.append(D),
                            window.MathJax.startup.document.clear(),
                            window.MathJax.startup.document.updateDocument();
                          var I = D.querySelector('[data-mml-node="merror"]');
                          I &&
                            I.textContent.trim() !== '' &&
                            ((g.innerHTML = I.textContent.trim()),
                            (g.className = 'vditor-reset--error')),
                            k && k();
                        });
                    };
                    window.MathJax.startup.promise.then(function () {
                      for (
                        var g = [],
                          k = function (_) {
                            var D = L[_];
                            D.parentElement.classList.contains('vditor-wysiwyg__pre') ||
                              D.parentElement.classList.contains('vditor-ir__marker--pre') ||
                              D.getAttribute('data-math') ||
                              !(0, y.X)(D.textContent).trim() ||
                              g.push(function (I) {
                                _ === L.length - 1 ? T(D) : T(D, I);
                              });
                          },
                          m = 0;
                        m < L.length;
                        m++
                      )
                        k(m);
                      (function (_) {
                        if (_.length !== 0) {
                          var D = 0,
                            I = _[_.length - 1],
                            x = function () {
                              var V = _[D++];
                              V === I ? V() : V(x);
                            };
                          x();
                        }
                      })(g);
                    });
                  }
                }
              };
          },
          554: (P, M, h) => {
            h.d(M, { Y: () => d });
            var u = h(835),
              d = function (l) {
                l &&
                  l.querySelectorAll('a').forEach(function (y) {
                    var c = y.getAttribute('href');
                    c &&
                      (c.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/)
                        ? (function (s, p) {
                            s.insertAdjacentHTML(
                              'afterend',
                              '<video controls="controls" src="' + p + '"></video>',
                            ),
                              s.remove();
                          })(y, c)
                        : c.match(/^.+.(mp3|wav|flac)$/)
                          ? (function (s, p) {
                              s.insertAdjacentHTML(
                                'afterend',
                                '<audio controls="controls" src="' + p + '"></audio>',
                              ),
                                s.remove();
                            })(y, c)
                          : (function (s, p) {
                              var f = p.match(
                                  /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/,
                                ),
                                L = p.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                                w = p.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/),
                                T = p.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/),
                                g = p.match(
                                  /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/,
                                ),
                                k = p.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/),
                                m = p.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/),
                                _ = p.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                              if (f && f[1].length === 11)
                                s.insertAdjacentHTML(
                                  'afterend',
                                  '<iframe class="iframe__video" src="//www.youtube.com/embed/' +
                                    f[1] +
                                    (f[2] ? '?start=' + f[2] : '') +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (L && L[1])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  '<iframe class="iframe__video" src="//player.youku.com/embed/' +
                                    L[1] +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (w && w[1])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid=' +
                                    w[1] +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (T && T[1])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  `<iframe class="iframe__video"
 src="//coub.com/embed/` +
                                    T[1] +
                                    '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>',
                                ),
                                  s.remove();
                              else if (g && g[0])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  `<iframe class="iframe__video"
 src="https://www.facebook.com/plugins/video.php?href=` +
                                    encodeURIComponent(g[0]) +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (k && k[2])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  `<iframe class="iframe__video"
 src="https://www.dailymotion.com/embed/video/` +
                                    k[2] +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (
                                p.indexOf('bilibili.com') > -1 &&
                                (p.indexOf('bvid=') > -1 || (m && m[1]))
                              ) {
                                var D = {
                                  bvid: (0, u.o)('bvid', p) || (m && m[1]),
                                  page: '1',
                                  high_quality: '1',
                                  as_wide: '1',
                                  allowfullscreen: 'true',
                                  autoplay: '0',
                                };
                                new URL(p.startsWith('http') ? p : 'https:' + p).search
                                  .split('&')
                                  .forEach(function (V, ie) {
                                    if (V) {
                                      ie === 0 && (V = V.substr(1));
                                      var me = V.split('=');
                                      D[me[0]] = me[1];
                                    }
                                  });
                                var I = 'https://player.bilibili.com/player.html?',
                                  x = Object.keys(D);
                                x.forEach(function (V, ie) {
                                  (I += V + '=' + D[V]), ie < x.length - 1 && (I += '&');
                                }),
                                  s.insertAdjacentHTML(
                                    'afterend',
                                    '<iframe class="iframe__video" src="' + I + '"></iframe>',
                                  ),
                                  s.remove();
                              } else
                                _ &&
                                  _[1] &&
                                  (s.insertAdjacentHTML(
                                    'afterend',
                                    '<iframe class="iframe__video" src="//embed.ted.com/talks/' +
                                      _[1] +
                                      '"></iframe>',
                                  ),
                                  s.remove());
                            })(y, c));
                  });
              };
          },
          40: (P, M, h) => {
            h.d(M, { i: () => p });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = h(835),
              c = function (f, L, w, T) {
                return new (w || (w = Promise))(function (g, k) {
                  function m(I) {
                    try {
                      D(T.next(I));
                    } catch (x) {
                      k(x);
                    }
                  }
                  function _(I) {
                    try {
                      D(T.throw(I));
                    } catch (x) {
                      k(x);
                    }
                  }
                  function D(I) {
                    var x;
                    I.done
                      ? g(I.value)
                      : ((x = I.value),
                        x instanceof w
                          ? x
                          : new w(function (V) {
                              V(x);
                            })).then(m, _);
                  }
                  D((T = T.apply(f, L || [])).next());
                });
              },
              s = function (f, L) {
                var w,
                  T,
                  g,
                  k,
                  m = {
                    label: 0,
                    sent: function () {
                      if (1 & g[0]) throw g[1];
                      return g[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (k = { next: _(0), throw: _(1), return: _(2) }),
                  typeof Symbol == 'function' &&
                    (k[Symbol.iterator] = function () {
                      return this;
                    }),
                  k
                );
                function _(D) {
                  return function (I) {
                    return (function (x) {
                      if (w) throw new TypeError('Generator is already executing.');
                      for (; m; )
                        try {
                          if (
                            ((w = 1),
                            T &&
                              (g =
                                2 & x[0]
                                  ? T.return
                                  : x[0]
                                    ? T.throw || ((g = T.return) && g.call(T), 0)
                                    : T.next) &&
                              !(g = g.call(T, x[1])).done)
                          )
                            return g;
                          switch (((T = 0), g && (x = [2 & x[0], g.value]), x[0])) {
                            case 0:
                            case 1:
                              g = x;
                              break;
                            case 4:
                              return m.label++, { value: x[1], done: !1 };
                            case 5:
                              m.label++, (T = x[1]), (x = [0]);
                              continue;
                            case 7:
                              (x = m.ops.pop()), m.trys.pop();
                              continue;
                            default:
                              if (
                                ((g = m.trys),
                                !(
                                  (g = g.length > 0 && g[g.length - 1]) ||
                                  (x[0] !== 6 && x[0] !== 2)
                                ))
                              ) {
                                m = 0;
                                continue;
                              }
                              if (x[0] === 3 && (!g || (x[1] > g[0] && x[1] < g[3]))) {
                                m.label = x[1];
                                break;
                              }
                              if (x[0] === 6 && m.label < g[1]) {
                                (m.label = g[1]), (g = x);
                                break;
                              }
                              if (g && m.label < g[2]) {
                                (m.label = g[2]), m.ops.push(x);
                                break;
                              }
                              g[2] && m.ops.pop(), m.trys.pop();
                              continue;
                          }
                          x = L.call(f, m);
                        } catch (V) {
                          (x = [6, V]), (T = 0);
                        } finally {
                          w = g = 0;
                        }
                      if (5 & x[0]) throw x[1];
                      return { value: x[0] ? x[1] : void 0, done: !0 };
                    })([D, I]);
                  };
                }
              },
              p = function (f, L, w) {
                L === void 0 && (L = u.g.CDN);
                var T = l.mermaidRenderAdapter.getElements(f);
                T.length !== 0 &&
                  (0, d.G)(L + '/dist/js/mermaid/mermaid.min.js', 'vditorMermaidScript').then(
                    function () {
                      var g = {
                        securityLevel: 'loose',
                        altFontFamily: 'sans-serif',
                        fontFamily: 'sans-serif',
                        startOnLoad: !1,
                        flowchart: { htmlLabels: !0, useMaxWidth: !0 },
                        sequence: {
                          useMaxWidth: !0,
                          diagramMarginX: 8,
                          diagramMarginY: 8,
                          boxMargin: 8,
                          showSequenceNumbers: !0,
                        },
                        gantt: { leftPadding: 75, rightPadding: 20 },
                      };
                      w === 'dark' && (g.theme = 'dark'),
                        mermaid.initialize(g),
                        T.forEach(function (k) {
                          return c(void 0, void 0, void 0, function () {
                            var m, _, D, I, x;
                            return s(this, function (V) {
                              switch (V.label) {
                                case 0:
                                  if (
                                    ((m = l.mermaidRenderAdapter.getCode(k)),
                                    k.getAttribute('data-processed') === 'true' || m.trim() === '')
                                  )
                                    return [2];
                                  (_ = 'mermaid' + (0, y.W)()), (V.label = 1);
                                case 1:
                                  return (
                                    V.trys.push([1, 3, , 4]), [4, mermaid.render(_, k.textContent)]
                                  );
                                case 2:
                                  return (D = V.sent()), (k.innerHTML = D.svg), [3, 4];
                                case 3:
                                  return (
                                    (I = V.sent()),
                                    (x = document.querySelector('#' + _)),
                                    (k.innerHTML =
                                      x.outerHTML +
                                      `<br>
<div style="text-align: left"><small>` +
                                      I.message.replace(/\n/, '<br>') +
                                      '</small></div>'),
                                    x.parentElement.remove(),
                                    [3, 4]
                                  );
                                case 4:
                                  return k.setAttribute('data-processed', 'true'), [2];
                              }
                            });
                          });
                        });
                    },
                  );
              };
          },
          749: (P, M, h) => {
            h.d(M, { P: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s, p) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var f = l.mindmapRenderAdapter.getElements(c);
                f.length > 0 &&
                  (0, d.G)(s + '/dist/js/echarts/echarts.min.js', 'vditorEchartsScript').then(
                    function () {
                      f.forEach(function (L) {
                        if (
                          !L.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                          !L.parentElement.classList.contains('vditor-ir__marker--pre')
                        ) {
                          var w = l.mindmapRenderAdapter.getCode(L);
                          if (w)
                            try {
                              if (L.getAttribute('data-processed') === 'true') return;
                              echarts.init(L, p === 'dark' ? 'dark' : void 0).setOption({
                                series: [
                                  {
                                    data: [JSON.parse(decodeURIComponent(w))],
                                    initialTreeDepth: -1,
                                    itemStyle: { borderWidth: 0, color: '#4285f4' },
                                    label: {
                                      backgroundColor: '#f6f8fa',
                                      borderColor: '#d1d5da',
                                      borderRadius: 5,
                                      borderWidth: 0.5,
                                      color: '#586069',
                                      lineHeight: 20,
                                      offset: [-5, 0],
                                      padding: [0, 5],
                                      position: 'insideRight',
                                    },
                                    lineStyle: { color: '#d1d5da', width: 1 },
                                    roam: !0,
                                    symbol: function (T, g) {
                                      var k;
                                      return !(
                                        (k = g == null ? void 0 : g.data) === null || k === void 0
                                      ) && k.children
                                        ? 'circle'
                                        : 'path://';
                                    },
                                    type: 'tree',
                                  },
                                ],
                                tooltip: { trigger: 'item', triggerOn: 'mousemove' },
                              }),
                                L.setAttribute('data-processed', 'true');
                            } catch (T) {
                              (L.className = 'vditor-reset--error'),
                                (L.innerHTML = 'mindmap render error: <br>' + T);
                            }
                        }
                      });
                    },
                  );
              };
          },
          818: (P, M, h) => {
            h.d(M, { k: () => l });
            var u = h(64),
              d = h(466),
              l = function (y, c, s) {
                var p = '',
                  f = [];
                if (
                  (Array.from(y.children).forEach(function (g, k) {
                    if ((0, u.W)(g)) {
                      if (s) {
                        var m = g.id.lastIndexOf('_');
                        g.id = g.id.substring(0, m === -1 ? void 0 : m) + '_' + k;
                      }
                      f.push(g.id), (p += g.outerHTML.replace('<wbr>', ''));
                    }
                  }),
                  p === '')
                )
                  return (c.innerHTML = ''), '';
                var L = document.createElement('div');
                if (s)
                  s.lute.SetToC(!0),
                    s.currentMode !== 'wysiwyg' || s.preview.element.contains(y)
                      ? s.currentMode !== 'ir' || s.preview.element.contains(y)
                        ? (L.innerHTML = s.lute.HTML2VditorDOM('<p>[ToC]</p>' + p))
                        : (L.innerHTML = s.lute.SpinVditorIRDOM('<p>[ToC]</p>' + p))
                      : (L.innerHTML = s.lute.SpinVditorDOM('<p>[ToC]</p>' + p)),
                    s.lute.SetToC(s.options.preview.markdown.toc);
                else {
                  c.classList.add('vditor-outline');
                  var w = Lute.New();
                  w.SetToC(!0), (L.innerHTML = w.HTML2VditorDOM('<p>[ToC]</p>' + p));
                }
                var T = L.firstElementChild.querySelectorAll('li > span[data-target-id]');
                return (
                  T.forEach(function (g, k) {
                    if (g.nextElementSibling && g.nextElementSibling.tagName === 'UL') {
                      var m =
                        "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
                      document.getElementById('vditorIconScript') ||
                        (m =
                          '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'),
                        (g.innerHTML = m + '<span>' + g.innerHTML + '</span>');
                    } else g.innerHTML = '<svg></svg><span>' + g.innerHTML + '</span>';
                    g.setAttribute('data-target-id', f[k]);
                  }),
                  (p = L.firstElementChild.innerHTML),
                  T.length === 0
                    ? ((c.innerHTML = ''), p)
                    : ((c.innerHTML = p),
                      s && (0, d.H)(c, { cdn: s.options.cdn, math: s.options.preview.math }),
                      c.firstElementChild.addEventListener('click', function (g) {
                        for (var k = g.target; k && !k.isEqualNode(c); ) {
                          if (k.classList.contains('vditor-outline__action')) {
                            k.classList.contains('vditor-outline__action--close')
                              ? (k.classList.remove('vditor-outline__action--close'),
                                k.parentElement.nextElementSibling.setAttribute(
                                  'style',
                                  'display:block',
                                ))
                              : (k.classList.add('vditor-outline__action--close'),
                                k.parentElement.nextElementSibling.setAttribute(
                                  'style',
                                  'display:none',
                                )),
                              g.preventDefault(),
                              g.stopPropagation();
                            break;
                          }
                          if (k.getAttribute('data-target-id')) {
                            g.preventDefault(), g.stopPropagation();
                            var m = document.getElementById(k.getAttribute('data-target-id'));
                            if (!m) return;
                            if (s)
                              if (s.options.height === 'auto') {
                                var _ = m.offsetTop + s.element.offsetTop;
                                s.options.toolbarConfig.pin ||
                                  (_ += s.toolbar.element.offsetHeight),
                                  window.scrollTo(window.scrollX, _);
                              } else
                                s.element.offsetTop < window.scrollY &&
                                  window.scrollTo(window.scrollX, s.element.offsetTop),
                                  s.preview.element.contains(y)
                                    ? (y.parentElement.scrollTop = m.offsetTop)
                                    : (y.scrollTop = m.offsetTop);
                            else window.scrollTo(window.scrollX, m.offsetTop);
                            break;
                          }
                          k = k.parentElement;
                        }
                      }),
                      p)
                );
              };
          },
          408: (P, M, h) => {
            h.d(M, { B: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var p = l.plantumlRenderAdapter.getElements(c);
                p.length !== 0 &&
                  (0, d.G)(
                    s + '/dist/js/plantuml/plantuml-encoder.min.js',
                    'vditorPlantumlScript',
                  ).then(function () {
                    p.forEach(function (f) {
                      if (
                        !f.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                        !f.parentElement.classList.contains('vditor-ir__marker--pre')
                      ) {
                        var L = l.plantumlRenderAdapter.getCode(f).trim();
                        if (L)
                          try {
                            f.innerHTML =
                              '<object type="image/svg+xml" data="https://www.plantuml.com/plantuml/svg/~1' +
                              plantumlEncoder.encode(L) +
                              '"/>';
                          } catch (w) {
                            (f.className = 'vditor-reset--error'),
                              (f.innerHTML = 'plantuml render error: <br>' + w);
                          }
                      }
                    });
                  });
              };
          },
          895: (P, M, h) => {
            h.d(M, { X: () => u });
            var u = function (d) {
              var l = Lute.New();
              return (
                l.PutEmojis(d.emojis),
                l.SetEmojiSite(d.emojiSite),
                l.SetHeadingAnchor(d.headingAnchor),
                l.SetInlineMathAllowDigitAfterOpenMarker(d.inlineMathDigit),
                l.SetAutoSpace(d.autoSpace),
                l.SetToC(d.toc),
                l.SetFootnotes(d.footnotes),
                l.SetFixTermTypo(d.fixTermTypo),
                l.SetVditorCodeBlockPreview(d.codeBlockPreview),
                l.SetVditorMathBlockPreview(d.mathBlockPreview),
                l.SetSanitize(d.sanitize),
                l.SetChineseParagraphBeginningSpace(d.paragraphBeginningSpace),
                l.SetRenderListStyle(d.listStyle),
                l.SetLinkBase(d.linkBase),
                l.SetLinkPrefix(d.linkPrefix),
                l.SetMark(d.mark),
                l.SetGFMAutoLink(d.gfmAutoLink),
                d.lazyLoadImage && l.SetImageLazyLoading(d.lazyLoadImage),
                l
              );
            };
          },
          863: (P, M, h) => {
            h.d(M, { E: () => u });
            var u = function (d, l, y) {
              y === void 0 && (y = 'classic');
              var c = d.getBoundingClientRect();
              document.body.insertAdjacentHTML(
                'beforeend',
                '<div class="vditor vditor-img' +
                  (y === 'dark' ? ' vditor--dark' : '') +
                  `">
    <div class="vditor-img__bar">
      <span class="vditor-img__btn" data-deg="0">
        <svg><use xlink:href="#vditor-icon-redo"></use></svg>
        ` +
                  window.VditorI18n.spin +
                  `
      </span>
      <span class="vditor-img__btn"  onclick="this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''">
        X &nbsp;` +
                  window.VditorI18n.close +
                  `
      </span>
    </div>
    <div class="vditor-img__img" onclick="this.parentElement.outerHTML = '';document.body.style.overflow = ''">
      <img style="width: ` +
                  d.width +
                  'px;height:' +
                  d.height +
                  'px;transform: translate3d(' +
                  c.left +
                  'px, ' +
                  (c.top - 36) +
                  'px, 0)" src="' +
                  d.getAttribute('src') +
                  `">
    </div>
</div>`,
              ),
                (document.body.style.overflow = 'hidden');
              var s = document.querySelector('.vditor-img img'),
                p =
                  'translate3d(' +
                  Math.max(0, window.innerWidth - d.naturalWidth) / 2 +
                  'px, ' +
                  Math.max(0, window.innerHeight - 36 - d.naturalHeight) / 2 +
                  'px, 0)';
              setTimeout(function () {
                s.setAttribute('style', 'transition: transform .3s ease-in-out;transform: ' + p),
                  setTimeout(function () {
                    s.parentElement.scrollTo(
                      (s.parentElement.scrollWidth - s.parentElement.clientWidth) / 2,
                      (s.parentElement.scrollHeight - s.parentElement.clientHeight) / 2,
                    );
                  }, 400);
              });
              var f = document.querySelector('.vditor-img__btn');
              f.addEventListener('click', function () {
                var L = parseInt(f.getAttribute('data-deg'), 10) + 90;
                (L / 90) % 2 == 1 && d.naturalWidth > s.parentElement.clientHeight
                  ? (s.style.transform =
                      'translate3d(' +
                      Math.max(0, window.innerWidth - d.naturalWidth) / 2 +
                      'px, ' +
                      (d.naturalWidth / 2 - d.naturalHeight / 2) +
                      'px, 0) rotateZ(' +
                      L +
                      'deg)')
                  : (s.style.transform = p + ' rotateZ(' + L + 'deg)'),
                  f.setAttribute('data-deg', L.toString()),
                  setTimeout(function () {
                    s.parentElement.scrollTo(
                      (s.parentElement.scrollWidth - s.parentElement.clientWidth) / 2,
                      (s.parentElement.scrollHeight - s.parentElement.clientHeight) / 2,
                    );
                  }, 400);
              });
            };
          },
          312: (P, M, h) => {
            h.d(M, { Y: () => l });
            var u = h(54),
              d = h(578),
              l = function (y, c) {
                c === void 0 && (c = u.g.CDN), u.g.CODE_THEME.includes(y) || (y = 'github');
                var s = document.getElementById('vditorHljsStyle'),
                  p = c + '/dist/js/highlight.js/styles/' + y + '.css';
                s
                  ? s.getAttribute('href') !== p && (s.remove(), (0, d.c)(p, 'vditorHljsStyle'))
                  : (0, d.c)(p, 'vditorHljsStyle');
              };
          },
          227: (P, M, h) => {
            h.d(M, { Z: () => d });
            var u = h(578),
              d = function (l, y) {
                if (l && y) {
                  var c = document.getElementById('vditorContentTheme'),
                    s = y + '/' + l + '.css';
                  c
                    ? c.getAttribute('href') !== s &&
                      (c.remove(), (0, u.c)(s, 'vditorContentTheme'))
                    : (0, u.c)(s, 'vditorContentTheme');
                }
              };
          },
          526: (P, M, h) => {
            h.d(M, { G: () => d, J: () => u });
            var u = function (l, y) {
                if (document.getElementById(y)) return !1;
                var c = new XMLHttpRequest();
                c.open('GET', l, !1),
                  c.setRequestHeader(
                    'Accept',
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
                  ),
                  c.send('');
                var s = document.createElement('script');
                (s.type = 'text/javascript'),
                  (s.text = c.responseText),
                  (s.id = y),
                  document.head.appendChild(s);
              },
              d = function (l, y) {
                return new Promise(function (c, s) {
                  if (document.getElementById(y)) return c(), !1;
                  var p = document.createElement('script');
                  (p.src = l),
                    (p.async = !0),
                    document.head.appendChild(p),
                    (p.onerror = function (f) {
                      s(f);
                    }),
                    (p.onload = function () {
                      if (document.getElementById(y)) return p.remove(), c(), !1;
                      (p.id = y), c();
                    });
                });
              };
          },
          578: (P, M, h) => {
            h.d(M, { c: () => u });
            var u = function (d, l) {
              if (!document.getElementById(l)) {
                var y = document.createElement('link');
                (y.id = l),
                  (y.rel = 'stylesheet'),
                  (y.type = 'text/css'),
                  (y.href = d),
                  document.getElementsByTagName('head')[0].appendChild(y);
              }
            };
          },
          51: (P, M, h) => {
            h.d(M, { X: () => u });
            var u = function (d) {
              return d.replace(/\u00a0/g, ' ');
            };
          },
          794: (P, M, h) => {
            h.d(M, {
              G6: () => u,
              Le: () => y,
              i7: () => p,
              ns: () => s,
              pK: () => l,
              vU: () => d,
              yl: () => c,
            });
            var u = function () {
                return (
                  navigator.userAgent.indexOf('Safari') > -1 &&
                  navigator.userAgent.indexOf('Chrome') === -1
                );
              },
              d = function () {
                return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
              },
              l = function () {
                try {
                  return typeof localStorage != 'undefined';
                } catch (f) {
                  return !1;
                }
              },
              y = function () {
                return navigator.userAgent.indexOf('iPhone') > -1 ? 'touchstart' : 'click';
              },
              c = function (f) {
                return navigator.platform.toUpperCase().indexOf('MAC') >= 0
                  ? !(!f.metaKey || f.ctrlKey)
                  : !(f.metaKey || !f.ctrlKey);
              },
              s = function (f) {
                return (
                  /Mac/.test(navigator.platform) || navigator.platform === 'iPhone'
                    ? f.indexOf('⇧') > -1 &&
                      d() &&
                      (f = f.replace(';', ':').replace('=', '+').replace('-', '_'))
                    : (f = (f = f.startsWith('⌘')
                        ? f.replace('⌘', '⌘+')
                        : f.startsWith('⌥') && f.substr(1, 1) !== '⌘'
                          ? f.replace('⌥', '⌥+')
                          : f.replace('⇧⌘', '⌘+⇧+').replace('⌥⌘', '⌥+⌘+'))
                        .replace('⌘', 'Ctrl')
                        .replace('⇧', 'Shift')
                        .replace('⌥', 'Alt')).indexOf('Shift') > -1 &&
                      (f = f.replace(';', ':').replace('=', '+').replace('-', '_')),
                  f
                );
              },
              p = function () {
                return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
              };
          },
          835: (P, M, h) => {
            h.d(M, { W: () => u, o: () => d });
            var u = function () {
                return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  function (l) {
                    return (
                      parseInt(l, 10) ^
                      (window.crypto.getRandomValues(new Uint32Array(1))[0] &
                        (15 >> (parseInt(l, 10) / 4)))
                    ).toString(16);
                  },
                );
              },
              d = function (l, y) {
                y === void 0 && (y = window.location.search);
                var c = y.substring(y.indexOf('?')),
                  s = c.indexOf('#');
                return new URLSearchParams(c.substring(0, s >= 0 ? s : void 0)).get(l);
              };
          },
          827: (P, M, h) => {
            h.d(M, {
              DX: () => L,
              E2: () => l,
              F9: () => s,
              JQ: () => d,
              O9: () => y,
              a1: () => c,
              fb: () => f,
              lG: () => p,
            });
            var u = h(64),
              d = function (w, T) {
                for (
                  var g = f(w, T), k = !1, m = !1;
                  g && !g.classList.contains('vditor-reset') && !m;

                )
                  (k = f(g.parentElement, T)) ? (g = k) : (m = !0);
                return g || !1;
              },
              l = function (w, T) {
                for (
                  var g = (0, u.S)(w, T), k = !1, m = !1;
                  g && !g.classList.contains('vditor-reset') && !m;

                )
                  (k = (0, u.S)(g.parentElement, T)) ? (g = k) : (m = !0);
                return g || !1;
              },
              y = function (w) {
                var T = l(w, 'UL'),
                  g = l(w, 'OL'),
                  k = T;
                return g && (!T || (T && g.contains(T))) && (k = g), k;
              },
              c = function (w, T, g) {
                if (!w) return !1;
                w.nodeType === 3 && (w = w.parentElement);
                for (var k = w, m = !1; k && !m && !k.classList.contains('vditor-reset'); )
                  k.getAttribute(T) === g ? (m = !0) : (k = k.parentElement);
                return m && k;
              },
              s = function (w) {
                if (!w) return !1;
                w.nodeType === 3 && (w = w.parentElement);
                var T = w,
                  g = !1,
                  k = c(w, 'data-block', '0');
                if (k) return k;
                for (; T && !g && !T.classList.contains('vditor-reset'); )
                  T.tagName === 'H1' ||
                  T.tagName === 'H2' ||
                  T.tagName === 'H3' ||
                  T.tagName === 'H4' ||
                  T.tagName === 'H5' ||
                  T.tagName === 'H6' ||
                  T.tagName === 'P' ||
                  T.tagName === 'BLOCKQUOTE' ||
                  T.tagName === 'OL' ||
                  T.tagName === 'UL'
                    ? (g = !0)
                    : (T = T.parentElement);
                return g && T;
              },
              p = function (w, T) {
                if (!w) return !1;
                w.nodeType === 3 && (w = w.parentElement);
                for (var g = w, k = !1; g && !k && !g.classList.contains('vditor-reset'); )
                  g.nodeName === T ? (k = !0) : (g = g.parentElement);
                return k && g;
              },
              f = function (w, T) {
                if (!w) return !1;
                w.nodeType === 3 && (w = w.parentElement);
                for (var g = w, k = !1; g && !k && !g.classList.contains('vditor-reset'); )
                  g.classList.contains(T) ? (k = !0) : (g = g.parentElement);
                return k && g;
              },
              L = function (w) {
                for (; w && w.lastChild; ) w = w.lastChild;
                return w;
              };
          },
          64: (P, M, h) => {
            h.d(M, { S: () => u, W: () => d });
            var u = function (l, y) {
                if (!l) return !1;
                l.nodeType === 3 && (l = l.parentElement);
                for (var c = l, s = !1; c && !s && !c.classList.contains('vditor-reset'); )
                  c.nodeName.indexOf(y) === 0 ? (s = !0) : (c = c.parentElement);
                return s && c;
              },
              d = function (l) {
                var y = u(l, 'H');
                return !(!y || y.tagName.length !== 2 || y.tagName === 'HR') && y;
              };
          },
          640: (P, M, h) => {
            h.d(M, { T: () => u });
            var u = function () {
              for (var d = [], l = 0; l < arguments.length; l++) d[l] = arguments[l];
              for (
                var y = {},
                  c = function (p) {
                    for (var f in p)
                      p.hasOwnProperty(f) &&
                        (Object.prototype.toString.call(p[f]) === '[object Object]'
                          ? (y[f] = u(y[f], p[f]))
                          : (y[f] = p[f]));
                  },
                  s = 0;
                s < d.length;
                s++
              )
                c(d[s]);
              return y;
            };
          },
          393: (P, M, h) => {
            h.d(M, {
              $j: () => L,
              Gb: () => s,
              Hc: () => p,
              Ny: () => c,
              ib: () => w,
              im: () => f,
              oC: () => T,
              zh: () => y,
            });
            var u = h(54),
              d = h(794),
              l = h(827),
              y = function (g) {
                var k,
                  m = g[g.currentMode].element;
                return getSelection().rangeCount > 0 &&
                  ((k = getSelection().getRangeAt(0)),
                  m.isEqualNode(k.startContainer) || m.contains(k.startContainer))
                  ? k
                  : g[g.currentMode].range
                    ? g[g.currentMode].range
                    : (m.focus(),
                      (k = m.ownerDocument.createRange()).setStart(m, 0),
                      k.collapse(!0),
                      k);
              },
              c = function (g) {
                var k = window.getSelection().getRangeAt(0);
                if (
                  !g.contains(k.startContainer) &&
                  !(0, l.fb)(k.startContainer, 'vditor-panel--none')
                )
                  return { left: 0, top: 0 };
                var m,
                  _ = g.parentElement.getBoundingClientRect();
                if (k.getClientRects().length === 0)
                  if (k.startContainer.nodeType === 3) {
                    var D = k.startContainer.parentElement;
                    if (!(D && D.getClientRects().length > 0)) return { left: 0, top: 0 };
                    m = D.getClientRects()[0];
                  } else {
                    var I = k.startContainer.children;
                    if (I[k.startOffset] && I[k.startOffset].getClientRects().length > 0)
                      m = I[k.startOffset].getClientRects()[0];
                    else if (k.startContainer.childNodes.length > 0) {
                      var x = k.cloneRange();
                      k.selectNode(k.startContainer.childNodes[Math.max(0, k.startOffset - 1)]),
                        (m = k.getClientRects()[0]),
                        k.setEnd(x.endContainer, x.endOffset),
                        k.setStart(x.startContainer, x.startOffset);
                    } else m = k.startContainer.getClientRects()[0];
                    if (!m) {
                      for (
                        var V = k.startContainer.childNodes[k.startOffset];
                        !V.getClientRects || (V.getClientRects && V.getClientRects().length === 0);

                      )
                        V = V.parentElement;
                      m = V.getClientRects()[0];
                    }
                  }
                else m = k.getClientRects()[0];
                return { left: m.left - _.left, top: m.top - _.top };
              },
              s = function (g, k) {
                if (!k) {
                  if (getSelection().rangeCount === 0) return !1;
                  k = getSelection().getRangeAt(0);
                }
                var m = k.commonAncestorContainer;
                return g.isEqualNode(m) || g.contains(m);
              },
              p = function (g) {
                var k = window.getSelection();
                k.removeAllRanges(), k.addRange(g);
              },
              f = function (g, k, m) {
                var _ = { end: 0, start: 0 };
                if (!m) {
                  if (getSelection().rangeCount === 0) return _;
                  m = window.getSelection().getRangeAt(0);
                }
                if (s(k, m)) {
                  var D = m.cloneRange();
                  g.childNodes[0] && g.childNodes[0].childNodes[0]
                    ? D.setStart(g.childNodes[0].childNodes[0], 0)
                    : D.selectNodeContents(g),
                    D.setEnd(m.startContainer, m.startOffset),
                    (_.start = D.toString().length),
                    (_.end = _.start + m.toString().length);
                }
                return _;
              },
              L = function (g, k, m) {
                var _ = 0,
                  D = 0,
                  I = m.childNodes[D],
                  x = !1,
                  V = !1;
                (g = Math.max(0, g)), (k = Math.max(0, k));
                var ie = m.ownerDocument.createRange();
                for (ie.setStart(I || m, 0), ie.collapse(!0); !V && I; ) {
                  var me = _ + I.textContent.length;
                  if (
                    !x &&
                    g >= _ &&
                    g <= me &&
                    (g === 0
                      ? ie.setStart(I, 0)
                      : I.childNodes[0].nodeType === 3
                        ? ie.setStart(I.childNodes[0], g - _)
                        : I.nextSibling
                          ? ie.setStartBefore(I.nextSibling)
                          : ie.setStartAfter(I),
                    (x = !0),
                    g === k)
                  ) {
                    V = !0;
                    break;
                  }
                  x &&
                    k >= _ &&
                    k <= me &&
                    (k === 0
                      ? ie.setEnd(I, 0)
                      : I.childNodes[0].nodeType === 3
                        ? ie.setEnd(I.childNodes[0], k - _)
                        : I.nextSibling
                          ? ie.setEndBefore(I.nextSibling)
                          : ie.setEndAfter(I),
                    (V = !0)),
                    (_ = me),
                    (I = m.childNodes[++D]);
                }
                return (
                  !V && m.childNodes[D - 1] && ie.setStartBefore(m.childNodes[D - 1]), p(ie), ie
                );
              },
              w = function (g, k) {
                var m = g.querySelector('wbr');
                if (m) {
                  if (m.previousElementSibling)
                    if (m.previousElementSibling.isSameNode(m.previousSibling)) {
                      if (m.previousElementSibling.lastChild)
                        return (
                          k.setStartBefore(m),
                          k.collapse(!0),
                          p(k),
                          !(0, d.i7)() ||
                            (m.previousElementSibling.tagName !== 'EM' &&
                              m.previousElementSibling.tagName !== 'STRONG' &&
                              m.previousElementSibling.tagName !== 'S') ||
                            (k.insertNode(document.createTextNode(u.g.ZWSP)), k.collapse(!1)),
                          void m.remove()
                        );
                      k.setStartAfter(m.previousElementSibling);
                    } else k.setStart(m.previousSibling, m.previousSibling.textContent.length);
                  else
                    m.previousSibling
                      ? k.setStart(m.previousSibling, m.previousSibling.textContent.length)
                      : m.nextSibling
                        ? m.nextSibling.nodeType === 3
                          ? k.setStart(m.nextSibling, 0)
                          : k.setStartBefore(m.nextSibling)
                        : k.setStart(m.parentElement, 0);
                  k.collapse(!0), m.remove(), p(k);
                }
              },
              T = function (g, k) {
                var m = document.createElement('div');
                m.innerHTML = g;
                var _ = m.querySelectorAll('p');
                _.length === 1 &&
                  !_[0].previousSibling &&
                  !_[0].nextSibling &&
                  k[k.currentMode].element.children.length > 0 &&
                  m.firstElementChild.tagName === 'P' &&
                  (g = _[0].innerHTML.trim());
                var D = document.createElement('div');
                D.innerHTML = g;
                var I = y(k);
                if (
                  (I.toString() !== '' &&
                    ((k[k.currentMode].preventInput = !0), document.execCommand('delete', !1, '')),
                  D.firstElementChild && D.firstElementChild.getAttribute('data-block') === '0')
                ) {
                  D.lastElementChild.insertAdjacentHTML('beforeend', '<wbr>');
                  var x = (0, l.F9)(I.startContainer);
                  x
                    ? x.insertAdjacentHTML('afterend', D.innerHTML)
                    : k[k.currentMode].element.insertAdjacentHTML('beforeend', D.innerHTML),
                    w(k[k.currentMode].element, I);
                } else {
                  var V = document.createElement('template');
                  (V.innerHTML = g), I.insertNode(V.content.cloneNode(!0)), I.collapse(!1), p(I);
                }
              };
          },
        },
        He = {};
      function J(P) {
        var M = He[P];
        if (M !== void 0) return M.exports;
        var h = (He[P] = { exports: {} });
        return ye[P](h, h.exports, J), h.exports;
      }
      (J.d = (P, M) => {
        for (var h in M)
          J.o(M, h) && !J.o(P, h) && Object.defineProperty(P, h, { enumerable: !0, get: M[h] });
      }),
        (J.o = (P, M) => Object.prototype.hasOwnProperty.call(P, M)),
        (J.r = (P) => {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(P, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(P, '__esModule', { value: !0 });
        });
      var De = {};
      return (
        (() => {
          J.d(De, { default: () => bi });
          var P,
            M = J(872),
            h = J(54),
            u = J(51),
            d = function (e) {
              return e.currentMode === 'sv'
                ? (0, u.X)(
                    (
                      e.sv.element.textContent +
                      `
`
                    ).replace(
                      /\n\n$/,
                      `
`,
                    ),
                  )
                : e.currentMode === 'wysiwyg'
                  ? e.lute.VditorDOM2Md(e.wysiwyg.element.innerHTML)
                  : e.currentMode === 'ir'
                    ? e.lute.VditorIRDOM2Md(e.ir.element.innerHTML)
                    : '';
            },
            l = J(526),
            y = (function () {
              function e() {
                (this.element = document.createElement('div')),
                  (this.element.className = 'vditor-devtools'),
                  (this.element.innerHTML =
                    '<div class="vditor-reset--error"></div><div style="height: 100%;"></div>');
              }
              return (
                (e.prototype.renderEchart = function (t) {
                  var n = this;
                  t.devtools.element.style.display === 'block' &&
                    (0, l.G)(
                      t.options.cdn + '/dist/js/echarts/echarts.min.js',
                      'vditorEchartsScript',
                    ).then(function () {
                      n.ASTChart ||
                        (n.ASTChart = echarts.init(t.devtools.element.lastElementChild));
                      try {
                        (n.element.lastElementChild.style.display = 'block'),
                          (n.element.firstElementChild.innerHTML = ''),
                          n.ASTChart.setOption({
                            series: [
                              {
                                data: JSON.parse(t.lute.RenderEChartsJSON(d(t))),
                                initialTreeDepth: -1,
                                label: {
                                  align: 'left',
                                  backgroundColor: 'rgba(68, 77, 86, .68)',
                                  borderRadius: 3,
                                  color: '#d1d5da',
                                  fontSize: 12,
                                  lineHeight: 12,
                                  offset: [9, 12],
                                  padding: [2, 4, 2, 4],
                                  position: 'top',
                                  verticalAlign: 'middle',
                                },
                                lineStyle: { color: '#4285f4', type: 'curve', width: 1 },
                                orient: 'vertical',
                                roam: !0,
                                type: 'tree',
                              },
                            ],
                            toolbox: {
                              bottom: 25,
                              emphasis: { iconStyle: { color: '#4285f4' } },
                              feature: { restore: { show: !0 }, saveAsImage: { show: !0 } },
                              right: 15,
                              show: !0,
                            },
                          }),
                          n.ASTChart.resize();
                      } catch (i) {
                        (n.element.lastElementChild.style.display = 'none'),
                          (n.element.firstElementChild.innerHTML = i);
                      }
                    });
                }),
                e
              );
            })(),
            c = J(794),
            s = function (e, t) {
              t.forEach(function (n) {
                if (e[n]) {
                  var i = e[n].children[0];
                  i &&
                    i.classList.contains('vditor-menu--current') &&
                    i.classList.remove('vditor-menu--current');
                }
              });
            },
            p = function (e, t) {
              t.forEach(function (n) {
                if (e[n]) {
                  var i = e[n].children[0];
                  i &&
                    !i.classList.contains('vditor-menu--current') &&
                    i.classList.add('vditor-menu--current');
                }
              });
            },
            f = function (e, t) {
              t.forEach(function (n) {
                if (e[n]) {
                  var i = e[n].children[0];
                  i &&
                    i.classList.contains(h.g.CLASS_MENU_DISABLED) &&
                    i.classList.remove(h.g.CLASS_MENU_DISABLED);
                }
              });
            },
            L = function (e, t) {
              t.forEach(function (n) {
                if (e[n]) {
                  var i = e[n].children[0];
                  i &&
                    !i.classList.contains(h.g.CLASS_MENU_DISABLED) &&
                    i.classList.add(h.g.CLASS_MENU_DISABLED);
                }
              });
            },
            w = function (e, t) {
              t.forEach(function (n) {
                e[n] && e[n] && (e[n].style.display = 'none');
              });
            },
            T = function (e, t) {
              t.forEach(function (n) {
                e[n] && e[n] && (e[n].style.display = 'block');
              });
            },
            g = function (e, t, n) {
              t.includes('subToolbar') &&
                (e.toolbar.element.querySelectorAll('.vditor-hint').forEach(function (i) {
                  (n && i.isEqualNode(n)) || (i.style.display = 'none');
                }),
                e.toolbar.elements.emoji &&
                  (e.toolbar.elements.emoji.lastElementChild.style.display = 'none')),
                t.includes('hint') && (e.hint.element.style.display = 'none'),
                e.wysiwyg.popover &&
                  t.includes('popover') &&
                  (e.wysiwyg.popover.style.display = 'none');
            },
            k = function (e, t, n, i) {
              n.addEventListener((0, c.Le)(), function (r) {
                r.preventDefault(),
                  r.stopPropagation(),
                  n.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                    (e.toolbar.element
                      .querySelectorAll('.vditor-hint--current')
                      .forEach(function (o) {
                        o.classList.remove('vditor-hint--current');
                      }),
                    t.style.display === 'block'
                      ? (t.style.display = 'none')
                      : (g(e, ['subToolbar', 'hint', 'popover'], n.parentElement.parentElement),
                        n.classList.contains('vditor-tooltipped') ||
                          n.classList.add('vditor-hint--current'),
                        (t.style.display = 'block'),
                        e.toolbar.element.getBoundingClientRect().right -
                          n.getBoundingClientRect().right <
                        250
                          ? t.classList.add('vditor-panel--left')
                          : t.classList.remove('vditor-panel--left')));
              });
            },
            m = J(827),
            _ = J(64),
            D = function (e, t, n, i) {},
            I = J(478),
            x = J(314),
            V = J(730),
            ie = J(66),
            me = J(218),
            fe = J(702),
            de = J(466),
            ve = J(40),
            Te = J(563),
            Se = J(749),
            Ie = J(408),
            be = function (e, t) {
              if (e)
                if (e.parentElement.getAttribute('data-type') !== 'html-block') {
                  var n = e.firstElementChild.className.replace('language-', '');
                  n === 'abc'
                    ? (0, I.Q)(e, t.options.cdn)
                    : n === 'mermaid'
                      ? (0, ve.i)(e, t.options.cdn, t.options.theme)
                      : n === 'markmap'
                        ? (0, Te.K)(e, t.options.cdn, t.options.theme)
                        : n === 'flowchart'
                          ? (0, ie.P)(e, t.options.cdn)
                          : n === 'echarts'
                            ? (0, x.p)(e, t.options.cdn, t.options.theme)
                            : n === 'mindmap'
                              ? (0, Se.P)(e, t.options.cdn, t.options.theme)
                              : n === 'plantuml'
                                ? (0, Ie.B)(e, t.options.cdn)
                                : n === 'graphviz'
                                  ? (0, me.v)(e, t.options.cdn)
                                  : n === 'math'
                                    ? (0, de.H)(e, {
                                        cdn: t.options.cdn,
                                        math: t.options.preview.math,
                                      })
                                    : t.options.customRenders.find(function (i) {
                                        if (i.language === n) return i.render(e, t), !0;
                                      }) ||
                                      ((0, fe.s)(
                                        Object.assign({}, t.options.preview.hljs),
                                        e,
                                        t.options.cdn,
                                      ),
                                      (0, V.O)(e, t.options.preview.hljs)),
                    e.setAttribute('data-render', '1');
                } else e.setAttribute('data-render', '1');
            },
            A = J(393),
            ge = function (e) {
              if (e.currentMode !== 'sv') {
                var t = e[e.currentMode].element,
                  n = e.outline.render(e);
                n === '' && (n = '[ToC]'),
                  t.querySelectorAll('[data-type="toc-block"]').forEach(function (i) {
                    (i.innerHTML = n),
                      (0, de.H)(i, { cdn: e.options.cdn, math: e.options.preview.math });
                  });
              }
            },
            ee = function (e, t) {
              var n = (0, m.lG)(e.target, 'SPAN');
              if (n && (0, m.fb)(n, 'vditor-toc')) {
                var i = t[t.currentMode].element.querySelector(
                  '#' + n.getAttribute('data-target-id'),
                );
                if (i)
                  if (t.options.height === 'auto') {
                    var r = i.offsetTop + t.element.offsetTop;
                    t.options.toolbarConfig.pin || (r += t.toolbar.element.offsetHeight),
                      window.scrollTo(window.scrollX, r);
                  } else
                    t.element.offsetTop < window.scrollY &&
                      window.scrollTo(window.scrollX, t.element.offsetTop),
                      (t[t.currentMode].element.scrollTop = i.offsetTop);
              }
            },
            N = function (e, t, n, i) {
              if (
                e.previousElementSibling &&
                e.previousElementSibling.classList.contains('vditor-toc')
              ) {
                if (n.key === 'Backspace' && (0, A.im)(e, t[t.currentMode].element, i).start === 0)
                  return e.previousElementSibling.remove(), pe(t), !0;
                if (nt(t, n, i, e, e.previousElementSibling)) return !0;
              }
              if (e.nextElementSibling && e.nextElementSibling.classList.contains('vditor-toc')) {
                if (
                  n.key === 'Delete' &&
                  (0, A.im)(e, t[t.currentMode].element, i).start >=
                    e.textContent.trimRight().length
                )
                  return e.nextElementSibling.remove(), pe(t), !0;
                if (mt(t, n, i, e, e.nextElementSibling)) return !0;
              }
              if (n.key === 'Backspace' || n.key === 'Delete') {
                var r = (0, m.fb)(i.startContainer, 'vditor-toc');
                if (r) return r.remove(), pe(t), !0;
              }
            },
            Z = function (e, t, n, i) {
              n === void 0 && (n = !1);
              var r = (0, m.F9)(t.startContainer);
              if (r && !n && r.getAttribute('data-type') !== 'code-block') {
                if ((qt(r.innerHTML) && r.previousElementSibling) || Bt(r.innerHTML)) return;
                for (
                  var o = (0, A.im)(r, e.ir.element, t).start, a = !0, v = o - 1;
                  v >
                  r.textContent.substr(0, o).lastIndexOf(`
`);
                  v--
                )
                  if (r.textContent.charAt(v) !== ' ' && r.textContent.charAt(v) !== '	') {
                    a = !1;
                    break;
                  }
                o === 0 && (a = !1);
                var E = !0;
                for (v = o - 1; v < r.textContent.length; v++)
                  if (
                    r.textContent.charAt(v) !== ' ' &&
                    r.textContent.charAt(v) !==
                      `
`
                  ) {
                    E = !1;
                    break;
                  }
                if (a) return void (typeof e.options.input == 'function' && e.options.input(d(e)));
                if (E && !(0, m.fb)(t.startContainer, 'vditor-ir__marker')) {
                  var S = t.startContainer.previousSibling;
                  return (
                    S &&
                      S.nodeType !== 3 &&
                      S.classList.contains('vditor-ir__node--expand') &&
                      S.classList.remove('vditor-ir__node--expand'),
                    void (typeof e.options.input == 'function' && e.options.input(d(e)))
                  );
                }
              }
              if (
                (e.ir.element.querySelectorAll('.vditor-ir__node--expand').forEach(function (Y) {
                  Y.classList.remove('vditor-ir__node--expand');
                }),
                r || (r = e.ir.element),
                !r.querySelector('wbr'))
              ) {
                var b = (0, m.fb)(t.startContainer, 'vditor-ir__preview');
                b
                  ? b.previousElementSibling.insertAdjacentHTML('beforeend', '<wbr>')
                  : t.insertNode(document.createElement('wbr'));
              }
              r.querySelectorAll('[style]').forEach(function (Y) {
                Y.removeAttribute('style');
              }),
                r.getAttribute('data-type') === 'link-ref-defs-block' && (r = e.ir.element);
              var H,
                B = r.isEqualNode(e.ir.element),
                K = (0, m.a1)(r, 'data-type', 'footnotes-block'),
                C = '';
              if (B) C = r.innerHTML;
              else {
                var U = (0, _.S)(t.startContainer, 'BLOCKQUOTE'),
                  W = (0, m.O9)(t.startContainer);
                if (
                  (W && (r = W),
                  U && (!W || (W && !U.contains(W))) && (r = U),
                  K && (r = K),
                  (C = r.outerHTML),
                  r.tagName === 'UL' || r.tagName === 'OL')
                ) {
                  var q = r.previousElementSibling,
                    G = r.nextElementSibling;
                  !q ||
                    (q.tagName !== 'UL' && q.tagName !== 'OL') ||
                    ((C = q.outerHTML + C), q.remove()),
                    !G ||
                      (G.tagName !== 'UL' && G.tagName !== 'OL') ||
                      ((C += G.outerHTML), G.remove()),
                    (C = C.replace('<div><wbr><br></div>', '<li><p><wbr><br></p></li>'));
                } else
                  r.previousElementSibling &&
                    r.previousElementSibling.textContent.replace(h.g.ZWSP, '') !== '' &&
                    i &&
                    i.inputType === 'insertParagraph' &&
                    ((C = r.previousElementSibling.outerHTML + C),
                    r.previousElementSibling.remove());
                r.innerText.startsWith('```') ||
                  (e.ir.element
                    .querySelectorAll("[data-type='link-ref-defs-block']")
                    .forEach(function (Y) {
                      Y && !r.isEqualNode(Y) && ((C += Y.outerHTML), Y.remove());
                    }),
                  e.ir.element
                    .querySelectorAll("[data-type='footnotes-block']")
                    .forEach(function (Y) {
                      Y && !r.isEqualNode(Y) && ((C += Y.outerHTML), Y.remove());
                    }));
              }
              if (
                (D('SpinVditorIRDOM', C, 'argument', e.options.debugger),
                (C = e.lute.SpinVditorIRDOM(C)),
                D('SpinVditorIRDOM', C, 'result', e.options.debugger),
                B)
              )
                r.innerHTML = C;
              else if (((r.outerHTML = C), K)) {
                var z = (0, m.a1)(e.ir.element.querySelector('wbr'), 'data-type', 'footnotes-def');
                if (z) {
                  var R = z.textContent,
                    Q = R.substring(1, R.indexOf(']:')),
                    le = e.ir.element.querySelector(
                      'sup[data-type="footnotes-ref"][data-footnotes-label="' + Q + '"]',
                    );
                  le &&
                    le.setAttribute(
                      'aria-label',
                      R.substr(Q.length + 3)
                        .trim()
                        .substr(0, 24),
                    );
                }
              }
              var ne,
                se = e.ir.element.querySelectorAll("[data-type='link-ref-defs-block']");
              se.forEach(function (Y, ce) {
                ce === 0 ? (H = Y) : (H.insertAdjacentHTML('beforeend', Y.innerHTML), Y.remove());
              }),
                se.length > 0 && e.ir.element.insertAdjacentElement('beforeend', se[0]);
              var ae = e.ir.element.querySelectorAll("[data-type='footnotes-block']");
              ae.forEach(function (Y, ce) {
                ce === 0 ? (ne = Y) : (ne.insertAdjacentHTML('beforeend', Y.innerHTML), Y.remove());
              }),
                ae.length > 0 && e.ir.element.insertAdjacentElement('beforeend', ae[0]),
                (0, A.ib)(e.ir.element, t),
                e.ir.element
                  .querySelectorAll(".vditor-ir__preview[data-render='2']")
                  .forEach(function (Y) {
                    be(Y, e);
                  }),
                ge(e),
                Ge(e, { enableAddUndoStack: !0, enableHint: !0, enableInput: !0 });
            },
            j = function (e, t) {
              if (e === '') return !1;
              if (e.indexOf('⇧') === -1 && e.indexOf('⌘') === -1 && e.indexOf('⌥') === -1)
                return !((0, c.yl)(t) || t.altKey || t.shiftKey || t.code !== e);
              if (e === '⇧Tab')
                return !((0, c.yl)(t) || t.altKey || !t.shiftKey || t.code !== 'Tab');
              var n = e.split('');
              if (e.startsWith('⌥')) {
                var i = n.length === 3 ? n[2] : n[1];
                return !(
                  (n.length === 3 ? !(0, c.yl)(t) : (0, c.yl)(t)) ||
                  !t.altKey ||
                  t.shiftKey ||
                  t.code !== (/^[0-9]$/.test(i) ? 'Digit' : 'Key') + i
                );
              }
              e === '⌘Enter' && (n = ['⌘', 'Enter']);
              var r = n.length > 2 && n[0] === '⇧',
                o = r ? n[2] : n[1];
              return (
                !r ||
                  (!(0, c.vU)() && /Mac/.test(navigator.platform)) ||
                  (o === '-' ? (o = '_') : o === '=' && (o = '+')),
                !(
                  !(0, c.yl)(t) ||
                  t.key.toLowerCase() !== o.toLowerCase() ||
                  t.altKey ||
                  !((!r && !t.shiftKey) || (r && t.shiftKey))
                )
              );
            },
            O = function (e, t) {
              t.ir.element.querySelectorAll('.vditor-ir__node--expand').forEach(function (a) {
                a.classList.remove('vditor-ir__node--expand');
              });
              var n = (0, m.JQ)(e.startContainer, 'vditor-ir__node'),
                i = !e.collapsed && (0, m.JQ)(e.endContainer, 'vditor-ir__node');
              if (e.collapsed || (n && n === i)) {
                n &&
                  (n.classList.add('vditor-ir__node--expand'),
                  n.classList.remove('vditor-ir__node--hidden'),
                  (0, A.Hc)(e));
                var r = (function (a) {
                  var v = a.startContainer;
                  if (v.nodeType === 3 && v.nodeValue.length !== a.startOffset) return !1;
                  for (var E = v.nextSibling; E && E.textContent === ''; ) E = E.nextSibling;
                  if (!E) {
                    var S = (0, m.fb)(v, 'vditor-ir__marker');
                    if (S && !S.nextSibling) {
                      var b = v.parentElement.parentElement.nextSibling;
                      if (b && b.nodeType !== 3 && b.classList.contains('vditor-ir__node'))
                        return b;
                    }
                    return !1;
                  }
                  return (
                    !(
                      !E ||
                      E.nodeType === 3 ||
                      !E.classList.contains('vditor-ir__node') ||
                      E.getAttribute('data-block')
                    ) && E
                  );
                })(e);
                if (r)
                  return (
                    r.classList.add('vditor-ir__node--expand'),
                    void r.classList.remove('vditor-ir__node--hidden')
                  );
                var o = (function (a) {
                  var v = a.startContainer,
                    E = v.previousSibling;
                  return (
                    !(
                      v.nodeType !== 3 ||
                      a.startOffset !== 0 ||
                      !E ||
                      E.nodeType === 3 ||
                      !E.classList.contains('vditor-ir__node') ||
                      E.getAttribute('data-block')
                    ) && E
                  );
                })(e);
                return o
                  ? (o.classList.add('vditor-ir__node--expand'),
                    void o.classList.remove('vditor-ir__node--hidden'))
                  : void 0;
              }
            },
            re = J(863),
            $ = function (e, t) {
              e.querySelectorAll('[data-type=footnotes-link]').forEach(function (n) {
                for (
                  var i = n.parentElement, r = i.nextSibling;
                  r && r.textContent.startsWith('    ');

                ) {
                  var o = r;
                  o.childNodes.forEach(function (a) {
                    i.append(a.cloneNode(!0));
                  }),
                    (r = r.nextSibling),
                    o.remove();
                }
                t && t(i);
              });
            },
            te = function (e, t) {
              var n,
                i = getSelection().getRangeAt(0).cloneRange(),
                r = i.startContainer;
              i.startContainer.nodeType !== 3 &&
                i.startContainer.tagName === 'DIV' &&
                (r = i.startContainer.childNodes[i.startOffset - 1]);
              var o = (0, m.a1)(r, 'data-block', '0');
              if (o && t && (t.inputType === 'deleteContentBackward' || t.data === ' ')) {
                for (
                  var a = (0, A.im)(o, e.sv.element, i).start, v = !0, E = a - 1;
                  E >
                  o.textContent.substr(0, a).lastIndexOf(`
`);
                  E--
                )
                  if (o.textContent.charAt(E) !== ' ' && o.textContent.charAt(E) !== '	') {
                    v = !1;
                    break;
                  }
                if ((a === 0 && (v = !1), v)) return void Ne(e);
                if (t.inputType === 'deleteContentBackward') {
                  var S =
                    (0, m.a1)(r, 'data-type', 'code-block-open-marker') ||
                    (0, m.a1)(r, 'data-type', 'code-block-close-marker');
                  if (S) {
                    var b;
                    if (
                      (S.getAttribute('data-type') === 'code-block-close-marker' &&
                        (b = gt(r, 'code-block-open-marker'))) ||
                      (S.getAttribute('data-type') === 'code-block-open-marker' &&
                        (b = gt(r, 'code-block-close-marker', !1)))
                    )
                      return (b.textContent = S.textContent), void Ne(e);
                  }
                  var H = (0, m.a1)(r, 'data-type', 'math-block-open-marker');
                  if (H) {
                    var B = H.nextElementSibling.nextElementSibling;
                    return void (
                      B &&
                      B.getAttribute('data-type') === 'math-block-close-marker' &&
                      (B.remove(), Ne(e))
                    );
                  }
                  o.querySelectorAll('[data-type="code-block-open-marker"]').forEach(function (q) {
                    q.textContent.length === 1 && q.remove();
                  }),
                    o
                      .querySelectorAll('[data-type="code-block-close-marker"]')
                      .forEach(function (q) {
                        q.textContent.length === 1 && q.remove();
                      });
                  var K = (0, m.a1)(r, 'data-type', 'heading-marker');
                  if (K && K.textContent.indexOf('#') === -1) return void Ne(e);
                }
                if (
                  (t.data === ' ' || t.inputType === 'deleteContentBackward') &&
                  ((0, m.a1)(r, 'data-type', 'padding') ||
                    (0, m.a1)(r, 'data-type', 'li-marker') ||
                    (0, m.a1)(r, 'data-type', 'task-marker') ||
                    (0, m.a1)(r, 'data-type', 'blockquote-marker'))
                )
                  return void Ne(e);
              }
              if (o && o.textContent.trimRight() === '$$') Ne(e);
              else {
                o || (o = e.sv.element),
                  ((n = o.firstElementChild) === null || n === void 0
                    ? void 0
                    : n.getAttribute('data-type')) === 'link-ref-defs-block' && (o = e.sv.element),
                  (0, m.a1)(r, 'data-type', 'footnotes-link') && (o = e.sv.element),
                  o.textContent.indexOf(Lute.Caret) === -1 &&
                    i.insertNode(document.createTextNode(Lute.Caret)),
                  o.querySelectorAll('[style]').forEach(function (q) {
                    q.removeAttribute('style');
                  }),
                  o.querySelectorAll('font').forEach(function (q) {
                    q.outerHTML = q.innerHTML;
                  });
                var C = o.textContent,
                  U = o.isEqualNode(e.sv.element);
                if (U) C = o.textContent;
                else {
                  o.previousElementSibling &&
                    ((C = o.previousElementSibling.textContent + C),
                    o.previousElementSibling.remove()),
                    o.previousElementSibling &&
                      C.indexOf(`---
`) === 0 &&
                      ((C = o.previousElementSibling.textContent + C),
                      o.previousElementSibling.remove());
                  var W = '';
                  e.sv.element
                    .querySelectorAll("[data-type='link-ref-defs-block']")
                    .forEach(function (q, G) {
                      q &&
                        !o.isEqualNode(q.parentElement) &&
                        ((W +=
                          q.parentElement.textContent +
                          `
`),
                        q.parentElement.remove());
                    }),
                    e.sv.element
                      .querySelectorAll("[data-type='footnotes-link']")
                      .forEach(function (q, G) {
                        q &&
                          !o.isEqualNode(q.parentElement) &&
                          ((W +=
                            q.parentElement.textContent +
                            `
`),
                          q.parentElement.remove());
                      }),
                    (C = W + C);
                }
                (C = en(C, e)),
                  U ? (o.innerHTML = C) : (o.outerHTML = C),
                  e.sv.element
                    .querySelectorAll("[data-type='link-ref-defs-block']")
                    .forEach(function (q) {
                      e.sv.element.insertAdjacentElement('beforeend', q.parentElement);
                    }),
                  $(e.sv.element, function (q) {
                    e.sv.element.insertAdjacentElement('beforeend', q);
                  }),
                  (0, A.ib)(e.sv.element, i),
                  _e(e),
                  Ne(e, { enableAddUndoStack: !0, enableHint: !0, enableInput: !0 });
              }
            },
            X = J(227),
            ue = function (e) {
              e.options.theme === 'dark'
                ? e.element.classList.add('vditor--dark')
                : e.element.classList.remove('vditor--dark');
            },
            he = function (e) {
              var t = window.innerWidth <= h.g.MOBILE_WIDTH ? 10 : 35;
              if (e.wysiwyg.element.parentElement.style.display !== 'none') {
                var n =
                  (e.wysiwyg.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2;
                e.wysiwyg.element.style.padding = '10px ' + Math.max(t, n) + 'px';
              }
              e.ir.element.parentElement.style.display !== 'none' &&
                ((n = (e.ir.element.parentElement.clientWidth - e.options.preview.maxWidth) / 2),
                (e.ir.element.style.padding = '10px ' + Math.max(t, n) + 'px')),
                e.preview.element.style.display !== 'block'
                  ? (e.toolbar.element.style.paddingLeft =
                      Math.max(
                        5,
                        parseInt(e[e.currentMode].element.style.paddingLeft || '0', 10) +
                          (e.options.outline.position === 'left'
                            ? e.outline.element.offsetWidth
                            : 0),
                      ) + 'px')
                  : (e.toolbar.element.style.paddingLeft =
                      5 +
                      (e.options.outline.position === 'left' ? e.outline.element.offsetWidth : 0) +
                      'px');
            },
            oe = function (e) {
              if (e.options.typewriterMode) {
                var t = window.innerHeight;
                typeof e.options.height == 'number'
                  ? ((t = e.options.height),
                    typeof e.options.minHeight == 'number' &&
                      (t = Math.max(t, e.options.minHeight)),
                    (t = Math.min(window.innerHeight, t)))
                  : (t = e.element.clientHeight),
                  e.element.classList.contains('vditor--fullscreen') && (t = window.innerHeight),
                  e[e.currentMode].element.style.setProperty(
                    '--editor-bottom',
                    (t - e.toolbar.element.offsetHeight) / 2 + 'px',
                  );
              }
            };
          function We() {
            window.removeEventListener('resize', P);
          }
          var Ze,
            Kt,
            Zn = function (e) {
              oe(e),
                We(),
                window.addEventListener(
                  'resize',
                  (P = function () {
                    he(e), oe(e);
                  }),
                );
              var t = (0, c.pK)() && localStorage.getItem(e.options.cache.id);
              return (
                (e.options.cache.enable && t) ||
                  (e.options.value
                    ? (t = e.options.value)
                    : e.originalInnerHTML
                      ? (t = e.lute.HTML2Md(e.originalInnerHTML))
                      : e.options.cache.enable || (t = '')),
                t || ''
              );
            },
            ct = function (e) {
              clearTimeout(e[e.currentMode].hlToolbarTimeoutId),
                (e[e.currentMode].hlToolbarTimeoutId = window.setTimeout(function () {
                  if (
                    e[e.currentMode].element.getAttribute('contenteditable') !== 'false' &&
                    (0, A.Gb)(e[e.currentMode].element)
                  ) {
                    s(e.toolbar.elements, h.g.EDIT_TOOLBARS),
                      f(e.toolbar.elements, h.g.EDIT_TOOLBARS);
                    var t = (0, A.zh)(e),
                      n = t.startContainer;
                    t.startContainer.nodeType === 3 && (n = t.startContainer.parentElement),
                      n.classList.contains('vditor-reset') && (n = n.childNodes[t.startOffset]),
                      (e.currentMode === 'sv'
                        ? (0, m.a1)(n, 'data-type', 'heading')
                        : (0, _.W)(n)) && p(e.toolbar.elements, ['headings']),
                      (e.currentMode === 'sv'
                        ? (0, m.a1)(n, 'data-type', 'blockquote')
                        : (0, m.lG)(n, 'BLOCKQUOTE')) && p(e.toolbar.elements, ['quote']),
                      (0, m.a1)(n, 'data-type', 'strong') && p(e.toolbar.elements, ['bold']),
                      (0, m.a1)(n, 'data-type', 'em') && p(e.toolbar.elements, ['italic']),
                      (0, m.a1)(n, 'data-type', 's') && p(e.toolbar.elements, ['strike']),
                      (0, m.a1)(n, 'data-type', 'a') && p(e.toolbar.elements, ['link']);
                    var i = (0, m.lG)(n, 'LI');
                    i
                      ? (i.classList.contains('vditor-task')
                          ? p(e.toolbar.elements, ['check'])
                          : i.parentElement.tagName === 'OL'
                            ? p(e.toolbar.elements, ['ordered-list'])
                            : i.parentElement.tagName === 'UL' && p(e.toolbar.elements, ['list']),
                        f(e.toolbar.elements, ['outdent', 'indent']))
                      : L(e.toolbar.elements, ['outdent', 'indent']),
                      (0, m.a1)(n, 'data-type', 'code-block') &&
                        (L(e.toolbar.elements, [
                          'headings',
                          'bold',
                          'italic',
                          'strike',
                          'line',
                          'quote',
                          'list',
                          'ordered-list',
                          'check',
                          'code',
                          'inline-code',
                          'upload',
                          'link',
                          'table',
                          'record',
                        ]),
                        p(e.toolbar.elements, ['code'])),
                      (0, m.a1)(n, 'data-type', 'code') &&
                        (L(e.toolbar.elements, [
                          'headings',
                          'bold',
                          'italic',
                          'strike',
                          'line',
                          'quote',
                          'list',
                          'ordered-list',
                          'check',
                          'code',
                          'upload',
                          'link',
                          'table',
                          'record',
                        ]),
                        p(e.toolbar.elements, ['inline-code'])),
                      (0, m.a1)(n, 'data-type', 'table') &&
                        L(e.toolbar.elements, [
                          'headings',
                          'list',
                          'ordered-list',
                          'check',
                          'line',
                          'quote',
                          'code',
                          'table',
                        ]);
                  }
                }, 200));
            },
            Ee = function (e, t) {
              t === void 0 && (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
                t.enableHint && e.hint.render(e),
                clearTimeout(e.wysiwyg.afterRenderTimeoutId),
                (e.wysiwyg.afterRenderTimeoutId = window.setTimeout(function () {
                  if (!e.wysiwyg.composingLock) {
                    var n = d(e);
                    typeof e.options.input == 'function' && t.enableInput && e.options.input(n),
                      e.options.counter.enable && e.counter.render(e, n),
                      e.options.cache.enable &&
                        (0, c.pK)() &&
                        (localStorage.setItem(e.options.cache.id, n),
                        e.options.cache.after && e.options.cache.after(n)),
                      e.devtools && e.devtools.renderEchart(e),
                      t.enableAddUndoStack && e.undo.addToUndoStack(e);
                  }
                }, e.options.undoDelay));
            },
            Ft = function (e) {
              for (var t = '', n = e.nextSibling; n; )
                n.nodeType === 3 ? (t += n.textContent) : (t += n.outerHTML), (n = n.nextSibling);
              return t;
            },
            Jt = function (e) {
              for (var t = '', n = e.previousSibling; n; )
                (t = n.nodeType === 3 ? n.textContent + t : n.outerHTML + t),
                  (n = n.previousSibling);
              return t;
            },
            Zt = function (e, t) {
              Array.from(e.wysiwyg.element.childNodes).find(function (n) {
                if (n.nodeType === 3) {
                  var i = document.createElement('p');
                  i.setAttribute('data-block', '0'), (i.textContent = n.textContent);
                  var r = t.startContainer.nodeType === 3 ? t.startOffset : n.textContent.length;
                  return (
                    n.parentNode.insertBefore(i, n),
                    n.remove(),
                    t.setStart(i.firstChild, Math.min(i.firstChild.textContent.length, r)),
                    t.collapse(!0),
                    (0, A.Hc)(t),
                    !0
                  );
                }
                if (!n.getAttribute('data-block'))
                  return (
                    n.tagName === 'P'
                      ? n.remove()
                      : (n.tagName === 'DIV'
                          ? (t.insertNode(document.createElement('wbr')),
                            (n.outerHTML = '<p data-block="0">' + n.innerHTML + '</p>'))
                          : n.tagName === 'BR'
                            ? (n.outerHTML = '<p data-block="0">' + n.outerHTML + '<wbr></p>')
                            : (t.insertNode(document.createElement('wbr')),
                              (n.outerHTML = '<p data-block="0">' + n.outerHTML + '</p>')),
                        (0, A.ib)(e.wysiwyg.element, t),
                        (t = getSelection().getRangeAt(0))),
                    !0
                  );
              });
            },
            vt = function (e, t) {
              var n = (0, A.zh)(e),
                i = (0, m.F9)(n.startContainer);
              i || (i = n.startContainer.childNodes[n.startOffset]),
                i || e.wysiwyg.element.children.length !== 0 || (i = e.wysiwyg.element),
                i &&
                  !i.classList.contains('vditor-wysiwyg__block') &&
                  (n.insertNode(document.createElement('wbr')),
                  i.innerHTML.trim() === '<wbr>' && (i.innerHTML = '<wbr><br>'),
                  i.tagName === 'BLOCKQUOTE' || i.classList.contains('vditor-reset')
                    ? (i.innerHTML =
                        '<' + t + ' data-block="0">' + i.innerHTML.trim() + '</' + t + '>')
                    : (i.outerHTML =
                        '<' + t + ' data-block="0">' + i.innerHTML.trim() + '</' + t + '>'),
                  (0, A.ib)(e.wysiwyg.element, n),
                  ge(e));
            },
            Ct = function (e) {
              var t = getSelection().getRangeAt(0),
                n = (0, m.F9)(t.startContainer);
              n || (n = t.startContainer.childNodes[t.startOffset]),
                n &&
                  (t.insertNode(document.createElement('wbr')),
                  (n.outerHTML = '<p data-block="0">' + n.innerHTML + '</p>'),
                  (0, A.ib)(e.wysiwyg.element, t)),
                (e.wysiwyg.popover.style.display = 'none');
            },
            dt = function (e, t, n) {
              n === void 0 && (n = !0);
              var i = e.previousElementSibling,
                r = i.ownerDocument.createRange();
              i.tagName === 'CODE'
                ? ((i.style.display = 'inline-block'),
                  n ? r.setStart(i.firstChild, 1) : r.selectNodeContents(i))
                : ((i.style.display = 'block'),
                  i.firstChild.firstChild || i.firstChild.appendChild(document.createTextNode('')),
                  r.selectNodeContents(i.firstChild)),
                n ? r.collapse(!0) : r.collapse(!1),
                (0, A.Hc)(r),
                e.firstElementChild.classList.contains('language-mindmap') || _e(t);
            },
            Oe = function (e, t) {
              if (j('⇧⌘X', t)) {
                var n = e.wysiwyg.popover.querySelector('[data-type="remove"]');
                return n && n.click(), t.preventDefault(), !0;
              }
            },
            Xe = function (e) {
              clearTimeout(e.wysiwyg.hlToolbarTimeoutId),
                (e.wysiwyg.hlToolbarTimeoutId = window.setTimeout(function () {
                  if (
                    e.wysiwyg.element.getAttribute('contenteditable') !== 'false' &&
                    (0, A.Gb)(e.wysiwyg.element)
                  ) {
                    s(e.toolbar.elements, h.g.EDIT_TOOLBARS),
                      f(e.toolbar.elements, h.g.EDIT_TOOLBARS);
                    var t = getSelection().getRangeAt(0),
                      n = t.startContainer;
                    n =
                      t.startContainer.nodeType === 3
                        ? t.startContainer.parentElement
                        : n.childNodes[
                            t.startOffset >= n.childNodes.length
                              ? n.childNodes.length - 1
                              : t.startOffset
                          ];
                    var i = (0, m.a1)(n, 'data-type', 'footnotes-block');
                    if (i) return (e.wysiwyg.popover.innerHTML = ''), qe(i, e), void Pe(e, i);
                    var r = (0, m.lG)(n, 'LI');
                    r
                      ? (r.classList.contains('vditor-task')
                          ? p(e.toolbar.elements, ['check'])
                          : r.parentElement.tagName === 'OL'
                            ? p(e.toolbar.elements, ['ordered-list'])
                            : r.parentElement.tagName === 'UL' && p(e.toolbar.elements, ['list']),
                        f(e.toolbar.elements, ['outdent', 'indent']))
                      : L(e.toolbar.elements, ['outdent', 'indent']),
                      (0, m.lG)(n, 'BLOCKQUOTE') && p(e.toolbar.elements, ['quote']),
                      ((0, m.lG)(n, 'B') || (0, m.lG)(n, 'STRONG')) &&
                        p(e.toolbar.elements, ['bold']),
                      ((0, m.lG)(n, 'I') || (0, m.lG)(n, 'EM')) &&
                        p(e.toolbar.elements, ['italic']),
                      ((0, m.lG)(n, 'STRIKE') || (0, m.lG)(n, 'S')) &&
                        p(e.toolbar.elements, ['strike']),
                      e.wysiwyg.element
                        .querySelectorAll('.vditor-comment--focus')
                        .forEach(function (F) {
                          F.classList.remove('vditor-comment--focus');
                        });
                    var o = (0, m.fb)(n, 'vditor-comment');
                    if (o) {
                      var a = o.getAttribute('data-cmtids').split(' ');
                      if (a.length > 1 && o.nextSibling.isSameNode(o.nextElementSibling)) {
                        var v = o.nextElementSibling.getAttribute('data-cmtids').split(' ');
                        a.find(function (F) {
                          if (v.includes(F)) return (a = [F]), !0;
                        });
                      }
                      e.wysiwyg.element.querySelectorAll('.vditor-comment').forEach(function (F) {
                        F.getAttribute('data-cmtids').indexOf(a[0]) > -1 &&
                          F.classList.add('vditor-comment--focus');
                      });
                    }
                    var E = (0, m.lG)(n, 'A');
                    E && p(e.toolbar.elements, ['link']);
                    var S = (0, m.lG)(n, 'TABLE'),
                      b = (0, _.W)(n);
                    (0, m.lG)(n, 'CODE')
                      ? (0, m.lG)(n, 'PRE')
                        ? (L(e.toolbar.elements, [
                            'headings',
                            'bold',
                            'italic',
                            'strike',
                            'line',
                            'quote',
                            'list',
                            'ordered-list',
                            'check',
                            'code',
                            'inline-code',
                            'upload',
                            'link',
                            'table',
                            'record',
                          ]),
                          p(e.toolbar.elements, ['code']))
                        : (L(e.toolbar.elements, [
                            'headings',
                            'bold',
                            'italic',
                            'strike',
                            'line',
                            'quote',
                            'list',
                            'ordered-list',
                            'check',
                            'code',
                            'upload',
                            'link',
                            'table',
                            'record',
                          ]),
                          p(e.toolbar.elements, ['inline-code']))
                      : b
                        ? (L(e.toolbar.elements, ['bold']), p(e.toolbar.elements, ['headings']))
                        : S && L(e.toolbar.elements, ['table']);
                    var H = (0, m.fb)(n, 'vditor-toc');
                    if (H) return (e.wysiwyg.popover.innerHTML = ''), qe(H, e), void Pe(e, H);
                    var B = (0, _.S)(n, 'BLOCKQUOTE');
                    if (
                      (B &&
                        ((e.wysiwyg.popover.innerHTML = ''),
                        $e(t, B, e),
                        et(t, B, e),
                        qe(B, e),
                        Pe(e, B)),
                      r &&
                        ((e.wysiwyg.popover.innerHTML = ''),
                        $e(t, r, e),
                        et(t, r, e),
                        qe(r, e),
                        Pe(e, r)),
                      S)
                    ) {
                      e.options.lang, e.options, (e.wysiwyg.popover.innerHTML = '');
                      var K = function () {
                          var F = S.rows.length,
                            ke = S.rows[0].cells.length,
                            Qe = parseInt(ce.value, 10) || F,
                            Fe = parseInt(Ae.value, 10) || ke;
                          if (Qe !== F || ke !== Fe) {
                            if (ke !== Fe)
                              for (var xn = Fe - ke, ot = 0; ot < S.rows.length; ot++)
                                if (xn > 0)
                                  for (var Hn = 0; Hn < xn; Hn++)
                                    ot === 0
                                      ? S.rows[ot].lastElementChild.insertAdjacentHTML(
                                          'afterend',
                                          '<th> </th>',
                                        )
                                      : S.rows[ot].lastElementChild.insertAdjacentHTML(
                                          'afterend',
                                          '<td> </td>',
                                        );
                                else
                                  for (var zt = ke - 1; zt >= Fe; zt--)
                                    S.rows[ot].cells[zt].remove();
                            if (F !== Qe) {
                              var Nn = Qe - F;
                              if (Nn > 0) {
                                for (var Wt = '<tr>', at = 0; at < Fe; at++) Wt += '<td> </td>';
                                for (var Dn = 0; Dn < Nn; Dn++)
                                  S.querySelector('tbody')
                                    ? S.querySelector('tbody').insertAdjacentHTML('beforeend', Wt)
                                    : S.querySelector('thead').insertAdjacentHTML(
                                        'afterend',
                                        Wt + '</tr>',
                                      );
                              } else
                                for (at = F - 1; at >= Qe; at--)
                                  S.rows[at].remove(),
                                    S.rows.length === 1 && S.querySelector('tbody').remove();
                            }
                            typeof e.options.input == 'function' && e.options.input(d(e));
                          }
                        },
                        C = function (F) {
                          Et(S, F),
                            F === 'right'
                              ? (G.classList.remove('vditor-icon--current'),
                                z.classList.remove('vditor-icon--current'),
                                R.classList.add('vditor-icon--current'))
                              : F === 'center'
                                ? (G.classList.remove('vditor-icon--current'),
                                  R.classList.remove('vditor-icon--current'),
                                  z.classList.add('vditor-icon--current'))
                                : (z.classList.remove('vditor-icon--current'),
                                  R.classList.remove('vditor-icon--current'),
                                  G.classList.add('vditor-icon--current')),
                            (0, A.Hc)(t),
                            Ee(e);
                        },
                        U = (0, m.lG)(n, 'TD'),
                        W = (0, m.lG)(n, 'TH'),
                        q = 'left';
                      U
                        ? (q = U.getAttribute('align') || 'left')
                        : W && (q = W.getAttribute('align') || 'center');
                      var G = document.createElement('button');
                      G.setAttribute('type', 'button'),
                        G.setAttribute(
                          'aria-label',
                          window.VditorI18n.alignLeft + '<' + (0, c.ns)('⇧⌘L') + '>',
                        ),
                        G.setAttribute('data-type', 'left'),
                        (G.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-align-left"></use></svg>'),
                        (G.className =
                          'vditor-icon vditor-tooltipped vditor-tooltipped__n' +
                          (q === 'left' ? ' vditor-icon--current' : '')),
                        (G.onclick = function () {
                          C('left');
                        });
                      var z = document.createElement('button');
                      z.setAttribute('type', 'button'),
                        z.setAttribute(
                          'aria-label',
                          window.VditorI18n.alignCenter + '<' + (0, c.ns)('⇧⌘C') + '>',
                        ),
                        z.setAttribute('data-type', 'center'),
                        (z.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>'),
                        (z.className =
                          'vditor-icon vditor-tooltipped vditor-tooltipped__n' +
                          (q === 'center' ? ' vditor-icon--current' : '')),
                        (z.onclick = function () {
                          C('center');
                        });
                      var R = document.createElement('button');
                      R.setAttribute('type', 'button'),
                        R.setAttribute(
                          'aria-label',
                          window.VditorI18n.alignRight + '<' + (0, c.ns)('⇧⌘R') + '>',
                        ),
                        R.setAttribute('data-type', 'right'),
                        (R.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-align-right"></use></svg>'),
                        (R.className =
                          'vditor-icon vditor-tooltipped vditor-tooltipped__n' +
                          (q === 'right' ? ' vditor-icon--current' : '')),
                        (R.onclick = function () {
                          C('right');
                        });
                      var Q = document.createElement('button');
                      Q.setAttribute('type', 'button'),
                        Q.setAttribute(
                          'aria-label',
                          window.VditorI18n.insertRowBelow + '<' + (0, c.ns)('⌘=') + '>',
                        ),
                        Q.setAttribute('data-type', 'insertRow'),
                        (Q.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-insert-row"></use></svg>'),
                        (Q.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                        (Q.onclick = function () {
                          var F = getSelection().getRangeAt(0).startContainer,
                            ke = (0, m.lG)(F, 'TD') || (0, m.lG)(F, 'TH');
                          ke && pn(e, t, ke);
                        });
                      var le = document.createElement('button');
                      le.setAttribute('type', 'button'),
                        le.setAttribute(
                          'aria-label',
                          window.VditorI18n.insertRowAbove + '<' + (0, c.ns)('⇧⌘F') + '>',
                        ),
                        le.setAttribute('data-type', 'insertRow'),
                        (le.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-insert-rowb"></use></svg>'),
                        (le.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                        (le.onclick = function () {
                          var F = getSelection().getRangeAt(0).startContainer,
                            ke = (0, m.lG)(F, 'TD') || (0, m.lG)(F, 'TH');
                          ke && mn(e, t, ke);
                        });
                      var ne = document.createElement('button');
                      ne.setAttribute('type', 'button'),
                        ne.setAttribute(
                          'aria-label',
                          window.VditorI18n.insertColumnRight + '<' + (0, c.ns)('⇧⌘=') + '>',
                        ),
                        ne.setAttribute('data-type', 'insertColumn'),
                        (ne.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-insert-column"></use></svg>'),
                        (ne.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                        (ne.onclick = function () {
                          var F = getSelection().getRangeAt(0).startContainer,
                            ke = (0, m.lG)(F, 'TD') || (0, m.lG)(F, 'TH');
                          ke && kt(e, S, ke);
                        });
                      var se = document.createElement('button');
                      se.setAttribute('type', 'button'),
                        se.setAttribute(
                          'aria-label',
                          window.VditorI18n.insertColumnLeft + '<' + (0, c.ns)('⇧⌘G') + '>',
                        ),
                        se.setAttribute('data-type', 'insertColumn'),
                        (se.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-insert-columnb"></use></svg>'),
                        (se.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                        (se.onclick = function () {
                          var F = getSelection().getRangeAt(0).startContainer,
                            ke = (0, m.lG)(F, 'TD') || (0, m.lG)(F, 'TH');
                          ke && kt(e, S, ke, 'beforebegin');
                        });
                      var ae = document.createElement('button');
                      ae.setAttribute('type', 'button'),
                        ae.setAttribute(
                          'aria-label',
                          window.VditorI18n['delete-row'] + '<' + (0, c.ns)('⌘-') + '>',
                        ),
                        ae.setAttribute('data-type', 'deleteRow'),
                        (ae.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-delete-row"></use></svg>'),
                        (ae.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                        (ae.onclick = function () {
                          var F = getSelection().getRangeAt(0).startContainer,
                            ke = (0, m.lG)(F, 'TD') || (0, m.lG)(F, 'TH');
                          ke && fn(e, t, ke);
                        });
                      var Y = document.createElement('button');
                      Y.setAttribute('type', 'button'),
                        Y.setAttribute(
                          'aria-label',
                          window.VditorI18n['delete-column'] + '<' + (0, c.ns)('⇧⌘-') + '>',
                        ),
                        Y.setAttribute('data-type', 'deleteColumn'),
                        (Y.innerHTML =
                          '<svg><use xlink:href="#vditor-icon-delete-column"></use></svg>'),
                        (Y.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                        (Y.onclick = function () {
                          var F = getSelection().getRangeAt(0).startContainer,
                            ke = (0, m.lG)(F, 'TD') || (0, m.lG)(F, 'TH');
                          ke && hn(e, t, S, ke);
                        }),
                        (Be = document.createElement('span')).setAttribute(
                          'aria-label',
                          window.VditorI18n.row,
                        ),
                        (Be.className = 'vditor-tooltipped vditor-tooltipped__n');
                      var ce = document.createElement('input');
                      Be.appendChild(ce),
                        (ce.type = 'number'),
                        (ce.min = '1'),
                        (ce.className = 'vditor-input'),
                        (ce.style.width = '42px'),
                        (ce.style.textAlign = 'center'),
                        ce.setAttribute('placeholder', window.VditorI18n.row),
                        (ce.value = S.rows.length.toString()),
                        (ce.oninput = function () {
                          K();
                        }),
                        (ce.onkeydown = function (F) {
                          if (!F.isComposing)
                            return F.key === 'Tab'
                              ? (Ae.focus(), Ae.select(), void F.preventDefault())
                              : void (Oe(e, F) || ze(F, t));
                        });
                      var we = document.createElement('span');
                      we.setAttribute('aria-label', window.VditorI18n.column),
                        (we.className = 'vditor-tooltipped vditor-tooltipped__n');
                      var Ae = document.createElement('input');
                      we.appendChild(Ae),
                        (Ae.type = 'number'),
                        (Ae.min = '1'),
                        (Ae.className = 'vditor-input'),
                        (Ae.style.width = '42px'),
                        (Ae.style.textAlign = 'center'),
                        Ae.setAttribute('placeholder', window.VditorI18n.column),
                        (Ae.value = S.rows[0].cells.length.toString()),
                        (Ae.oninput = function () {
                          K();
                        }),
                        (Ae.onkeydown = function (F) {
                          if (!F.isComposing)
                            return F.key === 'Tab'
                              ? (ce.focus(), ce.select(), void F.preventDefault())
                              : void (Oe(e, F) || ze(F, t));
                        }),
                        $e(t, S, e),
                        et(t, S, e),
                        qe(S, e),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', G),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', z),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', R),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', le),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', Q),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', se),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', ne),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', ae),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', Y),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', Be),
                        e.wysiwyg.popover.insertAdjacentHTML('beforeend', ' x '),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', we),
                        Pe(e, S);
                    }
                    var Ke = (0, m.a1)(n, 'data-type', 'link-ref');
                    Ke && Xt(e, Ke, t);
                    var je = (0, m.a1)(n, 'data-type', 'footnotes-ref');
                    if (je) {
                      e.options.lang,
                        e.options,
                        (e.wysiwyg.popover.innerHTML = ''),
                        (Be = document.createElement('span')).setAttribute(
                          'aria-label',
                          window.VditorI18n.footnoteRef + '<' + (0, c.ns)('⌥Enter') + '>',
                        ),
                        (Be.className = 'vditor-tooltipped vditor-tooltipped__n');
                      var Re = document.createElement('input');
                      Be.appendChild(Re),
                        (Re.className = 'vditor-input'),
                        Re.setAttribute(
                          'placeholder',
                          window.VditorI18n.footnoteRef + '<' + (0, c.ns)('⌥Enter') + '>',
                        ),
                        (Re.style.width = '120px'),
                        (Re.value = je.getAttribute('data-footnotes-label')),
                        (Re.oninput = function () {
                          Re.value.trim() !== '' &&
                            je.setAttribute('data-footnotes-label', Re.value),
                            typeof e.options.input == 'function' && e.options.input(d(e));
                        }),
                        (Re.onkeydown = function (F) {
                          F.isComposing || Oe(e, F) || ze(F, t);
                        }),
                        qe(je, e),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', Be),
                        Pe(e, je);
                    }
                    var xe = (0, m.fb)(n, 'vditor-wysiwyg__block'),
                      rt = !!xe && xe.getAttribute('data-type').indexOf('block') > -1;
                    if (
                      (e.wysiwyg.element
                        .querySelectorAll('.vditor-wysiwyg__preview')
                        .forEach(function (F) {
                          (!xe || (xe && rt && !xe.contains(F))) &&
                            (F.previousElementSibling.style.display = 'none');
                        }),
                      xe && rt)
                    ) {
                      if (
                        ((e.wysiwyg.popover.innerHTML = ''),
                        $e(t, xe, e),
                        et(t, xe, e),
                        qe(xe, e),
                        xe.getAttribute('data-type') === 'code-block')
                      ) {
                        var Tt = document.createElement('span');
                        Tt.setAttribute(
                          'aria-label',
                          window.VditorI18n.language + '<' + (0, c.ns)('⌥Enter') + '>',
                        ),
                          (Tt.className = 'vditor-tooltipped vditor-tooltipped__n');
                        var Ve = document.createElement('input');
                        Tt.appendChild(Ve);
                        var ht = xe.firstElementChild.firstElementChild;
                        (Ve.className = 'vditor-input'),
                          Ve.setAttribute(
                            'placeholder',
                            window.VditorI18n.language + '<' + (0, c.ns)('⌥Enter') + '>',
                          ),
                          (Ve.value =
                            ht.className.indexOf('language-') > -1
                              ? ht.className.split('-')[1].split(' ')[0]
                              : ''),
                          (Ve.oninput = function (F) {
                            Ve.value.trim() !== ''
                              ? (ht.className = 'language-' + Ve.value)
                              : ((ht.className = ''), (e.hint.recentLanguage = '')),
                              xe.lastElementChild.classList.contains('vditor-wysiwyg__preview') &&
                                ((xe.lastElementChild.innerHTML = xe.firstElementChild.innerHTML),
                                be(xe.lastElementChild, e)),
                              Ee(e),
                              F.detail === 1 &&
                                (t.setStart(ht.firstChild, 0), t.collapse(!0), (0, A.Hc)(t));
                          }),
                          (Ve.onkeydown = function (F) {
                            if (!F.isComposing && !Oe(e, F)) {
                              if (F.key === 'Escape' && e.hint.element.style.display === 'block')
                                return (
                                  (e.hint.element.style.display = 'none'), void F.preventDefault()
                                );
                              e.hint.select(F, e), ze(F, t);
                            }
                          }),
                          (Ve.onkeyup = function (F) {
                            if (
                              !F.isComposing &&
                              F.key !== 'Enter' &&
                              F.key !== 'ArrowUp' &&
                              F.key !== 'Escape' &&
                              F.key !== 'ArrowDown'
                            ) {
                              var ke = [],
                                Qe = Ve.value.substring(0, Ve.selectionStart);
                              (e.options.preview.hljs.langs || h.g.CODE_LANGUAGES).forEach(
                                function (Fe) {
                                  Fe.indexOf(Qe.toLowerCase()) > -1 &&
                                    ke.push({ html: Fe, value: Fe });
                                },
                              ),
                                e.hint.genHTML(ke, Qe, e),
                                F.preventDefault();
                            }
                          }),
                          e.wysiwyg.popover.insertAdjacentElement('beforeend', Tt);
                      }
                      Pe(e, xe);
                    } else xe = void 0;
                    if (b) {
                      var Be;
                      (e.wysiwyg.popover.innerHTML = ''),
                        (Be = document.createElement('span')).setAttribute(
                          'aria-label',
                          'ID<' + (0, c.ns)('⌥Enter') + '>',
                        ),
                        (Be.className = 'vditor-tooltipped vditor-tooltipped__n');
                      var Je = document.createElement('input');
                      Be.appendChild(Je),
                        (Je.className = 'vditor-input'),
                        Je.setAttribute('placeholder', 'ID<' + (0, c.ns)('⌥Enter') + '>'),
                        (Je.style.width = '120px'),
                        (Je.value = b.getAttribute('data-id') || ''),
                        (Je.oninput = function () {
                          b.setAttribute('data-id', Je.value),
                            typeof e.options.input == 'function' && e.options.input(d(e));
                        }),
                        (Je.onkeydown = function (F) {
                          F.isComposing || Oe(e, F) || ze(F, t);
                        }),
                        $e(t, b, e),
                        et(t, b, e),
                        qe(b, e),
                        e.wysiwyg.popover.insertAdjacentElement('beforeend', Be),
                        Pe(e, b);
                    }
                    if ((E && _t(e, E, t), !(B || r || S || xe || E || Ke || je || b || H))) {
                      var it = (0, m.a1)(n, 'data-block', '0');
                      it && it.parentElement.isEqualNode(e.wysiwyg.element)
                        ? ((e.wysiwyg.popover.innerHTML = ''),
                          $e(t, it, e),
                          et(t, it, e),
                          qe(it, e),
                          Pe(e, it))
                        : (e.wysiwyg.popover.style.display = 'none');
                    }
                    e.wysiwyg.element
                      .querySelectorAll('span[data-type="backslash"] > span')
                      .forEach(function (F) {
                        F.style.display = 'none';
                      });
                    var _n = (0, m.a1)(t.startContainer, 'data-type', 'backslash');
                    _n && (_n.querySelector('span').style.display = 'inline');
                  }
                }, 200));
            },
            Pe = function (e, t) {
              var n = t,
                i = (0, m.lG)(t, 'TABLE');
              i && (n = i),
                (e.wysiwyg.popover.style.left = '0'),
                (e.wysiwyg.popover.style.display = 'block'),
                (e.wysiwyg.popover.style.top =
                  Math.max(-8, n.offsetTop - 21 - e.wysiwyg.element.scrollTop) + 'px'),
                (e.wysiwyg.popover.style.left =
                  Math.min(
                    n.offsetLeft,
                    e.wysiwyg.element.clientWidth - e.wysiwyg.popover.clientWidth,
                  ) + 'px'),
                e.wysiwyg.popover.setAttribute('data-top', (n.offsetTop - 21).toString());
            },
            Xt = function (e, t, n) {
              n === void 0 && (n = getSelection().getRangeAt(0)),
                (e.wysiwyg.popover.innerHTML = '');
              var i = function () {
                  o.value.trim() !== '' &&
                    (t.tagName === 'IMG'
                      ? t.setAttribute('alt', o.value)
                      : (t.textContent = o.value)),
                    v.value.trim() !== '' && t.setAttribute('data-link-label', v.value),
                    typeof e.options.input == 'function' && e.options.input(d(e));
                },
                r = document.createElement('span');
              r.setAttribute('aria-label', window.VditorI18n.textIsNotEmpty),
                (r.className = 'vditor-tooltipped vditor-tooltipped__n');
              var o = document.createElement('input');
              r.appendChild(o),
                (o.className = 'vditor-input'),
                o.setAttribute('placeholder', window.VditorI18n.textIsNotEmpty),
                (o.style.width = '120px'),
                (o.value = t.getAttribute('alt') || t.textContent),
                (o.oninput = function () {
                  i();
                }),
                (o.onkeydown = function (E) {
                  Oe(e, E) || ze(E, n) || ut(e, t, E, v);
                });
              var a = document.createElement('span');
              a.setAttribute('aria-label', window.VditorI18n.linkRef),
                (a.className = 'vditor-tooltipped vditor-tooltipped__n');
              var v = document.createElement('input');
              a.appendChild(v),
                (v.className = 'vditor-input'),
                v.setAttribute('placeholder', window.VditorI18n.linkRef),
                (v.value = t.getAttribute('data-link-label')),
                (v.oninput = function () {
                  i();
                }),
                (v.onkeydown = function (E) {
                  Oe(e, E) || ze(E, n) || ut(e, t, E, o);
                }),
                qe(t, e),
                e.wysiwyg.popover.insertAdjacentElement('beforeend', r),
                e.wysiwyg.popover.insertAdjacentElement('beforeend', a),
                Pe(e, t);
            },
            $e = function (e, t, n) {
              var i = t.previousElementSibling;
              if (i && (t.parentElement.isEqualNode(n.wysiwyg.element) || t.tagName === 'LI')) {
                var r = document.createElement('button');
                r.setAttribute('type', 'button'),
                  r.setAttribute('data-type', 'up'),
                  r.setAttribute('aria-label', window.VditorI18n.up + '<' + (0, c.ns)('⇧⌘U') + '>'),
                  (r.innerHTML = '<svg><use xlink:href="#vditor-icon-up"></use></svg>'),
                  (r.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                  (r.onclick = function () {
                    e.insertNode(document.createElement('wbr')),
                      i.insertAdjacentElement('beforebegin', t),
                      (0, A.ib)(n.wysiwyg.element, e),
                      Ee(n),
                      Xe(n),
                      _e(n);
                  }),
                  n.wysiwyg.popover.insertAdjacentElement('beforeend', r);
              }
            },
            et = function (e, t, n) {
              var i = t.nextElementSibling;
              if (i && (t.parentElement.isEqualNode(n.wysiwyg.element) || t.tagName === 'LI')) {
                var r = document.createElement('button');
                r.setAttribute('type', 'button'),
                  r.setAttribute('data-type', 'down'),
                  r.setAttribute(
                    'aria-label',
                    window.VditorI18n.down + '<' + (0, c.ns)('⇧⌘D') + '>',
                  ),
                  (r.innerHTML = '<svg><use xlink:href="#vditor-icon-down"></use></svg>'),
                  (r.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                  (r.onclick = function () {
                    e.insertNode(document.createElement('wbr')),
                      i.insertAdjacentElement('afterend', t),
                      (0, A.ib)(n.wysiwyg.element, e),
                      Ee(n),
                      Xe(n),
                      _e(n);
                  }),
                  n.wysiwyg.popover.insertAdjacentElement('beforeend', r);
              }
            },
            qe = function (e, t) {
              var n = document.createElement('button');
              n.setAttribute('type', 'button'),
                n.setAttribute('data-type', 'remove'),
                n.setAttribute(
                  'aria-label',
                  window.VditorI18n.remove + '<' + (0, c.ns)('⇧⌘X') + '>',
                ),
                (n.innerHTML = '<svg><use xlink:href="#vditor-icon-trashcan"></use></svg>'),
                (n.className = 'vditor-icon vditor-tooltipped vditor-tooltipped__n'),
                (n.onclick = function () {
                  var i = (0, A.zh)(t);
                  i.setStartAfter(e),
                    (0, A.Hc)(i),
                    e.remove(),
                    Ee(t),
                    Xe(t),
                    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(e.tagName) && ge(t);
                }),
                t.wysiwyg.popover.insertAdjacentElement('beforeend', n);
            },
            ut = function (e, t, n, i) {
              if (!n.isComposing) {
                if (n.key === 'Tab') return i.focus(), i.select(), void n.preventDefault();
                if (!(0, c.yl)(n) && !n.shiftKey && n.altKey && n.key === 'Enter') {
                  var r = (0, A.zh)(e);
                  t.insertAdjacentHTML('afterend', h.g.ZWSP),
                    r.setStartAfter(t.nextSibling),
                    r.collapse(!0),
                    (0, A.Hc)(r),
                    n.preventDefault();
                }
              }
            },
            _t = function (e, t, n) {
              e.wysiwyg.popover.innerHTML = '';
              var i = function () {
                o.value.trim() !== '' && (t.innerHTML = o.value),
                  t.setAttribute('href', v.value),
                  t.setAttribute('title', S.value),
                  Ee(e);
              };
              t.querySelectorAll('[data-marker]').forEach(function (b) {
                b.removeAttribute('data-marker');
              });
              var r = document.createElement('span');
              r.setAttribute('aria-label', window.VditorI18n.textIsNotEmpty),
                (r.className = 'vditor-tooltipped vditor-tooltipped__n');
              var o = document.createElement('input');
              r.appendChild(o),
                (o.className = 'vditor-input'),
                o.setAttribute('placeholder', window.VditorI18n.textIsNotEmpty),
                (o.style.width = '120px'),
                (o.value = t.innerHTML || ''),
                (o.oninput = function () {
                  i();
                }),
                (o.onkeydown = function (b) {
                  Oe(e, b) || ze(b, n) || ut(e, t, b, v);
                });
              var a = document.createElement('span');
              a.setAttribute('aria-label', window.VditorI18n.link),
                (a.className = 'vditor-tooltipped vditor-tooltipped__n');
              var v = document.createElement('input');
              a.appendChild(v),
                (v.className = 'vditor-input'),
                v.setAttribute('placeholder', window.VditorI18n.link),
                (v.value = t.getAttribute('href') || ''),
                (v.oninput = function () {
                  i();
                }),
                (v.onkeydown = function (b) {
                  Oe(e, b) || ze(b, n) || ut(e, t, b, S);
                });
              var E = document.createElement('span');
              E.setAttribute('aria-label', window.VditorI18n.tooltipText),
                (E.className = 'vditor-tooltipped vditor-tooltipped__n');
              var S = document.createElement('input');
              E.appendChild(S),
                (S.className = 'vditor-input'),
                S.setAttribute('placeholder', window.VditorI18n.tooltipText),
                (S.style.width = '60px'),
                (S.value = t.getAttribute('title') || ''),
                (S.oninput = function () {
                  i();
                }),
                (S.onkeydown = function (b) {
                  Oe(e, b) || ze(b, n) || ut(e, t, b, o);
                }),
                qe(t, e),
                e.wysiwyg.popover.insertAdjacentElement('beforeend', r),
                e.wysiwyg.popover.insertAdjacentElement('beforeend', a),
                e.wysiwyg.popover.insertAdjacentElement('beforeend', E),
                Pe(e, t);
            },
            ze = function (e, t) {
              if ((!(0, c.yl)(e) && !e.shiftKey && e.key === 'Enter') || e.key === 'Escape')
                return t && (0, A.Hc)(t), e.preventDefault(), e.stopPropagation(), !0;
            },
            tt = function (e) {
              e.currentMode === 'wysiwyg' ? Xe(e) : e.currentMode === 'ir' && ct(e);
            },
            Yt = function (e, t, n) {
              n === void 0 && (n = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 });
              var i = e.wysiwyg.element;
              (i.innerHTML = e.lute.Md2VditorDOM(t)),
                i
                  .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                  .forEach(function (r) {
                    be(r, e), r.previousElementSibling.setAttribute('style', 'display:none');
                  }),
                Ee(e, n);
            },
            Xn = function (e, t, n) {
              for (
                var i = e.startContainer.parentElement,
                  r = !1,
                  o = '',
                  a = '',
                  v = (function (C) {
                    var U = Jt(C.startContainer),
                      W = Ft(C.startContainer),
                      q = C.startContainer.textContent,
                      G = C.startOffset,
                      z = '',
                      R = '';
                    return (
                      ((q.substr(0, G) !== '' && q.substr(0, G) !== h.g.ZWSP) || U) &&
                        (z = '' + U + q.substr(0, G)),
                      ((q.substr(G) !== '' && q.substr(G) !== h.g.ZWSP) || W) &&
                        (R = '' + q.substr(G) + W),
                      { afterHTML: R, beforeHTML: z }
                    );
                  })(e),
                  E = v.beforeHTML,
                  S = v.afterHTML;
                i && !r;

              ) {
                var b = i.tagName;
                if (
                  (b === 'STRIKE' && (b = 'S'),
                  b === 'I' && (b = 'EM'),
                  b === 'B' && (b = 'STRONG'),
                  b === 'S' || b === 'STRONG' || b === 'EM')
                ) {
                  var H = '',
                    B = '',
                    K = '';
                  i.parentElement.getAttribute('data-block') !== '0' && ((B = Jt(i)), (K = Ft(i))),
                    (E || B) && (E = H = B + '<' + b + '>' + E + '</' + b + '>'),
                    ((n === 'bold' && b === 'STRONG') ||
                      (n === 'italic' && b === 'EM') ||
                      (n === 'strikeThrough' && b === 'S')) &&
                      ((H += '' + o + h.g.ZWSP + '<wbr>' + a), (r = !0)),
                    (S || K) && (H += S = '<' + b + '>' + S + '</' + b + '>' + K),
                    i.parentElement.getAttribute('data-block') !== '0'
                      ? ((i = i.parentElement).innerHTML = H)
                      : ((i.outerHTML = H), (i = i.parentElement)),
                    (o = '<' + b + '>' + o),
                    (a = '</' + b + '>' + a);
                } else r = !0;
              }
              (0, A.ib)(t.wysiwyg.element, e);
            },
            Me = function (e, t) {
              var n,
                i = this;
              (this.element = document.createElement('div')),
                t.className && (n = this.element.classList).add.apply(n, t.className.split(' '));
              var r = t.hotkey ? ' <' + (0, c.ns)(t.hotkey) + '>' : '';
              t.level === 2 && (r = t.hotkey ? ' &lt;' + (0, c.ns)(t.hotkey) + '&gt;' : '');
              var o = t.tip ? t.tip + r : '' + window.VditorI18n[t.name] + r,
                a = t.name === 'upload' ? 'div' : 'button';
              if (t.level === 2)
                this.element.innerHTML =
                  '<' + a + ' data-type="' + t.name + '">' + o + '</' + a + '>';
              else {
                this.element.classList.add('vditor-toolbar__item');
                var v = document.createElement(a);
                v.setAttribute('data-type', t.name),
                  (v.className = 'vditor-tooltipped vditor-tooltipped__' + t.tipPosition),
                  v.setAttribute('aria-label', o),
                  (v.innerHTML = t.icon),
                  this.element.appendChild(v);
              }
              t.prefix &&
                this.element.children[0].addEventListener((0, c.Le)(), function (E) {
                  E.preventDefault(),
                    i.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                      (e.currentMode === 'wysiwyg'
                        ? (function (S, b, H) {
                            if (!(S.wysiwyg.composingLock && H instanceof CustomEvent)) {
                              var B = !0,
                                K = !0;
                              S.wysiwyg.element.querySelector('wbr') &&
                                S.wysiwyg.element.querySelector('wbr').remove();
                              var C = (0, A.zh)(S),
                                U = b.getAttribute('data-type');
                              if (b.classList.contains('vditor-menu--current'))
                                if ((U === 'strike' && (U = 'strikeThrough'), U === 'quote')) {
                                  var W = (0, m.lG)(C.startContainer, 'BLOCKQUOTE');
                                  W || (W = C.startContainer.childNodes[C.startOffset]),
                                    W &&
                                      ((B = !1),
                                      b.classList.remove('vditor-menu--current'),
                                      C.insertNode(document.createElement('wbr')),
                                      (W.outerHTML =
                                        W.innerHTML.trim() === ''
                                          ? '<p data-block="0">' + W.innerHTML + '</p>'
                                          : W.innerHTML),
                                      (0, A.ib)(S.wysiwyg.element, C));
                                } else if (U === 'inline-code') {
                                  var q = (0, m.lG)(C.startContainer, 'CODE');
                                  q || (q = C.startContainer.childNodes[C.startOffset]),
                                    q &&
                                      ((q.outerHTML = q.innerHTML.replace(h.g.ZWSP, '') + '<wbr>'),
                                      (0, A.ib)(S.wysiwyg.element, C));
                                } else
                                  U === 'link'
                                    ? (C.collapsed && C.selectNode(C.startContainer.parentElement),
                                      document.execCommand('unlink', !1, ''))
                                    : U === 'check' || U === 'list' || U === 'ordered-list'
                                      ? (wt(S, C, U),
                                        (0, A.ib)(S.wysiwyg.element, C),
                                        (B = !1),
                                        b.classList.remove('vditor-menu--current'))
                                      : ((B = !1),
                                        b.classList.remove('vditor-menu--current'),
                                        C.toString() === ''
                                          ? Xn(C, S, U)
                                          : document.execCommand(U, !1, ''));
                              else {
                                S.wysiwyg.element.childNodes.length === 0 &&
                                  ((S.wysiwyg.element.innerHTML = '<p data-block="0"><wbr></p>'),
                                  (0, A.ib)(S.wysiwyg.element, C));
                                var G = (0, m.F9)(C.startContainer);
                                if (U === 'quote') {
                                  if ((G || (G = C.startContainer.childNodes[C.startOffset]), G)) {
                                    (B = !1),
                                      b.classList.add('vditor-menu--current'),
                                      C.insertNode(document.createElement('wbr'));
                                    var z = (0, m.lG)(C.startContainer, 'LI');
                                    z && G.contains(z)
                                      ? (z.innerHTML =
                                          '<blockquote data-block="0">' +
                                          z.innerHTML +
                                          '</blockquote>')
                                      : (G.outerHTML =
                                          '<blockquote data-block="0">' +
                                          G.outerHTML +
                                          '</blockquote>'),
                                      (0, A.ib)(S.wysiwyg.element, C);
                                  }
                                } else if (U === 'check' || U === 'list' || U === 'ordered-list')
                                  wt(S, C, U, !1),
                                    (0, A.ib)(S.wysiwyg.element, C),
                                    (B = !1),
                                    s(S.toolbar.elements, ['check', 'list', 'ordered-list']),
                                    b.classList.add('vditor-menu--current');
                                else if (U === 'inline-code') {
                                  if (C.toString() === '')
                                    ((R = document.createElement('code')).textContent = h.g.ZWSP),
                                      C.insertNode(R),
                                      C.setStart(R.firstChild, 1),
                                      C.collapse(!0),
                                      (0, A.Hc)(C);
                                  else if (C.startContainer.nodeType === 3) {
                                    var R = document.createElement('code');
                                    C.surroundContents(R), C.insertNode(R), (0, A.Hc)(C);
                                  }
                                  b.classList.add('vditor-menu--current');
                                } else if (U === 'code')
                                  ((R = document.createElement('div')).className =
                                    'vditor-wysiwyg__block'),
                                    R.setAttribute('data-type', 'code-block'),
                                    R.setAttribute('data-block', '0'),
                                    R.setAttribute('data-marker', '```'),
                                    C.toString() === ''
                                      ? (R.innerHTML = `<pre><code><wbr>
</code></pre>`)
                                      : ((R.innerHTML =
                                          '<pre><code>' + C.toString() + '<wbr></code></pre>'),
                                        C.deleteContents()),
                                    C.insertNode(R),
                                    G && (G.outerHTML = S.lute.SpinVditorDOM(G.outerHTML)),
                                    (0, A.ib)(S.wysiwyg.element, C),
                                    S.wysiwyg.element
                                      .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                                      .forEach(function (Ae) {
                                        be(Ae, S);
                                      }),
                                    b.classList.add('vditor-menu--disabled');
                                else if (U === 'link') {
                                  if (C.toString() === '') {
                                    var Q = document.createElement('a');
                                    (Q.innerText = h.g.ZWSP),
                                      C.insertNode(Q),
                                      C.setStart(Q.firstChild, 1),
                                      C.collapse(!0),
                                      _t(S, Q, C);
                                    var le = S.wysiwyg.popover.querySelector('input');
                                    (le.value = ''), le.focus(), (K = !1);
                                  } else {
                                    (R = document.createElement('a')).setAttribute('href', ''),
                                      (R.innerHTML = C.toString()),
                                      C.surroundContents(R),
                                      C.insertNode(R),
                                      (0, A.Hc)(C),
                                      _t(S, R, C);
                                    var ne = S.wysiwyg.popover.querySelectorAll('input');
                                    (ne[0].value = R.innerText), ne[1].focus();
                                  }
                                  (B = !1), b.classList.add('vditor-menu--current');
                                } else if (U === 'table') {
                                  var se =
                                    '<table data-block="0"><thead><tr><th>col1<wbr></th><th>col2</th><th>col3</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td></tr></tbody></table>';
                                  if (C.toString().trim() === '')
                                    G && G.innerHTML.trim().replace(h.g.ZWSP, '') === ''
                                      ? (G.outerHTML = se)
                                      : document.execCommand('insertHTML', !1, se),
                                      C.selectNode(
                                        S.wysiwyg.element.querySelector('wbr').previousSibling,
                                      ),
                                      S.wysiwyg.element.querySelector('wbr').remove(),
                                      (0, A.Hc)(C);
                                  else {
                                    se = '<table data-block="0"><thead><tr>';
                                    var ae = C.toString().split(`
`),
                                      Y =
                                        ae[0].split(',').length > ae[0].split('	').length ? ',' : '	';
                                    ae.forEach(function (Ae, Ke) {
                                      Ke === 0
                                        ? (Ae.split(Y).forEach(function (je, Re) {
                                            se +=
                                              Re === 0
                                                ? '<th>' + je + '<wbr></th>'
                                                : '<th>' + je + '</th>';
                                          }),
                                          (se += '</tr></thead>'))
                                        : ((se += Ke === 1 ? '<tbody><tr>' : '<tr>'),
                                          Ae.split(Y).forEach(function (je) {
                                            se += '<td>' + je + '</td>';
                                          }),
                                          (se += '</tr>'));
                                    }),
                                      (se += '</tbody></table>'),
                                      document.execCommand('insertHTML', !1, se),
                                      (0, A.ib)(S.wysiwyg.element, C);
                                  }
                                  (B = !1), b.classList.add('vditor-menu--disabled');
                                } else if (U === 'line') {
                                  if (G) {
                                    var ce = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                                    G.innerHTML.trim() === ''
                                      ? (G.outerHTML = ce)
                                      : G.insertAdjacentHTML('afterend', ce),
                                      (0, A.ib)(S.wysiwyg.element, C);
                                  }
                                } else if (
                                  ((B = !1),
                                  b.classList.add('vditor-menu--current'),
                                  U === 'strike' && (U = 'strikeThrough'),
                                  C.toString() !== '' ||
                                    (U !== 'bold' && U !== 'italic' && U !== 'strikeThrough'))
                                )
                                  document.execCommand(U, !1, '');
                                else {
                                  var we = 'strong';
                                  U === 'italic'
                                    ? (we = 'em')
                                    : U === 'strikeThrough' && (we = 's'),
                                    ((R = document.createElement(we)).textContent = h.g.ZWSP),
                                    C.insertNode(R),
                                    R.previousSibling &&
                                      R.previousSibling.textContent === h.g.ZWSP &&
                                      (R.previousSibling.textContent = ''),
                                    C.setStart(R.firstChild, 1),
                                    C.collapse(!0),
                                    (0, A.Hc)(C);
                                }
                              }
                              B && Xe(S), K && Ee(S);
                            }
                          })(e, i.element.children[0], E)
                        : e.currentMode === 'ir'
                          ? cr(e, i.element.children[0], t.prefix || '', t.suffix || '')
                          : er(e, i.element.children[0], t.prefix || '', t.suffix || ''));
                });
            },
            Yn =
              ((Ze = function (e, t) {
                return (
                  (Ze =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (n, i) {
                        n.__proto__ = i;
                      }) ||
                    function (n, i) {
                      for (var r in i) i.hasOwnProperty(r) && (n[r] = i[r]);
                    }),
                  Ze(e, t)
                );
              }),
              function (e, t) {
                function n() {
                  this.constructor = e;
                }
                Ze(e, t),
                  (e.prototype =
                    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n()));
              }),
            Ye = function (e, t, n) {
              var i;
              if (
                (typeof n != 'string'
                  ? (g(e, ['subToolbar', 'hint']), n.preventDefault(), (i = d(e)))
                  : (i = n),
                e.currentMode !== t || typeof n == 'string')
              ) {
                if (
                  (e.devtools && e.devtools.renderEchart(e),
                  e.options.preview.mode === 'both' && t === 'sv'
                    ? (e.preview.element.style.display = 'block')
                    : (e.preview.element.style.display = 'none'),
                  f(e.toolbar.elements, h.g.EDIT_TOOLBARS),
                  s(e.toolbar.elements, h.g.EDIT_TOOLBARS),
                  L(e.toolbar.elements, ['outdent', 'indent']),
                  t === 'ir')
                )
                  w(e.toolbar.elements, ['both']),
                    T(e.toolbar.elements, [
                      'outdent',
                      'indent',
                      'outline',
                      'insert-before',
                      'insert-after',
                    ]),
                    (e.sv.element.style.display = 'none'),
                    (e.wysiwyg.element.parentElement.style.display = 'none'),
                    (e.ir.element.parentElement.style.display = 'block'),
                    e.lute.SetVditorIR(!0),
                    e.lute.SetVditorWYSIWYG(!1),
                    e.lute.SetVditorSV(!1),
                    (e.currentMode = 'ir'),
                    (e.ir.element.innerHTML = e.lute.Md2VditorIRDOM(i)),
                    Ge(e, { enableAddUndoStack: !0, enableHint: !1, enableInput: !1 }),
                    he(e),
                    e.ir.element
                      .querySelectorAll(".vditor-ir__preview[data-render='2']")
                      .forEach(function (o) {
                        be(o, e);
                      }),
                    e.ir.element.querySelectorAll('.vditor-toc').forEach(function (o) {
                      (0, de.H)(o, { cdn: e.options.cdn, math: e.options.preview.math });
                    });
                else if (t === 'wysiwyg')
                  w(e.toolbar.elements, ['both']),
                    T(e.toolbar.elements, [
                      'outdent',
                      'indent',
                      'outline',
                      'insert-before',
                      'insert-after',
                    ]),
                    (e.sv.element.style.display = 'none'),
                    (e.wysiwyg.element.parentElement.style.display = 'block'),
                    (e.ir.element.parentElement.style.display = 'none'),
                    e.lute.SetVditorIR(!1),
                    e.lute.SetVditorWYSIWYG(!0),
                    e.lute.SetVditorSV(!1),
                    (e.currentMode = 'wysiwyg'),
                    he(e),
                    Yt(e, i, { enableAddUndoStack: !0, enableHint: !1, enableInput: !1 }),
                    e.wysiwyg.element.querySelectorAll('.vditor-toc').forEach(function (o) {
                      (0, de.H)(o, { cdn: e.options.cdn, math: e.options.preview.math });
                    }),
                    (e.wysiwyg.popover.style.display = 'none');
                else if (t === 'sv') {
                  T(e.toolbar.elements, ['both']),
                    w(e.toolbar.elements, [
                      'outdent',
                      'indent',
                      'outline',
                      'insert-before',
                      'insert-after',
                    ]),
                    (e.wysiwyg.element.parentElement.style.display = 'none'),
                    (e.ir.element.parentElement.style.display = 'none'),
                    (e.options.preview.mode === 'both' || e.options.preview.mode === 'editor') &&
                      (e.sv.element.style.display = 'block'),
                    e.lute.SetVditorIR(!1),
                    e.lute.SetVditorWYSIWYG(!1),
                    e.lute.SetVditorSV(!0),
                    (e.currentMode = 'sv');
                  var r = en(i, e);
                  r === "<div data-block='0'></div>" && (r = ''),
                    (e.sv.element.innerHTML = r),
                    $(e.sv.element),
                    Ne(e, { enableAddUndoStack: !0, enableHint: !1, enableInput: !1 }),
                    he(e);
                }
                e.undo.resetIcon(e),
                  typeof n != 'string' && (e[e.currentMode].element.focus(), tt(e)),
                  ge(e),
                  oe(e),
                  e.toolbar.elements['edit-mode'] &&
                    (e.toolbar.elements['edit-mode']
                      .querySelectorAll('button')
                      .forEach(function (o) {
                        o.classList.remove('vditor-menu--current');
                      }),
                    e.toolbar.elements['edit-mode']
                      .querySelector('button[data-mode="' + e.currentMode + '"]')
                      .classList.add('vditor-menu--current')),
                  e.outline.toggle(
                    e,
                    e.currentMode !== 'sv' && e.options.outline.enable,
                    typeof n != 'string',
                  );
              }
            },
            Qn = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = document.createElement('div');
                return (
                  (o.className = 'vditor-hint' + (i.level === 2 ? '' : ' vditor-panel--arrow')),
                  (o.innerHTML =
                    '<button data-mode="wysiwyg">' +
                    window.VditorI18n.wysiwyg +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘7') +
                    `></button>
<button data-mode="ir">` +
                    window.VditorI18n.instantRendering +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘8') +
                    `></button>
<button data-mode="sv">` +
                    window.VditorI18n.splitView +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘9') +
                    '></button>'),
                  r.element.appendChild(o),
                  r._bindEvent(n, o, i),
                  r
                );
              }
              return (
                Yn(t, e),
                (t.prototype._bindEvent = function (n, i, r) {
                  var o = this.element.children[0];
                  k(n, i, o, r.level),
                    i.children.item(0).addEventListener((0, c.Le)(), function (a) {
                      Ye(n, 'wysiwyg', a), a.preventDefault(), a.stopPropagation();
                    }),
                    i.children.item(1).addEventListener((0, c.Le)(), function (a) {
                      Ye(n, 'ir', a), a.preventDefault(), a.stopPropagation();
                    }),
                    i.children.item(2).addEventListener((0, c.Le)(), function (a) {
                      Ye(n, 'sv', a), a.preventDefault(), a.stopPropagation();
                    });
                }),
                t
              );
            })(Me),
            pt = function (e, t) {
              return (0, A.Gb)(e, t) ? getSelection().toString() : '';
            },
            xt = function (e, t) {
              t.addEventListener('focus', function () {
                e.options.focus && e.options.focus(d(e)), g(e, ['subToolbar', 'hint']);
              });
            },
            Qt = function (e, t) {
              t.addEventListener('dblclick', function (n) {
                n.target.tagName === 'IMG' &&
                  (e.options.image.preview
                    ? e.options.image.preview(n.target)
                    : e.options.image.isPreview &&
                      (0, re.E)(n.target, e.options.lang, e.options.theme));
              });
            },
            Ht = function (e, t) {
              t.addEventListener('blur', function (n) {
                if (e.currentMode === 'ir') {
                  var i = e.ir.element.querySelector('.vditor-ir__node--expand');
                  i && i.classList.remove('vditor-ir__node--expand');
                } else
                  e.currentMode !== 'wysiwyg' ||
                    e.wysiwyg.selectPopover.contains(n.relatedTarget) ||
                    e.wysiwyg.hideComment();
                (e[e.currentMode].range = (0, A.zh)(e)), e.options.blur && e.options.blur(d(e));
              });
            },
            Nt = function (e, t) {
              t.addEventListener('dragstart', function (n) {
                n.dataTransfer.setData(h.g.DROP_EDITOR, h.g.DROP_EDITOR);
              }),
                t.addEventListener('drop', function (n) {
                  n.dataTransfer.getData(h.g.DROP_EDITOR)
                    ? pe(e)
                    : (n.dataTransfer.types.includes('Files') ||
                        n.dataTransfer.types.includes('text/html')) &&
                      St(e, n, {
                        pasteCode: function (i) {
                          document.execCommand('insertHTML', !1, i);
                        },
                      });
                });
            },
            Dt = function (e, t, n) {
              t.addEventListener('copy', function (i) {
                return n(i, e);
              });
            },
            Ot = function (e, t, n) {
              t.addEventListener('cut', function (i) {
                n(i, e),
                  e.options.comment.enable &&
                    e.currentMode === 'wysiwyg' &&
                    e.wysiwyg.getComments(e),
                  document.execCommand('delete');
              });
            },
            _e = function (e) {
              if (
                (e.currentMode === 'wysiwyg' &&
                  e.options.comment.enable &&
                  e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)),
                e.options.typewriterMode)
              ) {
                var t = e[e.currentMode].element,
                  n = (0, A.Ny)(t).top;
                e.options.height !== 'auto' ||
                  e.element.classList.contains('vditor--fullscreen') ||
                  window.scrollTo(
                    window.scrollX,
                    n +
                      e.element.offsetTop +
                      e.toolbar.element.offsetHeight -
                      window.innerHeight / 2 +
                      10,
                  ),
                  (e.options.height !== 'auto' ||
                    e.element.classList.contains('vditor--fullscreen')) &&
                    (t.scrollTop = n + t.scrollTop - t.clientHeight / 2 + 10);
              }
            },
            jt = function (e, t) {
              t.addEventListener('keydown', function (n) {
                if (
                  (!n.isComposing && e.options.keydown && e.options.keydown(n),
                  !(e.options.hint.extend.length > 1 || e.toolbar.elements.emoji) ||
                    !e.hint.select(n, e))
                ) {
                  if (
                    (e.options.comment.enable &&
                      e.currentMode === 'wysiwyg' &&
                      (n.key === 'Backspace' || j('⌘X', n)) &&
                      e.wysiwyg.getComments(e),
                    e.currentMode === 'sv')
                  ) {
                    if (
                      (function (r, o) {
                        var a, v, E, S, b;
                        if (
                          ((r.sv.composingLock = o.isComposing),
                          o.isComposing ||
                            (o.key.indexOf('Arrow') !== -1 ||
                              o.key === 'Meta' ||
                              o.key === 'Control' ||
                              o.key === 'Alt' ||
                              o.key === 'Shift' ||
                              o.key === 'CapsLock' ||
                              o.key === 'Escape' ||
                              /^F\d{1,2}$/.test(o.key) ||
                              r.undo.recordFirstPosition(r, o),
                            o.key !== 'Enter' &&
                              o.key !== 'Tab' &&
                              o.key !== 'Backspace' &&
                              o.key.indexOf('Arrow') === -1 &&
                              !(0, c.yl)(o) &&
                              o.key !== 'Escape'))
                        )
                          return !1;
                        var H = (0, A.zh)(r),
                          B = H.startContainer;
                        H.startContainer.nodeType !== 3 &&
                          H.startContainer.tagName === 'DIV' &&
                          (B = H.startContainer.childNodes[H.startOffset - 1]);
                        var K = (0, m.a1)(B, 'data-type', 'text'),
                          C = (0, m.a1)(B, 'data-type', 'blockquote-marker');
                        if (
                          (!C &&
                            H.startOffset === 0 &&
                            K &&
                            K.previousElementSibling &&
                            K.previousElementSibling.getAttribute('data-type') ===
                              'blockquote-marker' &&
                            (C = K.previousElementSibling),
                          C &&
                            o.key === 'Enter' &&
                            !(0, c.yl)(o) &&
                            !o.altKey &&
                            C.nextElementSibling.textContent.trim() === '' &&
                            (0, A.im)(C, r.sv.element, H).start === C.textContent.length)
                        )
                          return (
                            ((a = C.previousElementSibling) === null || a === void 0
                              ? void 0
                              : a.getAttribute('data-type')) === 'padding' &&
                              C.previousElementSibling.setAttribute('data-action', 'enter-remove'),
                            C.remove(),
                            Ne(r),
                            o.preventDefault(),
                            !0
                          );
                        var U = (0, m.a1)(B, 'data-type', 'li-marker'),
                          W = (0, m.a1)(B, 'data-type', 'task-marker'),
                          q = U;
                        if (
                          (q ||
                            (W &&
                              W.nextElementSibling.getAttribute('data-type') !== 'task-marker' &&
                              (q = W)),
                          q ||
                            H.startOffset !== 0 ||
                            !K ||
                            !K.previousElementSibling ||
                            (K.previousElementSibling.getAttribute('data-type') !== 'li-marker' &&
                              K.previousElementSibling.getAttribute('data-type') !==
                                'task-marker') ||
                            (q = K.previousElementSibling),
                          q)
                        ) {
                          var G = (0, A.im)(q, r.sv.element, H).start,
                            z = q.getAttribute('data-type') === 'task-marker',
                            R = q;
                          if (
                            (z &&
                              (R =
                                q.previousElementSibling.previousElementSibling
                                  .previousElementSibling),
                            G === q.textContent.length)
                          ) {
                            if (
                              o.key === 'Enter' &&
                              !(0, c.yl)(o) &&
                              !o.altKey &&
                              !o.shiftKey &&
                              q.nextElementSibling.textContent.trim() === ''
                            )
                              return (
                                ((v = R.previousElementSibling) === null || v === void 0
                                  ? void 0
                                  : v.getAttribute('data-type')) === 'padding'
                                  ? (R.previousElementSibling.remove(), te(r))
                                  : (z &&
                                      (R.remove(),
                                      q.previousElementSibling.previousElementSibling.remove(),
                                      q.previousElementSibling.remove()),
                                    q.nextElementSibling.remove(),
                                    q.remove(),
                                    Ne(r)),
                                o.preventDefault(),
                                !0
                              );
                            if (o.key === 'Tab')
                              return (
                                R.insertAdjacentHTML(
                                  'beforebegin',
                                  '<span data-type="padding">' +
                                    R.textContent.replace(/\S/g, ' ') +
                                    '</span>',
                                ),
                                /^\d/.test(R.textContent) &&
                                  ((R.textContent = R.textContent.replace(/^\d{1,}/, '1')),
                                  H.selectNodeContents(q.firstChild),
                                  H.collapse(!1)),
                                te(r),
                                o.preventDefault(),
                                !0
                              );
                          }
                        }
                        if (Vt(r, H, o)) return !0;
                        var Q = (0, m.a1)(B, 'data-block', '0'),
                          le = (0, _.S)(B, 'SPAN');
                        if (o.key === 'Enter' && !(0, c.yl)(o) && !o.altKey && !o.shiftKey && Q) {
                          var ne = !1,
                            se = Q.textContent.match(/^\n+/);
                          (0, A.im)(Q, r.sv.element).start <= (se ? se[0].length : 0) && (ne = !0);
                          var ae = `
`;
                          if (le) {
                            if (
                              ((E = le.previousElementSibling) === null || E === void 0
                                ? void 0
                                : E.getAttribute('data-action')) === 'enter-remove'
                            )
                              return (
                                le.previousElementSibling.remove(), Ne(r), o.preventDefault(), !0
                              );
                            ae += $n(le);
                          }
                          return (
                            H.insertNode(document.createTextNode(ae)),
                            H.collapse(!1),
                            Q && Q.textContent.trim() !== '' && !ne ? te(r) : Ne(r),
                            o.preventDefault(),
                            !0
                          );
                        }
                        if (o.key === 'Backspace' && !(0, c.yl)(o) && !o.altKey && !o.shiftKey) {
                          if (
                            le &&
                            ((S = le.previousElementSibling) === null || S === void 0
                              ? void 0
                              : S.getAttribute('data-type')) === 'newline' &&
                            (0, A.im)(le, r.sv.element, H).start === 1 &&
                            le.getAttribute('data-type').indexOf('code-block-') === -1
                          )
                            return (
                              H.setStart(le, 0),
                              H.extractContents(),
                              le.textContent.trim() !== '' ? te(r) : Ne(r),
                              o.preventDefault(),
                              !0
                            );
                          if (
                            Q &&
                            (0, A.im)(Q, r.sv.element, H).start === 0 &&
                            Q.previousElementSibling
                          ) {
                            H.extractContents();
                            var Y = Q.previousElementSibling.lastElementChild;
                            return (
                              Y.getAttribute('data-type') === 'newline' &&
                                (Y.remove(), (Y = Q.previousElementSibling.lastElementChild)),
                              Y.getAttribute('data-type') !== 'newline' &&
                                (Y.insertAdjacentHTML('afterend', Q.innerHTML), Q.remove()),
                              Q.textContent.trim() === '' ||
                              (!((b = Q.previousElementSibling) === null || b === void 0) &&
                                b.querySelector('[data-type="code-block-open-marker"]'))
                                ? (Y.getAttribute('data-type') !== 'newline' &&
                                    (H.selectNodeContents(Y.lastChild), H.collapse(!1)),
                                  Ne(r))
                                : te(r),
                              o.preventDefault(),
                              !0
                            );
                          }
                        }
                        return !1;
                      })(e, n)
                    )
                      return;
                  } else if (e.currentMode === 'wysiwyg') {
                    if (
                      (function (r, o) {
                        if (((r.wysiwyg.composingLock = o.isComposing), o.isComposing)) return !1;
                        o.key.indexOf('Arrow') !== -1 ||
                          o.key === 'Meta' ||
                          o.key === 'Control' ||
                          o.key === 'Alt' ||
                          o.key === 'Shift' ||
                          o.key === 'CapsLock' ||
                          o.key === 'Escape' ||
                          /^F\d{1,2}$/.test(o.key) ||
                          r.undo.recordFirstPosition(r, o);
                        var a = (0, A.zh)(r),
                          v = a.startContainer;
                        if (
                          !on(o, r, v) ||
                          (an(a, r, o),
                          En(a),
                          o.key !== 'Enter' &&
                            o.key !== 'Tab' &&
                            o.key !== 'Backspace' &&
                            o.key.indexOf('Arrow') === -1 &&
                            !(0, c.yl)(o) &&
                            o.key !== 'Escape' &&
                            o.key !== 'Delete')
                        )
                          return !1;
                        var E = (0, m.F9)(v),
                          S = (0, m.lG)(v, 'P');
                        if (un(o, r, S, a) || dn(a, r, S, o) || vn(r, o, a)) return !0;
                        var b = (0, m.fb)(v, 'vditor-wysiwyg__block');
                        if (b) {
                          if (o.key === 'Escape' && b.children.length === 2)
                            return (
                              (r.wysiwyg.popover.style.display = 'none'),
                              (b.firstElementChild.style.display = 'none'),
                              r.wysiwyg.element.blur(),
                              o.preventDefault(),
                              !0
                            );
                          if (
                            !(0, c.yl)(o) &&
                            !o.shiftKey &&
                            o.altKey &&
                            o.key === 'Enter' &&
                            b.getAttribute('data-type') === 'code-block'
                          ) {
                            var H = r.wysiwyg.popover.querySelector('.vditor-input');
                            return H.focus(), H.select(), o.preventDefault(), !0;
                          }
                          if (
                            b.getAttribute('data-block') === '0' &&
                            (gn(r, o, b.firstElementChild, a) ||
                              mt(r, o, a, b.firstElementChild, b) ||
                              (b.getAttribute('data-type') !== 'yaml-front-matter' &&
                                nt(r, o, a, b.firstElementChild, b)))
                          )
                            return !0;
                        }
                        if (yn(r, a, o, S)) return !0;
                        var B = (0, m.E2)(v, 'BLOCKQUOTE');
                        if (B && !o.shiftKey && o.altKey && o.key === 'Enter') {
                          (0, c.yl)(o) ? a.setStartBefore(B) : a.setStartAfter(B), (0, A.Hc)(a);
                          var K = document.createElement('p');
                          return (
                            K.setAttribute('data-block', '0'),
                            (K.innerHTML = `
`),
                            a.insertNode(K),
                            a.collapse(!0),
                            (0, A.Hc)(a),
                            Ee(r),
                            _e(r),
                            o.preventDefault(),
                            !0
                          );
                        }
                        var C,
                          U = (0, _.W)(v);
                        if (U) {
                          if (
                            U.tagName === 'H6' &&
                            v.textContent.length === a.startOffset &&
                            !(0, c.yl)(o) &&
                            !o.shiftKey &&
                            !o.altKey &&
                            o.key === 'Enter'
                          ) {
                            var W = document.createElement('p');
                            return (
                              (W.textContent = `
`),
                              W.setAttribute('data-block', '0'),
                              v.parentElement.insertAdjacentElement('afterend', W),
                              a.setStart(W, 0),
                              (0, A.Hc)(a),
                              Ee(r),
                              _e(r),
                              o.preventDefault(),
                              !0
                            );
                          }
                          var q;
                          if (j('⌘=', o))
                            return (
                              (q = parseInt(U.tagName.substr(1), 10) - 1) > 0 &&
                                (vt(r, 'h' + q), Ee(r)),
                              o.preventDefault(),
                              !0
                            );
                          if (j('⌘-', o))
                            return (
                              (q = parseInt(U.tagName.substr(1), 10) + 1) < 7 &&
                                (vt(r, 'h' + q), Ee(r)),
                              o.preventDefault(),
                              !0
                            );
                          o.key !== 'Backspace' ||
                            (0, c.yl)(o) ||
                            o.shiftKey ||
                            o.altKey ||
                            U.textContent.length !== 1 ||
                            Ct(r);
                        }
                        if (bn(r, a, o)) return !0;
                        if (o.altKey && o.key === 'Enter' && !(0, c.yl)(o) && !o.shiftKey) {
                          var G = (0, m.lG)(v, 'A'),
                            z = (0, m.a1)(v, 'data-type', 'link-ref'),
                            R = (0, m.a1)(v, 'data-type', 'footnotes-ref');
                          if (G || z || R || (U && U.tagName.length === 2)) {
                            var Q = r.wysiwyg.popover.querySelector('input');
                            Q.focus(), Q.select();
                          }
                        }
                        if (Oe(r, o)) return !0;
                        if (
                          (j('⇧⌘U', o) &&
                            (C = r.wysiwyg.popover.querySelector('[data-type="up"]'))) ||
                          (j('⇧⌘D', o) &&
                            (C = r.wysiwyg.popover.querySelector('[data-type="down"]')))
                        )
                          return C.click(), o.preventDefault(), !0;
                        if (Vt(r, a, o)) return !0;
                        if (
                          !(0, c.yl)(o) &&
                          o.shiftKey &&
                          !o.altKey &&
                          o.key === 'Enter' &&
                          v.parentElement.tagName !== 'LI' &&
                          v.parentElement.tagName !== 'P'
                        )
                          return (
                            ['STRONG', 'STRIKE', 'S', 'I', 'EM', 'B'].includes(
                              v.parentElement.tagName,
                            )
                              ? a.insertNode(
                                  document.createTextNode(
                                    `
` + h.g.ZWSP,
                                  ),
                                )
                              : a.insertNode(
                                  document.createTextNode(`
`),
                                ),
                            a.collapse(!1),
                            (0, A.Hc)(a),
                            Ee(r),
                            _e(r),
                            o.preventDefault(),
                            !0
                          );
                        if (
                          o.key === 'Backspace' &&
                          !(0, c.yl)(o) &&
                          !o.shiftKey &&
                          !o.altKey &&
                          a.toString() === ''
                        ) {
                          if (wn(r, a, o, S)) return !0;
                          if (E) {
                            if (
                              E.previousElementSibling &&
                              E.previousElementSibling.classList.contains(
                                'vditor-wysiwyg__block',
                              ) &&
                              E.previousElementSibling.getAttribute('data-block') === '0' &&
                              E.tagName !== 'UL' &&
                              E.tagName !== 'OL'
                            ) {
                              var le = (0, A.im)(E, r.wysiwyg.element, a).start;
                              if (
                                (le === 0 && a.startOffset === 0) ||
                                (le === 1 && E.innerText.startsWith(h.g.ZWSP))
                              )
                                return (
                                  dt(E.previousElementSibling.lastElementChild, r, !1),
                                  E.innerHTML.trim().replace(h.g.ZWSP, '') === '' &&
                                    (E.remove(), Ee(r)),
                                  o.preventDefault(),
                                  !0
                                );
                            }
                            var ne = a.startOffset;
                            if (
                              a.toString() === '' &&
                              v.nodeType === 3 &&
                              v.textContent.charAt(ne - 2) ===
                                `
` &&
                              v.textContent.charAt(ne - 1) !== h.g.ZWSP &&
                              ['STRONG', 'STRIKE', 'S', 'I', 'EM', 'B'].includes(
                                v.parentElement.tagName,
                              )
                            )
                              return (
                                (v.textContent = v.textContent.substring(0, ne - 1) + h.g.ZWSP),
                                a.setStart(v, ne),
                                a.collapse(!0),
                                Ee(r),
                                o.preventDefault(),
                                !0
                              );
                            v.textContent === h.g.ZWSP &&
                              a.startOffset === 1 &&
                              !v.previousSibling &&
                              (function (ae) {
                                for (
                                  var Y = ae.startContainer.nextSibling;
                                  Y && Y.textContent === '';

                                )
                                  Y = Y.nextSibling;
                                return !(
                                  !Y ||
                                  Y.nodeType === 3 ||
                                  (Y.tagName !== 'CODE' &&
                                    Y.getAttribute('data-type') !== 'math-inline' &&
                                    Y.getAttribute('data-type') !== 'html-entity' &&
                                    Y.getAttribute('data-type') !== 'html-inline')
                                );
                              })(a) &&
                              (v.textContent = ''),
                              E.querySelectorAll(
                                "span.vditor-wysiwyg__block[data-type='math-inline']",
                              ).forEach(function (ae) {
                                (ae.firstElementChild.style.display = 'inline'),
                                  (ae.lastElementChild.style.display = 'none');
                              }),
                              E.querySelectorAll(
                                "span.vditor-wysiwyg__block[data-type='html-entity']",
                              ).forEach(function (ae) {
                                (ae.firstElementChild.style.display = 'inline'),
                                  (ae.lastElementChild.style.display = 'none');
                              });
                          }
                        }
                        if (
                          (0, c.vU)() &&
                          a.startOffset === 1 &&
                          v.textContent.indexOf(h.g.ZWSP) > -1 &&
                          v.previousSibling &&
                          v.previousSibling.nodeType !== 3 &&
                          v.previousSibling.tagName === 'CODE' &&
                          (o.key === 'Backspace' || o.key === 'ArrowLeft')
                        )
                          return (
                            a.selectNodeContents(v.previousSibling),
                            a.collapse(!1),
                            o.preventDefault(),
                            !0
                          );
                        if (kn(o, E, a)) return o.preventDefault(), !0;
                        if ((sn(a, o.key), o.key === 'ArrowDown')) {
                          var se = v.nextSibling;
                          se &&
                            se.nodeType !== 3 &&
                            se.getAttribute('data-type') === 'math-inline' &&
                            a.setStartAfter(se);
                        }
                        return !(!E || !N(E, r, o, a) || (o.preventDefault(), 0));
                      })(e, n)
                    )
                      return;
                  } else if (
                    e.currentMode === 'ir' &&
                    (function (r, o) {
                      if (((r.ir.composingLock = o.isComposing), o.isComposing)) return !1;
                      o.key.indexOf('Arrow') !== -1 ||
                        o.key === 'Meta' ||
                        o.key === 'Control' ||
                        o.key === 'Alt' ||
                        o.key === 'Shift' ||
                        o.key === 'CapsLock' ||
                        o.key === 'Escape' ||
                        /^F\d{1,2}$/.test(o.key) ||
                        r.undo.recordFirstPosition(r, o);
                      var a = (0, A.zh)(r),
                        v = a.startContainer;
                      if (
                        !on(o, r, v) ||
                        (an(a, r, o),
                        En(a),
                        o.key !== 'Enter' &&
                          o.key !== 'Tab' &&
                          o.key !== 'Backspace' &&
                          o.key.indexOf('Arrow') === -1 &&
                          !(0, c.yl)(o) &&
                          o.key !== 'Escape' &&
                          o.key !== 'Delete')
                      )
                        return !1;
                      var E = (0, m.a1)(v, 'data-newline', '1');
                      if (
                        !(0, c.yl)(o) &&
                        !o.altKey &&
                        !o.shiftKey &&
                        o.key === 'Enter' &&
                        E &&
                        a.startOffset < E.textContent.length
                      ) {
                        var S = E.previousElementSibling;
                        S && (a.insertNode(document.createTextNode(S.textContent)), a.collapse(!1));
                        var b = E.nextSibling;
                        b && (a.insertNode(document.createTextNode(b.textContent)), a.collapse(!0));
                      }
                      var H = (0, m.lG)(v, 'P');
                      if (un(o, r, H, a) || dn(a, r, H, o) || yn(r, a, o, H)) return !0;
                      var B = (0, m.fb)(v, 'vditor-ir__marker--pre');
                      if (B && B.tagName === 'PRE') {
                        var K = B.firstChild;
                        if (
                          gn(r, o, B, a) ||
                          ((K.getAttribute('data-type') === 'math-block' ||
                            K.getAttribute('data-type') === 'html-block') &&
                            nt(r, o, a, K, B.parentElement)) ||
                          mt(r, o, a, K, B.parentElement)
                        )
                          return !0;
                      }
                      var C = (0, m.a1)(v, 'data-type', 'code-block-info');
                      if (C) {
                        if (o.key === 'Enter' || o.key === 'Tab')
                          return (
                            a.selectNodeContents(C.nextElementSibling.firstChild),
                            a.collapse(!0),
                            o.preventDefault(),
                            g(r, ['hint']),
                            !0
                          );
                        if (o.key === 'Backspace') {
                          var U = (0, A.im)(C, r.ir.element).start;
                          U === 1 && a.setStart(v, 0), U === 2 && (r.hint.recentLanguage = '');
                        }
                        if (nt(r, o, a, C, C.parentElement)) return g(r, ['hint']), !0;
                      }
                      var W = (0, m.lG)(v, 'TD') || (0, m.lG)(v, 'TH');
                      if (o.key.indexOf('Arrow') > -1 && W) {
                        var q = sr(W);
                        if (q && nt(r, o, a, W, q)) return !0;
                        var G = lr(W);
                        if (G && mt(r, o, a, W, G)) return !0;
                      }
                      if (vn(r, o, a) || bn(r, a, o) || Vt(r, a, o)) return !0;
                      var z = (0, _.W)(v);
                      if (z) {
                        var R;
                        if (j('⌘=', o))
                          return (
                            (R = z.querySelector('.vditor-ir__marker--heading')) &&
                              R.textContent.trim().length > 1 &&
                              ft(r, R.textContent.substr(1)),
                            o.preventDefault(),
                            !0
                          );
                        if (j('⌘-', o))
                          return (
                            (R = z.querySelector('.vditor-ir__marker--heading')) &&
                              R.textContent.trim().length < 6 &&
                              ft(r, R.textContent.trim() + '# '),
                            o.preventDefault(),
                            !0
                          );
                      }
                      var Q = (0, m.F9)(v);
                      if (
                        o.key === 'Backspace' &&
                        !(0, c.yl)(o) &&
                        !o.shiftKey &&
                        !o.altKey &&
                        a.toString() === ''
                      ) {
                        if (wn(r, a, o, H)) return !0;
                        if (
                          Q &&
                          Q.previousElementSibling &&
                          Q.tagName !== 'UL' &&
                          Q.tagName !== 'OL' &&
                          (Q.previousElementSibling.getAttribute('data-type') === 'code-block' ||
                            Q.previousElementSibling.getAttribute('data-type') === 'math-block')
                        ) {
                          var le = (0, A.im)(Q, r.ir.element, a).start;
                          if (le === 0 || (le === 1 && Q.innerText.startsWith(h.g.ZWSP)))
                            return (
                              a.selectNodeContents(
                                Q.previousElementSibling.querySelector(
                                  '.vditor-ir__marker--pre code',
                                ),
                              ),
                              a.collapse(!1),
                              O(a, r),
                              Q.textContent.trim().replace(h.g.ZWSP, '') === '' &&
                                (Q.remove(), Ge(r)),
                              o.preventDefault(),
                              !0
                            );
                        }
                        if (z) {
                          var ne = z.firstElementChild.textContent.length;
                          (0, A.im)(z, r.ir.element).start === ne &&
                            (a.setStart(z.firstElementChild.firstChild, ne - 1),
                            a.collapse(!0),
                            (0, A.Hc)(a));
                        }
                      }
                      return !(
                        ((o.key !== 'ArrowUp' && o.key !== 'ArrowDown') ||
                          !Q ||
                          (Q.querySelectorAll('.vditor-ir__node').forEach(function (se) {
                            se.contains(v) || se.classList.add('vditor-ir__node--hidden');
                          }),
                          !kn(o, Q, a))) &&
                        (sn(a, o.key), !Q || !N(Q, r, o, a) || (o.preventDefault(), 0))
                      );
                    })(e, n)
                  )
                    return;
                  if (e.options.ctrlEnter && j('⌘Enter', n))
                    return e.options.ctrlEnter(d(e)), void n.preventDefault();
                  if (j('⌘Z', n) && !e.toolbar.elements.undo)
                    return e.undo.undo(e), void n.preventDefault();
                  if (j('⌘Y', n) && !e.toolbar.elements.redo)
                    return e.undo.redo(e), void n.preventDefault();
                  if (n.key === 'Escape')
                    return (
                      e.hint.element.style.display === 'block'
                        ? (e.hint.element.style.display = 'none')
                        : e.options.esc && !n.isComposing && e.options.esc(d(e)),
                      void n.preventDefault()
                    );
                  if ((0, c.yl)(n) && n.altKey && !n.shiftKey && /^Digit[1-6]$/.test(n.code)) {
                    if (e.currentMode === 'wysiwyg') {
                      var i = n.code.replace('Digit', 'H');
                      (0, m.lG)(getSelection().getRangeAt(0).startContainer, i) ? Ct(e) : vt(e, i),
                        Ee(e);
                    } else
                      e.currentMode === 'sv'
                        ? tn(e, '#'.repeat(parseInt(n.code.replace('Digit', ''), 10)) + ' ')
                        : e.currentMode === 'ir' &&
                          ft(e, '#'.repeat(parseInt(n.code.replace('Digit', ''), 10)) + ' ');
                    return n.preventDefault(), !0;
                  }
                  if ((0, c.yl)(n) && n.altKey && !n.shiftKey && /^Digit[7-9]$/.test(n.code))
                    return (
                      n.code === 'Digit7'
                        ? Ye(e, 'wysiwyg', n)
                        : n.code === 'Digit8'
                          ? Ye(e, 'ir', n)
                          : n.code === 'Digit9' && Ye(e, 'sv', n),
                      !0
                    );
                  e.options.toolbar.find(function (r) {
                    return !r.hotkey || r.toolbar
                      ? !!r.toolbar &&
                          !!r.toolbar.find(function (o) {
                            return (
                              !!o.hotkey &&
                              (j(o.hotkey, n)
                                ? (e.toolbar.elements[o.name].children[0].dispatchEvent(
                                    new CustomEvent((0, c.Le)()),
                                  ),
                                  n.preventDefault(),
                                  !0)
                                : void 0)
                            );
                          })
                      : j(r.hotkey, n)
                        ? (e.toolbar.elements[r.name].children[0].dispatchEvent(
                            new CustomEvent((0, c.Le)()),
                          ),
                          n.preventDefault(),
                          !0)
                        : void 0;
                  });
                }
              });
            },
            It = function (e, t) {
              t.addEventListener('selectstart', function (n) {
                t.onmouseup = function () {
                  setTimeout(function () {
                    var i = pt(e[e.currentMode].element);
                    i.trim()
                      ? (e.currentMode === 'wysiwyg' &&
                          e.options.comment.enable &&
                          ((0, m.a1)(n.target, 'data-type', 'footnotes-block') ||
                          (0, m.a1)(n.target, 'data-type', 'link-ref-defs-block')
                            ? e.wysiwyg.hideComment()
                            : e.wysiwyg.showComment()),
                        e.options.select && e.options.select(i))
                      : e.currentMode === 'wysiwyg' &&
                        e.options.comment.enable &&
                        e.wysiwyg.hideComment();
                  });
                };
              });
            },
            $t = function (e, t) {
              var n = (0, A.zh)(e);
              n.extractContents(),
                n.insertNode(document.createTextNode(Lute.Caret)),
                n.insertNode(document.createTextNode(t));
              var i = (0, m.a1)(n.startContainer, 'data-block', '0');
              i || (i = e.sv.element);
              var r = e.lute.SpinVditorSVDOM(i.textContent);
              (r =
                "<div data-block='0'>" +
                r.replace(
                  /<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g,
                  `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`,
                ) +
                '</div>'),
                i.isEqualNode(e.sv.element) ? (i.innerHTML = r) : (i.outerHTML = r),
                $(e.sv.element),
                (0, A.ib)(e.sv.element, n),
                _e(e);
            },
            gt = function (e, t, n) {
              n === void 0 && (n = !0);
              var i = e;
              for (i.nodeType === 3 && (i = i.parentElement); i; ) {
                if (i.getAttribute('data-type') === t) return i;
                i = n ? i.previousElementSibling : i.nextElementSibling;
              }
              return !1;
            },
            en = function (e, t) {
              return (
                D('SpinVditorSVDOM', e, 'argument', t.options.debugger),
                (e =
                  "<div data-block='0'>" +
                  t.lute.SpinVditorSVDOM(e).replace(
                    /<span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span><span data-type="newline"><br \/><span style="display: none">\n<\/span><\/span></g,
                    `<span data-type="newline"><br /><span style="display: none">
</span></span><span data-type="newline"><br /><span style="display: none">
</span></span></div><div data-block="0"><`,
                  ) +
                  '</div>'),
                D('SpinVditorSVDOM', e, 'result', t.options.debugger),
                e
              );
            },
            $n = function (e) {
              var t = e.getAttribute('data-type'),
                n = e.previousElementSibling,
                i =
                  t &&
                  t !== 'text' &&
                  t !== 'table' &&
                  t !== 'heading-marker' &&
                  t !== 'newline' &&
                  t !== 'yaml-front-matter-open-marker' &&
                  t !== 'yaml-front-matter-close-marker' &&
                  t !== 'code-block-info' &&
                  t !== 'code-block-close-marker' &&
                  t !== 'code-block-open-marker'
                    ? e.textContent
                    : '',
                r = !1;
              for (t === 'newline' && (r = !0); n && !r; ) {
                var o = n.getAttribute('data-type');
                if (
                  o === 'li-marker' ||
                  o === 'blockquote-marker' ||
                  o === 'task-marker' ||
                  o === 'padding'
                ) {
                  var a = n.textContent;
                  if (
                    o !== 'li-marker' ||
                    (t !== 'code-block-open-marker' && t !== 'code-block-info')
                  )
                    if (t === 'code-block-close-marker' && n.nextElementSibling.isSameNode(e)) {
                      var v = gt(e, 'code-block-open-marker');
                      v &&
                        v.previousElementSibling &&
                        ((n = v.previousElementSibling), (i = a + i));
                    } else i = a + i;
                  else i = a.replace(/\S/g, ' ') + i;
                } else o === 'newline' && (r = !0);
                n = n.previousElementSibling;
              }
              return i;
            },
            Ne = function (e, t) {
              t === void 0 && (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
                t.enableHint && e.hint.render(e),
                e.preview.render(e);
              var n = d(e);
              typeof e.options.input == 'function' && t.enableInput && e.options.input(n),
                e.options.counter.enable && e.counter.render(e, n),
                e.options.cache.enable &&
                  (0, c.pK)() &&
                  (localStorage.setItem(e.options.cache.id, n),
                  e.options.cache.after && e.options.cache.after(n)),
                e.devtools && e.devtools.renderEchart(e),
                clearTimeout(e.sv.processTimeoutId),
                (e.sv.processTimeoutId = window.setTimeout(function () {
                  t.enableAddUndoStack && !e.sv.composingLock && e.undo.addToUndoStack(e);
                }, e.options.undoDelay));
            },
            tn = function (e, t) {
              var n = (0, A.zh)(e),
                i = (0, _.S)(n.startContainer, 'SPAN');
              i &&
                i.textContent.trim() !== '' &&
                (t =
                  `
` + t),
                n.collapse(!0),
                document.execCommand('insertHTML', !1, t);
            },
            er = function (e, t, n, i) {
              var r = (0, A.zh)(e),
                o = t.getAttribute('data-type');
              e.sv.element.childNodes.length === 0 &&
                ((e.sv.element.innerHTML = `<span data-type="p" data-block="0"><span data-type="text"><wbr></span></span><span data-type="newline"><br><span style="display: none">
</span></span>`),
                (0, A.ib)(e.sv.element, r));
              var a = (0, m.F9)(r.startContainer),
                v = (0, _.S)(r.startContainer, 'SPAN');
              if (a) {
                if (o === 'link') {
                  var E = void 0;
                  return (
                    (E =
                      r.toString() === ''
                        ? '' + n + Lute.Caret + i
                        : '' + n + r.toString() + i.replace(')', Lute.Caret + ')')),
                    void document.execCommand('insertHTML', !1, E)
                  );
                }
                if (
                  o === 'italic' ||
                  o === 'bold' ||
                  o === 'strike' ||
                  o === 'inline-code' ||
                  o === 'code' ||
                  o === 'table' ||
                  o === 'line'
                )
                  return (
                    (E = void 0),
                    (E =
                      r.toString() === ''
                        ? '' + n + Lute.Caret + (o === 'code' ? '' : i)
                        : '' + n + r.toString() + Lute.Caret + (o === 'code' ? '' : i)),
                    o === 'table' || (o === 'code' && v && v.textContent !== '')
                      ? (E =
                          `

` + E)
                      : o === 'line' &&
                        (E =
                          `

` +
                          n +
                          `
` +
                          Lute.Caret),
                    void document.execCommand('insertHTML', !1, E)
                  );
                if ((o === 'check' || o === 'list' || o === 'ordered-list' || o === 'quote') && v) {
                  var S = '* ';
                  o === 'check'
                    ? (S = '* [ ] ')
                    : o === 'ordered-list'
                      ? (S = '1. ')
                      : o === 'quote' && (S = '> ');
                  var b = gt(v, 'newline');
                  return (
                    b ? b.insertAdjacentText('afterend', S) : a.insertAdjacentText('afterbegin', S),
                    void te(e)
                  );
                }
                (0, A.ib)(e.sv.element, r), Ne(e);
              }
            },
            nn = function (e) {
              switch (e.currentMode) {
                case 'ir':
                  return e.ir.element;
                case 'wysiwyg':
                  return e.wysiwyg.element;
                case 'sv':
                  return e.sv.element;
              }
            },
            rn = function (e, t) {
              e.options.upload.setHeaders &&
                (e.options.upload.headers = e.options.upload.setHeaders()),
                e.options.upload.headers &&
                  Object.keys(e.options.upload.headers).forEach(function (n) {
                    t.setRequestHeader(n, e.options.upload.headers[n]);
                  });
            },
            tr = function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function a(S) {
                  try {
                    E(i.next(S));
                  } catch (b) {
                    o(b);
                  }
                }
                function v(S) {
                  try {
                    E(i.throw(S));
                  } catch (b) {
                    o(b);
                  }
                }
                function E(S) {
                  var b;
                  S.done
                    ? r(S.value)
                    : ((b = S.value),
                      b instanceof n
                        ? b
                        : new n(function (H) {
                            H(b);
                          })).then(a, v);
                }
                E((i = i.apply(e, t || [])).next());
              });
            },
            nr = function (e, t) {
              var n,
                i,
                r,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: v(0), throw: v(1), return: v(2) }),
                typeof Symbol == 'function' &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function v(E) {
                return function (S) {
                  return (function (b) {
                    if (n) throw new TypeError('Generator is already executing.');
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & b[0]
                                ? i.return
                                : b[0]
                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                  : i.next) &&
                            !(r = r.call(i, b[1])).done)
                        )
                          return r;
                        switch (((i = 0), r && (b = [2 & b[0], r.value]), b[0])) {
                          case 0:
                          case 1:
                            r = b;
                            break;
                          case 4:
                            return a.label++, { value: b[1], done: !1 };
                          case 5:
                            a.label++, (i = b[1]), (b = [0]);
                            continue;
                          case 7:
                            (b = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              ((r = a.trys),
                              !(
                                (r = r.length > 0 && r[r.length - 1]) ||
                                (b[0] !== 6 && b[0] !== 2)
                              ))
                            ) {
                              a = 0;
                              continue;
                            }
                            if (b[0] === 3 && (!r || (b[1] > r[0] && b[1] < r[3]))) {
                              a.label = b[1];
                              break;
                            }
                            if (b[0] === 6 && a.label < r[1]) {
                              (a.label = r[1]), (r = b);
                              break;
                            }
                            if (r && a.label < r[2]) {
                              (a.label = r[2]), a.ops.push(b);
                              break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        b = t.call(e, a);
                      } catch (H) {
                        (b = [6, H]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & b[0]) throw b[1];
                    return { value: b[0] ? b[1] : void 0, done: !0 };
                  })([E, S]);
                };
              }
            },
            rr = function () {
              (this.isUploading = !1),
                (this.element = document.createElement('div')),
                (this.element.className = 'vditor-upload');
            },
            Rt = function (e, t, n) {
              return tr(void 0, void 0, void 0, function () {
                var i, r, o, a, v, E, S, b, H, B, K, C, U, W;
                return nr(this, function (q) {
                  switch (q.label) {
                    case 0:
                      for (
                        i = [], r = e.options.upload.multiple === !0 ? t.length : 1, C = 0;
                        C < r;
                        C++
                      )
                        (o = t[C]) instanceof DataTransferItem && (o = o.getAsFile()), i.push(o);
                      return e.options.upload.handler ? [4, e.options.upload.handler(i)] : [3, 2];
                    case 1:
                      return (
                        (a = q.sent()),
                        n && (n.value = ''),
                        typeof a == 'string' ? (e.tip.show(a), [2]) : [2]
                      );
                    case 2:
                      return e.options.upload.url && e.upload
                        ? e.options.upload.file
                          ? [4, e.options.upload.file(i)]
                          : [3, 4]
                        : (n && (n.value = ''),
                          e.tip.show('please config: options.upload.url'),
                          [2]);
                    case 3:
                      (i = q.sent()), (q.label = 4);
                    case 4:
                      if (
                        e.options.upload.validate &&
                        typeof (a = e.options.upload.validate(i)) == 'string'
                      )
                        return e.tip.show(a), [2];
                      if (
                        ((v = nn(e)),
                        (e.upload.range = (0, A.zh)(e)),
                        (E = (function (G, z) {
                          G.tip.hide();
                          for (
                            var R = [],
                              Q = '',
                              le = '',
                              ne =
                                (G.options.lang,
                                G.options,
                                function (Y, ce) {
                                  var we = z[ce],
                                    Ae = !0;
                                  we.name ||
                                    ((Q += '<li>' + window.VditorI18n.nameEmpty + '</li>'),
                                    (Ae = !1)),
                                    we.size > G.options.upload.max &&
                                      ((Q +=
                                        '<li>' +
                                        we.name +
                                        ' ' +
                                        window.VditorI18n.over +
                                        ' ' +
                                        G.options.upload.max / 1024 / 1024 +
                                        'M</li>'),
                                      (Ae = !1));
                                  var Ke = we.name.lastIndexOf('.'),
                                    je = we.name.substr(Ke),
                                    Re = G.options.upload.filename(we.name.substr(0, Ke)) + je;
                                  G.options.upload.accept &&
                                    (G.options.upload.accept.split(',').some(function (xe) {
                                      var rt = xe.trim();
                                      if (rt.indexOf('.') === 0) {
                                        if (je.toLowerCase() === rt.toLowerCase()) return !0;
                                      } else if (we.type.split('/')[0] === rt.split('/')[0])
                                        return !0;
                                      return !1;
                                    }) ||
                                      ((Q +=
                                        '<li>' +
                                        we.name +
                                        ' ' +
                                        window.VditorI18n.fileTypeError +
                                        '</li>'),
                                      (Ae = !1))),
                                    Ae &&
                                      (R.push(we),
                                      (le +=
                                        '<li>' + Re + ' ' + window.VditorI18n.uploading + '</li>'));
                                }),
                              se = z.length,
                              ae = 0;
                            ae < se;
                            ae++
                          )
                            ne(0, ae);
                          return G.tip.show('<ul>' + Q + le + '</ul>'), R;
                        })(e, i)),
                        E.length === 0)
                      )
                        return n && (n.value = ''), [2];
                      for (
                        S = new FormData(),
                          b = e.options.upload.extraData,
                          H = 0,
                          B = Object.keys(b);
                        H < B.length;
                        H++
                      )
                        (K = B[H]), S.append(K, b[K]);
                      for (C = 0, U = E.length; C < U; C++)
                        S.append(e.options.upload.fieldName, E[C]);
                      return (
                        (W = new XMLHttpRequest()).open('POST', e.options.upload.url),
                        e.options.upload.token &&
                          W.setRequestHeader('X-Upload-Token', e.options.upload.token),
                        e.options.upload.withCredentials && (W.withCredentials = !0),
                        rn(e, W),
                        (e.upload.isUploading = !0),
                        v.setAttribute('contenteditable', 'false'),
                        (W.onreadystatechange = function () {
                          if (W.readyState === XMLHttpRequest.DONE) {
                            if (
                              ((e.upload.isUploading = !1),
                              v.setAttribute('contenteditable', 'true'),
                              W.status >= 200 && W.status < 300)
                            )
                              if (e.options.upload.success)
                                e.options.upload.success(v, W.responseText);
                              else {
                                var G = W.responseText;
                                e.options.upload.format &&
                                  (G = e.options.upload.format(t, W.responseText)),
                                  (function (z, R) {
                                    nn(R).focus();
                                    var Q = JSON.parse(z),
                                      le = '';
                                    Q.code === 1 && (le = '' + Q.msg),
                                      Q.data.errFiles &&
                                        Q.data.errFiles.length > 0 &&
                                        ((le = '<ul><li>' + le + '</li>'),
                                        Q.data.errFiles.forEach(function (se) {
                                          var ae = se.lastIndexOf('.'),
                                            Y =
                                              R.options.upload.filename(se.substr(0, ae)) +
                                              se.substr(ae);
                                          le +=
                                            '<li>' +
                                            Y +
                                            ' ' +
                                            window.VditorI18n.uploadError +
                                            '</li>';
                                        }),
                                        (le += '</ul>')),
                                      le ? R.tip.show(le) : R.tip.hide();
                                    var ne = '';
                                    Object.keys(Q.data.succMap).forEach(function (se) {
                                      var ae = Q.data.succMap[se],
                                        Y = se.lastIndexOf('.'),
                                        ce = se.substr(Y),
                                        we = R.options.upload.filename(se.substr(0, Y)) + ce;
                                      (ce = ce.toLowerCase()).indexOf('.wav') === 0 ||
                                      ce.indexOf('.mp3') === 0 ||
                                      ce.indexOf('.ogg') === 0
                                        ? R.currentMode === 'wysiwyg'
                                          ? (ne +=
                                              `<div class="vditor-wysiwyg__block" data-type="html-block"
 data-block="0"><pre><code>&lt;audio controls="controls" src="` +
                                              ae +
                                              '"&gt;&lt;/audio&gt;</code></pre><pre class="vditor-wysiwyg__preview" data-render="1"><audio controls="controls" src="' +
                                              ae +
                                              `"></audio></pre></div>
`)
                                          : R.currentMode === 'ir'
                                            ? (ne +=
                                                '<audio controls="controls" src="' +
                                                ae +
                                                `"></audio>
`)
                                            : (ne +=
                                                '[' +
                                                we +
                                                '](' +
                                                ae +
                                                `)
`)
                                        : ce.indexOf('.apng') === 0 ||
                                            ce.indexOf('.bmp') === 0 ||
                                            ce.indexOf('.gif') === 0 ||
                                            ce.indexOf('.ico') === 0 ||
                                            ce.indexOf('.cur') === 0 ||
                                            ce.indexOf('.jpg') === 0 ||
                                            ce.indexOf('.jpeg') === 0 ||
                                            ce.indexOf('.jfif') === 0 ||
                                            ce.indexOf('.pjp') === 0 ||
                                            ce.indexOf('.pjpeg') === 0 ||
                                            ce.indexOf('.png') === 0 ||
                                            ce.indexOf('.svg') === 0 ||
                                            ce.indexOf('.webp') === 0
                                          ? R.currentMode === 'wysiwyg'
                                            ? (ne +=
                                                '<img alt="' +
                                                we +
                                                '" src="' +
                                                ae +
                                                `">
`)
                                            : (ne +=
                                                '![' +
                                                we +
                                                '](' +
                                                ae +
                                                `)
`)
                                          : R.currentMode === 'wysiwyg'
                                            ? (ne +=
                                                '<a href="' +
                                                ae +
                                                '">' +
                                                we +
                                                `</a>
`)
                                            : (ne +=
                                                '[' +
                                                we +
                                                '](' +
                                                ae +
                                                `)
`);
                                    }),
                                      (0, A.Hc)(R.upload.range),
                                      document.execCommand('insertHTML', !1, ne),
                                      (R.upload.range = getSelection().getRangeAt(0).cloneRange());
                                  })(G, e);
                              }
                            else
                              e.options.upload.error
                                ? e.options.upload.error(W.responseText)
                                : e.tip.show(W.responseText);
                            n && (n.value = ''), (e.upload.element.style.display = 'none');
                          }
                        }),
                        (W.upload.onprogress = function (G) {
                          if (G.lengthComputable) {
                            var z = (G.loaded / G.total) * 100;
                            (e.upload.element.style.display = 'block'),
                              (e.upload.element.style.width = z + '%');
                          }
                        }),
                        W.send(S),
                        [2]
                      );
                  }
                });
              });
            },
            yt = function (e, t, n) {
              var i,
                r = (0, m.F9)(t.startContainer);
              if (
                (r || (r = e.wysiwyg.element),
                (n &&
                  n.inputType !== 'formatItalic' &&
                  n.inputType !== 'deleteByDrag' &&
                  n.inputType !== 'insertFromDrop' &&
                  n.inputType !== 'formatBold' &&
                  n.inputType !== 'formatRemove' &&
                  n.inputType !== 'formatStrikeThrough' &&
                  n.inputType !== 'insertUnorderedList' &&
                  n.inputType !== 'insertOrderedList' &&
                  n.inputType !== 'formatOutdent' &&
                  n.inputType !== 'formatIndent' &&
                  n.inputType !== '') ||
                  !n)
              ) {
                var o = (function (z) {
                  for (var R = z.previousSibling; R; ) {
                    if (
                      R.nodeType !== 3 &&
                      R.tagName === 'A' &&
                      !R.previousSibling &&
                      R.innerHTML.replace(h.g.ZWSP, '') === '' &&
                      R.nextSibling
                    )
                      return R;
                    R = R.previousSibling;
                  }
                  return !1;
                })(t.startContainer);
                o && o.remove(),
                  e.wysiwyg.element.querySelectorAll('wbr').forEach(function (z) {
                    z.remove();
                  }),
                  t.insertNode(document.createElement('wbr')),
                  r.querySelectorAll('[style]').forEach(function (z) {
                    z.removeAttribute('style');
                  }),
                  r.querySelectorAll('.vditor-comment').forEach(function (z) {
                    z.textContent.trim() === '' &&
                      (z.classList.remove('vditor-comment', 'vditor-comment--focus'),
                      z.removeAttribute('data-cmtids'));
                  }),
                  (i = r.previousElementSibling) === null ||
                    i === void 0 ||
                    i.querySelectorAll('.vditor-comment').forEach(function (z) {
                      z.textContent.trim() === '' &&
                        (z.classList.remove('vditor-comment', 'vditor-comment--focus'),
                        z.removeAttribute('data-cmtids'));
                    });
                var a = '';
                r.getAttribute('data-type') === 'link-ref-defs-block' && (r = e.wysiwyg.element);
                var v,
                  E = r.isEqualNode(e.wysiwyg.element),
                  S = (0, m.a1)(r, 'data-type', 'footnotes-block');
                if (E) a = r.innerHTML;
                else {
                  var b = (0, m.O9)(t.startContainer);
                  if (b && !S) {
                    var H = (0, _.S)(t.startContainer, 'BLOCKQUOTE');
                    r = H ? (0, m.F9)(t.startContainer) || r : b;
                  }
                  if ((S && (r = S), (a = r.outerHTML), r.tagName === 'UL' || r.tagName === 'OL')) {
                    var B = r.previousElementSibling,
                      K = r.nextElementSibling;
                    !B ||
                      (B.tagName !== 'UL' && B.tagName !== 'OL') ||
                      ((a = B.outerHTML + a), B.remove()),
                      !K ||
                        (K.tagName !== 'UL' && K.tagName !== 'OL') ||
                        ((a += K.outerHTML), K.remove()),
                      (a = a.replace('<div><wbr><br></div>', '<li><p><wbr><br></p></li>'));
                  }
                  r.innerText.startsWith('```') ||
                    (e.wysiwyg.element
                      .querySelectorAll("[data-type='link-ref-defs-block']")
                      .forEach(function (z) {
                        z && !r.isEqualNode(z) && ((a += z.outerHTML), z.remove());
                      }),
                    e.wysiwyg.element
                      .querySelectorAll("[data-type='footnotes-block']")
                      .forEach(function (z) {
                        z && !r.isEqualNode(z) && ((a += z.outerHTML), z.remove());
                      }));
                }
                if (
                  ((a = a
                    .replace(/<\/(strong|b)><strong data-marker="\W{2}">/g, '')
                    .replace(/<\/(em|i)><em data-marker="\W{1}">/g, '')
                    .replace(/<\/(s|strike)><s data-marker="~{1,2}">/g, '')) ===
                    '<p data-block="0">```<wbr></p>' &&
                    e.hint.recentLanguage &&
                    (a = '<p data-block="0">```<wbr></p>'.replace(
                      '```',
                      '```' + e.hint.recentLanguage,
                    )),
                  D('SpinVditorDOM', a, 'argument', e.options.debugger),
                  (a = e.lute.SpinVditorDOM(a)),
                  D('SpinVditorDOM', a, 'result', e.options.debugger),
                  E)
                )
                  r.innerHTML = a;
                else if (((r.outerHTML = a), S)) {
                  var C = (0, m.E2)(e.wysiwyg.element.querySelector('wbr'), 'LI');
                  if (C) {
                    var U = e.wysiwyg.element.querySelector(
                      'sup[data-type="footnotes-ref"][data-footnotes-label="' +
                        C.getAttribute('data-marker') +
                        '"]',
                    );
                    U && U.setAttribute('aria-label', C.textContent.trim().substr(0, 24));
                  }
                }
                var W,
                  q = e.wysiwyg.element.querySelectorAll("[data-type='link-ref-defs-block']");
                q.forEach(function (z, R) {
                  R === 0 ? (v = z) : (v.insertAdjacentHTML('beforeend', z.innerHTML), z.remove());
                }),
                  q.length > 0 && e.wysiwyg.element.insertAdjacentElement('beforeend', q[0]);
                var G = e.wysiwyg.element.querySelectorAll("[data-type='footnotes-block']");
                G.forEach(function (z, R) {
                  R === 0 ? (W = z) : (W.insertAdjacentHTML('beforeend', z.innerHTML), z.remove());
                }),
                  G.length > 0 && e.wysiwyg.element.insertAdjacentElement('beforeend', G[0]),
                  (0, A.ib)(e.wysiwyg.element, t),
                  e.wysiwyg.element
                    .querySelectorAll(".vditor-wysiwyg__preview[data-render='2']")
                    .forEach(function (z) {
                      be(z, e);
                    }),
                  n &&
                    (n.inputType === 'deleteContentBackward' ||
                      n.inputType === 'deleteContentForward') &&
                    e.options.comment.enable &&
                    (e.wysiwyg.triggerRemoveComment(e),
                    e.options.comment.adjustTop(e.wysiwyg.getComments(e, !0)));
              }
              ge(e), Ee(e, { enableAddUndoStack: !0, enableHint: !0, enableInput: !0 });
            },
            ir = function (e, t) {
              return (
                Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t),
                e
              );
            },
            or = function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function a(S) {
                  try {
                    E(i.next(S));
                  } catch (b) {
                    o(b);
                  }
                }
                function v(S) {
                  try {
                    E(i.throw(S));
                  } catch (b) {
                    o(b);
                  }
                }
                function E(S) {
                  var b;
                  S.done
                    ? r(S.value)
                    : ((b = S.value),
                      b instanceof n
                        ? b
                        : new n(function (H) {
                            H(b);
                          })).then(a, v);
                }
                E((i = i.apply(e, t || [])).next());
              });
            },
            ar = function (e, t) {
              var n,
                i,
                r,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: v(0), throw: v(1), return: v(2) }),
                typeof Symbol == 'function' &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function v(E) {
                return function (S) {
                  return (function (b) {
                    if (n) throw new TypeError('Generator is already executing.');
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & b[0]
                                ? i.return
                                : b[0]
                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                  : i.next) &&
                            !(r = r.call(i, b[1])).done)
                        )
                          return r;
                        switch (((i = 0), r && (b = [2 & b[0], r.value]), b[0])) {
                          case 0:
                          case 1:
                            r = b;
                            break;
                          case 4:
                            return a.label++, { value: b[1], done: !1 };
                          case 5:
                            a.label++, (i = b[1]), (b = [0]);
                            continue;
                          case 7:
                            (b = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              ((r = a.trys),
                              !(
                                (r = r.length > 0 && r[r.length - 1]) ||
                                (b[0] !== 6 && b[0] !== 2)
                              ))
                            ) {
                              a = 0;
                              continue;
                            }
                            if (b[0] === 3 && (!r || (b[1] > r[0] && b[1] < r[3]))) {
                              a.label = b[1];
                              break;
                            }
                            if (b[0] === 6 && a.label < r[1]) {
                              (a.label = r[1]), (r = b);
                              break;
                            }
                            if (r && a.label < r[2]) {
                              (a.label = r[2]), a.ops.push(b);
                              break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        b = t.call(e, a);
                      } catch (H) {
                        (b = [6, H]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & b[0]) throw b[1];
                    return { value: b[0] ? b[1] : void 0, done: !0 };
                  })([E, S]);
                };
              }
            },
            on = function (e, t, n) {
              if (
                e.keyCode === 229 &&
                e.code === '' &&
                e.key === 'Unidentified' &&
                t.currentMode !== 'sv'
              ) {
                var i = (0, m.F9)(n);
                if (i && i.textContent.trim() === '')
                  return (t[t.currentMode].composingLock = !0), !1;
              }
              return !0;
            },
            an = function (e, t, n) {
              if (
                !(
                  n.key === 'Enter' ||
                  n.key === 'Tab' ||
                  n.key === 'Backspace' ||
                  n.key.indexOf('Arrow') > -1 ||
                  (0, c.yl)(n) ||
                  n.key === 'Escape' ||
                  n.shiftKey ||
                  n.altKey
                )
              ) {
                var i = (0, m.lG)(e.startContainer, 'P') || (0, m.lG)(e.startContainer, 'LI');
                if (i && (0, A.im)(i, t[t.currentMode].element, e).start === 0) {
                  i.nodeValue && (i.nodeValue = i.nodeValue.replace(/\u2006/g, ''));
                  var r = document.createTextNode(h.g.ZWSP);
                  e.insertNode(r), e.setStartAfter(r);
                }
              }
            },
            sn = function (e, t) {
              if (t === 'ArrowDown' || t === 'ArrowUp') {
                var n =
                  (0, m.a1)(e.startContainer, 'data-type', 'math-inline') ||
                  (0, m.a1)(e.startContainer, 'data-type', 'html-entity') ||
                  (0, m.a1)(e.startContainer, 'data-type', 'html-inline');
                n &&
                  (t === 'ArrowDown' && e.setStartAfter(n.parentElement),
                  t === 'ArrowUp' && e.setStartBefore(n.parentElement));
              }
            },
            bt = function (e, t) {
              var n = (0, A.zh)(e),
                i = (0, m.F9)(n.startContainer);
              i &&
                (i.insertAdjacentHTML(
                  t,
                  '<p data-block="0">' +
                    h.g.ZWSP +
                    `<wbr>
</p>`,
                ),
                (0, A.ib)(e[e.currentMode].element, n),
                tt(e),
                pe(e));
            },
            sr = function (e) {
              var t = (0, m.lG)(e, 'TABLE');
              return !(!t || !t.rows[0].cells[0].isSameNode(e)) && t;
            },
            lr = function (e) {
              var t = (0, m.lG)(e, 'TABLE');
              return (
                !(!t || !t.lastElementChild.lastElementChild.lastElementChild.isSameNode(e)) && t
              );
            },
            ln = function (e, t, n) {
              n === void 0 && (n = !0);
              var i = e.previousElementSibling;
              return (
                i ||
                  (i = e.parentElement.previousElementSibling
                    ? e.parentElement.previousElementSibling.lastElementChild
                    : e.parentElement.parentElement.tagName === 'TBODY' &&
                        e.parentElement.parentElement.previousElementSibling
                      ? e.parentElement.parentElement.previousElementSibling.lastElementChild
                          .lastElementChild
                      : null),
                i && (t.selectNodeContents(i), n || t.collapse(!1), (0, A.Hc)(t)),
                i
              );
            },
            mt = function (e, t, n, i, r) {
              var o = (0, A.im)(i, e[e.currentMode].element, n);
              if (
                (t.key === 'ArrowDown' &&
                  i.textContent.trimRight().substr(o.start).indexOf(`
`) === -1) ||
                (t.key === 'ArrowRight' && o.start >= i.textContent.trimRight().length)
              ) {
                var a = r.nextElementSibling;
                return (
                  !a || (a && (a.tagName === 'TABLE' || a.getAttribute('data-type')))
                    ? (r.insertAdjacentHTML(
                        'afterend',
                        '<p data-block="0">' + h.g.ZWSP + '<wbr></p>',
                      ),
                      (0, A.ib)(e[e.currentMode].element, n))
                    : (n.selectNodeContents(a), n.collapse(!0), (0, A.Hc)(n)),
                  t.preventDefault(),
                  !0
                );
              }
              return !1;
            },
            nt = function (e, t, n, i, r) {
              var o = (0, A.im)(i, e[e.currentMode].element, n);
              if (
                (t.key === 'ArrowUp' &&
                  i.textContent.substr(0, o.start).indexOf(`
`) === -1) ||
                ((t.key === 'ArrowLeft' || (t.key === 'Backspace' && n.toString() === '')) &&
                  o.start === 0)
              ) {
                var a = r.previousElementSibling;
                return (
                  !a || (a && (a.tagName === 'TABLE' || a.getAttribute('data-type')))
                    ? (r.insertAdjacentHTML(
                        'beforebegin',
                        '<p data-block="0">' + h.g.ZWSP + '<wbr></p>',
                      ),
                      (0, A.ib)(e[e.currentMode].element, n))
                    : (n.selectNodeContents(a), n.collapse(!1), (0, A.Hc)(n)),
                  t.preventDefault(),
                  !0
                );
              }
              return !1;
            },
            wt = function (e, t, n, i) {
              i === void 0 && (i = !0);
              var r = (0, m.lG)(t.startContainer, 'LI');
              if (
                (e[e.currentMode].element.querySelectorAll('wbr').forEach(function (b) {
                  b.remove();
                }),
                t.insertNode(document.createElement('wbr')),
                i && r)
              ) {
                for (var o = '', a = 0; a < r.parentElement.childElementCount; a++) {
                  var v = r.parentElement.children[a].querySelector('input');
                  v && v.remove(),
                    (o +=
                      '<p data-block="0">' +
                      r.parentElement.children[a].innerHTML.trimLeft() +
                      '</p>');
                }
                r.parentElement.insertAdjacentHTML('beforebegin', o), r.parentElement.remove();
              } else if (r)
                if (n === 'check')
                  r.parentElement.querySelectorAll('li').forEach(function (b) {
                    b.insertAdjacentHTML(
                      'afterbegin',
                      '<input type="checkbox" />' + (b.textContent.indexOf(' ') === 0 ? '' : ' '),
                    ),
                      b.classList.add('vditor-task');
                  });
                else {
                  r.querySelector('input') &&
                    r.parentElement.querySelectorAll('li').forEach(function (b) {
                      b.querySelector('input').remove(), b.classList.remove('vditor-task');
                    });
                  var E = void 0;
                  n === 'list'
                    ? (E = document.createElement('ul')).setAttribute('data-marker', '*')
                    : (E = document.createElement('ol')).setAttribute('data-marker', '1.'),
                    E.setAttribute('data-block', '0'),
                    E.setAttribute('data-tight', r.parentElement.getAttribute('data-tight')),
                    (E.innerHTML = r.parentElement.innerHTML),
                    r.parentElement.parentNode.replaceChild(E, r.parentElement);
                }
              else {
                var S = (0, m.a1)(t.startContainer, 'data-block', '0');
                S ||
                  (e[e.currentMode].element.querySelector('wbr').remove(),
                  ((S = e[e.currentMode].element.querySelector('p')).innerHTML = '<wbr>')),
                  n === 'check'
                    ? (S.insertAdjacentHTML(
                        'beforebegin',
                        '<ul data-block="0"><li class="vditor-task"><input type="checkbox" /> ' +
                          S.innerHTML +
                          '</li></ul>',
                      ),
                      S.remove())
                    : n === 'list'
                      ? (S.insertAdjacentHTML(
                          'beforebegin',
                          '<ul data-block="0"><li>' + S.innerHTML + '</li></ul>',
                        ),
                        S.remove())
                      : n === 'ordered-list' &&
                        (S.insertAdjacentHTML(
                          'beforebegin',
                          '<ol data-block="0"><li>' + S.innerHTML + '</li></ol>',
                        ),
                        S.remove());
              }
            },
            cn = function (e, t, n) {
              var i = t.previousElementSibling;
              if (t && i) {
                var r = [t];
                Array.from(n.cloneContents().children).forEach(function (E, S) {
                  E.nodeType !== 3 &&
                    t &&
                    E.textContent.trim() !== '' &&
                    t.getAttribute('data-node-id') === E.getAttribute('data-node-id') &&
                    (S !== 0 && r.push(t), (t = t.nextElementSibling));
                }),
                  e[e.currentMode].element.querySelectorAll('wbr').forEach(function (E) {
                    E.remove();
                  }),
                  n.insertNode(document.createElement('wbr'));
                var o = i.parentElement,
                  a = '';
                r.forEach(function (E) {
                  var S = E.getAttribute('data-marker');
                  S.length !== 1 && (S = '1' + S.slice(-1)),
                    (a +=
                      '<li data-node-id="' +
                      E.getAttribute('data-node-id') +
                      '" data-marker="' +
                      S +
                      '">' +
                      E.innerHTML +
                      '</li>'),
                    E.remove();
                }),
                  i.insertAdjacentHTML(
                    'beforeend',
                    '<' + o.tagName + ' data-block="0">' + a + '</' + o.tagName + '>',
                  ),
                  e.currentMode === 'wysiwyg'
                    ? (o.outerHTML = e.lute.SpinVditorDOM(o.outerHTML))
                    : (o.outerHTML = e.lute.SpinVditorIRDOM(o.outerHTML)),
                  (0, A.ib)(e[e.currentMode].element, n);
                var v = (0, m.O9)(n.startContainer);
                v &&
                  v
                    .querySelectorAll('.vditor-' + e.currentMode + "__preview[data-render='2']")
                    .forEach(function (E) {
                      be(E, e),
                        e.currentMode === 'wysiwyg' &&
                          E.previousElementSibling.setAttribute('style', 'display:none');
                    }),
                  pe(e),
                  tt(e);
              } else e[e.currentMode].element.focus();
            },
            Pt = function (e, t, n, i) {
              var r = (0, m.lG)(t.parentElement, 'LI');
              if (r) {
                e[e.currentMode].element.querySelectorAll('wbr').forEach(function (H) {
                  H.remove();
                }),
                  n.insertNode(document.createElement('wbr'));
                var o = t.parentElement,
                  a = o.cloneNode(),
                  v = [t];
                Array.from(n.cloneContents().children).forEach(function (H, B) {
                  H.nodeType !== 3 &&
                    t &&
                    H.textContent.trim() !== '' &&
                    t.getAttribute('data-node-id') === H.getAttribute('data-node-id') &&
                    (B !== 0 && v.push(t), (t = t.nextElementSibling));
                });
                var E = !1,
                  S = '';
                o.querySelectorAll('li').forEach(function (H) {
                  E &&
                    ((S += H.outerHTML),
                    H.nextElementSibling || H.previousElementSibling
                      ? H.remove()
                      : H.parentElement.remove()),
                    H.isSameNode(v[v.length - 1]) && (E = !0);
                }),
                  v.reverse().forEach(function (H) {
                    r.insertAdjacentElement('afterend', H);
                  }),
                  S && ((a.innerHTML = S), v[0].insertAdjacentElement('beforeend', a)),
                  e.currentMode === 'wysiwyg'
                    ? (i.outerHTML = e.lute.SpinVditorDOM(i.outerHTML))
                    : (i.outerHTML = e.lute.SpinVditorIRDOM(i.outerHTML)),
                  (0, A.ib)(e[e.currentMode].element, n);
                var b = (0, m.O9)(n.startContainer);
                b &&
                  b
                    .querySelectorAll('.vditor-' + e.currentMode + "__preview[data-render='2']")
                    .forEach(function (H) {
                      be(H, e),
                        e.currentMode === 'wysiwyg' &&
                          H.previousElementSibling.setAttribute('style', 'display:none');
                    }),
                  pe(e),
                  tt(e);
              } else e[e.currentMode].element.focus();
            },
            Et = function (e, t) {
              for (
                var n = getSelection().getRangeAt(0).startContainer.parentElement,
                  i = e.rows[0].cells.length,
                  r = e.rows.length,
                  o = 0,
                  a = 0;
                a < r;
                a++
              )
                for (var v = 0; v < i; v++)
                  if (e.rows[a].cells[v].isSameNode(n)) {
                    o = v;
                    break;
                  }
              for (var E = 0; E < r; E++) e.rows[E].cells[o].setAttribute('align', t);
            },
            qt = function (e) {
              var t = e
                .trimRight()
                .split(
                  `
`,
                )
                .pop();
              return (
                t !== '' &&
                (t.replace(/ |-/g, '') === '' ||
                  t.replace(/ |_/g, '') === '' ||
                  t.replace(/ |\*/g, '') === '') &&
                t.replace(/ /g, '').length > 2 &&
                !(
                  t.indexOf('-') > -1 &&
                  t.trimLeft().indexOf(' ') === -1 &&
                  e.trimRight().split(`
`).length > 1
                ) &&
                t.indexOf('    ') !== 0 &&
                t.indexOf('	') !== 0
              );
            },
            Bt = function (e) {
              var t = e.trimRight().split(`
`);
              return (
                (e = t.pop()).indexOf('    ') !== 0 &&
                e.indexOf('	') !== 0 &&
                (e = e.trimLeft()) !== '' &&
                t.length !== 0 &&
                (e.replace(/-/g, '') === '' || e.replace(/=/g, '') === '')
              );
            },
            pe = function (e, t) {
              t === void 0 && (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
                e.currentMode === 'wysiwyg'
                  ? Ee(e, t)
                  : e.currentMode === 'ir'
                    ? Ge(e, t)
                    : e.currentMode === 'sv' && Ne(e, t);
            },
            dn = function (e, t, n, i) {
              var r,
                o = e.startContainer,
                a = (0, m.lG)(o, 'LI');
              if (a) {
                if (
                  !(0, c.yl)(i) &&
                  !i.altKey &&
                  i.key === 'Enter' &&
                  !i.shiftKey &&
                  n &&
                  a.contains(n) &&
                  n.nextElementSibling
                )
                  return (
                    a &&
                      !a.textContent.endsWith(`
`) &&
                      a.insertAdjacentText(
                        'beforeend',
                        `
`,
                      ),
                    e.insertNode(
                      document.createTextNode(`

`),
                    ),
                    e.collapse(!1),
                    pe(t),
                    i.preventDefault(),
                    !0
                  );
                if (
                  !(
                    (0, c.yl)(i) ||
                    i.shiftKey ||
                    i.altKey ||
                    i.key !== 'Backspace' ||
                    a.previousElementSibling ||
                    e.toString() !== '' ||
                    (0, A.im)(a, t[t.currentMode].element, e).start !== 0
                  )
                )
                  return (
                    a.nextElementSibling
                      ? (a.parentElement.insertAdjacentHTML(
                          'beforebegin',
                          '<p data-block="0"><wbr>' + a.innerHTML + '</p>',
                        ),
                        a.remove())
                      : (a.parentElement.outerHTML =
                          '<p data-block="0"><wbr>' + a.innerHTML + '</p>'),
                    (0, A.ib)(t[t.currentMode].element, e),
                    pe(t),
                    i.preventDefault(),
                    !0
                  );
                if (
                  !(0, c.yl)(i) &&
                  !i.shiftKey &&
                  !i.altKey &&
                  i.key === 'Backspace' &&
                  a.textContent.trim().replace(h.g.ZWSP, '') === '' &&
                  e.toString() === '' &&
                  ((r = a.previousElementSibling) === null || r === void 0 ? void 0 : r.tagName) ===
                    'LI'
                )
                  return (
                    a.previousElementSibling.insertAdjacentText(
                      'beforeend',
                      `

`,
                    ),
                    e.selectNodeContents(a.previousElementSibling),
                    e.collapse(!1),
                    a.remove(),
                    (0, A.ib)(t[t.currentMode].element, e),
                    pe(t),
                    i.preventDefault(),
                    !0
                  );
                if (!(0, c.yl)(i) && !i.altKey && i.key === 'Tab') {
                  var v = !1;
                  if (
                    (((e.startOffset === 0 &&
                      ((o.nodeType === 3 && !o.previousSibling) ||
                        (o.nodeType !== 3 && o.nodeName === 'LI'))) ||
                      (a.classList.contains('vditor-task') &&
                        e.startOffset === 1 &&
                        o.previousSibling.nodeType !== 3 &&
                        o.previousSibling.tagName === 'INPUT')) &&
                      (v = !0),
                    v || e.toString() !== '')
                  )
                    return (
                      i.shiftKey ? Pt(t, a, e, a.parentElement) : cn(t, a, e),
                      i.preventDefault(),
                      !0
                    );
                }
              }
              return !1;
            },
            Vt = function (e, t, n) {
              if (e.options.tab && n.key === 'Tab')
                return (
                  n.shiftKey ||
                    (t.toString() === ''
                      ? (t.insertNode(document.createTextNode(e.options.tab)), t.collapse(!1))
                      : (t.extractContents(),
                        t.insertNode(document.createTextNode(e.options.tab)),
                        t.collapse(!1))),
                  (0, A.Hc)(t),
                  pe(e),
                  n.preventDefault(),
                  !0
                );
            },
            un = function (e, t, n, i) {
              if (n) {
                if (!(0, c.yl)(e) && !e.altKey && e.key === 'Enter') {
                  var r = String.raw(Kt || (Kt = ir(['', ''], ['', ''])), n.textContent)
                      .replace(/\\\|/g, '')
                      .trim(),
                    o = r.split('|');
                  if (r.startsWith('|') && r.endsWith('|') && o.length > 3) {
                    var a = o
                      .map(function () {
                        return '---';
                      })
                      .join('|');
                    return (
                      (a =
                        n.textContent +
                        `
` +
                        a.substring(3, a.length - 3) +
                        `
|<wbr>`),
                      (n.outerHTML = t.lute.SpinVditorDOM(a)),
                      (0, A.ib)(t[t.currentMode].element, i),
                      pe(t),
                      _e(t),
                      e.preventDefault(),
                      !0
                    );
                  }
                  if (qt(n.innerHTML) && n.previousElementSibling) {
                    var v = '',
                      E = n.innerHTML.trimRight().split(`
`);
                    return (
                      E.length > 1 &&
                        (E.pop(),
                        (v =
                          '<p data-block="0">' +
                          E.join(`
`) +
                          '</p>')),
                      n.insertAdjacentHTML(
                        'afterend',
                        v +
                          `<hr data-block="0"><p data-block="0"><wbr>
</p>`,
                      ),
                      n.remove(),
                      (0, A.ib)(t[t.currentMode].element, i),
                      pe(t),
                      _e(t),
                      e.preventDefault(),
                      !0
                    );
                  }
                  if (Bt(n.innerHTML))
                    return (
                      t.currentMode === 'wysiwyg'
                        ? (n.outerHTML = t.lute.SpinVditorDOM(
                            n.innerHTML +
                              `<p data-block="0"><wbr>
</p>`,
                          ))
                        : (n.outerHTML = t.lute.SpinVditorIRDOM(
                            n.innerHTML +
                              `<p data-block="0"><wbr>
</p>`,
                          )),
                      (0, A.ib)(t[t.currentMode].element, i),
                      pe(t),
                      _e(t),
                      e.preventDefault(),
                      !0
                    );
                }
                if (
                  i.collapsed &&
                  n.previousElementSibling &&
                  e.key === 'Backspace' &&
                  !(0, c.yl)(e) &&
                  !e.altKey &&
                  !e.shiftKey &&
                  n.textContent.trimRight().split(`
`).length > 1 &&
                  (0, A.im)(n, t[t.currentMode].element, i).start === 0
                ) {
                  var S = (0, m.DX)(n.previousElementSibling);
                  return (
                    S.textContent.endsWith(`
`) ||
                      (S.textContent =
                        S.textContent +
                        `
`),
                    S.parentElement.insertAdjacentHTML('beforeend', '<wbr>' + n.innerHTML),
                    n.remove(),
                    (0, A.ib)(t[t.currentMode].element, i),
                    !1
                  );
                }
                return !1;
              }
            },
            pn = function (e, t, n) {
              for (var i = '', r = 0; r < n.parentElement.childElementCount; r++)
                i += '<td align="' + n.parentElement.children[r].getAttribute('align') + '"> </td>';
              n.tagName === 'TH'
                ? n.parentElement.parentElement.insertAdjacentHTML(
                    'afterend',
                    '<tbody><tr>' + i + '</tr></tbody>',
                  )
                : n.parentElement.insertAdjacentHTML('afterend', '<tr>' + i + '</tr>'),
                pe(e);
            },
            mn = function (e, t, n) {
              for (var i = '', r = 0; r < n.parentElement.childElementCount; r++)
                n.tagName === 'TH'
                  ? (i +=
                      '<th align="' +
                      n.parentElement.children[r].getAttribute('align') +
                      '"> </th>')
                  : (i +=
                      '<td align="' +
                      n.parentElement.children[r].getAttribute('align') +
                      '"> </td>');
              if (n.tagName === 'TH') {
                n.parentElement.parentElement.insertAdjacentHTML(
                  'beforebegin',
                  '<thead><tr>' + i + '</tr></thead>',
                ),
                  t.insertNode(document.createElement('wbr'));
                var o = n.parentElement.innerHTML
                  .replace(/<th>/g, '<td>')
                  .replace(/<\/th>/g, '</td>');
                n.parentElement.parentElement.nextElementSibling.insertAdjacentHTML(
                  'afterbegin',
                  o,
                ),
                  n.parentElement.parentElement.remove(),
                  (0, A.ib)(e.ir.element, t);
              } else n.parentElement.insertAdjacentHTML('beforebegin', '<tr>' + i + '</tr>');
              pe(e);
            },
            kt = function (e, t, n, i) {
              i === void 0 && (i = 'afterend');
              for (var r = 0, o = n.previousElementSibling; o; )
                r++, (o = o.previousElementSibling);
              for (var a = 0; a < t.rows.length; a++)
                a === 0
                  ? t.rows[a].cells[r].insertAdjacentHTML(i, '<th> </th>')
                  : t.rows[a].cells[r].insertAdjacentHTML(i, '<td> </td>');
              pe(e);
            },
            fn = function (e, t, n) {
              if (n.tagName === 'TD') {
                var i = n.parentElement.parentElement;
                n.parentElement.previousElementSibling
                  ? t.selectNodeContents(n.parentElement.previousElementSibling.lastElementChild)
                  : t.selectNodeContents(
                      i.previousElementSibling.lastElementChild.lastElementChild,
                    ),
                  i.childElementCount === 1 ? i.remove() : n.parentElement.remove(),
                  t.collapse(!1),
                  (0, A.Hc)(t),
                  pe(e);
              }
            },
            hn = function (e, t, n, i) {
              for (var r = 0, o = i.previousElementSibling; o; )
                r++, (o = o.previousElementSibling);
              (i.previousElementSibling || i.nextElementSibling) &&
                (t.selectNodeContents(i.previousElementSibling || i.nextElementSibling),
                t.collapse(!0));
              for (var a = 0; a < n.rows.length; a++) {
                var v = n.rows[a].cells;
                if (v.length === 1) {
                  n.remove(), tt(e);
                  break;
                }
                v[r].remove();
              }
              (0, A.Hc)(t), pe(e);
            },
            vn = function (e, t, n) {
              var i = n.startContainer,
                r = (0, m.lG)(i, 'TD') || (0, m.lG)(i, 'TH');
              if (r) {
                if (!(0, c.yl)(t) && !t.altKey && t.key === 'Enter') {
                  (r.lastElementChild &&
                    (!r.lastElementChild ||
                      (r.lastElementChild.isSameNode(r.lastChild) &&
                        r.lastElementChild.tagName === 'BR'))) ||
                    r.insertAdjacentHTML('beforeend', '<br>');
                  var o = document.createElement('br');
                  return n.insertNode(o), n.setStartAfter(o), pe(e), _e(e), t.preventDefault(), !0;
                }
                if (t.key === 'Tab')
                  return t.shiftKey
                    ? (ln(r, n), t.preventDefault(), !0)
                    : ((b = r.nextElementSibling) ||
                        (b = r.parentElement.nextElementSibling
                          ? r.parentElement.nextElementSibling.firstElementChild
                          : r.parentElement.parentElement.tagName === 'THEAD' &&
                              r.parentElement.parentElement.nextElementSibling
                            ? r.parentElement.parentElement.nextElementSibling.firstElementChild
                                .firstElementChild
                            : null),
                      b && (n.selectNodeContents(b), (0, A.Hc)(n)),
                      t.preventDefault(),
                      !0);
                var a = r.parentElement.parentElement.parentElement;
                if (t.key === 'ArrowUp') {
                  if ((t.preventDefault(), r.tagName === 'TH'))
                    return (
                      a.previousElementSibling
                        ? (n.selectNodeContents(a.previousElementSibling),
                          n.collapse(!1),
                          (0, A.Hc)(n))
                        : bt(e, 'beforebegin'),
                      !0
                    );
                  for (
                    var v = 0, E = r.parentElement;
                    v < E.cells.length && !E.cells[v].isSameNode(r);
                    v++
                  );
                  var S = E.previousElementSibling;
                  return (
                    S || (S = E.parentElement.previousElementSibling.firstChild),
                    n.selectNodeContents(S.cells[v]),
                    n.collapse(!1),
                    (0, A.Hc)(n),
                    !0
                  );
                }
                if (t.key === 'ArrowDown') {
                  var b;
                  if (
                    (t.preventDefault(),
                    !(E = r.parentElement).nextElementSibling && r.tagName === 'TD')
                  )
                    return (
                      a.nextElementSibling
                        ? (n.selectNodeContents(a.nextElementSibling), n.collapse(!0), (0, A.Hc)(n))
                        : bt(e, 'afterend'),
                      !0
                    );
                  for (v = 0; v < E.cells.length && !E.cells[v].isSameNode(r); v++);
                  return (
                    (b = E.nextElementSibling) ||
                      (b = E.parentElement.nextElementSibling.firstChild),
                    n.selectNodeContents(b.cells[v]),
                    n.collapse(!0),
                    (0, A.Hc)(n),
                    !0
                  );
                }
                if (
                  e.currentMode === 'wysiwyg' &&
                  !(0, c.yl)(t) &&
                  t.key === 'Enter' &&
                  !t.shiftKey &&
                  t.altKey
                ) {
                  var H = e.wysiwyg.popover.querySelector('.vditor-input');
                  return H.focus(), H.select(), t.preventDefault(), !0;
                }
                if (
                  !(0, c.yl)(t) &&
                  !t.shiftKey &&
                  !t.altKey &&
                  t.key === 'Backspace' &&
                  n.startOffset === 0 &&
                  n.toString() === ''
                )
                  return (
                    !ln(r, n, !1) &&
                      a &&
                      (a.textContent.trim() === ''
                        ? ((a.outerHTML = `<p data-block="0"><wbr>
</p>`),
                          (0, A.ib)(e[e.currentMode].element, n))
                        : (n.setStartBefore(a), n.collapse(!0)),
                      pe(e)),
                    t.preventDefault(),
                    !0
                  );
                if (j('⇧⌘F', t)) return mn(e, n, r), t.preventDefault(), !0;
                if (j('⌘=', t)) return pn(e, n, r), t.preventDefault(), !0;
                if (j('⇧⌘G', t)) return kt(e, a, r, 'beforebegin'), t.preventDefault(), !0;
                if (j('⇧⌘=', t)) return kt(e, a, r), t.preventDefault(), !0;
                if (j('⌘-', t)) return fn(e, n, r), t.preventDefault(), !0;
                if (j('⇧⌘-', t)) return hn(e, n, a, r), t.preventDefault(), !0;
                if (j('⇧⌘L', t)) {
                  if (e.currentMode === 'ir') return Et(a, 'left'), pe(e), t.preventDefault(), !0;
                  if ((B = e.wysiwyg.popover.querySelector('[data-type="left"]')))
                    return B.click(), t.preventDefault(), !0;
                }
                if (j('⇧⌘C', t)) {
                  if (e.currentMode === 'ir') return Et(a, 'center'), pe(e), t.preventDefault(), !0;
                  if ((B = e.wysiwyg.popover.querySelector('[data-type="center"]')))
                    return B.click(), t.preventDefault(), !0;
                }
                if (j('⇧⌘R', t)) {
                  if (e.currentMode === 'ir') return Et(a, 'right'), pe(e), t.preventDefault(), !0;
                  var B;
                  if ((B = e.wysiwyg.popover.querySelector('[data-type="right"]')))
                    return B.click(), t.preventDefault(), !0;
                }
              }
              return !1;
            },
            gn = function (e, t, n, i) {
              if (n.tagName === 'PRE' && j('⌘A', t))
                return i.selectNodeContents(n.firstElementChild), t.preventDefault(), !0;
              if (e.options.tab && t.key === 'Tab' && !t.shiftKey && i.toString() === '')
                return (
                  i.insertNode(document.createTextNode(e.options.tab)),
                  i.collapse(!1),
                  pe(e),
                  t.preventDefault(),
                  !0
                );
              if (t.key === 'Backspace' && !(0, c.yl)(t) && !t.shiftKey && !t.altKey) {
                var r = (0, A.im)(n, e[e.currentMode].element, i);
                if (
                  (r.start === 0 ||
                    (r.start === 1 &&
                      n.innerText ===
                        `
`)) &&
                  i.toString() === ''
                )
                  return (
                    (n.parentElement.outerHTML =
                      '<p data-block="0"><wbr>' + n.firstElementChild.innerHTML + '</p>'),
                    (0, A.ib)(e[e.currentMode].element, i),
                    pe(e),
                    t.preventDefault(),
                    !0
                  );
              }
              return (
                !(0, c.yl)(t) &&
                !t.altKey &&
                t.key === 'Enter' &&
                (n.firstElementChild.textContent.endsWith(`
`) ||
                  n.firstElementChild.insertAdjacentText(
                    'beforeend',
                    `
`,
                  ),
                i.extractContents(),
                i.insertNode(
                  document.createTextNode(`
`),
                ),
                i.collapse(!1),
                (0, A.Hc)(i),
                (0, c.vU)() || (e.currentMode === 'wysiwyg' ? yt(e, i) : Z(e, i)),
                _e(e),
                t.preventDefault(),
                !0)
              );
            },
            yn = function (e, t, n, i) {
              var r = t.startContainer,
                o = (0, m.lG)(r, 'BLOCKQUOTE');
              if (o && t.toString() === '') {
                if (
                  n.key === 'Backspace' &&
                  !(0, c.yl)(n) &&
                  !n.shiftKey &&
                  !n.altKey &&
                  (0, A.im)(o, e[e.currentMode].element, t).start === 0
                )
                  return (
                    t.insertNode(document.createElement('wbr')),
                    (o.outerHTML = o.innerHTML),
                    (0, A.ib)(e[e.currentMode].element, t),
                    pe(e),
                    n.preventDefault(),
                    !0
                  );
                if (
                  i &&
                  n.key === 'Enter' &&
                  !(0, c.yl)(n) &&
                  !n.shiftKey &&
                  !n.altKey &&
                  i.parentElement.tagName === 'BLOCKQUOTE'
                ) {
                  var a = !1;
                  if (
                    (i.innerHTML.replace(h.g.ZWSP, '') ===
                      `
` || i.innerHTML.replace(h.g.ZWSP, '') === ''
                      ? ((a = !0), i.remove())
                      : i.innerHTML.endsWith(`

`) &&
                        (0, A.im)(i, e[e.currentMode].element, t).start ===
                          i.textContent.length - 1 &&
                        ((i.innerHTML = i.innerHTML.substr(0, i.innerHTML.length - 2)), (a = !0)),
                    a)
                  )
                    return (
                      o.insertAdjacentHTML(
                        'afterend',
                        '<p data-block="0">' +
                          h.g.ZWSP +
                          `<wbr>
</p>`,
                      ),
                      (0, A.ib)(e[e.currentMode].element, t),
                      pe(e),
                      n.preventDefault(),
                      !0
                    );
                }
                var v = (0, m.F9)(r);
                if (e.currentMode === 'wysiwyg' && v && j('⇧⌘;', n))
                  return (
                    t.insertNode(document.createElement('wbr')),
                    (v.outerHTML = '<blockquote data-block="0">' + v.outerHTML + '</blockquote>'),
                    (0, A.ib)(e.wysiwyg.element, t),
                    Ee(e),
                    n.preventDefault(),
                    !0
                  );
                if (mt(e, n, t, o, o) || nt(e, n, t, o, o)) return !0;
              }
              return !1;
            },
            bn = function (e, t, n) {
              var i = t.startContainer,
                r = (0, m.fb)(i, 'vditor-task');
              if (r) {
                if (j('⇧⌘J', n)) {
                  var o = r.firstElementChild;
                  return (
                    o.checked ? o.removeAttribute('checked') : o.setAttribute('checked', 'checked'),
                    pe(e),
                    n.preventDefault(),
                    !0
                  );
                }
                if (
                  n.key === 'Backspace' &&
                  !(0, c.yl)(n) &&
                  !n.shiftKey &&
                  !n.altKey &&
                  t.toString() === '' &&
                  t.startOffset === 1 &&
                  ((i.nodeType === 3 &&
                    i.previousSibling &&
                    i.previousSibling.tagName === 'INPUT') ||
                    i.nodeType !== 3)
                ) {
                  var a = r.previousElementSibling;
                  return (
                    r.querySelector('input').remove(),
                    a
                      ? ((0, m.DX)(a).parentElement.insertAdjacentHTML(
                          'beforeend',
                          '<wbr>' + r.innerHTML.trim(),
                        ),
                        r.remove())
                      : (r.parentElement.insertAdjacentHTML(
                          'beforebegin',
                          '<p data-block="0"><wbr>' +
                            (r.innerHTML.trim() ||
                              `
`) +
                            '</p>',
                        ),
                        r.nextElementSibling ? r.remove() : r.parentElement.remove()),
                    (0, A.ib)(e[e.currentMode].element, t),
                    pe(e),
                    n.preventDefault(),
                    !0
                  );
                }
                if (n.key === 'Enter' && !(0, c.yl)(n) && !n.shiftKey && !n.altKey) {
                  if (r.textContent.trim() === '')
                    if ((0, m.fb)(r.parentElement, 'vditor-task')) {
                      var v = (0, m.O9)(i);
                      v && Pt(e, r, t, v);
                    } else if (r.nextElementSibling) {
                      var E = '',
                        S = '',
                        b = !1;
                      Array.from(r.parentElement.children).forEach(function (C) {
                        r.isSameNode(C) ? (b = !0) : b ? (E += C.outerHTML) : (S += C.outerHTML);
                      });
                      var H = r.parentElement.tagName,
                        B =
                          r.parentElement.tagName === 'OL'
                            ? ''
                            : ' data-marker="' + r.parentElement.getAttribute('data-marker') + '"',
                        K = '';
                      S &&
                        ((K = r.parentElement.tagName === 'UL' ? '' : ' start="1"'),
                        (S =
                          '<' +
                          H +
                          ' data-tight="true"' +
                          B +
                          ' data-block="0">' +
                          S +
                          '</' +
                          H +
                          '>')),
                        (r.parentElement.outerHTML =
                          S +
                          `<p data-block="0"><wbr>
</p><` +
                          H +
                          `
 data-tight="true"` +
                          B +
                          ' data-block="0"' +
                          K +
                          '>' +
                          E +
                          '</' +
                          H +
                          '>');
                    } else
                      r.parentElement.insertAdjacentHTML(
                        'afterend',
                        `<p data-block="0"><wbr>
</p>`,
                      ),
                        r.parentElement.querySelectorAll('li').length === 1
                          ? r.parentElement.remove()
                          : r.remove();
                  else
                    i.nodeType !== 3 && t.startOffset === 0 && i.firstChild.tagName === 'INPUT'
                      ? t.setStart(i.childNodes[1], 1)
                      : (t.setEndAfter(r.lastChild),
                        r.insertAdjacentHTML(
                          'afterend',
                          '<li class="vditor-task" data-marker="' +
                            r.getAttribute('data-marker') +
                            '"><input type="checkbox"> <wbr></li>',
                        ),
                        document.querySelector('wbr').after(t.extractContents()));
                  return (
                    (0, A.ib)(e[e.currentMode].element, t), pe(e), _e(e), n.preventDefault(), !0
                  );
                }
              }
              return !1;
            },
            wn = function (e, t, n, i) {
              if (t.startContainer.nodeType !== 3) {
                var r = t.startContainer.children[t.startOffset];
                if (r && r.tagName === 'HR')
                  return (
                    t.selectNodeContents(r.previousElementSibling),
                    t.collapse(!1),
                    n.preventDefault(),
                    !0
                  );
              }
              if (i) {
                var o = i.previousElementSibling;
                if (
                  o &&
                  (0, A.im)(i, e[e.currentMode].element, t).start === 0 &&
                  (((0, c.vU)() && o.tagName === 'HR') || o.tagName === 'TABLE')
                ) {
                  if (o.tagName === 'TABLE') {
                    var a = o.lastElementChild.lastElementChild.lastElementChild;
                    (a.innerHTML = a.innerHTML.trimLeft() + '<wbr>' + i.textContent.trim()),
                      i.remove();
                  } else o.remove();
                  return (0, A.ib)(e[e.currentMode].element, t), pe(e), n.preventDefault(), !0;
                }
              }
              return !1;
            },
            En = function (e) {
              (0, c.vU)() &&
                e.startContainer.nodeType !== 3 &&
                e.startContainer.tagName === 'HR' &&
                e.setStartBefore(e.startContainer);
            },
            kn = function (e, t, n) {
              var i, r;
              if (!(0, c.vU)()) return !1;
              if (
                e.key === 'ArrowUp' &&
                t &&
                ((i = t.previousElementSibling) === null || i === void 0 ? void 0 : i.tagName) ===
                  'TABLE'
              ) {
                var o = t.previousElementSibling;
                return (
                  n.selectNodeContents(o.rows[o.rows.length - 1].lastElementChild),
                  n.collapse(!1),
                  e.preventDefault(),
                  !0
                );
              }
              return (
                !(
                  e.key !== 'ArrowDown' ||
                  !t ||
                  ((r = t.nextElementSibling) === null || r === void 0 ? void 0 : r.tagName) !==
                    'TABLE'
                ) &&
                (n.selectNodeContents(t.nextElementSibling.rows[0].cells[0]),
                n.collapse(!0),
                e.preventDefault(),
                !0)
              );
            },
            St = function (e, t, n) {
              return or(void 0, void 0, void 0, function () {
                var i, r, o, a, v, E, S, b, H, B, K, C, U, W, q, G;
                return ar(this, function (z) {
                  switch (z.label) {
                    case 0:
                      return e[e.currentMode].element.getAttribute('contenteditable') !== 'true'
                        ? [2]
                        : (t.stopPropagation(),
                          t.preventDefault(),
                          'clipboardData' in t
                            ? ((i = t.clipboardData.getData('text/html')),
                              (r = t.clipboardData.getData('text/plain')),
                              (o = t.clipboardData.files))
                            : ((i = t.dataTransfer.getData('text/html')),
                              (r = t.dataTransfer.getData('text/plain')),
                              t.dataTransfer.types.includes('Files') && (o = t.dataTransfer.items)),
                          (a = {}),
                          (v = function (R, Q) {
                            if (!Q) return ['', Lute.WalkContinue];
                            var le = R.TokensStr();
                            if (
                              R.__internal_object__.Parent.Type === 34 &&
                              le &&
                              le.indexOf('file://') === -1 &&
                              e.options.upload.linkToImgUrl
                            ) {
                              var ne = new XMLHttpRequest();
                              ne.open('POST', e.options.upload.linkToImgUrl),
                                e.options.upload.token &&
                                  ne.setRequestHeader('X-Upload-Token', e.options.upload.token),
                                e.options.upload.withCredentials && (ne.withCredentials = !0),
                                rn(e, ne),
                                ne.setRequestHeader(
                                  'Content-Type',
                                  'application/json; charset=utf-8',
                                ),
                                (ne.onreadystatechange = function () {
                                  if (ne.readyState === XMLHttpRequest.DONE) {
                                    if (ne.status === 200) {
                                      var se = ne.responseText;
                                      e.options.upload.linkToImgFormat &&
                                        (se = e.options.upload.linkToImgFormat(ne.responseText));
                                      var ae = JSON.parse(se);
                                      if (ae.code !== 0) return void e.tip.show(ae.msg);
                                      var Y = ae.data.originalURL;
                                      if (e.currentMode === 'sv')
                                        e.sv.element
                                          .querySelectorAll('.vditor-sv__marker--link')
                                          .forEach(function (we) {
                                            we.textContent === Y && (we.textContent = ae.data.url);
                                          });
                                      else {
                                        var ce = e[e.currentMode].element.querySelector(
                                          'img[src="' + Y + '"]',
                                        );
                                        (ce.src = ae.data.url),
                                          e.currentMode === 'ir' &&
                                            (ce.previousElementSibling.previousElementSibling.innerHTML =
                                              ae.data.url);
                                      }
                                      pe(e);
                                    } else e.tip.show(ne.responseText);
                                    e.options.upload.linkToImgCallback &&
                                      e.options.upload.linkToImgCallback(ne.responseText);
                                  }
                                }),
                                ne.send(JSON.stringify({ url: le }));
                            }
                            return e.currentMode === 'ir'
                              ? [
                                  '<span class="vditor-ir__marker vditor-ir__marker--link">' +
                                    Lute.EscapeHTMLStr(le) +
                                    '</span>',
                                  Lute.WalkContinue,
                                ]
                              : e.currentMode === 'wysiwyg'
                                ? ['', Lute.WalkContinue]
                                : [
                                    '<span class="vditor-sv__marker--link">' +
                                      Lute.EscapeHTMLStr(le) +
                                      '</span>',
                                    Lute.WalkContinue,
                                  ];
                          }),
                          (i
                            .replace(/&amp;/g, '&')
                            .replace(/<(|\/)(html|body|meta)[^>]*?>/gi, '')
                            .trim() !==
                            '<a href="' + r + '">' + r + '</a>' &&
                            i
                              .replace(/&amp;/g, '&')
                              .replace(/<(|\/)(html|body|meta)[^>]*?>/gi, '')
                              .trim() !==
                              '<!--StartFragment--><a href="' +
                                r +
                                '">' +
                                r +
                                '</a><!--EndFragment-->') ||
                            (i = ''),
                          (E = new DOMParser().parseFromString(i, 'text/html')).body &&
                            (i = E.body.innerHTML),
                          (i = Lute.Sanitize(i)),
                          e.wysiwyg.getComments(e),
                          (S = e[e.currentMode].element.scrollHeight),
                          (b = (function (R, Q, le) {
                            le === void 0 && (le = 'sv');
                            var ne = document.createElement('div');
                            ne.innerHTML = R;
                            var se = !1;
                            ne.childElementCount === 1 &&
                              ne.lastElementChild.style.fontFamily.indexOf('monospace') > -1 &&
                              (se = !0);
                            var ae = ne.querySelectorAll('pre');
                            if (
                              (ne.childElementCount === 1 &&
                                ae.length === 1 &&
                                ae[0].className !== 'vditor-wysiwyg' &&
                                ae[0].className !== 'vditor-sv' &&
                                (se = !0),
                              R.indexOf(`
<p class="p1">`) === 0 && (se = !0),
                              ne.childElementCount === 1 &&
                                ne.firstElementChild.tagName === 'TABLE' &&
                                ne.querySelector('.line-number') &&
                                ne.querySelector('.line-content') &&
                                (se = !0),
                              se)
                            ) {
                              var Y = Q || R;
                              return /\n/.test(Y) || ae.length === 1
                                ? le === 'wysiwyg'
                                  ? '<div class="vditor-wysiwyg__block" data-block="0" data-type="code-block"><pre><code>' +
                                    Y.replace(/&/g, '&amp;').replace(/</g, '&lt;') +
                                    '<wbr></code></pre></div>'
                                  : '\n```\n' +
                                    Y.replace(/&/g, '&amp;').replace(/</g, '&lt;') +
                                    '\n```'
                                : le === 'wysiwyg'
                                  ? '<code>' +
                                    Y.replace(/&/g, '&amp;').replace(/</g, '&lt;') +
                                    '</code><wbr>'
                                  : '`' + Y + '`';
                            }
                            return !1;
                          })(i, r, e.currentMode)),
                          (H =
                            e.currentMode === 'sv'
                              ? (0, m.a1)(t.target, 'data-type', 'code-block')
                              : (0, m.lG)(t.target, 'CODE'))
                            ? (e.currentMode === 'sv'
                                ? document.execCommand(
                                    'insertHTML',
                                    !1,
                                    r.replace(/&/g, '&amp;').replace(/</g, '&lt;'),
                                  )
                                : ((B = (0, A.im)(t.target, e[e.currentMode].element)),
                                  H.parentElement.tagName !== 'PRE' && (r += h.g.ZWSP),
                                  (H.textContent =
                                    H.textContent.substring(0, B.start) +
                                    r +
                                    H.textContent.substring(B.end)),
                                  (0, A.$j)(
                                    B.start + r.length,
                                    B.start + r.length,
                                    H.parentElement,
                                  ),
                                  !((G = H.parentElement) === null || G === void 0) &&
                                    G.nextElementSibling.classList.contains(
                                      'vditor-' + e.currentMode + '__preview',
                                    ) &&
                                    ((H.parentElement.nextElementSibling.innerHTML = H.outerHTML),
                                    be(H.parentElement.nextElementSibling, e))),
                              [3, 8])
                            : [3, 1]);
                    case 1:
                      return b ? (n.pasteCode(b), [3, 8]) : [3, 2];
                    case 2:
                      return i.trim() === ''
                        ? [3, 3]
                        : (((K = document.createElement('div')).innerHTML = i),
                          K.querySelectorAll('[style]').forEach(function (R) {
                            R.removeAttribute('style');
                          }),
                          K.querySelectorAll('.vditor-copy').forEach(function (R) {
                            R.remove();
                          }),
                          e.currentMode === 'ir'
                            ? ((a.HTML2VditorIRDOM = { renderLinkDest: v }),
                              e.lute.SetJSRenderers({ renderers: a }),
                              (0, A.oC)(e.lute.HTML2VditorIRDOM(K.innerHTML), e))
                            : e.currentMode === 'wysiwyg'
                              ? ((a.HTML2VditorDOM = { renderLinkDest: v }),
                                e.lute.SetJSRenderers({ renderers: a }),
                                (0, A.oC)(e.lute.HTML2VditorDOM(K.innerHTML), e))
                              : ((a.Md2VditorSVDOM = { renderLinkDest: v }),
                                e.lute.SetJSRenderers({ renderers: a }),
                                $t(e, e.lute.HTML2Md(K.innerHTML).trimRight())),
                          e.outline.render(e),
                          [3, 8]);
                    case 3:
                      return o.length > 0
                        ? e.options.upload.url || e.options.upload.handler
                          ? [4, Rt(e, o)]
                          : [3, 5]
                        : [3, 7];
                    case 4:
                      return z.sent(), [3, 6];
                    case 5:
                      (C = new FileReader()),
                        'clipboardData' in t
                          ? ((o = t.clipboardData.files), (U = o[0]))
                          : t.dataTransfer.types.includes('Files') &&
                            ((o = t.dataTransfer.items), (U = o[0].getAsFile())),
                        U &&
                          U.type.startsWith('image') &&
                          (C.readAsDataURL(U),
                          (C.onload = function () {
                            var R = '';
                            e.currentMode === 'wysiwyg'
                              ? (R +=
                                  '<img alt="' +
                                  U.name +
                                  '" src="' +
                                  C.result.toString() +
                                  `">
`)
                              : (R +=
                                  '![' +
                                  U.name +
                                  '](' +
                                  C.result.toString() +
                                  `)
`),
                              document.execCommand('insertHTML', !1, R);
                          })),
                        (z.label = 6);
                    case 6:
                      return [3, 8];
                    case 7:
                      r.trim() !== '' &&
                        o.length === 0 &&
                        ((q = (0, A.zh)(e)).toString() !== '' &&
                          e.lute.IsValidLinkDest(r) &&
                          (r = '[' + q.toString() + '](' + r + ')'),
                        e.currentMode === 'ir'
                          ? ((a.Md2VditorIRDOM = { renderLinkDest: v }),
                            e.lute.SetJSRenderers({ renderers: a }),
                            (0, A.oC)(e.lute.Md2VditorIRDOM(r), e))
                          : e.currentMode === 'wysiwyg'
                            ? ((a.Md2VditorDOM = { renderLinkDest: v }),
                              e.lute.SetJSRenderers({ renderers: a }),
                              (0, A.oC)(e.lute.Md2VditorDOM(r), e))
                            : ((a.Md2VditorSVDOM = { renderLinkDest: v }),
                              e.lute.SetJSRenderers({ renderers: a }),
                              $t(e, r)),
                        e.outline.render(e)),
                        (z.label = 8);
                    case 8:
                      return (
                        e.currentMode !== 'sv' &&
                          ((W = (0, m.F9)((0, A.zh)(e).startContainer)) &&
                            ((q = (0, A.zh)(e)),
                            e[e.currentMode].element.querySelectorAll('wbr').forEach(function (R) {
                              R.remove();
                            }),
                            q.insertNode(document.createElement('wbr')),
                            e.currentMode === 'wysiwyg'
                              ? (W.outerHTML = e.lute.SpinVditorDOM(W.outerHTML))
                              : (W.outerHTML = e.lute.SpinVditorIRDOM(W.outerHTML)),
                            (0, A.ib)(e[e.currentMode].element, q)),
                          e[e.currentMode].element
                            .querySelectorAll(
                              '.vditor-' + e.currentMode + "__preview[data-render='2']",
                            )
                            .forEach(function (R) {
                              be(R, e);
                            })),
                        e.wysiwyg.triggerRemoveComment(e),
                        pe(e),
                        e[e.currentMode].element.scrollHeight - S >
                          Math.min(e[e.currentMode].element.clientHeight, window.innerHeight) / 2 &&
                          _e(e),
                        [2]
                      );
                  }
                });
              });
            },
            Sn = function (e) {
              e.hint.render(e);
              var t = (0, A.zh)(e).startContainer,
                n = (0, m.a1)(t, 'data-type', 'code-block-info');
              if (n)
                if (n.textContent.replace(h.g.ZWSP, '') === '' && e.hint.recentLanguage)
                  (n.textContent = h.g.ZWSP + e.hint.recentLanguage),
                    (0, A.zh)(e).selectNodeContents(n);
                else {
                  var i = [],
                    r = n.textContent
                      .substring(0, (0, A.im)(n, e.ir.element).start)
                      .replace(h.g.ZWSP, '');
                  (e.options.preview.hljs.langs || h.g.CODE_LANGUAGES).forEach(function (o) {
                    o.indexOf(r.toLowerCase()) > -1 && i.push({ html: o, value: o });
                  }),
                    e.hint.genHTML(i, r, e);
                }
            },
            Ge = function (e, t) {
              t === void 0 && (t = { enableAddUndoStack: !0, enableHint: !1, enableInput: !0 }),
                t.enableHint && Sn(e),
                clearTimeout(e.ir.processTimeoutId),
                (e.ir.processTimeoutId = window.setTimeout(function () {
                  if (!e.ir.composingLock) {
                    var n = d(e);
                    typeof e.options.input == 'function' && t.enableInput && e.options.input(n),
                      e.options.counter.enable && e.counter.render(e, n),
                      e.options.cache.enable &&
                        (0, c.pK)() &&
                        (localStorage.setItem(e.options.cache.id, n),
                        e.options.cache.after && e.options.cache.after(n)),
                      e.devtools && e.devtools.renderEchart(e),
                      t.enableAddUndoStack && e.undo.addToUndoStack(e);
                  }
                }, e.options.undoDelay));
            },
            ft = function (e, t) {
              var n = (0, A.zh)(e),
                i = (0, m.F9)(n.startContainer) || n.startContainer;
              if (i) {
                var r = i.querySelector('.vditor-ir__marker--heading');
                r
                  ? (r.innerHTML = t)
                  : (i.insertAdjacentText('afterbegin', t),
                    n.selectNodeContents(i),
                    n.collapse(!1)),
                  Z(e, n.cloneRange()),
                  ct(e);
              }
            },
            Lt = function (e, t, n) {
              var i = (0, m.a1)(e.startContainer, 'data-type', n);
              if (i) {
                i.firstElementChild.remove(),
                  i.lastElementChild.remove(),
                  e.insertNode(document.createElement('wbr'));
                var r = document.createElement('div');
                (r.innerHTML = t.lute.SpinVditorIRDOM(i.outerHTML)),
                  (i.outerHTML = r.firstElementChild.innerHTML.trim());
              }
            },
            cr = function (e, t, n, i) {
              var r = (0, A.zh)(e),
                o = t.getAttribute('data-type'),
                a = r.startContainer;
              a.nodeType === 3 && (a = a.parentElement);
              var v = !0;
              if (t.classList.contains('vditor-menu--current'))
                if (o === 'quote') {
                  var E = (0, m.lG)(a, 'BLOCKQUOTE');
                  E &&
                    (r.insertNode(document.createElement('wbr')),
                    (E.outerHTML =
                      E.innerHTML.trim() === ''
                        ? '<p data-block="0">' + E.innerHTML + '</p>'
                        : E.innerHTML));
                } else if (o === 'link') {
                  var S = (0, m.a1)(r.startContainer, 'data-type', 'a');
                  if (S) {
                    var b = (0, m.fb)(r.startContainer, 'vditor-ir__link');
                    b
                      ? (r.insertNode(document.createElement('wbr')), (S.outerHTML = b.innerHTML))
                      : (S.outerHTML = S.querySelector('.vditor-ir__link').innerHTML + '<wbr>');
                  }
                } else
                  o === 'italic'
                    ? Lt(r, e, 'em')
                    : o === 'bold'
                      ? Lt(r, e, 'strong')
                      : o === 'strike'
                        ? Lt(r, e, 's')
                        : o === 'inline-code'
                          ? Lt(r, e, 'code')
                          : (o !== 'check' && o !== 'list' && o !== 'ordered-list') ||
                            (wt(e, r, o), (v = !1), t.classList.remove('vditor-menu--current'));
              else {
                e.ir.element.childNodes.length === 0 &&
                  ((e.ir.element.innerHTML = '<p data-block="0"><wbr></p>'),
                  (0, A.ib)(e.ir.element, r));
                var H = (0, m.F9)(r.startContainer);
                if (o === 'line') {
                  if (H) {
                    var B = `<hr data-block="0"><p data-block="0"><wbr>
</p>`;
                    H.innerHTML.trim() === ''
                      ? (H.outerHTML = B)
                      : H.insertAdjacentHTML('afterend', B);
                  }
                } else if (o === 'quote')
                  H &&
                    (r.insertNode(document.createElement('wbr')),
                    (H.outerHTML = '<blockquote data-block="0">' + H.outerHTML + '</blockquote>'),
                    (v = !1),
                    t.classList.add('vditor-menu--current'));
                else if (o === 'link') {
                  var K = void 0;
                  (K =
                    r.toString() === ''
                      ? n + '<wbr>' + i
                      : '' + n + r.toString() + i.replace(')', '<wbr>)')),
                    document.execCommand('insertHTML', !1, K),
                    (v = !1),
                    t.classList.add('vditor-menu--current');
                } else if (
                  o === 'italic' ||
                  o === 'bold' ||
                  o === 'strike' ||
                  o === 'inline-code' ||
                  o === 'code' ||
                  o === 'table'
                ) {
                  (K = void 0),
                    r.toString() === ''
                      ? (K = n + '<wbr>' + i)
                      : ((K =
                          o === 'code'
                            ? n +
                              `
` +
                              r.toString() +
                              '<wbr>' +
                              i
                            : o === 'table'
                              ? '' + n + r.toString() + '<wbr>' + i
                              : '' + n + r.toString() + i + '<wbr>'),
                        r.deleteContents()),
                    (o !== 'table' && o !== 'code') ||
                      (K =
                        `
` +
                        K +
                        `

`);
                  var C = document.createElement('span');
                  (C.innerHTML = K),
                    r.insertNode(C),
                    Z(e, r),
                    o === 'table' &&
                      (r.selectNodeContents(
                        getSelection().getRangeAt(0).startContainer.parentElement,
                      ),
                      (0, A.Hc)(r));
                } else
                  (o !== 'check' && o !== 'list' && o !== 'ordered-list') ||
                    (wt(e, r, o, !1),
                    (v = !1),
                    s(e.toolbar.elements, ['check', 'list', 'ordered-list']),
                    t.classList.add('vditor-menu--current'));
              }
              (0, A.ib)(e.ir.element, r), Ge(e), v && ct(e);
            },
            dr = function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function a(S) {
                  try {
                    E(i.next(S));
                  } catch (b) {
                    o(b);
                  }
                }
                function v(S) {
                  try {
                    E(i.throw(S));
                  } catch (b) {
                    o(b);
                  }
                }
                function E(S) {
                  var b;
                  S.done
                    ? r(S.value)
                    : ((b = S.value),
                      b instanceof n
                        ? b
                        : new n(function (H) {
                            H(b);
                          })).then(a, v);
                }
                E((i = i.apply(e, t || [])).next());
              });
            },
            ur = function (e, t) {
              var n,
                i,
                r,
                o,
                a = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (o = { next: v(0), throw: v(1), return: v(2) }),
                typeof Symbol == 'function' &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function v(E) {
                return function (S) {
                  return (function (b) {
                    if (n) throw new TypeError('Generator is already executing.');
                    for (; a; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & b[0]
                                ? i.return
                                : b[0]
                                  ? i.throw || ((r = i.return) && r.call(i), 0)
                                  : i.next) &&
                            !(r = r.call(i, b[1])).done)
                        )
                          return r;
                        switch (((i = 0), r && (b = [2 & b[0], r.value]), b[0])) {
                          case 0:
                          case 1:
                            r = b;
                            break;
                          case 4:
                            return a.label++, { value: b[1], done: !1 };
                          case 5:
                            a.label++, (i = b[1]), (b = [0]);
                            continue;
                          case 7:
                            (b = a.ops.pop()), a.trys.pop();
                            continue;
                          default:
                            if (
                              ((r = a.trys),
                              !(
                                (r = r.length > 0 && r[r.length - 1]) ||
                                (b[0] !== 6 && b[0] !== 2)
                              ))
                            ) {
                              a = 0;
                              continue;
                            }
                            if (b[0] === 3 && (!r || (b[1] > r[0] && b[1] < r[3]))) {
                              a.label = b[1];
                              break;
                            }
                            if (b[0] === 6 && a.label < r[1]) {
                              (a.label = r[1]), (r = b);
                              break;
                            }
                            if (r && a.label < r[2]) {
                              (a.label = r[2]), a.ops.push(b);
                              break;
                            }
                            r[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        b = t.call(e, a);
                      } catch (H) {
                        (b = [6, H]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & b[0]) throw b[1];
                    return { value: b[0] ? b[1] : void 0, done: !0 };
                  })([E, S]);
                };
              }
            },
            pr = (function () {
              function e(t) {
                var n = this;
                (this.splitChar = ''),
                  (this.lastIndex = -1),
                  (this.fillEmoji = function (i, r) {
                    n.element.style.display = 'none';
                    var o = decodeURIComponent(i.getAttribute('data-value')),
                      a = window.getSelection().getRangeAt(0);
                    if (r.currentMode === 'ir') {
                      var v = (0, m.a1)(a.startContainer, 'data-type', 'code-block-info');
                      if (v)
                        return (
                          (v.textContent = h.g.ZWSP + o.trimRight()),
                          a.selectNodeContents(v),
                          a.collapse(!1),
                          Ge(r),
                          v.parentElement.querySelectorAll('code').forEach(function (H) {
                            H.className = 'language-' + o.trimRight();
                          }),
                          be(v.parentElement.querySelector('.vditor-ir__preview'), r),
                          void (n.recentLanguage = o.trimRight())
                        );
                    }
                    if (r.currentMode === 'wysiwyg' && a.startContainer.nodeType !== 3) {
                      var E = a.startContainer,
                        S = void 0;
                      if (
                        (S = E.classList.contains('vditor-input') ? E : E.firstElementChild) &&
                        S.classList.contains('vditor-input')
                      )
                        return (
                          (S.value = o.trimRight()),
                          a.selectNodeContents(S),
                          a.collapse(!1),
                          S.dispatchEvent(new CustomEvent('input', { detail: 1 })),
                          void (n.recentLanguage = o.trimRight())
                        );
                    }
                    if (
                      (a.setStart(a.startContainer, n.lastIndex),
                      a.deleteContents(),
                      r.options.hint.parse
                        ? r.currentMode === 'sv'
                          ? (0, A.oC)(r.lute.SpinVditorSVDOM(o), r)
                          : r.currentMode === 'wysiwyg'
                            ? (0, A.oC)(r.lute.SpinVditorDOM(o), r)
                            : (0, A.oC)(r.lute.SpinVditorIRDOM(o), r)
                        : (0, A.oC)(o, r),
                      n.splitChar === ':' &&
                        o.indexOf(':') > -1 &&
                        r.currentMode !== 'sv' &&
                        a.insertNode(document.createTextNode(' ')),
                      a.collapse(!1),
                      (0, A.Hc)(a),
                      r.currentMode === 'wysiwyg')
                    )
                      (b = (0, m.fb)(a.startContainer, 'vditor-wysiwyg__block')) &&
                        b.lastElementChild.classList.contains('vditor-wysiwyg__preview') &&
                        ((b.lastElementChild.innerHTML = b.firstElementChild.innerHTML),
                        be(b.lastElementChild, r));
                    else if (r.currentMode === 'ir') {
                      var b;
                      (b = (0, m.fb)(a.startContainer, 'vditor-ir__marker--pre')) &&
                        b.nextElementSibling.classList.contains('vditor-ir__preview') &&
                        ((b.nextElementSibling.innerHTML = b.innerHTML),
                        be(b.nextElementSibling, r));
                    }
                    pe(r);
                  }),
                  (this.timeId = -1),
                  (this.element = document.createElement('div')),
                  (this.element.className = 'vditor-hint'),
                  (this.recentLanguage = ''),
                  t.push({ key: ':' });
              }
              return (
                (e.prototype.render = function (t) {
                  var n = this;
                  if (window.getSelection().focusNode) {
                    var i,
                      r = getSelection().getRangeAt(0);
                    i = r.startContainer.textContent.substring(0, r.startOffset) || '';
                    var o = this.getKey(i, t.options.hint.extend);
                    if (o === void 0)
                      (this.element.style.display = 'none'), clearTimeout(this.timeId);
                    else if (this.splitChar === ':') {
                      var a = o === '' ? t.options.hint.emoji : t.lute.GetEmojis(),
                        v = [];
                      Object.keys(a).forEach(function (E) {
                        E.indexOf(o.toLowerCase()) === 0 &&
                          (a[E].indexOf('.') > -1
                            ? v.push({
                                html: '<img src="' + a[E] + '" title=":' + E + ':"/> :' + E + ':',
                                value: ':' + E + ':',
                              })
                            : v.push({
                                html: '<span class="vditor-hint__emoji">' + a[E] + '</span>' + E,
                                value: a[E],
                              }));
                      }),
                        this.genHTML(v, o, t);
                    } else
                      t.options.hint.extend.forEach(function (E) {
                        E.key === n.splitChar &&
                          (clearTimeout(n.timeId),
                          (n.timeId = window.setTimeout(function () {
                            return dr(n, void 0, void 0, function () {
                              var S;
                              return ur(this, function (b) {
                                switch (b.label) {
                                  case 0:
                                    return (S = this.genHTML), [4, E.hint(o)];
                                  case 1:
                                    return S.apply(this, [b.sent(), o, t]), [2];
                                }
                              });
                            });
                          }, t.options.hint.delay)));
                      });
                  }
                }),
                (e.prototype.genHTML = function (t, n, i) {
                  var r = this;
                  if (t.length !== 0) {
                    var o = i[i.currentMode].element,
                      a = (0, A.Ny)(o),
                      v =
                        a.left +
                        (i.options.outline.position === 'left' ? i.outline.element.offsetWidth : 0),
                      E = a.top,
                      S = '';
                    t.forEach(function (H, B) {
                      if (!(B > 7)) {
                        var K = H.html;
                        if (n !== '') {
                          var C = K.lastIndexOf('>') + 1,
                            U = K.substr(C),
                            W = U.toLowerCase().indexOf(n.toLowerCase());
                          W > -1 &&
                            ((U =
                              U.substring(0, W) +
                              '<b>' +
                              U.substring(W, W + n.length) +
                              '</b>' +
                              U.substring(W + n.length)),
                            (K = K.substr(0, C) + U));
                        }
                        S +=
                          '<button type="button" data-value="' +
                          encodeURIComponent(H.value) +
                          ` "
` +
                          (B === 0 ? "class='vditor-hint--current'" : '') +
                          '> ' +
                          K +
                          '</button>';
                      }
                    }),
                      (this.element.innerHTML = S);
                    var b = parseInt(
                      document.defaultView
                        .getComputedStyle(o, null)
                        .getPropertyValue('line-height'),
                      10,
                    );
                    (this.element.style.top = E + (b || 22) + 'px'),
                      (this.element.style.left = v + 'px'),
                      (this.element.style.display = 'block'),
                      (this.element.style.right = 'auto'),
                      this.element.querySelectorAll('button').forEach(function (H) {
                        H.addEventListener('click', function (B) {
                          r.fillEmoji(H, i), B.preventDefault();
                        });
                      }),
                      this.element.getBoundingClientRect().bottom > window.innerHeight &&
                        (this.element.style.top = E - this.element.offsetHeight + 'px'),
                      this.element.getBoundingClientRect().right > window.innerWidth &&
                        ((this.element.style.left = 'auto'), (this.element.style.right = '0'));
                  } else this.element.style.display = 'none';
                }),
                (e.prototype.select = function (t, n) {
                  if (
                    this.element.querySelectorAll('button').length === 0 ||
                    this.element.style.display === 'none'
                  )
                    return !1;
                  var i = this.element.querySelector('.vditor-hint--current');
                  if (t.key === 'ArrowDown')
                    return (
                      t.preventDefault(),
                      t.stopPropagation(),
                      i.removeAttribute('class'),
                      i.nextElementSibling
                        ? (i.nextElementSibling.className = 'vditor-hint--current')
                        : (this.element.children[0].className = 'vditor-hint--current'),
                      !0
                    );
                  if (t.key === 'ArrowUp') {
                    if (
                      (t.preventDefault(),
                      t.stopPropagation(),
                      i.removeAttribute('class'),
                      i.previousElementSibling)
                    )
                      i.previousElementSibling.className = 'vditor-hint--current';
                    else {
                      var r = this.element.children.length;
                      this.element.children[r - 1].className = 'vditor-hint--current';
                    }
                    return !0;
                  }
                  return (
                    !(
                      (0, c.yl)(t) ||
                      t.shiftKey ||
                      t.altKey ||
                      t.key !== 'Enter' ||
                      t.isComposing
                    ) && (t.preventDefault(), t.stopPropagation(), this.fillEmoji(i, n), !0)
                  );
                }),
                (e.prototype.getKey = function (t, n) {
                  var i,
                    r = this;
                  if (
                    ((this.lastIndex = -1),
                    (this.splitChar = ''),
                    n.forEach(function (E) {
                      var S = t.lastIndexOf(E.key);
                      r.lastIndex < S && ((r.splitChar = E.key), (r.lastIndex = S));
                    }),
                    this.lastIndex === -1)
                  )
                    return i;
                  var o = t.split(this.splitChar),
                    a = o[o.length - 1];
                  if (o.length > 1 && a.trim() === a)
                    if (o.length === 2 && o[0] === '' && o[1].length < 32) i = o[1];
                    else {
                      var v = o[o.length - 2].slice(-1);
                      (0, u.X)(v) === ' ' && a.length < 32 && (i = a);
                    }
                  return i;
                }),
                e
              );
            })(),
            mr = (function () {
              function e(t) {
                this.composingLock = !1;
                var n = document.createElement('div');
                (n.className = 'vditor-ir'),
                  (n.innerHTML =
                    '<pre class="vditor-reset" placeholder="' +
                    t.options.placeholder +
                    `"
 contenteditable="true" spellcheck="false"></pre>`),
                  (this.element = n.firstElementChild),
                  this.bindEvent(t),
                  xt(t, this.element),
                  Qt(t, this.element),
                  Ht(t, this.element),
                  jt(t, this.element),
                  It(t, this.element),
                  Nt(t, this.element),
                  Dt(t, this.element, this.copy),
                  Ot(t, this.element, this.copy);
              }
              return (
                (e.prototype.copy = function (t, n) {
                  var i = getSelection().getRangeAt(0);
                  if (i.toString() !== '') {
                    t.stopPropagation(), t.preventDefault();
                    var r = document.createElement('div');
                    r.appendChild(i.cloneContents()),
                      t.clipboardData.setData(
                        'text/plain',
                        n.lute.VditorIRDOM2Md(r.innerHTML).trim(),
                      ),
                      t.clipboardData.setData('text/html', '');
                  }
                }),
                (e.prototype.bindEvent = function (t) {
                  var n = this;
                  this.element.addEventListener('paste', function (i) {
                    St(t, i, {
                      pasteCode: function (r) {
                        document.execCommand('insertHTML', !1, r);
                      },
                    });
                  }),
                    this.element.addEventListener('scroll', function () {
                      g(t, ['hint']);
                    }),
                    this.element.addEventListener('compositionstart', function (i) {
                      n.composingLock = !0;
                    }),
                    this.element.addEventListener('compositionend', function (i) {
                      (0, c.vU)() || Z(t, getSelection().getRangeAt(0).cloneRange()),
                        (n.composingLock = !1);
                    }),
                    this.element.addEventListener('input', function (i) {
                      if (i.inputType !== 'deleteByDrag' && i.inputType !== 'insertFromDrop')
                        return n.preventInput
                          ? ((n.preventInput = !1),
                            void Ge(t, { enableAddUndoStack: !0, enableHint: !0, enableInput: !0 }))
                          : void (
                              n.composingLock ||
                              i.data === '‘' ||
                              i.data === '“' ||
                              i.data === '《' ||
                              Z(t, getSelection().getRangeAt(0).cloneRange(), !1, i)
                            );
                    }),
                    this.element.addEventListener('click', function (i) {
                      if (i.target.tagName === 'INPUT')
                        return (
                          i.target.checked
                            ? i.target.setAttribute('checked', 'checked')
                            : i.target.removeAttribute('checked'),
                          (n.preventInput = !0),
                          void Ge(t)
                        );
                      var r = (0, A.zh)(t),
                        o = (0, m.fb)(i.target, 'vditor-ir__preview');
                      if (
                        (o || (o = (0, m.fb)(r.startContainer, 'vditor-ir__preview')),
                        o &&
                          (o.previousElementSibling.firstElementChild
                            ? r.selectNodeContents(o.previousElementSibling.firstElementChild)
                            : r.selectNodeContents(o.previousElementSibling),
                          r.collapse(!0),
                          (0, A.Hc)(r),
                          _e(t)),
                        i.target.tagName === 'IMG')
                      ) {
                        var a = i.target.parentElement.querySelector('.vditor-ir__marker--link');
                        a && (r.selectNode(a), (0, A.Hc)(r));
                      }
                      var v = (0, m.a1)(i.target, 'data-type', 'a');
                      if (!v || v.classList.contains('vditor-ir__node--expand')) {
                        if (
                          i.target.isEqualNode(n.element) &&
                          n.element.lastElementChild &&
                          r.collapsed
                        ) {
                          var E = n.element.lastElementChild.getBoundingClientRect();
                          i.y > E.top + E.height &&
                            (n.element.lastElementChild.tagName === 'P' &&
                            n.element.lastElementChild.textContent.trim().replace(h.g.ZWSP, '') ===
                              ''
                              ? (r.selectNodeContents(n.element.lastElementChild), r.collapse(!1))
                              : (n.element.insertAdjacentHTML(
                                  'beforeend',
                                  '<p data-block="0">' + h.g.ZWSP + '<wbr></p>',
                                ),
                                (0, A.ib)(n.element, r)));
                        }
                        r.toString() === ''
                          ? O(r, t)
                          : setTimeout(function () {
                              O((0, A.zh)(t), t);
                            }),
                          ee(i, t),
                          ct(t);
                      } else
                        t.options.link.click
                          ? t.options.link.click(
                              v.querySelector(':scope > .vditor-ir__marker--link'),
                            )
                          : t.options.link.isOpen &&
                            window.open(
                              v.querySelector(':scope > .vditor-ir__marker--link').textContent,
                            );
                    }),
                    this.element.addEventListener('keyup', function (i) {
                      if (!i.isComposing && !(0, c.yl)(i))
                        if (
                          (i.key === 'Enter' && _e(t),
                          ct(t),
                          (i.key !== 'Backspace' && i.key !== 'Delete') ||
                            t.ir.element.innerHTML === '' ||
                            t.ir.element.childNodes.length !== 1 ||
                            !t.ir.element.firstElementChild ||
                            t.ir.element.firstElementChild.tagName !== 'P' ||
                            t.ir.element.firstElementChild.childElementCount !== 0 ||
                            (t.ir.element.textContent !== '' &&
                              t.ir.element.textContent !==
                                `
`))
                        ) {
                          var r = (0, A.zh)(t);
                          i.key === 'Backspace'
                            ? ((0, c.vU)() &&
                                r.startContainer.textContent ===
                                  `
` &&
                                r.startOffset === 1 &&
                                ((r.startContainer.textContent = ''), O(r, t)),
                              n.element.querySelectorAll('.language-math').forEach(function (a) {
                                var v = a.querySelector('br');
                                v && v.remove();
                              }))
                            : i.key.indexOf('Arrow') > -1
                              ? ((i.key !== 'ArrowLeft' && i.key !== 'ArrowRight') || Sn(t),
                                O(r, t))
                              : i.keyCode === 229 &&
                                i.code === '' &&
                                i.key === 'Unidentified' &&
                                O(r, t);
                          var o = (0, m.fb)(r.startContainer, 'vditor-ir__preview');
                          if (o) {
                            if (i.key === 'ArrowUp' || i.key === 'ArrowLeft')
                              return (
                                o.previousElementSibling.firstElementChild
                                  ? r.selectNodeContents(o.previousElementSibling.firstElementChild)
                                  : r.selectNodeContents(o.previousElementSibling),
                                r.collapse(!1),
                                i.preventDefault(),
                                !0
                              );
                            if (
                              o.tagName === 'SPAN' &&
                              (i.key === 'ArrowDown' || i.key === 'ArrowRight')
                            )
                              return (
                                o.parentElement.getAttribute('data-type') === 'html-entity'
                                  ? (o.parentElement.insertAdjacentText('afterend', h.g.ZWSP),
                                    r.setStart(o.parentElement.nextSibling, 1))
                                  : r.selectNodeContents(o.parentElement.lastElementChild),
                                r.collapse(!1),
                                i.preventDefault(),
                                !0
                              );
                          }
                        } else t.ir.element.innerHTML = '';
                    });
                }),
                e
              );
            })(),
            Ln = function (e) {
              return e.currentMode === 'sv'
                ? e.lute.Md2HTML(d(e))
                : e.currentMode === 'wysiwyg'
                  ? e.lute.VditorDOM2HTML(e.wysiwyg.element.innerHTML)
                  : e.currentMode === 'ir'
                    ? e.lute.VditorIRDOM2HTML(e.ir.element.innerHTML)
                    : void 0;
            },
            fr = J(895),
            Tn = J(818),
            hr = (function () {
              function e(t) {
                (this.element = document.createElement('div')),
                  (this.element.className = 'vditor-outline'),
                  (this.element.innerHTML =
                    '<div class="vditor-outline__title">' +
                    t +
                    `</div>
<div class="vditor-outline__content"></div>`);
              }
              return (
                (e.prototype.render = function (t) {
                  return t.preview.element.style.display === 'block'
                    ? (0, Tn.k)(t.preview.previewElement, this.element.lastElementChild, t)
                    : (0, Tn.k)(t[t.currentMode].element, this.element.lastElementChild, t);
                }),
                (e.prototype.toggle = function (t, n, i) {
                  var r;
                  n === void 0 && (n = !0), i === void 0 && (i = !0);
                  var o =
                    (r = t.toolbar.elements.outline) === null || r === void 0
                      ? void 0
                      : r.firstElementChild;
                  if (
                    (n && window.innerWidth >= h.g.MOBILE_WIDTH
                      ? ((this.element.style.display = 'block'),
                        this.render(t),
                        o == null || o.classList.add('vditor-menu--current'))
                      : ((this.element.style.display = 'none'),
                        o == null || o.classList.remove('vditor-menu--current')),
                    i && getSelection().rangeCount > 0)
                  ) {
                    var a = getSelection().getRangeAt(0);
                    t[t.currentMode].element.contains(a.startContainer) && (0, A.Hc)(a);
                  }
                  he(t);
                }),
                e
              );
            })(),
            vr = J(554),
            gr = (function () {
              function e(t) {
                var n = this;
                (this.element = document.createElement('div')),
                  (this.element.className = 'vditor-preview'),
                  (this.previewElement = document.createElement('div')),
                  (this.previewElement.className = 'vditor-reset'),
                  t.options.classes.preview &&
                    this.previewElement.classList.add(t.options.classes.preview),
                  (this.previewElement.style.maxWidth = t.options.preview.maxWidth + 'px'),
                  this.previewElement.addEventListener('copy', function (E) {
                    if (E.target.tagName !== 'TEXTAREA') {
                      var S = document.createElement('div');
                      (S.className = 'vditor-reset'),
                        S.appendChild(getSelection().getRangeAt(0).cloneContents()),
                        n.copyToX(t, S, 'default'),
                        E.preventDefault();
                    }
                  }),
                  this.previewElement.addEventListener('click', function (E) {
                    var S = (0, m.lG)(E.target, 'SPAN');
                    if (S && (0, m.fb)(S, 'vditor-toc')) {
                      var b = n.previewElement.querySelector(
                        '#' + S.getAttribute('data-target-id'),
                      );
                      b && (n.element.scrollTop = b.offsetTop);
                    } else {
                      if (E.target.tagName === 'A')
                        return (
                          t.options.link.click
                            ? t.options.link.click(E.target)
                            : t.options.link.isOpen && window.open(E.target.getAttribute('href')),
                          void E.preventDefault()
                        );
                      E.target.tagName === 'IMG' &&
                        (t.options.image.preview
                          ? t.options.image.preview(E.target)
                          : t.options.image.isPreview &&
                            (0, re.E)(E.target, t.options.lang, t.options.theme));
                    }
                  }),
                  this.element.appendChild(this.previewElement);
                var i = t.options.preview.actions;
                if (i.length !== 0) {
                  var r = document.createElement('div');
                  r.className = 'vditor-preview__action';
                  for (var o = [], a = 0; a < i.length; a++) {
                    var v = i[a];
                    if (typeof v != 'object')
                      switch (v) {
                        case 'desktop':
                          o.push(
                            '<button type="button" class="vditor-preview__action--current" data-type="desktop">Desktop</button>',
                          );
                          break;
                        case 'tablet':
                          o.push('<button type="button" data-type="tablet">Tablet</button>');
                          break;
                        case 'mobile':
                          o.push('<button type="button" data-type="mobile">Mobile/Wechat</button>');
                          break;
                        case 'mp-wechat':
                          o.push(
                            '<button type="button" data-type="mp-wechat" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到公众号"><svg><use xlink:href="#vditor-icon-mp-wechat"></use></svg></button>',
                          );
                          break;
                        case 'zhihu':
                          o.push(
                            '<button type="button" data-type="zhihu" class="vditor-tooltipped vditor-tooltipped__w" aria-label="复制到知乎"><svg><use xlink:href="#vditor-icon-zhihu"></use></svg></button>',
                          );
                      }
                    else
                      o.push(
                        '<button type="button" data-type="' +
                          v.key +
                          '" class="' +
                          v.className +
                          '"' +
                          (v.tooltip ? ' aria-label="' + v.tooltip + '"' : '') +
                          '">' +
                          v.text +
                          '</button>',
                      );
                  }
                  (r.innerHTML = o.join('')),
                    r.addEventListener((0, c.Le)(), function (E) {
                      var S = (0, _.S)(E.target, 'BUTTON');
                      if (S) {
                        var b = S.getAttribute('data-type'),
                          H = i.find(function (B) {
                            return (B == null ? void 0 : B.key) === b;
                          });
                        H
                          ? H.click(b)
                          : b !== 'mp-wechat' && b !== 'zhihu'
                            ? ((n.previewElement.style.width =
                                b === 'desktop' ? 'auto' : b === 'tablet' ? '780px' : '360px'),
                              n.previewElement.scrollWidth >
                                n.previewElement.parentElement.clientWidth &&
                                (n.previewElement.style.width = 'auto'),
                              n.render(t),
                              r.querySelectorAll('button').forEach(function (B) {
                                B.classList.remove('vditor-preview__action--current');
                              }),
                              S.classList.add('vditor-preview__action--current'))
                            : n.copyToX(t, n.previewElement.cloneNode(!0), b);
                      }
                    }),
                    this.element.insertBefore(r, this.previewElement);
                }
              }
              return (
                (e.prototype.render = function (t, n) {
                  var i = this;
                  if ((clearTimeout(this.mdTimeoutId), this.element.style.display !== 'none'))
                    if (n) this.previewElement.innerHTML = n;
                    else if (d(t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') !== '') {
                      var r = new Date().getTime(),
                        o = d(t);
                      this.mdTimeoutId = window.setTimeout(function () {
                        if (t.options.preview.url) {
                          var a = new XMLHttpRequest();
                          a.open('POST', t.options.preview.url),
                            a.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'),
                            (a.onreadystatechange = function () {
                              if (a.readyState === XMLHttpRequest.DONE)
                                if (a.status === 200) {
                                  var E = JSON.parse(a.responseText);
                                  if (E.code !== 0) return void t.tip.show(E.msg);
                                  t.options.preview.transform &&
                                    (E.data = t.options.preview.transform(E.data)),
                                    (i.previewElement.innerHTML = E.data),
                                    i.afterRender(t, r);
                                } else {
                                  var S = t.lute.Md2HTML(o);
                                  t.options.preview.transform &&
                                    (S = t.options.preview.transform(S)),
                                    (i.previewElement.innerHTML = S),
                                    i.afterRender(t, r);
                                }
                            }),
                            a.send(JSON.stringify({ markdownText: o }));
                        } else {
                          var v = t.lute.Md2HTML(o);
                          t.options.preview.transform && (v = t.options.preview.transform(v)),
                            (i.previewElement.innerHTML = v),
                            i.afterRender(t, r);
                        }
                      }, t.options.preview.delay);
                    } else this.previewElement.innerHTML = '';
                  else
                    this.element.getAttribute('data-type') === 'renderPerformance' && t.tip.hide();
                }),
                (e.prototype.afterRender = function (t, n) {
                  t.options.preview.parse && t.options.preview.parse(this.element);
                  var i = new Date().getTime() - n;
                  new Date().getTime() - n > 2600
                    ? (t.tip.show(window.VditorI18n.performanceTip.replace('${x}', i.toString())),
                      t.preview.element.setAttribute('data-type', 'renderPerformance'))
                    : t.preview.element.getAttribute('data-type') === 'renderPerformance' &&
                      (t.tip.hide(), t.preview.element.removeAttribute('data-type'));
                  var r = t.preview.element.querySelector('.vditor-comment--focus');
                  r && r.classList.remove('vditor-comment--focus'),
                    (0, V.O)(t.preview.previewElement, t.options.preview.hljs),
                    (0, fe.s)(t.options.preview.hljs, t.preview.previewElement, t.options.cdn),
                    (0, ve.i)(t.preview.previewElement, t.options.cdn, t.options.theme),
                    (0, Te.K)(t.preview.previewElement, t.options.cdn, t.options.theme),
                    (0, ie.P)(t.preview.previewElement, t.options.cdn),
                    (0, me.v)(t.preview.previewElement, t.options.cdn),
                    (0, x.p)(t.preview.previewElement, t.options.cdn, t.options.theme),
                    (0, Se.P)(t.preview.previewElement, t.options.cdn, t.options.theme),
                    (0, Ie.B)(t.preview.previewElement, t.options.cdn),
                    (0, I.Q)(t.preview.previewElement, t.options.cdn),
                    t.options.preview.render.media.enable && (0, vr.Y)(t.preview.previewElement),
                    t.options.customRenders.forEach(function (v) {
                      v.render(t.preview.previewElement, t);
                    });
                  var o = t.preview.element,
                    a = t.outline.render(t);
                  a === '' && (a = '[ToC]'),
                    o.querySelectorAll('[data-type="toc-block"]').forEach(function (v) {
                      (v.innerHTML = a),
                        (0, de.H)(v, { cdn: t.options.cdn, math: t.options.preview.math });
                    }),
                    (0, de.H)(t.preview.previewElement, {
                      cdn: t.options.cdn,
                      math: t.options.preview.math,
                    });
                }),
                (e.prototype.copyToX = function (t, n, i) {
                  i === void 0 && (i = 'mp-wechat'),
                    i !== 'zhihu'
                      ? n.querySelectorAll('.katex-html .base').forEach(function (o) {
                          o.style.display = 'initial';
                        })
                      : n.querySelectorAll('.language-math').forEach(function (o) {
                          o.outerHTML =
                            '<img class="Formula-image" data-eeimg="true" src="//www.zhihu.com/equation?tex=" alt="' +
                            o.getAttribute('data-math') +
                            '\\" style="display: block; margin: 0 auto; max-width: 100%;">';
                        }),
                    (n.style.backgroundColor = '#fff'),
                    n.querySelectorAll('code').forEach(function (o) {
                      o.style.backgroundImage = 'none';
                    }),
                    this.element.append(n);
                  var r = n.ownerDocument.createRange();
                  r.selectNode(n),
                    (0, A.Hc)(r),
                    document.execCommand('copy'),
                    n.remove(),
                    t.tip.show(
                      ['zhihu', 'mp-wechat'].includes(i)
                        ? '已复制，可到' + (i === 'zhihu' ? '知乎' : '微信公众号平台') + '进行粘贴'
                        : '已复制到剪切板',
                    );
                }),
                e
              );
            })(),
            yr = (function () {
              function e(t) {
                (this.element = document.createElement('div')),
                  (this.element.className =
                    'vditor-resize vditor-resize--' + t.options.resize.position),
                  (this.element.innerHTML =
                    '<div><svg><use xlink:href="#vditor-icon-resize"></use></svg></div>'),
                  this.bindEvent(t);
              }
              return (
                (e.prototype.bindEvent = function (t) {
                  var n = this;
                  this.element.addEventListener('mousedown', function (i) {
                    var r = document,
                      o = i.clientY,
                      a = t.element.offsetHeight,
                      v = 63 + t.element.querySelector('.vditor-toolbar').clientHeight;
                    (r.ondragstart = function () {
                      return !1;
                    }),
                      window.captureEvents && window.captureEvents(),
                      n.element.classList.add('vditor-resize--selected'),
                      (r.onmousemove = function (E) {
                        t.options.resize.position === 'top'
                          ? (t.element.style.height = Math.max(v, a + (o - E.clientY)) + 'px')
                          : (t.element.style.height = Math.max(v, a + (E.clientY - o)) + 'px'),
                          t.options.typewriterMode &&
                            (t.sv.element.style.paddingBottom =
                              t.sv.element.parentElement.offsetHeight / 2 + 'px');
                      }),
                      (r.onmouseup = function () {
                        t.options.resize.after &&
                          t.options.resize.after(t.element.offsetHeight - a),
                          window.captureEvents && window.captureEvents(),
                          (r.onmousemove = null),
                          (r.onmouseup = null),
                          (r.ondragstart = null),
                          (r.onselectstart = null),
                          (r.onselect = null),
                          n.element.classList.remove('vditor-resize--selected');
                      });
                  });
                }),
                e
              );
            })(),
            br = (function () {
              function e(t) {
                (this.composingLock = !1),
                  (this.element = document.createElement('pre')),
                  (this.element.className = 'vditor-sv vditor-reset'),
                  this.element.setAttribute('placeholder', t.options.placeholder),
                  this.element.setAttribute('contenteditable', 'true'),
                  this.element.setAttribute('spellcheck', 'false'),
                  this.bindEvent(t),
                  xt(t, this.element),
                  Ht(t, this.element),
                  jt(t, this.element),
                  It(t, this.element),
                  Nt(t, this.element),
                  Dt(t, this.element, this.copy),
                  Ot(t, this.element, this.copy);
              }
              return (
                (e.prototype.copy = function (t, n) {
                  t.stopPropagation(),
                    t.preventDefault(),
                    t.clipboardData.setData('text/plain', pt(n[n.currentMode].element));
                }),
                (e.prototype.bindEvent = function (t) {
                  var n = this;
                  this.element.addEventListener('paste', function (i) {
                    St(t, i, {
                      pasteCode: function (r) {
                        document.execCommand('insertHTML', !1, r);
                      },
                    });
                  }),
                    this.element.addEventListener('scroll', function () {
                      if (t.preview.element.style.display === 'block') {
                        var i = n.element.scrollTop,
                          r = n.element.clientHeight,
                          o =
                            n.element.scrollHeight -
                            parseFloat(n.element.style.paddingBottom || '0'),
                          a = t.preview.element;
                        a.scrollTop =
                          i / r > 0.5
                            ? ((i + r) * a.scrollHeight) / o - r
                            : (i * a.scrollHeight) / o;
                      }
                    }),
                    this.element.addEventListener('compositionstart', function (i) {
                      n.composingLock = !0;
                    }),
                    this.element.addEventListener('compositionend', function (i) {
                      (0, c.vU)() || te(t, i), (n.composingLock = !1);
                    }),
                    this.element.addEventListener('input', function (i) {
                      if (
                        i.inputType !== 'deleteByDrag' &&
                        i.inputType !== 'insertFromDrop' &&
                        !n.composingLock &&
                        i.data !== '‘' &&
                        i.data !== '“' &&
                        i.data !== '《'
                      )
                        return n.preventInput
                          ? ((n.preventInput = !1),
                            void Ne(t, { enableAddUndoStack: !0, enableHint: !0, enableInput: !0 }))
                          : void te(t, i);
                    }),
                    this.element.addEventListener('keyup', function (i) {
                      i.isComposing ||
                        (0, c.yl)(i) ||
                        ((i.key !== 'Backspace' && i.key !== 'Delete') ||
                        t.sv.element.innerHTML === '' ||
                        t.sv.element.childNodes.length !== 1 ||
                        !t.sv.element.firstElementChild ||
                        t.sv.element.firstElementChild.tagName !== 'DIV' ||
                        t.sv.element.firstElementChild.childElementCount !== 2 ||
                        (t.sv.element.firstElementChild.textContent !== '' &&
                          t.sv.element.textContent !==
                            `
`)
                          ? i.key === 'Enter' && _e(t)
                          : (t.sv.element.innerHTML = ''));
                    });
                }),
                e
              );
            })(),
            Mn = (function () {
              function e() {
                (this.element = document.createElement('div')),
                  (this.element.className = 'vditor-tip');
              }
              return (
                (e.prototype.show = function (t, n) {
                  var i = this;
                  n === void 0 && (n = 6e3),
                    (this.element.className = 'vditor-tip vditor-tip--show'),
                    n === 0
                      ? ((this.element.innerHTML =
                          '<div class="vditor-tip__content">' +
                          t +
                          `
<div class="vditor-tip__close">X</div></div>`),
                        this.element
                          .querySelector('.vditor-tip__close')
                          .addEventListener('click', function () {
                            i.hide();
                          }))
                      : ((this.element.innerHTML =
                          '<div class="vditor-tip__content">' + t + '</div>'),
                        setTimeout(function () {
                          i.hide();
                        }, n)),
                    this.element.removeAttribute('style'),
                    setTimeout(function () {
                      i.element.getBoundingClientRect().top < 46 &&
                        ((i.element.style.position = 'fixed'), (i.element.style.top = '46px'));
                    }, 150);
                }),
                (e.prototype.hide = function () {
                  (this.element.className = 'vditor-messageElementtip'),
                    (this.element.innerHTML = '');
                }),
                e
              );
            })(),
            Ut = function (e, t) {
              if (t.options.preview.mode !== e) {
                switch (((t.options.preview.mode = e), e)) {
                  case 'both':
                    (t.sv.element.style.display = 'block'),
                      (t.preview.element.style.display = 'block'),
                      t.preview.render(t),
                      p(t.toolbar.elements, ['both']);
                    break;
                  case 'editor':
                    (t.sv.element.style.display = 'block'),
                      (t.preview.element.style.display = 'none'),
                      s(t.toolbar.elements, ['both']);
                }
                t.devtools && t.devtools.renderEchart(t);
              }
            },
            wr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Er = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  n.options.preview.mode === 'both' &&
                    r.element.children[0].classList.add('vditor-menu--current'),
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                      (o.preventDefault(),
                      n.currentMode === 'sv' &&
                        (n.options.preview.mode === 'both' ? Ut('editor', n) : Ut('both', n)));
                  }),
                  r
                );
              }
              return wr(t, e), t;
            })(Me),
            kr = function () {
              (this.element = document.createElement('div')),
                (this.element.className = 'vditor-toolbar__br');
            },
            An = J(312),
            Sr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Lr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = r.element.children[0],
                  a = document.createElement('div');
                a.className = 'vditor-hint' + (i.level === 2 ? '' : ' vditor-panel--arrow');
                var v = '';
                return (
                  h.g.CODE_THEME.forEach(function (E) {
                    v += '<button>' + E + '</button>';
                  }),
                  (a.innerHTML =
                    '<div style="overflow: auto;max-height:' +
                    window.innerHeight / 2 +
                    'px">' +
                    v +
                    '</div>'),
                  a.addEventListener((0, c.Le)(), function (E) {
                    E.target.tagName === 'BUTTON' &&
                      (g(n, ['subToolbar']),
                      (n.options.preview.hljs.style = E.target.textContent),
                      (0, An.Y)(E.target.textContent, n.options.cdn),
                      E.preventDefault(),
                      E.stopPropagation());
                  }),
                  r.element.appendChild(a),
                  k(n, a, o, i.level),
                  r
                );
              }
              return Sr(t, e), t;
            })(Me),
            Tr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Mr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = r.element.children[0],
                  a = document.createElement('div');
                a.className = 'vditor-hint' + (i.level === 2 ? '' : ' vditor-panel--arrow');
                var v = '';
                return (
                  Object.keys(n.options.preview.theme.list).forEach(function (E) {
                    v +=
                      '<button data-type="' +
                      E +
                      '">' +
                      n.options.preview.theme.list[E] +
                      '</button>';
                  }),
                  (a.innerHTML =
                    '<div style="overflow: auto;max-height:' +
                    window.innerHeight / 2 +
                    'px">' +
                    v +
                    '</div>'),
                  a.addEventListener((0, c.Le)(), function (E) {
                    E.target.tagName === 'BUTTON' &&
                      (g(n, ['subToolbar']),
                      (n.options.preview.theme.current = E.target.getAttribute('data-type')),
                      (0, X.Z)(n.options.preview.theme.current, n.options.preview.theme.path),
                      E.preventDefault(),
                      E.stopPropagation());
                  }),
                  r.element.appendChild(a),
                  k(n, a, o, i.level),
                  r
                );
              }
              return Tr(t, e), t;
            })(Me),
            Ar = (function () {
              function e(t) {
                (this.element = document.createElement('span')),
                  (this.element.className =
                    'vditor-counter vditor-tooltipped vditor-tooltipped__nw'),
                  this.render(t, '');
              }
              return (
                (e.prototype.render = function (t, n) {
                  var i = n.endsWith(`
`)
                    ? n.length - 1
                    : n.length;
                  if (t.options.counter.type === 'text' && t[t.currentMode]) {
                    var r = t[t.currentMode].element.cloneNode(!0);
                    r.querySelectorAll('.vditor-wysiwyg__preview').forEach(function (o) {
                      o.remove();
                    }),
                      (i = r.textContent.length);
                  }
                  typeof t.options.counter.max == 'number'
                    ? (i > t.options.counter.max
                        ? (this.element.className = 'vditor-counter vditor-counter--error')
                        : (this.element.className = 'vditor-counter'),
                      (this.element.innerHTML = i + '/' + t.options.counter.max))
                    : (this.element.innerHTML = '' + i),
                    this.element.setAttribute('aria-label', t.options.counter.type),
                    t.options.counter.after &&
                      t.options.counter.after(i, {
                        enable: t.options.counter.enable,
                        max: t.options.counter.max,
                        type: t.options.counter.type,
                      });
                }),
                e
              );
            })(),
            Cr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            _r = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  (r.element.children[0].innerHTML = i.icon),
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      o.currentTarget.classList.contains(h.g.CLASS_MENU_DISABLED) || i.click(o, n);
                  }),
                  r
                );
              }
              return Cr(t, e), t;
            })(Me),
            xr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Hr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.firstElementChild.addEventListener((0, c.Le)(), function (o) {
                    var a = r.element.firstElementChild;
                    a.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                      (o.preventDefault(),
                      a.classList.contains('vditor-menu--current')
                        ? (a.classList.remove('vditor-menu--current'),
                          (n.devtools.element.style.display = 'none'),
                          he(n))
                        : (a.classList.add('vditor-menu--current'),
                          (n.devtools.element.style.display = 'block'),
                          he(n),
                          n.devtools.renderEchart(n)));
                  }),
                  r
                );
              }
              return xr(t, e), t;
            })(Me),
            Nr = function () {
              (this.element = document.createElement('div')),
                (this.element.className = 'vditor-toolbar__divider');
            },
            Dr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Or = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = document.createElement('div');
                o.className = 'vditor-panel vditor-panel--arrow';
                var a = '';
                return (
                  Object.keys(n.options.hint.emoji).forEach(function (v) {
                    var E = n.options.hint.emoji[v];
                    E.indexOf('.') > -1
                      ? (a +=
                          '<button data-value=":' +
                          v +
                          ': " data-key=":' +
                          v +
                          `:"><img
data-value=":` +
                          v +
                          ': " data-key=":' +
                          v +
                          ':" class="vditor-emojis__icon" src="' +
                          E +
                          '"/></button>')
                      : (a +=
                          '<button data-value="' +
                          E +
                          ` "
 data-key="` +
                          v +
                          '"><span class="vditor-emojis__icon">' +
                          E +
                          '</span></button>');
                  }),
                  (o.innerHTML =
                    '<div class="vditor-emojis" style="max-height: ' +
                    (n.options.height === 'auto' ? 'auto' : n.options.height - 80) +
                    'px">' +
                    a +
                    `</div><div class="vditor-emojis__tail">
    <span class="vditor-emojis__tip"></span><span>` +
                    (n.options.hint.emojiTail || '') +
                    `</span>
</div>`),
                  r.element.appendChild(o),
                  k(n, o, r.element.firstElementChild, i.level),
                  r.bindEvent(n),
                  r
                );
              }
              return (
                Dr(t, e),
                (t.prototype.bindEvent = function (n) {
                  var i = this;
                  this.element.lastElementChild.addEventListener((0, c.Le)(), function (r) {
                    var o = (0, _.S)(r.target, 'BUTTON');
                    if (o) {
                      r.preventDefault();
                      var a = o.getAttribute('data-value'),
                        v = (0, A.zh)(n),
                        E = a;
                      if (
                        (n.currentMode === 'wysiwyg'
                          ? (E = n.lute.SpinVditorDOM(a))
                          : n.currentMode === 'ir' && (E = n.lute.SpinVditorIRDOM(a)),
                        a.indexOf(':') > -1 && n.currentMode !== 'sv')
                      ) {
                        var S = document.createElement('div');
                        (S.innerHTML = E),
                          (E = S.firstElementChild.firstElementChild.outerHTML + ' '),
                          (0, A.oC)(E, n);
                      } else v.extractContents(), v.insertNode(document.createTextNode(a));
                      v.collapse(!1),
                        (0, A.Hc)(v),
                        (i.element.lastElementChild.style.display = 'none'),
                        pe(n);
                    }
                  }),
                    this.element.lastElementChild.addEventListener('mouseover', function (r) {
                      var o = (0, _.S)(r.target, 'BUTTON');
                      o &&
                        (i.element.querySelector('.vditor-emojis__tip').innerHTML =
                          o.getAttribute('data-key'));
                    });
                }),
                t
              );
            })(Me),
            Cn = function (e, t, n) {
              var i = document.createElement('a');
              'download' in i
                ? ((i.download = n),
                  (i.style.display = 'none'),
                  (i.href = URL.createObjectURL(new Blob([t]))),
                  document.body.appendChild(i),
                  i.click(),
                  i.remove())
                : e.tip.show(window.VditorI18n.downloadTip, 0);
            },
            jr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Ir = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = r.element.children[0],
                  a = document.createElement('div');
                return (
                  (a.className = 'vditor-hint' + (i.level === 2 ? '' : ' vditor-panel--arrow')),
                  (a.innerHTML = `<button data-type="markdown">Markdown</button>
<button data-type="pdf">PDF</button>
<button data-type="html">HTML</button>`),
                  a.addEventListener((0, c.Le)(), function (v) {
                    var E = v.target;
                    if (E.tagName === 'BUTTON') {
                      switch (E.getAttribute('data-type')) {
                        case 'markdown':
                          (function (S) {
                            var b = d(S);
                            Cn(S, b, b.substr(0, 10) + '.md');
                          })(n);
                          break;
                        case 'pdf':
                          (function (S) {
                            S.tip.show(window.VditorI18n.generate, 3800);
                            var b = document.querySelector('#vditorExportIframe');
                            b.contentDocument.open(),
                              b.contentDocument.write(
                                '<link rel="stylesheet" href="' +
                                  S.options.cdn +
                                  `/dist/index.css"/>
<script src="` +
                                  S.options.cdn +
                                  `/dist/method.min.js"><\/script>
<div id="preview" style="width: 800px"></div>
<script>
window.addEventListener("message", (e) => {
  if(!e.data) {
    return;
  }
  Vditor.preview(document.getElementById('preview'), e.data, {
    cdn: "` +
                                  S.options.cdn +
                                  `",
    markdown: {
      theme: ` +
                                  JSON.stringify(S.options.preview.theme) +
                                  `
    },
    hljs: {
      style: "` +
                                  S.options.preview.hljs.style +
                                  `"
    }
  });
  setTimeout(() => {
        window.print();
    }, 3600);
}, false);
<\/script>`,
                              ),
                              b.contentDocument.close(),
                              setTimeout(function () {
                                b.contentWindow.postMessage(d(S), '*');
                              }, 200);
                          })(n);
                          break;
                        case 'html':
                          (function (S) {
                            var b = Ln(S),
                              H =
                                '<html><head><link rel="stylesheet" type="text/css" href="' +
                                S.options.cdn +
                                `/dist/index.css"/>
<script src="` +
                                S.options.cdn +
                                '/dist/js/i18n/' +
                                S.options.lang +
                                `.js"><\/script>
<script src="` +
                                S.options.cdn +
                                `/dist/method.min.js"><\/script></head>
<body><div class="vditor-reset" id="preview">` +
                                b +
                                `</div>
<script>
    const previewElement = document.getElementById('preview')
    Vditor.setContentTheme('` +
                                S.options.preview.theme.current +
                                "', '" +
                                S.options.preview.theme.path +
                                `');
    Vditor.codeRender(previewElement);
    Vditor.highlightRender(` +
                                JSON.stringify(S.options.preview.hljs) +
                                ", previewElement, '" +
                                S.options.cdn +
                                `');
    Vditor.mathRender(previewElement, {
        cdn: '` +
                                S.options.cdn +
                                `',
        math: ` +
                                JSON.stringify(S.options.preview.math) +
                                `,
    });
    Vditor.mermaidRender(previewElement, '` +
                                S.options.cdn +
                                "', '" +
                                S.options.theme +
                                `');
    Vditor.markmapRender(previewElement, '` +
                                S.options.cdn +
                                "', '" +
                                S.options.theme +
                                `');
    Vditor.flowchartRender(previewElement, '` +
                                S.options.cdn +
                                `');
    Vditor.graphvizRender(previewElement, '` +
                                S.options.cdn +
                                `');
    Vditor.chartRender(previewElement, '` +
                                S.options.cdn +
                                "', '" +
                                S.options.theme +
                                `');
    Vditor.mindmapRender(previewElement, '` +
                                S.options.cdn +
                                "', '" +
                                S.options.theme +
                                `');
    Vditor.abcRender(previewElement, '` +
                                S.options.cdn +
                                `');
    ` +
                                (S.options.preview.render.media.enable
                                  ? 'Vditor.mediaRender(previewElement);'
                                  : '') +
                                `
    Vditor.speechRender(previewElement);
<\/script>
<script src="` +
                                S.options.cdn +
                                '/dist/js/icons/' +
                                S.options.icon +
                                '.js"></script></body></html>';
                            Cn(S, H, b.substr(0, 10) + '.html');
                          })(n);
                      }
                      g(n, ['subToolbar']), v.preventDefault(), v.stopPropagation();
                    }
                  }),
                  r.element.appendChild(a),
                  k(n, a, o, i.level),
                  r
                );
              }
              return jr(t, e), t;
            })(Me),
            Rr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Pr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return r._bindEvent(n, i), r;
              }
              return (
                Rr(t, e),
                (t.prototype._bindEvent = function (n, i) {
                  this.element.children[0].addEventListener((0, c.Le)(), function (r) {
                    r.preventDefault(),
                      n.element.className.includes('vditor--fullscreen')
                        ? (i.level || (this.innerHTML = i.icon),
                          (n.element.style.zIndex = ''),
                          (document.body.style.overflow = ''),
                          n.element.classList.remove('vditor--fullscreen'),
                          Object.keys(n.toolbar.elements).forEach(function (o) {
                            var a = n.toolbar.elements[o].firstChild;
                            a &&
                              ((a.className = a.className.replace('__s', '__n')),
                              n.options.toolbar.forEach(function (v) {
                                typeof v != 'string' &&
                                  v.tipPosition &&
                                  v.name === a.dataset.type &&
                                  (a.className =
                                    'vditor-tooltipped vditor-tooltipped__' + v.tipPosition);
                              }));
                          }),
                          n.counter &&
                            (n.counter.element.className = n.counter.element.className.replace(
                              '__s',
                              '__n',
                            )))
                        : (i.level ||
                            (this.innerHTML =
                              '<svg><use xlink:href="#vditor-icon-contract"></use></svg>'),
                          (n.element.style.zIndex = n.options.fullscreen.index.toString()),
                          (document.body.style.overflow = 'hidden'),
                          n.element.classList.add('vditor--fullscreen'),
                          Object.keys(n.toolbar.elements).forEach(function (o) {
                            var a = n.toolbar.elements[o].firstChild;
                            a && (a.className = a.className.replace('__n', '__s'));
                          }),
                          n.counter &&
                            (n.counter.element.className = n.counter.element.className.replace(
                              '__n',
                              '__s',
                            ))),
                      n.devtools && n.devtools.renderEchart(n),
                      i.click && i.click(r, n),
                      he(n),
                      oe(n);
                  });
                }),
                t
              );
            })(Me),
            qr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Br = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = document.createElement('div');
                return (
                  (o.className = 'vditor-hint vditor-panel--arrow'),
                  (o.innerHTML =
                    '<button data-tag="h1" data-value="# ">' +
                    window.VditorI18n.heading1 +
                    ' ' +
                    (0, c.ns)('&lt;⌥⌘1>') +
                    `</button>
<button data-tag="h2" data-value="## ">` +
                    window.VditorI18n.heading2 +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘2') +
                    `></button>
<button data-tag="h3" data-value="### ">` +
                    window.VditorI18n.heading3 +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘3') +
                    `></button>
<button data-tag="h4" data-value="#### ">` +
                    window.VditorI18n.heading4 +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘4') +
                    `></button>
<button data-tag="h5" data-value="##### ">` +
                    window.VditorI18n.heading5 +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘5') +
                    `></button>
<button data-tag="h6" data-value="###### ">` +
                    window.VditorI18n.heading6 +
                    ' &lt;' +
                    (0, c.ns)('⌥⌘6') +
                    '></button>'),
                  r.element.appendChild(o),
                  r._bindEvent(n, o),
                  r
                );
              }
              return (
                qr(t, e),
                (t.prototype._bindEvent = function (n, i) {
                  var r = this.element.children[0];
                  r.addEventListener((0, c.Le)(), function (a) {
                    a.preventDefault(),
                      clearTimeout(n.wysiwyg.afterRenderTimeoutId),
                      clearTimeout(n.ir.processTimeoutId),
                      clearTimeout(n.sv.processTimeoutId),
                      r.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                        (r.blur(),
                        r.classList.contains('vditor-menu--current')
                          ? (n.currentMode === 'wysiwyg'
                              ? (Ct(n), Ee(n))
                              : n.currentMode === 'ir' && ft(n, ''),
                            r.classList.remove('vditor-menu--current'))
                          : (g(n, ['subToolbar']), (i.style.display = 'block')));
                  });
                  for (var o = 0; o < 6; o++)
                    i.children.item(o).addEventListener((0, c.Le)(), function (a) {
                      a.preventDefault(),
                        n.currentMode === 'wysiwyg'
                          ? (vt(n, a.target.getAttribute('data-tag')),
                            Ee(n),
                            r.classList.add('vditor-menu--current'))
                          : n.currentMode === 'ir'
                            ? (ft(n, a.target.getAttribute('data-value')),
                              r.classList.add('vditor-menu--current'))
                            : tn(n, a.target.getAttribute('data-value')),
                        (i.style.display = 'none');
                    });
                }),
                t
              );
            })(Me),
            Vr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Ur = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      n.tip.show(
                        `<div style="margin-bottom:14px;font-size: 14px;line-height: 22px;min-width:300px;max-width: 360px;display: flex;">
<div style="margin-top: 14px;flex: 1">
    <div>Markdown 使用指南</div>
    <ul style="list-style: none">
        <li><a href="https://ld246.com/article/1583308420519" target="_blank">语法速查手册</a></li>
        <li><a href="https://ld246.com/article/1583129520165" target="_blank">基础语法</a></li>
        <li><a href="https://ld246.com/article/1583305480675" target="_blank">扩展语法</a></li>
        <li><a href="https://ld246.com/article/1582778815353" target="_blank">键盘快捷键</a></li>
    </ul>
</div>
<div style="margin-top: 14px;flex: 1">
    <div>Vditor 支持</div>
    <ul style="list-style: none">
        <li><a href="https://github.com/Vanessa219/vditor/issues" target="_blank">Issues</a></li>
        <li><a href="https://ld246.com/tag/vditor" target="_blank">官方讨论区</a></li>
        <li><a href="https://ld246.com/article/1549638745630" target="_blank">开发手册</a></li>
        <li><a href="https://ld246.com/guide/markdown" target="_blank">演示地址</a></li>
    </ul>
</div></div>`,
                        0,
                      );
                  }),
                  r
                );
              }
              return Vr(t, e), t;
            })(Me),
            zr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Wr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    if (
                      (o.preventDefault(),
                      !r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) &&
                        n.currentMode !== 'sv')
                    ) {
                      var a = (0, A.zh)(n),
                        v = (0, m.lG)(a.startContainer, 'LI');
                      v && cn(n, v, a);
                    }
                  }),
                  r
                );
              }
              return zr(t, e), t;
            })(Me),
            Gr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Kr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      n.tip.show(
                        `<div style="max-width: 520px; font-size: 14px;line-height: 22px;margin-bottom: 14px;">
<p style="text-align: center;margin: 14px 0">
    <em>下一代的 Markdown 编辑器，为未来而构建</em>
</p>
<div style="display: flex;margin-bottom: 14px;flex-wrap: wrap;align-items: center">
    <img src="https://unpkg.com/vditor/dist/images/logo.png" style="margin: 0 auto;height: 68px"/>
    <div>&nbsp;&nbsp;</div>
    <div style="flex: 1;min-width: 250px">
        Vditor 是一款浏览器端的 Markdown 编辑器，支持所见即所得、即时渲染（类似 Typora）和分屏预览模式。
        它使用 TypeScript 实现，支持原生 JavaScript 以及 Vue、React、Angular 和 Svelte 等框架。
    </div>
</div>
<div style="display: flex;flex-wrap: wrap;">
    <ul style="list-style: none;flex: 1;min-width:148px">
        <li>
        项目地址：<a href="https://b3log.org/vditor" target="_blank">b3log.org/vditor</a>
        </li>
        <li>
        开源协议：MIT
        </li>
    </ul>
    <ul style="list-style: none;margin-right: 18px">
        <li>
        组件版本：Vditor v` +
                          h.H +
                          ' / Lute v' +
                          Lute.Version +
                          `
        </li>
        <li>
        赞助捐赠：<a href="https://ld246.com/sponsor" target="_blank">https://ld246.com/sponsor</a>
        </li>
    </ul>
</div>
</div>`,
                        0,
                      );
                  }),
                  r
                );
              }
              return Gr(t, e), t;
            })(Me),
            Fr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Jr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                        n.currentMode === 'sv' ||
                        bt(n, 'afterend');
                  }),
                  r
                );
              }
              return Fr(t, e), t;
            })(Me),
            Zr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Xr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                        n.currentMode === 'sv' ||
                        bt(n, 'beforebegin');
                  }),
                  r
                );
              }
              return Zr(t, e), t;
            })(Me),
            Yr = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            Qr = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    if (
                      (o.preventDefault(),
                      !r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) &&
                        n.currentMode !== 'sv')
                    ) {
                      var a = (0, A.zh)(n),
                        v = (0, m.lG)(a.startContainer, 'LI');
                      v && Pt(n, v, a, v.parentElement);
                    }
                  }),
                  r
                );
              }
              return Yr(t, e), t;
            })(Me),
            $r = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            ei = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  n.options.outline &&
                    r.element.firstElementChild.classList.add('vditor-menu--current'),
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      n.toolbar.elements.outline.firstElementChild.classList.contains(
                        h.g.CLASS_MENU_DISABLED,
                      ) ||
                        ((n.options.outline.enable =
                          !r.element.firstElementChild.classList.contains('vditor-menu--current')),
                        n.outline.toggle(n, n.options.outline.enable));
                  }),
                  r
                );
              }
              return $r(t, e), t;
            })(Me),
            ti = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            ni = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return r._bindEvent(n), r;
              }
              return (
                ti(t, e),
                (t.prototype._bindEvent = function (n) {
                  var i = this;
                  this.element.children[0].addEventListener((0, c.Le)(), function (r) {
                    r.preventDefault();
                    var o = i.element.firstElementChild;
                    if (!o.classList.contains(h.g.CLASS_MENU_DISABLED)) {
                      var a = h.g.EDIT_TOOLBARS.concat(['both', 'edit-mode', 'devtools']);
                      o.classList.contains('vditor-menu--current')
                        ? (o.classList.remove('vditor-menu--current'),
                          n.currentMode === 'sv'
                            ? ((n.sv.element.style.display = 'block'),
                              n.options.preview.mode === 'both'
                                ? (n.preview.element.style.display = 'block')
                                : (n.preview.element.style.display = 'none'))
                            : ((n[n.currentMode].element.parentElement.style.display = 'block'),
                              (n.preview.element.style.display = 'none')),
                          f(n.toolbar.elements, a),
                          n.outline.render(n))
                        : (L(n.toolbar.elements, a),
                          (n.preview.element.style.display = 'block'),
                          n.currentMode === 'sv'
                            ? (n.sv.element.style.display = 'none')
                            : (n[n.currentMode].element.parentElement.style.display = 'none'),
                          n.preview.render(n),
                          o.classList.add('vditor-menu--current'),
                          g(n, ['subToolbar', 'hint', 'popover']),
                          setTimeout(function () {
                            n.outline.render(n);
                          }, n.options.preview.delay + 10)),
                        he(n);
                    }
                  });
                }),
                t
              );
            })(Me),
            ri = (function () {
              function e(t) {
                var n;
                if (
                  ((this.SAMPLE_RATE = 5e3),
                  (this.isRecording = !1),
                  (this.readyFlag = !1),
                  (this.leftChannel = []),
                  (this.rightChannel = []),
                  (this.recordingLength = 0),
                  typeof AudioContext != 'undefined')
                )
                  n = new AudioContext();
                else {
                  if (!webkitAudioContext) return;
                  n = new webkitAudioContext();
                }
                this.DEFAULT_SAMPLE_RATE = n.sampleRate;
                var i = n.createGain();
                n.createMediaStreamSource(t).connect(i),
                  (this.recorder = n.createScriptProcessor(2048, 2, 1)),
                  (this.recorder.onaudioprocess = null),
                  i.connect(this.recorder),
                  this.recorder.connect(n.destination),
                  (this.readyFlag = !0);
              }
              return (
                (e.prototype.cloneChannelData = function (t, n) {
                  this.leftChannel.push(new Float32Array(t)),
                    this.rightChannel.push(new Float32Array(n)),
                    (this.recordingLength += 2048);
                }),
                (e.prototype.startRecordingNewWavFile = function () {
                  this.readyFlag &&
                    ((this.isRecording = !0),
                    (this.leftChannel.length = this.rightChannel.length = 0),
                    (this.recordingLength = 0));
                }),
                (e.prototype.stopRecording = function () {
                  this.isRecording = !1;
                }),
                (e.prototype.buildWavFileBlob = function () {
                  for (
                    var t = this.mergeBuffers(this.leftChannel),
                      n = this.mergeBuffers(this.rightChannel),
                      i = new Float32Array(t.length),
                      r = 0;
                    r < t.length;
                    ++r
                  )
                    i[r] = 0.5 * (t[r] + n[r]);
                  this.DEFAULT_SAMPLE_RATE > this.SAMPLE_RATE &&
                    (i = this.downSampleBuffer(i, this.SAMPLE_RATE));
                  var o = 44 + 2 * i.length,
                    a = new ArrayBuffer(o),
                    v = new DataView(a);
                  this.writeUTFBytes(v, 0, 'RIFF'),
                    v.setUint32(4, o, !0),
                    this.writeUTFBytes(v, 8, 'WAVE'),
                    this.writeUTFBytes(v, 12, 'fmt '),
                    v.setUint32(16, 16, !0),
                    v.setUint16(20, 1, !0),
                    v.setUint16(22, 1, !0),
                    v.setUint32(24, this.SAMPLE_RATE, !0),
                    v.setUint32(28, 2 * this.SAMPLE_RATE, !0),
                    v.setUint16(32, 2, !0),
                    v.setUint16(34, 16, !0);
                  var E = 2 * i.length;
                  this.writeUTFBytes(v, 36, 'data'), v.setUint32(40, E, !0);
                  for (var S = i.length, b = 44, H = 0; H < S; H++)
                    v.setInt16(b, 32767 * i[H], !0), (b += 2);
                  return new Blob([v], { type: 'audio/wav' });
                }),
                (e.prototype.downSampleBuffer = function (t, n) {
                  if (n === this.DEFAULT_SAMPLE_RATE || n > this.DEFAULT_SAMPLE_RATE) return t;
                  for (
                    var i = this.DEFAULT_SAMPLE_RATE / n,
                      r = Math.round(t.length / i),
                      o = new Float32Array(r),
                      a = 0,
                      v = 0;
                    a < o.length;

                  ) {
                    for (
                      var E = Math.round((a + 1) * i), S = 0, b = 0, H = v;
                      H < E && H < t.length;
                      H++
                    )
                      (S += t[H]), b++;
                    (o[a] = S / b), a++, (v = E);
                  }
                  return o;
                }),
                (e.prototype.mergeBuffers = function (t) {
                  for (
                    var n = new Float32Array(this.recordingLength), i = 0, r = t.length, o = 0;
                    o < r;
                    ++o
                  ) {
                    var a = t[o];
                    n.set(a, i), (i += a.length);
                  }
                  return n;
                }),
                (e.prototype.writeUTFBytes = function (t, n, i) {
                  for (var r = i.length, o = 0; o < r; o++) t.setUint8(n + o, i.charCodeAt(o));
                }),
                e
              );
            })(),
            ii = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            oi = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return r._bindEvent(n), r;
              }
              return (
                ii(t, e),
                (t.prototype._bindEvent = function (n) {
                  var i,
                    r = this;
                  this.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    if (
                      (o.preventDefault(),
                      !r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED))
                    ) {
                      var a = n[n.currentMode].element;
                      if (i)
                        if (i.isRecording) {
                          i.stopRecording(), n.tip.hide();
                          var v = new File(
                            [i.buildWavFileBlob()],
                            'record' + new Date().getTime() + '.wav',
                            { type: 'video/webm' },
                          );
                          Rt(n, [v]),
                            r.element.children[0].classList.remove('vditor-menu--current');
                        } else
                          n.tip.show(window.VditorI18n.recording),
                            a.setAttribute('contenteditable', 'false'),
                            i.startRecordingNewWavFile(),
                            r.element.children[0].classList.add('vditor-menu--current');
                      else
                        navigator.mediaDevices
                          .getUserMedia({ audio: !0 })
                          .then(function (E) {
                            ((i = new ri(E)).recorder.onaudioprocess = function (S) {
                              if (i.isRecording) {
                                var b = S.inputBuffer.getChannelData(0),
                                  H = S.inputBuffer.getChannelData(1);
                                i.cloneChannelData(b, H);
                              }
                            }),
                              i.startRecordingNewWavFile(),
                              n.tip.show(window.VditorI18n.recording),
                              a.setAttribute('contenteditable', 'false'),
                              r.element.children[0].classList.add('vditor-menu--current');
                          })
                          .catch(function () {
                            n.tip.show(window.VditorI18n['record-tip']);
                          });
                    }
                  });
                }),
                t
              );
            })(Me),
            ai = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            si = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  L({ redo: r.element }, ['redo']),
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                        n.undo.redo(n);
                  }),
                  r
                );
              }
              return ai(t, e), t;
            })(Me),
            li = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            ci = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this;
                return (
                  L({ undo: r.element }, ['undo']),
                  r.element.children[0].addEventListener((0, c.Le)(), function (o) {
                    o.preventDefault(),
                      r.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED) ||
                        n.undo.undo(n);
                  }),
                  r
                );
              }
              return li(t, e), t;
            })(Me),
            di = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })(),
            ui = (function (e) {
              function t(n, i) {
                var r = e.call(this, n, i) || this,
                  o = '<input type="file"';
                return (
                  n.options.upload.multiple && (o += ' multiple="multiple"'),
                  n.options.upload.accept && (o += ' accept="' + n.options.upload.accept + '"'),
                  (r.element.children[0].innerHTML =
                    '' +
                    (i.icon || '<svg><use xlink:href="#vditor-icon-upload"></use></svg>') +
                    o +
                    '>'),
                  r._bindEvent(n),
                  r
                );
              }
              return (
                di(t, e),
                (t.prototype._bindEvent = function (n) {
                  var i = this;
                  this.element.children[0].addEventListener((0, c.Le)(), function (r) {
                    if (i.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED))
                      return r.stopPropagation(), void r.preventDefault();
                  }),
                    this.element.querySelector('input').addEventListener('change', function (r) {
                      if (i.element.firstElementChild.classList.contains(h.g.CLASS_MENU_DISABLED))
                        return r.stopPropagation(), void r.preventDefault();
                      r.target.files.length !== 0 && Rt(n, r.target.files, r.target);
                    });
                }),
                t
              );
            })(Me),
            pi = (function () {
              function e(t) {
                var n = this,
                  i = t.options;
                (this.elements = {}),
                  (this.element = document.createElement('div')),
                  (this.element.className = 'vditor-toolbar'),
                  i.toolbar.forEach(function (r, o) {
                    var a = n.genItem(t, r, o);
                    if ((n.element.appendChild(a), r.toolbar)) {
                      var v = document.createElement('div');
                      (v.className = 'vditor-hint vditor-panel--arrow'),
                        v.addEventListener((0, c.Le)(), function (E) {
                          v.style.display = 'none';
                        }),
                        r.toolbar.forEach(function (E, S) {
                          (E.level = 2), v.appendChild(n.genItem(t, E, o + S));
                        }),
                        a.appendChild(v),
                        k(t, v, a.children[0]);
                    }
                  }),
                  t.options.toolbarConfig.hide &&
                    this.element.classList.add('vditor-toolbar--hide'),
                  t.options.toolbarConfig.pin && this.element.classList.add('vditor-toolbar--pin'),
                  t.options.counter.enable &&
                    ((t.counter = new Ar(t)), this.element.appendChild(t.counter.element));
              }
              return (
                (e.prototype.genItem = function (t, n, i) {
                  var r;
                  switch (n.name) {
                    case 'bold':
                    case 'italic':
                    case 'more':
                    case 'strike':
                    case 'line':
                    case 'quote':
                    case 'list':
                    case 'ordered-list':
                    case 'check':
                    case 'code':
                    case 'inline-code':
                    case 'link':
                    case 'table':
                      r = new Me(t, n);
                      break;
                    case 'emoji':
                      r = new Or(t, n);
                      break;
                    case 'headings':
                      r = new Br(t, n);
                      break;
                    case '|':
                      r = new Nr();
                      break;
                    case 'br':
                      r = new kr();
                      break;
                    case 'undo':
                      r = new ci(t, n);
                      break;
                    case 'redo':
                      r = new si(t, n);
                      break;
                    case 'help':
                      r = new Ur(t, n);
                      break;
                    case 'both':
                      r = new Er(t, n);
                      break;
                    case 'preview':
                      r = new ni(t, n);
                      break;
                    case 'fullscreen':
                      r = new Pr(t, n);
                      break;
                    case 'upload':
                      r = new ui(t, n);
                      break;
                    case 'record':
                      r = new oi(t, n);
                      break;
                    case 'info':
                      r = new Kr(t, n);
                      break;
                    case 'edit-mode':
                      r = new Qn(t, n);
                      break;
                    case 'devtools':
                      r = new Hr(t, n);
                      break;
                    case 'outdent':
                      r = new Qr(t, n);
                      break;
                    case 'indent':
                      r = new Wr(t, n);
                      break;
                    case 'outline':
                      r = new ei(t, n);
                      break;
                    case 'insert-after':
                      r = new Jr(t, n);
                      break;
                    case 'insert-before':
                      r = new Xr(t, n);
                      break;
                    case 'code-theme':
                      r = new Lr(t, n);
                      break;
                    case 'content-theme':
                      r = new Mr(t, n);
                      break;
                    case 'export':
                      r = new Ir(t, n);
                      break;
                    default:
                      r = new _r(t, n);
                  }
                  if (r) {
                    var o = n.name;
                    return (
                      (o !== 'br' && o !== '|') || (o += i),
                      (this.elements[o] = r.element),
                      r.element
                    );
                  }
                }),
                e
              );
            })(),
            mi = J(471),
            fi = (function () {
              function e() {
                (this.stackSize = 50), this.resetStack(), (this.dmp = new mi());
              }
              return (
                (e.prototype.clearStack = function (t) {
                  this.resetStack(), this.resetIcon(t);
                }),
                (e.prototype.resetIcon = function (t) {
                  t.toolbar &&
                    (this[t.currentMode].undoStack.length > 1
                      ? f(t.toolbar.elements, ['undo'])
                      : L(t.toolbar.elements, ['undo']),
                    this[t.currentMode].redoStack.length !== 0
                      ? f(t.toolbar.elements, ['redo'])
                      : L(t.toolbar.elements, ['redo']));
                }),
                (e.prototype.undo = function (t) {
                  if (
                    t[t.currentMode].element.getAttribute('contenteditable') !== 'false' &&
                    !(this[t.currentMode].undoStack.length < 2)
                  ) {
                    var n = this[t.currentMode].undoStack.pop();
                    n &&
                      (this[t.currentMode].redoStack.push(n),
                      this.renderDiff(n, t),
                      (this[t.currentMode].hasUndo = !0),
                      g(t, ['hint']));
                  }
                }),
                (e.prototype.redo = function (t) {
                  if (t[t.currentMode].element.getAttribute('contenteditable') !== 'false') {
                    var n = this[t.currentMode].redoStack.pop();
                    n && (this[t.currentMode].undoStack.push(n), this.renderDiff(n, t, !0));
                  }
                }),
                (e.prototype.recordFirstPosition = function (t, n) {
                  if (
                    getSelection().rangeCount !== 0 &&
                    !(
                      this[t.currentMode].undoStack.length !== 1 ||
                      this[t.currentMode].undoStack[0].length === 0 ||
                      this[t.currentMode].redoStack.length > 0 ||
                      ((0, c.vU)() && n.key === 'Backspace') ||
                      (0, c.G6)()
                    )
                  ) {
                    var i = this.addCaret(t);
                    i.replace('<wbr>', '').replace(' vditor-ir__node--expand', '') ===
                      this[t.currentMode].undoStack[0][0].diffs[0][1].replace('<wbr>', '') &&
                      ((this[t.currentMode].undoStack[0][0].diffs[0][1] = i),
                      (this[t.currentMode].lastText = i));
                  }
                }),
                (e.prototype.addToUndoStack = function (t) {
                  var n = this.addCaret(t, !0),
                    i = this.dmp.diff_main(n, this[t.currentMode].lastText, !0),
                    r = this.dmp.patch_make(n, this[t.currentMode].lastText, i);
                  (r.length === 0 && this[t.currentMode].undoStack.length > 0) ||
                    ((this[t.currentMode].lastText = n),
                    this[t.currentMode].undoStack.push(r),
                    this[t.currentMode].undoStack.length > this.stackSize &&
                      this[t.currentMode].undoStack.shift(),
                    this[t.currentMode].hasUndo &&
                      ((this[t.currentMode].redoStack = []),
                      (this[t.currentMode].hasUndo = !1),
                      L(t.toolbar.elements, ['redo'])),
                    this[t.currentMode].undoStack.length > 1 && f(t.toolbar.elements, ['undo']));
                }),
                (e.prototype.renderDiff = function (t, n, i) {
                  var r;
                  if ((i === void 0 && (i = !1), i)) {
                    var o = this.dmp.patch_deepCopy(t).reverse();
                    o.forEach(function (v) {
                      v.diffs.forEach(function (E) {
                        E[0] = -E[0];
                      });
                    }),
                      (r = this.dmp.patch_apply(o, this[n.currentMode].lastText)[0]);
                  } else r = this.dmp.patch_apply(t, this[n.currentMode].lastText)[0];
                  if (
                    ((this[n.currentMode].lastText = r),
                    (n[n.currentMode].element.innerHTML = r),
                    n.currentMode !== 'sv' &&
                      n[n.currentMode].element
                        .querySelectorAll('.vditor-' + n.currentMode + "__preview[data-render='2']")
                        .forEach(function (v) {
                          be(v, n);
                        }),
                    n[n.currentMode].element.querySelector('wbr'))
                  )
                    (0, A.ib)(
                      n[n.currentMode].element,
                      n[n.currentMode].element.ownerDocument.createRange(),
                    ),
                      _e(n);
                  else {
                    var a = getSelection().getRangeAt(0);
                    a.setEndBefore(n[n.currentMode].element), a.collapse(!1);
                  }
                  ge(n),
                    pe(n, { enableAddUndoStack: !1, enableHint: !1, enableInput: !0 }),
                    tt(n),
                    n[n.currentMode].element
                      .querySelectorAll('.vditor-' + n.currentMode + "__preview[data-render='2']")
                      .forEach(function (v) {
                        be(v, n);
                      }),
                    this[n.currentMode].undoStack.length > 1
                      ? f(n.toolbar.elements, ['undo'])
                      : L(n.toolbar.elements, ['undo']),
                    this[n.currentMode].redoStack.length !== 0
                      ? f(n.toolbar.elements, ['redo'])
                      : L(n.toolbar.elements, ['redo']);
                }),
                (e.prototype.resetStack = function () {
                  (this.ir = { hasUndo: !1, lastText: '', redoStack: [], undoStack: [] }),
                    (this.sv = { hasUndo: !1, lastText: '', redoStack: [], undoStack: [] }),
                    (this.wysiwyg = { hasUndo: !1, lastText: '', redoStack: [], undoStack: [] });
                }),
                (e.prototype.addCaret = function (t, n) {
                  var i;
                  if (
                    (n === void 0 && (n = !1),
                    getSelection().rangeCount !== 0 &&
                      !t[t.currentMode].element.querySelector('wbr'))
                  ) {
                    var r = getSelection().getRangeAt(0);
                    if (t[t.currentMode].element.contains(r.startContainer)) {
                      i = r.cloneRange();
                      var o = document.createElement('span');
                      (o.className = 'vditor-wbr'), r.insertNode(o);
                    }
                  }
                  t.ir.element
                    .cloneNode(!0)
                    .querySelectorAll('.vditor-' + t.currentMode + "__preview[data-render='1']")
                    .forEach(function (v) {
                      v.firstElementChild &&
                        (v.firstElementChild.classList.contains('language-echarts') ||
                        v.firstElementChild.classList.contains('language-plantuml') ||
                        v.firstElementChild.classList.contains('language-mindmap')
                          ? (v.firstElementChild.removeAttribute('_echarts_instance_'),
                            v.firstElementChild.removeAttribute('data-processed'),
                            (v.firstElementChild.innerHTML =
                              v.previousElementSibling.firstElementChild.innerHTML),
                            v.setAttribute('data-render', '2'))
                          : v.firstElementChild.classList.contains('language-math') &&
                            (v.setAttribute('data-render', '2'),
                            (v.firstElementChild.textContent =
                              v.firstElementChild.getAttribute('data-math')),
                            v.firstElementChild.removeAttribute('data-math')));
                    });
                  var a = t[t.currentMode].element.innerHTML;
                  return (
                    t[t.currentMode].element.querySelectorAll('.vditor-wbr').forEach(function (v) {
                      v.remove();
                    }),
                    n && i && (0, A.Hc)(i),
                    a.replace('<span class="vditor-wbr"></span>', '<wbr>')
                  );
                }),
                e
              );
            })(),
            hi = J(640),
            vi = (function () {
              function e(t) {
                (this.defaultOptions = {
                  rtl: !1,
                  after: void 0,
                  cache: { enable: !0 },
                  cdn: h.g.CDN,
                  classes: { preview: '' },
                  comment: { enable: !1 },
                  counter: { enable: !1, type: 'markdown' },
                  customRenders: [],
                  debugger: !1,
                  fullscreen: { index: 90 },
                  height: 'auto',
                  hint: {
                    delay: 200,
                    emoji: {
                      '+1': '👍',
                      '-1': '👎',
                      confused: '😕',
                      eyes: '👀️',
                      heart: '❤️',
                      rocket: '🚀️',
                      smile: '😄',
                      tada: '🎉️',
                    },
                    emojiPath: h.g.CDN + '/dist/images/emoji',
                    extend: [],
                    parse: !0,
                  },
                  icon: 'ant',
                  lang: 'zh_CN',
                  mode: 'ir',
                  outline: { enable: !1, position: 'left' },
                  placeholder: '',
                  preview: {
                    actions: ['desktop', 'tablet', 'mobile', 'mp-wechat', 'zhihu'],
                    delay: 1e3,
                    hljs: h.g.HLJS_OPTIONS,
                    markdown: h.g.MARKDOWN_OPTIONS,
                    math: h.g.MATH_OPTIONS,
                    maxWidth: 800,
                    mode: 'both',
                    theme: h.g.THEME_OPTIONS,
                    render: { media: { enable: !0 } },
                  },
                  link: { isOpen: !0 },
                  image: { isPreview: !0 },
                  resize: { enable: !1, position: 'bottom' },
                  theme: 'classic',
                  toolbar: [
                    'emoji',
                    'headings',
                    'bold',
                    'italic',
                    'strike',
                    'link',
                    '|',
                    'list',
                    'ordered-list',
                    'check',
                    'outdent',
                    'indent',
                    '|',
                    'quote',
                    'line',
                    'code',
                    'inline-code',
                    'insert-before',
                    'insert-after',
                    '|',
                    'upload',
                    'record',
                    'table',
                    '|',
                    'undo',
                    'redo',
                    '|',
                    'fullscreen',
                    'edit-mode',
                    {
                      name: 'more',
                      toolbar: [
                        'both',
                        'code-theme',
                        'content-theme',
                        'export',
                        'outline',
                        'preview',
                        'devtools',
                        'info',
                        'help',
                      ],
                    },
                  ],
                  toolbarConfig: { hide: !1, pin: !1 },
                  typewriterMode: !1,
                  undoDelay: 800,
                  upload: {
                    extraData: {},
                    fieldName: 'file[]',
                    filename: function (n) {
                      return n.replace(/\W/g, '');
                    },
                    linkToImgUrl: '',
                    max: 10485760,
                    multiple: !0,
                    url: '',
                    withCredentials: !1,
                  },
                  value: '',
                  width: 'auto',
                }),
                  (this.options = t);
              }
              return (
                (e.prototype.merge = function () {
                  var t, n, i, r, o, a, v, E, S;
                  this.options &&
                    (this.options.toolbar
                      ? (this.options.toolbar = this.mergeToolbar(this.options.toolbar))
                      : (this.options.toolbar = this.mergeToolbar(this.defaultOptions.toolbar)),
                    !(
                      (n =
                        (t = this.options.preview) === null || t === void 0 ? void 0 : t.theme) ===
                        null || n === void 0
                    ) &&
                      n.list &&
                      (this.defaultOptions.preview.theme.list = this.options.preview.theme.list),
                    !(
                      (o =
                        (r =
                          (i = this.options.preview) === null || i === void 0
                            ? void 0
                            : i.render) === null || r === void 0
                          ? void 0
                          : r.media) === null || o === void 0
                    ) &&
                      o.enable &&
                      (this.defaultOptions.preview.render.media.enable =
                        this.options.preview.render.media.enable),
                    !((a = this.options.hint) === null || a === void 0) &&
                      a.emoji &&
                      (this.defaultOptions.hint.emoji = this.options.hint.emoji),
                    this.options.comment && (this.defaultOptions.comment = this.options.comment),
                    this.options.cdn &&
                      ((!(
                        (E =
                          (v = this.options.preview) === null || v === void 0
                            ? void 0
                            : v.theme) === null || E === void 0
                      ) &&
                        E.path) ||
                        (this.defaultOptions.preview.theme.path =
                          this.options.cdn + '/dist/css/content-theme'),
                      (!((S = this.options.hint) === null || S === void 0) && S.emojiPath) ||
                        (this.defaultOptions.hint.emojiPath =
                          this.options.cdn + '/dist/images/emoji')));
                  var b = (0, hi.T)(this.defaultOptions, this.options);
                  if (b.cache.enable && !b.cache.id)
                    throw new Error(
                      'need options.cache.id, see https://ld246.com/article/1549638745630#options',
                    );
                  return b;
                }),
                (e.prototype.mergeToolbar = function (t) {
                  var n = this,
                    i = [
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-export"></use></svg>',
                        name: 'export',
                        tipPosition: 'ne',
                      },
                      {
                        hotkey: '⌘E',
                        icon: '<svg><use xlink:href="#vditor-icon-emoji"></use></svg>',
                        name: 'emoji',
                        tipPosition: 'ne',
                      },
                      {
                        hotkey: '⌘H',
                        icon: '<svg><use xlink:href="#vditor-icon-headings"></use></svg>',
                        name: 'headings',
                        tipPosition: 'ne',
                      },
                      {
                        hotkey: '⌘B',
                        icon: '<svg><use xlink:href="#vditor-icon-bold"></use></svg>',
                        name: 'bold',
                        prefix: '**',
                        suffix: '**',
                        tipPosition: 'ne',
                      },
                      {
                        hotkey: '⌘I',
                        icon: '<svg><use xlink:href="#vditor-icon-italic"></use></svg>',
                        name: 'italic',
                        prefix: '*',
                        suffix: '*',
                        tipPosition: 'ne',
                      },
                      {
                        hotkey: '⌘D',
                        icon: '<svg><use xlink:href="#vditor-icon-strike"></use></svg>',
                        name: 'strike',
                        prefix: '~~',
                        suffix: '~~',
                        tipPosition: 'ne',
                      },
                      {
                        hotkey: '⌘K',
                        icon: '<svg><use xlink:href="#vditor-icon-link"></use></svg>',
                        name: 'link',
                        prefix: '[',
                        suffix: '](https://)',
                        tipPosition: 'n',
                      },
                      { name: '|' },
                      {
                        hotkey: '⌘L',
                        icon: '<svg><use xlink:href="#vditor-icon-list"></use></svg>',
                        name: 'list',
                        prefix: '* ',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⌘O',
                        icon: '<svg><use xlink:href="#vditor-icon-ordered-list"></use></svg>',
                        name: 'ordered-list',
                        prefix: '1. ',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⌘J',
                        icon: '<svg><use xlink:href="#vditor-icon-check"></use></svg>',
                        name: 'check',
                        prefix: '* [ ] ',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⇧⌘I',
                        icon: '<svg><use xlink:href="#vditor-icon-outdent"></use></svg>',
                        name: 'outdent',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⇧⌘O',
                        icon: '<svg><use xlink:href="#vditor-icon-indent"></use></svg>',
                        name: 'indent',
                        tipPosition: 'n',
                      },
                      { name: '|' },
                      {
                        hotkey: '⌘;',
                        icon: '<svg><use xlink:href="#vditor-icon-quote"></use></svg>',
                        name: 'quote',
                        prefix: '> ',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⇧⌘H',
                        icon: '<svg><use xlink:href="#vditor-icon-line"></use></svg>',
                        name: 'line',
                        prefix: '---',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⌘U',
                        icon: '<svg><use xlink:href="#vditor-icon-code"></use></svg>',
                        name: 'code',
                        prefix: '```',
                        suffix: '\n```',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⌘G',
                        icon: '<svg><use xlink:href="#vditor-icon-inline-code"></use></svg>',
                        name: 'inline-code',
                        prefix: '`',
                        suffix: '`',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⇧⌘B',
                        icon: '<svg><use xlink:href="#vditor-icon-before"></use></svg>',
                        name: 'insert-before',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⇧⌘E',
                        icon: '<svg><use xlink:href="#vditor-icon-after"></use></svg>',
                        name: 'insert-after',
                        tipPosition: 'n',
                      },
                      { name: '|' },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-upload"></use></svg>',
                        name: 'upload',
                        tipPosition: 'n',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-record"></use></svg>',
                        name: 'record',
                        tipPosition: 'n',
                      },
                      {
                        hotkey: '⌘M',
                        icon: '<svg><use xlink:href="#vditor-icon-table"></use></svg>',
                        name: 'table',
                        prefix: '| col1',
                        suffix: ` | col2 | col3 |
| --- | --- | --- |
|  |  |  |
|  |  |  |`,
                        tipPosition: 'n',
                      },
                      { name: '|' },
                      {
                        hotkey: '⌘Z',
                        icon: '<svg><use xlink:href="#vditor-icon-undo"></use></svg>',
                        name: 'undo',
                        tipPosition: 'nw',
                      },
                      {
                        hotkey: '⌘Y',
                        icon: '<svg><use xlink:href="#vditor-icon-redo"></use></svg>',
                        name: 'redo',
                        tipPosition: 'nw',
                      },
                      { name: '|' },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-more"></use></svg>',
                        name: 'more',
                        tipPosition: 'e',
                      },
                      {
                        hotkey: "⌘'",
                        icon: '<svg><use xlink:href="#vditor-icon-fullscreen"></use></svg>',
                        name: 'fullscreen',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-edit"></use></svg>',
                        name: 'edit-mode',
                        tipPosition: 'nw',
                      },
                      {
                        hotkey: '⌘P',
                        icon: '<svg><use xlink:href="#vditor-icon-both"></use></svg>',
                        name: 'both',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-preview"></use></svg>',
                        name: 'preview',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-align-center"></use></svg>',
                        name: 'outline',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-theme"></use></svg>',
                        name: 'content-theme',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-code-theme"></use></svg>',
                        name: 'code-theme',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-bug"></use></svg>',
                        name: 'devtools',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-info"></use></svg>',
                        name: 'info',
                        tipPosition: 'nw',
                      },
                      {
                        icon: '<svg><use xlink:href="#vditor-icon-help"></use></svg>',
                        name: 'help',
                        tipPosition: 'nw',
                      },
                      { name: 'br' },
                    ],
                    r = [];
                  return (
                    t.forEach(function (o) {
                      var a = o;
                      i.forEach(function (v) {
                        typeof o == 'string' && v.name === o && (a = v),
                          typeof o == 'object' &&
                            v.name === o.name &&
                            (a = Object.assign({}, v, o));
                      }),
                        o.toolbar && (a.toolbar = n.mergeToolbar(o.toolbar)),
                        r.push(a);
                    }),
                    r
                  );
                }),
                e
              );
            })(),
            gi = (function () {
              function e(t) {
                var n = this;
                (this.composingLock = !1), (this.commentIds = []);
                var i = document.createElement('div');
                (i.className = 'vditor-wysiwyg'),
                  (i.innerHTML =
                    '<pre class="vditor-reset" placeholder="' +
                    t.options.placeholder +
                    `"
 contenteditable="true" spellcheck="false"></pre>
<div class="vditor-panel vditor-panel--none"></div>
<div class="vditor-panel vditor-panel--none">
    <button type="button" aria-label="` +
                    window.VditorI18n.comment +
                    `" class="vditor-icon vditor-tooltipped vditor-tooltipped__n">
        <svg><use xlink:href="#vditor-icon-comment"></use></svg>
    </button>
</div>`),
                  (this.element = i.firstElementChild),
                  (this.popover = i.firstElementChild.nextElementSibling),
                  (this.selectPopover = i.lastElementChild),
                  this.bindEvent(t),
                  xt(t, this.element),
                  Qt(t, this.element),
                  Ht(t, this.element),
                  jt(t, this.element),
                  It(t, this.element),
                  Nt(t, this.element),
                  Dt(t, this.element, this.copy),
                  Ot(t, this.element, this.copy),
                  t.options.comment.enable &&
                    (this.selectPopover.querySelector('button').onclick = function () {
                      var r,
                        o,
                        a = Lute.NewNodeID(),
                        v = getSelection().getRangeAt(0),
                        E = v.cloneRange(),
                        S = v.extractContents(),
                        b = !1,
                        H = !1;
                      S.childNodes.forEach(function (C, U) {
                        var W = !1;
                        if (
                          (C.nodeType === 3
                            ? (W = !0)
                            : C.classList.contains('vditor-comment')
                              ? C.classList.contains('vditor-comment') &&
                                C.setAttribute(
                                  'data-cmtids',
                                  C.getAttribute('data-cmtids') + ' ' + a,
                                )
                              : (W = !0),
                          W)
                        )
                          if (
                            C.nodeType !== 3 &&
                            C.getAttribute('data-block') === '0' &&
                            U === 0 &&
                            E.startOffset > 0
                          )
                            (C.innerHTML =
                              '<span class="vditor-comment" data-cmtids="' +
                              a +
                              '">' +
                              C.innerHTML +
                              '</span>'),
                              (r = C);
                          else if (
                            C.nodeType !== 3 &&
                            C.getAttribute('data-block') === '0' &&
                            U === S.childNodes.length - 1 &&
                            E.endOffset < E.endContainer.textContent.length
                          )
                            (C.innerHTML =
                              '<span class="vditor-comment" data-cmtids="' +
                              a +
                              '">' +
                              C.innerHTML +
                              '</span>'),
                              (o = C);
                          else if (C.nodeType !== 3 && C.getAttribute('data-block') === '0')
                            U === 0 ? (b = !0) : U === S.childNodes.length - 1 && (H = !0),
                              (C.innerHTML =
                                '<span class="vditor-comment" data-cmtids="' +
                                a +
                                '">' +
                                C.innerHTML +
                                '</span>');
                          else {
                            var q = document.createElement('span');
                            q.classList.add('vditor-comment'),
                              q.setAttribute('data-cmtids', a),
                              C.parentNode.insertBefore(q, C),
                              q.appendChild(C);
                          }
                      });
                      var B = (0, m.F9)(E.startContainer);
                      B &&
                        (r
                          ? (B.insertAdjacentHTML('beforeend', r.innerHTML), r.remove())
                          : B.textContent.trim().replace(h.g.ZWSP, '') === '' && b && B.remove());
                      var K = (0, m.F9)(E.endContainer);
                      K &&
                        (o
                          ? (K.insertAdjacentHTML('afterbegin', o.innerHTML), o.remove())
                          : K.textContent.trim().replace(h.g.ZWSP, '') === '' && H && K.remove()),
                        v.insertNode(S),
                        t.options.comment.add(a, v.toString(), n.getComments(t, !0)),
                        Ee(t, { enableAddUndoStack: !0, enableHint: !1, enableInput: !1 }),
                        n.hideComment();
                    });
              }
              return (
                (e.prototype.getComments = function (t, n) {
                  var i = this;
                  if (
                    (n === void 0 && (n = !1),
                    t.currentMode !== 'wysiwyg' || !t.options.comment.enable)
                  )
                    return [];
                  (this.commentIds = []),
                    this.element.querySelectorAll('.vditor-comment').forEach(function (o) {
                      i.commentIds = i.commentIds.concat(o.getAttribute('data-cmtids').split(' '));
                    }),
                    (this.commentIds = Array.from(new Set(this.commentIds)));
                  var r = [];
                  return n
                    ? (this.commentIds.forEach(function (o) {
                        r.push({
                          id: o,
                          top: i.element.querySelector('.vditor-comment[data-cmtids="' + o + '"]')
                            .offsetTop,
                        });
                      }),
                      r)
                    : void 0;
                }),
                (e.prototype.triggerRemoveComment = function (t) {
                  var n, i, r;
                  if (
                    t.currentMode === 'wysiwyg' &&
                    t.options.comment.enable &&
                    t.wysiwyg.commentIds.length > 0
                  ) {
                    var o = JSON.parse(JSON.stringify(this.commentIds));
                    this.getComments(t);
                    var a =
                      ((n = o),
                      (i = this.commentIds),
                      (r = new Set(i)),
                      n.filter(function (v) {
                        return !r.has(v);
                      }));
                    a.length > 0 && t.options.comment.remove(a);
                  }
                }),
                (e.prototype.showComment = function () {
                  var t = (0, A.Ny)(this.element);
                  this.selectPopover.setAttribute(
                    'style',
                    'left:' + t.left + 'px;display:block;top:' + Math.max(-8, t.top - 21) + 'px',
                  );
                }),
                (e.prototype.hideComment = function () {
                  this.selectPopover.setAttribute('style', 'display:none');
                }),
                (e.prototype.unbindListener = function () {
                  window.removeEventListener('scroll', this.scrollListener);
                }),
                (e.prototype.copy = function (t, n) {
                  var i = getSelection().getRangeAt(0);
                  if (i.toString() !== '') {
                    t.stopPropagation(), t.preventDefault();
                    var r = (0, m.lG)(i.startContainer, 'CODE'),
                      o = (0, m.lG)(i.endContainer, 'CODE');
                    if (r && o && o.isSameNode(r)) {
                      var a = '';
                      return (
                        (a =
                          r.parentElement.tagName === 'PRE'
                            ? i.toString()
                            : '`' + i.toString() + '`'),
                        t.clipboardData.setData('text/plain', a),
                        void t.clipboardData.setData('text/html', '')
                      );
                    }
                    var v = (0, m.lG)(i.startContainer, 'A'),
                      E = (0, m.lG)(i.endContainer, 'A');
                    if (v && E && E.isSameNode(v)) {
                      var S = v.getAttribute('title') || '';
                      return (
                        S && (S = ' "' + S + '"'),
                        t.clipboardData.setData(
                          'text/plain',
                          '[' + i.toString() + '](' + v.getAttribute('href') + S + ')',
                        ),
                        void t.clipboardData.setData('text/html', '')
                      );
                    }
                    var b = document.createElement('div');
                    b.appendChild(i.cloneContents()),
                      t.clipboardData.setData(
                        'text/plain',
                        n.lute.VditorDOM2Md(b.innerHTML).trim(),
                      ),
                      t.clipboardData.setData('text/html', '');
                  }
                }),
                (e.prototype.bindEvent = function (t) {
                  var n = this;
                  this.unbindListener(),
                    window.addEventListener(
                      'scroll',
                      (this.scrollListener = function () {
                        if (
                          (g(t, ['hint']),
                          n.popover.style.display === 'block' &&
                            n.selectPopover.style.display === 'block')
                        ) {
                          var i = parseInt(n.popover.getAttribute('data-top'), 10);
                          if (t.options.height === 'auto') {
                            if (t.options.toolbarConfig.pin) {
                              var r = Math.max(i, window.scrollY - t.element.offsetTop - 8) + 'px';
                              n.popover.style.display === 'block' && (n.popover.style.top = r),
                                n.selectPopover.style.display === 'block' &&
                                  (n.selectPopover.style.top = r);
                            }
                          } else if (
                            t.options.toolbarConfig.pin &&
                            t.toolbar.element.getBoundingClientRect().top === 0
                          ) {
                            var o =
                              Math.max(
                                window.scrollY - t.element.offsetTop - 8,
                                Math.min(
                                  i - t.wysiwyg.element.scrollTop,
                                  n.element.clientHeight - 21,
                                ),
                              ) + 'px';
                            n.popover.style.display === 'block' && (n.popover.style.top = o),
                              n.selectPopover.style.display === 'block' &&
                                (n.selectPopover.style.top = o);
                          }
                        }
                      }),
                    ),
                    this.element.addEventListener('scroll', function () {
                      if (
                        (g(t, ['hint']),
                        t.options.comment &&
                          t.options.comment.enable &&
                          t.options.comment.scroll &&
                          t.options.comment.scroll(t.wysiwyg.element.scrollTop),
                        n.popover.style.display === 'block')
                      ) {
                        var i =
                            parseInt(n.popover.getAttribute('data-top'), 10) -
                            t.wysiwyg.element.scrollTop,
                          r = -8;
                        t.options.toolbarConfig.pin &&
                          t.toolbar.element.getBoundingClientRect().top === 0 &&
                          (r = window.scrollY - t.element.offsetTop + r);
                        var o = Math.max(r, Math.min(i, n.element.clientHeight - 21)) + 'px';
                        (n.popover.style.top = o), (n.selectPopover.style.top = o);
                      }
                    }),
                    this.element.addEventListener('paste', function (i) {
                      St(t, i, {
                        pasteCode: function (r) {
                          var o = (0, A.zh)(t),
                            a = document.createElement('template');
                          (a.innerHTML = r), o.insertNode(a.content.cloneNode(!0));
                          var v = (0, m.a1)(o.startContainer, 'data-block', '0');
                          v
                            ? (v.outerHTML = t.lute.SpinVditorDOM(v.outerHTML))
                            : (t.wysiwyg.element.innerHTML = t.lute.SpinVditorDOM(
                                t.wysiwyg.element.innerHTML,
                              )),
                            (0, A.ib)(t.wysiwyg.element, o);
                        },
                      });
                    }),
                    this.element.addEventListener('compositionstart', function () {
                      n.composingLock = !0;
                    }),
                    this.element.addEventListener('compositionend', function (i) {
                      var r = (0, _.W)(getSelection().getRangeAt(0).startContainer);
                      r && r.textContent === ''
                        ? ge(t)
                        : ((0, c.vU)() || yt(t, getSelection().getRangeAt(0).cloneRange(), i),
                          (n.composingLock = !1));
                    }),
                    this.element.addEventListener('input', function (i) {
                      if (i.inputType !== 'deleteByDrag' && i.inputType !== 'insertFromDrop') {
                        if (n.preventInput) return (n.preventInput = !1), void Ee(t);
                        if (n.composingLock || i.data === '‘' || i.data === '“' || i.data === '《')
                          Ee(t);
                        else {
                          var r = getSelection().getRangeAt(0),
                            o = (0, m.F9)(r.startContainer);
                          if ((o || (Zt(t, r), (o = (0, m.F9)(r.startContainer))), o)) {
                            for (
                              var a = (0, A.im)(o, t.wysiwyg.element, r).start, v = !0, E = a - 1;
                              E >
                              o.textContent.substr(0, a).lastIndexOf(`
`);
                              E--
                            )
                              if (
                                o.textContent.charAt(E) !== ' ' &&
                                o.textContent.charAt(E) !== '	'
                              ) {
                                v = !1;
                                break;
                              }
                            a === 0 && (v = !1);
                            var S = !0;
                            for (E = a - 1; E < o.textContent.length; E++)
                              if (
                                o.textContent.charAt(E) !== ' ' &&
                                o.textContent.charAt(E) !==
                                  `
`
                              ) {
                                S = !1;
                                break;
                              }
                            var b = (0, _.W)(getSelection().getRangeAt(0).startContainer);
                            b && b.textContent === '' && (ge(t), b.remove()),
                              (v && o.getAttribute('data-type') !== 'code-block') ||
                              S ||
                              Bt(o.innerHTML) ||
                              (qt(o.innerHTML) && o.previousElementSibling)
                                ? typeof t.options.input == 'function' && t.options.input(d(t))
                                : (i.inputType === 'insertParagraph' &&
                                    n.element.innerHTML === '<p><br></p><p><br></p>' &&
                                    o.previousElementSibling.remove(),
                                  yt(t, r, i));
                          }
                        }
                      }
                    }),
                    this.element.addEventListener('click', function (i) {
                      if (i.target.tagName === 'INPUT') {
                        var r = i.target;
                        return (
                          r.checked
                            ? r.setAttribute('checked', 'checked')
                            : r.removeAttribute('checked'),
                          (n.preventInput = !0),
                          void Ee(t)
                        );
                      }
                      if (
                        i.target.tagName !== 'IMG' ||
                        i.target.parentElement.classList.contains('vditor-wysiwyg__preview')
                      ) {
                        var o = (0, m.lG)(i.target, 'A');
                        if (o)
                          return (
                            t.options.link.click
                              ? t.options.link.click(o)
                              : t.options.link.isOpen && window.open(o.getAttribute('href')),
                            void i.preventDefault()
                          );
                        var a = (0, A.zh)(t);
                        if (
                          i.target.isEqualNode(n.element) &&
                          n.element.lastElementChild &&
                          a.collapsed
                        ) {
                          var v = n.element.lastElementChild.getBoundingClientRect();
                          i.y > v.top + v.height &&
                            (n.element.lastElementChild.tagName === 'P' &&
                            n.element.lastElementChild.textContent.trim().replace(h.g.ZWSP, '') ===
                              ''
                              ? (a.selectNodeContents(n.element.lastElementChild), a.collapse(!1))
                              : (n.element.insertAdjacentHTML(
                                  'beforeend',
                                  '<p data-block="0">' + h.g.ZWSP + '<wbr></p>',
                                ),
                                (0, A.ib)(n.element, a)));
                        }
                        Xe(t);
                        var E = (0, m.fb)(i.target, 'vditor-wysiwyg__preview');
                        E ||
                          (E = (0, m.fb)((0, A.zh)(t).startContainer, 'vditor-wysiwyg__preview')),
                          E && dt(E, t),
                          ee(i, t);
                      } else
                        i.target.getAttribute('data-type') === 'link-ref'
                          ? Xt(t, i.target)
                          : (function (S, b) {
                              var H = S.target;
                              b.wysiwyg.popover.innerHTML = '';
                              var B = function () {
                                  H.setAttribute('src', C.value),
                                    H.setAttribute('alt', W.value),
                                    H.setAttribute('title', G.value),
                                    typeof b.options.input == 'function' && b.options.input(d(b));
                                },
                                K = document.createElement('span');
                              K.setAttribute('aria-label', window.VditorI18n.imageURL),
                                (K.className = 'vditor-tooltipped vditor-tooltipped__n');
                              var C = document.createElement('input');
                              K.appendChild(C),
                                (C.className = 'vditor-input'),
                                C.setAttribute('placeholder', window.VditorI18n.imageURL),
                                (C.value = H.getAttribute('src') || ''),
                                (C.oninput = function () {
                                  B();
                                }),
                                (C.onkeydown = function (z) {
                                  Oe(b, z);
                                });
                              var U = document.createElement('span');
                              U.setAttribute('aria-label', window.VditorI18n.alternateText),
                                (U.className = 'vditor-tooltipped vditor-tooltipped__n');
                              var W = document.createElement('input');
                              U.appendChild(W),
                                (W.className = 'vditor-input'),
                                W.setAttribute('placeholder', window.VditorI18n.alternateText),
                                (W.style.width = '52px'),
                                (W.value = H.getAttribute('alt') || ''),
                                (W.oninput = function () {
                                  B();
                                }),
                                (W.onkeydown = function (z) {
                                  Oe(b, z);
                                });
                              var q = document.createElement('span');
                              q.setAttribute('aria-label', window.VditorI18n.title),
                                (q.className = 'vditor-tooltipped vditor-tooltipped__n');
                              var G = document.createElement('input');
                              q.appendChild(G),
                                (G.className = 'vditor-input'),
                                G.setAttribute('placeholder', window.VditorI18n.title),
                                (G.value = H.getAttribute('title') || ''),
                                (G.oninput = function () {
                                  B();
                                }),
                                (G.onkeydown = function (z) {
                                  Oe(b, z);
                                }),
                                qe(H, b),
                                b.wysiwyg.popover.insertAdjacentElement('beforeend', K),
                                b.wysiwyg.popover.insertAdjacentElement('beforeend', U),
                                b.wysiwyg.popover.insertAdjacentElement('beforeend', q),
                                Pe(b, H);
                            })(i, t);
                    }),
                    this.element.addEventListener('keyup', function (i) {
                      if (!i.isComposing && !(0, c.yl)(i)) {
                        i.key === 'Enter' && _e(t),
                          (i.key !== 'Backspace' && i.key !== 'Delete') ||
                            t.wysiwyg.element.innerHTML === '' ||
                            t.wysiwyg.element.childNodes.length !== 1 ||
                            !t.wysiwyg.element.firstElementChild ||
                            t.wysiwyg.element.firstElementChild.tagName !== 'P' ||
                            t.wysiwyg.element.firstElementChild.childElementCount !== 0 ||
                            (t.wysiwyg.element.textContent !== '' &&
                              t.wysiwyg.element.textContent !==
                                `
`) ||
                            (t.wysiwyg.element.innerHTML = '');
                        var r = (0, A.zh)(t);
                        if (
                          (i.key === 'Backspace' &&
                            (0, c.vU)() &&
                            r.startContainer.textContent ===
                              `
` &&
                            r.startOffset === 1 &&
                            (r.startContainer.textContent = ''),
                          Zt(t, r),
                          Xe(t),
                          i.key === 'ArrowDown' ||
                            i.key === 'ArrowRight' ||
                            i.key === 'Backspace' ||
                            i.key === 'ArrowLeft' ||
                            i.key === 'ArrowUp')
                        ) {
                          (i.key !== 'ArrowLeft' && i.key !== 'ArrowRight') || t.hint.render(t);
                          var o = (0, m.fb)(r.startContainer, 'vditor-wysiwyg__preview');
                          if (
                            (!o &&
                              r.startContainer.nodeType !== 3 &&
                              r.startOffset > 0 &&
                              (v = r.startContainer).classList.contains('vditor-wysiwyg__block') &&
                              (o = v.lastElementChild),
                            o)
                          )
                            if (o.previousElementSibling.style.display !== 'none') {
                              var a = o.previousElementSibling;
                              if (
                                (a.tagName === 'PRE' && (a = a.firstElementChild),
                                i.key === 'ArrowDown' || i.key === 'ArrowRight')
                              ) {
                                var v,
                                  E = (function (b) {
                                    for (var H = b; H && !H.nextSibling; ) H = H.parentElement;
                                    return H.nextSibling;
                                  })((v = o.parentElement));
                                if (E && E.nodeType !== 3) {
                                  var S = E.querySelector('.vditor-wysiwyg__preview');
                                  if (S) return void dt(S, t);
                                }
                                if (E.nodeType === 3) {
                                  for (; E.textContent.length === 0 && E.nextSibling; )
                                    E = E.nextSibling;
                                  r.setStart(E, 1);
                                } else r.setStart(E.firstChild, 0);
                              } else r.selectNodeContents(a), r.collapse(!1);
                            } else
                              i.key === 'ArrowDown' || i.key === 'ArrowRight'
                                ? dt(o, t)
                                : dt(o, t, !1);
                        }
                      }
                    });
                }),
                e
              );
            })(),
            yi = (function () {
              var e = function (t, n) {
                return (
                  (e =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (i, r) {
                        i.__proto__ = r;
                      }) ||
                    function (i, r) {
                      for (var o in r) r.hasOwnProperty(o) && (i[o] = r[o]);
                    }),
                  e(t, n)
                );
              };
              return function (t, n) {
                function i() {
                  this.constructor = t;
                }
                e(t, n),
                  (t.prototype =
                    n === null ? Object.create(n) : ((i.prototype = n.prototype), new i()));
              };
            })();
          const bi = (function (e) {
            function t(n, i) {
              var r = e.call(this) || this;
              if (((r.version = h.H), typeof n == 'string')) {
                if (
                  (i
                    ? i.cache
                      ? i.cache.id || (i.cache.id = 'vditor' + n)
                      : (i.cache = { id: 'vditor' + n })
                    : (i = { cache: { id: 'vditor' + n } }),
                  !document.getElementById(n))
                )
                  return r.showErrorTip('Failed to get element by id: ' + n), r;
                n = document.getElementById(n);
              }
              var o = new vi(i).merge();
              if (o.i18n) (window.VditorI18n = o.i18n), r.init(n, o);
              else {
                if (
                  ![
                    'en_US',
                    'fr_FR',
                    'pt_BR',
                    'ja_JP',
                    'ko_KR',
                    'ru_RU',
                    'sv_SE',
                    'zh_CN',
                    'zh_TW',
                  ].includes(o.lang)
                )
                  throw new Error(
                    'options.lang error, see https://ld246.com/article/1549638745630#options',
                  );
                var a = 'vditorI18nScript',
                  v = a + o.lang;
                document
                  .querySelectorAll('head script[id^="vditorI18nScript"]')
                  .forEach(function (E) {
                    E.id !== v && document.head.removeChild(E);
                  }),
                  (0, l.G)(o.cdn + '/dist/js/i18n/' + o.lang + '.js', v)
                    .then(function () {
                      r.init(n, o);
                    })
                    .catch(function (E) {
                      r.showErrorTip(
                        'GET ' +
                          o.cdn +
                          '/dist/js/i18n/' +
                          o.lang +
                          '.js net::ERR_ABORTED 404 (Not Found)',
                      );
                    });
              }
              return r;
            }
            return (
              yi(t, e),
              (t.prototype.showErrorTip = function (n) {
                var i = new Mn();
                document.body.appendChild(i.element), i.show(n, 0);
              }),
              (t.prototype.setTheme = function (n, i, r, o) {
                (this.vditor.options.theme = n),
                  ue(this.vditor),
                  i &&
                    ((this.vditor.options.preview.theme.current = i),
                    (0, X.Z)(i, o || this.vditor.options.preview.theme.path)),
                  r &&
                    ((this.vditor.options.preview.hljs.style = r),
                    (0, An.Y)(r, this.vditor.options.cdn));
              }),
              (t.prototype.getValue = function () {
                return d(this.vditor);
              }),
              (t.prototype.getCurrentMode = function () {
                return this.vditor.currentMode;
              }),
              (t.prototype.focus = function () {
                this.vditor.currentMode === 'sv'
                  ? this.vditor.sv.element.focus()
                  : this.vditor.currentMode === 'wysiwyg'
                    ? this.vditor.wysiwyg.element.focus()
                    : this.vditor.currentMode === 'ir' && this.vditor.ir.element.focus();
              }),
              (t.prototype.blur = function () {
                this.vditor.currentMode === 'sv'
                  ? this.vditor.sv.element.blur()
                  : this.vditor.currentMode === 'wysiwyg'
                    ? this.vditor.wysiwyg.element.blur()
                    : this.vditor.currentMode === 'ir' && this.vditor.ir.element.blur();
              }),
              (t.prototype.disabled = function () {
                g(this.vditor, ['subToolbar', 'hint', 'popover']),
                  L(
                    this.vditor.toolbar.elements,
                    h.g.EDIT_TOOLBARS.concat(['undo', 'redo', 'fullscreen', 'edit-mode']),
                  ),
                  this.vditor[this.vditor.currentMode].element.setAttribute(
                    'contenteditable',
                    'false',
                  );
              }),
              (t.prototype.enable = function () {
                f(
                  this.vditor.toolbar.elements,
                  h.g.EDIT_TOOLBARS.concat(['undo', 'redo', 'fullscreen', 'edit-mode']),
                ),
                  this.vditor.undo.resetIcon(this.vditor),
                  this.vditor[this.vditor.currentMode].element.setAttribute(
                    'contenteditable',
                    'true',
                  );
              }),
              (t.prototype.getSelection = function () {
                return this.vditor.currentMode === 'wysiwyg'
                  ? pt(this.vditor.wysiwyg.element)
                  : this.vditor.currentMode === 'sv'
                    ? pt(this.vditor.sv.element)
                    : this.vditor.currentMode === 'ir'
                      ? pt(this.vditor.ir.element)
                      : void 0;
              }),
              (t.prototype.renderPreview = function (n) {
                this.vditor.preview.render(this.vditor, n);
              }),
              (t.prototype.getCursorPosition = function () {
                return (0, A.Ny)(this.vditor[this.vditor.currentMode].element);
              }),
              (t.prototype.isUploading = function () {
                return this.vditor.upload.isUploading;
              }),
              (t.prototype.clearCache = function () {
                localStorage.removeItem(this.vditor.options.cache.id);
              }),
              (t.prototype.disabledCache = function () {
                this.vditor.options.cache.enable = !1;
              }),
              (t.prototype.enableCache = function () {
                if (!this.vditor.options.cache.id)
                  throw new Error(
                    'need options.cache.id, see https://ld246.com/article/1549638745630#options',
                  );
                this.vditor.options.cache.enable = !0;
              }),
              (t.prototype.html2md = function (n) {
                return this.vditor.lute.HTML2Md(n);
              }),
              (t.prototype.exportJSON = function (n) {
                return this.vditor.lute.RenderJSON(n);
              }),
              (t.prototype.getHTML = function () {
                return Ln(this.vditor);
              }),
              (t.prototype.tip = function (n, i) {
                this.vditor.tip.show(n, i);
              }),
              (t.prototype.setPreviewMode = function (n) {
                Ut(n, this.vditor);
              }),
              (t.prototype.deleteValue = function () {
                window.getSelection().isCollapsed || document.execCommand('delete', !1);
              }),
              (t.prototype.updateValue = function (n) {
                document.execCommand('insertHTML', !1, n);
              }),
              (t.prototype.insertValue = function (n, i) {
                i === void 0 && (i = !0);
                var r = (0, A.zh)(this.vditor);
                r.collapse(!0);
                var o = document.createElement('template');
                (o.innerHTML = n),
                  r.insertNode(o.content.cloneNode(!0)),
                  r.collapse(!1),
                  this.vditor.currentMode === 'sv'
                    ? ((this.vditor.sv.preventInput = !0), i && te(this.vditor))
                    : this.vditor.currentMode === 'wysiwyg'
                      ? i && yt(this.vditor, getSelection().getRangeAt(0))
                      : this.vditor.currentMode === 'ir' &&
                        ((this.vditor.ir.preventInput = !0),
                        i && Z(this.vditor, getSelection().getRangeAt(0), !0));
              }),
              (t.prototype.setValue = function (n, i) {
                var r = this;
                i === void 0 && (i = !1),
                  this.vditor.currentMode === 'sv'
                    ? ((this.vditor.sv.element.innerHTML =
                        "<div data-block='0'>" + this.vditor.lute.SpinVditorSVDOM(n) + '</div>'),
                      Ne(this.vditor, { enableAddUndoStack: !0, enableHint: !1, enableInput: !1 }))
                    : this.vditor.currentMode === 'wysiwyg'
                      ? Yt(this.vditor, n, {
                          enableAddUndoStack: !0,
                          enableHint: !1,
                          enableInput: !1,
                        })
                      : ((this.vditor.ir.element.innerHTML = this.vditor.lute.Md2VditorIRDOM(n)),
                        this.vditor.ir.element
                          .querySelectorAll(".vditor-ir__preview[data-render='2']")
                          .forEach(function (o) {
                            be(o, r.vditor);
                          }),
                        Ge(this.vditor, {
                          enableAddUndoStack: !0,
                          enableHint: !1,
                          enableInput: !1,
                        })),
                  this.vditor.outline.render(this.vditor),
                  n ||
                    (g(this.vditor, ['emoji', 'headings', 'submenu', 'hint']),
                    this.vditor.wysiwyg.popover &&
                      (this.vditor.wysiwyg.popover.style.display = 'none'),
                    this.clearCache()),
                  i && this.clearStack();
              }),
              (t.prototype.clearStack = function () {
                this.vditor.undo.clearStack(this.vditor),
                  this.vditor.undo.addToUndoStack(this.vditor);
              }),
              (t.prototype.destroy = function () {
                (this.vditor.element.innerHTML = this.vditor.originalInnerHTML),
                  this.vditor.element.classList.remove('vditor'),
                  this.vditor.element.removeAttribute('style');
                var n = document.getElementById('vditorIconScript');
                n && n.remove(), this.clearCache(), We(), this.vditor.wysiwyg.unbindListener();
              }),
              (t.prototype.getCommentIds = function () {
                return this.vditor.currentMode !== 'wysiwyg'
                  ? []
                  : this.vditor.wysiwyg.getComments(this.vditor, !0);
              }),
              (t.prototype.hlCommentIds = function (n) {
                if (this.vditor.currentMode === 'wysiwyg') {
                  var i = function (r) {
                    r.classList.remove('vditor-comment--hover'),
                      n.forEach(function (o) {
                        r.getAttribute('data-cmtids').indexOf(o) > -1 &&
                          r.classList.add('vditor-comment--hover');
                      });
                  };
                  this.vditor.wysiwyg.element
                    .querySelectorAll('.vditor-comment')
                    .forEach(function (r) {
                      i(r);
                    }),
                    this.vditor.preview.element.style.display !== 'none' &&
                      this.vditor.preview.element
                        .querySelectorAll('.vditor-comment')
                        .forEach(function (r) {
                          i(r);
                        });
                }
              }),
              (t.prototype.unHlCommentIds = function (n) {
                if (this.vditor.currentMode === 'wysiwyg') {
                  var i = function (r) {
                    n.forEach(function (o) {
                      r.getAttribute('data-cmtids').indexOf(o) > -1 &&
                        r.classList.remove('vditor-comment--hover');
                    });
                  };
                  this.vditor.wysiwyg.element
                    .querySelectorAll('.vditor-comment')
                    .forEach(function (r) {
                      i(r);
                    }),
                    this.vditor.preview.element.style.display !== 'none' &&
                      this.vditor.preview.element
                        .querySelectorAll('.vditor-comment')
                        .forEach(function (r) {
                          i(r);
                        });
                }
              }),
              (t.prototype.removeCommentIds = function (n) {
                var i = this;
                if (this.vditor.currentMode === 'wysiwyg') {
                  var r = function (o, a) {
                    var v = o.getAttribute('data-cmtids').split(' ');
                    v.find(function (E, S) {
                      if (E === a) return v.splice(S, 1), !0;
                    }),
                      v.length === 0
                        ? ((o.outerHTML = o.innerHTML), (0, A.zh)(i.vditor).collapse(!0))
                        : o.setAttribute('data-cmtids', v.join(' '));
                  };
                  n.forEach(function (o) {
                    i.vditor.wysiwyg.element
                      .querySelectorAll('.vditor-comment')
                      .forEach(function (a) {
                        r(a, o);
                      }),
                      i.vditor.preview.element.style.display !== 'none' &&
                        i.vditor.preview.element
                          .querySelectorAll('.vditor-comment')
                          .forEach(function (a) {
                            r(a, o);
                          });
                  }),
                    Ee(this.vditor, { enableAddUndoStack: !0, enableHint: !1, enableInput: !1 });
                }
              }),
              (t.prototype.init = function (n, i) {
                var r = this;
                (this.vditor = {
                  currentMode: i.mode,
                  element: n,
                  hint: new pr(i.hint.extend),
                  lute: void 0,
                  options: i,
                  originalInnerHTML: n.innerHTML,
                  outline: new hr(window.VditorI18n.outline),
                  tip: new Mn(),
                }),
                  (this.vditor.sv = new br(this.vditor)),
                  (this.vditor.undo = new fi()),
                  (this.vditor.wysiwyg = new gi(this.vditor)),
                  (this.vditor.ir = new mr(this.vditor)),
                  (this.vditor.toolbar = new pi(this.vditor)),
                  i.resize.enable && (this.vditor.resize = new yr(this.vditor)),
                  this.vditor.toolbar.elements.devtools && (this.vditor.devtools = new y()),
                  (i.upload.url || i.upload.handler) && (this.vditor.upload = new rr()),
                  (0, l.G)(
                    i._lutePath || i.cdn + '/dist/js/lute/lute.min.js',
                    'vditorLuteScript',
                  ).then(function () {
                    (r.vditor.lute = (0, fr.X)({
                      autoSpace: r.vditor.options.preview.markdown.autoSpace,
                      gfmAutoLink: r.vditor.options.preview.markdown.gfmAutoLink,
                      codeBlockPreview: r.vditor.options.preview.markdown.codeBlockPreview,
                      emojiSite: r.vditor.options.hint.emojiPath,
                      emojis: r.vditor.options.hint.emoji,
                      fixTermTypo: r.vditor.options.preview.markdown.fixTermTypo,
                      footnotes: r.vditor.options.preview.markdown.footnotes,
                      headingAnchor: !1,
                      inlineMathDigit: r.vditor.options.preview.math.inlineDigit,
                      linkBase: r.vditor.options.preview.markdown.linkBase,
                      linkPrefix: r.vditor.options.preview.markdown.linkPrefix,
                      listStyle: r.vditor.options.preview.markdown.listStyle,
                      mark: r.vditor.options.preview.markdown.mark,
                      mathBlockPreview: r.vditor.options.preview.markdown.mathBlockPreview,
                      paragraphBeginningSpace:
                        r.vditor.options.preview.markdown.paragraphBeginningSpace,
                      sanitize: r.vditor.options.preview.markdown.sanitize,
                      toc: r.vditor.options.preview.markdown.toc,
                    })),
                      (r.vditor.preview = new gr(r.vditor)),
                      (function (o) {
                        (o.element.innerHTML = ''),
                          o.element.classList.add('vditor'),
                          o.options.rtl && o.element.setAttribute('dir', 'rtl'),
                          ue(o),
                          (0, X.Z)(o.options.preview.theme.current, o.options.preview.theme.path),
                          typeof o.options.height == 'number'
                            ? (o.element.style.height = o.options.height + 'px')
                            : (o.element.style.height = o.options.height),
                          typeof o.options.minHeight == 'number' &&
                            (o.element.style.minHeight = o.options.minHeight + 'px'),
                          typeof o.options.width == 'number'
                            ? (o.element.style.width = o.options.width + 'px')
                            : (o.element.style.width = o.options.width),
                          o.element.appendChild(o.toolbar.element);
                        var a = document.createElement('div');
                        if (
                          ((a.className = 'vditor-content'),
                          o.options.outline.position === 'left' && a.appendChild(o.outline.element),
                          a.appendChild(o.wysiwyg.element.parentElement),
                          a.appendChild(o.sv.element),
                          a.appendChild(o.ir.element.parentElement),
                          a.appendChild(o.preview.element),
                          o.toolbar.elements.devtools && a.appendChild(o.devtools.element),
                          o.options.outline.position === 'right' &&
                            (o.outline.element.classList.add('vditor-outline--right'),
                            a.appendChild(o.outline.element)),
                          o.upload && a.appendChild(o.upload.element),
                          o.options.resize.enable && a.appendChild(o.resize.element),
                          a.appendChild(o.hint.element),
                          a.appendChild(o.tip.element),
                          o.element.appendChild(a),
                          a.addEventListener('click', function () {
                            g(o, ['subToolbar']);
                          }),
                          o.toolbar.elements.export &&
                            o.element.insertAdjacentHTML(
                              'beforeend',
                              '<iframe id="vditorExportIframe" style="width: 100%;height: 0;border: 0"></iframe>',
                            ),
                          Ye(o, o.options.mode, Zn(o)),
                          document.execCommand('DefaultParagraphSeparator', !1, 'p'),
                          navigator.userAgent.indexOf('iPhone') > -1 &&
                            window.visualViewport !== void 0)
                        ) {
                          var v = !1,
                            E = function (S) {
                              v ||
                                ((v = !0),
                                requestAnimationFrame(function () {
                                  v = !1;
                                  var b = o.toolbar.element;
                                  (b.style.transform = 'none'),
                                    b.getBoundingClientRect().top < 0 &&
                                      (b.style.transform =
                                        'translate(0, ' + -b.getBoundingClientRect().top + 'px)');
                                }));
                            };
                          window.visualViewport.addEventListener('scroll', E),
                            window.visualViewport.addEventListener('resize', E);
                        }
                      })(r.vditor),
                      i.after && i.after(),
                      i.icon &&
                        (0, l.J)(i.cdn + '/dist/js/icons/' + i.icon + '.js', 'vditorIconScript');
                  });
              }),
              t
            );
          })(M.default);
        })(),
        (De = De.default)
      );
    })(),
  );
})(Fn);
var Hi = Fn.exports;
const Ni = Bn(Hi),
  Ue = (Ce, Le = 'default') => {
    const ye = Ce === 'dark';
    switch (Le) {
      case 'default':
        return ye ? 'dark' : 'classic';
      case 'content':
        return ye ? 'dark' : 'light';
      case 'code':
        return ye ? 'dracula' : 'github';
    }
  },
  Di = Vn({
    inheritAttrs: !1,
    __name: 'Markdown',
    props: { height: { type: Number, default: 360 }, value: { type: String, default: '' } },
    emits: ['change', 'get', 'update:value'],
    setup(Ce, { emit: Le }) {
      const ye = Ce,
        He = Le,
        J = Ai(),
        De = st(null),
        P = st(null),
        M = st(!1),
        h = Mi(),
        { getLocale: u } = Ti(),
        { getDarkMode: d } = Rn(),
        l = st(ye.value || '');
      At(
        [() => d.value, () => M.value],
        ([f, L]) => {
          var w;
          L && ((w = s.getVditor()) == null || w.setTheme(Ue(f), Ue(f, 'content'), Ue(f, 'code')));
        },
        { immediate: !0, flush: 'post' },
      ),
        At(
          () => ye.value,
          (f) => {
            var L;
            f !== l.value && ((L = s.getVditor()) == null || L.setValue(f)), (l.value = f);
          },
        );
      const y = Ci(() => {
        let f;
        switch (lt(u)) {
          case 'en':
            f = 'en_US';
            break;
          case 'ja':
            f = 'ja_JP';
            break;
          case 'ko':
            f = 'ko_KR';
            break;
          default:
            f = 'zh_CN';
        }
        return f;
      });
      function c() {
        const f = lt(De);
        if (!f) return;
        const L = Mt(Mt({}, J), ye),
          w = new Ni(
            f,
            In(
              Mt(
                {
                  theme: Ue(d.value),
                  lang: lt(y),
                  mode: 'sv',
                  fullscreen: { index: 520 },
                  preview: {
                    theme: { current: Ue(d.value, 'content') },
                    hljs: { style: Ue(d.value, 'code') },
                    actions: [],
                  },
                  input: (T) => {
                    (l.value = T), He('update:value', T), He('change', T);
                  },
                  after: () => {
                    _i(() => {
                      var T;
                      (T = h == null ? void 0 : h.redoModalHeight) == null || T.call(h),
                        w.setValue(l.value),
                        (P.value = w),
                        (M.value = !0),
                        He('get', s);
                    });
                  },
                  blur: () => {},
                },
                L,
              ),
              { cache: { enable: !1 } },
            ),
          );
      }
      const s = { getVditor: () => P.value };
      function p() {
        var L;
        const f = lt(P);
        if (f) {
          try {
            (L = f == null ? void 0 : f.destroy) == null || L.call(f);
          } catch (w) {}
          (P.value = null), (M.value = !1);
        }
      }
      return (
        Kn(c), Un(p), zn(p), (f, L) => (Wn(), Gn('div', { ref_key: 'wrapRef', ref: De }, null, 512))
      );
    },
  });
var Jn = { exports: {} };
(function (Ce, Le) {
  (function (ye, He) {
    Ce.exports = He();
  })(qn, () =>
    (() => {
      var ye = {
          54: (P, M, h) => {
            h.d(M, { g: () => u });
            var u = (function () {
              function d() {}
              return (
                (d.ZWSP = '​'),
                (d.DROP_EDITOR = 'application/editor'),
                (d.MOBILE_WIDTH = 520),
                (d.CLASS_MENU_DISABLED = 'vditor-menu--disabled'),
                (d.EDIT_TOOLBARS = [
                  'emoji',
                  'headings',
                  'bold',
                  'italic',
                  'strike',
                  'link',
                  'list',
                  'ordered-list',
                  'outdent',
                  'indent',
                  'check',
                  'line',
                  'quote',
                  'code',
                  'inline-code',
                  'insert-after',
                  'insert-before',
                  'upload',
                  'record',
                  'table',
                ]),
                (d.CODE_THEME = [
                  'abap',
                  'algol',
                  'algol_nu',
                  'arduino',
                  'autumn',
                  'borland',
                  'bw',
                  'colorful',
                  'dracula',
                  'emacs',
                  'friendly',
                  'fruity',
                  'github',
                  'igor',
                  'lovelace',
                  'manni',
                  'monokai',
                  'monokailight',
                  'murphy',
                  'native',
                  'paraiso-dark',
                  'paraiso-light',
                  'pastie',
                  'perldoc',
                  'pygments',
                  'rainbow_dash',
                  'rrt',
                  'solarized-dark',
                  'solarized-dark256',
                  'solarized-light',
                  'swapoff',
                  'tango',
                  'trac',
                  'vim',
                  'vs',
                  'xcode',
                  'ant-design',
                ]),
                (d.CODE_LANGUAGES = [
                  'mermaid',
                  'echarts',
                  'mindmap',
                  'plantuml',
                  'abc',
                  'graphviz',
                  'flowchart',
                  'apache',
                  'js',
                  'ts',
                  'html',
                  'markmap',
                  'properties',
                  'apache',
                  'bash',
                  'c',
                  'csharp',
                  'cpp',
                  'css',
                  'coffeescript',
                  'diff',
                  'go',
                  'xml',
                  'http',
                  'json',
                  'java',
                  'javascript',
                  'kotlin',
                  'less',
                  'lua',
                  'makefile',
                  'markdown',
                  'nginx',
                  'objectivec',
                  'php',
                  'php-template',
                  'perl',
                  'plaintext',
                  'python',
                  'python-repl',
                  'r',
                  'ruby',
                  'rust',
                  'scss',
                  'sql',
                  'shell',
                  'swift',
                  'ini',
                  'typescript',
                  'vbnet',
                  'yaml',
                  'ada',
                  'clojure',
                  'dart',
                  'erb',
                  'fortran',
                  'gradle',
                  'haskell',
                  'julia',
                  'julia-repl',
                  'lisp',
                  'matlab',
                  'pgsql',
                  'powershell',
                  'sql_more',
                  'stata',
                  'cmake',
                  'mathematica',
                  'solidity',
                  'yul',
                ]),
                (d.CDN = 'https://unpkg.com/vditor@3.10.4'),
                (d.MARKDOWN_OPTIONS = {
                  autoSpace: !1,
                  gfmAutoLink: !0,
                  codeBlockPreview: !0,
                  fixTermTypo: !1,
                  footnotes: !0,
                  linkBase: '',
                  linkPrefix: '',
                  listStyle: !1,
                  mark: !1,
                  mathBlockPreview: !0,
                  paragraphBeginningSpace: !1,
                  sanitize: !0,
                  toc: !1,
                }),
                (d.HLJS_OPTIONS = { enable: !0, lineNumber: !1, defaultLang: '', style: 'github' }),
                (d.MATH_OPTIONS = { engine: 'KaTeX', inlineDigit: !1, macros: {} }),
                (d.THEME_OPTIONS = {
                  current: 'light',
                  list: {
                    'ant-design': 'Ant Design',
                    dark: 'Dark',
                    light: 'Light',
                    wechat: 'WeChat',
                  },
                  path: d.CDN + '/dist/css/content-theme',
                }),
                d
              );
            })();
          },
          478: (P, M, h) => {
            h.d(M, { Q: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var p = l.abcRenderAdapter.getElements(c);
                p.length > 0 &&
                  (0, d.G)(s + '/dist/js/abcjs/abcjs_basic.min.js', 'vditorAbcjsScript').then(
                    function () {
                      p.forEach(function (f) {
                        f.parentElement.classList.contains('vditor-wysiwyg__pre') ||
                          f.parentElement.classList.contains('vditor-ir__marker--pre') ||
                          (f.getAttribute('data-processed') !== 'true' &&
                            (ABCJS.renderAbc(f, l.abcRenderAdapter.getCode(f).trim()),
                            (f.style.overflowX = 'auto'),
                            f.setAttribute('data-processed', 'true')));
                      });
                    },
                  );
              };
          },
          156: (P, M, h) => {
            h.r(M),
              h.d(M, {
                abcRenderAdapter: () => s,
                chartRenderAdapter: () => c,
                flowchartRenderAdapter: () => f,
                graphvizRenderAdapter: () => p,
                markmapRenderAdapter: () => l,
                mathRenderAdapter: () => u,
                mermaidRenderAdapter: () => d,
                mindmapRenderAdapter: () => y,
                plantumlRenderAdapter: () => L,
              });
            var u = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-math');
                },
              },
              d = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-mermaid');
                },
              },
              l = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-markmap');
                },
              },
              y = {
                getCode: function (w) {
                  return w.getAttribute('data-code');
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-mindmap');
                },
              },
              c = {
                getCode: function (w) {
                  return w.innerText;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-echarts');
                },
              },
              s = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-abc');
                },
              },
              p = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-graphviz');
                },
              },
              f = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-flowchart');
                },
              },
              L = {
                getCode: function (w) {
                  return w.textContent;
                },
                getElements: function (w) {
                  return w.querySelectorAll('.language-plantuml');
                },
              };
          },
          314: (P, M, h) => {
            h.d(M, { p: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s, p) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var f = l.chartRenderAdapter.getElements(c);
                f.length > 0 &&
                  (0, d.G)(s + '/dist/js/echarts/echarts.min.js', 'vditorEchartsScript').then(
                    function () {
                      f.forEach(function (L) {
                        if (
                          !L.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                          !L.parentElement.classList.contains('vditor-ir__marker--pre')
                        ) {
                          var w = l.chartRenderAdapter.getCode(L).trim();
                          if (w)
                            try {
                              if (L.getAttribute('data-processed') === 'true') return;
                              var T = JSON.parse(w);
                              echarts.init(L, p === 'dark' ? 'dark' : void 0).setOption(T),
                                L.setAttribute('data-processed', 'true');
                            } catch (g) {
                              (L.className = 'vditor-reset--error'),
                                (L.innerHTML = 'echarts render error: <br>' + g);
                            }
                        }
                      });
                    },
                  );
              };
          },
          730: (P, M, h) => {
            h.d(M, { O: () => l });
            var u = h(51),
              d = h(54),
              l = function (y, c) {
                Array.from(y.querySelectorAll('pre > code'))
                  .filter(function (s, p) {
                    return (
                      !s.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                      !s.parentElement.classList.contains('vditor-ir__marker--pre') &&
                      !(
                        s.classList.contains('language-mermaid') ||
                        s.classList.contains('language-flowchart') ||
                        s.classList.contains('language-echarts') ||
                        s.classList.contains('language-mindmap') ||
                        s.classList.contains('language-plantuml') ||
                        s.classList.contains('language-markmap') ||
                        s.classList.contains('language-abc') ||
                        s.classList.contains('language-graphviz') ||
                        s.classList.contains('language-math')
                      ) &&
                      !(s.style.maxHeight.indexOf('px') > -1) &&
                      !(y.classList.contains('vditor-preview') && p > 5)
                    );
                  })
                  .forEach(function (s) {
                    var p,
                      f,
                      L,
                      w = s.innerText;
                    if (s.classList.contains('highlight-chroma')) {
                      var T = s.cloneNode(!0);
                      T.querySelectorAll('.highlight-ln').forEach(function (_) {
                        _.remove();
                      }),
                        (w = T.innerText);
                    } else
                      w.endsWith(`
`) && (w = w.substr(0, w.length - 1));
                    var g = '<svg><use xlink:href="#vditor-icon-copy"></use></svg>';
                    document.getElementById('vditorIconScript') ||
                      (g =
                        '<svg viewBox="0 0 32 32"><path d="M22.545-0h-17.455c-1.6 0-2.909 1.309-2.909 2.909v20.364h2.909v-20.364h17.455v-2.909zM26.909 5.818h-16c-1.6 0-2.909 1.309-2.909 2.909v20.364c0 1.6 1.309 2.909 2.909 2.909h16c1.6 0 2.909-1.309 2.909-2.909v-20.364c0-1.6-1.309-2.909-2.909-2.909zM26.909 29.091h-16v-20.364h16v20.364z"></path></svg>');
                    var k = document.createElement('div');
                    (k.className = 'vditor-copy'),
                      (k.innerHTML =
                        '<span aria-label="' +
                        (((p = window.VditorI18n) === null || p === void 0 ? void 0 : p.copy) ||
                          '复制') +
                        `"
onmouseover="this.setAttribute('aria-label', '` +
                        (((f = window.VditorI18n) === null || f === void 0 ? void 0 : f.copy) ||
                          '复制') +
                        `')"
class="vditor-tooltipped vditor-tooltipped__w"
onclick="this.previousElementSibling.select();document.execCommand('copy');this.setAttribute('aria-label', '` +
                        (((L = window.VditorI18n) === null || L === void 0 ? void 0 : L.copied) ||
                          '已复制') +
                        `');this.previousElementSibling.blur()">` +
                        g +
                        '</span>');
                    var m = document.createElement('textarea');
                    (m.value = (0, u.X)(w)),
                      k.insertAdjacentElement('afterbegin', m),
                      c && c.renderMenu && c.renderMenu(s, k),
                      s.before(k),
                      (s.style.maxHeight = window.outerHeight - 40 + 'px'),
                      s.insertAdjacentHTML(
                        'afterend',
                        '<span style="position: absolute">' + d.g.ZWSP + '</span>',
                      );
                  });
              };
          },
          66: (P, M, h) => {
            h.d(M, { P: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                s === void 0 && (s = u.g.CDN);
                var p = l.flowchartRenderAdapter.getElements(c);
                p.length !== 0 &&
                  (0, d.G)(
                    s + '/dist/js/flowchart.js/flowchart.min.js',
                    'vditorFlowchartScript',
                  ).then(function () {
                    p.forEach(function (f) {
                      if (f.getAttribute('data-processed') !== 'true') {
                        var L = flowchart.parse(l.flowchartRenderAdapter.getCode(f));
                        (f.innerHTML = ''), L.drawSVG(f), f.setAttribute('data-processed', 'true');
                      }
                    });
                  });
              };
          },
          218: (P, M, h) => {
            h.d(M, { v: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                s === void 0 && (s = u.g.CDN);
                var p = l.graphvizRenderAdapter.getElements(c);
                p.length !== 0 &&
                  (0, d.G)(s + '/dist/js/graphviz/viz.js', 'vditorGraphVizScript').then(
                    function () {
                      p.forEach(function (f) {
                        var L = l.graphvizRenderAdapter.getCode(f);
                        if (
                          !f.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                          !f.parentElement.classList.contains('vditor-ir__marker--pre') &&
                          f.getAttribute('data-processed') !== 'true' &&
                          L.trim() !== ''
                        ) {
                          try {
                            var w = new Blob(
                                [
                                  "importScripts('" +
                                    document
                                      .getElementById('vditorGraphVizScript')
                                      .src.replace('viz.js', 'full.render.js') +
                                    "');",
                                ],
                                { type: 'application/javascript' },
                              ),
                              T = (window.URL || window.webkitURL).createObjectURL(w),
                              g = new Worker(T);
                            new Viz({ worker: g })
                              .renderSVGElement(L)
                              .then(function (k) {
                                f.innerHTML = k.outerHTML;
                              })
                              .catch(function (k) {
                                (f.innerHTML = 'graphviz render error: <br>' + k),
                                  (f.className = 'vditor-reset--error');
                              });
                          } catch (k) {}
                          f.setAttribute('data-processed', 'true');
                        }
                      });
                    },
                  );
              };
          },
          702: (P, M, h) => {
            h.d(M, { s: () => y });
            var u = h(54),
              d = h(526),
              l = h(578),
              y = function (c, s, p) {
                s === void 0 && (s = document), p === void 0 && (p = u.g.CDN);
                var f = c.style;
                u.g.CODE_THEME.includes(f) || (f = 'github');
                var L = document.getElementById('vditorHljsStyle'),
                  w = p + '/dist/js/highlight.js/styles/' + f + '.css';
                L && L.getAttribute('href') !== w && L.remove(),
                  (0, l.c)(p + '/dist/js/highlight.js/styles/' + f + '.css', 'vditorHljsStyle'),
                  c.enable !== !1 &&
                    s.querySelectorAll('pre > code').length !== 0 &&
                    (0, d.G)(
                      p + '/dist/js/highlight.js/highlight.pack.js',
                      'vditorHljsScript',
                    ).then(function () {
                      (0, d.G)(
                        p + '/dist/js/highlight.js/solidity.min.js',
                        'vditorHljsSolidityScript',
                      ).then(function () {
                        (0, d.G)(
                          p + '/dist/js/highlight.js/yul.min.js',
                          'vditorHljsYulScript',
                        ).then(function () {
                          s.querySelectorAll('pre > code').forEach(function (T) {
                            if (
                              !T.parentElement.classList.contains('vditor-ir__marker--pre') &&
                              !T.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                              !(
                                T.classList.contains('language-mermaid') ||
                                T.classList.contains('language-flowchart') ||
                                T.classList.contains('language-echarts') ||
                                T.classList.contains('language-mindmap') ||
                                T.classList.contains('language-plantuml') ||
                                T.classList.contains('language-abc') ||
                                T.classList.contains('language-graphviz') ||
                                T.classList.contains('language-math')
                              ) &&
                              (c.defaultLang !== '' &&
                                T.className.indexOf('language-') === -1 &&
                                T.classList.add('language-' + c.defaultLang),
                              hljs.highlightElement(T),
                              c.lineNumber)
                            ) {
                              T.classList.add('vditor-linenumber');
                              var g = T.querySelector('.vditor-linenumber__temp');
                              g ||
                                (((g = document.createElement('div')).className =
                                  'vditor-linenumber__temp'),
                                T.insertAdjacentElement('beforeend', g));
                              var k = getComputedStyle(T).whiteSpace,
                                m = !1;
                              (k !== 'pre-wrap' && k !== 'pre-line') || (m = !0);
                              var _ = '',
                                D = T.textContent.split(/\r\n|\r|\n/g);
                              D.pop(),
                                D.map(function (I) {
                                  var x = '';
                                  m &&
                                    ((g.textContent =
                                      I ||
                                      `
`),
                                    (x =
                                      ' style="height:' +
                                      g.getBoundingClientRect().height +
                                      'px"')),
                                    (_ += '<span' + x + '></span>');
                                }),
                                (g.style.display = 'none'),
                                (_ = '<span class="vditor-linenumber__rows">' + _ + '</span>'),
                                T.insertAdjacentHTML('beforeend', _);
                            }
                          });
                        });
                      });
                    });
              };
          },
          563: (P, M, h) => {
            h.d(M, { K: () => s });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = {},
              c = function (p, f) {
                var L = window.markmap,
                  w = L.Transformer,
                  T = L.Markmap,
                  g = L.deriveOptions,
                  k = (L.globalCSS, new w());
                p.innerHTML = '<svg style="width:100%"></svg>';
                var m = p.firstChild,
                  _ = T.create(m, null),
                  D = (function (ie, me) {
                    var fe = ie.transform(me),
                      de = Object.keys(fe.features).filter(function (be) {
                        return !y[be];
                      });
                    de.forEach(function (be) {
                      y[be] = !0;
                    });
                    var ve = ie.getAssets(de),
                      Te = ve.styles,
                      Se = ve.scripts,
                      Ie = window.markmap;
                    return Te && Ie.loadCSS(Te), Se && Ie.loadJS(Se), fe;
                  })(k, f),
                  I = D.root,
                  x = D.frontmatter,
                  V = g(x == null ? void 0 : x.markmap);
                _.setData(I, V), _.fit();
              },
              s = function (p, f, L) {
                f === void 0 && (f = u.g.CDN);
                var w = l.markmapRenderAdapter.getElements(p);
                w.length !== 0 &&
                  (0, d.G)(f + '/dist/js/markmap/markmap.min.js', 'vditorMermaidScript').then(
                    function () {
                      w.forEach(function (T) {
                        var g = l.markmapRenderAdapter.getCode(T);
                        if (T.getAttribute('data-processed') !== 'true' && g.trim() !== '') {
                          var k = document.createElement('div');
                          (k.className = 'language-markmap'),
                            T.parentNode.appendChild(k),
                            c(k, g),
                            T.parentNode.childNodes[0].nodeName == 'CODE' &&
                              T.parentNode.removeChild(T.parentNode.childNodes[0]);
                        }
                      });
                    },
                  );
              };
          },
          466: (P, M, h) => {
            h.d(M, { H: () => s });
            var u = h(54),
              d = h(526),
              l = h(578),
              y = h(51),
              c = h(156),
              s = function (p, f) {
                var L = c.mathRenderAdapter.getElements(p);
                if (L.length !== 0) {
                  var w = { cdn: u.g.CDN, math: { engine: 'KaTeX', inlineDigit: !1, macros: {} } };
                  if (
                    (f && f.math && (f.math = Object.assign({}, w.math, f.math)),
                    (f = Object.assign({}, w, f)).math.engine === 'KaTeX')
                  )
                    (0, l.c)(f.cdn + '/dist/js/katex/katex.min.css?v=0.16.9', 'vditorKatexStyle'),
                      (0, d.G)(
                        f.cdn + '/dist/js/katex/katex.min.js?v=0.16.9',
                        'vditorKatexScript',
                      ).then(function () {
                        (0, d.G)(
                          f.cdn + '/dist/js/katex/mhchem.min.js?v=0.16.9',
                          'vditorKatexChemScript',
                        ).then(function () {
                          L.forEach(function (g) {
                            if (
                              !g.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                              !g.parentElement.classList.contains('vditor-ir__marker--pre') &&
                              !g.getAttribute('data-math')
                            ) {
                              var k = (0, y.X)(c.mathRenderAdapter.getCode(g));
                              g.setAttribute('data-math', k);
                              try {
                                g.innerHTML = katex.renderToString(k, {
                                  displayMode: g.tagName === 'DIV',
                                  output: 'html',
                                  macros: f.math.macros,
                                });
                              } catch (m) {
                                (g.innerHTML = m.message),
                                  (g.className = 'language-math vditor-reset--error');
                              }
                              g.addEventListener('copy', function (m) {
                                m.stopPropagation(), m.preventDefault();
                                var _ = m.currentTarget.closest('.language-math');
                                m.clipboardData.setData('text/html', _.innerHTML),
                                  m.clipboardData.setData(
                                    'text/plain',
                                    _.getAttribute('data-math'),
                                  );
                              });
                            }
                          });
                        });
                      });
                  else if (f.math.engine === 'MathJax') {
                    window.MathJax ||
                      ((window.MathJax = {
                        loader: { paths: { mathjax: f.cdn + '/dist/js/mathjax' } },
                        startup: { typeset: !1 },
                        tex: { macros: f.math.macros },
                      }),
                      Object.assign(window.MathJax, f.math.mathJaxOptions)),
                      (0, d.J)(f.cdn + '/dist/js/mathjax/tex-svg-full.js', 'protyleMathJaxScript');
                    var T = function (g, k) {
                      var m = (0, y.X)(g.textContent).trim(),
                        _ = window.MathJax.getMetricsFor(g);
                      (_.display = g.tagName === 'DIV'),
                        window.MathJax.tex2svgPromise(m, _).then(function (D) {
                          (g.innerHTML = ''),
                            g.setAttribute('data-math', m),
                            g.append(D),
                            window.MathJax.startup.document.clear(),
                            window.MathJax.startup.document.updateDocument();
                          var I = D.querySelector('[data-mml-node="merror"]');
                          I &&
                            I.textContent.trim() !== '' &&
                            ((g.innerHTML = I.textContent.trim()),
                            (g.className = 'vditor-reset--error')),
                            k && k();
                        });
                    };
                    window.MathJax.startup.promise.then(function () {
                      for (
                        var g = [],
                          k = function (_) {
                            var D = L[_];
                            D.parentElement.classList.contains('vditor-wysiwyg__pre') ||
                              D.parentElement.classList.contains('vditor-ir__marker--pre') ||
                              D.getAttribute('data-math') ||
                              !(0, y.X)(D.textContent).trim() ||
                              g.push(function (I) {
                                _ === L.length - 1 ? T(D) : T(D, I);
                              });
                          },
                          m = 0;
                        m < L.length;
                        m++
                      )
                        k(m);
                      (function (_) {
                        if (_.length !== 0) {
                          var D = 0,
                            I = _[_.length - 1],
                            x = function () {
                              var V = _[D++];
                              V === I ? V() : V(x);
                            };
                          x();
                        }
                      })(g);
                    });
                  }
                }
              };
          },
          554: (P, M, h) => {
            h.d(M, { Y: () => d });
            var u = h(835),
              d = function (l) {
                l &&
                  l.querySelectorAll('a').forEach(function (y) {
                    var c = y.getAttribute('href');
                    c &&
                      (c.match(/^.+.(mp4|m4v|ogg|ogv|webm)$/)
                        ? (function (s, p) {
                            s.insertAdjacentHTML(
                              'afterend',
                              '<video controls="controls" src="' + p + '"></video>',
                            ),
                              s.remove();
                          })(y, c)
                        : c.match(/^.+.(mp3|wav|flac)$/)
                          ? (function (s, p) {
                              s.insertAdjacentHTML(
                                'afterend',
                                '<audio controls="controls" src="' + p + '"></audio>',
                              ),
                                s.remove();
                            })(y, c)
                          : (function (s, p) {
                              var f = p.match(
                                  /\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?/,
                                ),
                                L = p.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                                w = p.match(/\/\/v\.qq\.com\/x\/cover\/.*\/([^\/]+)\.html\??.*/),
                                T = p.match(/(?:www\.|\/\/)coub\.com\/view\/(\w+)/),
                                g = p.match(
                                  /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/,
                                ),
                                k = p.match(/.+dailymotion.com\/(video|hub)\/(\w+)\?/),
                                m = p.match(/(?:www\.|\/\/)bilibili\.com\/video\/(\w+)/),
                                _ = p.match(/(?:www\.|\/\/)ted\.com\/talks\/(\w+)/);
                              if (f && f[1].length === 11)
                                s.insertAdjacentHTML(
                                  'afterend',
                                  '<iframe class="iframe__video" src="//www.youtube.com/embed/' +
                                    f[1] +
                                    (f[2] ? '?start=' + f[2] : '') +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (L && L[1])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  '<iframe class="iframe__video" src="//player.youku.com/embed/' +
                                    L[1] +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (w && w[1])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  '<iframe class="iframe__video" src="https://v.qq.com/txp/iframe/player.html?vid=' +
                                    w[1] +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (T && T[1])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  `<iframe class="iframe__video"
 src="//coub.com/embed/` +
                                    T[1] +
                                    '?muted=false&autostart=false&originalSize=true&startWithHD=true"></iframe>',
                                ),
                                  s.remove();
                              else if (g && g[0])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  `<iframe class="iframe__video"
 src="https://www.facebook.com/plugins/video.php?href=` +
                                    encodeURIComponent(g[0]) +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (k && k[2])
                                s.insertAdjacentHTML(
                                  'afterend',
                                  `<iframe class="iframe__video"
 src="https://www.dailymotion.com/embed/video/` +
                                    k[2] +
                                    '"></iframe>',
                                ),
                                  s.remove();
                              else if (
                                p.indexOf('bilibili.com') > -1 &&
                                (p.indexOf('bvid=') > -1 || (m && m[1]))
                              ) {
                                var D = {
                                  bvid: (0, u.o)('bvid', p) || (m && m[1]),
                                  page: '1',
                                  high_quality: '1',
                                  as_wide: '1',
                                  allowfullscreen: 'true',
                                  autoplay: '0',
                                };
                                new URL(p.startsWith('http') ? p : 'https:' + p).search
                                  .split('&')
                                  .forEach(function (V, ie) {
                                    if (V) {
                                      ie === 0 && (V = V.substr(1));
                                      var me = V.split('=');
                                      D[me[0]] = me[1];
                                    }
                                  });
                                var I = 'https://player.bilibili.com/player.html?',
                                  x = Object.keys(D);
                                x.forEach(function (V, ie) {
                                  (I += V + '=' + D[V]), ie < x.length - 1 && (I += '&');
                                }),
                                  s.insertAdjacentHTML(
                                    'afterend',
                                    '<iframe class="iframe__video" src="' + I + '"></iframe>',
                                  ),
                                  s.remove();
                              } else
                                _ &&
                                  _[1] &&
                                  (s.insertAdjacentHTML(
                                    'afterend',
                                    '<iframe class="iframe__video" src="//embed.ted.com/talks/' +
                                      _[1] +
                                      '"></iframe>',
                                  ),
                                  s.remove());
                            })(y, c));
                  });
              };
          },
          40: (P, M, h) => {
            h.d(M, { i: () => p });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = h(835),
              c = function (f, L, w, T) {
                return new (w || (w = Promise))(function (g, k) {
                  function m(I) {
                    try {
                      D(T.next(I));
                    } catch (x) {
                      k(x);
                    }
                  }
                  function _(I) {
                    try {
                      D(T.throw(I));
                    } catch (x) {
                      k(x);
                    }
                  }
                  function D(I) {
                    var x;
                    I.done
                      ? g(I.value)
                      : ((x = I.value),
                        x instanceof w
                          ? x
                          : new w(function (V) {
                              V(x);
                            })).then(m, _);
                  }
                  D((T = T.apply(f, L || [])).next());
                });
              },
              s = function (f, L) {
                var w,
                  T,
                  g,
                  k,
                  m = {
                    label: 0,
                    sent: function () {
                      if (1 & g[0]) throw g[1];
                      return g[1];
                    },
                    trys: [],
                    ops: [],
                  };
                return (
                  (k = { next: _(0), throw: _(1), return: _(2) }),
                  typeof Symbol == 'function' &&
                    (k[Symbol.iterator] = function () {
                      return this;
                    }),
                  k
                );
                function _(D) {
                  return function (I) {
                    return (function (x) {
                      if (w) throw new TypeError('Generator is already executing.');
                      for (; m; )
                        try {
                          if (
                            ((w = 1),
                            T &&
                              (g =
                                2 & x[0]
                                  ? T.return
                                  : x[0]
                                    ? T.throw || ((g = T.return) && g.call(T), 0)
                                    : T.next) &&
                              !(g = g.call(T, x[1])).done)
                          )
                            return g;
                          switch (((T = 0), g && (x = [2 & x[0], g.value]), x[0])) {
                            case 0:
                            case 1:
                              g = x;
                              break;
                            case 4:
                              return m.label++, { value: x[1], done: !1 };
                            case 5:
                              m.label++, (T = x[1]), (x = [0]);
                              continue;
                            case 7:
                              (x = m.ops.pop()), m.trys.pop();
                              continue;
                            default:
                              if (
                                ((g = m.trys),
                                !(
                                  (g = g.length > 0 && g[g.length - 1]) ||
                                  (x[0] !== 6 && x[0] !== 2)
                                ))
                              ) {
                                m = 0;
                                continue;
                              }
                              if (x[0] === 3 && (!g || (x[1] > g[0] && x[1] < g[3]))) {
                                m.label = x[1];
                                break;
                              }
                              if (x[0] === 6 && m.label < g[1]) {
                                (m.label = g[1]), (g = x);
                                break;
                              }
                              if (g && m.label < g[2]) {
                                (m.label = g[2]), m.ops.push(x);
                                break;
                              }
                              g[2] && m.ops.pop(), m.trys.pop();
                              continue;
                          }
                          x = L.call(f, m);
                        } catch (V) {
                          (x = [6, V]), (T = 0);
                        } finally {
                          w = g = 0;
                        }
                      if (5 & x[0]) throw x[1];
                      return { value: x[0] ? x[1] : void 0, done: !0 };
                    })([D, I]);
                  };
                }
              },
              p = function (f, L, w) {
                L === void 0 && (L = u.g.CDN);
                var T = l.mermaidRenderAdapter.getElements(f);
                T.length !== 0 &&
                  (0, d.G)(L + '/dist/js/mermaid/mermaid.min.js', 'vditorMermaidScript').then(
                    function () {
                      var g = {
                        securityLevel: 'loose',
                        altFontFamily: 'sans-serif',
                        fontFamily: 'sans-serif',
                        startOnLoad: !1,
                        flowchart: { htmlLabels: !0, useMaxWidth: !0 },
                        sequence: {
                          useMaxWidth: !0,
                          diagramMarginX: 8,
                          diagramMarginY: 8,
                          boxMargin: 8,
                          showSequenceNumbers: !0,
                        },
                        gantt: { leftPadding: 75, rightPadding: 20 },
                      };
                      w === 'dark' && (g.theme = 'dark'),
                        mermaid.initialize(g),
                        T.forEach(function (k) {
                          return c(void 0, void 0, void 0, function () {
                            var m, _, D, I, x;
                            return s(this, function (V) {
                              switch (V.label) {
                                case 0:
                                  if (
                                    ((m = l.mermaidRenderAdapter.getCode(k)),
                                    k.getAttribute('data-processed') === 'true' || m.trim() === '')
                                  )
                                    return [2];
                                  (_ = 'mermaid' + (0, y.W)()), (V.label = 1);
                                case 1:
                                  return (
                                    V.trys.push([1, 3, , 4]), [4, mermaid.render(_, k.textContent)]
                                  );
                                case 2:
                                  return (D = V.sent()), (k.innerHTML = D.svg), [3, 4];
                                case 3:
                                  return (
                                    (I = V.sent()),
                                    (x = document.querySelector('#' + _)),
                                    (k.innerHTML =
                                      x.outerHTML +
                                      `<br>
<div style="text-align: left"><small>` +
                                      I.message.replace(/\n/, '<br>') +
                                      '</small></div>'),
                                    x.parentElement.remove(),
                                    [3, 4]
                                  );
                                case 4:
                                  return k.setAttribute('data-processed', 'true'), [2];
                              }
                            });
                          });
                        });
                    },
                  );
              };
          },
          749: (P, M, h) => {
            h.d(M, { P: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s, p) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var f = l.mindmapRenderAdapter.getElements(c);
                f.length > 0 &&
                  (0, d.G)(s + '/dist/js/echarts/echarts.min.js', 'vditorEchartsScript').then(
                    function () {
                      f.forEach(function (L) {
                        if (
                          !L.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                          !L.parentElement.classList.contains('vditor-ir__marker--pre')
                        ) {
                          var w = l.mindmapRenderAdapter.getCode(L);
                          if (w)
                            try {
                              if (L.getAttribute('data-processed') === 'true') return;
                              echarts.init(L, p === 'dark' ? 'dark' : void 0).setOption({
                                series: [
                                  {
                                    data: [JSON.parse(decodeURIComponent(w))],
                                    initialTreeDepth: -1,
                                    itemStyle: { borderWidth: 0, color: '#4285f4' },
                                    label: {
                                      backgroundColor: '#f6f8fa',
                                      borderColor: '#d1d5da',
                                      borderRadius: 5,
                                      borderWidth: 0.5,
                                      color: '#586069',
                                      lineHeight: 20,
                                      offset: [-5, 0],
                                      padding: [0, 5],
                                      position: 'insideRight',
                                    },
                                    lineStyle: { color: '#d1d5da', width: 1 },
                                    roam: !0,
                                    symbol: function (T, g) {
                                      var k;
                                      return !(
                                        (k = g == null ? void 0 : g.data) === null || k === void 0
                                      ) && k.children
                                        ? 'circle'
                                        : 'path://';
                                    },
                                    type: 'tree',
                                  },
                                ],
                                tooltip: { trigger: 'item', triggerOn: 'mousemove' },
                              }),
                                L.setAttribute('data-processed', 'true');
                            } catch (T) {
                              (L.className = 'vditor-reset--error'),
                                (L.innerHTML = 'mindmap render error: <br>' + T);
                            }
                        }
                      });
                    },
                  );
              };
          },
          818: (P, M, h) => {
            h.d(M, { k: () => l });
            var u = h(64),
              d = h(466),
              l = function (y, c, s) {
                var p = '',
                  f = [];
                if (
                  (Array.from(y.children).forEach(function (g, k) {
                    if ((0, u.W)(g)) {
                      if (s) {
                        var m = g.id.lastIndexOf('_');
                        g.id = g.id.substring(0, m === -1 ? void 0 : m) + '_' + k;
                      }
                      f.push(g.id), (p += g.outerHTML.replace('<wbr>', ''));
                    }
                  }),
                  p === '')
                )
                  return (c.innerHTML = ''), '';
                var L = document.createElement('div');
                if (s)
                  s.lute.SetToC(!0),
                    s.currentMode !== 'wysiwyg' || s.preview.element.contains(y)
                      ? s.currentMode !== 'ir' || s.preview.element.contains(y)
                        ? (L.innerHTML = s.lute.HTML2VditorDOM('<p>[ToC]</p>' + p))
                        : (L.innerHTML = s.lute.SpinVditorIRDOM('<p>[ToC]</p>' + p))
                      : (L.innerHTML = s.lute.SpinVditorDOM('<p>[ToC]</p>' + p)),
                    s.lute.SetToC(s.options.preview.markdown.toc);
                else {
                  c.classList.add('vditor-outline');
                  var w = Lute.New();
                  w.SetToC(!0), (L.innerHTML = w.HTML2VditorDOM('<p>[ToC]</p>' + p));
                }
                var T = L.firstElementChild.querySelectorAll('li > span[data-target-id]');
                return (
                  T.forEach(function (g, k) {
                    if (g.nextElementSibling && g.nextElementSibling.tagName === 'UL') {
                      var m =
                        "<svg class='vditor-outline__action'><use xlink:href='#vditor-icon-down'></use></svg>";
                      document.getElementById('vditorIconScript') ||
                        (m =
                          '<svg class="vditor-outline__action" viewBox="0 0 32 32"><path d="M3.76 6.12l12.24 12.213 12.24-12.213 3.76 3.76-16 16-16-16 3.76-3.76z"></path></svg>'),
                        (g.innerHTML = m + '<span>' + g.innerHTML + '</span>');
                    } else g.innerHTML = '<svg></svg><span>' + g.innerHTML + '</span>';
                    g.setAttribute('data-target-id', f[k]);
                  }),
                  (p = L.firstElementChild.innerHTML),
                  T.length === 0
                    ? ((c.innerHTML = ''), p)
                    : ((c.innerHTML = p),
                      s && (0, d.H)(c, { cdn: s.options.cdn, math: s.options.preview.math }),
                      c.firstElementChild.addEventListener('click', function (g) {
                        for (var k = g.target; k && !k.isEqualNode(c); ) {
                          if (k.classList.contains('vditor-outline__action')) {
                            k.classList.contains('vditor-outline__action--close')
                              ? (k.classList.remove('vditor-outline__action--close'),
                                k.parentElement.nextElementSibling.setAttribute(
                                  'style',
                                  'display:block',
                                ))
                              : (k.classList.add('vditor-outline__action--close'),
                                k.parentElement.nextElementSibling.setAttribute(
                                  'style',
                                  'display:none',
                                )),
                              g.preventDefault(),
                              g.stopPropagation();
                            break;
                          }
                          if (k.getAttribute('data-target-id')) {
                            g.preventDefault(), g.stopPropagation();
                            var m = document.getElementById(k.getAttribute('data-target-id'));
                            if (!m) return;
                            if (s)
                              if (s.options.height === 'auto') {
                                var _ = m.offsetTop + s.element.offsetTop;
                                s.options.toolbarConfig.pin ||
                                  (_ += s.toolbar.element.offsetHeight),
                                  window.scrollTo(window.scrollX, _);
                              } else
                                s.element.offsetTop < window.scrollY &&
                                  window.scrollTo(window.scrollX, s.element.offsetTop),
                                  s.preview.element.contains(y)
                                    ? (y.parentElement.scrollTop = m.offsetTop)
                                    : (y.scrollTop = m.offsetTop);
                            else window.scrollTo(window.scrollX, m.offsetTop);
                            break;
                          }
                          k = k.parentElement;
                        }
                      }),
                      p)
                );
              };
          },
          408: (P, M, h) => {
            h.d(M, { B: () => y });
            var u = h(54),
              d = h(526),
              l = h(156),
              y = function (c, s) {
                c === void 0 && (c = document), s === void 0 && (s = u.g.CDN);
                var p = l.plantumlRenderAdapter.getElements(c);
                p.length !== 0 &&
                  (0, d.G)(
                    s + '/dist/js/plantuml/plantuml-encoder.min.js',
                    'vditorPlantumlScript',
                  ).then(function () {
                    p.forEach(function (f) {
                      if (
                        !f.parentElement.classList.contains('vditor-wysiwyg__pre') &&
                        !f.parentElement.classList.contains('vditor-ir__marker--pre')
                      ) {
                        var L = l.plantumlRenderAdapter.getCode(f).trim();
                        if (L)
                          try {
                            f.innerHTML =
                              '<object type="image/svg+xml" data="https://www.plantuml.com/plantuml/svg/~1' +
                              plantumlEncoder.encode(L) +
                              '"/>';
                          } catch (w) {
                            (f.className = 'vditor-reset--error'),
                              (f.innerHTML = 'plantuml render error: <br>' + w);
                          }
                      }
                    });
                  });
              };
          },
          895: (P, M, h) => {
            h.d(M, { X: () => u });
            var u = function (d) {
              var l = Lute.New();
              return (
                l.PutEmojis(d.emojis),
                l.SetEmojiSite(d.emojiSite),
                l.SetHeadingAnchor(d.headingAnchor),
                l.SetInlineMathAllowDigitAfterOpenMarker(d.inlineMathDigit),
                l.SetAutoSpace(d.autoSpace),
                l.SetToC(d.toc),
                l.SetFootnotes(d.footnotes),
                l.SetFixTermTypo(d.fixTermTypo),
                l.SetVditorCodeBlockPreview(d.codeBlockPreview),
                l.SetVditorMathBlockPreview(d.mathBlockPreview),
                l.SetSanitize(d.sanitize),
                l.SetChineseParagraphBeginningSpace(d.paragraphBeginningSpace),
                l.SetRenderListStyle(d.listStyle),
                l.SetLinkBase(d.linkBase),
                l.SetLinkPrefix(d.linkPrefix),
                l.SetMark(d.mark),
                l.SetGFMAutoLink(d.gfmAutoLink),
                d.lazyLoadImage && l.SetImageLazyLoading(d.lazyLoadImage),
                l
              );
            };
          },
          863: (P, M, h) => {
            h.d(M, { E: () => u });
            var u = function (d, l, y) {
              y === void 0 && (y = 'classic');
              var c = d.getBoundingClientRect();
              document.body.insertAdjacentHTML(
                'beforeend',
                '<div class="vditor vditor-img' +
                  (y === 'dark' ? ' vditor--dark' : '') +
                  `">
    <div class="vditor-img__bar">
      <span class="vditor-img__btn" data-deg="0">
        <svg><use xlink:href="#vditor-icon-redo"></use></svg>
        ` +
                  window.VditorI18n.spin +
                  `
      </span>
      <span class="vditor-img__btn"  onclick="this.parentElement.parentElement.outerHTML = '';document.body.style.overflow = ''">
        X &nbsp;` +
                  window.VditorI18n.close +
                  `
      </span>
    </div>
    <div class="vditor-img__img" onclick="this.parentElement.outerHTML = '';document.body.style.overflow = ''">
      <img style="width: ` +
                  d.width +
                  'px;height:' +
                  d.height +
                  'px;transform: translate3d(' +
                  c.left +
                  'px, ' +
                  (c.top - 36) +
                  'px, 0)" src="' +
                  d.getAttribute('src') +
                  `">
    </div>
</div>`,
              ),
                (document.body.style.overflow = 'hidden');
              var s = document.querySelector('.vditor-img img'),
                p =
                  'translate3d(' +
                  Math.max(0, window.innerWidth - d.naturalWidth) / 2 +
                  'px, ' +
                  Math.max(0, window.innerHeight - 36 - d.naturalHeight) / 2 +
                  'px, 0)';
              setTimeout(function () {
                s.setAttribute('style', 'transition: transform .3s ease-in-out;transform: ' + p),
                  setTimeout(function () {
                    s.parentElement.scrollTo(
                      (s.parentElement.scrollWidth - s.parentElement.clientWidth) / 2,
                      (s.parentElement.scrollHeight - s.parentElement.clientHeight) / 2,
                    );
                  }, 400);
              });
              var f = document.querySelector('.vditor-img__btn');
              f.addEventListener('click', function () {
                var L = parseInt(f.getAttribute('data-deg'), 10) + 90;
                (L / 90) % 2 == 1 && d.naturalWidth > s.parentElement.clientHeight
                  ? (s.style.transform =
                      'translate3d(' +
                      Math.max(0, window.innerWidth - d.naturalWidth) / 2 +
                      'px, ' +
                      (d.naturalWidth / 2 - d.naturalHeight / 2) +
                      'px, 0) rotateZ(' +
                      L +
                      'deg)')
                  : (s.style.transform = p + ' rotateZ(' + L + 'deg)'),
                  f.setAttribute('data-deg', L.toString()),
                  setTimeout(function () {
                    s.parentElement.scrollTo(
                      (s.parentElement.scrollWidth - s.parentElement.clientWidth) / 2,
                      (s.parentElement.scrollHeight - s.parentElement.clientHeight) / 2,
                    );
                  }, 400);
              });
            };
          },
          312: (P, M, h) => {
            h.d(M, { Y: () => l });
            var u = h(54),
              d = h(578),
              l = function (y, c) {
                c === void 0 && (c = u.g.CDN), u.g.CODE_THEME.includes(y) || (y = 'github');
                var s = document.getElementById('vditorHljsStyle'),
                  p = c + '/dist/js/highlight.js/styles/' + y + '.css';
                s
                  ? s.getAttribute('href') !== p && (s.remove(), (0, d.c)(p, 'vditorHljsStyle'))
                  : (0, d.c)(p, 'vditorHljsStyle');
              };
          },
          227: (P, M, h) => {
            h.d(M, { Z: () => d });
            var u = h(578),
              d = function (l, y) {
                if (l && y) {
                  var c = document.getElementById('vditorContentTheme'),
                    s = y + '/' + l + '.css';
                  c
                    ? c.getAttribute('href') !== s &&
                      (c.remove(), (0, u.c)(s, 'vditorContentTheme'))
                    : (0, u.c)(s, 'vditorContentTheme');
                }
              };
          },
          526: (P, M, h) => {
            h.d(M, { G: () => d, J: () => u });
            var u = function (l, y) {
                if (document.getElementById(y)) return !1;
                var c = new XMLHttpRequest();
                c.open('GET', l, !1),
                  c.setRequestHeader(
                    'Accept',
                    'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01',
                  ),
                  c.send('');
                var s = document.createElement('script');
                (s.type = 'text/javascript'),
                  (s.text = c.responseText),
                  (s.id = y),
                  document.head.appendChild(s);
              },
              d = function (l, y) {
                return new Promise(function (c, s) {
                  if (document.getElementById(y)) return c(), !1;
                  var p = document.createElement('script');
                  (p.src = l),
                    (p.async = !0),
                    document.head.appendChild(p),
                    (p.onerror = function (f) {
                      s(f);
                    }),
                    (p.onload = function () {
                      if (document.getElementById(y)) return p.remove(), c(), !1;
                      (p.id = y), c();
                    });
                });
              };
          },
          578: (P, M, h) => {
            h.d(M, { c: () => u });
            var u = function (d, l) {
              if (!document.getElementById(l)) {
                var y = document.createElement('link');
                (y.id = l),
                  (y.rel = 'stylesheet'),
                  (y.type = 'text/css'),
                  (y.href = d),
                  document.getElementsByTagName('head')[0].appendChild(y);
              }
            };
          },
          51: (P, M, h) => {
            h.d(M, { X: () => u });
            var u = function (d) {
              return d.replace(/\u00a0/g, ' ');
            };
          },
          835: (P, M, h) => {
            h.d(M, { W: () => u, o: () => d });
            var u = function () {
                return ([1e7].toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(
                  /[018]/g,
                  function (l) {
                    return (
                      parseInt(l, 10) ^
                      (window.crypto.getRandomValues(new Uint32Array(1))[0] &
                        (15 >> (parseInt(l, 10) / 4)))
                    ).toString(16);
                  },
                );
              },
              d = function (l, y) {
                y === void 0 && (y = window.location.search);
                var c = y.substring(y.indexOf('?')),
                  s = c.indexOf('#');
                return new URLSearchParams(c.substring(0, s >= 0 ? s : void 0)).get(l);
              };
          },
          827: (P, M, h) => {
            h.d(M, { fb: () => d, lG: () => u });
            var u = function (l, y) {
                if (!l) return !1;
                l.nodeType === 3 && (l = l.parentElement);
                for (var c = l, s = !1; c && !s && !c.classList.contains('vditor-reset'); )
                  c.nodeName === y ? (s = !0) : (c = c.parentElement);
                return s && c;
              },
              d = function (l, y) {
                if (!l) return !1;
                l.nodeType === 3 && (l = l.parentElement);
                for (var c = l, s = !1; c && !s && !c.classList.contains('vditor-reset'); )
                  c.classList.contains(y) ? (s = !0) : (c = c.parentElement);
                return s && c;
              };
          },
          64: (P, M, h) => {
            h.d(M, { W: () => u });
            var u = function (d) {
              var l = (function (y, c) {
                if (!y) return !1;
                y.nodeType === 3 && (y = y.parentElement);
                for (var s = y, p = !1; s && !p && !s.classList.contains('vditor-reset'); )
                  s.nodeName.indexOf(c) === 0 ? (p = !0) : (s = s.parentElement);
                return p && s;
              })(d, 'H');
              return !(!l || l.tagName.length !== 2 || l.tagName === 'HR') && l;
            };
          },
          640: (P, M, h) => {
            h.d(M, { T: () => u });
            var u = function () {
              for (var d = [], l = 0; l < arguments.length; l++) d[l] = arguments[l];
              for (
                var y = {},
                  c = function (p) {
                    for (var f in p)
                      p.hasOwnProperty(f) &&
                        (Object.prototype.toString.call(p[f]) === '[object Object]'
                          ? (y[f] = u(y[f], p[f]))
                          : (y[f] = p[f]));
                  },
                  s = 0;
                s < d.length;
                s++
              )
                c(d[s]);
              return y;
            };
          },
          393: (P, M, h) => {
            h.d(M, { Hc: () => u }), h(54);
            var u = function (d) {
              var l = window.getSelection();
              l.removeAllRanges(), l.addRange(d);
            };
          },
        },
        He = {};
      function J(P) {
        var M = He[P];
        if (M !== void 0) return M.exports;
        var h = (He[P] = { exports: {} });
        return ye[P](h, h.exports, J), h.exports;
      }
      (J.d = (P, M) => {
        for (var h in M)
          J.o(M, h) && !J.o(P, h) && Object.defineProperty(P, h, { enumerable: !0, get: M[h] });
      }),
        (J.o = (P, M) => Object.prototype.hasOwnProperty.call(P, M)),
        (J.r = (P) => {
          typeof Symbol != 'undefined' &&
            Symbol.toStringTag &&
            Object.defineProperty(P, Symbol.toStringTag, { value: 'Module' }),
            Object.defineProperty(P, '__esModule', { value: !0 });
        });
      var De = {};
      return (
        (() => {
          J.d(De, { default: () => be });
          var P = J(478),
            M = J(156),
            h = J(314),
            u = J(730),
            d = J(66),
            l = J(218),
            y = J(702),
            c = function (A) {
              A === void 0 && (A = document);
              var ge = function (ee) {
                var N = document.createElement('img');
                (N.src = ee.getAttribute('data-src')),
                  N.addEventListener('load', function () {
                    ee.getAttribute('style') ||
                      ee.getAttribute('class') ||
                      ee.getAttribute('width') ||
                      ee.getAttribute('height') ||
                      (N.naturalHeight > N.naturalWidth &&
                        N.naturalWidth / N.naturalHeight <
                          document.querySelector('.vditor-reset').clientWidth /
                            (window.innerHeight - 40) &&
                        N.naturalHeight > window.innerHeight - 40 &&
                        (ee.style.height = window.innerHeight - 40 + 'px')),
                      (ee.src = N.src);
                  }),
                  ee.removeAttribute('data-src');
              };
              if (!('IntersectionObserver' in window))
                return (
                  A.querySelectorAll('img').forEach(function (ee) {
                    ee.getAttribute('data-src') && ge(ee);
                  }),
                  !1
                );
              window.vditorImageIntersectionObserver
                ? (window.vditorImageIntersectionObserver.disconnect(),
                  A.querySelectorAll('img').forEach(function (ee) {
                    window.vditorImageIntersectionObserver.observe(ee);
                  }))
                : ((window.vditorImageIntersectionObserver = new IntersectionObserver(function (
                    ee,
                  ) {
                    ee.forEach(function (N) {
                      (N.isIntersecting === void 0
                        ? N.intersectionRatio !== 0
                        : N.isIntersecting) &&
                        N.target.getAttribute('data-src') &&
                        ge(N.target);
                    });
                  })),
                  A.querySelectorAll('img').forEach(function (ee) {
                    window.vditorImageIntersectionObserver.observe(ee);
                  }));
            },
            s = J(466),
            p = J(554),
            f = J(40),
            L = J(563),
            w = J(749),
            T = J(818),
            g = J(408),
            k = J(54),
            m = J(227),
            _ = J(526),
            D = J(827),
            I = J(640),
            x = J(895),
            V = J(393),
            ie = function (A, ge) {
              if (
                (ge === void 0 && (ge = 'zh_CN'),
                typeof speechSynthesis != 'undefined' &&
                  typeof SpeechSynthesisUtterance != 'undefined')
              ) {
                var ee = function () {
                    var $, te;
                    return (
                      speechSynthesis.getVoices().forEach(function (X) {
                        X.lang === ge.replace('_', '-') && ($ = X), X.default && (te = X);
                      }),
                      $ || ($ = te),
                      $
                    );
                  },
                  N = '<svg><use xlink:href="#vditor-icon-play"></use></svg>',
                  Z = '<svg><use xlink:href="#vditor-icon-pause"></use></svg>';
                document.getElementById('vditorIconScript') ||
                  ((N =
                    '<svg viewBox="0 0 32 32"><path d="M3.436 0l25.128 16-25.128 16v-32z"></path></svg>'),
                  (Z =
                    '<svg viewBox="0 0 32 32"><path d="M20.617 0h9.128v32h-9.128v-32zM2.255 32v-32h9.128v32h-9.128z"></path></svg>'));
                var j = document.querySelector('.vditor-speech');
                j ||
                  (((j = document.createElement('button')).className = 'vditor-speech'),
                  A.insertAdjacentElement('beforeend', j),
                  speechSynthesis.onvoiceschanged !== void 0 &&
                    (speechSynthesis.onvoiceschanged = ee));
                var O = ee(),
                  re = new SpeechSynthesisUtterance();
                (re.voice = O),
                  (re.onend = re.onerror =
                    function () {
                      (j.style.display = 'none'),
                        speechSynthesis.cancel(),
                        j.classList.remove('vditor-speech--current'),
                        (j.innerHTML = N);
                    }),
                  A.addEventListener(
                    window.ontouchstart !== void 0 ? 'touchend' : 'click',
                    function ($) {
                      var te = $.target;
                      if (
                        te.classList.contains('vditor-speech') ||
                        te.parentElement.classList.contains('vditor-speech')
                      )
                        return (
                          j.classList.contains('vditor-speech--current')
                            ? speechSynthesis.speaking &&
                              (speechSynthesis.paused
                                ? (speechSynthesis.resume(), (j.innerHTML = Z))
                                : (speechSynthesis.pause(), (j.innerHTML = N)))
                            : ((re.text = j.getAttribute('data-text')),
                              speechSynthesis.speak(re),
                              j.classList.add('vditor-speech--current'),
                              (j.innerHTML = Z)),
                          (0, V.Hc)(window.vditorSpeechRange),
                          void A.focus()
                        );
                      if (
                        ((j.style.display = 'none'),
                        speechSynthesis.cancel(),
                        j.classList.remove('vditor-speech--current'),
                        (j.innerHTML = N),
                        getSelection().rangeCount !== 0)
                      ) {
                        var X = getSelection().getRangeAt(0),
                          ue = X.toString().trim();
                        if (ue) {
                          window.vditorSpeechRange = X.cloneRange();
                          var he = X.getBoundingClientRect();
                          (j.innerHTML = N),
                            (j.style.display = 'block'),
                            (j.style.top =
                              he.top +
                              he.height +
                              document.querySelector('html').scrollTop -
                              20 +
                              'px'),
                            window.ontouchstart !== void 0
                              ? (j.style.left =
                                  $.changedTouches[$.changedTouches.length - 1].pageX + 2 + 'px')
                              : (j.style.left = $.clientX + 2 + 'px'),
                            j.setAttribute('data-text', ue);
                        }
                      }
                    },
                  );
              }
            },
            me = function (A, ge, ee, N) {
              return new (ee || (ee = Promise))(function (Z, j) {
                function O(te) {
                  try {
                    $(N.next(te));
                  } catch (X) {
                    j(X);
                  }
                }
                function re(te) {
                  try {
                    $(N.throw(te));
                  } catch (X) {
                    j(X);
                  }
                }
                function $(te) {
                  var X;
                  te.done
                    ? Z(te.value)
                    : ((X = te.value),
                      X instanceof ee
                        ? X
                        : new ee(function (ue) {
                            ue(X);
                          })).then(O, re);
                }
                $((N = N.apply(A, ge || [])).next());
              });
            },
            fe = function (A, ge) {
              var ee,
                N,
                Z,
                j,
                O = {
                  label: 0,
                  sent: function () {
                    if (1 & Z[0]) throw Z[1];
                    return Z[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (j = { next: re(0), throw: re(1), return: re(2) }),
                typeof Symbol == 'function' &&
                  (j[Symbol.iterator] = function () {
                    return this;
                  }),
                j
              );
              function re($) {
                return function (te) {
                  return (function (X) {
                    if (ee) throw new TypeError('Generator is already executing.');
                    for (; O; )
                      try {
                        if (
                          ((ee = 1),
                          N &&
                            (Z =
                              2 & X[0]
                                ? N.return
                                : X[0]
                                  ? N.throw || ((Z = N.return) && Z.call(N), 0)
                                  : N.next) &&
                            !(Z = Z.call(N, X[1])).done)
                        )
                          return Z;
                        switch (((N = 0), Z && (X = [2 & X[0], Z.value]), X[0])) {
                          case 0:
                          case 1:
                            Z = X;
                            break;
                          case 4:
                            return O.label++, { value: X[1], done: !1 };
                          case 5:
                            O.label++, (N = X[1]), (X = [0]);
                            continue;
                          case 7:
                            (X = O.ops.pop()), O.trys.pop();
                            continue;
                          default:
                            if (
                              ((Z = O.trys),
                              !(
                                (Z = Z.length > 0 && Z[Z.length - 1]) ||
                                (X[0] !== 6 && X[0] !== 2)
                              ))
                            ) {
                              O = 0;
                              continue;
                            }
                            if (X[0] === 3 && (!Z || (X[1] > Z[0] && X[1] < Z[3]))) {
                              O.label = X[1];
                              break;
                            }
                            if (X[0] === 6 && O.label < Z[1]) {
                              (O.label = Z[1]), (Z = X);
                              break;
                            }
                            if (Z && O.label < Z[2]) {
                              (O.label = Z[2]), O.ops.push(X);
                              break;
                            }
                            Z[2] && O.ops.pop(), O.trys.pop();
                            continue;
                        }
                        X = ge.call(A, O);
                      } catch (ue) {
                        (X = [6, ue]), (N = 0);
                      } finally {
                        ee = Z = 0;
                      }
                    if (5 & X[0]) throw X[1];
                    return { value: X[0] ? X[1] : void 0, done: !0 };
                  })([$, te]);
                };
              }
            },
            de = function (A) {
              var ge,
                ee = {
                  anchor: 0,
                  cdn: k.g.CDN,
                  customEmoji: {},
                  emojiPath: k.g.CDN + '/dist/images/emoji',
                  hljs: k.g.HLJS_OPTIONS,
                  icon: 'ant',
                  lang: 'zh_CN',
                  markdown: k.g.MARKDOWN_OPTIONS,
                  math: k.g.MATH_OPTIONS,
                  mode: 'light',
                  speech: { enable: !1 },
                  render: { media: { enable: !0 } },
                  theme: k.g.THEME_OPTIONS,
                };
              return (
                A.cdn &&
                  ((!((ge = A.theme) === null || ge === void 0) && ge.path) ||
                    (ee.theme.path = A.cdn + '/dist/css/content-theme'),
                  A.emojiPath || (ee.emojiPath = A.cdn + '/dist/images/emoji')),
                (0, I.T)(ee, A)
              );
            },
            ve = function (A, ge) {
              var ee = de(ge);
              return (0, _.G)(ee.cdn + '/dist/js/lute/lute.min.js', 'vditorLuteScript').then(
                function () {
                  var N = (0, x.X)({
                    autoSpace: ee.markdown.autoSpace,
                    gfmAutoLink: ee.markdown.gfmAutoLink,
                    codeBlockPreview: ee.markdown.codeBlockPreview,
                    emojiSite: ee.emojiPath,
                    emojis: ee.customEmoji,
                    fixTermTypo: ee.markdown.fixTermTypo,
                    footnotes: ee.markdown.footnotes,
                    headingAnchor: ee.anchor !== 0,
                    inlineMathDigit: ee.math.inlineDigit,
                    lazyLoadImage: ee.lazyLoadImage,
                    linkBase: ee.markdown.linkBase,
                    linkPrefix: ee.markdown.linkPrefix,
                    listStyle: ee.markdown.listStyle,
                    mark: ee.markdown.mark,
                    mathBlockPreview: ee.markdown.mathBlockPreview,
                    paragraphBeginningSpace: ee.markdown.paragraphBeginningSpace,
                    sanitize: ee.markdown.sanitize,
                    toc: ee.markdown.toc,
                  });
                  return (
                    ge != null &&
                      ge.renderers &&
                      N.SetJSRenderers({ renderers: { Md2HTML: ge.renderers } }),
                    N.SetHeadingID(!0),
                    N.Md2HTML(A)
                  );
                },
              );
            },
            Te = function (A, ge, ee) {
              return me(void 0, void 0, void 0, function () {
                var N, Z, j;
                return fe(this, function (O) {
                  switch (O.label) {
                    case 0:
                      return (N = de(ee)), [4, ve(ge, N)];
                    case 1:
                      if (
                        ((Z = O.sent()),
                        N.transform && (Z = N.transform(Z)),
                        (A.innerHTML = Z),
                        A.classList.add('vditor-reset'),
                        N.i18n)
                      )
                        return [3, 5];
                      if (
                        [
                          'en_US',
                          'fr_FR',
                          'pt_BR',
                          'ja_JP',
                          'ko_KR',
                          'ru_RU',
                          'sv_SE',
                          'zh_CN',
                          'zh_TW',
                        ].includes(N.lang)
                      )
                        return [3, 2];
                      throw new Error(
                        'options.lang error, see https://ld246.com/article/1549638745630#options',
                      );
                    case 2:
                      return (
                        (j = 'vditorI18nScript' + N.lang),
                        document
                          .querySelectorAll('head script[id^="vditorI18nScript"]')
                          .forEach(function ($) {
                            $.id !== j && document.head.removeChild($);
                          }),
                        [4, (0, _.G)(N.cdn + '/dist/js/i18n/' + N.lang + '.js', j)]
                      );
                    case 3:
                      O.sent(), (O.label = 4);
                    case 4:
                      return [3, 6];
                    case 5:
                      (window.VditorI18n = N.i18n), (O.label = 6);
                    case 6:
                      return N.icon
                        ? [
                            4,
                            (0, _.G)(
                              N.cdn + '/dist/js/icons/' + N.icon + '.js',
                              'vditorIconScript',
                            ),
                          ]
                        : [3, 8];
                    case 7:
                      O.sent(), (O.label = 8);
                    case 8:
                      return (
                        (0, m.Z)(N.theme.current, N.theme.path),
                        N.anchor === 1 && A.classList.add('vditor-reset--anchor'),
                        (0, u.O)(A, N.hljs),
                        (0, y.s)(N.hljs, A, N.cdn),
                        (0, s.H)(A, { cdn: N.cdn, math: N.math }),
                        (0, f.i)(A, N.cdn, N.mode),
                        (0, L.K)(A, N.cdn, N.mode),
                        (0, d.P)(A, N.cdn),
                        (0, l.v)(A, N.cdn),
                        (0, h.p)(A, N.cdn, N.mode),
                        (0, w.P)(A, N.cdn, N.mode),
                        (0, g.B)(A, N.cdn),
                        (0, P.Q)(A, N.cdn),
                        N.render.media.enable && (0, p.Y)(A),
                        N.speech.enable && ie(A),
                        N.anchor !== 0 &&
                          ((re = N.anchor),
                          document.querySelectorAll('.vditor-anchor').forEach(function ($) {
                            re === 1 && $.classList.add('vditor-anchor--left'),
                              ($.onclick = function () {
                                var te = $.getAttribute('href').substr(1),
                                  X = document.getElementById('vditorAnchor-' + te).offsetTop;
                                document.querySelector('html').scrollTop = X;
                              });
                          }),
                          (window.onhashchange = function () {
                            var $ = document.getElementById(
                              'vditorAnchor-' + decodeURIComponent(window.location.hash.substr(1)),
                            );
                            $ && (document.querySelector('html').scrollTop = $.offsetTop);
                          })),
                        N.after && N.after(),
                        N.lazyLoadImage && c(A),
                        A.addEventListener('click', function ($) {
                          var te = (0, D.lG)($.target, 'SPAN');
                          if (te && (0, D.fb)(te, 'vditor-toc')) {
                            var X = A.querySelector('#' + te.getAttribute('data-target-id'));
                            X && window.scrollTo(window.scrollX, X.offsetTop);
                          }
                        }),
                        [2]
                      );
                  }
                  var re;
                });
              });
            },
            Se = J(863),
            Ie = J(312);
          const be = (function () {
            function A() {}
            return (
              (A.adapterRender = M),
              (A.previewImage = Se.E),
              (A.codeRender = u.O),
              (A.graphvizRender = l.v),
              (A.highlightRender = y.s),
              (A.mathRender = s.H),
              (A.mermaidRender = f.i),
              (A.markmapRender = L.K),
              (A.flowchartRender = d.P),
              (A.chartRender = h.p),
              (A.abcRender = P.Q),
              (A.mindmapRender = w.P),
              (A.plantumlRender = g.B),
              (A.outlineRender = T.k),
              (A.mediaRender = p.Y),
              (A.speechRender = ie),
              (A.lazyLoadImageRender = c),
              (A.md2html = ve),
              (A.preview = Te),
              (A.setCodeTheme = Ie.Y),
              (A.setContentTheme = m.Z),
              A
            );
          })();
        })(),
        (De = De.default)
      );
    })(),
  );
})(Jn);
var Oi = Jn.exports;
const Gt = Bn(Oi),
  ji = Vn({
    __name: 'MarkdownViewer',
    props: { value: { type: String }, class: { type: String } },
    setup(Ce) {
      const Le = Ce,
        ye = st(null),
        He = st(null),
        { getDarkMode: J } = Rn();
      function De() {
        const M = lt(ye);
        He.value = Gt.preview(M, Le.value, {
          mode: Ue(J.value, 'content'),
          theme: { current: Ue(J.value, 'content') },
          hljs: { style: Ue(J.value, 'code') },
        });
      }
      At(
        () => J.value,
        (M) => {
          Gt.setContentTheme(Ue(M, 'content')), Gt.setCodeTheme(Ue(M, 'code')), De();
        },
      ),
        At(
          () => Le.value,
          (M, h) => {
            M !== h && De();
          },
        );
      function P() {
        var h;
        const M = lt(He);
        if (M) {
          try {
            (h = M == null ? void 0 : M.destroy) == null || h.call(M);
          } catch (u) {}
          He.value = null;
        }
      }
      return (
        Kn(De),
        Un(P),
        zn(P),
        (M, h) => (
          Wn(),
          Gn(
            'div',
            { ref_key: 'viewerRef', ref: ye, id: 'markdownViewer', class: xi(M.$props.class) },
            null,
            2,
          )
        )
      );
    },
  }),
  Ui = Pn(Di),
  zi = Pn(ji);
export { Ui as M, zi as a };
