import React, { useState } from 'react'
import Task from './Task'

function TaskList({id = "Дефолт"}) {
    const [tasks, setTasks] = useState([
        {id: "1", name: "Нужно сделать вещь", isDone: false},
        {id: "2", name: "Сделанная вещь", isDone: true},
        {id: "3", name: "Какая-то вторая вещь", isDone: false},
        {id: "4", name: "Да я жесткий ебать", isDone: true}
    ])

    function addTask() {
        setTasks([...tasks,{
            id: Date.now()
        }])
    }
    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }
    return (
        <div className="tasklist mx-auto">
            Ты нажал на пиво {id}
            <button
                onClick={addTask}
            >
                Добавить таску
            </button>
            {tasks.map(({id, name, isDone}) => 
                <Task key={id} id={id} name={name} done={isDone} remove={removeTask}></Task>
            )}
        </div>
    )
}

export default TaskList
