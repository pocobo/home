var Cn = (r, e, t) =>
  new Promise((a, n) => {
    var i = (l) => {
        try {
          s(t.next(l));
        } catch (u) {
          n(u);
        }
      },
      o = (l) => {
        try {
          s(t.throw(l));
        } catch (u) {
          n(u);
        }
      },
      s = (l) => (l.done ? a(l.value) : Promise.resolve(l.value).then(i, o));
    s((t = t.apply(r, e)).next());
  });
import { _ as Vs } from '../index.js';
import {
  T as fo,
  m as Lt,
  B as dt,
  n as xe,
  i as nt,
  k as Ga,
  g as it,
  p as z,
  a as ks,
  f as At,
  s as Gs,
  b as Bs,
  h as zs,
  e as R,
  c as po,
  d as go,
  u as Mn,
  j as Os,
  l as Hs,
  r as $t,
  o as wt,
  q as It,
  t as ot,
  v as yo,
  w as de,
  _ as k,
  P as yt,
  G as rt,
  R as Ba,
  x as mr,
  V as za,
  y as mo,
  z as So,
  A as _o,
  C as ct,
  S as bo,
  D as fa,
  H as Fs,
  E as $s,
  F as xo,
  I as gt,
  J as Mt,
  K as ar,
  L as pa,
  M as et,
  N as Ws,
  O as U,
  Q as $,
  U as F,
  W as Sr,
  X as Oa,
  Y as bt,
  Z as St,
  $ as qt,
  a0 as Ot,
  a1 as ht,
  a2 as wo,
  a3 as Ce,
  a4 as Us,
  a5 as mt,
  a6 as Gt,
  a7 as Zs,
  a8 as Ys,
  a9 as Me,
  aa as Wt,
  ab as kt,
  ac as _r,
  ad as lt,
  ae as Xs,
  af as pe,
  ag as st,
  ah as Pn,
  ai as qs,
  aj as Io,
  ak as Ks,
  al as En,
  am as Fe,
  an as Nn,
  ao as Kt,
  ap as Rt,
  aq as js,
  ar as Ha,
  as as jt,
  at as Lo,
  au as da,
  av as Do,
  aw as Nt,
  ax as Rn,
  ay as Ht,
  az as ze,
  aA as Yt,
  aB as Oe,
  aC as Qs,
  aD as Js,
  aE as he,
  aF as Vn,
  aG as tl,
  aH as pt,
  aI as ga,
  aJ as Et,
  aK as nr,
  aL as ya,
  aM as To,
  aN as Fa,
  aO as $a,
  aP as Wa,
  aQ as Ua,
  aR as Pe,
  aS as br,
  aT as el,
  aU as Ao,
  aV as rl,
  aW as Za,
  aX as ge,
  aY as He,
  aZ as Co,
  a_ as Ya,
  a$ as Xa,
  b0 as al,
  b1 as nl,
  b2 as kn,
  b3 as qa,
  b4 as il,
  b5 as Gn,
  b6 as Ee,
  b7 as Ka,
  b8 as ja,
  b9 as ye,
  ba as Ut,
  bb as ol,
  bc as sl,
  bd as Qa,
  be as ll,
  bf as ul,
  bg as Z,
  bh as Mo,
  bi as vl,
  bj as ma,
  bk as Sa,
  bl as cl,
  bm as hl,
  bn as _a,
  bo as Tr,
  bp as Po,
  bq as tt,
  br as Ja,
  bs as tn,
  bt as en,
  bu as Ar,
  bv as fl,
  bw as Eo,
  bx as pl,
  by as we,
  bz as dl,
  bA as Bn,
  bB as gl,
  bC as No,
  bD as ba,
  bE as xr,
  bF as yl,
  bG as Ro,
  bH as Vo,
  bI as zn,
  bJ as ml,
  bK as Sl,
  bL as _l,
  bM as rn,
  bN as On,
  bO as Hn,
  bP as Fn,
  bQ as Ct,
  bR as bl,
  bS as xl,
  bT as wl,
  bU as Il,
  bV as Ll,
  bW as Dl,
  bX as Tl,
  bY as Al,
  bZ as Cl,
  b_ as Ml,
  b$ as Pl,
  c0 as El,
  c1 as ko,
  c2 as Nl,
  c3 as Rl,
  c4 as Vl,
  c5 as wr,
  c6 as kl,
  c7 as Gl,
  c8 as Bl,
  c9 as zl,
  ca as Ol,
  cb as Hl,
  cc as Fl,
  cd as $l,
  ce as Wl,
  cf as Ul,
  cg as Ir,
  ch as Go,
  ci as Zl,
  cj as me,
  ck as $e,
  cl as Ne,
  cm as Yl,
  cn as Xl,
  co as ql,
  cp as Kl,
  cq as jl,
  cr as Ql,
  cs as ie,
  ct as Jl,
  cu as tu,
  cv as Bo,
  cw as eu,
  cx as ru,
  cy as au,
  cz as ir,
  cA as nu,
  cB as iu,
  cC as an,
  cD as ou,
  cE as zo,
  cF as su,
  cG as lu,
  cH as uu,
  cI as vu,
  cJ as cu,
  cK as hu,
  cL as $n,
  cM as fu,
  cN as Oo,
  cO as xa,
  cP as pu,
  cQ as Ho,
  cR as du,
  cS as gu,
  cT as yu,
  cU as mu,
  cV as We,
  cW as Su,
  cX as _u,
  cY as bu,
  cZ as Ue,
  c_ as xu,
  c$ as or,
  d0 as nn,
  d1 as wu,
  d2 as on,
  d3 as Cr,
  d4 as Iu,
  d5 as Lu,
  d6 as Du,
  d7 as Tu,
  d8 as Au,
  d9 as Cu,
  da as Mu,
  db as Pu,
  dc as Eu,
  dd as Nu,
  de as Ru,
  df as Vu,
  dg as ku,
  dh as Gu,
  di as Bu,
  dj as zu,
  dk as Ou,
  dl as Hu,
  dm as Fu,
  dn as $u,
  dp as Wu,
  dq as Uu,
  dr as Zu,
  ds as Yu,
  dt as Xu,
  du as qu,
  dv as Ku,
  dw as ju,
} from './useECharts-m6DBXNkB.js';
import { m as Qu } from './data-A0kLGLbM.js';
import { d as Ju, f as tv, o as ev, Z as rv, _ as av, ag as nv } from './vue-BjERyvPm.js';
import './antd-BmrhB3rb.js';
function iv(r) {
  if (r) {
    for (var e = [], t = 0; t < r.length; t++) e.push(r[t].slice());
    return e;
  }
}
function ov(r, e) {
  var t = r.label,
    a = e && e.getTextGuideLine();
  return {
    dataIndex: r.dataIndex,
    dataType: r.dataType,
    seriesIndex: r.seriesModel.seriesIndex,
    text: r.label.style.text,
    rect: r.hostRect,
    labelRect: r.rect,
    align: t.style.align,
    verticalAlign: t.style.verticalAlign,
    labelLinePoints: iv(a && a.shape.points),
  };
}
var Wn = ['align', 'verticalAlign', 'width', 'height', 'fontSize'],
  vt = new fo(),
  Mr = Lt(),
  sv = Lt();
function Ze(r, e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    e[n] != null && (r[n] = e[n]);
  }
}
var Ye = ['x', 'y', 'rotation'],
  lv = (function () {
    function r() {
      (this._labelList = []), (this._chartViewList = []);
    }
    return (
      (r.prototype.clearLabels = function () {
        (this._labelList = []), (this._chartViewList = []);
      }),
      (r.prototype._addLabel = function (e, t, a, n, i) {
        var o = n.style,
          s = n.__hostTarget,
          l = s.textConfig || {},
          u = n.getComputedTransform(),
          v = n.getBoundingRect().plain();
        dt.applyTransform(v, v, u),
          u
            ? vt.setLocalTransform(u)
            : ((vt.x = vt.y = vt.rotation = vt.originX = vt.originY = 0),
              (vt.scaleX = vt.scaleY = 1)),
          (vt.rotation = xe(vt.rotation));
        var c = n.__hostTarget,
          h;
        if (c) {
          h = c.getBoundingRect().plain();
          var f = c.getComputedTransform();
          dt.applyTransform(h, h, f);
        }
        var d = h && c.getTextGuideLine();
        this._labelList.push({
          label: n,
          labelLine: d,
          seriesModel: a,
          dataIndex: e,
          dataType: t,
          layoutOption: i,
          computedLayoutOption: null,
          rect: v,
          hostRect: h,
          priority: h ? h.width * h.height : 0,
          defaultAttr: {
            ignore: n.ignore,
            labelGuideIgnore: d && d.ignore,
            x: vt.x,
            y: vt.y,
            scaleX: vt.scaleX,
            scaleY: vt.scaleY,
            rotation: vt.rotation,
            style: {
              x: o.x,
              y: o.y,
              align: o.align,
              verticalAlign: o.verticalAlign,
              width: o.width,
              height: o.height,
              fontSize: o.fontSize,
            },
            cursor: n.cursor,
            attachedPos: l.position,
            attachedRot: l.rotation,
          },
        });
      }),
      (r.prototype.addLabelsOfSeries = function (e) {
        var t = this;
        this._chartViewList.push(e);
        var a = e.__model,
          n = a.get('labelLayout');
        (nt(n) || Ga(n).length) &&
          e.group.traverse(function (i) {
            if (i.ignore) return !0;
            var o = i.getTextContent(),
              s = it(i);
            o && !o.disableLabelLayout && t._addLabel(s.dataIndex, s.dataType, a, o, n);
          });
      }),
      (r.prototype.updateLayoutConfig = function (e) {
        var t = e.getWidth(),
          a = e.getHeight();
        function n(y, b) {
          return function () {
            Mn(y, b);
          };
        }
        for (var i = 0; i < this._labelList.length; i++) {
          var o = this._labelList[i],
            s = o.label,
            l = s.__hostTarget,
            u = o.defaultAttr,
            v = void 0;
          nt(o.layoutOption) ? (v = o.layoutOption(ov(o, l))) : (v = o.layoutOption),
            (v = v || {}),
            (o.computedLayoutOption = v);
          var c = Math.PI / 180;
          l &&
            l.setTextConfig({
              local: !1,
              position: v.x != null || v.y != null ? null : u.attachedPos,
              rotation: v.rotate != null ? v.rotate * c : u.attachedRot,
              offset: [v.dx || 0, v.dy || 0],
            });
          var h = !1;
          if (
            (v.x != null
              ? ((s.x = z(v.x, t)), s.setStyle('x', 0), (h = !0))
              : ((s.x = u.x), s.setStyle('x', u.style.x)),
            v.y != null
              ? ((s.y = z(v.y, a)), s.setStyle('y', 0), (h = !0))
              : ((s.y = u.y), s.setStyle('y', u.style.y)),
            v.labelLinePoints)
          ) {
            var f = l.getTextGuideLine();
            f && (f.setShape({ points: v.labelLinePoints }), (h = !1));
          }
          var d = Mr(s);
          (d.needsUpdateLabelLine = h),
            (s.rotation = v.rotate != null ? v.rotate * c : u.rotation),
            (s.scaleX = u.scaleX),
            (s.scaleY = u.scaleY);
          for (var p = 0; p < Wn.length; p++) {
            var g = Wn[p];
            s.setStyle(g, v[g] != null ? v[g] : u.style[g]);
          }
          if (v.draggable) {
            if (((s.draggable = !0), (s.cursor = 'move'), l)) {
              var m = o.seriesModel;
              if (o.dataIndex != null) {
                var S = o.seriesModel.getData(o.dataType);
                m = S.getItemModel(o.dataIndex);
              }
              s.on('drag', n(l, m.getModel('labelLine')));
            }
          } else s.off('drag'), (s.cursor = u.cursor);
        }
      }),
      (r.prototype.layout = function (e) {
        var t = e.getWidth(),
          a = e.getHeight(),
          n = ks(this._labelList),
          i = At(n, function (l) {
            return l.layoutOption.moveOverlap === 'shiftX';
          }),
          o = At(n, function (l) {
            return l.layoutOption.moveOverlap === 'shiftY';
          });
        Gs(i, 0, t), Bs(o, 0, a);
        var s = At(n, function (l) {
          return l.layoutOption.hideOverlap;
        });
        zs(s);
      }),
      (r.prototype.processLabelsOverall = function () {
        var e = this;
        R(this._chartViewList, function (t) {
          var a = t.__model,
            n = t.ignoreLabelLineUpdate,
            i = a.isAnimationEnabled();
          t.group.traverse(function (o) {
            if (o.ignore && !o.forceLabelAnimation) return !0;
            var s = !n,
              l = o.getTextContent();
            !s && l && (s = Mr(l).needsUpdateLabelLine),
              s && e._updateLabelLine(o, a),
              i && e._animateLabels(o, a);
          });
        });
      }),
      (r.prototype._updateLabelLine = function (e, t) {
        var a = e.getTextContent(),
          n = it(e),
          i = n.dataIndex;
        if (a && i != null) {
          var o = t.getData(n.dataType),
            s = o.getItemModel(i),
            l = {},
            u = o.getItemVisual(i, 'style');
          if (u) {
            var v = o.getVisual('drawType');
            l.stroke = u[v];
          }
          var c = s.getModel('labelLine');
          po(e, go(s), l), Mn(e, c);
        }
      }),
      (r.prototype._animateLabels = function (e, t) {
        var a = e.getTextContent(),
          n = e.getTextGuideLine();
        if (
          a &&
          (e.forceLabelAnimation ||
            (!a.ignore && !a.invisible && !e.disableLabelAnimation && !Os(e)))
        ) {
          var i = Mr(a),
            o = i.oldLayout,
            s = it(e),
            l = s.dataIndex,
            u = { x: a.x, y: a.y, rotation: a.rotation },
            v = t.getData(s.dataType);
          if (o) {
            a.attr(o);
            var h = e.prevStates;
            h &&
              (It(h, 'select') >= 0 && a.attr(i.oldLayoutSelect),
              It(h, 'emphasis') >= 0 && a.attr(i.oldLayoutEmphasis)),
              ot(a, u, t, l);
          } else if ((a.attr(u), !Hs(a).valueAnimation)) {
            var c = $t(a.style.opacity, 1);
            (a.style.opacity = 0), wt(a, { style: { opacity: c } }, t, l);
          }
          if (((i.oldLayout = u), a.states.select)) {
            var f = (i.oldLayoutSelect = {});
            Ze(f, u, Ye), Ze(f, a.states.select, Ye);
          }
          if (a.states.emphasis) {
            var d = (i.oldLayoutEmphasis = {});
            Ze(d, u, Ye), Ze(d, a.states.emphasis, Ye);
          }
          yo(a, l, v, t, t);
        }
        if (n && !n.ignore && !n.invisible) {
          var i = sv(n),
            o = i.oldLayout,
            p = { points: n.shape.points };
          o
            ? (n.attr({ shape: o }), ot(n, { shape: p }, t))
            : (n.setShape(p),
              (n.style.strokePercent = 0),
              wt(n, { style: { strokePercent: 1 } }, t)),
            (i.oldLayout = p);
        }
      }),
      r
    );
  })(),
  Pr = Lt();
function uv(r) {
  r.registerUpdateLifecycle('series:beforeupdate', function (e, t, a) {
    var n = Pr(t).labelManager;
    n || (n = Pr(t).labelManager = new lv()), n.clearLabels();
  }),
    r.registerUpdateLifecycle('series:layoutlabels', function (e, t, a) {
      var n = Pr(t).labelManager;
      a.updatedSeries.forEach(function (i) {
        n.addLabelsOfSeries(t.getViewOfSeriesModel(i));
      }),
        n.updateLayoutConfig(t),
        n.layout(t),
        n.processLabelsOverall();
    });
}
function vv(r) {
  var e = r;
  e.hierNode = {
    defaultAncestor: null,
    ancestor: e,
    prelim: 0,
    modifier: 0,
    change: 0,
    shift: 0,
    i: 0,
    thread: null,
  };
  for (var t = [e], a, n; (a = t.pop()); )
    if (((n = a.children), a.isExpand && n.length))
      for (var i = n.length, o = i - 1; o >= 0; o--) {
        var s = n[o];
        (s.hierNode = {
          defaultAncestor: null,
          ancestor: s,
          prelim: 0,
          modifier: 0,
          change: 0,
          shift: 0,
          i: o,
          thread: null,
        }),
          t.push(s);
      }
}
function cv(r, e) {
  var t = r.isExpand ? r.children : [],
    a = r.parentNode.children,
    n = r.hierNode.i ? a[r.hierNode.i - 1] : null;
  if (t.length) {
    pv(r);
    var i = (t[0].hierNode.prelim + t[t.length - 1].hierNode.prelim) / 2;
    n
      ? ((r.hierNode.prelim = n.hierNode.prelim + e(r, n)),
        (r.hierNode.modifier = r.hierNode.prelim - i))
      : (r.hierNode.prelim = i);
  } else n && (r.hierNode.prelim = n.hierNode.prelim + e(r, n));
  r.parentNode.hierNode.defaultAncestor = dv(
    r,
    n,
    r.parentNode.hierNode.defaultAncestor || a[0],
    e,
  );
}
function hv(r) {
  var e = r.hierNode.prelim + r.parentNode.hierNode.modifier;
  r.setLayout({ x: e }, !0), (r.hierNode.modifier += r.parentNode.hierNode.modifier);
}
function Un(r) {
  return arguments.length ? r : mv;
}
function Ie(r, e) {
  return (r -= Math.PI / 2), { x: e * Math.cos(r), y: e * Math.sin(r) };
}
function fv(r, e) {
  return de(r.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function pv(r) {
  for (var e = r.children, t = e.length, a = 0, n = 0; --t >= 0; ) {
    var i = e[t];
    (i.hierNode.prelim += a),
      (i.hierNode.modifier += a),
      (n += i.hierNode.change),
      (a += i.hierNode.shift + n);
  }
}
function dv(r, e, t, a) {
  if (e) {
    for (
      var n = r,
        i = r,
        o = i.parentNode.children[0],
        s = e,
        l = n.hierNode.modifier,
        u = i.hierNode.modifier,
        v = o.hierNode.modifier,
        c = s.hierNode.modifier;
      (s = Er(s)), (i = Nr(i)), s && i;

    ) {
      (n = Er(n)), (o = Nr(o)), (n.hierNode.ancestor = r);
      var h = s.hierNode.prelim + c - i.hierNode.prelim - u + a(s, i);
      h > 0 && (yv(gv(s, r, t), r, h), (u += h), (l += h)),
        (c += s.hierNode.modifier),
        (u += i.hierNode.modifier),
        (l += n.hierNode.modifier),
        (v += o.hierNode.modifier);
    }
    s && !Er(n) && ((n.hierNode.thread = s), (n.hierNode.modifier += c - l)),
      i && !Nr(o) && ((o.hierNode.thread = i), (o.hierNode.modifier += u - v), (t = r));
  }
  return t;
}
function Er(r) {
  var e = r.children;
  return e.length && r.isExpand ? e[e.length - 1] : r.hierNode.thread;
}
function Nr(r) {
  var e = r.children;
  return e.length && r.isExpand ? e[0] : r.hierNode.thread;
}
function gv(r, e, t) {
  return r.hierNode.ancestor.parentNode === e.parentNode ? r.hierNode.ancestor : t;
}
function yv(r, e, t) {
  var a = t / (e.hierNode.i - r.hierNode.i);
  (e.hierNode.change -= a),
    (e.hierNode.shift += t),
    (e.hierNode.modifier += t),
    (e.hierNode.prelim += t),
    (r.hierNode.change += a);
}
function mv(r, e) {
  return r.parentNode === e.parentNode ? 1 : 2;
}
var Sv = (function () {
    function r() {
      (this.parentPoint = []), (this.childPoints = []);
    }
    return r;
  })(),
  _v = (function (r) {
    k(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return (
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null };
      }),
      (e.prototype.getDefaultShape = function () {
        return new Sv();
      }),
      (e.prototype.buildPath = function (t, a) {
        var n = a.childPoints,
          i = n.length,
          o = a.parentPoint,
          s = n[0],
          l = n[i - 1];
        if (i === 1) {
          t.moveTo(o[0], o[1]), t.lineTo(s[0], s[1]);
          return;
        }
        var u = a.orient,
          v = u === 'TB' || u === 'BT' ? 0 : 1,
          c = 1 - v,
          h = z(a.forkPosition, 1),
          f = [];
        (f[v] = o[v]),
          (f[c] = o[c] + (l[c] - o[c]) * h),
          t.moveTo(o[0], o[1]),
          t.lineTo(f[0], f[1]),
          t.moveTo(s[0], s[1]),
          (f[v] = s[v]),
          t.lineTo(f[0], f[1]),
          (f[v] = l[v]),
          t.lineTo(f[0], f[1]),
          t.lineTo(l[0], l[1]);
        for (var d = 1; d < i - 1; d++) {
          var p = n[d];
          t.moveTo(p[0], p[1]), (f[v] = p[v]), t.lineTo(f[0], f[1]);
        }
      }),
      e
    );
  })(yt),
  bv = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t._mainGroup = new rt()), t;
    }
    return (
      (e.prototype.init = function (t, a) {
        (this._controller = new Ba(a.getZr())),
          (this._controllerHost = { target: this.group }),
          this.group.add(this._mainGroup);
      }),
      (e.prototype.render = function (t, a, n) {
        var i = t.getData(),
          o = t.layoutInfo,
          s = this._mainGroup,
          l = t.get('layout');
        l === 'radial'
          ? ((s.x = o.x + o.width / 2), (s.y = o.y + o.height / 2))
          : ((s.x = o.x), (s.y = o.y)),
          this._updateViewCoordSys(t, n),
          this._updateController(t, a, n);
        var u = this._data;
        i
          .diff(u)
          .add(function (v) {
            Zn(i, v) && Yn(i, v, null, s, t);
          })
          .update(function (v, c) {
            var h = u.getItemGraphicEl(c);
            if (!Zn(i, v)) {
              h && qn(u, c, h, s, t);
              return;
            }
            Yn(i, v, h, s, t);
          })
          .remove(function (v) {
            var c = u.getItemGraphicEl(v);
            c && qn(u, v, c, s, t);
          })
          .execute(),
          (this._nodeScaleRatio = t.get('nodeScaleRatio')),
          this._updateNodeAndLinkScale(t),
          t.get('expandAndCollapse') === !0 &&
            i.eachItemGraphicEl(function (v, c) {
              v.off('click').on('click', function () {
                n.dispatchAction({ type: 'treeExpandAndCollapse', seriesId: t.id, dataIndex: c });
              });
            }),
          (this._data = i);
      }),
      (e.prototype._updateViewCoordSys = function (t, a) {
        var n = t.getData(),
          i = [];
        n.each(function (c) {
          var h = n.getItemLayout(c);
          h && !isNaN(h.x) && !isNaN(h.y) && i.push([+h.x, +h.y]);
        });
        var o = [],
          s = [];
        mr(i, o, s);
        var l = this._min,
          u = this._max;
        s[0] - o[0] === 0 && ((o[0] = l ? l[0] : o[0] - 1), (s[0] = u ? u[0] : s[0] + 1)),
          s[1] - o[1] === 0 && ((o[1] = l ? l[1] : o[1] - 1), (s[1] = u ? u[1] : s[1] + 1));
        var v = (t.coordinateSystem = new za());
        (v.zoomLimit = t.get('scaleLimit')),
          v.setBoundingRect(o[0], o[1], s[0] - o[0], s[1] - o[1]),
          v.setCenter(t.get('center'), a),
          v.setZoom(t.get('zoom')),
          this.group.attr({ x: v.x, y: v.y, scaleX: v.scaleX, scaleY: v.scaleY }),
          (this._min = o),
          (this._max = s);
      }),
      (e.prototype._updateController = function (t, a, n) {
        var i = this,
          o = this._controller,
          s = this._controllerHost,
          l = this.group;
        o.setPointerChecker(function (u, v, c) {
          var h = l.getBoundingRect();
          return h.applyTransform(l.transform), h.contain(v, c) && !mo(u, n, t);
        }),
          o.enable(t.get('roam')),
          (s.zoomLimit = t.get('scaleLimit')),
          (s.zoom = t.coordinateSystem.getZoom()),
          o
            .off('pan')
            .off('zoom')
            .on('pan', function (u) {
              So(s, u.dx, u.dy),
                n.dispatchAction({ seriesId: t.id, type: 'treeRoam', dx: u.dx, dy: u.dy });
            })
            .on('zoom', function (u) {
              _o(s, u.scale, u.originX, u.originY),
                n.dispatchAction({
                  seriesId: t.id,
                  type: 'treeRoam',
                  zoom: u.scale,
                  originX: u.originX,
                  originY: u.originY,
                }),
                i._updateNodeAndLinkScale(t),
                n.updateLabelLayout();
            });
      }),
      (e.prototype._updateNodeAndLinkScale = function (t) {
        var a = t.getData(),
          n = this._getNodeGlobalScale(t);
        a.eachItemGraphicEl(function (i, o) {
          i.setSymbolScale(n);
        });
      }),
      (e.prototype._getNodeGlobalScale = function (t) {
        var a = t.coordinateSystem;
        if (a.type !== 'view') return 1;
        var n = this._nodeScaleRatio,
          i = a.scaleX || 1,
          o = a.getZoom(),
          s = (o - 1) * n + 1;
        return s / i;
      }),
      (e.prototype.dispose = function () {
        this._controller && this._controller.dispose(), (this._controllerHost = null);
      }),
      (e.prototype.remove = function () {
        this._mainGroup.removeAll(), (this._data = null);
      }),
      (e.type = 'tree'),
      e
    );
  })(ct);
function Zn(r, e) {
  var t = r.getItemLayout(e);
  return t && !isNaN(t.x) && !isNaN(t.y);
}
function Yn(r, e, t, a, n) {
  var i = !t,
    o = r.tree.getNodeByDataIndex(e),
    s = o.getModel(),
    l = o.getVisual('style').fill,
    u = o.isExpand === !1 && o.children.length !== 0 ? l : '#fff',
    v = r.tree.root,
    c = o.parentNode === v ? o : o.parentNode || o,
    h = r.getItemGraphicEl(c.dataIndex),
    f = c.getLayout(),
    d = h ? { x: h.__oldX, y: h.__oldY, rawX: h.__radialOldRawX, rawY: h.__radialOldRawY } : f,
    p = o.getLayout();
  i
    ? ((t = new bo(r, e, null, { symbolInnerColor: u, useNameLabel: !0 })),
      (t.x = d.x),
      (t.y = d.y))
    : t.updateData(r, e, null, { symbolInnerColor: u, useNameLabel: !0 }),
    (t.__radialOldRawX = t.__radialRawX),
    (t.__radialOldRawY = t.__radialRawY),
    (t.__radialRawX = p.rawX),
    (t.__radialRawY = p.rawY),
    a.add(t),
    r.setItemGraphicEl(e, t),
    (t.__oldX = t.x),
    (t.__oldY = t.y),
    ot(t, { x: p.x, y: p.y }, n);
  var g = t.getSymbolPath();
  if (n.get('layout') === 'radial') {
    var m = v.children[0],
      S = m.getLayout(),
      y = m.children.length,
      b = void 0,
      _ = void 0;
    if (p.x === S.x && o.isExpand === !0 && m.children.length) {
      var x = {
        x: (m.children[0].getLayout().x + m.children[y - 1].getLayout().x) / 2,
        y: (m.children[0].getLayout().y + m.children[y - 1].getLayout().y) / 2,
      };
      (b = Math.atan2(x.y - S.y, x.x - S.x)),
        b < 0 && (b = Math.PI * 2 + b),
        (_ = x.x < S.x),
        _ && (b = b - Math.PI);
    } else
      (b = Math.atan2(p.y - S.y, p.x - S.x)),
        b < 0 && (b = Math.PI * 2 + b),
        o.children.length === 0 || (o.children.length !== 0 && o.isExpand === !1)
          ? ((_ = p.x < S.x), _ && (b = b - Math.PI))
          : ((_ = p.x > S.x), _ || (b = b - Math.PI));
    var w = _ ? 'left' : 'right',
      I = s.getModel('label'),
      L = I.get('rotate'),
      D = L * (Math.PI / 180),
      T = g.getTextContent();
    T &&
      (g.setTextConfig({
        position: I.get('position') || w,
        rotation: L == null ? -b : D,
        origin: 'center',
      }),
      T.setStyle('verticalAlign', 'middle'));
  }
  var M = s.get(['emphasis', 'focus']),
    P =
      M === 'relative'
        ? fa(o.getAncestorsIndices(), o.getDescendantIndices())
        : M === 'ancestor'
          ? o.getAncestorsIndices()
          : M === 'descendant'
            ? o.getDescendantIndices()
            : null;
  P && (it(t).focus = P),
    xv(n, o, v, t, d, f, p, a),
    t.__edge &&
      (t.onHoverStateChange = function (A) {
        if (A !== 'blur') {
          var C = o.parentNode && r.getItemGraphicEl(o.parentNode.dataIndex);
          (C && C.hoverState === Fs) || $s(t.__edge, A);
        }
      });
}
function xv(r, e, t, a, n, i, o, s) {
  var l = e.getModel(),
    u = r.get('edgeShape'),
    v = r.get('layout'),
    c = r.getOrient(),
    h = r.get(['lineStyle', 'curveness']),
    f = r.get('edgeForkPosition'),
    d = l.getModel('lineStyle').getLineStyle(),
    p = a.__edge;
  if (u === 'curve')
    e.parentNode &&
      e.parentNode !== t &&
      (p || (p = a.__edge = new xo({ shape: wa(v, c, h, n, n) })),
      ot(p, { shape: wa(v, c, h, i, o) }, r));
  else if (
    u === 'polyline' &&
    v === 'orthogonal' &&
    e !== t &&
    e.children &&
    e.children.length !== 0 &&
    e.isExpand === !0
  ) {
    for (var g = e.children, m = [], S = 0; S < g.length; S++) {
      var y = g[S].getLayout();
      m.push([y.x, y.y]);
    }
    p ||
      (p = a.__edge =
        new _v({
          shape: { parentPoint: [o.x, o.y], childPoints: [[o.x, o.y]], orient: c, forkPosition: f },
        })),
      ot(p, { shape: { parentPoint: [o.x, o.y], childPoints: m } }, r);
  }
  p &&
    !(u === 'polyline' && !e.isExpand) &&
    (p.useStyle(gt({ strokeNoScale: !0, fill: null }, d)), Mt(p, l, 'lineStyle'), ar(p), s.add(p));
}
function Xn(r, e, t, a, n) {
  var i = e.tree.root,
    o = Fo(i, r),
    s = o.source,
    l = o.sourceLayout,
    u = e.getItemGraphicEl(r.dataIndex);
  if (u) {
    var v = e.getItemGraphicEl(s.dataIndex),
      c = v.__edge,
      h = u.__edge || (s.isExpand === !1 || s.children.length === 1 ? c : void 0),
      f = a.get('edgeShape'),
      d = a.get('layout'),
      p = a.get('orient'),
      g = a.get(['lineStyle', 'curveness']);
    h &&
      (f === 'curve'
        ? pa(h, { shape: wa(d, p, g, l, l), style: { opacity: 0 } }, a, {
            cb: function () {
              t.remove(h);
            },
            removeOpt: n,
          })
        : f === 'polyline' &&
          a.get('layout') === 'orthogonal' &&
          pa(
            h,
            {
              shape: { parentPoint: [l.x, l.y], childPoints: [[l.x, l.y]] },
              style: { opacity: 0 },
            },
            a,
            {
              cb: function () {
                t.remove(h);
              },
              removeOpt: n,
            },
          ));
  }
}
function Fo(r, e) {
  for (var t = e.parentNode === r ? e : e.parentNode || e, a; (a = t.getLayout()), a == null; )
    t = t.parentNode === r ? t : t.parentNode || t;
  return { source: t, sourceLayout: a };
}
function qn(r, e, t, a, n) {
  var i = r.tree.getNodeByDataIndex(e),
    o = r.tree.root,
    s = Fo(o, i).sourceLayout,
    l = { duration: n.get('animationDurationUpdate'), easing: n.get('animationEasingUpdate') };
  pa(t, { x: s.x + 1, y: s.y + 1 }, n, {
    cb: function () {
      a.remove(t), r.setItemGraphicEl(e, null);
    },
    removeOpt: l,
  }),
    t.fadeOut(null, r.hostModel, { fadeLabel: !0, animation: l }),
    i.children.forEach(function (u) {
      Xn(u, r, a, n, l);
    }),
    Xn(i, r, a, n, l);
}
function wa(r, e, t, a, n) {
  var i, o, s, l, u, v, c, h;
  if (r === 'radial') {
    (u = a.rawX), (c = a.rawY), (v = n.rawX), (h = n.rawY);
    var f = Ie(u, c),
      d = Ie(u, c + (h - c) * t),
      p = Ie(v, h + (c - h) * t),
      g = Ie(v, h);
    return {
      x1: f.x || 0,
      y1: f.y || 0,
      x2: g.x || 0,
      y2: g.y || 0,
      cpx1: d.x || 0,
      cpy1: d.y || 0,
      cpx2: p.x || 0,
      cpy2: p.y || 0,
    };
  } else
    (u = a.x),
      (c = a.y),
      (v = n.x),
      (h = n.y),
      (e === 'LR' || e === 'RL') &&
        ((i = u + (v - u) * t), (o = c), (s = v + (u - v) * t), (l = h)),
      (e === 'TB' || e === 'BT') &&
        ((i = u), (o = c + (h - c) * t), (s = v), (l = h + (c - h) * t));
  return { x1: u, y1: c, x2: v, y2: h, cpx1: i, cpy1: o, cpx2: s, cpy2: l };
}
const wv = bv;
var xt = Lt();
function $o(r) {
  var e = r.mainData,
    t = r.datas;
  t || ((t = { main: e }), (r.datasAttr = { main: 'data' })),
    (r.datas = r.mainData = null),
    Wo(e, t, r),
    R(t, function (a) {
      R(e.TRANSFERABLE_METHODS, function (n) {
        a.wrapMethod(n, et(Iv, r));
      });
    }),
    e.wrapMethod('cloneShallow', et(Dv, r)),
    R(e.CHANGABLE_METHODS, function (a) {
      e.wrapMethod(a, et(Lv, r));
    }),
    Ws(t[e.dataType] === e);
}
function Iv(r, e) {
  if (Cv(this)) {
    var t = U({}, xt(this).datas);
    (t[this.dataType] = e), Wo(e, t, r);
  } else sn(e, this.dataType, xt(this).mainData, r);
  return e;
}
function Lv(r, e) {
  return r.struct && r.struct.update(), e;
}
function Dv(r, e) {
  return (
    R(xt(e).datas, function (t, a) {
      t !== e && sn(t.cloneShallow(), a, e, r);
    }),
    e
  );
}
function Tv(r) {
  var e = xt(this).mainData;
  return r == null || e == null ? e : xt(e).datas[r];
}
function Av() {
  var r = xt(this).mainData;
  return r == null
    ? [{ data: r }]
    : $(Ga(xt(r).datas), function (e) {
        return { type: e, data: xt(r).datas[e] };
      });
}
function Cv(r) {
  return xt(r).mainData === r;
}
function Wo(r, e, t) {
  (xt(r).datas = {}),
    R(e, function (a, n) {
      sn(a, n, r, t);
    });
}
function sn(r, e, t, a) {
  (xt(t).datas[e] = r),
    (xt(r).mainData = t),
    (r.dataType = e),
    a.struct && ((r[a.structAttr] = a.struct), (a.struct[a.datasAttr[e]] = r)),
    (r.getLinkedData = Tv),
    (r.getLinkedDataAll = Av);
}
var Mv = (function () {
    function r(e, t) {
      (this.depth = 0),
        (this.height = 0),
        (this.dataIndex = -1),
        (this.children = []),
        (this.viewChildren = []),
        (this.isExpand = !1),
        (this.name = e || ''),
        (this.hostTree = t);
    }
    return (
      (r.prototype.isRemoved = function () {
        return this.dataIndex < 0;
      }),
      (r.prototype.eachNode = function (e, t, a) {
        nt(e) && ((a = t), (t = e), (e = null)), (e = e || {}), St(e) && (e = { order: e });
        var n = e.order || 'preorder',
          i = this[e.attr || 'children'],
          o;
        n === 'preorder' && (o = t.call(a, this));
        for (var s = 0; !o && s < i.length; s++) i[s].eachNode(e, t, a);
        n === 'postorder' && t.call(a, this);
      }),
      (r.prototype.updateDepthAndHeight = function (e) {
        var t = 0;
        this.depth = e;
        for (var a = 0; a < this.children.length; a++) {
          var n = this.children[a];
          n.updateDepthAndHeight(e + 1), n.height > t && (t = n.height);
        }
        this.height = t + 1;
      }),
      (r.prototype.getNodeById = function (e) {
        if (this.getId() === e) return this;
        for (var t = 0, a = this.children, n = a.length; t < n; t++) {
          var i = a[t].getNodeById(e);
          if (i) return i;
        }
      }),
      (r.prototype.contains = function (e) {
        if (e === this) return !0;
        for (var t = 0, a = this.children, n = a.length; t < n; t++) {
          var i = a[t].contains(e);
          if (i) return i;
        }
      }),
      (r.prototype.getAncestors = function (e) {
        for (var t = [], a = e ? this : this.parentNode; a; ) t.push(a), (a = a.parentNode);
        return t.reverse(), t;
      }),
      (r.prototype.getAncestorsIndices = function () {
        for (var e = [], t = this; t; ) e.push(t.dataIndex), (t = t.parentNode);
        return e.reverse(), e;
      }),
      (r.prototype.getDescendantIndices = function () {
        var e = [];
        return (
          this.eachNode(function (t) {
            e.push(t.dataIndex);
          }),
          e
        );
      }),
      (r.prototype.getValue = function (e) {
        var t = this.hostTree.data;
        return t.getStore().get(t.getDimensionIndex(e || 'value'), this.dataIndex);
      }),
      (r.prototype.setLayout = function (e, t) {
        this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, e, t);
      }),
      (r.prototype.getLayout = function () {
        return this.hostTree.data.getItemLayout(this.dataIndex);
      }),
      (r.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0)) {
          var t = this.hostTree,
            a = t.data.getItemModel(this.dataIndex);
          return a.getModel(e);
        }
      }),
      (r.prototype.getLevelModel = function () {
        return (this.hostTree.levelModels || [])[this.depth];
      }),
      (r.prototype.setVisual = function (e, t) {
        this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, e, t);
      }),
      (r.prototype.getVisual = function (e) {
        return this.hostTree.data.getItemVisual(this.dataIndex, e);
      }),
      (r.prototype.getRawIndex = function () {
        return this.hostTree.data.getRawIndex(this.dataIndex);
      }),
      (r.prototype.getId = function () {
        return this.hostTree.data.getId(this.dataIndex);
      }),
      (r.prototype.getChildIndex = function () {
        if (this.parentNode) {
          for (var e = this.parentNode.children, t = 0; t < e.length; ++t)
            if (e[t] === this) return t;
          return -1;
        }
        return -1;
      }),
      (r.prototype.isAncestorOf = function (e) {
        for (var t = e.parentNode; t; ) {
          if (t === this) return !0;
          t = t.parentNode;
        }
        return !1;
      }),
      (r.prototype.isDescendantOf = function (e) {
        return e !== this && e.isAncestorOf(this);
      }),
      r
    );
  })(),
  ln = (function () {
    function r(e) {
      (this.type = 'tree'), (this._nodes = []), (this.hostModel = e);
    }
    return (
      (r.prototype.eachNode = function (e, t, a) {
        this.root.eachNode(e, t, a);
      }),
      (r.prototype.getNodeByDataIndex = function (e) {
        var t = this.data.getRawIndex(e);
        return this._nodes[t];
      }),
      (r.prototype.getNodeById = function (e) {
        return this.root.getNodeById(e);
      }),
      (r.prototype.update = function () {
        for (var e = this.data, t = this._nodes, a = 0, n = t.length; a < n; a++)
          t[a].dataIndex = -1;
        for (var a = 0, n = e.count(); a < n; a++) t[e.getRawIndex(a)].dataIndex = a;
      }),
      (r.prototype.clearLayouts = function () {
        this.data.clearItemLayouts();
      }),
      (r.createTree = function (e, t, a) {
        var n = new r(t),
          i = [],
          o = 1;
        s(e);
        function s(v, c) {
          var h = v.value;
          (o = Math.max(o, F(h) ? h.length : 1)), i.push(v);
          var f = new Mv(Sr(v.name, ''), n);
          c ? Pv(f, c) : (n.root = f), n._nodes.push(f);
          var d = v.children;
          if (d) for (var p = 0; p < d.length; p++) s(d[p], f);
        }
        n.root.updateDepthAndHeight(0);
        var l = Oa(i, { coordDimensions: ['value'], dimensionsCount: o }).dimensions,
          u = new bt(l, t);
        return (
          u.initData(i),
          a && a(u),
          $o({ mainData: u, struct: n, structAttr: 'tree' }),
          n.update(),
          n
        );
      }),
      r
    );
  })();
function Pv(r, e) {
  var t = e.children;
  r.parentNode !== e && (t.push(r), (r.parentNode = e));
}
function Re(r, e, t) {
  if (r && It(e, r.type) >= 0) {
    var a = t.getData().tree.root,
      n = r.targetNode;
    if ((St(n) && (n = a.getNodeById(n)), n && a.contains(n))) return { node: n };
    var i = r.targetNodeId;
    if (i != null && (n = a.getNodeById(i))) return { node: n };
  }
}
function Uo(r) {
  for (var e = []; r; ) (r = r.parentNode), r && e.push(r);
  return e.reverse();
}
function un(r, e) {
  var t = Uo(r);
  return It(t, e) >= 0;
}
function Lr(r, e) {
  for (var t = []; r; ) {
    var a = r.dataIndex;
    t.push({ name: r.name, dataIndex: a, value: e.getRawValue(a) }), (r = r.parentNode);
  }
  return t.reverse(), t;
}
var Ev = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.hasSymbolVisual = !0), (t.ignoreStyleOnData = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t) {
      var a = { name: t.name, children: t.data },
        n = t.leaves || {},
        i = new qt(n, this, this.ecModel),
        o = ln.createTree(a, this, s);
      function s(c) {
        c.wrapMethod('getItemModel', function (h, f) {
          var d = o.getNodeByDataIndex(f);
          return (d && d.children.length && d.isExpand) || (h.parentModel = i), h;
        });
      }
      var l = 0;
      o.eachNode('preorder', function (c) {
        c.depth > l && (l = c.depth);
      });
      var u = t.expandAndCollapse,
        v = u && t.initialTreeDepth >= 0 ? t.initialTreeDepth : l;
      return (
        o.root.eachNode('preorder', function (c) {
          var h = c.hostTree.data.getRawDataItem(c.dataIndex);
          c.isExpand = h && h.collapsed != null ? !h.collapsed : c.depth <= v;
        }),
        o.data
      );
    }),
    (e.prototype.getOrient = function () {
      var t = this.get('orient');
      return t === 'horizontal' ? (t = 'LR') : t === 'vertical' && (t = 'TB'), t;
    }),
    (e.prototype.setZoom = function (t) {
      this.option.zoom = t;
    }),
    (e.prototype.setCenter = function (t) {
      this.option.center = t;
    }),
    (e.prototype.formatTooltip = function (t, a, n) {
      for (
        var i = this.getData().tree,
          o = i.root.children[0],
          s = i.getNodeByDataIndex(t),
          l = s.getValue(),
          u = s.name;
        s && s !== o;

      )
        (u = s.parentNode.name + '.' + u), (s = s.parentNode);
      return Ot('nameValue', { name: u, value: l, noValue: isNaN(l) || l == null });
    }),
    (e.prototype.getDataParams = function (t) {
      var a = r.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (a.treeAncestors = Lr(n, this)), (a.collapsed = !n.isExpand), a;
    }),
    (e.type = 'series.tree'),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'view',
      left: '12%',
      top: '12%',
      right: '12%',
      bottom: '12%',
      layout: 'orthogonal',
      edgeShape: 'curve',
      edgeForkPosition: '50%',
      roam: !1,
      nodeScaleRatio: 0.4,
      center: null,
      zoom: 1,
      orient: 'LR',
      symbol: 'emptyCircle',
      symbolSize: 7,
      expandAndCollapse: !0,
      initialTreeDepth: 2,
      lineStyle: { color: '#ccc', width: 1.5, curveness: 0.5 },
      itemStyle: { color: 'lightsteelblue', borderWidth: 1.5 },
      label: { show: !0 },
      animationEasing: 'linear',
      animationDuration: 700,
      animationDurationUpdate: 500,
    }),
    e
  );
})(ht);
const Nv = Ev;
function Rv(r, e, t) {
  for (var a = [r], n = [], i; (i = a.pop()); )
    if ((n.push(i), i.isExpand)) {
      var o = i.children;
      if (o.length) for (var s = 0; s < o.length; s++) a.push(o[s]);
    }
  for (; (i = n.pop()); ) e(i, t);
}
function Se(r, e) {
  for (var t = [r], a; (a = t.pop()); )
    if ((e(a), a.isExpand)) {
      var n = a.children;
      if (n.length) for (var i = n.length - 1; i >= 0; i--) t.push(n[i]);
    }
}
function Vv(r, e) {
  r.eachSeriesByType('tree', function (t) {
    kv(t, e);
  });
}
function kv(r, e) {
  var t = fv(r, e);
  r.layoutInfo = t;
  var a = r.get('layout'),
    n = 0,
    i = 0,
    o = null;
  a === 'radial'
    ? ((n = 2 * Math.PI),
      (i = Math.min(t.height, t.width) / 2),
      (o = Un(function (y, b) {
        return (y.parentNode === b.parentNode ? 1 : 2) / y.depth;
      })))
    : ((n = t.width), (i = t.height), (o = Un()));
  var s = r.getData().tree.root,
    l = s.children[0];
  if (l) {
    vv(s), Rv(l, cv, o), (s.hierNode.modifier = -l.hierNode.prelim), Se(l, hv);
    var u = l,
      v = l,
      c = l;
    Se(l, function (y) {
      var b = y.getLayout().x;
      b < u.getLayout().x && (u = y), b > v.getLayout().x && (v = y), y.depth > c.depth && (c = y);
    });
    var h = u === v ? 1 : o(u, v) / 2,
      f = h - u.getLayout().x,
      d = 0,
      p = 0,
      g = 0,
      m = 0;
    if (a === 'radial')
      (d = n / (v.getLayout().x + h + f)),
        (p = i / (c.depth - 1 || 1)),
        Se(l, function (y) {
          (g = (y.getLayout().x + f) * d), (m = (y.depth - 1) * p);
          var b = Ie(g, m);
          y.setLayout({ x: b.x, y: b.y, rawX: g, rawY: m }, !0);
        });
    else {
      var S = r.getOrient();
      S === 'RL' || S === 'LR'
        ? ((p = i / (v.getLayout().x + h + f)),
          (d = n / (c.depth - 1 || 1)),
          Se(l, function (y) {
            (m = (y.getLayout().x + f) * p),
              (g = S === 'LR' ? (y.depth - 1) * d : n - (y.depth - 1) * d),
              y.setLayout({ x: g, y: m }, !0);
          }))
        : (S === 'TB' || S === 'BT') &&
          ((d = n / (v.getLayout().x + h + f)),
          (p = i / (c.depth - 1 || 1)),
          Se(l, function (y) {
            (g = (y.getLayout().x + f) * d),
              (m = S === 'TB' ? (y.depth - 1) * p : i - (y.depth - 1) * p),
              y.setLayout({ x: g, y: m }, !0);
          }));
    }
  }
}
function Gv(r) {
  r.eachSeriesByType('tree', function (e) {
    var t = e.getData(),
      a = t.tree;
    a.eachNode(function (n) {
      var i = n.getModel(),
        o = i.getModel('itemStyle').getItemStyle(),
        s = t.ensureUniqueItemVisual(n.dataIndex, 'style');
      U(s, o);
    });
  });
}
function Bv(r) {
  r.registerAction(
    { type: 'treeExpandAndCollapse', event: 'treeExpandAndCollapse', update: 'update' },
    function (e, t) {
      t.eachComponent({ mainType: 'series', subType: 'tree', query: e }, function (a) {
        var n = e.dataIndex,
          i = a.getData().tree,
          o = i.getNodeByDataIndex(n);
        o.isExpand = !o.isExpand;
      });
    },
  ),
    r.registerAction({ type: 'treeRoam', event: 'treeRoam', update: 'none' }, function (e, t, a) {
      t.eachComponent({ mainType: 'series', subType: 'tree', query: e }, function (n) {
        var i = n.coordinateSystem,
          o = wo(i, e, void 0, a);
        n.setCenter && n.setCenter(o.center), n.setZoom && n.setZoom(o.zoom);
      });
    });
}
function zv(r) {
  r.registerChartView(wv),
    r.registerSeriesModel(Nv),
    r.registerLayout(Vv),
    r.registerVisual(Gv),
    Bv(r);
}
var Kn = ['treemapZoomToNode', 'treemapRender', 'treemapMove'];
function Ov(r) {
  for (var e = 0; e < Kn.length; e++) r.registerAction({ type: Kn[e], update: 'updateView' }, Ce);
  r.registerAction({ type: 'treemapRootToNode', update: 'updateView' }, function (t, a) {
    a.eachComponent({ mainType: 'series', subType: 'treemap', query: t }, n);
    function n(i, o) {
      var s = ['treemapZoomToNode', 'treemapRootToNode'],
        l = Re(t, s, i);
      if (l) {
        var u = i.getViewRoot();
        u && (t.direction = un(u, l.node) ? 'rollUp' : 'drillDown'), i.resetViewRoot(l.node);
      }
    }
  });
}
function Zo(r) {
  var e = r.getData(),
    t = e.tree,
    a = {};
  t.eachNode(function (n) {
    for (var i = n; i && i.depth > 1; ) i = i.parentNode;
    var o = Us(r.ecModel, i.name || i.dataIndex + '', a);
    n.setVisual('decal', o);
  });
}
var Hv = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), (t.preventUsingHoverLayer = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      var n = { name: t.name, children: t.data };
      Yo(n);
      var i = t.levels || [],
        o = (this.designatedVisualItemStyle = {}),
        s = new qt({ itemStyle: o }, this, a);
      i = t.levels = Fv(i, a);
      var l = $(
          i || [],
          function (c) {
            return new qt(c, s, a);
          },
          this,
        ),
        u = ln.createTree(n, this, v);
      function v(c) {
        c.wrapMethod('getItemModel', function (h, f) {
          var d = u.getNodeByDataIndex(f),
            p = d ? l[d.depth] : null;
          return (h.parentModel = p || s), h;
        });
      }
      return u.data;
    }),
    (e.prototype.optionUpdated = function () {
      this.resetViewRoot();
    }),
    (e.prototype.formatTooltip = function (t, a, n) {
      var i = this.getData(),
        o = this.getRawValue(t),
        s = i.getName(t);
      return Ot('nameValue', { name: s, value: o });
    }),
    (e.prototype.getDataParams = function (t) {
      var a = r.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (a.treeAncestors = Lr(n, this)), (a.treePathInfo = a.treeAncestors), a;
    }),
    (e.prototype.setLayoutInfo = function (t) {
      (this.layoutInfo = this.layoutInfo || {}), U(this.layoutInfo, t);
    }),
    (e.prototype.mapIdToIndex = function (t) {
      var a = this._idIndexMap;
      a || ((a = this._idIndexMap = mt()), (this._idIndexMapCount = 0));
      var n = a.get(t);
      return n == null && a.set(t, (n = this._idIndexMapCount++)), n;
    }),
    (e.prototype.getViewRoot = function () {
      return this._viewRoot;
    }),
    (e.prototype.resetViewRoot = function (t) {
      t ? (this._viewRoot = t) : (t = this._viewRoot);
      var a = this.getRawData().tree.root;
      (!t || (t !== a && !a.contains(t))) && (this._viewRoot = a);
    }),
    (e.prototype.enableAriaDecal = function () {
      Zo(this);
    }),
    (e.type = 'series.treemap'),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      progressive: 0,
      left: 'center',
      top: 'middle',
      width: '80%',
      height: '80%',
      sort: !0,
      clipWindow: 'origin',
      squareRatio: 0.5 * (1 + Math.sqrt(5)),
      leafDepth: null,
      drillDownIcon: '▶',
      zoomToNodeRatio: 0.32 * 0.32,
      roam: !0,
      nodeClick: 'zoomToNode',
      animation: !0,
      animationDurationUpdate: 900,
      animationEasing: 'quinticInOut',
      breadcrumb: {
        show: !0,
        height: 22,
        left: 'center',
        top: 'bottom',
        emptyItemWidth: 25,
        itemStyle: { color: 'rgba(0,0,0,0.7)', textStyle: { color: '#fff' } },
        emphasis: { itemStyle: { color: 'rgba(0,0,0,0.9)' } },
      },
      label: {
        show: !0,
        distance: 0,
        padding: 5,
        position: 'inside',
        color: '#fff',
        overflow: 'truncate',
      },
      upperLabel: {
        show: !1,
        position: [0, '50%'],
        height: 20,
        overflow: 'truncate',
        verticalAlign: 'middle',
      },
      itemStyle: {
        color: null,
        colorAlpha: null,
        colorSaturation: null,
        borderWidth: 0,
        gapWidth: 0,
        borderColor: '#fff',
        borderColorSaturation: null,
      },
      emphasis: {
        upperLabel: {
          show: !0,
          position: [0, '50%'],
          overflow: 'truncate',
          verticalAlign: 'middle',
        },
      },
      visualDimension: 0,
      visualMin: null,
      visualMax: null,
      color: [],
      colorAlpha: null,
      colorSaturation: null,
      colorMappingBy: 'index',
      visibleMin: 10,
      childrenVisibleMin: null,
      levels: [],
    }),
    e
  );
})(ht);
function Yo(r) {
  var e = 0;
  R(r.children, function (a) {
    Yo(a);
    var n = a.value;
    F(n) && (n = n[0]), (e += n);
  });
  var t = r.value;
  F(t) && (t = t[0]),
    (t == null || isNaN(t)) && (t = e),
    t < 0 && (t = 0),
    F(r.value) ? (r.value[0] = t) : (r.value = t);
}
function Fv(r, e) {
  var t = Gt(e.get('color')),
    a = Gt(e.get(['aria', 'decal', 'decals']));
  if (t) {
    r = r || [];
    var n, i;
    R(r, function (s) {
      var l = new qt(s),
        u = l.get('color'),
        v = l.get('decal');
      (l.get(['itemStyle', 'color']) || (u && u !== 'none')) && (n = !0),
        (l.get(['itemStyle', 'decal']) || (v && v !== 'none')) && (i = !0);
    });
    var o = r[0] || (r[0] = {});
    return n || (o.color = t.slice()), !i && a && (o.decal = a.slice()), r;
  }
}
const $v = Hv;
var Wv = 8,
  jn = 8,
  Rr = 5,
  Uv = (function () {
    function r(e) {
      (this.group = new rt()), e.add(this.group);
    }
    return (
      (r.prototype.render = function (e, t, a, n) {
        var i = e.getModel('breadcrumb'),
          o = this.group;
        if ((o.removeAll(), !(!i.get('show') || !a))) {
          var s = i.getModel('itemStyle'),
            l = i.getModel('emphasis'),
            u = s.getModel('textStyle'),
            v = l.getModel(['itemStyle', 'textStyle']),
            c = {
              pos: {
                left: i.get('left'),
                right: i.get('right'),
                top: i.get('top'),
                bottom: i.get('bottom'),
              },
              box: { width: t.getWidth(), height: t.getHeight() },
              emptyItemWidth: i.get('emptyItemWidth'),
              totalWidth: 0,
              renderList: [],
            };
          this._prepare(a, c, u), this._renderContent(e, c, s, l, u, v, n), Zs(o, c.pos, c.box);
        }
      }),
      (r.prototype._prepare = function (e, t, a) {
        for (var n = e; n; n = n.parentNode) {
          var i = Sr(n.getModel().get('name'), ''),
            o = a.getTextRect(i),
            s = Math.max(o.width + Wv * 2, t.emptyItemWidth);
          (t.totalWidth += s + jn), t.renderList.push({ node: n, text: i, width: s });
        }
      }),
      (r.prototype._renderContent = function (e, t, a, n, i, o, s) {
        for (
          var l = 0,
            u = t.emptyItemWidth,
            v = e.get(['breadcrumb', 'height']),
            c = Ys(t.pos, t.box),
            h = t.totalWidth,
            f = t.renderList,
            d = n.getModel('itemStyle').getItemStyle(),
            p = f.length - 1;
          p >= 0;
          p--
        ) {
          var g = f[p],
            m = g.node,
            S = g.width,
            y = g.text;
          h > c.width && ((h -= S - u), (S = u), (y = null));
          var b = new Me({
            shape: { points: Zv(l, 0, S, v, p === f.length - 1, p === 0) },
            style: gt(a.getItemStyle(), { lineJoin: 'bevel' }),
            textContent: new Wt({ style: kt(i, { text: y }) }),
            textConfig: { position: 'inside' },
            z2: _r * 1e4,
            onclick: et(s, m),
          });
          (b.disableLabelAnimation = !0),
            (b.getTextContent().ensureState('emphasis').style = kt(o, { text: y })),
            (b.ensureState('emphasis').style = d),
            lt(b, n.get('focus'), n.get('blurScope'), n.get('disabled')),
            this.group.add(b),
            Yv(b, e, m),
            (l += S + jn);
        }
      }),
      (r.prototype.remove = function () {
        this.group.removeAll();
      }),
      r
    );
  })();
function Zv(r, e, t, a, n, i) {
  var o = [
    [n ? r : r - Rr, e],
    [r + t, e],
    [r + t, e + a],
    [n ? r : r - Rr, e + a],
  ];
  return !i && o.splice(2, 0, [r + t + Rr, e + a / 2]), !n && o.push([r, e + a / 2]), o;
}
function Yv(r, e, t) {
  it(r).eventData = {
    componentType: 'series',
    componentSubType: 'treemap',
    componentIndex: e.componentIndex,
    seriesIndex: e.seriesIndex,
    seriesName: e.name,
    seriesType: 'treemap',
    selfType: 'breadcrumb',
    nodeData: { dataIndex: t && t.dataIndex, name: t && t.name },
    treePathInfo: t && Lr(t, e),
  };
}
const Xv = Uv;
var qv = (function () {
  function r() {
    (this._storage = []), (this._elExistsMap = {});
  }
  return (
    (r.prototype.add = function (e, t, a, n, i) {
      return this._elExistsMap[e.id]
        ? !1
        : ((this._elExistsMap[e.id] = !0),
          this._storage.push({ el: e, target: t, duration: a, delay: n, easing: i }),
          !0);
    }),
    (r.prototype.finished = function (e) {
      return (this._finishedCallback = e), this;
    }),
    (r.prototype.start = function () {
      for (
        var e = this,
          t = this._storage.length,
          a = function () {
            t--,
              t <= 0 &&
                ((e._storage.length = 0),
                (e._elExistsMap = {}),
                e._finishedCallback && e._finishedCallback());
          },
          n = 0,
          i = this._storage.length;
        n < i;
        n++
      ) {
        var o = this._storage[n];
        o.el.animateTo(o.target, {
          duration: o.duration,
          delay: o.delay,
          easing: o.easing,
          setToFinal: !0,
          done: a,
          aborted: a,
        });
      }
      return this;
    }),
    r
  );
})();
function Kv() {
  return new qv();
}
var Ia = rt,
  Qn = jt,
  Jn = 3,
  ti = 'label',
  ei = 'upperLabel',
  jv = _r * 10,
  Qv = _r * 2,
  Jv = _r * 3,
  re = Xs([
    ['fill', 'color'],
    ['stroke', 'strokeColor'],
    ['lineWidth', 'strokeWidth'],
    ['shadowBlur'],
    ['shadowOffsetX'],
    ['shadowOffsetY'],
    ['shadowColor'],
  ]),
  ri = function (r) {
    var e = re(r);
    return (e.stroke = e.fill = e.lineWidth = null), e;
  },
  sr = Lt(),
  tc = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t._state = 'ready'), (t._storage = _e()), t;
    }
    return (
      (e.prototype.render = function (t, a, n, i) {
        var o = a.findComponents({ mainType: 'series', subType: 'treemap', query: i });
        if (!(It(o, t) < 0)) {
          (this.seriesModel = t), (this.api = n), (this.ecModel = a);
          var s = ['treemapZoomToNode', 'treemapRootToNode'],
            l = Re(i, s, t),
            u = i && i.type,
            v = t.layoutInfo,
            c = !this._oldTree,
            h = this._storage,
            f =
              u === 'treemapRootToNode' && l && h
                ? { rootNodeGroup: h.nodeGroup[l.node.getRawIndex()], direction: i.direction }
                : null,
            d = this._giveContainerGroup(v),
            p = t.get('animation'),
            g = this._doRender(d, t, f);
          p && !c && (!u || u === 'treemapZoomToNode' || u === 'treemapRootToNode')
            ? this._doAnimation(d, g, t, f)
            : g.renderFinally(),
            this._resetController(n),
            this._renderBreadcrumb(t, n, l);
        }
      }),
      (e.prototype._giveContainerGroup = function (t) {
        var a = this._containerGroup;
        return (
          a || ((a = this._containerGroup = new Ia()), this._initEvents(a), this.group.add(a)),
          (a.x = t.x),
          (a.y = t.y),
          a
        );
      }),
      (e.prototype._doRender = function (t, a, n) {
        var i = a.getData().tree,
          o = this._oldTree,
          s = _e(),
          l = _e(),
          u = this._storage,
          v = [];
        function c(g, m, S, y) {
          return ec(a, l, u, n, s, v, g, m, S, y);
        }
        f(i.root ? [i.root] : [], o && o.root ? [o.root] : [], t, i === o || !o, 0);
        var h = d(u);
        return (
          (this._oldTree = i),
          (this._storage = l),
          { lastsForAnimation: s, willDeleteEls: h, renderFinally: p }
        );
        function f(g, m, S, y, b) {
          y
            ? ((m = g),
              R(g, function (w, I) {
                !w.isRemoved() && x(I, I);
              }))
            : new pe(m, g, _, _).add(x).update(x).remove(et(x, null)).execute();
          function _(w) {
            return w.getId();
          }
          function x(w, I) {
            var L = w != null ? g[w] : null,
              D = I != null ? m[I] : null,
              T = c(L, D, S, b);
            T && f((L && L.viewChildren) || [], (D && D.viewChildren) || [], T, y, b + 1);
          }
        }
        function d(g) {
          var m = _e();
          return (
            g &&
              R(g, function (S, y) {
                var b = m[y];
                R(S, function (_) {
                  _ && (b.push(_), (sr(_).willDelete = !0));
                });
              }),
            m
          );
        }
        function p() {
          R(h, function (g) {
            R(g, function (m) {
              m.parent && m.parent.remove(m);
            });
          }),
            R(v, function (g) {
              (g.invisible = !0), g.dirty();
            });
        }
      }),
      (e.prototype._doAnimation = function (t, a, n, i) {
        var o = n.get('animationDurationUpdate'),
          s = n.get('animationEasing'),
          l = (nt(o) ? 0 : o) || 0,
          u = (nt(s) ? null : s) || 'cubicOut',
          v = Kv();
        R(a.willDeleteEls, function (c, h) {
          R(c, function (f, d) {
            if (!f.invisible) {
              var p = f.parent,
                g,
                m = sr(p);
              if (i && i.direction === 'drillDown')
                g =
                  p === i.rootNodeGroup
                    ? {
                        shape: { x: 0, y: 0, width: m.nodeWidth, height: m.nodeHeight },
                        style: { opacity: 0 },
                      }
                    : { style: { opacity: 0 } };
              else {
                var S = 0,
                  y = 0;
                m.willDelete || ((S = m.nodeWidth / 2), (y = m.nodeHeight / 2)),
                  (g =
                    h === 'nodeGroup'
                      ? { x: S, y, style: { opacity: 0 } }
                      : { shape: { x: S, y, width: 0, height: 0 }, style: { opacity: 0 } });
              }
              g && v.add(f, g, l, 0, u);
            }
          });
        }),
          R(
            this._storage,
            function (c, h) {
              R(c, function (f, d) {
                var p = a.lastsForAnimation[h][d],
                  g = {};
                p &&
                  (f instanceof rt
                    ? p.oldX != null && ((g.x = f.x), (g.y = f.y), (f.x = p.oldX), (f.y = p.oldY))
                    : (p.oldShape && ((g.shape = U({}, f.shape)), f.setShape(p.oldShape)),
                      p.fadein
                        ? (f.setStyle('opacity', 0), (g.style = { opacity: 1 }))
                        : f.style.opacity !== 1 && (g.style = { opacity: 1 })),
                  v.add(f, g, l, 0, u));
              });
            },
            this,
          ),
          (this._state = 'animating'),
          v
            .finished(
              st(function () {
                (this._state = 'ready'), a.renderFinally();
              }, this),
            )
            .start();
      }),
      (e.prototype._resetController = function (t) {
        var a = this._controller;
        a ||
          ((a = this._controller = new Ba(t.getZr())),
          a.enable(this.seriesModel.get('roam')),
          a.on('pan', st(this._onPan, this)),
          a.on('zoom', st(this._onZoom, this)));
        var n = new dt(0, 0, t.getWidth(), t.getHeight());
        a.setPointerChecker(function (i, o, s) {
          return n.contain(o, s);
        });
      }),
      (e.prototype._clearController = function () {
        var t = this._controller;
        t && (t.dispose(), (t = null));
      }),
      (e.prototype._onPan = function (t) {
        if (this._state !== 'animating' && (Math.abs(t.dx) > Jn || Math.abs(t.dy) > Jn)) {
          var a = this.seriesModel.getData().tree.root;
          if (!a) return;
          var n = a.getLayout();
          if (!n) return;
          this.api.dispatchAction({
            type: 'treemapMove',
            from: this.uid,
            seriesId: this.seriesModel.id,
            rootRect: { x: n.x + t.dx, y: n.y + t.dy, width: n.width, height: n.height },
          });
        }
      }),
      (e.prototype._onZoom = function (t) {
        var a = t.originX,
          n = t.originY;
        if (this._state !== 'animating') {
          var i = this.seriesModel.getData().tree.root;
          if (!i) return;
          var o = i.getLayout();
          if (!o) return;
          var s = new dt(o.x, o.y, o.width, o.height),
            l = this.seriesModel.layoutInfo;
          (a -= l.x), (n -= l.y);
          var u = Ks();
          Pn(u, u, [-a, -n]),
            qs(u, u, [t.scale, t.scale]),
            Pn(u, u, [a, n]),
            s.applyTransform(u),
            this.api.dispatchAction({
              type: 'treemapRender',
              from: this.uid,
              seriesId: this.seriesModel.id,
              rootRect: { x: s.x, y: s.y, width: s.width, height: s.height },
            });
        }
      }),
      (e.prototype._initEvents = function (t) {
        var a = this;
        t.on(
          'click',
          function (n) {
            if (a._state === 'ready') {
              var i = a.seriesModel.get('nodeClick', !0);
              if (i) {
                var o = a.findTarget(n.offsetX, n.offsetY);
                if (o) {
                  var s = o.node;
                  if (s.getLayout().isLeafRoot) a._rootToNode(o);
                  else if (i === 'zoomToNode') a._zoomToNode(o);
                  else if (i === 'link') {
                    var l = s.hostTree.data.getItemModel(s.dataIndex),
                      u = l.get('link', !0),
                      v = l.get('target', !0) || 'blank';
                    u && Io(u, v);
                  }
                }
              }
            }
          },
          this,
        );
      }),
      (e.prototype._renderBreadcrumb = function (t, a, n) {
        var i = this;
        n ||
          ((n =
            t.get('leafDepth', !0) != null
              ? { node: t.getViewRoot() }
              : this.findTarget(a.getWidth() / 2, a.getHeight() / 2)),
          n || (n = { node: t.getData().tree.root })),
          (this._breadcrumb || (this._breadcrumb = new Xv(this.group))).render(
            t,
            a,
            n.node,
            function (o) {
              i._state !== 'animating' &&
                (un(t.getViewRoot(), o) ? i._rootToNode({ node: o }) : i._zoomToNode({ node: o }));
            },
          );
      }),
      (e.prototype.remove = function () {
        this._clearController(),
          this._containerGroup && this._containerGroup.removeAll(),
          (this._storage = _e()),
          (this._state = 'ready'),
          this._breadcrumb && this._breadcrumb.remove();
      }),
      (e.prototype.dispose = function () {
        this._clearController();
      }),
      (e.prototype._zoomToNode = function (t) {
        this.api.dispatchAction({
          type: 'treemapZoomToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: t.node,
        });
      }),
      (e.prototype._rootToNode = function (t) {
        this.api.dispatchAction({
          type: 'treemapRootToNode',
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: t.node,
        });
      }),
      (e.prototype.findTarget = function (t, a) {
        var n,
          i = this.seriesModel.getViewRoot();
        return (
          i.eachNode(
            { attr: 'viewChildren', order: 'preorder' },
            function (o) {
              var s = this._storage.background[o.getRawIndex()];
              if (s) {
                var l = s.transformCoordToLocal(t, a),
                  u = s.shape;
                if (u.x <= l[0] && l[0] <= u.x + u.width && u.y <= l[1] && l[1] <= u.y + u.height)
                  n = { node: o, offsetX: l[0], offsetY: l[1] };
                else return !1;
              }
            },
            this,
          ),
          n
        );
      }),
      (e.type = 'treemap'),
      e
    );
  })(ct);
function _e() {
  return { nodeGroup: [], background: [], content: [] };
}
function ec(r, e, t, a, n, i, o, s, l, u) {
  if (!o) return;
  var v = o.getLayout(),
    c = r.getData(),
    h = o.getModel();
  if ((c.setItemGraphicEl(o.dataIndex, null), !v || !v.isInView)) return;
  var f = v.width,
    d = v.height,
    p = v.borderWidth,
    g = v.invisible,
    m = o.getRawIndex(),
    S = s && s.getRawIndex(),
    y = o.viewChildren,
    b = v.upperHeight,
    _ = y && y.length,
    x = h.getModel('itemStyle'),
    w = h.getModel(['emphasis', 'itemStyle']),
    I = h.getModel(['blur', 'itemStyle']),
    L = h.getModel(['select', 'itemStyle']),
    D = x.get('borderRadius') || 0,
    T = W('nodeGroup', Ia);
  if (!T) return;
  if (
    (l.add(T),
    (T.x = v.x || 0),
    (T.y = v.y || 0),
    T.markRedraw(),
    (sr(T).nodeWidth = f),
    (sr(T).nodeHeight = d),
    v.isAboveViewRoot)
  )
    return T;
  var M = W('background', Qn, u, Qv);
  M && G(T, M, _ && v.upperLabelHeight);
  var P = h.getModel('emphasis'),
    A = P.get('focus'),
    C = P.get('blurScope'),
    E = P.get('disabled'),
    N =
      A === 'ancestor'
        ? o.getAncestorsIndices()
        : A === 'descendant'
          ? o.getDescendantIndices()
          : A;
  if (_) En(T) && Fe(T, !1), M && (Fe(M, !E), c.setItemGraphicEl(o.dataIndex, M), Nn(M, N, C));
  else {
    var V = W('content', Qn, u, Jv);
    V && O(T, V),
      (M.disableMorphing = !0),
      M && En(M) && Fe(M, !1),
      Fe(T, !E),
      c.setItemGraphicEl(o.dataIndex, T),
      Nn(T, N, C);
  }
  return T;
  function G(Y, H, Q) {
    var q = it(H);
    if (
      ((q.dataIndex = o.dataIndex),
      (q.seriesIndex = r.seriesIndex),
      H.setShape({ x: 0, y: 0, width: f, height: d, r: D }),
      g)
    )
      B(H);
    else {
      H.invisible = !1;
      var J = o.getVisual('style'),
        ft = J.stroke,
        Dt = ri(x);
      Dt.fill = ft;
      var at = re(w);
      at.fill = w.get('borderColor');
      var Tt = re(I);
      Tt.fill = I.get('borderColor');
      var Vt = re(L);
      if (((Vt.fill = L.get('borderColor')), Q)) {
        var oe = f - 2 * p;
        K(H, ft, J.opacity, { x: p, y: 0, width: oe, height: b });
      } else H.removeTextContent();
      H.setStyle(Dt),
        (H.ensureState('emphasis').style = at),
        (H.ensureState('blur').style = Tt),
        (H.ensureState('select').style = Vt),
        ar(H);
    }
    Y.add(H);
  }
  function O(Y, H) {
    var Q = it(H);
    (Q.dataIndex = o.dataIndex), (Q.seriesIndex = r.seriesIndex);
    var q = Math.max(f - 2 * p, 0),
      J = Math.max(d - 2 * p, 0);
    if (((H.culling = !0), H.setShape({ x: p, y: p, width: q, height: J, r: D }), g)) B(H);
    else {
      H.invisible = !1;
      var ft = o.getVisual('style'),
        Dt = ft.fill,
        at = ri(x);
      (at.fill = Dt), (at.decal = ft.decal);
      var Tt = re(w),
        Vt = re(I),
        oe = re(L);
      K(H, Dt, ft.opacity, null),
        H.setStyle(at),
        (H.ensureState('emphasis').style = Tt),
        (H.ensureState('blur').style = Vt),
        (H.ensureState('select').style = oe),
        ar(H);
    }
    Y.add(H);
  }
  function B(Y) {
    !Y.invisible && i.push(Y);
  }
  function K(Y, H, Q, q) {
    var J = h.getModel(q ? ei : ti),
      ft = Sr(h.get('name'), null),
      Dt = J.getShallow('show');
    Kt(Y, Rt(h, q ? ei : ti), {
      defaultText: Dt ? ft : null,
      inheritColor: H,
      defaultOpacity: Q,
      labelFetcher: r,
      labelDataIndex: o.dataIndex,
    });
    var at = Y.getTextContent();
    if (at) {
      var Tt = at.style,
        Vt = js(Tt.padding || 0);
      q && (Y.setTextConfig({ layoutRect: q }), (at.disableLabelLayout = !0)),
        (at.beforeUpdate = function () {
          var Tn = Math.max((q ? q.width : Y.shape.width) - Vt[1] - Vt[3], 0),
            An = Math.max((q ? q.height : Y.shape.height) - Vt[0] - Vt[2], 0);
          (Tt.width !== Tn || Tt.height !== An) && at.setStyle({ width: Tn, height: An });
        }),
        (Tt.truncateMinChar = 2),
        (Tt.lineOverflow = 'truncate'),
        X(Tt, q, v);
      var oe = at.getState('emphasis');
      X(oe ? oe.style : null, q, v);
    }
  }
  function X(Y, H, Q) {
    var q = Y ? Y.text : null;
    if (!H && Q.isLeafRoot && q != null) {
      var J = r.get('drillDownIcon', !0);
      Y.text = J ? J + ' ' + q : q;
    }
  }
  function W(Y, H, Q, q) {
    var J = S != null && t[Y][S],
      ft = n[Y];
    return (
      J
        ? ((t[Y][S] = null), j(ft, J))
        : g || ((J = new H()), J instanceof Ha && (J.z2 = rc(Q, q)), ut(ft, J)),
      (e[Y][m] = J)
    );
  }
  function j(Y, H) {
    var Q = (Y[m] = {});
    H instanceof Ia ? ((Q.oldX = H.x), (Q.oldY = H.y)) : (Q.oldShape = U({}, H.shape));
  }
  function ut(Y, H) {
    var Q = (Y[m] = {}),
      q = o.parentNode,
      J = H instanceof rt;
    if (q && (!a || a.direction === 'drillDown')) {
      var ft = 0,
        Dt = 0,
        at = n.background[q.getRawIndex()];
      !a && at && at.oldShape && ((ft = at.oldShape.width), (Dt = at.oldShape.height)),
        J ? ((Q.oldX = 0), (Q.oldY = Dt)) : (Q.oldShape = { x: ft, y: Dt, width: 0, height: 0 });
    }
    Q.fadein = !J;
  }
}
function rc(r, e) {
  return r * jv + e;
}
const ac = tc;
var nc = 'itemStyle',
  Xo = Lt();
const ic = {
  seriesType: 'treemap',
  reset: function (r) {
    var e = r.getData().tree,
      t = e.root;
    t.isRemoved() || qo(t, {}, r.getViewRoot().getAncestors(), r);
  },
};
function qo(r, e, t, a) {
  var n = r.getModel(),
    i = r.getLayout(),
    o = r.hostTree.data;
  if (!(!i || i.invisible || !i.isInView)) {
    var s = n.getModel(nc),
      l = oc(s, e, a),
      u = o.ensureUniqueItemVisual(r.dataIndex, 'style'),
      v = s.get('borderColor'),
      c = s.get('borderColorSaturation'),
      h;
    c != null && ((h = ai(l)), (v = sc(c, h))), (u.stroke = v);
    var f = r.viewChildren;
    if (!f || !f.length) (h = ai(l)), (u.fill = h);
    else {
      var d = lc(r, n, i, s, l, f);
      R(f, function (p, g) {
        if (p.depth >= t.length || p === t[p.depth]) {
          var m = uc(n, l, p, g, d, a);
          qo(p, m, t, a);
        }
      });
    }
  }
}
function oc(r, e, t) {
  var a = U({}, e),
    n = t.designatedVisualItemStyle;
  return (
    R(['color', 'colorAlpha', 'colorSaturation'], function (i) {
      n[i] = e[i];
      var o = r.get(i);
      (n[i] = null), o != null && (a[i] = o);
    }),
    a
  );
}
function ai(r) {
  var e = Vr(r, 'color');
  if (e) {
    var t = Vr(r, 'colorAlpha'),
      a = Vr(r, 'colorSaturation');
    return a && (e = Lo(e, null, null, a)), t && (e = da(e, t)), e;
  }
}
function sc(r, e) {
  return e != null ? Lo(e, null, null, r) : null;
}
function Vr(r, e) {
  var t = r[e];
  if (t != null && t !== 'none') return t;
}
function lc(r, e, t, a, n, i) {
  if (!(!i || !i.length)) {
    var o =
      kr(e, 'color') ||
      (n.color != null && n.color !== 'none' && (kr(e, 'colorAlpha') || kr(e, 'colorSaturation')));
    if (o) {
      var s = e.get('visualMin'),
        l = e.get('visualMax'),
        u = t.dataExtent.slice();
      s != null && s < u[0] && (u[0] = s), l != null && l > u[1] && (u[1] = l);
      var v = e.get('colorMappingBy'),
        c = { type: o.name, dataExtent: u, visual: o.range };
      c.type === 'color' && (v === 'index' || v === 'id')
        ? ((c.mappingMethod = 'category'), (c.loop = !0))
        : (c.mappingMethod = 'linear');
      var h = new Do(c);
      return (Xo(h).drColorMappingBy = v), h;
    }
  }
}
function kr(r, e) {
  var t = r.get(e);
  return F(t) && t.length ? { name: e, range: t } : null;
}
function uc(r, e, t, a, n, i) {
  var o = U({}, e);
  if (n) {
    var s = n.type,
      l = s === 'color' && Xo(n).drColorMappingBy,
      u =
        l === 'index'
          ? a
          : l === 'id'
            ? i.mapIdToIndex(t.getId())
            : t.getValue(r.get('visualDimension'));
    o[s] = n.mapValueToVisual(u);
  }
  return o;
}
var Ve = Math.max,
  lr = Math.min,
  ni = Nt,
  vn = R,
  Ko = ['itemStyle', 'borderWidth'],
  vc = ['itemStyle', 'gapWidth'],
  cc = ['upperLabel', 'show'],
  hc = ['upperLabel', 'height'];
const fc = {
  seriesType: 'treemap',
  reset: function (r, e, t, a) {
    var n = t.getWidth(),
      i = t.getHeight(),
      o = r.option,
      s = de(r.getBoxLayoutParams(), { width: t.getWidth(), height: t.getHeight() }),
      l = o.size || [],
      u = z(ni(s.width, l[0]), n),
      v = z(ni(s.height, l[1]), i),
      c = a && a.type,
      h = ['treemapZoomToNode', 'treemapRootToNode'],
      f = Re(a, h, r),
      d = c === 'treemapRender' || c === 'treemapMove' ? a.rootRect : null,
      p = r.getViewRoot(),
      g = Uo(p);
    if (c !== 'treemapMove') {
      var m = c === 'treemapZoomToNode' ? Sc(r, f, p, u, v) : d ? [d.width, d.height] : [u, v],
        S = o.sort;
      S && S !== 'asc' && S !== 'desc' && (S = 'desc');
      var y = { squareRatio: o.squareRatio, sort: S, leafDepth: o.leafDepth };
      p.hostTree.clearLayouts();
      var b = { x: 0, y: 0, width: m[0], height: m[1], area: m[0] * m[1] };
      p.setLayout(b),
        jo(p, y, !1, 0),
        (b = p.getLayout()),
        vn(g, function (x, w) {
          var I = (g[w + 1] || p).getValue();
          x.setLayout(U({ dataExtent: [I, I], borderWidth: 0, upperHeight: 0 }, b));
        });
    }
    var _ = r.getData().tree.root;
    _.setLayout(_c(s, d, f), !0), r.setLayoutInfo(s), Qo(_, new dt(-s.x, -s.y, n, i), g, p, 0);
  },
};
function jo(r, e, t, a) {
  var n, i;
  if (!r.isRemoved()) {
    var o = r.getLayout();
    (n = o.width), (i = o.height);
    var s = r.getModel(),
      l = s.get(Ko),
      u = s.get(vc) / 2,
      v = Jo(s),
      c = Math.max(l, v),
      h = l - u,
      f = c - u;
    r.setLayout({ borderWidth: l, upperHeight: c, upperLabelHeight: v }, !0),
      (n = Ve(n - 2 * h, 0)),
      (i = Ve(i - h - f, 0));
    var d = n * i,
      p = pc(r, s, d, e, t, a);
    if (p.length) {
      var g = { x: h, y: f, width: n, height: i },
        m = lr(n, i),
        S = 1 / 0,
        y = [];
      y.area = 0;
      for (var b = 0, _ = p.length; b < _; ) {
        var x = p[b];
        y.push(x), (y.area += x.getLayout().area);
        var w = mc(y, m, e.squareRatio);
        w <= S
          ? (b++, (S = w))
          : ((y.area -= y.pop().getLayout().area),
            ii(y, m, g, u, !1),
            (m = lr(g.width, g.height)),
            (y.length = y.area = 0),
            (S = 1 / 0));
      }
      if ((y.length && ii(y, m, g, u, !0), !t)) {
        var I = s.get('childrenVisibleMin');
        I != null && d < I && (t = !0);
      }
      for (var b = 0, _ = p.length; b < _; b++) jo(p[b], e, t, a + 1);
    }
  }
}
function pc(r, e, t, a, n, i) {
  var o = r.children || [],
    s = a.sort;
  s !== 'asc' && s !== 'desc' && (s = null);
  var l = a.leafDepth != null && a.leafDepth <= i;
  if (n && !l) return (r.viewChildren = []);
  (o = At(o, function (f) {
    return !f.isRemoved();
  })),
    gc(o, s);
  var u = yc(e, o, s);
  if (u.sum === 0) return (r.viewChildren = []);
  if (((u.sum = dc(e, t, u.sum, s, o)), u.sum === 0)) return (r.viewChildren = []);
  for (var v = 0, c = o.length; v < c; v++) {
    var h = (o[v].getValue() / u.sum) * t;
    o[v].setLayout({ area: h });
  }
  return (
    l && (o.length && r.setLayout({ isLeafRoot: !0 }, !0), (o.length = 0)),
    (r.viewChildren = o),
    r.setLayout({ dataExtent: u.dataExtent }, !0),
    o
  );
}
function dc(r, e, t, a, n) {
  if (!a) return t;
  for (var i = r.get('visibleMin'), o = n.length, s = o, l = o - 1; l >= 0; l--) {
    var u = n[a === 'asc' ? o - l - 1 : l].getValue();
    (u / t) * e < i && ((s = l), (t -= u));
  }
  return a === 'asc' ? n.splice(0, o - s) : n.splice(s, o - s), t;
}
function gc(r, e) {
  return (
    e &&
      r.sort(function (t, a) {
        var n = e === 'asc' ? t.getValue() - a.getValue() : a.getValue() - t.getValue();
        return n === 0 ? (e === 'asc' ? t.dataIndex - a.dataIndex : a.dataIndex - t.dataIndex) : n;
      }),
    r
  );
}
function yc(r, e, t) {
  for (var a = 0, n = 0, i = e.length; n < i; n++) a += e[n].getValue();
  var o = r.get('visualDimension'),
    s;
  return (
    !e || !e.length
      ? (s = [NaN, NaN])
      : o === 'value' && t
        ? ((s = [e[e.length - 1].getValue(), e[0].getValue()]), t === 'asc' && s.reverse())
        : ((s = [1 / 0, -1 / 0]),
          vn(e, function (l) {
            var u = l.getValue(o);
            u < s[0] && (s[0] = u), u > s[1] && (s[1] = u);
          })),
    { sum: a, dataExtent: s }
  );
}
function mc(r, e, t) {
  for (var a = 0, n = 1 / 0, i = 0, o = void 0, s = r.length; i < s; i++)
    (o = r[i].getLayout().area), o && (o < n && (n = o), o > a && (a = o));
  var l = r.area * r.area,
    u = e * e * t;
  return l ? Ve((u * a) / l, l / (u * n)) : 1 / 0;
}
function ii(r, e, t, a, n) {
  var i = e === t.width ? 0 : 1,
    o = 1 - i,
    s = ['x', 'y'],
    l = ['width', 'height'],
    u = t[s[i]],
    v = e ? r.area / e : 0;
  (n || v > t[l[o]]) && (v = t[l[o]]);
  for (var c = 0, h = r.length; c < h; c++) {
    var f = r[c],
      d = {},
      p = v ? f.getLayout().area / v : 0,
      g = (d[l[o]] = Ve(v - 2 * a, 0)),
      m = t[s[i]] + t[l[i]] - u,
      S = c === h - 1 || m < p ? m : p,
      y = (d[l[i]] = Ve(S - 2 * a, 0));
    (d[s[o]] = t[s[o]] + lr(a, g / 2)), (d[s[i]] = u + lr(a, y / 2)), (u += S), f.setLayout(d, !0);
  }
  (t[s[o]] += v), (t[l[o]] -= v);
}
function Sc(r, e, t, a, n) {
  var i = (e || {}).node,
    o = [a, n];
  if (!i || i === t) return o;
  for (var s, l = a * n, u = l * r.option.zoomToNodeRatio; (s = i.parentNode); ) {
    for (var v = 0, c = s.children, h = 0, f = c.length; h < f; h++) v += c[h].getValue();
    var d = i.getValue();
    if (d === 0) return o;
    u *= v / d;
    var p = s.getModel(),
      g = p.get(Ko),
      m = Math.max(g, Jo(p));
    (u += 4 * g * g + (3 * g + m) * Math.pow(u, 0.5)), u > Rn && (u = Rn), (i = s);
  }
  u < l && (u = l);
  var S = Math.pow(u / l, 0.5);
  return [a * S, n * S];
}
function _c(r, e, t) {
  if (e) return { x: e.x, y: e.y };
  var a = { x: 0, y: 0 };
  if (!t) return a;
  var n = t.node,
    i = n.getLayout();
  if (!i) return a;
  for (var o = [i.width / 2, i.height / 2], s = n; s; ) {
    var l = s.getLayout();
    (o[0] += l.x), (o[1] += l.y), (s = s.parentNode);
  }
  return { x: r.width / 2 - o[0], y: r.height / 2 - o[1] };
}
function Qo(r, e, t, a, n) {
  var i = r.getLayout(),
    o = t[n],
    s = o && o === r;
  if (!((o && !s) || (n === t.length && r !== a))) {
    r.setLayout({ isInView: !0, invisible: !s && !e.intersect(i), isAboveViewRoot: s }, !0);
    var l = new dt(e.x - i.x, e.y - i.y, e.width, e.height);
    vn(r.viewChildren || [], function (u) {
      Qo(u, l, t, a, n + 1);
    });
  }
}
function Jo(r) {
  return r.get(cc) ? r.get(hc) : 0;
}
function bc(r) {
  r.registerSeriesModel($v),
    r.registerChartView(ac),
    r.registerVisual(ic),
    r.registerLayout(fc),
    Ov(r);
}
function xc(r) {
  var e = r.findComponents({ mainType: 'legend' });
  !e ||
    !e.length ||
    r.eachSeriesByType('graph', function (t) {
      var a = t.getCategoriesData(),
        n = t.getGraph(),
        i = n.data,
        o = a.mapArray(a.getName);
      i.filterSelf(function (s) {
        var l = i.getItemModel(s),
          u = l.getShallow('category');
        if (u != null) {
          Ht(u) && (u = o[u]);
          for (var v = 0; v < e.length; v++) if (!e[v].isSelected(u)) return !1;
        }
        return !0;
      });
    });
}
function wc(r) {
  var e = {};
  r.eachSeriesByType('graph', function (t) {
    var a = t.getCategoriesData(),
      n = t.getData(),
      i = {};
    a.each(function (o) {
      var s = a.getName(o);
      i['ec-' + s] = o;
      var l = a.getItemModel(o),
        u = l.getModel('itemStyle').getItemStyle();
      u.fill || (u.fill = t.getColorFromPalette(s, e)), a.setItemVisual(o, 'style', u);
      for (var v = ['symbol', 'symbolSize', 'symbolKeepAspect'], c = 0; c < v.length; c++) {
        var h = l.getShallow(v[c], !0);
        h != null && a.setItemVisual(o, v[c], h);
      }
    }),
      a.count() &&
        n.each(function (o) {
          var s = n.getItemModel(o),
            l = s.getShallow('category');
          if (l != null) {
            St(l) && (l = i['ec-' + l]);
            var u = a.getItemVisual(l, 'style'),
              v = n.ensureUniqueItemVisual(o, 'style');
            U(v, u);
            for (var c = ['symbol', 'symbolSize', 'symbolKeepAspect'], h = 0; h < c.length; h++)
              n.setItemVisual(o, c[h], a.getItemVisual(l, c[h]));
          }
        });
  });
}
function Xe(r) {
  return r instanceof Array || (r = [r, r]), r;
}
function Ic(r) {
  r.eachSeriesByType('graph', function (e) {
    var t = e.getGraph(),
      a = e.getEdgeData(),
      n = Xe(e.get('edgeSymbol')),
      i = Xe(e.get('edgeSymbolSize'));
    a.setVisual('fromSymbol', n && n[0]),
      a.setVisual('toSymbol', n && n[1]),
      a.setVisual('fromSymbolSize', i && i[0]),
      a.setVisual('toSymbolSize', i && i[1]),
      a.setVisual('style', e.getModel('lineStyle').getLineStyle()),
      a.each(function (o) {
        var s = a.getItemModel(o),
          l = t.getEdgeByIndex(o),
          u = Xe(s.getShallow('symbol', !0)),
          v = Xe(s.getShallow('symbolSize', !0)),
          c = s.getModel('lineStyle').getLineStyle(),
          h = a.ensureUniqueItemVisual(o, 'style');
        switch ((U(h, c), h.stroke)) {
          case 'source': {
            var f = l.node1.getVisual('style');
            h.stroke = f && f.fill;
            break;
          }
          case 'target': {
            var f = l.node2.getVisual('style');
            h.stroke = f && f.fill;
            break;
          }
        }
        u[0] && l.setVisual('fromSymbol', u[0]),
          u[1] && l.setVisual('toSymbol', u[1]),
          v[0] && l.setVisual('fromSymbolSize', v[0]),
          v[1] && l.setVisual('toSymbolSize', v[1]);
      });
  });
}
var La = '-->',
  Dr = function (r) {
    return r.get('autoCurveness') || null;
  },
  ts = function (r, e) {
    var t = Dr(r),
      a = 20,
      n = [];
    if (Ht(t)) a = t;
    else if (F(t)) {
      r.__curvenessList = t;
      return;
    }
    e > a && (a = e);
    var i = a % 2 ? a + 2 : a + 3;
    n = [];
    for (var o = 0; o < i; o++) n.push(((o % 2 ? o + 1 : o) / 10) * (o % 2 ? -1 : 1));
    r.__curvenessList = n;
  },
  ke = function (r, e, t) {
    var a = [r.id, r.dataIndex].join('.'),
      n = [e.id, e.dataIndex].join('.');
    return [t.uid, a, n].join(La);
  },
  es = function (r) {
    var e = r.split(La);
    return [e[0], e[2], e[1]].join(La);
  },
  Lc = function (r, e) {
    var t = ke(r.node1, r.node2, e);
    return e.__edgeMap[t];
  },
  Dc = function (r, e) {
    var t = Da(ke(r.node1, r.node2, e), e),
      a = Da(ke(r.node2, r.node1, e), e);
    return t + a;
  },
  Da = function (r, e) {
    var t = e.__edgeMap;
    return t[r] ? t[r].length : 0;
  };
function Tc(r) {
  Dr(r) && ((r.__curvenessList = []), (r.__edgeMap = {}), ts(r));
}
function Ac(r, e, t, a) {
  if (Dr(t)) {
    var n = ke(r, e, t),
      i = t.__edgeMap,
      o = i[es(n)];
    i[n] && !o ? (i[n].isForward = !0) : o && i[n] && ((o.isForward = !0), (i[n].isForward = !1)),
      (i[n] = i[n] || []),
      i[n].push(a);
  }
}
function cn(r, e, t, a) {
  var n = Dr(e),
    i = F(n);
  if (!n) return null;
  var o = Lc(r, e);
  if (!o) return null;
  for (var s = -1, l = 0; l < o.length; l++)
    if (o[l] === t) {
      s = l;
      break;
    }
  var u = Dc(r, e);
  ts(e, u), (r.lineStyle = r.lineStyle || {});
  var v = ke(r.node1, r.node2, e),
    c = e.__curvenessList,
    h = i || u % 2 ? 0 : 1;
  if (o.isForward) return c[h + s];
  var f = es(v),
    d = Da(f, e),
    p = c[s + d + h];
  return a
    ? i
      ? n && n[0] === 0
        ? (d + h) % 2
          ? p
          : -p
        : ((d % 2 ? 0 : 1) + h) % 2
          ? p
          : -p
      : (d + h) % 2
        ? p
        : -p
    : c[s + d + h];
}
function rs(r) {
  var e = r.coordinateSystem;
  if (!(e && e.type !== 'view')) {
    var t = r.getGraph();
    t.eachNode(function (a) {
      var n = a.getModel();
      a.setLayout([+n.get('x'), +n.get('y')]);
    }),
      hn(t, r);
  }
}
function hn(r, e) {
  r.eachEdge(function (t, a) {
    var n = ze(t.getModel().get(['lineStyle', 'curveness']), -cn(t, e, a, !0), 0),
      i = Yt(t.node1.getLayout()),
      o = Yt(t.node2.getLayout()),
      s = [i, o];
    +n && s.push([(i[0] + o[0]) / 2 - (i[1] - o[1]) * n, (i[1] + o[1]) / 2 - (o[0] - i[0]) * n]),
      t.setLayout(s);
  });
}
function Cc(r, e) {
  r.eachSeriesByType('graph', function (t) {
    var a = t.get('layout'),
      n = t.coordinateSystem;
    if (n && n.type !== 'view') {
      var i = t.getData(),
        o = [];
      R(n.dimensions, function (h) {
        o = o.concat(i.mapDimensionsAll(h));
      });
      for (var s = 0; s < i.count(); s++) {
        for (var l = [], u = !1, v = 0; v < o.length; v++) {
          var c = i.get(o[v], s);
          isNaN(c) || (u = !0), l.push(c);
        }
        u ? i.setItemLayout(s, n.dataToPoint(l)) : i.setItemLayout(s, [NaN, NaN]);
      }
      hn(i.graph, t);
    } else (!a || a === 'none') && rs(t);
  });
}
function Le(r) {
  var e = r.coordinateSystem;
  if (e.type !== 'view') return 1;
  var t = r.option.nodeScaleRatio,
    a = e.scaleX,
    n = e.getZoom(),
    i = (n - 1) * t + 1;
  return i / a;
}
function De(r) {
  var e = r.getVisual('symbolSize');
  return e instanceof Array && (e = (e[0] + e[1]) / 2), +e;
}
var oi = Math.PI,
  Gr = [];
function fn(r, e, t, a) {
  var n = r.coordinateSystem;
  if (!(n && n.type !== 'view')) {
    var i = n.getBoundingRect(),
      o = r.getData(),
      s = o.graph,
      l = i.width / 2 + i.x,
      u = i.height / 2 + i.y,
      v = Math.min(i.width, i.height) / 2,
      c = o.count();
    if ((o.setLayout({ cx: l, cy: u }), !!c)) {
      if (t) {
        var h = n.pointToData(a),
          f = h[0],
          d = h[1],
          p = [f - l, d - u];
        Oe(p, p), Qs(p, p, v), t.setLayout([l + p[0], u + p[1]], !0);
        var g = r.get(['circular', 'rotateLabel']);
        as(t, g, l, u);
      }
      Mc[e](r, s, o, v, l, u, c),
        s.eachEdge(function (m, S) {
          var y = ze(m.getModel().get(['lineStyle', 'curveness']), cn(m, r, S), 0),
            b = Yt(m.node1.getLayout()),
            _ = Yt(m.node2.getLayout()),
            x,
            w = (b[0] + _[0]) / 2,
            I = (b[1] + _[1]) / 2;
          +y && ((y *= 3), (x = [l * y + w * (1 - y), u * y + I * (1 - y)])),
            m.setLayout([b, _, x]);
        });
    }
  }
}
var Mc = {
  value: function (r, e, t, a, n, i, o) {
    var s = 0,
      l = t.getSum('value'),
      u = (Math.PI * 2) / (l || o);
    e.eachNode(function (v) {
      var c = v.getValue('value'),
        h = (u * (l ? c : 1)) / 2;
      (s += h), v.setLayout([a * Math.cos(s) + n, a * Math.sin(s) + i]), (s += h);
    });
  },
  symbolSize: function (r, e, t, a, n, i, o) {
    var s = 0;
    Gr.length = o;
    var l = Le(r);
    e.eachNode(function (c) {
      var h = De(c);
      isNaN(h) && (h = 2), h < 0 && (h = 0), (h *= l);
      var f = Math.asin(h / 2 / a);
      isNaN(f) && (f = oi / 2), (Gr[c.dataIndex] = f), (s += f * 2);
    });
    var u = (2 * oi - s) / o / 2,
      v = 0;
    e.eachNode(function (c) {
      var h = u + Gr[c.dataIndex];
      (v += h),
        (!c.getLayout() || !c.getLayout().fixed) &&
          c.setLayout([a * Math.cos(v) + n, a * Math.sin(v) + i]),
        (v += h);
    });
  },
};
function as(r, e, t, a) {
  var n = r.getGraphicEl();
  if (n) {
    var i = r.getModel(),
      o = i.get(['label', 'rotate']) || 0,
      s = n.getSymbolPath();
    if (e) {
      var l = r.getLayout(),
        u = Math.atan2(l[1] - a, l[0] - t);
      u < 0 && (u = Math.PI * 2 + u);
      var v = l[0] < t;
      v && (u = u - Math.PI);
      var c = v ? 'left' : 'right';
      s.setTextConfig({ rotation: -u, position: c, origin: 'center' });
      var h = s.ensureState('emphasis');
      U(h.textConfig || (h.textConfig = {}), { position: c });
    } else s.setTextConfig({ rotation: (o *= Math.PI / 180) });
  }
}
function Pc(r) {
  r.eachSeriesByType('graph', function (e) {
    e.get('layout') === 'circular' && fn(e, 'symbolSize');
  });
}
var se = ga;
function Ec(r, e, t) {
  for (
    var a = r,
      n = e,
      i = t.rect,
      o = i.width,
      s = i.height,
      l = [i.x + o / 2, i.y + s / 2],
      u = t.gravity == null ? 0.1 : t.gravity,
      v = 0;
    v < a.length;
    v++
  ) {
    var c = a[v];
    c.p || (c.p = Js(o * (Math.random() - 0.5) + l[0], s * (Math.random() - 0.5) + l[1])),
      (c.pp = Yt(c.p)),
      (c.edges = null);
  }
  var h = t.friction == null ? 0.6 : t.friction,
    f = h,
    d,
    p;
  return {
    warmUp: function () {
      f = h * 0.8;
    },
    setFixed: function (g) {
      a[g].fixed = !0;
    },
    setUnfixed: function (g) {
      a[g].fixed = !1;
    },
    beforeStep: function (g) {
      d = g;
    },
    afterStep: function (g) {
      p = g;
    },
    step: function (g) {
      d && d(a, n);
      for (var m = [], S = a.length, y = 0; y < n.length; y++) {
        var b = n[y];
        if (!b.ignoreForceLayout) {
          var _ = b.n1,
            x = b.n2;
          he(m, x.p, _.p);
          var w = Vn(m) - b.d,
            I = x.w / (_.w + x.w);
          isNaN(I) && (I = 0),
            Oe(m, m),
            !_.fixed && se(_.p, _.p, m, I * w * f),
            !x.fixed && se(x.p, x.p, m, -(1 - I) * w * f);
        }
      }
      for (var y = 0; y < S; y++) {
        var L = a[y];
        L.fixed || (he(m, l, L.p), se(L.p, L.p, m, u * f));
      }
      for (var y = 0; y < S; y++)
        for (var _ = a[y], D = y + 1; D < S; D++) {
          var x = a[D];
          he(m, x.p, _.p);
          var w = Vn(m);
          w === 0 && (tl(m, Math.random() - 0.5, Math.random() - 0.5), (w = 1));
          var T = (_.rep + x.rep) / w / w;
          !_.fixed && se(_.pp, _.pp, m, T), !x.fixed && se(x.pp, x.pp, m, -T);
        }
      for (var M = [], y = 0; y < S; y++) {
        var L = a[y];
        L.fixed || (he(M, L.p, L.pp), se(L.p, L.p, M, f), pt(L.pp, L.p));
      }
      f = f * 0.992;
      var P = f < 0.01;
      p && p(a, n, P), g && g(P);
    },
  };
}
function Nc(r) {
  r.eachSeriesByType('graph', function (e) {
    var t = e.coordinateSystem;
    if (!(t && t.type !== 'view'))
      if (e.get('layout') === 'force') {
        var a = e.preservedPoints || {},
          n = e.getGraph(),
          i = n.data,
          o = n.edgeData,
          s = e.getModel('force'),
          l = s.get('initLayout');
        e.preservedPoints
          ? i.each(function (y) {
              var b = i.getId(y);
              i.setItemLayout(y, a[b] || [NaN, NaN]);
            })
          : !l || l === 'none'
            ? rs(e)
            : l === 'circular' && fn(e, 'value');
        var u = i.getDataExtent('value'),
          v = o.getDataExtent('value'),
          c = s.get('repulsion'),
          h = s.get('edgeLength'),
          f = F(c) ? c : [c, c],
          d = F(h) ? h : [h, h];
        d = [d[1], d[0]];
        var p = i.mapArray('value', function (y, b) {
            var _ = i.getItemLayout(b),
              x = Et(y, u, f);
            return (
              isNaN(x) && (x = (f[0] + f[1]) / 2),
              {
                w: x,
                rep: x,
                fixed: i.getItemModel(b).get('fixed'),
                p: !_ || isNaN(_[0]) || isNaN(_[1]) ? null : _,
              }
            );
          }),
          g = o.mapArray('value', function (y, b) {
            var _ = n.getEdgeByIndex(b),
              x = Et(y, v, d);
            isNaN(x) && (x = (d[0] + d[1]) / 2);
            var w = _.getModel(),
              I = ze(_.getModel().get(['lineStyle', 'curveness']), -cn(_, e, b, !0), 0);
            return {
              n1: p[_.node1.dataIndex],
              n2: p[_.node2.dataIndex],
              d: x,
              curveness: I,
              ignoreForceLayout: w.get('ignoreForceLayout'),
            };
          }),
          m = t.getBoundingRect(),
          S = Ec(p, g, { rect: m, gravity: s.get('gravity'), friction: s.get('friction') });
        S.beforeStep(function (y, b) {
          for (var _ = 0, x = y.length; _ < x; _++)
            y[_].fixed && pt(y[_].p, n.getNodeByIndex(_).getLayout());
        }),
          S.afterStep(function (y, b, _) {
            for (var x = 0, w = y.length; x < w; x++)
              y[x].fixed || n.getNodeByIndex(x).setLayout(y[x].p), (a[i.getId(x)] = y[x].p);
            for (var x = 0, w = b.length; x < w; x++) {
              var I = b[x],
                L = n.getEdgeByIndex(x),
                D = I.n1.p,
                T = I.n2.p,
                M = L.getLayout();
              (M = M ? M.slice() : []),
                (M[0] = M[0] || []),
                (M[1] = M[1] || []),
                pt(M[0], D),
                pt(M[1], T),
                +I.curveness &&
                  (M[2] = [
                    (D[0] + T[0]) / 2 - (D[1] - T[1]) * I.curveness,
                    (D[1] + T[1]) / 2 - (T[0] - D[0]) * I.curveness,
                  ]),
                L.setLayout(M);
            }
          }),
          (e.forceLayout = S),
          (e.preservedPoints = a),
          S.step();
      } else e.forceLayout = null;
  });
}
function Rc(r, e, t) {
  var a = U(r.getBoxLayoutParams(), { aspect: t });
  return de(a, { width: e.getWidth(), height: e.getHeight() });
}
function Vc(r, e) {
  var t = [];
  return (
    r.eachSeriesByType('graph', function (a) {
      var n = a.get('coordinateSystem');
      if (!n || n === 'view') {
        var i = a.getData(),
          o = i.mapArray(function (g) {
            var m = i.getItemModel(g);
            return [+m.get('x'), +m.get('y')];
          }),
          s = [],
          l = [];
        mr(o, s, l),
          l[0] - s[0] === 0 && ((l[0] += 1), (s[0] -= 1)),
          l[1] - s[1] === 0 && ((l[1] += 1), (s[1] -= 1));
        var u = (l[0] - s[0]) / (l[1] - s[1]),
          v = Rc(a, e, u);
        isNaN(u) && ((s = [v.x, v.y]), (l = [v.x + v.width, v.y + v.height]));
        var c = l[0] - s[0],
          h = l[1] - s[1],
          f = v.width,
          d = v.height,
          p = (a.coordinateSystem = new za());
        (p.zoomLimit = a.get('scaleLimit')),
          p.setBoundingRect(s[0], s[1], c, h),
          p.setViewRect(v.x, v.y, f, d),
          p.setCenter(a.get('center'), e),
          p.setZoom(a.get('zoom')),
          t.push(p);
      }
    }),
    t
  );
}
var si = nr.prototype,
  Br = xo.prototype,
  ns = (function () {
    function r() {
      (this.x1 = 0), (this.y1 = 0), (this.x2 = 0), (this.y2 = 0), (this.percent = 1);
    }
    return r;
  })();
(function (r) {
  k(e, r);
  function e() {
    return (r !== null && r.apply(this, arguments)) || this;
  }
  return e;
})(ns);
function zr(r) {
  return isNaN(+r.cpx1) || isNaN(+r.cpy1);
}
var kc = (function (r) {
    k(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return (a.type = 'ec-line'), a;
    }
    return (
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null };
      }),
      (e.prototype.getDefaultShape = function () {
        return new ns();
      }),
      (e.prototype.buildPath = function (t, a) {
        zr(a) ? si.buildPath.call(this, t, a) : Br.buildPath.call(this, t, a);
      }),
      (e.prototype.pointAt = function (t) {
        return zr(this.shape) ? si.pointAt.call(this, t) : Br.pointAt.call(this, t);
      }),
      (e.prototype.tangentAt = function (t) {
        var a = this.shape,
          n = zr(a) ? [a.x2 - a.x1, a.y2 - a.y1] : Br.tangentAt.call(this, t);
        return Oe(n, n);
      }),
      e
    );
  })(yt),
  Or = ['fromSymbol', 'toSymbol'];
function li(r) {
  return '_' + r + 'Type';
}
function ui(r, e, t) {
  var a = e.getItemVisual(t, r);
  if (!a || a === 'none') return a;
  var n = e.getItemVisual(t, r + 'Size'),
    i = e.getItemVisual(t, r + 'Rotate'),
    o = e.getItemVisual(t, r + 'Offset'),
    s = e.getItemVisual(t, r + 'KeepAspect'),
    l = Wa(n),
    u = Ua(o || 0, l);
  return a + l + u + (i || '') + (s || '');
}
function vi(r, e, t) {
  var a = e.getItemVisual(t, r);
  if (!(!a || a === 'none')) {
    var n = e.getItemVisual(t, r + 'Size'),
      i = e.getItemVisual(t, r + 'Rotate'),
      o = e.getItemVisual(t, r + 'Offset'),
      s = e.getItemVisual(t, r + 'KeepAspect'),
      l = Wa(n),
      u = Ua(o || 0, l),
      v = Pe(a, -l[0] / 2 + u[0], -l[1] / 2 + u[1], l[0], l[1], null, s);
    return (
      (v.__specifiedRotation = i == null || isNaN(i) ? void 0 : (+i * Math.PI) / 180 || 0),
      (v.name = r),
      v
    );
  }
}
function Gc(r) {
  var e = new kc({ name: 'line', subPixelOptimize: !0 });
  return Ta(e.shape, r), e;
}
function Ta(r, e) {
  (r.x1 = e[0][0]), (r.y1 = e[0][1]), (r.x2 = e[1][0]), (r.y2 = e[1][1]), (r.percent = 1);
  var t = e[2];
  t ? ((r.cpx1 = t[0]), (r.cpy1 = t[1])) : ((r.cpx1 = NaN), (r.cpy1 = NaN));
}
var Bc = (function (r) {
  k(e, r);
  function e(t, a, n) {
    var i = r.call(this) || this;
    return i._createLine(t, a, n), i;
  }
  return (
    (e.prototype._createLine = function (t, a, n) {
      var i = t.hostModel,
        o = t.getItemLayout(a),
        s = Gc(o);
      (s.shape.percent = 0),
        wt(s, { shape: { percent: 1 } }, i, a),
        this.add(s),
        R(
          Or,
          function (l) {
            var u = vi(l, t, a);
            this.add(u), (this[li(l)] = ui(l, t, a));
          },
          this,
        ),
        this._updateCommonStl(t, a, n);
    }),
    (e.prototype.updateData = function (t, a, n) {
      var i = t.hostModel,
        o = this.childOfName('line'),
        s = t.getItemLayout(a),
        l = { shape: {} };
      Ta(l.shape, s),
        ot(o, l, i, a),
        R(
          Or,
          function (u) {
            var v = ui(u, t, a),
              c = li(u);
            if (this[c] !== v) {
              this.remove(this.childOfName(u));
              var h = vi(u, t, a);
              this.add(h);
            }
            this[c] = v;
          },
          this,
        ),
        this._updateCommonStl(t, a, n);
    }),
    (e.prototype.getLinePath = function () {
      return this.childAt(0);
    }),
    (e.prototype._updateCommonStl = function (t, a, n) {
      var i = t.hostModel,
        o = this.childOfName('line'),
        s = n && n.emphasisLineStyle,
        l = n && n.blurLineStyle,
        u = n && n.selectLineStyle,
        v = n && n.labelStatesModels,
        c = n && n.emphasisDisabled,
        h = n && n.focus,
        f = n && n.blurScope;
      if (!n || t.hasItemOption) {
        var d = t.getItemModel(a),
          p = d.getModel('emphasis');
        (s = p.getModel('lineStyle').getLineStyle()),
          (l = d.getModel(['blur', 'lineStyle']).getLineStyle()),
          (u = d.getModel(['select', 'lineStyle']).getLineStyle()),
          (c = p.get('disabled')),
          (h = p.get('focus')),
          (f = p.get('blurScope')),
          (v = Rt(d));
      }
      var g = t.getItemVisual(a, 'style'),
        m = g.stroke;
      o.useStyle(g),
        (o.style.fill = null),
        (o.style.strokeNoScale = !0),
        (o.ensureState('emphasis').style = s),
        (o.ensureState('blur').style = l),
        (o.ensureState('select').style = u),
        R(
          Or,
          function (x) {
            var w = this.childOfName(x);
            if (w) {
              w.setColor(m), (w.style.opacity = g.opacity);
              for (var I = 0; I < ya.length; I++) {
                var L = ya[I],
                  D = o.getState(L);
                if (D) {
                  var T = D.style || {},
                    M = w.ensureState(L),
                    P = M.style || (M.style = {});
                  T.stroke != null && (P[w.__isEmptyBrush ? 'stroke' : 'fill'] = T.stroke),
                    T.opacity != null && (P.opacity = T.opacity);
                }
              }
              w.markRedraw();
            }
          },
          this,
        );
      var S = i.getRawValue(a);
      Kt(this, v, {
        labelDataIndex: a,
        labelFetcher: {
          getFormattedLabel: function (x, w) {
            return i.getFormattedLabel(x, w, t.dataType);
          },
        },
        inheritColor: m || '#000',
        defaultOpacity: g.opacity,
        defaultText: (S == null ? t.getName(a) : isFinite(S) ? To(S) : S) + '',
      });
      var y = this.getTextContent();
      if (y) {
        var b = v.normal;
        (y.__align = y.style.align),
          (y.__verticalAlign = y.style.verticalAlign),
          (y.__position = b.get('position') || 'middle');
        var _ = b.get('distance');
        F(_) || (_ = [_, _]), (y.__labelDistance = _);
      }
      this.setTextConfig({ position: null, local: !0, inside: !1 }), lt(this, h, f, c);
    }),
    (e.prototype.highlight = function () {
      Fa(this);
    }),
    (e.prototype.downplay = function () {
      $a(this);
    }),
    (e.prototype.updateLayout = function (t, a) {
      this.setLinePoints(t.getItemLayout(a));
    }),
    (e.prototype.setLinePoints = function (t) {
      var a = this.childOfName('line');
      Ta(a.shape, t), a.dirty();
    }),
    (e.prototype.beforeUpdate = function () {
      var t = this,
        a = t.childOfName('fromSymbol'),
        n = t.childOfName('toSymbol'),
        i = t.getTextContent();
      if (!a && !n && (!i || i.ignore)) return;
      for (var o = 1, s = this.parent; s; ) s.scaleX && (o /= s.scaleX), (s = s.parent);
      var l = t.childOfName('line');
      if (!this.__dirty && !l.__dirty) return;
      var u = l.shape.percent,
        v = l.pointAt(0),
        c = l.pointAt(u),
        h = he([], c, v);
      Oe(h, h);
      function f(D, T) {
        var M = D.__specifiedRotation;
        if (M == null) {
          var P = l.tangentAt(T);
          D.attr('rotation', ((T === 1 ? -1 : 1) * Math.PI) / 2 - Math.atan2(P[1], P[0]));
        } else D.attr('rotation', M);
      }
      if (
        (a && (a.setPosition(v), f(a, 0), (a.scaleX = a.scaleY = o * u), a.markRedraw()),
        n && (n.setPosition(c), f(n, 1), (n.scaleX = n.scaleY = o * u), n.markRedraw()),
        i && !i.ignore)
      ) {
        (i.x = i.y = 0), (i.originX = i.originY = 0);
        var d = void 0,
          p = void 0,
          g = i.__labelDistance,
          m = g[0] * o,
          S = g[1] * o,
          y = u / 2,
          b = l.tangentAt(y),
          _ = [b[1], -b[0]],
          x = l.pointAt(y);
        _[1] > 0 && ((_[0] = -_[0]), (_[1] = -_[1]));
        var w = b[0] < 0 ? -1 : 1;
        if (i.__position !== 'start' && i.__position !== 'end') {
          var I = -Math.atan2(b[1], b[0]);
          c[0] < v[0] && (I = Math.PI + I), (i.rotation = I);
        }
        var L = void 0;
        switch (i.__position) {
          case 'insideStartTop':
          case 'insideMiddleTop':
          case 'insideEndTop':
          case 'middle':
            (L = -S), (p = 'bottom');
            break;
          case 'insideStartBottom':
          case 'insideMiddleBottom':
          case 'insideEndBottom':
            (L = S), (p = 'top');
            break;
          default:
            (L = 0), (p = 'middle');
        }
        switch (i.__position) {
          case 'end':
            (i.x = h[0] * m + c[0]),
              (i.y = h[1] * S + c[1]),
              (d = h[0] > 0.8 ? 'left' : h[0] < -0.8 ? 'right' : 'center'),
              (p = h[1] > 0.8 ? 'top' : h[1] < -0.8 ? 'bottom' : 'middle');
            break;
          case 'start':
            (i.x = -h[0] * m + v[0]),
              (i.y = -h[1] * S + v[1]),
              (d = h[0] > 0.8 ? 'right' : h[0] < -0.8 ? 'left' : 'center'),
              (p = h[1] > 0.8 ? 'bottom' : h[1] < -0.8 ? 'top' : 'middle');
            break;
          case 'insideStartTop':
          case 'insideStart':
          case 'insideStartBottom':
            (i.x = m * w + v[0]),
              (i.y = v[1] + L),
              (d = b[0] < 0 ? 'right' : 'left'),
              (i.originX = -m * w),
              (i.originY = -L);
            break;
          case 'insideMiddleTop':
          case 'insideMiddle':
          case 'insideMiddleBottom':
          case 'middle':
            (i.x = x[0]), (i.y = x[1] + L), (d = 'center'), (i.originY = -L);
            break;
          case 'insideEndTop':
          case 'insideEnd':
          case 'insideEndBottom':
            (i.x = -m * w + c[0]),
              (i.y = c[1] + L),
              (d = b[0] >= 0 ? 'right' : 'left'),
              (i.originX = m * w),
              (i.originY = -L);
            break;
        }
        (i.scaleX = i.scaleY = o),
          i.setStyle({ verticalAlign: i.__verticalAlign || p, align: i.__align || d });
      }
    }),
    e
  );
})(rt);
const pn = Bc;
var dn = (function () {
  function r(e) {
    (this.group = new rt()), (this._LineCtor = e || pn);
  }
  return (
    (r.prototype.updateData = function (e) {
      var t = this;
      this._progressiveEls = null;
      var a = this,
        n = a.group,
        i = a._lineData;
      (a._lineData = e), i || n.removeAll();
      var o = ci(e);
      e.diff(i)
        .add(function (s) {
          t._doAdd(e, s, o);
        })
        .update(function (s, l) {
          t._doUpdate(i, e, l, s, o);
        })
        .remove(function (s) {
          n.remove(i.getItemGraphicEl(s));
        })
        .execute();
    }),
    (r.prototype.updateLayout = function () {
      var e = this._lineData;
      e &&
        e.eachItemGraphicEl(function (t, a) {
          t.updateLayout(e, a);
        }, this);
    }),
    (r.prototype.incrementalPrepareUpdate = function (e) {
      (this._seriesScope = ci(e)), (this._lineData = null), this.group.removeAll();
    }),
    (r.prototype.incrementalUpdate = function (e, t) {
      this._progressiveEls = [];
      function a(s) {
        !s.isGroup && !zc(s) && ((s.incremental = !0), (s.ensureState('emphasis').hoverLayer = !0));
      }
      for (var n = e.start; n < e.end; n++) {
        var i = t.getItemLayout(n);
        if (Hr(i)) {
          var o = new this._LineCtor(t, n, this._seriesScope);
          o.traverse(a), this.group.add(o), t.setItemGraphicEl(n, o), this._progressiveEls.push(o);
        }
      }
    }),
    (r.prototype.remove = function () {
      this.group.removeAll();
    }),
    (r.prototype.eachRendered = function (e) {
      br(this._progressiveEls || this.group, e);
    }),
    (r.prototype._doAdd = function (e, t, a) {
      var n = e.getItemLayout(t);
      if (Hr(n)) {
        var i = new this._LineCtor(e, t, a);
        e.setItemGraphicEl(t, i), this.group.add(i);
      }
    }),
    (r.prototype._doUpdate = function (e, t, a, n, i) {
      var o = e.getItemGraphicEl(a);
      if (!Hr(t.getItemLayout(n))) {
        this.group.remove(o);
        return;
      }
      o ? o.updateData(t, n, i) : (o = new this._LineCtor(t, n, i)),
        t.setItemGraphicEl(n, o),
        this.group.add(o);
    }),
    r
  );
})();
function zc(r) {
  return r.animators && r.animators.length > 0;
}
function ci(r) {
  var e = r.hostModel,
    t = e.getModel('emphasis');
  return {
    lineStyle: e.getModel('lineStyle').getLineStyle(),
    emphasisLineStyle: t.getModel(['lineStyle']).getLineStyle(),
    blurLineStyle: e.getModel(['blur', 'lineStyle']).getLineStyle(),
    selectLineStyle: e.getModel(['select', 'lineStyle']).getLineStyle(),
    emphasisDisabled: t.get('disabled'),
    blurScope: t.get('blurScope'),
    focus: t.get('focus'),
    labelStatesModels: Rt(e),
  };
}
function hi(r) {
  return isNaN(r[0]) || isNaN(r[1]);
}
function Hr(r) {
  return r && !hi(r[0]) && !hi(r[1]);
}
var Fr = [],
  $r = [],
  Wr = [],
  le = Ao,
  Ur = rl,
  fi = Math.abs;
function pi(r, e, t) {
  for (
    var a = r[0], n = r[1], i = r[2], o = 1 / 0, s, l = t * t, u = 0.1, v = 0.1;
    v <= 0.9;
    v += 0.1
  ) {
    (Fr[0] = le(a[0], n[0], i[0], v)), (Fr[1] = le(a[1], n[1], i[1], v));
    var c = fi(Ur(Fr, e) - l);
    c < o && ((o = c), (s = v));
  }
  for (var h = 0; h < 32; h++) {
    var f = s + u;
    ($r[0] = le(a[0], n[0], i[0], s)),
      ($r[1] = le(a[1], n[1], i[1], s)),
      (Wr[0] = le(a[0], n[0], i[0], f)),
      (Wr[1] = le(a[1], n[1], i[1], f));
    var c = Ur($r, e) - l;
    if (fi(c) < 0.01) break;
    var d = Ur(Wr, e) - l;
    (u /= 2), c < 0 ? (d >= 0 ? (s = s + u) : (s = s - u)) : d >= 0 ? (s = s - u) : (s = s + u);
  }
  return s;
}
function Zr(r, e) {
  var t = [],
    a = el,
    n = [[], [], []],
    i = [[], []],
    o = [];
  (e /= 2),
    r.eachEdge(function (s, l) {
      var u = s.getLayout(),
        v = s.getVisual('fromSymbol'),
        c = s.getVisual('toSymbol');
      u.__original || ((u.__original = [Yt(u[0]), Yt(u[1])]), u[2] && u.__original.push(Yt(u[2])));
      var h = u.__original;
      if (u[2] != null) {
        if ((pt(n[0], h[0]), pt(n[1], h[2]), pt(n[2], h[1]), v && v !== 'none')) {
          var f = De(s.node1),
            d = pi(n, h[0], f * e);
          a(n[0][0], n[1][0], n[2][0], d, t),
            (n[0][0] = t[3]),
            (n[1][0] = t[4]),
            a(n[0][1], n[1][1], n[2][1], d, t),
            (n[0][1] = t[3]),
            (n[1][1] = t[4]);
        }
        if (c && c !== 'none') {
          var f = De(s.node2),
            d = pi(n, h[1], f * e);
          a(n[0][0], n[1][0], n[2][0], d, t),
            (n[1][0] = t[1]),
            (n[2][0] = t[2]),
            a(n[0][1], n[1][1], n[2][1], d, t),
            (n[1][1] = t[1]),
            (n[2][1] = t[2]);
        }
        pt(u[0], n[0]), pt(u[1], n[2]), pt(u[2], n[1]);
      } else {
        if ((pt(i[0], h[0]), pt(i[1], h[1]), he(o, i[1], i[0]), Oe(o, o), v && v !== 'none')) {
          var f = De(s.node1);
          ga(i[0], i[0], o, f * e);
        }
        if (c && c !== 'none') {
          var f = De(s.node2);
          ga(i[1], i[1], o, -f * e);
        }
        pt(u[0], i[0]), pt(u[1], i[1]);
      }
    });
}
function di(r) {
  return r.type === 'view';
}
var Oc = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, a) {
      var n = new Za(),
        i = new dn(),
        o = this.group;
      (this._controller = new Ba(a.getZr())),
        (this._controllerHost = { target: o }),
        o.add(n.group),
        o.add(i.group),
        (this._symbolDraw = n),
        (this._lineDraw = i),
        (this._firstRender = !0);
    }),
    (e.prototype.render = function (t, a, n) {
      var i = this,
        o = t.coordinateSystem;
      this._model = t;
      var s = this._symbolDraw,
        l = this._lineDraw,
        u = this.group;
      if (di(o)) {
        var v = { x: o.x, y: o.y, scaleX: o.scaleX, scaleY: o.scaleY };
        this._firstRender ? u.attr(v) : ot(u, v, t);
      }
      Zr(t.getGraph(), Le(t));
      var c = t.getData();
      s.updateData(c);
      var h = t.getEdgeData();
      l.updateData(h),
        this._updateNodeAndLinkScale(),
        this._updateController(t, a, n),
        clearTimeout(this._layoutTimeout);
      var f = t.forceLayout,
        d = t.get(['force', 'layoutAnimation']);
      f && this._startForceLayoutIteration(f, d);
      var p = t.get('layout');
      c.graph.eachNode(function (y) {
        var b = y.dataIndex,
          _ = y.getGraphicEl(),
          x = y.getModel();
        if (_) {
          _.off('drag').off('dragend');
          var w = x.get('draggable');
          w &&
            _.on('drag', function (L) {
              switch (p) {
                case 'force':
                  f.warmUp(),
                    !i._layouting && i._startForceLayoutIteration(f, d),
                    f.setFixed(b),
                    c.setItemLayout(b, [_.x, _.y]);
                  break;
                case 'circular':
                  c.setItemLayout(b, [_.x, _.y]),
                    y.setLayout({ fixed: !0 }, !0),
                    fn(t, 'symbolSize', y, [L.offsetX, L.offsetY]),
                    i.updateLayout(t);
                  break;
                case 'none':
                default:
                  c.setItemLayout(b, [_.x, _.y]), hn(t.getGraph(), t), i.updateLayout(t);
                  break;
              }
            }).on('dragend', function () {
              f && f.setUnfixed(b);
            }),
            _.setDraggable(w, !!x.get('cursor'));
          var I = x.get(['emphasis', 'focus']);
          I === 'adjacency' && (it(_).focus = y.getAdjacentDataIndices());
        }
      }),
        c.graph.eachEdge(function (y) {
          var b = y.getGraphicEl(),
            _ = y.getModel().get(['emphasis', 'focus']);
          b &&
            _ === 'adjacency' &&
            (it(b).focus = { edge: [y.dataIndex], node: [y.node1.dataIndex, y.node2.dataIndex] });
        });
      var g = t.get('layout') === 'circular' && t.get(['circular', 'rotateLabel']),
        m = c.getLayout('cx'),
        S = c.getLayout('cy');
      c.graph.eachNode(function (y) {
        as(y, g, m, S);
      }),
        (this._firstRender = !1);
    }),
    (e.prototype.dispose = function () {
      this.remove(), this._controller && this._controller.dispose(), (this._controllerHost = null);
    }),
    (e.prototype._startForceLayoutIteration = function (t, a) {
      var n = this;
      (function i() {
        t.step(function (o) {
          n.updateLayout(n._model),
            (n._layouting = !o) && (a ? (n._layoutTimeout = setTimeout(i, 16)) : i());
        });
      })();
    }),
    (e.prototype._updateController = function (t, a, n) {
      var i = this,
        o = this._controller,
        s = this._controllerHost,
        l = this.group;
      if (
        (o.setPointerChecker(function (u, v, c) {
          var h = l.getBoundingRect();
          return h.applyTransform(l.transform), h.contain(v, c) && !mo(u, n, t);
        }),
        !di(t.coordinateSystem))
      ) {
        o.disable();
        return;
      }
      o.enable(t.get('roam')),
        (s.zoomLimit = t.get('scaleLimit')),
        (s.zoom = t.coordinateSystem.getZoom()),
        o
          .off('pan')
          .off('zoom')
          .on('pan', function (u) {
            So(s, u.dx, u.dy),
              n.dispatchAction({ seriesId: t.id, type: 'graphRoam', dx: u.dx, dy: u.dy });
          })
          .on('zoom', function (u) {
            _o(s, u.scale, u.originX, u.originY),
              n.dispatchAction({
                seriesId: t.id,
                type: 'graphRoam',
                zoom: u.scale,
                originX: u.originX,
                originY: u.originY,
              }),
              i._updateNodeAndLinkScale(),
              Zr(t.getGraph(), Le(t)),
              i._lineDraw.updateLayout(),
              n.updateLabelLayout();
          });
    }),
    (e.prototype._updateNodeAndLinkScale = function () {
      var t = this._model,
        a = t.getData(),
        n = Le(t);
      a.eachItemGraphicEl(function (i, o) {
        i && i.setSymbolScale(n);
      });
    }),
    (e.prototype.updateLayout = function (t) {
      Zr(t.getGraph(), Le(t)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout();
    }),
    (e.prototype.remove = function () {
      clearTimeout(this._layoutTimeout),
        (this._layouting = !1),
        (this._layoutTimeout = null),
        this._symbolDraw && this._symbolDraw.remove(),
        this._lineDraw && this._lineDraw.remove();
    }),
    (e.type = 'graph'),
    e
  );
})(ct);
const Hc = Oc;
function ue(r) {
  return '_EC_' + r;
}
var Fc = (function () {
    function r(e) {
      (this.type = 'graph'),
        (this.nodes = []),
        (this.edges = []),
        (this._nodesMap = {}),
        (this._edgesMap = {}),
        (this._directed = e || !1);
    }
    return (
      (r.prototype.isDirected = function () {
        return this._directed;
      }),
      (r.prototype.addNode = function (e, t) {
        e = e == null ? '' + t : '' + e;
        var a = this._nodesMap;
        if (!a[ue(e)]) {
          var n = new ae(e, t);
          return (n.hostGraph = this), this.nodes.push(n), (a[ue(e)] = n), n;
        }
      }),
      (r.prototype.getNodeByIndex = function (e) {
        var t = this.data.getRawIndex(e);
        return this.nodes[t];
      }),
      (r.prototype.getNodeById = function (e) {
        return this._nodesMap[ue(e)];
      }),
      (r.prototype.addEdge = function (e, t, a) {
        var n = this._nodesMap,
          i = this._edgesMap;
        if (
          (Ht(e) && (e = this.nodes[e]),
          Ht(t) && (t = this.nodes[t]),
          e instanceof ae || (e = n[ue(e)]),
          t instanceof ae || (t = n[ue(t)]),
          !(!e || !t))
        ) {
          var o = e.id + '-' + t.id,
            s = new is(e, t, a);
          return (
            (s.hostGraph = this),
            this._directed && (e.outEdges.push(s), t.inEdges.push(s)),
            e.edges.push(s),
            e !== t && t.edges.push(s),
            this.edges.push(s),
            (i[o] = s),
            s
          );
        }
      }),
      (r.prototype.getEdgeByIndex = function (e) {
        var t = this.edgeData.getRawIndex(e);
        return this.edges[t];
      }),
      (r.prototype.getEdge = function (e, t) {
        e instanceof ae && (e = e.id), t instanceof ae && (t = t.id);
        var a = this._edgesMap;
        return this._directed ? a[e + '-' + t] : a[e + '-' + t] || a[t + '-' + e];
      }),
      (r.prototype.eachNode = function (e, t) {
        for (var a = this.nodes, n = a.length, i = 0; i < n; i++)
          a[i].dataIndex >= 0 && e.call(t, a[i], i);
      }),
      (r.prototype.eachEdge = function (e, t) {
        for (var a = this.edges, n = a.length, i = 0; i < n; i++)
          a[i].dataIndex >= 0 &&
            a[i].node1.dataIndex >= 0 &&
            a[i].node2.dataIndex >= 0 &&
            e.call(t, a[i], i);
      }),
      (r.prototype.breadthFirstTraverse = function (e, t, a, n) {
        if ((t instanceof ae || (t = this._nodesMap[ue(t)]), !!t)) {
          for (
            var i = a === 'out' ? 'outEdges' : a === 'in' ? 'inEdges' : 'edges', o = 0;
            o < this.nodes.length;
            o++
          )
            this.nodes[o].__visited = !1;
          if (!e.call(n, t, null))
            for (var s = [t]; s.length; )
              for (var l = s.shift(), u = l[i], o = 0; o < u.length; o++) {
                var v = u[o],
                  c = v.node1 === l ? v.node2 : v.node1;
                if (!c.__visited) {
                  if (e.call(n, c, l)) return;
                  s.push(c), (c.__visited = !0);
                }
              }
        }
      }),
      (r.prototype.update = function () {
        for (
          var e = this.data, t = this.edgeData, a = this.nodes, n = this.edges, i = 0, o = a.length;
          i < o;
          i++
        )
          a[i].dataIndex = -1;
        for (var i = 0, o = e.count(); i < o; i++) a[e.getRawIndex(i)].dataIndex = i;
        t.filterSelf(function (s) {
          var l = n[t.getRawIndex(s)];
          return l.node1.dataIndex >= 0 && l.node2.dataIndex >= 0;
        });
        for (var i = 0, o = n.length; i < o; i++) n[i].dataIndex = -1;
        for (var i = 0, o = t.count(); i < o; i++) n[t.getRawIndex(i)].dataIndex = i;
      }),
      (r.prototype.clone = function () {
        for (
          var e = new r(this._directed), t = this.nodes, a = this.edges, n = 0;
          n < t.length;
          n++
        )
          e.addNode(t[n].id, t[n].dataIndex);
        for (var n = 0; n < a.length; n++) {
          var i = a[n];
          e.addEdge(i.node1.id, i.node2.id, i.dataIndex);
        }
        return e;
      }),
      r
    );
  })(),
  ae = (function () {
    function r(e, t) {
      (this.inEdges = []),
        (this.outEdges = []),
        (this.edges = []),
        (this.dataIndex = -1),
        (this.id = e == null ? '' : e),
        (this.dataIndex = t == null ? -1 : t);
    }
    return (
      (r.prototype.degree = function () {
        return this.edges.length;
      }),
      (r.prototype.inDegree = function () {
        return this.inEdges.length;
      }),
      (r.prototype.outDegree = function () {
        return this.outEdges.length;
      }),
      (r.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0)) {
          var t = this.hostGraph,
            a = t.data.getItemModel(this.dataIndex);
          return a.getModel(e);
        }
      }),
      (r.prototype.getAdjacentDataIndices = function () {
        for (var e = { edge: [], node: [] }, t = 0; t < this.edges.length; t++) {
          var a = this.edges[t];
          a.dataIndex < 0 ||
            (e.edge.push(a.dataIndex), e.node.push(a.node1.dataIndex, a.node2.dataIndex));
        }
        return e;
      }),
      (r.prototype.getTrajectoryDataIndices = function () {
        for (var e = mt(), t = mt(), a = 0; a < this.edges.length; a++) {
          var n = this.edges[a];
          if (!(n.dataIndex < 0)) {
            e.set(n.dataIndex, !0);
            for (var i = [n.node1], o = [n.node2], s = 0; s < i.length; ) {
              var l = i[s];
              s++, t.set(l.dataIndex, !0);
              for (var u = 0; u < l.inEdges.length; u++)
                e.set(l.inEdges[u].dataIndex, !0), i.push(l.inEdges[u].node1);
            }
            for (s = 0; s < o.length; ) {
              var v = o[s];
              s++, t.set(v.dataIndex, !0);
              for (var u = 0; u < v.outEdges.length; u++)
                e.set(v.outEdges[u].dataIndex, !0), o.push(v.outEdges[u].node2);
            }
          }
        }
        return { edge: e.keys(), node: t.keys() };
      }),
      r
    );
  })(),
  is = (function () {
    function r(e, t, a) {
      (this.dataIndex = -1),
        (this.node1 = e),
        (this.node2 = t),
        (this.dataIndex = a == null ? -1 : a);
    }
    return (
      (r.prototype.getModel = function (e) {
        if (!(this.dataIndex < 0)) {
          var t = this.hostGraph,
            a = t.edgeData.getItemModel(this.dataIndex);
          return a.getModel(e);
        }
      }),
      (r.prototype.getAdjacentDataIndices = function () {
        return { edge: [this.dataIndex], node: [this.node1.dataIndex, this.node2.dataIndex] };
      }),
      (r.prototype.getTrajectoryDataIndices = function () {
        var e = mt(),
          t = mt();
        e.set(this.dataIndex, !0);
        for (var a = [this.node1], n = [this.node2], i = 0; i < a.length; ) {
          var o = a[i];
          i++, t.set(o.dataIndex, !0);
          for (var s = 0; s < o.inEdges.length; s++)
            e.set(o.inEdges[s].dataIndex, !0), a.push(o.inEdges[s].node1);
        }
        for (i = 0; i < n.length; ) {
          var l = n[i];
          i++, t.set(l.dataIndex, !0);
          for (var s = 0; s < l.outEdges.length; s++)
            e.set(l.outEdges[s].dataIndex, !0), n.push(l.outEdges[s].node2);
        }
        return { edge: e.keys(), node: t.keys() };
      }),
      r
    );
  })();
function os(r, e) {
  return {
    getValue: function (t) {
      var a = this[r][e];
      return a.getStore().get(a.getDimensionIndex(t || 'value'), this.dataIndex);
    },
    setVisual: function (t, a) {
      this.dataIndex >= 0 && this[r][e].setItemVisual(this.dataIndex, t, a);
    },
    getVisual: function (t) {
      return this[r][e].getItemVisual(this.dataIndex, t);
    },
    setLayout: function (t, a) {
      this.dataIndex >= 0 && this[r][e].setItemLayout(this.dataIndex, t, a);
    },
    getLayout: function () {
      return this[r][e].getItemLayout(this.dataIndex);
    },
    getGraphicEl: function () {
      return this[r][e].getItemGraphicEl(this.dataIndex);
    },
    getRawIndex: function () {
      return this[r][e].getRawIndex(this.dataIndex);
    },
  };
}
ge(ae, os('hostGraph', 'data'));
ge(is, os('hostGraph', 'edgeData'));
function ss(r, e, t, a, n) {
  for (var i = new Fc(a), o = 0; o < r.length; o++) i.addNode(Nt(r[o].id, r[o].name, o), o);
  for (var s = [], l = [], u = 0, o = 0; o < e.length; o++) {
    var v = e[o],
      c = v.source,
      h = v.target;
    i.addEdge(c, h, u) && (l.push(v), s.push(Nt(Sr(v.id, null), c + ' > ' + h)), u++);
  }
  var f = t.get('coordinateSystem'),
    d;
  if (f === 'cartesian2d' || f === 'polar') d = He(r, t);
  else {
    var p = Co.get(f),
      g = p ? p.dimensions || [] : [];
    It(g, 'value') < 0 && g.concat(['value']);
    var m = Oa(r, { coordDimensions: g, encodeDefine: t.getEncode() }).dimensions;
    (d = new bt(m, t)), d.initData(r);
  }
  var S = new bt(['value'], t);
  return (
    S.initData(l, s),
    n && n(d, S),
    $o({
      mainData: d,
      struct: i,
      structAttr: 'graph',
      datas: { node: d, edge: S },
      datasAttr: { node: 'data', edge: 'edgeData' },
    }),
    i.update(),
    i
  );
}
var $c = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.init = function (t) {
      r.prototype.init.apply(this, arguments);
      var a = this;
      function n() {
        return a._categoriesData;
      }
      (this.legendVisualProvider = new Ya(n, n)),
        this.fillDataTextStyle(t.edges || t.links),
        this._updateCategoriesData();
    }),
    (e.prototype.mergeOption = function (t) {
      r.prototype.mergeOption.apply(this, arguments),
        this.fillDataTextStyle(t.edges || t.links),
        this._updateCategoriesData();
    }),
    (e.prototype.mergeDefaultAndTheme = function (t) {
      r.prototype.mergeDefaultAndTheme.apply(this, arguments), Xa(t, 'edgeLabel', ['show']);
    }),
    (e.prototype.getInitialData = function (t, a) {
      var n = t.edges || t.links || [],
        i = t.data || t.nodes || [],
        o = this;
      if (i && n) {
        Tc(this);
        var s = ss(i, n, this, !0, l);
        return (
          R(
            s.edges,
            function (u) {
              Ac(u.node1, u.node2, this, u.dataIndex);
            },
            this,
          ),
          s.data
        );
      }
      function l(u, v) {
        u.wrapMethod('getItemModel', function (d) {
          var p = o._categoriesModels,
            g = d.getShallow('category'),
            m = p[g];
          return m && ((m.parentModel = d.parentModel), (d.parentModel = m)), d;
        });
        var c = qt.prototype.getModel;
        function h(d, p) {
          var g = c.call(this, d, p);
          return (g.resolveParentPath = f), g;
        }
        v.wrapMethod('getItemModel', function (d) {
          return (d.resolveParentPath = f), (d.getModel = h), d;
        });
        function f(d) {
          if (d && (d[0] === 'label' || d[1] === 'label')) {
            var p = d.slice();
            return (
              d[0] === 'label' ? (p[0] = 'edgeLabel') : d[1] === 'label' && (p[1] = 'edgeLabel'), p
            );
          }
          return d;
        }
      }
    }),
    (e.prototype.getGraph = function () {
      return this.getData().graph;
    }),
    (e.prototype.getEdgeData = function () {
      return this.getGraph().edgeData;
    }),
    (e.prototype.getCategoriesData = function () {
      return this._categoriesData;
    }),
    (e.prototype.formatTooltip = function (t, a, n) {
      if (n === 'edge') {
        var i = this.getData(),
          o = this.getDataParams(t, n),
          s = i.graph.getEdgeByIndex(t),
          l = i.getName(s.node1.dataIndex),
          u = i.getName(s.node2.dataIndex),
          v = [];
        return (
          l != null && v.push(l),
          u != null && v.push(u),
          Ot('nameValue', { name: v.join(' > '), value: o.value, noValue: o.value == null })
        );
      }
      var c = al({ series: this, dataIndex: t, multipleSeries: a });
      return c;
    }),
    (e.prototype._updateCategoriesData = function () {
      var t = $(this.option.categories || [], function (n) {
          return n.value != null ? n : U({ value: 0 }, n);
        }),
        a = new bt(['value'], this);
      a.initData(t),
        (this._categoriesData = a),
        (this._categoriesModels = a.mapArray(function (n) {
          return a.getItemModel(n);
        }));
    }),
    (e.prototype.setZoom = function (t) {
      this.option.zoom = t;
    }),
    (e.prototype.setCenter = function (t) {
      this.option.center = t;
    }),
    (e.prototype.isAnimationEnabled = function () {
      return (
        r.prototype.isAnimationEnabled.call(this) &&
        !(this.get('layout') === 'force' && this.get(['force', 'layoutAnimation']))
      );
    }),
    (e.type = 'series.graph'),
    (e.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'view',
      legendHoverLink: !0,
      layout: null,
      circular: { rotateLabel: !1 },
      force: {
        initLayout: null,
        repulsion: [0, 50],
        gravity: 0.1,
        friction: 0.6,
        edgeLength: 30,
        layoutAnimation: !0,
      },
      left: 'center',
      top: 'center',
      symbol: 'circle',
      symbolSize: 10,
      edgeSymbol: ['none', 'none'],
      edgeSymbolSize: 10,
      edgeLabel: { position: 'middle', distance: 5 },
      draggable: !1,
      roam: !1,
      center: null,
      zoom: 1,
      nodeScaleRatio: 0.6,
      label: { show: !1, formatter: '{b}' },
      itemStyle: {},
      lineStyle: { color: '#aaa', width: 1, opacity: 0.5 },
      emphasis: { scale: !0, label: { show: !0 } },
      select: { itemStyle: { borderColor: '#212121' } },
    }),
    e
  );
})(ht);
const Wc = $c;
var Uc = { type: 'graphRoam', event: 'graphRoam', update: 'none' };
function Zc(r) {
  r.registerChartView(Hc),
    r.registerSeriesModel(Wc),
    r.registerProcessor(xc),
    r.registerVisual(wc),
    r.registerVisual(Ic),
    r.registerLayout(Cc),
    r.registerLayout(r.PRIORITY.VISUAL.POST_CHART_LAYOUT, Pc),
    r.registerLayout(Nc),
    r.registerCoordinateSystem('graphView', { dimensions: za.dimensions, create: Vc }),
    r.registerAction(
      {
        type: 'focusNodeAdjacency',
        event: 'focusNodeAdjacency',
        update: 'series:focusNodeAdjacency',
      },
      Ce,
    ),
    r.registerAction(
      {
        type: 'unfocusNodeAdjacency',
        event: 'unfocusNodeAdjacency',
        update: 'series:unfocusNodeAdjacency',
      },
      Ce,
    ),
    r.registerAction(Uc, function (e, t, a) {
      t.eachComponent({ mainType: 'series', query: e }, function (n) {
        var i = n.coordinateSystem,
          o = wo(i, e, void 0, a);
        n.setCenter && n.setCenter(o.center), n.setZoom && n.setZoom(o.zoom);
      });
    });
}
var Yc = (function () {
    function r() {
      (this.angle = 0), (this.width = 10), (this.r = 10), (this.x = 0), (this.y = 0);
    }
    return r;
  })(),
  Xc = (function (r) {
    k(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return (a.type = 'pointer'), a;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new Yc();
      }),
      (e.prototype.buildPath = function (t, a) {
        var n = Math.cos,
          i = Math.sin,
          o = a.r,
          s = a.width,
          l = a.angle,
          u = a.x - n(l) * s * (s >= o / 3 ? 1 : 2),
          v = a.y - i(l) * s * (s >= o / 3 ? 1 : 2);
        (l = a.angle - Math.PI / 2),
          t.moveTo(u, v),
          t.lineTo(a.x + n(l) * s, a.y + i(l) * s),
          t.lineTo(a.x + n(a.angle) * o, a.y + i(a.angle) * o),
          t.lineTo(a.x - n(l) * s, a.y - i(l) * s),
          t.lineTo(u, v);
      }),
      e
    );
  })(yt);
function qc(r, e) {
  var t = r.get('center'),
    a = e.getWidth(),
    n = e.getHeight(),
    i = Math.min(a, n),
    o = z(t[0], e.getWidth()),
    s = z(t[1], e.getHeight()),
    l = z(r.get('radius'), i / 2);
  return { cx: o, cy: s, r: l };
}
function qe(r, e) {
  var t = r == null ? '' : r + '';
  return e && (St(e) ? (t = e.replace('{value}', t)) : nt(e) && (t = e(r))), t;
}
var Kc = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, a, n) {
      this.group.removeAll();
      var i = t.get(['axisLine', 'lineStyle', 'color']),
        o = qc(t, n);
      this._renderMain(t, a, n, i, o), (this._data = t.getData());
    }),
    (e.prototype.dispose = function () {}),
    (e.prototype._renderMain = function (t, a, n, i, o) {
      var s = this.group,
        l = t.get('clockwise'),
        u = (-t.get('startAngle') / 180) * Math.PI,
        v = (-t.get('endAngle') / 180) * Math.PI,
        c = t.getModel('axisLine'),
        h = c.get('roundCap'),
        f = h ? Gn : Ee,
        d = c.get('show'),
        p = c.getModel('lineStyle'),
        g = p.get('width'),
        m = [u, v];
      nl(m, !l), (u = m[0]), (v = m[1]);
      for (var S = v - u, y = u, b = [], _ = 0; d && _ < i.length; _++) {
        var x = Math.min(Math.max(i[_][0], 0), 1);
        v = u + S * x;
        var w = new f({
          shape: {
            startAngle: y,
            endAngle: v,
            cx: o.cx,
            cy: o.cy,
            clockwise: l,
            r0: o.r - g,
            r: o.r,
          },
          silent: !0,
        });
        w.setStyle({ fill: i[_][1] }),
          w.setStyle(p.getLineStyle(['color', 'width'])),
          b.push(w),
          (y = v);
      }
      b.reverse(),
        R(b, function (L) {
          return s.add(L);
        });
      var I = function (L) {
        if (L <= 0) return i[0][1];
        var D;
        for (D = 0; D < i.length; D++)
          if (i[D][0] >= L && (D === 0 ? 0 : i[D - 1][0]) < L) return i[D][1];
        return i[D - 1][1];
      };
      this._renderTicks(t, a, n, I, o, u, v, l, g),
        this._renderTitleAndDetail(t, a, n, I, o),
        this._renderAnchor(t, o),
        this._renderPointer(t, a, n, I, o, u, v, l, g);
    }),
    (e.prototype._renderTicks = function (t, a, n, i, o, s, l, u, v) {
      for (
        var c = this.group,
          h = o.cx,
          f = o.cy,
          d = o.r,
          p = +t.get('min'),
          g = +t.get('max'),
          m = t.getModel('splitLine'),
          S = t.getModel('axisTick'),
          y = t.getModel('axisLabel'),
          b = t.get('splitNumber'),
          _ = S.get('splitNumber'),
          x = z(m.get('length'), d),
          w = z(S.get('length'), d),
          I = s,
          L = (l - s) / b,
          D = L / _,
          T = m.getModel('lineStyle').getLineStyle(),
          M = S.getModel('lineStyle').getLineStyle(),
          P = m.get('distance'),
          A,
          C,
          E = 0;
        E <= b;
        E++
      ) {
        if (((A = Math.cos(I)), (C = Math.sin(I)), m.get('show'))) {
          var N = P ? P + v : v,
            V = new nr({
              shape: {
                x1: A * (d - N) + h,
                y1: C * (d - N) + f,
                x2: A * (d - x - N) + h,
                y2: C * (d - x - N) + f,
              },
              style: T,
              silent: !0,
            });
          T.stroke === 'auto' && V.setStyle({ stroke: i(E / b) }), c.add(V);
        }
        if (y.get('show')) {
          var N = y.get('distance') + P,
            G = qe(To((E / b) * (g - p) + p), y.get('formatter')),
            O = i(E / b),
            B = A * (d - x - N) + h,
            K = C * (d - x - N) + f,
            X = y.get('rotate'),
            W = 0;
          X === 'radial'
            ? ((W = -I + 2 * Math.PI), W > Math.PI / 2 && (W += Math.PI))
            : X === 'tangential'
              ? (W = -I - Math.PI / 2)
              : Ht(X) && (W = (X * Math.PI) / 180),
            W === 0
              ? c.add(
                  new Wt({
                    style: kt(
                      y,
                      {
                        text: G,
                        x: B,
                        y: K,
                        verticalAlign: C < -0.8 ? 'top' : C > 0.8 ? 'bottom' : 'middle',
                        align: A < -0.4 ? 'left' : A > 0.4 ? 'right' : 'center',
                      },
                      { inheritColor: O },
                    ),
                    silent: !0,
                  }),
                )
              : c.add(
                  new Wt({
                    style: kt(
                      y,
                      { text: G, x: B, y: K, verticalAlign: 'middle', align: 'center' },
                      { inheritColor: O },
                    ),
                    silent: !0,
                    originX: B,
                    originY: K,
                    rotation: W,
                  }),
                );
        }
        if (S.get('show') && E !== b) {
          var N = S.get('distance');
          N = N ? N + v : v;
          for (var j = 0; j <= _; j++) {
            (A = Math.cos(I)), (C = Math.sin(I));
            var ut = new nr({
              shape: {
                x1: A * (d - N) + h,
                y1: C * (d - N) + f,
                x2: A * (d - w - N) + h,
                y2: C * (d - w - N) + f,
              },
              silent: !0,
              style: M,
            });
            M.stroke === 'auto' && ut.setStyle({ stroke: i((E + j / _) / b) }), c.add(ut), (I += D);
          }
          I -= D;
        } else I += L;
      }
    }),
    (e.prototype._renderPointer = function (t, a, n, i, o, s, l, u, v) {
      var c = this.group,
        h = this._data,
        f = this._progressEls,
        d = [],
        p = t.get(['pointer', 'show']),
        g = t.getModel('progress'),
        m = g.get('show'),
        S = t.getData(),
        y = S.mapDimension('value'),
        b = +t.get('min'),
        _ = +t.get('max'),
        x = [b, _],
        w = [s, l];
      function I(D, T) {
        var M = S.getItemModel(D),
          P = M.getModel('pointer'),
          A = z(P.get('width'), o.r),
          C = z(P.get('length'), o.r),
          E = t.get(['pointer', 'icon']),
          N = P.get('offsetCenter'),
          V = z(N[0], o.r),
          G = z(N[1], o.r),
          O = P.get('keepAspect'),
          B;
        return (
          E
            ? (B = Pe(E, V - A / 2, G - C, A, C, null, O))
            : (B = new Xc({ shape: { angle: -Math.PI / 2, width: A, r: C, x: V, y: G } })),
          (B.rotation = -(T + Math.PI / 2)),
          (B.x = o.cx),
          (B.y = o.cy),
          B
        );
      }
      function L(D, T) {
        var M = g.get('roundCap'),
          P = M ? Gn : Ee,
          A = g.get('overlap'),
          C = A ? g.get('width') : v / S.count(),
          E = A ? o.r - C : o.r - (D + 1) * C,
          N = A ? o.r : o.r - D * C,
          V = new P({
            shape: { startAngle: s, endAngle: T, cx: o.cx, cy: o.cy, clockwise: u, r0: E, r: N },
          });
        return A && (V.z2 = _ - (S.get(y, D) % _)), V;
      }
      (m || p) &&
        (S.diff(h)
          .add(function (D) {
            var T = S.get(y, D);
            if (p) {
              var M = I(D, s);
              wt(M, { rotation: -((isNaN(+T) ? w[0] : Et(T, x, w, !0)) + Math.PI / 2) }, t),
                c.add(M),
                S.setItemGraphicEl(D, M);
            }
            if (m) {
              var P = L(D, s),
                A = g.get('clip');
              wt(P, { shape: { endAngle: Et(T, x, w, A) } }, t),
                c.add(P),
                kn(t.seriesIndex, S.dataType, D, P),
                (d[D] = P);
            }
          })
          .update(function (D, T) {
            var M = S.get(y, D);
            if (p) {
              var P = h.getItemGraphicEl(T),
                A = P ? P.rotation : s,
                C = I(D, A);
              (C.rotation = A),
                ot(C, { rotation: -((isNaN(+M) ? w[0] : Et(M, x, w, !0)) + Math.PI / 2) }, t),
                c.add(C),
                S.setItemGraphicEl(D, C);
            }
            if (m) {
              var E = f[T],
                N = E ? E.shape.endAngle : s,
                V = L(D, N),
                G = g.get('clip');
              ot(V, { shape: { endAngle: Et(M, x, w, G) } }, t),
                c.add(V),
                kn(t.seriesIndex, S.dataType, D, V),
                (d[D] = V);
            }
          })
          .execute(),
        S.each(function (D) {
          var T = S.getItemModel(D),
            M = T.getModel('emphasis'),
            P = M.get('focus'),
            A = M.get('blurScope'),
            C = M.get('disabled');
          if (p) {
            var E = S.getItemGraphicEl(D),
              N = S.getItemVisual(D, 'style'),
              V = N.fill;
            if (E instanceof qa) {
              var G = E.style;
              E.useStyle(
                U({ image: G.image, x: G.x, y: G.y, width: G.width, height: G.height }, N),
              );
            } else E.useStyle(N), E.type !== 'pointer' && E.setColor(V);
            E.setStyle(T.getModel(['pointer', 'itemStyle']).getItemStyle()),
              E.style.fill === 'auto' && E.setStyle('fill', i(Et(S.get(y, D), x, [0, 1], !0))),
              (E.z2EmphasisLift = 0),
              Mt(E, T),
              lt(E, P, A, C);
          }
          if (m) {
            var O = d[D];
            O.useStyle(S.getItemVisual(D, 'style')),
              O.setStyle(T.getModel(['progress', 'itemStyle']).getItemStyle()),
              (O.z2EmphasisLift = 0),
              Mt(O, T),
              lt(O, P, A, C);
          }
        }),
        (this._progressEls = d));
    }),
    (e.prototype._renderAnchor = function (t, a) {
      var n = t.getModel('anchor'),
        i = n.get('show');
      if (i) {
        var o = n.get('size'),
          s = n.get('icon'),
          l = n.get('offsetCenter'),
          u = n.get('keepAspect'),
          v = Pe(s, a.cx - o / 2 + z(l[0], a.r), a.cy - o / 2 + z(l[1], a.r), o, o, null, u);
        (v.z2 = n.get('showAbove') ? 1 : 0),
          v.setStyle(n.getModel('itemStyle').getItemStyle()),
          this.group.add(v);
      }
    }),
    (e.prototype._renderTitleAndDetail = function (t, a, n, i, o) {
      var s = this,
        l = t.getData(),
        u = l.mapDimension('value'),
        v = +t.get('min'),
        c = +t.get('max'),
        h = new rt(),
        f = [],
        d = [],
        p = t.isAnimationEnabled(),
        g = t.get(['pointer', 'showAbove']);
      l
        .diff(this._data)
        .add(function (m) {
          (f[m] = new Wt({ silent: !0 })), (d[m] = new Wt({ silent: !0 }));
        })
        .update(function (m, S) {
          (f[m] = s._titleEls[S]), (d[m] = s._detailEls[S]);
        })
        .execute(),
        l.each(function (m) {
          var S = l.getItemModel(m),
            y = l.get(u, m),
            b = new rt(),
            _ = i(Et(y, [v, c], [0, 1], !0)),
            x = S.getModel('title');
          if (x.get('show')) {
            var w = x.get('offsetCenter'),
              I = o.cx + z(w[0], o.r),
              L = o.cy + z(w[1], o.r),
              D = f[m];
            D.attr({
              z2: g ? 0 : 2,
              style: kt(
                x,
                { x: I, y: L, text: l.getName(m), align: 'center', verticalAlign: 'middle' },
                { inheritColor: _ },
              ),
            }),
              b.add(D);
          }
          var T = S.getModel('detail');
          if (T.get('show')) {
            var M = T.get('offsetCenter'),
              P = o.cx + z(M[0], o.r),
              A = o.cy + z(M[1], o.r),
              C = z(T.get('width'), o.r),
              E = z(T.get('height'), o.r),
              N = t.get(['progress', 'show']) ? l.getItemVisual(m, 'style').fill : _,
              D = d[m],
              V = T.get('formatter');
            D.attr({
              z2: g ? 0 : 2,
              style: kt(
                T,
                {
                  x: P,
                  y: A,
                  text: qe(y, V),
                  width: isNaN(C) ? null : C,
                  height: isNaN(E) ? null : E,
                  align: 'center',
                  verticalAlign: 'middle',
                },
                { inheritColor: N },
              ),
            }),
              il(D, { normal: T }, y, function (O) {
                return qe(O, V);
              }),
              p &&
                yo(D, m, l, t, {
                  getFormattedLabel: function (O, B, K, X, W, j) {
                    return qe(j ? j.interpolatedValue : y, V);
                  },
                }),
              b.add(D);
          }
          h.add(b);
        }),
        this.group.add(h),
        (this._titleEls = f),
        (this._detailEls = d);
    }),
    (e.type = 'gauge'),
    e
  );
})(ct);
const jc = Kc;
var Qc = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), (t.visualStyleAccessPath = 'itemStyle'), t;
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      return Ka(this, ['value']);
    }),
    (e.type = 'series.gauge'),
    (e.defaultOption = {
      z: 2,
      colorBy: 'data',
      center: ['50%', '50%'],
      legendHoverLink: !0,
      radius: '75%',
      startAngle: 225,
      endAngle: -45,
      clockwise: !0,
      min: 0,
      max: 100,
      splitNumber: 10,
      axisLine: { show: !0, roundCap: !1, lineStyle: { color: [[1, '#E6EBF8']], width: 10 } },
      progress: { show: !1, overlap: !0, width: 10, roundCap: !1, clip: !0 },
      splitLine: {
        show: !0,
        length: 10,
        distance: 10,
        lineStyle: { color: '#63677A', width: 3, type: 'solid' },
      },
      axisTick: {
        show: !0,
        splitNumber: 5,
        length: 6,
        distance: 10,
        lineStyle: { color: '#63677A', width: 1, type: 'solid' },
      },
      axisLabel: { show: !0, distance: 15, color: '#464646', fontSize: 12, rotate: 0 },
      pointer: {
        icon: null,
        offsetCenter: [0, 0],
        show: !0,
        showAbove: !0,
        length: '60%',
        width: 6,
        keepAspect: !1,
      },
      anchor: {
        show: !1,
        showAbove: !1,
        size: 6,
        icon: 'circle',
        offsetCenter: [0, 0],
        keepAspect: !1,
        itemStyle: { color: '#fff', borderWidth: 0, borderColor: '#5470c6' },
      },
      title: {
        show: !0,
        offsetCenter: [0, '20%'],
        color: '#464646',
        fontSize: 16,
        valueAnimation: !1,
      },
      detail: {
        show: !0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        borderColor: '#ccc',
        width: 100,
        height: null,
        padding: [5, 10],
        offsetCenter: [0, '40%'],
        color: '#464646',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: 30,
        valueAnimation: !1,
      },
    }),
    e
  );
})(ht);
const Jc = Qc;
function th(r) {
  r.registerChartView(jc), r.registerSeriesModel(Jc);
}
var eh = ['itemStyle', 'opacity'],
  rh = (function (r) {
    k(e, r);
    function e(t, a) {
      var n = r.call(this) || this,
        i = n,
        o = new ja(),
        s = new Wt();
      return i.setTextContent(s), n.setTextGuideLine(o), n.updateData(t, a, !0), n;
    }
    return (
      (e.prototype.updateData = function (t, a, n) {
        var i = this,
          o = t.hostModel,
          s = t.getItemModel(a),
          l = t.getItemLayout(a),
          u = s.getModel('emphasis'),
          v = s.get(eh);
        (v = v == null ? 1 : v),
          n || ye(i),
          i.useStyle(t.getItemVisual(a, 'style')),
          (i.style.lineJoin = 'round'),
          n
            ? (i.setShape({ points: l.points }),
              (i.style.opacity = 0),
              wt(i, { style: { opacity: v } }, o, a))
            : ot(i, { style: { opacity: v }, shape: { points: l.points } }, o, a),
          Mt(i, s),
          this._updateLabel(t, a),
          lt(this, u.get('focus'), u.get('blurScope'), u.get('disabled'));
      }),
      (e.prototype._updateLabel = function (t, a) {
        var n = this,
          i = this.getTextGuideLine(),
          o = n.getTextContent(),
          s = t.hostModel,
          l = t.getItemModel(a),
          u = t.getItemLayout(a),
          v = u.label,
          c = t.getItemVisual(a, 'style'),
          h = c.fill;
        Kt(
          o,
          Rt(l),
          {
            labelFetcher: t.hostModel,
            labelDataIndex: a,
            defaultOpacity: c.opacity,
            defaultText: t.getName(a),
          },
          { normal: { align: v.textAlign, verticalAlign: v.verticalAlign } },
        ),
          n.setTextConfig({ local: !0, inside: !!v.inside, insideStroke: h, outsideFill: h });
        var f = v.linePoints;
        i.setShape({ points: f }),
          (n.textGuideLineConfig = { anchor: f ? new Ut(f[0][0], f[0][1]) : null }),
          ot(o, { style: { x: v.x, y: v.y } }, s, a),
          o.attr({ rotation: v.rotation, originX: v.x, originY: v.y, z2: 10 }),
          po(n, go(l), { stroke: h });
      }),
      e
    );
  })(Me),
  ah = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t.ignoreLabelLineUpdate = !0), t;
    }
    return (
      (e.prototype.render = function (t, a, n) {
        var i = t.getData(),
          o = this._data,
          s = this.group;
        i
          .diff(o)
          .add(function (l) {
            var u = new rh(i, l);
            i.setItemGraphicEl(l, u), s.add(u);
          })
          .update(function (l, u) {
            var v = o.getItemGraphicEl(u);
            v.updateData(i, l), s.add(v), i.setItemGraphicEl(l, v);
          })
          .remove(function (l) {
            var u = o.getItemGraphicEl(l);
            ol(u, t, l);
          })
          .execute(),
          (this._data = i);
      }),
      (e.prototype.remove = function () {
        this.group.removeAll(), (this._data = null);
      }),
      (e.prototype.dispose = function () {}),
      (e.type = 'funnel'),
      e
    );
  })(ct);
const nh = ah;
var ih = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t) {
      r.prototype.init.apply(this, arguments),
        (this.legendVisualProvider = new Ya(st(this.getData, this), st(this.getRawData, this))),
        this._defaultLabelLine(t);
    }),
    (e.prototype.getInitialData = function (t, a) {
      return Ka(this, { coordDimensions: ['value'], encodeDefaulter: et(sl, this) });
    }),
    (e.prototype._defaultLabelLine = function (t) {
      Xa(t, 'labelLine', ['show']);
      var a = t.labelLine,
        n = t.emphasis.labelLine;
      (a.show = a.show && t.label.show), (n.show = n.show && t.emphasis.label.show);
    }),
    (e.prototype.getDataParams = function (t) {
      var a = this.getData(),
        n = r.prototype.getDataParams.call(this, t),
        i = a.mapDimension('value'),
        o = a.getSum(i);
      return (
        (n.percent = o ? +((a.get(i, t) / o) * 100).toFixed(2) : 0), n.$vars.push('percent'), n
      );
    }),
    (e.type = 'series.funnel'),
    (e.defaultOption = {
      z: 2,
      legendHoverLink: !0,
      colorBy: 'data',
      left: 80,
      top: 60,
      right: 80,
      bottom: 60,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      orient: 'vertical',
      gap: 0,
      funnelAlign: 'center',
      label: { show: !0, position: 'outer' },
      labelLine: { show: !0, length: 20, lineStyle: { width: 1 } },
      itemStyle: { borderColor: '#fff', borderWidth: 1 },
      emphasis: { label: { show: !0 } },
      select: { itemStyle: { borderColor: '#212121' } },
    }),
    e
  );
})(ht);
const oh = ih;
function sh(r, e) {
  return de(r.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function lh(r, e) {
  for (
    var t = r.mapDimension('value'),
      a = r.mapArray(t, function (l) {
        return l;
      }),
      n = [],
      i = e === 'ascending',
      o = 0,
      s = r.count();
    o < s;
    o++
  )
    n[o] = o;
  return (
    nt(e)
      ? n.sort(e)
      : e !== 'none' &&
        n.sort(function (l, u) {
          return i ? a[l] - a[u] : a[u] - a[l];
        }),
    n
  );
}
function uh(r) {
  var e = r.hostModel,
    t = e.get('orient');
  r.each(function (a) {
    var n = r.getItemModel(a),
      i = n.getModel('label'),
      o = i.get('position'),
      s = n.getModel('labelLine'),
      l = r.getItemLayout(a),
      u = l.points,
      v =
        o === 'inner' ||
        o === 'inside' ||
        o === 'center' ||
        o === 'insideLeft' ||
        o === 'insideRight',
      c,
      h,
      f,
      d;
    if (v)
      o === 'insideLeft'
        ? ((h = (u[0][0] + u[3][0]) / 2 + 5), (f = (u[0][1] + u[3][1]) / 2), (c = 'left'))
        : o === 'insideRight'
          ? ((h = (u[1][0] + u[2][0]) / 2 - 5), (f = (u[1][1] + u[2][1]) / 2), (c = 'right'))
          : ((h = (u[0][0] + u[1][0] + u[2][0] + u[3][0]) / 4),
            (f = (u[0][1] + u[1][1] + u[2][1] + u[3][1]) / 4),
            (c = 'center')),
        (d = [
          [h, f],
          [h, f],
        ]);
    else {
      var p = void 0,
        g = void 0,
        m = void 0,
        S = void 0,
        y = s.get('length');
      o === 'left'
        ? ((p = (u[3][0] + u[0][0]) / 2),
          (g = (u[3][1] + u[0][1]) / 2),
          (m = p - y),
          (h = m - 5),
          (c = 'right'))
        : o === 'right'
          ? ((p = (u[1][0] + u[2][0]) / 2),
            (g = (u[1][1] + u[2][1]) / 2),
            (m = p + y),
            (h = m + 5),
            (c = 'left'))
          : o === 'top'
            ? ((p = (u[3][0] + u[0][0]) / 2),
              (g = (u[3][1] + u[0][1]) / 2),
              (S = g - y),
              (f = S - 5),
              (c = 'center'))
            : o === 'bottom'
              ? ((p = (u[1][0] + u[2][0]) / 2),
                (g = (u[1][1] + u[2][1]) / 2),
                (S = g + y),
                (f = S + 5),
                (c = 'center'))
              : o === 'rightTop'
                ? ((p = t === 'horizontal' ? u[3][0] : u[1][0]),
                  (g = t === 'horizontal' ? u[3][1] : u[1][1]),
                  t === 'horizontal'
                    ? ((S = g - y), (f = S - 5), (c = 'center'))
                    : ((m = p + y), (h = m + 5), (c = 'top')))
                : o === 'rightBottom'
                  ? ((p = u[2][0]),
                    (g = u[2][1]),
                    t === 'horizontal'
                      ? ((S = g + y), (f = S + 5), (c = 'center'))
                      : ((m = p + y), (h = m + 5), (c = 'bottom')))
                  : o === 'leftTop'
                    ? ((p = u[0][0]),
                      (g = t === 'horizontal' ? u[0][1] : u[1][1]),
                      t === 'horizontal'
                        ? ((S = g - y), (f = S - 5), (c = 'center'))
                        : ((m = p - y), (h = m - 5), (c = 'right')))
                    : o === 'leftBottom'
                      ? ((p = t === 'horizontal' ? u[1][0] : u[3][0]),
                        (g = t === 'horizontal' ? u[1][1] : u[2][1]),
                        t === 'horizontal'
                          ? ((S = g + y), (f = S + 5), (c = 'center'))
                          : ((m = p - y), (h = m - 5), (c = 'right')))
                      : ((p = (u[1][0] + u[2][0]) / 2),
                        (g = (u[1][1] + u[2][1]) / 2),
                        t === 'horizontal'
                          ? ((S = g + y), (f = S + 5), (c = 'center'))
                          : ((m = p + y), (h = m + 5), (c = 'left'))),
        t === 'horizontal' ? ((m = p), (h = m)) : ((S = g), (f = S)),
        (d = [
          [p, g],
          [m, S],
        ]);
    }
    l.label = { linePoints: d, x: h, y: f, verticalAlign: 'middle', textAlign: c, inside: v };
  });
}
function vh(r, e) {
  r.eachSeriesByType('funnel', function (t) {
    var a = t.getData(),
      n = a.mapDimension('value'),
      i = t.get('sort'),
      o = sh(t, e),
      s = t.get('orient'),
      l = o.width,
      u = o.height,
      v = lh(a, i),
      c = o.x,
      h = o.y,
      f =
        s === 'horizontal'
          ? [z(t.get('minSize'), u), z(t.get('maxSize'), u)]
          : [z(t.get('minSize'), l), z(t.get('maxSize'), l)],
      d = a.getDataExtent(n),
      p = t.get('min'),
      g = t.get('max');
    p == null && (p = Math.min(d[0], 0)), g == null && (g = d[1]);
    var m = t.get('funnelAlign'),
      S = t.get('gap'),
      y = s === 'horizontal' ? l : u,
      b = (y - S * (a.count() - 1)) / a.count(),
      _ = function (A, C) {
        if (s === 'horizontal') {
          var E = a.get(n, A) || 0,
            N = Et(E, [p, g], f, !0),
            V = void 0;
          switch (m) {
            case 'top':
              V = h;
              break;
            case 'center':
              V = h + (u - N) / 2;
              break;
            case 'bottom':
              V = h + (u - N);
              break;
          }
          return [
            [C, V],
            [C, V + N],
          ];
        }
        var G = a.get(n, A) || 0,
          O = Et(G, [p, g], f, !0),
          B;
        switch (m) {
          case 'left':
            B = c;
            break;
          case 'center':
            B = c + (l - O) / 2;
            break;
          case 'right':
            B = c + l - O;
            break;
        }
        return [
          [B, C],
          [B + O, C],
        ];
      };
    i === 'ascending' &&
      ((b = -b), (S = -S), s === 'horizontal' ? (c += l) : (h += u), (v = v.reverse()));
    for (var x = 0; x < v.length; x++) {
      var w = v[x],
        I = v[x + 1],
        L = a.getItemModel(w);
      if (s === 'horizontal') {
        var D = L.get(['itemStyle', 'width']);
        D == null ? (D = b) : ((D = z(D, l)), i === 'ascending' && (D = -D));
        var T = _(w, c),
          M = _(I, c + D);
        (c += D + S), a.setItemLayout(w, { points: T.concat(M.slice().reverse()) });
      } else {
        var P = L.get(['itemStyle', 'height']);
        P == null ? (P = b) : ((P = z(P, u)), i === 'ascending' && (P = -P));
        var T = _(w, h),
          M = _(I, h + P);
        (h += P + S), a.setItemLayout(w, { points: T.concat(M.slice().reverse()) });
      }
    }
    uh(a);
  });
}
function ch(r) {
  r.registerChartView(nh),
    r.registerSeriesModel(oh),
    r.registerLayout(vh),
    r.registerProcessor(Qa('funnel'));
}
var hh = 0.3,
  fh = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t._dataGroup = new rt()), (t._initialized = !1), t;
    }
    return (
      (e.prototype.init = function () {
        this.group.add(this._dataGroup);
      }),
      (e.prototype.render = function (t, a, n, i) {
        this._progressiveEls = null;
        var o = this._dataGroup,
          s = t.getData(),
          l = this._data,
          u = t.coordinateSystem,
          v = u.dimensions,
          c = yi(t);
        s.diff(l).add(h).update(f).remove(d).execute();
        function h(g) {
          var m = gi(s, o, g, v, u);
          Yr(m, s, g, c);
        }
        function f(g, m) {
          var S = l.getItemGraphicEl(m),
            y = ls(s, g, v, u);
          s.setItemGraphicEl(g, S), ot(S, { shape: { points: y } }, t, g), ye(S), Yr(S, s, g, c);
        }
        function d(g) {
          var m = l.getItemGraphicEl(g);
          o.remove(m);
        }
        if (!this._initialized) {
          this._initialized = !0;
          var p = ph(u, t, function () {
            setTimeout(function () {
              o.removeClipPath();
            });
          });
          o.setClipPath(p);
        }
        this._data = s;
      }),
      (e.prototype.incrementalPrepareRender = function (t, a, n) {
        (this._initialized = !0), (this._data = null), this._dataGroup.removeAll();
      }),
      (e.prototype.incrementalRender = function (t, a, n) {
        for (
          var i = a.getData(),
            o = a.coordinateSystem,
            s = o.dimensions,
            l = yi(a),
            u = (this._progressiveEls = []),
            v = t.start;
          v < t.end;
          v++
        ) {
          var c = gi(i, this._dataGroup, v, s, o);
          (c.incremental = !0), Yr(c, i, v, l), u.push(c);
        }
      }),
      (e.prototype.remove = function () {
        this._dataGroup && this._dataGroup.removeAll(), (this._data = null);
      }),
      (e.type = 'parallel'),
      e
    );
  })(ct);
function ph(r, e, t) {
  var a = r.model,
    n = r.getRect(),
    i = new jt({ shape: { x: n.x, y: n.y, width: n.width, height: n.height } }),
    o = a.get('layout') === 'horizontal' ? 'width' : 'height';
  return i.setShape(o, 0), wt(i, { shape: { width: n.width, height: n.height } }, e, t), i;
}
function ls(r, e, t, a) {
  for (var n = [], i = 0; i < t.length; i++) {
    var o = t[i],
      s = r.get(r.mapDimension(o), e);
    dh(s, a.getAxis(o).type) || n.push(a.dataToPoint(s, o));
  }
  return n;
}
function gi(r, e, t, a, n) {
  var i = ls(r, t, a, n),
    o = new ja({ shape: { points: i }, z2: 10 });
  return e.add(o), r.setItemGraphicEl(t, o), o;
}
function yi(r) {
  var e = r.get('smooth', !0);
  return e === !0 && (e = hh), (e = ll(e)), ul(e) && (e = 0), { smooth: e };
}
function Yr(r, e, t, a) {
  r.useStyle(e.getItemVisual(t, 'style')), (r.style.fill = null), r.setShape('smooth', a.smooth);
  var n = e.getItemModel(t),
    i = n.getModel('emphasis');
  Mt(r, n, 'lineStyle'), lt(r, i.get('focus'), i.get('blurScope'), i.get('disabled'));
}
function dh(r, e) {
  return e === 'category' ? r == null : r == null || isNaN(r);
}
const gh = fh;
var yh = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (
      (t.type = e.type), (t.visualStyleAccessPath = 'lineStyle'), (t.visualDrawType = 'stroke'), t
    );
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      return He(null, this, { useEncodeDefaulter: st(mh, null, this) });
    }),
    (e.prototype.getRawIndicesByActiveState = function (t) {
      var a = this.coordinateSystem,
        n = this.getData(),
        i = [];
      return (
        a.eachActiveState(n, function (o, s) {
          t === o && i.push(n.getRawIndex(s));
        }),
        i
      );
    }),
    (e.type = 'series.parallel'),
    (e.dependencies = ['parallel']),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'parallel',
      parallelIndex: 0,
      label: { show: !1 },
      inactiveOpacity: 0.05,
      activeOpacity: 1,
      lineStyle: { width: 1, opacity: 0.45, type: 'solid' },
      emphasis: { label: { show: !1 } },
      progressive: 500,
      smooth: !1,
      animationEasing: 'linear',
    }),
    e
  );
})(ht);
function mh(r) {
  var e = r.ecModel.getComponent('parallel', r.get('parallelIndex'));
  if (e) {
    var t = {};
    return (
      R(e.dimensions, function (a) {
        var n = Sh(a);
        t[a] = n;
      }),
      t
    );
  }
}
function Sh(r) {
  return +r.replace('dim', '');
}
const _h = yh;
var bh = ['lineStyle', 'opacity'],
  xh = {
    seriesType: 'parallel',
    reset: function (r, e) {
      var t = r.coordinateSystem,
        a = {
          normal: r.get(['lineStyle', 'opacity']),
          active: r.get('activeOpacity'),
          inactive: r.get('inactiveOpacity'),
        };
      return {
        progress: function (n, i) {
          t.eachActiveState(
            i,
            function (o, s) {
              var l = a[o];
              if (o === 'normal' && i.hasItemOption) {
                var u = i.getItemModel(s).get(bh, !0);
                u != null && (l = u);
              }
              var v = i.ensureUniqueItemVisual(s, 'style');
              v.opacity = l;
            },
            n.start,
            n.end,
          );
        },
      };
    },
  };
const wh = xh;
function Ih(r) {
  Z(Mo),
    r.registerChartView(gh),
    r.registerSeriesModel(_h),
    r.registerVisual(r.PRIORITY.VISUAL.BRUSH, wh);
}
var Lh = (function () {
    function r() {
      (this.x1 = 0),
        (this.y1 = 0),
        (this.x2 = 0),
        (this.y2 = 0),
        (this.cpx1 = 0),
        (this.cpy1 = 0),
        (this.cpx2 = 0),
        (this.cpy2 = 0),
        (this.extent = 0);
    }
    return r;
  })(),
  Dh = (function (r) {
    k(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new Lh();
      }),
      (e.prototype.buildPath = function (t, a) {
        var n = a.extent;
        t.moveTo(a.x1, a.y1),
          t.bezierCurveTo(a.cpx1, a.cpy1, a.cpx2, a.cpy2, a.x2, a.y2),
          a.orient === 'vertical'
            ? (t.lineTo(a.x2 + n, a.y2),
              t.bezierCurveTo(a.cpx2 + n, a.cpy2, a.cpx1 + n, a.cpy1, a.x1 + n, a.y1))
            : (t.lineTo(a.x2, a.y2 + n),
              t.bezierCurveTo(a.cpx2, a.cpy2 + n, a.cpx1, a.cpy1 + n, a.x1, a.y1 + n)),
          t.closePath();
      }),
      (e.prototype.highlight = function () {
        Fa(this);
      }),
      (e.prototype.downplay = function () {
        $a(this);
      }),
      e
    );
  })(yt),
  Th = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t._focusAdjacencyDisabled = !1), t;
    }
    return (
      (e.prototype.render = function (t, a, n) {
        var i = this,
          o = t.getGraph(),
          s = this.group,
          l = t.layoutInfo,
          u = l.width,
          v = l.height,
          c = t.getData(),
          h = t.getData('edge'),
          f = t.get('orient');
        (this._model = t),
          s.removeAll(),
          (s.x = l.x),
          (s.y = l.y),
          o.eachEdge(function (d) {
            var p = new Dh(),
              g = it(p);
            (g.dataIndex = d.dataIndex), (g.seriesIndex = t.seriesIndex), (g.dataType = 'edge');
            var m = d.getModel(),
              S = m.getModel('lineStyle'),
              y = S.get('curveness'),
              b = d.node1.getLayout(),
              _ = d.node1.getModel(),
              x = _.get('localX'),
              w = _.get('localY'),
              I = d.node2.getLayout(),
              L = d.node2.getModel(),
              D = L.get('localX'),
              T = L.get('localY'),
              M = d.getLayout(),
              P,
              A,
              C,
              E,
              N,
              V,
              G,
              O;
            (p.shape.extent = Math.max(1, M.dy)),
              (p.shape.orient = f),
              f === 'vertical'
                ? ((P = (x != null ? x * u : b.x) + M.sy),
                  (A = (w != null ? w * v : b.y) + b.dy),
                  (C = (D != null ? D * u : I.x) + M.ty),
                  (E = T != null ? T * v : I.y),
                  (N = P),
                  (V = A * (1 - y) + E * y),
                  (G = C),
                  (O = A * y + E * (1 - y)))
                : ((P = (x != null ? x * u : b.x) + b.dx),
                  (A = (w != null ? w * v : b.y) + M.sy),
                  (C = D != null ? D * u : I.x),
                  (E = (T != null ? T * v : I.y) + M.ty),
                  (N = P * (1 - y) + C * y),
                  (V = A),
                  (G = P * y + C * (1 - y)),
                  (O = E)),
              p.setShape({ x1: P, y1: A, x2: C, y2: E, cpx1: N, cpy1: V, cpx2: G, cpy2: O }),
              p.useStyle(S.getItemStyle()),
              mi(p.style, f, d);
            var B = '' + m.get('value'),
              K = Rt(m, 'edgeLabel');
            Kt(p, K, {
              labelFetcher: {
                getFormattedLabel: function (j, ut, Y, H, Q, q) {
                  return t.getFormattedLabel(
                    j,
                    ut,
                    'edge',
                    H,
                    ze(Q, K.normal && K.normal.get('formatter'), B),
                    q,
                  );
                },
              },
              labelDataIndex: d.dataIndex,
              defaultText: B,
            }),
              p.setTextConfig({ position: 'inside' });
            var X = m.getModel('emphasis');
            Mt(p, m, 'lineStyle', function (j) {
              var ut = j.getItemStyle();
              return mi(ut, f, d), ut;
            }),
              s.add(p),
              h.setItemGraphicEl(d.dataIndex, p);
            var W = X.get('focus');
            lt(
              p,
              W === 'adjacency'
                ? d.getAdjacentDataIndices()
                : W === 'trajectory'
                  ? d.getTrajectoryDataIndices()
                  : W,
              X.get('blurScope'),
              X.get('disabled'),
            );
          }),
          o.eachNode(function (d) {
            var p = d.getLayout(),
              g = d.getModel(),
              m = g.get('localX'),
              S = g.get('localY'),
              y = g.getModel('emphasis'),
              b = new jt({
                shape: {
                  x: m != null ? m * u : p.x,
                  y: S != null ? S * v : p.y,
                  width: p.dx,
                  height: p.dy,
                },
                style: g.getModel('itemStyle').getItemStyle(),
                z2: 10,
              });
            Kt(b, Rt(g), {
              labelFetcher: {
                getFormattedLabel: function (x, w) {
                  return t.getFormattedLabel(x, w, 'node');
                },
              },
              labelDataIndex: d.dataIndex,
              defaultText: d.id,
            }),
              (b.disableLabelAnimation = !0),
              b.setStyle('fill', d.getVisual('color')),
              b.setStyle('decal', d.getVisual('style').decal),
              Mt(b, g),
              s.add(b),
              c.setItemGraphicEl(d.dataIndex, b),
              (it(b).dataType = 'node');
            var _ = y.get('focus');
            lt(
              b,
              _ === 'adjacency'
                ? d.getAdjacentDataIndices()
                : _ === 'trajectory'
                  ? d.getTrajectoryDataIndices()
                  : _,
              y.get('blurScope'),
              y.get('disabled'),
            );
          }),
          c.eachItemGraphicEl(function (d, p) {
            var g = c.getItemModel(p);
            g.get('draggable') &&
              ((d.drift = function (m, S) {
                (i._focusAdjacencyDisabled = !0),
                  (this.shape.x += m),
                  (this.shape.y += S),
                  this.dirty(),
                  n.dispatchAction({
                    type: 'dragNode',
                    seriesId: t.id,
                    dataIndex: c.getRawIndex(p),
                    localX: this.shape.x / u,
                    localY: this.shape.y / v,
                  });
              }),
              (d.ondragend = function () {
                i._focusAdjacencyDisabled = !1;
              }),
              (d.draggable = !0),
              (d.cursor = 'move'));
          }),
          !this._data &&
            t.isAnimationEnabled() &&
            s.setClipPath(
              Ah(s.getBoundingRect(), t, function () {
                s.removeClipPath();
              }),
            ),
          (this._data = t.getData());
      }),
      (e.prototype.dispose = function () {}),
      (e.type = 'sankey'),
      e
    );
  })(ct);
function mi(r, e, t) {
  switch (r.fill) {
    case 'source':
      (r.fill = t.node1.getVisual('color')), (r.decal = t.node1.getVisual('style').decal);
      break;
    case 'target':
      (r.fill = t.node2.getVisual('color')), (r.decal = t.node2.getVisual('style').decal);
      break;
    case 'gradient':
      var a = t.node1.getVisual('color'),
        n = t.node2.getVisual('color');
      St(a) &&
        St(n) &&
        (r.fill = new vl(0, 0, +(e === 'horizontal'), +(e === 'vertical'), [
          { color: a, offset: 0 },
          { color: n, offset: 1 },
        ]));
  }
}
function Ah(r, e, t) {
  var a = new jt({ shape: { x: r.x - 10, y: r.y - 10, width: 0, height: r.height + 20 } });
  return wt(a, { shape: { width: r.width + 20 } }, e, t), a;
}
const Ch = Th;
var Mh = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      var n = t.edges || t.links,
        i = t.data || t.nodes,
        o = t.levels;
      this.levelModels = [];
      for (var s = this.levelModels, l = 0; l < o.length; l++)
        o[l].depth != null && o[l].depth >= 0 && (s[o[l].depth] = new qt(o[l], this, a));
      if (i && n) {
        var u = ss(i, n, this, !0, v);
        return u.data;
      }
      function v(c, h) {
        c.wrapMethod('getItemModel', function (f, d) {
          var p = f.parentModel,
            g = p.getData().getItemLayout(d);
          if (g) {
            var m = g.depth,
              S = p.levelModels[m];
            S && (f.parentModel = S);
          }
          return f;
        }),
          h.wrapMethod('getItemModel', function (f, d) {
            var p = f.parentModel,
              g = p.getGraph().getEdgeByIndex(d),
              m = g.node1.getLayout();
            if (m) {
              var S = m.depth,
                y = p.levelModels[S];
              y && (f.parentModel = y);
            }
            return f;
          });
      }
    }),
    (e.prototype.setNodePosition = function (t, a) {
      var n = this.option.data || this.option.nodes,
        i = n[t];
      (i.localX = a[0]), (i.localY = a[1]);
    }),
    (e.prototype.getGraph = function () {
      return this.getData().graph;
    }),
    (e.prototype.getEdgeData = function () {
      return this.getGraph().edgeData;
    }),
    (e.prototype.formatTooltip = function (t, a, n) {
      function i(f) {
        return isNaN(f) || f == null;
      }
      if (n === 'edge') {
        var o = this.getDataParams(t, n),
          s = o.data,
          l = o.value,
          u = s.source + ' -- ' + s.target;
        return Ot('nameValue', { name: u, value: l, noValue: i(l) });
      } else {
        var v = this.getGraph().getNodeByIndex(t),
          c = v.getLayout().value,
          h = this.getDataParams(t, n).data.name;
        return Ot('nameValue', { name: h != null ? h + '' : null, value: c, noValue: i(c) });
      }
    }),
    (e.prototype.optionUpdated = function () {}),
    (e.prototype.getDataParams = function (t, a) {
      var n = r.prototype.getDataParams.call(this, t, a);
      if (n.value == null && a === 'node') {
        var i = this.getGraph().getNodeByIndex(t),
          o = i.getLayout().value;
        n.value = o;
      }
      return n;
    }),
    (e.type = 'series.sankey'),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'view',
      left: '5%',
      top: '5%',
      right: '20%',
      bottom: '5%',
      orient: 'horizontal',
      nodeWidth: 20,
      nodeGap: 8,
      draggable: !0,
      layoutIterations: 32,
      label: { show: !0, position: 'right', fontSize: 12 },
      edgeLabel: { show: !1, fontSize: 12 },
      levels: [],
      nodeAlign: 'justify',
      lineStyle: { color: '#314656', opacity: 0.2, curveness: 0.5 },
      emphasis: { label: { show: !0 }, lineStyle: { opacity: 0.5 } },
      select: { itemStyle: { borderColor: '#212121' } },
      animationEasing: 'linear',
      animationDuration: 1e3,
    }),
    e
  );
})(ht);
const Ph = Mh;
function Eh(r, e) {
  r.eachSeriesByType('sankey', function (t) {
    var a = t.get('nodeWidth'),
      n = t.get('nodeGap'),
      i = Nh(t, e);
    t.layoutInfo = i;
    var o = i.width,
      s = i.height,
      l = t.getGraph(),
      u = l.nodes,
      v = l.edges;
    Vh(u);
    var c = At(u, function (p) {
        return p.getLayout().value === 0;
      }),
      h = c.length !== 0 ? 0 : t.get('layoutIterations'),
      f = t.get('orient'),
      d = t.get('nodeAlign');
    Rh(u, v, a, n, o, s, h, f, d);
  });
}
function Nh(r, e) {
  return de(r.getBoxLayoutParams(), { width: e.getWidth(), height: e.getHeight() });
}
function Rh(r, e, t, a, n, i, o, s, l) {
  kh(r, e, t, n, i, s, l), Oh(r, e, i, n, a, o, s), qh(r, s);
}
function Vh(r) {
  R(r, function (e) {
    var t = Xt(e.outEdges, ur),
      a = Xt(e.inEdges, ur),
      n = e.getValue() || 0,
      i = Math.max(t, a, n);
    e.setLayout({ value: i }, !0);
  });
}
function kh(r, e, t, a, n, i, o) {
  for (var s = [], l = [], u = [], v = [], c = 0, h = 0; h < e.length; h++) s[h] = 1;
  for (var h = 0; h < r.length; h++) (l[h] = r[h].inEdges.length), l[h] === 0 && u.push(r[h]);
  for (var f = -1; u.length; ) {
    for (var d = 0; d < u.length; d++) {
      var p = u[d],
        g = p.hostGraph.data.getRawDataItem(p.dataIndex),
        m = g.depth != null && g.depth >= 0;
      m && g.depth > f && (f = g.depth),
        p.setLayout({ depth: m ? g.depth : c }, !0),
        i === 'vertical' ? p.setLayout({ dy: t }, !0) : p.setLayout({ dx: t }, !0);
      for (var S = 0; S < p.outEdges.length; S++) {
        var y = p.outEdges[S],
          b = e.indexOf(y);
        s[b] = 0;
        var _ = y.node2,
          x = r.indexOf(_);
        --l[x] === 0 && v.indexOf(_) < 0 && v.push(_);
      }
    }
    ++c, (u = v), (v = []);
  }
  for (var h = 0; h < s.length; h++)
    if (s[h] === 1) throw new Error('Sankey is a DAG, the original data has cycle!');
  var w = f > c - 1 ? f : c - 1;
  o && o !== 'left' && Gh(r, o, i, w);
  var I = i === 'vertical' ? (n - t) / w : (a - t) / w;
  zh(r, I, i);
}
function us(r) {
  var e = r.hostGraph.data.getRawDataItem(r.dataIndex);
  return e.depth != null && e.depth >= 0;
}
function Gh(r, e, t, a) {
  if (e === 'right') {
    for (var n = [], i = r, o = 0; i.length; ) {
      for (var s = 0; s < i.length; s++) {
        var l = i[s];
        l.setLayout({ skNodeHeight: o }, !0);
        for (var u = 0; u < l.inEdges.length; u++) {
          var v = l.inEdges[u];
          n.indexOf(v.node1) < 0 && n.push(v.node1);
        }
      }
      (i = n), (n = []), ++o;
    }
    R(r, function (c) {
      us(c) || c.setLayout({ depth: Math.max(0, a - c.getLayout().skNodeHeight) }, !0);
    });
  } else e === 'justify' && Bh(r, a);
}
function Bh(r, e) {
  R(r, function (t) {
    !us(t) && !t.outEdges.length && t.setLayout({ depth: e }, !0);
  });
}
function zh(r, e, t) {
  R(r, function (a) {
    var n = a.getLayout().depth * e;
    t === 'vertical' ? a.setLayout({ y: n }, !0) : a.setLayout({ x: n }, !0);
  });
}
function Oh(r, e, t, a, n, i, o) {
  var s = Hh(r, o);
  Fh(s, e, t, a, n, o), Xr(s, n, t, a, o);
  for (var l = 1; i > 0; i--)
    (l *= 0.99), $h(s, l, o), Xr(s, n, t, a, o), Xh(s, l, o), Xr(s, n, t, a, o);
}
function Hh(r, e) {
  var t = [],
    a = e === 'vertical' ? 'y' : 'x',
    n = ma(r, function (i) {
      return i.getLayout()[a];
    });
  return (
    n.keys.sort(function (i, o) {
      return i - o;
    }),
    R(n.keys, function (i) {
      t.push(n.buckets.get(i));
    }),
    t
  );
}
function Fh(r, e, t, a, n, i) {
  var o = 1 / 0;
  R(r, function (s) {
    var l = s.length,
      u = 0;
    R(s, function (c) {
      u += c.getLayout().value;
    });
    var v = i === 'vertical' ? (a - (l - 1) * n) / u : (t - (l - 1) * n) / u;
    v < o && (o = v);
  }),
    R(r, function (s) {
      R(s, function (l, u) {
        var v = l.getLayout().value * o;
        i === 'vertical'
          ? (l.setLayout({ x: u }, !0), l.setLayout({ dx: v }, !0))
          : (l.setLayout({ y: u }, !0), l.setLayout({ dy: v }, !0));
      });
    }),
    R(e, function (s) {
      var l = +s.getValue() * o;
      s.setLayout({ dy: l }, !0);
    });
}
function Xr(r, e, t, a, n) {
  var i = n === 'vertical' ? 'x' : 'y';
  R(r, function (o) {
    o.sort(function (p, g) {
      return p.getLayout()[i] - g.getLayout()[i];
    });
    for (var s, l, u, v = 0, c = o.length, h = n === 'vertical' ? 'dx' : 'dy', f = 0; f < c; f++)
      (l = o[f]),
        (u = v - l.getLayout()[i]),
        u > 0 &&
          ((s = l.getLayout()[i] + u),
          n === 'vertical' ? l.setLayout({ x: s }, !0) : l.setLayout({ y: s }, !0)),
        (v = l.getLayout()[i] + l.getLayout()[h] + e);
    var d = n === 'vertical' ? a : t;
    if (((u = v - e - d), u > 0)) {
      (s = l.getLayout()[i] - u),
        n === 'vertical' ? l.setLayout({ x: s }, !0) : l.setLayout({ y: s }, !0),
        (v = s);
      for (var f = c - 2; f >= 0; --f)
        (l = o[f]),
          (u = l.getLayout()[i] + l.getLayout()[h] + e - v),
          u > 0 &&
            ((s = l.getLayout()[i] - u),
            n === 'vertical' ? l.setLayout({ x: s }, !0) : l.setLayout({ y: s }, !0)),
          (v = l.getLayout()[i]);
    }
  });
}
function $h(r, e, t) {
  R(r.slice().reverse(), function (a) {
    R(a, function (n) {
      if (n.outEdges.length) {
        var i = Xt(n.outEdges, Wh, t) / Xt(n.outEdges, ur);
        if (isNaN(i)) {
          var o = n.outEdges.length;
          i = o ? Xt(n.outEdges, Uh, t) / o : 0;
        }
        if (t === 'vertical') {
          var s = n.getLayout().x + (i - Qt(n, t)) * e;
          n.setLayout({ x: s }, !0);
        } else {
          var l = n.getLayout().y + (i - Qt(n, t)) * e;
          n.setLayout({ y: l }, !0);
        }
      }
    });
  });
}
function Wh(r, e) {
  return Qt(r.node2, e) * r.getValue();
}
function Uh(r, e) {
  return Qt(r.node2, e);
}
function Zh(r, e) {
  return Qt(r.node1, e) * r.getValue();
}
function Yh(r, e) {
  return Qt(r.node1, e);
}
function Qt(r, e) {
  return e === 'vertical'
    ? r.getLayout().x + r.getLayout().dx / 2
    : r.getLayout().y + r.getLayout().dy / 2;
}
function ur(r) {
  return r.getValue();
}
function Xt(r, e, t) {
  for (var a = 0, n = r.length, i = -1; ++i < n; ) {
    var o = +e(r[i], t);
    isNaN(o) || (a += o);
  }
  return a;
}
function Xh(r, e, t) {
  R(r, function (a) {
    R(a, function (n) {
      if (n.inEdges.length) {
        var i = Xt(n.inEdges, Zh, t) / Xt(n.inEdges, ur);
        if (isNaN(i)) {
          var o = n.inEdges.length;
          i = o ? Xt(n.inEdges, Yh, t) / o : 0;
        }
        if (t === 'vertical') {
          var s = n.getLayout().x + (i - Qt(n, t)) * e;
          n.setLayout({ x: s }, !0);
        } else {
          var l = n.getLayout().y + (i - Qt(n, t)) * e;
          n.setLayout({ y: l }, !0);
        }
      }
    });
  });
}
function qh(r, e) {
  var t = e === 'vertical' ? 'x' : 'y';
  R(r, function (a) {
    a.outEdges.sort(function (n, i) {
      return n.node2.getLayout()[t] - i.node2.getLayout()[t];
    }),
      a.inEdges.sort(function (n, i) {
        return n.node1.getLayout()[t] - i.node1.getLayout()[t];
      });
  }),
    R(r, function (a) {
      var n = 0,
        i = 0;
      R(a.outEdges, function (o) {
        o.setLayout({ sy: n }, !0), (n += o.getLayout().dy);
      }),
        R(a.inEdges, function (o) {
          o.setLayout({ ty: i }, !0), (i += o.getLayout().dy);
        });
    });
}
function Kh(r) {
  r.eachSeriesByType('sankey', function (e) {
    var t = e.getGraph(),
      a = t.nodes,
      n = t.edges;
    if (a.length) {
      var i = 1 / 0,
        o = -1 / 0;
      R(a, function (s) {
        var l = s.getLayout().value;
        l < i && (i = l), l > o && (o = l);
      }),
        R(a, function (s) {
          var l = new Do({
              type: 'color',
              mappingMethod: 'linear',
              dataExtent: [i, o],
              visual: e.get('color'),
            }),
            u = l.mapValueToVisual(s.getLayout().value),
            v = s.getModel().get(['itemStyle', 'color']);
          v != null
            ? (s.setVisual('color', v), s.setVisual('style', { fill: v }))
            : (s.setVisual('color', u), s.setVisual('style', { fill: u }));
        });
    }
    n.length &&
      R(n, function (s) {
        var l = s.getModel().get('lineStyle');
        s.setVisual('style', l);
      });
  });
}
function jh(r) {
  r.registerChartView(Ch),
    r.registerSeriesModel(Ph),
    r.registerLayout(Eh),
    r.registerVisual(Kh),
    r.registerAction({ type: 'dragNode', event: 'dragnode', update: 'update' }, function (e, t) {
      t.eachComponent({ mainType: 'series', subType: 'sankey', query: e }, function (a) {
        a.setNodePosition(e.dataIndex, [e.localX, e.localY]);
      });
    });
}
var vs = (function () {
    function r() {}
    return (
      (r.prototype.getInitialData = function (e, t) {
        var a,
          n = t.getComponent('xAxis', this.get('xAxisIndex')),
          i = t.getComponent('yAxis', this.get('yAxisIndex')),
          o = n.get('type'),
          s = i.get('type'),
          l;
        o === 'category'
          ? ((e.layout = 'horizontal'), (a = n.getOrdinalMeta()), (l = !0))
          : s === 'category'
            ? ((e.layout = 'vertical'), (a = i.getOrdinalMeta()), (l = !0))
            : (e.layout = e.layout || 'horizontal');
        var u = ['x', 'y'],
          v = e.layout === 'horizontal' ? 0 : 1,
          c = (this._baseAxisDim = u[v]),
          h = u[1 - v],
          f = [n, i],
          d = f[v].get('type'),
          p = f[1 - v].get('type'),
          g = e.data;
        if (g && l) {
          var m = [];
          R(g, function (b, _) {
            var x;
            F(b)
              ? ((x = b.slice()), b.unshift(_))
              : F(b.value)
                ? ((x = U({}, b)), (x.value = x.value.slice()), b.value.unshift(_))
                : (x = b),
              m.push(x);
          }),
            (e.data = m);
        }
        var S = this.defaultValueDimensions,
          y = [
            {
              name: c,
              type: Sa(d),
              ordinalMeta: a,
              otherDims: { tooltip: !1, itemName: 0 },
              dimsDef: ['base'],
            },
            { name: h, type: Sa(p), dimsDef: S.slice() },
          ];
        return Ka(this, {
          coordDimensions: y,
          dimensionsCount: S.length + 1,
          encodeDefaulter: et(cl, y, this),
        });
      }),
      (r.prototype.getBaseAxis = function () {
        var e = this._baseAxisDim;
        return this.ecModel.getComponent(e + 'Axis', this.get(e + 'AxisIndex')).axis;
      }),
      r
    );
  })(),
  cs = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (
        (t.type = e.type),
        (t.defaultValueDimensions = [
          { name: 'min', defaultTooltip: !0 },
          { name: 'Q1', defaultTooltip: !0 },
          { name: 'median', defaultTooltip: !0 },
          { name: 'Q3', defaultTooltip: !0 },
          { name: 'max', defaultTooltip: !0 },
        ]),
        (t.visualDrawType = 'stroke'),
        t
      );
    }
    return (
      (e.type = 'series.boxplot'),
      (e.dependencies = ['xAxis', 'yAxis', 'grid']),
      (e.defaultOption = {
        z: 2,
        coordinateSystem: 'cartesian2d',
        legendHoverLink: !0,
        layout: null,
        boxWidth: [7, 50],
        itemStyle: { color: '#fff', borderWidth: 1 },
        emphasis: {
          scale: !0,
          itemStyle: {
            borderWidth: 2,
            shadowBlur: 5,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            shadowColor: 'rgba(0,0,0,0.2)',
          },
        },
        animationDuration: 800,
      }),
      e
    );
  })(ht);
ge(cs, vs, !0);
const Qh = cs;
var Jh = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, a, n) {
        var i = t.getData(),
          o = this.group,
          s = this._data;
        this._data || o.removeAll();
        var l = t.get('layout') === 'horizontal' ? 1 : 0;
        i
          .diff(s)
          .add(function (u) {
            if (i.hasValue(u)) {
              var v = i.getItemLayout(u),
                c = Si(v, i, u, l, !0);
              i.setItemGraphicEl(u, c), o.add(c);
            }
          })
          .update(function (u, v) {
            var c = s.getItemGraphicEl(v);
            if (!i.hasValue(u)) {
              o.remove(c);
              return;
            }
            var h = i.getItemLayout(u);
            c ? (ye(c), hs(h, c, i, u)) : (c = Si(h, i, u, l)), o.add(c), i.setItemGraphicEl(u, c);
          })
          .remove(function (u) {
            var v = s.getItemGraphicEl(u);
            v && o.remove(v);
          })
          .execute(),
          (this._data = i);
      }),
      (e.prototype.remove = function (t) {
        var a = this.group,
          n = this._data;
        (this._data = null),
          n &&
            n.eachItemGraphicEl(function (i) {
              i && a.remove(i);
            });
      }),
      (e.type = 'boxplot'),
      e
    );
  })(ct),
  tf = (function () {
    function r() {}
    return r;
  })(),
  ef = (function (r) {
    k(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return (a.type = 'boxplotBoxPath'), a;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new tf();
      }),
      (e.prototype.buildPath = function (t, a) {
        var n = a.points,
          i = 0;
        for (t.moveTo(n[i][0], n[i][1]), i++; i < 4; i++) t.lineTo(n[i][0], n[i][1]);
        for (t.closePath(); i < n.length; i++)
          t.moveTo(n[i][0], n[i][1]), i++, t.lineTo(n[i][0], n[i][1]);
      }),
      e
    );
  })(yt);
function Si(r, e, t, a, n) {
  var i = r.ends,
    o = new ef({ shape: { points: n ? rf(i, a, r) : i } });
  return hs(r, o, e, t, n), o;
}
function hs(r, e, t, a, n) {
  var i = t.hostModel,
    o = hl[n ? 'initProps' : 'updateProps'];
  o(e, { shape: { points: r.ends } }, i, a),
    e.useStyle(t.getItemVisual(a, 'style')),
    (e.style.strokeNoScale = !0),
    (e.z2 = 100);
  var s = t.getItemModel(a),
    l = s.getModel('emphasis');
  Mt(e, s), lt(e, l.get('focus'), l.get('blurScope'), l.get('disabled'));
}
function rf(r, e, t) {
  return $(r, function (a) {
    return (a = a.slice()), (a[e] = t.initBaseline), a;
  });
}
const af = Jh;
var Te = R;
function nf(r) {
  var e = of(r);
  Te(e, function (t) {
    var a = t.seriesModels;
    a.length &&
      (sf(t),
      Te(a, function (n, i) {
        lf(n, t.boxOffsetList[i], t.boxWidthList[i]);
      }));
  });
}
function of(r) {
  var e = [],
    t = [];
  return (
    r.eachSeriesByType('boxplot', function (a) {
      var n = a.getBaseAxis(),
        i = It(t, n);
      i < 0 && ((i = t.length), (t[i] = n), (e[i] = { axis: n, seriesModels: [] })),
        e[i].seriesModels.push(a);
    }),
    e
  );
}
function sf(r) {
  var e = r.axis,
    t = r.seriesModels,
    a = t.length,
    n = (r.boxWidthList = []),
    i = (r.boxOffsetList = []),
    o = [],
    s;
  if (e.type === 'category') s = e.getBandWidth();
  else {
    var l = 0;
    Te(t, function (d) {
      l = Math.max(l, d.getData().count());
    });
    var u = e.getExtent();
    s = Math.abs(u[1] - u[0]) / l;
  }
  Te(t, function (d) {
    var p = d.get('boxWidth');
    F(p) || (p = [p, p]), o.push([z(p[0], s) || 0, z(p[1], s) || 0]);
  });
  var v = s * 0.8 - 2,
    c = (v / a) * 0.3,
    h = (v - c * (a - 1)) / a,
    f = h / 2 - v / 2;
  Te(t, function (d, p) {
    i.push(f), (f += c + h), n.push(Math.min(Math.max(h, o[p][0]), o[p][1]));
  });
}
function lf(r, e, t) {
  var a = r.coordinateSystem,
    n = r.getData(),
    i = t / 2,
    o = r.get('layout') === 'horizontal' ? 0 : 1,
    s = 1 - o,
    l = ['x', 'y'],
    u = n.mapDimension(l[o]),
    v = n.mapDimensionsAll(l[s]);
  if (u == null || v.length < 5) return;
  for (var c = 0; c < n.count(); c++) {
    var h = n.get(u, c),
      f = y(h, v[2], c),
      d = y(h, v[0], c),
      p = y(h, v[1], c),
      g = y(h, v[3], c),
      m = y(h, v[4], c),
      S = [];
    b(S, p, !1),
      b(S, g, !0),
      S.push(d, p, m, g),
      _(S, d),
      _(S, m),
      _(S, f),
      n.setItemLayout(c, { initBaseline: f[s], ends: S });
  }
  function y(x, w, I) {
    var L = n.get(w, I),
      D = [];
    (D[o] = x), (D[s] = L);
    var T;
    return isNaN(x) || isNaN(L) ? (T = [NaN, NaN]) : ((T = a.dataToPoint(D)), (T[o] += e)), T;
  }
  function b(x, w, I) {
    var L = w.slice(),
      D = w.slice();
    (L[o] += i), (D[o] -= i), I ? x.push(L, D) : x.push(D, L);
  }
  function _(x, w) {
    var I = w.slice(),
      L = w.slice();
    (I[o] -= i), (L[o] += i), x.push(I, L);
  }
}
function uf(r, e) {
  e = e || {};
  for (var t = [], a = [], n = e.boundIQR, i = n === 'none' || n === 0, o = 0; o < r.length; o++) {
    var s = _a(r[o].slice()),
      l = Tr(s, 0.25),
      u = Tr(s, 0.5),
      v = Tr(s, 0.75),
      c = s[0],
      h = s[s.length - 1],
      f = (n == null ? 1.5 : n) * (v - l),
      d = i ? c : Math.max(c, l - f),
      p = i ? h : Math.min(h, v + f),
      g = e.itemNameFormatter,
      m = nt(g) ? g({ value: o }) : St(g) ? g.replace('{value}', o + '') : o + '';
    t.push([m, d, l, u, v, p]);
    for (var S = 0; S < s.length; S++) {
      var y = s[S];
      if (y < d || y > p) {
        var b = [m, y];
        a.push(b);
      }
    }
  }
  return { boxData: t, outliers: a };
}
var vf = {
  type: 'echarts:boxplot',
  transform: function (e) {
    var t = e.upstream;
    if (t.sourceFormat !== Po) {
      var a = '';
      tt(a);
    }
    var n = uf(t.getRawData(), e.config);
    return [
      { dimensions: ['ItemName', 'Low', 'Q1', 'Q2', 'Q3', 'High'], data: n.boxData },
      { data: n.outliers },
    ];
  },
};
function cf(r) {
  r.registerSeriesModel(Qh), r.registerChartView(af), r.registerLayout(nf), r.registerTransform(vf);
}
var hf = ['color', 'borderColor'],
  ff = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.render = function (t, a, n) {
        this.group.removeClipPath(),
          (this._progressiveEls = null),
          this._updateDrawMode(t),
          this._isLargeDraw ? this._renderLarge(t) : this._renderNormal(t);
      }),
      (e.prototype.incrementalPrepareRender = function (t, a, n) {
        this._clear(), this._updateDrawMode(t);
      }),
      (e.prototype.incrementalRender = function (t, a, n, i) {
        (this._progressiveEls = []),
          this._isLargeDraw
            ? this._incrementalRenderLarge(t, a)
            : this._incrementalRenderNormal(t, a);
      }),
      (e.prototype.eachRendered = function (t) {
        br(this._progressiveEls || this.group, t);
      }),
      (e.prototype._updateDrawMode = function (t) {
        var a = t.pipelineContext.large;
        (this._isLargeDraw == null || a !== this._isLargeDraw) &&
          ((this._isLargeDraw = a), this._clear());
      }),
      (e.prototype._renderNormal = function (t) {
        var a = t.getData(),
          n = this._data,
          i = this.group,
          o = a.getLayout('isSimpleBox'),
          s = t.get('clip', !0),
          l = t.coordinateSystem,
          u = l.getArea && l.getArea();
        this._data || i.removeAll(),
          a
            .diff(n)
            .add(function (v) {
              if (a.hasValue(v)) {
                var c = a.getItemLayout(v);
                if (s && _i(u, c)) return;
                var h = qr(c, v, !0);
                wt(h, { shape: { points: c.ends } }, t, v),
                  Kr(h, a, v, o),
                  i.add(h),
                  a.setItemGraphicEl(v, h);
              }
            })
            .update(function (v, c) {
              var h = n.getItemGraphicEl(c);
              if (!a.hasValue(v)) {
                i.remove(h);
                return;
              }
              var f = a.getItemLayout(v);
              if (s && _i(u, f)) {
                i.remove(h);
                return;
              }
              h ? (ot(h, { shape: { points: f.ends } }, t, v), ye(h)) : (h = qr(f)),
                Kr(h, a, v, o),
                i.add(h),
                a.setItemGraphicEl(v, h);
            })
            .remove(function (v) {
              var c = n.getItemGraphicEl(v);
              c && i.remove(c);
            })
            .execute(),
          (this._data = a);
      }),
      (e.prototype._renderLarge = function (t) {
        this._clear(), bi(t, this.group);
        var a = t.get('clip', !0) ? Ja(t.coordinateSystem, !1, t) : null;
        a ? this.group.setClipPath(a) : this.group.removeClipPath();
      }),
      (e.prototype._incrementalRenderNormal = function (t, a) {
        for (var n = a.getData(), i = n.getLayout('isSimpleBox'), o; (o = t.next()) != null; ) {
          var s = n.getItemLayout(o),
            l = qr(s);
          Kr(l, n, o, i), (l.incremental = !0), this.group.add(l), this._progressiveEls.push(l);
        }
      }),
      (e.prototype._incrementalRenderLarge = function (t, a) {
        bi(a, this.group, this._progressiveEls, !0);
      }),
      (e.prototype.remove = function (t) {
        this._clear();
      }),
      (e.prototype._clear = function () {
        this.group.removeAll(), (this._data = null);
      }),
      (e.type = 'candlestick'),
      e
    );
  })(ct),
  pf = (function () {
    function r() {}
    return r;
  })(),
  df = (function (r) {
    k(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return (a.type = 'normalCandlestickBox'), a;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new pf();
      }),
      (e.prototype.buildPath = function (t, a) {
        var n = a.points;
        this.__simpleBox
          ? (t.moveTo(n[4][0], n[4][1]), t.lineTo(n[6][0], n[6][1]))
          : (t.moveTo(n[0][0], n[0][1]),
            t.lineTo(n[1][0], n[1][1]),
            t.lineTo(n[2][0], n[2][1]),
            t.lineTo(n[3][0], n[3][1]),
            t.closePath(),
            t.moveTo(n[4][0], n[4][1]),
            t.lineTo(n[5][0], n[5][1]),
            t.moveTo(n[6][0], n[6][1]),
            t.lineTo(n[7][0], n[7][1]));
      }),
      e
    );
  })(yt);
function qr(r, e, t) {
  var a = r.ends;
  return new df({ shape: { points: t ? gf(a, r) : a }, z2: 100 });
}
function _i(r, e) {
  for (var t = !0, a = 0; a < e.ends.length; a++)
    if (r.contain(e.ends[a][0], e.ends[a][1])) {
      t = !1;
      break;
    }
  return t;
}
function Kr(r, e, t, a) {
  var n = e.getItemModel(t);
  r.useStyle(e.getItemVisual(t, 'style')),
    (r.style.strokeNoScale = !0),
    (r.__simpleBox = a),
    Mt(r, n);
}
function gf(r, e) {
  return $(r, function (t) {
    return (t = t.slice()), (t[1] = e.initBaseline), t;
  });
}
var yf = (function () {
    function r() {}
    return r;
  })(),
  jr = (function (r) {
    k(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return (a.type = 'largeCandlestickBox'), a;
    }
    return (
      (e.prototype.getDefaultShape = function () {
        return new yf();
      }),
      (e.prototype.buildPath = function (t, a) {
        for (var n = a.points, i = 0; i < n.length; )
          if (this.__sign === n[i++]) {
            var o = n[i++];
            t.moveTo(o, n[i++]), t.lineTo(o, n[i++]);
          } else i += 3;
      }),
      e
    );
  })(yt);
function bi(r, e, t, a) {
  var n = r.getData(),
    i = n.getLayout('largePoints'),
    o = new jr({ shape: { points: i }, __sign: 1, ignoreCoarsePointer: !0 });
  e.add(o);
  var s = new jr({ shape: { points: i }, __sign: -1, ignoreCoarsePointer: !0 });
  e.add(s);
  var l = new jr({ shape: { points: i }, __sign: 0, ignoreCoarsePointer: !0 });
  e.add(l),
    Qr(1, o, r),
    Qr(-1, s, r),
    Qr(0, l, r),
    a && ((o.incremental = !0), (s.incremental = !0)),
    t && t.push(o, s);
}
function Qr(r, e, t, a) {
  var n =
    t.get(['itemStyle', r > 0 ? 'borderColor' : 'borderColor0']) ||
    t.get(['itemStyle', r > 0 ? 'color' : 'color0']);
  r === 0 && (n = t.get(['itemStyle', 'borderColorDoji']));
  var i = t.getModel('itemStyle').getItemStyle(hf);
  e.useStyle(i), (e.style.fill = null), (e.style.stroke = n);
}
const mf = ff;
var fs = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (
      (t.type = e.type),
      (t.defaultValueDimensions = [
        { name: 'open', defaultTooltip: !0 },
        { name: 'close', defaultTooltip: !0 },
        { name: 'lowest', defaultTooltip: !0 },
        { name: 'highest', defaultTooltip: !0 },
      ]),
      t
    );
  }
  return (
    (e.prototype.getShadowDim = function () {
      return 'open';
    }),
    (e.prototype.brushSelector = function (t, a, n) {
      var i = a.getItemLayout(t);
      return i && n.rect(i.brushRect);
    }),
    (e.type = 'series.candlestick'),
    (e.dependencies = ['xAxis', 'yAxis', 'grid']),
    (e.defaultOption = {
      z: 2,
      coordinateSystem: 'cartesian2d',
      legendHoverLink: !0,
      layout: null,
      clip: !0,
      itemStyle: {
        color: '#eb5454',
        color0: '#47b262',
        borderColor: '#eb5454',
        borderColor0: '#47b262',
        borderColorDoji: null,
        borderWidth: 1,
      },
      emphasis: { scale: !0, itemStyle: { borderWidth: 2 } },
      barMaxWidth: null,
      barMinWidth: null,
      barWidth: null,
      large: !0,
      largeThreshold: 600,
      progressive: 3e3,
      progressiveThreshold: 1e4,
      progressiveChunkMode: 'mod',
      animationEasing: 'linear',
      animationDuration: 300,
    }),
    e
  );
})(ht);
ge(fs, vs, !0);
const Sf = fs;
function _f(r) {
  !r ||
    !F(r.series) ||
    R(r.series, function (e) {
      tn(e) && e.type === 'k' && (e.type = 'candlestick');
    });
}
var bf = ['itemStyle', 'borderColor'],
  xf = ['itemStyle', 'borderColor0'],
  wf = ['itemStyle', 'borderColorDoji'],
  If = ['itemStyle', 'color'],
  Lf = ['itemStyle', 'color0'],
  Df = {
    seriesType: 'candlestick',
    plan: en(),
    performRawSeries: !0,
    reset: function (r, e) {
      function t(i, o) {
        return o.get(i > 0 ? If : Lf);
      }
      function a(i, o) {
        return o.get(i === 0 ? wf : i > 0 ? bf : xf);
      }
      if (!e.isSeriesFiltered(r)) {
        var n = r.pipelineContext.large;
        return (
          !n && {
            progress: function (i, o) {
              for (var s; (s = i.next()) != null; ) {
                var l = o.getItemModel(s),
                  u = o.getItemLayout(s).sign,
                  v = l.getItemStyle();
                (v.fill = t(u, l)), (v.stroke = a(u, l) || v.fill);
                var c = o.ensureUniqueItemVisual(s, 'style');
                U(c, v);
              }
            },
          }
        );
      }
    },
  };
const Tf = Df;
var Af = {
  seriesType: 'candlestick',
  plan: en(),
  reset: function (r) {
    var e = r.coordinateSystem,
      t = r.getData(),
      a = Cf(r, t),
      n = 0,
      i = 1,
      o = ['x', 'y'],
      s = t.getDimensionIndex(t.mapDimension(o[n])),
      l = $(t.mapDimensionsAll(o[i]), t.getDimensionIndex, t),
      u = l[0],
      v = l[1],
      c = l[2],
      h = l[3];
    if ((t.setLayout({ candleWidth: a, isSimpleBox: a <= 1.3 }), s < 0 || l.length < 4)) return;
    return { progress: r.pipelineContext.large ? d : f };
    function f(p, g) {
      for (var m, S = g.getStore(); (m = p.next()) != null; ) {
        var y = S.get(s, m),
          b = S.get(u, m),
          _ = S.get(v, m),
          x = S.get(c, m),
          w = S.get(h, m),
          I = Math.min(b, _),
          L = Math.max(b, _),
          D = N(I, y),
          T = N(L, y),
          M = N(x, y),
          P = N(w, y),
          A = [];
        V(A, T, 0), V(A, D, 1), A.push(O(P), O(T), O(M), O(D));
        var C = g.getItemModel(m),
          E = !!C.get(['itemStyle', 'borderColorDoji']);
        g.setItemLayout(m, {
          sign: xi(S, m, b, _, v, E),
          initBaseline: b > _ ? T[i] : D[i],
          ends: A,
          brushRect: G(x, w, y),
        });
      }
      function N(B, K) {
        var X = [];
        return (X[n] = K), (X[i] = B), isNaN(K) || isNaN(B) ? [NaN, NaN] : e.dataToPoint(X);
      }
      function V(B, K, X) {
        var W = K.slice(),
          j = K.slice();
        (W[n] = Ar(W[n] + a / 2, 1, !1)),
          (j[n] = Ar(j[n] - a / 2, 1, !0)),
          X ? B.push(W, j) : B.push(j, W);
      }
      function G(B, K, X) {
        var W = N(B, X),
          j = N(K, X);
        return (
          (W[n] -= a / 2), (j[n] -= a / 2), { x: W[0], y: W[1], width: a, height: j[1] - W[1] }
        );
      }
      function O(B) {
        return (B[n] = Ar(B[n], 1)), B;
      }
    }
    function d(p, g) {
      for (
        var m = fl(p.count * 4),
          S = 0,
          y,
          b = [],
          _ = [],
          x,
          w = g.getStore(),
          I = !!r.get(['itemStyle', 'borderColorDoji']);
        (x = p.next()) != null;

      ) {
        var L = w.get(s, x),
          D = w.get(u, x),
          T = w.get(v, x),
          M = w.get(c, x),
          P = w.get(h, x);
        if (isNaN(L) || isNaN(M) || isNaN(P)) {
          (m[S++] = NaN), (S += 3);
          continue;
        }
        (m[S++] = xi(w, x, D, T, v, I)),
          (b[n] = L),
          (b[i] = M),
          (y = e.dataToPoint(b, null, _)),
          (m[S++] = y ? y[0] : NaN),
          (m[S++] = y ? y[1] : NaN),
          (b[i] = P),
          (y = e.dataToPoint(b, null, _)),
          (m[S++] = y ? y[1] : NaN);
      }
      g.setLayout('largePoints', m);
    }
  },
};
function xi(r, e, t, a, n, i) {
  var o;
  return (
    t > a ? (o = -1) : t < a ? (o = 1) : (o = i ? 0 : e > 0 ? (r.get(n, e - 1) <= a ? 1 : -1) : 1),
    o
  );
}
function Cf(r, e) {
  var t = r.getBaseAxis(),
    a,
    n =
      t.type === 'category'
        ? t.getBandWidth()
        : ((a = t.getExtent()), Math.abs(a[1] - a[0]) / e.count()),
    i = z($t(r.get('barMaxWidth'), n), n),
    o = z($t(r.get('barMinWidth'), 1), n),
    s = r.get('barWidth');
  return s != null ? z(s, n) : Math.max(Math.min(n / 2, i), o);
}
const Mf = Af;
function Pf(r) {
  r.registerChartView(mf),
    r.registerSeriesModel(Sf),
    r.registerPreprocessor(_f),
    r.registerVisual(Tf),
    r.registerLayout(Mf);
}
function wi(r, e) {
  var t = e.rippleEffectColor || e.color;
  r.eachChild(function (a) {
    a.attr({
      z: e.z,
      zlevel: e.zlevel,
      style: {
        stroke: e.brushType === 'stroke' ? t : null,
        fill: e.brushType === 'fill' ? t : null,
      },
    });
  });
}
var Ef = (function (r) {
  k(e, r);
  function e(t, a) {
    var n = r.call(this) || this,
      i = new bo(t, a),
      o = new rt();
    return n.add(i), n.add(o), n.updateData(t, a), n;
  }
  return (
    (e.prototype.stopEffectAnimation = function () {
      this.childAt(1).removeAll();
    }),
    (e.prototype.startEffectAnimation = function (t) {
      for (
        var a = t.symbolType, n = t.color, i = t.rippleNumber, o = this.childAt(1), s = 0;
        s < i;
        s++
      ) {
        var l = Pe(a, -1, -1, 2, 2, n);
        l.attr({ style: { strokeNoScale: !0 }, z2: 99, silent: !0, scaleX: 0.5, scaleY: 0.5 });
        var u = (-s / i) * t.period + t.effectOffset;
        l
          .animate('', !0)
          .when(t.period, { scaleX: t.rippleScale / 2, scaleY: t.rippleScale / 2 })
          .delay(u)
          .start(),
          l.animateStyle(!0).when(t.period, { opacity: 0 }).delay(u).start(),
          o.add(l);
      }
      wi(o, t);
    }),
    (e.prototype.updateEffectAnimation = function (t) {
      for (
        var a = this._effectCfg,
          n = this.childAt(1),
          i = ['symbolType', 'period', 'rippleScale', 'rippleNumber'],
          o = 0;
        o < i.length;
        o++
      ) {
        var s = i[o];
        if (a[s] !== t[s]) {
          this.stopEffectAnimation(), this.startEffectAnimation(t);
          return;
        }
      }
      wi(n, t);
    }),
    (e.prototype.highlight = function () {
      Fa(this);
    }),
    (e.prototype.downplay = function () {
      $a(this);
    }),
    (e.prototype.getSymbolType = function () {
      var t = this.childAt(0);
      return t && t.getSymbolType();
    }),
    (e.prototype.updateData = function (t, a) {
      var n = this,
        i = t.hostModel;
      this.childAt(0).updateData(t, a);
      var o = this.childAt(1),
        s = t.getItemModel(a),
        l = t.getItemVisual(a, 'symbol'),
        u = Wa(t.getItemVisual(a, 'symbolSize')),
        v = t.getItemVisual(a, 'style'),
        c = v && v.fill,
        h = s.getModel('emphasis');
      o.setScale(u),
        o.traverse(function (g) {
          g.setStyle('fill', c);
        });
      var f = Ua(t.getItemVisual(a, 'symbolOffset'), u);
      f && ((o.x = f[0]), (o.y = f[1]));
      var d = t.getItemVisual(a, 'symbolRotate');
      o.rotation = ((d || 0) * Math.PI) / 180 || 0;
      var p = {};
      (p.showEffectOn = i.get('showEffectOn')),
        (p.rippleScale = s.get(['rippleEffect', 'scale'])),
        (p.brushType = s.get(['rippleEffect', 'brushType'])),
        (p.period = s.get(['rippleEffect', 'period']) * 1e3),
        (p.effectOffset = a / t.count()),
        (p.z = i.getShallow('z') || 0),
        (p.zlevel = i.getShallow('zlevel') || 0),
        (p.symbolType = l),
        (p.color = c),
        (p.rippleEffectColor = s.get(['rippleEffect', 'color'])),
        (p.rippleNumber = s.get(['rippleEffect', 'number'])),
        p.showEffectOn === 'render'
          ? (this._effectCfg ? this.updateEffectAnimation(p) : this.startEffectAnimation(p),
            (this._effectCfg = p))
          : ((this._effectCfg = null),
            this.stopEffectAnimation(),
            (this.onHoverStateChange = function (g) {
              g === 'emphasis'
                ? p.showEffectOn !== 'render' && n.startEffectAnimation(p)
                : g === 'normal' && p.showEffectOn !== 'render' && n.stopEffectAnimation();
            })),
        (this._effectCfg = p),
        lt(this, h.get('focus'), h.get('blurScope'), h.get('disabled'));
    }),
    (e.prototype.fadeOut = function (t) {
      t && t();
    }),
    e
  );
})(rt);
const Nf = Ef;
var Rf = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function () {
      this._symbolDraw = new Za(Nf);
    }),
    (e.prototype.render = function (t, a, n) {
      var i = t.getData(),
        o = this._symbolDraw;
      o.updateData(i, { clipShape: this._getClipShape(t) }), this.group.add(o.group);
    }),
    (e.prototype._getClipShape = function (t) {
      var a = t.coordinateSystem,
        n = a && a.getArea && a.getArea();
      return t.get('clip', !0) ? n : null;
    }),
    (e.prototype.updateTransform = function (t, a, n) {
      var i = t.getData();
      this.group.dirty();
      var o = Eo('').reset(t, a, n);
      o.progress && o.progress({ start: 0, end: i.count(), count: i.count() }, i),
        this._symbolDraw.updateLayout();
    }),
    (e.prototype._updateGroupTransform = function (t) {
      var a = t.coordinateSystem;
      a &&
        a.getRoamTransform &&
        ((this.group.transform = pl(a.getRoamTransform())), this.group.decomposeTransform());
    }),
    (e.prototype.remove = function (t, a) {
      this._symbolDraw && this._symbolDraw.remove(!0);
    }),
    (e.type = 'effectScatter'),
    e
  );
})(ct);
const Vf = Rf;
var kf = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), (t.hasSymbolVisual = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      return He(null, this, { useEncodeDefaulter: !0 });
    }),
    (e.prototype.brushSelector = function (t, a, n) {
      return n.point(a.getItemLayout(t));
    }),
    (e.type = 'series.effectScatter'),
    (e.dependencies = ['grid', 'polar']),
    (e.defaultOption = {
      coordinateSystem: 'cartesian2d',
      z: 2,
      legendHoverLink: !0,
      effectType: 'ripple',
      progressive: 0,
      showEffectOn: 'render',
      clip: !0,
      rippleEffect: { period: 4, scale: 2.5, brushType: 'fill', number: 3 },
      universalTransition: { divideShape: 'clone' },
      symbolSize: 10,
    }),
    e
  );
})(ht);
const Gf = kf;
function Bf(r) {
  r.registerChartView(Vf), r.registerSeriesModel(Gf), r.registerLayout(Eo('effectScatter'));
}
var zf = (function (r) {
  k(e, r);
  function e(t, a, n) {
    var i = r.call(this) || this;
    return i.add(i.createLine(t, a, n)), i._updateEffectSymbol(t, a), i;
  }
  return (
    (e.prototype.createLine = function (t, a, n) {
      return new pn(t, a, n);
    }),
    (e.prototype._updateEffectSymbol = function (t, a) {
      var n = t.getItemModel(a),
        i = n.getModel('effect'),
        o = i.get('symbolSize'),
        s = i.get('symbol');
      F(o) || (o = [o, o]);
      var l = t.getItemVisual(a, 'style'),
        u = i.get('color') || (l && l.stroke),
        v = this.childAt(1);
      this._symbolType !== s &&
        (this.remove(v),
        (v = Pe(s, -0.5, -0.5, 1, 1, u)),
        (v.z2 = 100),
        (v.culling = !0),
        this.add(v)),
        v &&
          (v.setStyle('shadowColor', u),
          v.setStyle(i.getItemStyle(['color'])),
          (v.scaleX = o[0]),
          (v.scaleY = o[1]),
          v.setColor(u),
          (this._symbolType = s),
          (this._symbolScale = o),
          this._updateEffectAnimation(t, i, a));
    }),
    (e.prototype._updateEffectAnimation = function (t, a, n) {
      var i = this.childAt(1);
      if (i) {
        var o = t.getItemLayout(n),
          s = a.get('period') * 1e3,
          l = a.get('loop'),
          u = a.get('roundTrip'),
          v = a.get('constantSpeed'),
          c = Nt(a.get('delay'), function (f) {
            return ((f / t.count()) * s) / 3;
          });
        if (
          ((i.ignore = !0),
          this._updateAnimationPoints(i, o),
          v > 0 && (s = (this._getLineLength(i) / v) * 1e3),
          s !== this._period || l !== this._loop || u !== this._roundTrip)
        ) {
          i.stopAnimation();
          var h = void 0;
          nt(c) ? (h = c(n)) : (h = c),
            i.__t > 0 && (h = -s * i.__t),
            this._animateSymbol(i, s, h, l, u);
        }
        (this._period = s), (this._loop = l), (this._roundTrip = u);
      }
    }),
    (e.prototype._animateSymbol = function (t, a, n, i, o) {
      if (a > 0) {
        t.__t = 0;
        var s = this,
          l = t
            .animate('', i)
            .when(o ? a * 2 : a, { __t: o ? 2 : 1 })
            .delay(n)
            .during(function () {
              s._updateSymbolPosition(t);
            });
        i ||
          l.done(function () {
            s.remove(t);
          }),
          l.start();
      }
    }),
    (e.prototype._getLineLength = function (t) {
      return we(t.__p1, t.__cp1) + we(t.__cp1, t.__p2);
    }),
    (e.prototype._updateAnimationPoints = function (t, a) {
      (t.__p1 = a[0]),
        (t.__p2 = a[1]),
        (t.__cp1 = a[2] || [(a[0][0] + a[1][0]) / 2, (a[0][1] + a[1][1]) / 2]);
    }),
    (e.prototype.updateData = function (t, a, n) {
      this.childAt(0).updateData(t, a, n), this._updateEffectSymbol(t, a);
    }),
    (e.prototype._updateSymbolPosition = function (t) {
      var a = t.__p1,
        n = t.__p2,
        i = t.__cp1,
        o = t.__t < 1 ? t.__t : 2 - t.__t,
        s = [t.x, t.y],
        l = s.slice(),
        u = Ao,
        v = dl;
      (s[0] = u(a[0], i[0], n[0], o)), (s[1] = u(a[1], i[1], n[1], o));
      var c = t.__t < 1 ? v(a[0], i[0], n[0], o) : v(n[0], i[0], a[0], 1 - o),
        h = t.__t < 1 ? v(a[1], i[1], n[1], o) : v(n[1], i[1], a[1], 1 - o);
      (t.rotation = -Math.atan2(h, c) - Math.PI / 2),
        (this._symbolType === 'line' ||
          this._symbolType === 'rect' ||
          this._symbolType === 'roundRect') &&
          (t.__lastT !== void 0 && t.__lastT < t.__t
            ? ((t.scaleY = we(l, s) * 1.05),
              o === 1 && ((s[0] = l[0] + (s[0] - l[0]) / 2), (s[1] = l[1] + (s[1] - l[1]) / 2)))
            : t.__lastT === 1
              ? (t.scaleY = 2 * we(a, s))
              : (t.scaleY = this._symbolScale[1])),
        (t.__lastT = t.__t),
        (t.ignore = !1),
        (t.x = s[0]),
        (t.y = s[1]);
    }),
    (e.prototype.updateLayout = function (t, a) {
      this.childAt(0).updateLayout(t, a);
      var n = t.getItemModel(a).getModel('effect');
      this._updateEffectAnimation(t, n, a);
    }),
    e
  );
})(rt);
const ps = zf;
var Of = (function (r) {
  k(e, r);
  function e(t, a, n) {
    var i = r.call(this) || this;
    return i._createPolyline(t, a, n), i;
  }
  return (
    (e.prototype._createPolyline = function (t, a, n) {
      var i = t.getItemLayout(a),
        o = new ja({ shape: { points: i } });
      this.add(o), this._updateCommonStl(t, a, n);
    }),
    (e.prototype.updateData = function (t, a, n) {
      var i = t.hostModel,
        o = this.childAt(0),
        s = { shape: { points: t.getItemLayout(a) } };
      ot(o, s, i, a), this._updateCommonStl(t, a, n);
    }),
    (e.prototype._updateCommonStl = function (t, a, n) {
      var i = this.childAt(0),
        o = t.getItemModel(a),
        s = n && n.emphasisLineStyle,
        l = n && n.focus,
        u = n && n.blurScope,
        v = n && n.emphasisDisabled;
      if (!n || t.hasItemOption) {
        var c = o.getModel('emphasis');
        (s = c.getModel('lineStyle').getLineStyle()),
          (v = c.get('disabled')),
          (l = c.get('focus')),
          (u = c.get('blurScope'));
      }
      i.useStyle(t.getItemVisual(a, 'style')), (i.style.fill = null), (i.style.strokeNoScale = !0);
      var h = i.ensureState('emphasis');
      (h.style = s), lt(this, l, u, v);
    }),
    (e.prototype.updateLayout = function (t, a) {
      var n = this.childAt(0);
      n.setShape('points', t.getItemLayout(a));
    }),
    e
  );
})(rt);
const ds = Of;
var Hf = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t._lastFrame = 0), (t._lastFramePercent = 0), t;
  }
  return (
    (e.prototype.createLine = function (t, a, n) {
      return new ds(t, a, n);
    }),
    (e.prototype._updateAnimationPoints = function (t, a) {
      this._points = a;
      for (var n = [0], i = 0, o = 1; o < a.length; o++) {
        var s = a[o - 1],
          l = a[o];
        (i += we(s, l)), n.push(i);
      }
      if (i === 0) {
        this._length = 0;
        return;
      }
      for (var o = 0; o < n.length; o++) n[o] /= i;
      (this._offsets = n), (this._length = i);
    }),
    (e.prototype._getLineLength = function () {
      return this._length;
    }),
    (e.prototype._updateSymbolPosition = function (t) {
      var a = t.__t < 1 ? t.__t : 2 - t.__t,
        n = this._points,
        i = this._offsets,
        o = n.length;
      if (i) {
        var s = this._lastFrame,
          l;
        if (a < this._lastFramePercent) {
          var u = Math.min(s + 1, o - 1);
          for (l = u; l >= 0 && !(i[l] <= a); l--);
          l = Math.min(l, o - 2);
        } else {
          for (l = s; l < o && !(i[l] > a); l++);
          l = Math.min(l - 1, o - 2);
        }
        var v = (a - i[l]) / (i[l + 1] - i[l]),
          c = n[l],
          h = n[l + 1];
        (t.x = c[0] * (1 - v) + v * h[0]), (t.y = c[1] * (1 - v) + v * h[1]);
        var f = t.__t < 1 ? h[0] - c[0] : c[0] - h[0],
          d = t.__t < 1 ? h[1] - c[1] : c[1] - h[1];
        (t.rotation = -Math.atan2(d, f) - Math.PI / 2),
          (this._lastFrame = l),
          (this._lastFramePercent = a),
          (t.ignore = !1);
      }
    }),
    e
  );
})(ps);
const Ff = Hf;
var $f = (function () {
    function r() {
      (this.polyline = !1), (this.curveness = 0), (this.segs = []);
    }
    return r;
  })(),
  Wf = (function (r) {
    k(e, r);
    function e(t) {
      var a = r.call(this, t) || this;
      return (a._off = 0), (a.hoverDataIdx = -1), a;
    }
    return (
      (e.prototype.reset = function () {
        (this.notClear = !1), (this._off = 0);
      }),
      (e.prototype.getDefaultStyle = function () {
        return { stroke: '#000', fill: null };
      }),
      (e.prototype.getDefaultShape = function () {
        return new $f();
      }),
      (e.prototype.buildPath = function (t, a) {
        var n = a.segs,
          i = a.curveness,
          o;
        if (a.polyline)
          for (o = this._off; o < n.length; ) {
            var s = n[o++];
            if (s > 0) {
              t.moveTo(n[o++], n[o++]);
              for (var l = 1; l < s; l++) t.lineTo(n[o++], n[o++]);
            }
          }
        else
          for (o = this._off; o < n.length; ) {
            var u = n[o++],
              v = n[o++],
              c = n[o++],
              h = n[o++];
            if ((t.moveTo(u, v), i > 0)) {
              var f = (u + c) / 2 - (v - h) * i,
                d = (v + h) / 2 - (c - u) * i;
              t.quadraticCurveTo(f, d, c, h);
            } else t.lineTo(c, h);
          }
        this.incremental && ((this._off = o), (this.notClear = !0));
      }),
      (e.prototype.findDataIndex = function (t, a) {
        var n = this.shape,
          i = n.segs,
          o = n.curveness,
          s = this.style.lineWidth;
        if (n.polyline)
          for (var l = 0, u = 0; u < i.length; ) {
            var v = i[u++];
            if (v > 0)
              for (var c = i[u++], h = i[u++], f = 1; f < v; f++) {
                var d = i[u++],
                  p = i[u++];
                if (Bn(c, h, d, p, s, t, a)) return l;
              }
            l++;
          }
        else
          for (var l = 0, u = 0; u < i.length; ) {
            var c = i[u++],
              h = i[u++],
              d = i[u++],
              p = i[u++];
            if (o > 0) {
              var g = (c + d) / 2 - (h - p) * o,
                m = (h + p) / 2 - (d - c) * o;
              if (gl(c, h, g, m, d, p, s, t, a)) return l;
            } else if (Bn(c, h, d, p, s, t, a)) return l;
            l++;
          }
        return -1;
      }),
      (e.prototype.contain = function (t, a) {
        var n = this.transformCoordToLocal(t, a),
          i = this.getBoundingRect();
        if (((t = n[0]), (a = n[1]), i.contain(t, a))) {
          var o = (this.hoverDataIdx = this.findDataIndex(t, a));
          return o >= 0;
        }
        return (this.hoverDataIdx = -1), !1;
      }),
      (e.prototype.getBoundingRect = function () {
        var t = this._rect;
        if (!t) {
          for (
            var a = this.shape, n = a.segs, i = 1 / 0, o = 1 / 0, s = -1 / 0, l = -1 / 0, u = 0;
            u < n.length;

          ) {
            var v = n[u++],
              c = n[u++];
            (i = Math.min(v, i)), (s = Math.max(v, s)), (o = Math.min(c, o)), (l = Math.max(c, l));
          }
          t = this._rect = new dt(i, o, s, l);
        }
        return t;
      }),
      e
    );
  })(yt),
  Uf = (function () {
    function r() {
      this.group = new rt();
    }
    return (
      (r.prototype.updateData = function (e) {
        this._clear();
        var t = this._create();
        t.setShape({ segs: e.getLayout('linesPoints') }), this._setCommon(t, e);
      }),
      (r.prototype.incrementalPrepareUpdate = function (e) {
        this.group.removeAll(), this._clear();
      }),
      (r.prototype.incrementalUpdate = function (e, t) {
        var a = this._newAdded[0],
          n = t.getLayout('linesPoints'),
          i = a && a.shape.segs;
        if (i && i.length < 2e4) {
          var o = i.length,
            s = new Float32Array(o + n.length);
          s.set(i), s.set(n, o), a.setShape({ segs: s });
        } else {
          this._newAdded = [];
          var l = this._create();
          (l.incremental = !0),
            l.setShape({ segs: n }),
            this._setCommon(l, t),
            (l.__startIndex = e.start);
        }
      }),
      (r.prototype.remove = function () {
        this._clear();
      }),
      (r.prototype.eachRendered = function (e) {
        this._newAdded[0] && e(this._newAdded[0]);
      }),
      (r.prototype._create = function () {
        var e = new Wf({ cursor: 'default', ignoreCoarsePointer: !0 });
        return this._newAdded.push(e), this.group.add(e), e;
      }),
      (r.prototype._setCommon = function (e, t, a) {
        var n = t.hostModel;
        e.setShape({ polyline: n.get('polyline'), curveness: n.get(['lineStyle', 'curveness']) }),
          e.useStyle(n.getModel('lineStyle').getLineStyle()),
          (e.style.strokeNoScale = !0);
        var i = t.getVisual('style');
        i && i.stroke && e.setStyle('stroke', i.stroke), e.setStyle('fill', null);
        var o = it(e);
        (o.seriesIndex = n.seriesIndex),
          e.on('mousemove', function (s) {
            o.dataIndex = null;
            var l = e.hoverDataIdx;
            l > 0 && (o.dataIndex = l + e.__startIndex);
          });
      }),
      (r.prototype._clear = function () {
        (this._newAdded = []), this.group.removeAll();
      }),
      r
    );
  })(),
  Zf = {
    seriesType: 'lines',
    plan: en(),
    reset: function (r) {
      var e = r.coordinateSystem;
      if (e) {
        var t = r.get('polyline'),
          a = r.pipelineContext.large;
        return {
          progress: function (n, i) {
            var o = [];
            if (a) {
              var s = void 0,
                l = n.end - n.start;
              if (t) {
                for (var u = 0, v = n.start; v < n.end; v++) u += r.getLineCoordsCount(v);
                s = new Float32Array(l + u * 2);
              } else s = new Float32Array(l * 4);
              for (var c = 0, h = [], v = n.start; v < n.end; v++) {
                var f = r.getLineCoords(v, o);
                t && (s[c++] = f);
                for (var d = 0; d < f; d++)
                  (h = e.dataToPoint(o[d], !1, h)), (s[c++] = h[0]), (s[c++] = h[1]);
              }
              i.setLayout('linesPoints', s);
            } else
              for (var v = n.start; v < n.end; v++) {
                var p = i.getItemModel(v),
                  f = r.getLineCoords(v, o),
                  g = [];
                if (t) for (var m = 0; m < f; m++) g.push(e.dataToPoint(o[m]));
                else {
                  (g[0] = e.dataToPoint(o[0])), (g[1] = e.dataToPoint(o[1]));
                  var S = p.get(['lineStyle', 'curveness']);
                  +S &&
                    (g[2] = [
                      (g[0][0] + g[1][0]) / 2 - (g[0][1] - g[1][1]) * S,
                      (g[0][1] + g[1][1]) / 2 - (g[1][0] - g[0][0]) * S,
                    ]);
                }
                i.setItemLayout(v, g);
              }
          },
        };
      }
    },
  };
const gs = Zf;
var Yf = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, a, n) {
      var i = t.getData(),
        o = this._updateLineDraw(i, t),
        s = t.get('zlevel'),
        l = t.get(['effect', 'trailLength']),
        u = n.getZr(),
        v = u.painter.getType() === 'svg';
      v || u.painter.getLayer(s).clear(!0),
        this._lastZlevel != null && !v && u.configLayer(this._lastZlevel, { motionBlur: !1 }),
        this._showEffect(t) &&
          l > 0 &&
          (v ||
            u.configLayer(s, {
              motionBlur: !0,
              lastFrameAlpha: Math.max(Math.min(l / 10 + 0.9, 1), 0),
            })),
        o.updateData(i);
      var c = t.get('clip', !0) && Ja(t.coordinateSystem, !1, t);
      c ? this.group.setClipPath(c) : this.group.removeClipPath(),
        (this._lastZlevel = s),
        (this._finished = !0);
    }),
    (e.prototype.incrementalPrepareRender = function (t, a, n) {
      var i = t.getData(),
        o = this._updateLineDraw(i, t);
      o.incrementalPrepareUpdate(i), this._clearLayer(n), (this._finished = !1);
    }),
    (e.prototype.incrementalRender = function (t, a, n) {
      this._lineDraw.incrementalUpdate(t, a.getData()),
        (this._finished = t.end === a.getData().count());
    }),
    (e.prototype.eachRendered = function (t) {
      this._lineDraw && this._lineDraw.eachRendered(t);
    }),
    (e.prototype.updateTransform = function (t, a, n) {
      var i = t.getData(),
        o = t.pipelineContext;
      if (!this._finished || o.large || o.progressiveRender) return { update: !0 };
      var s = gs.reset(t, a, n);
      s.progress && s.progress({ start: 0, end: i.count(), count: i.count() }, i),
        this._lineDraw.updateLayout(),
        this._clearLayer(n);
    }),
    (e.prototype._updateLineDraw = function (t, a) {
      var n = this._lineDraw,
        i = this._showEffect(a),
        o = !!a.get('polyline'),
        s = a.pipelineContext,
        l = s.large;
      return (
        (!n || i !== this._hasEffet || o !== this._isPolyline || l !== this._isLargeDraw) &&
          (n && n.remove(),
          (n = this._lineDraw = l ? new Uf() : new dn(o ? (i ? Ff : ds) : i ? ps : pn)),
          (this._hasEffet = i),
          (this._isPolyline = o),
          (this._isLargeDraw = l)),
        this.group.add(n.group),
        n
      );
    }),
    (e.prototype._showEffect = function (t) {
      return !!t.get(['effect', 'show']);
    }),
    (e.prototype._clearLayer = function (t) {
      var a = t.getZr(),
        n = a.painter.getType() === 'svg';
      !n && this._lastZlevel != null && a.painter.getLayer(this._lastZlevel).clear(!0);
    }),
    (e.prototype.remove = function (t, a) {
      this._lineDraw && this._lineDraw.remove(), (this._lineDraw = null), this._clearLayer(a);
    }),
    (e.prototype.dispose = function (t, a) {
      this.remove(t, a);
    }),
    (e.type = 'lines'),
    e
  );
})(ct);
const Xf = Yf;
var qf = typeof Uint32Array == 'undefined' ? Array : Uint32Array,
  Kf = typeof Float64Array == 'undefined' ? Array : Float64Array;
function Ii(r) {
  var e = r.data;
  e &&
    e[0] &&
    e[0][0] &&
    e[0][0].coord &&
    (r.data = $(e, function (t) {
      var a = [t[0].coord, t[1].coord],
        n = { coords: a };
      return (
        t[0].name && (n.fromName = t[0].name),
        t[1].name && (n.toName = t[1].name),
        No([n, t[0], t[1]])
      );
    }));
}
var jf = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (
      (t.type = e.type), (t.visualStyleAccessPath = 'lineStyle'), (t.visualDrawType = 'stroke'), t
    );
  }
  return (
    (e.prototype.init = function (t) {
      (t.data = t.data || []), Ii(t);
      var a = this._processFlatCoordsArray(t.data);
      (this._flatCoords = a.flatCoords),
        (this._flatCoordsOffset = a.flatCoordsOffset),
        a.flatCoords && (t.data = new Float32Array(a.count)),
        r.prototype.init.apply(this, arguments);
    }),
    (e.prototype.mergeOption = function (t) {
      if ((Ii(t), t.data)) {
        var a = this._processFlatCoordsArray(t.data);
        (this._flatCoords = a.flatCoords),
          (this._flatCoordsOffset = a.flatCoordsOffset),
          a.flatCoords && (t.data = new Float32Array(a.count));
      }
      r.prototype.mergeOption.apply(this, arguments);
    }),
    (e.prototype.appendData = function (t) {
      var a = this._processFlatCoordsArray(t.data);
      a.flatCoords &&
        (this._flatCoords
          ? ((this._flatCoords = fa(this._flatCoords, a.flatCoords)),
            (this._flatCoordsOffset = fa(this._flatCoordsOffset, a.flatCoordsOffset)))
          : ((this._flatCoords = a.flatCoords), (this._flatCoordsOffset = a.flatCoordsOffset)),
        (t.data = new Float32Array(a.count))),
        this.getRawData().appendData(t.data);
    }),
    (e.prototype._getCoordsFromItemModel = function (t) {
      var a = this.getData().getItemModel(t),
        n = a.option instanceof Array ? a.option : a.getShallow('coords');
      return n;
    }),
    (e.prototype.getLineCoordsCount = function (t) {
      return this._flatCoordsOffset
        ? this._flatCoordsOffset[t * 2 + 1]
        : this._getCoordsFromItemModel(t).length;
    }),
    (e.prototype.getLineCoords = function (t, a) {
      if (this._flatCoordsOffset) {
        for (
          var n = this._flatCoordsOffset[t * 2], i = this._flatCoordsOffset[t * 2 + 1], o = 0;
          o < i;
          o++
        )
          (a[o] = a[o] || []),
            (a[o][0] = this._flatCoords[n + o * 2]),
            (a[o][1] = this._flatCoords[n + o * 2 + 1]);
        return i;
      } else {
        for (var s = this._getCoordsFromItemModel(t), o = 0; o < s.length; o++)
          (a[o] = a[o] || []), (a[o][0] = s[o][0]), (a[o][1] = s[o][1]);
        return s.length;
      }
    }),
    (e.prototype._processFlatCoordsArray = function (t) {
      var a = 0;
      if ((this._flatCoords && (a = this._flatCoords.length), Ht(t[0]))) {
        for (var n = t.length, i = new qf(n), o = new Kf(n), s = 0, l = 0, u = 0, v = 0; v < n; ) {
          u++;
          var c = t[v++];
          (i[l++] = s + a), (i[l++] = c);
          for (var h = 0; h < c; h++) {
            var f = t[v++],
              d = t[v++];
            (o[s++] = f), (o[s++] = d);
          }
        }
        return { flatCoordsOffset: new Uint32Array(i.buffer, 0, l), flatCoords: o, count: u };
      }
      return { flatCoordsOffset: null, flatCoords: null, count: t.length };
    }),
    (e.prototype.getInitialData = function (t, a) {
      var n = new bt(['value'], this);
      return (
        (n.hasItemOption = !1),
        n.initData(t.data, [], function (i, o, s, l) {
          if (i instanceof Array) return NaN;
          n.hasItemOption = !0;
          var u = i.value;
          if (u != null) return u instanceof Array ? u[l] : u;
        }),
        n
      );
    }),
    (e.prototype.formatTooltip = function (t, a, n) {
      var i = this.getData(),
        o = i.getItemModel(t),
        s = o.get('name');
      if (s) return s;
      var l = o.get('fromName'),
        u = o.get('toName'),
        v = [];
      return (
        l != null && v.push(l), u != null && v.push(u), Ot('nameValue', { name: v.join(' > ') })
      );
    }),
    (e.prototype.preventIncremental = function () {
      return !!this.get(['effect', 'show']);
    }),
    (e.prototype.getProgressive = function () {
      var t = this.option.progressive;
      return t == null ? (this.option.large ? 1e4 : this.get('progressive')) : t;
    }),
    (e.prototype.getProgressiveThreshold = function () {
      var t = this.option.progressiveThreshold;
      return t == null ? (this.option.large ? 2e4 : this.get('progressiveThreshold')) : t;
    }),
    (e.prototype.getZLevelKey = function () {
      var t = this.getModel('effect'),
        a = t.get('trailLength');
      return this.getData().count() > this.getProgressiveThreshold()
        ? this.id
        : t.get('show') && a > 0
          ? a + ''
          : '';
    }),
    (e.type = 'series.lines'),
    (e.dependencies = ['grid', 'polar', 'geo', 'calendar']),
    (e.defaultOption = {
      coordinateSystem: 'geo',
      z: 2,
      legendHoverLink: !0,
      xAxisIndex: 0,
      yAxisIndex: 0,
      symbol: ['none', 'none'],
      symbolSize: [10, 10],
      geoIndex: 0,
      effect: {
        show: !1,
        period: 4,
        constantSpeed: 0,
        symbol: 'circle',
        symbolSize: 3,
        loop: !0,
        trailLength: 0.2,
      },
      large: !1,
      largeThreshold: 2e3,
      polyline: !1,
      clip: !0,
      label: { show: !1, position: 'end' },
      lineStyle: { opacity: 0.5 },
    }),
    e
  );
})(ht);
const Qf = jf;
function Ke(r) {
  return r instanceof Array || (r = [r, r]), r;
}
var Jf = {
  seriesType: 'lines',
  reset: function (r) {
    var e = Ke(r.get('symbol')),
      t = Ke(r.get('symbolSize')),
      a = r.getData();
    a.setVisual('fromSymbol', e && e[0]),
      a.setVisual('toSymbol', e && e[1]),
      a.setVisual('fromSymbolSize', t && t[0]),
      a.setVisual('toSymbolSize', t && t[1]);
    function n(i, o) {
      var s = i.getItemModel(o),
        l = Ke(s.getShallow('symbol', !0)),
        u = Ke(s.getShallow('symbolSize', !0));
      l[0] && i.setItemVisual(o, 'fromSymbol', l[0]),
        l[1] && i.setItemVisual(o, 'toSymbol', l[1]),
        u[0] && i.setItemVisual(o, 'fromSymbolSize', u[0]),
        u[1] && i.setItemVisual(o, 'toSymbolSize', u[1]);
    }
    return { dataEach: a.hasItemOption ? n : null };
  },
};
const tp = Jf;
function ep(r) {
  r.registerChartView(Xf), r.registerSeriesModel(Qf), r.registerLayout(gs), r.registerVisual(tp);
}
var rp = 256,
  ap = (function () {
    function r() {
      (this.blurSize = 30),
        (this.pointSize = 20),
        (this.maxOpacity = 1),
        (this.minOpacity = 0),
        (this._gradientPixels = { inRange: null, outOfRange: null });
      var e = ba.createCanvas();
      this.canvas = e;
    }
    return (
      (r.prototype.update = function (e, t, a, n, i, o) {
        var s = this._getBrush(),
          l = this._getGradient(i, 'inRange'),
          u = this._getGradient(i, 'outOfRange'),
          v = this.pointSize + this.blurSize,
          c = this.canvas,
          h = c.getContext('2d'),
          f = e.length;
        (c.width = t), (c.height = a);
        for (var d = 0; d < f; ++d) {
          var p = e[d],
            g = p[0],
            m = p[1],
            S = p[2],
            y = n(S);
          (h.globalAlpha = y), h.drawImage(s, g - v, m - v);
        }
        if (!c.width || !c.height) return c;
        for (
          var b = h.getImageData(0, 0, c.width, c.height),
            _ = b.data,
            x = 0,
            w = _.length,
            I = this.minOpacity,
            L = this.maxOpacity,
            D = L - I;
          x < w;

        ) {
          var y = _[x + 3] / 256,
            T = Math.floor(y * (rp - 1)) * 4;
          if (y > 0) {
            var M = o(y) ? l : u;
            y > 0 && (y = y * D + I),
              (_[x++] = M[T]),
              (_[x++] = M[T + 1]),
              (_[x++] = M[T + 2]),
              (_[x++] = M[T + 3] * y * 256);
          } else x += 4;
        }
        return h.putImageData(b, 0, 0), c;
      }),
      (r.prototype._getBrush = function () {
        var e = this._brushCanvas || (this._brushCanvas = ba.createCanvas()),
          t = this.pointSize + this.blurSize,
          a = t * 2;
        (e.width = a), (e.height = a);
        var n = e.getContext('2d');
        return (
          n.clearRect(0, 0, a, a),
          (n.shadowOffsetX = a),
          (n.shadowBlur = this.blurSize),
          (n.shadowColor = '#000'),
          n.beginPath(),
          n.arc(-t, t, this.pointSize, 0, Math.PI * 2, !0),
          n.closePath(),
          n.fill(),
          e
        );
      }),
      (r.prototype._getGradient = function (e, t) {
        for (
          var a = this._gradientPixels,
            n = a[t] || (a[t] = new Uint8ClampedArray(256 * 4)),
            i = [0, 0, 0, 0],
            o = 0,
            s = 0;
          s < 256;
          s++
        )
          e[t](s / 255, !0, i), (n[o++] = i[0]), (n[o++] = i[1]), (n[o++] = i[2]), (n[o++] = i[3]);
        return n;
      }),
      r
    );
  })();
const np = ap;
function ip(r, e, t) {
  var a = r[1] - r[0];
  e = $(e, function (o) {
    return { interval: [(o.interval[0] - r[0]) / a, (o.interval[1] - r[0]) / a] };
  });
  var n = e.length,
    i = 0;
  return function (o) {
    var s;
    for (s = i; s < n; s++) {
      var l = e[s].interval;
      if (l[0] <= o && o <= l[1]) {
        i = s;
        break;
      }
    }
    if (s === n)
      for (s = i - 1; s >= 0; s--) {
        var l = e[s].interval;
        if (l[0] <= o && o <= l[1]) {
          i = s;
          break;
        }
      }
    return s >= 0 && s < n && t[s];
  };
}
function op(r, e) {
  var t = r[1] - r[0];
  return (
    (e = [(e[0] - r[0]) / t, (e[1] - r[0]) / t]),
    function (a) {
      return a >= e[0] && a <= e[1];
    }
  );
}
function Li(r) {
  var e = r.dimensions;
  return e[0] === 'lng' && e[1] === 'lat';
}
var sp = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, a, n) {
      var i;
      a.eachComponent('visualMap', function (s) {
        s.eachTargetSeries(function (l) {
          l === t && (i = s);
        });
      }),
        (this._progressiveEls = null),
        this.group.removeAll();
      var o = t.coordinateSystem;
      o.type === 'cartesian2d' || o.type === 'calendar'
        ? this._renderOnCartesianAndCalendar(t, n, 0, t.getData().count())
        : Li(o) && this._renderOnGeo(o, t, i, n);
    }),
    (e.prototype.incrementalPrepareRender = function (t, a, n) {
      this.group.removeAll();
    }),
    (e.prototype.incrementalRender = function (t, a, n, i) {
      var o = a.coordinateSystem;
      o &&
        (Li(o)
          ? this.render(a, n, i)
          : ((this._progressiveEls = []),
            this._renderOnCartesianAndCalendar(a, i, t.start, t.end, !0)));
    }),
    (e.prototype.eachRendered = function (t) {
      br(this._progressiveEls || this.group, t);
    }),
    (e.prototype._renderOnCartesianAndCalendar = function (t, a, n, i, o) {
      var s = t.coordinateSystem,
        l = xr(s, 'cartesian2d'),
        u,
        v,
        c,
        h;
      if (l) {
        var f = s.getAxis('x'),
          d = s.getAxis('y');
        (u = f.getBandWidth() + 0.5),
          (v = d.getBandWidth() + 0.5),
          (c = f.scale.getExtent()),
          (h = d.scale.getExtent());
      }
      for (
        var p = this.group,
          g = t.getData(),
          m = t.getModel(['emphasis', 'itemStyle']).getItemStyle(),
          S = t.getModel(['blur', 'itemStyle']).getItemStyle(),
          y = t.getModel(['select', 'itemStyle']).getItemStyle(),
          b = t.get(['itemStyle', 'borderRadius']),
          _ = Rt(t),
          x = t.getModel('emphasis'),
          w = x.get('focus'),
          I = x.get('blurScope'),
          L = x.get('disabled'),
          D = l
            ? [g.mapDimension('x'), g.mapDimension('y'), g.mapDimension('value')]
            : [g.mapDimension('time'), g.mapDimension('value')],
          T = n;
        T < i;
        T++
      ) {
        var M = void 0,
          P = g.getItemVisual(T, 'style');
        if (l) {
          var A = g.get(D[0], T),
            C = g.get(D[1], T);
          if (
            isNaN(g.get(D[2], T)) ||
            isNaN(A) ||
            isNaN(C) ||
            A < c[0] ||
            A > c[1] ||
            C < h[0] ||
            C > h[1]
          )
            continue;
          var E = s.dataToPoint([A, C]);
          M = new jt({
            shape: { x: E[0] - u / 2, y: E[1] - v / 2, width: u, height: v },
            style: P,
          });
        } else {
          if (isNaN(g.get(D[1], T))) continue;
          M = new jt({ z2: 1, shape: s.dataToRect([g.get(D[0], T)]).contentShape, style: P });
        }
        if (g.hasItemOption) {
          var N = g.getItemModel(T),
            V = N.getModel('emphasis');
          (m = V.getModel('itemStyle').getItemStyle()),
            (S = N.getModel(['blur', 'itemStyle']).getItemStyle()),
            (y = N.getModel(['select', 'itemStyle']).getItemStyle()),
            (b = N.get(['itemStyle', 'borderRadius'])),
            (w = V.get('focus')),
            (I = V.get('blurScope')),
            (L = V.get('disabled')),
            (_ = Rt(N));
        }
        M.shape.r = b;
        var G = t.getRawValue(T),
          O = '-';
        G && G[2] != null && (O = G[2] + ''),
          Kt(M, _, {
            labelFetcher: t,
            labelDataIndex: T,
            defaultOpacity: P.opacity,
            defaultText: O,
          }),
          (M.ensureState('emphasis').style = m),
          (M.ensureState('blur').style = S),
          (M.ensureState('select').style = y),
          lt(M, w, I, L),
          (M.incremental = o),
          o && (M.states.emphasis.hoverLayer = !0),
          p.add(M),
          g.setItemGraphicEl(T, M),
          this._progressiveEls && this._progressiveEls.push(M);
      }
    }),
    (e.prototype._renderOnGeo = function (t, a, n, i) {
      var o = n.targetVisuals.inRange,
        s = n.targetVisuals.outOfRange,
        l = a.getData(),
        u = this._hmLayer || this._hmLayer || new np();
      (u.blurSize = a.get('blurSize')),
        (u.pointSize = a.get('pointSize')),
        (u.minOpacity = a.get('minOpacity')),
        (u.maxOpacity = a.get('maxOpacity'));
      var v = t.getViewRect().clone(),
        c = t.getRoamTransform();
      v.applyTransform(c);
      var h = Math.max(v.x, 0),
        f = Math.max(v.y, 0),
        d = Math.min(v.width + v.x, i.getWidth()),
        p = Math.min(v.height + v.y, i.getHeight()),
        g = d - h,
        m = p - f,
        S = [l.mapDimension('lng'), l.mapDimension('lat'), l.mapDimension('value')],
        y = l.mapArray(S, function (w, I, L) {
          var D = t.dataToPoint([w, I]);
          return (D[0] -= h), (D[1] -= f), D.push(L), D;
        }),
        b = n.getExtent(),
        _ =
          n.type === 'visualMap.continuous'
            ? op(b, n.option.range)
            : ip(b, n.getPieceList(), n.option.selected);
      u.update(
        y,
        g,
        m,
        o.color.getNormalizer(),
        { inRange: o.color.getColorMapper(), outOfRange: s.color.getColorMapper() },
        _,
      );
      var x = new qa({ style: { width: g, height: m, x: h, y: f, image: u.canvas }, silent: !0 });
      this.group.add(x);
    }),
    (e.type = 'heatmap'),
    e
  );
})(ct);
const lp = sp;
var up = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      return He(null, this, { generateCoord: 'value' });
    }),
    (e.prototype.preventIncremental = function () {
      var t = Co.get(this.get('coordinateSystem'));
      if (t && t.dimensions) return t.dimensions[0] === 'lng' && t.dimensions[1] === 'lat';
    }),
    (e.type = 'series.heatmap'),
    (e.dependencies = ['grid', 'geo', 'calendar']),
    (e.defaultOption = {
      coordinateSystem: 'cartesian2d',
      z: 2,
      geoIndex: 0,
      blurSize: 30,
      pointSize: 20,
      maxOpacity: 1,
      minOpacity: 0,
      select: { itemStyle: { borderColor: '#212121' } },
    }),
    e
  );
})(ht);
const vp = up;
function cp(r) {
  r.registerChartView(lp), r.registerSeriesModel(vp);
}
var hp = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), (t._layers = []), t;
  }
  return (
    (e.prototype.render = function (t, a, n) {
      var i = t.getData(),
        o = this,
        s = this.group,
        l = t.getLayerSeries(),
        u = i.getLayout('layoutInfo'),
        v = u.rect,
        c = u.boundaryGap;
      (s.x = 0), (s.y = v.y + c[0]);
      function h(g) {
        return g.name;
      }
      var f = new pe(this._layersSeries || [], l, h, h),
        d = [];
      f.add(st(p, this, 'add'))
        .update(st(p, this, 'update'))
        .remove(st(p, this, 'remove'))
        .execute();
      function p(g, m, S) {
        var y = o._layers;
        if (g === 'remove') {
          s.remove(y[m]);
          return;
        }
        for (var b = [], _ = [], x, w = l[m].indices, I = 0; I < w.length; I++) {
          var L = i.getItemLayout(w[I]),
            D = L.x,
            T = L.y0,
            M = L.y;
          b.push(D, T), _.push(D, T + M), (x = i.getItemVisual(w[I], 'style'));
        }
        var P,
          A = i.getItemLayout(w[0]),
          C = t.getModel('label'),
          E = C.get('margin'),
          N = t.getModel('emphasis');
        if (g === 'add') {
          var V = (d[m] = new rt());
          (P = new yl({
            shape: {
              points: b,
              stackedOnPoints: _,
              smooth: 0.4,
              stackedOnSmooth: 0.4,
              smoothConstraint: !1,
            },
            z2: 0,
          })),
            V.add(P),
            s.add(V),
            t.isAnimationEnabled() &&
              P.setClipPath(
                fp(P.getBoundingRect(), t, function () {
                  P.removeClipPath();
                }),
              );
        } else {
          var V = y[S];
          (P = V.childAt(0)),
            s.add(V),
            (d[m] = V),
            ot(P, { shape: { points: b, stackedOnPoints: _ } }, t),
            ye(P);
        }
        Kt(
          P,
          Rt(t),
          { labelDataIndex: w[I - 1], defaultText: i.getName(w[I - 1]), inheritColor: x.fill },
          { normal: { verticalAlign: 'middle' } },
        ),
          P.setTextConfig({ position: null, local: !0 });
        var G = P.getTextContent();
        G && ((G.x = A.x - E), (G.y = A.y0 + A.y / 2)),
          P.useStyle(x),
          i.setItemGraphicEl(m, P),
          Mt(P, t),
          lt(P, N.get('focus'), N.get('blurScope'), N.get('disabled'));
      }
      (this._layersSeries = l), (this._layers = d);
    }),
    (e.type = 'themeRiver'),
    e
  );
})(ct);
function fp(r, e, t) {
  var a = new jt({ shape: { x: r.x - 10, y: r.y - 10, width: 0, height: r.height + 20 } });
  return wt(a, { shape: { x: r.x - 50, width: r.width + 100, height: r.height + 20 } }, e, t), a;
}
const pp = hp;
var Jr = 2,
  dp = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function (t) {
        r.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new Ya(st(this.getData, this), st(this.getRawData, this)));
      }),
      (e.prototype.fixData = function (t) {
        var a = t.length,
          n = {},
          i = ma(t, function (h) {
            return n.hasOwnProperty(h[0] + '') || (n[h[0] + ''] = -1), h[2];
          }),
          o = [];
        i.buckets.each(function (h, f) {
          o.push({ name: f, dataList: h });
        });
        for (var s = o.length, l = 0; l < s; ++l) {
          for (var u = o[l].name, v = 0; v < o[l].dataList.length; ++v) {
            var c = o[l].dataList[v][0] + '';
            n[c] = l;
          }
          for (var c in n)
            n.hasOwnProperty(c) && n[c] !== l && ((n[c] = l), (t[a] = [c, 0, u]), a++);
        }
        return t;
      }),
      (e.prototype.getInitialData = function (t, a) {
        for (
          var n = this.getReferringComponents('singleAxis', Ro).models[0],
            i = n.get('type'),
            o = At(t.data, function (d) {
              return d[2] !== void 0;
            }),
            s = this.fixData(o || []),
            l = [],
            u = (this.nameMap = mt()),
            v = 0,
            c = 0;
          c < s.length;
          ++c
        )
          l.push(s[c][Jr]), u.get(s[c][Jr]) || (u.set(s[c][Jr], v), v++);
        var h = Oa(s, {
            coordDimensions: ['single'],
            dimensionsDefine: [
              { name: 'time', type: Sa(i) },
              { name: 'value', type: 'float' },
              { name: 'name', type: 'ordinal' },
            ],
            encodeDefine: { single: 0, value: 1, itemName: 2 },
          }).dimensions,
          f = new bt(h, this);
        return f.initData(s), f;
      }),
      (e.prototype.getLayerSeries = function () {
        for (var t = this.getData(), a = t.count(), n = [], i = 0; i < a; ++i) n[i] = i;
        var o = t.mapDimension('single'),
          s = ma(n, function (u) {
            return t.get('name', u);
          }),
          l = [];
        return (
          s.buckets.each(function (u, v) {
            u.sort(function (c, h) {
              return t.get(o, c) - t.get(o, h);
            }),
              l.push({ name: v, indices: u });
          }),
          l
        );
      }),
      (e.prototype.getAxisTooltipData = function (t, a, n) {
        F(t) || (t = t ? [t] : []);
        for (
          var i = this.getData(), o = this.getLayerSeries(), s = [], l = o.length, u, v = 0;
          v < l;
          ++v
        ) {
          for (var c = Number.MAX_VALUE, h = -1, f = o[v].indices.length, d = 0; d < f; ++d) {
            var p = i.get(t[0], o[v].indices[d]),
              g = Math.abs(p - a);
            g <= c && ((u = p), (c = g), (h = o[v].indices[d]));
          }
          s.push(h);
        }
        return { dataIndices: s, nestestValue: u };
      }),
      (e.prototype.formatTooltip = function (t, a, n) {
        var i = this.getData(),
          o = i.getName(t),
          s = i.get(i.mapDimension('value'), t);
        return Ot('nameValue', { name: o, value: s });
      }),
      (e.type = 'series.themeRiver'),
      (e.dependencies = ['singleAxis']),
      (e.defaultOption = {
        z: 2,
        colorBy: 'data',
        coordinateSystem: 'singleAxis',
        boundaryGap: ['10%', '10%'],
        singleAxisIndex: 0,
        animationEasing: 'linear',
        label: { margin: 4, show: !0, position: 'left', fontSize: 11 },
        emphasis: { label: { show: !0 } },
      }),
      e
    );
  })(ht);
const gp = dp;
function yp(r, e) {
  r.eachSeriesByType('themeRiver', function (t) {
    var a = t.getData(),
      n = t.coordinateSystem,
      i = {},
      o = n.getRect();
    i.rect = o;
    var s = t.get('boundaryGap'),
      l = n.getAxis();
    if (((i.boundaryGap = s), l.orient === 'horizontal')) {
      (s[0] = z(s[0], o.height)), (s[1] = z(s[1], o.height));
      var u = o.height - s[0] - s[1];
      Di(a, t, u);
    } else {
      (s[0] = z(s[0], o.width)), (s[1] = z(s[1], o.width));
      var v = o.width - s[0] - s[1];
      Di(a, t, v);
    }
    a.setLayout('layoutInfo', i);
  });
}
function Di(r, e, t) {
  if (r.count())
    for (
      var a = e.coordinateSystem,
        n = e.getLayerSeries(),
        i = r.mapDimension('single'),
        o = r.mapDimension('value'),
        s = $(n, function (g) {
          return $(g.indices, function (m) {
            var S = a.dataToPoint(r.get(i, m));
            return (S[1] = r.get(o, m)), S;
          });
        }),
        l = mp(s),
        u = l.y0,
        v = t / l.max,
        c = n.length,
        h = n[0].indices.length,
        f,
        d = 0;
      d < h;
      ++d
    ) {
      (f = u[d] * v),
        r.setItemLayout(n[0].indices[d], {
          layerIndex: 0,
          x: s[0][d][0],
          y0: f,
          y: s[0][d][1] * v,
        });
      for (var p = 1; p < c; ++p)
        (f += s[p - 1][d][1] * v),
          r.setItemLayout(n[p].indices[d], {
            layerIndex: p,
            x: s[p][d][0],
            y0: f,
            y: s[p][d][1] * v,
          });
    }
}
function mp(r) {
  for (var e = r.length, t = r[0].length, a = [], n = [], i = 0, o = 0; o < t; ++o) {
    for (var s = 0, l = 0; l < e; ++l) s += r[l][o][1];
    s > i && (i = s), a.push(s);
  }
  for (var u = 0; u < t; ++u) n[u] = (i - a[u]) / 2;
  i = 0;
  for (var v = 0; v < t; ++v) {
    var c = a[v] + n[v];
    c > i && (i = c);
  }
  return { y0: n, max: i };
}
function Sp(r) {
  r.registerChartView(pp),
    r.registerSeriesModel(gp),
    r.registerLayout(yp),
    r.registerProcessor(Qa('themeRiver'));
}
var _p = 2,
  bp = 4,
  Ti = (function (r) {
    k(e, r);
    function e(t, a, n, i) {
      var o = r.call(this) || this;
      (o.z2 = _p), (o.textConfig = { inside: !0 }), (it(o).seriesIndex = a.seriesIndex);
      var s = new Wt({ z2: bp, silent: t.getModel().get(['label', 'silent']) });
      return o.setTextContent(s), o.updateData(!0, t, a, n, i), o;
    }
    return (
      (e.prototype.updateData = function (t, a, n, i, o) {
        (this.node = a), (a.piece = this), (n = n || this._seriesModel), (i = i || this._ecModel);
        var s = this;
        it(s).dataIndex = a.dataIndex;
        var l = a.getModel(),
          u = l.getModel('emphasis'),
          v = a.getLayout(),
          c = U({}, v);
        c.label = null;
        var h = a.getVisual('style');
        h.lineJoin = 'bevel';
        var f = a.getVisual('decal');
        f && (h.decal = Vo(f, o));
        var d = zn(l.getModel('itemStyle'), c, !0);
        U(c, d),
          R(ya, function (S) {
            var y = s.ensureState(S),
              b = l.getModel([S, 'itemStyle']);
            y.style = b.getItemStyle();
            var _ = zn(b, c);
            _ && (y.shape = _);
          }),
          t
            ? (s.setShape(c), (s.shape.r = v.r0), wt(s, { shape: { r: v.r } }, n, a.dataIndex))
            : (ot(s, { shape: c }, n), ye(s)),
          s.useStyle(h),
          this._updateLabel(n);
        var p = l.getShallow('cursor');
        p && s.attr('cursor', p),
          (this._seriesModel = n || this._seriesModel),
          (this._ecModel = i || this._ecModel);
        var g = u.get('focus'),
          m =
            g === 'ancestor'
              ? a.getAncestorsIndices()
              : g === 'descendant'
                ? a.getDescendantIndices()
                : g;
        lt(this, m, u.get('blurScope'), u.get('disabled'));
      }),
      (e.prototype._updateLabel = function (t) {
        var a = this,
          n = this.node.getModel(),
          i = n.getModel('label'),
          o = this.node.getLayout(),
          s = o.endAngle - o.startAngle,
          l = (o.startAngle + o.endAngle) / 2,
          u = Math.cos(l),
          v = Math.sin(l),
          c = this,
          h = c.getTextContent(),
          f = this.node.dataIndex,
          d = (i.get('minAngle') / 180) * Math.PI,
          p = i.get('show') && !(d != null && Math.abs(s) < d);
        (h.ignore = !p),
          R(ml, function (m) {
            var S = m === 'normal' ? n.getModel('label') : n.getModel([m, 'label']),
              y = m === 'normal',
              b = y ? h : h.ensureState(m),
              _ = t.getFormattedLabel(f, m);
            y && (_ = _ || a.node.name),
              (b.style = kt(S, {}, null, m !== 'normal', !0)),
              _ && (b.style.text = _);
            var x = S.get('show');
            x != null && !y && (b.ignore = !x);
            var w = g(S, 'position'),
              I = y ? c : c.states[m],
              L = I.style.fill;
            I.textConfig = {
              outsideFill: S.get('color') === 'inherit' ? L : null,
              inside: w !== 'outside',
            };
            var D,
              T = g(S, 'distance') || 0,
              M = g(S, 'align'),
              P = g(S, 'rotate'),
              A = Math.PI * 0.5,
              C = Math.PI * 1.5,
              E = xe(P === 'tangential' ? Math.PI / 2 - l : l),
              N = E > A && !Sl(E - A) && E < C;
            w === 'outside'
              ? ((D = o.r + T), (M = N ? 'right' : 'left'))
              : !M || M === 'center'
                ? (s === 2 * Math.PI && o.r0 === 0 ? (D = 0) : (D = (o.r + o.r0) / 2),
                  (M = 'center'))
                : M === 'left'
                  ? ((D = o.r0 + T), (M = N ? 'right' : 'left'))
                  : M === 'right' && ((D = o.r - T), (M = N ? 'left' : 'right')),
              (b.style.align = M),
              (b.style.verticalAlign = g(S, 'verticalAlign') || 'middle'),
              (b.x = D * u + o.cx),
              (b.y = D * v + o.cy);
            var V = 0;
            P === 'radial'
              ? (V = xe(-l) + (N ? Math.PI : 0))
              : P === 'tangential'
                ? (V = xe(Math.PI / 2 - l) + (N ? Math.PI : 0))
                : Ht(P) && (V = (P * Math.PI) / 180),
              (b.rotation = xe(V));
          });
        function g(m, S) {
          var y = m.get(S);
          return y == null ? i.get(S) : y;
        }
        h.dirtyStyle();
      }),
      e
    );
  })(Ee),
  Aa = 'sunburstRootToNode',
  Ai = 'sunburstHighlight',
  xp = 'sunburstUnhighlight';
function wp(r) {
  r.registerAction({ type: Aa, update: 'updateView' }, function (e, t) {
    t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, a);
    function a(n, i) {
      var o = Re(e, [Aa], n);
      if (o) {
        var s = n.getViewRoot();
        s && (e.direction = un(s, o.node) ? 'rollUp' : 'drillDown'), n.resetViewRoot(o.node);
      }
    }
  }),
    r.registerAction({ type: Ai, update: 'none' }, function (e, t, a) {
      (e = U({}, e)), t.eachComponent({ mainType: 'series', subType: 'sunburst', query: e }, n);
      function n(i) {
        var o = Re(e, [Ai], i);
        o && (e.dataIndex = o.node.dataIndex);
      }
      a.dispatchAction(U(e, { type: 'highlight' }));
    }),
    r.registerAction({ type: xp, update: 'updateView' }, function (e, t, a) {
      (e = U({}, e)), a.dispatchAction(U(e, { type: 'downplay' }));
    });
}
var Ip = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, a, n, i) {
      var o = this;
      (this.seriesModel = t), (this.api = n), (this.ecModel = a);
      var s = t.getData(),
        l = s.tree.root,
        u = t.getViewRoot(),
        v = this.group,
        c = t.get('renderLabelForZeroData'),
        h = [];
      u.eachNode(function (S) {
        h.push(S);
      });
      var f = this._oldChildren || [];
      d(h, f), m(l, u), this._initEvents(), (this._oldChildren = h);
      function d(S, y) {
        if (S.length === 0 && y.length === 0) return;
        new pe(y, S, b, b).add(_).update(_).remove(et(_, null)).execute();
        function b(x) {
          return x.getId();
        }
        function _(x, w) {
          var I = x == null ? null : S[x],
            L = w == null ? null : y[w];
          p(I, L);
        }
      }
      function p(S, y) {
        if ((!c && S && !S.getValue() && (S = null), S !== l && y !== l)) {
          if (y && y.piece)
            S
              ? (y.piece.updateData(!1, S, t, a, n), s.setItemGraphicEl(S.dataIndex, y.piece))
              : g(y);
          else if (S) {
            var b = new Ti(S, t, a, n);
            v.add(b), s.setItemGraphicEl(S.dataIndex, b);
          }
        }
      }
      function g(S) {
        S && S.piece && (v.remove(S.piece), (S.piece = null));
      }
      function m(S, y) {
        y.depth > 0
          ? (o.virtualPiece
              ? o.virtualPiece.updateData(!1, S, t, a, n)
              : ((o.virtualPiece = new Ti(S, t, a, n)), v.add(o.virtualPiece)),
            y.piece.off('click'),
            o.virtualPiece.on('click', function (b) {
              o._rootToNode(y.parentNode);
            }))
          : o.virtualPiece && (v.remove(o.virtualPiece), (o.virtualPiece = null));
      }
    }),
    (e.prototype._initEvents = function () {
      var t = this;
      this.group.off('click'),
        this.group.on('click', function (a) {
          var n = !1,
            i = t.seriesModel.getViewRoot();
          i.eachNode(function (o) {
            if (!n && o.piece && o.piece === a.target) {
              var s = o.getModel().get('nodeClick');
              if (s === 'rootToNode') t._rootToNode(o);
              else if (s === 'link') {
                var l = o.getModel(),
                  u = l.get('link');
                if (u) {
                  var v = l.get('target', !0) || '_blank';
                  Io(u, v);
                }
              }
              n = !0;
            }
          });
        });
    }),
    (e.prototype._rootToNode = function (t) {
      t !== this.seriesModel.getViewRoot() &&
        this.api.dispatchAction({
          type: Aa,
          from: this.uid,
          seriesId: this.seriesModel.id,
          targetNode: t,
        });
    }),
    (e.prototype.containPoint = function (t, a) {
      var n = a.getData(),
        i = n.getItemLayout(0);
      if (i) {
        var o = t[0] - i.cx,
          s = t[1] - i.cy,
          l = Math.sqrt(o * o + s * s);
        return l <= i.r && l >= i.r0;
      }
    }),
    (e.type = 'sunburst'),
    e
  );
})(ct);
const Lp = Ip;
var Dp = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), (t.ignoreStyleOnData = !0), t;
  }
  return (
    (e.prototype.getInitialData = function (t, a) {
      var n = { name: t.name, children: t.data };
      ys(n);
      var i = (this._levelModels = $(
          t.levels || [],
          function (l) {
            return new qt(l, this, a);
          },
          this,
        )),
        o = ln.createTree(n, this, s);
      function s(l) {
        l.wrapMethod('getItemModel', function (u, v) {
          var c = o.getNodeByDataIndex(v),
            h = i[c.depth];
          return h && (u.parentModel = h), u;
        });
      }
      return o.data;
    }),
    (e.prototype.optionUpdated = function () {
      this.resetViewRoot();
    }),
    (e.prototype.getDataParams = function (t) {
      var a = r.prototype.getDataParams.apply(this, arguments),
        n = this.getData().tree.getNodeByDataIndex(t);
      return (a.treePathInfo = Lr(n, this)), a;
    }),
    (e.prototype.getLevelModel = function (t) {
      return this._levelModels && this._levelModels[t.depth];
    }),
    (e.prototype.getViewRoot = function () {
      return this._viewRoot;
    }),
    (e.prototype.resetViewRoot = function (t) {
      t ? (this._viewRoot = t) : (t = this._viewRoot);
      var a = this.getRawData().tree.root;
      (!t || (t !== a && !a.contains(t))) && (this._viewRoot = a);
    }),
    (e.prototype.enableAriaDecal = function () {
      Zo(this);
    }),
    (e.type = 'series.sunburst'),
    (e.defaultOption = {
      z: 2,
      center: ['50%', '50%'],
      radius: [0, '75%'],
      clockwise: !0,
      startAngle: 90,
      minAngle: 0,
      stillShowZeroSum: !0,
      nodeClick: 'rootToNode',
      renderLabelForZeroData: !1,
      label: {
        rotate: 'radial',
        show: !0,
        opacity: 1,
        align: 'center',
        position: 'inside',
        distance: 5,
        silent: !0,
      },
      itemStyle: {
        borderWidth: 1,
        borderColor: 'white',
        borderType: 'solid',
        shadowBlur: 0,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1,
      },
      emphasis: { focus: 'descendant' },
      blur: { itemStyle: { opacity: 0.2 }, label: { opacity: 0.1 } },
      animationType: 'expansion',
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      data: [],
      sort: 'desc',
    }),
    e
  );
})(ht);
function ys(r) {
  var e = 0;
  R(r.children, function (a) {
    ys(a);
    var n = a.value;
    F(n) && (n = n[0]), (e += n);
  });
  var t = r.value;
  F(t) && (t = t[0]),
    (t == null || isNaN(t)) && (t = e),
    t < 0 && (t = 0),
    F(r.value) ? (r.value[0] = t) : (r.value = t);
}
const Tp = Dp;
var Ci = Math.PI / 180;
function Ap(r, e, t) {
  e.eachSeriesByType(r, function (a) {
    var n = a.get('center'),
      i = a.get('radius');
    F(i) || (i = [0, i]), F(n) || (n = [n, n]);
    var o = t.getWidth(),
      s = t.getHeight(),
      l = Math.min(o, s),
      u = z(n[0], o),
      v = z(n[1], s),
      c = z(i[0], l / 2),
      h = z(i[1], l / 2),
      f = -a.get('startAngle') * Ci,
      d = a.get('minAngle') * Ci,
      p = a.getData().tree.root,
      g = a.getViewRoot(),
      m = g.depth,
      S = a.get('sort');
    S != null && ms(g, S);
    var y = 0;
    R(g.children, function (E) {
      !isNaN(E.getValue()) && y++;
    });
    var b = g.getValue(),
      _ = (Math.PI / (b || y)) * 2,
      x = g.depth > 0,
      w = g.height - (x ? -1 : 1),
      I = (h - c) / (w || 1),
      L = a.get('clockwise'),
      D = a.get('stillShowZeroSum'),
      T = L ? 1 : -1,
      M = function (E, N) {
        if (E) {
          var V = N;
          if (E !== p) {
            var G = E.getValue(),
              O = b === 0 && D ? _ : G * _;
            O < d && (O = d), (V = N + T * O);
            var B = E.depth - m - (x ? -1 : 1),
              K = c + I * B,
              X = c + I * (B + 1),
              W = a.getLevelModel(E);
            if (W) {
              var j = W.get('r0', !0),
                ut = W.get('r', !0),
                Y = W.get('radius', !0);
              Y != null && ((j = Y[0]), (ut = Y[1])),
                j != null && (K = z(j, l / 2)),
                ut != null && (X = z(ut, l / 2));
            }
            E.setLayout({
              angle: O,
              startAngle: N,
              endAngle: V,
              clockwise: L,
              cx: u,
              cy: v,
              r0: K,
              r: X,
            });
          }
          if (E.children && E.children.length) {
            var H = 0;
            R(E.children, function (Q) {
              H += M(Q, N + H);
            });
          }
          return V - N;
        }
      };
    if (x) {
      var P = c,
        A = c + I,
        C = Math.PI * 2;
      p.setLayout({
        angle: C,
        startAngle: f,
        endAngle: f + C,
        clockwise: L,
        cx: u,
        cy: v,
        r0: P,
        r: A,
      });
    }
    M(g, f);
  });
}
function ms(r, e) {
  var t = r.children || [];
  (r.children = Cp(t, e)),
    t.length &&
      R(r.children, function (a) {
        ms(a, e);
      });
}
function Cp(r, e) {
  if (nt(e)) {
    var t = $(r, function (n, i) {
      var o = n.getValue();
      return {
        params: {
          depth: n.depth,
          height: n.height,
          dataIndex: n.dataIndex,
          getValue: function () {
            return o;
          },
        },
        index: i,
      };
    });
    return (
      t.sort(function (n, i) {
        return e(n.params, i.params);
      }),
      $(t, function (n) {
        return r[n.index];
      })
    );
  } else {
    var a = e === 'asc';
    return r.sort(function (n, i) {
      var o = (n.getValue() - i.getValue()) * (a ? 1 : -1);
      return o === 0 ? (n.dataIndex - i.dataIndex) * (a ? -1 : 1) : o;
    });
  }
}
function Mp(r) {
  var e = {};
  function t(a, n, i) {
    for (var o = a; o && o.depth > 1; ) o = o.parentNode;
    var s = n.getColorFromPalette(o.name || o.dataIndex + '', e);
    return a.depth > 1 && St(s) && (s = _l(s, ((a.depth - 1) / (i - 1)) * 0.5)), s;
  }
  r.eachSeriesByType('sunburst', function (a) {
    var n = a.getData(),
      i = n.tree;
    i.eachNode(function (o) {
      var s = o.getModel(),
        l = s.getModel('itemStyle').getItemStyle();
      l.fill || (l.fill = t(o, a, i.root.height));
      var u = n.ensureUniqueItemVisual(o.dataIndex, 'style');
      U(u, l);
    });
  });
}
function Pp(r) {
  r.registerChartView(Lp),
    r.registerSeriesModel(Tp),
    r.registerLayout(et(Ap, 'sunburst')),
    r.registerProcessor(et(Qa, 'sunburst')),
    r.registerVisual(Mp),
    wp(r);
}
var Mi = { color: 'fill', borderColor: 'stroke' },
  Ep = {
    symbol: 1,
    symbolSize: 1,
    symbolKeepAspect: 1,
    legendIcon: 1,
    visualMeta: 1,
    liftZ: 1,
    decal: 1,
  },
  Bt = Lt(),
  Np = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.optionUpdated = function () {
        (this.currentZLevel = this.get('zlevel', !0)), (this.currentZ = this.get('z', !0));
      }),
      (e.prototype.getInitialData = function (t, a) {
        return He(null, this);
      }),
      (e.prototype.getDataParams = function (t, a, n) {
        var i = r.prototype.getDataParams.call(this, t, a);
        return n && (i.info = Bt(n).info), i;
      }),
      (e.type = 'series.custom'),
      (e.dependencies = ['grid', 'polar', 'geo', 'singleAxis', 'calendar']),
      (e.defaultOption = { coordinateSystem: 'cartesian2d', z: 2, legendHoverLink: !0, clip: !1 }),
      e
    );
  })(ht);
const Rp = Np;
function Vp(r, e) {
  return (
    (e = e || [0, 0]),
    $(
      ['x', 'y'],
      function (t, a) {
        var n = this.getAxis(t),
          i = e[a],
          o = r[a] / 2;
        return n.type === 'category'
          ? n.getBandWidth()
          : Math.abs(n.dataToCoord(i - o) - n.dataToCoord(i + o));
      },
      this,
    )
  );
}
function kp(r) {
  var e = r.master.getRect();
  return {
    coordSys: { type: 'cartesian2d', x: e.x, y: e.y, width: e.width, height: e.height },
    api: {
      coord: function (t) {
        return r.dataToPoint(t);
      },
      size: st(Vp, r),
    },
  };
}
function Gp(r, e) {
  return (
    (e = e || [0, 0]),
    $(
      [0, 1],
      function (t) {
        var a = e[t],
          n = r[t] / 2,
          i = [],
          o = [];
        return (
          (i[t] = a - n),
          (o[t] = a + n),
          (i[1 - t] = o[1 - t] = e[1 - t]),
          Math.abs(this.dataToPoint(i)[t] - this.dataToPoint(o)[t])
        );
      },
      this,
    )
  );
}
function Bp(r) {
  var e = r.getBoundingRect();
  return {
    coordSys: { type: 'geo', x: e.x, y: e.y, width: e.width, height: e.height, zoom: r.getZoom() },
    api: {
      coord: function (t) {
        return r.dataToPoint(t);
      },
      size: st(Gp, r),
    },
  };
}
function zp(r, e) {
  var t = this.getAxis(),
    a = e instanceof Array ? e[0] : e,
    n = (r instanceof Array ? r[0] : r) / 2;
  return t.type === 'category'
    ? t.getBandWidth()
    : Math.abs(t.dataToCoord(a - n) - t.dataToCoord(a + n));
}
function Op(r) {
  var e = r.getRect();
  return {
    coordSys: { type: 'singleAxis', x: e.x, y: e.y, width: e.width, height: e.height },
    api: {
      coord: function (t) {
        return r.dataToPoint(t);
      },
      size: st(zp, r),
    },
  };
}
function Hp(r, e) {
  return (
    (e = e || [0, 0]),
    $(
      ['Radius', 'Angle'],
      function (t, a) {
        var n = 'get' + t + 'Axis',
          i = this[n](),
          o = e[a],
          s = r[a] / 2,
          l =
            i.type === 'category'
              ? i.getBandWidth()
              : Math.abs(i.dataToCoord(o - s) - i.dataToCoord(o + s));
        return t === 'Angle' && (l = (l * Math.PI) / 180), l;
      },
      this,
    )
  );
}
function Fp(r) {
  var e = r.getRadiusAxis(),
    t = r.getAngleAxis(),
    a = e.getExtent();
  return (
    a[0] > a[1] && a.reverse(),
    {
      coordSys: { type: 'polar', cx: r.cx, cy: r.cy, r: a[1], r0: a[0] },
      api: {
        coord: function (n) {
          var i = e.dataToRadius(n[0]),
            o = t.dataToAngle(n[1]),
            s = r.coordToPoint([i, o]);
          return s.push(i, (o * Math.PI) / 180), s;
        },
        size: st(Hp, r),
      },
    }
  );
}
function $p(r) {
  var e = r.getRect(),
    t = r.getRangeInfo();
  return {
    coordSys: {
      type: 'calendar',
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height,
      cellWidth: r.getCellWidth(),
      cellHeight: r.getCellHeight(),
      rangeInfo: { start: t.start, end: t.end, weeks: t.weeks, dayCount: t.allDay },
    },
    api: {
      coord: function (a, n) {
        return r.dataToPoint(a, n);
      },
    },
  };
}
var zt = 'emphasis',
  Zt = 'normal',
  gn = 'blur',
  yn = 'select',
  Jt = [Zt, zt, gn, yn],
  ta = {
    normal: ['itemStyle'],
    emphasis: [zt, 'itemStyle'],
    blur: [gn, 'itemStyle'],
    select: [yn, 'itemStyle'],
  },
  ea = { normal: ['label'], emphasis: [zt, 'label'], blur: [gn, 'label'], select: [yn, 'label'] },
  Wp = ['x', 'y'],
  Up = 'e\0\0',
  _t = { normal: {}, emphasis: {}, blur: {}, select: {} },
  Zp = { cartesian2d: kp, geo: Bp, single: Op, polar: Fp, calendar: $p };
function Ca(r) {
  return r instanceof yt;
}
function Ma(r) {
  return r instanceof Ha;
}
function Yp(r, e) {
  e.copyTransform(r),
    Ma(e) &&
      Ma(r) &&
      (e.setStyle(r.style),
      (e.z = r.z),
      (e.z2 = r.z2),
      (e.zlevel = r.zlevel),
      (e.invisible = r.invisible),
      (e.ignore = r.ignore),
      Ca(e) && Ca(r) && e.setShape(r.shape));
}
var Xp = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.render = function (t, a, n, i) {
      this._progressiveEls = null;
      var o = this._data,
        s = t.getData(),
        l = this.group,
        u = Pi(t, s, a, n);
      o || l.removeAll(),
        s
          .diff(o)
          .add(function (c) {
            ra(n, null, c, u(c, i), t, l, s);
          })
          .remove(function (c) {
            var h = o.getItemGraphicEl(c);
            h && rn(h, Bt(h).option, t);
          })
          .update(function (c, h) {
            var f = o.getItemGraphicEl(h);
            ra(n, f, c, u(c, i), t, l, s);
          })
          .execute();
      var v = t.get('clip', !0) ? Ja(t.coordinateSystem, !1, t) : null;
      v ? l.setClipPath(v) : l.removeClipPath(), (this._data = s);
    }),
    (e.prototype.incrementalPrepareRender = function (t, a, n) {
      this.group.removeAll(), (this._data = null);
    }),
    (e.prototype.incrementalRender = function (t, a, n, i, o) {
      var s = a.getData(),
        l = Pi(a, s, n, i),
        u = (this._progressiveEls = []);
      function v(f) {
        f.isGroup || ((f.incremental = !0), (f.ensureState('emphasis').hoverLayer = !0));
      }
      for (var c = t.start; c < t.end; c++) {
        var h = ra(null, null, c, l(c, o), a, this.group, s);
        h && (h.traverse(v), u.push(h));
      }
    }),
    (e.prototype.eachRendered = function (t) {
      br(this._progressiveEls || this.group, t);
    }),
    (e.prototype.filterForExposedEvent = function (t, a, n, i) {
      var o = a.element;
      if (o == null || n.name === o) return !0;
      for (; (n = n.__hostTarget || n.parent) && n !== this.group; ) if (n.name === o) return !0;
      return !1;
    }),
    (e.type = 'custom'),
    e
  );
})(ct);
const qp = Xp;
function mn(r) {
  var e = r.type,
    t;
  if (e === 'path') {
    var a = r.shape,
      n =
        a.width != null && a.height != null
          ? { x: a.x || 0, y: a.y || 0, width: a.width, height: a.height }
          : null,
      i = bs(a);
    (t = Ll(i, null, n, a.layout || 'center')), (Bt(t).customPathData = i);
  } else if (e === 'image') (t = new qa({})), (Bt(t).customImagePath = r.style.image);
  else if (e === 'text') t = new Wt({});
  else if (e === 'group') t = new rt();
  else {
    if (e === 'compoundPath') throw new Error('"compoundPath" is not supported yet.');
    var o = Dl(e);
    if (!o) {
      var s = '';
      tt(s);
    }
    t = new o();
  }
  return (
    (Bt(t).customGraphicType = e),
    (t.name = r.name),
    (t.z2EmphasisLift = 1),
    (t.z2SelectLift = 1),
    t
  );
}
function Sn(r, e, t, a, n, i, o) {
  Tl(e);
  var s = n && n.normal.cfg;
  s && e.setTextConfig(s), a && a.transition == null && (a.transition = Wp);
  var l = a && a.style;
  if (l) {
    if (e.type === 'text') {
      var u = l;
      Ct(u, 'textFill') && (u.fill = u.textFill), Ct(u, 'textStroke') && (u.stroke = u.textStroke);
    }
    var v = void 0,
      c = Ca(e) ? l.decal : null;
    r && c && ((c.dirty = !0), (v = Vo(c, r))), (l.__decalPattern = v);
  }
  if (Ma(e) && l) {
    var v = l.__decalPattern;
    v && (l.decal = v);
  }
  Al(e, a, i, { dataIndex: t, isInit: o, clearStyle: !0 }), Cl(e, a.keyframeAnimation, i);
}
function Ss(r, e, t, a, n) {
  var i = e.isGroup ? null : e,
    o = n && n[r].cfg;
  if (i) {
    var s = i.ensureState(r);
    if (a === !1) {
      var l = i.getState(r);
      l && (l.style = null);
    } else s.style = a || null;
    o && (s.textConfig = o), ar(i);
  }
}
function Kp(r, e, t) {
  if (!r.isGroup) {
    var a = r,
      n = t.currentZ,
      i = t.currentZLevel;
    (a.z = n), (a.zlevel = i);
    var o = e.z2;
    o != null && (a.z2 = o || 0);
    for (var s = 0; s < Jt.length; s++) jp(a, e, Jt[s]);
  }
}
function jp(r, e, t) {
  var a = t === Zt,
    n = a ? e : vr(e, t),
    i = n ? n.z2 : null,
    o;
  i != null && ((o = a ? r : r.ensureState(t)), (o.z2 = i || 0));
}
function Pi(r, e, t, a) {
  var n = r.get('renderItem'),
    i = r.coordinateSystem,
    o = {};
  i && (o = i.prepareCustoms ? i.prepareCustoms(i) : Zp[i.type](i));
  for (
    var s = gt(
        {
          getWidth: a.getWidth,
          getHeight: a.getHeight,
          getZr: a.getZr,
          getDevicePixelRatio: a.getDevicePixelRatio,
          value: b,
          style: x,
          ordinalRawValue: _,
          styleEmphasis: w,
          visual: D,
          barLayout: T,
          currentSeriesIndices: M,
          font: P,
        },
        o.api || {},
      ),
      l = {
        context: {},
        seriesId: r.id,
        seriesName: r.name,
        seriesIndex: r.seriesIndex,
        coordSys: o.coordSys,
        dataInsideLength: e.count(),
        encode: Qp(r.getData()),
      },
      u,
      v,
      c = {},
      h = {},
      f = {},
      d = {},
      p = 0;
    p < Jt.length;
    p++
  ) {
    var g = Jt[p];
    (f[g] = r.getModel(ta[g])), (d[g] = r.getModel(ea[g]));
  }
  function m(A) {
    return A === u ? v || (v = e.getItemModel(A)) : e.getItemModel(A);
  }
  function S(A, C) {
    return e.hasItemOption
      ? A === u
        ? c[C] || (c[C] = m(A).getModel(ta[C]))
        : m(A).getModel(ta[C])
      : f[C];
  }
  function y(A, C) {
    return e.hasItemOption
      ? A === u
        ? h[C] || (h[C] = m(A).getModel(ea[C]))
        : m(A).getModel(ea[C])
      : d[C];
  }
  return function (A, C) {
    return (
      (u = A),
      (v = null),
      (c = {}),
      (h = {}),
      n &&
        n(
          gt({ dataIndexInside: A, dataIndex: e.getRawIndex(A), actionType: C ? C.type : null }, l),
          s,
        )
    );
  };
  function b(A, C) {
    return C == null && (C = u), e.getStore().get(e.getDimensionIndex(A || 0), C);
  }
  function _(A, C) {
    C == null && (C = u), (A = A || 0);
    var E = e.getDimensionInfo(A);
    if (!E) {
      var N = e.getDimensionIndex(A);
      return N >= 0 ? e.getStore().get(N, C) : void 0;
    }
    var V = e.get(E.name, C),
      G = E && E.ordinalMeta;
    return G ? G.categories[V] : V;
  }
  function x(A, C) {
    C == null && (C = u);
    var E = e.getItemVisual(C, 'style'),
      N = E && E.fill,
      V = E && E.opacity,
      G = S(C, Zt).getItemStyle();
    N != null && (G.fill = N), V != null && (G.opacity = V);
    var O = { inheritColor: St(N) ? N : '#000' },
      B = y(C, Zt),
      K = kt(B, null, O, !1, !0);
    K.text = B.getShallow('show') ? $t(r.getFormattedLabel(C, Zt), On(e, C)) : null;
    var X = Hn(B, O, !1);
    return L(A, G), (G = Fn(G, K, X)), A && I(G, A), (G.legacy = !0), G;
  }
  function w(A, C) {
    C == null && (C = u);
    var E = S(C, zt).getItemStyle(),
      N = y(C, zt),
      V = kt(N, null, null, !0, !0);
    V.text = N.getShallow('show')
      ? ze(r.getFormattedLabel(C, zt), r.getFormattedLabel(C, Zt), On(e, C))
      : null;
    var G = Hn(N, null, !0);
    return L(A, E), (E = Fn(E, V, G)), A && I(E, A), (E.legacy = !0), E;
  }
  function I(A, C) {
    for (var E in C) Ct(C, E) && (A[E] = C[E]);
  }
  function L(A, C) {
    A &&
      (A.textFill && (C.textFill = A.textFill),
      A.textPosition && (C.textPosition = A.textPosition));
  }
  function D(A, C) {
    if ((C == null && (C = u), Ct(Mi, A))) {
      var E = e.getItemVisual(C, 'style');
      return E ? E[Mi[A]] : null;
    }
    if (Ct(Ep, A)) return e.getItemVisual(C, A);
  }
  function T(A) {
    if (i.type === 'cartesian2d') {
      var C = i.getBaseAxis();
      return bl(gt({ axis: C }, A));
    }
  }
  function M() {
    return t.getCurrentSeriesIndices();
  }
  function P(A) {
    return xl(A, t);
  }
}
function Qp(r) {
  var e = {};
  return (
    R(r.dimensions, function (t) {
      var a = r.getDimensionInfo(t);
      if (!a.isExtraCoord) {
        var n = a.coordDim,
          i = (e[n] = e[n] || []);
        i[a.coordDimIndex] = r.getDimensionIndex(t);
      }
    }),
    e
  );
}
function ra(r, e, t, a, n, i, o) {
  if (!a) {
    i.remove(e);
    return;
  }
  var s = _n(r, e, t, a, n, i);
  return s && o.setItemGraphicEl(t, s), s && lt(s, a.focus, a.blurScope, a.emphasisDisabled), s;
}
function _n(r, e, t, a, n, i) {
  var o = -1,
    s = e;
  e && _s(e, a, n) && ((o = It(i.childrenRef(), e)), (e = null));
  var l = !e,
    u = e;
  u ? u.clearStates() : ((u = mn(a)), s && Yp(s, u)),
    a.morph === !1 ? (u.disableMorphing = !0) : u.disableMorphing && (u.disableMorphing = !1),
    (_t.normal.cfg =
      _t.normal.conOpt =
      _t.emphasis.cfg =
      _t.emphasis.conOpt =
      _t.blur.cfg =
      _t.blur.conOpt =
      _t.select.cfg =
      _t.select.conOpt =
        null),
    (_t.isLegacy = !1),
    td(u, t, a, n, l, _t),
    Jp(u, t, a, n, l),
    Sn(r, u, t, a, _t, n, l),
    Ct(a, 'info') && (Bt(u).info = a.info);
  for (var v = 0; v < Jt.length; v++) {
    var c = Jt[v];
    if (c !== Zt) {
      var h = vr(a, c),
        f = bn(a, h, c);
      Ss(c, u, h, f, _t);
    }
  }
  return (
    Kp(u, a, n), a.type === 'group' && ed(r, u, t, a, n), o >= 0 ? i.replaceAt(u, o) : i.add(u), u
  );
}
function _s(r, e, t) {
  var a = Bt(r),
    n = e.type,
    i = e.shape,
    o = e.style;
  return (
    t.isUniversalTransitionEnabled() ||
    (n != null && n !== a.customGraphicType) ||
    (n === 'path' && id(i) && bs(i) !== a.customPathData) ||
    (n === 'image' && Ct(o, 'image') && o.image !== a.customImagePath)
  );
}
function Jp(r, e, t, a, n) {
  var i = t.clipPath;
  if (i === !1) r && r.getClipPath() && r.removeClipPath();
  else if (i) {
    var o = r.getClipPath();
    o && _s(o, i, a) && (o = null),
      o || ((o = mn(i)), r.setClipPath(o)),
      Sn(null, o, e, i, null, a, n);
  }
}
function td(r, e, t, a, n, i) {
  if (!r.isGroup) {
    Ei(t, null, i), Ei(t, zt, i);
    var o = i.normal.conOpt,
      s = i.emphasis.conOpt,
      l = i.blur.conOpt,
      u = i.select.conOpt;
    if (o != null || s != null || u != null || l != null) {
      var v = r.getTextContent();
      if (o === !1) v && r.removeTextContent();
      else {
        (o = i.normal.conOpt = o || { type: 'text' }),
          v ? v.clearStates() : ((v = mn(o)), r.setTextContent(v)),
          Sn(null, v, e, o, null, a, n);
        for (var c = o && o.style, h = 0; h < Jt.length; h++) {
          var f = Jt[h];
          if (f !== Zt) {
            var d = i[f].conOpt;
            Ss(f, v, d, bn(o, d, f), null);
          }
        }
        c ? v.dirty() : v.markRedraw();
      }
    }
  }
}
function Ei(r, e, t) {
  var a = e ? vr(r, e) : r,
    n = e ? bn(r, a, zt) : r.style,
    i = r.type,
    o = a ? a.textConfig : null,
    s = r.textContent,
    l = s ? (e ? vr(s, e) : s) : null;
  if (n && (t.isLegacy || wl(n, i, !!o, !!l))) {
    t.isLegacy = !0;
    var u = Il(n, i, !e);
    !o && u.textConfig && (o = u.textConfig), !l && u.textContent && (l = u.textContent);
  }
  if (!e && l) {
    var v = l;
    !v.type && (v.type = 'text');
  }
  var c = e ? t[e] : t.normal;
  (c.cfg = o), (c.conOpt = l);
}
function vr(r, e) {
  return e ? (r ? r[e] : null) : r;
}
function bn(r, e, t) {
  var a = e && e.style;
  return a == null && t === zt && r && (a = r.styleEmphasis), a;
}
function ed(r, e, t, a, n) {
  var i = a.children,
    o = i ? i.length : 0,
    s = a.$mergeChildren,
    l = s === 'byName' || a.diffChildrenByName,
    u = s === !1;
  if (!(!o && !l && !u)) {
    if (l) {
      ad({
        api: r,
        oldChildren: e.children() || [],
        newChildren: i || [],
        dataIndex: t,
        seriesModel: n,
        group: e,
      });
      return;
    }
    u && e.removeAll();
    for (var v = 0; v < o; v++) {
      var c = i[v],
        h = e.childAt(v);
      c ? (c.ignore == null && (c.ignore = !1), _n(r, h, t, c, n, e)) : (h.ignore = !0);
    }
    for (var f = e.childCount() - 1; f >= v; f--) {
      var d = e.childAt(f);
      rd(e, d, n);
    }
  }
}
function rd(r, e, t) {
  e && rn(e, Bt(r).option, t);
}
function ad(r) {
  new pe(r.oldChildren, r.newChildren, Ni, Ni, r).add(Ri).update(Ri).remove(nd).execute();
}
function Ni(r, e) {
  var t = r && r.name;
  return t != null ? t : Up + e;
}
function Ri(r, e) {
  var t = this.context,
    a = r != null ? t.newChildren[r] : null,
    n = e != null ? t.oldChildren[e] : null;
  _n(t.api, n, t.dataIndex, a, t.seriesModel, t.group);
}
function nd(r) {
  var e = this.context,
    t = e.oldChildren[r];
  t && rn(t, Bt(t).option, e.seriesModel);
}
function bs(r) {
  return r && (r.pathData || r.d);
}
function id(r) {
  return r && (Ct(r, 'pathData') || Ct(r, 'd'));
}
function od(r) {
  r.registerChartView(qp), r.registerSeriesModel(Rp);
}
function Pa(r, e) {
  e = e || {};
  var t = r.coordinateSystem,
    a = r.axis,
    n = {},
    i = a.position,
    o = a.orient,
    s = t.getRect(),
    l = [s.x, s.x + s.width, s.y, s.y + s.height],
    u = { horizontal: { top: l[2], bottom: l[3] }, vertical: { left: l[0], right: l[1] } };
  n.position = [
    o === 'vertical' ? u.vertical[i] : l[0],
    o === 'horizontal' ? u.horizontal[i] : l[3],
  ];
  var v = { horizontal: 0, vertical: 1 };
  n.rotation = (Math.PI / 2) * v[o];
  var c = { top: -1, bottom: 1, right: 1, left: -1 };
  (n.labelDirection = n.tickDirection = n.nameDirection = c[i]),
    r.get(['axisTick', 'inside']) && (n.tickDirection = -n.tickDirection),
    Nt(e.labelInside, r.get(['axisLabel', 'inside'])) && (n.labelDirection = -n.labelDirection);
  var h = e.rotate;
  return (
    h == null && (h = r.get(['axisLabel', 'rotate'])),
    (n.labelRotation = i === 'top' ? -h : h),
    (n.z2 = 1),
    n
  );
}
var sd = ['axisLine', 'axisTickLabel', 'axisName'],
  ld = ['splitArea', 'splitLine'],
  ud = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t.axisPointerClass = 'SingleAxisPointer'), t;
    }
    return (
      (e.prototype.render = function (t, a, n, i) {
        var o = this.group;
        o.removeAll();
        var s = this._axisGroup;
        this._axisGroup = new rt();
        var l = Pa(t),
          u = new Ml(t, l);
        R(sd, u.add, u),
          o.add(this._axisGroup),
          o.add(u.getGroup()),
          R(
            ld,
            function (v) {
              t.get([v, 'show']) && vd[v](this, this.group, this._axisGroup, t);
            },
            this,
          ),
          Pl(s, this._axisGroup, t),
          r.prototype.render.call(this, t, a, n, i);
      }),
      (e.prototype.remove = function () {
        El(this);
      }),
      (e.type = 'singleAxis'),
      e
    );
  })(ko),
  vd = {
    splitLine: function (r, e, t, a) {
      var n = a.axis;
      if (!n.scale.isBlank()) {
        var i = a.getModel('splitLine'),
          o = i.getModel('lineStyle'),
          s = o.get('color');
        s = s instanceof Array ? s : [s];
        for (
          var l = o.get('width'),
            u = a.coordinateSystem.getRect(),
            v = n.isHorizontal(),
            c = [],
            h = 0,
            f = n.getTicksCoords({ tickModel: i }),
            d = [],
            p = [],
            g = 0;
          g < f.length;
          ++g
        ) {
          var m = n.toGlobalCoord(f[g].coord);
          v
            ? ((d[0] = m), (d[1] = u.y), (p[0] = m), (p[1] = u.y + u.height))
            : ((d[0] = u.x), (d[1] = m), (p[0] = u.x + u.width), (p[1] = m));
          var S = new nr({ shape: { x1: d[0], y1: d[1], x2: p[0], y2: p[1] }, silent: !0 });
          Nl(S.shape, l);
          var y = h++ % s.length;
          (c[y] = c[y] || []), c[y].push(S);
        }
        for (var b = o.getLineStyle(['color']), g = 0; g < c.length; ++g)
          e.add(Rl(c[g], { style: gt({ stroke: s[g % s.length] }, b), silent: !0 }));
      }
    },
    splitArea: function (r, e, t, a) {
      Vl(r, t, a, a);
    },
  };
const cd = ud;
var xs = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.getCoordSysModel = function () {
      return this;
    }),
    (e.type = 'singleAxis'),
    (e.layoutMode = 'box'),
    (e.defaultOption = {
      left: '5%',
      top: '5%',
      right: '5%',
      bottom: '5%',
      type: 'value',
      position: 'bottom',
      orient: 'horizontal',
      axisLine: { show: !0, lineStyle: { width: 1, type: 'solid' } },
      tooltip: { show: !0 },
      axisTick: { show: !0, length: 6, lineStyle: { width: 1 } },
      axisLabel: { show: !0, interval: 'auto' },
      splitLine: { show: !0, lineStyle: { type: 'dashed', opacity: 0.2 } },
    }),
    e
  );
})(wr);
ge(xs, kl.prototype);
const aa = xs;
var hd = (function (r) {
  k(e, r);
  function e(t, a, n, i, o) {
    var s = r.call(this, t, a, n) || this;
    return (s.type = i || 'value'), (s.position = o || 'bottom'), s;
  }
  return (
    (e.prototype.isHorizontal = function () {
      var t = this.position;
      return t === 'top' || t === 'bottom';
    }),
    (e.prototype.pointToData = function (t, a) {
      return this.coordinateSystem.pointToData(t)[0];
    }),
    e
  );
})(Gl);
const fd = hd;
var ws = ['single'],
  pd = (function () {
    function r(e, t, a) {
      (this.type = 'single'),
        (this.dimension = 'single'),
        (this.dimensions = ws),
        (this.axisPointerEnabled = !0),
        (this.model = e),
        this._init(e, t, a);
    }
    return (
      (r.prototype._init = function (e, t, a) {
        var n = this.dimension,
          i = new fd(n, Bl(e), [0, 0], e.get('type'), e.get('position')),
          o = i.type === 'category';
        (i.onBand = o && e.get('boundaryGap')),
          (i.inverse = e.get('inverse')),
          (i.orient = e.get('orient')),
          (e.axis = i),
          (i.model = e),
          (i.coordinateSystem = this),
          (this._axis = i);
      }),
      (r.prototype.update = function (e, t) {
        e.eachSeries(function (a) {
          if (a.coordinateSystem === this) {
            var n = a.getData();
            R(
              n.mapDimensionsAll(this.dimension),
              function (i) {
                this._axis.scale.unionExtentFromData(n, i);
              },
              this,
            ),
              zl(this._axis.scale, this._axis.model);
          }
        }, this);
      }),
      (r.prototype.resize = function (e, t) {
        (this._rect = de(
          {
            left: e.get('left'),
            top: e.get('top'),
            right: e.get('right'),
            bottom: e.get('bottom'),
            width: e.get('width'),
            height: e.get('height'),
          },
          { width: t.getWidth(), height: t.getHeight() },
        )),
          this._adjustAxis();
      }),
      (r.prototype.getRect = function () {
        return this._rect;
      }),
      (r.prototype._adjustAxis = function () {
        var e = this._rect,
          t = this._axis,
          a = t.isHorizontal(),
          n = a ? [0, e.width] : [0, e.height],
          i = t.inverse ? 1 : 0;
        t.setExtent(n[i], n[1 - i]), this._updateAxisTransform(t, a ? e.x : e.y);
      }),
      (r.prototype._updateAxisTransform = function (e, t) {
        var a = e.getExtent(),
          n = a[0] + a[1],
          i = e.isHorizontal();
        (e.toGlobalCoord = i
          ? function (o) {
              return o + t;
            }
          : function (o) {
              return n - o + t;
            }),
          (e.toLocalCoord = i
            ? function (o) {
                return o - t;
              }
            : function (o) {
                return n - o + t;
              });
      }),
      (r.prototype.getAxis = function () {
        return this._axis;
      }),
      (r.prototype.getBaseAxis = function () {
        return this._axis;
      }),
      (r.prototype.getAxes = function () {
        return [this._axis];
      }),
      (r.prototype.getTooltipAxes = function () {
        return { baseAxes: [this.getAxis()], otherAxes: [] };
      }),
      (r.prototype.containPoint = function (e) {
        var t = this.getRect(),
          a = this.getAxis(),
          n = a.orient;
        return n === 'horizontal'
          ? a.contain(a.toLocalCoord(e[0])) && e[1] >= t.y && e[1] <= t.y + t.height
          : a.contain(a.toLocalCoord(e[1])) && e[0] >= t.y && e[0] <= t.y + t.height;
      }),
      (r.prototype.pointToData = function (e) {
        var t = this.getAxis();
        return [t.coordToData(t.toLocalCoord(e[t.orient === 'horizontal' ? 0 : 1]))];
      }),
      (r.prototype.dataToPoint = function (e) {
        var t = this.getAxis(),
          a = this.getRect(),
          n = [],
          i = t.orient === 'horizontal' ? 0 : 1;
        return (
          e instanceof Array && (e = e[0]),
          (n[i] = t.toGlobalCoord(t.dataToCoord(+e))),
          (n[1 - i] = i === 0 ? a.y + a.height / 2 : a.x + a.width / 2),
          n
        );
      }),
      (r.prototype.convertToPixel = function (e, t, a) {
        var n = Vi(t);
        return n === this ? this.dataToPoint(a) : null;
      }),
      (r.prototype.convertFromPixel = function (e, t, a) {
        var n = Vi(t);
        return n === this ? this.pointToData(a) : null;
      }),
      r
    );
  })();
function Vi(r) {
  var e = r.seriesModel,
    t = r.singleAxisModel;
  return (t && t.coordinateSystem) || (e && e.coordinateSystem);
}
function dd(r, e) {
  var t = [];
  return (
    r.eachComponent('singleAxis', function (a, n) {
      var i = new pd(a, r, e);
      (i.name = 'single_' + n), i.resize(a, e), (a.coordinateSystem = i), t.push(i);
    }),
    r.eachSeries(function (a) {
      if (a.get('coordinateSystem') === 'singleAxis') {
        var n = a.getReferringComponents('singleAxis', Ro).models[0];
        a.coordinateSystem = n && n.coordinateSystem;
      }
    }),
    t
  );
}
var gd = { create: dd, dimensions: ws };
const yd = gd;
var ki = ['x', 'y'],
  md = ['width', 'height'],
  Sd = (function (r) {
    k(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.makeElOption = function (t, a, n, i, o) {
        var s = n.axis,
          l = s.coordinateSystem,
          u = na(l, 1 - cr(s)),
          v = l.dataToPoint(a)[0],
          c = i.get('type');
        if (c && c !== 'none') {
          var h = Ol(i),
            f = _d[c](s, v, u);
          (f.style = h), (t.graphicKey = f.type), (t.pointer = f);
        }
        var d = Pa(n);
        Hl(a, t, d, n, i, o);
      }),
      (e.prototype.getHandleTransform = function (t, a, n) {
        var i = Pa(a, { labelInside: !1 });
        i.labelMargin = n.get(['handle', 'margin']);
        var o = Fl(a.axis, t, i);
        return { x: o[0], y: o[1], rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0) };
      }),
      (e.prototype.updateHandleTransform = function (t, a, n, i) {
        var o = n.axis,
          s = o.coordinateSystem,
          l = cr(o),
          u = na(s, l),
          v = [t.x, t.y];
        (v[l] += a[l]), (v[l] = Math.min(u[1], v[l])), (v[l] = Math.max(u[0], v[l]));
        var c = na(s, 1 - l),
          h = (c[1] + c[0]) / 2,
          f = [h, h];
        return (
          (f[l] = v[l]),
          {
            x: v[0],
            y: v[1],
            rotation: t.rotation,
            cursorPoint: f,
            tooltipOption: { verticalAlign: 'middle' },
          }
        );
      }),
      e
    );
  })($l),
  _d = {
    line: function (r, e, t) {
      var a = Wl([e, t[0]], [e, t[1]], cr(r));
      return { type: 'Line', subPixelOptimize: !0, shape: a };
    },
    shadow: function (r, e, t) {
      var a = r.getBandWidth(),
        n = t[1] - t[0];
      return { type: 'Rect', shape: Ul([e - a / 2, t[0]], [a, n], cr(r)) };
    },
  };
function cr(r) {
  return r.isHorizontal() ? 0 : 1;
}
function na(r, e) {
  var t = r.getRect();
  return [t[ki[e]], t[ki[e]] + t[md[e]]];
}
const bd = Sd;
var xd = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (e.type = 'single'), e;
})(Ir);
function wd(r) {
  Z(Go),
    ko.registerAxisPointerClass('SingleAxisPointer', bd),
    r.registerComponentView(xd),
    r.registerComponentView(cd),
    r.registerComponentModel(aa),
    Zl(r, 'single', aa, aa.defaultOption),
    r.registerCoordinateSystem('single', yd);
}
var Id = ['rect', 'polygon', 'keep', 'clear'];
function Ld(r, e) {
  var t = Gt(r ? r.brush : []);
  if (t.length) {
    var a = [];
    R(t, function (l) {
      var u = l.hasOwnProperty('toolbox') ? l.toolbox : [];
      u instanceof Array && (a = a.concat(u));
    });
    var n = r && r.toolbox;
    F(n) && (n = n[0]), n || ((n = { feature: {} }), (r.toolbox = [n]));
    var i = n.feature || (n.feature = {}),
      o = i.brush || (i.brush = {}),
      s = o.type || (o.type = []);
    s.push.apply(s, a), Dd(s), e && !s.length && s.push.apply(s, Id);
  }
}
function Dd(r) {
  var e = {};
  R(r, function (t) {
    e[t] = 1;
  }),
    (r.length = 0),
    R(e, function (t, a) {
      r.push(a);
    });
}
function Td(r) {
  var e = r.brushType,
    t = {
      point: function (a) {
        return Gi[e].point(a, t, r);
      },
      rect: function (a) {
        return Gi[e].rect(a, t, r);
      },
    };
  return t;
}
var Gi = {
  lineX: Bi(0),
  lineY: Bi(1),
  rect: {
    point: function (r, e, t) {
      return r && t.boundingRect.contain(r[0], r[1]);
    },
    rect: function (r, e, t) {
      return r && t.boundingRect.intersect(r);
    },
  },
  polygon: {
    point: function (r, e, t) {
      return r && t.boundingRect.contain(r[0], r[1]) && me(t.range, r[0], r[1]);
    },
    rect: function (r, e, t) {
      var a = t.range;
      if (!r || a.length <= 1) return !1;
      var n = r.x,
        i = r.y,
        o = r.width,
        s = r.height,
        l = a[0];
      if (
        me(a, n, i) ||
        me(a, n + o, i) ||
        me(a, n, i + s) ||
        me(a, n + o, i + s) ||
        dt.create(r).contain(l[0], l[1]) ||
        $e(n, i, n + o, i, a) ||
        $e(n, i, n, i + s, a) ||
        $e(n + o, i, n + o, i + s, a) ||
        $e(n, i + s, n + o, i + s, a)
      )
        return !0;
    },
  },
};
function Bi(r) {
  var e = ['x', 'y'],
    t = ['width', 'height'];
  return {
    point: function (a, n, i) {
      if (a) {
        var o = i.range,
          s = a[r];
        return be(s, o);
      }
    },
    rect: function (a, n, i) {
      if (a) {
        var o = i.range,
          s = [a[e[r]], a[e[r]] + a[t[r]]];
        return s[1] < s[0] && s.reverse(), be(s[0], o) || be(s[1], o) || be(o[0], s) || be(o[1], s);
      }
    },
  };
}
function be(r, e) {
  return e[0] <= r && r <= e[1];
}
var zi = ['inBrush', 'outOfBrush'],
  ia = '__ecBrushSelect',
  Ea = '__ecInBrushSelectEvent';
function Is(r) {
  r.eachComponent({ mainType: 'brush' }, function (e) {
    var t = (e.brushTargetManager = new ql(e.option, r));
    t.setInputRanges(e.areas, r);
  });
}
function Ad(r, e, t) {
  var a = [],
    n,
    i;
  r.eachComponent({ mainType: 'brush' }, function (o) {
    t &&
      t.type === 'takeGlobalCursor' &&
      o.setBrushOption(t.key === 'brush' ? t.brushOption : { brushType: !1 });
  }),
    Is(r),
    r.eachComponent({ mainType: 'brush' }, function (o, s) {
      var l = { brushId: o.id, brushIndex: s, brushName: o.name, areas: Ne(o.areas), selected: [] };
      a.push(l);
      var u = o.option,
        v = u.brushLink,
        c = [],
        h = [],
        f = [],
        d = !1;
      s || ((n = u.throttleType), (i = u.throttleDelay));
      var p = $(o.areas, function (_) {
          var x = Ed[_.brushType],
            w = gt({ boundingRect: x ? x(_) : void 0 }, _);
          return (w.selectors = Td(w)), w;
        }),
        g = Yl(o.option, zi, function (_) {
          _.mappingMethod = 'fixed';
        });
      F(v) &&
        R(v, function (_) {
          c[_] = 1;
        });
      function m(_) {
        return v === 'all' || !!c[_];
      }
      function S(_) {
        return !!_.length;
      }
      r.eachSeries(function (_, x) {
        var w = (f[x] = []);
        _.subType === 'parallel' ? y(_, x) : b(_, x, w);
      });
      function y(_, x) {
        var w = _.coordinateSystem;
        (d = d || w.hasAxisBrushed()),
          m(x) &&
            w.eachActiveState(_.getData(), function (I, L) {
              I === 'active' && (h[L] = 1);
            });
      }
      function b(_, x, w) {
        if (
          !(!_.brushSelector || Pd(o, x)) &&
          (R(p, function (L) {
            o.brushTargetManager.controlSeries(L, _, r) && w.push(L), (d = d || S(w));
          }),
          m(x) && S(w))
        ) {
          var I = _.getData();
          I.each(function (L) {
            Oi(_, w, I, L) && (h[L] = 1);
          });
        }
      }
      r.eachSeries(function (_, x) {
        var w = { seriesId: _.id, seriesIndex: x, seriesName: _.name, dataIndex: [] };
        l.selected.push(w);
        var I = f[x],
          L = _.getData(),
          D = m(x)
            ? function (T) {
                return h[T] ? (w.dataIndex.push(L.getRawIndex(T)), 'inBrush') : 'outOfBrush';
              }
            : function (T) {
                return Oi(_, I, L, T)
                  ? (w.dataIndex.push(L.getRawIndex(T)), 'inBrush')
                  : 'outOfBrush';
              };
        (m(x) ? d : S(I)) && Xl(zi, g, L, D);
      });
    }),
    Cd(e, n, i, a, t);
}
function Cd(r, e, t, a, n) {
  if (n) {
    var i = r.getZr();
    if (!i[Ea]) {
      i[ia] || (i[ia] = Md);
      var o = Kl(i, ia, t, e);
      o(r, a);
    }
  }
}
function Md(r, e) {
  if (!r.isDisposed()) {
    var t = r.getZr();
    (t[Ea] = !0), r.dispatchAction({ type: 'brushSelect', batch: e }), (t[Ea] = !1);
  }
}
function Oi(r, e, t, a) {
  for (var n = 0, i = e.length; n < i; n++) {
    var o = e[n];
    if (r.brushSelector(a, t, o.selectors, o)) return !0;
  }
}
function Pd(r, e) {
  var t = r.option.seriesIndex;
  return t != null && t !== 'all' && (F(t) ? It(t, e) < 0 : e !== t);
}
var Ed = {
  rect: function (r) {
    return Hi(r.range);
  },
  polygon: function (r) {
    for (var e, t = r.range, a = 0, n = t.length; a < n; a++) {
      e = e || [
        [1 / 0, -1 / 0],
        [1 / 0, -1 / 0],
      ];
      var i = t[a];
      i[0] < e[0][0] && (e[0][0] = i[0]),
        i[0] > e[0][1] && (e[0][1] = i[0]),
        i[1] < e[1][0] && (e[1][0] = i[1]),
        i[1] > e[1][1] && (e[1][1] = i[1]);
    }
    return e && Hi(e);
  },
};
function Hi(r) {
  return new dt(r[0][0], r[1][0], r[0][1] - r[0][0], r[1][1] - r[1][0]);
}
var Nd = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.init = function (t, a) {
      (this.ecModel = t),
        (this.api = a),
        this.model,
        (this._brushController = new jl(a.getZr())).on('brush', st(this._onBrush, this)).mount();
    }),
    (e.prototype.render = function (t, a, n, i) {
      (this.model = t), this._updateController(t, a, n, i);
    }),
    (e.prototype.updateTransform = function (t, a, n, i) {
      Is(a), this._updateController(t, a, n, i);
    }),
    (e.prototype.updateVisual = function (t, a, n, i) {
      this.updateTransform(t, a, n, i);
    }),
    (e.prototype.updateView = function (t, a, n, i) {
      this._updateController(t, a, n, i);
    }),
    (e.prototype._updateController = function (t, a, n, i) {
      (!i || i.$from !== t.id) &&
        this._brushController
          .setPanels(t.brushTargetManager.makePanelOpts(n))
          .enableBrush(t.brushOption)
          .updateCovers(t.areas.slice());
    }),
    (e.prototype.dispose = function () {
      this._brushController.dispose();
    }),
    (e.prototype._onBrush = function (t) {
      var a = this.model.id,
        n = this.model.brushTargetManager.setOutputRanges(t.areas, this.ecModel);
      (!t.isEnd || t.removeOnClick) &&
        this.api.dispatchAction({ type: 'brush', brushId: a, areas: Ne(n), $from: a }),
        t.isEnd &&
          this.api.dispatchAction({ type: 'brushEnd', brushId: a, areas: Ne(n), $from: a });
    }),
    (e.type = 'brush'),
    e
  );
})(Ir);
const Rd = Nd;
var Vd = '#ddd',
  kd = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t.areas = []), (t.brushOption = {}), t;
    }
    return (
      (e.prototype.optionUpdated = function (t, a) {
        var n = this.option;
        !a && Ql(n, t, ['inBrush', 'outOfBrush']);
        var i = (n.inBrush = n.inBrush || {});
        (n.outOfBrush = n.outOfBrush || { color: Vd }), i.hasOwnProperty('liftZ') || (i.liftZ = 5);
      }),
      (e.prototype.setAreas = function (t) {
        t &&
          (this.areas = $(
            t,
            function (a) {
              return Fi(this.option, a);
            },
            this,
          ));
      }),
      (e.prototype.setBrushOption = function (t) {
        (this.brushOption = Fi(this.option, t)), (this.brushType = this.brushOption.brushType);
      }),
      (e.type = 'brush'),
      (e.dependencies = ['geo', 'grid', 'xAxis', 'yAxis', 'parallel', 'series']),
      (e.defaultOption = {
        seriesIndex: 'all',
        brushType: 'rect',
        brushMode: 'single',
        transformable: !0,
        brushStyle: { borderWidth: 1, color: 'rgba(210,219,238,0.3)', borderColor: '#D2DBEE' },
        throttleType: 'fixRate',
        throttleDelay: 0,
        removeOnClick: !0,
        z: 1e4,
      }),
      e
    );
  })(wr);
function Fi(r, e) {
  return ie(
    {
      brushType: r.brushType,
      brushMode: r.brushMode,
      transformable: r.transformable,
      brushStyle: new qt(r.brushStyle).getItemStyle(),
      removeOnClick: r.removeOnClick,
      z: r.z,
    },
    e,
    !0,
  );
}
const Gd = kd;
var Bd = ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
  zd = (function (r) {
    k(e, r);
    function e() {
      return (r !== null && r.apply(this, arguments)) || this;
    }
    return (
      (e.prototype.render = function (t, a, n) {
        var i, o, s;
        a.eachComponent({ mainType: 'brush' }, function (l) {
          (i = l.brushType), (o = l.brushOption.brushMode || 'single'), (s = s || !!l.areas.length);
        }),
          (this._brushType = i),
          (this._brushMode = o),
          R(t.get('type', !0), function (l) {
            t.setIconStatus(
              l,
              (l === 'keep' ? o === 'multiple' : l === 'clear' ? s : l === i)
                ? 'emphasis'
                : 'normal',
            );
          });
      }),
      (e.prototype.updateView = function (t, a, n) {
        this.render(t, a, n);
      }),
      (e.prototype.getIcons = function () {
        var t = this.model,
          a = t.get('icon', !0),
          n = {};
        return (
          R(t.get('type', !0), function (i) {
            a[i] && (n[i] = a[i]);
          }),
          n
        );
      }),
      (e.prototype.onclick = function (t, a, n) {
        var i = this._brushType,
          o = this._brushMode;
        n === 'clear'
          ? (a.dispatchAction({ type: 'axisAreaSelect', intervals: [] }),
            a.dispatchAction({ type: 'brush', command: 'clear', areas: [] }))
          : a.dispatchAction({
              type: 'takeGlobalCursor',
              key: 'brush',
              brushOption: {
                brushType: n === 'keep' ? i : i === n ? !1 : n,
                brushMode: n === 'keep' ? (o === 'multiple' ? 'single' : 'multiple') : o,
              },
            });
      }),
      (e.getDefaultOption = function (t) {
        var a = {
          show: !0,
          type: Bd.slice(),
          icon: {
            rect: 'M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13',
            polygon:
              'M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2',
            lineX:
              'M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4',
            lineY:
              'M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4',
            keep: 'M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z',
            clear:
              'M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2',
          },
          title: t.getLocaleModel().get(['toolbox', 'brush', 'title']),
        };
        return a;
      }),
      e
    );
  })(Jl);
const Od = zd;
function Hd(r) {
  r.registerComponentView(Rd),
    r.registerComponentModel(Gd),
    r.registerPreprocessor(Ld),
    r.registerVisual(r.PRIORITY.VISUAL.BRUSH, Ad),
    r.registerAction({ type: 'brush', event: 'brush', update: 'updateVisual' }, function (e, t) {
      t.eachComponent({ mainType: 'brush', query: e }, function (a) {
        a.setAreas(e.areas);
      });
    }),
    r.registerAction({ type: 'brushSelect', event: 'brushSelected', update: 'none' }, Ce),
    r.registerAction({ type: 'brushEnd', event: 'brushEnd', update: 'none' }, Ce),
    tu('brush', Od);
}
function xn(r, e) {
  if (!r) return !1;
  for (var t = F(r) ? r : [r], a = 0; a < t.length; a++) if (t[a] && t[a][e]) return !0;
  return !1;
}
function je(r) {
  Xa(r, 'label', ['show']);
}
var Qe = Lt(),
  Ls = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), (t.createdBySelf = !1), t;
    }
    return (
      (e.prototype.init = function (t, a, n) {
        this.mergeDefaultAndTheme(t, n), this._mergeOption(t, n, !1, !0);
      }),
      (e.prototype.isAnimationEnabled = function () {
        if (Bo.node) return !1;
        var t = this.__hostSeries;
        return this.getShallow('animation') && t && t.isAnimationEnabled();
      }),
      (e.prototype.mergeOption = function (t, a) {
        this._mergeOption(t, a, !1, !1);
      }),
      (e.prototype._mergeOption = function (t, a, n, i) {
        var o = this.mainType;
        n ||
          a.eachSeries(function (s) {
            var l = s.get(this.mainType, !0),
              u = Qe(s)[o];
            if (!l || !l.data) {
              Qe(s)[o] = null;
              return;
            }
            u
              ? u._mergeOption(l, a, !0)
              : (i && je(l),
                R(l.data, function (v) {
                  v instanceof Array ? (je(v[0]), je(v[1])) : je(v);
                }),
                (u = this.createMarkerModelFromSeries(l, this, a)),
                U(u, {
                  mainType: this.mainType,
                  seriesIndex: s.seriesIndex,
                  name: s.name,
                  createdBySelf: !0,
                }),
                (u.__hostSeries = s)),
              (Qe(s)[o] = u);
          }, this);
      }),
      (e.prototype.formatTooltip = function (t, a, n) {
        var i = this.getData(),
          o = this.getRawValue(t),
          s = i.getName(t);
        return Ot('section', {
          header: this.name,
          blocks: [Ot('nameValue', { name: s, value: o, noName: !s, noValue: o == null })],
        });
      }),
      (e.prototype.getData = function () {
        return this._data;
      }),
      (e.prototype.setData = function (t) {
        this._data = t;
      }),
      (e.getMarkerModelFromSeries = function (t, a) {
        return Qe(t)[a];
      }),
      (e.type = 'marker'),
      (e.dependencies = ['series', 'grid', 'polar', 'geo']),
      e
    );
  })(wr);
ge(Ls, eu.prototype);
const te = Ls;
var Fd = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.createMarkerModelFromSeries = function (t, a, n) {
      return new e(t, a, n);
    }),
    (e.type = 'markPoint'),
    (e.defaultOption = {
      z: 5,
      symbol: 'pin',
      symbolSize: 50,
      tooltip: { trigger: 'item' },
      label: { show: !0, position: 'inside' },
      itemStyle: { borderWidth: 2 },
      emphasis: { label: { show: !0 } },
    }),
    e
  );
})(te);
const $d = Fd;
function Na(r) {
  return !(isNaN(parseFloat(r.x)) && isNaN(parseFloat(r.y)));
}
function Wd(r) {
  return !isNaN(parseFloat(r.x)) && !isNaN(parseFloat(r.y));
}
function Je(r, e, t, a, n, i) {
  var o = [],
    s = ru(e, a),
    l = s ? e.getCalculationInfo('stackResultDimension') : a,
    u = wn(e, l, r),
    v = e.indicesOfNearest(l, u)[0];
  (o[n] = e.get(t, v)), (o[i] = e.get(l, v));
  var c = e.get(a, v),
    h = au(e.get(a, v));
  return (h = Math.min(h, 20)), h >= 0 && (o[i] = +o[i].toFixed(h)), [o, c];
}
var oa = {
  min: et(Je, 'min'),
  max: et(Je, 'max'),
  average: et(Je, 'average'),
  median: et(Je, 'median'),
};
function Ge(r, e) {
  if (e) {
    var t = r.getData(),
      a = r.coordinateSystem,
      n = a && a.dimensions;
    if (!Wd(e) && !F(e.coord) && F(n)) {
      var i = Ds(e, t, a, r);
      if (((e = Ne(e)), e.type && oa[e.type] && i.baseAxis && i.valueAxis)) {
        var o = It(n, i.baseAxis.dim),
          s = It(n, i.valueAxis.dim),
          l = oa[e.type](t, i.baseDataDim, i.valueDataDim, o, s);
        (e.coord = l[0]), (e.value = l[1]);
      } else
        e.coord = [
          e.xAxis != null ? e.xAxis : e.radiusAxis,
          e.yAxis != null ? e.yAxis : e.angleAxis,
        ];
    }
    if (e.coord == null || !F(n)) e.coord = [];
    else
      for (var u = e.coord, v = 0; v < 2; v++)
        oa[u[v]] && (u[v] = wn(t, t.mapDimension(n[v]), u[v]));
    return e;
  }
}
function Ds(r, e, t, a) {
  var n = {};
  return (
    r.valueIndex != null || r.valueDim != null
      ? ((n.valueDataDim = r.valueIndex != null ? e.getDimension(r.valueIndex) : r.valueDim),
        (n.valueAxis = t.getAxis(Ud(a, n.valueDataDim))),
        (n.baseAxis = t.getOtherAxis(n.valueAxis)),
        (n.baseDataDim = e.mapDimension(n.baseAxis.dim)))
      : ((n.baseAxis = a.getBaseAxis()),
        (n.valueAxis = t.getOtherAxis(n.baseAxis)),
        (n.baseDataDim = e.mapDimension(n.baseAxis.dim)),
        (n.valueDataDim = e.mapDimension(n.valueAxis.dim))),
    n
  );
}
function Ud(r, e) {
  var t = r.getData().getDimensionInfo(e);
  return t && t.coordDim;
}
function Be(r, e) {
  return r && r.containData && e.coord && !Na(e) ? r.containData(e.coord) : !0;
}
function Zd(r, e, t) {
  return r && r.containZone && e.coord && t.coord && !Na(e) && !Na(t)
    ? r.containZone(e.coord, t.coord)
    : !0;
}
function Ts(r, e) {
  return r
    ? function (t, a, n, i) {
        var o = i < 2 ? t.coord && t.coord[i] : t.value;
        return ir(o, e[i]);
      }
    : function (t, a, n, i) {
        return ir(t.value, e[i]);
      };
}
function wn(r, e, t) {
  if (t === 'average') {
    var a = 0,
      n = 0;
    return (
      r.each(e, function (i, o) {
        isNaN(i) || ((a += i), n++);
      }),
      a / n
    );
  } else return t === 'median' ? r.getMedian(e) : r.getDataExtent(e)[t === 'max' ? 1 : 0];
}
var sa = Lt(),
  Yd = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.init = function () {
        this.markerGroupMap = mt();
      }),
      (e.prototype.render = function (t, a, n) {
        var i = this,
          o = this.markerGroupMap;
        o.each(function (s) {
          sa(s).keep = !1;
        }),
          a.eachSeries(function (s) {
            var l = te.getMarkerModelFromSeries(s, i.type);
            l && i.renderSeries(s, l, a, n);
          }),
          o.each(function (s) {
            !sa(s).keep && i.group.remove(s.group);
          });
      }),
      (e.prototype.markKeep = function (t) {
        sa(t).keep = !0;
      }),
      (e.prototype.toggleBlurSeries = function (t, a) {
        var n = this;
        R(t, function (i) {
          var o = te.getMarkerModelFromSeries(i, n.type);
          if (o) {
            var s = o.getData();
            s.eachItemGraphicEl(function (l) {
              l && (a ? nu(l) : iu(l));
            });
          }
        });
      }),
      (e.type = 'marker'),
      e
    );
  })(Ir);
const In = Yd;
function $i(r, e, t) {
  var a = e.coordinateSystem;
  r.each(function (n) {
    var i = r.getItemModel(n),
      o,
      s = z(i.get('x'), t.getWidth()),
      l = z(i.get('y'), t.getHeight());
    if (!isNaN(s) && !isNaN(l)) o = [s, l];
    else if (e.getMarkerPosition) o = e.getMarkerPosition(r.getValues(r.dimensions, n));
    else if (a) {
      var u = r.get(a.dimensions[0], n),
        v = r.get(a.dimensions[1], n);
      o = a.dataToPoint([u, v]);
    }
    isNaN(s) || (o[0] = s), isNaN(l) || (o[1] = l), r.setItemLayout(n, o);
  });
}
var Xd = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.updateTransform = function (t, a, n) {
      a.eachSeries(function (i) {
        var o = te.getMarkerModelFromSeries(i, 'markPoint');
        o && ($i(o.getData(), i, n), this.markerGroupMap.get(i.id).updateLayout());
      }, this);
    }),
    (e.prototype.renderSeries = function (t, a, n, i) {
      var o = t.coordinateSystem,
        s = t.id,
        l = t.getData(),
        u = this.markerGroupMap,
        v = u.get(s) || u.set(s, new Za()),
        c = qd(o, t, a);
      a.setData(c),
        $i(a.getData(), t, i),
        c.each(function (h) {
          var f = c.getItemModel(h),
            d = f.getShallow('symbol'),
            p = f.getShallow('symbolSize'),
            g = f.getShallow('symbolRotate'),
            m = f.getShallow('symbolOffset'),
            S = f.getShallow('symbolKeepAspect');
          if (nt(d) || nt(p) || nt(g) || nt(m)) {
            var y = a.getRawValue(h),
              b = a.getDataParams(h);
            nt(d) && (d = d(y, b)),
              nt(p) && (p = p(y, b)),
              nt(g) && (g = g(y, b)),
              nt(m) && (m = m(y, b));
          }
          var _ = f.getModel('itemStyle').getItemStyle(),
            x = an(l, 'color');
          _.fill || (_.fill = x),
            c.setItemVisual(h, {
              symbol: d,
              symbolSize: p,
              symbolRotate: g,
              symbolOffset: m,
              symbolKeepAspect: S,
              style: _,
            });
        }),
        v.updateData(c),
        this.group.add(v.group),
        c.eachItemGraphicEl(function (h) {
          h.traverse(function (f) {
            it(f).dataModel = a;
          });
        }),
        this.markKeep(v),
        (v.group.silent = a.get('silent') || t.get('silent'));
    }),
    (e.type = 'markPoint'),
    e
  );
})(In);
function qd(r, e, t) {
  var a;
  r
    ? (a = $(r && r.dimensions, function (s) {
        var l = e.getData().getDimensionInfo(e.getData().mapDimension(s)) || {};
        return U(U({}, l), { name: s, ordinalMeta: null });
      }))
    : (a = [{ name: 'value', type: 'float' }]);
  var n = new bt(a, t),
    i = $(t.get('data'), et(Ge, e));
  r && (i = At(i, et(Be, r)));
  var o = Ts(!!r, a);
  return n.initData(i, null, o), n;
}
const Kd = Xd;
function jd(r) {
  r.registerComponentModel($d),
    r.registerComponentView(Kd),
    r.registerPreprocessor(function (e) {
      xn(e.series, 'markPoint') && (e.markPoint = e.markPoint || {});
    });
}
var Qd = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.createMarkerModelFromSeries = function (t, a, n) {
      return new e(t, a, n);
    }),
    (e.type = 'markLine'),
    (e.defaultOption = {
      z: 5,
      symbol: ['circle', 'arrow'],
      symbolSize: [8, 16],
      symbolOffset: 0,
      precision: 2,
      tooltip: { trigger: 'item' },
      label: { show: !0, position: 'end', distance: 5 },
      lineStyle: { type: 'dashed' },
      emphasis: { label: { show: !0 }, lineStyle: { width: 3 } },
      animationEasing: 'linear',
    }),
    e
  );
})(te);
const Jd = Qd;
var tr = Lt(),
  tg = function (r, e, t, a) {
    var n = r.getData(),
      i;
    if (F(a)) i = a;
    else {
      var o = a.type;
      if (
        o === 'min' ||
        o === 'max' ||
        o === 'average' ||
        o === 'median' ||
        a.xAxis != null ||
        a.yAxis != null
      ) {
        var s = void 0,
          l = void 0;
        if (a.yAxis != null || a.xAxis != null)
          (s = e.getAxis(a.yAxis != null ? 'y' : 'x')), (l = Nt(a.yAxis, a.xAxis));
        else {
          var u = Ds(a, n, e, r);
          s = u.valueAxis;
          var v = ou(n, u.valueDataDim);
          l = wn(n, v, o);
        }
        var c = s.dim === 'x' ? 0 : 1,
          h = 1 - c,
          f = Ne(a),
          d = { coord: [] };
        (f.type = null), (f.coord = []), (f.coord[h] = -1 / 0), (d.coord[h] = 1 / 0);
        var p = t.get('precision');
        p >= 0 && Ht(l) && (l = +l.toFixed(Math.min(p, 20))),
          (f.coord[c] = d.coord[c] = l),
          (i = [f, d, { type: o, valueIndex: a.valueIndex, value: l }]);
      } else i = [];
    }
    var g = [Ge(r, i[0]), Ge(r, i[1]), U({}, i[2])];
    return (g[2].type = g[2].type || null), ie(g[2], g[0]), ie(g[2], g[1]), g;
  };
function hr(r) {
  return !isNaN(r) && !isFinite(r);
}
function Wi(r, e, t, a) {
  var n = 1 - r,
    i = a.dimensions[r];
  return hr(e[n]) && hr(t[n]) && e[r] === t[r] && a.getAxis(i).containData(e[r]);
}
function eg(r, e) {
  if (r.type === 'cartesian2d') {
    var t = e[0].coord,
      a = e[1].coord;
    if (t && a && (Wi(1, t, a, r) || Wi(0, t, a, r))) return !0;
  }
  return Be(r, e[0]) && Be(r, e[1]);
}
function la(r, e, t, a, n) {
  var i = a.coordinateSystem,
    o = r.getItemModel(e),
    s,
    l = z(o.get('x'), n.getWidth()),
    u = z(o.get('y'), n.getHeight());
  if (!isNaN(l) && !isNaN(u)) s = [l, u];
  else {
    if (a.getMarkerPosition) s = a.getMarkerPosition(r.getValues(r.dimensions, e));
    else {
      var v = i.dimensions,
        c = r.get(v[0], e),
        h = r.get(v[1], e);
      s = i.dataToPoint([c, h]);
    }
    if (xr(i, 'cartesian2d')) {
      var f = i.getAxis('x'),
        d = i.getAxis('y'),
        v = i.dimensions;
      hr(r.get(v[0], e))
        ? (s[0] = f.toGlobalCoord(f.getExtent()[t ? 0 : 1]))
        : hr(r.get(v[1], e)) && (s[1] = d.toGlobalCoord(d.getExtent()[t ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  r.setItemLayout(e, s);
}
var rg = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.updateTransform = function (t, a, n) {
      a.eachSeries(function (i) {
        var o = te.getMarkerModelFromSeries(i, 'markLine');
        if (o) {
          var s = o.getData(),
            l = tr(o).from,
            u = tr(o).to;
          l.each(function (v) {
            la(l, v, !0, i, n), la(u, v, !1, i, n);
          }),
            s.each(function (v) {
              s.setItemLayout(v, [l.getItemLayout(v), u.getItemLayout(v)]);
            }),
            this.markerGroupMap.get(i.id).updateLayout();
        }
      }, this);
    }),
    (e.prototype.renderSeries = function (t, a, n, i) {
      var o = t.coordinateSystem,
        s = t.id,
        l = t.getData(),
        u = this.markerGroupMap,
        v = u.get(s) || u.set(s, new dn());
      this.group.add(v.group);
      var c = ag(o, t, a),
        h = c.from,
        f = c.to,
        d = c.line;
      (tr(a).from = h), (tr(a).to = f), a.setData(d);
      var p = a.get('symbol'),
        g = a.get('symbolSize'),
        m = a.get('symbolRotate'),
        S = a.get('symbolOffset');
      F(p) || (p = [p, p]),
        F(g) || (g = [g, g]),
        F(m) || (m = [m, m]),
        F(S) || (S = [S, S]),
        c.from.each(function (b) {
          y(h, b, !0), y(f, b, !1);
        }),
        d.each(function (b) {
          var _ = d.getItemModel(b).getModel('lineStyle').getLineStyle();
          d.setItemLayout(b, [h.getItemLayout(b), f.getItemLayout(b)]),
            _.stroke == null && (_.stroke = h.getItemVisual(b, 'style').fill),
            d.setItemVisual(b, {
              fromSymbolKeepAspect: h.getItemVisual(b, 'symbolKeepAspect'),
              fromSymbolOffset: h.getItemVisual(b, 'symbolOffset'),
              fromSymbolRotate: h.getItemVisual(b, 'symbolRotate'),
              fromSymbolSize: h.getItemVisual(b, 'symbolSize'),
              fromSymbol: h.getItemVisual(b, 'symbol'),
              toSymbolKeepAspect: f.getItemVisual(b, 'symbolKeepAspect'),
              toSymbolOffset: f.getItemVisual(b, 'symbolOffset'),
              toSymbolRotate: f.getItemVisual(b, 'symbolRotate'),
              toSymbolSize: f.getItemVisual(b, 'symbolSize'),
              toSymbol: f.getItemVisual(b, 'symbol'),
              style: _,
            });
        }),
        v.updateData(d),
        c.line.eachItemGraphicEl(function (b) {
          (it(b).dataModel = a),
            b.traverse(function (_) {
              it(_).dataModel = a;
            });
        });
      function y(b, _, x) {
        var w = b.getItemModel(_);
        la(b, _, x, t, i);
        var I = w.getModel('itemStyle').getItemStyle();
        I.fill == null && (I.fill = an(l, 'color')),
          b.setItemVisual(_, {
            symbolKeepAspect: w.get('symbolKeepAspect'),
            symbolOffset: $t(w.get('symbolOffset', !0), S[x ? 0 : 1]),
            symbolRotate: $t(w.get('symbolRotate', !0), m[x ? 0 : 1]),
            symbolSize: $t(w.get('symbolSize'), g[x ? 0 : 1]),
            symbol: $t(w.get('symbol', !0), p[x ? 0 : 1]),
            style: I,
          });
      }
      this.markKeep(v), (v.group.silent = a.get('silent') || t.get('silent'));
    }),
    (e.type = 'markLine'),
    e
  );
})(In);
function ag(r, e, t) {
  var a;
  r
    ? (a = $(r && r.dimensions, function (u) {
        var v = e.getData().getDimensionInfo(e.getData().mapDimension(u)) || {};
        return U(U({}, v), { name: u, ordinalMeta: null });
      }))
    : (a = [{ name: 'value', type: 'float' }]);
  var n = new bt(a, t),
    i = new bt(a, t),
    o = new bt([], t),
    s = $(t.get('data'), et(tg, e, r, t));
  r && (s = At(s, et(eg, r)));
  var l = Ts(!!r, a);
  return (
    n.initData(
      $(s, function (u) {
        return u[0];
      }),
      null,
      l,
    ),
    i.initData(
      $(s, function (u) {
        return u[1];
      }),
      null,
      l,
    ),
    o.initData(
      $(s, function (u) {
        return u[2];
      }),
    ),
    (o.hasItemOption = !0),
    { from: n, to: i, line: o }
  );
}
const ng = rg;
function ig(r) {
  r.registerComponentModel(Jd),
    r.registerComponentView(ng),
    r.registerPreprocessor(function (e) {
      xn(e.series, 'markLine') && (e.markLine = e.markLine || {});
    });
}
var og = (function (r) {
  k(e, r);
  function e() {
    var t = (r !== null && r.apply(this, arguments)) || this;
    return (t.type = e.type), t;
  }
  return (
    (e.prototype.createMarkerModelFromSeries = function (t, a, n) {
      return new e(t, a, n);
    }),
    (e.type = 'markArea'),
    (e.defaultOption = {
      z: 1,
      tooltip: { trigger: 'item' },
      animation: !1,
      label: { show: !0, position: 'top' },
      itemStyle: { borderWidth: 0 },
      emphasis: { label: { show: !0, position: 'top' } },
    }),
    e
  );
})(te);
const sg = og;
var er = Lt(),
  lg = function (r, e, t, a) {
    var n = a[0],
      i = a[1];
    if (!(!n || !i)) {
      var o = Ge(r, n),
        s = Ge(r, i),
        l = o.coord,
        u = s.coord;
      (l[0] = Nt(l[0], -1 / 0)),
        (l[1] = Nt(l[1], -1 / 0)),
        (u[0] = Nt(u[0], 1 / 0)),
        (u[1] = Nt(u[1], 1 / 0));
      var v = No([{}, o, s]);
      return (
        (v.coord = [o.coord, s.coord]), (v.x0 = o.x), (v.y0 = o.y), (v.x1 = s.x), (v.y1 = s.y), v
      );
    }
  };
function fr(r) {
  return !isNaN(r) && !isFinite(r);
}
function Ui(r, e, t, a) {
  var n = 1 - r;
  return fr(e[n]) && fr(t[n]);
}
function ug(r, e) {
  var t = e.coord[0],
    a = e.coord[1],
    n = { coord: t, x: e.x0, y: e.y0 },
    i = { coord: a, x: e.x1, y: e.y1 };
  return xr(r, 'cartesian2d')
    ? t && a && (Ui(1, t, a) || Ui(0, t, a))
      ? !0
      : Zd(r, n, i)
    : Be(r, n) || Be(r, i);
}
function Zi(r, e, t, a, n) {
  var i = a.coordinateSystem,
    o = r.getItemModel(e),
    s,
    l = z(o.get(t[0]), n.getWidth()),
    u = z(o.get(t[1]), n.getHeight());
  if (!isNaN(l) && !isNaN(u)) s = [l, u];
  else {
    if (a.getMarkerPosition) {
      var v = r.getValues(['x0', 'y0'], e),
        c = r.getValues(['x1', 'y1'], e),
        h = i.clampData(v),
        f = i.clampData(c),
        d = [];
      t[0] === 'x0' ? (d[0] = h[0] > f[0] ? c[0] : v[0]) : (d[0] = h[0] > f[0] ? v[0] : c[0]),
        t[1] === 'y0' ? (d[1] = h[1] > f[1] ? c[1] : v[1]) : (d[1] = h[1] > f[1] ? v[1] : c[1]),
        (s = a.getMarkerPosition(d, t, !0));
    } else {
      var p = r.get(t[0], e),
        g = r.get(t[1], e),
        m = [p, g];
      i.clampData && i.clampData(m, m), (s = i.dataToPoint(m, !0));
    }
    if (xr(i, 'cartesian2d')) {
      var S = i.getAxis('x'),
        y = i.getAxis('y'),
        p = r.get(t[0], e),
        g = r.get(t[1], e);
      fr(p)
        ? (s[0] = S.toGlobalCoord(S.getExtent()[t[0] === 'x0' ? 0 : 1]))
        : fr(g) && (s[1] = y.toGlobalCoord(y.getExtent()[t[1] === 'y0' ? 0 : 1]));
    }
    isNaN(l) || (s[0] = l), isNaN(u) || (s[1] = u);
  }
  return s;
}
var Yi = [
    ['x0', 'y0'],
    ['x1', 'y0'],
    ['x1', 'y1'],
    ['x0', 'y1'],
  ],
  vg = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = e.type), t;
    }
    return (
      (e.prototype.updateTransform = function (t, a, n) {
        a.eachSeries(function (i) {
          var o = te.getMarkerModelFromSeries(i, 'markArea');
          if (o) {
            var s = o.getData();
            s.each(function (l) {
              var u = $(Yi, function (c) {
                return Zi(s, l, c, i, n);
              });
              s.setItemLayout(l, u);
              var v = s.getItemGraphicEl(l);
              v.setShape('points', u);
            });
          }
        }, this);
      }),
      (e.prototype.renderSeries = function (t, a, n, i) {
        var o = t.coordinateSystem,
          s = t.id,
          l = t.getData(),
          u = this.markerGroupMap,
          v = u.get(s) || u.set(s, { group: new rt() });
        this.group.add(v.group), this.markKeep(v);
        var c = cg(o, t, a);
        a.setData(c),
          c.each(function (h) {
            var f = $(Yi, function (I) {
                return Zi(c, h, I, t, i);
              }),
              d = o.getAxis('x').scale,
              p = o.getAxis('y').scale,
              g = d.getExtent(),
              m = p.getExtent(),
              S = [d.parse(c.get('x0', h)), d.parse(c.get('x1', h))],
              y = [p.parse(c.get('y0', h)), p.parse(c.get('y1', h))];
            _a(S), _a(y);
            var b = !(g[0] > S[1] || g[1] < S[0] || m[0] > y[1] || m[1] < y[0]),
              _ = !b;
            c.setItemLayout(h, { points: f, allClipped: _ });
            var x = c.getItemModel(h).getModel('itemStyle').getItemStyle(),
              w = an(l, 'color');
            x.fill || ((x.fill = w), St(x.fill) && (x.fill = da(x.fill, 0.4))),
              x.stroke || (x.stroke = w),
              c.setItemVisual(h, 'style', x);
          }),
          c
            .diff(er(v).data)
            .add(function (h) {
              var f = c.getItemLayout(h);
              if (!f.allClipped) {
                var d = new Me({ shape: { points: f.points } });
                c.setItemGraphicEl(h, d), v.group.add(d);
              }
            })
            .update(function (h, f) {
              var d = er(v).data.getItemGraphicEl(f),
                p = c.getItemLayout(h);
              p.allClipped
                ? d && v.group.remove(d)
                : (d
                    ? ot(d, { shape: { points: p.points } }, a, h)
                    : (d = new Me({ shape: { points: p.points } })),
                  c.setItemGraphicEl(h, d),
                  v.group.add(d));
            })
            .remove(function (h) {
              var f = er(v).data.getItemGraphicEl(h);
              v.group.remove(f);
            })
            .execute(),
          c.eachItemGraphicEl(function (h, f) {
            var d = c.getItemModel(f),
              p = c.getItemVisual(f, 'style');
            h.useStyle(c.getItemVisual(f, 'style')),
              Kt(h, Rt(d), {
                labelFetcher: a,
                labelDataIndex: f,
                defaultText: c.getName(f) || '',
                inheritColor: St(p.fill) ? da(p.fill, 1) : '#000',
              }),
              Mt(h, d),
              lt(h, null, null, d.get(['emphasis', 'disabled'])),
              (it(h).dataModel = a);
          }),
          (er(v).data = c),
          (v.group.silent = a.get('silent') || t.get('silent'));
      }),
      (e.type = 'markArea'),
      e
    );
  })(In);
function cg(r, e, t) {
  var a,
    n,
    i = ['x0', 'y0', 'x1', 'y1'];
  if (r) {
    var o = $(r && r.dimensions, function (u) {
      var v = e.getData(),
        c = v.getDimensionInfo(v.mapDimension(u)) || {};
      return U(U({}, c), { name: u, ordinalMeta: null });
    });
    (n = $(i, function (u, v) {
      return { name: u, type: o[v % 2].type };
    })),
      (a = new bt(n, t));
  } else (n = [{ name: 'value', type: 'float' }]), (a = new bt(n, t));
  var s = $(t.get('data'), et(lg, e, r, t));
  r && (s = At(s, et(ug, r)));
  var l = r
    ? function (u, v, c, h) {
        var f = u.coord[Math.floor(h / 2)][h % 2];
        return ir(f, n[h]);
      }
    : function (u, v, c, h) {
        return ir(u.value, n[h]);
      };
  return a.initData(s, null, l), (a.hasItemOption = !0), a;
}
const hg = vg;
function fg(r) {
  r.registerComponentModel(sg),
    r.registerComponentView(hg),
    r.registerPreprocessor(function (e) {
      xn(e.series, 'markArea') && (e.markArea = e.markArea || {});
    });
}
var Xi = {
    value: 'eq',
    '<': 'lt',
    '<=': 'lte',
    '>': 'gt',
    '>=': 'gte',
    '=': 'eq',
    '!=': 'ne',
    '<>': 'ne',
  },
  pg = (function () {
    function r(e) {
      var t = (this._condVal = St(e) ? new RegExp(e) : uu(e) ? e : null);
      if (t == null) {
        var a = '';
        tt(a);
      }
    }
    return (
      (r.prototype.evaluate = function (e) {
        var t = typeof e;
        return St(t) ? this._condVal.test(e) : Ht(t) ? this._condVal.test(e + '') : !1;
      }),
      r
    );
  })(),
  dg = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        return this.value;
      }),
      r
    );
  })(),
  gg = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        for (var e = this.children, t = 0; t < e.length; t++) if (!e[t].evaluate()) return !1;
        return !0;
      }),
      r
    );
  })(),
  yg = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        for (var e = this.children, t = 0; t < e.length; t++) if (e[t].evaluate()) return !0;
        return !1;
      }),
      r
    );
  })(),
  mg = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        return !this.child.evaluate();
      }),
      r
    );
  })(),
  Sg = (function () {
    function r() {}
    return (
      (r.prototype.evaluate = function () {
        for (
          var e = !!this.valueParser,
            t = this.getValue,
            a = t(this.valueGetterParam),
            n = e ? this.valueParser(a) : null,
            i = 0;
          i < this.subCondList.length;
          i++
        )
          if (!this.subCondList[i].evaluate(e ? n : a)) return !1;
        return !0;
      }),
      r
    );
  })();
function Ln(r, e) {
  if (r === !0 || r === !1) {
    var t = new dg();
    return (t.value = r), t;
  }
  var a = '';
  return (
    As(r) || tt(a), r.and ? qi('and', r, e) : r.or ? qi('or', r, e) : r.not ? _g(r, e) : bg(r, e)
  );
}
function qi(r, e, t) {
  var a = e[r],
    n = '';
  F(a) || tt(n), a.length || tt(n);
  var i = r === 'and' ? new gg() : new yg();
  return (
    (i.children = $(a, function (o) {
      return Ln(o, t);
    })),
    i.children.length || tt(n),
    i
  );
}
function _g(r, e) {
  var t = r.not,
    a = '';
  As(t) || tt(a);
  var n = new mg();
  return (n.child = Ln(t, e)), n.child || tt(a), n;
}
function bg(r, e) {
  for (
    var t = '',
      a = e.prepareGetValue(r),
      n = [],
      i = Ga(r),
      o = r.parser,
      s = o ? zo(o) : null,
      l = 0;
    l < i.length;
    l++
  ) {
    var u = i[l];
    if (!(u === 'parser' || e.valueGetterAttrMap.get(u))) {
      var v = Ct(Xi, u) ? Xi[u] : u,
        c = r[u],
        h = s ? s(c) : c,
        f = su(v, h) || (v === 'reg' && new pg(h));
      f || tt(t), n.push(f);
    }
  }
  n.length || tt(t);
  var d = new Sg();
  return (
    (d.valueGetterParam = a), (d.valueParser = s), (d.getValue = e.getValue), (d.subCondList = n), d
  );
}
function As(r) {
  return tn(r) && !lu(r);
}
var xg = (function () {
  function r(e, t) {
    this._cond = Ln(e, t);
  }
  return (
    (r.prototype.evaluate = function () {
      return this._cond.evaluate();
    }),
    r
  );
})();
function wg(r, e) {
  return new xg(r, e);
}
var Ig = {
    type: 'echarts:filter',
    transform: function (r) {
      for (
        var e = r.upstream,
          t,
          a = wg(r.config, {
            valueGetterAttrMap: mt({ dimension: !0 }),
            prepareGetValue: function (s) {
              var l = '',
                u = s.dimension;
              Ct(s, 'dimension') || tt(l);
              var v = e.getDimensionInfo(u);
              return v || tt(l), { dimIdx: v.index };
            },
            getValue: function (s) {
              return e.retrieveValueFromItem(t, s.dimIdx);
            },
          }),
          n = [],
          i = 0,
          o = e.count();
        i < o;
        i++
      )
        (t = e.getRawDataItem(i)), a.evaluate() && n.push(t);
      return { data: n };
    },
  },
  Lg = {
    type: 'echarts:sort',
    transform: function (r) {
      var e = r.upstream,
        t = r.config,
        a = '',
        n = Gt(t);
      n.length || tt(a);
      var i = [];
      R(n, function (v) {
        var c = v.dimension,
          h = v.order,
          f = v.parser,
          d = v.incomparable;
        if (
          (c == null && tt(a),
          h !== 'asc' && h !== 'desc' && tt(a),
          d && d !== 'min' && d !== 'max')
        ) {
          var p = '';
          tt(p);
        }
        if (h !== 'asc' && h !== 'desc') {
          var g = '';
          tt(g);
        }
        var m = e.getDimensionInfo(c);
        m || tt(a);
        var S = f ? zo(f) : null;
        f && !S && tt(a), i.push({ dimIdx: m.index, parser: S, comparator: new vu(h, d) });
      });
      var o = e.sourceFormat;
      o !== Po && o !== cu && tt(a);
      for (var s = [], l = 0, u = e.count(); l < u; l++) s.push(e.getRawDataItem(l));
      return (
        s.sort(function (v, c) {
          for (var h = 0; h < i.length; h++) {
            var f = i[h],
              d = e.retrieveValueFromItem(v, f.dimIdx),
              p = e.retrieveValueFromItem(c, f.dimIdx);
            f.parser && ((d = f.parser(d)), (p = f.parser(p)));
            var g = f.comparator.evaluate(d, p);
            if (g !== 0) return g;
          }
          return 0;
        }),
        { data: s }
      );
    },
  };
function Dg(r) {
  r.registerTransform(Ig), r.registerTransform(Lg);
}
var Tg = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = 'dataset'), t;
    }
    return (
      (e.prototype.init = function (t, a, n) {
        r.prototype.init.call(this, t, a, n), (this._sourceManager = new hu(this)), $n(this);
      }),
      (e.prototype.mergeOption = function (t, a) {
        r.prototype.mergeOption.call(this, t, a), $n(this);
      }),
      (e.prototype.optionUpdated = function () {
        this._sourceManager.dirty();
      }),
      (e.prototype.getSourceManager = function () {
        return this._sourceManager;
      }),
      (e.type = 'dataset'),
      (e.defaultOption = { seriesLayoutBy: fu }),
      e
    );
  })(wr),
  Ag = (function (r) {
    k(e, r);
    function e() {
      var t = (r !== null && r.apply(this, arguments)) || this;
      return (t.type = 'dataset'), t;
    }
    return (e.type = 'dataset'), e;
  })(Ir);
function Cg(r) {
  r.registerComponentModel(Tg), r.registerComponentView(Ag);
}
function Ki(r, e, t) {
  var a = ba.createCanvas(),
    n = e.getWidth(),
    i = e.getHeight(),
    o = a.style;
  return (
    o &&
      ((o.position = 'absolute'),
      (o.left = '0'),
      (o.top = '0'),
      (o.width = n + 'px'),
      (o.height = i + 'px'),
      a.setAttribute('data-zr-dom-id', r)),
    (a.width = n * t),
    (a.height = i * t),
    a
  );
}
var Mg = (function (r) {
  k(e, r);
  function e(t, a, n) {
    var i = r.call(this) || this;
    (i.motionBlur = !1),
      (i.lastFrameAlpha = 0.7),
      (i.dpr = 1),
      (i.virtual = !1),
      (i.config = {}),
      (i.incremental = !1),
      (i.zlevel = 0),
      (i.maxRepaintRectCount = 5),
      (i.__dirty = !0),
      (i.__firstTimePaint = !0),
      (i.__used = !1),
      (i.__drawIndex = 0),
      (i.__startIndex = 0),
      (i.__endIndex = 0),
      (i.__prevStartIndex = null),
      (i.__prevEndIndex = null);
    var o;
    (n = n || Ho),
      typeof t == 'string' ? (o = Ki(t, a, n)) : tn(t) && ((o = t), (t = o.id)),
      (i.id = t),
      (i.dom = o);
    var s = o.style;
    return (
      s &&
        (Oo(o),
        (o.onselectstart = function () {
          return !1;
        }),
        (s.padding = '0'),
        (s.margin = '0'),
        (s.borderWidth = '0')),
      (i.painter = a),
      (i.dpr = n),
      i
    );
  }
  return (
    (e.prototype.getElementCount = function () {
      return this.__endIndex - this.__startIndex;
    }),
    (e.prototype.afterBrush = function () {
      (this.__prevStartIndex = this.__startIndex), (this.__prevEndIndex = this.__endIndex);
    }),
    (e.prototype.initContext = function () {
      (this.ctx = this.dom.getContext('2d')), (this.ctx.dpr = this.dpr);
    }),
    (e.prototype.setUnpainted = function () {
      this.__firstTimePaint = !0;
    }),
    (e.prototype.createBackBuffer = function () {
      var t = this.dpr;
      (this.domBack = Ki('back-' + this.id, this.painter, t)),
        (this.ctxBack = this.domBack.getContext('2d')),
        t !== 1 && this.ctxBack.scale(t, t);
    }),
    (e.prototype.createRepaintRects = function (t, a, n, i) {
      if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
      var o = [],
        s = this.maxRepaintRectCount,
        l = !1,
        u = new dt(0, 0, 0, 0);
      function v(S) {
        if (!(!S.isFinite() || S.isZero()))
          if (o.length === 0) {
            var y = new dt(0, 0, 0, 0);
            y.copy(S), o.push(y);
          } else {
            for (var b = !1, _ = 1 / 0, x = 0, w = 0; w < o.length; ++w) {
              var I = o[w];
              if (I.intersect(S)) {
                var L = new dt(0, 0, 0, 0);
                L.copy(I), L.union(S), (o[w] = L), (b = !0);
                break;
              } else if (l) {
                u.copy(S), u.union(I);
                var D = S.width * S.height,
                  T = I.width * I.height,
                  M = u.width * u.height,
                  P = M - D - T;
                P < _ && ((_ = P), (x = w));
              }
            }
            if ((l && (o[x].union(S), (b = !0)), !b)) {
              var y = new dt(0, 0, 0, 0);
              y.copy(S), o.push(y);
            }
            l || (l = o.length >= s);
          }
      }
      for (var c = this.__startIndex; c < this.__endIndex; ++c) {
        var h = t[c];
        if (h) {
          var f = h.shouldBePainted(n, i, !0, !0),
            d = h.__isRendered && (h.__dirty & xa || !f) ? h.getPrevPaintRect() : null;
          d && v(d);
          var p = f && (h.__dirty & xa || !h.__isRendered) ? h.getPaintRect() : null;
          p && v(p);
        }
      }
      for (var c = this.__prevStartIndex; c < this.__prevEndIndex; ++c) {
        var h = a[c],
          f = h && h.shouldBePainted(n, i, !0, !0);
        if (h && (!f || !h.__zr) && h.__isRendered) {
          var d = h.getPrevPaintRect();
          d && v(d);
        }
      }
      var g;
      do {
        g = !1;
        for (var c = 0; c < o.length; ) {
          if (o[c].isZero()) {
            o.splice(c, 1);
            continue;
          }
          for (var m = c + 1; m < o.length; )
            o[c].intersect(o[m]) ? ((g = !0), o[c].union(o[m]), o.splice(m, 1)) : m++;
          c++;
        }
      } while (g);
      return (this._paintRects = o), o;
    }),
    (e.prototype.debugGetPaintRects = function () {
      return (this._paintRects || []).slice();
    }),
    (e.prototype.resize = function (t, a) {
      var n = this.dpr,
        i = this.dom,
        o = i.style,
        s = this.domBack;
      o && ((o.width = t + 'px'), (o.height = a + 'px')),
        (i.width = t * n),
        (i.height = a * n),
        s && ((s.width = t * n), (s.height = a * n), n !== 1 && this.ctxBack.scale(n, n));
    }),
    (e.prototype.clear = function (t, a, n) {
      var i = this.dom,
        o = this.ctx,
        s = i.width,
        l = i.height;
      a = a || this.clearColor;
      var u = this.motionBlur && !t,
        v = this.lastFrameAlpha,
        c = this.dpr,
        h = this;
      u &&
        (this.domBack || this.createBackBuffer(),
        (this.ctxBack.globalCompositeOperation = 'copy'),
        this.ctxBack.drawImage(i, 0, 0, s / c, l / c));
      var f = this.domBack;
      function d(p, g, m, S) {
        if ((o.clearRect(p, g, m, S), a && a !== 'transparent')) {
          var y = void 0;
          if (du(a)) {
            var b = a.global || (a.__width === m && a.__height === S);
            (y = (b && a.__canvasGradient) || gu(o, a, { x: 0, y: 0, width: m, height: S })),
              (a.__canvasGradient = y),
              (a.__width = m),
              (a.__height = S);
          } else
            yu(a) &&
              ((a.scaleX = a.scaleX || c),
              (a.scaleY = a.scaleY || c),
              (y = mu(o, a, {
                dirty: function () {
                  h.setUnpainted(), h.painter.refresh();
                },
              })));
          o.save(), (o.fillStyle = y || a), o.fillRect(p, g, m, S), o.restore();
        }
        u && (o.save(), (o.globalAlpha = v), o.drawImage(f, p, g, m, S), o.restore());
      }
      !n || u
        ? d(0, 0, s, l)
        : n.length &&
          R(n, function (p) {
            d(p.x * c, p.y * c, p.width * c, p.height * c);
          });
    }),
    e
  );
})(pu);
const ua = Mg;
var ji = 1e5,
  ee = 314159,
  rr = 0.01,
  Pg = 0.001;
function Eg(r) {
  return r
    ? r.__builtin__
      ? !0
      : !(typeof r.resize != 'function' || typeof r.refresh != 'function')
    : !1;
}
function Ng(r, e) {
  var t = document.createElement('div');
  return (
    (t.style.cssText =
      [
        'position:relative',
        'width:' + r + 'px',
        'height:' + e + 'px',
        'padding:0',
        'margin:0',
        'border-width:0',
      ].join(';') + ';'),
    t
  );
}
var Rg = (function () {
  function r(e, t, a, n) {
    (this.type = 'canvas'),
      (this._zlevelList = []),
      (this._prevDisplayList = []),
      (this._layers = {}),
      (this._layerConfig = {}),
      (this._needsManuallyCompositing = !1),
      (this.type = 'canvas');
    var i = !e.nodeName || e.nodeName.toUpperCase() === 'CANVAS';
    (this._opts = a = U({}, a || {})),
      (this.dpr = a.devicePixelRatio || Ho),
      (this._singleCanvas = i),
      (this.root = e);
    var o = e.style;
    o && (Oo(e), (e.innerHTML = '')), (this.storage = t);
    var s = this._zlevelList;
    this._prevDisplayList = [];
    var l = this._layers;
    if (i) {
      var v = e,
        c = v.width,
        h = v.height;
      a.width != null && (c = a.width),
        a.height != null && (h = a.height),
        (this.dpr = a.devicePixelRatio || 1),
        (v.width = c * this.dpr),
        (v.height = h * this.dpr),
        (this._width = c),
        (this._height = h);
      var f = new ua(v, this, this.dpr);
      (f.__builtin__ = !0),
        f.initContext(),
        (l[ee] = f),
        (f.zlevel = ee),
        s.push(ee),
        (this._domRoot = e);
    } else {
      (this._width = Ue(e, 0, a)), (this._height = Ue(e, 1, a));
      var u = (this._domRoot = Ng(this._width, this._height));
      e.appendChild(u);
    }
  }
  return (
    (r.prototype.getType = function () {
      return 'canvas';
    }),
    (r.prototype.isSingleCanvas = function () {
      return this._singleCanvas;
    }),
    (r.prototype.getViewportRoot = function () {
      return this._domRoot;
    }),
    (r.prototype.getViewportRootOffset = function () {
      var e = this.getViewportRoot();
      if (e) return { offsetLeft: e.offsetLeft || 0, offsetTop: e.offsetTop || 0 };
    }),
    (r.prototype.refresh = function (e) {
      var t = this.storage.getDisplayList(!0),
        a = this._prevDisplayList,
        n = this._zlevelList;
      (this._redrawId = Math.random()), this._paintList(t, a, e, this._redrawId);
      for (var i = 0; i < n.length; i++) {
        var o = n[i],
          s = this._layers[o];
        if (!s.__builtin__ && s.refresh) {
          var l = i === 0 ? this._backgroundColor : null;
          s.refresh(l);
        }
      }
      return this._opts.useDirtyRect && (this._prevDisplayList = t.slice()), this;
    }),
    (r.prototype.refreshHover = function () {
      this._paintHoverList(this.storage.getDisplayList(!1));
    }),
    (r.prototype._paintHoverList = function (e) {
      var t = e.length,
        a = this._hoverlayer;
      if ((a && a.clear(), !!t)) {
        for (
          var n = { inHover: !0, viewWidth: this._width, viewHeight: this._height }, i, o = 0;
          o < t;
          o++
        ) {
          var s = e[o];
          s.__inHover &&
            (a || (a = this._hoverlayer = this.getLayer(ji)),
            i || ((i = a.ctx), i.save()),
            We(i, s, n, o === t - 1));
        }
        i && i.restore();
      }
    }),
    (r.prototype.getHoverLayer = function () {
      return this.getLayer(ji);
    }),
    (r.prototype.paintOne = function (e, t) {
      Su(e, t);
    }),
    (r.prototype._paintList = function (e, t, a, n) {
      if (this._redrawId === n) {
        (a = a || !1), this._updateLayerStatus(e);
        var i = this._doPaintList(e, t, a),
          o = i.finished,
          s = i.needsRefreshHover;
        if (
          (this._needsManuallyCompositing && this._compositeManually(),
          s && this._paintHoverList(e),
          o)
        )
          this.eachLayer(function (u) {
            u.afterBrush && u.afterBrush();
          });
        else {
          var l = this;
          _u(function () {
            l._paintList(e, t, a, n);
          });
        }
      }
    }),
    (r.prototype._compositeManually = function () {
      var e = this.getLayer(ee).ctx,
        t = this._domRoot.width,
        a = this._domRoot.height;
      e.clearRect(0, 0, t, a),
        this.eachBuiltinLayer(function (n) {
          n.virtual && e.drawImage(n.dom, 0, 0, t, a);
        });
    }),
    (r.prototype._doPaintList = function (e, t, a) {
      for (
        var n = this, i = [], o = this._opts.useDirtyRect, s = 0;
        s < this._zlevelList.length;
        s++
      ) {
        var l = this._zlevelList[s],
          u = this._layers[l];
        u.__builtin__ && u !== this._hoverlayer && (u.__dirty || a) && i.push(u);
      }
      for (
        var v = !0,
          c = !1,
          h = function (p) {
            var g = i[p],
              m = g.ctx,
              S = o && g.createRepaintRects(e, t, f._width, f._height),
              y = a ? g.__startIndex : g.__drawIndex,
              b = !a && g.incremental && Date.now,
              _ = b && Date.now(),
              x = g.zlevel === f._zlevelList[0] ? f._backgroundColor : null;
            if (g.__startIndex === g.__endIndex) g.clear(!1, x, S);
            else if (y === g.__startIndex) {
              var w = e[y];
              (!w.incremental || !w.notClear || a) && g.clear(!1, x, S);
            }
            y === -1 && (y = g.__startIndex);
            var I,
              L = function (P) {
                var A = {
                  inHover: !1,
                  allClipped: !1,
                  prevEl: null,
                  viewWidth: n._width,
                  viewHeight: n._height,
                };
                for (I = y; I < g.__endIndex; I++) {
                  var C = e[I];
                  if (
                    (C.__inHover && (c = !0),
                    n._doPaintEl(C, g, o, P, A, I === g.__endIndex - 1),
                    b)
                  ) {
                    var E = Date.now() - _;
                    if (E > 15) break;
                  }
                }
                A.prevElClipPaths && m.restore();
              };
            if (S)
              if (S.length === 0) I = g.__endIndex;
              else
                for (var D = f.dpr, T = 0; T < S.length; ++T) {
                  var M = S[T];
                  m.save(),
                    m.beginPath(),
                    m.rect(M.x * D, M.y * D, M.width * D, M.height * D),
                    m.clip(),
                    L(M),
                    m.restore();
                }
            else m.save(), L(), m.restore();
            (g.__drawIndex = I), g.__drawIndex < g.__endIndex && (v = !1);
          },
          f = this,
          d = 0;
        d < i.length;
        d++
      )
        h(d);
      return (
        Bo.wxa &&
          R(this._layers, function (p) {
            p && p.ctx && p.ctx.draw && p.ctx.draw();
          }),
        { finished: v, needsRefreshHover: c }
      );
    }),
    (r.prototype._doPaintEl = function (e, t, a, n, i, o) {
      var s = t.ctx;
      if (a) {
        var l = e.getPaintRect();
        (!n || (l && l.intersect(n))) && (We(s, e, i, o), e.setPrevPaintRect(l));
      } else We(s, e, i, o);
    }),
    (r.prototype.getLayer = function (e, t) {
      this._singleCanvas && !this._needsManuallyCompositing && (e = ee);
      var a = this._layers[e];
      return (
        a ||
          ((a = new ua('zr_' + e, this, this.dpr)),
          (a.zlevel = e),
          (a.__builtin__ = !0),
          this._layerConfig[e]
            ? ie(a, this._layerConfig[e], !0)
            : this._layerConfig[e - rr] && ie(a, this._layerConfig[e - rr], !0),
          t && (a.virtual = t),
          this.insertLayer(e, a),
          a.initContext()),
        a
      );
    }),
    (r.prototype.insertLayer = function (e, t) {
      var a = this._layers,
        n = this._zlevelList,
        i = n.length,
        o = this._domRoot,
        s = null,
        l = -1;
      if (!a[e] && Eg(t)) {
        if (i > 0 && e > n[0]) {
          for (l = 0; l < i - 1 && !(n[l] < e && n[l + 1] > e); l++);
          s = a[n[l]];
        }
        if ((n.splice(l + 1, 0, e), (a[e] = t), !t.virtual))
          if (s) {
            var u = s.dom;
            u.nextSibling ? o.insertBefore(t.dom, u.nextSibling) : o.appendChild(t.dom);
          } else o.firstChild ? o.insertBefore(t.dom, o.firstChild) : o.appendChild(t.dom);
        t.painter || (t.painter = this);
      }
    }),
    (r.prototype.eachLayer = function (e, t) {
      for (var a = this._zlevelList, n = 0; n < a.length; n++) {
        var i = a[n];
        e.call(t, this._layers[i], i);
      }
    }),
    (r.prototype.eachBuiltinLayer = function (e, t) {
      for (var a = this._zlevelList, n = 0; n < a.length; n++) {
        var i = a[n],
          o = this._layers[i];
        o.__builtin__ && e.call(t, o, i);
      }
    }),
    (r.prototype.eachOtherLayer = function (e, t) {
      for (var a = this._zlevelList, n = 0; n < a.length; n++) {
        var i = a[n],
          o = this._layers[i];
        o.__builtin__ || e.call(t, o, i);
      }
    }),
    (r.prototype.getLayers = function () {
      return this._layers;
    }),
    (r.prototype._updateLayerStatus = function (e) {
      this.eachBuiltinLayer(function (c, h) {
        c.__dirty = c.__used = !1;
      });
      function t(c) {
        i && (i.__endIndex !== c && (i.__dirty = !0), (i.__endIndex = c));
      }
      if (this._singleCanvas)
        for (var a = 1; a < e.length; a++) {
          var n = e[a];
          if (n.zlevel !== e[a - 1].zlevel || n.incremental) {
            this._needsManuallyCompositing = !0;
            break;
          }
        }
      var i = null,
        o = 0,
        s,
        l;
      for (l = 0; l < e.length; l++) {
        var n = e[l],
          u = n.zlevel,
          v = void 0;
        s !== u && ((s = u), (o = 0)),
          n.incremental
            ? ((v = this.getLayer(u + Pg, this._needsManuallyCompositing)),
              (v.incremental = !0),
              (o = 1))
            : (v = this.getLayer(u + (o > 0 ? rr : 0), this._needsManuallyCompositing)),
          v.__builtin__ || bu('ZLevel ' + u + ' has been used by unkown layer ' + v.id),
          v !== i &&
            ((v.__used = !0),
            v.__startIndex !== l && (v.__dirty = !0),
            (v.__startIndex = l),
            v.incremental ? (v.__drawIndex = -1) : (v.__drawIndex = l),
            t(l),
            (i = v)),
          n.__dirty & xa &&
            !n.__inHover &&
            ((v.__dirty = !0), v.incremental && v.__drawIndex < 0 && (v.__drawIndex = l));
      }
      t(l),
        this.eachBuiltinLayer(function (c, h) {
          !c.__used &&
            c.getElementCount() > 0 &&
            ((c.__dirty = !0), (c.__startIndex = c.__endIndex = c.__drawIndex = 0)),
            c.__dirty && c.__drawIndex < 0 && (c.__drawIndex = c.__startIndex);
        });
    }),
    (r.prototype.clear = function () {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }),
    (r.prototype._clearLayer = function (e) {
      e.clear();
    }),
    (r.prototype.setBackgroundColor = function (e) {
      (this._backgroundColor = e),
        R(this._layers, function (t) {
          t.setUnpainted();
        });
    }),
    (r.prototype.configLayer = function (e, t) {
      if (t) {
        var a = this._layerConfig;
        a[e] ? ie(a[e], t, !0) : (a[e] = t);
        for (var n = 0; n < this._zlevelList.length; n++) {
          var i = this._zlevelList[n];
          if (i === e || i === e + rr) {
            var o = this._layers[i];
            ie(o, a[e], !0);
          }
        }
      }
    }),
    (r.prototype.delLayer = function (e) {
      var t = this._layers,
        a = this._zlevelList,
        n = t[e];
      n && (n.dom.parentNode.removeChild(n.dom), delete t[e], a.splice(It(a, e), 1));
    }),
    (r.prototype.resize = function (e, t) {
      if (this._domRoot.style) {
        var a = this._domRoot;
        a.style.display = 'none';
        var n = this._opts,
          i = this.root;
        if (
          (e != null && (n.width = e),
          t != null && (n.height = t),
          (e = Ue(i, 0, n)),
          (t = Ue(i, 1, n)),
          (a.style.display = ''),
          this._width !== e || t !== this._height)
        ) {
          (a.style.width = e + 'px'), (a.style.height = t + 'px');
          for (var o in this._layers)
            this._layers.hasOwnProperty(o) && this._layers[o].resize(e, t);
          this.refresh(!0);
        }
        (this._width = e), (this._height = t);
      } else {
        if (e == null || t == null) return;
        (this._width = e), (this._height = t), this.getLayer(ee).resize(e, t);
      }
      return this;
    }),
    (r.prototype.clearLayer = function (e) {
      var t = this._layers[e];
      t && t.clear();
    }),
    (r.prototype.dispose = function () {
      (this.root.innerHTML = ''), (this.root = this.storage = this._domRoot = this._layers = null);
    }),
    (r.prototype.getRenderedCanvas = function (e) {
      if (((e = e || {}), this._singleCanvas && !this._compositeManually))
        return this._layers[ee].dom;
      var t = new ua('image', this, e.pixelRatio || this.dpr);
      t.initContext(), t.clear(!1, e.backgroundColor || this._backgroundColor);
      var a = t.ctx;
      if (e.pixelRatio <= this.dpr) {
        this.refresh();
        var n = t.dom.width,
          i = t.dom.height;
        this.eachLayer(function (c) {
          c.__builtin__
            ? a.drawImage(c.dom, 0, 0, n, i)
            : c.renderToCanvas && (a.save(), c.renderToCanvas(a), a.restore());
        });
      } else
        for (
          var o = { inHover: !1, viewWidth: this._width, viewHeight: this._height },
            s = this.storage.getDisplayList(!0),
            l = 0,
            u = s.length;
          l < u;
          l++
        ) {
          var v = s[l];
          We(a, v, o, l === u - 1);
        }
      return t.dom;
    }),
    (r.prototype.getWidth = function () {
      return this._width;
    }),
    (r.prototype.getHeight = function () {
      return this._height;
    }),
    r
  );
})();
const Vg = Rg;
function kg(r) {
  r.registerPainter('canvas', Vg);
}
var Pt = xu.CMD;
function fe(r, e) {
  return Math.abs(r - e) < 1e-5;
}
function Ra(r) {
  var e = r.data,
    t = r.len(),
    a = [],
    n,
    i = 0,
    o = 0,
    s = 0,
    l = 0;
  function u(P, A) {
    n && n.length > 2 && a.push(n), (n = [P, A]);
  }
  function v(P, A, C, E) {
    (fe(P, C) && fe(A, E)) || n.push(P, A, C, E, C, E);
  }
  function c(P, A, C, E, N, V) {
    var G = Math.abs(A - P),
      O = (Math.tan(G / 4) * 4) / 3,
      B = A < P ? -1 : 1,
      K = Math.cos(P),
      X = Math.sin(P),
      W = Math.cos(A),
      j = Math.sin(A),
      ut = K * N + C,
      Y = X * V + E,
      H = W * N + C,
      Q = j * V + E,
      q = N * O * B,
      J = V * O * B;
    n.push(ut - q * X, Y + J * K, H + q * j, Q - J * W, H, Q);
  }
  for (var h, f, d, p, g = 0; g < t; ) {
    var m = e[g++],
      S = g === 1;
    switch (
      (S &&
        ((i = e[g]),
        (o = e[g + 1]),
        (s = i),
        (l = o),
        (m === Pt.L || m === Pt.C || m === Pt.Q) && (n = [s, l])),
      m)
    ) {
      case Pt.M:
        (i = s = e[g++]), (o = l = e[g++]), u(s, l);
        break;
      case Pt.L:
        (h = e[g++]), (f = e[g++]), v(i, o, h, f), (i = h), (o = f);
        break;
      case Pt.C:
        n.push(e[g++], e[g++], e[g++], e[g++], (i = e[g++]), (o = e[g++]));
        break;
      case Pt.Q:
        (h = e[g++]),
          (f = e[g++]),
          (d = e[g++]),
          (p = e[g++]),
          n.push(
            i + (2 / 3) * (h - i),
            o + (2 / 3) * (f - o),
            d + (2 / 3) * (h - d),
            p + (2 / 3) * (f - p),
            d,
            p,
          ),
          (i = d),
          (o = p);
        break;
      case Pt.A:
        var y = e[g++],
          b = e[g++],
          _ = e[g++],
          x = e[g++],
          w = e[g++],
          I = e[g++] + w;
        g += 1;
        var L = !e[g++];
        (h = Math.cos(w) * _ + y),
          (f = Math.sin(w) * x + b),
          S ? ((s = h), (l = f), u(s, l)) : v(i, o, h, f),
          (i = Math.cos(I) * _ + y),
          (o = Math.sin(I) * x + b);
        for (var D = ((L ? -1 : 1) * Math.PI) / 2, T = w; L ? T > I : T < I; T += D) {
          var M = L ? Math.max(T + D, I) : Math.min(T + D, I);
          c(T, M, y, b, _, x);
        }
        break;
      case Pt.R:
        (s = i = e[g++]),
          (l = o = e[g++]),
          (h = s + e[g++]),
          (f = l + e[g++]),
          u(h, l),
          v(h, l, h, f),
          v(h, f, s, f),
          v(s, f, s, l),
          v(s, l, h, l);
        break;
      case Pt.Z:
        n && v(i, o, s, l), (i = s), (o = l);
        break;
    }
  }
  return n && n.length > 2 && a.push(n), a;
}
function Va(r, e, t, a, n, i, o, s, l, u) {
  if (fe(r, t) && fe(e, a) && fe(n, o) && fe(i, s)) {
    l.push(o, s);
    return;
  }
  var v = 2 / u,
    c = v * v,
    h = o - r,
    f = s - e,
    d = Math.sqrt(h * h + f * f);
  (h /= d), (f /= d);
  var p = t - r,
    g = a - e,
    m = n - o,
    S = i - s,
    y = p * p + g * g,
    b = m * m + S * S;
  if (y < c && b < c) {
    l.push(o, s);
    return;
  }
  var _ = h * p + f * g,
    x = -h * m - f * S,
    w = y - _ * _,
    I = b - x * x;
  if (w < c && _ >= 0 && I < c && x >= 0) {
    l.push(o, s);
    return;
  }
  var L = [],
    D = [];
  or(r, t, n, o, 0.5, L),
    or(e, a, i, s, 0.5, D),
    Va(L[0], D[0], L[1], D[1], L[2], D[2], L[3], D[3], l, u),
    Va(L[4], D[4], L[5], D[5], L[6], D[6], L[7], D[7], l, u);
}
function Gg(r, e) {
  var t = Ra(r),
    a = [];
  e = e || 1;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      o = [],
      s = i[0],
      l = i[1];
    o.push(s, l);
    for (var u = 2; u < i.length; ) {
      var v = i[u++],
        c = i[u++],
        h = i[u++],
        f = i[u++],
        d = i[u++],
        p = i[u++];
      Va(s, l, v, c, h, f, d, p, o, e), (s = d), (l = p);
    }
    a.push(o);
  }
  return a;
}
function Cs(r, e, t) {
  var a = r[e],
    n = r[1 - e],
    i = Math.abs(a / n),
    o = Math.ceil(Math.sqrt(i * t)),
    s = Math.floor(t / o);
  s === 0 && ((s = 1), (o = t));
  for (var l = [], u = 0; u < o; u++) l.push(s);
  var v = o * s,
    c = t - v;
  if (c > 0) for (var u = 0; u < c; u++) l[u % o] += 1;
  return l;
}
function Qi(r, e, t) {
  for (
    var a = r.r0,
      n = r.r,
      i = r.startAngle,
      o = r.endAngle,
      s = Math.abs(o - i),
      l = s * n,
      u = n - a,
      v = l > Math.abs(u),
      c = Cs([l, u], v ? 0 : 1, e),
      h = (v ? s : u) / c.length,
      f = 0;
    f < c.length;
    f++
  )
    for (var d = (v ? u : s) / c[f], p = 0; p < c[f]; p++) {
      var g = {};
      v
        ? ((g.startAngle = i + h * f),
          (g.endAngle = i + h * (f + 1)),
          (g.r0 = a + d * p),
          (g.r = a + d * (p + 1)))
        : ((g.startAngle = i + d * p),
          (g.endAngle = i + d * (p + 1)),
          (g.r0 = a + h * f),
          (g.r = a + h * (f + 1))),
        (g.clockwise = r.clockwise),
        (g.cx = r.cx),
        (g.cy = r.cy),
        t.push(g);
    }
}
function Bg(r, e, t) {
  for (
    var a = r.width,
      n = r.height,
      i = a > n,
      o = Cs([a, n], i ? 0 : 1, e),
      s = i ? 'width' : 'height',
      l = i ? 'height' : 'width',
      u = i ? 'x' : 'y',
      v = i ? 'y' : 'x',
      c = r[s] / o.length,
      h = 0;
    h < o.length;
    h++
  )
    for (var f = r[l] / o[h], d = 0; d < o[h]; d++) {
      var p = {};
      (p[u] = h * c), (p[v] = d * f), (p[s] = c), (p[l] = f), (p.x += r.x), (p.y += r.y), t.push(p);
    }
}
function Ji(r, e, t, a) {
  return r * a - t * e;
}
function zg(r, e, t, a, n, i, o, s) {
  var l = t - r,
    u = a - e,
    v = o - n,
    c = s - i,
    h = Ji(v, c, l, u);
  if (Math.abs(h) < 1e-6) return null;
  var f = r - n,
    d = e - i,
    p = Ji(f, d, v, c) / h;
  return p < 0 || p > 1 ? null : new Ut(p * l + r, p * u + e);
}
function Og(r, e, t) {
  var a = new Ut();
  Ut.sub(a, t, e), a.normalize();
  var n = new Ut();
  Ut.sub(n, r, e);
  var i = n.dot(a);
  return i;
}
function ve(r, e) {
  var t = r[r.length - 1];
  (t && t[0] === e[0] && t[1] === e[1]) || r.push(e);
}
function Hg(r, e, t) {
  for (var a = r.length, n = [], i = 0; i < a; i++) {
    var o = r[i],
      s = r[(i + 1) % a],
      l = zg(o[0], o[1], s[0], s[1], e.x, e.y, t.x, t.y);
    l && n.push({ projPt: Og(l, e, t), pt: l, idx: i });
  }
  if (n.length < 2) return [{ points: r }, { points: r }];
  n.sort(function (g, m) {
    return g.projPt - m.projPt;
  });
  var u = n[0],
    v = n[n.length - 1];
  if (v.idx < u.idx) {
    var c = u;
    (u = v), (v = c);
  }
  for (
    var h = [u.pt.x, u.pt.y], f = [v.pt.x, v.pt.y], d = [h], p = [f], i = u.idx + 1;
    i <= v.idx;
    i++
  )
    ve(d, r[i].slice());
  ve(d, f), ve(d, h);
  for (var i = v.idx + 1; i <= u.idx + a; i++) ve(p, r[i % a].slice());
  return ve(p, h), ve(p, f), [{ points: d }, { points: p }];
}
function to(r) {
  var e = r.points,
    t = [],
    a = [];
  mr(e, t, a);
  var n = new dt(t[0], t[1], a[0] - t[0], a[1] - t[1]),
    i = n.width,
    o = n.height,
    s = n.x,
    l = n.y,
    u = new Ut(),
    v = new Ut();
  return (
    i > o
      ? ((u.x = v.x = s + i / 2), (u.y = l), (v.y = l + o))
      : ((u.y = v.y = l + o / 2), (u.x = s), (v.x = s + i)),
    Hg(e, u, v)
  );
}
function pr(r, e, t, a) {
  if (t === 1) a.push(e);
  else {
    var n = Math.floor(t / 2),
      i = r(e);
    pr(r, i[0], n, a), pr(r, i[1], t - n, a);
  }
  return a;
}
function Fg(r, e) {
  for (var t = [], a = 0; a < e; a++) t.push(nn(r));
  return t;
}
function $g(r, e) {
  e.setStyle(r.style), (e.z = r.z), (e.z2 = r.z2), (e.zlevel = r.zlevel);
}
function Wg(r) {
  for (var e = [], t = 0; t < r.length; ) e.push([r[t++], r[t++]]);
  return e;
}
function Ug(r, e) {
  var t = [],
    a = r.shape,
    n;
  switch (r.type) {
    case 'rect':
      Bg(a, e, t), (n = jt);
      break;
    case 'sector':
      Qi(a, e, t), (n = Ee);
      break;
    case 'circle':
      Qi({ r0: 0, r: a.r, startAngle: 0, endAngle: Math.PI * 2, cx: a.cx, cy: a.cy }, e, t),
        (n = Ee);
      break;
    default:
      var i = r.getComputedTransform(),
        o = i ? Math.sqrt(Math.max(i[0] * i[0] + i[1] * i[1], i[2] * i[2] + i[3] * i[3])) : 1,
        s = $(Gg(r.getUpdatedPathProxy(), o), function (m) {
          return Wg(m);
        }),
        l = s.length;
      if (l === 0) pr(to, { points: s[0] }, e, t);
      else if (l === e) for (var u = 0; u < l; u++) t.push({ points: s[u] });
      else {
        var v = 0,
          c = $(s, function (m) {
            var S = [],
              y = [];
            mr(m, S, y);
            var b = (y[1] - S[1]) * (y[0] - S[0]);
            return (v += b), { poly: m, area: b };
          });
        c.sort(function (m, S) {
          return S.area - m.area;
        });
        for (var h = e, u = 0; u < l; u++) {
          var f = c[u];
          if (h <= 0) break;
          var d = u === l - 1 ? h : Math.ceil((f.area / v) * e);
          d < 0 || (pr(to, { points: f.poly }, d, t), (h -= d));
        }
      }
      n = Me;
      break;
  }
  if (!n) return Fg(r, e);
  for (var p = [], u = 0; u < t.length; u++) {
    var g = new n();
    g.setShape(t[u]), $g(r, g), p.push(g);
  }
  return p;
}
function Zg(r, e) {
  var t = r.length,
    a = e.length;
  if (t === a) return [r, e];
  for (
    var n = [],
      i = [],
      o = t < a ? r : e,
      s = Math.min(t, a),
      l = Math.abs(a - t) / 6,
      u = (s - 2) / 6,
      v = Math.ceil(l / u) + 1,
      c = [o[0], o[1]],
      h = l,
      f = 2;
    f < s;

  ) {
    var d = o[f - 2],
      p = o[f - 1],
      g = o[f++],
      m = o[f++],
      S = o[f++],
      y = o[f++],
      b = o[f++],
      _ = o[f++];
    if (h <= 0) {
      c.push(g, m, S, y, b, _);
      continue;
    }
    for (var x = Math.min(h, v - 1) + 1, w = 1; w <= x; w++) {
      var I = w / x;
      or(d, g, S, b, I, n),
        or(p, m, y, _, I, i),
        (d = n[3]),
        (p = i[3]),
        c.push(n[1], i[1], n[2], i[2], d, p),
        (g = n[5]),
        (m = i[5]),
        (S = n[6]),
        (y = i[6]);
    }
    h -= x - 1;
  }
  return o === r ? [c, e] : [r, c];
}
function eo(r, e) {
  for (var t = r.length, a = r[t - 2], n = r[t - 1], i = [], o = 0; o < e.length; )
    (i[o++] = a), (i[o++] = n);
  return i;
}
function Yg(r, e) {
  for (var t, a, n, i = [], o = [], s = 0; s < Math.max(r.length, e.length); s++) {
    var l = r[s],
      u = e[s],
      v = void 0,
      c = void 0;
    l
      ? u
        ? ((t = Zg(l, u)), (v = t[0]), (c = t[1]), (a = v), (n = c))
        : ((c = eo(n || l, l)), (v = l))
      : ((v = eo(a || u, u)), (c = u)),
      i.push(v),
      o.push(c);
  }
  return [i, o];
}
function ro(r) {
  for (var e = 0, t = 0, a = 0, n = r.length, i = 0, o = n - 2; i < n; o = i, i += 2) {
    var s = r[o],
      l = r[o + 1],
      u = r[i],
      v = r[i + 1],
      c = s * v - u * l;
    (e += c), (t += (s + u) * c), (a += (l + v) * c);
  }
  return e === 0 ? [r[0] || 0, r[1] || 0] : [t / e / 3, a / e / 3, e];
}
function Xg(r, e, t, a) {
  for (var n = (r.length - 2) / 6, i = 1 / 0, o = 0, s = r.length, l = s - 2, u = 0; u < n; u++) {
    for (var v = u * 6, c = 0, h = 0; h < s; h += 2) {
      var f = h === 0 ? v : ((v + h - 2) % l) + 2,
        d = r[f] - t[0],
        p = r[f + 1] - t[1],
        g = e[h] - a[0],
        m = e[h + 1] - a[1],
        S = g - d,
        y = m - p;
      c += S * S + y * y;
    }
    c < i && ((i = c), (o = u));
  }
  return o;
}
function qg(r) {
  for (var e = [], t = r.length, a = 0; a < t; a += 2)
    (e[a] = r[t - a - 2]), (e[a + 1] = r[t - a - 1]);
  return e;
}
function Kg(r, e, t, a) {
  for (var n = [], i, o = 0; o < r.length; o++) {
    var s = r[o],
      l = e[o],
      u = ro(s),
      v = ro(l);
    i == null && (i = u[2] < 0 != v[2] < 0);
    var c = [],
      h = [],
      f = 0,
      d = 1 / 0,
      p = [],
      g = s.length;
    i && (s = qg(s));
    for (var m = Xg(s, l, u, v) * 6, S = g - 2, y = 0; y < S; y += 2) {
      var b = ((m + y) % S) + 2;
      (c[y + 2] = s[b] - u[0]), (c[y + 3] = s[b + 1] - u[1]);
    }
    if (((c[0] = s[m] - u[0]), (c[1] = s[m + 1] - u[1]), t > 0))
      for (var _ = a / t, x = -a / 2; x <= a / 2; x += _) {
        for (var w = Math.sin(x), I = Math.cos(x), L = 0, y = 0; y < s.length; y += 2) {
          var D = c[y],
            T = c[y + 1],
            M = l[y] - v[0],
            P = l[y + 1] - v[1],
            A = M * I - P * w,
            C = M * w + P * I;
          (p[y] = A), (p[y + 1] = C);
          var E = A - D,
            N = C - T;
          L += E * E + N * N;
        }
        if (L < d) {
          (d = L), (f = x);
          for (var V = 0; V < p.length; V++) h[V] = p[V];
        }
      }
    else for (var G = 0; G < g; G += 2) (h[G] = l[G] - v[0]), (h[G + 1] = l[G + 1] - v[1]);
    n.push({ from: c, to: h, fromCp: u, toCp: v, rotation: -f });
  }
  return n;
}
function dr(r) {
  return r.__isCombineMorphing;
}
var Ms = '__mOriginal_';
function gr(r, e, t) {
  var a = Ms + e,
    n = r[a] || r[e];
  r[a] || (r[a] = r[e]);
  var i = t.replace,
    o = t.after,
    s = t.before;
  r[e] = function () {
    var l = arguments,
      u;
    return (
      s && s.apply(this, l),
      i ? (u = i.apply(this, l)) : (u = n.apply(this, l)),
      o && o.apply(this, l),
      u
    );
  };
}
function Ae(r, e) {
  var t = Ms + e;
  r[t] && ((r[e] = r[t]), (r[t] = null));
}
function ao(r, e) {
  for (var t = 0; t < r.length; t++)
    for (var a = r[t], n = 0; n < a.length; ) {
      var i = a[n],
        o = a[n + 1];
      (a[n++] = e[0] * i + e[2] * o + e[4]), (a[n++] = e[1] * i + e[3] * o + e[5]);
    }
}
function Ps(r, e) {
  var t = r.getUpdatedPathProxy(),
    a = e.getUpdatedPathProxy(),
    n = Yg(Ra(t), Ra(a)),
    i = n[0],
    o = n[1],
    s = r.getComputedTransform(),
    l = e.getComputedTransform();
  function u() {
    this.transform = null;
  }
  s && ao(i, s), l && ao(o, l), gr(e, 'updateTransform', { replace: u }), (e.transform = null);
  var v = Kg(i, o, 10, Math.PI),
    c = [];
  gr(e, 'buildPath', {
    replace: function (h) {
      for (var f = e.__morphT, d = 1 - f, p = [], g = 0; g < v.length; g++) {
        var m = v[g],
          S = m.from,
          y = m.to,
          b = m.rotation * f,
          _ = m.fromCp,
          x = m.toCp,
          w = Math.sin(b),
          I = Math.cos(b);
        wu(p, _, x, f);
        for (var L = 0; L < S.length; L += 2) {
          var D = S[L],
            T = S[L + 1],
            M = y[L],
            P = y[L + 1],
            A = D * d + M * f,
            C = T * d + P * f;
          (c[L] = A * I - C * w + p[0]), (c[L + 1] = A * w + C * I + p[1]);
        }
        var E = c[0],
          N = c[1];
        h.moveTo(E, N);
        for (var L = 2; L < S.length; ) {
          var M = c[L++],
            P = c[L++],
            V = c[L++],
            G = c[L++],
            O = c[L++],
            B = c[L++];
          E === M && N === P && V === O && G === B
            ? h.lineTo(O, B)
            : h.bezierCurveTo(M, P, V, G, O, B),
            (E = O),
            (N = B);
        }
      }
    },
  });
}
function Dn(r, e, t) {
  if (!r || !e) return e;
  var a = t.done,
    n = t.during;
  Ps(r, e), (e.__morphT = 0);
  function i() {
    Ae(e, 'buildPath'),
      Ae(e, 'updateTransform'),
      (e.__morphT = -1),
      e.createPathProxy(),
      e.dirtyShape();
  }
  return (
    e.animateTo(
      { __morphT: 1 },
      gt(
        {
          during: function (o) {
            e.dirtyShape(), n && n(o);
          },
          done: function () {
            i(), a && a();
          },
        },
        t,
      ),
    ),
    e
  );
}
function jg(r, e, t, a, n, i) {
  var o = 16;
  (r = n === t ? 0 : Math.round((32767 * (r - t)) / (n - t))),
    (e = i === a ? 0 : Math.round((32767 * (e - a)) / (i - a)));
  for (var s = 0, l, u = (1 << o) / 2; u > 0; u /= 2) {
    var v = 0,
      c = 0;
    (r & u) > 0 && (v = 1),
      (e & u) > 0 && (c = 1),
      (s += u * u * ((3 * v) ^ c)),
      c === 0 && (v === 1 && ((r = u - 1 - r), (e = u - 1 - e)), (l = r), (r = e), (e = l));
  }
  return s;
}
function yr(r) {
  var e = 1 / 0,
    t = 1 / 0,
    a = -1 / 0,
    n = -1 / 0,
    i = $(r, function (s) {
      var l = s.getBoundingRect(),
        u = s.getComputedTransform(),
        v = l.x + l.width / 2 + (u ? u[4] : 0),
        c = l.y + l.height / 2 + (u ? u[5] : 0);
      return (
        (e = Math.min(v, e)),
        (t = Math.min(c, t)),
        (a = Math.max(v, a)),
        (n = Math.max(c, n)),
        [v, c]
      );
    }),
    o = $(i, function (s, l) {
      return { cp: s, z: jg(s[0], s[1], e, t, a, n), path: r[l] };
    });
  return o
    .sort(function (s, l) {
      return s.z - l.z;
    })
    .map(function (s) {
      return s.path;
    });
}
function Es(r) {
  return Ug(r.path, r.count);
}
function ka() {
  return { fromIndividuals: [], toIndividuals: [], count: 0 };
}
function Qg(r, e, t) {
  var a = [];
  function n(_) {
    for (var x = 0; x < _.length; x++) {
      var w = _[x];
      dr(w) ? n(w.childrenRef()) : w instanceof yt && a.push(w);
    }
  }
  n(r);
  var i = a.length;
  if (!i) return ka();
  var o = t.dividePath || Es,
    s = o({ path: e, count: i });
  if (s.length !== i) return ka();
  (a = yr(a)), (s = yr(s));
  for (var l = t.done, u = t.during, v = t.individualDelay, c = new fo(), h = 0; h < i; h++) {
    var f = a[h],
      d = s[h];
    (d.parent = e), d.copyTransform(c), v || Ps(f, d);
  }
  (e.__isCombineMorphing = !0),
    (e.childrenRef = function () {
      return s;
    });
  function p(_) {
    for (var x = 0; x < s.length; x++) s[x].addSelfToZr(_);
  }
  gr(e, 'addSelfToZr', {
    after: function (_) {
      p(_);
    },
  }),
    gr(e, 'removeSelfFromZr', {
      after: function (_) {
        for (var x = 0; x < s.length; x++) s[x].removeSelfFromZr(_);
      },
    });
  function g() {
    (e.__isCombineMorphing = !1),
      (e.__morphT = -1),
      (e.childrenRef = null),
      Ae(e, 'addSelfToZr'),
      Ae(e, 'removeSelfFromZr');
  }
  var m = s.length;
  if (v)
    for (
      var S = m,
        y = function () {
          S--, S === 0 && (g(), l && l());
        },
        h = 0;
      h < m;
      h++
    ) {
      var b = v ? gt({ delay: (t.delay || 0) + v(h, m, a[h], s[h]), done: y }, t) : t;
      Dn(a[h], s[h], b);
    }
  else
    (e.__morphT = 0),
      e.animateTo(
        { __morphT: 1 },
        gt(
          {
            during: function (_) {
              for (var x = 0; x < m; x++) {
                var w = s[x];
                (w.__morphT = e.__morphT), w.dirtyShape();
              }
              u && u(_);
            },
            done: function () {
              g();
              for (var _ = 0; _ < r.length; _++) Ae(r[_], 'updateTransform');
              l && l();
            },
          },
          t,
        ),
      );
  return e.__zr && p(e.__zr), { fromIndividuals: a, toIndividuals: s, count: m };
}
function Jg(r, e, t) {
  var a = e.length,
    n = [],
    i = t.dividePath || Es;
  function o(f) {
    for (var d = 0; d < f.length; d++) {
      var p = f[d];
      dr(p) ? o(p.childrenRef()) : p instanceof yt && n.push(p);
    }
  }
  if (dr(r)) {
    o(r.childrenRef());
    var s = n.length;
    if (s < a) for (var l = 0, u = s; u < a; u++) n.push(nn(n[l++ % s]));
    n.length = a;
  } else {
    n = i({ path: r, count: a });
    for (var v = r.getComputedTransform(), u = 0; u < n.length; u++) n[u].setLocalTransform(v);
    if (n.length !== a) return ka();
  }
  (n = yr(n)), (e = yr(e));
  for (var c = t.individualDelay, u = 0; u < a; u++) {
    var h = c ? gt({ delay: (t.delay || 0) + c(u, a, n[u], e[u]) }, t) : t;
    Dn(n[u], e[u], h);
  }
  return { fromIndividuals: n, toIndividuals: e, count: e.length };
}
function no(r) {
  return F(r[0]);
}
function io(r, e) {
  for (var t = [], a = r.length, n = 0; n < a; n++) t.push({ one: r[n], many: [] });
  for (var n = 0; n < e.length; n++) {
    var i = e[n].length,
      o = void 0;
    for (o = 0; o < i; o++) t[o % a].many.push(e[n][o]);
  }
  for (var s = 0, n = a - 1; n >= 0; n--)
    if (!t[n].many.length) {
      var l = t[s].many;
      if (l.length <= 1)
        if (s) s = 0;
        else return t;
      var i = l.length,
        u = Math.ceil(i / 2);
      (t[n].many = l.slice(u, i)), (t[s].many = l.slice(0, u)), s++;
    }
  return t;
}
var ty = {
  clone: function (r) {
    for (
      var e = [], t = 1 - Math.pow(1 - r.path.style.opacity, 1 / r.count), a = 0;
      a < r.count;
      a++
    ) {
      var n = nn(r.path);
      n.setStyle('opacity', t), e.push(n);
    }
    return e;
  },
  split: null,
};
function va(r, e, t, a, n, i) {
  if (!r.length || !e.length) return;
  var o = on('update', a, n);
  if (!(o && o.duration > 0)) return;
  var s = a.getModel('universalTransition').get('delay'),
    l = Object.assign({ setToFinal: !0 }, o),
    u,
    v;
  no(r) && ((u = r), (v = e)), no(e) && ((u = e), (v = r));
  function c(m, S, y, b, _) {
    var x = m.many,
      w = m.one;
    if (x.length === 1 && !_) {
      var I = S ? x[0] : w,
        L = S ? w : x[0];
      if (dr(I)) c({ many: [I], one: L }, !0, y, b, !0);
      else {
        var D = s ? gt({ delay: s(y, b) }, l) : l;
        Dn(I, L, D), i(I, L, I, L, D);
      }
    } else
      for (
        var T = gt(
            {
              dividePath: ty[t],
              individualDelay:
                s &&
                function (N, V, G, O) {
                  return s(N + y, b);
                },
            },
            l,
          ),
          M = S ? Qg(x, w, T) : Jg(w, x, T),
          P = M.fromIndividuals,
          A = M.toIndividuals,
          C = P.length,
          E = 0;
        E < C;
        E++
      ) {
        var D = s ? gt({ delay: s(E, C) }, l) : l;
        i(P[E], A[E], S ? x[E] : m.one, S ? m.one : x[E], D);
      }
  }
  for (
    var h = u ? u === r : r.length > e.length,
      f = u ? io(v, u) : io(h ? e : r, [h ? r : e]),
      d = 0,
      p = 0;
    p < f.length;
    p++
  )
    d += f[p].many.length;
  for (var g = 0, p = 0; p < f.length; p++) c(f[p], h, g, d), (g += f[p].many.length);
}
function ne(r) {
  if (!r) return [];
  if (F(r)) {
    for (var e = [], t = 0; t < r.length; t++) e.push(ne(r[t]));
    return e;
  }
  var a = [];
  return (
    r.traverse(function (n) {
      n instanceof yt && !n.disableMorphing && !n.invisible && !n.ignore && a.push(n);
    }),
    a
  );
}
var Ns = 1e4,
  ey = 0,
  oo = 1,
  so = 2,
  ry = Lt();
function ay(r, e) {
  for (var t = r.dimensions, a = 0; a < t.length; a++) {
    var n = r.getDimensionInfo(t[a]);
    if (n && n.otherDims[e] === 0) return t[a];
  }
}
function ny(r, e, t) {
  var a = r.getDimensionInfo(t),
    n = a && a.ordinalMeta;
  if (a) {
    var i = r.get(a.name, e);
    return (n && n.categories[i]) || i + '';
  }
}
function lo(r, e, t, a) {
  var n = a ? 'itemChildGroupId' : 'itemGroupId',
    i = ay(r, n);
  if (i) {
    var o = ny(r, e, i);
    return o;
  }
  var s = r.getRawDataItem(e),
    l = a ? 'childGroupId' : 'groupId';
  if (s && s[l]) return s[l] + '';
  if (!a) return t || r.getId(e);
}
function uo(r) {
  var e = [];
  return (
    R(r, function (t) {
      var a = t.data,
        n = t.dataGroupId;
      if (!(a.count() > Ns))
        for (var i = a.getIndices(), o = 0; o < i.length; o++)
          e.push({
            data: a,
            groupId: lo(a, o, n, !1),
            childGroupId: lo(a, o, n, !0),
            divide: t.divide,
            dataIndex: o,
          });
    }),
    e
  );
}
function ca(r, e, t) {
  r.traverse(function (a) {
    a instanceof yt && wt(a, { style: { opacity: 0 } }, e, { dataIndex: t, isFrom: !0 });
  });
}
function ha(r) {
  if (r.parent) {
    var e = r.getComputedTransform();
    r.setLocalTransform(e), r.parent.remove(r);
  }
}
function ce(r) {
  r.stopAnimation(),
    r.isGroup &&
      r.traverse(function (e) {
        e.stopAnimation();
      });
}
function iy(r, e, t) {
  var a = on('update', t, e);
  a &&
    r.traverse(function (n) {
      if (n instanceof Ha) {
        var i = Iu(n);
        i && n.animateFrom({ style: i }, a);
      }
    });
}
function oy(r, e) {
  var t = r.length;
  if (t !== e.length) return !1;
  for (var a = 0; a < t; a++) {
    var n = r[a],
      i = e[a];
    if (n.data.getId(n.dataIndex) !== i.data.getId(i.dataIndex)) return !1;
  }
  return !0;
}
function Rs(r, e, t) {
  var a = uo(r),
    n = uo(e);
  function i(y, b, _, x, w) {
    (_ || y) && b.animateFrom({ style: _ && _ !== y ? U(U({}, _.style), y.style) : y.style }, w);
  }
  var o = !1,
    s = ey,
    l = mt(),
    u = mt();
  a.forEach(function (y) {
    y.groupId && l.set(y.groupId, !0), y.childGroupId && u.set(y.childGroupId, !0);
  });
  for (var v = 0; v < n.length; v++) {
    var c = n[v].groupId;
    if (u.get(c)) {
      s = oo;
      break;
    }
    var h = n[v].childGroupId;
    if (h && l.get(h)) {
      s = so;
      break;
    }
  }
  function f(y, b) {
    return function (_) {
      var x = _.data,
        w = _.dataIndex;
      return b
        ? x.getId(w)
        : y
          ? s === oo
            ? _.childGroupId
            : _.groupId
          : s === so
            ? _.childGroupId
            : _.groupId;
    };
  }
  var d = oy(a, n),
    p = {};
  if (!d)
    for (var v = 0; v < n.length; v++) {
      var g = n[v],
        m = g.data.getItemGraphicEl(g.dataIndex);
      m && (p[m.id] = !0);
    }
  function S(y, b) {
    var _ = a[b],
      x = n[y],
      w = x.data.hostModel,
      I = _.data.getItemGraphicEl(_.dataIndex),
      L = x.data.getItemGraphicEl(x.dataIndex);
    if (I === L) {
      L && iy(L, x.dataIndex, w);
      return;
    }
    (I && p[I.id]) ||
      (L &&
        (ce(L), I ? (ce(I), ha(I), (o = !0), va(ne(I), ne(L), x.divide, w, y, i)) : ca(L, w, y)));
  }
  new pe(a, n, f(!0, d), f(!1, d), null, 'multiple')
    .update(S)
    .updateManyToOne(function (y, b) {
      var _ = n[y],
        x = _.data,
        w = x.hostModel,
        I = x.getItemGraphicEl(_.dataIndex),
        L = At(
          $(b, function (D) {
            return a[D].data.getItemGraphicEl(a[D].dataIndex);
          }),
          function (D) {
            return D && D !== I && !p[D.id];
          },
        );
      I &&
        (ce(I),
        L.length
          ? (R(L, function (D) {
              ce(D), ha(D);
            }),
            (o = !0),
            va(ne(L), ne(I), _.divide, w, y, i))
          : ca(I, w, _.dataIndex));
    })
    .updateOneToMany(function (y, b) {
      var _ = a[b],
        x = _.data.getItemGraphicEl(_.dataIndex);
      if (!(x && p[x.id])) {
        var w = At(
            $(y, function (L) {
              return n[L].data.getItemGraphicEl(n[L].dataIndex);
            }),
            function (L) {
              return L && L !== x;
            },
          ),
          I = n[y[0]].data.hostModel;
        w.length &&
          (R(w, function (L) {
            return ce(L);
          }),
          x
            ? (ce(x), ha(x), (o = !0), va(ne(x), ne(w), _.divide, I, y[0], i))
            : R(w, function (L) {
                return ca(L, I, y[0]);
              }));
      }
    })
    .updateManyToMany(function (y, b) {
      new pe(
        b,
        y,
        function (_) {
          return a[_].data.getId(a[_].dataIndex);
        },
        function (_) {
          return n[_].data.getId(n[_].dataIndex);
        },
      )
        .update(function (_, x) {
          S(y[_], b[x]);
        })
        .execute();
    })
    .execute(),
    o &&
      R(e, function (y) {
        var b = y.data,
          _ = b.hostModel,
          x = _ && t.getViewOfSeriesModel(_),
          w = on('update', _, 0);
        x &&
          _.isAnimationEnabled() &&
          w &&
          w.duration > 0 &&
          x.group.traverse(function (I) {
            I instanceof yt && !I.animators.length && I.animateFrom({ style: { opacity: 0 } }, w);
          });
      });
}
function vo(r) {
  var e = r.getModel('universalTransition').get('seriesKey');
  return e || r.id;
}
function co(r) {
  return F(r) ? r.sort().join(',') : r;
}
function Ft(r) {
  if (r.hostModel) return r.hostModel.getModel('universalTransition').get('divideShape');
}
function sy(r, e) {
  var t = mt(),
    a = mt(),
    n = mt();
  return (
    R(r.oldSeries, function (i, o) {
      var s = r.oldDataGroupIds[o],
        l = r.oldData[o],
        u = vo(i),
        v = co(u);
      a.set(v, { dataGroupId: s, data: l }),
        F(u) &&
          R(u, function (c) {
            n.set(c, { key: v, dataGroupId: s, data: l });
          });
    }),
    R(e.updatedSeries, function (i) {
      if (i.isUniversalTransitionEnabled() && i.isAnimationEnabled()) {
        var o = i.get('dataGroupId'),
          s = i.getData(),
          l = vo(i),
          u = co(l),
          v = a.get(u);
        if (v)
          t.set(u, {
            oldSeries: [{ dataGroupId: v.dataGroupId, divide: Ft(v.data), data: v.data }],
            newSeries: [{ dataGroupId: o, divide: Ft(s), data: s }],
          });
        else if (F(l)) {
          var c = [];
          R(l, function (d) {
            var p = a.get(d);
            p.data && c.push({ dataGroupId: p.dataGroupId, divide: Ft(p.data), data: p.data });
          }),
            c.length &&
              t.set(u, { oldSeries: c, newSeries: [{ dataGroupId: o, data: s, divide: Ft(s) }] });
        } else {
          var h = n.get(l);
          if (h) {
            var f = t.get(h.key);
            f ||
              ((f = {
                oldSeries: [{ dataGroupId: h.dataGroupId, data: h.data, divide: Ft(h.data) }],
                newSeries: [],
              }),
              t.set(h.key, f)),
              f.newSeries.push({ dataGroupId: o, data: s, divide: Ft(s) });
          }
        }
      }
    }),
    t
  );
}
function ho(r, e) {
  for (var t = 0; t < r.length; t++) {
    var a =
      (e.seriesIndex != null && e.seriesIndex === r[t].seriesIndex) ||
      (e.seriesId != null && e.seriesId === r[t].id);
    if (a) return t;
  }
}
function ly(r, e, t, a) {
  var n = [],
    i = [];
  R(Gt(r.from), function (o) {
    var s = ho(e.oldSeries, o);
    s >= 0 &&
      n.push({
        dataGroupId: e.oldDataGroupIds[s],
        data: e.oldData[s],
        divide: Ft(e.oldData[s]),
        groupIdDim: o.dimension,
      });
  }),
    R(Gt(r.to), function (o) {
      var s = ho(t.updatedSeries, o);
      if (s >= 0) {
        var l = t.updatedSeries[s].getData();
        i.push({
          dataGroupId: e.oldDataGroupIds[s],
          data: l,
          divide: Ft(l),
          groupIdDim: o.dimension,
        });
      }
    }),
    n.length > 0 && i.length > 0 && Rs(n, i, a);
}
function uy(r) {
  r.registerUpdateLifecycle('series:beforeupdate', function (e, t, a) {
    R(Gt(a.seriesTransition), function (n) {
      R(Gt(n.to), function (i) {
        for (var o = a.updatedSeries, s = 0; s < o.length; s++)
          ((i.seriesIndex != null && i.seriesIndex === o[s].seriesIndex) ||
            (i.seriesId != null && i.seriesId === o[s].id)) &&
            (o[s][Cr] = !0);
      });
    });
  }),
    r.registerUpdateLifecycle('series:transition', function (e, t, a) {
      var n = ry(t);
      if (n.oldSeries && a.updatedSeries && a.optionChanged) {
        var i = a.seriesTransition;
        if (i)
          R(Gt(i), function (f) {
            ly(f, n, a, t);
          });
        else {
          var o = sy(n, a);
          R(o.keys(), function (f) {
            var d = o.get(f);
            Rs(d.oldSeries, d.newSeries, t);
          });
        }
        R(a.updatedSeries, function (f) {
          f[Cr] && (f[Cr] = !1);
        });
      }
      for (
        var s = e.getSeries(),
          l = (n.oldSeries = []),
          u = (n.oldDataGroupIds = []),
          v = (n.oldData = []),
          c = 0;
        c < s.length;
        c++
      ) {
        var h = s[c].getData();
        h.count() < Ns && (l.push(s[c]), u.push(s[c].get('dataGroupId')), v.push(h));
      }
    });
}
Z([kg]);
Z([Lu]);
Z([Du, Tu, Au, Cu, Mu, Pu, zv, bc, Zc, th, ch, Ih, jh, cf, Pf, Bf, ep, cp, Eu, Sp, Pp, od]);
Z(Nu);
Z(Ru);
Z(Vu);
Z(wd);
Z(Mo);
Z(ku);
Z(Gu);
Z(Bu);
Z(zu);
Z(Go);
Z(Hd);
Z(Ou);
Z(Hu);
Z(jd);
Z(ig);
Z(fg);
Z(Fu);
Z($u);
Z(Wu);
Z(Uu);
Z(Zu);
Z(Yu);
Z(Xu);
Z(qu);
Z(Dg);
Z(Cg);
Z(uy);
Z(uv);
const gy = Ju({
  __name: 'Map',
  props: {
    width: { type: String, default: '100%' },
    height: { type: String, default: 'calc(100vh - 78px)' },
  },
  setup(r) {
    const e = tv(null),
      { setOptions: t } = Ku(e);
    return (
      ev(() =>
        Cn(this, null, function* () {
          const a = yield (yield Vs(() => import('./china-BPXA1fkd.js'), [])).default;
          ju('china', a),
            t({
              visualMap: [
                {
                  min: 0,
                  max: 1e3,
                  left: 'left',
                  top: 'bottom',
                  text: ['高', '低'],
                  calculable: !1,
                  orient: 'horizontal',
                  inRange: { color: ['#e0ffff', '#006edd'], symbolSize: [30, 100] },
                },
              ],
              tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0, 0, 0, .6)',
                textStyle: { color: '#fff', fontSize: 12 },
              },
              series: [
                {
                  name: 'iphone4',
                  type: 'map',
                  map: 'china',
                  label: { show: !0, color: 'rgb(249, 249, 249)', fontSize: 10 },
                  itemStyle: { areaColor: '#2f82ce', borderColor: '#0DAAC1' },
                  data: Qu,
                },
              ],
            });
        }),
      ),
      (a, n) => (
        rv(),
        av(
          'div',
          { ref_key: 'chartRef', ref: e, style: nv({ height: r.height, width: r.width }) },
          null,
          4,
        )
      )
    );
  },
});
export { gy as default };
