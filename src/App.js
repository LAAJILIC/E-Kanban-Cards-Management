import React, { useState } from 'react';

import PaletteForm from './components/PaletteForm';
import './App.css';
import PaletteProcess from './components/PaletteProcess';
import CompletedPalettes from './components/CompletedPalettes';
//import { useStateWithCallback } from './useStateWithCallback';
//import { useSynchronousState } from './useSynchronousState';

function App() {

  const [kanbans, setKanbans] = useState([]);
  const [completedPalettes, setCompletedPalettes] = useState([]);

 /*  useEffect(() => {
    kanbans.map(card => {
      if(card.status === 'completed') { kanbans.filter(k => k.status !== 'completed')}
    })
  }, [kanbans]); */

 /*  const sortedKanbans = useSynchronousState([]);
  console.log(sortedKanbans);  */

  //useEffect(() => {  setKanbans(kanban => kanban.status !== 'completed')}, [completedPalettes]);
//const [sortedKanbans, setSortedKanbans] = useStateWithCallback(kanbans);
  const createKanbanCard = (k) => {
    if (!k.type || !k.name || !k.reference || !k.number || !Number(k.number)) {return;}
      const newKanbans = [k, ...kanbans];

      setKanbans(newKanbans);
      console.log(kanbans);
  };
  const deleteKanbanCard = (cardId) => { 
    // this function is to delete the kanbancard ONLY from the database and not deleting a font endROW from the component
    const completedKanbans = kanbans.map(card => {
      if (card.id === cardId && card.phase >= 3 ) {
            card.status = 'completed';
            card.time = new Date().getHours() + ':' +( new Date().getMinutes()) + ':' + new Date().getSeconds();

            setCompletedPalettes([card, ...completedPalettes]);
            //setKanbans(kanbans.filter(kanban => kanban.status !== 'completed')); //avoid this for synchronosity reasons !!
            const objWithIdIndex = kanbans.findIndex((obj) => obj.id === cardId);
            kanbans.splice(objWithIdIndex, 1);
            console.log(kanbans);

            //setKanbans(kanbans.filter(kanban => kanban.status !== 'completed'));
            //setSortedKanbans(sortedKanbans.filter(kanban => kanban.status !== 'completed'), (kanbans, newTab) => {console.log(newTab);});
            //setKanbans(sortedKanbans); // this should be updated synchronously NOT AFTER  renedering
            
            }
            else if (card.id !== cardId) { card.remainsOnTable = 'Yes'; }
          }
      //return card;
    );
    console.log(completedKanbans);
    console.log(completedPalettes);
   //console.log(sortedKanbans);
     console.log(kanbans);
   }
//Problem affronted: useState is asynchronous (data take time to be updated)
//Problem affronted: PaletteProcess component disappear when deleting a card

  return (
    <div className="App">
    <PaletteForm onSubmit={createKanbanCard} />
    <div className='app-block'>
    <PaletteProcess kanbans={kanbans} deleteKanbanCard={deleteKanbanCard} />
    <CompletedPalettes completedKanbans={completedPalettes} />
    </div>
    </div>
  );
}

export default App;
