import React from 'react';
import ReactJson from 'react-json-view';

import { useRequest } from 'umi';
import hsbcApi from '@/services/hsbc';
import hengshengApi from '@/services/hengsheng';
import { Descriptions,Radio,Space,Popconfirm,Button,Card,Badge,Image } from 'antd';

import { PageContainer } from '@ant-design/pro-layout';



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
        case 'hsbc,business':
          return hsbcApi.GetBusinessIntegratedAccounts();
        case 'hengsheng,saving':
          return hengshengApi.GetSavingAccount();
        default:
          return hengshengApi.GetCurrentAccount();
      }
    },
    {
      formatResult: (res) => {
        return res.data[0];
      },
    },
  );
  if (loading) {
    return <>Loading...</>;
  }

  return (
   
    <>
      
      <h1> {data.Brand[0].BrandName}   </h1>
      <Image width={200} src="data:image/png;base64,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" />
     
         
      
      
      
      <Card>
        
      <Descriptions title={data.Brand[0].CurrentAccount[0].Name} bordered>
       <Descriptions.Item label="Brand Name" span={1}>{data.Brand[0].BrandName} </Descriptions.Item>
       <Descriptions.Item label="Product Name" span={2}>{data.Brand[0].CurrentAccount[0].Name}</Descriptions.Item>
       

      

       <Descriptions.Item label="Fee Charges" span={3}>
         *{data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[0].FeeName}:{data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[0].FeeAmount} {data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeAmountCurrencyCode}
         <br />
         *{data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeName}:{data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeAmount} {data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeAmountCurrencyCode}
         <br />
         *{data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[2].FeeName}:{data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[2].FeeAmount} {data.Brand[0].CurrentAccount[0].CurrentAccountMarketingState[0].FeesCharges.FeeChargeDetail[2].FeeAmountCurrencyCode}
       </Descriptions.Item>



       


       <Descriptions.Item label="Notes" span={3}>
         * see other detail at https://www.hangseng.com/en-hk/personal/banking-services/accounts-and-deposits/
         <br/>
         * https://www.hangseng.com/content/dam/hase/en_hk/personal/banking-services/pdf/account_rules_revised.pdf
         <br/>
         * HotlineNumber: (852) 2822 0228
       </Descriptions.Item>


    
      </Descriptions>

      <br />
          <Space>
           <Button type="primary"
           href="https://www.hangseng.com/en-hk/personal/banking-services/accounts-and-deposits/">
          click me to see more
           </Button>
           <Popconfirm title="Are you sure to add this one?" okText="Yes" cancelText="No">
           <Button>Add to my favorate</Button>
           </Popconfirm>
           </Space>
 

     </Card>
      
      


    

     
     




     




    



    </> 


  );

};
  
export default BankProductsCompare;




