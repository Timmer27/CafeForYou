import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  StatusBar,
  useColorScheme,
} from 'react-native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import {
  getProfile,
} from '@react-native-seoul/kakao-login';
import LoginStackNavigator from './src/navigation/LoginStackNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const getKakaoProfile = async () => {
    return await getProfile()
      .then(result => {
        setLoggedIn(true);
        console.log('resultresultresultresult', result);
        return result;
      })
      .catch(error => {
        setLoggedIn(false);
        console.log('tereoertereoertereoer', error);
      });
  };

  useEffect(() => {
    getKakaoProfile();
  }, [isLoggedIn]);
  
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      {isLoggedIn ? <MainStackNavigator /> : <LoginStackNavigator />}
    </NavigationContainer>
  );
}

export default App;
