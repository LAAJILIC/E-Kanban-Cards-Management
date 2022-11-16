import React from 'react'
import Palette from './Palette';


function PaletteProcess({ kanbans, deleteKanbanCard }) {
  //const [todoKanbans, setTodoKanbans] = useState([]);
  const states = ['Todo', 'Doing', 'Tested', 'Done'];
//let kanbanId = [];

  const verifiedKanban = id => {
    //checkedKanbans is an array with updated state: 'complete or not' of its kanban kanbans[i]s
    const checkedKanbans = kanbans.map(card => {
      if(card.id === id && !card.isComplete) {
        card.isComplete = true;
       console.log(card.isComplete);
      } //option 1
      return card; //option 2
    });
   
  kanbans =[...checkedKanbans.filter(card => card.isComplete === true)];
    console.log(kanbans);
    };  


  const editKanban = (prodId, prodPhase, prodStatus) => {
    const editedKanbans = kanbans.map(card => {
         if(card.id === prodId) 
         { 
          console.log(card.phase);
          card.phase = prodPhase;
          card.status = prodStatus;
          console.log(card.status);
         } return card;
        });
    console.log(editedKanbans);
    kanbans =[...editedKanbans];
    console.log(kanbans);
  };

  const displayCards = () => {
    
      for (var i=0; i < kanbans.length; i++) {
        if((!kanbans[i].isComplete && kanbans[i].remainsOnTable === 'No') || kanbans[i].remainsOnTable === 'Yes')
         { return <Palette key={kanbans[i].id} kanbans={kanbans} verifiedKanban={verifiedKanban} editKanban={editKanban} deleteKanbanCard={deleteKanbanCard} />
        }}
    };

     //This edit function BELOW is to move from todo state to doing state
    //I should code anoter edite function when the exists value is already true to achieve the other states

   /*  const deleteKanbankanbans[i] = (kanbans[i]Id) => { 
      const completedKanbans = kanbans.map(kanbans[i] => {
        if (kanbans[i].id === kanbans[i]Id && kanbans[i].phase >= 3 ) {
              kanbans[i].status = 'completed';
              completedPalettes = [kanbans[i], ...completedPalettes];
        } return kanbans[i];
      });
      console.log(completedKanbans);
      console.log(completedPalettes);
   
      const sortedKanbans = [...kanbans].filter(kanban => kanban.status !== 'completed');
           kanbans = [...sortedKanbans];
console.log(kanbans);
     }  */
  return (
    <div className='kanban-process'>
      <div  className='header'>
       <div className='kanban-state'>{states[0]}</div>
       <div className='kanban-state'>{states[1]}</div>
       <div className='kanban-state'>{states[2]}</div>
       <div className='kanban-state'>{states[3]}</div>
      </div>
       <div>{displayCards()}</div>
          </div>
         
  )
}

export default PaletteProcess;