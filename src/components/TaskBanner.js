import React from 'react'

const TaskBanner = (props) =>   (
    <h4 className="bg-primary text-white text-center p-4">
        {props.userName}'s Task App ({props.taskItems.filter(task => !task.done).length} task to do)
    </h4>
);

export default TaskBanner;