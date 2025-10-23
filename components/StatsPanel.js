import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import { RankingContext } from '../context/RankingContext';
import { styles } from '../assets/styles/StatsPanel.styles';

export default function StatsPanel() {
  const { user, history } = useContext(RankingContext);

  if (!user || !Array.isArray(history[user])) {
    return <Text style={styles.title}>Nicio selecție pentru utilizatorul curent.</Text>;
  }

  return (
    <ScrollView style={styles.panel}>
      <Text style={styles.title}>📊 Istoric selecții pentru {user}</Text>
      {history[user].map((entry, index) => (
        <Text key={index} style={styles.entry}>• {entry.name}</Text>
      ))}
    </ScrollView>
  );
}
