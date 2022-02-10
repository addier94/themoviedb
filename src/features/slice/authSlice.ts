import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { forgotPassApi, loginApi, registerApi } from 'action/authAction';
import { authState, ILogin, IRegister } from 'types/auth';

export const authRegister = createAsyncThunk(
  'auth/register',
  async (user: IRegister) => await registerApi(user),
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (user: ILogin) => await loginApi(user),
);

export const authForgotPassword = createAsyncThunk(
  'auth/forgot_password',
  async (email:string) => await forgotPassApi(email),
);

const initialState: authState = {
  currentUser: undefined,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
    },
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

export const { addUser } = authSlice.actions;

export default authSlice.reducer;
