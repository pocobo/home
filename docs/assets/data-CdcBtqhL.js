const o = (() => {
    const e = [];
    for (let t = 0; t < 6; t++)
      e.push({
        id: t,
        title: 'Vben Admin',
        description: ['Vben', '设计语言', 'Typescript'],
        content: '基于Vue Next, TypeScript, Ant Design实现的一套完整的企业级后台管理系统。',
        time: '2020-11-14 11:20',
      });
    return e;
  })(),
  n = [
    { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
    { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
    { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
  ],
  s = [
    {
      field: 'field1',
      component: 'InputSearch',
      label: '项目名',
      colProps: { span: 8 },
      componentProps: { onChange: (e) => {} },
    },
  ];
export { n as actions, s as schemas, o as searchList };
