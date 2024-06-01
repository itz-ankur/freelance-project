import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function SignIn() {
  return (
    <Box component="form" noValidate autoComplete="off" mt={2}>
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
      <Button variant="contained" color="primary" fullWidth type="submit" style={{ marginTop: '20px' }}>
        Sign In
      </Button>
    </Box>
  );
}

export default SignIn;
