export interface ButtonComponentProps {
  preset: 'primary' | 'secondary';
  disabled?: boolean;
  onPress?: () => void;
}
