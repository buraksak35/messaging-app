import React from 'react';
import { View, Text, Image } from 'react-native';

import { dayjs } from '../../helpers/dayjs';
import { styles } from './styles';

export const MessageBubble = props => {
  const { message } = props;

  if (!props.loggedInUser) {
    return null;
  }

  const isOwnerMessage = message.user.id === props.loggedInUser.id;
  const date = dayjs(message.timestamp).format('MMM D, hh:mm A');

  return (
    <View
      style={[
        styles.mainContainer,
        isOwnerMessage && styles.ownerMessageContainer,
      ]}>
      <Image
        source={{ uri: message.user.avatarUrl }}
        style={[
          styles.avatar,
          isOwnerMessage ? { marginLeft: 12 } : { marginRight: 12 },
        ]}
      />
      <View style={styles.nameMessageContainer}>
        <Text
          style={[styles.nameTxt, isOwnerMessage && { alignSelf: 'flex-end' }]}>
          {message.user.name}
        </Text>
        <View style={styles.messageTextContainer}>
          <Text style={styles.messageText}>{message.text}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};
