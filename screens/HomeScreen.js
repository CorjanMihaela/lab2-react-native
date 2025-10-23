import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

const HomeScreen = ({ navigation }) => {
  const { setUsername } = useContext(AppContext);
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      setUsername(name.trim());
      console.log('Name:', name)
      navigation.navigate('Vote');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏁 MustangVintage</Text>
      <TextInput
        placeholder="Introdu numele tău"
        style={styles.input}
        value={name}
        onChangeText={(text)=>{
            setName(text)}}
      />
      <Pressable style={styles.button} onPress={handleStart}>
  <Text style={styles.buttonText}>Începe Clasamentul</Text>
</Pressable>


    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 20 },
  button: { backgroundColor: '#222', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' }
});

export default HomeScreen;
