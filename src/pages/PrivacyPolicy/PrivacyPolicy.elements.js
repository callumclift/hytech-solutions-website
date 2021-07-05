import styled from 'styled-components';

export const MainContent = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.h1`
  color: #242424;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const SubHeading = styled.h2`
  color: #242424;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const Paragraph = styled.p`
  color: #242424;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const EmailLink = styled.a`
  color: #d59c51;
`;





