import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../dashboard/Dashboard.jsx';
import Staff from '../staff/Staff.jsx';

import {AntDesign} from '@expo/vector-icons';

function SettingsScreen () {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator ();

export default function App () {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'All Staff') {
              iconName = focused ? 'addusergroup' : 'addusergroup';
            } else if (route.name === 'New Staff') {
              iconName = focused ? 'adduser' : 'adduser';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'setting' : 'setting';
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="All Staff" component={Staff} />
        <Tab.Screen name="New Staff" component={Dashboard} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
