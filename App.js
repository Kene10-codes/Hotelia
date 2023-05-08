import {StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import {Signup, Login, OnboardingOne, Home} from './screens';

const Stack = createNativeStackNavigator ();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingOne"
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: '#000',
    alignItems: 'center',
  },

  desc: {
    fontSize: 15,
  },
});
