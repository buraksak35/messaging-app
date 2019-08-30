import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  topAndMessagesContainer: {
    padding: 10,
    flex: 16,
  },
  leaveButton: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'red',
  },
});
