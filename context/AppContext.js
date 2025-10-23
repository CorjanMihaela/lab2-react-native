import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [votes, setVotes] = useState([]);
  const [history, setHistory] = useState({});

  return (
    <AppContext.Provider value={{ username, setUsername, votes, setVotes, history, setHistory }}>
      {children}
    </AppContext.Provider>
  );
};
