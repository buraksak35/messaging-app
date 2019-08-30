import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#2980b9',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 3.5,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  sendButton: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#2c3e50',
    borderRadius: 10,
  },
});
