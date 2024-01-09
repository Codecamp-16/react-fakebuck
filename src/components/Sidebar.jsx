import { Link } from 'react-router-dom';

// emotion
import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@mui/material';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Switch from '@mui/material/Switch';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Wrapper = styled(Box)(({ theme }) => ({
  // backgroundColor: 'red',

  padding: '10px',
  // background: theme.palette.secondary.main,
  flex: 1,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

function Sidebar() {
  return (
    <Wrapper>
      <Box sx={{ position: 'fixed' }}>
        <nav>
          <List>
            {/* Home */}
            <Link to='/'>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary='Home Page' />
                </ListItemButton>
              </ListItem>
            </Link>
            {/* Shop */}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary='Shop' />
              </ListItemButton>
            </ListItem>

            {/* Friend */}
            <Link to='/friend'>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary='Friend' />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* Mode Switch */}
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <ModeNightIcon />
                </ListItemIcon>
                <Switch />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Wrapper>
  );
}

export default Sidebar;
