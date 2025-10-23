import React, { useContext } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { RankingContext } from '../context/RankingContext';
import { imageMap } from '../assets/utils/imageMap';
import { styles } from '../assets/styles/BattlePair.styles';

export default function BattlePair() {
  const { pairs, vote } = useContext(RankingContext);
  const currentPair = pairs[0];

  if (!currentPair || currentPair.length < 2) return null;

  return (
    <View style={styles.container}>
      {currentPair.map((car) => (
        <Pressable key={car.id} onPress={() => vote(car)} style={styles.card}>
          <Image
            source={imageMap[car.image] || imageMap['fallback.png']}
            style={styles.image}
          />
          <Text style={styles.name}>{car.name}</Text>
        </Pressable>
      ))}
      <Text style={styles.vs}>VS</Text>
    </View>
  );
}
