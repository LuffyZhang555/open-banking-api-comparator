import React from 'react';
import ReactJson from 'react-json-view';

import { useRequest } from 'umi';
import hsbcApi from '@/services/hsbc';
import hengshengApi from '@/services/hengsheng';
import { Descriptions,Space,Radio,Button,Card,Popconfirm,Badge,Image } from 'antd';

import { PageContainer } from '@ant-design/pro-layout';



export interface ProductProps {   
 
  type?: string;
  default?: string;
}

const BankProductsCompare: React.FC<ProductProps> = (props: any) => {

  
  const { data, loading } = useRequest<any>(
    () => {
      switch (props.type) {
        case 'hengsheng,saving':
          return hengshengApi.GetCurrentAccount();
        case 'hengsheng,current':
          return hengshengApi.GetSavingAccount();
        case 'hsbc,business':
          return hsbcApi.GetBusinessIntegratedAccounts();
        default :
          return hsbcApi.GetAllInOneAccount();
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
      
      <h1> {data.Brand[2].BrandName}   </h1>
      <Image width={200} src="https://www.investopedia.com/thmb/jHm_PwbaMV47pi0wFOckWQF4e_o=/780x0/filters:no_upscale():max_bytes(150000):strip_icc()/hsbc-fdf2a0202fce45dc9afed7b76b095200.png" />

    

     <Card>
        
      <Descriptions title={data.Brand[2].SavingsAccount[0].Name} bordered>
       <Descriptions.Item label="Brand Name" span={1}>{data.Brand[2].BrandName} </Descriptions.Item>
       <Descriptions.Item label="Product Name" span={2}>{data.Brand[2].SavingsAccount[0].Name}</Descriptions.Item>
       <Descriptions.Item label="Eligibility"span={3}> 
         *Minimumage：{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].Eligibility.AgeEligibility.MinimumAge}
         <br />
         *{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].Eligibility.OtherEligibility[0].Name} {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].Eligibility.OtherEligibility[0].Amount} {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].Eligibility.OtherEligibility[0].CurrencyCode} 
       </Descriptions.Item>

       <Descriptions.Item label="Features"span={3}>
         *{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeaturesAndBenefits.FeatureBenefitItem[0].Name}:{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeaturesAndBenefits.FeatureBenefitItem[0].Notes[0]}
         <br />
         *{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeaturesAndBenefits.FeatureBenefitItem[1].Name}:{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeaturesAndBenefits.FeatureBenefitItem[1].Notes[0]}
         <br />
         *{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeaturesAndBenefits.FeatureBenefitItem[2].Name}:{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeaturesAndBenefits.FeatureBenefitItem[2].Notes[0]}
         
       </Descriptions.Item>

       <Descriptions.Item label="Fee Charges" span={3}>
         *{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeesCharges.FeeChargeDetail[0].FeeName}：{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeesCharges.FeeChargeDetail[0].FeeAmount} {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeesCharges.FeeChargeDetail[0].FeeAmountCurrencyCode}
         <br />
         *{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeName}：{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeAmount}{data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].FeesCharges.FeeChargeDetail[1].FeeAmountCurrencyCode}
       </Descriptions.Item>



       <Descriptions.Item label="Credit Interest" span={3}>
         * If the account balance is between {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[0].TierValueMinimum}  and  {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[0].TierValueMaximum}, the interest rate will be {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[0].InterestRate} (HKD)
          <br />
         * If the account balance is between {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[1].TierValueMinimum}  and  {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[1].TierValueMaximum}, the interest rate will be {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[1].InterestRate} (HKD)
          <br />
         * If the account balance is between {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[2].TierValueMinimum}  and  {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[2].TierValueMaximum}, the interest rate will be {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[2].InterestRate} (HKD)
          <br />
         * If the account balance is between {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[3].TierValueMinimum}  and  {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[3].TierValueMaximum}, the interest rate will be {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CreditInterest.TierBand[3].InterestRate} (HKD)
          <br />
       </Descriptions.Item>

       <Descriptions.Item label="Link for the product" span={3}>
        
         
         
        {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CoreProduct.ProductURL}
         <br />
        {data.Brand[2].SavingsAccount[0].SavingsAccountMarketingState[0].CoreProduct.Notes[0]}
       </Descriptions.Item>

       

    
      </Descriptions>
 
      <br />
          <Space>
           <Button type="primary"
           href="https://www.hsbc.com.hk/zh-hk/accounts/products/savings/">
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




