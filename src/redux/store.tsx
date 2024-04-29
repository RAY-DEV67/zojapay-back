import { combineReducers, createStore } from '@reduxjs/toolkit';
import authStateReducer from './authStateReducer';

const rootReducer = combineReducers({
  authState: authStateReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
