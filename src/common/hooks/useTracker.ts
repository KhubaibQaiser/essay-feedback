import React from 'react';

const useTracker = () => {
  // Instantiate some tracker api instance
  const trackerURL = 'https://www.trustpilot.com/';

  const leaveReview = React.useCallback(() => {
    alert('[MOCK] Leave a review');
    const win = window.open(trackerURL, '_blank');
    if (win) {
      win.focus();
    }
  }, []);

  const cancelReview = React.useCallback(() => {
    alert('[MOCK] Cancel a review');
  }, []);

  return { leaveReview, cancelReview };
};

export default useTracker;
