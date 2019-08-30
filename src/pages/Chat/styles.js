import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  topAndMessagesContainer: {
    padding: 20,
  },
  leaveButton: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'red',
  },
});
