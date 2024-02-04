import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { useFormField } from '@/components/form/useFormField';

type Props = TextFieldProps;

export const FormField: React.FC<Props> = (props) => {
  const fieldProps = useFormField(props);

  return <TextField {...fieldProps} />;
};
