import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';
import {
  incrementBreak,
  decrementBreak,
  incrementSession,
  decrementSession,
  increaseProgress,
  tick,
} from '../../features/pomodoro/pomodoroSlice';

afterEach(() => {
  cleanup();
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

describe('incrementBreak', () => {
  test('increments the breakLength by 1', () => {
    let { breakLength } = store.getState().pomodoro;
    breakLength += 1;
    store.dispatch(incrementBreak());
    expect(breakLength).toStrictEqual(store.getState().pomodoro.breakLength);
  });
});

describe('incrementBreak', () => {
  test('increments the breakLength by 1', () => {
    let { breakLength } = store.getState().pomodoro;
    breakLength -= 1;
    store.dispatch(decrementBreak());
    expect(breakLength).toStrictEqual(store.getState().pomodoro.breakLength);
  });
});

describe('incrementSession', () => {
  test('increments the sessionLength by 1', () => {
    let { sessionLength } = store.getState().pomodoro;
    sessionLength += 1;
    store.dispatch(incrementSession());
    expect(sessionLength).toStrictEqual(
      store.getState().pomodoro.sessionLength
    );
  });
});

describe('decrementSession', () => {
  test('decrements the sessionLength by 1', () => {
    let { sessionLength } = store.getState().pomodoro;
    sessionLength -= 1;
    store.dispatch(decrementSession());
    expect(sessionLength).toStrictEqual(
      store.getState().pomodoro.sessionLength
    );
  });
});

describe('increaseProgress', () => {
  test('increments the progress by 0.25', () => {
    let { progress } = store.getState().pomodoro;
    progress += 0.25;
    store.dispatch(increaseProgress());
    expect(progress).toStrictEqual(store.getState().pomodoro.progress);
  });
});

describe('tick', () => {
  test('decrements the timeLeft by 1', () => {
    let { timeLeft } = store.getState().pomodoro;
    timeLeft -= 1;
    store.dispatch(tick());
    expect(timeLeft).toStrictEqual(store.getState().pomodoro.timeLeft);
  });
});
