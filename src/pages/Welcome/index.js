import React, { Component } from 'react';
import { View, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  nameChanged,
  onLogin,
  selectedGenderChanged,
  changeAvatar,
} from '../../store/actions/auth';
import { saveUserToLocal } from '../../helpers/auth';
import { Title, Input, Button, GenderPicker } from '../../components';
import { styles } from './styles';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps = async nextProps => {
    const { loggedInUser } = nextProps;
    if (loggedInUser) {
      saveUserToLocal(loggedInUser);
      Actions.chat();
    }
  };

  onClickLogin = () => {
    const { name, selectedAvatar } = this.props;

    const isValidName = name.length > 2;
    if (!isValidName) {
      return Alert.alert('Name is too short! Min 2 characters');
    }

    this.props.onLogin(name, selectedAvatar);
  };

  changeAvatar = () => {
    const { selectedGender } = this.props;
    this.props.changeAvatar(selectedGender);
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Title label="Messaging App" extraStyle={styles.pageTitle} />
        <Input
          placeholder="Your nickame"
          value={this.props.name}
          onChangeText={name => this.props.nameChanged(name)}
        />
        <GenderPicker
          selectedGender={this.props.selectedGender}
          onMalePress={() => this.props.selectedGenderChanged('male')}
          onFemalePress={() => this.props.selectedGenderChanged('female')}
          extraStyle={styles.genderPicker}
        />
        <Image
          source={{ uri: this.props.selectedAvatar }}
          style={styles.selectedAvatar}
        />
        <Button
          label="Change avatar"
          onPress={this.changeAvatar}
          extraStyle={styles.changeAvatarBtn}
        />
        <Button
          label="Login"
          onPress={this.onClickLogin}
          extraStyle={styles.loginBtn}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ authReducer }) => {
  const { name, loggedInUser, selectedGender, selectedAvatar } = authReducer;
  return {
    name,
    loggedInUser,
    selectedGender,
    selectedAvatar,
  };
};

export default connect(
  mapStateToProps,
  { nameChanged, onLogin, selectedGenderChanged, changeAvatar },
)(Welcome);
