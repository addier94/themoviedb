import { createSlice } from '@reduxjs/toolkit';
import { TUi } from 'types/UiType';

const initialState: TUi = {
  toggleModal: false,
};
const uiState = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    showModal: (state) => {
      state.toggleModal = true;
    },
    hideModal: (state) => {
      state.toggleModal = false;
    },
  },
});

export const { showModal, hideModal } = uiState.actions;
export default uiState.reducer;
