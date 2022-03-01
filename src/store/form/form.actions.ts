import { CashForm } from './form.model';

export const UPDATE_CASH_FORM = '[FORM] UPDATE CASH FORM';

export const UpdateCashForm = (cashForm: Partial<CashForm>): IUpdateCashForm => {
  return { type: UPDATE_CASH_FORM, payload: cashForm };
};

export interface IUpdateCashForm {
  type: typeof UPDATE_CASH_FORM;
  payload: Partial<CashForm>;
}

export type FormActions = IUpdateCashForm;
