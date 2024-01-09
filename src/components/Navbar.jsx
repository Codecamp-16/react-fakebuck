// emotion
import styled from '@emotion/styled';
// Layout
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

// Component
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
// import { Mail } from '@mui/icons-material';

// Icon
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

// Custom Component
const AppBarContent = styled(Box)`
  display: flex;
  padding: 8px 24px;
  justify-content: space-between;
  align-items: center;
`;

const CustomIcon = styled(Box)(({ theme }) => {
  // console.log(theme);
  return {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  };
});

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <AppBarContent>
          <Typography component='h1' variant='h5'>
            Fake Buck
          </Typography>
          <Stack direction='row' gap={1}>
            <IconButton>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar
                alt='John Doe'
                src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </IconButton>
          </Stack>
        </AppBarContent>
      </AppBar>
    </Box>
  );
}

export default Navbar;
