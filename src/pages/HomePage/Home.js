import React from 'react';
import { hytechGas, unlimitedForms, gPhillps, jobDirections, shareForms } from '../../components/InfoSection/Data';
import { InfoSection, InfoSectionTestimony } from '../../components';
import Products from '../Products/Products';

function Home() {
  return (
    <>
      <InfoSection {...hytechGas} />
      <InfoSectionTestimony {...gPhillps} />
      <InfoSection {...unlimitedForms} />
      <Products />
      <InfoSection {...jobDirections} />
      <InfoSection {...shareForms} />
    </>
  );
}

export default Home;
