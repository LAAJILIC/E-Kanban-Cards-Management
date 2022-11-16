import {useState } from 'react';

export const useSynchronousState = initialValue => {
    const [cardsTab, updateCardsTab] = useState(initialValue);
    //initialValue = kanbans
    let current = cardsTab;
    console.log(current);
   const get = () => current;
//newValue = kanbans updated ( after .filter)
   const set = newValue => {
      current = newValue;
      updateCardsTab(newValue);
      return current;
   }
    
    
    return [  get,
        set,];

   
 }