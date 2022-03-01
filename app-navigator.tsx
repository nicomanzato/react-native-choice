import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/home/home.screen';
import { CashPaymentScreen } from 'screens/cash/cash-payment/cash-payment.screen';
import { FinancedPaymentScreen } from 'screens/cash/financed-payment/financed-payment.screen';
import { CashResultsPaymentScreen } from 'screens/cash/results/results.screen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CashPayment" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CashPayment" component={CashPaymentScreen} />
        <Stack.Screen name="FinancedPayment" component={FinancedPaymentScreen} />
        <Stack.Screen name="CashResultsPayment" component={CashResultsPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
