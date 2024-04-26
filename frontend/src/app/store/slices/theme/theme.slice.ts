import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
    isDark: boolean;
}

const initialState: initialStateType = {
  isDark: true
}

export const ThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    }
  }
})

export const ThemeSliceReducer = ThemeSlice.reducer;
export const ThemeSliceActions = ThemeSlice.actions;