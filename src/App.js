import React from 'react';
import { css } from 'glamor';

const App = () => (
  <div>
    <h1 className={css({ color: 'red' })}>App</h1>
    <p>Continous integration is very fun!!!</p>
    <p>This was built using CircleCI!!</p>
  </div>
);

export default App;
