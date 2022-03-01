import { ButtonComponent } from 'components/button/button.component';
import { FormComponent } from 'components/form/form.component';
import { PickerComponent } from 'components/picker/picker.component';
import { PrimaryPageLayoutComponent } from 'components/primary-page-layout/primary-page-layout.component';
import { TextInputComponent } from 'components/text-input/text-input.component';
import { TextComponent } from 'components/text/text.component';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCashForm } from 'store/form/form.actions';
import { Store } from 'store/reducer';
import { styles } from './financed-payment.styles';

const paymentInstallmentOptions = [
  { label: '1 cuota', value: '1' },
  { label: '2 cuotas', value: '2' },
  { label: '3 cuotas', value: '3' },
  { label: '4 cuotas', value: '4' },
  { label: '5 cuotas', value: '5' },
  { label: '6 cuotas', value: '6' },
  { label: '7 cuotas', value: '7' },
  { label: '8 cuotas', value: '8' },
  { label: '9 cuotas', value: '9' },
  { label: '10 cuotas', value: '10' },
  { label: '11 cuotas', value: '11' },
  { label: '12 cuotas', value: '12' },
  { label: '18 cuotas', value: '18' },
];

export const FinancedPaymentScreen: FC = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const onPrimaryButtonPress = (values: any) => {
    dispatch(UpdateCashForm({ financed: values }));
    navigation.navigate('CashResultsPayment');
  };

  const onSecondaryButtonPress = () => navigation.pop();

  const cashForm = useSelector((store: Store) => store.FormState.cashForm);

  return (
    <PrimaryPageLayoutComponent preset="primary" scroll>
      <View style={styles.header}>
        <TextComponent preset="title" style={styles.title}>
          Pago en cuotas
        </TextComponent>
      </View>

      <FormComponent
        initialValues={{
          paymentInstallments: cashForm.financed.paymentInstallments.toString(),
          amount: cashForm.financed.amount ? cashForm.financed.amount.toString() : '',
        }}
        onSubmit={onPrimaryButtonPress}
      >
        {({ values, handleChange, errors, handleBlur, handleSubmit, isValid }) => {
          return (
            <>
              <View style={styles.body}>
                <View style={styles.inputContainer}>
                  <TextInputComponent
                    onChange={handleChange('amount')}
                    onBlur={handleBlur('amount')}
                    value={values.amount}
                    keyboardType="decimal-pad"
                    label={'Monto financiado'}
                    error={errors.amount}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <PickerComponent
                    value={values.paymentInstallments}
                    label={'Cantidad de cuotas'}
                    onChange={handleChange('paymentInstallments')}
                    onBlur={handleBlur('paymentInstallments')}
                    options={paymentInstallmentOptions}
                    error={errors.paymentInstallments}
                  />
                </View>
              </View>

              <View style={styles.footer}>
                <ButtonComponent preset="primary" disabled={!isValid} onPress={handleSubmit}>
                  Continuar
                </ButtonComponent>
                <ButtonComponent preset="secondary" onPress={onSecondaryButtonPress}>
                  Volver
                </ButtonComponent>
              </View>
            </>
          );
        }}
      </FormComponent>
    </PrimaryPageLayoutComponent>
  );
};
