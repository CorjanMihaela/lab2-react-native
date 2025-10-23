import React from 'react';
import { Pressable, Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { imageMap } from '../data/imageMap';

const { height } = Dimensions.get('window');

const MustangCard = ({ item, onSelect }) => {
  const imageSource = imageMap[item.image];

  if (!imageSource) return null;

  return (
    <Pressable onPress={() => onSelect(item)} style={styles.card}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.label}>
        <Text style={styles.labelText}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: height * 0.45,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '90%',
    height: '100%',
    borderRadius: 12
  },
  label: {
    position: 'absolute',
    top: 12,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6
  },
  labelText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default MustangCard;
