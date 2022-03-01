import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { palette } from './palette';

export const reactNativePaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.cyan,
    background: 'white',
  },
};
