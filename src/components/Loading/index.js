import React from 'react';
import { ActivityIndicator } from 'react-native';

import { styles } from './styles';

export const Loading = () => {
  return (
    <ActivityIndicator color="blue" size="large" style={styles.indicator} />
  );
};
