import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        value: action.payload,
        id: new Date().getTime()
      }
      state.todoList.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todoList.filter((todo) => action.payload !== todo.id);
      state.todoList = newTodos;
    }
  },
})

export const { addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer