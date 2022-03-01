import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, View } from 'react-native';
import { spacing } from 'theme/spacing';
import { PrimaryPageLayoutComponentProps } from './primary-page-layout.props';
import { styles } from './primary-page-layout.styles';

const isIos = (Platform.OS = 'ios');

export const PrimaryPageLayoutComponent = ({
  children,
  preset,
  scroll,
}: PrimaryPageLayoutComponentProps) => {
  return (
    <>
      <SafeAreaView
        style={[
          styles.topSafeArea,
          preset === 'primary' ? styles.topSafeAreaPrimary : styles.topSafeAreaSecondary,
        ]}
      />
      <SafeAreaView style={styles.bottomSafeArea}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={isIos ? 'padding' : undefined}
          keyboardVerticalOffset={spacing[40]}
        >
          {scroll ? (
            <ScrollView
              contentContainerStyle={styles.scrollView}
              keyboardShouldPersistTaps={'never'}
            >
              {children}
            </ScrollView>
          ) : (
            <View style={styles.scrollView}>{children}</View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};
