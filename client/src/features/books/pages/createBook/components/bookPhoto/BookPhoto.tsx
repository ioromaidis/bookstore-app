import React, { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import { validate } from './validate';
import { FileDropZone } from './FileDropZone';
import { Preview } from './Preview';
import { useFileLoad } from './useFileLoad';

const BookPhoto: React.FC = () => {
  const {
    formState: { errors, isDirty },
    clearErrors: clearFormError,
    register,
    setValue: setFormValue,
  } = useFormContext();

  const {
    load,
    imageSrc,
    setImageSrc,
    error: fileError,
  } = useFileLoad({
    validate,
  });

  useEffect(() => {
    setFormValue('file', imageSrc);
    clearFormError('file');
  }, [imageSrc]);

  useEffect(() => {
    // On form reset clear image src
    if (!isDirty) {
      setImageSrc('');
    }
  }, [isDirty]);

  const error = useMemo(() => {
    return fileError || (errors.file?.message as string);
  }, [errors.file, fileError]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    load(file);
  };

  const handleRemove = () => {
    setImageSrc('');
    setFormValue('file', '');
  };

  return (
    <>
      {imageSrc ? (
        <Preview src={imageSrc} onRemove={handleRemove} />
      ) : (
        <FileDropZone onChange={handleChange} error={!!error} />
      )}

      <input type="hidden" {...register('file')} />
      {(errors.file || error) && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};

export default BookPhoto;
