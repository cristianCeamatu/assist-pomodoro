import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  themes: {
    light: {
      bodyBg: '',
      color: '#333333',
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
      displayBg: '#fcfcfc',
      settingsTitle: '#4F4F4F',
      gradiendButtonBg:
        'linear-gradient(91.84deg, #2F80ED 0.5%, rgba(238, 58, 220, 0.6) 89.88%)',
      gradiendButtonShadow: '0px 4px 24px rgba(93, 11, 131, 0.25)',
      defaultButtonBg: '#fcfcfc',
      defaultButtonBorder: '2px solid #828282',
      defaultButtonColor: '#828282',
      buttonFilter: 'drop-shadow(0px 4px 24px rgba(47, 128, 237, 0.25))',
    },
    dark: {
      bodyBg: '#1F1D2B',
      color: '#f2f2f2',
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
      displayBg: '#252836',
      settingsTitle: '',
      gradiendButtonBg:
        'linear-gradient(91.84deg, #2F80ED 0.5%, rgba(238, 58, 220, 0.6) 89.88%)',
      gradiendButtonShadow: '0px 4px 24px rgba(93, 11, 131, 0.25)',
      defaultButtonBg: '#252836',
      defaultButtonBorder: '2px solid #E0E0E0',
      defaultButtonColor: '#f2f2f2',
      buttonFilter: '',
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
