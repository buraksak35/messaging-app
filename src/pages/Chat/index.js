import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {onLeave} from '../../store/actions/auth';
import {getMessages} from '../../store/actions/chat';

import {styles} from './styles';
import {Button, Title, Loading} from '../../components';
import {MessageBubble} from '../../components/MessageBubble';

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
    const {loggedInUser, loading, messages} = this.props;

    console.log(messages);

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
        <FlatList
          data={messages}
          contentContainerStyle={{marginTop: 20}}
          renderItem={({item}) => <MessageBubble message={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = ({authReducer, chatReducer}) => {
  const {loggedInUser} = authReducer;
  const {loading, messages} = chatReducer;
  return {
    loggedInUser,
    loading,
    messages,
  };
};

export default connect(
  mapStateToProps,
  {onLeave, getMessages},
)(Chat);
