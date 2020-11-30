import React, { useState, useCallback } from 'react';
import { Cascader, Col, Row } from 'antd';
import ProductDetail from '@/pages/BankProductsCompare/components/ProductDetail';
import { PageContainer } from '@ant-design/pro-layout';

const options = [
  {
    value: 'hsbc',
    label: 'HSBC Account',
    children: [
      {
        value: 'business',
        label: 'Business',
      },
      {
        value: 'allInOne',
        label: 'All in One',
      },
    ],
  },
  {
    value: 'hengsheng',
    label: 'Heng Sheng Account',
    children: [
      {
        value: 'saving',
        label: 'Saving',
      },
      {
        value: 'current',
        label: 'Current',
      },
    ],
  },
];

const BankProductsCompare: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState('');
  const [currentProduct2, setCurrentProduct2] = useState('');

  const renderProductDetail = useCallback(() => {
    return <ProductDetail key={currentProduct} type={currentProduct} default="hsbc,business" />;
  }, [currentProduct]);

  const renderProductDetail2 = useCallback(() => {
    return <ProductDetail key={currentProduct2} type={currentProduct2} default="hsbc,business" />;
  }, [currentProduct2]);

  return (
    <PageContainer>
      <Row>
        <Col span={12}>
          <Cascader
            options={options}
            defaultValue={['hsbc', 'business']}
            style={{ width: '100%' }}
            onChange={(value) => setCurrentProduct(value.toString())}
          />
        </Col>
        <Col span={12}>
          <Cascader
            options={options}
            defaultValue={['hsbc', 'business']}
            style={{ width: '100%' }}
            onChange={(value) => setCurrentProduct2(value.toString())}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>{renderProductDetail()}</Col>
        <Col span={12}>{renderProductDetail2()}</Col>
      </Row>
    </PageContainer>
  );
};

export default BankProductsCompare;
