import { createSlice } from '@reduxjs/toolkit';
import { TUi } from 'types/UiType';

const initialState: TUi = {
  stateModal: false,
  authModal: false,
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
  },
});

export const {
  showModal, hideModal, showAuthModal, hideAuthModal,
} = uiState.actions;
export default uiState.reducer;
