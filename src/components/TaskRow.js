import React from 'react';

const TaskRow = (props) => (
    <tr key={props.taskItem.name}>
        <td>{props.taskItem.name}</td>
        <td>
            <input 
                type="checkbox" 
                checked={props.taskItem.done} 
                onChange={() => props.toggleTask(props.taskItem)}
            />
        </td>
    </tr>
);

export default TaskRow;