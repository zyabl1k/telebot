import { Routing } from '@/pages';
import { FunctionComponent, ReactElement } from 'react';
import { withProviders } from './providers';
import { Flowbite } from 'flowbite-react';

export const App: FunctionComponent = () => {
    return withProviders((): ReactElement => {
        return (
            <Flowbite>
                <div className="dark:bg-root-bgDark w-full min-h-screen bg-slate-50">
                    <div className="w-full flex justify-center p-10">
                        <Routing />
                    </div>
                </div>
            </Flowbite>
        )
    })();
};