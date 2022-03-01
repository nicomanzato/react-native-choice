import React, { FC } from 'react';
import { Text } from 'react-native';
import { TextComponentProps } from './text.props';
import { styles } from './text.styles';

export const TextComponent: FC<TextComponentProps> = ({ children, preset, ...props }) => {
  return (
    <Text {...props} style={[props.style, styles[preset]]}>
      {children}
    </Text>
  );
};
