import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header/index';

import Messages from './components/CardContainer/CardMessages/index';

const App: React.FC<{}> = () => {

  return (
    <>
      <Header />
      <div>
        <Messages />
        <GlobalStyle />
      </div>
    </>
  );
}

export default App;
