import React from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import S from './styles';

interface Props {
  src: string;
  onRemove: () => void;
}

export const Preview: React.FC<Props> = ({ src, onRemove }) => {
  return (
    <Box position="relative" height={238}>
      <img src={src} alt="Preview image" style={S.previewImg} />
      <IconButton color="error" onClick={onRemove} sx={S.removeButton}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
