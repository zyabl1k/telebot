import ReactDOM from "react-dom/client";
import {AppComponent, CoreConfiguration} from "@/app/core/types/type";

export class AppCore {
    private configuration: CoreConfiguration = {
        AppComponent: () => void 0,
        AppDOMNode: () => document.getElementById("root") as HTMLDivElement,
        AppReactDOM: null,
    };

    constructor(component: AppComponent) {
        this.configuration.AppComponent = component;
    }

    private mount(DomNode: HTMLDivElement): void {
        const { AppComponent } = this.configuration;

        this.configuration.AppReactDOM = ReactDOM.createRoot(DomNode);
        this.configuration.AppReactDOM.render(AppComponent());
    }

    public static setup(component: AppComponent): void {
        const core = new AppCore(component);

        const { AppDOMNode } = core.configuration;

        core.mount(AppDOMNode());

        return void 0;
    }
}