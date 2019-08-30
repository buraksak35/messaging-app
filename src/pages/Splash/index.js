import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {getUserFromLocal} from '../../helpers/auth';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      const checkSession = getUserFromLocal();
      if (checkSession) {
        Actions.chat();
      } else {
        Actions.welcome();
      }
    }, 2000);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Splash </Text>
      </View>
    );
  }
}
