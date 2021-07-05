import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TestimonialsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TestimonialsHeading = styled.h1`
  color: #242424;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const TestimonialsCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 800px;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;

    &:hover {
      transform: none;
    }
  }
`;

export const TestimonialsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const TestimonialsCardCost = styled.h4`
  font-size: 40px;
`;

export const TestimonialsCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const TestimonialsCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const TestimonialsCardFeature = styled.li`
  margin-bottom: 10px;
`;


export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#fc7e4d' : '#1c2237')};
`;