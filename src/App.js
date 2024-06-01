import * as React from 'react';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My Material-UI Ankur project
          </Typography>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Material-UI App
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </main>
    </div>
  );
}

export default App;

/*import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage() {
  return <Button variant="outlined">Hello world</Button>;
  
}

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}*/




