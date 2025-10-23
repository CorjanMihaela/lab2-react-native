import React from 'react';
import { View } from 'react-native';
import { RankingProvider } from './context/RankingContext';
import UserInput from './components/UserInput';
import BattlePair from './components/BattlePair';
import FinalResult from './components/FinalResult';
import StatsPanel from './components/StatsPanel';
import { styles } from './assets/styles/App.styles';

export default function App() {
  return (
    <RankingProvider>
      <View style={styles.container}>
        <UserInput />
        <BattlePair />
        <FinalResult />
        <StatsPanel />
      </View>
    </RankingProvider>
  );
}
