import { createSlice } from '@reduxjs/toolkit';
// Utils
import { intToMMSS } from '../../utils/format';

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  active: false,
  timer: false,
  timeLeft: 1500,
  timeLeftType: 'Session',
};

export const pomodoroSlice = createSlice({
  name: 'pomodoro',
  initialState,
  reducers: {
    incrementBreak: (state) => {
      if (state.breakLength < 60) state.breakLength += 1;
      if (state.timeLeftType === 'Break')
        state.timeLeft = state.breakLength * 60;
    },
    decrementBreak: (state) => {
      if (state.breakLength > 1) state.breakLength -= 1;
      if (state.timeLeftType === 'Break')
        state.timeLeft = state.breakLength * 60;
    },
    incrementSession: (state) => {
      if (state.sessionLength < 120) state.sessionLength += 1;
      if (state.timeLeftType === 'Session')
        state.timeLeft = state.sessionLength * 60;
    },
    decrementSession: (state) => {
      if (state.sessionLength > 1) state.sessionLength -= 1;
      if (state.timeLeftType === 'Session')
        state.timeLeft = state.sessionLength * 60;
    },
    reset: (state) => {
      state.timer && clearInterval(state.timer);
      return initialState;
    },
    startStop: (state, action) => {
      if (state.active === false) {
        state.timer && clearInterval(state.timer);
        state.active = true;
        state.timer = action.payload;
      } else {
        clearInterval(state.timer);
        state.timer = false;
        state.active = false;
      }
    },
    tick: (state) => {
      if (state.timeLeft > 0) {
        state.timeLeft = state.timeLeft - 1;
      } else if (state.timeLeft === 0) {
        if (state.timeLeftType === 'Session') {
          state.timeLeftType = 'Break';
          state.timeLeft = state.breakLength * 60;
        } else {
          if (state.turns === 1) {
            clearInterval(state.timer);
            state.timer = false;
            state.active = false;
          }
          state.turns -= 1;
          state.timeLeftType = 'Session';
          state.timeLeft = state.sessionLength * 60;
        }
      }
    },
  },
});

export const {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  startStop,
  tick,
  reset,
} = pomodoroSlice.actions;

export const selectTimeleft = (state) => intToMMSS(state.pomodoro.timeLeft);

export default pomodoroSlice.reducer;
