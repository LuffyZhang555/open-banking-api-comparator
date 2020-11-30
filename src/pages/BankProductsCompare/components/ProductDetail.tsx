import React, { useState } from 'react';
import ReactJson from 'react-json-view';

import { Card, Typography, Button } from 'antd';
import { useRequest } from 'umi';
import hsbcApi from '@/services/hsbc';
import hengshengApi from '@/services/hengsheng';
import HSBCProduct0Detail from '@/pages/BankProductsCompare/components/HSBCProduct0Detail';
import HSBCProduct1Detail from '@/pages/BankProductsCompare/components/HSBCProduct1Detail';
import HSBCProduct2Detail from '@/pages/BankProductsCompare/components/HSBCProduct2Detail';
import HSBCProduct3Detail from '@/pages/BankProductsCompare/components/HSBCProduct3Detail';
import HSBCProduct4Detail from '@/pages/BankProductsCompare/components/HSBCProduct4Detail';
import HSBCProduct5Detail from '@/pages/BankProductsCompare/components/HSBCProduct5Detail';
import HENGSHENGProduct0Detail from '@/pages/BankProductsCompare/components/HENGSHENGProduct0Detail';
import HENGSHENGProduct1Detail from '@/pages/BankProductsCompare/components/HENGSHENGProduct1Detail';

export interface ProductProps {
  type?: string;
  default?: string;
}

const BankProductsCompare: React.FC<ProductProps> = (props: any) => {
  const { data, loading } = useRequest<any>(
    () => {
      switch (props.type) {
        case 'hsbc,allInOne':
          return hsbcApi.GetAllInOneAccount();
        case 'hengsheng,saving':
          return hengshengApi.GetCurrentAccount();
        case 'hengsheng,current':
          return hengshengApi.GetSavingAccount();
        default:
          return hsbcApi.GetBusinessIntegratedAccounts();
      }
    },
    {
      formatResult: (res) => {
        return res.data[0].Brand;
      },
    },
  );
  if (loading) {
    return <>Loading...</>;
  }

  const CodePreview: React.FC<{}> = ({ children }) => (
    <pre>
      <code>
        <Typography.Text copyable>{children}</Typography.Text>
      </code>
    </pre>
  );

  const ComponentPreview1: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState();

    return (
      <Card>
        <p> Please choose your product</p>
        <Button onClick={() => setCurrentProduct(<HSBCProduct0Detail />)}>Product1</Button>
        <Button onClick={() => setCurrentProduct(<HSBCProduct1Detail />)}>Product2</Button>
        <Button onClick={() => setCurrentProduct(<HSBCProduct2Detail />)}>Product3</Button>
        {currentProduct}
      </Card>
    );
  };

  const ComponentPreview2: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState();

    return (
      <Card>
        <p> Please choose your product</p>
        <Button onClick={() => setCurrentProduct(<HSBCProduct3Detail />)}>Product1</Button>
        <Button onClick={() => setCurrentProduct(<HSBCProduct4Detail />)}>Product2</Button>
        <Button onClick={() => setCurrentProduct(<HSBCProduct5Detail />)}>Product3</Button>
        {currentProduct}
      </Card>
    );
  };
  const ComponentPreview3: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState();

    return (
      <Card>
        <p> Please choose your product</p>
        <Button onClick={() => setCurrentProduct(<HENGSHENGProduct0Detail />)}>Product 1</Button>
        
        {currentProduct}
      </Card>
    );
  };

  const ComponentPreview4: React.FC = () => {
    const [currentProduct, setCurrentProduct] = useState();

    return (
      <Card>
        <p> Please choose your product</p>
        <Button onClick={() => setCurrentProduct(<HENGSHENGProduct1Detail />)}>Product 1</Button>
        
        {currentProduct}
      </Card>
    );
  };

  function renderingFn() {
    switch (props.type) {
      case 'hsbc,allInOne':
        return <ComponentPreview2 />;
      case 'hengsheng,saving':
        return <ComponentPreview3 />;
      case 'hengsheng,current':
        return <ComponentPreview4 />;
      default:
        return <ComponentPreview1 />;
    }
  }

  return (
    <>
      {/* <HsbcProductDetail data={data} /> */}
      {renderingFn()}
      
    </>
  );
};

export default BankProductsCompare;