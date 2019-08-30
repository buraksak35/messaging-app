import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> {this.props.loggedInUser} </Text>
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
  {},
)(Chat);
