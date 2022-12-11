import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../../common/utils';

const FeedbackPage = () => {
  return (
    <div>
      <div>Feedback Page</div>
      <Link to={Pages.Feedback_Submitted}>Submit</Link>
    </div>
  );
};

export default FeedbackPage;
