import { Button } from 'flowbite-react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const ErrorBoundaryWidget: FunctionComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-4/12">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Оййй...
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Произошла непредвиденная ошибка, сообщите об ошибке помогите нам стать лучше!
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
          <Link to={'/pulse'} target="_blank">
            <Button color="light">Состояние</Button>
          </Link>
          <Button color="dark">Cообщить об ошибке</Button>
        </div>
      </div>
    </div>
  );
};
