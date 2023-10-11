import './App.css';

import GlobalStyle from 'components/global-styles';
import Header from 'components/header';
import { routeList } from 'entities/route-to-component';
import theme from 'entities/theme';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useFilterStore from 'store/useFilter';
import { ThemeProvider } from 'styled-components';

import getProducts from './api/getProducts';
import useProductStore from './store/useProductStore';

function App() {
  const { setProducts } = useProductStore();
  const { setProducts: setFilterProducts } = useFilterStore();

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setFilterProducts(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          {Object.keys(routeList).map((route, idx) => (
            <Route key={idx} path={route} element={routeList[route]} />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
