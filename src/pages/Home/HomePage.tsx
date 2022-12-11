import React from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../../common/utils';

const HomePage = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link to={Pages.Feedback}>Leave us a review</Link>
    </div>
  );
};

export default HomePage;
