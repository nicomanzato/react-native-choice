import { AnyIfEmpty } from 'react-redux';

export interface PrimaryPageLayoutComponentProps {
  children: any;
  preset: 'primary' | 'secondary';
  scroll?: boolean;
}
