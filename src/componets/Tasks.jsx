import React from "react";
import Task from "./Task";
const Tasks = ({tasks, handletaskclick, handleremovetask}) =>{
    return (
        <>
        {tasks.map((task)=>(
            <Task task={task} handletaskclick={handletaskclick} handleremovetask={handleremovetask}/>))}
        </>
    );
};
export default Tasks;