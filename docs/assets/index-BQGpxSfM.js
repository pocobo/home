import { z as h, c as $ } from '../index.js';
import { _ as x } from './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './componentMap-C0n90BJh.js';
import { schemas as k, actions as v, searchList as C } from './data-CdcBtqhL.js';
import { P as y } from './index-B24a6rfW.js';
import {
  d as B,
  Z as r,
  a8 as n,
  a9 as o,
  k as p,
  a1 as t,
  u as e,
  $ as i,
  _ as m,
  aa as _,
  a0 as l,
  F as d,
  ab as g,
  G as f,
} from './vue-BjERyvPm.js';
import { ag as u, Q as N } from './antd-BmrhB3rb.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './helper-BjbsUAHT.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './useFormItem-B4KjxddK.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-BpHr8pvE.js';
import './uuid-D0SLUWHI.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './base64Conver-bBv-IO2K.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './useContentViewHeight-mbS0GS8E.js';
import './onMountedOrActivated-DcvTUt7V.js';
const a = 'list-search',
  V = B({
    __name: 'index',
    setup(b) {
      return (I, L) => (
        r(),
        n(
          e(y),
          { class: t(a), title: '搜索列表' },
          {
            headerContent: o(() => [
              p(
                e(x),
                {
                  class: t(`${a}__header-form`),
                  labelWidth: 100,
                  schemas: e(k),
                  showActionButtonGroup: !1,
                },
                null,
                8,
                ['class', 'schemas'],
              ),
            ]),
            default: o(() => [
              i(
                'div',
                { class: t(`${a}__container`) },
                [
                  p(e(u), null, {
                    default: o(() => [
                      (r(!0),
                      m(
                        d,
                        null,
                        _(
                          e(C),
                          (c) => (
                            r(),
                            n(
                              e(u).Item,
                              { key: c.id },
                              {
                                default: o(() => [
                                  p(
                                    e(u).Item.Meta,
                                    null,
                                    {
                                      description: o(() => [
                                        i('div', { class: t(`${a}__content`) }, l(c.content), 3),
                                        i(
                                          'div',
                                          { class: t(`${a}__action`) },
                                          [
                                            (r(!0),
                                            m(
                                              d,
                                              null,
                                              _(
                                                e(v),
                                                (s) => (
                                                  r(),
                                                  m(
                                                    'div',
                                                    { key: s.icon, class: t(`${a}__action-item`) },
                                                    [
                                                      s.icon
                                                        ? (r(),
                                                          n(
                                                            h,
                                                            {
                                                              key: 0,
                                                              class: t(`${a}__action-icon`),
                                                              icon: s.icon,
                                                              color: s.color,
                                                            },
                                                            null,
                                                            8,
                                                            ['class', 'icon', 'color'],
                                                          ))
                                                        : g('', !0),
                                                      f(' ' + l(s.text), 1),
                                                    ],
                                                    2,
                                                  )
                                                ),
                                              ),
                                              128,
                                            )),
                                            i('span', { class: t(`${a}__time`) }, l(c.time), 3),
                                          ],
                                          2,
                                        ),
                                      ]),
                                      title: o(() => [
                                        i('p', { class: t(`${a}__title`) }, l(c.title), 3),
                                        i('div', null, [
                                          (r(!0),
                                          m(
                                            d,
                                            null,
                                            _(
                                              c.description,
                                              (s) => (
                                                r(),
                                                n(
                                                  e(N),
                                                  { key: s, class: 'mb-2' },
                                                  { default: o(() => [f(l(s), 1)]), _: 2 },
                                                  1024,
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                ]),
                                _: 2,
                              },
                              1024,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  }),
                ],
                2,
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  at = $(V, [['__scopeId', 'data-v-34ae5ef0']]);
export { at as default };
