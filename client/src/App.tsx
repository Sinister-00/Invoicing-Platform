import './App.css';

import GlobalStyle from 'components/global-styles';
import Routes from 'components/route-handler';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';
import theme from 'entities/theme';
import { useEffect } from 'react';
import useFilterStore from 'store/useFilter';
import useUserStore from 'store/useUser';
import { ThemeProvider } from 'styled-components';

import getProducts from './api/getProducts';
import AuthProvider from './contexts/AuthContext';
import useProductStore from './store/useProductStore';

function App() {
  const { setProducts } = useProductStore();
  const { setUserData } = useUserStore();
  const { setProducts: setFilterProducts } = useFilterStore();

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setFilterProducts(res);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.USER)) {
      try {
        const storedData = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEYS.USER) || '',
        );
        setUserData(storedData);
      } catch (error) {
        console.error('Error parsing "plotline-userdata" from local storage:', error);
      }
    } else {
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
        localStorage.removeItem(LOCAL_STORAGE_KEYS.CART);
      } catch (error) {
        console.error('Error resetting userdata from local storage:', error);
      }
    }
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
