import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "user slice",
};

const userSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
