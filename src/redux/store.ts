import { configureStore, ThunkAction, Action, Dispatch, ThunkDispatch } from '@reduxjs/toolkit';
import eventReducer from './eventSlice';

export const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<Action<string>> & ThunkDispatch<RootState, unknown, Action<string>>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
