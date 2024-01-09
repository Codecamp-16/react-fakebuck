import { Box, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
function HomePage() {
  console.log('HomePage');
  return (
    <Box>
      <Navbar />
      <Stack direction='row' gap={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default HomePage;
