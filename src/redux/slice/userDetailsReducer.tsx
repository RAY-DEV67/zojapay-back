import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  // Define the structure of the user object
  id: string;
  email: string;
  created_at: string;
  email_verified_at: string;
  first_name: string;
  last_name: string;
  updated_at: string;
  // Add more properties as needed
}


interface UserState {
  userDetails: User | null;
}

const initialState: UserState = {
  userDetails: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<User | null>) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
