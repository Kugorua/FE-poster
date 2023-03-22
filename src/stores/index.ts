import { Action, configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import userSlice from "../feature/auth/authSlice";
export const store = configureStore({
  reducer: {
    userSlice:userSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
