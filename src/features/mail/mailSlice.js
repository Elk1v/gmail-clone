import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    isComposeOpen: false,
    currentMail: null,
  },
  reducers: {
    selectMail: (state, action) => {
      state.currentMail = action.payload;
    },
    openCompose: (state) => {
      state.isComposeOpen = true;
    },
    closeCompose: (state) => {
      state.isComposeOpen = false;
    },
  },
});

export const { openCompose, closeCompose, selectMail } = mailSlice.actions;
export const selectIsComposeOpen = (state) => state.mail.isComposeOpen;
export const selectCurrentMail = (state) => state.mail.currentMail;

export default mailSlice.reducer;
