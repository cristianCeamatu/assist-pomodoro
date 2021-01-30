import { configureStore } from '@reduxjs/toolkit';
import pomodoroReducer from '../features/pomodoro/pomodoroSlice';
import themeReducer from '../features/theme/themeSlice';

export default configureStore({
  reducer: {
    pomodoro: pomodoroReducer,
    theme: themeReducer,
  },
});
