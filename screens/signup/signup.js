import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  header__container: {
    marginBottom: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    paddingBottom: 10,
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
  text: {
    color: 'grey',
  },
  googleButton__container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    flexDirection: 'row',
    marginTop: 5,
  },
  googleText: {
    paddingLeft: 5,
    fontSize: 15,
  },

  accountContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  accountText__one: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  accountText: {
    paddingLeft: 5,
    color: 'blue',
    fontSize: 15,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
});

export default styles;
