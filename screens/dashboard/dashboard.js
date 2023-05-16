import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header__container: {
    marginBottom: 20,
    marginTop: 60,
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  header__desc: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  input__wrapper: {
    marginTop: 6,
    marginBottom: 6,
  },
  input__text: {
    fontSize: 15,
    fontWeight: 400,
  },
  input: {
    height: 42,
    width: 300,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    height: 40,
    marginTop: 15,
  },
  text__container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
});

export default styles;
