import { ButtonComponent } from 'components/button/button.component';
import { PrimaryPageLayoutComponent } from 'components/primary-page-layout/primary-page-layout.component';
import React, { FC } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './home.styles';

export const HomeScreen: FC = ({ navigation }: any) => {
  const onNext = () => navigation.navigate('CashPayment');
  return (
    <PrimaryPageLayoutComponent preset="primary">
      <View style={styles.header}></View>
      <View style={styles.body}></View>
      <View style={styles.footer}>
        <ButtonComponent preset="primary" onPress={onNext}>
          Comenzar
        </ButtonComponent>
      </View>
    </PrimaryPageLayoutComponent>
  );
};
