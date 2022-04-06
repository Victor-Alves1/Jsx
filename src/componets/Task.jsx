import React from "react";

import {CgClose, CgInfo} from "react-icons/cg"

import "./task.css";
const Task = ({task, handletaskclick, handleremovetask}) => {
    return (
        <div 
        className="task-container" 
        style={task.completed?{borderLeft: '6px solid chartreuse'} : {} }
        >
            <div className="task-title" onClick={()=> handletaskclick(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="info-task">
                <CgInfo />
                </button>
                <button className="remove-task" onClick={()=> handleremovetask(task.id)}>
                <CgClose />
                </button>
                
            </div>
        </div>
    );
}
 
export default Task;