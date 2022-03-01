import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { spacing } from 'theme/spacing';

export const styles = StyleSheet.create({
  default: {
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginBottom: spacing[12],
  },
  primary: {
    backgroundColor: color.background.secondary,
  },
  secondary: {},
  primaryText: {
    color: color.text.secondary,
  },
  secondaryText: {
    color: color.text.terciary,
  },
  disabled: {
    opacity: 0.5,
  },
});
