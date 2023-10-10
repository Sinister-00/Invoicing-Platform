import './App.css';

import GlobalStyle from 'components/global-styles';
import Header from 'components/header';
import { routeList } from 'entities/route-to-component';
import theme from 'entities/theme';
import { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useProductStore from './store/useProductStore';

const API = 'http://localhost:4000/products';

function App() {
  const { getProducts } = useProductStore();

  useEffect(() => {
    getProducts(API);
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          {Object.keys(routeList).map((route) => (
            <Route path={route} element={routeList[route]} key={route} />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
