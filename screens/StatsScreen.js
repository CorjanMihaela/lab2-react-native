import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const StatsScreen = () => {
  const { history, username } = useContext(AppContext);
  const userVotes = history[username] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📈 Istoric Voturi: {username}</Text>
      {userVotes.length === 0 ? (
        <Text style={styles.empty}>Nu ai votat încă.</Text>
      ) : (
        <FlatList
          data={userVotes}
          keyExtractor={(item, index) => item.id + '-' + index}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          )}
        />
      )}
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

export default StatsScreen;
