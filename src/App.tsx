import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Pages } from './common/utils';
import { HomePage, FeedbackPage, FeedbackSubmittedPage } from './pages';

function App() {
  return (
    <Container maxWidth='sm'>
      <Router basename={Pages.Home}>
        <Routes>
          <Route path={Pages.Feedback} element={<FeedbackPage />} />
          <Route path={Pages.Feedback_Submitted} element={<FeedbackSubmittedPage />} />
          <Route path={Pages.Home} element={<HomePage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
