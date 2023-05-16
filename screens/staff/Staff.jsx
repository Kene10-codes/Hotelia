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

import styles from './staff';

import useFetch from '../../hooks/useFetch';
import {AntDesign} from '@expo/vector-icons';

export default function Staff({navigation}) {
  // const {error, setError, fetchData} = useFetch ('get-staff', {
  //   username,
  //   phone,
  //   password,
  // });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text>All staff</Text>
      </View>
    </SafeAreaView>
  );
}
