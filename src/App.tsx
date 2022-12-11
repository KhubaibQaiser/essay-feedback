import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Pages } from './common/utils';
import { EssayPage } from './pages';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth='md' style={{ paddingTop: 16, paddingBottom: 16 }}>
        <Router basename={Pages.Home}>
          <Routes>
            <Route path={Pages.Home} element={<EssayPage />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
