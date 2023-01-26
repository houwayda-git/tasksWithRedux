import { createSlice } from "@reduxjs/toolkit";


const initialState = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            const time = new Date
            const newTodo = { name: action.payload, done: false, date: time.toDateString() }
            return [...state, newTodo]
        },
        toggleChecked: (state, action) => {
            console.log('checked', action.payload.index)
            const index = action.payload.index
            const todoList = state
            return todoList.map((todo, i) => {
                if (i === index) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            })
        },
        deleteTodo: (state, action) => {
            console.log('deleted', action.payload.index)
            const index = action.payload.index
            const todoList = state
            return todoList.filter((todo, i) => {
                return (i !== index)
            })
        }
    }
})

export const { add, toggleChecked, deleteTodo } = todoSlice.actions

export default todoSlice.reducer