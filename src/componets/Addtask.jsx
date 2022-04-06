import React, { useState } from 'react';
import "./Addtask.css";
import Button from './button';

const AddTask = ({handletaskaddition}) => {
    const [inputdata, setinputdata]= useState("");

    const handleinputchange = (e) =>{
        setinputdata(e.target.value);
    };
    const handletaskonclick = () =>{
        handletaskaddition(inputdata)
        setinputdata("")
    }
    return ( 
        <div className='Addtask-container'>
            <input 
                onChange={handleinputchange} 
                className='Addtask-input' 
                value={inputdata} 
                type="text" 
                 
            />
            <div className="Add-Button">
                <Button onClick={handletaskonclick}>Adicionar</Button>
            </div>
        </div>
    )}
 
export default AddTask;