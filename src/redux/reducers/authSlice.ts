import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../services/authService";

export interface AuthState {
  value: any;
  status: "idle" | "pending";
  currentRequestId: any;
  error: any;
}

const initialState: AuthState = {
  value: "",
  status: "idle",
  currentRequestId: undefined,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/setLoginAsync",
  async (
    user: any,
    {
      rejectWithValue = null,
      requestId,
      getState,
    }: {
      rejectWithValue: any;
      requestId: string;
      getState: () => any;
    }
  ) => {
    const { currentRequestId, status } = getState().auth;
    if (status !== "pending" || requestId !== currentRequestId) {
      return;
    }
    try {
      const response: any = await login(user);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.value = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        if (state.status === "idle") {
          state.status = "pending";
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.value = action.payload?.data;
          localStorage.setItem("token", action.payload?.data?.accessToken);
          state.currentRequestId = undefined;
        }
      })
      .addCase(loginAsync.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.status === "pending" &&
          state.currentRequestId === requestId
        ) {
          state.status = "idle";
          state.error = action.payload;
          console.log(state.error);
          state.currentRequestId = undefined;
        }
      });
  },
});

export default authSlice;
