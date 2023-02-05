import { createSlice } from "@reduxjs/toolkit";

const switchSlice = createSlice({
  initialState: {
    active: false,
  },
  reducers: {
    toggleSwitch: (setSwitch) => {
      setSwitch((previousState) => !previousState);
    },
  },
});

export const toggleSwitch = switchSlice.actions.toggleSwitch;
export default switchSlice.reducer;
