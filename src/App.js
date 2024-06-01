// import * as React from 'react';
// // import { Button, AppBar, Toolbar, Typography } from '@mui/material';
// import Appbar from "./Appbar";


// function App() {
//   return (
//     <div>
//       <Appbar/>
//     </div>
//   );
// }

// export default App;





/* <AppBar position="static">
<Toolbar>
  <Typography variant="h6">
    My Material-UI App
  </Typography>
</Toolbar>
</AppBar>
<main style={{ padding: '16px' }}>
<Typography variant="h4" gutterBottom>
  Welcome to My Material-UI Freelace Project
</Typography>
<Button variant="contained" color="primary">
  Click Me
</Button>
</main> */

import React, { useState } from 'react';
import { Container, Box, Button, Typography, AppBar, Toolbar, CssBaseline, Link } from '@mui/material';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import BackgroundImage from './background.jpg'; // Make sure to add a background image in your project

const BackgroundImage = `${process.env.PUBLIC_URL}/assets/Good_evil.jpeg`;


function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      color: '#fff',
    }}>
      <CssBaseline />
      <AppBar position="static" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Our App
          </Typography>
          <Link href="#" color="inherit" underline="none" style={{ margin: '0 10px' }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="none" style={{ margin: '0 10px' }}>
            About
          </Link>
          <Link href="#" color="inherit" underline="none" style={{ margin: '0 10px' }}>
            Contact
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ padding: '40px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', marginTop: '50px' }}>
        <Box textAlign="center" mt={5}>
          <Typography variant="h3" gutterBottom>
            Welcome to Our App
          </Typography>
          <Typography variant="h6" gutterBottom>
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </Typography>
          {isSignIn ? <SignIn /> : <SignUp />}
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setIsSignIn(!isSignIn)}
            style={{ marginTop: '20px', color: '#fff', borderColor: '#fff' }}
          >
            {isSignIn ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
          </Button>
        </Box>
      </Container>
      <Box mt={5} textAlign="center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', position: 'absolute', bottom: 0, width: '100%' }}>
        <Typography variant="body2">
          &copy; 2024 Our App. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
