import React, { FC, ReactNode } from 'react';
import { Platform, View } from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

const isIos = Platform.OS === 'ios';

export const InputScrollViewComponent: FC<ReactNode> = ({ children }) => {
  return <InputScrollView topOffset={200}>{children}</InputScrollView>;
};
