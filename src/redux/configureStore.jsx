import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projects';

const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});

export default store;
