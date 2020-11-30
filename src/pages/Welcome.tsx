
import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button,Card, Alert, Typography,Divider,Carousel,Image } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import HSBCProduct0Detail from '@/pages/BankProductsCompare/components/HsbcProduct0Detail';
import welcome1 from '/Users/oysdfx/Desktop/5510 demo Luffy/src/assets/1.png';
import welcome2 from '/Users/oysdfx/Desktop/5510 demo Luffy/src/assets/2.png';
import welcome3 from '/Users/oysdfx/Desktop/5510 demo Luffy/src/assets/3.png';
import welcome4 from '/Users/oysdfx/Desktop/5510 demo Luffy/src/assets/4.png';
import Footer from '@/components/Footer';


import styles from './Welcome.less';



const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

const contentStyle = {
  height: '550px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'grey',
};

export default (): React.ReactNode => (
  <PageContainer>
    <Card>
    
         <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>
                <Image
                   width={1087}
                   src={welcome1}
                                   />
    
                </h3>
                
            </div>
            <div>
              <h3 style={contentStyle}>
              <Image
                   width={1087}
                   src={welcome2}
                                   />
              </h3>
            </div>
             <div>
               <h3 style={contentStyle}>
               <Image
                   width={1087}
                   src={welcome3}
                                   />
               </h3>
             </div>
             <div>
              <h3 style={contentStyle}>
              <Image
                   width={1087}
                   src={welcome4}
                                   />
              </h3>
             </div>
         </Carousel>




    
      <Alert
        message="this project is for FTEC5510 project demo only"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
     
      
    </Card>
    <Footer />
  </PageContainer>
);
