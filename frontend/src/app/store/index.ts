import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ThemeSliceReducer} from "@/app/store/slices/theme/theme.slice.ts";

const rootReducer = combineReducers({
    ThemeReducer: ThemeSliceReducer
});

export const store = configureStore({
    reducer: rootReducer,
});

export type TypedRootState = ReturnType<typeof store.getState>;