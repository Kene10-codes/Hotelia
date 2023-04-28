import {Text, TouchableOpacity, SafeAreaView} from 'react-native';

import styles from './onboardingOne';

export default function OnboardingOne({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hotel Staff Management</Text>
      <Text>All Hotel Staff in your pocket!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate ('Signup');
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
