import React, { useState, useCallback } from 'react';
import { Cascader } from 'antd';
import ProductDetail from '@/pages/BankProductsCompare/components/ProductDetail';
import HSBCProduct1Detail from '@/pages/BankProductsCompare/components/HSBCProduct1Detail';

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

  const renderHSBCProduct1Detail = useCallback(() => {
    return <HSBCProduct1Detail key={currentProduct} type={currentProduct} default="hsbc,business" />;
  }, [currentProduct]);

  return (
    <>
    <PageContainer>
      <Cascader
        options={options}
        defaultValue={['hsbc', 'business']}
        style={{ width: '100%' }}
        onChange={(value) => setCurrentProduct(value.toString())}
      />
      {renderHSBCProduct1Detail()}
    
    
    </PageContainer>
    </>



  );
};

export default BankProductsCompare;
