import { Button } from 'flowbite-react';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router';
import { __APPLICATION__ } from '@/app/config';

const NotFound: FunctionComponent = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(__APPLICATION__.routes.bills_form)
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-root-bgDark">
      <div className="px-40 sm:px-10 py-20 bg-root-greyDark rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-white text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center text-white md:text-3xl">
            <span className="text-red-500">Упс!</span> Страница не найдена
          </h6>
          <p className="mb-8 text-center text-gray-500 md:text-lg">
              Страницы, которую вы искали не существует.
          </p>
          <Button onClick={goHome} className="px-6 py-2 text-sm font-semibold rounded text-white bg-root-violet border-none hover:bg-root-violet50 transition">Go home</Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
