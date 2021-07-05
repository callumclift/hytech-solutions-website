import React from 'react';
import { InfoSectionCaseStudy } from '../../components';
import { testimonialOne } from '../../components/InfoSection/Data';


function Testimonials() {
  return (
    <>
      <InfoSectionCaseStudy {...testimonialOne} />
    </>
  );
}

export default Testimonials;
