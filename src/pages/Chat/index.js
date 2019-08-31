import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  Button,
  Title,
  Loading,
  MessageBubble,
  MessageInput,
} from '../../components';
import { onLeave } from '../../store/actions/auth';
import {
  getMessages,
  messageInputChanged,
  sendMessage,
} from '../../store/actions/chat';
import { styles } from './styles';

class Chat extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMessages();
  }

  sendMessage = () => {
    const { messageInput, loggedInUser } = this.props;

    if (messageInput.trim() < 1) {
      return;
    }

    this.props.sendMessage(messageInput, loggedInUser);
  };

  leave = async () => {
    this.props.onLeave();
    Actions.welcome();
  };

  render() {
    const { loggedInUser, loading, messages, messageInput } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <View style={styles.mainContainer}>
        <View style={styles.topAndMessagesContainer}>
          <View style={styles.topContainer}>
            <Button
              label="Leave"
              onPress={this.leave}
              extraStyle={styles.leaveButton}
            />
            {loggedInUser && (
              <Title label={loggedInUser.name} extraStyle={{}} />
            )}
          </View>
          <FlatList
            data={messages}
            style={{ marginTop: 20 }}
            renderItem={({ item }) => (
              <MessageBubble message={item} loggedInUser={loggedInUser} />
            )}
            ref={ref => (this.scrollView = ref)}
            onContentSizeChange={() => {
              this.scrollView.scrollToEnd({ animated: true });
            }}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <MessageInput
          onChangeText={this.props.messageInputChanged}
          sendMessage={this.sendMessage}
          messageInput={messageInput}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ authReducer, chatReducer }) => {
  const { loggedInUser } = authReducer;
  const { loading, messages, messageInput } = chatReducer;
  return {
    loggedInUser,
    loading,
    messages,
    messageInput,
  };
};

export default connect(
  mapStateToProps,
  { onLeave, getMessages, messageInputChanged, sendMessage },
)(Chat);
