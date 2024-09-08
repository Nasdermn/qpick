import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './styles/index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.ts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store/store.ts';
import Preloader from 'react-js-loader';

const pageElement = document.getElementById('page');
const preloaderComponent = (
  <Preloader size={90} bgColor='#db1168' color='#db1168' type='spinner-cub' />
);
if (pageElement) {
  const page = ReactDOM.createRoot(pageElement);
  page.render(
    <React.StrictMode>
      <BrowserRouter basename='/qpick'>
        <Suspense fallback={preloaderComponent}>
          <I18nextProvider i18n={i18n}>
            <Provider store={store}>
              <PersistGate persistor={persistor} loading={preloaderComponent}>
                <App />
              </PersistGate>
            </Provider>
          </I18nextProvider>
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>,
  );
} else {
  console.error("Элемент с id 'page' не найден в DOM!");
}
