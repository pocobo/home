import { h as s } from '../index.js';
import './antd-BmrhB3rb.js';
const { t } = s();
function l(e) {
  return e.includes('Input') || e.includes('Complete')
    ? t('common.inputText')
    : e.includes('Picker') ||
        e.includes('Select') ||
        e.includes('Cascader') ||
        e.includes('Checkbox') ||
        e.includes('Radio') ||
        e.includes('Switch')
      ? t('common.chooseText')
      : '';
}
const c = ['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'];
function n() {
  return [...c, 'RangePicker', 'TimeRangePicker'];
}
function p(e, i, r) {
  Reflect.has(e, 'type') ||
    (['DatePicker', 'MonthPicker', 'WeekPicker', 'TimePicker'].includes(i)
      ? (e.type = r ? 'string' : 'object')
      : ['RangePicker', 'Upload', 'CheckboxGroup'].includes(i)
        ? (e.type = 'array')
        : ['InputNumber'].includes(i) && (e.type = 'number'));
}
const d = ['Input', 'InputPassword', 'InputNumber', 'InputSearch', 'InputTextArea'],
  T = n(),
  k = [
    'Upload',
    'ApiTransfer',
    'ApiTree',
    'ApiTreeSelect',
    'ApiRadioGroup',
    'ApiCascader',
    'AutoComplete',
    'RadioButtonGroup',
    'ImageUpload',
    'ApiSelect',
  ],
  u = ['Divider', 'BasicTitle'];
function m(e) {
  return u.includes(e || '');
}
export { k as N, d as a, l as c, T as d, m as i, p as s };
