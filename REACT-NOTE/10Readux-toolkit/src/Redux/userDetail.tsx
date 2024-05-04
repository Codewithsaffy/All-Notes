import { createSlice } from "@reduxjs/toolkit";

export interface UserDetailType {
  name: string | "";
  password: string | "";
}

const initialState: UserDetailType = {} as UserDetailType;

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    getUserDetail: (
      state: UserDetailType,
      action: { payload: UserDetailType }
    ) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
  },
});
export const { getUserDetail } = userDetailSlice.actions;
export default userDetailSlice.reducer;
