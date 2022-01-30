import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import searchSlice from "../reducers/searchSlice";
import favoriteSlice from "../reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    favorite: favoriteSlice.reducer,
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
