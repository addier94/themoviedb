import { createSlice } from '@reduxjs/toolkit';
import { authModalViewT, TUi } from 'types/UiType';

const initialState: TUi = {
  stateModal: false,
  authModal: false,
  authModalView: authModalViewT.LOGIN_VIEW,
};
const uiState = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    showModal: (state) => {
      state.stateModal = true;
    },
    hideModal: (state) => {
      state.stateModal = false;
    },
    showAuthModal: (state) => {
      state.authModal = true;
    },
    hideAuthModal: (state) => {
      state.authModal = false;
    },
    setAuthModalView: (state, action) => {
      state.authModalView = action.payload;
    },
  },
});

export const {
  showModal, hideModal, showAuthModal, hideAuthModal, setAuthModalView,
} = uiState.actions;
export default uiState.reducer;
