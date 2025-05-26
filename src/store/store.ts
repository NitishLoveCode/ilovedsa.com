import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import currentProblomsSolvingStatus from "./features/CurrentProblomsSolvingStatus/currentProblomsSolvingStatus";
import authUser from "./features/user/AuthUser";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentProblomsSolvingStatus,
    authUser
  },
});

// Type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


