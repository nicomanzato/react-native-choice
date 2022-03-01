import RNPickerSelect from 'react-native-picker-select';
import { PickerComponentProps } from './picker.props';
import React from 'react';
import { getStyles } from './picker.styles';
import { Text } from 'react-native';

export const PickerComponent = ({
  label,
  onChange,
  onBlur,
  options = [],
  error,
}: PickerComponentProps) => {
  const handleOnChange = (value: any) => {
    onChange({ target: { value } });
  };

  const handleOnBlur = () => {
    onBlur({ persist: () => {}, target: { name: '' } });
  };

  const styles = getStyles(error);

  return (
    <>
      <RNPickerSelect
        style={styles}
        placeholder={{ value: '', label }}
        onValueChange={handleOnChange}
        onClose={handleOnBlur}
        items={options}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </>
  );
};
