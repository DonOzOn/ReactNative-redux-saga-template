import { DarkTheme, LightTheme } from 'helpers/Themes';
import React, { useEffect } from 'react';

import { DARK } from 'constants/colorScheme';
import Navigation from 'navigation';
import { Provider } from 'react-redux';
import createStore from "./reducers/index"
import { enableScreens } from 'react-native-screens';
import { hide } from 'react-native-bootsplash';
import { persistor } from 'store';
import { useColorScheme } from 'react-native';

enableScreens();

function App() {
  const scheme = useColorScheme();
  // create our store
  const store = createStore()
  const hideSplashScreen = async () => {
    await hide({ fade: true });
  };

  useEffect(() => {
    persistor(hideSplashScreen);
  }, []);

  return (
    <Provider store={store}>
      <Navigation theme={scheme === DARK ? DarkTheme : LightTheme} />
    </Provider>
  );
}

export default App;
