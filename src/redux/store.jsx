import { configureStore } from '@reduxjs/toolkit';
import { introduction } from './introduction';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import session from 'redux-persist/lib/storage/session';

const persistConfig = {
  key: 'root',
  storage: session,
  //  user reducer만 localstorage에 저장.
  // blacklist -> 그것만 제외합니다
};

const combinedReducer = combineReducers({ introduction: introduction.reducer });
const rootReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
