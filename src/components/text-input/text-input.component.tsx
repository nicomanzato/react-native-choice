import React, { FC } from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { palette } from 'theme/palette';
import { TextInputComponentProps } from './text-input.props';
import { styles } from './text-input.styles';

export const TextInputComponent: FC<TextInputComponentProps> = ({
  children,
  onChange,
  error,
  label,
  ...props
}) => {
  return (
    <>
      <TextInput
        {...props}
        style={styles.input}
        label={<Text style={styles.label}>{label}</Text>}
        onChangeText={onChange}
        underlineColor={error ? palette.red : palette.cyan}
        activeUnderlineColor={error ? palette.red : palette.cyan}
        onChange={() => {}}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </>
  );
};
