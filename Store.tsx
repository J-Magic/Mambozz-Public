import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/navSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

// Infer the RootState and AppDispatch types from store itself
// export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
// Inferred type: { nav: NavState }
// export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
