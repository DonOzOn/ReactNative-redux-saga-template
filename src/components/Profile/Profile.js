import { Text, View } from 'react-native';

import Button from 'components/common/Button';
import React from 'react';
import TextStyles from 'helpers/TextStyles';
import strings from 'localization';
import styles from 'components/Profile/styles';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    console.log('logout')
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.fieldTitle, { color: colors.text }]}>
        {strings.profile}
      </Text>
      <Text style={{ color: colors.text }}>{strings.profileMessage}</Text>
      <Button title={strings.logout} onPress={logoutUser} />
    </View>
  );
}

export default Profile;
