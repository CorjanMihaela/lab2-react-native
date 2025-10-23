import React, { createContext, useState, useEffect } from 'react';
import carsData from '../assets/data/mustang.json';
import { shufflePairs } from '../assets/utils/shuffle';

export const RankingContext = createContext();

export function RankingProvider({ children }) {
  const [user, setUser] = useState('');
  const [history, setHistory] = useState({});
  const [ranking, setRanking] = useState([]);
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const generatedPairs = shufflePairs(carsData);
    setPairs(generatedPairs);
  }, []);

  function vote(car) {
    setRanking((prev) => [...prev, car]);
    setPairs((prev) => prev.slice(1));

    if (user) {
      setHistory((prev) => ({
        ...prev,
        [user]: [...(prev[user] || []), car],
      }));
    }
  }

  function resetGame() {
    setRanking([]);
    setPairs(shufflePairs(carsData));
    if (user) {
      setHistory((prev) => ({
        ...prev,
        [user]: [],
      }));
    }
  }

  return (
    <RankingContext.Provider
      value={{
        user,
        setUser,
        history,
        setHistory,
        ranking,
        setRanking,
        pairs,
        vote,
        resetGame,
      }}
    >
      {children}
    </RankingContext.Provider>
  );
}
