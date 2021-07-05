import React from 'react';
import CompanyLogo from '../../images/companyLogo.png'

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterFileLink,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  CompanyImage
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/testimonials'>Testimonials</FooterLink>
            <FooterLink to='/privacy-policy'>Privacy Policy</FooterLink>
            <FooterFileLink href='../../assets/Hytech_Gas-User_Guide.pdf'>User Guide</FooterFileLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact</FooterLinkTitle>
            <FooterLink to='/contact-us'>Contact Us</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Products</FooterLinkTitle>
            <FooterLink to='/products'>HytechGas</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='https://instagram.com/hytechgas?igshid=1sb472pmmd4w8'>Instagram</FooterLink>
            <FooterLink to='https://m.facebook.com/hytechsolutions/'>Facebook</FooterLink>
            <FooterLink to='https://twitter.com/SolutionsHytech/'>Twitter</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <CompanyImage src={CompanyLogo} alt="HytechSolutions"/>
          </SocialLogo>
          <WebsiteRights>HYTECH SOLUTIONS © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='https://m.facebook.com/hytechsolutions/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://instagram.com/hytechgas?igshid=1sb472pmmd4w8' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://twitter.com/SolutionsHytech/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
