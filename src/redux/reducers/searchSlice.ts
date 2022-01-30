import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSearchQuery } from "../../services/searchService";

export interface SearchState {
  value: object;
  status: "idle" | "pending";
  currentRequestId: any;
  error: any;
}

const initialState: SearchState = {
  value: [] as object,
  status: "idle",
  currentRequestId: undefined,
  error: null,
};

export const getSearchValueAsync = createAsyncThunk(
  "search/getSearchValueAsync",
  async (
    query: any,
    { getState, requestId }: { getState: () => any; requestId: string }
  ) => {
    const { currentRequestId, status } = getState().search;
    if (status !== "pending" || requestId !== currentRequestId) {
      return;
    }
    const response: any = await getSearchQuery(query);
    return response?.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchValueAsync.pending, (state, action) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getSearchValueAsync.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.value = action.payload;
          state.currentRequestId = undefined;
        }
      })
      .addCase(getSearchValueAsync.rejected, (state, action) => {
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

export default searchSlice;
