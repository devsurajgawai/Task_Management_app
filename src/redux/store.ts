import { Store, configureStore } from "@reduxjs/toolkit";
import RootReducer from "./reducers/RootReducer"; // assuming you have a rootReducer
import { useDispatch } from "react-redux";

const store: Store = configureStore({ reducer: RootReducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
