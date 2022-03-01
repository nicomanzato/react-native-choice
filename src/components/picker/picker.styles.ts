import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { palette } from 'theme/palette';
import { spacing } from 'theme/spacing';

export const getStyles = (error: string) =>
  StyleSheet.create({
    placeholder: { color: palette.black },
    errorMessage: { fontSize: 14, color: color.text.error, paddingTop: spacing[8] },
    inputIOS: {
      fontSize: 20,
      padding: spacing[12],
      borderBottomWidth: 1,
      borderColor: error ? palette.red : palette.cyan,
      color: color.text.primary,
      paddingRight: spacing[32],
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: spacing[12],
      paddingVertical: spacing[8],
      borderWidth: 0.5,
      borderColor: error ? palette.red : palette.cyan,
      color: color.text.primary,
      paddingRight: spacing[32],
    },
  });
