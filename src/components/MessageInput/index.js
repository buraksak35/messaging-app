import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import {Button} from '..';

export const MessageInput = props => {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.input} />
      <Button label="Send" extraStyle={styles.sendButton} />
    </View>
  );
};
