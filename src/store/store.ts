import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import currentProblomsSolvingStatus from "./features/CurrentProblomsSolvingStatus/currentProblomsSolvingStatus";
import authUser from "./features/user/AuthUser";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import addDsaStepsSlice from './features/dashboard/dsaSteps';
import stackSwitchSlice from "./features/dashboard/stackSwitchData";



// Combine reducers
const rootReducer = combineReducers({
  currentProblomsSolvingStatus,
  authUser, 
  addDsaStepsSlice,
  stackSwitchSlice
});

// Config for persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authUser', "addDsaStepsSlice", "stackSwitchSlice"] // only persist authUser
  // blacklist: ['counter'] // everything EXCEPT `counter` will be persisted

};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        //Required for redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

// Persistor
export const persistor = persistStore(store);

// Type exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


