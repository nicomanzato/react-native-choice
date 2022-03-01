import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { spacing } from 'theme/spacing';

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.background.secondary,
    height: 150,
  },
  title: {
    color: color.text.secondary,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing[20],
    paddingTop: spacing[40],
  },
  footer: {
    paddingHorizontal: spacing[20],
  },
});
