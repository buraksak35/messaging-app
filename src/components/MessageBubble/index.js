import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const MessageBubble = props => {
  const {message} = props;

  return (
    <View style={styles.container}>
      <Text>{message.text}</Text>
    </View>
  );
};
