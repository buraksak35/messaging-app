import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

export const GenderPicker = props => {
  return (
    <View style={[styles.mainContainer, props.extraStyle]}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          props.selectedGender === 'male' && { backgroundColor: 'red' },
        ]}
        onPress={props.onMalePress}>
        <Text
          style={[
            styles.txt,
            props.selectedGender === 'male' && { color: '#fff' },
          ]}>
          Male
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          props.selectedGender === 'female' && { backgroundColor: 'red' },
        ]}
        onPress={props.onFemalePress}>
        <Text
          style={[
            styles.txt,
            props.selectedGender === 'female' && { color: '#fff' },
          ]}>
          Female
        </Text>
      </TouchableOpacity>
    </View>
  );
};
