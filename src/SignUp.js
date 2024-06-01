import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function SignUp() {
  return (
    <Box component="form" noValidate autoComplete="off" mt={2}>
      <TextField
        fullWidth
        margin="normal"
        label="Name"
        variant="filled"
        required
        InputProps={{ style: { backgroundColor: '#fff' } }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        variant="filled"
        required
        InputProps={{ style: { backgroundColor: '#fff' } }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        variant="filled"
        required
        InputProps={{ style: { backgroundColor: '#fff' } }}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Confirm Password"
        type="password"
        variant="filled"
        required
        InputProps={{ style: { backgroundColor: '#fff' } }}
      />
      <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUp;
