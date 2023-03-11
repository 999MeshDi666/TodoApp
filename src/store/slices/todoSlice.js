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

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: initialState,
  },
  reducers: {
    addTodo: (state, action) => {
        state.todoList.push(action.payload);
    },
    removeTodo: (state, action) =>{
      const newTodo = state.todoList.filter(todo => todo.id !== action.payload);
      state.todoList = newTodo;
    },
    completeTodo: (state, action) =>{
      const completedTodo = state.todoList.find((todo) => todo.id === action.payload)
      if(completedTodo){
        completedTodo.hasCompleted = !completedTodo.hasCompleted
      }
    }
  },
});

export const { addTodo, removeTodo,completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
