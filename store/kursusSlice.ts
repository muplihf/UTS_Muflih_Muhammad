import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Kursus {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  isComingSoon: boolean;
}

interface KursusState {
  data: Kursus[];
}

const initialState: KursusState = {
  data: [],
};

const kursusSlice = createSlice({
  name: 'kursus',
  initialState,
  reducers: {
    setKursus: (state, action: PayloadAction<Kursus[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setKursus } = kursusSlice.actions;
export default kursusSlice.reducer;
