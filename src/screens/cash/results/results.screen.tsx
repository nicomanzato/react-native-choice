import { ButtonComponent } from 'components/button/button.component';
import { PrimaryPageLayoutComponent } from 'components/primary-page-layout/primary-page-layout.component';
import { TextComponent } from 'components/text/text.component';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateCashForm } from 'store/form/form.actions';
import { makeCashForm } from 'store/form/form.model';
import { Store } from 'store/reducer';
import { styles } from './results.styles';

const MONTHLY_INVESTMENT_RATE = 0.025;

const getCashPerformance = (
  cashAmount: number,
  financedAmount: number,
  paymentInstallments: number
): number => {
  let cashInvested = cashAmount;
  for (let installmentMonth = 1; installmentMonth <= paymentInstallments; installmentMonth++) {
    const monthlyPayment = financedAmount / paymentInstallments;
    cashInvested = cashInvested - monthlyPayment;
    cashInvested = cashInvested * (1 + MONTHLY_INVESTMENT_RATE);
  }

  return cashInvested;
};

export const CashResultsPaymentScreen: FC = ({ navigation }: any) => {
  const cashForm = useSelector((store: Store) => store.FormState.cashForm);
  const cashAmount = cashForm.cash.amount;
  const financedAmount = cashForm.financed.amount;
  const paymentInstallments = cashForm.financed.paymentInstallments;

  const results = getCashPerformance(cashAmount, financedAmount, paymentInstallments);

  const dispatch = useDispatch();

  const onSecondaryButtonPress = () => {
    dispatch(UpdateCashForm(makeCashForm({})));
    navigation.navigate('CashPayment');
  };

  return (
    <PrimaryPageLayoutComponent preset="primary" scroll>
      <View style={styles.header}>
        <TextComponent preset="title" style={styles.title}>
          Resultados
        </TextComponent>
      </View>

      <View style={styles.body}>
        {results > 0 && (
          <View>
            <TextComponent preset="title">
              Es preferible comprarlo financiado ya que te ahorraras ${results.toFixed(2)}
            </TextComponent>
          </View>
        )}

        {results === 0 && (
          <View>
            <TextComponent preset="title">El resultado es el mismo</TextComponent>
          </View>
        )}

        {results < 0 && (
          <View>
            <TextComponent preset="title">
              Es preferible comprarlo en efectivo ya que te costara ${(-1 * results).toFixed(2)}{' '}
              extra
            </TextComponent>
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <TextComponent preset="body">
          * Este calculo se realizo considerando un rendimiento mensual del{' '}
          {MONTHLY_INVESTMENT_RATE * 100}%.
        </TextComponent>
        <TextComponent preset="body">
          * Este calculo no considera la inflacion mensual.
        </TextComponent>
        <ButtonComponent preset="secondary" onPress={onSecondaryButtonPress}>
          Ir al Inicio
        </ButtonComponent>
      </View>
    </PrimaryPageLayoutComponent>
  );
};
