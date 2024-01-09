import React from 'react';
import { useParams } from 'react-router-dom';

function FriendProfileWithIdPage() {
  const pathParamsObj = useParams();
  console.log('path param', pathParamsObj);
  return <div>FriendProfileWithId</div>;
}

export default FriendProfileWithIdPage;
