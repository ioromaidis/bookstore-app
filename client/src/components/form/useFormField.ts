import { TextFieldProps } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export const useFormField = ({
  name = '',
  label,
  helperText,
  ...rest
}: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return {
    ...register(name),
    label,
    error: !!errors[name],
    helperText: (errors[name]?.message as String) || helperText,
    ...rest,
  };
};
