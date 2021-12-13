import React, { useState, useEffect } from 'react';
import './Task.css';

const Task = function({id, name, done, remove}) {
    const [isDone, setIsDone] = useState(false)
    const [nameNote, setNameNote] = useState("")

    useEffect(() => {
        if(name){
            setNameNote(name)
        }
        if(done){
            setIsDone(done)
        }
    }, [])


    function handleDone(){
        setIsDone(!isDone)
    }

    return (
        <div className="task">
            <input
                type="text"
                value={nameNote}
                onChange={e => setNameNote(e.target.value)} 
                className="task-text"
            />
            <input 
                type="checkbox" 
                className="task-checkbox"
                onChange={handleDone}
                checked={isDone}
            />
            <button
                onClick={() => remove(id)}
            >
                Удалить
            </button>
        </div>
    )
}

export default Task

