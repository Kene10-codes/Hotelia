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
    fontWeight: 500,
  },
  input: {
    height: 42,
    width: 300,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
