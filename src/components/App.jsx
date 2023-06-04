import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from 'components/Layout/Layout';

const ShopPage = lazy(() => import('pages/ShopPage'));
const ShoppingCartPage = lazy(() => import('pages/ShoppingCartPage'));
const HistoryPage = lazy(() => import('pages/HistoryPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Navigate to="/shop" replace />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
