import { configureStore } from '@reduxjs/toolkit';
import headerHeightReducer from '../components/templates/header/headerSlice';

export default configureStore({
  reducer: {
    headerHeight: headerHeightReducer,
  },
});
