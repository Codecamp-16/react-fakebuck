import { useState } from 'react';
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
import { Menu, MenuItem } from '@mui/material';

// Custom Component
const AppBarContent = styled(Box)`
  display: flex;
  padding: 8px 24px;
  justify-content: space-between;
  align-items: center;
`;

const CustomIcon = styled(IconButton)(({ theme }) => {
  return {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  };
});

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenuList = (event) => {
    // set แท็กที่จะเป็นตัว anchor
    setAnchorEl(event.currentTarget);
  };

  const closeMenuList = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <AppBarContent>
          <Typography component='h1' variant='h5'>
            Fake Buck
          </Typography>
          <Stack direction='row' gap={1}>
            <CustomIcon>
              <Badge badgeContent={4} color='error'>
                <MailIcon />
              </Badge>
            </CustomIcon>
            <CustomIcon>
              <Badge badgeContent={2} color='error'>
                <NotificationsIcon />
              </Badge>
            </CustomIcon>
            <IconButton onClick={openMenuList}>
              <Avatar
                alt='John Doe'
                src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
            </IconButton>
          </Stack>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenuList}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </AppBarContent>
      </AppBar>
    </Box>
  );
}

export default Navbar;
