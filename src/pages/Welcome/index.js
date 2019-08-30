import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

import {nameChanged, onLogin} from '../../store/actions/auth';
import {Actions} from 'react-native-router-flux';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.loggedInUser) {
      Actions.chat();
    }
  };

  onClickLogin = () => {
    const {name} = this.props;
    this.props.onLogin(name);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Input
          placeholder="Name"
          value={this.props.name}
          onChangeText={name => this.props.nameChanged(name)}
        />
        <Button
          label="Login"
          onPress={this.onClickLogin}
          extraStyle={{marginTop: 20}}
        />
      </View>
    );
  }
}

const mapStateToProps = ({authReducer}) => {
  const {name, loggedInUser} = authReducer;
  return {
    name,
    loggedInUser,
  };
};

export default connect(
  mapStateToProps,
  {nameChanged, onLogin},
)(Welcome);
