import React from 'react';
import { Stack } from '@mui/material';
import { EssayRatings, Essay } from './components';

const EssayPage = () => {
  const essayId = 'some-id';

  return (
    <Stack alignItems='center' spacing={2}>
      <EssayRatings />
      <Essay id={essayId} />
    </Stack>
  );
};

export default EssayPage;
