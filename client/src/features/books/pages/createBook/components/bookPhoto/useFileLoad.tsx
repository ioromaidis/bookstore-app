import { useState } from 'react';

interface Props {
  validate: (file: File) => boolean;
}

export const useFileLoad = ({ validate }: Props) => {
  const [error, setError] = useState<string>();
  const [imageSrc, setImageSrc] = useState<string>('');

  const load = (file: File) => {
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        const result = reader.result as string;
        try {
          validate(file);
          setImageSrc(result);
          setError('');
        } catch (error: unknown) {
          if (error instanceof Error) {
            setError(error.message);
          } else if (typeof error === 'string') {
            setError(error);
          }
        }
      },
      false
    );

    reader.onerror = () => {
      setError('Could not load file.');
    };

    reader.readAsDataURL(file);
  };

  return { load, imageSrc, setImageSrc, error };
};
