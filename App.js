import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './context/AppContext';

import HomeScreen from './screens/HomeScreen';
import VoteScreen from './screens/VoteScreen';
import ResultScreen from './screens/ResultScreen';
import StatsScreen from './screens/StatsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Vote" component={VoteScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
          <Stack.Screen name="History" component={StatsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
