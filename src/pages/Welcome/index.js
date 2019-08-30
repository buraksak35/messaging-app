import React, {Component} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Input placeholder="Name" onChangeText={name => console.warn(name)} />
        <Button
          label="Login"
          onPress={() => alert('asd')}
          extraStyle={{marginTop: 20}}
        />
      </View>
    );
  }
}
