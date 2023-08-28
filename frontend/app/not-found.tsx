'use client';

import ErrorPage from '@/components/common/404Page/404Page';
import RootLayout from './layout';

const NotFound = () => {
  return (
    <RootLayout showHeader={false}>
      <ErrorPage />;
    </RootLayout>
  );
};

export default NotFound;
