/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import AppNavigator from './app-navigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { reactNativePaperTheme } from 'theme/paper.theme';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={reactNativePaperTheme}>
        <AppNavigator />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
