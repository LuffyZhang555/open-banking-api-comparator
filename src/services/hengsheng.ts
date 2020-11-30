import { extend } from 'umi-request';

const hsbcRequest = extend({
  prefix: '/hengsheng/',
  // timeout: 1000,
  headers: {
    ClientID: '1d22d972-1548-41d2-91e7-16a0ec86d3f2',
    ClientSecret: '5aefb425-2be5-48f2-9c58-fe6f0b093489',
    'Accept-Language': 'zh-HK',
  },
});

async function GetSavingAccount() {
  return hsbcRequest.get('personal-savings-accounts');
}

async function GetCurrentAccount() {
  return hsbcRequest.get('personal-current-accounts');
}

export default {
  GetSavingAccount,
  GetCurrentAccount,
};
