import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
  dataset: string[];
  value: string[];
  name: string;
  onChange: (value: string[]) => void;
}

export const InFilter: React.FC<Props> = ({
  dataset,
  value = [],
  onChange,
}) => {
  const [checked, setChecked] = useState(value);

  const onItemChange = (e) => {
    const val = e.target.value;

    if (checked.includes(val)) {
      setChecked(checked.filter((el) => el !== val));
    } else {
      setChecked([...checked, val]);
    }
  };

  useEffect(() => {
    onChange(checked);
  }, [checked]);

  return (
    <>
      {dataset.map((item: string) => (
        <Box key={item}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.includes(item)}
                value={item}
                onChange={onItemChange}
              />
            }
            label={item}
          />
        </Box>
      ))}
    </>
  );
};
