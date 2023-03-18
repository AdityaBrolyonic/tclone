import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";

export const Store = configureStore({

    reducer : {
        car : carReducer
    },
});