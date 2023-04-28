import {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';

import styles from './signup';

export default function Signup () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.header}>Hotel Staff Management</Text>
        <Text>Admin Only!</Text>
      </View>
      <View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Name</Text>
          <TextInput
            onChangeText={() => {}}
            value=""
            placeholder="Enter your name"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Phone Number</Text>
          <TextInput
            onChangeText={() => {}}
            value=""
            placeholder="Enter your Phone Number"
            maxLength={11}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Password</Text>
          <TextInput
            onChangeText={() => {}}
            value=""
            placeholder="Enter a Password"
            style={styles.input}
            maxLength={8}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Confirm Password</Text>
          <TextInput
            onChangeText={() => {}}
            value=""
            maxLength={8}
            placeholder="Confirm Password"
            style={styles.input}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}
