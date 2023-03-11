import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
  name: "modal",
  initialState:{
    removeValue: false,
    updateValue: false,
  },
  
   
  reducers: {
    modalConfirmRemove: (state) => {
        state.removeValue = !state.removeValue;
    },
    modalUpdateTodo: (state) => {
        state.updateValue = !state.updateValue;
    },
   
  },
});

export const {modalConfirmRemove,modalUpdateTodo} = modalSlice.actions;
export default modalSlice.reducer;
