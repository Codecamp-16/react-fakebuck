import { Stack } from '@mui/material';

import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
function HomePage() {
  console.log('HomePage');
  return (
    <Stack direction='row' gap={2}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </Stack>
  );
}

export default HomePage;
