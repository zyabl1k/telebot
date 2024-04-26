import compose from 'compose-function';

import { withRouter } from './with-router.provider';
import { withStore } from './with-store.provider';
import { withBoundary } from '@/app/providers/with-boundary.provider.tsx';

export const withProviders = compose(withRouter, withStore, withBoundary);