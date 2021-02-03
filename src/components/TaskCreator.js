import React, {useState} from 'react'

const TaskCreator = (props) =>{
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskName = e => setNewTaskName(e.target.value);
    const createNewTask = () => {
        props.callback(newTaskName);
        console.log(newTaskName);
        setNewTaskName('');
    }


    return (
        <div className="my-1">
            <input type="text" 
                className="form-control"
                value = {newTaskName}
                onChange={updateNewTaskName}
            />

            <button className="btn btn-primary mt-1" onClick={createNewTask}>
                Add
            </button>
        </div>
    )
}

export default TaskCreator;
