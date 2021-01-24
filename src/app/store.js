import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mail/mailSlice';
import authReducer from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
    auth: authReducer,
  },
});
