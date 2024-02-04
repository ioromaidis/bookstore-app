import React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { YupSchema } from './schema';

interface Props {
  onSubmit: SubmitHandler<FieldValues>;
  children: (form: UseFormReturn) => React.ReactNode;
  options?: UseFormProps;
  schema?: YupSchema;
}

export const Form: React.FC<Props> = ({
  onSubmit,
  children,
  options,
  schema,
}) => {
  const form = useForm({
    ...options,
    ...(schema && { resolver: yupResolver(schema) }),
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children(form)}</form>
    </FormProvider>
  );
};
