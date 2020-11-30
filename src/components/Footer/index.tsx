import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 Presented by LuffyZhang"
    links={[
      {
        key: 'Ant Design Pro',
        title: 'FTEC 5510PRO',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <UserOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'GROUP 2',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);
