// Named Import
import { Button, Box, Container } from '@mui/material';

// Default Import
// import Button from '@mui/material/Button';

function App() {
  return (
    <Container maxWidth='lg' sx={{ bgcolor: 'wheat', height: '100vh' }}>
      <Button variant='contained'>My Btn</Button>
    </Container>
  );
}

export default App;
