import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Pressable, StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' />
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
