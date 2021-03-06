import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 30,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
