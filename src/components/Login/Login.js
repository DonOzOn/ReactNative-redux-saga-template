import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Button from 'components/common/Button';
import ErrorView from 'components/common/ErrorView';
import LanguageAction from '../../reducers/LanguageReducer'
import LoginAction from '../../reducers/LoginReducer';
import RNRestart from 'react-native-restart';
import ShadowStyles from 'helpers/ShadowStyles';
import TextField from 'components/common/TextField';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import styles from 'components/Login/styles';
import { useTheme } from '@react-navigation/native';

function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    strings.setLanguage('en');
    dispatch(LanguageAction.changeLanguage('en'))         
    dispatch(LoginAction.testRequest('1111', '1111')); 
    setEmail('sdjfdkhsj')
    // RNRestart.Restart()
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.formContainer,
          ShadowStyles.shadow,
          { backgroundColor: colors.primary },
        ]}
      >
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.email}
        </Text>
        <TextField
          accessibilityHint={strings.emailHint}
          accessibilityLabel={strings.email.toLowerCase()}
          onChangeText={setEmail}
          placeholder={strings.email}
          style={{ color: colors.text }}
          value={email}
        />
        <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
          {strings.password}
        </Text>
        <TextField
          secureTextEntry
          accessibilityHint={strings.passwordHint}
          accessibilityLabel={strings.password.toLowerCase()}
          onChangeText={setPassword}
          placeholder={strings.password}
          value={password}
          style={{ color: colors.text }}
        />
        <Button
          onPress={handleSubmit}
          title={strings.login}
        />
      </View>
    </View>
  );
}

export default Login;
