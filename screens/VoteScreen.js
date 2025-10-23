import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { AppContext } from '../context/AppContext';
import MustangCard from '../components/MustangCard';
import { useRanking } from '../hooks/useRanking';
import mustangsData from '../data/mustangs.json';

const { height } = Dimensions.get('window');

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const VoteScreen = ({ navigation }) => {
  const { username, setVotes, setHistory } = useContext(AppContext);
  const [mustangs, setMustangs] = useState([]);
  const { currentPair, vote, selected, isFinished, roundItems } = useRanking(mustangsData);
  console.log(roundItems)
  useEffect(() => {
    const shuffled = shuffleArray(mustangsData);
    setMustangs(shuffled);
  }, []);

  useEffect(() => {
  if (isFinished && selected.length > 0) {
    const finalWinner = selected[selected.length - 1];
    if (finalWinner) {
      setVotes(selected);
      setHistory((prev) => ({ ...prev, [username]: selected }));
      navigation.navigate('Result', { winner: finalWinner });
    } else {
      console.warn("Final winner is undefined");
    }
  }
}, [isFinished]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votează modelul preferat</Text>
      {currentPair.length === 2 && (
        <>
          <MustangCard item={currentPair[0]} onSelect={vote} />
          <MustangCard item={currentPair[1]} onSelect={vote} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  }
});

export default VoteScreen;
