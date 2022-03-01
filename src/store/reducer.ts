import { combineReducers } from 'redux';
import { FormState } from './form/form.model';

import { FormReducer } from './form/form.reducer';

const createRootReducer = () =>
  combineReducers({
    FormState: FormReducer,
  });

export type Store = {
  FormState: FormState;
};

export default createRootReducer;
