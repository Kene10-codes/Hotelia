import {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  Button,
  Platform,
  FlatList,
} from 'react-native';
import axios from 'axios';

import styles from './staff';

import {usefetchGet} from '../../hooks/useFetch';
import {AntDesign} from '@expo/vector-icons';

export default function Staff({navigation}) {
  const {error, setError, fetchData, data} = usefetchGet ('all-staff');

  useEffect (() => {
    fetchData ();
  }, []);

  const Item = ({item}) => (
    <View>
      <Text>{item.hotelName}</Text>
      <Text>{item.name}</Text>
      <Text>0 {item.phone}</Text>
      <Text>{item.passport}</Text>
      <Text>{item.position}</Text>
      <Text>{item.salary}</Text>
      <Text>{item.address}</Text>
      <Text>{item.state}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text>All staff</Text>
        <FlatList data={data} renderItem={({item}) => <Item item={item} />} />
      </View>
    </SafeAreaView>
  );
}
