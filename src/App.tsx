import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import i18n from './i18n/i18n';

function App() {
  const setInitialLanguage = () => {
    const language = sessionStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  };
  useEffect(() => {
    setInitialLanguage();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
