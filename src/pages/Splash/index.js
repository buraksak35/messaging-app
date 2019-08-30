import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {getUserFromLocal} from '../../helpers/auth';
import {Actions} from 'react-native-router-flux';

import {onSuccessSession} from '../../store/actions/auth';
import {styles} from './styles';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(async () => {
      const checkSession = await getUserFromLocal();
      if (checkSession) {
        this.props.onSuccessSession(checkSession);
        Actions.chat();
      } else {
        Actions.welcome();
      }
    }, 2000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text> Messaing App </Text>
      </View>
    );
  }
}

export default connect(
  null,
  {onSuccessSession},
)(Splash);
