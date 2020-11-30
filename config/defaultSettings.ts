import { Settings as LayoutSettings } from '@ant-design/pro-layout';
import project from '/Users/oysdfx/Desktop/5510 demo Luffy/src/assets/project.png';

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: 'PROCOMPARE',
  pwa: false,
  logo: 'https://t4.ftcdn.net/jpg/01/33/33/07/240_F_133330728_m5Cmn2SwYzCNqrb92x8ucFjvs3cbLkQx.jpg',
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
