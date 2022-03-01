import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: color.background.secondary,
  },
  topSafeAreaPrimary: {
    backgroundColor: color.background.secondary,
  },
  topSafeAreaSecondary: {
    backgroundColor: color.background.terciary,
  },
  bottomSafeArea: { flex: 1, backgroundColor: color.background.terciary },
  keyboardAvoidingView: { flex: 1 },
  scrollView: { flex: 1 },
});
