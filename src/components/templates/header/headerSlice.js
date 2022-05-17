import { createSlice } from '@reduxjs/toolkit';

export const headerHeightSlice = createSlice({
  name: 'headerHeight',
  initialState: {
    value: '0px',
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { change } = headerHeightSlice.actions;

export const headerHeight = (state) => state.headerHeight.value;

export default headerHeightSlice.reducer;
