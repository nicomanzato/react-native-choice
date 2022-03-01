import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { spacing } from 'theme/spacing';

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.background.secondary,
  },
  body: {
    flex: 4,
    justifyContent: 'center',
    paddingHorizontal: spacing[24],
    backgroundColor: color.background.terciary,
  },
  footer: {
    paddingHorizontal: spacing[24],
  },
});
