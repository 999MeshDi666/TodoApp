import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./slices/todoSlice";
import modalReducer from "./slices/modalSlice";
export default configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer
    },
  })