import {FC, lazy} from "react";
import {__APPLICATION__} from "@/app/config";
import {Route, Routes} from "react-router-dom";

const BillsForm = lazy(() => import('./bills-form/bills-form.view'));
const NotFoundView = lazy(() => import('./notfound/notfound.view'));

export const Routing: FC = () => {
    const {routes} = __APPLICATION__;

    return (
        <Routes>
            <Route path={routes.bills_form} element={<BillsForm />} />
            <Route path={routes.notfound} element={<NotFoundView />} />
        </Routes>
    )
}