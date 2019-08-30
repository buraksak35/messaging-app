import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

export const MessageBubble = props => {
  const {message} = props;

  const isOwnerMessage = message.user.id === props.loggedInUser.id;

  return (
    <View
      style={[
        styles.mainContainer,
        isOwnerMessage && {alignSelf: 'flex-end', flexDirection: 'row-reverse'},
      ]}>
      <Image
        source={{uri: message.user.avatarUrl}}
        style={[
          styles.avatar,
          isOwnerMessage ? {marginLeft: 12} : {marginRight: 12},
        ]}
      />
      <View style={styles.messageTextContainer}>
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    </View>
  );
};
