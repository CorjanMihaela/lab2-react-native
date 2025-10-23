import { use, useEffect, useState } from 'react';

export const useRanking = (items) => {
  const [roundItems, setRoundItems] = useState(items);
  const [selected, setSelected] = useState([]);
  const [isFinished, setIsFinished] = useState(false)
  const [currentPair, setCurrentPair] = useState([])

//   const currentPair = roundItems.slice(0, 2);

  useEffect(()=>{
    console.log(roundItems)
    setCurrentPair( roundItems.slice(0, 2))
  },[roundItems])

  const vote = (winner) => {
  const nextRound = [...roundItems.slice(2), winner];
  const updatedSelected = [...selected, winner];

  if (nextRound.length === 1) {
    // Adaugă și ultimul câștigător
    setSelected([...updatedSelected, nextRound[0]]);
    setRoundItems([]);
  } else {
    setSelected(updatedSelected);
    setRoundItems(nextRound);
  }
};


  useEffect(()=>{
     if( roundItems.length <= 1){
        setIsFinished(true)
     }
  },[roundItems])
 

  return { currentPair, vote, selected, isFinished,roundItems };
};
