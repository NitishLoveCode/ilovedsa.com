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
import counterReducer from './features/counter/counterSlice';
import currentProblomsSolvingStatus from "./features/CurrentProblomsSolvingStatus/currentProblomsSolvingStatus";
import authUser from "./features/user/AuthUser";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';



// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  currentProblomsSolvingStatus,
  authUser
});

// Config for persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authUser'] // only persist authUser
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


