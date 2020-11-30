import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Image,Card, Alert, Typography,Divider, } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
import { Steps, Button, message,Table, Tag, Space,Badge } from 'antd';

import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import Footer from '@/components/Footer';


import styles from './Welcome.less';


const { Step } = Steps;
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    companyName: 'HSBC',
    productName: '「商業」理財戶口',
    status: 'exist',
    tags: ['商業', '理財'],
  },
  {
    key: '2',
    companyName: 'HANG SENG',
    productName: '港元往來存款戶口',
    status: 'no longer exist',  
    tags: ['存款'],
  },
  {
    key: '3',
    companyName: 'HSBC',
    productName: '滙豐「理財易」商務戶口',
    status: 'exist',
    tags: ['理財易', '商務'],
  },
];


const CodePreview: React.FC<{}> = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => (
  <PageContainer>
    <Card>
    
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
      <Avatar size={64} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      
      
      <Title>Luffy</Title>
      <Divider></Divider>

      

      <Paragraph>
      <h3>My favorate product</h3>
    </Paragraph>
    <Paragraph>

       <Table dataSource={data}>
    
      <Column title="Brand Name" dataIndex="companyName" key="companyName" />
      <Column title="Product Name" dataIndex="productName" key="productName" />
    
    <Column title="Status" dataIndex="status" key="status" />
    
    <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Space size="middle">
          <a>
          <li>
          <Link href="/HSBC/product0">see detail</Link>
        </li>
          {record.lastName}</a>
         
        </Space>
      )}
    />
  </Table>


      
    </Paragraph>
    <Divider></Divider>
    <Paragraph>
      <h3>My History</h3>
    </Paragraph>
    <h3>HSBC 「商業」理財戶口</h3>
    <Steps current={1}>
         <Step title="Finished" description="fill in the form." />
         <Step title="In Progress" subTitle="still need about 12:00:08" description="Wait for the confirmation." />
         <Step title="Waiting" description="finish opening the account." />
      </Steps>
      <Divider></Divider>
      
                    
      
        
      
  
    </Card>
      


      <Footer />
  </PageContainer>
);
