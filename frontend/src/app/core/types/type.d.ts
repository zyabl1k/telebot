import {ReactNode} from "react";
import ReactDOM from "react-dom/client";

type AppComponent = () => ReactNode;

type Applications = {
    AppComponent: AppComponent;
    AppLoading: AppComponent;
}

type CoreConfiguration = {
    AppDOMNode: () => HTMLDivElement;
    AppComponent: AppComponent;
    AppReactDOM: ReactDOM.Root | null;
};