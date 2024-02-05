import { CSSProperties } from 'react';

const dropzone = (error: boolean) => ({
  height: 138,
  border: '2px dashed',
  color: error ? 'error.main' : 'primary.light',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const input: CSSProperties = {
  cursor: 'pointer',
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
};

const previewImg: CSSProperties = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const removeButton = {
  background: 'white',
  position: 'absolute',
  top: 10,
  right: 10,
};

export default {
  dropzone,
  input,
  previewImg,
  removeButton,
};
