import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';

import { nameChanged, onLogin } from '../../store/actions/auth';
import { Actions } from 'react-native-router-flux';
import { saveUserToLocal } from '../../helpers/auth';
import { Title, Input, Button } from '../../components';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps = async nextProps => {
    const { loggedInUser } = nextProps;
    if (loggedInUser) {
      saveUserToLocal(loggedInUser);
      Actions.chat();
    }
  };

  onClickLogin = () => {
    const { name } = this.props;
    this.props.onLogin(name);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Title
          label="Messaging App"
          extraStyle={{ fontSize: 30, marginBottom: 50 }}
        />
        <Input
          placeholder="Your Name"
          value={this.props.name}
          onChangeText={name => this.props.nameChanged(name)}
        />
        <Button
          label="Login"
          onPress={this.onClickLogin}
          extraStyle={{ marginTop: 20 }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  const { name, loggedInUser } = authReducer;
  return {
    name,
    loggedInUser,
  };
};

export default connect(
  mapStateToProps,
  { nameChanged, onLogin },
)(Welcome);
