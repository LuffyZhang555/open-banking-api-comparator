import { AlipayCircleOutlined,  WeiboCircleOutlined, WhatsAppOutlined, WechatFilled } from '@ant-design/icons';
import { Alert, Checkbox, message } from 'antd';
import React, { useState } from 'react';
import { Link, SelectLang, history } from 'umi';
import logo from '@/assets/logo.svg';
import luffy from '@/assets/project.png';
import { LoginParamsType, fakeAccountLogin } from '@/services/login';
import Footer from '@/components/Footer';
import LoginFrom from './components/Login';
import styles from './style.less';

const { Tab, Username, Password, Mobile, Captcha, Submit } = LoginFrom;

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

/**
 * 此方法会跳转到 redirect 参数所在的位置
 */
const goto = () => {
  const { query } = history.location;
  const { redirect } = query as { redirect: string };
  window.location.href = redirect || '/';
};

const Login: React.FC<{}> = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({});
  const [submitting, setSubmitting] = useState(false);
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');
  const handleSubmit = async (values: LoginParamsType) => {
    setSubmitting(true);
    try {
      // 登录
      const msg = await fakeAccountLogin({ ...values, type });
      if (msg.status === 'ok') {
        message.success('success！');
        goto();
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      message.error('log in failed, please try again！');
    }
    setSubmitting(false);
  };

  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.lang}>
        <SelectLang />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src={luffy} />
              <span className={styles.title}>PROCOMPARE</span>
            </Link>
          </div>
          <div className={styles.desc}>From FTEC 5510 group 2</div>

        </div>

        <div className={styles.main}>
          <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
            <Tab key="account" tab="account&password">
              {status === 'error' && loginType === 'account' && !submitting && (
                <LoginMessage content="incorrect account or password（admin/ant.design）" />
              )}

              <Username
                name="username"
                placeholder="account: admin or user"
                rules={[
                  {
                    required: true,
                    message: 'please enter your account name',
                  },
                ]}
              />
              <Password
                name="password"
                placeholder="password: 5510"
                rules={[
                  {
                    required: true,
                    message: 'please enter the password！',
                  },
                ]}
              />
            </Tab>
            <Tab key="mobile" tab="sign in with mobile">
              {status === 'error' && loginType === 'mobile' && !submitting && (
                <LoginMessage content="wrong vertification code" />
              )}
              <Mobile
                name="mobile"
                placeholder="mobile number"
                rules={[
                  {
                    required: true,
                    message: 'please enter your mobile number！',
                  }, 
                  {
                    pattern: /^1\d{10}$/,
                    message: 'wrong format！',
                  },
                ]}
              />
              <Captcha
                name="captcha"
                placeholder="vertification code"
                countDown={120}
                getCaptchaButtonText="123"
                getCaptchaSecondText="秒"
                rules={[
                  {
                    required: true,
                    message: 'please enter the vertification code！',
                  },
                ]}
              />
            </Tab>
            
            <div>
              <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
                remember my account
              </Checkbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                forget the password?
              </a>
            </div>
            <Submit loading={submitting}>Log in </Submit>
            <div className={styles.other}>
              Log in with 
              <AlipayCircleOutlined className={styles.icon} />
              <WeiboCircleOutlined className={styles.icon} />
              <WhatsAppOutlined className={styles.icon} />
              <WechatFilled className={styles.icon} />
              <Link className={styles.register} to="/user/register">
                creat an account
              </Link>
            </div>
          </LoginFrom>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
