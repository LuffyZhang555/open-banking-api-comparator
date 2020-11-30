import React, { useState, useCallback } from 'react';
import { Cascader } from 'antd';
import ProductDetail from '@/pages/BankProductsCompare/components/ProductDetail';
import HSBCProduct4Detail from '@/pages/BankProductsCompare/components/HSBCProduct4Detail';

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

  const renderHSBCProduct4Detail = useCallback(() => {
    return <HSBCProduct4Detail key={currentProduct} type={currentProduct} default="hsbc,allInOne" />;
  }, [currentProduct]);

  return (
    <>
    <PageContainer>
      <Cascader
        options={options}
        defaultValue={['hsbc', 'allInOne']}
        style={{ width: '100%' }}
        onChange={(value) => setCurrentProduct(value.toString())}
      />
      {renderHSBCProduct4Detail()}
    
    
    </PageContainer>
    </>



  );
};

export default BankProductsCompare;
