import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from '../router/config';

/**
 * * Обертка для подключения роутинга в приложении.
 */

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter {...RouterConfig}>
    <Suspense fallback={"Loading..."}>{component()}</Suspense>
  </BrowserRouter>
);