import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { registerApi } from 'action/authAction';
import { authState, IRegister } from 'types/auth';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => await registerApi(user),
);

const initialState: authState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        ({ type }) => type.startsWith('auth') && type.endsWith('/pending'),
        (state) => { state.loading = true; },
      )
      .addMatcher(
        ({ type }) => type.startsWith('auth') && type.endsWith('/fulfilled'),
        (state) => { state.loading = false; },
      );
  },
});

export default authSlice.reducer;
