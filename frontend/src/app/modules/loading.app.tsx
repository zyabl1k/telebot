import { Widget } from '@/widgets';
import { FunctionComponent } from 'react';

export const LoadingApp: FunctionComponent = () => {
  return (
    <div className="w-screen flex justify-center items-center h-screen">
      <Widget.Preloader />
    </div>
  );
};