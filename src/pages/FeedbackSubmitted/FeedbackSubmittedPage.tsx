import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../../common/utils';

const FeedbackSubmittedPage = () => {
  return (
    <div>
      <div>Feedback Submitted</div>
      <Link to={Pages.Home}>Go to Home</Link>
    </div>
  );
};

export default FeedbackSubmittedPage;
