import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <Box>
      <Navbar />
      {/* Outlet จะเป็น UI ของ Children Route (Nested Route) */}
      <Outlet />
    </Box>
  );
}

export default AppLayout;
