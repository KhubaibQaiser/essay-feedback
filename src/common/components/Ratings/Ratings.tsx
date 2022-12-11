import React from 'react';
import { iRatingsProps } from './types';
import { Stack } from '@mui/material';
import Rating from './Rating';

const Ratings: React.VFC<iRatingsProps> = ({ ratings, maxValue, onChange }) => {
  return (
    <Stack direction='column' spacing={2}>
      {ratings.map((rating) => (
        <Rating
          key={`rating-${rating.name}`}
          title={rating.title}
          name={rating.name}
          value={rating.value}
          defaultValue={rating.defaultValue}
          maxValue={maxValue}
          onChange={onChange}
        />
      ))}
    </Stack>
  );
};

export default Ratings;
