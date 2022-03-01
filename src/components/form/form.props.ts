import { FormikTouched } from 'formik';
import React, { ReactNode } from 'react';

export type FormValues = { [key: string]: string };

export interface RenderProps {
  handleChange: any;
  handleBlur: any;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  values: FormValues;
  errors: any;
  isValid: boolean;
  touched: FormikTouched<FormValues>;
  schema: any;
}

export interface FormComponentProps {
  children: (props: RenderProps) => void;
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}
