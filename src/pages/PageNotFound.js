import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PageNotFoundSVG } from '../assets/icons/page-not-found.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 14px;
`;

const Subtitle = styled.p`
  font-size: 18px;
`;

const StyledSVG = styled(PageNotFoundSVG)`
  width: 200px;
  height: 200px;
  fill: var(--steel-teal);
`;

const PageNotFound = () => {
  return (
    <Container>
      <ContentContainer>
        <StyledSVG />
        <TextContainer>
          <Title>Page not found</Title>
          <Subtitle>Sorry, the page you requested could not be found.</Subtitle>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default PageNotFound;
