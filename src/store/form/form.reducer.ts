import { FormActions, UPDATE_CASH_FORM } from './form.actions';
import { FormState } from './form.model';

const initialState: FormState = {
  cashForm: {
    cash: {
      amount: 0,
    },
    financed: {
      amount: 0,
      paymentInstallments: 0,
    },
  },
};

export const FormReducer = (state: FormState = initialState, action: FormActions): FormState => {
  switch (action.type) {
    case UPDATE_CASH_FORM: {
      return { ...state, cashForm: { ...state.cashForm, ...action.payload } };
    }

    default:
      return state;
  }
};
