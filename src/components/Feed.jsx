import styled from '@emotion/styled';
import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

const Wrapper = styled(Box)(({ theme }) => ({
  background: 'green',
  flex: 2,
}));

function Feed() {
  return (
    <Wrapper>
      <Post />
    </Wrapper>
  );
}

export default Feed;
