import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getFavoriteQuery,
  setFavoriteQuery,
  addToFavoriteQuery,
} from "../../services/favoriteService";

export interface FavoriteState {
  value: [];
  status: "idle" | "pending";
  currentRequestId: any;
  error: any;
}

const initialState: FavoriteState = {
  value: [],
  status: "idle",
  currentRequestId: undefined,
  error: null,
};

//  get with no params
export const getFavoriteValueAsync = createAsyncThunk(
  "favorite/getFavoriteValueAsync",
  async () => {
    const response: any = await getFavoriteQuery();
    return response.data;
  }
);

export const setFavoriteValueAsync = createAsyncThunk(
  "favorite/setFavoriteValueAsync",
  async (
    collectionName: string,
    {
      getState,
      requestId,
    }: {
      getState: () => any;
      requestId: string;
    }
  ) => {
    const { currentRequestId, status } = getState().favorite;
    if (status !== "pending" || requestId !== currentRequestId) {
      return;
    }
    const response: any = await setFavoriteQuery(collectionName);
    return response.data;
  }
);

export const addToFavoriteQueryAsync = createAsyncThunk(
  "favorite/addToFavoriteQueryAsync",
  async (
    data: any,
    {
      getState,
      requestId,
    }: {
      getState: () => any;
      requestId: string;
    }
  ) => {
    const { currentRequestId, status } = getState().favorite;
    if (status !== "pending" || requestId !== currentRequestId) {
      return;
    }
    const response: any = await addToFavoriteQuery(data);
    return response.data;
  }
);

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteValueAsync.pending, (state, action) => {
        if (state.status === "idle") {
          state.status = "pending";
        }
      })
      .addCase(getFavoriteValueAsync.fulfilled, (state, action) => {
        if (state.status === "pending") {
          state.status = "idle";
          state.value = action.payload;
        }
      })
      .addCase(getFavoriteValueAsync.rejected, (state, action) => {
        if (state.status === "pending") {
          state.status = "idle";
          state.error = action.payload;
        }
      })
      .addCase(setFavoriteValueAsync.pending, (state, action) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(setFavoriteValueAsync.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.currentRequestId = undefined;
        }
      })
      .addCase(setFavoriteValueAsync.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.error = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(addToFavoriteQueryAsync.pending, (state, action) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(addToFavoriteQueryAsync.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.currentRequestId = undefined;
        }
      })
      .addCase(addToFavoriteQueryAsync.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.error = action.payload;
          state.currentRequestId = undefined;
        }
      });
  },
});

export default favoriteSlice;
