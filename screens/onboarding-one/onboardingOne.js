import {StyleSheet} from 'react-native';

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: 'lightgrey',
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  onboarding__wrapper: {
    marginBottom: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 25,
    fontWeight: 900,
    paddingBottom: 10,
  },
  header__desc: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  button__text: {
    fontSize: 17,
    fontWeight: 500,
  },
});

export default styles;
