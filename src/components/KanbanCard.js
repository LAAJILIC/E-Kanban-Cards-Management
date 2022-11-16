import React from 'react'

function KanbanCard({ kanban }) {
  
    return ( <div className='completed-kanban'>
    <div key={kanban.id}>
     {kanban.name}     
      {kanban.reference}
      {kanban.number}  <br /> 
         End Time : {kanban.time}
       </div> 
    </div>
  )  
}

export default KanbanCard;