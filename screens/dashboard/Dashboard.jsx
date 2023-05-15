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
  // const [promoted, setPromoted] = useState (false);

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
    fetchData ();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header__container}>
        <Text style={styles.header}>Staff Data</Text>
      </View>
      <View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Hotel Name</Text>
          <TextInput
            onChangeText={setHotelName}
            value={hotelName}
            placeholder="Hotel Name"
            style={styles.input}
          />
        </View>
        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="Name"
            style={styles.input}
          />
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
          <Text style={styles.input__text}>State</Text>
          <TextInput
            onChangeText={setState}
            value={state}
            placeholder="State"
            style={styles.input}
          />
        </View>

        <View style={styles.input__wrapper}>
          <Text style={styles.input__text}>
            promoted
          </Text>
          {/* <TextInput
            onChangeText={setPromoted}
            value={promoted}
            placeholder="Promoted"
            style={styles.input}
          /> */}
          {/* <RNPickerSelect
            placeholder={{label: 'Select promotion status', value: null}}
            onValueChange={promoted => setPromoted (promoted)}
            items={[
              {label: 'Yes', value: 'true'},
              {label: 'No', value: 'false'},
            ]}
          /> */}
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
