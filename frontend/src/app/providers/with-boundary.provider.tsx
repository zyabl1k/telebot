import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import { Widget } from '@/widgets';

export const withBoundary = (component: () => React.ReactNode) => () => (
  <ErrorBoundary fallback={<Widget.ErrorBoundaryWidget />}>
    {component()}
  </ErrorBoundary>
);
