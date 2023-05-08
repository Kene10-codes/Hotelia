import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Button,
  Platform,
} from 'react-native';
import axios from 'axios';

import styles from './signup';
import {Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';

import useFetch from '../../hooks/useFetch';
import {AntDesign} from '@expo/vector-icons';

export default function Signup({navigation}) {
  const [username, setUsername] = useState ('Admin');
  const [phone, setPhone] = useState ('');
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');
  const {error, setError, fetchData} = useFetch ('register', {
    username,
    phone,
    password,
  });

  // Submit form func
  const submitForm = () => {
    if (password !== confirmPassword) {
      setError ('Password does not match');
    } else {
      fetchData ();
      setPhone ('');
      setPassword ('');
      setConfirmPassword ('');
      setError ('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.header}>Hotelia</Text>
      </View>
      <View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Username</Text>
          <TextInput
            onChangeText={setUsername}
            value={username}
            placeholder="Enter your name"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Phone Number</Text>
          <TextInput
            onChangeText={setPhone}
            value={phone}
            placeholder="Enter your Phone Number"
            maxLength={11}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="Enter a Password"
            style={styles.input}
            maxLength={8}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Confirm Password</Text>
          <TextInput
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            maxLength={8}
            placeholder="Confirm Password"
            style={styles.input}
          />
          {error && <TextInput style={styles.error}>{error}</TextInput>}
        </View>

        <View style={styles.submitButton}>
          <TouchableHighlight>
            <Button
              style={styles.submitButton}
              title="Register"
              onPress={() => submitForm ()}
            />
          </TouchableHighlight>
        </View>

        <View style={styles.text__container}>
          <Text style={styles.text}>Or</Text>
        </View>

        {/*  Sign Up using Google */}
        <View style={{marginTop: 10}}>
          <TouchableOpacity>
            <View style={styles.googleButton__container}>
              <AntDesign name="google" size={24} color="black" />
              <Text style={styles.googleText}>Sign Up With Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.accountText__one}>Already have an account?</Text>
          <Text
            style={styles.accountText}
            onPress={() => navigation.navigate ('Login')}
          >
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
