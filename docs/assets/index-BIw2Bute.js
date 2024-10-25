import { _ as n } from './BasicTable.vue_vue_type_script_setup_true_lang-DPgNZfUv.js';
import './TableImg.vue_vue_type_style_index_0_lang-boLsnDf-.js';
import './index-BpHr8pvE.js';
import { u as p } from './useTable-USe4NIEW.js';
import { P as f } from './index-B24a6rfW.js';
import { refundTimeTableSchema as c, refundTimeTableData as b } from './data-C2zcumVu.js';
import { a0 as s, ad as a, bj as i, R as r, a4 as d, aI as I } from './antd-BmrhB3rb.js';
import {
  d as h,
  a7 as T,
  Z as k,
  a8 as y,
  a9 as l,
  k as e,
  G as o,
  u as t,
  $ as m,
} from './vue-BjERyvPm.js';
import './BasicForm.vue_vue_type_script_setup_true_lang-D9zBX_7o.js';
import './FormItem.vue_vue_type_script_lang-Cy9bZYGZ.js';
import './componentMap-C0n90BJh.js';
import './useFormItem-B4KjxddK.js';
import '../index.js';
import './RadioButtonGroup.vue_vue_type_script_setup_true_lang-D_aJ1Odl.js';
import './index-vjZxMvXl.js';
import './IconPicker.vue_vue_type_script_setup_true_lang-dXaxNvw-.js';
import './copyTextToClipboard-DUmgQPO1.js';
import './index-CziPtsqx.js';
import './index-IFKYG7IQ.js';
import './index-RbNU_lzt.js';
import './useWindowSizeFn-B5LTQhvs.js';
import './base64Conver-bBv-IO2K.js';
import './helper-BjbsUAHT.js';
import './BasicForm.vue_vue_type_style_index_0_lang-CbMCLsCL.js';
import './useForm-b1qEKHt-.js';
import './uuid-D0SLUWHI.js';
import './sortable.esm-CoO8jRpa.js';
import './onMountedOrActivated-DcvTUt7V.js';
import './useSortable-D6mV6aGQ.js';
import './download-B80gEl-k.js';
import './useContentViewHeight-mbS0GS8E.js';
const S = { class: 'pt-4 m-4 desc-wrap' },
  g = m('a', null, '12421', -1),
  x = m('div', null, 'Vben', -1),
  C = m('p', null, '2016-12-12 12:32', -1),
  X = m('p', null, 'Chad', -1),
  v = m('h4', null, '信息组', -1),
  ue = h({
    __name: 'index',
    setup(B) {
      const [_] = p({
        title: '退货进度',
        columns: c,
        pagination: !1,
        dataSource: b,
        showIndexColumn: !1,
        scroll: { y: 300 },
      });
      return (N, P) => {
        const u = T('a-button');
        return (
          k(),
          y(
            t(f),
            { title: '单号：234231029431', contentBackground: '', headerSticky: '' },
            {
              extra: l(() => [
                e(u, null, { default: l(() => [o(' 操作一 ')]), _: 1 }),
                e(u, null, { default: l(() => [o(' 操作二 ')]), _: 1 }),
                e(u, { type: 'primary' }, { default: l(() => [o(' 主操作 ')]), _: 1 }),
              ]),
              footer: l(() => [
                e(
                  t(s),
                  { 'default-active-key': '1' },
                  {
                    default: l(() => [
                      e(t(s).TabPane, { key: '1', tab: '详情' }),
                      e(t(s).TabPane, { key: '2', tab: '规则' }),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              default: l(() => [
                m('div', S, [
                  e(
                    t(a),
                    { size: 'small', column: 2 },
                    {
                      default: l(() => [
                        e(
                          t(a).Item,
                          { label: '创建人' },
                          { default: l(() => [o(' 曲丽丽 ')]), _: 1 },
                        ),
                        e(
                          t(a).Item,
                          { label: '订购产品' },
                          { default: l(() => [o(' XX 服务 ')]), _: 1 },
                        ),
                        e(
                          t(a).Item,
                          { label: '创建时间' },
                          { default: l(() => [o(' 2017-01-10 ')]), _: 1 },
                        ),
                        e(t(a).Item, { label: '关联单据' }, { default: l(() => [g]), _: 1 }),
                        e(
                          t(a).Item,
                          { label: '生效日期' },
                          { default: l(() => [o(' 2017-07-07 ~ 2017-08-08 ')]), _: 1 },
                        ),
                        e(
                          t(a).Item,
                          { label: '备注' },
                          { default: l(() => [o(' 请于两个工作日内确认 ')]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    t(r),
                    { title: '流程进度', bordered: !1 },
                    {
                      default: l(() => [
                        e(
                          t(i),
                          { current: 1, 'progress-dot': '', size: 'small' },
                          {
                            default: l(() => [
                              e(
                                t(i).Step,
                                { title: '创建项目' },
                                { description: l(() => [x, C]), _: 1 },
                              ),
                              e(
                                t(i).Step,
                                { title: '部门初审' },
                                { description: l(() => [X]), _: 1 },
                              ),
                              e(t(i).Step, { title: '财务复核' }),
                              e(t(i).Step, { title: '完成' }),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    t(r),
                    { title: '用户信息', bordered: !1, class: 'mt-5' },
                    {
                      default: l(() => [
                        e(
                          t(a),
                          { column: 3 },
                          {
                            default: l(() => [
                              e(
                                t(a).Item,
                                { label: '用户姓名' },
                                { default: l(() => [o(' 付小小 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '会员卡号' },
                                { default: l(() => [o(' XX 32943898021309809423 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '身份证' },
                                { default: l(() => [o(' 3321944288191034921 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '联系方式' },
                                { default: l(() => [o(' 18112345678 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '联系地址', span: 2 },
                                {
                                  default: l(() => [
                                    o(
                                      ' 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 ',
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        e(
                          t(a),
                          { title: '信息组', column: 3 },
                          {
                            default: l(() => [
                              e(
                                t(a).Item,
                                { label: '某某数据' },
                                { default: l(() => [o(' 111 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '该数据更新时间' },
                                { default: l(() => [o(' 2017-08-08 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '某某数据' },
                                { default: l(() => [o(' 725 ')]), _: 1 },
                              ),
                              e(
                                t(a).Item,
                                { label: '该数据更新时间' },
                                { default: l(() => [o(' 2017-08-08 ')]), _: 1 },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        v,
                        e(
                          t(r),
                          { title: '多层级信息组' },
                          {
                            default: l(() => [
                              e(
                                t(a),
                                { title: '组名称', column: 3 },
                                {
                                  default: l(() => [
                                    e(
                                      t(a).Item,
                                      { label: '负责人' },
                                      { default: l(() => [o(' 林东东 ')]), _: 1 },
                                    ),
                                    e(
                                      t(a).Item,
                                      { label: '角色码' },
                                      { default: l(() => [o(' 1234567 ')]), _: 1 },
                                    ),
                                    e(
                                      t(a).Item,
                                      { label: '所属部门' },
                                      { default: l(() => [o(' XX公司 - YY部 ')]), _: 1 },
                                    ),
                                    e(
                                      t(a).Item,
                                      { label: '过期时间' },
                                      { default: l(() => [o(' 2017-08-08 ')]), _: 1 },
                                    ),
                                    e(
                                      t(a).Item,
                                      { label: '描述', span: 2 },
                                      {
                                        default: l(() => [
                                          o(
                                            ' 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... ',
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              e(t(d)),
                              e(
                                t(a),
                                { title: '组名称', column: 1 },
                                {
                                  default: l(() => [
                                    e(
                                      t(a).Item,
                                      { label: '学名' },
                                      {
                                        default: l(() => [
                                          o(
                                            ' Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. ',
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                              e(t(d)),
                              e(
                                t(a),
                                { title: '组名称', column: 1 },
                                {
                                  default: l(() => [
                                    e(
                                      t(a).Item,
                                      { label: '负责人' },
                                      { default: l(() => [o(' 付小小 ')]), _: 1 },
                                    ),
                                    e(
                                      t(a).Item,
                                      { label: '角色码' },
                                      { default: l(() => [o(' 1234568 ')]), _: 1 },
                                    ),
                                  ]),
                                  _: 1,
                                },
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                  e(
                    t(r),
                    { title: '用户近半年来电记录', class: 'my-5' },
                    { default: l(() => [e(t(I))]), _: 1 },
                  ),
                  e(t(n), { onRegister: t(_) }, null, 8, ['onRegister']),
                ]),
              ]),
              _: 1,
            },
          )
        );
      };
    },
  });
export { ue as default };
