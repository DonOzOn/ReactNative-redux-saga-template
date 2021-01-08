import AppNavigator from 'navigation/AppNavigator';
import AuthNavigator from 'navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { getUser } from 'selectors/UserSelectors';
import { useSelector } from 'react-redux';

function Navigation({ theme }) {
  const user = useSelector(getUser);

  return (
    <NavigationContainer theme={theme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

Navigation.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default Navigation;
