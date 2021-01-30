import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  themes: {
    light: {
      bg: '#fff',
      navBg: '#fff',
      navButtonBg: '#11bcc7',
      navButtonShadow: '0px 4px 8px rgba(17, 188, 199, 0.15)',
      navButtonBorder: '0',
      border: 0,
      togglerColorLight: '#4F4F4F',
      togglerColorDark: '#BDBDBD',
      contactBg: '#fcfcfc',
      aboutTitle: '',
      aboutSubtitle: '#4f4f4f',
    },
    dark: {
      bg: '#1F1D2B',
      navBg: '#252736',
      navButtonBg: '#252736',
      navButtonShadow: '0',
      navButtonBorder: '1px solid #ffffff',
      border: '1px solid #828282',
      togglerColorLight: '#828282',
      togglerColorDark: '#F2F2F2',
      contactBg: '#252836',
      aboutTitle: '#f2f2f2',
      aboutSubtitle: '#E0E0E0',
    },
  },
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
