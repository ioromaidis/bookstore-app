const allowedExtensions = ['image/jpeg', 'image/png', 'image/gif'];

export const validate = (file: File) => {
  if (!allowedExtensions.includes(file.type)) {
    throw new Error('Invalid file extension');
  }

  return true;
};
