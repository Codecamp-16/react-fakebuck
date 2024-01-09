// emotion
import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'red',
  flex: 1,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

function Sidebar() {
  return <Wrapper>Sidebar</Wrapper>;
}

export default Sidebar;
