import React from 'react';

import KanbanCard from './KanbanCard';

function CompletedPalettes({ completedKanbans }) {
  console.log(completedKanbans);
    return (
      <div className='completed-palettes'>
       { 
        
        completedKanbans.map((kanban, index) => 
       
           {return <KanbanCard kanban={kanban} key={index} />}
       )
       }
      <div className='date'>
    Date: {new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()} 
  
    </div>
    </div>

  )  
}
    
export default CompletedPalettes;