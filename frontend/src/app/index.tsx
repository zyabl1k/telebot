import {AppCore} from "@/app/core";
import {App} from "@/app/app.tsx";
import React from "react";

AppCore.setup(() => <React.StrictMode children={<App />} />);