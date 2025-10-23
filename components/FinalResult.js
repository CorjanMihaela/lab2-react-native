import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { RankingContext } from '../context/RankingContext';
import { imageMap } from '../assets/utils/imageMap';
import { styles } from '../assets/styles/FinalResult.styles';

export default function FinalResult() {
  const { ranking } = useContext(RankingContext);
  const winner = ranking[ranking.length - 1];

  if (!winner) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Câștigătorul este:</Text>
      <Image
        source={imageMap[winner.image] || imageMap['fallback.png']}
        style={styles.image}
      />
      <Text style={styles.name}>{winner.name}</Text>
    </View>
  );
}
