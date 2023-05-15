import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import useFetch from '../../hooks/useFetch.js';

import styles from './login.js';

export default function Login({navigation}) {
  const [phone, setPhone] = useState ('');
  const [password, setPassword] = useState ('');
  const {error, setError, fetchData} = useFetch ('login', {phone, password});

  const submitForm = () => {
    if (phone.length == 0 || password.length == 0) {
      return setError ('Fields cannot be empty');
    } else {
      fetchData ();
      setPhone ('');
      setPassword ('');
      navigation.navigate ('Tabs');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.header}>Log In</Text>
      </View>
      <View>
        <Text style={styles.input__text}>Phone</Text>
        <TextInput
          onChangeText={setPhone}
          value={phone}
          placeholder="Enter your phone number"
          style={styles.input}
        />

      </View>
      <View>
        <Text style={styles.input__text}>Password</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          style={styles.input}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}

      <View style={styles.submitButton}>
        <TouchableHighlight>
          <Button
            style={styles.submitButton}
            title="Log In"
            onPress={() => submitForm ()}
          />
        </TouchableHighlight>
      </View>

      {/*  Sign In using Google */}
      <View style={{marginTop: 10}}>
        <TouchableOpacity>
          <View style={styles.googleButton__container}>
            <AntDesign name="google" size={24} color="black" />
            <Text style={styles.googleText}>Log In With Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.accountContainer}>
        <Text style={styles.accountText__one}>Already have an account?</Text>
        <Text
          style={styles.accountText}
          onPress={() => navigation.navigate ('Signup')}
        >
          Register
        </Text>
      </View>
    </SafeAreaView>
  );
}
