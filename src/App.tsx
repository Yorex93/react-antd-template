import React, { FC } from 'react';
import { Store } from 'redux';
import { RootState } from './redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

interface OwnProps {
  store: Store<RootState>,
  baseUrl?: string
}

type Props = OwnProps;

const App : FC<Props> = ({ store, baseUrl }) => {
  return (
    <BrowserRouter>
        <Provider store={store}>
            <Routes />
        </Provider>
      </BrowserRouter>
  );
}

export default App;
