import React, { useState, useCallback } from 'react';
import { Cascader } from 'antd';
import ProductDetail from '@/pages/BankProductsCompare/components/ProductDetail';
import HSBCProduct0Detail from '@/pages/BankProductsCompare/components/HSBCProduct0Detail';
import HENGSHENGProduct1Detail from '@/pages/BankProductsCompare/components/HENGSHENGProduct1Detail';

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

  const renderHENGSHENGProduct1Detail = useCallback(() => {
    return <HENGSHENGProduct1Detail key={currentProduct} type={currentProduct} default="hengsheng,current" />;
  }, [currentProduct]);

  return (
    <>
    <PageContainer>
      <Cascader
        options={options}
        defaultValue={['hengsheng', 'current']}
        style={{ width: '100%' }}
        onChange={(value) => setCurrentProduct(value.toString())}
      />
      {renderHENGSHENGProduct1Detail()}
    
    
    </PageContainer>
    </>



  );
};

export default BankProductsCompare;
