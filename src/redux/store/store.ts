import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchSlice from "../reducers/searchSlice";
import favoriteSlice from "../reducers/favoriteSlice";
import authSlice from "../reducers/authSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favorite: favoriteSlice.reducer,
    auth: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
