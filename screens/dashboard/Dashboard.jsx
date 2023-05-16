import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';

import useFetch from '../../hooks/useFetch';

import styles from './dashboard';

export default function Dashboard({navigation}) {
  const [hotelName, setHotelName] = useState ('');
  const [name, setName] = useState ('');
  const [passport, setPassport] = useState ('');
  const [position, setPosition] = useState ('');
  const [salary, setSalary] = useState ('');
  const [state, setState] = useState ('');

  const {error, setError, fetchData} = useFetch ('staff-upload', {
    hotelName,
    name,
    passport,
    position,
    salary,
    state,
  });

  // Handle Add Staff Func
  const handleAddStaff = () => {
    if (hotelName === '' || hotelName === null) {
      setError ('Hotel Name cannot be empty');
    } else if (name === '' || hotelName === null) {
      setError ('Name cannot be empty');
    } else if (state === '' || state === null) {
      setError ('State cannot be empty');
    } else {
      fetchData ();
      setHotelName ('');
      setName ('');
      setPassport ('');
      setPosition ('');
      setSalary ('');
      setState ('');
      setError ('');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.header}>Staff Data</Text>
        <Text style={styles.header__desc}>Please fill the details below</Text>
      </View>
      <View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>
            Hotel Name <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            onChangeText={setHotelName}
            value={hotelName}
            placeholder="Hotel Name"
            style={styles.input}
          />
          {error && <TextInput style={styles.error}>{error}</TextInput>}
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>
            Name <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Name"
            style={styles.input}
          />
          {error && <TextInput style={styles.error}>{error}</TextInput>}
        </View>

        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Passport</Text>
          <TextInput
            onChangeText={setPassport}
            value={passport}
            placeholder="Passport"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Position</Text>
          <TextInput
            onChangeText={setPosition}
            value={position}
            placeholder="Position"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Salary</Text>
          <TextInput
            onChangeText={setSalary}
            value={salary}
            placeholder="Salary"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>
            State <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            onChangeText={setState}
            value={state}
            placeholder="State"
            style={styles.input}
          />
          {error && <TextInput style={styles.error}>{error}</TextInput>}
        </View>
        <View style={styles.submitButton}>
          <TouchableHighlight>
            <Button
              style={styles.submitButton}
              title="Add Staff"
              onPress={() => handleAddStaff ()}
            />
          </TouchableHighlight>
        </View>

      </View>
    </SafeAreaView>
  );
}
