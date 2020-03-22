import React from 'react';
import Topbar from '../components/general/topBar';
import { useUserInfo } from '../provider/authentication-provider';
import SmartFeed from '../components/feed';
import styled from 'styled-components';

const FeedScreen: React.FC = () => {
  const { username } = useUserInfo();
  return (
    <Container>
      <Topbar location="Feed" user={username} />
      <SmartFeed />
    </Container>
  );
};

export default FeedScreen;

const Container = styled.div`
  & > * {
    margin-bottom: 16px;
  }

  & > :last-child {
    margin: 0 24px;
  }
`;
