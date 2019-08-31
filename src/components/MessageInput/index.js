import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';
import { Button } from '..';

export const MessageInput = props => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        value={props.messageInput}
        onChangeText={text => props.onChangeText(text)}
      />
      <Button
        label="Send"
        onPress={props.sendMessage}
        extraStyle={styles.sendButton}
      />
    </View>
  );
};
