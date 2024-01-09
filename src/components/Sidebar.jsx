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
  flex: 1,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

function Sidebar() {
  return (
    <Wrapper>
      <nav>
        <List>
          {/* Home */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Home Page' />
            </ListItemButton>
          </ListItem>
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
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary='Friend' />
            </ListItemButton>
          </ListItem>

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
    </Wrapper>
  );
}

export default Sidebar;
