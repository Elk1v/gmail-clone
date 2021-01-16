import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mail/mailSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
  },
});
