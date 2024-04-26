import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';


/**
 * * Обертка для подключения стора и api взаимодействий в приложении.
 */

export const withStore = (component: () => React.ReactNode) => () => {
  return <Provider store={store} children={component()} />;
};