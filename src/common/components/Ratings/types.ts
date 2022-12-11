import { RatingProps } from '@mui/material';

export type RatingValueType = RatingProps['value'];

export interface iRatingsProps {
  ratings: iRating[];
  maxValue?: number;
  onChange: iRatingChangeHandler;
}

export interface iRating {
  name: string;
  title: string;
  defaultValue?: number;
  value: RatingValueType;
}

export interface iRatingProps extends iRating {
  maxValue: iRatingsProps['maxValue'];
  onChange: iRatingChangeHandler;
}

export type iRatingChangeHandler = (name: string, newValue: RatingValueType) => void;
