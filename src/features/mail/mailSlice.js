import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dataBase } from '../../firebase';

export const fetchEmails = createAsyncThunk('emails/all', () => {
  return dataBase
    .collection('emails')
    .orderBy('timeStamp', 'desc')
    .onSnapshot((querySnapshot) =>
      querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data(),
        };
      })
    );
});
console.log(fetchEmails);

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    isComposeOpen: false,
    emails: [],
    error: null,
  },
  reducers: {
    openCompose: (state) => {
      state.isComposeOpen = true;
    },
    closeCompose: (state) => {
      state.isComposeOpen = false;
    },
  },

  extraReducers: {
    [fetchEmails.fulfilled]: (state, action) => {
      state.emails = action.payload;
    },
    [fetchEmails.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { openCompose, closeCompose } = mailSlice.actions;
export const selectIsComposeOpen = (state) => state.mail.isComposeOpen;
export const selectEmails = (state) => state.mail.emails;

export default mailSlice.reducer;
