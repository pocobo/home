const e = [
    {
      field: 'account',
      component: 'Select',
      label: '付款账户',
      required: !0,
      defaultValue: '1',
      componentProps: { options: [{ label: 'anncwb@126.com', value: '1' }] },
      colProps: { span: 24 },
    },
    {
      field: 'fac',
      label: '收款账户',
      required: !0,
      defaultValue: 'test@example.com',
      slot: 'fac',
      colProps: { span: 24 },
    },
    { field: 'pay', component: 'Input', label: '', defaultValue: 'zfb', show: !1 },
    {
      field: 'payeeName',
      component: 'Input',
      label: '收款人姓名',
      defaultValue: 'Vben',
      required: !0,
      colProps: { span: 24 },
    },
    {
      field: 'money',
      component: 'Input',
      label: '转账金额',
      defaultValue: '500',
      required: !0,
      renderComponentContent: () => ({ prefix: () => '￥' }),
      colProps: { span: 24 },
    },
  ],
  l = [
    {
      field: 'pwd',
      component: 'InputPassword',
      label: '支付密码',
      required: !0,
      defaultValue: '123456',
      colProps: { span: 24 },
    },
  ];
export { e as step1Schemas, l as step2Schemas };
