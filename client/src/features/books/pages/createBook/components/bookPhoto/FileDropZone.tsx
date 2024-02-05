import React from 'react';
import { Stack, Typography } from '@mui/material';
import S from './styles';

interface Props {
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileDropZone: React.FC<Props> = ({ error, onChange }) => (
  <Stack sx={S.dropzone(error)}>
    <Typography variant="h6">Book cover image</Typography>
    <Typography variant="body2">
      Click or drop your files here (.jpg, .png, .gif)
    </Typography>
    <input type="file" onChange={onChange} style={S.input} />
  </Stack>
);
