import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export const Title = props => {
  return <Text style={[styles.label, props.extraStyle]}>{props.label}</Text>;
};
