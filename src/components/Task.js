import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleChecked, deleteTodo } from '../Redux/Reducers/todoSlice'

export default function Task({ name, done, date, index }) {
    const [checked, setChecked] = useState(done)
    const disptach = useDispatch()

    function handleCheck() {
        console.log(name, done)
        // console.log("you checked:", done, checked)
        setChecked(!checked)
        disptach(toggleChecked({ index }))
    }

    const time = new Date(date)
    const dateString = time.toUTCString()

    return (
        <>
            <div className='task-container'>

                <input checked={checked} type="checkbox" onChange={handleCheck} />
                <span className={`${checked ? 'checked' : ''} task-title`}>{name}</span>
                <small> - {dateString}</small>
                <button onClick={() => { disptach(deleteTodo({ index })) }}>DELETE</button>
            </div>
        </>
    )
}
