import { TextComponent } from 'components/text/text.component';
import React, { FC } from 'react';
import { TouchableHighlight } from 'react-native';
import { palette } from 'theme/palette';
import { ButtonComponentProps } from './button.props';
import { styles } from './button.styles';

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  preset,
  onPress,
  disabled,
  ...props
}) => {
  return (
    <TouchableHighlight
      style={[styles.default, { ...styles[preset] }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.6}
      underlayColor={preset === 'primary' ? palette.darkcyan : palette.transparent}
      {...props}
    >
      <TextComponent
        preset={preset === 'primary' ? 'body2' : 'body3'}
        style={preset === 'primary' ? styles.primaryText : styles.secondaryText}
      >
        {children}
      </TextComponent>
    </TouchableHighlight>
  );
};
