import Currency from '../../assets/Mexico-01.svg';
import Usdc from '../../assets/image-58_1.png';
import Usdt from '../../assets/usdt.svg';
import Polygon from '../../assets/networks/polygon.png';
import Ethereum from '../../assets/networks/ethereum.png';
import Mexico from '../../assets/Mexico-01.svg';

import CurrencyImg from '@components/CurrencyImg';

export const sendCurrency = [
  {
    label: 'MXN',
    value: 'MXN',
    startComponent: <CurrencyImg src={Currency} />,
  },
  {
    label: 'CO (muy pronto)',
    value: 'CO',
    startComponent: <CurrencyImg src={Currency} />,
    disabled: true,
  },
  {
    label: 'ARS (muy pronto)',
    value: 'ARS',
    startComponent: <CurrencyImg src={Currency} />,
    disabled: true,
  },
];

export const depositCurrency = [
  {
    label: 'USDC',
    value: 'USDC',
    startComponent: <CurrencyImg src={Usdc} />,
  },
  {
    label: 'USDT',
    value: 'USDT',
    startComponent: <CurrencyImg src={Usdt} />,
  },
];

export const currencyImg = {
  USDC: <CurrencyImg src={Usdc} />,
  USDT: <CurrencyImg src={Usdt} />,
  MXN: <CurrencyImg src={Currency} />,
};

export const currencyImgPath = {
  USDC: Usdc,
  USDT: Usdt,
  MXN: Mexico,
};

export const currencyToken = {
  ARBITRUM: 'ARB',
  POLYGON: 'MATIC',
  MXN: 'MXN',
  USDC: 'USDC',
};

export const networkImg = {
  POLYGON: Polygon,
  ETHEREUM: Ethereum,
};

export default {
  networkImg,
  currencyImg,
  sendCurrency,
  depositCurrency,
  currencyToken,
};
