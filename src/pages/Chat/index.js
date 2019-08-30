import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {onLeave} from '../../store/actions/auth';

import {styles} from './styles';
import {Button, Title} from '../../components';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  leave = () => {
    this.props.onLeave();
    Actions.welcome();
  };

  render() {
    const {loggedInUser} = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Button
            label="Leave"
            onPress={this.leave}
            extraStyle={styles.leaveButton}
          />
          <Title label={loggedInUser} extraStyle={{}} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({authReducer}) => {
  const {loggedInUser} = authReducer;
  return {
    loggedInUser,
  };
};

export default connect(
  mapStateToProps,
  {onLeave},
)(Chat);
