 import React from 'react'
 import { Checkbox} from './Checkbox'

 export const Tasks = () => {
     const Tasks = [];

     let projectName = '';

     return(
         <div className="tasks" data-testid="tasks">
             <h2 data-testid="project-name">{projectName}</h2>

             <ul className="tasks_list">
                 {Tasks.map(task => (
                     <li key={'${task.id}'}>
                         <Checkbox id={task.id}/>
                         <span>{ task.task }</span>
                     </li>
                 ))}
             </ul>
         </div>
     )
 }
