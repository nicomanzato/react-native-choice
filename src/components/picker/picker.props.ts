export interface PickerComponentProps {
  value: any;
  label: string;
  onChange: (itemValue: any) => void;
  onBlur: (event: any) => void;
  options: { value: any; label: string }[];
  error: string;
}
