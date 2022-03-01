import { Formik, FormikErrors } from 'formik';
import React from 'react';
import { FormComponentProps, FormValues } from './form.props';
import * as yup from 'yup';
import { useFocusEffect } from '@react-navigation/native';

export type ShapeValues = { [key: string]: string };

const shapes: any = {
  amount: yup.number().min(100, 'El minimo es de $100').required('Este campo es requerido'),
  paymentInstallments: yup.string().required('Este campo es requerido'),
};

const createSchema = (keyShapes: string[]) => {
  const scheme: any = {};
  keyShapes.forEach((key) => {
    scheme[key] = shapes[key];
  });
  return yup.object().shape(scheme);
};

export const FormComponent = ({ initialValues, children, ...props }: FormComponentProps) => {
  const schema = createSchema(Object.keys(initialValues));

  return (
    <Formik
      {...props}
      initialValues={initialValues}
      validationSchema={schema}
      validateOnChange
      validateOnMount
      enableReinitialize
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => {
        const touchedErrors: FormikErrors<FormValues> = {};
        Object.keys(errors).forEach((errorKey) => {
          if (touched[errorKey]) {
            touchedErrors[errorKey] = errors[errorKey];
          }
        });

        return children({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors: touchedErrors,
          touched,
          isValid,
          schema,
        });
      }}
    </Formik>
  );
};
