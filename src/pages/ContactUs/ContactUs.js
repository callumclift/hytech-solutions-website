import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm'
import {
  MainContent,
  ContentWrapper,
  Heading,
  Subtitle
} from './ContactUs.elements';

function ContactUs() {
  return (
    <>
      <MainContent>
        <ContentWrapper>
          <Heading>Contact Us</Heading>
          <Subtitle lightTextDesc={true}>{'Contact us using the below form and we will get back to you as soon as possible.'}</Subtitle>
            <ContactForm organisation ={true}/> 
        </ContentWrapper>
      </MainContent>
    </>
  );
}

export default ContactUs;
