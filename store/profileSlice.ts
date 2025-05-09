import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  nim: string;
  email: string;
  photo: string | null;
}

const initialState: ProfileState = {
  name: 'Muflih Muhammad Fadhli',
  nim: '230444020006',
  email: 'muflihmuhammadfadhli@gmail.com',
  photo: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (
      state,
      action: PayloadAction<{ name: string; nim: string; email: string; photo: string | null }>
    ) => {
      state.name = action.payload.name;
      state.nim = action.payload.nim;
      state.email = action.payload.email;
      state.photo = action.payload.photo; 
    },
    updatePhoto: (state, action: PayloadAction<string>) => {
      state.photo = action.payload;
    },
    resetProfile: () => initialState,
  },
});

export const { updateProfile, updatePhoto, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;
