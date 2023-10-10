import './App.css';

import GlobalStyle from 'components/global-styles';
import Header from 'components/header';
import { baseRouter, routeList } from 'entities/route-to-component';
import theme from 'entities/theme';
import { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useProductStore from './store/useProductStore';
import HomePage from './views/home';

const API = 'http://localhost:4000/products';

function App() {
  // const { getProducts } = useProductStore();

  // useEffect(() => {
  //   getProducts(API);
  // }, []);

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
