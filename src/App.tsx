import React, { FC } from 'react';
import { css } from '@emotion/react';

const style = css`
  color: blue;
`;

const App: FC = () => {
  return <h1 css={style}>React!</h1>;
};

export default App;
