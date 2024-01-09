// Named Import
import { Button, Box } from '@mui/material';

// Default Import
// import Button from '@mui/material/Button';

function App() {
  return (
    <Box
      component='section'
      sx={{
        p: 2,
        border: '1px dashed grey',
        '&:hover': {
          bgcolor: 'red',
        },
      }}
      height={400}
      width={300}
      bgcolor='wheat'
      my={4}
      mx={4}
      display='flex'
      alignItems='center'
      gap={4}
    >
      <Button variant='contained'>Hello MUI</Button>
      <Button variant='contained'>Hello MUI</Button>
    </Box>
  );
}

export default App;
