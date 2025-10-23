import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { RankingContext } from '../context/RankingContext';
import { styles } from '../assets/styles/UserInput.styles';

export default function UserInput() {
  const { user, setUser } = useContext(RankingContext);
  const [name, setName] = useState(user || '');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Introdu numele tău:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Ex: Mihaela"
      />
      <Button title="Salvează" onPress={() => setUser(name.trim())} />
    </View>
  );
}
