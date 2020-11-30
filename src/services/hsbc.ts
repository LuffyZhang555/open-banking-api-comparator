import { extend } from 'umi-request';

const hsbcRequest = extend({
  prefix: '/hsbc/',
  // timeout: 1000,
  headers: {
    ClientID: '782f4c4f-ee65-46a7-8458-3556df9b8bb6',
    ClientSecret:
      'BOlwzl3v6exYF9PP75bEXdYVkwOP9-S8_JXL-OrVw67Pr3zmVtT7H34r7e4GFznP-VSCarVos0soOE7mTHI4tg',
    'Accept-Language': 'zh-HK',
  },
});

async function GetBusinessIntegratedAccounts() {
  return hsbcRequest.get('business-integrated-accounts');
}

async function GetAllInOneAccount() {
  return hsbcRequest.get('personal-all-in-one-and-savings-accounts');
}

export default {
  GetBusinessIntegratedAccounts,
  GetAllInOneAccount,
};
