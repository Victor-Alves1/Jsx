import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './button';

const Taskdetails = () => {
    const params = useParams()
    return ( 
        <>
            <div className='back-button'>  
                <Button>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis magnam maiores assumenda, aut delectus voluptate autem voluptates laborum repellat neque asperiores cupiditate consequatur saepe ea fugiat architecto accusantium. Dolorem.</p>

            </div>
        </>
     );
};
 
export default Taskdetails;