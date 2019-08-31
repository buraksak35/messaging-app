import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.container, props.extraStyle]}
      onPress={props.onPress}>
      <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
};
