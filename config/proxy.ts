/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/hsbc/': {
      target: 'https://api.hsbc.com.hk/live/open-banking/v1.0/',
      changeOrigin: true,
      pathRewrite: { '^/hsbc': '' },
    },
    '/hengsheng/': {
      target: 'https://developer.hangseng.com/sandbox/open-banking/v1.0/',
      changeOrigin: true,
      pathRewrite: { '^/hengsheng': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
