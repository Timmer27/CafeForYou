import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import Login from '../pages/Login';

const Stack = createNativeStackNavigator();
export default function LoginStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={Login}
        options={{title: '로그인'}}
      />
      {/* <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: '회원가입'}}
      /> */}
    </Stack.Navigator>
  );
}
