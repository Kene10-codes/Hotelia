import {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  Button,
  ScrollView,
  Alert,
  Platform,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import RNPickerSelect from 'react-native-picker-select';

import {useFetchForm} from '../../hooks/useFetch';

import styles from './dashboard';

export default function Dashboard({navigation}) {
  const [hotelName, setHotelName] = useState ('');
  const [name, setName] = useState ('');
  const [phone, setPhone] = useState ('');
  const [passport, setPassport] = useState ('');
  const [position, setPosition] = useState ('');
  const [salary, setSalary] = useState ('');
  const [address, setAddress] = useState ('');
  const [state, setState] = useState ('');
  const [image, setImage] = useState (null);

  const {error, setError, fetchData} = useFetchForm ('staff-upload', {
    hotelName,
    name,
    phone,
    passport,
    position,
    salary,
    address,
    state,
  });

  // Handle Add Staff Func
  const handleAddStaff = () => {
    if (hotelName === '' || hotelName === null) {
      setError ('Hotel Name cannot be empty');
    } else if (name === '' || hotelName === null) {
      setError ('Name cannot be empty');
    } else if (phone === '' || phone === null) {
      setError ('Phone cannot be empty');
    } else if (passport === '' || passport === null) {
      setError ('Please upload your image ');
    } else if (position === '' || position === null) {
      setError ('Position cannot be empty');
    } else if (salary === '' || salary === null) {
      setError ('Salary cannot be empty');
    } else if (address === '' || address === null) {
      setError ('Address cannot be empty');
    } else if (state === '' || state === null) {
      setError ('State cannot be empty');
    } else {
      fetchData ();
      Alert.alert ('Staff successfully Added');
      setHotelName ('');
      setName ('');
      setPhone ('');
      setPassport ('');
      setPosition ('');
      setSalary ('');
      setAddress ('');
      setState ('');
      setError ('');
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync ({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage (result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
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
            <Text style={styles.input__text}>
              Phone Number <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              onChangeText={setPhone}
              value={phone}
              placeholder="Phone"
              maxLength={11}
              keyboardType="numeric"
              style={styles.input}
            />
            {error && <TextInput style={styles.error}>{error}</TextInput>}
          </View>

          <View style={styles.input__wrapper}>
            <Text style={styles.input__text}>
              Image <Text style={{color: 'red'}}>*</Text>
            </Text>
            <Button title="Choose a passport" onPress={pickImage} />
            {image &&
              <Image source={{uri: image}} style={{width: 200, height: 200}} />}
            {error && <TextInput style={styles.error}>{error}</TextInput>}
          </View>

          <View style={styles.input__wrapper}>
            <Text style={styles.input__text}>Position</Text>
            <TextInput
              onChangeText={setPosition}
              value={position}
              placeholder="Position"
              style={styles.input}
            />
            {error && <TextInput style={styles.error}>{error}</TextInput>}
          </View>
          <View style={styles.input__wrapper}>
            <Text style={styles.input__text}>Salary</Text>
            <TextInput
              onChangeText={setSalary}
              value={salary}
              placeholder="Salary"
              style={styles.input}
            />
            {error && <TextInput style={styles.error}>{error}</TextInput>}
          </View>
          <View style={styles.input__wrapper}>
            <Text style={styles.input__text}>
              Address <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              onChangeText={setAddress}
              value={address}
              placeholder="Address"
              style={styles.input}
            />
            {error && <TextInput style={styles.error}>{error}</TextInput>}
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
    </ScrollView>
  );
}
