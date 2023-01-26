import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/Reducers/todoSlice'

export default function AddTask() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const change = (e) => {
        setInput(e.target.value)
    }
    const addTask = () => {
        setInput('')
        dispatch(add(input))
    }

    return (
        <div className="App">
            <input type="text" value={input} onChange={change} placeholder='add new todo' />
            <button onClick={addTask}>Add</button>
        </div>
    )
}
