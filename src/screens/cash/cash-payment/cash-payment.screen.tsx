import { useFocusEffect } from '@react-navigation/native';
import { ButtonComponent } from 'components/button/button.component';
import { FormComponent } from 'components/form/form.component';
import { PrimaryPageLayoutComponent } from 'components/primary-page-layout/primary-page-layout.component';
import { TextInputComponent } from 'components/text-input/text-input.component';
import { TextComponent } from 'components/text/text.component';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCashForm } from 'store/form/form.actions';
import { Store } from 'store/reducer';
import { styles } from './cash-payment.styles';

export const CashPaymentScreen: FC = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const onPrimaryButtonPress = ({ amount }: any) => {
    dispatch(UpdateCashForm({ cash: { amount: amount } }));
    navigation.navigate('FinancedPayment');
  };

  const cashForm = useSelector((store: Store) => store.FormState.cashForm);

  return (
    <PrimaryPageLayoutComponent preset="primary" scroll>
      <View style={styles.header}>
        <TextComponent preset="title" style={styles.title}>
          Pago en efectivo
        </TextComponent>
      </View>

      <FormComponent
        initialValues={{ amount: cashForm.cash.amount ? cashForm.cash.amount.toString() : '' }}
        onSubmit={onPrimaryButtonPress}
      >
        {({ values, handleChange, errors, handleBlur, handleSubmit, isValid }) => {
          return (
            <>
              <View style={styles.body}>
                <TextInputComponent
                  onChange={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  value={values.amount}
                  keyboardType="decimal-pad"
                  label={'Monto en efectivo'}
                  error={errors.amount}
                />
              </View>

              <View style={styles.footer}>
                <ButtonComponent preset="primary" disabled={!isValid} onPress={handleSubmit}>
                  Continuar
                </ButtonComponent>
              </View>
            </>
          );
        }}
      </FormComponent>
    </PrimaryPageLayoutComponent>
  );
};
