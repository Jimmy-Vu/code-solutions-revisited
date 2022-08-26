import React, { useEffect, useState } from 'react';
import Header from './components/header';
import Catalog from './pages/catalog';
import NotFound from './pages/not-found';
import ProductDetails from './pages/product-details';
import { parseRoute } from './lib';

export default function App(props) {

  const [stateRoute, setStateRoute] = useState({
    route: parseRoute(window.location.hash)
  });

  useEffect(() => {
    /**
     * Listen for hash change events on the window object
     * Each time the window.location.hash changes, parse
     * it with the parseRoute() function and update state
     */
    window.addEventListener('hashchange', event => {
      setStateRoute({ route: parseRoute(window.location.hash) })
    });
  }, [])



  function renderPage() {
    const { route } = stateRoute;
    if (route.path === '') {
      return <Catalog />;
    }
    if (route.path === 'products') {
      const productId = route.params.get('productId');
      return <ProductDetails productId={productId} />;
    }
    return <NotFound />;
  }

  return (
    <>
      <Header />
      {renderPage()}
    </>
  );
}
