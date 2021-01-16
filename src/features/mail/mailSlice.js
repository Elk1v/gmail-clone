import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    isComposeOpen: false,
  },
  reducers: {
    openCompose: (state) => {
      state.isExposeOpen = true;
    },
    closeExpose: (state) => {
      state.isComposeOpen = false;
    },
  },
});

export const { openCompose, closeCompose } = mailSlice.actions;
export const selectIsComposeOpen = (state) => state.mail.isComposeOpen;

export default mailSlice.reducer;