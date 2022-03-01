import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { spacing } from 'theme/spacing';

export const styles = StyleSheet.create({
  errorMessage: { fontSize: 14, color: color.text.error, paddingTop: spacing[8] },
  label: { fontSize: 20, color: color.text.primary },
  input: { fontSize: 20, color: color.text.primary },
});
