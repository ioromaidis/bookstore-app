import React from 'react';
import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { YupSchema } from './schema';

interface Props {
  onSubmit: Function;
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
      <form onSubmit={form.handleSubmit((data) => onSubmit(data, form))}>
        {children(form)}
      </form>
    </FormProvider>
  );
};
