import React from 'react';
import { css } from 'glamor';
import Title from './Title';

const centered = css({
  width: '800px',
  margin: '0 auto',
});

const App = () => (
  <div className={centered}>
    <Title title="CONTINOUS INTEGRATION" />
  </div>
);

export default App;
