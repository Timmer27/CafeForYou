import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createNativeStackNavigator();
export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={BottomTabNavigation}
        options={{headerShown: false, title: '앱 메인'}}
        // options={/* 장바구니와 컨테이더 내용, 생략*/}
      />
    </Stack.Navigator>
  );
}
