import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export default function ConfigStore() {
    return configureStore({ reducer: rootReducer });
}
