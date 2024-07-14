import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const SendReport = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://weather-app-xi-two-63.vercel.app/send-weather-report', { email });
      if (response.status === 200) {
        alert('Weather report sent successfully');
      } else {
        alert('Error sending weather report');
      }
    } catch (error) {
      console.error('Error sending weather report:', error);
      alert('Error sending weather report');
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Send Weather Report
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">
              Send Report
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default SendReport;
