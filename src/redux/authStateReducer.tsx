import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const AuthStateSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    updateAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { updateAuthState } = AuthStateSlice.actions;
export default AuthStateSlice.reducer;
