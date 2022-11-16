import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RiCloseCircleLine } from 'react-icons/ri';

//Solution : Dont do different components for different phases but due to edit funtion => change data => change emplacement of the component in the PaletteProcess
//Donc il faut faire la boucle if pour les status ici et non pas dans PaletteProcess

function Palette({ kanbans, verifiedKanban, editKanban, deleteKanbanCard }) {
  const states = ['Todo', 'Doing', 'Tested', 'Done'];

  const [kanbanToUpdate, setKanbanToUpdate] = useState({
  id: 0, 
  type: '',
  name: '',
  reference: '',
  number: 0,
  date: '',
  time: '',
  status: states[0],
  phase: 0,
  isComplete: true,
  remainsOnTable: 'No'
  });
  


  if (kanbanToUpdate.id) {
    console.log(kanbanToUpdate.phase);
    editKanban(kanbanToUpdate.id, kanbanToUpdate.phase, kanbanToUpdate.status); 
   setKanbanToUpdate({
      id: 0, 
  type: '',
  name: '',
  reference: '',
  number: 0,
  date: '',
  time: '',
  status: '',
  phase: 0,
  isComplete: '',
  remainsOnTable: ''

    }) 
  };
 
  //il faut faire la boucle if pour les status ici et non pas dans PaletteProcess
    return kanbans.map((kanban, index) => (
//probleme ici kanbans qui passe est le kanban apres modification avec exists TRUE --SOLVED

   //(kanban.exists === false) ?
   <div className={`kanban-frame position${kanban.phase}`} key={index}>

    <div key={kanban.id} className='part' onClick={verifiedKanban(kanban.id)}>
     {kanban.type} <br />
     {kanban.name} <br />
      {kanban.reference} <br />
      {kanban.number} </div>
        <div className='part'>{kanban.date} <br /> {kanban.time} <br /> <br/>
          <div>
          <BsFillArrowRightCircleFill onClick={() => {setKanbanToUpdate({ id: kanban.id, 
            type: kanban.type, 
            name: kanban.name, 
            reference: kanban.reference, 
            number: kanban.number,
            date: kanban.date,
            time: kanban.time,
            status: states[kanban.phase + 1],
            phase: kanban.phase + 1,
            isComplete: kanban.isComplete,
            remainsOnTable: kanban.remainsOnTable
          })}} className='icons'/>
            <RiCloseCircleLine onClick={() => deleteKanbanCard(kanban.id)} />
          </div>
          </div>
          
        </div>)
    )
}

export default Palette;