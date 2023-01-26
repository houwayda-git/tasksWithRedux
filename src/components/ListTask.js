import React from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { useSelector } from 'react-redux'

export default function ListTask() {
    const list = useSelector(state => state.todo)


    return (
        <div className="App">
            <AddTask />
            {list.map((task, i) => <Task {...task} index={i} key={i} />)}
        </div>
    )
}
