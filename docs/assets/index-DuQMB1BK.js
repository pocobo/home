var h = Object.defineProperty,
  w = Object.defineProperties;
var A = Object.getOwnPropertyDescriptors;
var c = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  V = Object.prototype.propertyIsEnumerable;
var M = (e, o, t) =>
    o in e ? h(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (e[o] = t),
  C = (e, o) => {
    for (var t in o || (o = {})) k.call(o, t) && M(e, t, o[t]);
    if (c) for (var t of c(o)) V.call(o, t) && M(e, t, o[t]);
    return e;
  },
  v = (e, o) => w(e, A(o));
var F = (e, o, t) =>
  new Promise((l, i) => {
    var u = (n) => {
        try {
          r(t.next(n));
        } catch (m) {
          i(m);
        }
      },
      p = (n) => {
        try {
          r(t.throw(n));
        } catch (m) {
          i(m);
        }
      },
      r = (n) => (n.done ? l(n.value) : Promise.resolve(n.value).then(u, p));
    r((t = t.apply(e, o)).next());
  });
import g from './index-Dz1ENcY8.js';
import { a as D } from './index-DrPvFpAA.js';
import S from './JsonModal-vm7sbeVB.js';
import { M as U } from './antd-BmrhB3rb.js';
import {
  d as $,
  f as y,
  r as B,
  I as E,
  a7 as f,
  Z as J,
  a8 as O,
  a9 as b,
  k as d,
} from './vue-BjERyvPm.js';
import { c as G } from '../index.js';
import './FormRender-CJcvWACh.js';
import './index-St208Lgf.js';
import './formItemConfig-BWXCgi90.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './useFormDesignState-DaR4Tnkk.js';
import './PreviewCode-Cis57_AI.js';
import './index-Ck6h_6RS.js';
const N = $({
  name: 'VFormPreview',
  components: { JsonModal: S, VFormCreate: g, Modal: U },
  setup() {
    const e = y(null),
      o = B({ formModel: {}, formConfig: {}, visible: !1, fApi: {} }),
      t = (r) => {
        D(r.schemas), (o.formConfig = r), (o.visible = !0);
      },
      l = () => {
        (o.visible = !1), (o.formModel = {});
      },
      i = () =>
        F(this, null, function* () {
          var n, m, a, s;
          const r = yield (m = (n = o.fApi).submit) == null ? void 0 : m.call(n);
          (s = (a = e.value) == null ? void 0 : a.showModal) == null || s.call(a, r);
        }),
      u = (r) => {},
      p = () => {
        o.formModel = {};
      };
    return v(C({ handleGetData: i, handleCancel: l }, E(o)), {
      showModal: t,
      jsonModal: e,
      onSubmit: u,
      onCancel: p,
    });
  },
});
function P(e, o, t, l, i, u) {
  const p = f('a-input'),
    r = f('VFormCreate'),
    n = f('JsonModal'),
    m = f('Modal');
  return (
    J(),
    O(
      m,
      {
        title: '预览(支持布局)',
        open: e.visible,
        onOk: e.handleGetData,
        onCancel: e.handleCancel,
        okText: '获取数据',
        cancelText: '关闭',
        style: { top: '20px' },
        destroyOnClose: !0,
        width: 900,
      },
      {
        default: b(() => [
          d(
            r,
            {
              'form-config': e.formConfig,
              fApi: e.fApi,
              'onUpdate:fApi': o[0] || (o[0] = (a) => (e.fApi = a)),
              formModel: e.formModel,
              'onUpdate:formModel': o[1] || (o[1] = (a) => (e.formModel = a)),
              onSubmit: e.onSubmit,
            },
            {
              slotName: b(({ formModel: a, field: s }) => [
                d(
                  p,
                  {
                    value: a[s],
                    'onUpdate:value': (_) => (a[s] = _),
                    placeholder: '我是插槽传递的输入框',
                  },
                  null,
                  8,
                  ['value', 'onUpdate:value'],
                ),
              ]),
              _: 1,
            },
            8,
            ['form-config', 'fApi', 'formModel', 'onSubmit'],
          ),
          d(n, { ref: 'jsonModal' }, null, 512),
        ]),
        _: 1,
      },
      8,
      ['open', 'onOk', 'onCancel'],
    )
  );
}
const co = G(N, [['render', P]]);
export { co as default };
