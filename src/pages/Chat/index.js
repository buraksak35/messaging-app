import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {onLeave} from '../../store/actions/auth';
import {getMessages} from '../../store/actions/chat';

import {styles} from './styles';
import {Button, Title, Loading} from '../../components';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMessages();
  }

  leave = () => {
    this.props.onLeave();
    Actions.welcome();
  };

  render() {
    const {loggedInUser, loading} = this.props;
    console.log(loading);
    if (loading) {
      return <Loading />;
    }

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

const mapStateToProps = ({authReducer, chatReducer}) => {
  const {loggedInUser} = authReducer;
  const {loading} = chatReducer;
  return {
    loggedInUser,
    loading,
  };
};

export default connect(
  mapStateToProps,
  {onLeave, getMessages},
)(Chat);
