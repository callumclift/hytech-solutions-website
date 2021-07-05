import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsSection = styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ProductsWrapper = styled.div`
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

export const ProductsHeading = styled.h1`
  color: #242424;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ProductsContainer = styled.div`
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

export const ProductsCard = styled(Link)`
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

export const ProductsCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ProductsCardCost = styled.h4`
  font-size: 40px;
`;

export const ProductsCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ProductsCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const ProductsCardFeature = styled.li`
  margin-bottom: 10px;
`;


export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#d59c51' : '#1c2237')};
`;

export const ProductLogo = styled.img`
  width: 300px;
  height: 90px;
`;

