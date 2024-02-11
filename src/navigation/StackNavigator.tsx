import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, Text, View} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';

function HomeScreen(): React.JSX.Element {
  return (
    <View>
      <View>
        <Pressable>
          <Text>button</Text>
        </Pressable>
      </View>
      <View>
        <Text>hias</Text>
      </View>
      <View>
        <Text>hi</Text>
      </View>
    </View>
  );
}

function SettingsScreen(): React.JSX.Element {
  return (
    <View>
      <Text>bey</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
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
