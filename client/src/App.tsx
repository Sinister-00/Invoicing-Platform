import './App.css';
import { useEffect } from 'react';
import useProductStore from './store/useProductStore';
import { Route, Router, Routes } from 'react-router-dom';
import { routeList } from 'entities/route-to-component';

const API = 'http://localhost:4000/products';

function App() {
  const { getProducts } = useProductStore();

  useEffect(() => {
    getProducts(API);
  });

  return (
    <Router>
      <Routes>
        {Object.keys(routeList).map((route) => (
          <Route path={route} element={routeList[route]} key={route} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
