import { configureStore } from "@reduxjs/toolkit";
import  userDetailReducer  from "../Redux/userDetail";

const store = configureStore({
  reducer: userDetailReducer,
});
export default store;
