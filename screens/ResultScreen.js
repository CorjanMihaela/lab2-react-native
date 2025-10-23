import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { imageMap } from '../data/imageMap';

const ResultScreen = ({ route, navigation }) => {
  const winner = route.params?.winner;
console.log("Winner:", winner);

  if (!winner) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eroare: Nu s-a primit câștigătorul.</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Înapoi la Start</Text>
      </Pressable>
    </View>
  );
}


  const imageSource = imageMap[winner.image];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Câștigătorul MustangVintage</Text>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.name}>{winner.name}</Text>
      <Text style={styles.desc}>{winner.description}</Text>
      <Pressable style={[styles.button, { marginBottom: 10 }]} onPress={() => navigation.navigate('Home')}>
  <Text style={styles.buttonText}>Reîncepe Clasamentul</Text>
</Pressable>
<Pressable style={styles.button} onPress={() => navigation.navigate('History')}>
  <Text style={styles.buttonText}>Vezi Istoric Voturi</Text>
</Pressable>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  desc: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default ResultScreen;
