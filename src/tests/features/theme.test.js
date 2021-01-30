import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../app/store';
import App from '../../App';
import { toggleTheme } from '../../features/theme/themeSlice';

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

describe('themeSlice', () => {
  test('has an initial mode proprety set to light', () => {
    const { mode } = store.getState().theme;
    expect(mode).toStrictEqual('light');
  });

  test('theme mode toggles between dark/light when toggleTheme action is dispatched', () => {
    expect(store.getState().theme.mode).toStrictEqual('light');
    store.dispatch(toggleTheme());
    expect(store.getState().theme.mode).toStrictEqual('dark');
    store.dispatch(toggleTheme());
    expect(store.getState().theme.mode).toStrictEqual('light');
  });
});
