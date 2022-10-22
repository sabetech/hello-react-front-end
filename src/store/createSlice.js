import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
  const greetings = await response.json();
  return greetings.data;
});

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    status: 'IDLE',
    error: null,
  },
  reducers: {},
  extraReducers: {
    /* eslint-disable no-param-reassign */
    [fetchGreetings.pending]: (state) => {
      state.status = 'LOADING';
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.status = 'SUCCESS';
      state.greetings[0] = action.payload;
    },

    [fetchGreetings.rejected]: (state, action) => {
      state.status = 'ERROR';
      state.error = action.error.message;
    },
  },
});
/* eslint-enable no-param-reassign */
export default greetingsSlice.reducer;
