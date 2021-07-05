import React from 'react';
import { InfoSection } from '../../components';
import { unlimitedForms, pendingForms, shareForms, jobDirections, jobsCalendar, generateInvoices } from '../../components/InfoSection/Data';

function Services() {
  return (
    <>
      <InfoSection {...unlimitedForms} />
      <InfoSection {...pendingForms} />
      <InfoSection {...jobsCalendar} />
      <InfoSection {...generateInvoices} />
      <InfoSection {...jobDirections} />
      <InfoSection {...shareForms} />

    </>
  );
}

export default Services;
