// emotion
import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@mui/material';

const Wrapper = styled(Box)(({ theme }) => ({
  // backgroundColor: 'wheat',
  flex: 1,
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'block',
  },
}));

function Rightbar() {
  return (
    <Wrapper>
      <Box sx={{ position: 'fixed' }}>Rightbar</Box>
    </Wrapper>
  );
}

export default Rightbar;
