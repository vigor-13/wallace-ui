import { Global } from '@emotion/react';
import { global } from './styles';

const GlobalStyle = () => {
  return <Global styles={[global]} />;
};

export default GlobalStyle;
