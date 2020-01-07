import React, { Fragment, FunctionComponent } from 'react';

import Counter from './Counter';

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <h1>React &amp; TypeScript :)</h1>
      <Counter />
    </Fragment>
  );
}

export default App;