import React from 'react';
import { Ratings, iRating, iRatingChangeHandler } from '../../../../common/components';
import { Stack, Button, Paper, Typography } from '@mui/material';
import { useTracker } from '../../../../common/hooks';
import { RatingStateType } from './types';

const EssayRatings: React.VFC = () => {
  const maxRatingValue = 5;

  const [ratingState, setRatingState] = React.useState<RatingStateType>('not-rated');
  const [ratings, setRatings] = React.useState<iRating[]>([
    { name: 'essay', title: 'Essay correctness', value: 0 },
    { name: 'ux', title: 'User Experience', value: 0 },
  ]);

  const { leaveReview, cancelReview } = useTracker();

  const showFeedbackFormIfValid = (newRatings: iRating[]) => {
    let isValid = true;
    for (const rating of newRatings) {
      if (rating.value !== maxRatingValue) {
        isValid = false;
        break;
      }
    }
    setRatingState(isValid ? 'pending-review-decision' : 'rated');
  };

  const onChange: iRatingChangeHandler = (name, value) => {
    setRatings((curRatings) => {
      const index = curRatings.findIndex((rating) => rating.name === name);
      if (index > -1) {
        const newRatings = [
          ...curRatings.slice(0, index),
          { ...curRatings[index], name, value },
          ...curRatings.slice(index + 1),
        ];

        showFeedbackFormIfValid(newRatings);
        return newRatings;
      }
      return curRatings;
    });
  };

  const onClickLeaveReview = () => {
    leaveReview();
    setRatingState('review-submitted');
  };

  const onClickCancelReview = () => {
    cancelReview();
    setRatingState('review-cancelled');
  };

  const renderContent = () => {
    const ratingsComponent = (
      <Ratings ratings={ratings} maxValue={maxRatingValue} onChange={onChange} />
    );
    switch (ratingState) {
      case 'not-rated':
      case 'rated':
        return (
          <>
            <Typography variant='h5'>Your feedback is important to us!</Typography>
            {ratingsComponent}
          </>
        );
      case 'pending-review-decision':
        return (
          <>
            <Typography variant='h5'>Your feedback is important to us!</Typography>
            {ratingsComponent}
            <Stack direction='row' spacing={1}>
              <Button variant='outlined' onClick={onClickCancelReview}>
                Cancel
              </Button>
              <Button variant='contained' onClick={onClickLeaveReview}>
                Leave us a review
              </Button>
            </Stack>
          </>
        );
      case 'review-submitted':
        return <Typography>Thank you for giving us the feedback.</Typography>;
      case 'review-cancelled':
        return null;
    }
  };

  return ratingState !== 'review-cancelled' ? (
    <Paper variant='outlined' style={{ width: '100%' }}>
      <Stack padding={2} spacing={2} alignItems='center'>
        {renderContent()}
      </Stack>
    </Paper>
  ) : null;
};

export default EssayRatings;
