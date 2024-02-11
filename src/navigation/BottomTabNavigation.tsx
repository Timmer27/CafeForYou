import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable, Text, View} from 'react-native';
import {HomeScreen} from '../pages/HomeScreen';
import { ProfileScreen } from '../pages/ProfileScreen';

const Tab = createBottomTabNavigator();

function SettingsScreen(): React.JSX.Element {
  return (
    <View>
      <Text>bey</Text>
    </View>
  );
}

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={'홈'}
      // tabBarOptions={""}
    >
      <Tab.Screen
        name="홈"
        component={HomeScreen}
        options={{title: '홈', headerShown: false}}
      />
      <Tab.Screen
        name="세팅"
        component={SettingsScreen}
        //   options={/*생략*/}
      />
      <Tab.Screen
        name="세팅2"
        component={SettingsScreen}
        //   options={/*생략*/}
      />
      <Tab.Screen
        name="회원정보"
        component={ProfileScreen}
        options={{title: '회원정보', headerShown: false}}
      />
    </Tab.Navigator>
  );
}
