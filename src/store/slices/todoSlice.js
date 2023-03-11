import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "4d25",
    title: "Пинпог",
    desc: "записаться на курсы по пинг понгу",
    hasCompleted: false,
  },
  {
    id: "1df4",
    title: "Хлопья",
    desc: "Купить хлопья на завтрак",
    hasCompleted: false,
  },
  {
    id: "5d2h",
    title: "Друзья",
    desc: "Позвать друзей на день рождения",
    hasCompleted: false,
  },
];
const storedTodo = JSON.parse(localStorage.getItem('todos'));
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: storedTodo? storedTodo: initialState,
    currentTodo: {},
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newTodo = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      state.todoList = newTodo;
    },
    completeTodo: (state, action) => {
      const completedTodo = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      if (completedTodo) {
        completedTodo.hasCompleted = !completedTodo.hasCompleted;
      }
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.todoList.splice(action.payload.id, 1, action.payload);
    },
  },
});

export const { addTodo, removeTodo, completeTodo, setCurrentTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
