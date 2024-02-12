import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable, Text, View} from 'react-native';
import {HomeScreen} from '../pages/HomeScreen';
import {ProfileScreen} from '../pages/ProfileScreen';
import {StoreScreen} from '../pages/StoreScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
        name="커피 스토어"
        component={StoreScreen}
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="rocket" size={30} color="#900" />
            // <Icon name='chervon-right' size={16} color='#000' />
          ),
        }}
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
