import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router} from "react-router-dom";

import Header from "./componets/header";
import Tasks from './componets/Tasks';
import './App.css';
import AddTask from "./componets/Addtask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  const handletaskclick = (taskid) =>{
    const newtasks = tasks.map((task) => {
      if (task.id===taskid) return {...task, completed: !task.completed}
      return task
    })
    setTasks(newtasks);
  };

  const handletaskaddition = (taskTitle) =>{
      const newtasks = [...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newtasks);
  }; 

  const handleremovetask = (taskid) => {
    const newtasks = tasks.filter((task) => task.id !== taskid); 

    setTasks(newtasks);
  };
  return(
    <Router>
      <div className="container">
        <Header />
                      <AddTask handletaskaddition={handletaskaddition}/>
            
                      <Tasks tasks={tasks} 
                            handletaskclick={handletaskclick} 
                            handleremovetask={handleremovetask}
                      />
      </div>
    </Router>
  )
}
export default App;
 