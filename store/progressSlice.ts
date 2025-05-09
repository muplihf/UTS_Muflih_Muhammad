import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProgressState {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  totalTopicsRead: number;
}

const initialState: ProgressState = {
  score: 0,
  correctAnswers: 0,
  totalQuestions: 0,
  totalTopicsRead: 0,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    incrementCorrectAnswers: (state) => {
      state.correctAnswers += 1;
    },
    incrementTotalQuestions: (state) => {
      state.totalQuestions += 1;
    },
    incrementTotalTopicsRead: (state) => {
      state.totalTopicsRead += 1;
    },
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload;
    },
    resetProgress: () => ({
      score: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      totalTopicsRead: 0,
    }),
  },
});

export const {
  incrementCorrectAnswers,
  incrementTotalQuestions,
  incrementTotalTopicsRead,
  setScore,
  resetProgress,
} = progressSlice.actions;

export default progressSlice.reducer;
