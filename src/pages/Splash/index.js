import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { Title } from '../../components';
import { getUserFromLocal } from '../../helpers/auth';
import { onSuccessSession } from '../../store/actions/auth';
import { styles } from './styles';

class Splash extends Component {
  constructor(props) {
    super(props);
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
