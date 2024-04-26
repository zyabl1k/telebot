import { Spinner } from 'flowbite-react';
import { FC } from 'react';

type PreloaderProps = {
    size?: 'xl' | 'sm';
};

export const PreloaderWidget: FC<PreloaderProps> = (props) => {
  return (
    <div
      className={`w-full ${props.size == 'xl' ? 'min-h-screen' : 'pt-10 pb-10'} flex justify-center items-center`}
    >
      <Spinner size="xl" color="purple" />
    </div>
  );
};