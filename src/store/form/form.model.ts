export interface FormState {
  cashForm: CashForm;
}

export interface CashForm {
  cash: {
    amount: number;
  };
  financed: {
    amount: number;
    paymentInstallments: number;
  };
}

export const makeCashForm = (data: Partial<CashForm>): CashForm => {
  const defaultValue: CashForm = {
    cash: {
      amount: 0,
    },
    financed: {
      amount: 0,
      paymentInstallments: 0,
    },
  };

  return { ...defaultValue, ...data };
};

export const makeFormState = (data: Partial<FormState>): FormState => {
  const defaultValue: FormState = {
    cashForm: makeCashForm({}),
  };

  return { ...defaultValue, ...data };
};
