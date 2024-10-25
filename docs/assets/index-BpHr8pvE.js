var $e = Object.defineProperty,
  je = Object.defineProperties;
var Ge = Object.getOwnPropertyDescriptors;
var ge = Object.getOwnPropertySymbols;
var Ke = Object.prototype.hasOwnProperty,
  Ve = Object.prototype.propertyIsEnumerable;
var ve = (e, u, t) =>
    u in e ? $e(e, u, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[u] = t),
  k = (e, u) => {
    for (var t in u || (u = {})) Ke.call(u, t) && ve(e, t, u[t]);
    if (ge) for (var t of ge(u)) Ve.call(u, t) && ve(e, t, u[t]);
    return e;
  },
  H = (e, u) => je(e, Ge(u));
var G = (e, u, t) =>
  new Promise((n, f) => {
    var C = (g) => {
        try {
          s(t.next(g));
        } catch (h) {
          f(h);
        }
      },
      S = (g) => {
        try {
          s(t.throw(g));
        } catch (h) {
          f(h);
        }
      },
      s = (g) => (g.done ? n(g.value) : Promise.resolve(g.value).then(C, S));
    s((t = t.apply(e, u)).next());
  });
import {
  p as q,
  h as X,
  V as He,
  f as We,
  W as qe,
  z as ue,
  X as he,
  Y as Ze,
  Z as be,
  a as de,
  $ as _e,
  I as pe,
  H as xe,
  w as Pe,
} from '../index.js';
import { u as Xe, a as Ie, B as Oe, b as ye } from './index-RbNU_lzt.js';
import {
  c as z,
  u as r,
  e as Ye,
  p as Je,
  d as V,
  a7 as fe,
  Z as P,
  _ as M,
  F as W,
  aa as Qe,
  a8 as B,
  a9 as O,
  ab as F,
  a1 as oe,
  J as we,
  k as m,
  G as j,
  a0 as $,
  ac as K,
  ae as et,
  f as E,
  w as J,
  o as tt,
  y as Se,
  I as Re,
  $ as ie,
  K as nt,
} from './vue-BjERyvPm.js';
import {
  o as ne,
  T as Ue,
  a4 as at,
  aB as lt,
  ai as ot,
  e as Z,
  l as me,
  aC as st,
  aD as rt,
  Q as se,
  aE as ut,
  aF as ce,
  ae as ke,
  Y as it,
  aG as ct,
  M as dt,
} from './antd-BmrhB3rb.js';
import { b as ae } from './uuid-D0SLUWHI.js';
import { u as pt } from './useSortable-D6mV6aGQ.js';
import { d as ft } from './download-B80gEl-k.js';
const Ae = {
    previewColumns: { type: [Array, Function], required: !1 },
    beforePreviewData: { type: Function, default: null, required: !1 },
  },
  De = {
    disabled: { type: Boolean, default: !1 },
    listType: { type: String, default: 'picture-card' },
    helpText: { type: String, default: '' },
    maxSize: { type: Number, default: 2 },
    maxNumber: { type: Number, default: 1 },
    accept: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    uploadParams: { type: Object, default: () => ({}) },
    api: { type: Function, default: null, required: !0 },
    name: { type: String, default: 'file' },
    filename: { type: String, default: null },
    fileListOpenDrag: { type: Boolean, default: !0 },
    fileListDragOptions: { type: Object, default: () => ({}) },
    resultField: q.string.def(''),
  },
  Le = k(
    H(k({ value: { type: Array, default: () => [] } }, De), {
      showPreviewNumber: { type: Boolean, default: !0 },
      emptyHidePreview: { type: Boolean, default: !1 },
    }),
    Ae,
  ),
  mt = k(
    { value: { type: Array, default: () => [] }, maxNumber: { type: Number, default: 1 } },
    Ae,
  ),
  gt = {
    columns: { type: Array, default: null },
    actionColumn: { type: Object, default: null },
    dataSource: { type: Array, default: null },
    openDrag: { type: Boolean, default: !1 },
    dragOptions: { type: Object, default: () => ({}) },
  },
  { t: re } = X();
function Ne({ acceptRef: e, helpTextRef: u, maxNumberRef: t, maxSizeRef: n }) {
  const f = z(() => {
      const s = r(e);
      return s && s.length > 0 ? s : [];
    }),
    C = z(() =>
      r(f)
        .map((s) => (s.indexOf('/') > 0 || s.startsWith('.') ? s : `.${s}`))
        .join(','),
    ),
    S = z(() => {
      const s = r(u);
      if (s) return s;
      const g = [],
        h = r(e);
      h.length > 0 && g.push(re('component.upload.accept', [h.join(',')]));
      const b = r(n);
      b && g.push(re('component.upload.maxSize', [b]));
      const i = r(t);
      return i && i !== 1 / 0 && g.push(re('component.upload.maxNumber', [i])), g.join('，');
    });
  return { getAccept: f, getStringAccept: C, getHelpText: S };
}
var A = ((e) => (
  (e.DONE = 'done'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), (e.UPLOADING = 'uploading'), e
))(A || {});
function vt(e, u) {
  let t;
  if (!u || u.length === 0) t = /.(jpg|jpeg|png|gif|webp)$/i;
  else {
    const n = u.join('|');
    t = new RegExp('\\.(' + n + ')$', 'i');
  }
  return t.test(e.name);
}
function ht(e) {
  return Te(e.name);
}
function Te(e) {
  return /\.(jpg|jpeg|png|gif|webp)$/i.test(e);
}
function bt(e) {
  return new Promise((u, t) => {
    const n = new FileReader();
    n.readAsDataURL(e),
      (n.onload = () => u({ result: n.result, file: e })),
      (n.onerror = (f) => t(f));
  });
}
const Fe = Symbol('basic-table');
function qt(e) {
  Je(Fe, e);
}
function yt() {
  return Ye(Fe);
}
const { table: wt } = He,
  {
    pageSizeOptions: St,
    defaultPageSize: Ct,
    fetchSetting: _t,
    defaultSize: xt,
    defaultSortFn: Pt,
    defaultFilterFn: It,
  } = wt,
  Zt = 'key',
  Xt = St,
  Yt = Ct,
  Jt = _t,
  Qt = xt,
  en = Pt,
  tn = It,
  nn = 'center',
  an = 'INDEX',
  Ot = 'ACTION',
  Ee = V({
    name: 'TableAction',
    __name: 'TableAction',
    props: {
      actions: { type: Array, default: null },
      dropDownActions: { type: Array, default: null },
      divider: q.bool.def(!0),
      outside: q.bool,
      stopButtonPropagation: q.bool.def(!1),
    },
    setup(e) {
      const u = e,
        { prefixCls: t } = We('basic-table-action');
      let n = {};
      u.outside || (n = yt());
      const { hasPermission: f } = qe();
      function C(i) {
        const o = i.ifShow;
        let c = !0;
        return ot(o) && (c = o), Z(o) && (c = o(i)), c;
      }
      const S = z(() =>
          (we(u.actions) || [])
            .filter((i) => f(i.auth) && C(i))
            .map((i) => {
              const { popConfirm: o } = i;
              return H(
                k(
                  k(
                    {
                      getPopupContainer: () => {
                        var c;
                        return (c = r(n == null ? void 0 : n.wrapRef)) != null ? c : document.body;
                      },
                      type: 'link',
                      size: 'small',
                    },
                    i,
                  ),
                  o || {},
                ),
                {
                  onConfirm: o == null ? void 0 : o.confirm,
                  onCancel: o == null ? void 0 : o.cancel,
                  enable: !!o,
                },
              );
            }),
        ),
        s = z(() => {
          const i = (we(u.dropDownActions) || []).filter((o) => f(o.auth) && C(o));
          return i.map((o, c) => {
            const { label: a, popConfirm: p } = o;
            return H(k(k({}, o), p), {
              onConfirm: p == null ? void 0 : p.confirm,
              onCancel: p == null ? void 0 : p.cancel,
              text: a,
              divider: c < i.length - 1 ? u.divider : !1,
            });
          });
        }),
        g = z(() => {
          var c, a;
          const o = (
            ((c = n == null ? void 0 : n.getColumns) == null ? void 0 : c.call(n)) || []
          ).find((p) => p.flag === Ot);
          return (a = o == null ? void 0 : o.align) != null ? a : 'left';
        });
      function h(i) {
        return k(
          {
            getPopupContainer: () => {
              var o;
              return (o = r(n == null ? void 0 : n.wrapRef)) != null ? o : document.body;
            },
            placement: 'bottom',
          },
          me(i) ? { title: i } : i,
        );
      }
      function b(i) {
        if (!u.stopButtonPropagation) return;
        i.composedPath().find((a) => {
          var p;
          return ((p = a.tagName) == null ? void 0 : p.toUpperCase()) === 'BUTTON';
        }) && i.stopPropagation();
      }
      return (i, o) => {
        const c = fe('a-button');
        return (
          P(),
          M(
            'div',
            { class: oe([r(t), g.value]), onClick: b },
            [
              (P(!0),
              M(
                W,
                null,
                Qe(
                  S.value,
                  (a, p) => (
                    P(),
                    M(
                      W,
                      { key: `${p}-${a.label}` },
                      [
                        a.tooltip
                          ? (P(),
                            B(
                              r(Ue),
                              K({ key: 0, ref_for: !0 }, h(a.tooltip)),
                              {
                                default: O(() => [
                                  m(
                                    r(he),
                                    K({ ref_for: !0 }, r(ne)(a, 'icon')),
                                    {
                                      default: O(() => [
                                        a.icon
                                          ? (P(),
                                            B(
                                              ue,
                                              {
                                                key: 0,
                                                icon: a.icon,
                                                class: oe({ 'mr-1': !!a.label }),
                                              },
                                              null,
                                              8,
                                              ['icon', 'class'],
                                            ))
                                          : F('', !0),
                                        a.label
                                          ? (P(), M(W, { key: 1 }, [j($(a.label), 1)], 64))
                                          : F('', !0),
                                      ]),
                                      _: 2,
                                    },
                                    1040,
                                  ),
                                ]),
                                _: 2,
                              },
                              1040,
                            ))
                          : (P(),
                            B(
                              r(he),
                              K({ key: 1, ref_for: !0 }, r(ne)(a, 'icon')),
                              {
                                default: O(() => [
                                  a.icon
                                    ? (P(),
                                      B(
                                        ue,
                                        { key: 0, icon: a.icon, class: oe({ 'mr-1': !!a.label }) },
                                        null,
                                        8,
                                        ['icon', 'class'],
                                      ))
                                    : F('', !0),
                                  a.label
                                    ? (P(), M(W, { key: 1 }, [j($(a.label), 1)], 64))
                                    : F('', !0),
                                ]),
                                _: 2,
                              },
                              1040,
                            )),
                        e.divider && p < S.value.length - 1
                          ? (P(), B(r(at), { key: 2, type: 'vertical', class: 'action-divider' }))
                          : F('', !0),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
              e.dropDownActions && s.value.length > 0
                ? (P(),
                  B(
                    r(Ze),
                    { key: 0, trigger: ['hover'], dropMenuList: s.value, popconfirm: '' },
                    {
                      default: O(() => [
                        et(i.$slots, 'more'),
                        i.$slots.more
                          ? F('', !0)
                          : (P(),
                            B(
                              c,
                              { key: 0, type: 'link', size: 'small' },
                              { default: O(() => [m(r(lt), { class: 'icon-more' })]), _: 1 },
                            )),
                      ]),
                      _: 3,
                    },
                    8,
                    ['dropMenuList'],
                  ))
                : F('', !0),
            ],
            2,
          )
        );
      };
    },
  }),
  Rt = { class: 'thumb' },
  Be = V({
    __name: 'ThumbUrl',
    props: { fileUrl: q.string.def(''), fileName: q.string.def('') },
    setup(e) {
      return (u, t) => (
        P(),
        M('span', Rt, [
          e.fileUrl
            ? (P(), B(r(st), { key: 0, src: e.fileUrl, width: 104 }, null, 8, ['src']))
            : F('', !0),
        ])
      );
    },
  }),
  { t: N } = X();
function Ut() {
  return [
    {
      dataIndex: 'thumbUrl',
      title: N('component.upload.legend'),
      width: 100,
      customRender: ({ record: e }) => {
        const { thumbUrl: u } = e || {};
        return u && m(Be, { fileUrl: u }, null);
      },
    },
    {
      dataIndex: 'name',
      title: N('component.upload.fileName'),
      align: 'left',
      customRender: ({ text: e, record: u }) => {
        const { percent: t, status: n } = u || {};
        let f = 'normal';
        return (
          n === A.ERROR
            ? (f = 'exception')
            : n === A.UPLOADING
              ? (f = 'active')
              : n === A.SUCCESS && (f = 'success'),
          m('div', null, [
            m('p', { class: 'truncate mb-1 max-w-[280px]', title: e }, [e]),
            m(rt, { percent: t, size: 'small', status: f }, null),
          ])
        );
      },
    },
    {
      dataIndex: 'size',
      title: N('component.upload.fileSize'),
      width: 100,
      customRender: ({ text: e = 0 }) => e && (e / 1024).toFixed(2) + 'KB',
    },
    {
      dataIndex: 'status',
      title: N('component.upload.fileStatue'),
      width: 100,
      customRender: ({ text: e }) =>
        e === A.SUCCESS
          ? m(se, { color: 'green' }, { default: () => N('component.upload.uploadSuccess') })
          : e === A.ERROR
            ? m(se, { color: 'red' }, { default: () => N('component.upload.uploadError') })
            : e === A.UPLOADING
              ? m(se, { color: 'blue' }, { default: () => N('component.upload.uploading') })
              : e || N('component.upload.pending'),
    },
  ];
}
function kt(e) {
  return {
    width: 120,
    title: N('component.upload.operating'),
    dataIndex: 'action',
    fixed: !1,
    customRender: ({ record: u }) => {
      const t = [
        {
          label: N('component.upload.del'),
          color: 'error',
          onClick: e.bind(null, { record: u, uidKey: 'uid', valueKey: 'url' }),
        },
      ];
      return m(Ee, { actions: t, outside: !0 }, null);
    },
  };
}
function Ce() {
  return [
    {
      dataIndex: 'url',
      title: N('component.upload.legend'),
      width: 100,
      customRender: ({ record: e }) => {
        const { url: u } = e || {};
        return Te(u) && m(Be, { fileUrl: u }, null);
      },
    },
    { dataIndex: 'name', title: N('component.upload.fileName'), align: 'left' },
  ];
}
function At({ handleRemove: e, handleDownload: u }) {
  return {
    width: 160,
    title: N('component.upload.operating'),
    dataIndex: 'action',
    fixed: !1,
    customRender: ({ record: t }) => {
      const n = [
        {
          label: N('component.upload.del'),
          color: 'error',
          onClick: e.bind(null, { record: t, uidKey: 'uid', valueKey: 'url' }),
        },
        { label: N('component.upload.download'), onClick: u.bind(null, t) },
      ];
      return m(Ee, { actions: n, outside: !0 }, null);
    },
  };
}
const Me = V({
    name: 'FileList',
    props: gt,
    setup(e, { emit: u }) {
      const t = Xe(),
        n = E();
      return (
        J(
          () => e.dataSource,
          () => {
            Se(() => {
              var f;
              (f = t == null ? void 0 : t.redoModalHeight) == null || f.call(t);
            });
          },
        ),
        e.openDrag &&
          tt(() =>
            pt(
              n,
              H(k({}, e.dragOptions), {
                onEnd: ({ oldIndex: f, newIndex: C }) => {
                  if (f === C) return;
                  const { onAfterEnd: S } = e.dragOptions;
                  if (be(f) && be(C)) {
                    const s = [...e.dataSource],
                      [g] = s.splice(f, 1);
                    s.splice(C, 0, g),
                      Se(() => {
                        u('update:dataSource', s), Z(S) && S(s);
                      });
                  }
                },
              }),
            ).initSortable(),
          ),
        () => {
          const { columns: f, actionColumn: C, dataSource: S } = e;
          let s;
          return (
            (s = C ? [...f, C] : [...f]),
            m('div', { class: 'overflow-x-auto' }, [
              m('table', { class: 'file-table' }, [
                m('colgroup', null, [
                  s.map((g) => {
                    const { width: h = 0, dataIndex: b } = g,
                      i = { width: `${h}px`, minWidth: `${h}px` };
                    return m('col', { style: h ? i : {}, key: b }, null);
                  }),
                ]),
                m('thead', null, [
                  m('tr', { class: 'file-table-tr' }, [
                    s.map((g) => {
                      const { title: h = '', align: b = 'center', dataIndex: i } = g;
                      return m('th', { class: ['file-table-th', b], key: i }, [h]);
                    }),
                  ]),
                ]),
                m('tbody', { ref: n }, [
                  S.map((g = {}, h) =>
                    m('tr', { class: 'file-table-tr', key: `${h + g.name || ''}` }, [
                      s.map((b) => {
                        const { dataIndex: i = '', customRender: o, align: c = 'center' } = b,
                          a = o && Z(o);
                        return m('td', { class: ['file-table-td break-all', c], key: i }, [
                          a ? (o == null ? void 0 : o({ text: g[i], record: g })) : g[i],
                        ]);
                      }),
                    ]),
                  ),
                ]),
              ]),
            ])
          );
        }
      );
    },
  }),
  Dt = { class: 'upload-modal-toolbar' },
  Lt = V({
    __name: 'UploadModal',
    props: H(k({}, De), { previewFileList: { type: Array, default: () => [] } }),
    emits: ['change', 'register', 'delete'],
    setup(e, { emit: u }) {
      const t = e,
        n = u,
        f = Ut(),
        C = kt(Q),
        S = E(!1),
        s = E([]),
        { accept: g, helpText: h, maxNumber: b, maxSize: i } = Re(t),
        { t: o } = X(),
        [c, { closeModal: a }] = Ie(),
        { getStringAccept: p, getHelpText: D } = Ne({
          acceptRef: g,
          helpTextRef: h,
          maxNumberRef: b,
          maxSizeRef: i,
        }),
        { createMessage: R } = de(),
        T = z(() => s.value.length > 0 && !s.value.every((l) => l.status === A.SUCCESS)),
        w = z(() => {
          const l = s.value.some((v) => v.status === A.SUCCESS);
          return { disabled: S.value || s.value.length === 0 || !l };
        }),
        L = z(() => {
          const l = s.value.some((v) => v.status === A.ERROR);
          return S.value
            ? o('component.upload.uploading')
            : o(l ? 'component.upload.reUploadFailed' : 'component.upload.startUpload');
        });
      function _(l) {
        const { size: v, name: x } = l,
          { maxSize: U } = t;
        if (U && l.size / 1024 / 1024 >= U)
          return R.error(o('component.upload.maxSizeMultiple', [U])), !1;
        const I = { uuid: ae(), file: l, size: v, name: x, percent: 0, type: x.split('.').pop() };
        return (
          ht(l)
            ? bt(l).then(({ result: Y }) => {
                s.value = [...r(s), k({ thumbUrl: Y }, I)];
              })
            : (s.value = [...r(s), I]),
          !1
        );
      }
      function Q(l) {
        const v = s.value.findIndex((x) => x.uuid === l.uuid);
        v !== -1 && s.value.splice(v, 1),
          (S.value = s.value.some((x) => x.status === A.UPLOADING)),
          n('delete', l);
      }
      function le(l) {
        return G(this, null, function* () {
          var x;
          const { api: v } = t;
          if (!v || !Z(v)) return _e();
          try {
            l.status = A.UPLOADING;
            const U = yield (x = t.api) == null
                ? void 0
                : x.call(
                    t,
                    {
                      data: k({}, t.uploadParams || {}),
                      file: l.file,
                      name: t.name,
                      filename: t.filename,
                    },
                    function (te) {
                      const ze = ((te.loaded / te.total) * 100) | 0;
                      l.percent = ze;
                    },
                  ),
              { data: I } = U;
            return (
              (l.status = A.SUCCESS),
              (l.response = I),
              t.resultField &&
                (l.response = { code: 0, message: 'upload Success!', url: ke(U, t.resultField) }),
              { success: !0, error: null }
            );
          } catch (U) {
            return (l.status = A.ERROR), { success: !1, error: U };
          }
        });
      }
      function ee() {
        return G(this, null, function* () {
          const { maxNumber: l } = t;
          if (s.value.length + t.previewFileList.length > l)
            return R.warning(o('component.upload.maxNumber', [l]));
          try {
            S.value = !0;
            const v = s.value.filter((I) => I.status !== A.SUCCESS) || [],
              x = yield Promise.all(v.map((I) => le(I)));
            S.value = !1;
            const U = x.filter((I) => !I.success);
            if (U.length > 0) throw U;
          } catch (v) {
            throw ((S.value = !1), v);
          }
        });
      }
      function y() {
        const { maxNumber: l } = t;
        if (s.value.length > l) return R.warning(o('component.upload.maxNumber', [l]));
        if (S.value) return R.warning(o('component.upload.saveWarn'));
        const v = [];
        for (const x of s.value) {
          const { status: U, response: I } = x;
          U === A.SUCCESS && I && v.push(I.url);
        }
        if (v.length <= 0) return R.warning(o('component.upload.saveError'));
        (s.value = []), a(), n('change', v);
      }
      function d() {
        return G(this, null, function* () {
          return S.value ? (R.warning(o('component.upload.uploadWait')), !1) : ((s.value = []), !0);
        });
      }
      return (l, v) => {
        const x = fe('a-button');
        return (
          P(),
          B(
            r(Oe),
            K(
              {
                width: '800px',
                title: r(o)('component.upload.upload'),
                okText: r(o)('component.upload.save'),
              },
              l.$attrs,
              {
                onRegister: r(c),
                onOk: y,
                closeFunc: d,
                maskClosable: !1,
                keyboard: !1,
                class: 'upload-modal',
                okButtonProps: w.value,
                cancelButtonProps: { disabled: S.value },
              },
            ),
            {
              centerFooter: O(() => [
                m(
                  x,
                  { onClick: ee, color: 'success', disabled: !T.value, loading: S.value },
                  { default: O(() => [j($(L.value), 1)]), _: 1 },
                  8,
                  ['disabled', 'loading'],
                ),
              ]),
              default: O(() => [
                ie('div', Dt, [
                  m(
                    r(ut),
                    {
                      message: r(D),
                      type: 'info',
                      banner: '',
                      class: 'upload-modal-toolbar__text',
                    },
                    null,
                    8,
                    ['message'],
                  ),
                  m(
                    r(ce),
                    {
                      accept: r(p),
                      multiple: l.multiple,
                      'before-upload': _,
                      'show-upload-list': !1,
                      class: 'upload-modal-toolbar__btn',
                    },
                    {
                      default: O(() => [
                        m(
                          x,
                          { type: 'primary' },
                          { default: O(() => [j($(r(o)('component.upload.choose')), 1)]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ['accept', 'multiple'],
                  ),
                ]),
                m(
                  Me,
                  {
                    dataSource: s.value,
                    'onUpdate:dataSource': v[0] || (v[0] = (U) => (s.value = U)),
                    columns: r(f),
                    actionColumn: r(C),
                    openDrag: l.fileListOpenDrag,
                    dragOptions: l.fileListDragOptions,
                  },
                  null,
                  8,
                  ['dataSource', 'columns', 'actionColumn', 'openDrag', 'dragOptions'],
                ),
              ]),
              _: 1,
            },
            16,
            ['title', 'okText', 'onRegister', 'okButtonProps', 'cancelButtonProps'],
          )
        );
      };
    },
  }),
  Nt = V({
    __name: 'UploadPreviewModal',
    props: mt,
    emits: ['list-change', 'register', 'delete'],
    setup(e, { emit: u }) {
      const { createMessage: t } = de(),
        n = e,
        f = u;
      let C = Ce(),
        S;
      const [s] = Ie(),
        { t: g } = X(),
        h = E([]);
      J(
        () => n.previewColumns,
        () => {
          Array.isArray(n.previewColumns) && n.previewColumns.length
            ? ((C = n.previewColumns), (S = null))
            : Z(n.previewColumns)
              ? (C = n.previewColumns({ handleRemove: b, handleAdd: i }))
              : ((C = Ce()), (S = At({ handleRemove: b, handleDownload: o })));
        },
        { immediate: !0 },
      ),
        J(
          () => n.value,
          (c) => {
            if ((pe(c) || (c = []), n.beforePreviewData)) {
              (c = n.beforePreviewData(c)), (h.value = c);
              return;
            }
            h.value = c
              .filter((a) => !!a)
              .map((a) => {
                var p, D;
                if (typeof a == 'object')
                  return {
                    uid: a == null ? void 0 : a.uid,
                    url: a == null ? void 0 : a.url,
                    type:
                      ((p = a == null ? void 0 : a.url) == null ? void 0 : p.split('.').pop()) ||
                      '',
                    name:
                      ((D = a == null ? void 0 : a.url) == null ? void 0 : D.split('/').pop()) ||
                      '',
                  };
              });
          },
          { immediate: !0 },
        );
      function b(c) {
        let { record: a = {}, valueKey: p = 'url', uidKey: D = 'uid' } = c;
        const R = h.value.findIndex((T) => T[D] === a[D]);
        if (R !== -1) {
          const T = h.value.splice(R, 1);
          f('delete', T[0][D]), f('list-change', h.value, p);
        }
      }
      function i(c) {
        var T;
        let { record: a = {}, valueKey: p = 'url', uidKey: D = 'uid' } = c;
        const { maxNumber: R } = n;
        if (h.value.length + h.value.length > R)
          return t.warning(g('component.upload.maxNumber', [R]));
        (a[D] = (T = a[D]) != null ? T : ae()),
          (a[p] = a[p]),
          (h.value = [...h.value, a]),
          f('list-change', h.value, p);
      }
      function o(c) {
        const { url: a = '' } = c;
        ft({ url: a });
      }
      return (c, a) => (
        P(),
        B(
          r(Oe),
          K(
            {
              width: '800px',
              title: r(g)('component.upload.preview'),
              class: 'upload-preview-modal',
            },
            c.$attrs,
            { onRegister: r(s), showOkBtn: !1 },
          ),
          {
            default: O(() => [
              m(Me, { dataSource: h.value, columns: r(C), actionColumn: r(S) }, null, 8, [
                'dataSource',
                'columns',
                'actionColumn',
              ]),
            ]),
            _: 1,
          },
          16,
          ['title', 'onRegister'],
        )
      );
    },
  }),
  Tt = V({
    name: 'BasicUpload',
    __name: 'BasicUpload',
    props: Le,
    emits: ['change', 'delete', 'preview-delete', 'update:value'],
    setup(e, { emit: u }) {
      const t = e,
        n = u,
        f = nt(),
        { t: C } = X(),
        [S, { openModal: s }] = ye(),
        [g, { openModal: h }] = ye(),
        b = E([]),
        i = z(() => {
          const { emptyHidePreview: w } = t;
          return w && w ? b.value.length > 0 : !0;
        }),
        o = z(() => {
          const w = k(k({}, f), t);
          return ne(w, 'onChange');
        });
      function c(w = 'url') {
        return (b.value || []).map((_) => _[w]);
      }
      function a(w) {
        return w.map((_) => ({ uid: ae(), url: _ }));
      }
      J(
        () => t.value,
        (w = []) => {
          let L = [];
          w &&
            (pe(w) ? (L = w) : typeof w == 'string' && L.push(w),
            (b.value = L.map((_, Q) =>
              _ && me(_) ? { uid: ae(), url: _ } : _ && xe(_) ? _ : void 0,
            ))),
            n('update:value', L),
            n('change', L);
        },
        { immediate: !0 },
      );
      function p(w, L) {
        b.value = [...r(b), ...(a(w) || [])];
        const _ = c(L);
        n('update:value', _), n('change', _);
      }
      function D(w, L) {
        b.value = [...(w || [])];
        const _ = c(L);
        n('update:value', _), n('change', _);
      }
      function R(w) {
        n('delete', w);
      }
      function T(w) {
        n('preview-delete', w);
      }
      return (w, L) => {
        const _ = fe('a-button');
        return (
          P(),
          M('div', null, [
            m(r(it), null, {
              default: O(() => [
                m(
                  _,
                  {
                    type: 'primary',
                    onClick: r(s),
                    preIcon: 'carbon:cloud-upload',
                    disabled: w.disabled,
                  },
                  { default: O(() => [j($(r(C)('component.upload.upload')), 1)]), _: 1 },
                  8,
                  ['onClick', 'disabled'],
                ),
                i.value
                  ? (P(),
                    B(
                      r(Ue),
                      { key: 0, placement: 'bottom' },
                      {
                        title: O(() => [
                          j($(r(C)('component.upload.uploaded')) + ' ', 1),
                          b.value.length
                            ? (P(), M(W, { key: 0 }, [j($(b.value.length), 1)], 64))
                            : F('', !0),
                        ]),
                        default: O(() => [
                          m(
                            _,
                            { onClick: r(h) },
                            {
                              default: O(() => [
                                m(ue, { icon: 'bi:eye' }),
                                b.value.length && w.showPreviewNumber
                                  ? (P(), M(W, { key: 0 }, [j($(b.value.length), 1)], 64))
                                  : F('', !0),
                              ]),
                              _: 1,
                            },
                            8,
                            ['onClick'],
                          ),
                        ]),
                        _: 1,
                      },
                    ))
                  : F('', !0),
              ]),
              _: 1,
            }),
            m(
              Lt,
              K(o.value, {
                previewFileList: b.value,
                fileListOpenDrag: w.fileListOpenDrag,
                fileListDragOptions: w.fileListDragOptions,
                onRegister: r(S),
                onChange: p,
                onDelete: R,
              }),
              null,
              16,
              ['previewFileList', 'fileListOpenDrag', 'fileListDragOptions', 'onRegister'],
            ),
            m(
              Nt,
              {
                value: b.value,
                'max-number': o.value.maxNumber,
                onRegister: r(g),
                onListChange: D,
                onDelete: T,
                'preview-columns': t.previewColumns,
                'before-preview-data': t.beforePreviewData,
              },
              null,
              8,
              ['value', 'max-number', 'onRegister', 'preview-columns', 'before-preview-data'],
            ),
          ])
        );
      };
    },
  }),
  Ft = { key: 0 },
  Et = { style: { 'margin-top': '8px' } },
  Bt = ['src'],
  Mt = V({
    name: 'ImageUpload',
    __name: 'ImageUpload',
    props: k({}, ne(Le, ['previewColumns', 'beforePreviewData'])),
    emits: ['change', 'update:value', 'delete'],
    setup(e, { emit: u }) {
      const t = u,
        n = e,
        { t: f } = X(),
        { createMessage: C } = de(),
        { accept: S, helpText: s, maxNumber: g, maxSize: h } = Re(n),
        b = E(!1),
        { getStringAccept: i } = Ne({
          acceptRef: S,
          helpTextRef: s,
          maxNumberRef: g,
          maxSizeRef: h,
        }),
        o = E(!1),
        c = E(''),
        a = E(''),
        p = E([]),
        D = E(!0),
        R = E(!0);
      J(
        () => n.value,
        (y) => {
          if (b.value) {
            b.value = !1;
            return;
          }
          let d = [];
          y &&
            (pe(y) ? (d = y) : d.push(y),
            (p.value = d.map((l, v) =>
              l && me(l)
                ? {
                    uid: -v + '',
                    name: l.substring(l.lastIndexOf('/') + 1),
                    status: 'done',
                    url: l,
                  }
                : l && xe(l)
                  ? l
                  : void 0,
            ))),
            t('update:value', d),
            t('change', d);
        },
        { immediate: !0, deep: !0 },
      );
      function T(y) {
        return new Promise((d, l) => {
          const v = new FileReader();
          v.readAsDataURL(y),
            (v.onload = () => {
              d(v.result);
            }),
            (v.onerror = (x) => l(x));
        });
      }
      const w = (y) =>
          G(this, null, function* () {
            !y.url && !y.preview && (y.preview = yield T(y.originFileObj)),
              (c.value = y.url || y.preview || ''),
              (o.value = !0),
              (a.value = y.name || c.value.substring(c.value.lastIndexOf('/') + 1));
          }),
        L = (y) =>
          G(this, null, function* () {
            if (p.value) {
              const d = p.value.findIndex((v) => v.uid === y.uid);
              d !== -1 && p.value.splice(d, 1);
              const l = ee();
              (b.value = !0), t('update:value', l), t('change', l), t('delete', y);
            }
          }),
        _ = () => {
          (o.value = !1), (a.value = '');
        },
        Q = (y) => {
          const { maxSize: d, accept: l } = n,
            v = vt(y, l);
          v ||
            (C.error(f('component.upload.acceptUpload', [l])),
            (R.value = !1),
            setTimeout(() => (R.value = !0), 1e3));
          const x = y.size / 1024 / 1024 > d;
          return (
            x &&
              (C.error(f('component.upload.maxSizeMultiple', [d])),
              (D.value = !1),
              setTimeout(() => (D.value = !0), 1e3)),
            (v && !x) || ce.LIST_IGNORE
          );
        };
      function le(y) {
        return G(this, null, function* () {
          const { api: d, uploadParams: l = {}, name: v, filename: x, resultField: U } = n;
          if (!d || !Z(d)) return _e();
          try {
            const I = yield d == null
              ? void 0
              : d({ data: k({}, l), file: y.file, name: v, filename: x });
            if (n.resultField) {
              let te = ke(I, U);
              y.onSuccess(te);
            } else y.onSuccess(I.data);
            const Y = ee();
            (b.value = !0), t('update:value', Y), t('change', Y);
          } catch (I) {
            y.onError(I);
          }
        });
      }
      function ee() {
        return (p.value || [])
          .filter((d) => (d == null ? void 0 : d.status) === A.DONE)
          .map((d) => {
            var l;
            return d != null && d.response && n != null && n.resultField
              ? d == null
                ? void 0
                : d.response
              : (d == null ? void 0 : d.url) ||
                  ((l = d == null ? void 0 : d.response) == null ? void 0 : l.url);
          });
      }
      return (y, d) => (
        P(),
        M('div', null, [
          m(
            r(ce),
            K(y.$attrs, {
              'file-list': p.value,
              'onUpdate:fileList': d[0] || (d[0] = (l) => (p.value = l)),
              'list-type': y.listType,
              accept: r(i),
              multiple: y.multiple,
              maxCount: r(g),
              'before-upload': Q,
              'custom-request': le,
              disabled: y.disabled,
              onPreview: w,
              onRemove: L,
            }),
            {
              default: O(() => [
                p.value && p.value.length < r(g)
                  ? (P(),
                    M('div', Ft, [m(r(ct)), ie('div', Et, $(r(f)('component.upload.upload')), 1)]))
                  : F('', !0),
              ]),
              _: 1,
            },
            16,
            ['file-list', 'list-type', 'accept', 'multiple', 'maxCount', 'disabled'],
          ),
          m(
            r(dt),
            { open: o.value, title: a.value, footer: null, onCancel: _ },
            {
              default: O(() => [
                ie('img', { alt: '', style: { width: '100%' }, src: c.value }, null, 8, Bt),
              ]),
              _: 1,
            },
            8,
            ['open', 'title'],
          ),
        ])
      );
    },
  }),
  ln = Pe(Mt),
  on = Pe(Tt);
export {
  Ot as A,
  on as B,
  nn as D,
  Jt as F,
  ln as I,
  Yt as P,
  Zt as R,
  Ee as _,
  Xt as a,
  an as b,
  qt as c,
  en as d,
  tn as e,
  Qt as f,
  yt as u,
};