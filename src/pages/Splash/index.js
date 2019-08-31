import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { getUserFromLocal } from '../../helpers/auth';
import { Actions } from 'react-native-router-flux';

import { onSuccessSession } from '../../store/actions/auth';
import { styles } from './styles';
import { Title } from '../../components';

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
        <Title label="Messaging App" extraStyle={{ fontSize: 30 }} />
      </View>
    );
  }
}

export default connect(
  null,
  { onSuccessSession },
)(Splash);
