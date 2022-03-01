import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

export interface TextInputComponentProps {
  onChange: (value: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  label: string;
  value: string;
  error: string;
  keyboardType:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad';
}
