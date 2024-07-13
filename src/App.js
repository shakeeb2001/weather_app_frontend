import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import UserRegistration from './components/UserRegistration';
import UpdateUserDetails from './components/UpdateUserDetails';
import SendReport from './components/SendReport';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Weather Report Service
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Register
          </Button>
          <Button color="inherit" component={Link} to="/update">
            Update
          </Button>
          <Button color="inherit" component={Link} to="/send-report">
            Send Report
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Box my={4}>
          <Routes>
            <Route exact path="/" element={<UserRegistration />} />
            <Route path="/update" element={<UpdateUserDetails />} />
            <Route path="/send-report" element={<SendReport />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
};

export default App;
