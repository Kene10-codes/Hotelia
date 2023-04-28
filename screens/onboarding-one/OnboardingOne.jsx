import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {Feather} from '@expo/vector-icons';

import styles from './onboardingOne';

export default function OnboardingOne({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.onboarding__wrapper}>
        <Text style={styles.header}>Hotel Staff Management</Text>
        <Text style={styles.header__desc}>All hotel staff in your pocket!</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate ('Signup');
          }}
        >
          <Text style={styles.button__text}>
            Get Started <Feather name="arrow-right" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
