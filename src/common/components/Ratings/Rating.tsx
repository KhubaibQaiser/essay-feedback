import React from 'react';
import { iRatingProps } from './types';
import MuiRating, { RatingProps } from '@mui/material/Rating';
import { Stack, Typography } from '@mui/material';

const Rating: React.VFC<iRatingProps> = ({
  title,
  name,
  value,
  defaultValue = 0,
  maxValue = 5,
  onChange,
}) => {
  const handleRatingChange: RatingProps['onChange'] = (_, newValue) => {
    onChange(name, newValue);
  };

  return (
    <Stack spacing={1} alignItems='center'>
      <Typography>{title}:</Typography>
      <MuiRating
        name={name}
        defaultValue={defaultValue}
        value={value}
        max={maxValue}
        onChange={handleRatingChange}
      />
    </Stack>
  );
};

export default Rating;
